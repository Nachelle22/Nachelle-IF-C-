import express from "express";
import allRoutes from "./routes/api.js";
import cors from "cors";

const app = express();

// FRONTEND_URL bisa diisi beberapa origin dipisah koma, misal:
// https://fe-teori15.vercel.app,http://localhost:5173
const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(",").map((origin) => origin.trim())
  : "*";

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ success: true, message: "Backend teori15 is running" });
});

app.use("/api", allRoutes);

export default app;
