"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const commands = [
  { section: "hero", command: "whoami", prompt: "~" },
  { section: "experience", command: "cat experience.log", prompt: "~" },
  { section: "projects", command: "ls projects/", prompt: "~" },
  { section: "skills", command: "cat skills.json", prompt: "~" },
  { section: "contact", command: "cat contact.md", prompt: "~" },
];

export default function TerminalHeader() {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = commands.map((cmd) =>
        document.getElementById(cmd.section)
      );

      let activeIndex = 0;
      sections.forEach((section, index) => {
        if (section && scrollPosition >= section.offsetTop) {
          activeIndex = index;
        }
      });

      if (activeIndex !== currentCommand) {
        setCurrentCommand(activeIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentCommand]);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center space-x-4">
          {/* Terminal dots */}
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
          </div>

          {/* Command prompt */}
          <div className="flex-1 font-mono text-sm flex items-center space-x-2">
            <span className="text-cyan-400 font-semibold">ruben@portfolio</span>
            <span className="text-white/40">:</span>
            <span className="text-purple-400">{commands[currentCommand].prompt}</span>
            <span className="text-white/40">$</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentCommand}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="text-white"
              >
                {commands[currentCommand].command}
              </motion.span>
            </AnimatePresence>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="inline-block w-2 h-4 bg-green-400 ml-1"
            />
          </div>

          {/* Section indicator */}
          <div className="hidden md:flex space-x-2">
            {commands.map((cmd, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentCommand
                    ? "bg-green-400 w-8"
                    : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
