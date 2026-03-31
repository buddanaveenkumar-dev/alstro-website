"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end]);

  return <span ref={ref}>{isVisible ? count : 0}{suffix}</span>;
}

export default function ROI() {
  return (
    <section className="py-24 lg:py-32 bg-surface relative">
      <div className="container-main reveal-stagger">
        <div className="reveal flex flex-col items-center text-center gap-3 mb-16">
          <p className="font-mono text-[13px] text-accent font-semibold uppercase tracking-wide">The math</p>
          <h2 className="max-w-[700px] text-text">
            Manual compliance breaks at AI-scale volume.
          </h2>
        </div>

        {/* Big Metrics */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-20 reveal-stagger">
          <div className="reveal bg-white border border-border rounded-2xl p-8 text-center flex flex-col justify-center items-center shadow-sm hover:-translate-y-1 transition-transform min-h-[220px]">
            <p className="text-[64px] leading-none font-bold text-text mb-4">
              95%
            </p>
            <p className="text-[16px] text-text-2">Reduction in adverse action preparation time</p>
          </div>

          <div className="reveal bg-white border border-border rounded-2xl p-8 text-center flex flex-col justify-center items-center shadow-sm hover:-translate-y-1 transition-transform min-h-[220px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[64px] leading-none font-bold text-red">30</span>
              <span className="text-[32px] text-text-3 font-light">→</span>
              <span className="text-[64px] leading-none font-bold text-green">0</span>
            </div>
            <p className="text-[16px] text-text-2">Days from dispute investigation to instant replay</p>
          </div>

          <div className="reveal bg-white border border-border rounded-2xl p-8 text-center flex flex-col justify-center items-center shadow-sm hover:-translate-y-1 transition-transform min-h-[220px]">
            <p className="text-[64px] leading-none font-bold text-green mb-4">
              100%
            </p>
            <p className="text-[16px] text-text-2">Audit-ready from decision one — no reconstruction</p>
          </div>
        </div>

        {/* Horizontal Bar Chart */}
        <div className="reveal max-w-[800px] mx-auto bg-white border border-border rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-10">
            <p className="text-[14px] text-text-3 font-medium">Example: mid-size fintech · 5,000 denials/month</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 relative">
              <div className="text-[15px] font-semibold text-text md:w-[160px] shrink-0">Manual compliance</div>
              <div className="flex-1">
                <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: "100%" }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 1, ease: "easeOut" }} 
                  className="h-12 bg-red-light rounded-r border border-red/10 flex flex-col justify-center px-4 overflow-hidden"
                >
                  <span className="text-red font-bold">$175K / yr</span>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 relative">
              <div className="text-[15px] font-semibold text-text md:w-[160px] shrink-0">With Alstro</div>
              <div className="flex-1">
                <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: "51.4%" }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} 
                  className="h-12 bg-green-light rounded-r border border-green/10 flex flex-col justify-center px-4 overflow-hidden"
                >
                  <span className="text-green font-bold">$90K / yr</span>
                </motion.div>
                
                {/* Delta Callout */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="mt-4 md:absolute md:left-[51.4%] md:ml-[180px] md:top-0 h-12 flex items-center"
                >
                  <span className="inline-block bg-accent text-white font-semibold text-[14px] py-1.5 px-3 rounded shadow-sm">
                    Save $85K/yr
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
