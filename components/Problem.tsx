"use client";

const cards = [
  { num: "01", title: "Adverse action notices are non-compliant", body: "CFPB Circular 2023-03 requires model-specific explanations. Most lenders still send boilerplate. Every AI denial is potentially non-compliant.", ref: "CFPB Circular 2023-03", accent: "border-l-red" },
  { num: "02", title: "Fair lending tests lag 89 days behind models", body: "Models update monthly. Tests run quarterly. Disparate impact builds undetected across protected classes.", ref: "ECOA · Reg B", accent: "border-l-amber" },
  { num: "03", title: "Model governance is 6–18 months behind", body: "SR 11-7 requires 40–60 hours of documentation per model change. Most teams never catch up.", ref: "Fed SR 11-7 · OCC 2011-12", accent: "border-l-amber" },
  { num: "04", title: "No provable record exists", body: "When disputes arrive, lenders reconstruct manually. This is the #1 reason they lose FCRA cases.", ref: "FCRA §611", accent: "border-l-red" },
];

export default function Problem() {
  return (
    <section id="problem" className="py-[100px] max-md:py-[60px] bg-bg" aria-labelledby="problem-heading">
      <div className="container-main">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="font-mono text-[13px] text-accent font-semibold uppercase tracking-[0.08em] mb-4">The structural problem</p>
          <h2 id="problem-heading" className="max-w-[700px] mb-4">
            Lenders can execute AI decisions. They cannot prove those decisions were correct.
          </h2>
          <p className="text-[17px] text-text-2 max-w-[600px]">
            When an AI model denies credit, four things fail simultaneously. No lender handles all four correctly.
          </p>
        </div>

        {/* 2×2 Grid — equal heights enforced by grid stretch */}
        <div className="grid md:grid-cols-2 gap-6 reveal-stagger" style={{ gridAutoRows: '1fr' }}>
          {cards.map((c) => (
            <div
              key={c.num}
              className={`reveal card border-l-4 ${c.accent} relative overflow-hidden flex flex-col justify-between min-h-[240px] group`}
            >
              {/* Watermark number — hidden on mobile */}
              <div className="absolute top-3 right-4 text-[72px] font-heading font-semibold text-text opacity-[0.04] select-none pointer-events-none leading-none z-0 hidden md:block" aria-hidden="true">
                {c.num}
              </div>

              <div className="relative z-[1] mb-6">
                <h3 className="mb-3 pr-12 md:pr-16">{c.title}</h3>
                <p className="text-text-2">{c.body}</p>
              </div>

              <div className="relative z-[1] mt-auto">
                <span className="inline-block font-mono text-[12px] text-accent bg-accent-light px-3 py-1.5 rounded whitespace-normal">
                  {c.ref}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
