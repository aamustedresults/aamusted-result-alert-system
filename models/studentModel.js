const mongoose = require("mongoose");
const db = require("../db/DBConnection");

const StudentSchema = new mongoose.Schema(
  {
    profile: String,
    indexNumber: {
      type: String,
      unique: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    username: {
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
    programme: String,
    level: String,
  },
  {
    timestamps: true,
  }
);
module.exports = db.model("Student", StudentSchema);
