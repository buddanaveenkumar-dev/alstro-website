export default function Footer() {
  return (
    <footer className="border-t border-border py-10" role="contentinfo">
      <div className="container-main space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="font-heading text-[16px] font-bold text-text">Alstro</span>
            <span className="text-[13px] text-text-3 ml-3">Decision Infrastructure for AI-Driven Lending</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[13px] text-text-3">
            <a href="mailto:sales@alstro.ai" className="hover:text-text transition-colors">sales@alstro.ai</a>
            <a href="#" className="hover:text-text transition-colors underline underline-offset-4 decoration-border">Privacy Policy</a>
            <a href="#" className="hover:text-text transition-colors underline underline-offset-4 decoration-border">Terms of Service</a>
          </div>
        </div>

        <div className="text-[11px] text-text-3 leading-relaxed max-w-[720px] space-y-3">
          <p>
            Alstro provides technology infrastructure for decision evaluation, documentation, and audit support. Alstro does not provide legal advice, legal opinions, or compliance certifications. Use of Alstro does not constitute compliance with any regulation.
          </p>
          <p>
            Final responsibility for lending decisions, regulatory compliance, and legal obligations remains with the financial institution. Policies evaluated by Alstro are configured and approved by the customer. Alstro&apos;s outputs are informational and operational — they are not legal determinations.
          </p>
          <p>&copy; {new Date().getFullYear()} Alstro AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
