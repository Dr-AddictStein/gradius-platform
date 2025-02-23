"use client";

import React from "react";
import Image from "next/image";

const Dashboard = () => {
  return (
    <section className="relative flex justify-center sm:mt-[150px] mt-[20px] px-4">
      {/* Dashboard SVG */}
      <div className="relative w-full max-w-6xl">
        <Image
          src="/dashboard.svg" // Replace with your exported SVG file path
          alt="Dashboard Preview"
          width={1600} // Adjust width as needed
          height={900} // Adjust height as needed
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default Dashboard;