import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFighterJet } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('./images/experience-bg.png')` }}
    >
      {/* Main Flex Container */}
      <div className="flex flex-col md:flex-row items-center justify-start px-4 md:px-28 lg:px-48 py-8 md:py-20 h-full">
        {/* Main Heading and Subtitle */}
        <div className="flex-shrink-0 md:w-1/3 text-start">
          <h1 className="text-3xl md:text-5xl font-serif text-white py-2 md:py-6">
            Industry Experience
          </h1>
          <div className='h-0 w-1/2 border-4 border-teal-500 mb-6 md:mb-10'></div>
          <p className="text-sm md:text-xl text-zinc-400">
            Emerging Development Talent with <br /> a Passion for Frontend Domain.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:mx-10 mt-6 md:mt-0">
          {/* Arrow */}
          <motion.div 
            className="flex space-x-2 md:space-x-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <FontAwesomeIcon 
                  icon={faFighterJet} 
                  className={index % 2 === 0 ? "text-zinc-500 text-sm md:text-xl" : "text-teal-500 text-sm md:text-xl"} 
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Details */}
          <motion.div 
            className="border-8 mt-6 md:mt-0 ml-0 md:ml-10 p-8 md:p-12 bg-zinc-900 border-zinc-300 text-zinc-300 h-56 md:h-72 w-full md:w-72"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <div>
              <ul className='list-disc mx-4 md:mx-0 space-y-3 md:space-y-5 marker:text-teal-500'>
                <li>
                  <h2 className="text-sm md:text-lg">
                    Working as an intern at{' '}
                    <span className="text-teal-500 md:text-xl">KriptoBytes</span>
                  </h2>
                </li>
                <li>
                  <span className="text-sm md:text-lg text-zinc-300">
                    October 2024 - Currently Working
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
