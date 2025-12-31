// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import path from "path"

// import noteRoutes from "./routes/notes.routes.js";
// import connectDB from "./config/db.js";


// dotenv.config();
// connectDB();

// const app = express();
// const __dirname = path.resolve();

// // ✅ Parse JSON request body
// app.use(express.json()); // <- this is required
// if(process.env.NODE_ENV !== "production"){

//     app.use(cors());
// }

// // routes
// app.use("/api/vi", noteRoutes);
// app.use(express.static(path.join(__dirname,"../client/dist")))
// if(process.env.NODE_ENV === "production"){
//    app.get("/:path(*)", (req,res)=>{
//         res.sendFile(path.join(__dirname,"../client","dist","index.html"))
//     })
// }

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));















import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path"

import noteRoutes from "./routes/notes.routes.js";
import connectDB from "./config/db.js";


dotenv.config();
connectDB();

const app = express();
const __dirname = path.resolve();

// ✅ Parse JSON request body
app.use(express.json());

if(process.env.NODE_ENV !== "production"){
    app.use(cors());
}

// API routes
app.use("/api/vi", noteRoutes);

// Serve static files in production
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../client/dist")))
    
    // Use middleware instead of route for catch-all
    app.use((req, res) => {
        res.sendFile(path.join(__dirname, "../client", "dist", "index.html"))
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));