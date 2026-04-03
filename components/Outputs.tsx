const outputs = [
  "Policy evaluation result per decision",
  "Decision explanation and reason mapping support",
  "Adverse action notice support artifacts",
  "Append-only, timestamped audit log entry",
  "Replayable decision record",
  "Pilot summary and comparison outputs",
];

export default function Outputs() {
  return (
    <section className="py-20 md:py-28 border-t border-border" aria-labelledby="outputs-heading">
      <div className="container-main">
        <p className="section-label reveal">What the institution receives</p>
        <h2 id="outputs-heading" className="reveal max-w-[480px] mb-10">
          Structured outputs for each evaluated decision.
        </h2>

        <ul className="space-y-4 max-w-[560px]">
          {outputs.map((item, i) => (
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
