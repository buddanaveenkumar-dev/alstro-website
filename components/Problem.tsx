"use client";

import { motion, useReducedMotion } from "framer-motion";

const cards = [
  {
    title: "Adverse action notices are non-compliant",
    body: "CFPB Circular 2023-03: when AI made the denial, generic reason codes violate ECOA. Every boilerplate notice issued since is exposed.",
    ref: "CFPB Circular 2023-03",
  },
  {
    title: "Fair lending tests lag behind model updates",
    body: "Models update monthly. Fair lending tests run quarterly. 89 days of unmonitored disparate impact exposure per cycle.",
    ref: "ECOA · Reg B",
  },
  {
    title: "Model governance is 6–18 months behind",
    body: "SR 11-7 requires documentation for every model change. 40–60 hours per change. Most compliance teams cannot keep pace.",
    ref: "Fed SR 11-7 · OCC 2011-12",
  },
  {
    title: "No provable record exists",
    body: "When a borrower disputes a decision, compliance officers reconstruct the reasoning after the fact. A reconstruction is not a proof.",
    ref: "FCRA § 611",
  },
];

export default function Problem() {
  const reduced = useReducedMotion();

  const fadeUp = {
    initial: reduced ? {} : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.4, ease: "easeOut" as const },
  };

  return (
    <section id="problem" className="py-24">
      <div className="section-container">
        <motion.p {...fadeUp} className="font-mono text-[11px] text-accent uppercase tracking-widest mb-3">
          The problem
        </motion.p>
        <motion.h2 {...fadeUp} className="font-heading text-[32px] lg:text-[40px] text-text leading-tight max-w-[640px] mb-14">
          Lenders can execute AI decisions. They cannot prove those decisions
          were correct.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" as const, delay: reduced ? 0 : i * 0.05 }}
              className="bg-bg-surface border border-border rounded-lg p-6 border-l-2 border-l-red"
            >
              <h3 className="text-[15px] font-medium text-text mb-2">{c.title}</h3>
              <p className="text-[14px] text-text-secondary leading-relaxed mb-3">{c.body}</p>
              <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider">{c.ref}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
