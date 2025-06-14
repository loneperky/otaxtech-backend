import express from 'express';
import cors from 'cors';
import connectDB from './models/connectDB';
import router from './routes/addUser'
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174","https://portfolio-swart-psi-80.vercel.app/"], // Adjust to match frontend URLs
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Include this if you're dealing with cookies or auth headers
  })
);
app.use("/api",router)
app.get('/', (_req, res) => {
  res.send('Hello TypeScript + Express!');
});

connectDB()

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
