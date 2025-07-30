const express = require("express");
const router = express.Router();
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("../utilities");

// router.post("/register", async (req, res) => {
//   try {
//     const newPassword = await bcrypt.hash(req.body.password, 6);
//     await User.create({
//       name: req.body.name,
//       email: req.body.email,
//       password: newPassword,
//     });

//     res.status(200).send("User added to the database");
//   } catch (err) {
//     res.json({ status: "error", error: "Duplicated email" });
//   }
// });

// router.post("/login", async (req, res) => {
//   const user = await User.findOne({
//     email: req.body.email,
//   });

//   if (!user) {
//     return res.json({ status: "error", error: "Invalid Email" });
//   }
//   const isPasswordValid = await bcrypt.compare(
//     req.body.password,
//     user.password
//   );

//   if (isPasswordValid) {
//     const token = jwt.sign(
//       {
//         name: user.name,
//         email: user.email,
//       },
//       "secret123"
//     );
//     return res.json({ status: "Success", user: token });
//   } else {
//     return res.json({ status: "error", error: "Invalid Password", user: false });
//   }
// });

router.post("/register", async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName) {
    return res
      .status(400)
      .json({ error: true, message: "Full Name is Required " });
  }

  if (!email) {
    return res.status(400).json({ error: true, message: "Email is required" });
  }

  if (!password) {
    return res
      .status(400)
      .json({ error: true, message: "Password is required" });
  }

  const isUser = await User.findOne({ email: email });

  if (isUser) {
    return res.json({
      error: true,
      message: "User already exist",
    });
  }

  const user = new User({
    fullName,
    email,
    password,
  });

  await user.save();

  const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "36000m",
  });

  return res.json({
    error: false,
    user,
    accessToken,
    message: "Registration Successful",
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is Required " });
  }
  if (!password) {
    return res.status(400).json({ message: "Password is Required" });
  }

  const userInfo = await User.findOne({ email: email });

  if (!userInfo) {
    return res.status(400).json({ message: "User not found" });
  }

  if (userInfo.email == email && userInfo.password == password) {
    const user = { user: userInfo };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "36000m",
    });
    return res.json({
      error: false,
      message: "Login Successful",
      email,
      accessToken,
    });
  } else {
    return res.status(400).json({
      error: true,
      message: "Invalid Credentials",
    });
  }
});

router.get("/get-user", authenticateToken, async (req, res) => {
  const { user } = req.user;

  const isUser = await User.findOne({ _id: user._id });

  if (!isUser) {
    return res.sendStatus(401);
  }

  return res.json({
    user: {
      fullName: isUser.fullName,
      email: isUser.email,
      _id: isUser._id,
      createdOn: isUser.createdOn,
    },
    message: "User fetched",
  });
});

module.exports = router;
