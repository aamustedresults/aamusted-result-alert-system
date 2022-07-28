const router = require("express").Router();
const AsyncHandler = require("express-async-handler");
const _ = require("lodash");

const Register = require("../models/registeredCoursesModel");

//@GET registrered courses
router.get(
  "/",
  AsyncHandler(async (req, res) => {
    const indexNumber = req.query.indexNumber;
    const courses = await Register.find({ indexNumber });
    res.json(courses);
  })
);

//@GET registered Course
router.post(
  "/",
  AsyncHandler(async (req, res) => {
    let course;
    const newCourse = req.body;

    const isExist = await Register.find({
      indexNumber: newCourse.indexNumber,
      level: newCourse.level,
      semester: Number(newCourse.semester),
    });
    if (!_.isEmpty(isExist)) {
      const id = isExist[0]._id;

      // const newCourses = _.unionBy(
      //   isExist[0].courses,
      //   newCourse.courses,
      //   "course.id"
      // );
      const newCourses=_.merge(_.keyBy(isExist[0].courses,"course.id"),_.keyBy(newCourse.courses,"course.id"));

    

      course = await Register.findByIdAndUpdate(
        id,
        {
          $set: {
            courses:_.values(newCourses),
          },
        },
        {
          upsert: true,
          new: true,
        }
      );

      return res.status(201).json(course);
    }

    course = await Register.create(newCourse);

    res.status(201).json(course);
  })
);

module.exports = router;
