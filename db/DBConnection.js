const mongoose = require("mongoose");

const MONGO_URL_LOCAL = "mongodb://127.0.0.1:27017/Result";

const db = mongoose.createConnection(process.env.MONGO_URL);

module.exports = db;
