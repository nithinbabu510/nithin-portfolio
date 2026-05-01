"use client";

import { motion } from "framer-motion";

export default function Overlay() {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      {/* Hero 0% */}
      <div className="absolute top-[5%] left-0 w-full flex justify-center text-center px-4">
        <motion.div
           initial={{ opacity: 0, scale: 0.9, y: 30 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
           viewport={{ margin: "-100px" }}
           className="text-white z-10"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-2xl text-shadow-sm">Nithin Babu</h1>
          <p className="text-xl md:text-2xl font-light text-gray-300 tracking-wide drop-shadow-md">Quality Analyst.</p>
        </motion.div>
      </div>

      {/* 30% */}
      <div className="absolute top-[30%] left-[5%] md:left-[10%] max-w-xl">
         <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
           viewport={{ margin: "-200px" }}
           className="text-white z-10 text-left bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10"
         >
           <h2 className="text-3xl md:text-5xl font-semibold leading-tight drop-shadow-xl">
             I make software work the way it should.
           </h2>
         </motion.div>
      </div>

      {/* 60% */}
      <div className="absolute top-[60%] right-[5%] md:right-[10%] max-w-xl">
         <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
           viewport={{ margin: "-200px" }}
           className="text-white z-10 text-right bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10"
         >
           <h2 className="text-3xl md:text-5xl font-semibold leading-tight drop-shadow-xl">
             Turning defects into quality—one test at a time.
           </h2>
         </motion.div>
      </div>
    </div>
  );
}
