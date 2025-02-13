import React from "react";
import Sidebar from "./Components/Sidebar";
import { Outlet } from "react-router-dom";

const TutorialMain = () => {
  return (
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
  );
};

export default TutorialMain;
