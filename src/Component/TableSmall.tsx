import React from "react";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  RotateCwIcon,
  ArrowUpDown,
  Repeat,
} from "lucide-react";
import rotateIcon from "../../public/Rotate ccw.png";

interface Topic {
  name: string;
  score: string;
}

interface TopicRow {
  date: string;
  topics: Topic[];
  upVotes: number;
  downVotes: number;
}

const TableSmall = () => {
  const data: TopicRow[] = [
    {
      date: "18/07",
      topics: [
        { name: "Leptons", score: "+2" },
        { name: "Quarks A", score: "+2" },
        { name: "Quarks B", score: "+2" },
        { name: "Quarks", score: "+2" },
      ],
      upVotes: 6,
      downVotes: 3,
    },
    {
      date: "17/07",
      topics: [
        { name: "Dark Matter", score: "+1" },
        { name: "Dark aaa", score: "+1" },
        { name: "Dark Energy", score: "+1" },
      ],
      upVotes: 8,
      downVotes: 1,
    },
    {
      date: "16/07",
      topics: [{ name: "Nuclear Fission", score: "+3" }],
      upVotes: 9,
      downVotes: 2,
    },
  ];

  const MAX_VISIBLE_TOPICS = 2;

  const renderTopics = (topics: Topic[]) => {
    if (topics.length <= MAX_VISIBLE_TOPICS) {
      return topics.map((topic, i) => (
        <span
          key={i}
          className="px-2 py-1 bg-[#57575940] rounded-xl text-[12px] font-semibold flex items-center gap-1"
        >
          {topic.name}
        </span>
      ));
    }

    const visibleTopics = topics.slice(0, MAX_VISIBLE_TOPICS);
    const remainingCount = topics.length - MAX_VISIBLE_TOPICS;

    return (
      <>
        {visibleTopics.map((topic, i) => (
          <span
            key={i}
            className="px-2 py-1 bg-[#57575940] rounded-xl text-[12px] font-semibold flex items-center gap-1"
          >
            {topic.name}
          </span>
        ))}
        {remainingCount > 0 && (
          <span className="px-2 py-1 bg-[#57575940] rounded-xl text-[12px] font-semibold">
            +{remainingCount}
          </span>
        )}
      </>
    );
  };

  return (
    <div className=" rounded-lg  text-gray-200">
      <table className="w-full">
        <thead>
          <tr className="text-sm text-gray-400">
            <th className="py-2 text-[13px] font-medium text-center text-[#D2D3D9]">
              Date
            </th>
            <th className="py-2 text-[13px] font-medium text-center flex justify-center items-center gap-2 text-[#D2D3D9]">
              Topics <ArrowUpDown size={15} />{" "}
            </th>
            <th className="py-2 text-[13px] font-medium text-center text-[#D2D3D9]">
              Score
            </th>
            <th className="py-2 text-[13px] font-medium text-center text-[#D2D3D9]">
              Retake
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td className="py-3 text-[13px] font-normal text-center">{row.date}</td>
              <td className="py-3">
                <div className="flex gap-2 justify-center">
                  {renderTopics(row.topics)}
                </div>
              </td>
              <td className="py-3">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex  items-center gap-1">
                    <div className="flex items-center text-green-400">
                      <ArrowUpIcon size={16} />
                      <span className="text-sm text-white">{row.upVotes}</span>
                    </div>
                    <div className="flex items-center text-red-400">
                      <ArrowDownIcon size={16} />
                      <span className="text-sm text-white">
                        {row.downVotes}
                      </span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-3">
                <button className="text-gray-400 hover:text-gray-200 flex items-center justify-center w-full">
                  <img src={rotateIcon} alt="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSmall;
