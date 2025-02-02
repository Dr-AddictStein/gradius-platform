import React from "react";

const StrengthGraphGreen: React.FC = () => {
  const strengths = [
    { label: "Dummy", value: 40 },
    { label: "Dummy", value: 80 },
    { label: "Dummy", value: 60 },
    { label: "Dummy", value: 50 },
  ];

  return (
    <div className=" rounded-xl px-10 w-full">
      <h2 className="text-white text-center font-semibold mb-3">Strengths</h2>
      <div className="space-y-2">
        {strengths.map((strength, index) => (
          <div
            key={index}
            className="bg-teal-600 text-white py-2 px-4 rounded-lg"
            style={{ width: `${strength.value}%` }}
          >
            {strength.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrengthGraphGreen;
