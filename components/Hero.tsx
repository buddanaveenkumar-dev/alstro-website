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
        <span>Alstro runtime</span>
        <span>·</span>
        <span>underwriting compliance</span>
        <span>·</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
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
              <span className="font-mono text-text-muted shrink-0 w-[120px] hidden sm:block">
                {event.id}
              </span>
              <span className="text-text-secondary truncate flex-1">{event.text}</span>
              <span className="font-mono text-text-muted shrink-0 w-[42px] text-right">
                {event.time}
              </span>
              <span className="text-text-muted shrink-0 w-[56px] text-right text-[12px] hidden sm:block">
                {event.ago}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between px-5 py-2 border-t border-border text-[11px] font-mono text-text-muted">
        <span>{events.length} events · 0 violations · {warnCount} escalation{warnCount !== 1 ? "s" : ""}</span>
        <span>ECOA · FCRA · SR 11-7</span>
      </div>
    </div>
  );
}

/* ── Regulation pills ──────────────────────────────────── */

const regulations = ["ECOA", "FCRA", "Reg B", "SR 11-7", "CFPB 2023-03"];

/* ── Stats ─────────────────────────────────────────────── */

const stats = [
  { value: "<400ms", label: "adverse action", sub: "notice latency" },
  { value: "40 hrs → 2 hrs", label: "SR 11-7 doc time", sub: "per model change" },
  { value: "Continuous", label: "fair lending", sub: "monitoring" },
];

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
        {/* ── Text block ── */}
        <div className="max-w-[720px]">
          <motion.h1
            {...fade(0)}
            className="font-heading text-[42px] lg:text-[56px] text-text leading-[1.08] mb-5"
          >
            Compliance infrastructure
            <br />
            for underwriting decisions
          </motion.h1>

          <motion.p
            {...fade(0.12)}
            className="text-[17px] text-text-secondary leading-relaxed max-w-[580px] mb-4"
          >
            Model-agnostic runtime that enforces compliance on every
            underwriting decision — at the point it&apos;s made.
          </motion.p>

          <motion.p
            {...fade(0.16)}
            className="text-[15px] text-text-muted leading-relaxed max-w-[540px] mb-8"
          >
            Alstro sits between your underwriting stack and your execution
            systems — integrating with the platforms lenders already rely on.
          </motion.p>

          <motion.div {...fade(0.2)} className="flex flex-wrap items-center gap-3 mb-5">
            <a
              href="#validate"
              className="inline-flex items-center gap-2 bg-text text-bg hover:bg-text/90 px-5 py-2.5 rounded-md text-[14px] font-medium transition-colors"
            >
              Request a demo <ArrowRight size={15} />
            </a>
            <a
              href="#decision-flow"
              className="inline-flex items-center gap-2 text-[14px] text-text-secondary hover:text-text border border-border hover:border-border-strong px-5 py-2.5 rounded-md transition-colors"
            >
              See how it works <ArrowDown size={15} />
            </a>
          </motion.div>

          <motion.p {...fade(0.24)} className="text-[12px] text-text-muted font-mono">
            Working with select lenders and design partners in beta.
          </motion.p>
        </div>

        {/* ── Architecture diagram ── */}
        <motion.div {...fade(0.3)} className="mt-14 lg:mt-18 max-w-[640px]">
          <div className="space-y-0">
            <div className="bg-bg-muted border border-border rounded-lg px-5 py-4">
              <p className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-1.5">Your models</p>
              <p className="text-[13px] text-text-secondary">Credit scorecards · ML models · Rules engines · FICO</p>
            </div>
            <div className="flex items-center py-2 pl-8"><div className="w-px h-6 bg-border-strong" /></div>
            <div className="bg-bg-raised border-2 border-text rounded-lg px-5 py-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-mono text-text uppercase tracking-widest font-medium">Alstro Runtime</span>
                <span className="text-[10px] font-mono text-accent bg-accent-light rounded px-1.5 py-[1px]">compliance layer</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Policy checks", "Explainability", "Fair lending", "Audit logging", "HITL escalation"].map((l) => (
                  <span key={l} className="text-[12px] text-text-secondary bg-bg-muted border border-border rounded px-2.5 py-1">{l}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center py-2 pl-8"><div className="w-px h-6 bg-border-strong" /></div>
            <div className="bg-bg-muted border border-border rounded-lg px-5 py-4">
              <p className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-1.5">Your execution systems</p>
              <p className="text-[13px] text-text-secondary">LOS · Decision engines · Adverse action workflows</p>
            </div>
          </div>
        </motion.div>

        {/* ── Audit feed ── */}
        <motion.div {...fade(0.4)} className="mt-12 max-w-[860px]">
          <AuditFeed />
        </motion.div>

        {/* ── Stat callouts ── */}
        <motion.div
          {...fade(0.5)}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-border"
        >
          {stats.map((s) => (
            <div key={s.value} className="text-center px-10 py-4 sm:py-0">
              <div className="text-[28px] font-heading text-text leading-tight">{s.value}</div>
              <div className="text-[13px] text-text-muted">{s.label}</div>
              <div className="text-[13px] text-text-muted">{s.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* ── Regulation pills (FIX 8) ── */}
        <motion.div
          {...fade(0.55)}
          className="mt-6 flex flex-wrap gap-2 justify-center"
        >
          {regulations.map((r) => (
            <span
              key={r}
              className="border border-border-strong rounded-full px-3 py-1 text-xs font-mono text-text-muted"
            >
              {r}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
