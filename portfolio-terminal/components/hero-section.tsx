"use client";

import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Spotlight } from "./ui/spotlight";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  const words = "Delivered AI/ML solutions at T-Mobile, Delta Air Lines, and the New York Yankees";

  return (
    <div id="hero" className="min-h-screen w-full relative flex items-center justify-center overflow-hidden bg-black/[0.96] antialiased">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Ruben Varkey Alias
          </h1>

          <div className="mt-4 text-xl md:text-2xl text-neutral-300 font-mono">
            AI Engineer | RAG • LLMs • Computer Vision
          </div>

          <div className="mt-8 max-w-3xl mx-auto">
            <TextGenerateEffect words={words} className="text-lg md:text-xl text-neutral-400" />
          </div>

          <div className="mt-8 text-sm text-neutral-400">
            <span className="font-semibold text-neutral-200">Rutgers University '25</span> — B.S. Electrical & Computer Engineering (Highest Honors)
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <Link
              href="https://github.com/Herxity/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium transition-all duration-200 hover:shadow-[0_0_2rem_-0.5rem_#8b5cf6]"
              >
                GitHub
              </motion.div>
            </Link>

            <Link
              href="https://www.linkedin.com/in/ruben-alias/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full border border-neutral-700 text-neutral-300 font-medium transition-all duration-200 hover:border-neutral-500 hover:text-white"
              >
                LinkedIn
              </motion.div>
            </Link>

            <Link
              href="mailto:ruben.alias715@gmail.com"
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full border border-neutral-700 text-neutral-300 font-medium transition-all duration-200 hover:border-neutral-500 hover:text-white"
              >
                Email
              </motion.div>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-20"
          >
            <div className="flex flex-col items-center">
              <span className="text-neutral-500 text-sm mb-2">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-6 h-10 border-2 border-neutral-500 rounded-full flex items-start justify-center p-2"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="w-1.5 h-1.5 bg-neutral-500 rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
}
