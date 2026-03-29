"use client";

import { motion, useReducedMotion } from "framer-motion";

const cards = [
  { title: "One integration, every lender", desc: "Embed once. Every lender on your platform gets provable compliance automatically." },
  { title: "Jurisdiction-agnostic runtime", desc: "US Pack live. UK Pack (FCA, CCA, PRA) and EU Pack (GDPR Art.22, EBA) in design. One integration covers global operations." },
  { title: "Model-agnostic API", desc: "Works on top of FICO, gradient boosted trees, logistic regression, internal scorecards — without model access or replacement." },
];

export default function Platforms() {
  const reduced = useReducedMotion();
  const fadeUp = { initial: reduced ? {} : { opacity: 0, y: 12 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } as const, transition: { duration: 0.4, ease: "easeOut" as const } };

  return (
    <section id="platforms" className="py-24">
      <div className="container-main">
        <motion.p {...fadeUp} className="font-mono text-[11px] text-accent uppercase tracking-[0.15em] mb-3">For platform partners</motion.p>
        <motion.h2 {...fadeUp} className="font-heading text-[30px] lg:text-[40px] text-text leading-[1.1] tracking-[-0.02em] max-w-[600px] mb-6">
          The compliance runtime your FSI product is missing.
        </motion.h2>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 mb-12">
          {/* Left text */}
          <motion.div {...fadeUp} className="lg:col-span-3">
            <p className="text-[15px] text-text-2 leading-relaxed mb-4">
              Salesforce Financial Services Cloud, Microsoft Azure FSI, ServiceNow FSO, and nCino all sell AI-assisted lending workflows into regulated institutions.
            </p>
            <p className="text-[15px] text-text-2 leading-relaxed mb-4">Every enterprise deal hits the same wall:</p>
            <p className="text-[19px] text-text font-medium leading-snug mb-4">
              &ldquo;How does your AI handle ECOA adverse action requirements?&rdquo;
            </p>
            <p className="text-[15px] text-text-2 leading-relaxed mb-6">
              Alstro is the answer. One runtime integration delivers compliance enforcement to every lender on your platform. Jurisdiction-agnostic: US regulatory pack is live. UK and EU packs are in design.
            </p>
            <p className="text-[13px] text-text-3 italic">
              This is not a partnership pitch. It is a capability gap that creates acquisition interest.
            </p>
          </motion.div>

          {/* Right cards */}
          <div className="lg:col-span-2 space-y-4">
            {cards.map((c, i) => (
              <motion.div key={c.title} initial={reduced ? {} : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" as const, delay: reduced ? 0 : i * 0.06 }}
                className="bg-surface border border-border rounded-sm p-5 hover:border-accent/30 transition-colors duration-200"
              >
                <h3 className="font-mono text-[11px] text-accent uppercase tracking-[0.08em] mb-2">{c.title}</h3>
                <p className="text-[14px] text-text-2 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
