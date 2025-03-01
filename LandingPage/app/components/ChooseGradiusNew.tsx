'use client'
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ChooseGradiusNew = () => {
  return (
    <div className="relative my-12 lg:mt-[120px] md:mt-20">
      <div className="text-center">
        <motion.h3
          initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", }}
          className="text-2xl md:text-[64px] font-[Inter] font-medium leading-[100px] tracking-tight bg-gradient-to-b from-[#A436F1] to-[#6E27D5] text-transparent bg-clip-text drop-shadow-[0px_0px_15px_#A436F1]"
        >
          Backed by
        </motion.h3>
        
        <motion.h1
          initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", }}
          className="text-3xl md:text-[100px] leading-tight bg-gradient-to-b from-[#6E27D5] to-[#39146F] text-transparent bg-clip-text drop-shadow-[0px_0px_15px_#A436F1]"
        >
          Cognitive Research
        </motion.h1>
      </div>

      {/* Animated Stars */}
      {[
        { top: "top-3 left-1/3", delay: 0 },
        { top: "-top-4 right-1/3", delay: 0.2 },
        { top: "top-16 left-3/4", delay: 0.4 },
        { top: "top-20 right-3/4", delay: 0.6 },
        { top: "top-52 left-36", delay: 0.8 },
        { top: "top-52 right-36", delay: 1.0 },
      ].map((star, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: star.delay, duration: 1, ease: "easeOut" }}
          className={`absolute hidden md:inline-block ${star.top}`}
        >
          <Image src={'/StarBig.png'} width={40} height={40} alt="star" />
        </motion.div>
      ))}
    </div>
  );
};

export default ChooseGradiusNew;
