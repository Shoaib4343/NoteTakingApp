// import React from "react";
// import Navbar from "../Navbar";
// import { Outlet } from "react-router-dom";
// import Footer from "../Footer";

// const MainLayout = () => {
//   return (
//     <>
//       <Navbar />
//       <main className="min-h-screen ">
//       <Outlet />
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default MainLayout;


import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50/30">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;