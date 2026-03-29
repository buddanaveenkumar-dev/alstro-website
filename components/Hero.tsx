"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

/* ── Audit Feed ─────────────────────────────────────────── */

const baseEvents = [
  { id: "AA-20251114-4189", status: "pass" as const, text: "Adverse action generated · ECOA-compliant", time: "312ms" },
  { id: "FL-20251114-4188", status: "pass" as const, text: "Fair lending check · DI ratio 0.81 · passed", time: "89ms" },
  { id: "MG-20251114-4187", status: "warn" as const, text: "Model drift alert · HITL escalated", time: "44ms" },
  { id: "AA-20251114-4186", status: "pass" as const, text: "Adverse action generated · ECOA-compliant", time: "298ms" },
  { id: "FL-20251114-4185", status: "pass" as const, text: "Fair lending check · DI ratio 0.84 · passed", time: "91ms" },
  { id: "AA-20251114-4184", status: "pass" as const, text: "Adverse action generated · ECOA-compliant", time: "305ms" },
  { id: "FL-20251114-4183", status: "pass" as const, text: "Fair lending check · DI ratio 0.79 · passed", time: "94ms" },
  { id: "MG-20251114-4182", status: "warn" as const, text: "Model drift alert · HITL escalated", time: "51ms" },
  { id: "AA-20251114-4181", status: "pass" as const, text: "Adverse action generated · ECOA-compliant", time: "289ms" },
  { id: "FL-20251114-4180", status: "pass" as const, text: "Fair lending check · DI ratio 0.82 · passed", time: "87ms" },
];

interface FeedEvent {
  id: string;
  status: "pass" | "warn";
  text: string;
  time: string;
  key: number;
  ago: string;
}

function getAgo(i: number) {
  if (i === 0) return "just now";
  return `${i * 3}s ago`;
}

function AuditFeed() {
  const [events, setEvents] = useState<FeedEvent[]>([]);
  const counterRef = useRef(0);
  const indexRef = useRef(0);
  const reduced = useReducedMotion();

  const addEvent = useCallback(() => {
    const base = baseEvents[indexRef.current % baseEvents.length];
    indexRef.current++;
    const ev: FeedEvent = { ...base, key: counterRef.current++, ago: "just now" };
    setEvents((prev) => {
      const updated = prev.map((e, i) => ({ ...e, ago: getAgo(i + 1) }));
      return [ev, ...updated].slice(0, 7);
    });
  }, []);

  useEffect(() => {
    const initial: FeedEvent[] = [];
    for (let i = 5; i >= 0; i--) {
      initial.push({ ...baseEvents[i], key: counterRef.current++, ago: getAgo(5 - i) });
    }
    indexRef.current = 6;
    setEvents(initial.reverse());
    if (reduced) return;
    const interval = setInterval(addEvent, 2400);
    return () => clearInterval(interval);
  }, [addEvent, reduced]);

  const warnCount = events.filter((e) => e.status === "warn").length;

  return (
    <div className="border border-border-strong rounded-xl bg-bg-muted overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-2.5 border-b border-border text-[11px] font-mono text-text-muted">
        <span>Alstro execution layer</span>
        <span>·</span>
        <span>regulated workflow</span>
        <span>·</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green pulse-live" />
          live
        </span>
      </div>
      <div className="px-5 py-3 min-h-[220px] sm:min-h-[252px]">
        <AnimatePresence initial={false}>
          {events.map((event) => (
            <motion.div
              key={event.key}
              initial={reduced ? {} : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" as const }}
              className="flex items-center gap-3 py-1.5 text-[13px] overflow-hidden"
            >
              <span className={event.status === "pass" ? "text-green" : "text-amber"}>
                {event.status === "pass" ? "✓" : "⚠"}
              </span>
              <span className="font-mono text-text-muted shrink-0 w-[120px] hidden sm:block">{event.id}</span>
              <span className="text-text-secondary truncate flex-1">{event.text}</span>
              <span className="font-mono text-text-muted shrink-0 w-[42px] text-right">{event.time}</span>
              <span className="text-text-muted shrink-0 w-[56px] text-right text-[12px] hidden sm:block">{event.ago}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-between px-5 py-2 border-t border-border text-[11px] font-mono text-text-muted">
        <span>{events.length} decisions processed · 0 violations · {warnCount} escalation{warnCount !== 1 ? "s" : ""}</span>
        <span>ECOA · FCRA · SR 11-7</span>
      </div>
    </div>
  );
}

/* ── Hero ──────────────────────────────────────────────── */

export default function Hero() {
  const reduced = useReducedMotion();

  const fade = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, ease: "easeOut" as const, delay },
        };

  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="section-container">
        <div className="max-w-[720px]">
          <motion.p
            {...fade(0)}
            className="text-[12px] font-mono text-accent tracking-wide mb-5"
          >
            Execution infrastructure for regulated AI
          </motion.p>

          <motion.h1
            {...fade(0.06)}
            className="font-heading text-[40px] lg:text-[56px] text-text leading-[1.1] mb-6"
          >
            AI is ready for financial services.
            <br />
            Deployment is not.
          </motion.h1>

          <motion.p
            {...fade(0.12)}
            className="text-[17px] text-text-secondary leading-[1.7] max-w-[600px] mb-8"
          >
            Every AI-driven financial decision requires explainability, audit
            trails, and regulatory defensibility before it can reach production.
            Alstro is the execution layer that makes that possible — for
            platforms, lenders, and every model in between.
          </motion.p>

          <motion.div {...fade(0.18)} className="flex flex-wrap items-center gap-3 mb-5">
            <a
              href="#validate"
              className="inline-flex items-center gap-2 bg-text text-bg hover:bg-text/90 px-5 py-2.5 rounded-md text-[14px] font-medium transition-colors"
            >
              Discuss platform fit <ArrowRight size={15} />
            </a>
            <a
              href="#what-we-build"
              className="inline-flex items-center gap-2 text-[14px] text-text-secondary hover:text-text border border-border hover:border-border-strong px-5 py-2.5 rounded-md transition-colors"
            >
              Explore architecture <ArrowDown size={15} />
            </a>
          </motion.div>

          <motion.p {...fade(0.22)} className="text-[12px] text-text-muted">
            Model-agnostic · Works with any AI/ML platform · No model
            replacement required
          </motion.p>
        </div>

        {/* Audit feed */}
        <motion.div {...fade(0.3)} className="mt-14 max-w-[860px]">
          <AuditFeed />
        </motion.div>
      </div>
    </section>
  );
}
