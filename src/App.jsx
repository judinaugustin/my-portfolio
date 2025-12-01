import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const projects = [
    {
      title: "Dialogue Analyzer (DiAna)",
      desc: "NLP-based system for multi-speaker audio using WhisperX, Pyannote, DialogLED.",
      link: "#",
    },
    {
      title: "Thoracic Outlet Syndrome Classifier",
      desc: "Deep learning classifier using DenseNet, ResNet, EfficientNet for MRI scans.",
      link: "#",
    },
    {
      title: "Advanced Image Cartoonization System",
      desc: "Web-based AI cartoonization using TensorFlow.js & Magenta.",
      link: "#",
    },
    {
      title: "Shift-by-Wire Torque Analysis",
      desc: "Automotive ML project analyzing torque behavior in SBW/eATS systems.",
      link: "https://github.com/judinaugustin/Explainable-AI-Automotive-Fault-Detection",
    },
  ];

  return (
    <div className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="font-bold text-xl">Your Name</div>
          <div className="space-x-4">
            {["About", "Projects", "Skills", "Contact"].map((sec) => (
              <a
                key={sec}
                href={`#${sec.toLowerCase()}`}
                className="hover:text-blue-500 transition-colors"
              >
                {sec}
              </a>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 px-3 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20 max-w-6xl mx-auto px-4">
        {/* About Section */}
        <section id="about" className="my-20 text-center">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Judin Augustin
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            AI & Data Science professional specializing in NLP, Generative AI,
            and Machine Learning. Worked on industry-grade projects at Guidehouse
            and built advanced deep learning systems for medical imaging.
          </motion.p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="my-20">
          <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{p.desc}</p>
                <a
                  href={p.link}
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  View Project
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="my-20">
          <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Python",
              "R",
              "SQL",
              "Flask",
              "TensorFlow",
              "PyTorch",
              "OpenAI APIs",
              "Tableau",
              "Spotfire",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="my-20 text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Feel free to reach out for collaborations or opportunities.
          </p>
          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="mailto:judinaugustin007@gmail.com"
              className="hover:text-blue-500 transition-colors"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/judinaugustin"
              target="_blank"
              className="hover:text-blue-500 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/judinaugustin"
              target="_blank"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </section>
      </main>

      <footer className="text-center text-gray-500 dark:text-gray-400 py-6">
        © 2025 Your Name. All rights reserved.
      </footer>
    </div>
  );
}
