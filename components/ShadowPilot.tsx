"use client";

const steps = [
  { num: "01", title: "Connect", lines: ["API integration.", "Read-only. No production changes."] },
  { num: "02", title: "Compare", lines: ["Side-by-side: your output", "vs. Alstro's. Model-specific notices, audit trails."] },
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
          {/* Desktop: horizontal */}
          <div className="hidden md:grid grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="absolute top-[28px] left-[16.67%] right-[16.67%] h-[2px] bg-border z-0" aria-hidden="true" />

            {steps.map((s) => (
              <div key={s.num} className="flex flex-col items-center text-center relative z-10">
                <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center font-mono text-[18px] font-bold shadow-[0_0_0_8px_var(--color-surface)] mb-5">
                  {s.num}
                </div>
                <h3 className="text-[18px] mb-2">{s.title}</h3>
                {s.lines.map((line, i) => (
                  <p key={i} className="text-[14px] text-text-2 leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="md:hidden relative pl-14">
            <div className="absolute left-[22px] top-[28px] bottom-[28px] w-[2px] bg-border z-0" aria-hidden="true" />
            {steps.map((s) => (
              <div key={s.num} className="relative mb-10 last:mb-0">
                <div className="absolute left-[-36px] w-[44px] h-[44px] rounded-full bg-accent text-white flex items-center justify-center font-mono text-[16px] font-bold shadow-[0_0_0_6px_var(--color-surface)] z-10">
                  {s.num}
                </div>
                <h3 className="text-[18px] mb-1">{s.title}</h3>
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
