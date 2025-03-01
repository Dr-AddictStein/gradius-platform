"use client";
import React from 'react';
import { FeatureCard, FeatureCardProps } from './FeatureCard';
import { motion } from 'framer-motion'

const features: FeatureCardProps[] = [
  {
    imageSrc: "/assets/adapt1.png",
    title: "Dynamic Learning Mapper",
    description: "Each optional question reveals a new aspect of your learning style. For example, if you're a practical learner who grasps concepts better with real-world examples, Gradius will adjust by providing more practical explanations, tailoring the experience to fit your needs"
  },
  {
    imageSrc: "/assets/adapt2.png",
    title: "Adaptive Chatbot with Scaffolding",
    description: "Unlike other learning apps, Gradius doesn't simply give you the correct answer. Instead, it helps you think and guides you step-by-step toward the solution, tailoring its support to your unique learning style"
  },
  {
    imageSrc: "/assets/adapt3.png",
    title: "Frequency and Difficulty Adjustment Based on Your Needs",
    description: "Gradius adjusts both the frequency and difficulty of questions based on your knowledge of each microtopic. The more you master a concept, the less frequently it's tested, and the more challenging questions become to ensure continuous learning and growth"
  },
  {
    imageSrc: "/assets/adapt4.png",
    title: "Smart Recommendation System",
    description: "Gradius continuously analyzes your performance, pinpointing your learning gaps. Using this data, it delivers personalized content that perfectly matches your learning style"
  }
];

const AdaptiveLearningFeatures: React.FC = () => {
  return (
    <section
      className="flex flex-col items-center lg:mt-[120px] justify-center px-4 py-20 w-full sm:px-8 lg:px-16"
        style = {{

        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    > 

      <div className="flex flex-col self-center max-w-full text-center w-[846px]">
        <div className="flex flex-col w-full max-md:max-w-full">
          <motion.h1 
            className="text-6xl font-medium tracking-tighter leading-none sm:text-[#0F0F0F] max-md:max-w-full max-md:text-4xl [text-shadow:_1px_1px_8px_#a436f1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2
            }}
          >
            Adaptive Learning Features
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg tracking-tight leading-7 sm:text-[#0F0F0F]  max-md:max-w-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Gradius dynamically adjusts to your learning style, guiding you
            with real-time support and personalized insights for continuous
            improvement
          </motion.p>
        </div>
      </div>





      {/* Grid Layout for Cards */}
      <div className="grid w-full max-w-screen-xl mx-auto gap-8 px-4 mt-16
        grid-cols-1 
        md:grid-cols-2
       gap-x-8 gap-y-12"
      >
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
      
      

    </section>
  );
};

export default AdaptiveLearningFeatures;
