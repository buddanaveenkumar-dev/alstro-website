"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

/* ── Audit Feed ─────────────────────────────────────────── */

const eventPool = [
  { id: "AA-20251114-4201", status: "pass" as const, text: "Adverse action generated · ECOA-compliant", time: "312ms" },
  { id: "FL-20251114-4200", status: "pass" as const, text: "Fair lending check · DI ratio 0.81 · passed", time: "89ms" },
  { id: "AA-20251114-4199", status: "pass" as const, text: "Adverse action generated · ECOA-compliant", time: "298ms" },
  { id: "MG-20251114-4198", status: "warn" as const, text: "Model drift alert · HITL escalated", time: "44ms" },
  { id: "AA-20251114-4197", status: "pass" as const, text: "Adverse action generated · ECOA-compliant", time: "305ms" },
  { id: "FL-20251114-4196", status: "pass" as const, text: "Fair lending check · DI ratio 0.84 · passed", time: "91ms" },
  { id: "AA-20251114-4195", status: "pass" as const, text: "Adverse action generated · ECOA-compliant", time: "289ms" },
  { id: "FL-20251114-4194", status: "pass" as const, text: "Fair lending check · DI ratio 0.79 · passed", time: "94ms" },
  { id: "MG-20251114-4193", status: "warn" as const, text: "Model drift alert · HITL escalated", time: "51ms" },
  { id: "AA-20251114-4192", status: "pass" as const, text: "Adverse action generated · ECOA-compliant", time: "315ms" },
];

interface FeedEvent {
  id: string;
  status: "pass" | "warn";
  text: string;
  time: string;
  key: number;
}

function AuditFeed() {
  const [events, setEvents] = useState<FeedEvent[]>([]);
  const counterRef = useRef(0);
  const indexRef = useRef(0);
  const totalRef = useRef(1247);
  const escalationsRef = useRef(3);
  const [total, setTotal] = useState(1247);
  const [escalations, setEscalations] = useState(3);
  const reduced = useReducedMotion();

  const addEvent = useCallback(() => {
    const base = eventPool[indexRef.current % eventPool.length];
    indexRef.current++;
    const ev: FeedEvent = { ...base, key: counterRef.current++ };
    totalRef.current++;
    if (base.status === "warn") escalationsRef.current++;
    setTotal(totalRef.current);
    setEscalations(escalationsRef.current);
    setEvents((prev) => [ev, ...prev].slice(0, 6));
  }, []);

  useEffect(() => {
    // Seed with 6 events immediately
    const seed: FeedEvent[] = [];
    for (let i = 0; i < 6; i++) {
      seed.push({ ...eventPool[i], key: counterRef.current++ });
      indexRef.current = i + 1;
    }
    setEvents(seed);

    if (reduced) return;
    const interval = setInterval(addEvent, 2400);
    return () => clearInterval(interval);
  }, [addEvent, reduced]);

  return (
    <div className="border border-border-strong rounded-xl bg-bg-muted overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-2.5 border-b border-border text-[11px] font-mono text-text-muted">
        <span>Alstro runtime</span>
        <span>·</span>
        <span>underwriting compliance</span>
        <span>·</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green pulse-live" />
          live
        </span>
      </div>
      <div className="px-5 py-3 min-h-[200px]">
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
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-between px-5 py-2 border-t border-border text-[11px] font-mono text-text-muted">
        <span>{total.toLocaleString()} decisions processed · 0 violations · {escalations} escalations</span>
        <span>ECOA · FCRA · SR 11-7</span>
      </div>
    </div>
  );
}

/* ── Stats ─────────────────────────────────────────────── */

const stats = [
  { value: "<400ms", label: "adverse action", sub: "notice latency" },
  { value: "40hrs → 2hrs", label: "SR 11-7 docs", sub: "per model change" },
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
        <div className="max-w-[720px] mx-auto text-center">
          <motion.p
            {...fade(0)}
            className="text-[11px] font-mono text-text-muted tracking-widest uppercase mb-5"
          >
            Compliance infrastructure · Underwriting decisions · US
          </motion.p>

          <motion.h1
            {...fade(0.06)}
            className="font-heading text-[38px] lg:text-[58px] text-text leading-[1.1] mb-6"
          >
            Make every underwriting
            <br />
            decision compliant.
          </motion.h1>

          <motion.p
            {...fade(0.12)}
            className="text-[17px] text-text-secondary leading-relaxed max-w-[540px] mx-auto mb-8"
          >
            Adverse action notices. Fair lending checks. Model governance.
            Alstro automates every compliance obligation triggered by an
            underwriting decision — for any lender, on any model.
          </motion.p>

          <motion.div {...fade(0.18)} className="flex flex-wrap items-center justify-center gap-3 mb-3">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 bg-text text-bg hover:bg-text/90 px-5 py-2.5 rounded-md text-[14px] font-medium transition-colors"
            >
              Request a demo <ArrowRight size={15} />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-[14px] text-text-secondary hover:text-text border border-border hover:border-border-strong px-5 py-2.5 rounded-md transition-colors"
            >
              See how it works <ArrowDown size={15} />
            </a>
          </motion.div>

          <motion.p {...fade(0.22)} className="text-[12px] text-text-muted">
            Model-agnostic · No model replacement · Deploys in shadow mode
          </motion.p>
        </div>

        {/* Audit feed */}
        <motion.div {...fade(0.3)} className="mt-14 max-w-[860px] mx-auto">
          <AuditFeed />
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fade(0.4)}
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
      </div>
    </section>
  );
}
