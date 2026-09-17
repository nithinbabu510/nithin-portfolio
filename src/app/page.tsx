import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black text-white selection:bg-teal-400/20 min-h-screen font-sans">
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>

      {/* Lower sections */}
      <div className="relative z-20 bg-black pt-24 pb-12 border-t border-white/5 grid-bg">
        <About />
        <CaseStudies />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
