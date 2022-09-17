const router = require("express").Router();
const AsyncHandler = require("express-async-handler");
const _ = require("lodash");

const Register = require("../models/registeredCoursesModel");
const Result = require("../models/resultModel");
const Student = require("../models/studentModel");
const LecturerCourse = require("../models/lecturerCourseModel");
const AssignedCourse = require("../models/assignedCourseModel");
//@GET registrered courses
router.get(
  "/",
  AsyncHandler(async (req, res) => {
    const indexNumber = req.query.indexNumber;
    const courses = await Register.find({ indexNumber });
    res.json(courses);
  })
);

//@GET registrered courses
router.get(
  "/:professionalID",
  AsyncHandler(async (req, res) => {
    const professionalID = req.params.professionalID;
    const academicYear = req.query.academicYear;
    const level = req.query.level;
    const nCourse = req.query.course;
    const semester = req.query.semester;
    const students = await Register.find({})
      .where("academicYear")
      .equals(academicYear)
      .where("level")
      .equals(level)
      .where("courses.label")
      .equals(nCourse)
      .where("courses.professionalID")
      .equals(professionalID)
      .select("indexNumber courses")
      .exec();

    const modifiedCourse = students.map(
      async ({ _id, indexNumber, courses }) => {
        const results = await Result.find({
          indexNumber,
          "results.course.label": nCourse,
        })
          .select("results")
          .exec();

        const filteredResults = results.map(({ results }) => {
          const re = results.filter(
            (result) => result.course.label === nCourse
          );
          return re[0];
        });

        const filteredCourses = courses.filter(
          ({ professionalID, label }) =>
            professionalID === professionalID && label === nCourse
        );

        return {
          _id,
          indexNumber,
          academicYear,
          level,
          semester,
          course: filteredCourses[0],
          result: filteredResults[0] || [],
        };
      }
    );
    Promise.all(modifiedCourse).then((data) => {
      console.log(data);
      res.json(data);
    });
  })
);

//@GET registrered courses
router.get(
  "/courseName/lecturer",
  AsyncHandler(async (req, res) => {
    const professionalID = req.query.professionalID;
    const course = req.query.courseName;
    const courses = await LecturerCourse.find({ professionalID, course });
    res.json(courses);
  })
);

//@GET registered Course
router.post(
  "/",
  AsyncHandler(async (req, res) => {
    let course;
    const newCourse = req.body;
    // //newCourse);

    const isExist = await Register.find({
      indexNumber: newCourse.indexNumber,
      level: newCourse.level,
      semester: Number(newCourse.semester),
    });
    if (!_.isEmpty(isExist)) {
      const id = isExist[0]._id;

      const newCourses = _.merge(
        _.keyBy(isExist[0].courses, "course.id"),
        _.keyBy(newCourse.courses, "course.id")
      );

      course = await Register.findByIdAndUpdate(
        id,
        {
          $set: {
            courses: _.values(newCourses),
          },
        },
        {
          upsert: true,
          new: true,
        }
      );

      return res.status(201).json(course);
    } else {
      course = await Register.create(newCourse);
      const ifCourseExists = await LecturerCourse.find({})
        .where("academicYear")
        .equals(newCourse.academicYear)
        .where("level")
        .equals(newCourse.level)
        .where("course")
        .equals(newCourse.courses[0].course.label);

      if (!ifCourseExists) {
        const lec = await LecturerCourse.create({
          academicYear: newCourse.academicYear,
          programme: newCourse.programme,
          level: newCourse.level,
          semester: newCourse.semester,
          courseId: newCourse.courses[0].course.id,
          course: newCourse.courses[0].course.label,
          professionalID: newCourse.courses[0].course.professionalID,
        });
        //lec);
      }
    }

    res.status(201).json(course);
  })
);

//@GET registered Course to all students
router.post(
  "/all",
  AsyncHandler(async (req, res) => {
    const to_be_assigned = req.body;
    const assigned_course = await AssignedCourse.create({
      professionalID: to_be_assigned.professionalID,
      programme: to_be_assigned.lecProgramme,
      course: to_be_assigned.course,
    });

    let course;
    const newCourse = req.body;

    const programme = newCourse.programme;
    const level = newCourse.level;

    const students = await Student.find({})
      .where("programme")
      .equals(programme)
      .where("level")
      .equals(level)
      .select("indexNumber")
      .exec();
    // //students);
    const addStudentIndexNumber = students.map(async ({ indexNumber }) => {
      return await registerMe(newCourse, indexNumber);
    });

    async function registerMe(newCourse, indexNumber) {
      const isExist = await Register.find({})
        .where("indexNumber")
        .equals(indexNumber)
        .where("level")
        .equals(newCourse.level)
        .where("semester")
        .equals(Number(newCourse.semester))
        .exec();

      //isExist);
      //"-------------------------------------------");
      if (isExist.length !== 0) {
        //"exitst");
        const id = isExist[0]._id;

        const newCourses = _.merge(
          _.keyBy(isExist[0].courses, "id"),
          _.keyBy(newCourse.courses, "id")
        );

        course = await Register.findByIdAndUpdate(
          id,
          {
            $set: {
              courses: _.values(newCourses),
            },
          },
          {
            upsert: true,
            new: true,
          }
        );
      } else {
        course = await Register.create({ ...newCourse, indexNumber });
      }

      const lecturerCourses = await LecturerCourse.find({})

        .where("academicYear")
        .equals(newCourse.academicYear)
        .where("level")
        .equals(newCourse.level)
        .where("semester")
        .equals(Number(newCourse.semester))
        .where("course")
        .equals(newCourse.course.label);

      if (_.isEmpty(lecturerCourses)) {
        const lec = await LecturerCourse.create({
          academicYear: newCourse.academicYear,
          programme: newCourse.lecProgramme,
          level: newCourse.level,
          semester: newCourse.semester,
          courseId: newCourse.course.id,
          course: newCourse.course.label,
          professionalID: newCourse.professionalID,
        });
      }

      return course;
    }

    Promise.all(addStudentIndexNumber).then(() => {
      res.status(201).json(course);
    });
  })
);

module.exports = router;
