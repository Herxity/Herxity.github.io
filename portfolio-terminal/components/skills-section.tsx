"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "AI/ML",
    icon: "🤖",
    skills: [
      { name: "PyTorch", level: 95 },
      { name: "LangChain", level: 90 },
      { name: "RAG", level: 95 },
      { name: "LLMs", level: 90 },
      { name: "MLFlow", level: 85 },
      { name: "CUDA", level: 80 },
      { name: "Transformers", level: 90 },
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    category: "Languages",
    icon: "💻",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 85 },
      { name: "C++", level: 80 },
      { name: "Dart", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 85 },
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    category: "Infrastructure",
    icon: "🏗️",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Azure", level: 80 },
      { name: "Linux", level: 90 },
      { name: "Prefect", level: 75 },
      { name: "Git", level: 95 },
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Flutter", level: 85 },
      { name: "FastAPI", level: 80 },
      { name: "TailwindCSS", level: 90 },
    ],
    gradient: "from-orange-500 to-red-500",
  },
  {
    category: "Tools",
    icon: "🛠️",
    skills: [
      { name: "Ultralytics", level: 85 },
      { name: "Roboflow", level: 80 },
      { name: "ROS2", level: 75 },
      { name: "OpenCV", level: 85 },
      { name: "scikit-learn", level: 90 },
      { name: "Whisper", level: 80 },
    ],
    gradient: "from-yellow-500 to-orange-500",
  },
];

export default function SkillsSection() {
  return (
    <div
      id="skills"
      className="min-h-screen w-full bg-gradient-to-b from-black to-neutral-950 py-32"
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
            Tech Stack
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Core technologies and tools I work with
          </p>

          {/* JSON preview */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block text-left max-w-2xl"
          >
            <pre className="text-sm md:text-base text-green-400 font-mono bg-black/50 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
              {`{
  "AI/ML": [...],
  "Languages": [...],
  "Infrastructure": [...],
  "Frontend": [...],
  "Tools": [...]
}`}
            </pre>
          </motion.div>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 p-6">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center text-2xl`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 1, x: 0 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: catIndex * 0.1 + skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white/80 text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-white/40 text-xs font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: `${skill.level}%` }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay: catIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
