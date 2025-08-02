import React from 'react';
import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiJavascript,
  SiDjango,
  SiPython,
  SiReact,
  SiVite,
  SiGit,
  SiPostman,
} from 'react-icons/si';

const skillData = [
  { skill: 'HTML5', level: 'Intermediate', icon: <SiHtml5 className="text-orange-500" /> },
  { skill: 'JavaScript', level: 'Intermediate', icon: <SiJavascript className="text-yellow-400" /> },
  { skill: 'Django', level: 'Intermediate', icon: <SiDjango className="text-emerald-700" /> },
  { skill: 'Django REST Framework', level: 'Intermediate', icon: <SiDjango className="text-emerald-700" /> },
  { skill: 'Python', level: 'Intermediate', icon: <SiPython className="text-yellow-500" /> },
  {
    skill: 'Vite + React.js',
    level: 'Intermediate',
    icon: (
      <span className="flex items-center gap-1">
        <SiVite className="text-yellow-400" /> <SiReact className="text-cyan-400" />
      </span>
    ),
  },
  { skill: 'Git', level: 'Intermediate', icon: <SiGit className="text-orange-600" /> },
  { skill: 'Postman', level: 'Intermediate', icon: <SiPostman className="text-orange-400" /> },
];

// Animation variants for the skill cards
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, type: 'spring', stiffness: 120 }
  })
};

export default function Skills() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 flex flex-col items-center pt-28 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10 tracking-wide">My Skills & Tools</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7 w-full max-w-3xl">
        {skillData.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={cardVariants}
            className="flex flex-col items-center bg-gray-900 rounded-xl shadow-md p-6 transition hover:-translate-y-1 hover:shadow-cyan-500/30 group"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <div className="font-medium text-gray-100 text-lg text-center">{item.skill}</div>
            <div className="text-xs text-cyan-400 font-semibold mt-1">{item.level}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
