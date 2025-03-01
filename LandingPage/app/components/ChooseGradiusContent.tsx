"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { DotIcon } from "lucide-react";
import { Zoom } from "react-awesome-reveal";

const ChooseGradiusContent = () => {
  const headingText = "Cool, but how does it work?!";
  const springTransition = {
    type: "spring",
    stiffness: 80,
    damping: 25,
    staggerChildren: 0.08,
  };

  const characterVariants = {
    hidden: { filter: "blur(8px)", y: 15, opacity: 0 },
    visible: { filter: "blur(0)", y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="max-w-6xl w-11/12 mx-auto px-4 py-12 lg:mt-[160px]">
      <div className="text-center">
        <motion.h1
          className="text-[#F3ECFE] text-2xl md:text-5xl font-semibold drop-shadow-[0_0_10px_#A436F1]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ visible: { transition: springTransition } }}
        >
          {headingText.split(" ").map((char, index) => (
            <motion.span key={index} className="inline-block" variants={characterVariants}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
        <p className="text-[#F3ECFE] text-sm mt-3">3 simple reasons to level up now</p>
      </div>

      {/* Cards */}
      {[1, 2, 3].map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-7 md:gap-12 mt-16 md:mt-32 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <Zoom>
            <div className="w-24 md:w-32">
              <Image src={`/assets/${item}.png`} width={100} height={127} alt={`${item}`} layout="responsive" />
            </div>
          </Zoom>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              className="text-[#F3ECFE] text-2xl md:text-3xl font-semibold drop-shadow-[0_0_10px_#A436F1]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{ visible: { transition: springTransition } }}
            >
              {[
                "Unlock Your Unique Learning Style",
                "Stop Worrying About Finding the Right Study Method",
                "Study Less, Get Better Grades!",
              ][index]
                .split(" ")
                .map((char, i) => (
                  <motion.span key={i} className="inline-block" variants={characterVariants}>
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
            </motion.h1>

            <div className="mt-6 space-y-3">
              {[
                [
                  "Gradius helps you unlock and value your unique learning style",
                  "Everyone learns differently, and traditional, standardized methods aren't effective for everyone",
                  "With Gradius, you’ll be guided to study in the way that works best for you",
                  "Over time, you’ll be creating the perfect tutor for yourself, without even realizing it",
                ],
                [
                  "No more trial and error, no more endless searching for the right study technique",
                  "By using Gradius, you’ll automatically receive the personalized guidance you need to succeed",
                  "Focus on your studies without the stress of figuring out what works for you",
                ],
                [
                  "Personalized learning is proven to boost performance more than twofold",
                  "Studies from top universities show personalized learning can halve study time",
                  "Gradius helps you focus on quality over quantity, resulting in better results with less effort",
                ],
              ][index].map((text, j) => (
                <p
                  key={j}
                  className="flex items-start text-left text-sm md:text-base bg-gradient-to-r from-[#FFFFFF] to-[#A436F1] text-transparent bg-clip-text"
                >
                  <DotIcon className="text-white mr-2 mt-1" /> {text}
                </p>
              ))}
            </div>
          </div>

          {/* Side Icon */}
          <div className="hidden md:block w-24 md:w-40">
            <Image src="/assets/Icon.png" width={200} height={200} alt="icon" layout="responsive" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChooseGradiusContent;
