"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Connect",
    desc: "Alstro receives your model outputs via API or batch file. No model access. No system replacement. Read-only integration.",
  },
  {
    num: "02",
    title: "Compare",
    desc: "Alstro runs every decision through enforcement — adverse action generation, fair lending checks, audit logging. You see exactly what it produces alongside your current process.",
  },
  {
    num: "03",
    title: "Decide",
    desc: "After 30 days, you have a direct comparison: Alstro output vs. your current compliance process. On your data. With your models. No commitment until you see the results.",
  },
];

export default function ShadowValidation() {
  const reduced = useReducedMotion();

  const fadeUp = {
    initial: reduced ? {} : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.4, ease: "easeOut" as const },
  };

  return (
    <section id="shadow-pilot" className="py-24">
      <div className="section-container">
        <motion.p {...fadeUp} className="font-mono text-[11px] text-accent uppercase tracking-widest mb-3">
          Shadow pilot
        </motion.p>
        <motion.h2 {...fadeUp} className="font-heading text-[32px] lg:text-[40px] text-text leading-tight max-w-[560px] mb-14">
          Shadow mode first — see the output before any commitment.
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" as const, delay: reduced ? 0 : i * 0.08 }}
              className="bg-bg-surface border border-border rounded-lg p-6"
            >
              <p className="font-mono text-[24px] text-accent/40 mb-3">{s.num}</p>
              <h3 className="text-[16px] font-medium text-text mb-2">{s.title}</h3>
              <p className="text-[14px] text-text-secondary leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp}
          className="bg-bg-elevated border border-accent/20 rounded-lg p-6 max-w-[640px]"
        >
          <p className="text-[15px] text-text leading-relaxed">
            <span className="text-accent font-medium">Why shadow mode matters:</span>{" "}
            Compliance buyers are risk-averse. They will not replace a working
            process on a promise. Shadow mode eliminates the objection — you see
            the output on your actual data before any production decision.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
