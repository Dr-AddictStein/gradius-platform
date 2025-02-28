"use client";

import React from 'react';
import { PlanDetails } from './types';
import FeatureItem from './FeatureItem';
import { motion } from 'framer-motion'; // Add this import


interface PlanCardProps {
  plan: PlanDetails;
  isYearly?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, isYearly = false }) => {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full ">
      <div className="flex flex-col items-start px-12 py-7 w-full h-full rounded-xl border-purple-600 border-solid border-[3px] max-md:px-5 max-md:mt-9 max-md:max-w-full min-h-[550px]">
        <div className="flex gap-7 text-xl font-bold tracking-normal leading-snug text-center text-white max-md:ml-1.5">

          <div className="basis-auto">{plan.title}</div>

          {isYearly && (

            <div className="flex">

              <div className="flex relative flex-col self-start w-9 aspect-[1.029] max-md:-mr-0.5">

                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/07b0de19389f16f5ad0b5f06c345fecd0263c895270e1f7848fbac1d57a633e4?apiKey=1fb2522fd6c94611a6950922dca36db5&"
                  className="object-cover absolute inset-0 size-full"
                  alt=""
                />

                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/07b0de19389f16f5ad0b5f06c345fecd0263c895270e1f7848fbac1d57a633e4?apiKey=1fb2522fd6c94611a6950922dca36db5&"
                  className="object-contain w-full aspect-[1.03]"
                  alt=""
                />

              </div>

              <div className="flex flex-col">

                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/02c8d4341221e5446d251be39106da97db0c81e21993988dfef68b270a8dcb3d?apiKey=1fb2522fd6c94611a6950922dca36db5&"
                  className="object-contain aspect-square w-[13px]"
                  alt=""
                />

                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/5695f24427b3ec59adf43b74ede569df3f7511fa82029d8498d13a1add970c4b?apiKey=1fb2522fd6c94611a6950922dca36db5&"
                  className="object-contain mt-2.5 aspect-square w-[25px]"
                  alt=""
                />

              </div>

            </div>
          )}


          {!isYearly && (
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/c7c7d73b253e719f4c99beb9febe83089ccd8e405aaf4faac899a07e1ccc444a?apiKey=1fb2522fd6c94611a6950922dca36db5&"
              className="object-contain shrink-0 aspect-[1.04] w-[25px]"
              alt=""
            />
          )}

        </div>

        <div className="flex gap-1 mt-[20px] whitespace-nowrap max-md:mt-10 max-md:ml-0.5">

          <div className="grow text-2xl leading-none text-center text-white">
            {plan.price}
          </div>

          <div className="text-sm tracking-wide leading-snug text-zinc-400">
            {plan.billingPeriod}
          </div>

        </div>

        {/* discounted price */}
        <div className="mt-[20px] text-5xl font-bold leading-none text-center text-white max-md:ml-2 max-md:text-4xl">
          {plan.discountedPrice}
        </div>

        <div className="mt-12 text-base tracking-normal leading-snug text-zinc-400 max-md:mt-10">
          {plan.trialInfo}
        </div>

        {/* billing info */}
        <div className="mt-[15px] text-base font-bold tracking-normal leading-snug text-zinc-400">
          {plan.billingInfo}
        </div>

        {plan.features.map((feature, index) => (
          <FeatureItem key={index} text={feature} />
        ))}

        {/* For the button container */}
        {/* Updated button with spring animation */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", duration: 0.45, bounce: 0.25 }}
          className="gap-2.5 self-stretch mt-14 px-8 py-4  text-lg font-semibold text-white rounded-xl border-2 border-purple-600 border-solid min-h-[42px] max-md:px-5"
        >
          {plan.buttonText}
        </motion.button>
      </div>
    </div>
  );
};

export default PlanCard;