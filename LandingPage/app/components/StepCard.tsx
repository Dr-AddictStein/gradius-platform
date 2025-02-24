import React, { ReactNode } from 'react';

interface StepCardProps {
  stepNumber: string;
  title: ReactNode;
  description: ReactNode;
  additionalText?: ReactNode;
  imageSrc: string;
  iconSrc: string;
  logoSrc?: string; // New prop for the logo
  headerImage?: string;
  footerImage?: string;
  className?: string;
}

export const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  title,
  description,
  additionalText,
  imageSrc,
  iconSrc,
  logoSrc, // Added logoSrc usage
  headerImage,
  footerImage,
  className = '',
}) => {
  return (
    <article className={`flex relative flex-col items-center px-10 pt-8 pb-16 max-w-full text-3xl font-bold text-center text-white rounded-3xl bg-[linear-gradient(180deg,#A436F1_32.5%,#A267FE_100%)] min-h-[679px] w-[681px] max-md:px-5 ${className}`}>
      
      {/* Icon */}
      <img
        loading="lazy"
        src={iconSrc}
        className="object-contain absolute top-1.5 left-2 z-0 self-start w-20 h-20 aspect-square shadow-[0px_0px_10px_rgba(164,54,241,1)]"
        alt={`Step ${stepNumber} icon`}
      />
      <span className="absolute z-0 self-start h-6 leading-none text-purple-600 left-[38px] top-[35px] w-[13px]">
  {stepNumber==="1" ? stepNumber:null}
</span>

      {/* Logo */}
      {logoSrc && (
        <img
          loading="lazy"
          src={logoSrc}
          className="absolute top-[60px] left-1/2 transform -translate-x-1/2 z-10 w-[120px] h-auto" // Centered at top-middle
          alt="Logo"
        />
      )}
      
      {/* Header Image */}
      {headerImage && (
        <img
          loading="lazy"
          src={headerImage}
          className="object-contain z-0 max-w-full aspect-[1.91] w-[164px]"
          alt="Header illustration"
        />
      )}

      <div className="flex z-0 max-w-full min-h-[77px] w-[154px]" />
      
      {/* Main Image */}
      <img
        loading="lazy"
        src={imageSrc}
        className="object-contain z-0 mt-9 max-w-full rounded-3xl aspect-[2.01] w-[520px]"
        alt="Step illustration"
      />
      
      {/* Title */}
      <h2 className="z-0 mt-9 leading-none">
        {title}
      </h2>
      
      {/* Description */}
      <p className="z-0 mt-9 text-base font-medium leading-6 max-md:max-w-full">
        {description}
      </p>
      
      {/* Additional Text */}
      {additionalText && (
        <p className="z-0 mt-9 text-sm font-normal leading-none max-md:max-w-full">
          {additionalText}
        </p>
      )}

      {/* Footer Image */}
      {footerImage && (
        <img
          loading="lazy"
          src={footerImage}
          className="object-contain z-0 mt-9 max-w-full aspect-[26.32] w-[236px] h-[21px]"
          alt="Footer illustration"
        />
      )}
    </article>
  );
};