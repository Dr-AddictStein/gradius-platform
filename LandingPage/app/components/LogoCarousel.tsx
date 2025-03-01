"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const logos = [
  { src: "/Asia pacific management club.svg", alt: "Asia Pacific Management Club" },
  { src: "/Consulting Club.svg", alt: "Consulting Club" },
  { src: "/Economics Society.svg", alt: "Economics Society" },
  { src: "/Finance networking florence.svg", alt: "Finance Networking Florence" },
  { src: "/LSE HR.svg", alt: "LSE HR" },
  { src: "/NICASA.svg", alt: "NICASA" },
  { src: "/NTU alumni.svg", alt: "NTU Alumni" },
  { src: "/UoM psychology society.svg", alt: "UoM Psychology Society" },
  { src: "/romulus arg.svg", alt: "Romulus Arg" },
];

const LogoCarousel = () => {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center sm:mt-[80px] px-4">
      <h2 className="sm:text-[12px] text-[10px] uppercase tracking-wider font-bold mb-12 font-['Plus Jakarta Sans'] mt-24 text-[#F3ECFE]">
        Trusted by University Societies Globally
      </h2>

      <div className="relative w-full max-w-7xl">
        {/* Left Shadow */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#0f0f0f] to-transparent z-10 pointer-events-none" />

        {/* Right Shadow */}
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#321745] to-transparent z-10 pointer-events-none" />

        <Marquee speed={50} pauseOnHover={true}>
          {logos.map((logo, index) => (
            <div key={index} className="h-[60px] flex items-center justify-center mx-4">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="object-contain w-auto h-full max-h-[60px] opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default LogoCarousel;
