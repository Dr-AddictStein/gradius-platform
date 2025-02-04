import React, { useState } from "react";
import { createPortal } from "react-dom";
import {
  ChevronDown,
  ChevronRight,
  History,
  Plus,
  X,
  XIcon,
} from "lucide-react";
import UpgradeModal from "./UpgradeModal";
import subjectIcon from "../../public/subjectIcon.png";

interface StartStudyingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Subject {
  id: string;
  name: string;
  isActive: boolean;
  color: string;
}
interface Session {
  id: string;
  name: string;
  isActive: boolean;
}

const StartStudyingModal: React.FC<StartStudyingModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [isSubjectsOpen, setIsSubjectsOpen] = React.useState(false);
  const [isSessionsOpen, setIsSessionsOpen] = React.useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);
  const subjects: Subject[] = [
    { id: "1", name: "Physics", isActive: false, color: "red" },
    { id: "2", name: "History", isActive: false, color: "green" },
    { id: "3", name: "Maths", isActive: false, color: "red" },
    { id: "4", name: "Maths", isActive: false, color: "red" },
    { id: "5", name: "Maths", isActive: false, color: "red" },
  ];
  const sessions: Session[] = [
    { id: "1", name: "Study Session 1", isActive: false },
    { id: "2", name: "Study Session 2", isActive: false },
    { id: "3", name: "Study Session 3", isActive: false },
    { id: "4", name: "Study Session 4", isActive: false },
  ];
  const colorMap: { [key: string]: string } = {
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
  };

  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="w-[580px] h-[90vh] bg-[#343540] rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center py-4 pl-10 pr-4 border-b border-gray-800">
          <h2 className="text-white text-[16px] font-bold">Start Studying</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200"
          >
            <X size={20} />
          </button>
        </div>
        {/* Content */}
        <div className="flex flex-col justify-between items-center py-6 h-[90%]">
          <div className="">
            <h1 className="text-[16px] font-bold">
              Chose what you want to study{" "}
            </h1>
            {/* step 1 */}
            <div className=" mt-6">
              {selectedSubject === null && (
                <div className="w-[246px]">
                  {/* Subjects Button */}
                  <button
                    onClick={() => {
                      setIsSubjectsOpen(!isSubjectsOpen);
                    }}
                    className={`flex w-full h-[50px] justify-between px-8 items-center rounded-[6px] border-[1px] border-slate-600 bg-[#2D2E38] ${
                      isSubjectsOpen ? "bg-gray-700" : "hover:bg-gray-700"
                    }`}
                  >
                    <div className="flex gap-6">
                      <img
                        src={subjectIcon}
                        alt="Subjects"
                        className={`h-[20px] w-[20px] transition-transform duration-300 ${
                          isSubjectsOpen ? "rotate-90" : ""
                        }`}
                      />
                      <span className="text-[14px] font-semibold">
                        Subjects
                      </span>
                    </div>
                    <ChevronRight
                      size={16}
                      className={`text-gray-400 transition-transform duration-300 ${
                        isSubjectsOpen ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {/* Scrollable Subjects List */}
                  {isSubjectsOpen && (
                    <div className="w-full flex justify-end items-end">
                      <div className="w-[95%] flex flex-col justify-end items-end gap-2">
                        {/* Scrollable Subject List */}
                        <div className=" flex flex-col items-end w-full">
                          <div className="w-full max-h-[145px] overflow-y-auto scrollbar-hide px-2 py-2">
                            {subjects.map((subject) => (
                              <div
                                key={subject.id}
                                className={` hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300 w-[95%] h-[42px] flex items-center gap-3 px-6 rounded-lg cursor-pointer text-white bg-[#2D2E38] mb-2`}
                                onClick={() => {
                                  setSelectedSubject(subject);
                                  setIsSubjectsOpen(false);
                                }}
                              >
                                <div
                                  className={`w-2 h-2 rounded-full ${
                                    colorMap[subject.color]
                                  }`}
                                />
                                <span>{subject.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {selectedSubject !== null && (
                <div className="flex justify-start">
                  <div className="relative">
                    <div className="w-[246px] h-[50px] bg-[#2D2E38] rounded-md flex gap-3 px-6 justify-start items-center">
                      <div
                        className={`${
                          colorMap[selectedSubject.color]
                        } h-3 w-3 rounded-full`}
                      ></div>
                      <div className="text-[14px] font-semibold">
                        {selectedSubject.name}
                      </div>
                    </div>
                    <div className="absolute  -left-8 top-3">
                      <button
                        className=""
                        onClick={() => setSelectedSubject(null)}
                      >
                        <XIcon />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* step 2 */}
            {selectedSubject !== null && (
              <div className=" mt-6 flex flex-col items-center gap-4 h-[75%]">
                <h1 className="text-[16px] font-bold">Select Study Session </h1>

                <div className=" flex flex-col justify-between h-[100%]">
                  <button className="bg-[#A436F1] hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300 text-white px-2 py-3 rounded-lg w-[246px] flex justify-center items-center text-[15px] font-bold">
                    <Plus />
                    New Study Sessions
                  </button>
                  <p className="font-bold text-lg text-center">
                    O
                  </p>
                  <div className="">
                    {selectedSession === null && (
                      <div className="w-[246px]">
                        {/* Subjects Button */}
                        <button
                          onClick={() => {
                            setIsSessionsOpen(!isSessionsOpen);
                          }}
                          className={`flex w-full h-[50px] justify-between px-8 items-center rounded-[6px] border-[1px] border-slate-600 bg-[#2D2E38] ${
                            isSessionsOpen ? "bg-gray-700" : "hover:bg-gray-700"
                          }`}
                        >
                          <div className="flex gap-6 items-center">
                            <History />
                            <span className="text-[14px] font-semibold">
                              Study Sessions
                            </span>
                          </div>
                          <ChevronRight
                            size={16}
                            className={`text-gray-400 transition-transform duration-300 ${
                              isSessionsOpen ? "rotate-90" : ""
                            }`}
                          />
                        </button>

                        {/* Scrollable Subjects List */}
                        {isSessionsOpen && (
                          <div className="w-full flex justify-end items-end">
                            <div className="w-[95%] flex flex-col justify-end items-end gap-2">
                              {/* Scrollable Subject List */}
                              <div className="flex flex-col items-end w-full"></div>
                              <div className="w-full max-h-[145px] overflow-y-auto scrollbar-hide  px-2 py-2">
                                {sessions.map((session) => (
                                  <div
                                    key={session.id}
                                    className={` hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300 w-[95%] h-[42px] flex items-center gap-3 px-6 rounded-lg cursor-pointer text-white bg-[#2D2E38] mb-2`}
                                    onClick={() => {
                                      setSelectedSession(session);
                                      setIsSessionsOpen(false);
                                    }}
                                  >
                                    <History size={18} />
                                    <span>{session.name}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {selectedSession !== null && (
                      <div className="flex justify-start">
                        <div className="relative">
                          <div className="w-[246px] h-[50px] bg-[#2D2E38] rounded-md flex gap-3 px-6 justify-start items-center">
                            <History size={18} />
                            <div className="text-[14px] font-semibold">
                              {selectedSession.name}
                            </div>
                          </div>
                          <div className="absolute  -left-8 top-3">
                            <button
                              className=""
                              onClick={() => setSelectedSession(null)}
                            >
                              <XIcon />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* step 3 */}
          {selectedSession && selectedSubject && (
            <button className="bg-[#A436F1] hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300 text-white px-2 py-3 rounded-lg w-[246px] flex justify-center items-center text-[15px] font-bold">
              Start Studying
            </button>
          )}
        </div>

        {/* Footer or additional actions */}
        <div className="flex justify-between gap-0">
          {/* Your additional content goes here */}
        </div>
      </div>
      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
      />
    </div>,
    document.getElementById("modal-root")!
  );
};

export default StartStudyingModal;
