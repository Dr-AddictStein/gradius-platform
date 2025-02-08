import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Eye, Play, PlayIcon } from "lucide-react";
import { Card, CardContent } from "./Card";

const videos = [
  {
    id: 1,
    title: "CAPM - What is Capital Asset Pricing Model",
    views: "730k views",
    thumbnail: "../../public/slider1.png",
    channel: "Learn to Invest - Investors Grow",
    handle: "@LearntoInvest",
  },
  {
    id: 2,
    title: "Understanding Stock Market Basics",
    views: "1M views",
    thumbnail: "../../public/slider2.png",
    channel: "Finance World",
    handle: "@FinanceWorld",
  },
];

const VideoLayers: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <button
        className="absolute -left-6 z-10 bg-[#828597] text-[#D9D9D9] p-2 rounded-full border-[1px] border-[#D9D9D9]"
        onClick={prevVideo}
      >
        <ChevronLeft size={24} />
      </button>
      <div className="relative w-[90%] h-[90%] ">
        <AnimatePresence>
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className={` absolute w-full h-full ${
                index === currentIndex ? "z-10" : "z-0"
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: index === currentIndex ? 1 : 0,
                scale: index === currentIndex ? 1 : 0.95,
              }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden rounded-[30px] shadow-lg w-full h-full flex flex-col justify-between">
                <div className="relative h-[60%] w-full">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="object-cover h-[100%] w-[100%]"
                  />
                  <button className="absolute top-[45%] left-[45%]">
                    <div className="flex justify-center items-center">
                      <div className="h-[36px] w-[36px] bg-[#A436F1] rounded-full flex justify-center items-center">
                        <PlayIcon />
                      </div>
                    </div>
                  </button>
                </div>
                <CardContent className="p-4 bg-[#3D3F4A]  text-white h-[40%]">
                  <div className="flex flex-col h-full justify-around">
                    <div className="">
                      <h3 className="text-[16px] font-semibold text-center">
                        {video.title}
                      </h3>
                      <div className="flex items-center gap-2 justify-end mt-4">
                        <Eye color="#565868" size={18} />
                        <p className="text-[12px] font-normal text-gray-400">
                          {video.views}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center">
                      <div className="">
                        <img
                          src="../../public/channel1profile.png"
                          alt=""
                          className="w-[32px] h-[32px]"
                        />
                      </div>
                      <div className="">
                        <p className="text-sm">{video.channel}</p>
                        <p className="text-xs text-gray-400">{video.handle}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <button
        className="absolute -right-6 z-10 bg-[#828597] text-[#D9D9D9] p-2 rounded-full border-[1px] border-[#D9D9D9]"
        onClick={nextVideo}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default VideoLayers;
