import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ColorPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (subject: string, color: string) => void;
}

const ColorPickerModal: React.FC<ColorPickerModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [subjectName, setSubjectName] = useState('');
  const [selectedColor, setSelectedColor] = useState('#4F46E5');
  const [opacity, setOpacity] = useState(100);
  
  const savedColors = [
    ['#FF1493', '#FF4500', '#FF69B4', '#8A2BE2', '#1E90FF', '#40E0D0', '#32CD32','#FF69B4', '#FF6347', '#DDA0DD', '#6495ED', '#00CED1', '#98FB98', '#FFD700']
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(subjectName, selectedColor);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="w-[601px] bg-[#343540] rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <h2 className="text-white text-lg font-medium">Create New Subject</h2>
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
            <div className="grid grid-cols-1 gap-3">
              {/* Left Panel */}
              <div className="bg-[#2c2c2e] rounded-lg p-3">
                {/* Gradient Slider */}
                <div className="relative h-36 mb-3 rounded-md overflow-hidden">
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to right, transparent, ${selectedColor})`
                    }}
                  />
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to bottom, white, transparent, black)'
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
                      onChange={(e) => setSelectedColor('#' + e.target.value)}
                      className="bg-transparent text-white text-xs px-1 py-1 w-full focus:outline-none"
                    />
                  </div>
                </div>

                {/* Saved Colors */}
                <div className="mt-3 space-y-2 w-full">
                  {savedColors.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex gap-1">
                      {row.map((color, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedColor(color)}
                          className="w-6 h-6 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Panel - Hexagonal Color Picker */}
              
            </div>
          </div>

          {/* Create Button */}
          <button
            onClick={handleSubmit}
            className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-2 text-sm font-medium"
          >
            Create Subject
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorPickerModal;