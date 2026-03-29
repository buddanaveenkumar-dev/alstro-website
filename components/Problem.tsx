"use client";

import { motion, useReducedMotion } from "framer-motion";

const cards = [
  { num: "01", title: "Adverse action notices are non-compliant", body: "CFPB Circular 2023-03 requires model-specific explanations. Most lenders still send boilerplate. Every AI denial is potentially non-compliant.", ref: "CFPB Circular 2023-03" },
  { num: "02", title: "Fair lending tests lag 89 days behind models", body: "Models update monthly. Tests run quarterly. Disparate impact builds undetected across protected classes.", ref: "ECOA · Reg B" },
  { num: "03", title: "Model governance is 6–18 months behind", body: "SR 11-7 requires 40–60 hours of documentation per model change. Most teams never catch up.", ref: "Fed SR 11-7 · OCC 2011-12" },
  { num: "04", title: "No provable record exists", body: "When disputes arrive, lenders reconstruct manually. This is the #1 reason they lose FCRA cases.", ref: "FCRA §611" },
];

export default function Problem() {
  const reduced = useReducedMotion();
  const fadeUp = { initial: reduced ? {} : { opacity: 0, y: 12 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } as const, transition: { duration: 0.4, ease: "easeOut" as const } };

  return (
    <section id="problem" className="py-24">
      <div className="container-main">
        <motion.p {...fadeUp} className="font-mono text-[11px] text-accent uppercase tracking-[0.15em] mb-3">The structural problem</motion.p>
        <motion.h2 {...fadeUp} className="font-heading text-[30px] lg:text-[40px] text-text leading-[1.1] tracking-[-0.02em] max-w-[640px] mb-4">
          Lenders can execute AI decisions. They cannot prove those decisions were correct.
        </motion.h2>
        <motion.p {...fadeUp} className="text-[16px] text-text-2 max-w-[540px] mb-14">
          When an AI model denies credit, four things fail simultaneously. No lender handles all four.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <motion.div key={c.num} initial={reduced ? {} : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" as const, delay: reduced ? 0 : i * 0.05 }}
              className="bg-surface border border-border rounded-sm p-6 border-l-[3px] border-l-red"
            >
              <p className="font-mono text-[11px] text-text-3 mb-3">{c.num}</p>
              <h3 className="text-[16px] font-semibold text-text mb-2">{c.title}</h3>
              <p className="text-[14px] text-text-2 leading-relaxed mb-3">{c.body}</p>
              <p className="font-mono text-[10px] text-text-3 uppercase tracking-[0.08em]">{c.ref}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
