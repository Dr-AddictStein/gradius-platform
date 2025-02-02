import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  ReferenceDot
} from 'recharts';

const DATA = {
  Day: [
    { date: '1 Oct', quizzes: 4.2, flashcards: 0.5 },
    { date: '3 Oct', quizzes: 6.5, flashcards: 3 },
    { date: '7 Oct', quizzes: 5, flashcards: 3.5 },
    { date: '10 Oct', quizzes: 2, flashcards: 1.8 },
    { date: '14 Oct', quizzes: 9.5, flashcards: 7.2 },
    { date: '20 Oct', quizzes: 4, flashcards: 9.5, highlight: true, label: '7.90' },
    { date: '23 Oct', quizzes: 7.2, flashcards: 7 },
    { date: '27 Oct', quizzes: 9, flashcards: 4.5 },
    { date: '30 Oct', quizzes: 9.5, flashcards: 5 }
  ],
  Week: [
    { date: 'Week 1', quizzes: 5, flashcards: 3 },
    { date: 'Week 2', quizzes: 7, flashcards: 6 },
    { date: 'Week 3', quizzes: 8, flashcards: 7, highlight: true, label: '8.50' },
    { date: 'Week 4', quizzes: 6, flashcards: 5 }
  ],
  Month: [
    { date: 'Jan', quizzes: 4, flashcards: 2 },
    { date: 'Feb', quizzes: 6, flashcards: 5 },
    { date: 'Mar', quizzes: 7, flashcards: 6, highlight: true, label: '6.80' },
    { date: 'Apr', quizzes: 8, flashcards: 7 },
    { date: 'May', quizzes: 7, flashcards: 5 },
    { date: 'Jun', quizzes: 9, flashcards: 8 }
  ],
  Year: [
    { date: '2020', quizzes: 5, flashcards: 3 },
    { date: '2021', quizzes: 6, flashcards: 5 },
    { date: '2022', quizzes: 8, flashcards: 7, highlight: true, label: '7.50' },
    { date: '2023', quizzes: 7, flashcards: 6 },
    { date: '2024', quizzes: 9, flashcards: 8 }
  ]
};

const PassRateComparison = () => {
  const [timeframe, setTimeframe] = useState('Day');
  const currentData = DATA[timeframe];

  return (
    <div className="w-full max-w-4xl  rounded-xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <h2 className="text-white text-lg font-semibold">Pass Rate Quizzes VS Flashcards</h2>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-gray-300">Quizzes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-300"></div>
              <span className="text-gray-300">Flashcards</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 mb-1 bg-[#828597] rounded-lg w-fit">
          {Object.keys(DATA).map((period) => (
            <button
              key={period}
              onClick={() => setTimeframe(period)}
              className={`px-4 py-1.5 rounded-lg text-sm transition-colors ${
                timeframe === period 
                  ? 'bg-gray-700 text-white' 
                  : 'text-white hover:text-gray-300'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      <div className="h-40 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={currentData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false}
              stroke="#374151"
              opacity={0.5}
            />
            <XAxis 
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF' }}
              domain={[0, 10]}
              ticks={[0, 2, 4, 6, 8, 10]}
            />
            <Tooltip 
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  if (data.highlight) {
                    return (
                      <div className="bg-white rounded-lg px-3 py-1 text-sm">
                        {data.label}
                      </div>
                    );
                  }
                }
                return null;
              }}
            />
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