const mongoose = require("mongoose");

const event = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: { type: [String], default: [] },
  isPinned: { type: Boolean, default: false },
  userId: { type: String, required: true },
  createdOn: { type: String, required: true },
  //createdOn: { type: Date, default: new Date().getTime() },
});

const Event = mongoose.model("events", event);

module.exports = Event;
