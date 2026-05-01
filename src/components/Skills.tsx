"use client";
import { motion } from "framer-motion";
import { Activity, Code, TestTube2, GitBranch, LayoutList, Layers, Settings } from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "Manual Testing", icon: <TestTube2 size={24} /> },
    { name: "Automation (Selenium + Java)", icon: <Code size={24} /> },
    { name: "API Testing (Postman)", icon: <Activity size={24} /> },
    { name: "JIRA", icon: <LayoutList size={24} /> },
    { name: "Git & GitHub", icon: <GitBranch size={24} /> },
    { name: "TestNG & Maven", icon: <Settings size={24} /> },
    { name: "Agile / Scrum", icon: <Layers size={24} /> },
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="text-secondary-foreground/50 uppercase tracking-[0.2em] text-sm font-semibold mb-12 block text-center">Core Expertise</span>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:bg-zinc-800/50 transition-colors duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              <div className="p-3 bg-zinc-800/50 rounded-full text-zinc-300">
                {skill.icon}
              </div>
              <h4 className="font-medium text-sm md:text-base text-zinc-200">{skill.name}</h4>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
