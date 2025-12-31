// import React, { useState } from "react";
// import { toast } from "react-hot-toast";
// import { createNewNoteApi } from "../lib/api";

// const CreatePage = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//   });
//   const [loading, setLoading] = useState(false);

//   // handle onchange form inmput for evceyr inpout 
//   const handleOChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // handle form submit
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     if(!formData.title || !formData.description){
//       toast.error("All fields are required.");
//       return;
//     }
//     console.log("Form submitted:", formData);
//     // post the data to the server or perform other actions
//     try {
//       setLoading(true)
//       const res = await createNewNoteApi(formData);
//       console.log("res", res);
//       toast.success("Note created successfully!");
//       // Reset form after submission
//       setFormData({
//         title: "",
//         description: "",
//       });
//     } catch (error) {
//       console.log("error", error);
//       toast.error("Failed to create note. Please try again.");
//     }finally{
//       setLoading(false)
//     }
//   };
//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-gray-50 min-h-screen my-10">
//       {/* <!-- Page Title --> */}
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Create New Note</h1>

//       {/* <!-- Note Form --> */}
//       <form
//         onSubmit={handleFormSubmit}
//         className="space-y-6 bg-white p-6 rounded-lg shadow-md"
//       >
//         {/* <!-- Title Input --> */}
//         <div>
//           <label
//             className="block text-gray-700 font-medium mb-2"
//             htmlFor="title"
//           >
//             Title
//           </label>
//           <input
//             value={formData.title}
//             onChange={handleOChange}
//             name="title"
//             type="text"
//             id="title"
//             placeholder="Enter note title"
//             className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
//           />
//         </div>

//         {/* <!-- Description Textarea --> */}
//         <div>
//           <label
//             className="block text-gray-700 font-medium mb-2"
//             htmlFor="description"
//           >
//             Description
//           </label>
//           <textarea
//             value={formData.description}
//             onChange={handleOChange}
//             name="description"
//             id="description"
//             rows="5"
//             placeholder="Enter note description"
//             className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
//           ></textarea>
//         </div>

//         {/* <!-- Buttons --> */}
//         <div className="flex justify-end gap-4">
//           <button
//             type="reset"
//             className="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition cursor-pointer"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="px-5 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition cursor-pointer"
//             disabled={loading}
//           >
//             {loading ? "Note Creating..." : "Create Note"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreatePage;


















import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { createNewNoteApi } from "../lib/api";
import { FileText, Loader2, Save, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  // handle onchange form input for every input
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description) {
      toast.error("All fields are required");
      return;
    }

    console.log("Form submitted:", formData);

    try {
      setLoading(true);
      const res = await createNewNoteApi(formData);
      console.log("res", res);
      toast.success("Note created successfully!");
      
      // Reset form after submission
      setFormData({
        title: "",
        description: "",
      });

      // Navigate to home after 1 second
      setTimeout(() => {
        navigate("/");
      }, 1000);

    } catch (error) {
      console.log("error", error);
      toast.error("Failed to create note. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (formData.title || formData.description) {
      if (window.confirm("Are you sure? Your changes will be lost.")) {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50/30 py-12">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 bg-emerald-500/10 rounded-lg">
              <FileText className="h-6 w-6 text-emerald-500" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800">
              Create New Note
            </h1>
          </div>
          <p className="text-slate-600 ml-14">
            Capture your thoughts and ideas
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            
            {/* Title Input */}
            <div>
              <label
                className="block text-sm font-semibold text-slate-700 mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                value={formData.title}
                onChange={handleOnChange}
                name="title"
                type="text"
                id="title"
                placeholder="Enter a descriptive title..."
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10 transition-all"
              />
            </div>

            {/* Description Textarea */}
            <div>
              <label
                className="block text-sm font-semibold text-slate-700 mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={handleOnChange}
                name="description"
                id="description"
                rows="8"
                placeholder="Write your note content here..."
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10 transition-all resize-none"
              ></textarea>
              <p className="text-xs text-slate-500 mt-2">
                {formData.description.length} characters
              </p>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={handleCancel}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 active:scale-95 transition-all cursor-pointer"
              >
                <X size={18} />
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 transition-all cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    <Save size={18} />
                    Create Note
                  </>
                )}
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default CreatePage;