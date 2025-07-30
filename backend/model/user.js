const mongoose = require("mongoose");

const user = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdOn: { type: Date, default: new Date().getTime() },
});

const User = mongoose.model("users", user);

module.exports = User;
