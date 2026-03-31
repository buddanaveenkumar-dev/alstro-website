"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function About() {
  const reduced = useReducedMotion();
  const fadeUp = { initial: reduced ? {} : { opacity: 0, y: 15 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } as const, transition: { duration: 0.5, ease: "easeOut" as const } };

  return (
    <section id="about" className="py-24 lg:py-32 relative bg-surface">
      <div className="container-main relative z-10">
        <motion.p {...fadeUp} className="font-mono text-[12px] text-accent uppercase tracking-[0.2em] mb-4 font-semibold">Leadership</motion.p>
        <motion.h2 {...fadeUp} className="font-heading text-[32px] sm:text-[40px] lg:text-[48px] text-navy leading-[1.1] tracking-[-0.02em] max-w-[680px] mb-12">
          Built by <span className="text-gradient">domain experts</span> in AI and Financial Services.
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div {...fadeUp} className="prose prose-lg text-text-2 font-light">
            <p className="text-[17px] leading-relaxed mb-6">
              Our founding team brings deep expertise as serial entrepreneurs in both artificial intelligence and highly regulated fintech infrastructure.
            </p>
            <p className="text-[17px] leading-relaxed mb-6">
              We understand the friction between rapid model deployment and rigorous institutional compliance. Alstro was engineered specifically to dissolve that friction, providing mathematical proof of compliance without slowing down innovation.
            </p>
          </motion.div>

          <motion.div initial={reduced ? {} : { opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.1 }}
            className="glass-panel p-8 lg:p-10 rounded-xl relative overflow-hidden group border-l-[4px] border-l-navy"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-125" />
            <h3 className="font-heading text-[24px] font-semibold text-navy mb-4">Enterprise DNA</h3>
            <ul className="space-y-3 text-[15px] sm:text-[16px] text-text-2 leading-relaxed font-light">
              <li className="flex items-start gap-3"><span className="text-accent mt-1 text-lg">·</span>Proven track record in scaling fintech products.</li>
              <li className="flex items-start gap-3"><span className="text-accent mt-1 text-lg">·</span>Deep regulatory expertise with US, UK, and EU frameworks.</li>
              <li className="flex items-start gap-3"><span className="text-accent mt-1 text-lg">·</span>Focused on bank-grade security and uncompromising cryptographic auditability.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
