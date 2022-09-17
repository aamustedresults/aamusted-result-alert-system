const router = require("express").Router();
const AsyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const _ = require("lodash");

const Faculty = require("../models/facultyModel");

//@GET facultys
router.get(
  "/",
  AsyncHandler(async (req, res) => {
    const faculties = await Faculty.find({});
    res.json(faculties);
  })
);
//@GET faculty by id
router.get(
  "/:id",
  AsyncHandler(async (req, res) => {
    const id = req.params.id;
    //id)

    if (!mongoose.isValidObjectId(id)) {
      return res.json({
        error: true,
        message: "Invalid faculty id",
      });
    }
    const faculty = await Faculty.findById(id);

    if (_.isEmpty(faculty)) {
      return res.json({
        error: true,
        message: "No Such faculty exits",
      });
    }
    res.json(faculty);
  })
);
//@POST facultys
router.post(
  "/",
  AsyncHandler(async (req, res) => {
    const newFaculty = req.body;
    const faculty = await Faculty.create(newFaculty);
    res.json(faculty);
  })
);

//@PUT facultys
router.put(
  "/",
  AsyncHandler(async (req, res) => {
    const id = req.body.id;
    //req.body)
    if (!mongoose.isValidObjectId(id)) {
      return res.json({
        error: true,
        message: "Invalid faculty id",
      });
    }

    const modifiedFaculty = req.body;
    const updatedFaculty = await Faculty.findByIdAndUpdate(
      id,
      modifiedFaculty,
      {
        upsert: true,
        new: true,
      }
    );
    res.json(updatedFaculty);
  })
);

//@DELETE faculty
router.delete(
  "/",
  AsyncHandler(async (req, res) => {
    const id = req.query.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.json({
        error: true,
        message: "Invalid faculty id",
      });
    }
    //id);
    const faculty = await Faculty.findByIdAndRemove(id);
    if (faculty === null) {
      return res.json({
        error: true,
        mesaage: "No faculty with such id",
      });
    }
    res.json(faculty);
  })
);

module.exports = router;
