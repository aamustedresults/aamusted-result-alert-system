const db = require("../db/DBConnection");
const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema(
  {
    academicYear: String,
    programme: String,
    level: String,
    semester: Number,
    courseId: String,
    course: String,
    professionalID: String,
  },
  {
    timestamps: true,
  }
);

module.exports = db.model("LecturerCourse", ResultSchema);
