import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      {/* Header */}
      <header className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl font-bold mb-2">Your Name</h1>
        <p className="text-lg text-gray-600">AI & Data Science | NLP | GenAI Engineer</p>
        <div className="mt-4 flex space-x-4">
          <a href="#projects" className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow-md">Projects</a>
          <a href="#skills" className="px-4 py-2 bg-gray-800 text-white rounded-xl shadow-md">Skills</a>
          <a href="#contact" className="px-4 py-2 bg-green-600 text-white rounded-xl shadow-md">Contact</a>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I am an AI & Data Science professional specializing in NLP, Generative AI, and Machine Learning. I’ve worked on industry-grade R&D projects at Guidehouse, developed deep learning systems for medical imaging, and built advanced conversational AI systems using LLMs. I focus on solving real-world problems with scalable AI pipelines and clean engineering.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-2">Dialogue Analyzer (DiAna)</h3>
            <p className="text-gray-700 mb-4">
              NLP-based system for analyzing multi-speaker audio with WhisperX, Pyannote, DialogLED & more.
            </p>
            <a className="text-blue-600 underline" href="#">View Project</a>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-2">Thoracic Outlet Syndrome MRI Classifier</h3>
            <p className="text-gray-700 mb-4">
              Deep learning classifier using DenseNet, ResNet, EfficientNet for medical imaging diagnostics.
            </p>
            <a className="text-blue-600 underline" href="#">View Project</a>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-2">Advanced Image Cartoonization System</h3>
            <p className="text-gray-700 mb-4">
              Web-based AI cartoonization system using TensorFlow.js, Magenta & dual-mode pipelines.
            </p>
            <a className="text-blue-600 underline" href="#">View Project</a>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-2">Shift-by-Wire Torque Demand Analysis</h3>
            <p className="text-gray-700 mb-4">
              Automotive ML project analyzing torque behavior in SBW/eATS systems.
            </p>
            <a className="text-blue-600 underline" href="#">View Project</a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <span className="px-4 py-2 bg-white shadow rounded-xl">Python</span>
          <span className="px-4 py-2 bg-white shadow rounded-xl">R</span>
          <span className="px-4 py-2 bg-white shadow rounded-xl">SQL</span>
          <span className="px-4 py-2 bg-white shadow rounded-xl">Flask</span>
          <span className="px-4 py-2 bg-white shadow rounded-xl">TensorFlow</span>
          <span className="px-4 py-2 bg-white shadow rounded-xl">PyTorch</span>
          <span className="px-4 py-2 bg-white shadow rounded-xl">OpenAI APIs</span>
          <span className="px-4 py-2 bg-white shadow rounded-xl">Tableau</span>
          <span className="px-4 py-2 bg-white shadow rounded-xl">Spotfire</span>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700 mb-6">Feel free to reach out for collaborations or opportunities.</p>
        <a href="mailto:your.email@example.com" className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md text-lg">Email Me</a>
      </section>

      <footer className="text-center text-gray-500 mt-16">© 2025 Your Name. All rights reserved.</footer>
    </div>
  );
}
