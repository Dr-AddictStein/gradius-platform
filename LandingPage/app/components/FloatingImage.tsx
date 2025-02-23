import React from 'react';

interface FloatingImageProps {
  src: string;
  size: number;
  left: number;
  top: number;
}

export const FloatingImage: React.FC<FloatingImageProps> = ({ src, size, left, top }) => {
  return (
    // img
    // booss
    // booss
    <img
      loading="lazy"
      src={src}
      alt=""
      className={`object-contain absolute z-0 aspect-square shadow-[0px_0px_10px_rgba(164,54,241,1)] max-md:left-[${left / 2}px] max-md:top-[${top / 2}px]`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}px`,
        top: `${top}px`,
      }}
    />
  );
};