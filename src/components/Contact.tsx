"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-12">Let&apos;s Work Together</h2>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center text-zinc-400">
          <a href="mailto:nithinb077@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
            <Mail size={20} />
            <span>nithinb077@gmail.com</span>
          </a>
          
          <a href="tel:+917306660963" className="flex items-center gap-3 hover:text-white transition-colors">
            <Phone size={20} />
            <span>+91 73066 60963</span>
          </a>

          <div className="flex items-center gap-3">
            <MapPin size={20} />
            <span>Wayanad, Kerala</span>
          </div>
        </div>

        <div className="mt-24 text-zinc-600 text-sm">
          © {new Date().getFullYear()} Nithin Babu. Handcrafted with precision.
        </div>
      </motion.div>
    </section>
  );
}
