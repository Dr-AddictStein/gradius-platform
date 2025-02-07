import { SendHorizontal } from "lucide-react";
import React, { useState } from "react";

const GradiusChat = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      console.log("Message sent:", message);
      setMessage("");
    }
  };
  return (
    // total 83
    <div className="p-3 w-full h-full ">
      {/* Header */}
      <div className="h-[6vh] flex justify-start items-center border-b-[1px]    border-b-[#565868]">
        {/* Centered heading */}
        {/* Right-aligned close button */}
        <div className=" w-full relative">
          <img
            src="../../public/logo.png"
            alt=""
            className="h-[35px] w-[35px] absolute left-2 -top-6"
          />
          <h2 className=" text-white text-[16px] font-bold absolute left-[45%] -top-4">
            GRADIUS
          </h2>
        </div>
      </div>

      {/* chat body */}
      <div className="w-full h-[72vh]  p-3 flex flex-col justify-between items-center">
        {/* message area */}
        <div className="w-full h-[55vh]  overflow-y-auto scrollbar-hide">
          {/* message from sender */}
          <div className="flex w-full justify-start mb-2">
            <div className="w-4/5 border-2 border-[#BF7DED] p-3 rounded-[20px]">
              <p className="font-semibold text-[12px]">
                Hey there, Gradius here! Go ahead and ask me anything. I will
                give you answers tailored to your specific needs!
              </p>
            </div>
          </div>
          {/* message from user */}
          <div className="flex w-full justify-end mb-2">
            <div className="w-4/5 border-2 border-[#BF7DED] p-3 rounded-[20px]">
              <p className="font-semibold text-[12px]">
                Hey there, Gradius here! Go ahead and ask me anything. I will
                give you answers tailored to your specific needs!
              </p>
            </div>
          </div>
        </div>

        {/* control area */}
        <div className="h-[16vh] w-full flex flex-col justify-around items-center pt-2">
          <div className="flex justify-between items-center w-full">
            <div className="border-[2px] border-[#BF7DED] h-[6vh] w-[31%] rounded-[6px] flex items-center justify-center">
              <p className="2xl:text-[16px] text-[12px] font-semibold text-center">
                Rephrase the question
              </p>
            </div>
            <div className="border-[2px] border-[#BF7DED] h-[6vh] w-[31%] rounded-[6px] flex items-center justify-center">
              <p className="2xl:text-[16px] text-[12px] font-semibold text-center">
                Ask for a tip
              </p>
            </div>
            <div className="border-[2px] border-[#BF7DED] h-[6vh] w-[31%] rounded-[6px] flex items-center justify-center">
              <p className="2xl:text-[16px] text-[12px] font-semibold text-center">
                I need an example
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="relative flex items-center">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask me anything..."
                className="w-full px-4 h-[7vh] text-white bg-transparent border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent pr-12"
              />
              <button
                type="submit"
                className="absolute right-2 p-2 text-purple-500 hover:text-purple-400 transition-colors"
                disabled={!message.trim()}
              >
                <SendHorizontal size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GradiusChat;
