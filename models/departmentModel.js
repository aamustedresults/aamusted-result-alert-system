const db = require("../db/DBConnection");
const mongoose = require("mongoose");

const DeparmentSchema = new mongoose.Schema(
  {
    faculty: String,
    department: String,
  },
  {
    timestamps: true,
  }
);

module.exports = db.model("Department", DeparmentSchema);
