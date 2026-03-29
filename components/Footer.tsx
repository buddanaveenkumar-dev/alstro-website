export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="section-container py-10">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
          <div>
            <p className="font-heading text-[18px] text-text">Alstro</p>
            <p className="text-sm text-text-muted mt-1">
              Compliance infrastructure for underwriting decisions.
            </p>
            <p className="font-mono text-xs text-text-muted mt-3">
              &copy; {new Date().getFullYear()} Alstro AI Inc.
            </p>
          </div>
          <div className="text-left sm:text-right">
            <p className="font-mono text-xs text-text-muted">
              ECOA · FCRA · SR 11-7
            </p>
            <a
              href="mailto:naveen@alstro.ai"
              className="font-mono text-xs text-text-muted hover:text-text-secondary transition-colors mt-1 block"
            >
              naveen@alstro.ai
            </a>
            <p className="font-mono text-xs text-text-muted mt-3">
              US · Beta
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
