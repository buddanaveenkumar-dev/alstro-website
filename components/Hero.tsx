"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

const baseEvents = [
  {
    id: "AA-20251114-4189",
    status: "pass" as const,
    text: "Adverse action generated · ECOA-compliant",
    time: "312ms",
  },
  {
    id: "FL-20251114-4188",
    status: "pass" as const,
    text: "Fair lending check · DI ratio 0.81 · passed",
    time: "89ms",
  },
  {
    id: "MG-20251114-4187",
    status: "warn" as const,
    text: "Model drift alert · HITL escalated",
    time: "44ms",
  },
  {
    id: "AA-20251114-4186",
    status: "pass" as const,
    text: "Adverse action generated · ECOA-compliant",
    time: "298ms",
  },
  {
    id: "FL-20251114-4185",
    status: "pass" as const,
    text: "Fair lending check · DI ratio 0.84 · passed",
    time: "91ms",
  },
  {
    id: "AA-20251114-4184",
    status: "pass" as const,
    text: "Adverse action generated · ECOA-compliant",
    time: "305ms",
  },
  {
    id: "FL-20251114-4183",
    status: "pass" as const,
    text: "Fair lending check · DI ratio 0.79 · passed",
    time: "94ms",
  },
  {
    id: "MG-20251114-4182",
    status: "warn" as const,
    text: "Model drift alert · HITL escalated",
    time: "51ms",
  },
  {
    id: "AA-20251114-4181",
    status: "pass" as const,
    text: "Adverse action generated · ECOA-compliant",
    time: "289ms",
  },
  {
    id: "FL-20251114-4180",
    status: "pass" as const,
    text: "Fair lending check · DI ratio 0.82 · passed",
    time: "87ms",
  },
];

interface FeedEvent {
  id: string;
  status: "pass" | "warn";
  text: string;
  time: string;
  key: number;
  ago: string;
}

function getAgo(index: number): string {
  if (index === 0) return "just now";
  const secs = index * 3;
  return `${secs}s ago`;
}

function AuditFeed() {
  const [events, setEvents] = useState<FeedEvent[]>([]);
  const counterRef = useRef(0);
  const indexRef = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  const addEvent = useCallback(() => {
    const base = baseEvents[indexRef.current % baseEvents.length];
    const newEvent: FeedEvent = {
      ...base,
      key: counterRef.current++,
      ago: "just now",
    };
    indexRef.current++;
    setEvents((prev) => {
      const updated = prev.map((e, i) => ({ ...e, ago: getAgo(i + 1) }));
      return [newEvent, ...updated].slice(0, 7);
    });
  }, []);

  useEffect(() => {
    // Seed initial events
    const initial: FeedEvent[] = [];
    for (let i = 5; i >= 0; i--) {
      initial.push({
        ...baseEvents[i],
        key: counterRef.current++,
        ago: getAgo(5 - i),
      });
    }
    indexRef.current = 6;
    setEvents(initial.reverse());

    if (prefersReducedMotion) return;
    const interval = setInterval(addEvent, 2400);
    return () => clearInterval(interval);
  }, [addEvent, prefersReducedMotion]);

  const passCount = events.filter((e) => e.status === "pass").length;
  const warnCount = events.filter((e) => e.status === "warn").length;

  return (
    <div className="mx-auto max-w-[860px] mt-16 border border-border-2 rounded-xl bg-bg-2 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-border text-xs font-mono text-text-3">
        <span>Alstro runtime</span>
        <span>·</span>
        <span>underwriting compliance</span>
        <span>·</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
          live
        </span>
      </div>

      {/* Feed */}
      <div className="px-5 py-3 min-h-[252px]">
        <AnimatePresence initial={false}>
          {events.map((event) => (
            <motion.div
              key={event.key}
              initial={prefersReducedMotion ? {} : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" as const }}
              className="flex items-center gap-3 py-1.5 text-[13px] overflow-hidden"
            >
              <span
                className={
                  event.status === "pass" ? "text-green" : "text-amber"
                }
              >
                {event.status === "pass" ? "✓" : "⚠"}
              </span>
              <span className="font-mono text-text-3 shrink-0 w-[130px]">
                {event.id}
              </span>
              <span className="text-text-2 truncate flex-1">{event.text}</span>
              <span className="font-mono text-text-3 shrink-0 w-[44px] text-right">
                {event.time}
              </span>
              <span className="text-text-3 shrink-0 w-[60px] text-right text-xs">
                {event.ago}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-2.5 border-t border-border text-xs font-mono text-text-3">
        <span>
          {events.length} events processed · 0 violations · {warnCount}{" "}
          escalation{warnCount !== 1 ? "s" : ""}
        </span>
        <span>ECOA · FCRA · SR 11-7</span>
      </div>
    </div>
  );
}

const stats = [
  {
    value: "<400ms",
    label: "adverse action",
    sublabel: "notice latency",
  },
  {
    value: "40 hrs → 2 hrs",
    label: "SR 11-7 doc time",
    sublabel: "per model change",
  },
  {
    value: "Continuous",
    label: "fair lending",
    sublabel: "monitoring",
  },
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, ease: "easeOut" as const, delay },
        };

  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-24">
      <div className="mx-auto max-w-[1100px] px-6">
        {/* Centered hero text */}
        <div className="max-w-[760px] mx-auto text-center">
          <motion.p
            {...fadeUp(0)}
            className="text-xs font-mono text-text-3 tracking-widest uppercase mb-6"
          >
            Compliance infrastructure · Underwriting decisions
          </motion.p>

          <motion.h1
            {...fadeUp(0.08)}
            className="font-heading text-[40px] lg:text-[56px] text-text-1 leading-tight mb-6"
          >
            AI agents that make every
            <br className="hidden sm:block" /> underwriting decision compliant.
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="text-lg text-text-2 max-w-[600px] mx-auto mb-8 leading-relaxed"
          >
            Every underwriting decision triggers a compliance obligation —
            adverse action notices, fair lending checks, model governance. Alstro
            automates that workflow for any lender, on any model, without
            replacing what you already run.
          </motion.p>

          <motion.div
            {...fadeUp(0.24)}
            className="flex flex-wrap items-center justify-center gap-3 mb-4"
          >
            <a
              href="#early-access"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              Request early access <ArrowRight size={15} />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 border border-border hover:border-border-2 text-text-2 hover:text-text-1 px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              See how it works <ArrowDown size={15} />
            </a>
          </motion.div>

          <motion.p {...fadeUp(0.24)} className="text-xs text-text-3">
            Model-agnostic · Works with FICO, ML scorecards, Zest, internal
            rules · No model replacement required
          </motion.p>
        </div>

        {/* Audit feed panel */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" as const, delay: 0.3 }}
        >
          <AuditFeed />
        </motion.div>

        {/* Stat callouts */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" as const, delay: 0.45 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-border"
        >
          {stats.map((stat) => (
            <div key={stat.value} className="text-center px-10 py-4 sm:py-0">
              <div className="text-[30px] font-heading text-text-1 leading-tight">
                {stat.value}
              </div>
              <div className="text-[13px] text-text-3">
                {stat.label}
              </div>
              <div className="text-[13px] text-text-3">{stat.sublabel}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
