"use client";

import { motion } from "framer-motion";

const cards = [
  { num: "01", title: "Adverse action notices are non-compliant", body: "CFPB Circular 2023-03 requires model-specific explanations. Most lenders still send boilerplate. Every AI denial is potentially non-compliant.", ref: "CFPB Circular 2023-03", colorClass: "border-l-[4px] border-l-red" },
  { num: "02", title: "Fair lending tests lag 89 days behind models", body: "Models update monthly. Tests run quarterly. Disparate impact builds undetected across protected classes.", ref: "ECOA · Reg B", colorClass: "border-l-[4px] border-l-amber" },
  { num: "03", title: "Model governance is 6–18 months behind", body: "SR 11-7 requires 40–60 hours of documentation per model change. Most teams never catch up.", ref: "Fed SR 11-7 · OCC 2011-12", colorClass: "border-l-[4px] border-l-amber" },
  { num: "04", title: "No provable record exists", body: "When disputes arrive, lenders reconstruct manually. This is the #1 reason they lose FCRA cases.", ref: "FCRA §611", colorClass: "border-l-[4px] border-l-red" },
];

export default function Problem() {
  return (
    <section id="problem" className="py-24 lg:py-32 bg-bg relative">
      <div className="container-main reveal-stagger">
        {/* Header */}
        <div className="reveal flex flex-col items-start gap-3 mb-16">
          <p className="font-mono text-[13px] text-accent font-semibold uppercase tracking-wide">The structural problem</p>
          <h2 className="max-w-[700px] text-text">
            Lenders can execute AI decisions. They cannot prove those decisions were correct.
          </h2>
          <p className="text-[17px] text-text-2 max-w-[600px]">
            When an AI model denies credit, four things fail simultaneously. No lender handles all four correctly.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 reveal-stagger">
          {cards.map((c, i) => (
            <motion.div 
              key={c.num} 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
              className={`bg-white border border-border rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-1 hover:border-accent hover:shadow-[0_4px_24px_rgba(37,99,235,0.08)] transition-all duration-300 flex flex-col justify-between min-h-[260px] ${c.colorClass}`}
            >
              <div className="absolute top-4 right-6 text-[80px] font-heading font-semibold text-text opacity-[0.04] select-none pointer-events-none leading-none z-0">
                {c.num}
              </div>
              
              <div className="relative z-10 mb-8">
                <h3 className="mb-3 pr-8">{c.title}</h3>
                <p className="text-text-2 font-normal">{c.body}</p>
              </div>
              
              <div className="relative z-10 mt-auto">
                <span className="inline-block font-mono text-[12px] text-accent bg-accent-light px-3 py-1.5 rounded text-left">
                  {c.ref}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
