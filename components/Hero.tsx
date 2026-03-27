"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

const baseEvents = [
  {
    id: "AA-20251114-0041892",
    status: "pass",
    text: "Adverse action generated",
    detail: "ECOA-compliant",
    time: "312ms",
  },
  {
    id: "FL-20251114-0041891",
    status: "pass",
    text: "Fair lending check passed",
    detail: "DI ratio: 0.81",
    time: "89ms",
  },
  {
    id: "MG-20251114-0041890",
    status: "warn",
    text: "Model drift detected",
    detail: "HITL escalated",
    time: "44ms",
  },
  {
    id: "AA-20251114-0041889",
    status: "pass",
    text: "Adverse action generated",
    detail: "ECOA-compliant",
    time: "298ms",
  },
  {
    id: "FL-20251114-0041888",
    status: "pass",
    text: "Fair lending check passed",
    detail: "DI ratio: 0.84",
    time: "91ms",
  },
  {
    id: "AA-20251114-0041887",
    status: "pass",
    text: "Adverse action generated",
    detail: "ECOA-compliant",
    time: "305ms",
  },
  {
    id: "FL-20251114-0041886",
    status: "pass",
    text: "Fair lending check passed",
    detail: "DI ratio: 0.79",
    time: "94ms",
  },
  {
    id: "MG-20251114-0041885",
    status: "warn",
    text: "Model drift detected",
    detail: "HITL escalated",
    time: "51ms",
  },
  {
    id: "AA-20251114-0041884",
    status: "pass",
    text: "Adverse action generated",
    detail: "ECOA-compliant",
    time: "289ms",
  },
  {
    id: "FL-20251114-0041883",
    status: "pass",
    text: "Fair lending check passed",
    detail: "DI ratio: 0.82",
    time: "87ms",
  },
];

interface FeedEvent {
  id: string;
  status: string;
  text: string;
  detail: string;
  time: string;
  key: number;
}

function AuditTerminal() {
  const [events, setEvents] = useState<FeedEvent[]>([]);
  const feedRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef(0);
  const indexRef = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  const addEvent = useCallback(() => {
    const base = baseEvents[indexRef.current % baseEvents.length];
    const newEvent = { ...base, key: counterRef.current++ };
    indexRef.current++;
    setEvents((prev) => {
      const next = [...prev, newEvent];
      return next.slice(-8);
    });
  }, []);

  useEffect(() => {
    // Add initial events
    for (let i = 0; i < 6; i++) {
      const base = baseEvents[i];
      setEvents((prev) => [
        ...prev,
        { ...base, key: counterRef.current++ },
      ]);
      indexRef.current = i + 1;
    }

    if (prefersReducedMotion) return;

    const interval = setInterval(addEvent, 2200);
    return () => clearInterval(interval);
  }, [addEvent, prefersReducedMotion]);

  useEffect(() => {
    if (feedRef.current) {
      feedRef.current.scrollTop = feedRef.current.scrollHeight;
    }
  }, [events]);

  const passCount = events.filter((e) => e.status === "pass").length;
  const warnCount = events.filter((e) => e.status === "warn").length;

  return (
    <div className="relative bg-bg-2 border border-border rounded-xl overflow-hidden w-full">
      {/* Scanline overlay */}
      <div className="scanline absolute inset-0 z-10 rounded-xl" />

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red/60" />
          <span className="w-3 h-3 rounded-full bg-amber/60" />
          <span className="w-3 h-3 rounded-full bg-green/60" />
        </div>
        <div className="flex items-center gap-2 text-xs text-text-3">
          <span>Alstro Runtime</span>
          <span className="text-text-3">·</span>
          <span className="flex items-center gap-1">
            Live <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
          </span>
        </div>
      </div>

      {/* Feed */}
      <div
        ref={feedRef}
        className="terminal-scroll p-4 h-[280px] overflow-y-auto space-y-2"
      >
        {events.map((event) => (
          <motion.div
            key={event.key}
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex items-start gap-2 text-xs"
          >
            <span className={event.status === "pass" ? "text-green" : "text-amber"}>
              {event.status === "pass" ? "✓" : "⚠"}
            </span>
            <span className="font-mono text-text-3">{event.id}</span>
            <span className="text-text-2">{event.text}</span>
            <span className="text-text-3">·</span>
            <span className={event.status === "pass" ? "text-green/80" : "text-amber/80"}>
              {event.detail}
            </span>
            <span className="text-text-3">·</span>
            <span className="text-text-3">{event.time}</span>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-2.5 border-t border-border text-xs text-text-3">
        <span>
          {events.length} events · 0 violations · {warnCount} escalation{warnCount !== 1 ? "s" : ""}
        </span>
        <span>Policy: ECOA · FCRA · SR 11-7</span>
      </div>
    </div>
  );
}

const stats = [
  { value: "<400ms", label: "adverse action", sublabel: "latency" },
  { value: "40hrs → 2hrs", label: "SR 11-7 doc time", sublabel: "per model change" },
  { value: "89 days → 0", label: "fair lending blind spot", sublabel: "eliminated" },
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: "easeOut" as const, delay },
        };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 text-xs text-text-2 border border-border rounded-full px-3 py-1.5 mb-6">
                Compliance infrastructure · Credit decisions
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="font-heading text-5xl lg:text-7xl text-text-1 leading-[1.1] mb-6"
            >
              AI agents that make every credit decision compliant.
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-lg text-text-2 max-w-xl mb-8 leading-relaxed"
            >
              Every lender using AI in credit decisions is exposed right now.
              Alstro is the runtime layer that enforces ECOA, FCRA, and SR 11-7
              compliance at the point of every decision — automatically.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3 mb-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dim text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors"
              >
                Book a 30-min demo <ArrowRight size={16} />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 border border-border hover:border-border-2 text-text-2 hover:text-text-1 px-6 py-3 rounded-lg text-sm transition-colors"
              >
                See how it works <ArrowDown size={16} />
              </a>
            </motion.div>

            <motion.p {...fadeUp(0.3)} className="text-xs text-text-3">
              Model-agnostic · Deploys in 4 weeks · No model replacement required
            </motion.p>
          </div>

          {/* Right column — Terminal */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <AuditTerminal />
          </motion.div>
        </div>

        {/* Stat pills */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="bg-bg-2 border border-border rounded-xl px-6 py-5 text-center"
            >
              <div className="text-2xl font-heading text-text-1 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-text-2">{stat.label}</div>
              <div className="text-xs text-text-3">{stat.sublabel}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
