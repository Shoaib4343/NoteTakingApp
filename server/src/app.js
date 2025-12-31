import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import noteRoutes from "./routes/notes.routes.js";
import connectDB from "./config/db.js";


dotenv.config();
connectDB();

const app = express();

// ✅ Parse JSON request body
app.use(express.json()); // <- this is required
app.use(cors());

// routes
app.use("/api/vi", noteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
