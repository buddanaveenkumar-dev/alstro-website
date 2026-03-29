export default function Footer() {
  const founderEmail = process.env.NEXT_PUBLIC_FOUNDER_EMAIL || "naveen@alstro.ai";

  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[11px] text-text-muted">
          &copy; {new Date().getFullYear()} Alstro AI Inc.
        </p>
        <a href={`mailto:${founderEmail}`} className="font-mono text-[11px] text-text-muted hover:text-text transition-colors">
          {founderEmail}
        </a>
        <p className="font-mono text-[11px] text-text-muted">
          alstro.ai
        </p>
      </div>
    </footer>
  );
}
