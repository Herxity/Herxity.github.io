"use client";

import { HoverEffect } from "./ui/card-hover-effect";

export default function ProjectsSection() {
  const projects = [
    {
      title: "DataRoyale",
      description:
        "Competitive ML platform where I served as Project Lead of a 10-person team, orchestrating end-to-end development of a data science competition platform.",
      link: "https://www.youtube.com/watch?v=_E6fqzHvxds",
      metric: "Project Lead • 10-person team",
      tech: ["Python", "React", "Docker", "ML Pipelines"],
    },
    {
      title: "LoreAdapter",
      description:
        "End-to-end LLM fine-tuning pipeline implementing LoRA (Low-Rank Adaptation) for efficient model customization and deployment.",
      link: "https://github.com/Herxity/LoreAdapter/tree/main",
      metric: "Fine-tuning Pipeline",
      tech: ["PyTorch", "LoRA", "Transformers", "Python"],
    },
    {
      title: "FrameX",
      description:
        "EDSR-based image upscaling system achieving 30% SSIM improvement and 90% PSNR improvement for enhanced image quality.",
      link: "https://github.com/Herxity/FrameX",
      metric: "30% SSIM • 90% PSNR improvement",
      tech: ["PyTorch", "EDSR", "Computer Vision", "OpenCV"],
    },
    {
      title: "RASCAL",
      description:
        "Self-driving robot car featuring ROS2 modular architecture with integrated SLAM, path planning, and computer vision capabilities.",
      link: "https://www.linkedin.com/posts/ruben-alias_another-chapter-of-my-career-is-over-but-activity-7095549221600153600-DruY",
      metric: "Autonomous Navigation",
      tech: ["ROS2", "Python", "SLAM", "Computer Vision"],
    },
    {
      title: "Multimodal Action Classifier",
      description:
        "Machine learning system achieving 95% accuracy on sensor-based action classification using multimodal data fusion.",
      link: "https://github.com/Herxity/Herxity.github.io/blob/main/Multimodal%20Sensing%20Systems%20Final%20Project%20Paper.pdf",
      metric: "95% Accuracy",
      tech: ["Python", "scikit-learn", "Sensor Fusion", "ML"],
    },
    {
      title: "CUDA Mandelbrot",
      description:
        "High-performance Mandelbrot set renderer with custom CUDA kernels achieving 11x throughput improvement over CPU implementation.",
      link: "https://github.com/Herxity/CUDA-Parallel-Mandelbrot-Project",
      metric: "11x Throughput Improvement",
      tech: ["CUDA", "C++", "GPU Computing", "Parallel Processing"],
    },
  ];

  return (
    <div id="projects" className="min-h-screen w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Projects
        </h2>
        <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
          A selection of my work spanning ML/AI, computer vision, autonomous
          systems, and high-performance computing
        </p>
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
