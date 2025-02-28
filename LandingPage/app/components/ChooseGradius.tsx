"use client";
import React from "react";
import PricingPlans from "./PricingPlans";
import FAQSection from "./FAQSection";
import Footer from "./Footer";

const companyLinks = ["Home", "Features", "How it works", "Pricing", "FAQ"];
const infoLinks = ["Privacy", "Terms & Policy", "404"];

const ChooseGradius = () => {
  return (
    <div>
      {/* Backed by Cognitive Research Section */}
      <div className="pt-0 w-full ">
        <h3
          className="text-[64px] font-[Inter] font-medium leading-[100px] 
               tracking-tight text-center 
               bg-gradient-to-b from-[#A436F1] to-[#6E27D5] 
               text-transparent bg-clip-text 
               drop-shadow-[0px_0px_15px_#A436F1]"
        >
          Backed by
        </h3>
        <h1
          className="text-[100px] font-semibold text-center leading-tight 
               bg-gradient-to-b from-[#6E27D5] to-[#39146F] 
               text-transparent bg-clip-text 
               drop-shadow-[0px_0px_15px_#A436F1]"
        >
          Cognitive Research
        </h1>
      </div>
      {/* SVG Content Container */}
      <div className="relative z-10 container mx-auto pt-0 px-4 sm:px-6 lg:px-8 h-full flex items-start justify-center">
        <div className="w-full max-w-7xl mx-auto mt-0">
          <img
            src="/Why you should choose Gradius today.svg"
            alt="Comprehensive overview of reasons to choose Gradius including adaptive learning, progress tracking, and personalized study plans"
            className="w-full h-auto"
            style={{
              // Prevent layout shift
              aspectRatio: "1440/5256", // Match your image dimensions
              transform: "translateY(-22%)", // Fine-tune vertical position
            }}
          />
        </div>
      </div>

      {/* Pricing Plans Section */}
      <div className="relative  -mt-[150px] translate-y-[-150%] pb-[180px]">
        {/* <PricingPlans /> */}
      </div>

      <div className="relative -mt-[1800px]">{/* <FAQSection /> */}</div>

      {/* Footer */}
      <div className="mt-12">
        {/* <Footer 
          companyLinks={companyLinks}
          infoLinks={infoLinks}
          /> */}
      </div>
    </div>
  );
};

export default ChooseGradius;
