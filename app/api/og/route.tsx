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
            fontSize: "36px",
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
              fontSize: "56px",
              fontWeight: 700,
              margin: "0 0 24px 0",
              color: "#1A1D26",
              maxWidth: "900px",
              lineHeight: 1.15,
            }}
          >
            Decision Infrastructure for AI-Driven Lending
          </h1>
          <p
            style={{
              fontSize: "28px",
              color: "#4B5563",
              margin: "0",
              maxWidth: "800px",
            }}
          >
            API-based policy evaluation, decision documentation, and audit-ready logging.
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "60px",
            fontSize: "20px",
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
