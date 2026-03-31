"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const reduced = useReducedMotion();
  const fadeUp = { initial: reduced ? {} : { opacity: 0, y: 15 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } as const, transition: { duration: 0.5, ease: "easeOut" as const } };

  return (
    <section id="about" className="py-24 lg:py-32 relative bg-surface/30">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="container-main relative z-10">
        <motion.p {...fadeUp} className="font-mono text-[12px] text-accent uppercase tracking-[0.2em] mb-4 font-semibold">Leadership</motion.p>
        <motion.h2 {...fadeUp} className="font-heading text-[32px] sm:text-[40px] lg:text-[48px] text-text leading-[1.1] tracking-[-0.02em] max-w-[680px] mb-16">
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
            <blockquote className="border-l-2 border-accent pl-6 py-2 my-8">
              <p className="text-[18px] sm:text-[20px] text-text font-medium italic leading-relaxed m-0">
                &ldquo;Lending models run at milliseconds; compliance reviews take months. We built Alstro to enforce policy exactly where the risk is highest: at runtime.&rdquo;
              </p>
            </blockquote>
          </motion.div>

          {/* Founder Profile */}
          <motion.div initial={reduced ? {} : { opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="glass-panel p-8 lg:p-10 rounded-xl relative overflow-hidden group border-l-[4px] border-l-accent shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-125" />
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 relative z-10">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-border relative shrink-0">
                <Image src="/founder.png" alt="Naveen Budda" fill className="object-cover object-top" />
              </div>
              <div className="text-center sm:text-left mt-2 sm:mt-4">
                <h3 className="font-heading text-[24px] sm:text-[28px] font-semibold text-text leading-none mb-2 tracking-tight">Naveen Budda</h3>
                <p className="font-mono text-[12px] text-accent font-semibold tracking-[0.1em] uppercase">Founder & CEO</p>
              </div>
            </div>

            <div className="bg-elevated rounded-lg p-5 border border-border/50 relative z-10">
              <ul className="space-y-4 text-[14px] sm:text-[15px] text-text-2 leading-relaxed font-light">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1 text-lg leading-none">·</span>
                  <span>Serial Entrepreneur in AI and Fintech</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1 text-lg leading-none">·</span>
                  <span>Previously founded <span className="text-text font-medium">KarmaLife</span>, scaling it to <span className="text-text font-medium">500K+</span> active borrowers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1 text-lg leading-none">·</span>
                  <span>Deep expertise in deploying machine learning within highly regulated institutional environments</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
