import React from "react";

const StrengthGraphRed: React.FC = () => {
  const strengths = [
    { label: "Dummy", value: 100 },
    { label: "Dummy", value: 80 },
    { label: "Dummy", value: 60 },
    { label: "Dummy", value: 50 },
  ];

  return (
    <div className="  px-10 rounded-xl w-full">
      <div className="space-y-2">
        {strengths.map((strength, index) => (
          <div
            key={index}
            className="bg-red-500 text-white py-2 px-4 rounded-lg"
            style={{ width: `${strength.value}%` }}
          >
            {strength.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrengthGraphRed;
