import React, { useState } from "react";
import { X } from "lucide-react";

interface WelldoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (subject: string, color: string) => void;
}

const WelldoneModal: React.FC<WelldoneModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="lg:w-[25vw] w-[55vw] h-[60vh] bg-[#343540] rounded-lg">
        <div className="h-full flex flex-col justify-center items-center p-10 text-center leading-8 gap-6">
          <p className="text-[24px] font-bold mb-10">Well Done!</p>
          <p className="text-[24px] font-bold">
            Now let’s import your old material from Anki, Quizlet, Vaia or
            Gizmo!
          </p>
          <img src="../../public/glower.png" alt="" className="w-[60px] h-[60px]"/>
        </div>
      </div>
    </div>
  );
};

export default WelldoneModal;
