import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg relative px-6 text-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <span className="font-heading text-[24px] font-bold text-text tracking-[0.05em] mb-12 relative z-10">ALSTRO<span className="text-accent ml-0.5">.</span></span>
      <h1 className="font-heading text-[64px] md:text-[80px] font-semibold text-text mb-6 relative z-10">404</h1>
      <p className="text-[18px] md:text-[20px] text-text-2 mb-10 max-w-[400px] relative z-10">
        This page doesn&apos;t exist. But your audit trail should.
      </p>
      <Link href="/" className="button-primary px-8 py-3.5 rounded-lg text-[15px] font-medium z-10 transition-transform hover:scale-105">
        Back to Home
      </Link>
    </div>
  );
}
