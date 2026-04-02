"use client";

export default function Platforms() {
  return (
    <section id="platforms" className="py-[100px] max-md:py-[60px] bg-bg" aria-labelledby="platforms-heading">
      <div className="container-main">
        <div className="reveal text-center mb-16">
          <p className="font-mono text-[13px] text-accent font-semibold uppercase tracking-[0.08em] mb-4">For platform partners</p>
          <h2 id="platforms-heading" className="max-w-[700px] mx-auto mb-4">
            The compliance runtime your FSI product is missing.
          </h2>
          <p className="text-[17px] text-text-2 max-w-[640px] mx-auto">
            Salesforce Financial Services Cloud, Microsoft Azure FSI, ServiceNow FSO, and nCino all sell AI-assisted lending workflows into regulated institutions. Every enterprise deal hits the same wall.
          </p>
        </div>

        {/* Platform logo row */}
        <div className="reveal mb-16">
          <p className="font-mono text-[13px] text-text-3 uppercase tracking-[0.08em] text-center mb-8 font-medium">Designed to integrate with</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
            {["Salesforce FSC", "Microsoft Azure FSI", "ServiceNow FSO", "nCino"].map((name) => (
              <span key={name} className="font-heading text-[18px] md:text-[22px] font-bold text-text-3 opacity-40 hover:opacity-80 transition-opacity duration-300 cursor-default select-none">
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Blockquote */}
        <div className="reveal max-w-[700px] mx-auto text-center mb-16 relative">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[80px] leading-none text-accent opacity-[0.08] font-serif select-none pointer-events-none" aria-hidden="true">&ldquo;</span>
          <p className="text-[24px] md:text-[28px] text-text font-medium italic leading-relaxed relative z-10">
            &ldquo;How does your AI handle ECOA adverse action requirements?&rdquo;
          </p>
          <p className="text-[17px] text-text-2 mt-6">
            <span className="text-text font-semibold">Alstro is the answer.</span> One runtime integration delivers compliance enforcement to every lender on your platform.
          </p>
        </div>

        {/* Three capability cards */}
        <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
          <div className="reveal card">
            <h3 className="text-[18px] mb-3">One integration, every lender</h3>
            <p className="text-[15px] text-text-2 leading-relaxed">Embed once. Every lender on your platform gets provable compliance automatically.</p>
          </div>

          <div className="reveal card">
            <h3 className="text-[18px] mb-3">Jurisdiction-agnostic runtime</h3>
            <p className="text-[15px] text-text-2 leading-relaxed mb-4">One integration covers global operations.</p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-[12px] font-mono bg-green-light text-green px-2.5 py-1 rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-green" aria-hidden="true" />US Pack · Live
              </span>
              <span className="inline-flex items-center gap-1.5 text-[12px] font-mono bg-[#F7F8FA] text-text-3 px-2.5 py-1 rounded border border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-text-3" aria-hidden="true" />UK Pack · In design
              </span>
              <span className="inline-flex items-center gap-1.5 text-[12px] font-mono bg-[#F7F8FA] text-text-3 px-2.5 py-1 rounded border border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-text-3" aria-hidden="true" />EU Pack · In design
              </span>
            </div>
          </div>

          <div className="reveal card">
            <h3 className="text-[18px] mb-3">Model-agnostic API</h3>
            <p className="text-[15px] text-text-2 leading-relaxed">Works on top of FICO, gradient boosted trees, logistic regression, internal scorecards — without model access or replacement.</p>
          </div>
        </div>

        {/* "Not a partnership pitch" callout */}
        <div className="reveal mt-8 text-center">
          <p className="font-mono text-[12px] text-text-3 uppercase tracking-[0.05em] font-medium p-4 bg-[#F7F8FA] rounded-lg border border-border inline-block">
            This is not a partnership pitch. It is a capability gap that drives acquisition.
          </p>
        </div>
      </div>
    </section>
  );
}
