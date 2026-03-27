export default function Footer() {
  const founderEmail =
    process.env.NEXT_PUBLIC_FOUNDER_EMAIL || "founder@alstro.ai";

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1100px] px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="font-heading text-lg text-text-1">Alstro</span>
              <span className="text-[10px] font-mono text-text-3 border border-border rounded px-1.5 py-0.5 leading-none">
                alpha
              </span>
            </div>
            <p className="text-sm text-text-3">
              Compliance infrastructure for underwriting decisions.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm">
            <a
              href="#how-it-works"
              className="text-text-2 hover:text-text-1 transition-colors"
            >
              What it does
            </a>
            <a
              href="#agents"
              className="text-text-2 hover:text-text-1 transition-colors"
            >
              Agents
            </a>
            <a
              href="#early-access"
              className="text-text-2 hover:text-text-1 transition-colors"
            >
              For Lenders
            </a>
            <a
              href="#investors"
              className="text-text-2 hover:text-text-1 transition-colors"
            >
              Investors
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-3">
          <span>&copy; {new Date().getFullYear()} Alstro AI Inc.</span>
          <span className="font-mono">ECOA · FCRA · SR 11-7</span>
          <a
            href={`mailto:${founderEmail}`}
            className="hover:text-text-1 transition-colors"
          >
            {founderEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
