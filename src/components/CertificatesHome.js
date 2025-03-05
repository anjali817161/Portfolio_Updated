import { motion } from "framer-motion";


export default function CertificatesHome() {

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
      className="relative w-full md:h-screen h-[500px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('./images/certificates-bg.png')` }
    
    }
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col md:justify-center justify-start  items-start text-start md:px-32 px-6 text-white">
      
        <motion.h3
          className="text-xl font-bold mt-36 md:mt-0 md:text-4xl text-amber-950 mb-4"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
          transition={{ ...transition, delay: 0.3 }}
        >
       Certified Excellence: 
        </motion.h3>

       
        <motion.h1
          className="text-2xl md:text-5xl font-serif max-w-xl"
          initial="hidden"
          animate="visible"
          variants={paragraphVariants}
          transition={{ ...transition, delay: 0.6 }}
        >
         A Journey of Continuous Growth!
        </motion.h1>
      </div>
    </div>
   </>
  )
}
