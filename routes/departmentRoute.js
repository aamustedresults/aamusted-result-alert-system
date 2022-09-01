const router = require("express").Router();
const AsyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const _ = require("lodash");

const Department = require("../models/departmentModel");

//@GET departments
router.get(
  "/",
  AsyncHandler(async (req, res) => {
    const departments = await Department.find({});
    res.json(departments);
  })
);
//@GET department by id
router.get(
  "/:id",
  AsyncHandler(async (req, res) => {
    const id = req.params.id;
    //id)
  
      if (!mongoose.isValidObjectId(id)) {
        return res.json({
          error: true,
          message: "Invalid department id",
        });
      }
  const  department = await Department.findById(id);
   
    if (_.isEmpty(department)) {
      return res.json({
        error: true,
        message: "No Such department exits",
      });
    }
    res.json(department);
  })
);
//@POST departments
router.post(
  "/",
  AsyncHandler(async (req, res) => {
    const newDepartment = req.body;
    const department = await Department.create(newDepartment);
    res.json(department);
  })
);

//@PUT departments
router.put(
  "/",
  AsyncHandler(async (req, res) => {
    const id = req.body.id;
    //req.body)
    if (!mongoose.isValidObjectId(id)) {
      return res.json({
        error: true,
        message: "Invalid department id",
      });
    }
    
    const modifiedDepartment = req.body;
    const updatedDepartment = await Department.findByIdAndUpdate(
      id,
      modifiedDepartment,
      {
        upsert: true,
        new: true,
      }
    );
    res.json(updatedDepartment);
  })
);

//@DELETE department
router.delete(
  "/",
  AsyncHandler(async (req, res) => {
    const id = req.query.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.json({
        error: true,
        message: "Invalid department id",
      });
    }
    //id);
    const department = await Department.findByIdAndRemove(id);
    if (department ===null) {
      return res.json({
        error: true,
        mesaage: "No department with such id",
      });
    }
    res.json(department);
  })
);

module.exports = router;
