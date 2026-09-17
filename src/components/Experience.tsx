"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Junior Quality Analyst",
      company: "Vizru Invigo Software, Calicut",
      date: "June 2025 – Present",
      type: "work" as const,
    },
    {
      role: "QA Intern",
      company: "Vizru Invigo Software, Calicut",
      date: "March 2025 – June 2025",
      type: "work" as const,
    },
    {
      role: "Diploma in Mechanical Engineering",
      company: "Rajeev Institute of Technology",
      date: "2016 – 2019",
      type: "education" as const,
    },
  ];

  const icons = {
    work: Briefcase,
    education: GraduationCap,
  };

  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 max-w-3xl mx-auto section-glow"
    >
      <div className="text-center mb-14">
        <span className="text-secondary-foreground/50 uppercase tracking-[0.25em] text-xs font-semibold mb-4 block">
          Timeline
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-100">
          Journey & Experience
        </h2>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[1.125rem] top-0 bottom-0 w-px bg-gradient-to-b from-teal-400/20 via-zinc-800 to-transparent" />

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const Icon = icons[exp.type];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div
                  className={`absolute left-0 top-4 w-[2.25rem] h-[2.25rem] rounded-xl flex items-center justify-center border ${
                    exp.type === "work"
                      ? "bg-teal-400/5 border-teal-400/15 text-teal-400"
                      : "bg-zinc-800/50 border-zinc-700/30 text-zinc-500"
                  }`}
                >
                  <Icon size={14} />
                </div>

                <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 p-5 sm:p-6 rounded-xl hover:border-zinc-700/50 transition-colors">
                  <span className="text-zinc-600 text-xs font-semibold tracking-wider uppercase mb-1 block">
                    {exp.date}
                  </span>
                  <h4 className="text-base sm:text-lg font-semibold text-zinc-100 mb-0.5">
                    {exp.role}
                  </h4>
                  <p className="text-zinc-500 text-sm font-light">
                    {exp.company}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
