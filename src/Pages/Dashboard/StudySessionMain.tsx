import { Pause } from "lucide-react";
import React from "react";
import GradiusChat from "../../Component/GradiusChat";

const StudySessionMain = () => {
  return (
    <div className="h-[93vh] px-4 py-2">
      {/* header */}
      <div className="w-full  h-[8vh] border-b-[1px] border-[#565868] flex flex-col justify-center items-center">
        <div className="flex w-full justify-between items-center h-full">
          <div className="">
            <p className="text-[24px] font-semibold">Name of Study Session</p>
          </div>
          <div className="">
            <p className="text-[16px] font-bold text-center">
              Flashcards and Quizzes left: 12
            </p>
          </div>
          <div className="">
            <button className="w-[202px] h-[41px] rounded-[6px] bg-[#3D3F4A] flex items-center justify-center gap-2">
              <Pause size={18} />
              <p className="text-[16px] font-bold">Pause Study Session</p>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-[83vh] pt-4 flex justify-between">
        <div className="w-[48%] h-full bg-[#3D3F4A] rounded-[6px]"></div>
        <div className="h-full w-[1px] bg-[#565868]"></div>
        <div className="w-[48%] h-full bg-[#3D3F4A] rounded-[6px]">
          <GradiusChat />
        </div>
      </div>
    </div>
  );
};

export default StudySessionMain;
