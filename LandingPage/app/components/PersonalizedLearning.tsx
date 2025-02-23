"use client";

import React from "react";
import Image from "next/image";

const PersonalizedLearning = () => {
  return (
    <section 
    
    className="relative flex flex-col items-center justify-center sm:mt-[205px] mt-[85px] px-4"
    
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

      {/* Heading */}
      <h2
        className="sm:text-[54px] text-[24px] font-medium sm:leading-[62px] leading-[32px] tracking-[-0.02em] text-[#F3ECFE] font-['Plus Jakarta Sans'] drop-shadow-[0_4px_4px_#A436F1] mb-12 text-center"
      >
        Own your Exams with Personalized Learning!
      </h2>

      {/* Frames */}
      <div className="flex flex-col items-center gap-8 max-w-6xl w-full">
        {/* Body 1 */}
        <div className="w-full flex justify-center">
          <Image
            src="/Body 1.svg"
            alt="Body 1"
            width={800} // Adjust width as needed
            height={400} // Adjust height as needed
            className="object-contain"
            priority
          />
        </div>

        {/* Body 2 */}
        <div className="w-full flex justify-center">
          <Image
            src="/Body 2.svg"
            alt="Body 2"
            width={800} // Adjust width as needed
            height={400} // Adjust height as needed
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default PersonalizedLearning;
