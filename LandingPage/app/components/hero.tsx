"use client";

import React from "react";
import Image from "next/image";
import { Bounce, Slide, Zoom } from "react-awesome-reveal";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div>
      <section className="max-w-[1440px] mx-auto relative flex flex-col items-center justify-center text-center sm:mt-[180px] lg:mt-[150px] mt-[100px] px-6 sm:px-4">
        {/* Hero Content */}
        <div className="relative w-full flex flex-col justify-center">
          <Zoom triggerOnce>
            <h1 className="text-[32px] sm:text-[48px] lg:text-[54px] font-bold leading-tight tracking-tight text-white drop-shadow-md [text-shadow:_1px_1px_10px_#A436F1]">
              Get the first self-trained AI Tutor that 
              <br className="hidden sm:block" /> matches your unique learning style
            </h1>
          </Zoom>

          <Zoom delay={100} triggerOnce>
            <p className="w-full sm:w-[500px] my-3 text-[#F3ECFEB2] mx-auto text-[14px] sm:text-[16px]">
              Gradius identifies your learning needs, then adapts to your unique learning style to help you overcome them efficiently.
            </p>
          </Zoom>

          <Zoom delay={200} triggerOnce>
            <p className="text-lg sm:text-2xl font-semibold text-[#A436F1]">
              Study Less <span className="text-[#F3ECFEB2]">get</span> Better Grades
            </p>
          </Zoom>

          {/* Star Images with Bounce Animation */}
          {[
            { src: "/StarBig.png", alt: "Star", width: 40, height: 40, style: "absolute -top-[15%] left-[8%] sm:left-[14%]" },
            { src: "/StarBig.png", alt: "Star", width: 40, height: 40, style: "absolute top-[12%] right-[8%] sm:right-[12%]" },
            { src: "/StarSmall.png", alt: "Star", width: 25, height: 25, style: "absolute -top-[5%] left-[10%] sm:left-[13.5%]" },
            { src: "/StarMid.png", alt: "Star", width: 30, height: 30, style: "absolute top-[35%] right-[10%] sm:right-[13%]" },
            { src: "/StarMid.png", alt: "Star", width: 35, height: 35, style: "absolute top-[60%] left-[12%] sm:left-[15%]" },
            { src: "/StarSmall.png", alt: "Star", width: 25, height: 25, style: "absolute top-[70%] right-[20%] sm:right-[28%]" },
            { src: "/StarMid.png", alt: "Star", width: 20, height: 20, style: "absolute top-[95%] left-[20%] sm:left-[28%]" },
          ].map((image, index) => (
            <div key={index} className={image.style}>
              <Bounce>
                <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className="object-contain hidden md:inline-block" priority />
              </Bounce>
            </div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <Zoom delay={300} triggerOnce>
          <div className="mt-6 flex justify-center">
            <button className="flex items-center gap-2 px-5 py-2 sm:py-3 rounded-lg border border-[#A436F1] text-white font-medium sm:text-[18px] text-[14px] transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
              Start studying for free <ArrowRight />
            </button>
          </div>
        </Zoom>
      </section>
    </div>
  );
};

export default Hero;
