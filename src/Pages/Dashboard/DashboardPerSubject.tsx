import { Expand, History, Pencil, Plus, PlusIcon } from "lucide-react";
import React, { useState } from "react";
import KnowledgeGraph from "../../Component/KnowledgeGraph ";
import LearningTimeGraph from "../../Component/LearningTimeGraph";
import CircularProgress from "../../Component/CircularProgressProps";
import StrengthGraphGreen from "../../Component/StrengthGraphGreen";
import StrengthGraphRed from "../../Component/StrengthGraphRed";
import growthIcon from "../../../public/growIcon.png";
import fileDown from "../../../public/File Down 01.png";
import starLeft from "../../../public/starLeft.png";
import starRight from "../../../public/starRight.png";
import check4 from "../../../public/File Check 4.png";
import TableSmall from "../../Component/TableSmall";
import { Link } from "react-router-dom";
import ImportModal from "../../Component/ImportModal";
import NewStudyModal from "../../Component/NewStudyModal";

const DashboardPerSubject = () => {
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isNewStudyModalOpen, setIsNewStudyModalOpen] = useState(false);
  return (
    <div className=" text-white p-6 rounded-lg min-h-fit">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <h1 className="text-[24px] font-bold mr-4">Physics</h1>
          <Pencil size={20} />
        </div>
        <button
          onClick={() => setIsNewStudyModalOpen(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-2 py-3 rounded-lg w-[213px] flex justify-center items-center text-[16px] font-bold"
        >
          <Plus />
          New Study Sessions
        </button>
      </div>
      <div className="w-full bg-slate-700 h-[1px]"></div>

      <div className="py-6 w-full min-h-fit flex justify-between gap-2">
        <div className="w-1/2">
          <div className=" bg-[#3D3F4A]  rounded-[6px] px-8 py-4 border-[1px] border-slate-600 h-[320px] mb-4">
            <div className="flex justify-between w-full">
              <div className="flex gap-3 mb-3">
                <img className="h-[24px] w-[24px]" src={fileDown} alt="" />
                <h1 className="text-white font-bold text-[16px]">
                  MATERIALS UPLOADED
                </h1>
              </div>
              <button
                onClick={() => setIsImportModalOpen(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-2 py-3 rounded-lg w-[88px] h-[26px] flex justify-center items-center text-[13px] font-normal gap-2"
              >
                <PlusIcon size={14} />
                Upload
              </button>
            </div>
            <div className="w-full bg-slate-500 h-[1px] mb-4"></div>
            <div className="flex w-full justify-between">
              <div className="w-1/2">
                <h3 className="text-center text-[#828597] text-[14px] font-medium">
                  Documents
                </h3>
              </div>
              <div className="w-1/2">
                <h3 className="text-center text-[#828597] text-[14px] font-medium">
                  Study Material
                </h3>
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="w-1/2">
                <div className="p-4 h-full flex flex-col justify-center items-center">
                  <div className="flex justify-center items-center gap-3">
                    <img src={starLeft} alt="" />
                    <p className="text-center text-[13px] font-bold">
                      Coming Soon
                    </p>
                    <img src={starRight} alt="" />
                  </div>
                </div>
              </div>
              <div className="h-[180px] bg-slate-500 w-[1px]"></div>
              <div className="w-1/2">
                <div className="p-4 h-full flex flex-col justify-center gap-3 items-start">
                  <div className="flex justify-center items-center gap-3">
                    <img src={check4} alt="" />
                    <p className="text-center text-[13px] font-medium">
                      Quizzes from Quizlet
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-3">
                    <img src={check4} alt="" />
                    <p className="text-center text-[13px] font-medium">
                      Flashcards from Anki
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-3">
                    <img src={check4} alt="" />
                    <p className="text-center text-[13px] font-medium">
                      Quizzes from Gizmo
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-3">
                    <img src={check4} alt="" />
                    <p className="text-center text-[13px] font-medium">
                      Quizzes from Vaia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-slate-500 h-[1px] mb-4"></div>

          <div className=" bg-[#3D3F4A]  rounded-[6px] px-8 py-4 border-[1px] border-slate-600 h-[320px] mb-4">
            <div className="flex justify-between w-full">
              <div className="flex gap-3 mb-3">
                <History />
                <h1 className="text-white font-bold text-[16px]">
                  RECENT STUDY SESSIONS
                </h1>
              </div>
              <Link
                to={"/dashboard/studySessions"}
                className="bg-purple-600 hover:bg-purple-700 text-white px-2 py-3 rounded-lg w-[88px] h-[26px] flex justify-center items-center text-[13px] font-normal gap-2"
              >
                <Expand size={14} />
                Expand
              </Link>
            </div>
            <div className="w-full bg-slate-500 h-[1px] mb-4"></div>

            <TableSmall />
          </div>
        </div>
        <div className="h-full bg-slate-700 w-[1px]"></div>
        <div className="w-1/2 bg-[#3D3F4A] h-fit rounded-[6px] px-8 py-4 border-[1px] border-slate-600 flex flex-col gap-2">
          <div className="flex justify-between w-full">
            <div className="flex gap-3">
              <img className="h-[24px] w-[24px]" src={growthIcon} alt="" />
              <h1 className="text-white font-bold text-[16px]">
                PERFORMANCE ANALYSIS
              </h1>
            </div>
            <Link
              to={"/dashboard/performanceAnalysis"}
              className="bg-purple-600 hover:bg-purple-700 text-white px-2 py-3 rounded-lg w-[88px] h-[26px] flex justify-center items-center text-[13px] font-normal gap-2"
            >
              <Expand size={14} />
              Expand
            </Link>
          </div>
          <div className="w-full bg-slate-500 h-[1px] mb-[1px]"></div>

          <KnowledgeGraph isSmall={true} />
          <div className="w-full bg-slate-500 h-[1px] mb-1"></div>
          <LearningTimeGraph isSmall={true} />
          <div className="w-full bg-slate-500 h-[1px] mb-1"></div>
          <div className="w-full">
            <div className="flex w-full justify-between text-center mb-[9px]">
              <h1 className="text-[15px] font-semibold tet-center w-full">
                Average Knowledge Score
              </h1>
              <h1 className="text-[15px] font-semibold tet-center w-full">
                Strenghts and Weaknesses
              </h1>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="w-1/2 h-full">
                <div className="flex flex-col gap-6 justify-start items-center">
                  <CircularProgress value={7.7} size={155} />
                </div>
              </div>
              <div className="w-1/2 h-full">
                <div className="flex justify-start items-center flex-col gap-2">
                  <StrengthGraphGreen isShort={true} />
                  <StrengthGraphRed isShort={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ImportModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
      />
      <NewStudyModal
        isOpen={isNewStudyModalOpen}
        onClose={() => setIsNewStudyModalOpen(false)}
      />
    </div>
  );
};

export default DashboardPerSubject;
