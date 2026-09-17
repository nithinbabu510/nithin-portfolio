"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 max-w-4xl mx-auto flex flex-col items-center section-glow"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <span className="text-secondary-foreground/50 uppercase tracking-[0.25em] text-xs font-semibold mb-6 block">
          Get In Touch
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Like what you see?
        </h2>
        <p className="text-zinc-500 text-lg mb-12 max-w-md mx-auto">
          I&apos;m looking for QA and QA Lead roles in healthcare tech or other
          complex, regulated domains.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="mailto:nithinb077@gmail.com"
            className="group flex items-center gap-3 bg-teal-400/5 border border-teal-400/15 hover:bg-teal-400/10 hover:border-teal-400/25 px-6 py-3.5 rounded-xl transition-all duration-300 text-teal-300 hover:text-teal-200"
          >
            <Mail size={18} />
            <span className="text-sm font-medium">nithinb077@gmail.com</span>
            <ArrowUpRight
              size={14}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </a>

          <a
            href="tel:+917306660963"
            className="group flex items-center gap-3 bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-700/50 px-6 py-3.5 rounded-xl transition-all duration-300 text-zinc-400 hover:text-zinc-200"
          >
            <Phone size={18} />
            <span className="text-sm font-medium">+91 73066 60963</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-zinc-600 text-sm">
          <MapPin size={14} />
          <span>Wayanad, Kerala, India</span>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 text-zinc-700 text-xs tracking-wide">
          © {new Date().getFullYear()} Nithin Babu. Handcrafted with precision.
        </div>
      </motion.div>
    </section>
  );
}
