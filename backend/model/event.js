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

// const mongoose = require("mongoose");

// const event = new mongoose.Schema({
//   userId: { type: String, required: true },
//   title: { type: String, required: true },
//   content: { type: String, required: true },
//   tags: { type: [String], default: [] },
//   createdOn: { type: Date, required: true },
//   isPinned: { type: Boolean, default: false },
// });

// const getEventModel = (dateString) => {
//   const collectionName = `event_${dateString.replace(/\//g, "_")}`;
//   return mongoose.model(collectionName, event, collectionName)
// }

// module.exports = getEventModel;
