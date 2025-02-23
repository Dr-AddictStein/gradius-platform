"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface ReasonProps {
  number: string;
  title: string;
  points: Array<{
    text: string;
    highlightType: 'gradient' | 'glow';
    highlightParts: Array<{
      text: string;
      color?: string;
    }>;
  }>;
  alignment?: 'left' | 'right';
}

const reasons: ReasonProps[] = [
  {
    number: "1",
    title: "Unlock Your Unique Learning Style",
    points: [
      {
        text: "Gradius helps you unlock and value your ",
        highlightType: 'gradient',
        highlightParts: [
          { text: "unique learning style", color: "from-[#A436F1] to-[#8B31D0]" }
        ]
      },
      {
        text: "Everyone learns differently, and traditional, ",
        highlightType: 'gradient',
        highlightParts: [
          { text: "standardized methods aren't effective for everyone", color: "from-[#A436F1] to-[#8B31D0]" }
        ]
      },
      {
        text: "With Gradius, you'll be guided to study in the way that ",
        highlightType: 'glow',
        highlightParts: [
          { text: "works best for you", color: "#A436F1" }
        ]
      },
      {
        text: "Over time, you'll be creating the ",
        highlightType: 'glow',
        highlightParts: [
          { text: "perfect tutor", color: "#A436F1" },
          { text: " for yourself, without even realizing it" }
        ]
      }
    ],
    alignment: 'left'
  }
];

const Reason: React.FC<ReasonProps> = ({ number, title, points, alignment = 'left' }) => {
  return (
    <motion.div 
      className={`flex flex-col gap-8 ${alignment === 'right' ? 'md:items-end' : 'items-start'} w-full`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-start gap-6">
        {/* Number with gradient outline effect */}
        <span className="text-[80px] font-bold leading-none bg-gradient-to-br from-[#A436F1] to-[#8B31D0] bg-clip-text text-transparent
          [text-shadow:_2px_2px_10px_rgba(164,54,241,0.5)]"
        >
          {number}
        </span>
        
        {/* Title with gradient text effect */}
        <h3 className="text-3xl md:text-4xl font-medium bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent mt-2">
          {title}
        </h3>
      </div>

      {/* Points */}
      <div className="flex flex-col gap-5 pl-4">
        {points.map((point, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="text-[#A436F1] text-xl mt-[2px]">•</span>
            <p className="text-[17px] leading-relaxed">
              <span className="text-white/90">{point.text}</span>
              {point.highlightParts.map((part, i) => (
                <span key={i} className={`
                  ${point.highlightType === 'gradient' 
                    ? `bg-gradient-to-r ${part.color} bg-clip-text text-transparent`
                    : `text-[${part.color}] [text-shadow:_0_0_10px_rgba(164,54,241,0.5)]`
                  }
                `}>
                  {part.text}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const ChoseGradius: React.FC = () => {
  return (
    <section className="relative w-full px-6 py-24 overflow-hidden bg-[#14021C]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-medium bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent mb-4">
            Why you should choose Gradius today
          </h2>
          <p className="text-white/60 text-lg">3 simple reasons to level up now</p>
        </motion.div>

        <div className="flex flex-col gap-24">
          {reasons.map((reason, index) => (
            <Reason key={index} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChoseGradius;