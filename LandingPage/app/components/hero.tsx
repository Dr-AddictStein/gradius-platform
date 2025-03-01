"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div>
      <section className="max-w-[1440px] mx-auto relative flex flex-col items-center justify-center text-center sm:mt-[180px] lg:mt-[150px] mt-[100px] px-6 sm:px-4">
        {/* Hero Content */}
        <div className="relative w-full flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[32px] sm:text-[48px] lg:text-[54px] font-bold leading-tight tracking-tight text-white drop-shadow-md [text-shadow:_1px_1px_10px_#A436F1]"
          >
            Get the first self-trained AI Tutor that
            <br className="hidden sm:block" /> matches your unique learning style
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full sm:w-[500px] my-3 text-[#F3ECFEB2] mx-auto text-[14px] sm:text-[16px]"
          >
            Gradius identifies your learning needs, then adapts to your unique learning style to help you overcome them efficiently.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg sm:text-2xl font-semibold text-[#A436F1]"
          >
            Study Less <span className="text-[#F3ECFEB2]">get</span> Better Grades
          </motion.p>

          {/* Star Images with Motion Animation */}
          {[
            { src: "/StarBig.png", alt: "Star", width: 40, height: 40, style: "absolute -top-[15%] left-[16%] " },
            { src: "/StarBig.png", alt: "Star", width: 40, height: 40, style: "absolute -top-[17%] right-[16%] " },
            { src: "/StarSmall.png", alt: "Star", width: 25, height: 25, style: "absolute top-[25%] left-[10%] sm:left-[13.5%]" },
            { src: "/StarMid.png", alt: "Star", width: 30, height: 30, style: "absolute top-[30%] right-[10%] sm:right-[13%]" },
            { src: "/StarMid.png", alt: "Star", width: 35, height: 35, style: "absolute top-[60%] left-[12%] sm:left-[15%]" },
            { src: "/StarSmall.png", alt: "Star", width: 25, height: 25, style: "absolute top-[70%] right-[20%] sm:right-[28%]" },
            { src: "/StarMid.png", alt: "Star", width: 20, height: 20, style: "absolute top-[95%] left-[20%] sm:left-[28%]" },
          ].map((image, index) => (
            <motion.div
              key={index}
              className={image.style}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className="object-contain hidden md:inline-block" priority />
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-6 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2 sm:py-3 rounded-lg border border-[#A436F1] text-white font-medium sm:text-[18px] text-[14px] transition-transform transform hover:shadow-lg duration-300"
          >
            Start studying for free <ArrowRight />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
