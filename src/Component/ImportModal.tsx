import React, { useState } from "react";
import { X } from "lucide-react";
import GizmoImportModal from "./GizmoImport";
import QuizletImportModal from "./QuizletImport";
import AnkiImportModal from "./AnkiImport";

interface ImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (subject: string, color: string) => void;
}

const ImportModal: React.FC<ImportModalProps> = ({ isOpen, onClose }) => {
  const [gizmo, setGizmo] = useState(false);
  const [quizlet, setQuizlet] = useState(false);
  const [anki, setAnki] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="w-[1222px] h-[494px] bg-[#343540] rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <h2 className="text-white text-[16px] font-bold">
            Import your study materials
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200"
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex flex-col p-10 text-center leading-8">
          <p className="text-[16px] font-medium">
            Import your materials from the apps you already use. Why? Because
            we’ve made <span className="text-[#BF7DED]">adaptivity</span> our
            top priority for now. <br /> But don’t worry—soon, Gradius will be
            able to generate study materials tailored just for you from your
            uploaded documents!
          </p>
        </div>

        <div className="flex  justify-between gap-0">
          <img className="cursor-pointer" src="../../public/Gizmo.png" alt=""  onClick={() => setGizmo(true)}/>
          <img
            className="cursor-pointer"
            src="../../public/Quizlet.png"
            alt=""
            onClick={() => setQuizlet(true)}
          />
          <img className="cursor-pointer" src="../../public/Anki.png" alt="" onClick={() => setAnki(true)}/>
          <img className="cursor-pointer" src="../../public/Vaia.png" alt="" />
        </div>
      </div>
      <GizmoImportModal
        isOpen={gizmo}
        onClose={() => setGizmo(false)}
      />
      <QuizletImportModal
        isOpen={quizlet}
        onClose={() => setQuizlet(false)}
      />
      <AnkiImportModal
        isOpen={anki}
        onClose={() => setAnki(false)}
      />
    </div>
  );
};

export default ImportModal;
