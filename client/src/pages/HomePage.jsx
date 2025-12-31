// import React, { useEffect, useState } from "react";
// import NoteCards from "../components/NoteCards";
// import { getApiNoteData } from "../lib/api";

// const HomePage = () => {
//   const [note, setNote] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const getDat = async () => {
//     try {
//       const res = await getApiNoteData();
//       const data = res.data;

//       if (!data.success) {
//         throw new Error(data.message || "Error to fetch notes");
//       }

//       console.log(data);
//       setNote(data.notes);
//     } catch (err) {
//       console.log("error", error);
//       setError(err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     getDat();
//   }, []);

//   if (loading) return <div className="text-center mt-10">Loading...</div>;
//   if (error)
//     return <div className="text-center mt-10 text-red-500">{error}</div>;

//   return (
//     <>
//       {note.length === 0 && (
//         <div className="text-center mt-10">No note is added yet.</div>
//       )}
//       <ul className="max-w-7xl px-4 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {note.map((val) => (
//           <NoteCards val={val} key={val._id} setNote={setNote} />
//         ))}
//       </ul>
//     </>
//   );
// };

// export default HomePage;
















import React, { useEffect, useState } from "react";
import NoteCards from "../components/NoteCards";
import { getApiNoteData } from "../lib/api";
import { StickyNote, Loader2, AlertCircle } from "lucide-react";

const HomePage = () => {
  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      const res = await getApiNoteData();
      const data = res.data;

      if (!data.success) {
        throw new Error(data.message || "Error to fetch notes");
      }

      console.log(data);
      setNote(data.notes);
    } catch (err) {
      console.log("error", err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <Loader2 className="h-12 w-12 text-emerald-500 animate-spin" />
        <p className="text-slate-600 font-medium">Loading your notes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <div className="p-4 bg-red-50 rounded-full">
          <AlertCircle className="h-12 w-12 text-red-500" />
        </div>
        <p className="text-red-600 font-medium text-lg">{error}</p>
        <button
          onClick={getData}
          className="px-6 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50/30">
      <div className="max-w-7xl px-6 mx-auto py-12">
        
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            My Notes
          </h1>
          <p className="text-slate-600">
            {note.length === 0 
              ? "Start capturing your thoughts" 
              : `You have ${note.length} ${note.length === 1 ? 'note' : 'notes'}`
            }
          </p>
        </div>

        {/* Empty State */}
        {note.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="p-6 bg-emerald-50 rounded-full mb-6">
              <StickyNote className="h-16 w-16 text-emerald-500" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              No notes yet
            </h2>
            <p className="text-slate-600 text-center max-w-md mb-6">
              Create your first note to start organizing your thoughts and ideas
            </p>
            <a
              href="/create"
              className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-semibold shadow-lg shadow-emerald-500/30"
            >
              Create Your First Note
            </a>
          </div>
        )}

        {/* Notes Grid */}
        {note.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {note.map((val) => (
              <NoteCards val={val} key={val._id} setNote={setNote} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default HomePage;