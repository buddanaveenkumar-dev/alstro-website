"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

type CellValue = "yes" | "no" | "partial" | "generic" | "na";

interface Row {
  feature: string;
  alstro: CellValue;
  zest: CellValue;
  scienaptic: CellValue;
  validmind: CellValue;
  manual: CellValue;
}

const rows: Row[] = [
  { feature: "Works with any model", alstro: "yes", zest: "no", scienaptic: "no", validmind: "yes", manual: "yes" },
  { feature: "Adverse action AI", alstro: "yes", zest: "partial", scienaptic: "partial", validmind: "no", manual: "no" },
  { feature: "Fair lending (live)", alstro: "yes", zest: "partial", scienaptic: "partial", validmind: "no", manual: "no" },
  { feature: "SR 11-7 auto-docs", alstro: "yes", zest: "no", scienaptic: "no", validmind: "generic", manual: "no" },
  { feature: "Income intelligence", alstro: "yes", zest: "no", scienaptic: "no", validmind: "no", manual: "no" },
  { feature: "Exam-ready audit log", alstro: "yes", zest: "no", scienaptic: "no", validmind: "no", manual: "no" },
  { feature: "Deploys in weeks", alstro: "yes", zest: "no", scienaptic: "no", validmind: "yes", manual: "na" },
];

const columns = ["Alstro", "Zest AI", "Scienaptic", "ValidMind", "Manual"];

function Cell({ value, isAlstro }: { value: CellValue; isAlstro: boolean }) {
  if (value === "yes") {
    return (
      <span className={isAlstro ? "text-green" : "text-text-3"}>
        <Check size={16} />
      </span>
    );
  }
  if (value === "no") {
    return (
      <span className="text-red/60">
        <X size={16} />
      </span>
    );
  }
  if (value === "partial") {
    return <span className="text-xs text-amber">partial</span>;
  }
  if (value === "generic") {
    return <span className="text-xs text-text-3">generic</span>;
  }
  return <span className="text-xs text-text-3">n/a</span>;
}

export default function ComparisonTable() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl lg:text-5xl text-text-1 mb-4">
            Model-agnostic. That&apos;s the difference.
          </h2>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="overflow-x-auto -mx-6 px-6"
        >
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 pr-4 text-text-3 font-normal w-[200px]" />
                {columns.map((col, i) => (
                  <th
                    key={col}
                    className={`py-4 px-4 text-center font-medium ${
                      i === 0
                        ? "text-accent border-l-2 border-l-accent"
                        : "text-text-3 font-normal"
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-b border-border/50">
                  <td className="py-3.5 pr-4 text-text-2">{row.feature}</td>
                  {(
                    [
                      row.alstro,
                      row.zest,
                      row.scienaptic,
                      row.validmind,
                      row.manual,
                    ] as CellValue[]
                  ).map((val, i) => (
                    <td
                      key={i}
                      className={`py-3.5 px-4 text-center ${
                        i === 0 ? "border-l-2 border-l-accent/30" : ""
                      }`}
                    >
                      <div className="flex justify-center">
                        <Cell value={val} isAlstro={i === 0} />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="text-sm text-text-3 text-center mt-8 max-w-2xl mx-auto"
        >
          Zest and Scienaptic replace your model. ValidMind governs it
          generically. Alstro enforces compliance on whatever model you already
          run.
        </motion.p>
      </div>
    </section>
  );
}
