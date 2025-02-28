import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Zoom } from "react-awesome-reveal";

const UpLavel = () => {
  return (
    <Zoom delay={1} duration={2000}>
        <div
      className="max-w-5xl w-11/12 relative overflow-hidden bg-[#22013a]   rounded-lg md:h-[300px]  shadow-lg  md:my-16 md:p-10 p-4 mx-auto md:mt-8 md:bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/lavelup.svg')" }}
    >
      <div className=" text-white">
        <div className="h-[150px] -z-0 top-24 absolute  mt-1/2 rotate-12 w-[600px] bg-[#000000] rounded-full blur-3xl"></div>
        <div className="h-[240px] -top-16  blur-3xl absolute -right-16  -rotate-45 w-[240px] bg-[#000000] rounded-full "></div>
        <div className="h-[240px] -bottom-28  blur-3xl absolute -left-16  -rotate-45 w-[240px] bg-[#000000] rounded-full "></div>
        <h1 className="text-center text-[#F3ECFE] mt-7 text-2xl md:text-4xl z-50">One-size-doesn’t-fit-all <br /> Level up now!</h1>
        <p className="text-[#A436F1] text-center z-50">Study Less <span className="text-[#F3ECFE]">get</span> Better Grades</p>
        <div className="mt-6 flex justify-center">
          <button className="flex items-center gap-2 px-4 sm:py-2 py-2 rounded-lg border border-[#A436F1] text-white font-medium sm:text-[18px] text-[12px] transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
            Start studying for free <ArrowRight />
          </button>
        </div>
      </div>
    </div>
    </Zoom>
  );
};

export default UpLavel;
