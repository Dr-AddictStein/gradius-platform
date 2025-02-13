import React, { useState } from "react";
import { ChevronDown, ChevronRight, Plus } from "lucide-react";
import logo from "../../public/logo.png";
import homeIcon from "../../public/homeIcon.png";
import subjectIcon from "../../public/subjectIcon.png";
import upgradeIcon from "../../public/upgradeIcon.png";
import { useNavigate } from "react-router-dom";
import ColorPickerModal from "./ColorPickerModal";
import UpgradeModal from "./UpgradeModal";
import ProfileModal from "./ProfileModal";

interface Subject {
  id: string;
  name: string;
  isActive: boolean;
  color: string;
}

interface User {
  name: string;
  email: string;
  avatar: string;
}

const Sidebar = () => {
  const colorMap: { [key: string]: string } = {
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
  };
  const [activeTab, setActiveTab] = React.useState("Home"); // Track active tab
  const [activeSubject, setActiveSubject] = React.useState(""); // Track active subject
  const [isSubjectsOpen, setIsSubjectsOpen] = React.useState(false);

  const subjects: Subject[] = [
    { id: "1", name: "Physics", isActive: false, color: "red" },
    { id: "2", name: "History", isActive: false, color: "green" },
    { id: "3", name: "Maths", isActive: false, color: "red" },
  ];

  const navigate = useNavigate();

  const user: User = {
    name: "Marcus Gradius",
    email: "marcus.gradius@gmail.com",
    avatar: "../../public/userAvatar.png",
  };

  const handleSubmit = (subject: string, color: string) => {
    console.log("New subject:", subject, "with color:", color);
    // Handle the submission here
  };

  const [isNewSubjectModalOpen, setIsNewSubjectModalOpen] = useState(false);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  return (
    <div className="fixed top-0 w-[24%] xl:w-[16%] h-screen py-4 2xl:pl-6 pl-2 flex flex-col justify-between ">
      <div className="flex flex-col justify-between items-center h-full w-full">
        {/* Logo */}
        <div className="w-full flex flex-col items-center gap-6">
          <div className=" w-[177px] h-[49px] flex justify-center items-center gap-3 ">
            <img
              src={logo}
              alt="Gradius Logo"
              className="w-[49px] h-[49px] rounded"
            />
            <div>
              <h1 className="text-[20px] font-bold text-white">Gradius</h1>
              <p className="text-[16px] font-medium text-gray-400">
                Learn Your Way
              </p>
            </div>
          </div>
          <div className="w-full bg-slate-700 h-[1px]"></div>

          {/* Navigation */}
          <div className="w-full flex flex-col items-center justify- gap-4">
            {/* Home Button */}
            <button
              className={`flex w-full h-[50px] justify-start px-8 gap-6 items-center rounded-[6px] border-[1px] border-slate-600 ${
                activeTab === "Home" ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
              onClick={() => {
                setActiveTab("Home");
                setIsSubjectsOpen(false);
                navigate("/dashboard");
              }}
            >
              <img src={homeIcon} alt="Home" className="h-[20px] w-[20px]" />
              <span className="text-[14px] font-semibold">Home</span>
            </button>

            {/* Subjects Button */}
            <button
              onClick={() => {
                setIsSubjectsOpen(!isSubjectsOpen);
                setActiveTab("Subjects");
                setActiveSubject("");
              }}
              className={`flex w-full h-[50px] justify-between px-8 items-center rounded-[6px] border-[1px] border-slate-600 ${
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
                <span className="text-[14px] font-semibold">Subjects</span>
              </div>
              <ChevronRight
                size={16}
                className={`text-gray-400 transition-transform duration-300 lg:block hidden ${
                  isSubjectsOpen ? "rotate-90" : ""
                }`}
              />
            </button>

            {/* Scrollable Subjects List */}
            {isSubjectsOpen && (
              <div className="w-full flex justify-end items-end">
                <div className="w-[95%] flex flex-col justify-end items-end gap-2">
                  {/* New Subject Button */}
                  <div
                    onClick={() => setIsNewSubjectModalOpen(true)}
                    className="text-[12px] hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300 w-full h-[42px] px-10 border border-dashed border-gray-700 rounded-lg flex items-center gap-2 cursor-pointer  text-gray-400"
                  >
                    <Plus size={16} />
                    <span>New Subject</span>
                  </div>

                  {/* Scrollable Subject List */}
                  <div className="w-full max-h-[200px] overflow-y-auto scrollbar-hide px-2 py-2">
                    {subjects.map((subject) => (
                      <div
                        key={subject.id}
                        className={` hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300 w-full h-[42px] flex items-center gap-3 px-10 rounded-lg cursor-pointer text-white ${
                          activeSubject===subject.name ? "bg-gray-700" : ""
                        }`}
                        onClick={() => {
                          navigate("/dashboard/perSubject");
                          setActiveSubject(subject.name);
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
            )}
          </div>
        </div>

        {/* User Profile */}
        <div className="w-full h-[160px] bg-[#343540] rounded-md p-3 flex flex-col items-center justify-around">
          <div className="flex gap-3 cursor-pointer items-center" onClick={() => setIsProfileModalOpen(true)}>
            <div>
              <img
                src={user.avatar}
                alt="User Avatar"
                className="rounded-full lg:h-[40px] h-[36px] w-[40px]"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <div className="xl:text-[12px] lg:text-[10px] text-[10px] font-semibold">{user.name}</div>
              <div className="text-[#828597] font-medium xl:text-[10px] lg:text-[8px] text-[8px]">
                {user.email}
              </div>
            </div>
          </div>
          {/* Upgrade Button */}
          <button onClick={() => setIsUpgradeModalOpen(true)} className=" hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300 w-[90%] h-[40px] py-2 bg-[#A436F1] rounded-lg flex items-center justify-center gap-2 text-white">
            <img src={upgradeIcon} alt="Upgrade" className="w-3 h-3" />
            <span className="text-[16px] font-normal">Upgrade</span>
          </button>
          
        </div>
      </div>
      <ColorPickerModal
        isOpen={isNewSubjectModalOpen}
        onClose={() => setIsNewSubjectModalOpen(false)}
        onSubmit={handleSubmit}
      />
      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
      />
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </div>
  );
};

export default Sidebar;
