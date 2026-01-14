"use client";

import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = {
    "AI/ML": [
      "PyTorch",
      "LangChain",
      "RAG",
      "LLMs",
      "MLFlow",
      "CUDA",
      "Transformers",
    ],
    Languages: ["Python", "SQL", "C++", "Dart", "JavaScript", "TypeScript"],
    Infrastructure: ["Docker", "Azure", "Linux", "Prefect", "Git"],
    Frontend: ["React", "Next.js", "Flutter", "FastAPI", "TailwindCSS"],
    Tools: [
      "Ultralytics",
      "Roboflow",
      "ROS2",
      "OpenCV",
      "scikit-learn",
      "Whisper",
    ],
  };

  const items = Object.entries(skills).map(([category, techs]) => ({
    title: category,
    description: (
      <div className="flex flex-wrap gap-2">
        {techs.map((tech, idx) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="px-3 py-1 text-xs md:text-sm rounded-md bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-neutral-200 border border-neutral-700 hover:border-neutral-500 transition-colors cursor-default"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    ),
    header: (
      <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-lg">
        <div className="text-4xl">
          {category === "AI/ML" && "🤖"}
          {category === "Languages" && "💻"}
          {category === "Infrastructure" && "🏗️"}
          {category === "Frontend" && "🎨"}
          {category === "Tools" && "🛠️"}
        </div>
      </div>
    ),
    className:
      category === "AI/ML" || category === "Tools"
        ? "md:col-span-2"
        : "md:col-span-1",
  }));

  return (
    <div id="skills" className="min-h-screen w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Tech Stack
        </h2>
        <div className="mb-12 text-center">
          <pre className="inline-block text-left text-sm md:text-base text-green-400 font-mono bg-neutral-900 p-6 rounded-lg border border-neutral-800">
            {`{
  "AI/ML": [...],
  "Languages": [...],
  "Infrastructure": [...],
  "Frontend": [...],
  "Tools": [...]
}`}
          </pre>
        </div>
        <BentoGrid className="max-w-6xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
