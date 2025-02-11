import { Cross, Pencil, X } from "lucide-react";
import React from "react";
import CircularProgress from "../../Component/CircularProgressProps";
import KnowledgeGraph from "../../Component/KnowledgeGraph ";
import PassRateComparison from "../../Component/PassRateComparison";
import StrengthGraphGreen from "../../Component/StrengthGraphGreen";
import StrengthGraphRed from "../../Component/StrengthGraphRed";
import LearningTimeGraph from "../../Component/LearningTimeGraph";

const PerformanceAnalysis = () => {
  return (
    <div className=" text-white p-6 rounded-lg min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <h1 className="text-xl font-semibold mr-4">
            Physics | Performance Analysis
          </h1>
          <img src="../../../public/growIcon.png" alt="" />
        </div>
        <button className="p-2">
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="w-full bg-slate-700 h-[1px]"></div>

      <div className="mt-10 flex xl:flex-row flex-col gap-4 ">
        <div className="xl:w-[40%] w-full">
          <div className="bg-[#3D3F4A] text-center px-4 py-5 rounded-xl flex flex-col items-center justify-center gap-4 mb-4">
            <h3>Average Knowledge Score</h3>
            <CircularProgress value={6.9}  size={200}/>
          </div>
          <div className="bg-[#3D3F4A] text-center px-4 py-[33px] rounded-xl flex flex-col items-center justify-center gap-4 mb-4">
            <h2 className="text-white text-center font-semibold text-[16px]">Strengths</h2>
            <StrengthGraphGreen />
          </div>
          <div className="bg-[#3D3F4A] text-center px-4 py-[43px]  rounded-xl flex flex-col items-center justify-center gap-4 mb-4">
            <h2 className="text-white text-center font-semibold text-[16px]">Weaknesses</h2>
            <StrengthGraphRed />
          </div>
        </div>
        <div className="xl:w-[60%] w-full">
          <div className="bg-[#3D3F4A] text-center p-4 rounded-xl flex flex-col items-center justify-center gap-4 mb-4">
            <KnowledgeGraph isSmall={false} isMid={false}/>
          </div>
          <div className="bg-[#3D3F4A] text-center p-4 rounded-xl flex flex-col items-center justify-center gap-4 mb-4">
            <LearningTimeGraph />
          </div>
          <div className="bg-[#3D3F4A] text-center p-4 rounded-xl flex flex-col items-center justify-center gap-4 mb-4">
            <PassRateComparison isMid={false}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceAnalysis;
