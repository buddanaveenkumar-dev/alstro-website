"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-bg relative">
      <div className="container-main reveal-stagger">
        <div className="reveal flex flex-col items-center text-center gap-3 mb-16">
          <p className="font-mono text-[13px] text-accent font-semibold uppercase tracking-wide">Leadership</p>
          <h2 className="max-w-[700px] text-text">
            Built by domain experts in AI and Financial Services.
          </h2>
        </div>

        <div className="reveal max-w-[900px] mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="prose prose-lg text-text-2">
            <p className="text-[17px] leading-relaxed mb-6">
              Our founding team brings deep expertise as serial entrepreneurs in both artificial intelligence and highly regulated fintech infrastructure.
            </p>
            <p className="text-[17px] leading-relaxed mb-6">
              We understand the friction between rapid model deployment and rigorous institutional compliance. Alstro was engineered specifically to dissolve that friction, providing mathematical proof of compliance without slowing down innovation.
            </p>
          </div>

          <div className="bg-white p-8 lg:p-10 rounded-2xl relative overflow-hidden border border-border shadow-sm">            
            <blockquote className="border-l-[3px] border-accent pl-6 py-2 mb-8">
              <p className="text-[18px] sm:text-[20px] text-text font-medium italic leading-relaxed m-0">
                &ldquo;Lending models run at milliseconds; compliance reviews take months. We built Alstro to enforce policy exactly where the risk is highest: at runtime.&rdquo;
              </p>
            </blockquote>

            <div className="bg-surface rounded-xl p-6 border border-border">
              <h4 className="font-mono text-[12px] text-accent font-semibold uppercase tracking-wider mb-4">Core Expertise</h4>
              <ul className="space-y-4 text-[15px] text-text-2 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-accent leading-none mt-1.5">•</span>
                  <span>Serial Entrepreneurs in AI and Fintech</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent leading-none mt-1.5">•</span>
                  <span>Scaled previous fintech infrastructures to <span className="text-text font-semibold">500K+</span> active borrowers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent leading-none mt-1.5">•</span>
                  <span>Deep expertise in deploying machine learning within highly regulated institutional environments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
