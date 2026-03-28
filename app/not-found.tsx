import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="section-container text-center py-20">
        <p className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3">
          404
        </p>
        <h1 className="font-heading text-[36px] text-text leading-tight mb-4">
          Page not found
        </h1>
        <p className="text-[15px] text-text-secondary mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-text text-bg hover:bg-text/90 px-5 py-2.5 rounded-md text-[14px] font-medium transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
