"use client";

import Image from 'next/image';

interface ImageComponentProps {
  src: string;
  alt?: string;
  className?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ 
  src, 
  alt = "Image",
  className 
}) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="custom-contain"
        priority
      />
    </div>
  );
};

export default ImageComponent;