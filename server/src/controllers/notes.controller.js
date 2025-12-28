import Note from "../models/Note.js";

// read notes
export const readNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "Notes fetched successfully",
      notes,
    });
  } catch (error) {
    console.error("Error while reading notes:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch notes",
    });
  }
};

// readSingleNote
export const readSingleNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);

    if (!note)
      return res.status(404).json({
        success: false,
        message: "Error while fetching single note",
      });

    res.status(200).json({
      success: true,
      message: "Fetching single note successfully.",
      note,
    });
  } catch (error) {
    console.log("Error while fetching single note.", error);
    res.status(500).json({
      success: false,
      message: "Error while fetching single note.",
      error: error.message,
    });
  }
};

// create notes
export const createNotes = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and Description are required.",
      });
    }

    const note = new Note({ title, description });
    const saveNote = await note.save();

    res.status(201).json({
      success: true,
      message: "Note created successfully.",
      saveNote,
    });
  } catch (error) {
    console.error("Error while creating note:", error);
    res.status(500).json({
      success: false,
      message: "Error while creating note.",
      error: error.message,
    });
  }
};

// update NOtes
export const updateNotes = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    if (!updatedNote)
      return res.status(404).json({
        success: false,
        message: "Note did not find.",
      });

    res.status(201).json({
      success: true,
      message: "Updated note successfully.",
      updatedNote,
    });
  } catch (error) {
    console.log("Error while updating note", error);
    res.status(500).json({
      success: false,
      message: "Error while Updating note.",
      error: error.message,
    });
  }
};

// delete notes
export const deleteNotes = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNote = await Note.findByIdAndDelete(id);

    //  did not find note id
    if (!deletedNote)
      return res.status(404).json({
        success: false,
        message: "Note did not find.",
      });

    res.status(200).json({
      success: true,
      message: "Note deleted successfully.",
      deletedNote,
    });
  } catch (error) {
    console.log("Error while deleting note.", error);
    res.status(500).json({
      success: false,
      message: "Error while deleting note.",
    });
  }
};
