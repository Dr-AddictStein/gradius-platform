import React, { useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, X } from "lucide-react";
import UpgradeModal from "./UpgradeModal";

interface StartStudyingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StartStudyingModal: React.FC<StartStudyingModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="w-[580px] h-[550px] bg-[#343540] rounded-lg">
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
