"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const projects = [
  {
    title: "Phool Website",
    description:
      "Flower-themed website built through AI-generated code via ChatGPT and deployed on Vercel. Responsive, elegant, and prompt-engineered.",
    tech: ["Prompt Engineering", "React", "Tailwind", "Vercel", "GitHub"],
    link: "https://phool-website.vercel.app",
    github: "https://github.com/hadia-khan/phool-website",
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        {/* Header */}
        <header className="flex justify-between items-center p-6 max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold tracking-tight">Hadia Khan</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </header>

        {/* Hero Section */}
        <section className="text-center py-20 px-6">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI-Driven Portfolio
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            I craft digital experiences through AI-assisted development and prompt engineering.  
            This portfolio showcases what humans and AI can build together.
          </motion.p>
        </section>

        {/* Projects Section */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h3 className="text-3xl font-semibold mb-8 text-center">Featured Project</h3>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live →
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Code →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-8 border-t border-gray-200 dark:border-gray-800">
          © {new Date().getFullYear()} Hadia Khan — AI-Assisted Portfolio built with Next.js and Tailwind CSS.

        </footer>
      </main>
    </div>
  );
}
