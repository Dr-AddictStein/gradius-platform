import React, { useState } from "react";
import { X } from "lucide-react";

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (subject: string, color: string) => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="w-[45vw] h-[60vh] bg-[#343540] rounded-lg">
        {/* Header */}
        <div className="relative pt-4 pl-10 pr-4 ">
          {/* Right-aligned close button */}
          <button
            onClick={onClose}
            className="absolute right-4 text-gray-400 hover:text-gray-200"
          >
            <X size={20} />
          </button>
        </div>
        <div className="h-full flex flex-col justify-center items-center p-10 text-center leading-8 gap-6">
          <div className=" flex flex-col items-center justify-center gap-2">
            <img src="../../public/Alert Triangle.png" alt="" />
            <p className="text-[24px] font-bold mb-10 text-[#BF7DED]">
              Oops, something didn’t load!
            </p>
          </div>
          <p className="text-[24px] font-bold">
            Don’t worry, your self-trained tutor is still here, and we’re
            working to fix this problem right away
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
