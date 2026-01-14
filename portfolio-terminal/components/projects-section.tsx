"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "DataRoyale",
    description:
      "Competitive ML platform as Project Lead of a 10-person team. Orchestrated end-to-end development of a data science competition platform with real-time leaderboards and automated evaluation pipelines.",
    metric: "Project Lead • 10-person team",
    links: [
      { label: "Demo 1", url: "https://www.youtube.com/watch?v=_E6fqzHvxds" },
      { label: "Demo 2", url: "https://www.youtube.com/watch?v=Gj008-v3364" },
      {
        label: "Design Doc",
        url: "https://docs.google.com/document/d/1Harg7C1G3HnHRaGkniESCImD8GG60u2BxcZdNReK-M0/edit",
      },
    ],
    tech: ["Python", "React", "Docker", "ML Pipelines"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "LoreAdapter",
    description:
      "End-to-end LLM fine-tuning pipeline implementing LoRA (Low-Rank Adaptation) for efficient model customization. Enables rapid adaptation of large language models with minimal computational overhead.",
    metric: "Fine-tuning Pipeline",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Herxity/LoreAdapter/tree/main",
      },
    ],
    tech: ["PyTorch", "LoRA", "Transformers", "Python"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "FrameX",
    description:
      "EDSR-based image upscaling system achieving exceptional quality improvements. Advanced deep learning architecture for super-resolution with real-time processing capabilities.",
    metric: "30% SSIM • 90% PSNR improvement",
    links: [{ label: "GitHub", url: "https://github.com/Herxity/FrameX" }],
    tech: ["PyTorch", "EDSR", "Computer Vision", "OpenCV"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "RASCAL",
    description:
      "Autonomous robot car with ROS2 modular architecture. Integrated SLAM for mapping, path planning for navigation, and computer vision for obstacle detection and avoidance.",
    metric: "Autonomous Navigation",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/posts/ruben-alias_another-chapter-of-my-career-is-over-but-activity-7095549221600153600-DruY",
      },
    ],
    tech: ["ROS2", "Python", "SLAM", "Computer Vision"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Multimodal Action Classifier",
    description:
      "Advanced ML system for sensor-based action recognition using multimodal data fusion. Combines accelerometer, gyroscope, and other sensor data for robust classification.",
    metric: "95% Accuracy",
    links: [
      {
        label: "Paper",
        url: "https://github.com/Herxity/Herxity.github.io/blob/main/Multimodal%20Sensing%20Systems%20Final%20Project%20Paper.pdf",
      },
    ],
    tech: ["Python", "scikit-learn", "Sensor Fusion", "ML"],
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "CUDA Mandelbrot",
    description:
      "High-performance fractal renderer with custom CUDA kernels. Leverages GPU parallel processing for dramatic performance improvements over traditional CPU implementations.",
    metric: "11x Throughput Improvement",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Herxity/CUDA-Parallel-Mandelbrot-Project",
      },
    ],
    tech: ["CUDA", "C++", "GPU Computing", "Parallel Processing"],
    gradient: "from-indigo-500 to-purple-500",
  },
];

export default function ProjectsSection() {
  return (
    <div
      id="projects"
      className="min-h-screen w-full bg-black py-32"
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
            Featured Projects
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A selection of my work spanning ML/AI, computer vision, autonomous
            systems, and high-performance computing
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                {/* Gradient accent on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="p-6 flex flex-col h-full">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${project.gradient} transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Metric */}
                  <div className="mb-4">
                    <span
                      className={`text-xs font-mono px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-10 text-white/80 border border-white/10`}
                    >
                      {project.metric}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-md bg-white/5 text-white/70 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1 group/link"
                      >
                        {link.label}
                        <svg
                          className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </Link>
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
