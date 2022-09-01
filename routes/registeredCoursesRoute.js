const router = require("express").Router();
const AsyncHandler = require("express-async-handler");
const _ = require("lodash");

const Register = require("../models/registeredCoursesModel");
const Result = require("../models/resultModel");
const Student = require("../models/studentModel");
const LecturerCourse = require("../models/lecturerCourseModel");
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
    const courses = await Register.find({})
      .where("academicYear")
      .equals(academicYear)
      .where("level")
      .equals(level);

    const modifiedCourse = courses.map(async (registeredCourse) => {
      const results = await Result.find({
        indexNumber: registeredCourse.indexNumber,
      })
        .where("academicYear")
        .equals(academicYear)
        .where("level")
        .equals(level)
        .where("semester")
        .equals(semester)
        .select("results")
        .exec();

      let filteredResults;
      if (results) {
        filteredResults = results.map(({ results }) => {
          const re = results.filter(
            (result) => result.course.label === nCourse
          );
          return re[0];
        });
      }

      const filteredCourses = registeredCourse.courses.filter(
        ({ course }) =>
          course.professionalID === professionalID && course.label === nCourse
      );

      return {
        _id: registeredCourse._id,
        indexNumber: registeredCourse.indexNumber,
        academicYear: registeredCourse.academicYear,
        programme: registeredCourse.programme,
        level: registeredCourse.level,
        semester: registeredCourse.semester,
        courses: filteredCourses[0],
        results: results !== undefined ? filteredResults[0] : [],
      };
    });
    Promise.all(modifiedCourse).then((data) => {
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
      // indexNumber: indexNumber,
      // level: newCourse.level,
      // semester: Number(newCourse.semester),

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
      } else {
        course = await Register.create({ ...newCourse, indexNumber });
        const lecturerCourses = await LecturerCourse.find({})
          .where("academicYear")
          .equals(newCourse.academicYear)
          .where("level")
          .equals(newCourse.level)
          .where("semester")
          .equals(newCourse.semester)
          .where("course")
          .equals(newCourse.courses[0].course.label);

        if (_.isEmpty(lecturerCourses)) {
          const lec = await LecturerCourse.create({
            academicYear: newCourse.academicYear,
            programme: newCourse.programme,
            level: newCourse.level,
            semester: newCourse.semester,
            courseId: newCourse.courses[0].course.id,
            course: newCourse.courses[0].course.label,
            professionalID: newCourse.courses[0].course.professionalID,
          });
          // //lec);
        }
      }
      return course;
    }

    Promise.all(addStudentIndexNumber).then(() => {
      res.status(201).json(course);
    });
  })
);

module.exports = router;
