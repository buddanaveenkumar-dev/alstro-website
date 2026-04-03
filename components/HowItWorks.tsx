const steps = [
  {
    num: "01",
    title: "Receive decision payload",
    desc: "Your lending system sends the model output and decision context to Alstro via API.",
  },
  {
    num: "02",
    title: "Evaluate configured policy checks",
    desc: "Alstro applies institution-defined policy rules to the decision — including fair lending checks, documentation requirements, and business logic constraints.",
  },
  {
    num: "03",
    title: "Generate decision artifacts",
    desc: "Produces structured outputs: policy evaluation results, reason mapping, explanation support data, and notice-ready artifacts.",
  },
  {
    num: "04",
    title: "Return results and write audit trail",
    desc: "Returns the evaluation to your system and writes a timestamped, immutable audit record of the decision and its evaluation.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-surface" aria-labelledby="how-heading">
      <div className="container-main">
        <p className="section-label reveal">How it works</p>
        <h2 id="how-heading" className="reveal max-w-[480px] mb-14">
          Four steps, one API call.
        </h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-[720px]">
          {steps.map((s) => (
            <div key={s.num} className="reveal">
              <span className="font-mono text-[12px] text-text-3 block mb-2">{s.num}</span>
              <h3 className="text-[16px] font-semibold mb-2">{s.title}</h3>
              <p className="text-[15px] text-text-2 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
