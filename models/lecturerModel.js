const mongoose = require("mongoose");
const db = require("../db/DBConnection");

const LecturerSchema = new mongoose.Schema(
  {
    profile: String,
    professionalID: {
      type: String,
      unique: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    gender: String,
    dob: String,
    email: {
      type: String,
      lowercase: true,
    },
    address: String,
    telephoneNo: String,
    department: String,
  },
  {
    timestamps: true,
  }
);
module.exports = db.model("Lecturer", LecturerSchema);
