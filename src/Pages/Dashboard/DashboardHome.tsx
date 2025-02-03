import React, { useRef, useState } from "react";
import CircularProgress from "../../Component/CircularProgressProps";
import homeIcon from "../../../public/homeIcon.png";
import line1 from "../../../public/Line 1.png";
import leftA from "../../../public/left.png";
import rightA from "../../../public/right.png";

const DashboardHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const progressCards = [
    { subject: "Tory", scores: [7.7], color: "bg-green-500" },
    { subject: "Physics", scores: [9.3], color: "bg-blue-500" },
    { subject: "Science", scores: [8.2], color: "bg-red-500" },
    { subject: "M", scores: [6.5], color: "bg-purple-500" },
    { subject: "Cricket", scores: [2.3], color: "bg-purple-500" },
  ];

  const slideWidth = 230; // Match your card width
  const gap = 16; // Match your gap (4 = 16px)

  const handleNext = () => {
    if (currentSlide < progressCards.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };
  return (
    <div className="container mx-auto p-8 h-[860px]">
      {/* Header Section */}
      <div className="mb-6 w-full min-h-[5%] ">
        <div className="flex gap-2 mb-3 items-center">
          <img src={homeIcon} alt="" className="w-[24px] h-[24px]" />
          <h1 className=" text-[24px] font-bold">Home</h1>
        </div>
        <div className="w-full bg-slate-700 h-[1px]"></div>
      </div>
      <div className="flex flex-col justify-between w-full min-h-[95%] ">
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="text-[24px] font-bold text-center">Hey Emilio!</h1>
          <p className="text-white text-[20px] font-medium text-center">
            Back for more? Let's keep learning and...
            <br />
            ...don't forget, every click makes me smarter too, I'm counting on
            you!
          </p>
        </div>

        <div className="flex justify-center items-center">
          <button className="bg-[#A436F1] hover:shadow-[0_0_15px_2px_#A436F1] text-white px-6 py-3 rounded-lg w-[246px] text-[16px] font-bold transition-shadow duration-300">
            Start Studying
          </button>
        </div>

        {/* Progress Cards Slider */}
        <div className="mb-8 relative mt-20">
          {/* Centered title */}
          <div className="relative overflow-hidden">
            {/* Container with calculated width for 3 cards */}
            <div className="mx-auto w-[calc(230px*3+2*16px)] overflow-hidden">
              {" "}
              {/* 3 cards + 2 gaps */}
              <div
                ref={sliderRef}
                className="flex transition-transform duration-300"
                style={{
                  transform: `translateX(-${currentSlide * (219 + 16)}px)`, // 219px card width + 16px gap
                  gap: "16px",
                }}
              >
                {progressCards.map((card, index) => (
                  <div
                    key={index}
                    className="min-w-[219px] bg-gray-800 rounded-xl border-2 border-slate-400 flex-shrink-0" // Prevent card squishing
                  >
                    <div className="space-y-4">
                      {card.scores.map((score, scoreIndex) => (
                        <div
                          key={scoreIndex}
                          className="flex flex-col justify-center items-center gap-4"
                        >
                          <div className="px-6 py-5">
                            <CircularProgress value={score} />
                          </div>
                          <div className="flex gap-2 items-center justify-center bg-gray-600 w-full rounded-b-xl py-2">
                            <div
                              className={`w-5 h-5 rounded-full ${card.color}`}
                            />
                            <h3 className="font-medium">{card.subject}</h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Navigation Buttons - Centered horizontally */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] px-4">
            <button
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className="h-[35px] w-[35px] flex justify-center items-center absolute left-0 bg-[#A436F1] p-2 rounded-full hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <img src={leftA} alt="" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentSlide >= progressCards.length - 3} // Update disable logic
              className="h-[35px] w-[35px] flex justify-center items-center absolute right-0 bg-[#A436F1] p-2 rounded-full hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <img src={rightA} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
