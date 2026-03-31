"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const easeOutExpo = (x: number): number => x === 1 ? 1 : 1 - Math.pow(2, -10 * x);

export default function StatsBar() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);
  const [c3, setC3] = useState(0);
  const [c4, setC4] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
      },
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setC1(8369); setC2(37.4); setC3(74.77); setC4(400);
      return;
    }

    let startTime: number;
    const duration = 1500;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const e = easeOutExpo(progress);
      setC1(Math.floor(e * 8369));
      setC2(e * 37.4);
      setC3(e * 74.77);
      setC4(Math.floor(e * 400));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible]);

  return (
    <section ref={ref} className="bg-surface border-y border-border py-12 md:py-16" aria-label="Industry statistics">
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-[1000px] mx-auto text-center">
          {/* Pain stats — red */}
          <div>
            <div className="text-[32px] md:text-[40px] font-bold text-red tracking-tight leading-none mb-2">
              {c1.toLocaleString()}
            </div>
            <div className="text-[14px] text-text-3 font-medium">FCRA lawsuits filed in 2025</div>
          </div>

          <div>
            <div className="text-[32px] md:text-[40px] font-bold text-red tracking-tight leading-none mb-2">
              +{c2.toFixed(1)}%
            </div>
            <div className="text-[14px] text-text-3 font-medium">Year-over-year increase</div>
          </div>

          <div>
            <div className="text-[32px] md:text-[40px] font-bold text-red tracking-tight leading-none mb-2">
              ${c3.toFixed(2)}M
            </div>
            <div className="text-[14px] text-text-3 font-medium">Class action settlements 2025</div>
          </div>

          {/* Solution stat — blue */}
          <div>
            <div className="text-[32px] md:text-[40px] font-bold text-accent tracking-tight leading-none mb-2">
              &lt;{c4}ms
            </div>
            <div className="text-[14px] text-text-3 font-medium">Alstro proof generation</div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-[11px] text-text-3 opacity-50">
            Sources: WebRecon, CFPB Consumer Response Reports, Duane Morris Class Action Review 2026
          </p>
        </div>
      </div>
    </section>
  );
}
