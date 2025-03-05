import { useEffect, useState } from 'react';

const Education = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative p-4 sm:py-16 sm:px-20 bg-gradient-to-br from-teal-900 to-sky-900"
      style={{ minHeight: '100vh' }}
    >
      <div className="relative z-10 text-center">
        {/* Main Heading */}
        <h2
          className={`text-4xl md:mt-10 sm:text-5xl lg:text-6xl font-serif underline text-white transition-transform duration-700 ${
            animate ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
         Qualifications
        </h2>

        {/* Qualification Boxes */}
        <div className="grid grid-cols-1 mx-52 justify-center items-center md:grid-cols-2 lg:grid-cols-2 gap-6 mt-16">
          {/* Box 1 */}
          <div
            className={`bg-transparent h-[300px] w-[400px] border border-white shadow-lg  p-20 transition-transform duration-700 ${
              animate ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <h3 className="text-xl sm:text-2xl  font-semibold text-white text-center">
              Full Stack Developer
            </h3>
            <hr className="border-t border-gray-400 my-4" />
            <p className="text-sm sm:text-lg text-slate-300 text-center">
              Full Stack Developer, Coding Ninja (2023-2024)
            </p>
          </div>

          {/* Box 2 */}
          <div
            className={`bg-transparent h-[300px] w-[400px] border border-white shadow-lg  p-20 transition-transform duration-700 ${
              animate ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-white text-center">
             BCA
            </h3>
            <hr className="border-t border-gray-400 my-4 " />
            <p className="text-sm sm:text-lg text-slate-300 text-center">
            BCA, Medicaps University, Indore(2023)
            </p>
          </div>

          {/* Box 3 */}
          {/* <div
            className={`bg-transparent border border-white shadow-lg p-10 transition-transform duration-700 ${
              animate ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-white text-center">
              B.com
            </h3>
            <hr className="border-t border-gray-400 my-4" />
            <p className="text-sm sm:text-lg text-slate-300 text-center">
            B.com, 2020 Pass Out from Dr. Br Ambedkar University
            </p>
          </div> */}

          {/* Box 4 */}
          {/* <div
            className={`bg-transparent border border-white shadow-lg  p-10 transition-transform duration-700 ${
              animate ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-white text-center">
              MA. Economics
            </h3>
            <hr className="border-t border-gray-400 my-4" />
            <p className="text-sm sm:text-lg text-slate-300 text-center">
            MA Persuing from Dr. Br Ambedkar University
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Education;
