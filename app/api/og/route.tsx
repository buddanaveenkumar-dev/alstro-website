import { ImageResponse } from "next/og";
export const runtime = "edge";
export async function GET() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", background: "#07090F", fontFamily: "system-ui, sans-serif", padding: "60px" }}>
        <div style={{ display: "flex", fontSize: "36px", fontWeight: 700, color: "#F0F2F5", position: "absolute", top: "60px", left: "60px" }}>ALSTRO<span style={{ color: "#00E5A0" }}>.</span></div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ fontSize: "56px", fontWeight: 700, margin: "0 0 24px", color: "#F0F2F5", maxWidth: "900px", lineHeight: 1.15 }}>Decision Infrastructure for AI-Driven Lending</h1>
          <p style={{ fontSize: "24px", color: "#8B93A1", margin: "0", maxWidth: "800px", lineHeight: 1.5 }}>API-based policy evaluation, decision documentation, and audit-ready logging.</p>
        </div>
        <div style={{ position: "absolute", bottom: "60px", left: "60px", right: "60px", height: "2px", background: "#00E5A0", opacity: 0.15 }} />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
