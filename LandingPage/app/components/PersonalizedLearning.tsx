"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { Slide, Zoom } from "react-awesome-reveal";
const PersonalizedLearning = () => {

  
  return (
    <section 
    
    className="relative flex flex-col max-w-7xl mx-auto items-center justify-center mt-20  px-4"
    
    style= {{
        backgroundImage: `
          linear-gradient(to bottom, 
          rgba(49, 35, 74, 0) 20%,   // Match your purple color
          rgb(63, 44, 97) 70%
          )
        `,
        // marginBottom: "-500px", // Creates overlap with next section (more negative = more overlap)
        paddingBottom: "5px" // Compensate for negative margin
      }}
    
    >

      
<motion.h2
  initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }} 
  whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
  viewport={{ once: false, amount: 0.2 }} 
  transition={{ duration: 0.4, ease: "easeOut" }} 
  className="sm:text-[54px] text-[24px] font-medium sm:leading-[62px] leading-[32px] tracking-[-0.02em] text-[#F3ECFE] font-['Plus Jakarta Sans'] drop-shadow-md [text-shadow:_1px_1px_10px_#A436F1] mb-12 text-center"
>
  Own your Exams with Personalized Learning!
</motion.h2>



      

      {/* Frames */}
      <div className="w-full mt-8">
  {/* Body 1 with Scroll Zoom Effect */}
  <motion.div
     initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }} 
     whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
    viewport={{ once: false, amount: 0.2 }} 
    transition={{ duration: 0.6, ease: "easeOut" }} // Smooth zoom effect
    className="w-full flex flex-col md:flex-row p-9 bg-[#160F22] rounded-xl justify-center items-center"
  >
    <div className="flex-1">
      <Image
        src="/assets/personalized1.png"
        alt="Body 1"
        width={500}
        height={500}
        className="object-contain"
        priority
      />
    </div>

    <div className="flex-1 relative text-[#F3ECFEB2]">
      <h2 className="md:text-4xl text-xl mt-7 font-semibold leading-snug">
        <span className="text-[#A436F1] drop-shadow-[0_4px_4px_#A436F1]">
          Gradius
        </span>{" "}
        identifies your <br /> learning needs...
        <div className="inline-flex ml-8 align-middle relative">
          <Image
            height={24}
            width={24}
            alt="Star"
            src={"/StarMid.png"}
            className="drop-shadow-glow"
          />
          <Image
            height={24}
            width={24}
            alt="Star"
            src={"/StarMid.png"}
            className="drop-shadow-glow absolute -left-4 top-2"
          />
        </div>
      </h2>

      <p className="my-4 mb-14">
        Thanks to our sophisticated detection system, we can analyze your
        performance at a granular level and identify even the smallest
        microtopic you're struggling on!
      </p>

      <div className="my-2">
        <Image
          height={24}
          width={24}
          alt="Star"
          src={"/StarMid.png"}
          className="drop-shadow-glow absolute -left-8 top-70%"
        />
        <p>
          Scan Your Material: We scan your material to find even the smallest
          microtopics in your cards and quizzes, offering a highly detailed
          breakdown!
        </p>
        <div className="border my-4 border-[#F3ECFE1A]"></div>
      </div>

      <div className="my-2">
        <Image
          height={24}
          width={24}
          alt="Star"
          src={"/StarMid.png"}
          className="drop-shadow-glow absolute -left-8 top-70%"
        />
        <p>
          Score Your Understanding: Based on your performance, we assign a
          knowledge score to each microtopic, identifying areas where you need
          improvement
        </p>
        <div className="border my-4 border-[#F3ECFE1A]"></div>
      </div>
    </div>
  </motion.div>
</div>;
      <div className="my-20  w-full">
        {/* Body 1 */}
        
        <motion.div  initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }} 
     whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
    viewport={{ once: false, amount: 0.2 }} 
    transition={{ duration: 0.6, ease: "easeOut" }} // Smooth zoom effect
    className="w-full flex flex-col md:flex-row  p-9 bg-[#160F22] rounded-xl justify-center items-center" >

          
          <div className="flex-1  relative text-[#F3ECFEB2]">
          <Image height={30} width={30} alt="Star" src={'/StarMid.png'} className="drop-shadow-glow ml-8" />


  <h2 className="text-xl md:text-4xl  font-semibold leading-snug">
  ...and makes you overcome <br /> them <span className="text-[#A436F1] drop-shadow-[0_4px_4px_#A436F1]">your way</span> !
    <div className=" inline-flex  ml-5 align-middle relative">
      <Image height={30} width={30} alt="Star" src={'/StarMid.png'} className="drop-shadow-glow " />
      
    </div>
  </h2>
  <p className="my-4 mb-14">To help you overcome challenges, we’ve worked with neuroscientists and studied top academic research on personalized tutoring. Gradius uses this knowledge in an advanced algorithm to identify your unique learning style and provide customized support </p>
  <div className="my-2">
  <Image height={24} width={24} alt="Star" src={'/StarMid.png'} className="drop-shadow-glow absolute -left-8 top-70%" />
    <p>Tailored Explanations: Gradius' tutor explains difficult concepts in a way that aligns with your unique learning style </p>
    <div className="border my-4 border-[#F3ECFE1A]"></div>
  </div>
  <div className="my-2">
  <Image height={24} width={24} alt="Star" src={'/StarMid.png'} className="drop-shadow-glow absolute -left-8 top-70%" />
    <p>Personalized Recommendations: Gradius gives periodic tailored recommendations, such as videos or other resources, that mat ch the way you learn best</p>
    <div className="border my-4 border-[#F3ECFE1A]"></div>
  </div>
 
</div>
<div className="flex-1 flex justify-end">
          <Image
            src="/assets/personalized2.png"
            alt="Body 1"
            width={500} // Adjust width as needed
            height={500} // Adjust height as needed
            className="object-contain"
            priority
          />
          </div>

       


      

        </motion.div>
        
        
       
      </div>
      <div className="absolute -left-12">
      <Slide>
      <Image
            src="/assets/Elements1.png"
            alt="Body 1"
            width={117} // Adjust width as needed
            height={250} // Adjust height as needed
            className="object-contain"
            priority
          />
      </Slide>
      </div>
    </section>
  );
};

export default PersonalizedLearning;
