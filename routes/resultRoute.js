const router = require("express").Router();
const AsyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const multer = require("multer");
const _ = require("lodash");
const sendMail = require("../config/mail");
const Result = require("../models/resultModel");
const Student = require("../models/studentModel");

const { jsPDF } = require("jspdf"); // will automatically load the node version

const Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./results");
  },
  filename: function (req, file, cb) {
    const ext = file?.originalname?.split(".")[1];
    cb(null, `${req.body.indexNumber}.${ext}`);
  },
});
const upload = multer({ storage: Storage });

//@GET result by id
router.get(
  "/",
  AsyncHandler(async (req, res) => {
    const indexNumber = req.query.indexNumber;

    const result = await Result.find({ indexNumber });

    if (_.isEmpty(result)) {
      return res.json([]);
    }
    res.json(result);
  })
);
//@POST results
router.post(
  "/",
  AsyncHandler(async (req, res) => {
    const newResult = req.body;
    // console.log(newResult);

    let result;
    const isExist = await Result.find({
      indexNumber: newResult.indexNumber,
      level: newResult.level,
      semester: Number(newResult.semester),
    });
    if (!_.isEmpty(isExist)) {
      console.log("is exists");
      const id = isExist[0]._id;

      // const newResults = _.unionBy(
      //   isExist[0].results,
      //   newResult.results,
      //   "course.id"
      // );
      // console.log(newResults);

      const newResults = _.merge(
        _.keyBy(isExist[0].results, "course.id"),
        _.keyBy(newResult.results, "course.id")
      );

      result = await Result.findByIdAndUpdate(
        id,
        {
          $set: {
            results: _.values(newResults),
          },
        },
        {
          upsert: true,
          new: true,
        }
      );

      return res.status(201).json(result);
    }

    result = await Result.create(newResult);
    res.json(result);
  })
);

//@PUT results
router.put(
  "/",
  AsyncHandler(async (req, res) => {
    const indexNumber = req.body.indexNumber;

    const modifiedResult = req.body;
    const updatedResult = await Result.findOneAndUpdate(
      { indexNumber },
      modifiedResult,
      {
        upsert: true,
        new: true,
      }
    );
    res.json(updatedResult);
  })
);

router.post(
  "/publish",
  AsyncHandler(async (req, res) => {
    const indexNumber = req.query.indexNumber;
    const student = await Student.find({ indexNumber });

    if (!_.isEmpty(student)) {
      const result = await Result.find({ indexNumber });

      sendMail(req.body.html, student[0].email);
      res.json("Data sent");
    }
  })
);

router.post(
  "/publishAll",
  AsyncHandler(async (req, res) => {
    const indexNumbers = req.body.indexNumber;

    const students = indexNumbers.map(async (indexNumber) => {
      const student = await Student.find({ indexNumber });
      const result = await Result.find({ indexNumber });

      return {
        student: student[0],
        result: result === undefined ? [] : result,
      };
    });

    Promise.all(students).then((student) => {
      res.json(student);
    });
  })
);

router.post(
  "/send",
  AsyncHandler(async (req, res) => {
    const emailInfoList = req.body;

    const response = emailInfoList.map((emailInfo) => {
      sendMail(emailInfo.htmlText, emailInfo.email);
    });

    Promise.all(response).then(() => {
      res.json(response);
    });
  })
);

router.post(
  "/generate",
  upload.array("result", 10),
  AsyncHandler(async (req, res) => {
    const indexNumbers = req.body.indexNumber;

    console.log(req.body);
    console.log(req.files);
  })
);

module.exports = router;
