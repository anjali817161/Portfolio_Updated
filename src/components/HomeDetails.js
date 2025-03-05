import React from 'react';

const HomeDetails = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="./images/details-bg.png"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>
      <div className="relative z-10 flex gap-8 flex-col sm:flex-row items-center justify-center max-w-6xl w-full px-6 md:px-10 lg:px-16">
        {/* Left Content */}
        <div className="w-full sm:w-1/2 px-4 text-white">
          <h2 className="text-3xl md:text-5xl text-gray-200 mb-4">
          Get to Know Me Better!
          </h2>
          
        </div>
        
        {/* Vertical Border */}
        <div className="hidden sm:block h-60 border-l-2 border-teal-400 mx-6"></div>
        
        {/* Right Content */}
        <div className="w-full sm:w-1/2 px-4 text-white">
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            As an Experienced frontend developer, I excel in building dynamic and responsive web applications. My technical skillset includes JavaScript, React.js, Next.js, Flutter, HTML5, CSS3, and modern design frameworks like TailwindCSS and Bootstrap. 
            I am proficient in creating seamless user experiences by integrating REST APIs, optimizing application performance, and writing clean, maintainable, and reusable code. My dedication to delivering high-quality, scalable solutions reflects my passion for web development and innovation.
          </p>
        </div>
      </div>

     
    </section>

  );
};

export default HomeDetails;
