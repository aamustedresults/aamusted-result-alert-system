const db = require("../db/DBConnection");
const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = db.model("Token", TokenSchema);
