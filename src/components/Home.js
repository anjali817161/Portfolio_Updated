import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import HomeDetails from './HomeDetails';
import QualificationDetails from './QualificatonDetails';
import End from './End';

const Home = () => {
  const navigate = useNavigate(); 

  const variants = {
    hidden: { opacity: 0, x: -100, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1 },
  };

  const transition = {
    duration: 0.8,
    ease: [0.65, 0, 0.35, 1], 
  };

  const handleButtonClick = () => {
    navigate('/about-home'); 
  };

  return (
    <>
    <section className="flex items-center h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://media.istockphoto.com/id/1454183218/vector/dark-abstract-blue-light-background-gradient-shapes-navy-blue-hexagon-mesh-pattern-decoration.jpg?s=612x612&w=0&k=20&c=PlAwDLbaCMBnh9zL5RZvQiUlBcEU4OlaUZ02BikQRxM="
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50 backdrop-filter backdrop-blur-lg" />
      </div>
      <div className="relative z-10 text-white text-left px-6 sm:px-12 md:px-28 py-8">
        <motion.h3 
          className="text-xl mb-5 sm:text-2xl md:text-3xl font-semibold text-cyan-300"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={transition} 
        >
          Welcome to my portfolio
        </motion.h3>
        <motion.h1
          className="text-4xl mb-6 border-l-8 px-4 border-cyan-600 sm:text-6xl md:text-8xl mt-4 font-bold"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ...transition, delay: 0.5 }} 
        >
          ANJALI KUMARI
        </motion.h1>
        <motion.h2
          className="mt-4 text-sm mb-8 text-gray-400 sm:text-base md:text-3xl leading-relaxed max-w-md sm:max-w-lg md:max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ...transition, delay: 1 }} 
        >
          Passionate Frontend Developer.
        </motion.h2>

        <motion.button 
          className="w-fit h-fit p-2 mt-6 border border-cyan-600 px-3 md:px-6 py-2 md:py-3 text-sm md:text-base text-cyan-600 hover:bg-cyan-600 hover:text-white"
          onClick={handleButtonClick}
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ...transition, delay: 2 }} 
        >
          Explore
          <FontAwesomeIcon icon={faArrowRight} className='ml-5 w-5 h-5'/>
        </motion.button>
      </div>


    </section>
    <HomeDetails />
    <QualificationDetails />
    <End />
    </>
  );
};

export default Home;
