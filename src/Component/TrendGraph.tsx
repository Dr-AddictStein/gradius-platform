import React from "react";
import { LineChart, Line, YAxis, ResponsiveContainer } from "recharts";

interface TrendGraphProps {
  color?: string;
  isNeg?: boolean;
}

const TrendGraph: React.FC<TrendGraphProps> = ({
  color = "#22c55e",
  isNeg,
}) => {
  // Data points adjusted to create more dramatic spikes
  const data = isNeg
    ? [
        { value: 100 },
        { value: 85 },
        { value: 95 },
        { value: 70 },
        { value: 80 },
        { value: 65 },
        { value: 75 },
        { value: 60 },
        { value: 55 },
      ]
    : [
        { value: 50 },
        { value: 65 },
        { value: 100 },
        { value: 75 },
        { value: 90 },
        { value: 70 },
        { value: 85 },
        { value: 80 },
        { value: 95 },
      ];

  // Calculate percentage change
  const firstValue = data[0].value;
  const lastValue = data[data.length - 1].value;
  const percentageChange = ((lastValue - firstValue) / firstValue) * 100;
  const isPositive = percentageChange > 0;

  return (
    <div className=" rounded-lg w-[80%]">
      <div className="text-end">
        <div className="flex items-center justify-end gap-3">
          <span
            className={`text-sm ${
              isPositive ? "text-[#04CE00]" : "text-[#FF718B]"
            }`}
          >
            {isPositive ? "+" : ""}
            {percentageChange.toFixed(2)}%
          </span>
          <img
            src={
              !isNeg
                ? "../../public/growIconSmall.png"
                : "../../public/growIconSmallRed.png"
            }
            alt=""
            className="w-[15px] h-[10px]"
          />
        </div>
      </div>
      <div style={{ width: "100%", height: "60px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <YAxis domain={["dataMin - 10", "dataMax + 10"]} hide />
            <Line
              type="linear"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              dot={false}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrendGraph;
