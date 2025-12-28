import express from "express";
import {
  createNotes,
  deleteNotes,
  readNotes,
  readSingleNote,
  updateNotes,
} from "../controllers/notes.controller.js";
const router = express.Router();

//  Read all
router.get("/notes", readNotes);
//  Read by id or single note
router.get("/note/:id", readSingleNote);
// create
router.post("/notes", createNotes);
// update
router.put("/notes/:id", updateNotes);
// delete
router.delete("/notes/:id", deleteNotes);

export default router;
