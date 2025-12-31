// // import React from "react";
// // import { Plus } from "lucide-react";
// // import { Link } from "react-router-dom";

// // const Navbar = () => {
// //   return (
// //     <header className="w-full bg-gray-950 border-b border-gray-800">
// //       <nav className="max-w-7xl px-4 mx-auto flex items-center justify-between  py-4">
        
// //         {/* Logo */}
// //         <Link
// //           to="/"
// //           className="text-xl font-semibold tracking-wide text-green-400 hover:text-green-300 transition-colors"
// //         >
// //           NoteTaking<span className="text-white">App</span>
// //         </Link>

// //         {/* Action Button */}
// //         <Link
// //           to="/create"
// //           className="
// //             inline-flex items-center gap-2
// //             rounded-xl bg-green-500 px-4 py-2.5
// //             text-sm font-medium text-gray-900
// //             shadow-sm
// //             hover:bg-green-400
// //             active:scale-95
// //             transition-all
// //           "
// //         >
// //           <Plus className="h-4 w-4" />
// //           New Note
// //         </Link>

// //       </nav>
// //     </header>
// //   );
// // };

// // export default Navbar;



// import React from "react";
// import { Plus, BookOpen } from "lucide-react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <header className="w-full bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
//       <nav className="max-w-7xl px-6 mx-auto flex items-center justify-between py-4">
        
//         {/* Logo */}
//         <Link
//           to="/"
//           className="flex items-center gap-2 group"
//         >
//           <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
//             <BookOpen className="h-5 w-5 text-emerald-400" />
//           </div>
//           <span className="text-xl font-bold tracking-tight">
//             <span className="text-emerald-400">Note</span>
//             <span className="text-white">Keeper</span>
//           </span>
//         </Link>

//         {/* Action Button */}
//         <Link
//           to="/create"
//           className="
//             inline-flex items-center gap-2
//             rounded-lg bg-emerald-500 px-5 py-2.5
//             text-sm font-semibold text-white
//             shadow-lg shadow-emerald-500/30
//             hover:bg-emerald-600 hover:shadow-emerald-500/40
//             active:scale-95
//             transition-all duration-200
//           "
//         >
//           <Plus className="h-4 w-4" />
//           New Note
//         </Link>

//       </nav>
//     </header>
//   );
// };

// export default Navbar;












import React from "react";
import { Plus, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <nav className="max-w-7xl px-6 mx-auto flex items-center justify-between py-4">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
        >
          <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
            <BookOpen className="h-5 w-5 text-emerald-400" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="text-emerald-400">Note</span>
            <span className="text-white">Keeper</span>
          </span>
        </Link>

        {/* Action Button */}
        <Link
          to="/create"
          className="
            inline-flex items-center gap-2
            rounded-lg bg-emerald-500 px-5 py-2.5
            text-sm font-semibold text-white
            shadow-lg shadow-emerald-500/30
            hover:bg-emerald-600 hover:shadow-emerald-500/40
            active:scale-95
            transition-all duration-200
          "
        >
          <Plus className="h-4 w-4" />
          New Note
        </Link>

      </nav>
    </header>
  );
};

export default Navbar;