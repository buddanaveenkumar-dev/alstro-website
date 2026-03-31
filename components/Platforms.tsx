"use client";

import { motion, useReducedMotion } from "framer-motion";

const cards = [
  { title: "One integration, every lender", desc: "Embed once. Every lender on your platform gets provable compliance automatically." },
  { title: "Jurisdiction-agnostic runtime", desc: "US Pack live. UK Pack (FCA, CCA, PRA) and EU Pack (GDPR Art.22, EBA) in design. One integration covers global operations." },
  { title: "Model-agnostic API", desc: "Works on top of FICO, gradient boosted trees, logistic regression, internal scorecards — without model access or replacement." },
];

export default function Platforms() {
  const reduced = useReducedMotion();
  const fadeUp = { initial: reduced ? {} : { opacity: 0, y: 15 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } as const, transition: { duration: 0.5, ease: "easeOut" as const } };

  return (
    <section id="platforms" className="py-24 lg:py-32 relative">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-purple/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container-main relative z-10">
        <motion.p {...fadeUp} className="font-mono text-[12px] text-purple uppercase tracking-[0.2em] mb-4 font-semibold">For platform partners</motion.p>
        <motion.h2 {...fadeUp} className="font-heading text-[32px] sm:text-[40px] lg:text-[48px] text-text leading-[1.1] tracking-[-0.02em] max-w-[680px] mb-12">
          The <span className="text-gradient">compliance runtime</span> your FSI product is missing.
        </motion.h2>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left text */}
          <motion.div {...fadeUp} className="lg:col-span-3">
            <p className="text-[17px] text-text-2 leading-relaxed mb-6 font-light">
              Salesforce Financial Services Cloud, Microsoft Azure FSI, ServiceNow FSO, and nCino all sell AI-assisted lending workflows into regulated institutions.
            </p>
            <p className="text-[17px] text-text-2 leading-relaxed mb-6 font-light">Every enterprise deal hits the same wall:</p>
            <div className="glass-panel p-6 border-l-[4px] border-l-purple rounded-lg mb-8 shadow-[0_8px_32px_rgba(139,92,246,0.05)]">
              <p className="text-[20px] text-text font-medium leading-snug italic">
                &ldquo;How does your AI handle ECOA adverse action requirements?&rdquo;
              </p>
            </div>
            <p className="text-[17px] text-text-2 leading-relaxed mb-8 font-light">
              <span className="text-text font-medium">Alstro is the answer.</span> One runtime integration delivers compliance enforcement to every lender on your platform.
            </p>
            <p className="font-mono text-[12px] text-purple/80 uppercase tracking-[0.1em] font-medium p-4 bg-purple/5 rounded-md border border-purple/10">
              This is not a partnership pitch. It is a capability gap that drives acquisition.
            </p>
          </motion.div>

          {/* Right cards */}
          <div className="lg:col-span-2 space-y-6">
            {cards.map((c, i) => (
              <motion.div key={c.title} initial={reduced ? {} : { opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" as const, delay: reduced ? 0 : i * 0.1 }}
                className="glass-panel rounded-xl p-6 hover:border-purple/30 group transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-purple/10 rounded-bl-[60px] transition-transform duration-500 group-hover:scale-150" />
                <h3 className="font-mono text-[11px] font-bold text-purple uppercase tracking-[0.1em] mb-3 relative z-10">{c.title}</h3>
                <p className="text-[15px] text-text-2 leading-relaxed font-light relative z-10">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Integration Logo Row */}
        <motion.div {...fadeUp} className="mt-24 border-t border-border/50 pt-16">
          <p className="font-mono text-[12px] text-text-3 uppercase tracking-[0.1em] text-center mb-10 font-medium">
            Designed to integrate with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <span className="font-heading text-[20px] md:text-[24px] font-bold text-text-3 hover:text-text transition-colors duration-300">Salesforce <span className="font-light">FSC</span></span>
            <span className="font-heading text-[20px] md:text-[24px] font-bold text-text-3 hover:text-text transition-colors duration-300">Microsoft <span className="font-light">Azure FSI</span></span>
            <span className="font-heading text-[20px] md:text-[24px] font-bold text-text-3 hover:text-text transition-colors duration-300">ServiceNow <span className="font-light">FSO</span></span>
            <span className="font-heading text-[20px] md:text-[24px] font-bold text-text-3 hover:text-text transition-colors duration-300 lowercase tracking-widest"><span className="text-text-3 hover:text-text transition-colors duration-300 font-semibold lowercase">n</span>Cino</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
