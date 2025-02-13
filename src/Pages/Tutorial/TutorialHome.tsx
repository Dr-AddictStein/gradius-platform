import React, { useState } from "react";
import homeIcon from "../../../public/homeIcon.png";

const TutorialHome = () => {
  const [showWelcomeText, setShowWelcomeText] = useState(true);

  setTimeout(() => {
    setShowWelcomeText(false);
  }, 3000);

  return (
    <div className="h-[95vh]">
      <div className="mb-6 w-full min-h-[5%] p-4">
        <div className="flex gap-2 mb-3 items-center">
          <img src={homeIcon} alt="" className="w-[24px] h-[24px]" />
          <h1 className=" text-[24px] font-bold">Home</h1>
        </div>
        <div className="w-full bg-slate-700 h-[1px]"></div>
      </div>
      {showWelcomeText && (
        <div className="h-[80%] w-full flex flex-col justify-center items-center">
          <p className="font-bold text-[24px]">
            Ready to explore? Your tutorial starts now!
          </p>
        </div>
      )}
    </div>
  );
};

export default TutorialHome;
