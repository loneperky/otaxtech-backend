import mongoose from "mongoose";

// Define the schema
const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  message: { type: String, required: true },
  subject: { type: String }, // Add this if you want to store subject too
  createdAt: { type: Date, default: Date.now },
});

// Create the model
const UserDB = mongoose.model("User", userSchema); // Collection will be `users`

export default UserDB;
