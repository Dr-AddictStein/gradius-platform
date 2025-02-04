import React, { useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface ColorPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (subject: string, color: string) => void;
}

const hexagonalColors = [
  "#FF0000", "#FF7F00", "#FFFF00", "#7FFF00", "#00FF00", "#00FF7F", "#00FFFF", "#007FFF", "#0000FF", "#7F00FF", "#FF00FF", "#FF007F",
  "#D2691E", "#8B0000", "#4B0082", "#800080", "#008000", "#808000", "#4682B4", "#5F9EA0", "#2E8B57", "#FFD700", "#FF4500", "#DC143C"
];

const ColorPickerModal: React.FC<ColorPickerModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [subjectName, setSubjectName] = useState("");
  const [selectedColor, setSelectedColor] = useState("#4F46E5");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(subjectName, selectedColor);
    onClose();
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="w-[601px] bg-[#343540] rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <h2 className="text-white text-[20px] font-semibold text-center">
            Create New Subject
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4">
          {/* Subject Input */}
          <div className="mb-6">
            <p className="text-white text-sm mb-2">Name of the subject</p>
            <input
              type="text"
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
              placeholder="Maths, Physics, Science..."
              className="w-full bg-[#2c2c2e] text-white rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* Color Selection */}
          <div>
            <p className="text-white text-sm mb-2">Choose a color</p>
            <div className="grid grid-cols-2 gap-3">
              {/* Left Panel */}
              <div className="bg-[#2c2c2e] rounded-lg p-3">
                {/* Gradient Slider */}
                <div className="relative h-36 mb-3 rounded-md overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to right, transparent, ${selectedColor})`,
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, white, transparent, black)",
                    }}
                  />
                  <input
                    type="color"
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>

                {/* Color Input Row */}
                <div className="flex items-center gap-2">
                  <select className="bg-[#3c3c3e] text-white text-xs rounded px-2 py-1">
                    <option>Hex</option>
                  </select>
                  <div className="flex-1 bg-[#3c3c3e] rounded flex items-center px-2">
                    <span className="text-gray-400 text-xs">#</span>
                    <input
                      type="text"
                      value={selectedColor.slice(1).toUpperCase()}
                      onChange={(e) => setSelectedColor("#" + e.target.value)}
                      className="bg-transparent text-white text-xs px-1 py-1 w-full focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Right Panel - Hexagonal Color Picker */}
              <div className="bg-[#2c2c2e] rounded-lg p-2 flex flex-wrap gap-2 justify-center items-center">
                {hexagonalColors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className="w-6 h-6 rounded-full border border-gray-500"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Create Button */}
          <div className="w-full flex justify-center pt-6">
            <button
              onClick={handleSubmit}
              className="w-[307px] h-[38px] bg-[#A436F1] rounded-[10px] hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300"
            >
              Create Subject
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default ColorPickerModal;