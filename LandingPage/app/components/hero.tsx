"use client";

import React from "react";
import Image from "next/image";
import Button from "./SignUpButton";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center sm:mt-[200px] lg:mt-[150px] mt-[100px] px-4">
      {/* Hero SVG */}
      <div className="relative w-full flex justify-center">
        <Image
          src="/hero.svg" // Replace with your exported SVG file path
          alt="Hero Section"
          width={930} // Adjust width as needed
          height={341} // Adjust height as needed
          className="object-contain"
          priority
        />
        <div className="absolute -top-[20%] left-[20%]">
          <Image
            src="/StarBig.png" // Replace with your exported SVG file path
            alt="Hero Section"
            width={50} // Adjust width as needed
            height={50} // Adjust height as needed
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute -top-[20%] right-[20%]">
          <Image
            src="/StarBig.png" // Replace with your exported SVG file path
            alt="Hero Section"
            width={50} // Adjust width as needed
            height={50} // Adjust height as needed
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute top-[20%] left-[18%]">
          <Image
            src="/StarSmall.png" // Replace with your exported SVG file path
            alt="Hero Section"
            width={30} // Adjust width as needed
            height={30} // Adjust height as needed
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute top-[20%] right-[18%]">
          <Image
            src="/StarMid.png" // Replace with your exported SVG file path
            alt="Hero Section"
            width={30} // Adjust width as needed
            height={30} // Adjust height as needed
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute top-[60%] left-[22%]">
          <Image
            src="/StarMid.png" // Replace with your exported SVG file path
            alt="Hero Section"
            width={40} // Adjust width as needed
            height={40} // Adjust height as needed
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute top-[60%] right-[23%]">
          <Image
            src="/StarSmall.png" // Replace with your exported SVG file path
            alt="Hero Section"
            width={30} // Adjust width as needed
            height={30} // Adjust height as needed
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute top-[100%] left-[32%]">
          <Image
            src="/StarMid.png" // Replace with your exported SVG file path
            alt="Hero Section"
            width={25} // Adjust width as needed
            height={25} // Adjust height as needed
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className="mt-6 flex justify-center">
        <button className="w-full px-4 sm:py-3 py-2 rounded-[8px] border-[1px] border-[#A436F1] text-white font-medium sm:text-[18px] text-[12px] hover:bg-[#8929d1] hover:shadow-[0_0_15px_2px_#A436F1] transition-all duration-300">
          Start studying for free
        </button>
      </div>
    </section>
  );
};

export default Hero;
