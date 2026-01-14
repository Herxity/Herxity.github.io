"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    company: "T-Mobile",
    logo: "https://logo.clearbit.com/t-mobile.com",
    role: "Associate Software Engineer",
    period: "May 2025 – Present",
    description: [
      "Built AI Agent Evaluation platform on NVIDIA DGX BasePod using LangChain and MLFlow",
      "Developed ML Pipelines for alarm correlation across 60,000 network devices",
      "Engineered RAG service achieving 45% precision improvement and 75% token cost reduction",
      "Mitigated critical GPT-4o production outage affecting customer service operations",
    ],
    skills: ["PyTorch", "LangChain", "MLFlow", "RAG", "Azure"],
    color: "from-pink-500 to-purple-500",
  },
  {
    company: "Delta Air Lines",
    logo: "https://logo.clearbit.com/delta.com",
    role: "Agentic AI Intern",
    period: "Jan 2025 – May 2025",
    description: [
      "Developed agentic application using Llama 3.2, LangChain, and Whisper for SQL-RAG via voice",
      "Implemented chain-of-thought SQL querying with personalization capabilities",
      "Achieved 95% latency reduction through server-side media caching optimization",
    ],
    skills: ["Llama 3.2", "LangChain", "Whisper", "SQL", "RAG"],
    color: "from-red-500 to-blue-500",
  },
  {
    company: "New York Yankees",
    logo: "https://logo.clearbit.com/mlb.com",
    role: "ML Associate",
    period: "May 2024 – Aug 2024",
    description: [
      "Built video classifier achieving 93% accuracy for camera angle detection",
      "Developed Batting Keypoint Detection Model with 96% precision for biomechanical analysis",
      "Created swing extractor with 98% accuracy for automated swing window identification",
    ],
    skills: ["PyTorch", "Computer Vision", "Ultralytics", "YOLOv8"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    company: "Rutgers University",
    logo: "https://logo.clearbit.com/rutgers.edu",
    role: "Application Developer",
    period: "Oct 2022 – May 2025",
    description: [
      "Developed and maintained myRutgers App serving 70,000+ users",
      "Built and deployed full-stack features using Flutter, React, and FastAPI",
      "Implemented RESTful APIs and integrated with university systems",
    ],
    skills: ["Flutter", "React", "FastAPI", "Python", "Dart"],
    color: "from-red-600 to-gray-700",
  },
];

export default function ExperienceSection() {
  return (
    <div
      id="experience"
      className="min-h-screen w-full bg-gradient-to-b from-neutral-950 to-black py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-white/60">
            Building AI/ML solutions across industries
          </p>
        </motion.div>

        {/* Experience cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative p-8 md:p-10">
                  {/* Header with logo */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-6">
                      {/* Company logo */}
                      <div className="w-16 h-16 rounded-xl bg-white p-2 flex items-center justify-center shadow-lg">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Company and role */}
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                          {exp.company}
                        </h3>
                        <p className="text-lg text-white/80 font-medium">
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="hidden md:block px-4 py-2 rounded-full bg-white/5 border border-white/10">
                      <p className="text-sm text-white/60 font-mono">
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  {/* Period for mobile */}
                  <div className="md:hidden mb-6">
                    <p className="text-sm text-white/60 font-mono">
                      {exp.period}
                    </p>
                  </div>

                  {/* Description */}
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-white/70"
                      >
                        <span className="text-purple-400 mt-1.5 text-xs">
                          ▹
                        </span>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
