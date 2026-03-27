"use client";

import { motion, useReducedMotion } from "framer-motion";

const problems = [
  {
    badge: "HIGH RISK",
    badgeColor: "bg-red-bg text-red",
    title: "Adverse action notices don\u2019t reflect the model",
    body: "Boilerplate reason codes violate ECOA when an AI model made the decision. The CFPB named this explicitly in 2023. Every denial issued since may be non-compliant.",
  },
  {
    badge: "HIGH RISK",
    badgeColor: "bg-red-bg text-red",
    title: "Fair lending gaps are invisible until the exam",
    body: "Models update monthly. Fair lending tests happen quarterly. 89-day window where disparate impact builds undetected. By the time it surfaces, thousands of decisions have been affected.",
  },
  {
    badge: "OPERATIONAL COST",
    badgeColor: "bg-amber-bg text-amber",
    title: "Model governance is manual and always behind",
    body: "SR 11-7 requires documentation for every model change. 40\u201360 hours per change. Most compliance teams are 6\u201318 months behind on documentation.",
  },
  {
    badge: "OPERATIONAL COST",
    badgeColor: "bg-amber-bg text-amber",
    title: "Exam prep is reactive, not built-in",
    body: "Before every exam, compliance officers spend 3\u20136 weeks reconstructing decision trails. The audit record lives in emails and spreadsheets, not a system.",
  },
];

export default function Problem() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.4, ease: "easeOut" as const },
  };

  return (
    <section id="problem" className="py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <motion.p
          {...fadeUp}
          className="text-[11px] font-mono text-text-3 uppercase tracking-widest mb-4"
        >
          The compliance gap
        </motion.p>

        <motion.h2
          {...fadeUp}
          className="font-heading text-[36px] text-text-1 leading-tight max-w-[600px] mb-12"
        >
          Every underwriting decision creates a compliance obligation. Most
          lenders aren&apos;t meeting it.
        </motion.h2>

        {/* CFPB Citation */}
        <motion.div
          {...fadeUp}
          className="bg-bg-2 border border-border rounded-xl p-8 mb-12 border-l-4 border-l-accent"
        >
          <blockquote className="font-heading text-lg lg:text-xl text-text-1 leading-relaxed mb-4 italic">
            &ldquo;When a creditor uses an artificial intelligence or machine
            learning model to make a credit decision, the creditor must provide
            the specific reasons that actually reflect why the application was
            denied — not generic or checklist reasons.&rdquo;
          </blockquote>
          <div className="text-sm font-mono text-text-3">
            CFPB Circular 2023-03 · Equal Credit Opportunity Act · 2023
          </div>
        </motion.div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: "easeOut" as const,
                delay: prefersReducedMotion ? 0 : i * 0.08,
              }}
              className="bg-bg border border-border rounded-lg p-6"
            >
              <span
                className={`inline-block text-[10px] font-mono font-medium tracking-wider uppercase px-2 py-1 rounded mb-3 ${problem.badgeColor}`}
              >
                {problem.badge}
              </span>
              <h3 className="text-[15px] font-medium text-text-1 mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-text-2 leading-relaxed">
                {problem.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
