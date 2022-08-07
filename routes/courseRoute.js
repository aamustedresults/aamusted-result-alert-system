const router = require("express").Router();
const AsyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const _ = require("lodash");
const apiCache=require('apicache')

const Course = require("../models/courseModel");

const cache=apiCache.middleware;

//@GET courses
router.get(
  "/",
  cache("5 minutes"),
  AsyncHandler(async (req, res) => {
    const programme = req.query.programme;
    if (programme) {
      const courses = await Course.find({ programme });
      return res.json(courses);
    }
    const courses = await Course.find({});
    res.json(courses);
  })
);
//@GET course by id
router.get(
  "/:id",
  AsyncHandler(async (req, res) => {
    const id = req.params.id;
    console.log(id);

    if (!mongoose.isValidObjectId(id)) {
      return res.json({
        error: true,
        message: "Invalid course id",
      });
    }
    const course = await Course.findById(id);

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
    const course = await Course.create(newCourse);
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
    const updatedCourse = await Course.findByIdAndUpdate(id, modifiedCourse, {
      upsert: true,
      new: true,
    });
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

    const course = await Course.findByIdAndRemove(id);
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
