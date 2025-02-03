import React from 'react';

interface CircularProgressProps {
  value: number;  // Required value between 0-10
  maxValue?: number; // Optional max value, defaults to 10
  size?: number;
  strokeWidth?: number;
  className?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  maxValue = 10,
  size = 200,
  strokeWidth = 25,
  className = '',
}) => {
  // Validate and clamp the value
  const validValue = Math.min(Math.max(Number(value) || 0, 0), maxValue);
  
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = ((maxValue - validValue) / maxValue) * circumference;

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        className="transform -rotate-90"
        style={{ width: size, height: size }}
      >
        {/* Define Angular Gradient */}
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BF7DED" />
            <stop offset="100%" stopColor="#A436F1" />
          </linearGradient>
        </defs>

        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="#3D3F4A"
          fill="none"
        />
        
        {/* Progress circle with gradient */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="url(#progressGradient)"
          fill="none"
          // strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          style={{
            transition: 'stroke-dashoffset 0.5s ease-in-out',
          }}
        />
      </svg>
      
      {/* Value text */}
      <div 
        className="absolute inset-0 flex items-center justify-center text-3xl font-semibold text-white"
      >
        {validValue.toFixed(1)}
      </div>
    </div>
  );
};

export default CircularProgress;
