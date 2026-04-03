const points = [
  "Policies evaluated by Alstro are configured and approved by the institution.",
  "Alstro supports policy evaluation, decision documentation, and workflow control. It does not make lending decisions.",
  "Alstro does not provide legal advice or legal opinions.",
  "Final lending, compliance, and legal responsibility remains with the financial institution.",
  "Alstro is a technology tool. It is designed to support — not replace — the institution\u2019s compliance and risk management functions.",
];

export default function Responsibility() {
  return (
    <section className="py-20 md:py-28 bg-surface" aria-labelledby="responsibility-heading">
      <div className="container-main">
        <p className="section-label reveal">Control and responsibility</p>
        <h2 id="responsibility-heading" className="reveal max-w-[520px] mb-10">
          Your institution retains full control and responsibility.
        </h2>

        <ul className="space-y-5 max-w-[600px]">
          {points.map((point, i) => (
            <li key={i} className="reveal flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-text-3 shrink-0 mt-[10px]" aria-hidden="true" />
              <span className="text-[15px] text-text-2 leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
