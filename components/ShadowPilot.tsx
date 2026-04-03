"use client";

const steps = [
  { num: "01", title: "Receive", lines: ["Your system sends decision", "payloads to Alstro via API.", "Read-only."] },
  { num: "02", title: "Evaluate", lines: ["Alstro applies institution-", "configured policy checks and", "generates artifacts."] },
  { num: "03", title: "Compare", lines: ["Side-by-side reporting:", "your current outputs alongside", "Alstro-generated artifacts."] },
];

const tags = ["Read-only deployment", "Customer-controlled scope", "30-day defined period", "Low integration friction"];

export default function ShadowPilot() {
  return (
    <section id="shadow-pilot" className="py-24 md:py-32 bg-surface" aria-labelledby="pilot-heading">
      <div className="container-main">
        <div className="reveal text-center mb-16">
          <p className="section-label">Shadow pilot</p>
          <h2 id="pilot-heading" className="max-w-[520px] mx-auto mb-3">Evaluate Alstro on your own terms.</h2>
          <p className="text-[16px] text-text-2 max-w-[560px] mx-auto">Read-only. 30 days. Parallel to your pipeline. No production decisions affected.</p>
        </div>

        <div className="reveal max-w-[900px] mx-auto mb-12">
          {/* Desktop */}
          <div className="hidden md:grid grid-cols-3 gap-0 relative">
            <div className="absolute top-[28px] left-[16.67%] right-[16.67%] h-[1px] z-0" style={{ background: "linear-gradient(to right, var(--color-accent), var(--color-border))" }} aria-hidden="true" />
            {steps.map(s => (
              <div key={s.num} className="flex flex-col items-center text-center relative z-10 px-6">
                <div className="font-heading text-[48px] font-extrabold text-accent opacity-[0.2] leading-none mb-3 select-none" aria-hidden="true">{s.num}</div>
                <h3 className="text-[18px] font-bold mb-2">{s.title}</h3>
                {s.lines.map((l, i) => <p key={i} className="text-[14px] text-text-2 leading-relaxed">{l}</p>)}
              </div>
            ))}
          </div>
          {/* Mobile */}
          <div className="md:hidden relative pl-14">
            <div className="absolute left-[18px] top-[24px] bottom-[24px] w-[2px] z-0" style={{ backgroundImage: "repeating-linear-gradient(to bottom, var(--color-border) 0px, var(--color-border) 4px, transparent 4px, transparent 10px)" }} aria-hidden="true" />
            {steps.map(s => (
              <div key={s.num} className="relative mb-10 last:mb-0">
                <div className="absolute left-[-38px] font-heading text-[32px] font-extrabold text-accent opacity-[0.2] leading-none select-none z-10" aria-hidden="true">{s.num}</div>
                <h3 className="text-[18px] font-bold mb-1">{s.title}</h3>
                {s.lines.map((l, i) => <p key={i} className="text-[14px] text-text-2 leading-relaxed">{l}</p>)}
              </div>
            ))}
          </div>
        </div>

        <div className="reveal flex justify-center mb-8">
          <a href="#cta" className="btn-primary">Request Shadow Pilot</a>
        </div>
        <div className="reveal flex flex-wrap justify-center gap-3">
          {tags.map(t => <span key={t} className="font-mono text-[12px] text-text-3 border border-border rounded-full px-4 py-1.5">{t}</span>)}
        </div>
      </div>
    </section>
  );
}
