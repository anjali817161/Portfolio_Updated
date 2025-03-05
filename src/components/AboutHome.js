import React from 'react';
import { motion } from 'framer-motion';
import Education from './Education';
import Experience from './Experience';

export default function AboutHome() {
  const headingVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = {
    duration: 0.8,
    ease: [0.65, 0, 0.35, 1],
  };

  return (
    <>
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('./images/abouthome-bg.png')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col md:justify-center justify-start  items-start text-start md:px-32 px-6 text-white">
      
        <motion.h3
          className="text-xl font-semibold mt-36 md:mt-0 md:text-3xl text-cyan-300 mb-4"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
          transition={{ ...transition, delay: 0.3 }}
        >
           About me
        </motion.h3>

       
        <motion.h1
          className="text-lg md:text-4xl font-serif max-w-xl"
          initial="hidden"
          animate="visible"
          variants={paragraphVariants}
          transition={{ ...transition, delay: 0.6 }}
        >
         I am a Full Stack Developer from the Coding Ninjas Batch of 2023-2024, with a BCA degree and a strong preference for front-end development.
        </motion.h1>
      </div>
    </div>
    <Education />
    <Experience />
    </>
  );
}
