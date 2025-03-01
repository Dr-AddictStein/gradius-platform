import React from "react";

const StrengthGraphGreen: React.FC = ({isShort}) => {
  const strengths = [
    { label: "Dummy", value: 90 },
    { label: "Dummy", value: 80 },
    { label: "Dummy", value: 90 },
    { label: "Dummy", value: 70 },

  ];

  return (
    <div className={` rounded-xl ${isShort?"px-10":"px-3"}  w-full`}>
      {!isShort && <div className="space-y-2">
        {strengths.map((strength, index) => (
          <div
            key={index}
            className="bg-teal-600 text-white py-2 px-4 rounded-lg text-start w-fit"
            // style={{ width: `${strength.value}%` }}
          >
            {strength.label}
          </div>
        ))}
      </div>}
      {isShort && <div className="space-y-2">
        {strengths.slice(0,2).map((strength, index) => (
          <div
            key={index}
            className="bg-teal-600 text-white py-1 px-4 rounded-lg text-start w-fit"
            // style={{ width: `fit` }}
          >
            {strength.label}
          </div>
        ))}
      </div>}
    </div>
  );
};

export default StrengthGraphGreen;
