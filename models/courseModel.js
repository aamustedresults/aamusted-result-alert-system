const mongoose = require("mongoose");
const db = require("../db/DBConnection");

const CourseSchema = new mongoose.Schema(
  {
    code: String,
    course: String,
    programme: String,
  },
  {
    timestamps: true,
  }
);

module.exports = db.model("Course", CourseSchema);
