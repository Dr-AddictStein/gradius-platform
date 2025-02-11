import { DoorClosed, Pause, StopCircle } from "lucide-react";
import React, { useState } from "react";
import GradiusChat from "../../Component/GradiusChat";
import Flashcard from "../../Component/Flashcard";
import MCQ from "../../Component/MCQ";

const StudySessionMain = () => {
  const [flashcard, setFlashcard] = useState(true);
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
            <button className="w-[250px] h-[41px] rounded-[6px] bg-[#3D3F4A] flex items-center justify-center gap-2">
              <StopCircle size={18} />
              <p className="text-[16px] font-bold">Close the Study Session</p>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-[83vh] flex flex-col justify-between">
        <div className="w-full h-[90%] pt-4 flex justify-between">
          <div className="w-[48%] h-full bg-[#3D3F4A] rounded-[6px]">
            {flashcard ? <Flashcard /> : <MCQ />}
          </div>
          <div className="h-full w-[1px] bg-[#565868]"></div>
          <div className="w-[48%] h-full bg-[#3D3F4A] rounded-[6px]">
            <GradiusChat />
          </div>
        </div>
        <div className="w-full h-[5%] flex justify-center items-center gap-8 ">
          <button
            className="flex items-center gap-3"
            onClick={() => setFlashcard(true)}
          >
            <img
              src="../../public/previous.png"
              alt=""
              className="w-[4px] h-[8px]"
            />
            <p className="text-[12px] font-medium">Previous</p>
          </button>
          <button
            className="flex items-center gap-3"
            onClick={() => setFlashcard(false)}
          >
            <p className="text-[12px] font-medium">Next</p>
            <img
              src="../../public/next.png"
              alt=""
              className="w-[4px] h-[8px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudySessionMain;
