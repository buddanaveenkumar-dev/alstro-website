import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg px-6 text-center">
      <span className="font-heading text-[18px] font-semibold text-text mb-16">
        ALSTRO<span className="text-accent">.</span>
      </span>
      <h1 className="text-[64px] md:text-[80px] font-semibold text-text mb-4 leading-none">404</h1>
      <p className="text-[18px] text-text-2 mb-2">This page doesn&apos;t exist.</p>
      <p className="text-[16px] text-text-3 mb-10">But your audit trail should.</p>
      <Link href="/" className="btn-primary">
        Back to Home
      </Link>
    </div>
  );
}
