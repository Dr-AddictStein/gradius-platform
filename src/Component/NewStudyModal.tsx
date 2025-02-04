import React, { useEffect, useState } from "react";
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

interface NewStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Subject {
  id: string;
  name: string;
  isActive: boolean;
  color: string;
  icon: string;
}
interface Session {
  id: string;
  name: string;
  isActive: boolean;
}

const NewStudyModal: React.FC<NewStudyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [isSubjectsOpen, setIsSubjectsOpen] = React.useState(false);
  const [isSessionsOpen, setIsSessionsOpen] = React.useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);
  const subjects: Subject[] = [
    {
      id: "1",
      name: "Select All",
      isActive: false,
      color: "red",
      icon: "../../public/box check.png",
    },
    {
      id: "2",
      name: "History",
      isActive: false,
      color: "green",
      icon: "../../public/File Check 4 White.png",
    },
    {
      id: "3",
      name: "Maths",
      isActive: false,
      color: "red",
      icon: "../../public/File Check 4 White.png",
    },
    {
      id: "4",
      name: "Physics",
      isActive: false,
      color: "red",
      icon: "../../public/File Check 4 White.png",
    },
    {
      id: "5",
      name: "Zoology",
      isActive: false,
      color: "red",
      icon: "../../public/File Check 4 White.png",
    },
  ];
  const sessions: Session[] = [
    { id: "1", name: "Small", isActive: false },
    { id: "2", name: "Medium", isActive: false },
    { id: "3", name: "Long", isActive: false },
  ];
  const colorMap: { [key: string]: string } = {
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
  };

  // `expanded` determines the height.
  // `disableHover` prevents re-expansion on hover after clicking.
  const [expanded, setExpanded] = useState(false);
  const [disableHover, setDisableHover] = useState(false);

  // Determine container height based on state.
  const containerHeight = expanded ? "h-[200px]" : "h-[50px]";

  const [selectedFocus, setSelectedFocus] = useState("");
  const [microtopic, setMicrotopic] = useState("");

  const [dtimer, setDtimer] = useState(false);

  // Function to handle button click.
  const handleClick = () => {
    // Show the message.
    setDtimer(true);
    // After 1 second (1000ms), hide the message.
    setTimeout(() => {
      setDtimer(false);
    }, 1000);
  };

  const [subjectList, setSubjectList] = useState(subjects);
  const [subjectListChosen, setSubjectListChosen] = useState([]);

  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="w-[580px] h-[98vh] bg-[#343540] rounded-lg">
        {/* Header */}
        <div className="relative pt-4 pb-10 pl-10 pr-4 border-b border-gray-800">
          {/* Centered heading */}
          <h2 className="absolute left-1/2 transform -translate-x-1/2 text-white text-[16px] font-bold">
            New Study Session
          </h2>
          {/* Right-aligned close button */}
          <button
            onClick={onClose}
            className="absolute right-4 text-gray-400 hover:text-gray-200"
          >
            <X size={20} />
          </button>
        </div>
        {/* Content */}
        <div className="flex flex-col justify-between items-center py-6 h-[90%]">
          <div className="">
            <h1 className="text-[16px] font-bold text-center">
              Select the Material
            </h1>
            {/* step 1 */}
            <div className=" mt-6">
              {subjectListChosen.length !== 0 && (
                <div className="max-h-[145px] overflow-y-auto scrollbar-hide">
                  {subjectListChosen.map((ss) => (
                    <div className="flex justify-start mb-2" key={ss.id}>
                      <div className="relative">
                        <div className="w-[246px] h-[50px] bg-[#2D2E38] rounded-md flex gap-3 px-6 justify-start items-center">
                          <img src={ss.icon} alt="" />
                          <div className="text-[14px] font-semibold relative">
                            {ss.name}
                            {ss.name === "Select All" && (
                              <div className="absolute top-0 -right-28">
                                <img
                                  src="../../public/Group 628841.png"
                                  alt=""
                                />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="absolute  right-5 top-3">
                          <button
                            className=""
                            onClick={() => {
                              let dex = subjectListChosen.filter(
                                (s) => s.id != ss.id
                              );
                              setSubjectListChosen(dex);
                            }}
                          >
                            <XIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="w-[246px] mt-6">
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
                      src="../../public/File Down 01.png"
                      alt="Subjects"
                      className={`h-[20px] w-[20px] transition-transform duration-300 ${
                        isSubjectsOpen ? "rotate-180" : ""
                      }`}
                    />
                    <span className="text-[14px] font-semibold">
                      Select Material
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
                          {subjects
                            .filter(
                              (subject) =>
                                !subjectListChosen.some(
                                  (chosen) => chosen.id === subject.id
                                )
                            )
                            .map((subject) => (
                              <div
                                key={subject.id}
                                className={` hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300 w-[95%] h-[42px] flex items-center gap-3 px-6 rounded-lg cursor-pointer text-white bg-[#2D2E38] mb-2`}
                                onClick={() => {
                                  if (subject.name === "Select All") {
                                    setSubjectListChosen(
                                      subjects.filter(
                                        (s) => s.name !== "Select All"
                                      )
                                    );
                                  } else {
                                    let dex = subjectListChosen;
                                    dex.push(subject);
                                    setSubjectListChosen(dex);
                                    setIsSubjectsOpen(false);
                                  }
                                }}
                              >
                                <div className=" relative">
                                  <div className="flex items-center justify-start gap-2">
                                    <img src={subject.icon} alt="" />
                                    <span className="text-[14px] font-semibold">
                                      {subject.name}
                                    </span>
                                  </div>
                                  {subject.name === "Select All" && (
                                    <div className="absolute top-0 -right-16">
                                      <img
                                        src="../../public/Group 628841.png"
                                        alt=""
                                      />
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* step 2 */}
            {subjectListChosen.length !== 0 && (
              <div className=" mt-6 flex flex-col items-center gap-4 h-fit">
                <h1 className="text-[16px] font-bold">Choose Duration</h1>

                <div className=" flex flex-col justify-between h-[100%]">
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
                            <img src="../../public/durBig.png" alt="" />
                            <span className="text-[14px] font-semibold">
                              Select Duration
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
                                    <img
                                      src="../../public/durSmall.png"
                                      alt=""
                                    />
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
                            <img src="../../public/durBig.png" alt="" />
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

            {/* step 4 */}
            {selectedSession && subjectListChosen.length !== 0 && (
              <div className="mt-12">
                {selectedFocus === "" && (
                  <div className="">
                    <h1 className="text-[16px] font-bold text-center mb-4">
                      What do you want to focus on
                    </h1>
                    <div className="">
                      <div
                        className={`group relative w-[246px] ${containerHeight} bg-[#2D2E38] shadow-[0_0_15px_2px_#A436F1] cursor-pointer transition-all duration-300 overflow-hidden rounded-md`}
                        onMouseEnter={() => {
                          if (!disableHover) {
                            setExpanded(true);
                          }
                        }}
                        onMouseLeave={() => {
                          setExpanded(false);
                          setDisableHover(false);
                        }}
                        onClick={() => {
                          // On click, collapse and disable hover until the mouse leaves.
                          setExpanded(false);
                          setDisableHover(true);
                          setSelectedFocus("Gradius");
                          // Show the message.
                          setDtimer(true);
                          // After 1 second (1000ms), hide the message.
                          setTimeout(() => {
                            setDtimer(false);
                          }, 2000);
                        }}
                      >
                        {/* Header & Image Section (pinned in place) */}
                        <div className="absolute top-0 left-0 right-0 h-[50px] flex items-center justify-center">
                          <h2 className="text-[14px] font-semibold text-center">
                            Gradius Smart Study
                          </h2>
                          <div className="absolute top-3 left-5">
                            <img
                              src="../../public/Group 628841.png"
                              alt="Icon"
                            />
                          </div>
                        </div>

                        {/* Extra Text Section (reveals when expanded) */}
                        <div className="absolute top-[50px] left-0 right-0 flex flex-col items-center justify-center">
                          <p className="text-[12px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                            <span className="font-medium text-center px-3">
                              <span className="text-[#A436F1]">
                                {" "}
                                Gradius Smart Study{" "}
                              </span>
                              is our intelligent system that delivers the right
                              material, perfectly tailored to your needs and
                              goals.
                            </span>
                            <span className="font-medium text-center px-3">
                              Select Smart Study, dive into evolving content,
                              and let Gradius supercharge your learning journey.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-center my-6">or</p>
                    <div
                      onClick={() => setSelectedFocus("Micro")}
                      className="rounded-md cursor-pointer text-center bg-[#2D2E38] w-[246px] h-[50px] flex justify-center items-center text-[14px] font-semibold"
                    >
                      Chose a microtopic
                    </div>
                  </div>
                )}

                {selectedFocus === "Gradius" && (
                  <div className="relative">
                    <div
                      className={`group relative w-[246px] ${containerHeight} bg-[#2D2E38] shadow-[0_0_15px_2px_#A436F1] cursor-pointer transition-all duration-300 overflow-hidden rounded-md`}
                      onMouseEnter={() => {
                        if (!disableHover) {
                          setExpanded(true);
                        }
                      }}
                      onMouseLeave={() => {
                        setExpanded(false);
                        setDisableHover(false);
                      }}
                      onClick={() => {
                        // On click, collapse and disable hover until the mouse leaves.
                        setExpanded(false);
                        setDisableHover(true);
                        setSelectedFocus("Gradius");
                      }}
                    >
                      {/* Header & Image Section (pinned in place) */}
                      <div className="absolute top-0 left-0 right-0 h-[50px] flex items-center justify-center">
                        <h2 className="text-[14px] font-semibold text-center">
                          Gradius Smart Study
                        </h2>
                        <div className="absolute top-3 left-5">
                          <img src="../../public/Group 628841.png" alt="Icon" />
                        </div>
                      </div>

                      {/* Extra Text Section (reveals when expanded) */}
                      <div className="absolute top-[50px] left-0 right-0 flex flex-col items-center justify-center">
                        <p className="text-[12px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                          <span className="font-medium text-center px-3">
                            <span className="text-[#A436F1]">
                              {" "}
                              Gradius Smart Study{" "}
                            </span>
                            is our intelligent system that delivers the right
                            material, perfectly tailored to your needs and
                            goals.
                          </span>
                          <span className="font-medium text-center px-3">
                            Select Smart Study, dive into evolving content, and
                            let Gradius supercharge your learning journey.
                          </span>
                        </p>
                      </div>
                    </div>
                    {dtimer && (
                      <div className="absolute -top-3 -left-14">
                        <img src="../../public/leftWing.png" alt="" />
                      </div>
                    )}
                    {!dtimer && (
                      <div className="absolute top-3 -left-8">
                        <button onClick={() => setSelectedFocus("")}>
                          <X />
                        </button>
                      </div>
                    )}
                    {dtimer && (
                      <div className="absolute -top-4 -right-14">
                        <img src="../../public/rightWing.png" alt="" />
                      </div>
                    )}
                  </div>
                )}

                {selectedFocus === "Micro" && (
                  <div className="relative">
                    <div className="w-[246px] h-[50px] bg-[#2D2E38] rounded-md flex gap-3 px-6 justify-start items-center">
                      <img src="../../public/micro.png" alt="" />
                      <div className="text-[14px] font-semibold relative">
                        Chose a microtopic
                      </div>
                    </div>
                    <div className="absolute top-3 -left-8">
                      <button onClick={() => setSelectedFocus("")}>
                        <X />
                      </button>
                    </div>
                    <textarea
                      name=""
                      id=""
                      placeholder="Photosyntesis, French Revolution..."
                      className="bg-[#2D2E38] w-full rounded-md p-3 mt-6"
                      value={microtopic}
                      onChange={(e) => setMicrotopic(e.target.value)}
                    ></textarea>
                  </div>
                )}
              </div>
            )}
          </div>
          {/* step 4 */}
          {selectedSession &&
            subjectListChosen.length !== 0 &&
            selectedFocus && (
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

export default NewStudyModal;
