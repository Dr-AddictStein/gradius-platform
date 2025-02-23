import React from 'react';
import { motion } from 'framer-motion'; // Add this import

const CallToAction: React.FC = () => {
  return (
    <div className="flex gap-4 justify-center items-center mt-16 text-lg font-medium tracking-tight text-center max-md:mt-10">
      <div className="flex gap-4 items-center self-stretch my-auto min-w-[240px]">
        <motion.button 
          whileHover={{ 
            scale: 1.1,
            transition: {
              type: "spring",
              duration: 0.45,
              bounce: 0.25
            }
          }}
          className="flex gap-1 justify-center items-center self-stretch px-5 py-2.5 my-auto rounded-lg border-2 border-indigo-500 border-solid bg-black bg-opacity-0 min-w-[240px] shadow-[1px_2px_12px_rgba(0,0,0,0.07)] transform-gpu"
        >
          <span className="self-stretch my-auto text-gray-300">
            Shape Gradius Together!
          </span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/3a0ae0f66b2ffd2d160a5d1fcc5b6b4fe737d1d99fb03fa708e7f1ef80e6652b?apiKey=1fb2522fd6c94611a6950922dca36db5&"
            className="object-contain shrink-0 self-stretch my-auto aspect-[0.94] w-[17px]"
            alt=""
          />
        </motion.button>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/1886ef6a4726eba08468e91ff56b452bb8eb73b978ed458434a150d4e2726dfb?apiKey=1fb2522fd6c94611a6950922dca36db5&"
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[60px]"
        alt=""
      />
    </div>
  );
};

export default CallToAction;
