"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Projects() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <span className="text-secondary-foreground/50 uppercase tracking-[0.2em] text-sm font-semibold mb-12 block text-center">Featured Project</span>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="group relative bg-zinc-900/40 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl overflow-hidden hover:shadow-[0_0_50px_rgba(200,200,255,0.03)] transition-all duration-500"
      >
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Good Doc — HMS</h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              A comprehensive web-based Hospital Management System covering patient registration, appointment workflows, lab processing, billing, prescription tracking, and role-based access control.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-zinc-500 mt-1 flex-shrink-0" />
                <span className="text-zinc-300">End-to-end QA across 4 major modules.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-zinc-500 mt-1 flex-shrink-0" />
                <span className="text-zinc-300">Conducted thorough regression testing before major releases.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-zinc-500 mt-1 flex-shrink-0" />
                <span className="text-zinc-300">Managed defect tracking and lifecycle in JIRA.</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-64 md:h-full min-h-[300px] w-full bg-black/50 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden">
             {/* Abstract representation of a dashboard */}
             <div className="absolute inset-4 border border-zinc-800 rounded-xl bg-zinc-950/80 flex flex-col p-4 gap-4">
                <div className="h-8 w-1/3 bg-zinc-800/50 rounded-md" />
                <div className="flex gap-4">
                  <div className="h-24 w-1/4 bg-zinc-800/30 rounded-md" />
                  <div className="h-24 w-3/4 bg-zinc-800/30 rounded-md" />
                </div>
                <div className="flex-1 rounded-md bg-zinc-800/20 border border-zinc-800/50" />
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
