"use client";

import { motion, useReducedMotion } from "framer-motion";

const benefits = [
  { title: "One integration, every lender", desc: "A single Alstro integration on your platform provides compliance enforcement for every lender in your portfolio. No per-customer configuration." },
  { title: "Jurisdiction-agnostic runtime", desc: "US regulatory pack is live. UK (FCA/CCA) and EU (EBA/GDPR Art.22) packs in design for 2026. One architecture, global deployment." },
  { title: "Enterprise-ready architecture", desc: "API-first. Batch and real-time. Cryptographic audit trails. Built to pass the security and architecture reviews your FSI customers require." },
];

export default function Platforms() {
  const reduced = useReducedMotion();

  const fadeUp = {
    initial: reduced ? {} : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.4, ease: "easeOut" as const },
  };

  return (
    <section id="platforms" className="py-24">
      <div className="section-container">
        <motion.p {...fadeUp} className="font-mono text-[11px] text-accent uppercase tracking-widest mb-3">
          Platform partners
        </motion.p>
        <motion.h2 {...fadeUp} className="font-heading text-[32px] lg:text-[40px] text-text leading-tight max-w-[600px] mb-6">
          The question every FSI platform will face.
        </motion.h2>
        <motion.p {...fadeUp} className="text-[18px] text-text font-medium max-w-[580px] mb-4">
          &ldquo;How does your AI handle ECOA adverse action requirements?&rdquo;
        </motion.p>
        <motion.p {...fadeUp} className="text-[15px] text-text-secondary max-w-[560px] mb-14 leading-relaxed">
          Salesforce Financial Services Cloud. Microsoft Azure FSI. ServiceNow
          Financial Services Operations. Every platform selling AI into regulated
          lending will need an answer. Alstro is designed to be that answer —
          embedded inside your platform, invisible to your customers, essential
          to their regulators.
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-4 mb-12">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" as const, delay: reduced ? 0 : i * 0.06 }}
              className="bg-bg-surface border border-border rounded-lg p-6 hover:border-accent/30 transition-colors duration-200"
            >
              <h3 className="text-[15px] font-medium text-text mb-2">{b.title}</h3>
              <p className="text-[14px] text-text-secondary leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p {...fadeUp} className="font-mono text-[11px] text-text-muted max-w-[480px]">
          This is not a partnership announcement. It is a capability gap that
          creates strategic interest. Platform inquiries:{" "}
          <a href="mailto:naveen@alstro.ai" className="text-accent hover:underline">naveen@alstro.ai</a>
        </motion.p>
      </div>
    </section>
  );
}
