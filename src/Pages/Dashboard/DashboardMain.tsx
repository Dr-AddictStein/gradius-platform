import React from "react";
import { Outlet, Link } from "react-router-dom";
import Sidebar from "../../Component/Sidebar";

const DashboardMain = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="2xl:w-[100%] w-[80%] p-3">
        <div className="bg-[#343540] min-h-fit rounded-[6px] p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
