"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  { num: "01", title: "Connect", desc: "Point your underwriting pipeline to Alstro via API. Your production flow continues unchanged. Read-only integration." },
  { num: "02", title: "Compare", desc: "For every denial, see side-by-side: your current output vs. what Alstro generates — model-specific notices, audit records, policy checks." },
  { num: "03", title: "Decide", desc: "The gap between your current process and Alstro's output is the business case. Go live — or walk away with zero downside." },
];

export default function ShadowPilot() {
  const reduced = useReducedMotion();
  const fadeUp = { initial: reduced ? {} : { opacity: 0, y: 12 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } as const, transition: { duration: 0.4, ease: "easeOut" as const } };

  return (
    <section id="shadow-pilot" className="py-24">
      <div className="container-main">
        <motion.p {...fadeUp} className="font-mono text-[11px] text-accent uppercase tracking-[0.15em] mb-3">Shadow validation</motion.p>
        <motion.h2 {...fadeUp} className="font-heading text-[30px] lg:text-[40px] text-text leading-[1.1] tracking-[-0.02em] max-w-[560px] mb-4">
          See proof on your actual decisions — before committing to anything.
        </motion.h2>
        <motion.p {...fadeUp} className="text-[17px] text-text-2 max-w-[520px] mb-14">
          Shadow mode runs in parallel with your existing pipeline. Zero production impact. 30 days. You see the output. You decide with data.
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-4 mb-12">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial={reduced ? {} : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" as const, delay: reduced ? 0 : i * 0.08 }}
              className="bg-surface border border-border rounded-sm p-6"
            >
              <p className="font-mono text-[22px] text-text-3/30 font-semibold mb-3">{s.num}</p>
              <h3 className="text-[16px] font-semibold text-text mb-2">{s.title}</h3>
              <p className="text-[14px] text-text-2 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="bg-accent-surface border border-accent-border rounded-sm p-6 border-l-[3px] border-l-accent max-w-[640px] mb-10">
          <p className="text-[15px] text-text leading-relaxed">
            <span className="text-accent font-medium">Why shadow mode works:</span>{" "}
            Compliance buyers do not replace processes without evidence. Shadow mode generates the evidence on your own data. That is why it converts.
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          <a href="mailto:naveen@alstro.ai" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-5 py-3 rounded-sm text-[14px] font-semibold transition-colors">
            Apply for Shadow Pilot <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
