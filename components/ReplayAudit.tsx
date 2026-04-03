export default function ReplayAudit() {
  return (
    <section className="py-20 md:py-28 border-t border-border" aria-labelledby="replay-heading">
      <div className="container-main">
        <p className="section-label reveal">Replay and audit support</p>
        <h2 id="replay-heading" className="reveal max-w-[520px] mb-6">
          Reproduce prior evaluations for audit and review.
        </h2>

        <div className="max-w-[600px] space-y-5">
          <p className="reveal text-[15px] text-text-2 leading-relaxed">
            Alstro stores the inputs, policy configuration version, and evaluation logic used for each decision. This allows prior evaluations to be reproduced using the same parameters — supporting audit review, dispute investigation, and internal model governance processes.
          </p>
          <p className="reveal text-[15px] text-text-2 leading-relaxed">
            All records are maintained as append-only, timestamped entries designed for regulatory examination and internal audit requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
