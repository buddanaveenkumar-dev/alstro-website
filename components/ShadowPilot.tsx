"use client";

const steps = [
  { num: "01", title: "Connect", lines: ["API integration.", "Read-only. No production changes."] },
  { num: "02", title: "Compare", lines: ["Side-by-side: your output", "vs. Alstro\u2019s. Model-specific notices, audit trails."] },
  { num: "03", title: "Decide", lines: ["The gap is the business case.", "Go live or walk away."] },
];

export default function ShadowPilot() {
  return (
    <section id="shadow-pilot" className="py-24 md:py-32 bg-surface" aria-labelledby="pilot-heading">
      <div className="container-main">
        <div className="reveal text-center mb-16">
          <p className="font-mono text-[13px] text-accent font-semibold uppercase tracking-[0.08em] mb-4">Shadow pilot</p>
          <h2 id="pilot-heading" className="max-w-[500px] mx-auto mb-4">
            30 days. Your data. Zero risk.
          </h2>
          <p className="text-[17px] text-text-2 max-w-[560px] mx-auto">
            Shadow mode runs parallel to your pipeline — read-only. You see the proof. You decide.
          </p>
        </div>

        {/* Steps */}
        <div className="reveal max-w-[900px] mx-auto mb-14">
          {/* Desktop: horizontal with gradient connecting lines */}
          <div className="hidden md:grid grid-cols-3 gap-0 relative">
            {/* Connecting lines between step 1-2 and 2-3 */}
            <div className="absolute top-[28px] left-[16.67%] right-[16.67%] h-[1px] z-0" aria-hidden="true"
              style={{ background: "linear-gradient(to right, var(--color-accent), rgba(0,0,0,0.06))" }}
            />

            {steps.map((s) => (
              <div key={s.num} className="flex flex-col items-center text-center relative z-10 px-6">
                <div className="font-heading text-[48px] font-extrabold text-accent opacity-30 leading-none mb-3 select-none" aria-hidden="true">
                  {s.num}
                </div>
                <h3 className="text-[18px] font-bold mb-2">{s.title}</h3>
                {s.lines.map((line, i) => (
                  <p key={i} className="text-[14px] text-text-2 leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Mobile: vertical with dotted line */}
          <div className="md:hidden relative pl-14">
            <div className="absolute left-[18px] top-[24px] bottom-[24px] w-[2px] z-0" aria-hidden="true"
              style={{ backgroundImage: "repeating-linear-gradient(to bottom, var(--color-border) 0px, var(--color-border) 4px, transparent 4px, transparent 10px)" }}
            />
            {steps.map((s) => (
              <div key={s.num} className="relative mb-10 last:mb-0">
                <div className="absolute left-[-38px] font-heading text-[32px] font-extrabold text-accent opacity-30 leading-none select-none z-10" aria-hidden="true">
                  {s.num}
                </div>
                <h3 className="text-[18px] font-bold mb-1">{s.title}</h3>
                {s.lines.map((line, i) => (
                  <p key={i} className="text-[14px] text-text-2 leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="reveal flex justify-center">
          <a href="#cta" className="btn-primary">Join Shadow Pilot</a>
        </div>
      </div>
    </section>
  );
}
