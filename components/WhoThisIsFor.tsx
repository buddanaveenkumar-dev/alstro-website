const audiences = [
  "AI-first lenders using automated or model-assisted underwriting",
  "Digital lending teams deploying scoring models into production workflows",
  "Embedded finance platforms originating or facilitating credit decisions",
  "Risk, compliance, and model governance functions requiring decision-level documentation and control",
];

export default function WhoThisIsFor() {
  return (
    <section className="py-20 md:py-28 bg-surface" aria-labelledby="audience-heading">
      <div className="container-main">
        <p className="section-label reveal">Who this is for</p>
        <h2 id="audience-heading" className="reveal max-w-[480px] mb-10">
          Built for institutions with AI in the lending path.
        </h2>

        <ul className="space-y-4 max-w-[600px]">
          {audiences.map((item, i) => (
            <li key={i} className="reveal flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-text-3 shrink-0 mt-[10px]" aria-hidden="true" />
              <span className="text-[15px] text-text-2 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
