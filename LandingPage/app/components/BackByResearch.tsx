import React from 'react';
import { FloatingImage } from './FloatingImage';

interface BackedByResearchProps {}

const floatingImages = [
  { src: "https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/d849a1927d71cd6b58a7b650ece1fc9f358733e4dd821f0dc7eac438bf0f10ea?apiKey=1fb2522fd6c94611a6950922dca36db5&", size: 50, left: 890, top: 175 },
  { src: "https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/3e76f50cdc8ee97f9de1739dd71a29e2753549b74e9ffc62cdd9d8d29e0847ad?apiKey=1fb2522fd6c94611a6950922dca36db5&", size: 30, left: 1001, top: 310 },
  { src: "https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/1825ef2f2a6837d1e36d914bb60b3a414bd9b4e1df3d2a07db1064e9de606b55?apiKey=1fb2522fd6c94611a6950922dca36db5&", size: 30, left: 255, top: 225 },
  { src: "https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/2c3d13a69cfcf721a7bf21247a8682fa2ed005bf0fad9092bc30e964df43be1f?apiKey=1fb2522fd6c94611a6950922dca36db5&", size: 40, left: 1955, top: 260 },
  { src: "https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/4e5dcea8c8e2e7b9fd429570400acfdc260838dff258f31fe71d6d100df8e731?apiKey=1fb2522fd6c94611a6950922dca36db5&", size: 30, left: 1131, top: 596 }
];

export const BackedByResearch: React.FC<BackedByResearchProps> = () => {
  return (
    <div className="flex flex-col font-medium text-center">
      <div className="flex overflow-hidden relative flex-col items-start px-32 pt-12 pb-48 w-full min-h-[419px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
        {floatingImages.map((image, index) => (
          <FloatingImage key={index} {...image} />
        ))}
        <div className="text-6xl tracking-tighter leading-loose max-md:text-4xl">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; Backed by{" "}
        </div>
        <div className="mt-6 text-8xl tracking-tighter leading-none bg-clip-text bg-[linear-gradient(180deg,#6E27D5_0%,#39146F_75.5%)] max-md:max-w-full max-md:text-4xl">
          &nbsp; &nbsp; &nbsp;
          <br />
          &nbsp;Cognitive Research&nbsp; &nbsp; &nbsp;&nbsp;
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="flex z-0 flex-col self-center max-w-full w-[846px]">
          <div className="flex flex-col items-center w-full max-md:max-w-full">
            <div className="flex flex-col items-center w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};