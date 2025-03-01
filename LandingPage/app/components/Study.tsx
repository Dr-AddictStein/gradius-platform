'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Study = () => {
    return (
        <div className='max-w-7xl relative mx-auto my-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
            <motion.h1 
                initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }} 
                whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.2 }} 
                transition={{ duration: 0.5, ease: "easeOut" }} 
                className="font-bold text-[32px] sm:text-[50px] md:text-[70px] lg:text-[80px] leading-tight text-center bg-clip-text text-transparent bg-gradient-to-b from-[#A436F1] to-[#6E27D5]"
            >
                Find Your Perfect
            </motion.h1>

            <motion.h1 
                initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }} 
                whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.2 }} 
                transition={{ duration: 0.5, ease: "easeOut" }} 
                className="font-bold text-[40px] sm:text-[60px] md:text-[90px] lg:text-[110px] leading-tight text-center bg-clip-text text-transparent bg-gradient-to-b from-[#6E27D5] to-[#39146F]"
            >
                Study Method
            </motion.h1>

            <div className="absolute right-6 sm:right-20 md:right-48 -bottom-6 sm:-bottom-10 md:-bottom-12">
                <Image src={'/assets/Layer 7.png'} width={40} height={40} alt='layer' className="w-6 sm:w-8 md:w-10 h-auto" />
            </div>
            
            <div className="absolute left-10 sm:left-32 md:left-56 -top-6 sm:-top-10 md:-top-12">
                <Image src={'/assets/Layer 6.png'} width={40} height={40} alt='layer' className="w-6 sm:w-8 md:w-10 h-auto" />
            </div>
        </div>
    );
};

export default Study;
