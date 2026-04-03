const items = [
  {
    title: "API-based decision control layer",
    desc: "Integrates between model output and downstream lending systems. Receives decision payloads, applies evaluation logic, and returns structured results.",
  },
  {
    title: "Policy evaluation before execution",
    desc: "Evaluates each decision against institution-configured policy rules before it reaches loan origination, adverse action, or servicing systems.",
  },
  {
    title: "Decision documentation and reason mapping",
    desc: "Generates structured decision artifacts including reason codes, policy evaluation results, and explanation support for adverse action workflows.",
  },
  {
    title: "Audit-ready logging",
    desc: "Writes immutable, timestamped records for each decision evaluation. Designed to support regulatory examination and internal audit requirements.",
  },
  {
    title: "Read-only shadow deployment",
    desc: "Available in shadow mode — operating in parallel with existing workflows without affecting production lending operations.",
  },
];

export default function WhatAlstroIs() {
  return (
    <section className="py-20 md:py-28 border-t border-border" aria-labelledby="what-heading">
      <div className="container-main">
        <p className="section-label reveal">What Alstro is</p>
        <h2 id="what-heading" className="reveal max-w-[560px] mb-12">
          A control layer for lending decision governance.
        </h2>

        <div className="space-y-8">
          {items.map((item, i) => (
            <div key={i} className="reveal flex gap-6 items-start max-w-[640px]">
              <div className="w-[3px] bg-border rounded-full shrink-0 self-stretch mt-1" aria-hidden="true" />
              <div>
                <h3 className="text-[16px] font-semibold mb-1">{item.title}</h3>
                <p className="text-[15px] text-text-2 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
