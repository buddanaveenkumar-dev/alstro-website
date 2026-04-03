export default function Footer() {
  return (
    <footer className="border-t border-border py-10" role="contentinfo">
      <div className="container-main space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-heading text-[16px] font-bold text-text tracking-wider">ALSTRO<span className="text-accent">.</span></span>
            <span className="text-[13px] text-text-3">Decision Infrastructure for AI-Driven Lending</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[13px] text-text-3 font-mono">
            <p>&copy; {new Date().getFullYear()} Alstro AI</p>
            <a href="#" className="hover:text-text-2 transition-colors underline underline-offset-4 decoration-border">Privacy</a>
            <a href="#" className="hover:text-text-2 transition-colors underline underline-offset-4 decoration-border">Terms</a>
            <a href="mailto:sales@alstro.ai" className="hover:text-accent transition-colors">sales@alstro.ai</a>
          </div>
        </div>
        <p className="text-[11px] text-text-3 leading-relaxed max-w-[680px]">
          Alstro provides technology infrastructure for decision evaluation, documentation, and audit support. Alstro does not provide legal advice, legal opinions, or compliance certifications. Final responsibility for lending decisions, regulatory compliance, and legal obligations remains with the financial institution.
        </p>
      </div>
    </footer>
  );
}
