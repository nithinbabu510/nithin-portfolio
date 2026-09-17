"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Overlay() {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      {/* Hero — 5% */}
      <div className="absolute top-[5%] left-0 w-full flex justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ margin: "-100px" }}
          className="text-white z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4"
          >
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-teal-400/80 bg-teal-400/5 border border-teal-400/10 px-4 py-1.5 rounded-full">
              QA Engineer · Healthcare Systems
            </span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-3 drop-shadow-2xl">
            Nithin Babu
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-400 tracking-wide drop-shadow-md max-w-lg mx-auto">
            Finding the bugs that slip through the cracks.
          </p>
        </motion.div>
      </div>

      {/* 30% — Left block */}
      <div className="absolute top-[30%] left-[5%] md:left-[10%] max-w-xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ margin: "-200px" }}
          className="text-white z-10 text-left bg-black/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10"
        >
          <h2 className="text-2xl md:text-4xl font-semibold leading-tight drop-shadow-xl">
            I don&apos;t just run test cases —{" "}
            <span className="text-teal-400">
              I find the bugs that slip through them.
            </span>
          </h2>
        </motion.div>
      </div>

      {/* 60% — Right block */}
      <div className="absolute top-[60%] right-[5%] md:right-[10%] max-w-xl">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ margin: "-200px" }}
          className="text-white z-10 text-right bg-black/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10"
        >
          <h2 className="text-2xl md:text-4xl font-semibold leading-tight drop-shadow-xl">
            3 real bugs. 3 real impacts.
          </h2>
          <p className="text-zinc-400 text-base mt-3 font-light">
            Scroll to see what I caught.
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-4 flex justify-end pointer-events-none"
          >
            <ChevronDown size={24} className="text-teal-400/60" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
