"use client";

import { motion, useReducedMotion } from "framer-motion";

const problems = [
  {
    color: "bg-red",
    title: "Adverse action non-compliance",
    body: "Boilerplate codes violate ECOA when AI made the decision. Named enforcement priority by the CFPB in 2023.",
    risk: "Risk: Enforcement action, civil liability",
  },
  {
    color: "bg-red",
    title: "Fair lending gaps are invisible",
    body: "Models update monthly. Fair lending tests run quarterly. 89 days of unmonitored disparate impact exposure per cycle.",
    risk: "Risk: DOJ redlining referral, consent order",
  },
  {
    color: "bg-amber",
    title: "Model governance is always behind",
    body: "SR 11-7 requires documentation for every model change. 40–60 hours per change. Most teams are 6–18 months behind.",
    risk: "Cost: $180K+ annual compliance analyst burden",
  },
  {
    color: "bg-amber",
    title: "Audit prep is reactive",
    body: "Compliance officers reconstruct decision trails before exams instead of running with live, continuous records.",
    risk: "Cost: 3–6 weeks of exam prep per cycle, repeated annually",
  },
];

export default function Problem() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.5, ease: "easeOut" as const },
  };

  return (
    <section id="product" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          {...fadeUp}
          className="font-heading text-3xl lg:text-5xl text-text-1 max-w-3xl mb-16 leading-tight"
        >
          Every credit decision creates a compliance obligation. Most lenders
          ignore it.
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Regulatory citation */}
          <motion.div {...fadeUp}>
            <div className="bg-bg-2 border border-border rounded-xl p-8 lg:p-10">
              <blockquote className="font-heading text-lg lg:text-xl text-text-1 leading-relaxed mb-6 italic">
                &ldquo;When a creditor uses an artificial intelligence or machine
                learning model... the creditor must provide the specific reasons
                that actually reflect why the application was denied.&rdquo;
              </blockquote>
              <div className="text-sm text-text-3">
                <p className="text-text-2 font-medium">
                  — CFPB Circular 2023-03
                </p>
                <p className="mt-1">
                  Equal Credit Opportunity Act enforcement
                </p>
              </div>
            </div>
          </motion.div>

          {/* Problem cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {problems.map((problem, i) => (
              <motion.div
                key={problem.title}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: prefersReducedMotion ? 0 : i * 0.1,
                }}
                className="bg-bg-2 border border-border rounded-xl p-5 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2 h-2 rounded-full ${problem.color}`} />
                  <h3 className="text-sm font-medium text-text-1">
                    {problem.title}
                  </h3>
                </div>
                <p className="text-sm text-text-2 leading-relaxed mb-4 flex-1">
                  {problem.body}
                </p>
                <p className="text-xs text-text-3 font-mono">{problem.risk}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
