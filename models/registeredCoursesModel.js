const db = require("../db/DBConnection");
const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  indexNumber: String,
  academicYear: String,
  programme: String,
  level: String,
  semester: Number,
  courses: Array,
  
},{
    
        timestamps:true
      
});

module.exports = db.model("Register", ResultSchema);
