"use client";

import { Button } from "./ui/moving-border";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactSection() {
  return (
    <div id="contact" className="min-h-screen w-full bg-black flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Let's Connect
          </h2>

          <div className="mb-12 font-mono text-green-400 text-left max-w-2xl mx-auto bg-neutral-900 p-6 rounded-lg border border-neutral-800">
            <div className="mb-2">$ ./contact.sh</div>
            <div className="text-neutral-400 text-sm">
              <div>Initializing contact protocols...</div>
              <div className="mt-2">✓ Email: ruben.alias715@gmail.com</div>
              <div>✓ Location: Open to Relocate</div>
              <div>✓ Status: Available for opportunities</div>
              <div className="mt-2 text-green-400">
                Ready to connect! ▊
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
            <Link
              href="mailto:ruben.alias715@gmail.com"
              className="transform hover:scale-105 transition-transform"
            >
              <Button
                borderRadius="1.75rem"
                className="bg-slate-900 text-white border-slate-800 font-medium"
              >
                Email Me
              </Button>
            </Link>

            <Link
              href="https://www.linkedin.com/in/ruben-alias/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-105 transition-transform"
            >
              <Button
                borderRadius="1.75rem"
                className="bg-slate-900 text-white border-slate-800 font-medium"
              >
                LinkedIn
              </Button>
            </Link>

            <Link
              href="https://github.com/Herxity/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-105 transition-transform"
            >
              <Button
                borderRadius="1.75rem"
                className="bg-slate-900 text-white border-slate-800 font-medium"
              >
                GitHub
              </Button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            Open to Relocate
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-neutral-500 text-sm"
          >
            <p>Built with Next.js, TailwindCSS, and Framer Motion</p>
            <p className="mt-2">© 2026 Ruben Varkey Alias</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
