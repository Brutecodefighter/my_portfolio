import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiInstagram, SiWhatsapp } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    alert("Message Sent! (Demo – please wire up to backend)");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const ICONS = [
    {
      href: "mailto:chethan7234@gmail.com", 
      icon: <MdEmail className="text-cyan-400 text-4xl md:text-5xl hover:scale-110 transition-transform" />,
      label: "Email",
    },
    {
      href: "https://instagram.com/___chetan____", 
      icon: <SiInstagram className="text-pink-400 text-4xl md:text-5xl hover:scale-110 transition-transform" />,
      label: "Instagram",
    },
    {
      href: "https://wa.me/918660303977", 
      icon: <SiWhatsapp className="text-green-400 text-4xl md:text-5xl hover:scale-110 transition-transform" />,
      label: "WhatsApp",
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.13 }
    }
  };
  const item = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 120 } }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 pt-28 px-4 flex flex-col items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="w-full max-w-4xl flex flex-col md:flex-row gap-8 md:gap-12 items-stretch"
      >
        {/* SOCIAL ICONS only */}
        <motion.div
          variants={item}
          className="w-full md:w-1/2 flex flex-col gap-10 bg-gray-900 rounded-xl p-10 shadow-lg items-center justify-center"
        >
          <h2 className="text-2xl font-bold mb-2 text-cyan-300 text-center">Connect with Me</h2>
          <div className="flex items-center justify-center gap-10">
            {ICONS.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={c.label}
                variants={item}
                whileHover={{ scale: 1.13, rotate: [0, 10, -5, 0] }}
                whileTap={{ scale: 0.93 }}
                className="focus:outline-none"
              >
                {c.icon}
              </motion.a>
            ))}
          </div>
          <p className="text-cyan-400 mt-6 text-xs text-center">Click an icon to connect.</p>
        </motion.div>
        {/* Contact form right */}
        <motion.form
          variants={item}
          className="w-full md:w-1/2 bg-gray-900 rounded-xl p-7 shadow-lg flex flex-col gap-5 justify-start"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <h2 className="text-xl font-semibold text-cyan-300 mb-1">Send a Message</h2>
          <motion.input
            variants={item}
            className="bg-gray-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
          />
          <motion.input
            variants={item}
            className="bg-gray-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
          />
          <motion.input
            variants={item}
            className="bg-gray-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={form.phone}
            onChange={handleChange}
          />
          <motion.textarea
            variants={item}
            className="bg-gray-800 rounded-md px-4 py-2 text-white min-h-[90px] focus:outline-none focus:ring-2 focus:ring-cyan-400"
            name="message"
            required
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
          />
          <motion.button
            variants={item}
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-md py-2 px-6 transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
