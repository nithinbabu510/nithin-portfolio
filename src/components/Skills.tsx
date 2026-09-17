"use client";
import { motion } from "framer-motion";
import {
  Search,
  FileSpreadsheet,
  ShieldCheck,
  GitBranch,
  Microscope,
  Layers,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";

export default function Skills() {
  const skills = [
    {
      name: "Root Cause Analysis",
      icon: <Search size={16} />,
      from: "Cases 1, 2, 3",
    },
    {
      name: "Report & Data Validation",
      icon: <FileSpreadsheet size={16} />,
      from: "Case 1",
    },
    {
      name: "Clinical Data Review",
      icon: <Microscope size={16} />,
      from: "Case 2",
    },
    {
      name: "Edge Case Identification",
      icon: <AlertTriangle size={16} />,
      from: "Case 3",
    },
    {
      name: "HMS / LIS Domain Knowledge",
      icon: <ShieldCheck size={16} />,
      from: "Cases 1, 2, 3",
    },
    {
      name: "Jira Defect Lifecycle",
      icon: <GitBranch size={16} />,
      from: "Cases 1, 2, 3",
    },
    {
      name: "Cross-Module Impact Analysis",
      icon: <Layers size={16} />,
      from: "Case 2",
    },
    {
      name: "Regression Testing",
      icon: <RefreshCw size={16} />,
      from: "Cases 1, 3",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 max-w-5xl mx-auto section-glow"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-14">
          <span className="text-secondary-foreground/50 uppercase tracking-[0.25em] text-xs font-semibold mb-4 block">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-3">
            What These Stories Demonstrate
          </h2>
          <p className="text-zinc-500 text-sm max-w-xl mx-auto">
            Every skill listed here is backed by at least one case study above.
            No filler.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="skill-chip group"
            >
              <div className="skill-icon">{skill.icon}</div>
              <div className="min-w-0">
                <h4 className="font-medium text-sm text-zinc-200 leading-tight">
                  {skill.name}
                </h4>
                <span className="text-[0.65rem] text-zinc-600 font-medium tracking-wide uppercase">
                  {skill.from}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
