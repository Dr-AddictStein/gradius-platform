import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Sidebar from "../../Component/Sidebar";

const DashboardMain = () => {
  const param = useLocation();
  return (
    <>
      {param.pathname.startsWith("/dashboard/performanceAnalysis") ||
      param.pathname.startsWith("/dashboard/studySessions") ||
      param.pathname.startsWith("/dashboard/studySession") ||
      param.pathname.startsWith("/dashboard/finalOverview") ? (
        <div className="w-full flex justify-between">
          <div className="xl:w-[20%] w-[10%] xl:block hidden">
            <Sidebar />
          </div>
          <div className="w-[100%] p-3">
            <div className="bg-[#343540] min-h-fit rounded-[6px] p-2">
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-between">
          <div className="xl:w-[20%] w-[10%]">
            <Sidebar />
          </div>
          <div className="xl:w-[100%] w-[75%] p-3">
            <div className="bg-[#343540] min-h-fit rounded-[6px] p-2">
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardMain;
