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
        <motion.p {...fadeUp} className="text-[17px] sm:text-[19px] text-text-2 max-w-[600px] mb-20 font-light">
          Shadow mode runs in parallel with your existing pipeline. Zero production impact. 30 days. You see the output. You decide with data.
        </motion.p>

        {/* Horizontal/Vertical Stepper */}
        <div className="flex flex-col lg:flex-row relative gap-y-12 mb-20">
          {/* Timeline background line for mobile/desktop */}
          <div className="absolute left-[31px] lg:left-0 lg:top-[31px] top-0 bottom-0 lg:bottom-auto lg:right-0 w-[2px] lg:w-full lg:h-[2px] bg-border-active/30 -z-10 hidden lg:block" />

          {steps.map((s, i) => (
            <motion.div key={s.num} initial={reduced ? {} : { opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" as const, delay: reduced ? 0 : i * 0.2 }}
              className="flex-1 relative flex flex-row lg:flex-col items-start gap-6 lg:gap-8 group"
            >
              {/* Stepper Node */}
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-full bg-surface border-2 border-border flex items-center justify-center font-mono text-[20px] font-bold text-accent shadow-[0_4px_12px_rgba(59,130,246,0.1)] group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300 z-10 relative">
                  {s.num}
                </div>
                {i < steps.length - 1 && (
                  <>
                    <div className="absolute left-8 top-16 bottom-[-3rem] w-[2px] bg-gradient-to-b from-border-active to-border lg:hidden -z-10" />
                    <div className="absolute top-8 left-16 right-[-2rem] h-[2px] bg-gradient-to-r from-border-active to-border hidden lg:block -z-10 w-full" />
                  </>
                )}
              </div>

              {/* Stepper Content */}
              <div className="pt-3 lg:pt-0 lg:pr-8">
                <h3 className="text-[20px] sm:text-[22px] font-semibold text-text mb-3">{s.title}</h3>
                <p className="text-[15px] sm:text-[16px] text-text-2 leading-relaxed font-light">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Callout */}
        <motion.div {...fadeUp} className="bg-surface/80 p-6 md:p-8 rounded-xl border-l-[4px] border-l-accent max-w-[800px] mb-12 shadow-lg ml-0 md:ml-8">
          <p className="text-[17px] sm:text-[18px] text-text-2 leading-relaxed font-light">
            <span className="text-text font-semibold tracking-wide">Why shadow mode works:</span>{" "}
            Compliance buyers do not replace processes without evidence. Shadow mode generates the exact mathematical evidence on your own data. That is why it converts every single time.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="ml-0 md:ml-8">
          <a href="#cta" className="button-primary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-[16px] font-semibold transition-transform hover:scale-[1.02]">
            Apply for Shadow Pilot <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
