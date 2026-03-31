"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Connect", desc: "Point your underwriting pipeline to Alstro via API. Your production flow continues unchanged. Read-only integration." },
  { num: "02", title: "Compare", desc: "For every denial, see side-by-side: your current output vs. what Alstro generates — model-specific notices, audit records, policy checks." },
  { num: "03", title: "Decide", desc: "The gap between your current process and Alstro's output is the business case. Go live — or walk away with zero downside." },
];

export default function ShadowPilot() {
  return (
    <section id="shadow-pilot" className="py-24 lg:py-32 bg-bg relative">
      <div className="container-main reveal-stagger">
        <div className="reveal flex flex-col items-center text-center gap-3 mb-16">
          <p className="font-mono text-[13px] text-accent font-semibold uppercase tracking-wide">Shadow validation</p>
          <h2 className="max-w-[700px] text-text">
            See proof on your actual decisions — before committing.
          </h2>
          <p className="text-[17px] text-text-2 max-w-[640px]">
            Shadow mode runs in parallel with your existing pipeline. Zero production impact. 30 days. You see the output. You decide with data.
          </p>
        </div>

        {/* Horizontal/Vertical Stepper */}
        <div className="reveal max-w-[1000px] mx-auto flex flex-col md:flex-row relative gap-y-12 mb-16">
          {/* Timeline background line for desktop */}
          <div className="hidden md:block absolute top-[20px] left-[40px] right-[40px] h-[2px] bg-border z-0">
            <div className="h-full w-full bg-border overflow-hidden relative">
              <div className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-accent/30 to-transparent translate-x-[-100%] animate-[flow-right_3s_infinite]" />
            </div>
          </div>
          {/* Timeline background line for mobile */}
          <div className="block md:hidden absolute left-[20px] top-[40px] bottom-[40px] w-[2px] bg-border z-0" />

          {steps.map((s, i) => (
            <motion.div 
              key={s.num} 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
              className="flex-1 relative flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-6 group z-10"
            >
              {/* Stepper Node */}
              <div className="w-[40px] h-[40px] rounded-full bg-accent text-white flex items-center justify-center font-mono text-[16px] font-bold shadow-[0_0_0_8px_var(--color-bg)] shrink-0">
                {s.num}
              </div>

              {/* Stepper Content */}
              <div className="pt-2 md:pt-0 md:text-center md:px-4">
                <h3 className="text-[20px] font-semibold text-text mb-2">{s.title}</h3>
                <p className="text-[15px] text-text-2">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Callout */}
        <div className="reveal max-w-[800px] mx-auto bg-accent-light p-8 rounded-xl border-l-[3px] border-l-accent mb-12 shadow-sm">
          <p className="text-[18px] text-text leading-relaxed">
            <span className="font-semibold">Why shadow mode works:</span>{" "}
            Compliance buyers do not replace processes without evidence. Shadow mode generates the exact mathematical evidence on your own data. That is why it converts every single time.
          </p>
        </div>

        <div className="reveal flex justify-center">
          <a href="#cta" className="btn-primary">
            Apply for Shadow Pilot
          </a>
        </div>
      </div>
    </section>
  );
}
