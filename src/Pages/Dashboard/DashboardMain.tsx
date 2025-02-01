import React from "react";
import { Outlet, Link } from "react-router-dom";
import Sidebar from "../../Component/Sidebar";

const DashboardMain = () => {
  return (
    <div className="w-full grid grid-cols-12">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10 p-3">
        <div className="bg-[#343540] min-h-screen rounded-[6px] p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
