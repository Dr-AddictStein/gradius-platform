import React from "react";
import { Pencil, Eye, RotateCcw, X } from "lucide-react";
import KnowledgeGraph from "../../Component/KnowledgeGraph ";

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
      topics: ["Dummy Topic", "Dummy Topic"],
    },
    // Repeated for visual purposes
    ...Array(7).fill({
      title: "Dummy Title | Dummy Title | Du...",
      creationDate: "19/07/2024",
      correct: 6,
      wrong: 3,
      topics: ["Dummy Topic", "Dummy Topic"],
    }),
  ];

  return (
    <div className=" text-white p-6 rounded-lg min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <h1 className="text-xl font-semibold">Physics</h1>
        </div>
        <button className="p-2">
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="w-full bg-slate-700 h-[1px]"></div>

      <div className="flex justify-between items-center my-6">
        <h2 className="text-lg">Recent Study Sessions</h2>
        <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg flex items-center gap-2 text-sm">
          <span className="text-lg">+</span> New
        </button>
      </div>

      <div className="border border-gray-400 rounded-lg overflow-hidden">
        <div className="grid grid-cols-5 text-sm text-gray-400 px-4 py-2 border-b border-gray-400">
          <div className="col-span-1 flex items-center">
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
          <div className="col-span-1 flex items-center">
            Creation Date
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
          <div className="col-span-1 flex items-center">
            # Correct/Wrong
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
          <div className="col-span-1 flex items-center">
            Topics
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
          <div className="col-span-1">Actions</div>
        </div>

        {sessions.map((session, index) => (
          <div
            key={index}
            className={`grid grid-cols-5 px-4 py-3 items-center border-b border-gray-400 hover:bg-gray-800`}
          >
            <div className="col-span-1 text-sm">{session.title}</div>
            <div className="col-span-1 text-sm">{session.creationDate}</div>
            <div className="col-span-1 flex items-center gap-2 text-sm">
              <span className="text-green-500">↑</span>
              {session.correct}
              <span className="text-red-500">↓</span>
              {session.wrong}
            </div>
            <div className="col-span-1 flex gap-2">
              {session.topics.map((topic, idx) => (
                <span
                  key={idx}
                  className="bg-gray-700 px-3 py-1 rounded-full text-xs"
                >
                  {topic}
                </span>
              ))}
            </div>
            <div className="col-span-1 flex gap-2">
              <button className="flex items-center gap-1 bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-lg text-sm">
                <Eye className="w-4 h-4" /> Review
              </button>
              <button className="flex items-center gap-1 bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-lg text-sm">
                <RotateCcw className="w-4 h-4" /> Retake
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudySessions;
