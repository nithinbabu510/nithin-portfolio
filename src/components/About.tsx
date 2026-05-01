"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[40vh] text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="text-secondary-foreground/50 uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">About Me</span>
        <h3 className="text-3xl md:text-5xl font-light leading-snug">
          Junior QA Engineer with hands-on experience in <span className="font-semibold text-white">manual and automation testing</span>.
          Specialized in healthcare management systems. Based in <span className="text-gray-400">Kerala, India</span>.
        </h3>
      </motion.div>
    </section>
  );
}
