"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  { num: "01", title: "Connect", desc: "Point your underwriting pipeline to Alstro via API. Your production flow continues unchanged. Read-only integration." },
  { num: "02", title: "Compare", desc: "For every denial, see side-by-side: your current output vs. what Alstro generates — model-specific notices, audit records, policy checks." },
  { num: "03", title: "Decide", desc: "The gap between your current process and Alstro's output is the business case. Go live — or walk away with zero downside." },
];

export default function ShadowPilot() {
  const reduced = useReducedMotion();
  const fadeUp = { initial: reduced ? {} : { opacity: 0, y: 15 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } as const, transition: { duration: 0.5, ease: "easeOut" as const } };

  return (
    <section id="shadow-pilot" className="py-24 lg:py-32 relative">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container-main relative z-10">
        <motion.p {...fadeUp} className="font-mono text-[12px] text-accent uppercase tracking-[0.2em] mb-4 font-semibold">Shadow validation</motion.p>
        <motion.h2 {...fadeUp} className="font-heading text-[32px] sm:text-[40px] lg:text-[48px] text-text leading-[1.1] tracking-[-0.02em] max-w-[640px] mb-6">
          See <span className="text-gradient">proof on your actual decisions</span> — before committing to anything.
        </motion.h2>
        <motion.p {...fadeUp} className="text-[17px] sm:text-[19px] text-text-2 max-w-[600px] mb-16 font-light">
          Shadow mode runs in parallel with your existing pipeline. Zero production impact. 30 days. You see the output. You decide with data.
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial={reduced ? {} : { opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" as const, delay: reduced ? 0 : i * 0.1 }}
              className="glass-panel p-8 rounded-xl relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-150" />
              <div className="relative z-10">
                <p className="font-mono text-[28px] text-accent/30 font-bold mb-4 drop-shadow-sm">{s.num}</p>
                <h3 className="text-[18px] sm:text-[20px] font-semibold text-text mb-3">{s.title}</h3>
                <p className="text-[15px] sm:text-[16px] text-text-2 leading-relaxed font-light">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="glass-panel bg-accent/5 p-8 rounded-xl border-l-[4px] border-l-accent max-w-[700px] mb-12 shadow-[0_8px_32px_rgba(59,130,246,0.1)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent/50 to-transparent" />
          <p className="text-[16px] sm:text-[17px] text-text leading-relaxed font-light">
            <span className="text-gradient-accent font-semibold">Why shadow mode works:</span>{" "}
            Compliance buyers do not replace processes without evidence. Shadow mode generates the exact mathematical evidence on your own data. That is why it converts every single time.
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          <a href="mailto:naveen@alstro.ai" className="button-primary inline-flex items-center gap-2 text-white px-8 py-4 rounded-md text-[16px] font-semibold">
            Apply for Shadow Pilot <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
