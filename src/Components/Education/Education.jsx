import React from 'react';
import { motion } from 'framer-motion';

const educationTimeline = [
  {
    year: '2024',
    degree: 'MCA',
    institute: 'Visvesvaraya Technological University (VTU), Mysore',
    result: 'CGPA: 8.79'
  },
  {
    year: '2021',
    degree: 'BSc (PME)',
    institute: "Yuvaraja's College, Mysore",
    result: 'CGPA: 7.02'
  },
  {
    year: '2018',
    degree: 'Science (PCMB)',
    institute: 'Seva Bharathi Pu College, Chamarajanagar',
    result: '78.83%'
  },
  {
    year: '2016',
    degree: 'SSLC',
    institute: "St Paul's High School, Chamarajanagar",
    result: '86.56%'
  }
];

// Animations
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: 'spring', stiffness: 100 }
  })
};

export default function EducationTimeline() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 pt-28 px-4 flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-start">
        {/* LEFT: Timeline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-7 text-cyan-400">
            Education
          </h1>
          <div className="relative pl-6">
            {educationTimeline.map((edu, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={itemVariants}
                className="relative mb-9 min-h-[48px] flex items-start"
              >
                {/* Glowing Dot and Vertical Line */}
                <div className="absolute left-0 flex flex-col items-center" style={{height:"100%"}}>
                  <motion.span
                    initial={{ boxShadow: '0 0 0px #0ff', background: '#22d3ee' }}
                    whileInView={{
                      background: [
                        "#22d3ee", "#7dd3fc", "#0ea5e9", "#67e8f9", "#22d3ee"
                      ],
                      boxShadow: [
                        "0 0 0px #0ff", "0 0 7px 2px #22d3ee", "0 0 10px 4px #38bdf8",
                        "0 0 16px 6px #7dd3fc", "0 0 0px #0ff"
                      ]
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      repeatType: 'reverse'
                    }}
                    className="w-3.5 h-3.5 mb-1 rounded-full border-2 border-cyan-500"
                    style={{ zIndex: 2 }}
                  />
                  {idx < educationTimeline.length - 1 && (
                    <span className="w-0.5 bg-cyan-900 absolute left-1 top-3 bottom-0"></span>
                  )}
                </div>
                {/* Timeline Content */}
                <div className="ml-7 flex flex-col gap-0.5">
                  <div className="flex items-center gap-x-3">
                    <span className="text-cyan-300 font-semibold text-xs md:text-sm">{edu.year}</span>
                    <span className="text-slate-100 font-bold text-sm md:text-base">{edu.degree}</span>
                    <span className="text-xs rounded bg-cyan-700/20 px-2 py-0.5 text-cyan-400 font-semibold">{edu.result}</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-200 font-medium max-w-xs truncate">
                    {edu.institute}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* RIGHT: About Education */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.2 }}
          className="flex flex-col items-center md:items-start"
        >
          <h2 className="text-2xl mb-5 font-bold bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text mt-3">
            About My Educational Journey
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
            My education has shaped how I solve problems, approach challenges, and collaborate with others. Each phase—from science foundations to computer applications—has strengthened my curiosity and resilience. These milestones taught me analytical skills and fostered creativity, preparing me to thrive in real-world tech environments and pursue lifelong learning.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
