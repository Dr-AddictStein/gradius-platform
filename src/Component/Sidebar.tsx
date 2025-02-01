import React from "react";
import { Home, BookOpen, Plus, ChevronDown, ArrowUpRight } from "lucide-react";
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
    // add more colors as needed
  };
  const [isSubjectsOpen, setIsSubjectsOpen] = React.useState(true);

  const subjects: Subject[] = [
    { id: '1', name: 'Physics', isActive: true, color: 'red' },
    { id: '2', name: 'History', isActive: false, color: 'green' },
    { id: '3', name: 'Maths', isActive: false, color: 'red' },
  ];

  const user: User = {
    name: "Marcus Gradius",
    email: "gradius@gmail.com",
    avatar: "../../public/userAvatar.png",
  };

  return (
    <div className="w-full h-screen px-1 py-4 flex flex-col justify-center items-center">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8 w-[90%] justify-center">
        <img
          src={logo}
          alt="Gradius Logo"
          className="w-[49px] h-[49px] rounded"
        />
        <div>
          <h1 className="font-semibold text-xl">Gradius</h1>
          <p className="text-sm text-gray-400">Learn Your Way</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 w-[90%]">
        {/* Home */}
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg mb-4 hover:bg-gray-800 cursor-pointer">
          <img src={homeIcon} alt="" />
          <span>Home</span>
        </div>

        {/* Subjects */}
        <div className="mb-4">
          <div
            className="flex items-center justify-between px-3 py-2 cursor-pointer"
            onClick={() => setIsSubjectsOpen(!isSubjectsOpen)}
          >
            <div className="flex items-center gap-3">
              <img src={subjectIcon} alt="" />
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
              <div className="mx-3 mb-2 px-3 py-2 border border-dashed border-gray-700 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gray-800">
                <Plus size={16} className="text-gray-400" />
                <span className="text-gray-400">New Subject</span>
              </div>

              {/* Subject List */}
              {subjects.map((subject) => (
                <div
                  key={subject.id}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg mx-3 cursor-pointer ${
                    subject.isActive ? "bg-gray-800" : "hover:bg-gray-800"
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
      <div className=" w-full flex justify-end h-[20%]">
        <div className=" bg-[#343540] rounded-[6px] w-full ml-2 h-full flex flex-col justify-around items-center px-2">
          <div className="flex items-center gap-3 ">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 rounded-full"
            />
            <div className="">
              <h3 className="text-sm sm:text-lg font-medium">{user.name}</h3>
              <p className="text-xs sm:text-sm text-gray-400">{user.email}</p>
            </div>
          </div>

          {/* Upgrade Button */}
          <button className="w-[90%] py-1 bg-violet-600 hover:bg-violet-700 rounded-lg flex items-center justify-center gap-2">
            <img
              src={upgradeIcon}
              alt="Gradius Logo"
              className="w-[10px] h-[10px]"
            />
            <span className="text-sm sm:text-lg">Upgrade</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
