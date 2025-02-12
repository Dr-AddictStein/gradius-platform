import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowLeftSquare,
  MoveLeft,
  MoveLeftIcon,
  X,
} from "lucide-react";
import VideoLayers from "./VideoLayers";

interface RecommendationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (subject: string, color: string) => void;
}

const RecommendationModal: React.FC<RecommendationModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="xl:w-[80vw] w-[98vw] h-[95vh] bg-[#343540] rounded-lg p-3">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <h2 className="text-white text-[16px] font-bold">
            Recommendations from Gradius
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200"
          >
            <X size={20} />
          </button>
        </div>

        <div className="w-full h-[90%] flex flex-col justify-between items-center p-3">
          <div className="h-[10%] flex flex-col justify-center items-center p-2 text-center leading-6">
            <p className="text-[16px] font-medium">
              Gradius has been paying close attention to{" "}
              <span className="text-[#BF7DED]">how you learn</span>.<br />
              Based on your progress and challenges, here’s a set of
              recommendations crafted to fit your{" "}
              <span className="text-[#BF7DED]">unique learning style</span>{" "}
              perfectly!
            </p>
          </div>

          <div className="w-full h-[85%] flex justify-between">
            <div className="w-[48%] h-full bg-[#3D3F4A]  border-[1px] border-[#565868] rounded-[6px] px-4 pt-2">
              <div className="flex justify-between items-center p-4 border-b border-[#565868]">
                <h2 className="text-white text-[16px] font-bold">
                  CAPM Tailored to You
                </h2>
                <h2 className="text-white text-[16px] font-bold">
                  1/3
                </h2>
              </div>

              <div className="px-4 pt-3 text-[12px] font-medium leading-6 h-[85%]">
                <div className=" h-[85%] overflow-y-auto scrollbar-hide">
                  <p>
                    The Capital Asset Pricing Model (CAPM) relies on several key
                    assumptions to function as a theoretical framework for
                    determining the expected return of an asset. These
                    assumptions include:
                  </p>
                  <ol
                    style={{ listStyleType: "decimal" }}
                    className="px-3 pt-2"
                  >
                    <li className="pb-3">
                      Rational and Risk-Averse Investors
                      <ul
                        style={{ listStyleType: "disc" }}
                        className="px-3 pt-1"
                      >
                        <li>
                          Investors are rational and aim to maximize the
                          expected utility of their wealth.
                        </li>
                        <li>
                          They are risk-averse, preferring less risk for a given
                          level of expected return.
                        </li>
                      </ul>
                    </li>
                    <li className="pb-3">
                      Rational and Risk-Averse Investors
                      <ul
                        style={{ listStyleType: "disc" }}
                        className="px-3 pt-1"
                      >
                        <li>
                          All investors have the same expectations about asset
                          returns, variances, and covariances.
                        </li>
                        <li>
                          This implies that everyone analyzes the market using
                          the same information and arrives at the same
                          conclusions.
                        </li>
                      </ul>
                    </li>
                    <li className="pb-3">
                      Single-Period Investment Horizon
                      <ul
                        style={{ listStyleType: "disc" }}
                        className="px-3 pt-1"
                      >
                        <li>
                          Investors make decisions based on a single time
                          period, typically one year.
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>
                <div className="w-full h-[20%] flex justify-center items-center gap-8 ">
                  <button className="flex items-center gap-3">
                    <img
                      src="../../public/previous.png"
                      alt=""
                      className="w-[4px] h-[8px]"
                    />
                    <p className="text-[12px] font-medium">Previous</p>
                  </button>
                  <button className="flex items-center gap-3">
                    <p className="text-[12px] font-medium">Next</p>
                    <img
                      src="../../public/next.png"
                      alt=""
                      className="w-[4px] h-[8px]"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[48%] h-full flex flex-col items-center justify-center rounded-[6px] px-4 ">
              <VideoLayers />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationModal;
