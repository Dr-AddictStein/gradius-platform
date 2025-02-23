"use client";
import React from 'react';
import PricingPlans from './PricingPlans'; 
import FAQSection from './FAQSection';
import Footer from './Footer'

const companyLinks = ['Home', 'Features', 'How it works', 'Pricing', 'FAQ'];
const infoLinks = ['Privacy', 'Terms & Policy', '404'];

const ChooseGradius = () => {
  return (
    <div 
      className="relative w-full min-h-screen"
      style={{
        // Core background styling
        // backgroundImage: 'url("/footer-background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center top', // Prioritize top alignment
        backgroundAttachment: 'fixed', // Creates parallax effect
        backgroundRepeat: 'no-repeat',
        
        // Fallback background color matching image dominant color
        // backgroundColor: '#2A0944',
        
        // Performance optimizations
        imageRendering: '-webkit-optimize-contrast',
        transform: 'translateZ(0)' // GPU acceleration
      }}
    >
      {/* Backed by Cognitive Research Section */}
      <div className="pt-20 w-full flex justify-center">
        <img
          src="/Backed by Cognitive Research.svg"
          alt="Backed by Cognitive Research"
          className="max-w-[800px] w-full h-auto"
        />
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
              aspectRatio: '1440/5256', // Match your image dimensions
              transform: 'translateY(-22%)' // Fine-tune vertical position
            }}
          />
        </div>
        
      </div>

      {/* Pricing Plans Section */}
      <div className="relative z-10 -mt-[150px] translate-y-[-150%] pb-[180px]">
        {/* <PricingPlans /> */}
      </div>

      <div className="relative z-10 -mt-[1800px]">
        {/* <FAQSection /> */}
      </div>

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