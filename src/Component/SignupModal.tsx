import React, { useState } from "react";
import { Notebook, Play, X } from "lucide-react";
import LoginModal from "./LoginModal";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (subject: string, color: string) => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="w-[30vw] h-[95vh] bg-[#343540] rounded-lg flex flex-col justify-center items-center gap-4">
        <p className="text-[32px] font-bold">Sign up</p>
        <p className="text-[16px] font-medium text-[#828597]">
          Create a Gradius Account .
        </p>
        <button className="bg-white w-[60%] h-[50px] rounded-[6px] flex justify-center items-center gap-6">
          <img src="../../public/googleLogo.png" alt="" />
          <p className="text-[14px] font-semibold text-[#202123]">
            Sign in with Google
          </p>
        </button>
        <div className="w-[60%] flex items-center justify-between">
          <div className="w-[43%] bg-[#565868] border-[1px] border-[#565868]"></div>
          <p className="text-[14px] font-medium text-[#828597]">OR</p>
          <div className="w-[43%] bg-[#565868] border-[1px] border-[#565868]"></div>
        </div>

        <div className="w-[60%]">
          <label htmlFor="" className="text-left text-[14px] font-semibold">
            Full Name*
          </label>
          <input
            type="text"
            name=""
            id=""
            className=" pl-6 bg-transparent border-[1px] border-[#565868] mt-2 w-full h-[50px] rounded-[6px] flex  items-center text-[#565868]"
            placeholder="Enter your full name"
          />
        </div>
        <div className="w-[60%]">
          <label htmlFor="" className="text-left text-[14px] font-semibold">
            Email*
          </label>
          <input
            type="email"
            name=""
            id=""
            className=" pl-6 bg-transparent border-[1px] border-[#565868] mt-2 w-full h-[50px] rounded-[6px] flex  items-center text-[#565868]"
            placeholder="Enter your email"
          />
        </div>
        <div className="w-[60%]">
          <label htmlFor="" className="text-left text-[14px] font-semibold">
            Password*
          </label>
          <input
            type="password"
            name=""
            id=""
            className=" pl-6 bg-transparent border-[1px] border-[#565868] mt-2 w-full h-[50px] rounded-[6px] flex  items-center text-[#565868]"
            placeholder="Set a Password"
          />
        </div>
        <button className="bg-[#A436F1]  w-[60%] h-[50px] rounded-[6px] flex justify-center items-center gap-6 hover:shadow-[0_0_15px_2px_#A436F1] transition-shadow duration-300">
          <p className="text-[14px] font-semibold text-white">Create Account</p>
        </button>
        <div className="flex justify-center items-center gap-1">
          <p className="text-[10px] font-medium text-[#828597]">
            Already have an account?
          </p>
          <button className="text-[12px] font-semibold" onClick={()=>setIsLoginModalOpen(true)}>Login instead</button>
        </div>
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  );
};

export default SignupModal;
