const mongoose = require("mongoose");

let MONGO_URL;

if (process.env.NODE_ENV !== "production") {
  MONGO_URL = process.env.MONGO_URL_LOCAL;
} else {
  MONGO_URL = process.env.MONGO_URL;
}

const db = mongoose.createConnection(MONGO_URL);

module.exports = db;
