import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#07090F',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '48px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: '40px',
            fontWeight: 700,
            color: '#F0F2F5',
            marginBottom: '48px',
            position: 'absolute',
            top: '48px',
            left: '48px',
          }}
        >
          ALSTRO<span style={{ color: '#00E5A0' }}>.</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 700,
              margin: '0 0 24px 0',
              color: '#F0F2F5',
              maxWidth: '1000px',
              lineHeight: 1.1,
            }}
          >
            Provable AI Lending Decisions
          </h1>
          <p
            style={{
              fontSize: '40px',
              color: '#8B93A1',
              margin: '0 0 32px 0',
              maxWidth: '900px',
            }}
          >
            Cryptographic proof of compliance for every decision.
          </p>
          <p
            style={{
              fontSize: '28px',
              color: '#4A5168',
              margin: '0',
            }}
          >
            Pre-execution enforcement for ECOA, FCRA, SR 11-7
          </p>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            width: 'calc(100% - 96px)',
            height: '2px',
            background: '#00E5A0',
            opacity: 0.2,
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
