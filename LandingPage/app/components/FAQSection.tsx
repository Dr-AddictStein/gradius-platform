"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";
import { Plus, Minus } from "lucide-react";
import CallToAction from "./CallToAction";

const faqData = [
  {
    question: "How is Gradius different?",
    answer:
      "Gradius identifies your learning shortfalls with unparalleled granularity by analyzing your performance in each microtopic and assigning a knowledge score. It then adapts dynamically to your learning style.",
  },
  {
    question: "How do you identify my learning style?",
    answer:
      "Gradius uses targeted questions designed in collaboration with neuroscientists and self-training AI that adapts to your study patterns over time.",
  },
  {
    question: "Why can I only import quizzes and flashcards from other platforms?",
    answer:
      "We're currently focused on adaptability, but soon, you'll be able to upload your own materials, and Gradius will generate study tools for you!",
  },
  {
    question: "How can I give my advice on how to improve Gradius?",
    answer:
      "Join our Discord channel and talk directly with our developers—your feedback helps shape Gradius into the best learning tool possible!",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center px-6 md:px-24 py-16 text-black">
      {/* FAQ Heading */}
      <motion.h1
        className="text-[#F3ECFE] text-3xl md:text-5xl font-semibold text-center drop-shadow-[0_0_10px_#A436F1]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h1>
      <p className="mt-4 text-lg text-center text-[#F2EBFD]">
        Everything you need to know about the product and features.
      </p>

      {/* FAQ Items */}
      <Slide direction="up">
        <div className="mt-12 w-full max-w-4xl space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="flex flex-col w-full">
              <button
                className="flex items-center justify-between p-4 w-full bg-[#160F22] rounded-lg cursor-pointer text-white transition-all hover:bg-[#1D112B] focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-left text-lg md:text-xl font-semibold">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl"
                >
                  {openIndex === index ? <Minus /> : <Plus />}
                </motion.div>
              </button>

              <motion.div
                className="overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="p-4 bg-[#160F22] text-white rounded-lg  text-base">
                  {item.answer}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </Slide>

      {/* Call To Action */}
      <div className="mt-10">
        <CallToAction />
      </div>
    </div>
  );
};

export default FAQSection;
