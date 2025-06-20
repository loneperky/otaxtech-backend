import express, { Request, Response } from 'express'
import UserDB from '../models/userDB';
import { sendWelcomeEmail } from '../config/mailer';
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router();

interface messg {
  fullname: string,
  email: string,
  message: string,
  subject: string
}

router.post("/contact", async (req: any, res: any) => {
  const { fullname, email, message, subject } = req.body as messg;
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
    await sendWelcomeEmail(email, fullname)
    await newUser.save()

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }

});

export default router;