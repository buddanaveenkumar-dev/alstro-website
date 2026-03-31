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
  const fadeUp = { initial: reduced ? {} : { opacity: 0, y: 15 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } as const, transition: { duration: 0.5, ease: "easeOut" as const } };

  return (
    <section id="problem" className="py-24 lg:py-32 relative">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-red/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container-main relative z-10">
        <motion.p {...fadeUp} className="font-mono text-[12px] text-red uppercase tracking-[0.2em] mb-4 font-semibold">The structural problem</motion.p>
        <motion.h2 {...fadeUp} className="font-heading text-[32px] sm:text-[40px] lg:text-[48px] text-text leading-[1.1] tracking-[-0.02em] max-w-[720px] mb-6">
          Lenders can execute AI decisions. They cannot <span className="text-gradient">prove those decisions were correct</span>.
        </motion.h2>
        <motion.p {...fadeUp} className="text-[17px] sm:text-[19px] text-text-2 max-w-[600px] mb-16 font-light">
          When an AI model denies credit, four things fail simultaneously. No lender handles all four correctly.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((c, i) => (
            <motion.div key={c.num} initial={reduced ? {} : { opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" as const, delay: reduced ? 0 : i * 0.1 }}
              className="glass-panel rounded-xl p-8 border-l-[4px] border-l-red card-hover-effect relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-150" />
              <p className="font-mono text-[12px] text-red/80 mb-4 font-semibold">{c.num}</p>
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-text mb-3 leading-tight">{c.title}</h3>
              <p className="text-[15px] sm:text-[16px] text-text-2 leading-relaxed mb-6 font-light">{c.body}</p>
              <p className="font-mono text-[11px] text-text-3 uppercase tracking-[0.1em]">{c.ref}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
