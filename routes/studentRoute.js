const router = require("express").Router();
const AsyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const _ = require("lodash");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const Student = require("../models/studentModel");
const User = require("../models/userModel");
const sendMail=require('../config/mail')

const Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    const ext = file?.originalname?.split(".")[1];
    cb(null, `${req.query._up}.${ext}`);
  },
});
const upload = multer({ storage: Storage });

//@GET students
router.get(
  "/",
  AsyncHandler(async (req, res) => {
    const department = req.query.department || "";
    const programme = req.query.programme || "";
    const level = req.query.level || "";

    const students = await Student.find({});
    res.json(students);
  })
);
//@GET student by id
router.get(
  "/:id",
  AsyncHandler(async (req, res) => {
    const indexNumber = req.query.indexNumber;

    const student = await Student.find({ indexNumber });

    if (_.isEmpty(student)) {
      return res.json("No Such Student exits");
    }
    res.json(student[0]);
  })
);

//@POST students
router.post(
  "/",
  upload.single("profile"),
  AsyncHandler(async (req, res) => {
    const newStudent = req.body;
    newStudent.profile = req.file?.filename;

    const student = await Student.create(newStudent);
console.log(student)
    if (student) {
      const hashedPassword = await bcrypt.hash(student.indexNumber, 10);
      const user = await User.create({
        username: student.indexNumber,
        email: student.email,
        password: hashedPassword,
        role: "student",
      });


      if(user){
        const htmlText = `<div>
        <h2 style='color:#5aa7a7;text-decoration:underline;'>RESULTS SYSTEM</h2>
        <p>Dear ${student.fullname}, 
        <p>You have been enrolled successfully on the results system.
        Your username is <b style='text-decoration:underline;'> ${student.indexNumber}</b>, and  your default password is <b style='text-decoration:underline;'>${student.indexNumber}</b>.</p>
        <p> You can log on into the <i style='color:#5aa7a7;text-decoration:underline;'> setting page </i> of the system to change your password.</p>
        <p>Thank You !!!</p>
        </div>`;
        
            sendMail(htmlText);
      }
  

    }
 

    res.json(student);
  })
);

//@PUT students
router.put(
  "/",
  AsyncHandler(async (req, res) => {
    const id = req.body._id;

    if (!mongoose.isValidObjectId(id)) {
      return res.json({
        error: true,
        message: "Invalid Student id",
      });
    }

    const modifiedStudent = req.body;
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      modifiedStudent,
      {
        upsert: true,
        new: true,
      }
    );
    res.json(updatedStudent);
  })
);

//@PUT students
router.patch(
  "/",
  AsyncHandler(async (req, res) => {
    const updatedIndexNumbers = req.body;

    let response = [];
    updatedIndexNumbers.map(async (student) => {
      if (!mongoose.isValidObjectId(student.id)) {
        return res.json({
          error: true,
          message: "Invalid Student id",
        });
      }
      const updatedStudent = await Student.findByIdAndUpdate(
        student.id,
        { indexNumber: student.indexNumber },
        {
          new: true,
        }
      );

      response.push(updatedStudent);
    });

    res.json(response);
  })
);

//@DELETE student
router.delete(
  "/",
  AsyncHandler(async (req, res) => {
    const id = req.query.id;
    
    if (!mongoose.isValidObjectId(id)) {
      return res.json({
        error: true,
        message: "Invalid Student id",
      });
    }
    console.log(id);
    const student = await Student.findByIdAndRemove(id);
    if (student === null) {
      return res.json({
        error: true,
        mesaage: "No Student with such id",
      });
    }
    res.json(student);
  })
);

module.exports = router;
