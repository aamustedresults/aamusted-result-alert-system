const db = require("../db/DBConnection");
const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  indexNumber: String,
  year: String,
  level: String,
  semester: Number,
  results: Array,
  
},{
    
        timestamps:true
      
});

module.exports = db.model("Result", ResultSchema);
