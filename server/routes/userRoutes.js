import express from "express";
import User from "../models/User.js";

const router = express.Router();

/*
    POST : Create User
*/

router.post("/", async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const user = await User.create({
      name,
      email,
      phone,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/*
    GET : Fetch All Users
*/

router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;