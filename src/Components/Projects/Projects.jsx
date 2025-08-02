import React from "react";
import { motion } from "framer-motion";
import { SiArduino, SiReact, SiDjango, SiPostgresql } from "react-icons/si";

const projectData = [
  {
    title: "Traffic Signal Priority System",
    description:
      "Built an Arduino + RFID-based system to prioritize emergency vehicle passage at signals.",
    keywords: ["Arduino", "RFID", "Embedded C"],
    stack: [<SiArduino className="text-green-400" />],
    period: "May 2024 - Aug 2024",
  },
  {
    title: "Trekking Platform",
    description:
      "Full-stack platform with Django REST Framework and Vite + React. Role-based access (Admin, Staff, Lead) with JWT authentication, trek scheduling, image uploads, activity management, and secure profile & trek lead assignment by name.",
    keywords: [
      "Django",
      "RESTful-API",
      "Simple JWT",
      "RBAC"
    ],
    stack: [<SiDjango className="text-emerald-600" />, <SiReact className="text-cyan-400" />],
    period: "Jun 2025 - Jun 2025"
  },
  {
    title: "Student Admission & Management System",
    description:
      "Developed a secure portal using DRF + React. Admin can create staff/students; staff manages students; students see their data. SimpleJWT authentication and RBAC. Features: course assignment, enquiry logging, payment management.",
    keywords: [
      "Django",
      "React",
      "DRF",
      "RBAC",
      "Simple JWT",
      "PostgreSQL"
    ],
    stack: [
      <SiDjango className="text-emerald-600" />,
      <SiReact className="text-cyan-400" />,
      <SiPostgresql className="text-blue-700" />
    ],
    period: "May 2025 - Jun 2025"
  },
  {
    title: "NGO Website",
    description:
      "Dynamic, responsive NGO platform with Django + React. Features: gallery management, event updates, admin dashboard, testimonials.",
    keywords: ["Django", "React", "CMS"],
    stack: [<SiDjango className="text-emerald-600" />, <SiReact className="text-cyan-400" />],
    period: "Jul 2025 - Present"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.11, duration: 0.5, type: "spring", stiffness: 120 }
  })
};

export default function Projects() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 flex flex-col items-center pt-28 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10 tracking-wide">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {projectData.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.16 }}
            variants={cardVariants}
            className="flex flex-col bg-gray-900 rounded-xl shadow-md p-6 border border-cyan-700 hover:border-cyan-400 transition group relative"
          >
            <div className="flex items-center gap-2 text-xl font-bold text-cyan-400 mb-1">
              {item.stack}
              <span className="font-semibold text-gray-100">{item.title}</span>
            </div>
            <div className="text-xs text-cyan-300 font-semibold mb-2">{item.period}</div>
            <div className="text-sm text-gray-300 mb-3">{item.description}</div>
            <div className="flex flex-wrap gap-2 mt-auto mb-0.5">
              {item.keywords.map((kw, idx) => (
                <span
                  key={idx}
                  className="bg-cyan-700/15 text-cyan-300 border border-cyan-700 rounded-md px-2 py-0.5 text-xs font-medium"
                >{kw}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
