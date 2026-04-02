"use client";

import { useEffect, useState, useRef } from "react";

const easeOutExpo = (x: number): number => x === 1 ? 1 : 1 - Math.pow(2, -10 * x);

function AnimatedNumber({ end, suffix, color }: { end: number; suffix?: string; color: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      window.setTimeout(() => setCount(end), 0);
      return;
    }

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1500, 1);
      setCount(Math.floor(easeOutExpo(progress) * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [visible, end]);

  return <span ref={ref} className={`text-[48px] md:text-[56px] font-bold leading-none mb-4 ${color}`}>{count}{suffix}</span>;
}

export default function ROI() {
  return (
    <section className="py-[100px] max-md:py-[60px] bg-surface" aria-labelledby="roi-heading">
      <div className="container-main">
        <div className="reveal text-center mb-16">
          <p className="font-mono text-[13px] text-accent font-semibold uppercase tracking-[0.08em] mb-4">The math</p>
          <h2 id="roi-heading" className="max-w-[700px] mx-auto">
            Manual compliance breaks at AI-scale volume.
          </h2>
        </div>

        {/* Big Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-20 reveal-stagger">
          <div className="reveal card text-center flex flex-col justify-center items-center min-h-[200px]">
            <AnimatedNumber end={95} suffix="%" color="text-accent" />
            <p className="text-[16px] text-text-2">Reduction in adverse action preparation time</p>
          </div>

          <div className="reveal card text-center flex flex-col justify-center items-center min-h-[200px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[48px] md:text-[56px] font-bold text-red leading-none">30</span>
              <span className="text-[28px] text-text-3 font-light">→</span>
              <span className="text-[48px] md:text-[56px] font-bold text-green leading-none">0</span>
            </div>
            <p className="text-[16px] text-text-2">Days from dispute investigation to instant replay</p>
          </div>

          <div className="reveal card text-center flex flex-col justify-center items-center min-h-[200px]">
            <AnimatedNumber end={100} suffix="%" color="text-green" />
            <p className="text-[16px] text-text-2">Audit-ready from decision one — no reconstruction</p>
          </div>
        </div>

        {/* Cost Comparison */}
        <div className="reveal max-w-[600px] mx-auto card">
          <div className="text-center mb-8">
            <p className="text-[13px] text-text-3 font-medium">Example: mid-size fintech · 5,000 denials/month</p>
          </div>

          <div className="space-y-5">
            {/* Manual bar */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[15px] font-semibold text-text">Manual compliance</span>
                <span className="text-[15px] font-bold text-red">$175K / yr</span>
              </div>
              <div className="w-full h-10 bg-red-light rounded-lg border border-red/10" />
            </div>

            {/* Alstro bar — proportionally shorter */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[15px] font-semibold text-text">With Alstro</span>
                <span className="text-[15px] font-bold text-green">$90K / yr</span>
              </div>
              <div className="w-[51.4%] h-10 bg-green-light rounded-lg border border-green/10" />
            </div>
          </div>

          {/* Delta badge */}
          <div className="mt-6 flex justify-center">
            <span className="inline-block bg-green text-white font-semibold text-[14px] py-2 px-4 rounded-full shadow-sm">
              Save $85K/yr
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
