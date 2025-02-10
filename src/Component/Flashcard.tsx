import React, { useState } from "react";

const Flashcard = () => {
  const [isQuestion, setIsQuestion] = useState(true);
  return (
    <div className="h-full w-full">
      {isQuestion && (
        <div className="relative w-full h-full p-4 flex justify-center">
          <div className="w-full h-full flex justify-center items-center">
            <p className="font-bold text-[16px]">
              What are the assumptions made by the CAPM?
            </p>
          </div>

          <button
            onClick={() => setIsQuestion(false)}
            className=" bottom-5 absolute w-[90%] h-[41px] border-[1px] border-[#BF7DED] rounded-[6px] hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300"
          >
            <p className="font-bold text-[16px] text-center">Show Answer</p>
          </button>
        </div>
      )}

      {!isQuestion && (
        <div className="relative w-full h-full p-4 flex justify-center">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <button
              onClick={() => setIsQuestion(true)}
              className="  w-[30%] h-[41px] border-[1px] border-[#BF7DED] rounded-[6px] hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300"
            >
              <p className="font-bold text-[16px] text-center">Show Question</p>
            </button>
            <div className="px-8 pt-3 text-[12px] font-medium leading-6 h-[85%]">
              <div className=" h-[65%] overflow-y-auto scrollbar-hide">
                <p>
                  The Capital Asset Pricing Model (CAPM) relies on several key
                  assumptions to function as a theoretical framework for
                  determining the expected return of an asset. These assumptions
                  include:
                </p>
                <ol style={{ listStyleType: "decimal" }} className="px-3 pt-2">
                  <li className="pb-3">
                    Rational and Risk-Averse Investors
                    <ul style={{ listStyleType: "disc" }} className="px-3 pt-1">
                      <li>
                        Investors are rational and aim to maximize the expected
                        utility of their wealth.
                      </li>
                      <li>
                        They are risk-averse, preferring less risk for a given
                        level of expected return.
                      </li>
                    </ul>
                  </li>
                  <li className="pb-3">
                    Rational and Risk-Averse Investors
                    <ul style={{ listStyleType: "disc" }} className="px-3 pt-1">
                      <li>
                        All investors have the same expectations about asset
                        returns, variances, and covariances.
                      </li>
                      <li>
                        This implies that everyone analyzes the market using the
                        same information and arrives at the same conclusions.
                      </li>
                    </ul>
                  </li>
                  <li className="pb-3">
                    Single-Period Investment Horizon
                    <ul style={{ listStyleType: "disc" }} className="px-3 pt-1">
                      <li>
                        Investors make decisions based on a single time period,
                        typically one year.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="bottom-5 absolute w-[90%]">
            <div className="w-full mb-3 flex justify-between gap-4">
              <button className="w-1/3 h-[41px] border-[1px] border-[#74ED8F] rounded-[6px] hover:shadow-[0_0_15px_2px_#74ED8F] transition-shadow duration-300 flex items-center justify-center">
                <p className="font-bold text-[16px] text-center">Easy</p>
              </button>
              <button className="w-1/3 h-[41px] border-[1px] border-[#F4A462] rounded-[6px] hover:shadow-[0_0_15px_2px_#F4A462] transition-shadow duration-300 flex items-center justify-center">
                <p className="font-bold text-[16px] text-center">Medium</p>
              </button>
              <button className="w-1/3 h-[41px] border-[1px] border-[#FF0000] rounded-[6px] hover:shadow-[0_0_15px_2px_#FF0000] transition-shadow duration-300 flex items-center justify-center">
                <p className="font-bold text-[16px] text-center">Hard</p>
              </button>
            </div>
            <div className="h-full w-full">
              <button className="  w-full h-[41px] border-[1px] border-[#BF7DED] rounded-[6px] hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300">
                <p className="font-bold text-[16px] text-center">
                  Explanation From Gradius!
                </p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Flashcard;
