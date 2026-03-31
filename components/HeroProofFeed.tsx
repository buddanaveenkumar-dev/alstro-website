"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

const feedLines = [
  { text: "Model: gradient_boost_v4.2", delay: 0 },
  { text: "Action: DENY", delay: 80 },
  { text: "────────────────────────────", delay: 160, dim: true },
  { text: "▸ Policy check    ECOA §1691   ", check: true, delay: 240 },
  { text: "▸ Policy check    FCRA §1681   ", check: true, delay: 400 },
  { text: "▸ Policy check    TILA §1601   ", check: true, delay: 560 },
  { text: "▸ Fair lending    Disparity <2%", check: true, delay: 720 },
  { text: "────────────────────────────", delay: 880, dim: true },
  { text: "▸ Explanation     4 factors   ", check: true, delay: 960 },
  { text: "▸ Audit record    SHA-256     ", check: true, delay: 1120 },
  { text: "▸ Replay hash     a7f3c...   ", check: true, delay: 1280 },
  { text: "────────────────────────────", delay: 1440, dim: true },
  { text: "Status: PROVABLE — cleared for exec", delay: 1600, accent: true },
  { text: "Latency: 347ms", delay: 1760 },
];

export default function HeroProofFeed() {
  const [visibleCount, setVisibleCount] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setVisibleCount(feedLines.length);
      return;
    }
    const timers: ReturnType<typeof setTimeout>[] = [];
    feedLines.forEach((line, i) => {
      timers.push(setTimeout(() => setVisibleCount(i + 1), line.delay + 400));
    });
    return () => timers.forEach(clearTimeout);
  }, [reduced]);

  return (
    <div className="rounded-xl overflow-hidden font-mono text-[13px] leading-[1.8] relative bg-white">
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-surface">
        <span className="text-text-3 text-[11px] uppercase tracking-[0.12em] font-semibold">Decision intercepted</span>
        <span className="flex items-center gap-2 text-[11px] text-text-3 font-semibold uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          live
        </span>
      </div>
      <div className="px-5 py-5 space-y-1 min-h-[340px]">
        {feedLines.slice(0, visibleCount).map((line, i) => (
          <motion.div
            key={i}
            initial={reduced ? {} : { opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className={`flex items-center justify-between ${line.dim ? "text-text-3/40" : line.accent ? "text-purple font-bold" : "text-navy font-medium"}`}
          >
            <span>{line.text}</span>
            {line.check && (
              <span className={`ml-2 ${visibleCount > i ? "text-green" : "text-text-3"}`}>✓</span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
