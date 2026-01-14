"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const commands = [
  { section: "hero", command: "> whoami" },
  { section: "experience", command: "> cat ./experience.log" },
  { section: "projects", command: "> ls ./projects" },
  { section: "skills", command: "> cat ./skills.json" },
  { section: "contact", command: "> ./contact.sh" },
];

export default function TerminalHeader() {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
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
        setDisplayedText("");
        setIsTyping(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentCommand]);

  useEffect(() => {
    if (isTyping) {
      const targetText = commands[currentCommand].command;
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        if (currentIndex < targetText.length) {
          setDisplayedText(targetText.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [isTyping, currentCommand]);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="font-mono text-sm md:text-base text-green-400 flex items-center">
            <span className="mr-2">ruben@portfolio:~$</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentCommand}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {displayedText}
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    ▊
                  </motion.span>
                )}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
