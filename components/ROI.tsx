"use client";

import { motion, useReducedMotion } from "framer-motion";

const metrics = [
  { value: "95%", label: "Reduction in adverse action preparation time" },
  { value: "30→0", label: "Days: dispute investigation replaced by instant replay" },
  { value: "100%", label: "Audit-ready from decision one — no reconstruction" },
];

export default function ROI() {
  const reduced = useReducedMotion();
  const fadeUp = { initial: reduced ? {} : { opacity: 0, y: 15 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } as const, transition: { duration: 0.5, ease: "easeOut" as const } };

  return (
    <section className="py-24 lg:py-32 bg-surface/30 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-main relative z-10">
        <motion.p {...fadeUp} className="font-mono text-[12px] text-green uppercase tracking-[0.2em] mb-4 font-semibold">The math</motion.p>
        <motion.h2 {...fadeUp} className="font-heading text-[32px] sm:text-[40px] lg:text-[48px] text-text leading-[1.1] tracking-[-0.02em] max-w-[600px] mb-16">
          Manual compliance <span className="text-gradient">breaks at AI-scale volume</span>.
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {metrics.map((m, i) => (
            <motion.div key={m.value} initial={reduced ? {} : { opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" as const, delay: reduced ? 0 : i * 0.1 }}
              className="glass-panel rounded-xl p-8 hover:bg-surface/50 transition-colors duration-300 relative overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-green/10 rounded-full blur-2xl transition-all duration-500 group-hover:bg-green/20" />
              <p className="font-mono text-[40px] lg:text-[48px] text-green font-bold leading-none mb-4 drop-shadow-[0_0_12px_rgba(16,185,129,0.3)]">{m.value}</p>
              <p className="text-[15px] sm:text-[16px] text-text-2 leading-relaxed font-light">{m.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="glass-panel p-8 md:p-10 rounded-xl relative overflow-hidden max-w-[700px]">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-green via-accent to-transparent" />
          <p className="font-mono text-[11px] text-text-3 uppercase tracking-[0.15em] mb-8 font-semibold">
            Example: mid-size fintech · 5,000 denials/month
          </p>
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <p className="font-mono text-[11px] text-text-3 uppercase tracking-[0.1em] mb-3">Manual compliance</p>
              <p className="font-mono text-[32px] sm:text-[40px] text-red font-bold leading-none drop-shadow-[0_0_12px_rgba(239,68,68,0.2)]">
                $175K<span className="text-[16px] text-text-3 font-medium ml-1">/yr</span>
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] text-text-3 uppercase tracking-[0.1em] mb-3">With Alstro</p>
              <p className="font-mono text-[32px] sm:text-[40px] text-green font-bold leading-none drop-shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                $90K<span className="text-[16px] text-text-3 font-medium ml-1">/yr</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
