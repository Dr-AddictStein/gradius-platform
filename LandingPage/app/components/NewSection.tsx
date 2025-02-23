"use client";

import React from "react";

const NewSection = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center mt-[200px] px-4 py-16 bg-cover bg-center"
      style={{
        backgroundImage: `
        linear-gradient(to bottom,
        rgba(23, 12, 42, 0.8) 0%,    // Match exact purple from previous section
        rgba(23, 12, 42, 0) 30% ),
        url('/body_background.svg')
        `,
        minHeight: "600px",
        marginTop: "-40px", // Pull section up to overlap
        paddingTop: "120px",
        paddingBottom: "120px",
        backgroundSize: "cover",  // Explicitly set
        backgroundPosition: "center",  // Explicitly set
      }}
    >
      {/* Content of the new section 
      <h2 className="text-[54px] font-medium leading-[62px] tracking-[-0.02em] text-[#F3ECFE] font-['Plus Jakarta Sans'] drop-shadow-[0_4px_4px_#A436F1] mb-12 text-center">
        New Section!
      </h2>
       Add other content here */}
    </section>
  );
};

export default NewSection;
