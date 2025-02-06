import { Repeat, X } from "lucide-react";
import React from "react";
import TrendGraph from "../../Component/TrendGraph";
import CircularProgress from "../../Component/CircularProgressProps";
import KnowledgeGraph from "../../Component/KnowledgeGraph ";
import PassRateComparison from "../../Component/PassRateComparison";

const FinalOverview = () => {
  return (
    <div className="h-[760px] p-4 flex flex-col justify-between">
      {/* Header */}
      <div className="relative pb-14 pl-10 pr-4 border-b border-[#565868]">
        {/* Centered heading */}
        <h2 className="absolute left-1/2 transform -translate-x-1/2 text-white text-[24px] font-semibold">
          Here’s How You Did
        </h2>
        {/* Right-aligned close button */}
        <div className="absolute right-4 -top-1">
          <div className="flex gap-10">
            <button className="flex gap-4 items-center justify-center w-[138px] h-[40px] bg-[#A436F1] rounded-[6px]">
              {" "}
              <img
                src="../../../public/Rotate ccw.png"
                alt=""
                className="w-[17px] h-[17px]"
              />{" "}
              Retake
            </button>
            <button className=" text-gray-400 hover:text-gray-200">
              <X size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 h-[300px] flex gap-4 w-full justify-between">
        {/* left */}
        <div className="flex flex-col justify-between h-full w-[33%]">
          <div className="flex gap-4 w-full">
            <div className="flex flex-col items-center justify-center h-[123px] w-1/2 bg-[#3D3F4A] rounded-[20px]">
              <div className="flex justify-center items-center gap-1">
                <img
                  src="../../../public/stopwatch.png"
                  alt=""
                  className="h-[15px] w-[15px]"
                />
                <p className="text-[16px] font-semibold">Session Duration</p>
              </div>
              <div className="">
                <p className="text-[37px] font-semibold text-[#BF7DED]">
                  5m 8s
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center h-[123px] w-1/2 bg-[#3D3F4A] rounded-[20px]">
              <div className="flex justify-center items-center gap-1">
                <img
                  src="../../../public/greenTick.png"
                  alt=""
                  className="h-[15px] w-[15px]"
                />
                <p className="text-[16px] font-semibold">Accuracy Rate</p>
              </div>
              <div className="">
                <p className="text-[37px] font-semibold text-[#04CE00]">66%</p>
              </div>
            </div>
          </div>
          <div className="bg-[#565868] w-full border-1 h-[1px]"></div>
          <div className="flex justify-center items-center h-[123px] w-full bg-[#3D3F4A] rounded-[20px]">
            <div className="w-1/2 flex flex-col items-center justify-center h-full ">
              <div className="">
                <p className="text-[#C4C3D1] font-normal text-[12px]">
                  Progression
                </p>
                <p className="text-[#C4C3D1] font-bold text-[18px]">
                  Microtopic 1
                </p>
              </div>
              <div className="">
                <p className="text-[37px] font-semibold text-[#04CE00] text-start">
                  +0.8
                </p>
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <TrendGraph color="#04CE00" />
            </div>
          </div>
        </div>

        {/* mid */}
        <div className="bg-[#3D3F4A] text-center p-4 w-[30%] rounded-xl flex flex-col items-center justify-center gap-4 h-full">
          <h3 className="text-[17px] font-bold">Average Knowledge Score</h3>
          <CircularProgress value={7.7} size={180} />
        </div>

        {/* right */}
        <div className="flex flex-col justify-between h-full w-[33%]">
          <div className="flex justify-around items-center h-[123px] w-full bg-[#3D3F4A] rounded-[20px] p-4">
            <div className="flex flex-col justify-around h-full">
              <p className="font-bold text-[17px]">Gradius’ Recommendations</p>
              <p className="font-normal text-[12px] text-[#C4C3D1]">
                Gradius analyzed your session—click
                <br /> below for personalized tips to improve!
              </p>
            </div>
            <div className="">
              <img src="../../../public/GradiusRecomm.png" alt="" />
            </div>
          </div>
          <div className="bg-[#565868] w-full border-1 h-[1px]"></div>
          <div className="flex justify-center items-center h-[123px] w-full bg-[#3D3F4A] rounded-[20px]">
            <div className="w-1/2 flex flex-col items-center justify-center h-full ">
              <div className="">
                <p className="text-[#C4C3D1] font-normal text-[12px]">
                  Progression
                </p>
                <p className="text-[#C4C3D1] font-bold text-[18px]">
                  Microtopic 2
                </p>
              </div>
              <div className="">
                <p className="text-[37px] font-semibold text-[#FF718B] text-start">
                  -0.8
                </p>
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <TrendGraph color="#FF718B" isNeg={true} />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[315px] flex gap-6">
        <div className="w-[50%] p-4 flex justify-center items-center h-full bg-[#3D3F4A] rounded-[26px]">
          <KnowledgeGraph isSmall={false} />
        </div>
        <div className="w-[50%] p-4 flex justify-center items-center h-full bg-[#3D3F4A] rounded-[26px]">
          <PassRateComparison />
        </div>
      </div>
    </div>
  );
};

export default FinalOverview;
