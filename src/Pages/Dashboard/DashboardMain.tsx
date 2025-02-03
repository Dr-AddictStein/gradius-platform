import React from "react";
import { Outlet, Link } from "react-router-dom";
import Sidebar from "../../Component/Sidebar";

const DashboardMain = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[300px]">
        <Sidebar />
      </div>
      <div className="w-[1141px] p-3">
        <div className="bg-[#343540] min-h-screen rounded-[6px] p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
