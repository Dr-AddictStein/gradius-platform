import Image from "next/image";
import React from "react";


const ChooseGradiusNew = () => {
  return (
    <div className="">
      <div className="my-12 md:mt-20 relative">
      <div className="">
      <h3
        className=" text-2xl md:text-[64px]  font-[Inter] font-medium leading-[100px] 
               tracking-tight text-center 
               bg-gradient-to-b from-[#A436F1] to-[#6E27D5] 
               text-transparent bg-clip-text 
               drop-shadow-[0px_0px_15px_#A436F1]"
      >
        Backed by
      </h3>
      <h1
        className="text-3xl md:text-[100px]  text-center leading-tight 
               bg-gradient-to-b from-[#6E27D5] to-[#39146F] 
               text-transparent bg-clip-text 
               drop-shadow-[0px_0px_15px_#A436F1]"
      >
        Cognitive Research
      </h1>
      </div>
      <div className="absolute hidden md:inline-block  top-3 left-1/3">
      <Image src={'/StarBig.png'} width={40} height={40} alt="ster"></Image>
      
      </div>
      <div className="absolute hidden md:inline-block -top-4 right-1/3">
      <Image src={'/StarBig.png'} width={40} height={40} alt="ster"></Image>
      </div>
      <div className="absolute hidden md:inline-block top-16 left-3/4">
      <Image src={'/StarBig.png'} width={30} height={30} alt="ster"></Image>
      </div>
      <div className="absolute hidden md:inline-block top-20 right-3/4 ">
      <Image src={'/StarBig.png'} width={30} height={30} alt="ster"></Image>
      </div>
      <div className="absolute hidden md:inline-block top-52 left-36 ">
      <Image src={'/StarBig.png'} width={30} height={30} alt="ster"></Image>
      </div>
      <div className="absolute hidden md:inline-block top-52 right-36 ">
      <Image src={'/StarBig.png'} width={30} height={30} alt="ster"></Image>
      </div>
    </div>
    
    </div>
  );
};

export default ChooseGradiusNew;
