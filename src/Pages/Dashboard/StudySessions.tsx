import React, { useState } from "react";
import { Pencil, Eye, RotateCcw, X, Plus, ArrowUpDown } from "lucide-react";
import KnowledgeGraph from "../../Component/KnowledgeGraph ";
import ColorPickerModal from "../../Component/ColorPickerModal";
import ImportModal from "../../Component/ImportModal";
import { Link } from "react-router-dom";

interface StudySession {
  title: string;
  creationDate: string;
  correct: number;
  wrong: number;
  topics: string[];
}

const StudySessions = () => {
  const sessions: StudySession[] = [
    {
      title: "Dummy Title | Dummy Title | Du...",
      creationDate: "19/07/2024",
      correct: 6,
      wrong: 3,
      topics: ["Dummy", "Dummy", "Dummy", "Dummy", "Dummy"],
    },
    // Repeated for visual purposes
    ...Array(7).fill({
      title: "Dummy Title | Dummy Title | Du...",
      creationDate: "19/07/2024",
      correct: 6,
      wrong: 3,
      topics: ["Dummy", "Dummy"],
    }),
  ];
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);

  return (
    <div className=" text-white p-6 rounded-lg min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <h1 className="text-xl font-semibold">Physics</h1>
        </div>
        <Link to={'/dashboard/perSubject'} className="p-2">
          <X className="w-5 h-5" />
        </Link>
      </div>
      <div className="w-full bg-slate-700 h-[1px]"></div>

      <div className="flex justify-between items-center my-6">
        <h2 className="text-[24px] font-semibold">Recent Study Sessions</h2>
        <button onClick={()=>setIsImportModalOpen(true)} className="bg-[#A436F1]  text-white px-2 py-3 rounded-lg w-[116px] flex justify-center items-center text-[16px] font-bold">
          <Plus />
          New
        </button>
      </div>

      <div className="border border-gray-400 rounded-lg overflow-hidden">
        <div className="grid grid-cols-5 text-sm text-gray-400 px-4 py-2 border-b border-gray-400">
          <div className="col-span-1 flex items-center lg:text-[14px] text-[10px] font-medium text-white">
            Title
            <svg
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 10l5 5 5-5"
              />
            </svg>
          </div>
          <div className="col-span-1 flex items-center gap-1 lg:text-[14px] text-[10px] font-medium text-white justify-center">
            Creation Date
            <ArrowUpDown size={16} />
          </div>
          <div className="col-span-1 flex justify-center items-center gap-1 lg:text-[14px] text-[10px] font-medium text-white">
            # Correct/Wrong
            <ArrowUpDown size={16} />
          </div>
          <div className="col-span-1 flex items-center justify-center gap-1 lg:text-[14px] text-[10px] font-medium text-white">
            Topics
            <ArrowUpDown size={16} />
          </div>
          <div className="col-span-1 flex items-center justify-center lg:text-[14px] text-[10px] font-medium text-white">
            Actions
          </div>
        </div>

        {sessions.map((session, index) => (
          <div
            key={index}
            className={`grid grid-cols-5 px-4 py-3 items-center border-b border-gray-400 hover:bg-gray-800`}
          >
            <div className="col-span-1 lg:text-[14px] text-[10px] font-normal">{session.title}</div>
            <div className="col-span-1 lg:text-[14px] text-[10px] font-normal justify-center flex">{session.creationDate}</div>
            <div className="col-span-1 flex items-center gap-2 text-[14px] font-normal justify-center">
              <span className="text-green-500">↑</span>
              {session.correct}
              <span className="text-red-500">↓</span>
              {session.wrong}
            </div>
            <div className="col-span-1 flex gap-2 lg:flex-row flex-col items-center justify-center flex-wrap">
              {session.topics.map((topic, idx) => (
                <span
                  key={idx}
                  className="bg-[#565868] px-3 py-1 rounded-full text-xs"
                >
                  {topic}
                </span>
              ))}
            </div>
            <div className="col-span-1 flex lg:flex-row flex-col gap-2">
              <button className="flex items-center gap-1 bg-[#565868] hover:bg-gray-600 px-3 py-1.5 rounded-xl lg:text-[14px] text-[10px] font-normal">
                <Eye className="w-4 h-4" /> Review
              </button>
              <button className="flex items-center gap-1 bg-[#565868] hover:bg-gray-600 px-3 py-1.5 rounded-xl lg:text-[14px] text-[10px] font-normal">
                <RotateCcw className="w-4 h-4" /> Retake
              </button>
            </div>
          </div>
        ))}
      </div>
      <ImportModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
      />
    </div>
  );
};

export default StudySessions;
