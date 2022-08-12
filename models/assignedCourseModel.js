const mongoose = require("mongoose");
const db = require("../db/DBConnection");

const AssignedCourseSchema = new mongoose.Schema(
  {
    professionalID: String,
    programme: String,
    code: String,
    course: Object,
  },
  {
    timestamps: true,
  }
);

module.exports = db.model("AssignedCourse", AssignedCourseSchema);
