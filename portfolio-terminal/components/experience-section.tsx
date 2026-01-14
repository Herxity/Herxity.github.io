"use client";

import { Timeline } from "./ui/timeline";

export default function ExperienceSection() {
  const data = [
    {
      title: "T-Mobile",
      content: (
        <div>
          <div className="mb-4">
            <h3 className="text-neutral-200 text-2xl font-bold mb-2">
              Associate Software Engineer
            </h3>
            <p className="text-neutral-400 text-sm mb-4">May 2025 – Present</p>
          </div>
          <div className="text-neutral-300 text-sm md:text-base space-y-3">
            <p>
              • Built AI Agent Evaluation platform on NVIDIA DGX BasePod using
              LangChain and MLFlow for comprehensive agent performance analysis
            </p>
            <p>
              • Developed ML Pipelines for alarm correlation across 60,000
              network devices using PyTorch and scikit-learn
            </p>
            <p>
              • Engineered RAG service achieving 45% precision improvement and
              75% token cost reduction
            </p>
            <p>
              • Mitigated critical GPT-4o production outage affecting customer
              service operations
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["PyTorch", "LangChain", "MLFlow", "RAG", "Azure"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Delta Air Lines",
      content: (
        <div>
          <div className="mb-4">
            <h3 className="text-neutral-200 text-2xl font-bold mb-2">
              Agentic AI Intern
            </h3>
            <p className="text-neutral-400 text-sm mb-4">
              Jan 2025 – May 2025
            </p>
          </div>
          <div className="text-neutral-300 text-sm md:text-base space-y-3">
            <p>
              • Developed agentic application using Llama 3.2, LangChain, and
              Whisper for SQL-RAG via voice
            </p>
            <p>
              • Implemented chain-of-thought SQL querying with personalization
              capabilities
            </p>
            <p>
              • Achieved 95% latency reduction through server-side media caching
              optimization
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Llama 3.2", "LangChain", "Whisper", "SQL", "RAG"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "New York Yankees",
      content: (
        <div>
          <div className="mb-4">
            <h3 className="text-neutral-200 text-2xl font-bold mb-2">
              ML Associate
            </h3>
            <p className="text-neutral-400 text-sm mb-4">
              May 2024 – Aug 2024
            </p>
          </div>
          <div className="text-neutral-300 text-sm md:text-base space-y-3">
            <p>
              • Built video classifier achieving 93% accuracy for camera angle
              detection
            </p>
            <p>
              • Developed{" "}
              <a
                href="https://drive.google.com/file/d/1gdxUg62YLR-qlRYoJtvOgiT_osp5XuNz/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Batting Keypoint Detection Model
              </a>{" "}
              with 96% precision for biomechanical analysis
            </p>
            <p>
              • Created swing extractor with 98% accuracy for automated swing
              window identification
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["PyTorch", "Computer Vision", "Ultralytics", "YOLOv8"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/20"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      ),
    },
    {
      title: "Rutgers OIT",
      content: (
        <div>
          <div className="mb-4">
            <h3 className="text-neutral-200 text-2xl font-bold mb-2">
              Application Developer
            </h3>
            <p className="text-neutral-400 text-sm mb-4">
              Oct 2022 – May 2025
            </p>
          </div>
          <div className="text-neutral-300 text-sm md:text-base space-y-3">
            <p>
              • Developed and maintained{" "}
              <a
                href="https://apps.apple.com/us/app/myrutgers/id1564303921"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                myRutgers App
              </a>
              , a cross-platform mobile application serving 70,000+ users
            </p>
            <p>
              • Built and deployed full-stack features using Flutter, React, and
              FastAPI
            </p>
            <p>
              • Implemented RESTful APIs and integrated with university systems
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Flutter", "React", "FastAPI", "Python", "Dart"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="experience" className="min-h-screen w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Experience
        </h2>
        <Timeline data={data} />
      </div>
    </div>
  );
}
