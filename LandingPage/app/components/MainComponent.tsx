"use client";

import React from "react";
import ImageComponent from "./ImageComponent";

interface MainComponentProps {
  className?: string;
}

export default function MainComponent({ className }: MainComponentProps) {
  return (
    <div className={`${className} relative h-full w-full flex items-center justify-center bg-black`}>
      <ImageComponent 
      src="/header.svg" 
      alt="Featured Image" 
      className="absolute inset-0" 
      />
    </div>
  )
}
