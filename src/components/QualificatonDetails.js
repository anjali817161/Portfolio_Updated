import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function QualificationDetails() {
  const navigate = useNavigate(); // React Router navigate function

  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const content = [
    {
      heading: 'Education',
      details: ['BCA', 'Full stack development course'],
      redirectTo: '/education',
    },
    {
      heading: 'Experience',
      details: ['Frontend Developer intern at KriptoBytes', 'Currently working in KriptoBytes'],
      redirectTo: '/experience',
    },
    {
      heading: 'Skills',
      details: ['JavaScript, React.js, Java, Next.js, Flutter, HTML/CSS', 'Responsive Design & UI/UX', 'API Integration & Optimization'],
      redirectTo: '/skills',
    },
    {
        heading: 'Projects',
        details: ['Completed 10+ Projects', 'Working on Website'],
        redirectTo: '/projects',
      },
    {
      heading: 'Achievements',
      details: ['Certification in Fullstack including Frontend & Backend'],
      redirectTo: '/certifications',
    },
  ];

  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center py-10 px-4 sm:px-8 md:px-16">
      {/* Heading */}
      <h2 className="text-2xl sm:text-5xl text-gray-200 mb-6 md:mb-32 text-center">
        Dive Deeper into My Journey and Expertise
      </h2>

      <div className="flex flex-col md:flex-row items-start justify-center w-full max-w-6xl relative">
  {/* Left Fixed Image */}
  <div className="md:w-1/3 w-full md:h-screen md:sticky md:top-10">
    <img
      src="./images/qualification-img.png"
      alt="Qualification Illustration"
      className="w-full h-auto max-w-sm mx-auto"
    />
  </div>

  {/* Right Scrolling Content */}
  <div className="md:w-2/3 md:ml-20 w-full space-y-8 overflow-y-auto">
    {content.map((item, index) => (
      <motion.div
        key={index}
        className="bg-transparent relative"
        variants={boxVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        <h3 className="text-xl sm:text-2xl px-4 border-cyan-600 border-l-4 font-semibold mb-4">{item.heading}</h3>
        <ul className="list-disc list-inside text-sm sm:text-base text-gray-400 space-y-1">
          {item.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
        {/* Divider */}
        {index !== content.length - 1 && <div className="h-px w-36 bg-gray-500 my-6"></div>}

        {/* Button */}
        <div className="mt-4 flex justify-end">
          <button
            className="p-2 px-4 bg-transparent border hover:border-none text-white text-sm sm:text-base font-semibold hover:bg-cyan-700 flex items-center"
            onClick={() => navigate(item.redirectTo)}
          >
            Learn More
            <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
          </button>
        </div>
      </motion.div>
    ))}
  </div>
</div>

    </section>
  );
}
