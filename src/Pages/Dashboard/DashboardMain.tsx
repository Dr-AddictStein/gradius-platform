import React from "react";
import { Outlet, Link } from "react-router-dom";
import Sidebar from "../../Component/Sidebar";

const DashboardMain = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="xl:w-[20%] w-[10%]">
        <Sidebar />
      </div>
      <div className="xl:w-[100%] w-[70%] p-3">
        <div className="bg-[#343540] min-h-fit rounded-[6px] p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
