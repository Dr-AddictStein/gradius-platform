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

  const [messages, setMessages] = useState([
    {
      text: "Hey there, Gradius here! Go ahead and ask me anything. I will give you answers tailored to your specific needs!",
      sender: "bot",
    },
    {
      text: "Hey there, Gradius here! Go ahead and ask me anything. I will give you answers tailored to your specific needs!",
      sender: "user",
    },
  ]);

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
      <div className="w-full h-[65vh]  p-3 flex flex-col justify-between items-center ">
        {/* message area */}
        <div className="w-full h-[45vh]  overflow-y-auto scrollbar-hide ">
          {messages.map((mssg) => (
            <div
              className={`flex w-full ${
                mssg.sender === "bot" ? "justify-start" : "justify-end"
              }  mb-2`}
            >
              <div
                className={`max-w-[70%] border-2 ${
                  mssg.sender === "bot" ? "border-[#BF7DED]" : "border-white"
                }  p-3 rounded-[20px]`}
              >
                <p className="lg:font-semibold font-medium lg:text-[12px] text-[10px]">
                  {mssg.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* control area */}
        <div className="h-[12vh] w-full flex flex-col justify-between items-center ">
          <div className="flex justify-between items-center w-full">
            <button
              onClick={() =>
                setMessages([
                  ...messages,
                  { text: "Rephrase the question", sender: "user" },
                ])
              }
              className="border-[2px] border-[#BF7DED] h-[6vh] w-[31%] rounded-[6px] flex items-center justify-center"
            >
              <p className="2xl:text-[16px] lg:text-[12px] text-[10px] font-semibold text-center">
                Rephrase the question
              </p>
            </button>
            <button
              onClick={() =>
                setMessages([
                  ...messages,
                  { text: "Ask for a tip", sender: "user" },
                ])
              }
              className="border-[2px] border-[#BF7DED] h-[6vh] w-[31%] rounded-[6px] flex items-center justify-center"
            >
              <p className="2xl:text-[16px] lg:text-[12px] text-[10px] font-semibold text-center">
                Ask for a tip
              </p>
            </button>
            <button
              onClick={() =>
                setMessages([
                  ...messages,
                  { text: "I need an example", sender: "user" },
                ])
              }
              className="border-[2px] border-[#BF7DED] h-[6vh] w-[31%] rounded-[6px] flex items-center justify-center"
            >
              <p className="2xl:text-[16px] lg:text-[12px] text-[10px] font-semibold text-center">
                I need an example
              </p>
            </button>
          </div>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="relative flex items-center">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask me anything..."
                className="w-full px-4 h-[5vh] text-white bg-transparent border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent pr-12 lg:text-[16px] text-[10px]"
              />
              <button
                type="submit"
                className="absolute right-2 p-2 text-white hover:text-purple-400 transition-colors"
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
