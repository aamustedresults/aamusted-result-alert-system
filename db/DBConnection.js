const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/Result";

const db = mongoose.createConnection(MONGO_URL);

module.exports = db;
