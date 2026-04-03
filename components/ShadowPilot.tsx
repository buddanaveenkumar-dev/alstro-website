const attributes = [
  { title: "Read-only", desc: "Shadow mode operates in parallel with your existing pipeline. No production decisions are affected." },
  { title: "Customer-controlled scope", desc: "The institution defines which decision types, models, and data are included in the pilot." },
  { title: "Limited engagement", desc: "Designed as a 30-day evaluation period with defined entry and exit criteria." },
  { title: "Parallel operation", desc: "Runs alongside current workflows. No immediate replacement of existing compliance processes required." },
  { title: "Comparison outputs", desc: "Provides side-by-side reporting: your current process outputs alongside Alstro-generated artifacts." },
  { title: "Low integration friction", desc: "API-based integration with structured onboarding support. Read-only pilot structure designed to minimize operational disruption." },
];

export default function ShadowPilot() {
  return (
    <section id="shadow-pilot" className="py-20 md:py-28 bg-surface" aria-labelledby="pilot-heading">
      <div className="container-main">
        <p className="section-label reveal">Shadow pilot</p>
        <h2 id="pilot-heading" className="reveal max-w-[520px] mb-4">
          Evaluate Alstro on your own terms.
        </h2>
        <p className="reveal text-[15px] text-text-2 max-w-[560px] mb-12 leading-relaxed">
          The shadow pilot is a read-only evaluation period. Alstro processes your decision payloads in parallel and generates comparison outputs — without affecting production lending operations.
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
