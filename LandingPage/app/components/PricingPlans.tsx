"use client";

import React from 'react';
import PlanCard from './PlanCard';
import { PlanDetails } from './types';
import { motion } from "framer-motion";

const monthlyPlan: PlanDetails = {
  title: "Monthly Plan",
  price: "€14.99",
  discountedPrice: "€0",
  billingPeriod: "/month",
  trialInfo: "Enjoy 7 days free trial, then €20/month.",
  billingInfo: "Billed Monthly.",
  features: [
    "Paid monthly, cancel anytime.",
    "Enjoy personalized learning flexibly.",
    "3 months unpaid = AI progress lost"
  ],
  buttonText: "Sign me up"
};

const yearlyPlan: PlanDetails = {
  title: "Yearly Plan",
  price: "€9.99",
  discountedPrice: "€0",
  billingPeriod: "/month",
  trialInfo: "Enjoy 7 days free trial, then €10/month.",
  billingInfo: "Billed annually.",
  features: [
    "50% off: pay just €119.88/year.",
    "Your AI-Tutor all year round!",
    "Never lose your progess!"
  ],
  buttonText: "Sign me up"
};

const PricingPlans: React.FC = () => {
  const headingText = "Cool, but how does it work?!";
  const springTransition = {
    type: "spring",
    stiffness: 200,
    damping: 10,
    staggerChildren: 0.02,
  };

  const characterVariants = {
    hidden: {
      filter: "blur(8px)",
      y: 15,
      opacity: 0,
    },
    visible: {
      filter: "blur(0)",
      y: 0,
      opacity: 1,
      transition: { duration: 0.2 },
    },
  };
  return (
    <div className="flex flex-col mt-44">
      <div className="flex overflow-hidden flex-col items-center px-32 pb-16 pt-0 w-full min-h-[500px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full text-center w-[846px]">
          <div className="flex flex-col w-full max-md:max-w-full">
            <motion.h1
              className="text-[#F3ECFE] text-[21px] md:text-5xl font-semibold text-drop-shadow-[0_0_10px_#A436F1]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                visible: { transition: springTransition },
              }}
            >
              {"Level up to personalized learning!"
                .split("")
                .map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    variants={characterVariants}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
            </motion.h1>
            <p className="mt-6 text-lg tracking-tight leading-7 text-purple-100 text-opacity-70 max-md:max-w-full">
              Get started today—your first 7 days are on us! <br />
              No card required!
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-full w-[938px] max-md:mt-8">
          <div className="flex gap-5 max-md:flex-col items-stretch">
            <PlanCard plan={monthlyPlan} />
            <PlanCard plan={yearlyPlan} isYearly={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;