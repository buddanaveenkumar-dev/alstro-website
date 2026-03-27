export default function Footer() {
  const founderEmail =
    process.env.NEXT_PUBLIC_FOUNDER_EMAIL || "founder@alstro.ai";

  return (
    <footer className="border-t border-border">
      <div className="section-container py-10">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3">
            <span className="font-heading text-[16px] text-text">Alstro</span>
            <span className="text-[10px] font-mono text-accent bg-accent-light border border-accent/15 rounded px-1.5 py-[2px] leading-none uppercase tracking-wider">
              Alpha
            </span>
          </div>
          <div className="flex flex-wrap gap-6 text-[13px]">
            <a
              href="#decision-flow"
              className="text-text-muted hover:text-text transition-colors"
            >
              Product
            </a>
            <a
              href="#runtime"
              className="text-text-muted hover:text-text transition-colors"
            >
              Architecture
            </a>
            <a
              href="#alpha"
              className="text-text-muted hover:text-text transition-colors"
            >
              Alpha Program
            </a>
            <a
              href="#investors"
              className="text-text-muted hover:text-text transition-colors"
            >
              Investors
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-text-muted">
          <span>
            &copy; {new Date().getFullYear()} Alstro AI Inc.
          </span>
          <span className="font-mono">ECOA · FCRA · SR 11-7</span>
          <a
            href={`mailto:${founderEmail}`}
            className="hover:text-text transition-colors"
          >
            {founderEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
