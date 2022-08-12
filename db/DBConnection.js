const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/Result?authSource=admin";

const db = mongoose.createConnection(MONGO_URL, {
  serverSelectionTimeoutMS: 5000,
});

module.exports = db;
