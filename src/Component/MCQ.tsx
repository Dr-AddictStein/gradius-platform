import { p } from "framer-motion/client";
import { Check, X } from "lucide-react";
import React, { useState } from "react";

const MCQ = () => {
  const [chosenAnswer, setChosenAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("All of the above");
  const [options, setOptions] = useState([
    "Absence of Arbitrare",
    "Supply must equal demand",
    "Symmetric Information",
    "All of the above",
  ]);
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div
        className={`w-full h-full flex flex-col ${
          chosenAnswer !== "" ? "justify-around" : "justify-center"
        } items-center gap-6`}
      >
        <div className="w-full max-h-[60vh] overflow-y-auto scrollbar-hide">
          <div className="w-full h-full flex flex-col justify-center items-center gap-12">
            <p className="font-bold lg:text-[16px] text-[12px]">
              What are the assumptions made by the CAPM?
            </p>
            {chosenAnswer === "" &&
              options.map((op, index) => (
                <button
                  key={index}
                  onClick={() => setChosenAnswer(op)}
                  className=" w-[90%] h-[41px] border-[1px] border-[#BF7DED] rounded-[6px] hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300"
                >
                  <p className="font-bold lg:text-[16px] text-[12px] text-left pl-[8%]">
                    {index + 1 + ". " + op}
                  </p>
                </button>
              ))}
            {chosenAnswer !== "" &&
              options.map((op, index) => (
                <button
                  key={index}
                  onClick={() => setChosenAnswer(op)}
                  disabled
                  className={`${
                    correctAnswer === op
                      ? "border-[#74ED8F]"
                      : "border-[#FF0000]"
                  }   
                ${
                  chosenAnswer === op && op === correctAnswer
                    ? "shadow-[0_0_15px_2px_#74ED8F]"
                    : ""
                }   
                ${
                  chosenAnswer === op && op !== correctAnswer
                    ? "shadow-[0_0_15px_2px_#FF0000]"
                    : ""
                }   
                w-[90%] h-[41px] border-[1px]  rounded-[6px]  transition-shadow duration-300 flex items-center justify-between`}
                >
                  <p className="font-bold lg:text-[16px] text-[12px] text-left pl-[8%]">
                    {index + 1 + ". " + op}
                  </p>
                  {correctAnswer !== op && (
                    <div className="pr-[8%]">
                      <X color="red" size={30} />
                    </div>
                  )}
                  {correctAnswer === op && (
                    <div className="pr-[8%]">
                      <Check color="lime" size={30} />
                    </div>
                  )}
                </button>
              ))}
          </div>
        </div>
        {chosenAnswer !== "" && (
          <div className="font-semibold text-[20px]">
            {chosenAnswer !== correctAnswer && <p>No Problem!</p>}
            {chosenAnswer !== "" && chosenAnswer === correctAnswer && (
              <div className=" flex flex-col justify-center items-center gap-2">
                <div className="flex items-center justify-center gap-2">
                  <div className="h-[12px] w-0 bg-[#74ED8F] border-[2px] border-[#74ED8F] rounded-lg -rotate-[25deg]"></div>
                  <div className="h-[14px] w-0 bg-[#74ED8F] border-[2px] border-[#74ED8F] rounded-lg"></div>
                  <div className="h-[12px] w-0 bg-[#74ED8F] border-[2px] border-[#74ED8F] rounded-lg rotate-[25deg]"></div>
                </div>
                <p>Excelent!</p>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-[12px] w-0 bg-[#74ED8F] border-[2px] border-[#74ED8F] rounded-lg rotate-[25deg]"></div>
                  <div className="h-[14px] w-0 bg-[#74ED8F] border-[2px] border-[#74ED8F] rounded-lg"></div>
                  <div className="h-[12px] w-0 bg-[#74ED8F] border-[2px] border-[#74ED8F] rounded-lg -rotate-[25deg]"></div>
                </div>
              </div>
            )}
          </div>
        )}
        {chosenAnswer !== "" && (
          <div className="w-[90%]">
            <button className="  w-full h-[41px] border-[1px] border-[#BF7DED] rounded-[6px] hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300">
              <p className="font-bold text-[16px] text-center">
                Explanation From Gradius!
              </p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MCQ;
