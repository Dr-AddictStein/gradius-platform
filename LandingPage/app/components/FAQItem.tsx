import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  iconSrc: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, iconSrc, answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-col w-full bg-[#160F22] rounded-lg border-b border-solid border-b-violet-100 border-b-opacity-10 min-h-[64px] mb-2.5">
      <button 
        className="flex items-center justify-between px-6 py-4 w-full"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="text-left text-gray-300">{question}</div>
        <img
          src={iconSrc}
          className={`object-contain w-8 aspect-square transition-transform duration-300 ${
            isActive ? 'rotate-180' : ''
          }`}
          alt="Toggle answer"
        />
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${
        isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 pb-4 pt-2 text-gray-300">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
