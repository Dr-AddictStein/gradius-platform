import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  iconSrc: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, iconSrc, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleFAQ = () => setIsActive((prev) => !prev);

  return (
    <div className="w-full bg-[#160F22] rounded-lg border-b border-violet-100 border-opacity-10 min-h-[64px] mb-2.5">
      <button
        className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 w-full focus:outline-none"
        onClick={toggleFAQ}
        aria-expanded={isActive}
      >
        <span className="text-left text-gray-300 text-sm md:text-base">
          {question}
        </span>
        <img
          src={iconSrc}
          className={`object-contain w-6 md:w-8 aspect-square transition-transform duration-300 ${
            isActive ? "rotate-180" : ""
          }`}
          alt="Toggle answer"
        />
      </button>

      <div
        className={`grid transition-all duration-500 ${
          isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        } overflow-hidden`}
      >
        <div className="px-4 pb-3 pt-2 md:px-6 md:pb-4 md:pt-2 text-gray-300 text-sm md:text-base">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
