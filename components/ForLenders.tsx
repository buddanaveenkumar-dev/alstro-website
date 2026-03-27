"use client";

import { motion, useReducedMotion } from "framer-motion";

const audiences = [
  {
    title: "Fintech lenders",
    body: "ML models, high volume, CFPB exposure. Adverse action compliance is your most immediate regulatory risk.",
  },
  {
    title: "Community banks & credit unions",
    body: "$300M\u2013$5B assets. 3\u20138 compliance staff. SR 11-7 and fair lending documentation are where exams find gaps.",
  },
  {
    title: "BaaS platforms",
    body: "One Alstro integration covers your entire program bank portfolio. One compliance infrastructure, many lenders.",
  },
];

export default function ForLenders() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.4, ease: "easeOut" as const },
  };

  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-[1100px] px-6">
        <motion.p
          {...fadeUp}
          className="text-[11px] font-mono text-text-3 uppercase tracking-widest mb-4"
        >
          Who it&apos;s for
        </motion.p>

        <motion.h2
          {...fadeUp}
          className="font-heading text-[36px] text-text-1 leading-tight max-w-[520px] mb-12"
        >
          Built for lenders running AI-assisted underwriting.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-4">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
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
              <h3 className="text-[15px] font-medium text-text-1 mb-2">
                {a.title}
              </h3>
              <p className="text-sm text-text-2 leading-relaxed">{a.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeUp}
          className="text-sm text-text-3 italic text-center mt-8"
        >
          Any lender using a model, scorecard, or rules engine to make
          underwriting decisions.
        </motion.p>
      </div>
    </section>
  );
}
