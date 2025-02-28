import express from "express";
import userModal from "../modals/userModels.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Function to create a token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModal.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User Doesn't Exists" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "invalid password" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Route for user registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const exist = await userModal.findOne({ email });
    if (exist) {
      return res.json({ success: false, message: "User already exists" });
    }

    // Validate email and strong password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid email" });
    }
    if (password.length < 6) {
      return res.json({
        success: false,
        message: "Password must be at least 6 characters long",
      });
    }

    // Hash user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModal({ name, email, password: hashedPassword });
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Admin login

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign({ role: "admin", email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { loginUser, registerUser, adminLogin };
