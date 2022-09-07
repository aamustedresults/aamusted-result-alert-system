const router = require("express").Router();
const AsyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const multer = require("multer");
const _ = require("lodash");
const sendMail = require("../config/mail");
const sendSMS = require("../config/sms");
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

    let result;
    const isExist = await Result.find({
      indexNumber: newResult.indexNumber,
      level: newResult.level,
      semester: Number(newResult.semester),
    });
    if (!_.isEmpty(isExist)) {
      const id = isExist[0]._id;
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

//publish individual results
router.post(
  "/publish",
  AsyncHandler(async (req, res) => {
    const indexNumber = req.query.indexNumber;
    const student = await Student.find({ indexNumber });

    if (!_.isEmpty(student)) {
      const result = await Result.find({ indexNumber });

      if (process.env.NODE_ENV === "production") {
        await sendMail(req.body.html, student[0].email);

        const smsMessage = `Dear ${student[0].fullname},
your end of semester results have been published into your portal and email.
Thank you!!!`;
        await sendSMS(smsMessage, student[0].telephoneNo);
      }

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

//publish all students results
router.post(
  "/send",
  AsyncHandler(async (req, res) => {
    const emailInfoList = req.body;

    const response = emailInfoList.map(async (emailInfo) => {
      if (process.env.NODE_ENV === "production") {
        await sendMail(emailInfo.htmlText, emailInfo.email);
        const smsMessage = `Dear ${emailInfo.fullname},
      your end of semester results have been published into your portal and email.
      Thank you!!!`;
        await sendSMS(smsMessage, emailInfo.telephoneNo);
      }
      return emailInfo.indexNumber;
    });

    Promise.all(response).then((data) => {
      res.json(data?.length);
    });
  })
);

router.post(
  "/generate",
  upload.array("result", 10),
  AsyncHandler(async (req, res) => {
    const indexNumbers = req.body.indexNumber;

    //req.body);
    //req.files);
  })
);

module.exports = router;
