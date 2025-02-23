import React from 'react';

export interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col h-full p-6 rounded-2xl border border-solid 
           bg-gradient-to-b from-[#A436F1] via-[#A436F1] to-[#541DA3]
           border-white/10 
           min-w-[280px] max-w-[600px] 
           w-full mx-auto
           transition-all duration-300 hover:scale-[1.02]">
      
      {/* Image */}
      <img
        loading="lazy"
        src={imageSrc}
        alt=""
        className="object-contain w-full rounded-lg aspect-video h-[180px] 
                 sm:h-[200px] lg:h-[220px]"
      />
      <div className="flex flex-col flex-grow mt-4">
        <h2 className="text-lg font-bold leading-tight text-white lg:text-xl">{title}</h2>
        <p className="mt-3 text-base leading-6 text-purple-100/70 sm:mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

