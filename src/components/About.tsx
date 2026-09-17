"use client";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[40vh] text-center section-glow"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-teal-400/5 border border-teal-400/10 mb-6"
        >
          <ShieldCheck size={24} className="text-teal-400" />
        </motion.div>

        <span className="text-secondary-foreground/50 uppercase tracking-[0.25em] text-xs font-semibold mb-6 block">
          Who I Am
        </span>

        <h3 className="text-2xl md:text-4xl font-light leading-relaxed max-w-3xl">
          I&apos;m the QA engineer who reads the report{" "}
          <span className="font-semibold text-white">
            after everyone else has signed off
          </span>
          .
        </h3>

        <p className="text-zinc-500 text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
          Working on HMS and LIS platforms, I specialize in the kind of testing
          that catches financial miscalculations, clinical data
          misconfigurations, and logic errors that look correct on the surface
          but break under real-world conditions.{" "}
          <span className="text-zinc-400">
            The bugs below aren&apos;t hypothetical — they&apos;re the ones I
            actually found.
          </span>
        </p>
      </motion.div>
    </section>
  );
}
