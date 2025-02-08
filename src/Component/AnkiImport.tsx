import React, { useState } from "react";
import { Notebook, Play, X } from "lucide-react";

interface AnkiImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (subject: string, color: string) => void;
}

const AnkiImportModal: React.FC<AnkiImportModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="w-[1222px] h-[65vh] bg-[#343540] rounded-lg flex flex-col justify-between">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <h2 className="text-white text-[16px] font-bold">
            Let’s Import for Anki
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200"
          >
            <X size={20} />
          </button>
        </div>

        <div className="w-full h-[65vh] flex justify-between items-center p-4">
          <div className="relative w-[48%] h-full">
            <div className="w-full bg-[#3D3F4A] h-full rounded-[6px] flex items-center justify-center">
              <div className="bg-[#A436F1] h-[64px] w-[64px] rounded-full border-[5px] border-[#C3C3C3] flex justify-center items-center">
                <Play />
              </div>
            </div>
            <div className="absolute top-3 left-3">
              <button className="h-[38px] w-[145px] bg-[#202123] flex items-center justify-around rounded-[6px]">
                <img src="../../public/ankiLogo.png" alt="" />
                <p className="text-[14px] font-semibold">Tutorial Video</p>
              </button>
            </div>
          </div>
          <div className="relative w-[48%] h-full">
            <div className="w-full border-[2px] border-dashed border-[#565868] bg-[#3D3F4A] h-full rounded-[6px] flex flex-col items-center justify-around">
              <div className="w-full">
                <h2 className="text-[16px] font-bold text-center">
                  Import your Flashcards{" "}
                </h2>
                <h2 className="text-[14px] font-medium text-center text-[#828597] mt-2">
                  Please upload a .apkg file
                </h2>
              </div>
              <div className="w-full flex justify-center items-center">
                <button className="bg-[#A436F1] h-[50px] w-[161px] rounded-[6px] flex justify-center gap-5 items-center">
                  <img
                    src="../../public/docs.png"
                    alt=""
                    className="w-[13px] h-[16px]"
                  />
                  <h2 className="text-[14px] font-semibold text-center">
                    Select File
                  </h2>
                </button>
              </div>
            </div>
            <div className="absolute top-[40%] left-0">
              <img src="../../public/gizmoShade1.png" alt="" />
            </div>
            <div className="absolute top-[20%] right-0">
              <img src="../../public/gizmoShade1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnkiImportModal;
