import React from "react";
import { ChevronDown, Plus } from "lucide-react";
import logo from "../../public/logo.png";
import homeIcon from "../../public/homeIcon.png";
import subjectIcon from "../../public/subjectIcon.png";
import upgradeIcon from "../../public/upgradeIcon.png";

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

  const [isSubjectsOpen, setIsSubjectsOpen] = React.useState(true);

  const subjects: Subject[] = [
    { id: "1", name: "Physics", isActive: true, color: "red" },
    { id: "2", name: "History", isActive: false, color: "green" },
    { id: "3", name: "Maths", isActive: false, color: "red" },
  ];

  const user: User = {
    name: "Marcus Gradius",
    email: "gradius@gmail.com",
    avatar: "../../public/userAvatar.png",
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-[17%]  px-3 py-4 flex flex-col justify-between ">
      <div className="flex flex-col justify-between items-center h-full w-full">

      {/* Logo */}
      <div className=" w-full flex justify-center items-center gap-3 mb-6">
        <img src={logo} alt="Gradius Logo" className="w-16 h-16 rounded" />
        <div>
          <h1 className="font-semibold text-4xl text-white">Gradius</h1>
          <p className="text-lg text-gray-400">Learn Your Way</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full flex-1 justify-center items-center">
        {/* Home */}
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg mb-4 hover:bg-gray-700 cursor-pointer text-white">
          <img src={homeIcon} alt="Home" />
          <span>Home</span>
        </div>

        {/* Subjects */}
        <div className="mb-4">
          <div
            className="flex items-center justify-between px-3 py-2 cursor-pointer text-white"
            onClick={() => setIsSubjectsOpen(!isSubjectsOpen)}
          >
            <div className="flex items-center gap-3">
              <img src={subjectIcon} alt="Subjects" />
              <span>Subjects</span>
            </div>
            <ChevronDown
              size={16}
              className={`text-gray-400 transition-transform ${
                isSubjectsOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {isSubjectsOpen && (
            <div className="mt-2">
              {/* New Subject Button */}
              <div className="mx-3 mb-2 px-3 py-2 border border-dashed border-gray-700 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gray-700 text-gray-400">
                <Plus size={16} />
                <span>New Subject</span>
              </div>

              {/* Subject List */}
              {subjects.map((subject) => (
                <div
                  key={subject.id}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg mx-3 cursor-pointer text-white ${
                    subject.isActive ? "bg-gray-700" : "hover:bg-gray-700"
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${colorMap[subject.color]}`} />
                  <span>{subject.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* User Profile */}
      <div className="w-full bg-[#343540] rounded-md p-3 flex flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
          <div>
            <h3 className="text-sm sm:text-lg font-medium text-white">{user.name}</h3>
            <p className="text-xs sm:text-sm text-gray-400">{user.email}</p>
          </div>
        </div>

        {/* Upgrade Button */}
        <button className="w-full py-2 bg-violet-600 hover:bg-violet-700 rounded-lg flex items-center justify-center gap-2 text-white">
          <img src={upgradeIcon} alt="Upgrade" className="w-5 h-5" />
          <span>Upgrade</span>
        </button>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
