"use client";

const steps = [
  { num: "01", title: "Connect", desc: "Point your underwriting pipeline to Alstro via API. Your production flow continues unchanged. Read-only integration." },
  { num: "02", title: "Compare", desc: "For every denial, see side-by-side: your current output vs. what Alstro generates — model-specific notices, audit records, policy checks." },
  { num: "03", title: "Decide", desc: "The gap between your current process and Alstro's output is the business case. Go live — or walk away with zero downside." },
];

export default function ShadowPilot() {
  return (
    <section id="shadow-pilot" className="py-[100px] max-md:py-[60px] bg-bg" aria-labelledby="shadow-heading">
      <div className="container-main">
        <div className="reveal text-center mb-16">
          <p className="font-mono text-[13px] text-accent font-semibold uppercase tracking-[0.08em] mb-4">Shadow validation</p>
          <h2 id="shadow-heading" className="max-w-[700px] mx-auto mb-4">
            See proof on your actual decisions — before committing.
          </h2>
          <p className="text-[17px] text-text-2 max-w-[640px] mx-auto">
            Shadow mode runs in parallel with your existing pipeline. Zero production impact. 30 days. You see the output. You decide with data.
          </p>
        </div>

        {/* Stepper */}
        <div className="reveal max-w-[1000px] mx-auto mb-16 relative">

          {/* Desktop: horizontal stepper */}
          <div className="hidden md:grid grid-cols-3 gap-0 relative">
            {/* Connecting line behind circles */}
            <div className="absolute top-[24px] left-[calc(16.67%)] right-[calc(16.67%)] h-[2px] bg-border z-0" aria-hidden="true" />

            {steps.map((s) => (
              <div key={s.num} className="flex flex-col items-center text-center relative z-10 px-4">
                <div className="w-[48px] h-[48px] rounded-full bg-accent text-white flex items-center justify-center font-mono text-[16px] font-bold shadow-[0_0_0_8px_white] mb-6">
                  {s.num}
                </div>
                <h3 className="text-[20px] mb-2">{s.title}</h3>
                <p className="text-[15px] text-text-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile: vertical stepper */}
          <div className="md:hidden relative pl-14">
            {/* Vertical line */}
            <div className="absolute left-[20px] top-[24px] bottom-[24px] w-[2px] bg-border z-0" aria-hidden="true" />

            {steps.map((s) => (
              <div key={s.num} className="relative mb-10 last:mb-0">
                <div className="absolute left-[-34px] w-[40px] h-[40px] rounded-full bg-accent text-white flex items-center justify-center font-mono text-[14px] font-bold shadow-[0_0_0_6px_white] z-10">
                  {s.num}
                </div>
                <h3 className="text-[18px] mb-1">{s.title}</h3>
                <p className="text-[15px] text-text-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Shadow Mode Works — Callout */}
        <div className="reveal max-w-[800px] mx-auto bg-accent-light p-8 rounded-xl border-l-[3px] border-l-accent mb-12">
          <p className="text-[17px] text-text leading-relaxed">
            <span className="font-semibold">Why shadow mode works:</span>{" "}
            Compliance buyers do not replace processes without evidence. Shadow mode generates the exact mathematical evidence on your own data. That is why it converts every single time.
          </p>
        </div>

        {/* CTA — links to form, NOT mailto */}
        <div className="reveal flex justify-center">
          <a href="#cta" className="btn-primary">
            Apply for Shadow Pilot
          </a>
        </div>
      </div>
    </section>
  );
}
