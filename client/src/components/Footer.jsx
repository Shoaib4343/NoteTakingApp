// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="w-full bg-gray-950 border-t border-gray-800">
//       <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
//         {/* Left */}
//         <p className="text-sm text-gray-400">
//           © {new Date().getFullYear()}{" "}
//           <span className="text-green-400 font-medium">NoteTakingApp</span>.  
//           All rights reserved.
//         </p>

//         {/* Right */}
//         <p className="text-sm text-gray-500">
//           Built with <span className="text-red-500">❤</span> using MERN Stack
//         </p>

//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left - Copyright */}
          <div className="flex items-center gap-2">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()}{" "}
              <span className="text-emerald-400 font-semibold">NoteKeeper</span>
            </p>
            <span className="text-slate-600">•</span>
            <p className="text-sm text-slate-500">
              All rights reserved
            </p>
          </div>

          {/* Right - Tech Stack */}
          <div className="flex items-center gap-2">
            <p className="text-sm text-slate-500 flex items-center gap-1.5">
              Built with 
              <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500 animate-pulse" />
              using
            </p>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700/50">
              <Code className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-xs font-medium text-slate-300">MERN Stack</span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;