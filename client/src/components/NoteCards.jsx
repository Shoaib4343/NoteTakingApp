// import React, { useState } from "react";
// import { Trash2, Edit } from "lucide-react"; // icons for delete & edit
// import { formatDate } from "../lib/util";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";
// import { deleteNoteApi } from "../lib/api";

// const NoteCards = ({ val, setNote }) => {
//   const [loading, setLoading] = useState(false);

//   // handle Delete functionality
//   const handleDelete = async (e) => {
//     e.preventDefault();
//     e.stopPropagation();

//     const confirmed = window.confirm( "Are you sure you want to delete this note?")
//     if(!confirmed) return

//     try {
//       setLoading(true);
//       const res = await deleteNoteApi(val._id);
//       setNote((pre)=>pre.filter((data)=>data._id !== val._id))
//       toast.success("Note Deleted Successfully.");
//     } catch (error) {
//       console.log("Error while deleting note.");
//       toast.error("Error while deleting note.");
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <Link to={`/note/${val._id}`}>
//       <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
//         {/* Title & Description */}
//         <div>
//           <h2 className="text-lg font-bold text-gray-800 line-clamp-1">{val.title}</h2>
//           <p className="text-gray-600 mt-1 line-clamp-1">{val.description}</p>
//         </div>

//         {/* Bottom section */}
//         <div className="flex justify-between items-center mt-4">
//           {/* Created date */}
//           <span className="text-sm text-gray-400">
//             {formatDate(val.createdAt)}
//           </span>

//           {/* Action buttons */}
//           <div className="flex gap-2">
//             {/* delete button */}
//             <button
//               onClick={handleDelete}
//               disabled={loading}
//               className="flex items-center gap-1 text-red-500 hover:text-red-700 transition-colors cursor-pointer"
//             >
//               <Trash2 size={16} /> {loading ? 'Deleting' : 'Delete'}
//             </button>
//             <button className="flex items-center gap-1 text-blue-500 hover:text-blue-700 transition-colors cursor-pointer">
//               <Edit size={16} /> Update
//             </button>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default NoteCards;












import React, { useState } from "react";
import { Trash2, Edit, Calendar, Loader2 } from "lucide-react";
import { formatDate } from "../lib/util";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { deleteNoteApi } from "../lib/api";

const NoteCards = ({ val, setNote }) => {
  const [loading, setLoading] = useState(false);

  // handle Delete functionality
  const handleDelete = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const confirmed = window.confirm("Are you sure you want to delete this note?");
    if (!confirmed) return;

    try {
      setLoading(true);
      const res = await deleteNoteApi(val._id);
      setNote((pre) => pre.filter((data) => data._id !== val._id));
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error while deleting note.");
      toast.error("Failed to delete note");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Link to={`/note/${val._id}`} className="group">
      <div className="bg-linear-to-br from-white to-slate-50 p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between h-full group-hover:scale-[1.02]">
        
        {/* Title & Description */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
            {val.title}
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
            {val.description}
          </p>
        </div>

        {/* Bottom section */}
        <div className="flex justify-between items-center pt-4 border-t border-slate-100">
          
          {/* Created date */}
          <div className="flex items-center gap-1.5 text-slate-400">
            <Calendar size={14} />
            <span className="text-xs font-medium">
              {formatDate(val.createdAt)}
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            
            {/* Delete button */}
            <button
              onClick={handleDelete}
              disabled={loading}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-red-600 hover:text-white hover:bg-red-500 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? (
                <Loader2 size={14} className="animate-spin" />
              ) : (
                <Trash2 size={14} />
              )}
              <span className="hidden sm:inline">
                {loading ? "Deleting..." : "Delete"}
              </span>
            </button>

            {/* Edit button */}
            <button className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-emerald-600 hover:text-white hover:bg-emerald-500 rounded-lg transition-all duration-200 cursor-pointer">
              <Edit size={14} />
              <span className="hidden sm:inline">Edit</span>
            </button>

          </div>
        </div>

      </div>
    </Link>
  );
};

export default NoteCards;