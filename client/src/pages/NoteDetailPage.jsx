import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { deleteNoteApi, singleNoteDataApi, updateNoteDataApi } from "../lib/api";
import { ArrowLeft, Trash2, Save, X, Loader2, Calendar, Edit3 } from "lucide-react";
import { formatDate } from "../lib/util";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [originalNote, setOriginalNote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  // useeffect when id change the note state also change
  useEffect(() => {
    const fetchNoteData = async () => {
      try {
        setLoading(true);
        const res = await singleNoteDataApi(id);
        setNote(res.data.note);
        setOriginalNote(res.data.note); // save original
      } catch (error) {
        console.log("error", error);
        toast.error("Error fetching note");
      } finally {
        setLoading(false);
      }
    };
    fetchNoteData();
  }, [id]);

  // handle Delete
  const handleDelete = async () => {
    try {
      if (!window.confirm("Are you sure you want to delete this note?")) return;

      setLoading(true);
      await deleteNoteApi(id);
      navigate("/");
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error while deleting note.");
      toast.error("Error deleting note");
    } finally {
      setLoading(false);
    }
  };

  // handle Update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await updateNoteDataApi(id, {
        title: note.title,
        description: note.description,
      });
      setOriginalNote(note);
      setIsEditing(false);
      toast.success("Note updated successfully");
    } catch (error) {
      console.log("Error while updating note:", error);
      toast.error("Error updating note");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setNote(originalNote);
    setIsEditing(false);
  };

  const hasChanges = note && originalNote && 
    (note.title !== originalNote.title || note.description !== originalNote.description);

  if (loading && !note) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <Loader2 className="h-12 w-12 text-emerald-500 animate-spin" />
        <p className="text-slate-600 font-medium">Loading note...</p>
      </div>
    );
  }

  if (!note) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <div className="p-4 bg-red-50 rounded-full">
          <X className="h-12 w-12 text-red-500" />
        </div>
        <p className="text-red-600 font-medium text-lg">Note not found</p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2.5 bg-slate-500 text-white rounded-lg hover:bg-slate-600 transition-colors font-medium cursor-pointer"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50/30 py-12">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Top Navigation Bar */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-slate-200 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all font-medium text-slate-700 cursor-pointer"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <div className="flex gap-3">
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-all font-medium shadow-lg shadow-emerald-500/30 cursor-pointer"
              >
                <Edit3 size={18} />
                Edit
              </button>
            )}
            <button
              onClick={handleDelete}
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all font-medium shadow-lg shadow-red-500/30 disabled:opacity-50 cursor-pointer"
            >
              <Trash2 size={18} />
              Delete
            </button>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          
          {/* View Mode */}
          {!isEditing && (
            <div className="p-8">
              {/* Metadata */}
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 pb-4 border-b border-slate-100">
                <Calendar size={16} />
                <span>Created {formatDate(note.createdAt)}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl font-bold text-slate-800 mb-6 leading-tight">
                {note.title}
              </h1>

              {/* Description */}
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-wrap">
                  {note.description}
                </p>
              </div>
            </div>
          )}

          {/* Edit Mode */}
          {isEditing && (
            <form onSubmit={handleUpdate} className="p-8">
              
              {/* Title Input */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Title
                </label>
                <input
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                  type="text"
                  placeholder="Enter title"
                  className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10 transition-all text-2xl font-bold"
                />
              </div>

              {/* Description Textarea */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Description
                </label>
                <textarea
                  value={note.description}
                  onChange={(e) => setNote({ ...note, description: e.target.value })}
                  rows="12"
                  placeholder="Enter description"
                  className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10 transition-all resize-none"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={handleCancel}
                  type="button"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 active:scale-95 transition-all cursor-pointer"
                >
                  <X size={18} />
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading || !hasChanges}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/30 transition-all cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Updating...
                    </>
                  ) : (
                    <>
                      <Save size={18} />
                      Update Note
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

        {/* Helper Text */}
        {isEditing && hasChanges && (
          <p className="text-center text-sm text-slate-500 mt-4">
            You have unsaved changes
          </p>
        )}

      </div>
    </div>
  );
};

export default NoteDetailPage;