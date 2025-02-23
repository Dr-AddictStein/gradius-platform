"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/autoplay';

import { Autoplay } from 'swiper/modules';

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
    <section className="relative flex flex-col items-center justify-center sm:mt-[80px] mt-[60px] px-4">
      <h2 className="sm:text-[12px] text-[10px] uppercase tracking-wider font-bold mb-12 font-['Plus Jakarta Sans'] text-[#F3ECFE]">
        Trusted by University Societies Globally
      </h2>

      <div className="relative w-full max-w-7xl">

        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className="w-full"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <div className="h-[60px] flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="object-contain w-auto h-full max-h-[60px] opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LogoCarousel;