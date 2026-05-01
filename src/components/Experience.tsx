"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Junior Quality Analyst",
      company: "Vizru Invigo Software, Calicut",
      date: "June 2025 – Present",
      type: "work"
    },
    {
      role: "QA Intern",
      company: "Vizru Invigo Software, Calicut",
      date: "March 2025 – June 2025",
      type: "work"
    },
    {
      role: "Diploma in Mechanical Engineering",
      company: "Rajeev Institute of Technology",
      date: "2016 – 2019",
      type: "education"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <span className="text-secondary-foreground/50 uppercase tracking-[0.2em] text-sm font-semibold mb-16 block text-center">Journey & Experience</span>

      <div className="relative border-l border-zinc-800 ml-4 md:ml-0 md:pl-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mb-12 relative pl-8 md:pl-0"
          >
            <div className="absolute w-3 h-3 bg-zinc-400 rounded-full -left-[1.35rem] md:-left-[2.4rem] top-2 border-4 border-black" />
            
            <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 p-6 md:p-8 rounded-2xl hover:border-zinc-700/50 transition-colors">
              <span className="text-zinc-500 text-sm font-medium tracking-wide mb-2 block">{exp.date}</span>
              <h4 className="text-xl md:text-2xl font-semibold text-zinc-100 mb-1">{exp.role}</h4>
              <p className="text-zinc-400 font-light">{exp.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
