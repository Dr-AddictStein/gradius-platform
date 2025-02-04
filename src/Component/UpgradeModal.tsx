import React from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UpgradeModal: React.FC<UpgradeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="w-[1006px] h-[587px] bg-[#343540] rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center py-4 pl-10 pr-4 border-b border-gray-800">
          <h2 className="text-white text-[16px] font-bold">
            Upgrade your plan
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200"
          >
            <X size={20} />
          </button>
        </div>
        {/* Content */}
        <div className="flex flex-col p-10 text-center leading-8">
          {/* Your upgrade content goes here */}
          <div className="w-full flex gap-4 justify-around">
            <div className="w-[391px] rounded-[10px] border-[2px] border-[#A436F1] p-8 h-[460px] flex flex-col justify-between">
              <div className=" flex gap-3 items-center">
                <p className="text-[20px] font-bold">Monthly Plan</p>
                <img
                  src="../../public/1star.png"
                  className="w-[20px] h-[20px]"
                  alt=""
                />
              </div>

              <div className=" flex flex-col gap-4 ">
                <div className="flex ">
                  <div className="relative">
                    <p className="text-[24px] font-normal">€14.99</p>
                    <div className="border-[1px] w-[77px] border-[#A436F1] absolute top-1/2 "></div>
                  </div>
                  <div className=" relative bg-red-600">
                    <p className="text-[14px] font-normal text-[#ACADB2] absolute bottom-0">
                      /month
                    </p>
                  </div>
                </div>
                <div className="text-[48px] font-bold text-left">€0</div>
              </div>

              <div className="leading-7 text-left">
                <p className="text-[16px] font-normal text-[#ACADB2]">
                  Enjoy 7 days free trial, then €20/month.
                </p>
                <p className="text-[15px] font-bold text-[#ACADB2]">
                  Billed Monthly.
                </p>
              </div>

              <div className="">
                <div className="flex gap-3 items-center">
                  <img
                    src="../../public/tick.png"
                    className="w-[16px] h-[12px]"
                    alt=""
                  />
                  <p className="text-[16px] font-normal text-[#ACADB2]">
                    Paid monthly, cancel anytime.
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <img
                    src="../../public/tick.png"
                    className="w-[16px] h-[12px]"
                    alt=""
                  />
                  <p className="text-[16px] font-normal text-[#ACADB2]">
                    Enjoy personalized learning flexibly.
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <img
                    src="../../public/redClose.png"
                    className="w-[12px] h-[12px]"
                    alt=""
                  />
                  <p className="text-[16px] font-normal text-[#ACADB2]">
                    3 months unpaid = AI progress lost
                  </p>
                </div>
              </div>

              <button className="w-[307px] h-[38px] bg-[#A436F1] rounded-[10px] hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300">
                <p className="text-[14px] font-semibold">Level Up!</p>
              </button>
            </div>
            <div className="w-[391px] rounded-[10px] border-[2px] border-[#A436F1] p-8 h-[460px] flex flex-col justify-between">
              <div className=" flex gap-3 items-center">
                <p className="text-[20px] font-bold">Yearly Plan</p>
                <div className="h-full w-[50%] relative">
                  <div className="absolute">
                    <img src="../../public/starBig.png" alt="" />
                  </div>
                  <div className="absolute left-8 -top-1">
                    <img src="../../public/starSmall.png" alt="" />
                  </div>
                  <div className="absolute left-8 top-4">
                    <img src="../../public/starMedium.png" alt="" />
                  </div>
                </div>
              </div>

              <div className=" flex flex-col gap-4 ">
                <div className="flex ">
                  <div className="relative">
                    <p className="text-[24px] font-normal">€9.99</p>
                    <div className="border-[1px] w-[69px] border-[#A436F1] absolute top-1/2 "></div>
                  </div>
                  <div className=" relative bg-red-600">
                    <p className="text-[14px] font-normal text-[#ACADB2] absolute bottom-0">
                      /month
                    </p>
                  </div>
                </div>
                <div className="text-[48px] font-bold text-left">€0</div>
              </div>

              <div className="leading-7 text-left">
                <p className="text-[16px] font-normal text-[#ACADB2]">
                  Enjoy 7 days free trial, then €10/month.
                </p>
                <p className="text-[15px] font-bold text-[#ACADB2]">
                  Billed annually.
                </p>
              </div>

              <div className="">
                <div className="flex gap-3 items-center">
                  <img
                    src="../../public/tick.png"
                    className="w-[16px] h-[12px]"
                    alt=""
                  />
                  <p className="text-[16px] font-normal text-[#ACADB2]">
                    50% off: pay just €120/year.
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <img
                    src="../../public/tick.png"
                    className="w-[16px] h-[12px]"
                    alt=""
                  />
                  <p className="text-[16px] font-normal text-[#ACADB2]">
                    Your AI-Tutor all year round!
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <img
                    src="../../public/tick.png"
                    className="w-[16px] h-[12px]"
                    alt=""
                  />
                  <p className="text-[16px] font-normal text-[#ACADB2]">
                    Never lose your progess!
                  </p>
                </div>
              </div>

              <button className="w-[307px] h-[38px] bg-[#A436F1] rounded-[10px] hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300">
                <p className="text-[14px] font-semibold">Level Up!</p>
              </button>
            </div>
          </div>
        </div>
        {/* Footer or additional actions */}
        <div className="flex justify-between gap-0">
          {/* Your additional content goes here */}
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default UpgradeModal;
