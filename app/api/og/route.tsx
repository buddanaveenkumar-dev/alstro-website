import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#FFFFFF",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "32px",
            fontWeight: 700,
            color: "#1A1D26",
            position: "absolute",
            top: "60px",
            left: "60px",
          }}
        >
          Alstro
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1
            style={{
              fontSize: "52px",
              fontWeight: 700,
              margin: "0 0 24px 0",
              color: "#1A1D26",
              maxWidth: "900px",
              lineHeight: 1.15,
            }}
          >
            Runtime Control for AI-Driven Lending Decisions
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "#4B5563",
              margin: "0",
              maxWidth: "800px",
              lineHeight: 1.5,
            }}
          >
            API-based policy evaluation, decision documentation, and audit-ready logging for regulated lending institutions.
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "60px",
            fontSize: "18px",
            color: "#9CA3AF",
          }}
        >
          alstro.ai
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
