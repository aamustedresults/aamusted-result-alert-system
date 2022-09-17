const db = require("../db/DBConnection");
const mongoose = require("mongoose");

const FacultySchema = new mongoose.Schema(
  {
    faculty: String,
  },
  {
    timestamps: true,
  }
);

module.exports = db.model("Faculty", FacultySchema);
