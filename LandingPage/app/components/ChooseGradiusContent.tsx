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
    stiffness: 200,
    damping: 10,
    staggerChildren: 0.02,
  };

  const characterVariants = {
    hidden: {
      filter: "blur(8px)",
      y: 15,
      opacity: 0,
    },
    visible: {
      filter: "blur(0)",
      y: 0,
      opacity: 1,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="max-w-6xl w-11/12 mx-auto px-4">
      <div className="my-12">
        <motion.h1
          className="text-center mt-48 text-[#F3ECFE] text-2xl md:text-5xl font-semibold drop-shadow-[0_0_10px_#A436F1]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            visible: { transition: springTransition },
          }}
        >
          {headingText.split("").map((char, index) => (
            <motion.span
              key={index}
              className="inline-block"
              variants={characterVariants}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <p className="text-[#F3ECFE] text-center text-sm mt-3">
          3 simple reasons to level up now
        </p>
      </div>
      
      {/* Card 1 */}
      <div className="flex flex-col md:flex-row gap-7 md:mt-44">
        <Zoom>
          <div className="mb-6 md:mb-0">
            <Image
              src={"/assets/1.png"}
              width={100}
              height={127}
              alt="1"
            ></Image>
          </div>
        </Zoom>
        <div className="flex-1">
          <motion.h1
            className="text-[#F3ECFE] text-3xl font-semibold drop-shadow-[0_0_10px_#A436F1]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              visible: { transition: springTransition },
            }}
          >
            {"Unlock Your Unique Learning Style"
              .split(" ")
              .map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  variants={characterVariants}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
          </motion.h1>

          <div className="mt-6">
            <p className="flex bg-gradient-to-r from-[#FFFFFF] to-[#A436F1] text-transparent bg-clip-text">
              <DotIcon className="text-white" /> Gradius helps you unlock and
              value your unique learning style
            </p>
            <p className="flex mt-2 bg-gradient-to-r from-[#FFFFFF] to-[#A436F1] text-transparent bg-clip-text">
              <DotIcon className="text-white" /> Everyone learns differently,
              and traditional, standardized methods aren't effective for
              everyone
            </p>
            <p className="flex bg-gradient-to-r mt-2 from-[#A436F1] to-[#FFFFFF] text-transparent bg-clip-text">
              <DotIcon className="text-white" /> With Gradius, you’ll be guided
              to study in the way that works best for you
            </p>
            <p className="flex bg-gradient-to-r mt-2 from-[#A436F1] to-[#FFFFFF] text-transparent bg-clip-text">
              <DotIcon className="text-white" />
              Over time, you’ll be creating the perfect tutor for yourself,
              without even realizing it
            </p>
          </div>
        </div>
        <div className="ml-12 hidden md:inline-block">
          <Image
            src={"/assets/Icon.png"}
            height={200}
            width={200}
            alt="icon"
          ></Image>
        </div>
      </div>
      
      {/* Card 2 */}
      <div className="flex flex-col md:flex-row gap-7 md:mt-44 mt-12">
        <div className="ml-12 hidden md:inline-block">
          <Image
            src={"/assets/Icon.png"}
            height={200}
            width={200}
            alt="icon"
          ></Image>
        </div>

        <Zoom>
          <div className="mb-6 md:hidden inline-block md:mb-0">
            <Image
              src={"/assets/2.png"}
              width={100}
              height={127}
              alt="1"
            ></Image>
          </div>
        </Zoom>

        <div className="flex-1">
          <motion.h1
            className="text-[#F3ECFE] flex justify-end text-3xl font-semibold drop-shadow-[0_0_10px_#A436F1]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              visible: { transition: springTransition },
            }}
          >
            {"Stop Worrying About Finding the ".split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={characterVariants}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h1
            className="text-[#F3ECFE] mt-2 flex justify-end text-3xl font-semibold drop-shadow-[0_0_10px_#A436F1]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              visible: { transition: springTransition },
            }}
          >
            {"Right Study Method ".split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={characterVariants}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <div className="mt-6 flex flex-col justify-end">
            <p className="flex justify-end bg-gradient-to-r from-[#FFFFFF] to-[#A436F1] text-transparent bg-clip-text">
              <DotIcon className="text-white" /> No more trial and error, no
              more endless searching for the right study technique
            </p>
            <p className="flex justify-end mt-2 bg-gradient-to-r from-[#FFFFFF] to-[#A436F1] text-transparent bg-clip-text">
              <DotIcon className="text-white" /> By using Gradius, you’ll
              automatically receive the personalized guidance you need to
              succeed
            </p>
            <p className="flex justify-end bg-gradient-to-r mt-2 from-[#A436F1] to-[#FFFFFF] text-transparent bg-clip-text">
              <DotIcon className="text-white" /> Focus on your studies without
              the stress of figuring out what works for you
            </p>
          </div>
        </div>

        <Zoom>
          <div className="mb-6 hidden md:inline-block md:mb-0">
            <Image
              src={"/assets/2.png"}
              width={100}
              height={127}
              alt="1"
            ></Image>
          </div>
        </Zoom>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col md:flex-row gap-7 md:mt-44 mt-12">
        <Zoom>
          <div className="mb-6 md:mb-0">
            <Image
              src={"/assets/3.png"}
              width={100}
              height={127}
              alt="1"
            ></Image>
          </div>
        </Zoom>
        <div className="flex-1">
          <motion.h1
            className="text-[#F3ECFE] text-3xl font-semibold drop-shadow-[0_0_10px_#A436F1]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              visible: { transition: springTransition },
            }}
          >
            {"Study Less, Get Better Grades!".split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={characterVariants}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <div className="mt-6">
            <p className="flex bg-gradient-to-r from-[#FFFFFF] to-[#A436F1] text-transparent bg-clip-text">
              <DotIcon className="text-white" /> Personalized learning is proven
              to boost performance more than twofold
            </p>
            <p className="flex mt-2 bg-gradient-to-r from-[#FFFFFF] to-[#A436F1] text-transparent bg-clip-text">
              <DotIcon className="text-white" /> Studies from top universities
              show personalized learning can halve study time
            </p>
            <p className="flex bg-gradient-to-r mt-2 from-[#A436F1] to-[#FFFFFF] text-transparent bg-clip-text">
              <DotIcon className="text-white" /> Gradius helps you focus on
              quality over quantity, resulting in better results with less
              effort
            </p>
          </div>
        </div>
        <div className="ml-12 hidden md:inline-block">
          <Image
            src={"/assets/Icon.png"}
            height={200}
            width={200}
            alt="icon"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default ChooseGradiusContent;
