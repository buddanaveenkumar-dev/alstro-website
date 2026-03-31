"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const easeOutExpo = (x: number): number => {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

export default function StatsBar() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const [count1, setCount1] = useState(0); // 8369
  const [count2, setCount2] = useState(0); // 37.4
  const [count3, setCount3] = useState(0); // 74.77
  const [count4, setCount4] = useState(400); // <400, but we animate down? Or just animate 0 to 400. Let's do 0 to 400.

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    const duration = 1500;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutExpo(progress);
      
      setCount1(Math.floor(easedProgress * 8369));
      setCount2(easedProgress * 37.4);
      setCount3(easedProgress * 74.77);
      setCount4(Math.floor(easedProgress * 400));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible]);

  return (
    <section ref={ref} className="bg-surface border-y border-border py-16">
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 text-center reveal-stagger">
          
          <div className="reveal">
            <div className="text-[32px] md:text-[40px] font-bold text-red tracking-tight leading-none mb-2">
              {count1.toLocaleString()}
            </div>
            <div className="text-[14px] text-text-3 font-medium">
              FCRA lawsuits filed in 2025
            </div>
          </div>
          
          <div className="reveal">
            <div className="text-[32px] md:text-[40px] font-bold text-red tracking-tight leading-none mb-2">
              +{count2.toFixed(1)}%
            </div>
            <div className="text-[14px] text-text-3 font-medium">
              Year-over-year increase
            </div>
          </div>
          
          <div className="reveal">
            <div className="text-[32px] md:text-[40px] font-bold text-red tracking-tight leading-none mb-2">
              ${count3.toFixed(2)}M
            </div>
            <div className="text-[14px] text-text-3 font-medium">
              Class action settlements 2025
            </div>
          </div>
          
          <div className="reveal">
            <div className="text-[32px] md:text-[40px] font-bold text-accent tracking-tight leading-none mb-2">
              &lt;{count4}ms
            </div>
            <div className="text-[14px] text-text-3 font-medium">
              Alstro proof generation
            </div>
          </div>
          
        </div>
        
        <div className="mt-12 text-center reveal">
          <p className="text-[11px] text-text-3 opacity-60">
            Sources: WebRecon, CFPB Consumer Response Reports, Duane Morris Class Action Review 2026
          </p>
        </div>
      </div>
    </section>
  );
}
