import mongoose from "mongoose";
import express from "express";

const router = express.Router();
const User = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const UserDB = mongoose.model("UserDB", User);
export default UserDB;