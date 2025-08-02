import img1 from '../../assets/images/HeroImage.png';
import React from 'react';
import { motion } from 'framer-motion';

const heroImageVariants = {
  initial: { opacity: 0, scale: 0.93, y: 36 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.85, ease: "easeOut", delay: 0.18 } }
};

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      y: { repeat: Infinity, repeatType: "reverse", duration: 5.6, ease: "easeInOut" }
    }
  }
};

const HeroSection = () => (
  <section className="relative flex items-center min-h-screen w-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 px-4 md:px-0">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full py-24">
      {/* Left: Intro */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="z-20"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
          Hi, I’m <span className="text-cyan-400">Chethan M</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-100">Python Developer</h2>
        <p className="text-gray-300 text-md md:text-lg mb-8 max-w-md">
          Freelancer with proactive approach and strong ability to articulate and deliver creative projects. Forward-thinking and ambitious,
          consistently pursuing challenging opportunities and driving successful outcomes. Adept at building client relationships and
          excelling in dynamic environments. Committed to standing out through exceptional work and innovative solutions.
        </p>
      </motion.div>
      {/* Right: Unique ALL-image container */}
      <motion.div
        variants={heroImageVariants}
        initial="initial"
        animate="animate"
        className="flex justify-center z-10"
      >
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="relative flex items-center justify-center"
        >
          {/* Outer soft glow ring */}
          <span className="absolute w-[260px] h-[370px] md:w-[335px] md:h-[440px] rounded-[2.5rem] bg-gradient-to-tr from-cyan-400/40 via-blue-400/10 to-transparent blur-2xl opacity-35 z-0 pointer-events-none" />
          {/* Unique diagonal 'glass' frame */}
          <div
            className="relative shadow-2xl rounded-[2.2rem] border-2 border-cyan-400 overflow-hidden z-10 group"
            style={{
              width: "250px",
              height: "300px",
              background: "linear-gradient(120deg, #35415a 70%, #082c43 100%)",
            }}
          >
        
            <img
              src={img1}
              alt="Chethan M"
              className="object-fill w-full h-full bg-[#0f172a]/70"
              draggable="false"
              style={{
                borderRadius: "2.3rem"
              }}
            />
            {/* Glass shine strip */}
            <div className="absolute left-0 top-0 w-full h-12 rounded-t-[2rem] pointer-events-none"
              style={{
               
              }}
            />
            {/* Animated border accent on hover */}
            <span className="pointer-events-none absolute inset-0 rounded-[2.2rem] border-2 border-cyan-300/0 group-hover:border-cyan-500 group-hover:shadow-[0_0_22px_2px_#22d3ee77] transition-all duration-500"></span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
