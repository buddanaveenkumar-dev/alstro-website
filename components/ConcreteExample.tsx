const steps = [
  { label: "Decision received", detail: "Applicant ID 4821 \u00b7 Model output: Deny \u00b7 Score: 612 \u00b7 Model: LR-v2.4" },
  { label: "Policy check evaluated", detail: "ECOA adverse action documentation required \u00b7 Reason code mapping initiated \u00b7 Fair lending flag: none" },
  { label: "Output generated", detail: "Structured reason codes \u00b7 Notice support artifact \u00b7 Policy evaluation: pass" },
  { label: "Audit record written", detail: "Append-only log entry \u00b7 Timestamped \u00b7 Inputs, policy version, and evaluation result stored for replay" },
];

export default function ConcreteExample() {
  return (
    <section className="py-20 md:py-28 bg-surface" aria-labelledby="example-heading">
      <div className="container-main">
        <p className="section-label reveal">Example</p>
        <h2 id="example-heading" className="reveal max-w-[480px] mb-10">
          What a single evaluation looks like.
        </h2>

        <div className="max-w-[600px] space-y-6">
          {steps.map((step, i) => (
            <div key={i} className="reveal flex gap-5 items-start">
              <div className="shrink-0 w-6 h-6 rounded-full border border-border bg-white flex items-center justify-center mt-0.5">
                <span className="font-mono text-[11px] text-text-3">{i + 1}</span>
              </div>
              <div>
                <p className="text-[15px] font-semibold text-text mb-0.5">{step.label}</p>
                <p className="text-[13px] font-mono text-text-3 leading-relaxed">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
