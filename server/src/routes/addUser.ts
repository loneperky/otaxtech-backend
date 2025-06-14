import express from 'express';
import UserDB from '../models/userDB';

const router = express.Router();

router.post("/register", (req: any, res: any) => {
  const { fullname, email, message,subject } = req.body;
  if (!fullname || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const newUser = new UserDB({
      fullname,
      email,
      message,
      subject
    });
    newUser.save()
    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }

});

export default router;