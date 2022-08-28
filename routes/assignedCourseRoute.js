const router = require("express").Router();
const AsyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const _ = require("lodash");
const apiCache = require("apicache");

const AssignedCourse = require("../models/assignedCourseModel");

const cache = apiCache.middleware;

//@GET courses
router.get(
  "/",
  AsyncHandler(async (req, res) => {
    const courses = await AssignedCourse.find();
    res.json(courses);
  })
);

//@GET course by id
router.get(
  "/:lecturerID",
  AsyncHandler(async (req, res) => {
    const professionalID = req.params.lecturerID;
    const course = await AssignedCourse.find({ professionalID });
    res.json(course);
  })
);

//@GET course by id
router.get(
  "/all/:programme",
  AsyncHandler(async (req, res) => {
    const programme = req.params.programme;

    const course = await AssignedCourse.find({ programme });

    if (_.isEmpty(course)) {
      return res.json({
        error: true,
        message: "No Such course exits",
      });
    }
    res.json(course);
  })
);

//@POST courses
router.post(
  "/",
  AsyncHandler(async (req, res) => {
    const newCourse = req.body;
    const course = await AssignedCourse.create(newCourse);
    res.json(course);
  })
);

//@PUT courses
router.put(
  "/",
  AsyncHandler(async (req, res) => {
    const id = req.body.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.json({
        error: true,
        message: "Invalid course id",
      });
    }

    const modifiedCourse = req.body;
    const updatedCourse = await AssignedCourse.findByIdAndUpdate(
      id,
      modifiedCourse,
      {
        upsert: true,
        new: true,
      }
    );
    res.json(updatedCourse);
  })
);

//@DELETE course
router.delete(
  "/",
  AsyncHandler(async (req, res) => {
    const id = req.query.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.json({
        error: true,
        message: "Invalid course id",
      });
    }

    const course = await AssignedCourse.findByIdAndRemove(id);
    if (course === null) {
      return res.json({
        error: true,
        mesaage: "No course with such id",
      });
    }
    res.json(course);
  })
);

module.exports = router;
