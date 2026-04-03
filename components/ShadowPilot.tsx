const attributes = [
  { title: "Read-only operation", desc: "Shadow mode processes decision payloads in parallel. No production lending decisions are modified or affected." },
  { title: "Customer-controlled scope", desc: "The institution defines which decision types, models, and data are included. Scope is documented before initiation." },
  { title: "Defined evaluation period", desc: "Structured as a 30-day evaluation with documented entry criteria, milestones, and exit criteria." },
  { title: "No immediate production replacement", desc: "The pilot does not require changes to existing compliance processes or production systems during the evaluation." },
  { title: "Comparison outputs", desc: "Provides side-by-side reporting: current process outputs alongside Alstro-generated artifacts for direct evaluation." },
  { title: "Low operational disruption", desc: "API-based integration with structured onboarding support. Designed to minimize demands on internal engineering and compliance teams." },
];

export default function ShadowPilot() {
  return (
    <section id="shadow-pilot" className="py-20 md:py-28 bg-surface" aria-labelledby="pilot-heading">
      <div className="container-main">
        <p className="section-label reveal">Shadow pilot</p>
        <h2 id="pilot-heading" className="reveal max-w-[520px] mb-4">
          Evaluate on your terms, at your pace.
        </h2>
        <p className="reveal text-[15px] text-text-2 max-w-[580px] mb-12 leading-relaxed">
          The shadow pilot is a read-only evaluation period. Alstro processes decision payloads in parallel with your existing workflow and generates comparison outputs — without affecting production lending operations or requiring immediate process changes.
        </p>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-[720px]">
          {attributes.map((a, i) => (
            <div key={i} className="reveal">
              <h3 className="text-[15px] font-semibold mb-1">{a.title}</h3>
              <p className="text-[14px] text-text-2 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-12">
          <a href="#contact" className="btn-primary">Request Shadow Pilot</a>
        </div>
      </div>
    </section>
  );
}
