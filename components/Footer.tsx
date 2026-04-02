export default function Footer() {
  return (
    <footer className="border-t border-border py-8" role="contentinfo">
      <div className="container-main">
        {/* Desktop: single row. Mobile: stacked */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-heading text-[16px] font-bold text-text tracking-wider">
              ALSTRO<span className="text-accent">.</span>
            </span>
            <span className="text-[13px] text-text-3">Institutional Compliance Layer</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[12px] text-text-3 font-mono">
            <p>&copy; {new Date().getFullYear()} Alstro AI</p>
            <a href="#" className="hover:text-text-2 transition-colors underline underline-offset-4 decoration-border">Privacy</a>
            <a href="#" className="hover:text-text-2 transition-colors underline underline-offset-4 decoration-border">Terms</a>
            <a href="mailto:sales@alstro.ai" className="hover:text-accent transition-colors">sales@alstro.ai</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
