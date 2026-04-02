"use client";

export default function Problem() {
  return (
    <section className="py-24 md:py-32 bg-surface" aria-labelledby="problem-heading">
      <div className="container-main max-w-[720px]">
        <p className="reveal font-mono text-[13px] text-accent font-semibold uppercase tracking-[0.08em] mb-4">
          The problem
        </p>
        <h2 id="problem-heading" className="reveal mb-6">
          AI models deny credit in milliseconds. Proving compliance never catches up.
        </h2>
        <p className="reveal text-[17px] text-text-2 leading-relaxed">
          When regulators ask why a borrower was denied, most lenders reconstruct the answer manually — weeks later. Adverse action notices are boilerplate. Fair lending tests lag quarters behind model updates. No provable record exists at the point of decision.
        </p>
      </div>
    </section>
  );
}
