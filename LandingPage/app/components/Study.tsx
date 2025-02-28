'use client'
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

const Study = () => {
    return (
        <div className='max-w-7xl relative mx-auto my-8 px-4 sm:px-6 lg:px-8'>
            <motion.h1 
                initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }} 
                whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.2 }} 
                transition={{ duration: 0.4, ease: "easeOut" }} 
                className="font-medium text-[40px] sm:text-[55px] md:text-[75px] leading-[1.2] tracking-[-2%] text-center bg-clip-text text-transparent bg-gradient-to-b from-[#A436F1] to-[#6E27D5]"
            >
                Find your perfect
            </motion.h1>

            <motion.h1 
                initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }} 
                whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.2 }} 
                transition={{ duration: 0.4, ease: "easeOut" }} 
                className="font-medium text-[60px] text-2xl md:text-[120px] leading-[1.2] tracking-[-2%] text-center bg-clip-text text-transparent bg-gradient-to-b from-[#6E27D5] to-[#39146F]"
            >
                Study Method
            </motion.h1>

            <div className="absolute right-10 sm:right-20 md:right-56 -bottom-5 sm:-bottom-7 md:-bottom-9">
                <Image src={'/assets/Layer 7.png'} width={30} height={30} alt='layer' />
            </div>
            <div className="absolute left-10 sm:left-20 md:left-56 top-10 sm:top-16 md:top-28">
                <Image src={'/assets/Layer 6.png'} width={30} height={30} alt='layer' />
            </div>
        </div>
    );
};

export default Study;
