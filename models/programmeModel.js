const mongoose = require("mongoose");
const db = require("../db/DBConnection");

const ProgrammeSchema = new mongoose.Schema({
  programme: String,
  department:String

},  {
    timestamps:true
  });

module.exports = db.model("Programme", ProgrammeSchema);
