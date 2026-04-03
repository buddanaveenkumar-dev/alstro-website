"use client";
import { useEffect, useRef } from "react";
type P = { x: number; y: number; vx: number; vy: number; r: number; a: number };
export default function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const frame = useRef(0);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    let w = c.clientWidth, h = c.clientHeight;
    const dpr = window.devicePixelRatio || 1;
    c.width = w * dpr; c.height = h * dpr; ctx.scale(dpr, dpr);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ps: P[] = Array.from({ length: 35 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: reduced ? 0 : (Math.random() - 0.5) * 0.3,
      vy: reduced ? 0 : (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.2 + 0.3, a: Math.random() * 0.08 + 0.02,
    }));
    const render = () => {
      ctx.clearRect(0, 0, w, h);
      ps.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,201,139,${p.a * 0.5})`; ctx.fill();
      });
      if (!reduced) frame.current = requestAnimationFrame(render);
    };
    render();
    const onResize = () => { w = c.clientWidth; h = c.clientHeight; c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(frame.current); window.removeEventListener("resize", onResize); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" />;
}
