import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceDot,
  ReferenceArea,
} from "recharts";
import growthIcon from "../../public/Growth Indicator.png";

// Different data sets for each time period
const DATA = {
  Day: [
    { day: "MON", score: 3 },
    { day: "TUE", score: 4.5 },
    { day: "WED", score: 3 },
    { day: "THU", score: 6, highlight: true, label: "1.8" },
    { day: "FRI", score: 3.5 },
    { day: "SAT", score: 8 },
    { day: "SUN", score: 10 },
  ],
  Week: [
    { day: "Week 1", score: 5 },
    { day: "Week 2", score: 7 },
    { day: "Week 3", score: 4, highlight: true, label: "2.1" },
    { day: "Week 4", score: 8 },
  ],
  Month: [
    { day: "Jan", score: 4 },
    { day: "Feb", score: 6 },
    { day: "Mar", score: 3 },
    { day: "Apr", score: 7, highlight: true, label: "1.5" },
    { day: "May", score: 5 },
    { day: "Jun", score: 8 },
  ],
  Year: [
    { day: "2020", score: 3 },
    { day: "2021", score: 5 },
    { day: "2022", score: 7, highlight: true, label: "2.3" },
    { day: "2023", score: 6 },
    { day: "2024", score: 9 },
  ],
};

const KnowledgeGraph = ({ isSmall }) => {
  const [timeframe, setTimeframe] = useState("Day");
  const currentData = DATA[timeframe];

  // Find the highlighted point for reference area
  const highlightIndex = currentData.findIndex((item) => item.highlight);
  const previousDay = currentData[highlightIndex - 1]?.day;
  const nextDay = currentData[highlightIndex + 1]?.day;

  return (
    <div className="w-[100%]  rounded-xl">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-6">
          <h2 className="text-white text-[16px] font-bold">
            Overall Knowledge
          </h2>
        </div>
        <div className="flex gap-2">
          {!isSmall && (
            <>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-gray-300 text-[10px] font-normal">
                  Knowledge score
                </span>
              </div>
              <div className="flex flex-col items-center ">
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <span className="text-white text-[10px] font-bold">1.3%</span>
                  <img src={growthIcon} alt="" />
                </div>
                <span className="text-[10px] font-normal text-[#ACADB6]">
                  VS LAST WEEK
                </span>
              </div>
            </>
          )}
          <div className="flex justify-between gap-2 px-2 py-4 items-center bg-[#828597] rounded-[15px] w-[193px] h-[21px]">
            {Object.keys(DATA).map((period) => (
              <button
                key={period}
                onClick={() => setTimeframe(period)}
                className={`rounded-[13px] text-[10px] font-normal transition-colors px-[6px] py-1 ${
                  timeframe === period
                    ? "bg-gray-700 text-white"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className={`w-full bg-slate-500 h-[1px] ${isSmall?"":"mb-8"} `}></div>

      <div className={`${isSmall ? "h-[132px]" : "h-44"} w-full`}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={currentData}
            margin={{ top: 10, right: -30, left: -35, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#A855F7" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#A855F7" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="highlightArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A855F7" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#A855F7" stopOpacity={0.4} />
              </linearGradient>
            </defs>
            {/* 🔥 Stronger Horizontal Grid Lines */}
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="white"
              opacity={0.8}
              vertical={false}
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 10 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 10 }}
              domain={[0, 10]}
              ticks={[0, 2, 4, 6, 8, 10]}
            />
            {highlightIndex !== -1 && (
              <ReferenceArea
                x1={previousDay}
                x2={nextDay}
                y1={0}
                y2={currentData[highlightIndex].score}
                fill="url(#highlightArea)"
              />
            )}
            <Area
              type="linear"
              dataKey="score"
              stroke="#A855F7"
              strokeWidth={2}
              fill="url(#colorScore)"
            />
            {currentData.map(
              (point, index) =>
                point.highlight && (
                  <ReferenceDot
                    key={index}
                    x={point.day}
                    y={point.score}
                    r={4}
                    fill="#A855F7"
                    stroke="#fff"
                  >
                    <label position="top" offset={10} style={{ fill: "#fff" }}>
                      {point.label}
                    </label>
                  </ReferenceDot>
                )
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default KnowledgeGraph;
