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
import { useNavigate } from "react-router-dom";
import TrialPeriodModal from "./TrialPeriod";

interface PersonalQuestionProps {
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

const PersonalQuestion: React.FC<PersonalQuestionProps> = ({
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

  const navigate = useNavigate();

  const [gender, setGender] = useState("");
  const [ageGroup, setAgeGroup] = useState("");

  const [step, setStep] = useState(1);

  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="w-[70vw] lg:h-[88vh] h-[90vh] bg-[#343540] rounded-lg">
        {/* Header */}
        <div className="relative pt-4 pb-10 pl-10 pr-4 border-b border-gray-800">
          {/* Centered heading */}
          <h2 className="absolute left-1/2 transform -translate-x-1/2 text-white text-[16px] font-bold">
            Help Gradius Learn About You!
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
        {step < 3 && (
          <div className="flex flex-col justify-between items-center px-16 py-6 h-[90%]">
            <div className="text-[16px] font-medium text-center w-full h-[10%]">
              Your answers drive the science behind{" "}
              <span className="text-[#A436F1]">Gradius</span>. By sharing your
              input, you’re helping us use neuroscience and cognitive insights
              to build the{" "}
              <span className="text-[#A436F1]">
                smartest, most personalized tutor for you
              </span>
              . Optional, but incredibly valuable!
            </div>

            <div className="w-full h-[50%] ">
              {step === 1 && (
                <div className="w-full flex flex-col justify-between h-full">
                  <p className="text-[16px] fotn-bold">
                    What is your gender identity?
                  </p>
                  <button
                    onClick={() => setGender("Male")}
                    className={`${
                      gender === "Male" ? "shadow-[0_0_15px_2px_#BF7DED]" : ""
                    } w-full 2xl:h-[61px] h-[41px] border-[1px] border-[#BF7DED] rounded-[6px] hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300`}
                  >
                    <p className="font-normal text-[16px] text-left pl-[5%]">
                      Male
                    </p>
                  </button>
                  <button
                    onClick={() => setGender("Female")}
                    className={`${
                      gender === "Female" ? "shadow-[0_0_15px_2px_#BF7DED]" : ""
                    } w-full 2xl:h-[61px] h-[41px] border-[1px] border-[#BF7DED] rounded-[6px] hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300`}
                  >
                    <p className="font-normal text-[16px] text-left pl-[5%]">
                      Female
                    </p>
                  </button>
                  <button
                    onClick={() => setGender("Non-Binary")}
                    className={`${
                      gender === "Non-Binary"
                        ? "shadow-[0_0_15px_2px_#BF7DED]"
                        : ""
                    } w-full 2xl:h-[61px] h-[41px] border-[1px] border-[#BF7DED] rounded-[6px] hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300`}
                  >
                    <p className="font-normal text-[16px] text-left pl-[5%]">
                      Non-Binary
                    </p>
                  </button>
                  <button
                    onClick={() => setGender("Perfer not to say")}
                    className={`${
                      gender === "Perfer not to say"
                        ? "shadow-[0_0_15px_2px_#BF7DED]"
                        : ""
                    } w-full 2xl:h-[61px] h-[41px] border-[1px] border-[#BF7DED] rounded-[6px] hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300`}
                  >
                    <p className="font-normal text-[16px] text-left pl-[5%]">
                      Perfer not to say
                    </p>
                  </button>
                </div>
              )}
              {step === 2 && (
                <div className="w-full flex flex-col justify-between h-full">
                  <p className="text-[16px] fotn-bold">
                    What is your age group?
                  </p>
                  <div className="w-full flex justify-between">
                    <button
                      onClick={() => setAgeGroup("Under 18")}
                      className={`${
                        ageGroup === "Under 18"
                          ? "shadow-[0_0_15px_2px_#BF7DED]"
                          : ""
                      } w-[45%] 2xl:h-[61px] h-[41px] border-[1px] border-[#BF7DED] rounded-[6px] hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300`}
                    >
                      <p className="font-normal text-[16px] text-left pl-[5%]">
                        Under 18
                      </p>
                    </button>
                    <button
                      onClick={() => setAgeGroup("18-24")}
                      className={`${
                        ageGroup === "18-24"
                          ? "shadow-[0_0_15px_2px_#BF7DED]"
                          : ""
                      } w-[45%] 2xl:h-[61px] h-[41px] border-[1px] border-[#BF7DED] rounded-[6px] hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300`}
                    >
                      <p className="font-normal text-[16px] text-left pl-[5%]">
                        18-24
                      </p>
                    </button>
                  </div>
                  <div className="w-full flex justify-between">
                    <button
                      onClick={() => setAgeGroup("24-34")}
                      className={`${
                        ageGroup === "24-34"
                          ? "shadow-[0_0_15px_2px_#BF7DED]"
                          : ""
                      } w-[45%] 2xl:h-[61px] h-[41px] border-[1px] border-[#BF7DED] rounded-[6px] hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300`}
                    >
                      <p className="font-normal text-[16px] text-left pl-[5%]">
                        24-34
                      </p>
                    </button>
                    <button
                      onClick={() => setAgeGroup("35-44")}
                      className={`${
                        ageGroup === "35-44"
                          ? "shadow-[0_0_15px_2px_#BF7DED]"
                          : ""
                      } w-[45%] 2xl:h-[61px] h-[41px] border-[1px] border-[#BF7DED] rounded-[6px] hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300`}
                    >
                      <p className="font-normal text-[16px] text-left pl-[5%]">
                        35-44
                      </p>
                    </button>
                  </div>
                  <div className="w-full flex justify-between">
                    <button
                      onClick={() => setAgeGroup("45-54")}
                      className={`${
                        ageGroup === "45-54"
                          ? "shadow-[0_0_15px_2px_#BF7DED]"
                          : ""
                      } w-[45%] 2xl:h-[61px] h-[41px] border-[1px] border-[#BF7DED] rounded-[6px] hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300`}
                    >
                      <p className="font-normal text-[16px] text-left pl-[5%]">
                        45-54
                      </p>
                    </button>
                    <button
                      onClick={() => setAgeGroup("55+")}
                      className={`${
                        ageGroup === "55+"
                          ? "shadow-[0_0_15px_2px_#BF7DED]"
                          : ""
                      } w-[45%] 2xl:h-[61px] h-[41px] border-[1px] border-[#BF7DED] rounded-[6px] hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300`}
                    >
                      <p className="font-normal text-[16px] text-left pl-[5%]">
                        55+
                      </p>
                    </button>
                  </div>
                  <div className="w-full flex justify-center">
                    <button
                      onClick={() => setAgeGroup("Prefer not to say")}
                      className={`${
                        ageGroup === "Prefer not to say"
                          ? "shadow-[0_0_15px_2px_#BF7DED]"
                          : ""
                      } w-[45%] 2xl:h-[61px] h-[41px] border-[1px] border-[#BF7DED] rounded-[6px] hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300`}
                    >
                      <p className="font-normal text-[16px] text-left pl-[5%]">
                        Prefer not to say
                      </p>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="w-full h-[5%] ">
              <div className="w-full h-full flex justify-center items-center gap-8 ">
                <button
                  className="flex items-center gap-3"
                  onClick={() => {
                    if (step > 1) setStep(step - 1);
                  }}
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
                  onClick={() => {
                    setStep(step + 1);
                  }}
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
        )}

        {step === 3 && (
          <div className="flex flex-col justify-center items-center px-16 py-6 h-[90%] gap-16">
            <div className="text-[16px] font-medium text-center w-full h-[10%]">
              We really appreciate your input! You’re helping Gradius get even
              better at understanding and supporting your{" "}
              <span className="text-[#A436F1]">unique learning style</span>
            </div>
            <button
              className="bg-[#A436F1] hover:shadow-[0_0_15px_2px_#A436F1] text-white px-6 py-3 rounded-lg w-[246px] text-[16px] font-bold transition-shadow duration-300"
              onClick={() => setIsTrialModalOpen(true)}
            >
              Perfect, let’s move on!
            </button>
          </div>
        )}

        {/* Footer or additional actions */}
        <div className="flex justify-between gap-0">
          {/* Your additional content goes here */}
        </div>
      </div>
      <TrialPeriodModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
      />
    </div>,
    document.getElementById("modal-root")!
  );
};

export default PersonalQuestion;
