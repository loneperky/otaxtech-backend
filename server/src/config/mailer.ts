import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL_REAL as string,
    pass: process.env.USER_EMAIL_PASSWORD_REAL as string,
  },
});

export const sendWelcomeEmail = async (toEmail: string, user: string) => {
  const mailOptions = {
    from: `"OtaxTech 👨‍💻" <${process.env.USER_EMAIL_REAL}>`,
    to: toEmail,
    subject: "Welcome to OtaxTech!",
    html: `
      <h2>Hi there, ${user}!</h2>
      <p>Welcome to <strong>OtaxTech</strong> 👨‍💻 🎉</p>
      <p>We're happy to have you join us. Stay tuned for updates and awesome tech content!</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Welcome email sent to:", toEmail);
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw new Error("Email sending failed");
  }
};
