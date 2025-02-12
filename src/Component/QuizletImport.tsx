import React, { useState } from "react";
import { Notebook, Play, X } from "lucide-react";

interface QuizletImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (subject: string, color: string) => void;
}

const QuizletImportModal: React.FC<QuizletImportModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="w-[75vw] h-[65vh] bg-[#343540] rounded-lg flex flex-col justify-between">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <h2 className="text-white text-[16px] font-bold">
            Let’s Import for Quizlet
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
                <img src="../../public/quizletLogo.png" alt="" />
                <p className="text-[14px] font-semibold">Tutorial Video</p>
              </button>
            </div>
          </div>
          <div className="relative w-[48%] h-full">
            <div className="h-full flex flex-col justify-between  ">
              <div className="h-[70%]">
                <div className=" mb-6 text-[14px] font-semibold">
                  Paste here your flashcards
                </div>
                <div className="w-full border-2 border-[#565868] h-full rounded-[6px] flex flex-col items-center justify-start">
                  <div className="w-full p-6">
                    <h2 className="text-[14px] font-normal">Paste Here</h2>
                  </div>
                  <div className="absolute top-[35%] left-0">
                    <img src="../../public/quizletShade.png" alt="" />
                  </div>
                  <div className="absolute top-[20%] right-0">
                    <img src="../../public/quizletShade.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="h-[10%] w-full flex justify-center items-center">
                <div className="w-full flex justify-center items-center">
                  <button
                    className="bg-[#A436F1] h-[50px] w-[161px] rounded-[6px] flex justify-center gap-5 items-center"
                    onClick={() =>
                      document.getElementById("fileInput")?.click()
                    }
                  >
                    <img
                      src="../../public/docs.png"
                      alt=""
                      className="w-[13px] h-[16px]"
                    />
                    <h2 className="text-[14px] font-semibold text-center">
                      Select File
                    </h2>
                  </button>
                  <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={(e) => console.log(e.target.files)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizletImportModal;
