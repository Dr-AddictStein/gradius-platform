"use client";

import React from "react";
import { StepCard } from "./StepCard";
import { UnlockPotentialCard } from "./UnlockPotentialCard";
import { motion } from "framer-motion";
import Image from "next/image";

export const HowItWorks: React.FC = () => {
  const headingText = "Cool, but how does it work?!";

  // Animation configurations
  const springTransition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    staggerChildren: 0.04,
  };

  const characterVariants = {
    hidden: {
      filter: "blur(8px)",
      transform: "translateY(20px)",
      opacity: 0,
    },
    visible: {
      filter: "blur(0)",
      transform: "translateY(0)",
      opacity: 1,
    },
  };

  return (
    <section
      className="flex flex-col lg:mt-[130px] items-center px-32 pt-24 w-full max-md:px-5 max-md:max-w-full"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        // marginTop: "-60px",
        paddingTop: "50px",
      }}
    >
      <header className="max-w-full text-center w-[879px]">
        <div className="flex flex-col w-full max-md:max-w-full">
          {/* Animated Heading */}
          <motion.h1
            className="[text-shadow:_1px_1px_8px_#a436f1] sm:text-[54px] text-[24px] md:text-5xl font-medium tracking-tighter leading-tight text-[#3D1576]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={springTransition}
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

          <p className="self-center mt-6 sm:text-[24px] text-[14px] tracking-tight leading-tight  max-md:max-w-full">
            Gradius makes you a better student by tailoring everything according
            to your needs and style. Here's how:
          </p>
        </div>
      </header>

      <div className="flex overflow-hidden  flex-col max-w-full w-[1175px] sm:mt-20 mt-10">
        <div className="flex items-center relative justify-between">
          {/* Left Content */}

          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:w-2/3 w-full"
          >
            <StepCard
              stepNumber="1"
              title="Import Your Study Material"
              description={
                <>
                  Import your old, cookie-cutter study material from{" "}
                  <strong>Quizlet, Anki, Gizmo and Vaia!</strong>
                </>
              }
              additionalText="Don't you worry, study material generation is coming soon..."
              imageSrc="/Import your study material.png"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/c467af17d22dda03b3dc1a52c6acf73c29c603a0ade0a032a8957fbeec41f795"
              logoSrc="/app import logos.png"
              className="self-start"
            />
          </motion.div>

          {/* Right Image */}
          <div className="md:w-1/3 hidden md:inline-block ">
            <Image
              src={"/assets/icon.png"}
              width={160}
              height={160}
              alt="icon"
            />
          </div>

          {/* Bottom Centered Image */}
          <div className="absolute hidden md:inline-block  -bottom-14 right-56">
            <Image
              src={"/assets/Elements.png"}
              width={205}
              height={160}
              alt="icon"
            />
          </div>
        </div>

        {/* card 2 */}

        <div className="flex items-center relative justify-between">
          <div className="md:w-1/3 hidden md:inline-block ">
            <Image
              src={"/assets/icon.png"}
              width={160}
              height={160}
              alt="icon"
            />
          </div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:w-2/3 w-full"
          >
           <StepCard
              stepNumber="2"
              title={
                <>
                  Gradius Identifies Topics and
                  <br />
                  Microtopics
                </>
              }
              description="Gradius scans the content of your material and not only understands what you need to study but also breaks that down into smaller parts, called"
              additionalText="Microtopics"
              imageSrc="https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/12d158f4598e297985e99b9b9f12adda82235245d862973b8bbdec01aafa6091"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/40a5dca75a173b57bdf1c966bf2a1d413fdef1262f4030de58fb19e755bd0848"
              headerImage="https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/5834b0b83013f28b057c299224a262cdd854072bb6e2f12d58b91cdb243c3e26"
              footerImage="/assets/footer2.png"
              className="self-end mt-36 max-md:mt-10"
            />
          
          </motion.div>
           
         
          <div className="absolute hidden md:inline-block  -bottom-14 left-0">
            <Image
              src={"/assets/Element3.png"}
              width={205}
              height={160}
              alt="icon"
            />
          </div>
        </div>

        {/* 3 */}
        <div className="flex items-center relative justify-between">
         
          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:w-2/3 w-full"
          >
           <StepCard
              stepNumber="3"
              title="Just Study! Let Gradius do the rest"
              description={
                <>
                  Study as you normally would with your flashcards and quizzes.
                  <br />
                  Gradius analyzes your performance on each piece of study
                  material and scores your understanding on each microtopic.
                  This figure is called
                </>
              }
              additionalText="Knowledge Score"
              imageSrc="https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/98b5f5547e192dd724dc19d18729ca61477b4e7daf4f95eb492c0ad3ca0fbe44"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/0e2938146a2409b7b44a574bd96e707f82aa3e827323586e731c6fe87025c9a0"
              headerImage="https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/ce0549f228a60744b7f24087ccf2ff9f1375d60311b54be9657adb93513b3ae5"
              footerImage="https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/db90669345ca6bd484fffaa1c3f72cf9702db73336f1a36439783658ac97a38e"
              className="mt-28 max-md:mt-10"
            />
          </motion.div>
            
          
          <div className="md:w-1/3 hidden md:inline-block ">
            <Image
              src={"/assets/icon.png"}
              width={160}
              height={160}
              alt="icon"
            />
          </div>

          {/* Bottom Centered Image */}
          <div className="absolute hidden md:inline-block -bottom-14 right-56">
            <Image
              src={"/assets/Elements.png"}
              width={205}
              height={160}
              alt="icon"
            />
          </div>
        </div>

        <div className="flex items-center mt-28 relative justify-between">
          <div className="md:w-1/3 hidden md:inline-block ">
            <Image
              src={"/assets/icon.png"}
              width={160}
              height={160}
              alt="icon"
            />
          </div>
         
          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:w-2/3 w-full"
          >
            <StepCard
              stepNumber="4"
              title="Then, everything adjusts according to what you need"
              description="Thanks to your answers to quizzes, flashcards, and the dynamic learning mapper, we continuously gather insights about your learning style, which automatically self-trains our AI to adapt all platform features to suit you better"
              imageSrc="https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/cdcad405e0d224abf9f70bf9dd9415fdc48e54e145f367e7e6361a3afd3eba16"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/66a637eb5cd87636acc284aa200fc6cff7c8e5c8395f0d6530a5dcdc57c3b1cf"
              headerImage="https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/b6e5537bb59c17d4aa195a759dc79d3c1bdd39278fbfa6a0f2a16dd713d37d2f"
            />
          </motion.div>
           
        
          <div className="absolute hidden md:inline-block  -bottom-14 ">
            <Image
              src={"/assets/Element3.png"}
              width={205}
              height={160}
              alt="icon"
            />
          </div>
        </div>

        <div className="w-full">
        <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="full"
          >
          <UnlockPotentialCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
