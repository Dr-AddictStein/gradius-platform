import React from "react";

const StrengthGraphRed: React.FC = ({ isShort }) => {
  const strengths = [
    { label: "Dummy", value: 100 },
    { label: "Dummy", value: 80 },
    { label: "Dummy", value: 90 },
    { label: "Dummy", value: 70 },
  ];

  return (
    <div className="  px-10 rounded-xl w-full">
      {!isShort && (
        <div className="space-y-2">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="bg-[#9D372A] text-white text-start py-2 px-4 rounded-lg w-fit"
              // style={{ width: `${strength.value}%` }}
            >
              {strength.label}
            </div>
          ))}
        </div>
      )}
      {isShort && (
        <div className="space-y-2">
          {strengths.slice(0, 2).map((strength, index) => (
            <div
              key={index}
              className="bg-[#9D372A] text-white text-start py-1 px-4 rounded-lg w-fit"
              // style={{ width: `${strength.value}%` }}
            >
              {strength.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StrengthGraphRed;
