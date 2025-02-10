import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const DATA = {
  Day: [
    { date: "1 Oct", quizzes: 4.2, flashcards: 0.5 },
    { date: "3 Oct", quizzes: 6.5, flashcards: 3 },
    { date: "7 Oct", quizzes: 5, flashcards: 3.5 },
    { date: "10 Oct", quizzes: 2, flashcards: 1.8 },
    { date: "14 Oct", quizzes: 9.5, flashcards: 7.2 },
    {
      date: "20 Oct",
      quizzes: 4,
      flashcards: 9.5,
      highlight: true,
      label: "7.90",
    },
    { date: "23 Oct", quizzes: 7.2, flashcards: 7 },
    { date: "27 Oct", quizzes: 9, flashcards: 4.5 },
    { date: "30 Oct", quizzes: 9.5, flashcards: 5 },
  ],
  Week: [
    { date: "Week 1", quizzes: 5, flashcards: 3 },
    { date: "Week 2", quizzes: 7, flashcards: 6 },
    {
      date: "Week 3",
      quizzes: 8,
      flashcards: 7,
      highlight: true,
      label: "8.50",
    },
    { date: "Week 4", quizzes: 6, flashcards: 5 },
  ],
  Month: [
    { date: "Jan", quizzes: 4, flashcards: 2 },
    { date: "Feb", quizzes: 6, flashcards: 5 },
    { date: "Mar", quizzes: 7, flashcards: 6, highlight: true, label: "6.80" },
    { date: "Apr", quizzes: 8, flashcards: 7 },
    { date: "May", quizzes: 7, flashcards: 5 },
    { date: "Jun", quizzes: 9, flashcards: 8 },
  ],
  Year: [
    { date: "2020", quizzes: 5, flashcards: 3 },
    { date: "2021", quizzes: 6, flashcards: 5 },
    { date: "2022", quizzes: 8, flashcards: 7, highlight: true, label: "7.50" },
    { date: "2023", quizzes: 7, flashcards: 6 },
    { date: "2024", quizzes: 9, flashcards: 8 },
  ],
};

const PassRateComparison = () => {
  const [timeframe, setTimeframe] = useState("Day");
  const currentData = DATA[timeframe];

  return (
    <div className="w-full max-w-4xl rounded-xl">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-white text-[16px] font-bold">
          Pass Rate Quizzes VS Flashcards
        </h2>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#A436F1]"></div>
            <span className="text-gray-300 text-[10px] font-normal">
              Quizzes
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#C893FD]"></div>
            <span className="text-gray-300 text-[10px] font-normal">
              Flashcards
            </span>
          </div>
        </div>

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

      <div className="w-full bg-slate-500 h-[1px] mb-8"></div>

      <div className="h-44 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={currentData}
            margin={{ top: 10, right: 12, left: -35, bottom: 0 }}
          >
            {/* 🔥 Stronger Horizontal Grid Lines */}
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="white"
              opacity={0.9}
              vertical={false}
            />

            {/* X-Axis */}
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 10 }}
            />

            {/* Y-Axis */}
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 10 }}
              domain={[0, 10]}
              ticks={[2, 4, 6, 8, 10]}
            />

            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  if (data.highlight) {
                    return (
                      <div className="bg-slate-600 rounded-lg px-3 py-1 text-sm">
                        {data.label}
                      </div>
                    );
                  }
                }
                return null;
              }}
            />

            {/* Lines */}
            <Line
              type="linear"
              dataKey="quizzes"
              stroke="#A855F7"
              strokeWidth={2}
              dot={{ r: 4, fill: "#A855F7", stroke: "#A855F7" }}
            />
            <Line
              type="linear"
              dataKey="flashcards"
              stroke="#E9D5FF"
              strokeWidth={2}
              dot={{ r: 4, fill: "#E9D5FF", stroke: "#E9D5FF" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PassRateComparison;
