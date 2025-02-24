"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Dashboard = () => {
  const [scale, setScale] = useState(1); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = Math.min(1 + scrollY * 0.0003, 1.2); 
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative flex justify-center sm:mt-[150px] mt-[20px] px-4">
      {/* Dashboard SVG */}
      <div className="relative w-full max-w-6xl">
        <Image
          src="/dashboard.svg"
          alt="Dashboard Preview"
          width={1600}
          height={900}
          className="object-contain transition-transform duration-300"
          priority
          style={{
            transform: `scale(${scale})`, // Apply limited scale effect
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>
    </section>
  );
};

export default Dashboard;
