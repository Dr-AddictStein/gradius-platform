import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from "recharts";

const data = [
  { day: "M", hours: 6 },
  { day: "T", hours: 1.5 },
  { day: "W", hours: 3 },
  { day: "T", hours: 0.5 },
  { day: "F", hours: 6.7 },
  { day: "S", hours: 2.5 },
  { day: "S", hours: 4 },
];

const maxHours = 8; // Maximum hours for scaling

const LearningTimeGraph: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className=" px-10 rounded-xl w-full">
      {/* Title */}
      <div className="flex items-center justify-start gap-4 text-white font-semibold mb-3">
        <span>Daily time spent learning</span>
        <span className="text-green-400">⬆</span>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <BarChart 
          data={data} 
          margin={{ top: 20, right: 10, left: 10, bottom: 10 }}
        >
          {/* Grid Lines */}
          <CartesianGrid strokeDasharray="4 4" vertical={false} 
            stroke={hoveredIndex !== null ? "#A436F1" : "white"} 
            opacity={0.3} 
          />

          {/* X-Axis */}
          <XAxis 
            dataKey="day" 
            tick={{ fill: "white" }} 
            tickLine={false} 
          />

          {/* Y-Axis */}
          <YAxis 
            tick={{ fill: "white" }} 
            domain={[0, maxHours]} 
            tickLine={false} 
          />

          {/* Tooltip */}
          <Tooltip cursor={{ fill: "transparent" }} />

          {/* Bars */}
          <Bar 
            dataKey="hours"
            radius={[6, 6, 0, 0]}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`bar-${index}`} 
                fill={hoveredIndex === index ? "#A436F1" : "#D2D3D9"} 
                onMouseEnter={() => setHoveredIndex(index)}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LearningTimeGraph;
