const express = require("express");
const router = express.Router();
const Event = require("../model/event");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("../utilities");

// Add new event for User
router.post("/new-event", authenticateToken, async (req, res) => {
  const { title, content, tags, createdOn } = req.body;
  const { user } = req.user;

  if (!title) {
    return res.status(400).json({ error: true, message: "Title is required" });
  }
  if (!content) {
    return res
      .status(400)
      .json({ error: true, message: "Content is required" });
  }

  if (!createdOn) {
    return res.status(400).json({ error: true, message: "Date is required" });
  }

  try {
    const event = new Event({
      title,
      content,
      tags: tags || [],
      userId: user._id,
      createdOn,
    });
    await event.save();

    return res.json({
      error: false,
      event,
      message: "Event added successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: "Internal Server Error",
    });
  }
});

// Edit Event for User
router.put("/edit-event/:eventId", authenticateToken, async (req, res) => {
  const eventId = req.params.eventId;
  const { title, content, tags, isPinned, createdOn } = req.body;
  const { user } = req.user;

  if (!title && !content && !tags && !createdOn) {
    return res
      .status(400)
      .json({ error: true, message: "No changes provided" });
  }

  try {
    const event = await Event.findOne({ _id: eventId, userId: user._id });

    if (!event) {
      return res.status(404).json({ error: true, message: "Note not found " });
    }

    if (title) event.title = title;
    if (content) event.content = content;
    if (tags) event.tags = tags;
    if (isPinned) event.isPinned = isPinned;
    if (createdOn) event.createdOn = createdOn;

    await event.save();

    return res.json({
      error: false,
      event,
      message: "Note updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: "Internal Server Error",
    });
  }
});

// Get All Events for User
router.get("/get-events", authenticateToken, async (req, res) => {
  const { user } = req.user;

  try {
    const events = await Event.find({ userId: user._id }).sort({
      isPinned: -1,
    });

    return res.json({
      error: false,
      events,
      message: "All notes retrieved successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: "Internal Server Error",
    });
  }
});

// Delete Event for User
router.delete("/delete-event/:eventId", authenticateToken, async (req, res) => {
  const eventId = req.params.eventId;
  const { user } = req.user;

  try {
    const event = await Event.findOne({ _id: eventId, userId: user._id });

    if (!event) {
      return res.status(404).json({ error: true, message: "Event not found" });
    }

    await Event.deleteOne({ _id: eventId, userId: user._id });

    return res.json({
      error: false,
      message: "Event deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: "Internal Server Error",
    });
  }
});

router.put(
  "/update-event-pinned/:eventId",
  authenticateToken,
  async (req, res) => {
    const eventId = req.params.eventId;
    const { isPinned } = req.body;
    const { user } = req.user;

    try {
      const event = await Event.findOne({ _id: eventId, userId: user._id });

      if (!event) {
        return res
          .status(404)
          .json({ error: true, message: "Event not found" });
      }

      event.isPinned = isPinned;

      await event.save();

      return res.json({
        error: false,
        event,
        message: "Event Pinned updated successfully",
      });
    } catch (error) {
      return res.status(500).json({
        error: true,
        message: "Internal Server Error",
      });
    }
  }
);

module.exports = router;
