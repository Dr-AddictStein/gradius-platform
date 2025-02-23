import React from 'react';

// Define the props interface for the FeatureItem component
interface FeatureItemProps {
  text: string;  // The text to display for this feature item
}


// FeatureItem Component
// This component renders a single feature item with an icon and descriptive text.
const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => {
  return (
    <div className="flex gap-3.5 mt-2.5 text-base tracking-normal leading-snug text-zinc-400">
      
      {/* Icon for the feature item */}
      <img
        loading="lazy"     // Lazy loading for performance optimization
        src="https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/3b64815322316d6b1fdce91ac37a7793482d932fad819a53ab169be72e00a8d4?apiKey=1fb2522fd6c94611a6950922dca36db5&"
        className="object-contain shrink-0 w-7 aspect-[1.04]"  // Ensures proper sizing and aspect ratio
        alt=""   // Empty alt attribute as this is a decorative icon
      />

      {/* Text description of the feature */}
      <div className="my-auto basis-auto">{text}</div>

    </div>
  );
};

export default FeatureItem;