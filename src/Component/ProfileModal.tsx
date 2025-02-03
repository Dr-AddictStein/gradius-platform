import React, { useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, X } from "lucide-react";
import UpgradeModal from "./UpgradeModal";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="w-[1200px] h-[550px] bg-[#343540] rounded-lg">
        {/* Header */}
        <div
          className="flex justify-end items-center py-4 pr-8 border-b border-gray-800 h-[94px] rounded-md"
          style={{ background: "linear-gradient(to right, #A436F1, #343540)" }}
        >
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <X size={20} />
          </button>
        </div>
        {/* Content */}
        <div className="p-8  h-[450px] flex flex-col justify-around">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-4">
              <div className="">
                <img
                  src="../../public/avatar.png"
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[19px] font-medium">Emilio Ponzecchi</h2>
                <h2 className="text-[15px] font-normal text-[#DADADA]">
                  emilio.ponzecchi@gradius.ai
                </h2>
              </div>
            </div>
            <button
              onClick={() => setIsUpgradeModalOpen(true)}
              className=" hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300 w-[198px] h-[40px] py-2 bg-violet-600 hover:bg-violet-700 rounded-lg flex items-center justify-center gap-2 text-white"
            >
              <img
                src="../../public/upgradeIcon.png"
                alt="Upgrade"
                className="w-3 h-3"
              />
              <span className="text-[16px] font-normal">Upgrade</span>
            </button>
          </div>

          <div className="flex justify-between gap-2">
            <div className=" flex flex-col gap-2">
              <label htmlFor="" className="text-[15px] font-normal">
                First Name
              </label>
              <input
                type="text"
                placeholder="Your First Name"
                className="bg-[#F9F9F9] px-4 py-2 w-[555px] h-[49px] rounded-[8px] text-black"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label htmlFor="" className="text-[15px] font-normal">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Your Last Name"
                className="bg-[#F9F9F9] px-4 py-2 w-[555px] h-[49px] rounded-[8px] text-black"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="gender" className="text-[15px] font-normal">
                Gender
              </label>
              <div className="relative">
                <select
                  id="gender"
                  className="appearance-none bg-[#F9F9F9] px-4 py-2 w-[555px] h-[49px] rounded-[8px] text-black"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {/* Custom arrow icon positioned absolutely */}
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <ChevronDown size={20} className="text-black" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="country" className="text-[15px] font-normal">
                Country
              </label>
              <input
                type="text"
                id="country"
                placeholder="Your Country"
                className="bg-[#F9F9F9] px-4 py-2 w-[555px] h-[49px] rounded-[8px] text-black"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={() => setIsUpgradeModalOpen(true)}
            className=" hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300 w-[198px] h-[40px] py-2 bg-violet-600 hover:bg-violet-700 rounded-lg flex items-center justify-center gap-2 text-white"
          >
            <span className="text-[16px] font-normal">Logout</span>
          </button>
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

export default ProfileModal;
