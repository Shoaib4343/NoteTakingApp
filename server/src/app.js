import express from "express";
import noteRoutes from "./routes/notes.routes.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();

connectDB();
console.log(process.env.MONGO_URI);
const app = express();

// ✅ Parse JSON request body
app.use(express.json()); // <- this is required

// routes
app.use("/api/vi", noteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
