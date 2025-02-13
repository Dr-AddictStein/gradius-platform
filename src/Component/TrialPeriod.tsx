import React, { useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import UpgradeModal from "./UpgradeModal";

interface TrialPeriodModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TrialPeriodModal: React.FC<TrialPeriodModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="lg:w-[55vw] w-[95vw] h-[80vh] bg-[#343540] rounded-lg">
        {/* Header */}
        <div className="flex justify-end items-center py-4 pl-10 pr-4 border-b border-gray-800">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200"
          >
            <X size={20} />
          </button>
        </div>
        {/* Content */}
        <div className="flex flex-col justify-around p-10 text-center leading-8 h-full">
          {/* Your upgrade content goes here */}
          <p className="text-[24px] font-bold">
            Your free trial has ended but the best is yet to come!
          </p>
          <p className="text-[16px] font-bold">
            <span className="text-[#A436F1]">Don’t stop now</span>—Gradius is
            just getting to know you! Upgrade to premium to unlock unlimited
            adaptivity, personalized recommendations, and the full power of your{" "}
            <span className="text-[#A436F1]">self-trained AI tutor</span>
          </p>
          <div className="flex w-full justify-center items-center gap-3">
            <div className="">
              <img src="../../public/leftWing.png" alt="" />
            </div>
            <div className="h-full flex flex-col justify-end items-center">
              <button
                onClick={() => setIsUpgradeModalOpen(true)}
                className=" hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300 w-[198px] h-[40px] py-2 bg-[#A436F1] rounded-lg flex items-center justify-center gap-2 text-white"
              >
                <img
                  src="../../public/upgradeIcon.png"
                  alt="Upgrade"
                  className="w-3 h-3"
                />
                <span className="text-[16px] font-normal">Upgrade</span>
              </button>
              <p className="text-[11px] font-normal text-[#ACADB6]">
                Keep Learning, Your Way
              </p>
            </div>
            <div className="">
              <img src="../../public/rightWing.png" alt="" />
            </div>
          </div>
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

export default TrialPeriodModal;
