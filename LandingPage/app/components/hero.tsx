"use client";

import React from "react";
import Image from "next/image";
import { Bounce, Slide, Zoom } from "react-awesome-reveal"; // Zoom import
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
   <div className="">
     <section className="max-w-[1440px] mx-auto  relative flex flex-col items-center justify-center text-center sm:mt-[200px] lg:mt-[150px] mt-[120px] px-4">
      {/* Hero Content */}
      <div className="relative w-full flex flex-col justify-center">
        <Zoom triggerOnce> 
        <h1 className="text-[54px] font-bold leading-[62px] tracking-tight text-white drop-shadow-md [text-shadow:_1px_1px_10px_#A436F1]">
  Get the first self-trained AI Tutor that 
  <br /> matches your unique learning style
</h1>

        </Zoom>

        <Zoom delay={100} triggerOnce> 
          <p className="w-[500px] my-3 text-[#F3ECFEB2] mx-auto">
            Gradius identifies your learning needs, then adapts to your unique learning style to help you overcome them efficiently.
          </p>
        </Zoom>

        <Zoom delay={200} triggerOnce> 
          <p className="text-2xl font-semibold text-[#A436F1]">
            Study Less <span className="text-[#F3ECFEB2]">get</span> Better Grades
          </p>
        </Zoom>

        {/* Star Images with Bounce Animation */}
        {[
          { src: "/StarBig.png", alt: "Star", width: 50, height: 50, style: "absolute -top-[20%] left-[14%]" },
          { src: "/StarBig.png", alt: "Star", width: 50, height: 50, style: "absolute top-[14%] right-[12%]" },
          { src: "/StarSmall.png", alt: "Star", width: 30, height: 30, style: "absolute -top-[6%] left-[13.5%]" },
          { src: "/StarMid.png", alt: "Star", width: 30, height: 30, style: "absolute top-[37%] right-[13%]" },
          { src: "/StarMid.png", alt: "Star", width: 40, height: 40, style: "absolute top-[65%] left-[15%]" },
          { src: "/StarSmall.png", alt: "Star", width: 30, height: 30, style: "absolute top-[70%] right-[28%]" },
          { src: "/StarMid.png", alt: "Star", width: 25, height: 25, style: "absolute top-[100%] left-[28%]" },
        ].map((image, index) => (
          <div key={index} className={image.style}>
            <Bounce>
              <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className="object-contain" priority />
            </Bounce>
          </div>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <Zoom delay={300} triggerOnce> 
        <div className="mt-6 flex justify-center">
          <button className="flex items-center gap-2 px-4 sm:py-2 py-2 rounded-lg border border-[#A436F1] text-white font-medium sm:text-[18px] text-[12px] transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
            Start studying for free <ArrowRight />
          </button>
        </div>
      </Zoom>
    </section>
   </div>
  );
};

export default Hero;
