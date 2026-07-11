import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = {
  width: 1200,
  height: 630,
};

export const ogContentType = "image/png";

export const ogAlt = "Dat Do — Frontend Developer";

/**
 * Variable fonts (Satoshi/Cabinet) are incompatible with Satori.
 * Geist ships with next/og and matches the site’s clean geometric sans look.
 */
async function loadFonts() {
  const geist = await readFile(
    join(
      process.cwd(),
      "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf",
    ),
  );

  return [
    { name: "Geist", data: geist, style: "normal" as const, weight: 400 as const },
    { name: "Geist", data: geist, style: "normal" as const, weight: 500 as const },
    { name: "Geist", data: geist, style: "normal" as const, weight: 700 as const },
  ];
}

export async function generateOgImage() {
  const fonts = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "#ffffff",
          overflow: "hidden",
          fontFamily: "Geist",
        }}
      >
        {/* Grid */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Lime glow — top left */}
        <div
          style={{
            position: "absolute",
            top: -80,
            left: -60,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "rgba(219, 244, 167, 0.45)",
            display: "flex",
          }}
        />

        {/* Soft green glow — right */}
        <div
          style={{
            position: "absolute",
            top: 120,
            right: -100,
            width: 380,
            height: 380,
            borderRadius: 9999,
            background: "rgba(27, 67, 50, 0.08)",
            display: "flex",
          }}
        />

        {/* Corner marks */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            width: 28,
            height: 28,
            borderTop: "2px solid rgba(10, 22, 41, 0.15)",
            borderLeft: "2px solid rgba(10, 22, 41, 0.15)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 40,
            width: 28,
            height: 28,
            borderTop: "2px solid rgba(10, 22, 41, 0.15)",
            borderRight: "2px solid rgba(10, 22, 41, 0.15)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 40,
            width: 28,
            height: 28,
            borderBottom: "2px solid rgba(10, 22, 41, 0.15)",
            borderLeft: "2px solid rgba(10, 22, 41, 0.15)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            width: 28,
            height: 28,
            borderBottom: "2px solid rgba(10, 22, 41, 0.15)",
            borderRight: "2px solid rgba(10, 22, 41, 0.15)",
            display: "flex",
          }}
        />

        {/* DD badge */}
        <div
          style={{
            position: "absolute",
            top: 48,
            left: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 52,
            height: 52,
            borderRadius: 9999,
            background: "#0a1629",
            color: "#dbf4a7",
            fontSize: 16,
            fontWeight: 500,
            letterSpacing: "0.06em",
          }}
        >
          DD
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 28,
            padding: "0 80px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: "0.18em",
              color: "#6b7280",
              textTransform: "uppercase",
            }}
          >
            Frontend Developer · Vietnam
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 96,
                  fontWeight: 700,
                  lineHeight: 1.05,
                  color: "#0a1629",
                  letterSpacing: "-0.03em",
                }}
              >
                Dat Do
              </div>
              <div
                style={{
                  display: "flex",
                  width: 340,
                  height: 10,
                  marginTop: -4,
                  borderRadius: 9999,
                  background: "rgba(219, 244, 167, 0.85)",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 42,
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#1b4332",
                letterSpacing: "-0.02em",
              }}
            >
              Turning ideas into reality
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginTop: 12,
              padding: "18px 36px",
              borderRadius: 9999,
              background: "#0a1629",
              border: "1px solid rgba(27, 67, 50, 0.2)",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 10,
                height: 10,
                borderRadius: 9999,
                background: "#dbf4a7",
              }}
            />
            <div
              style={{
                display: "flex",
                fontSize: 24,
                fontWeight: 500,
                color: "#c8e98a",
              }}
            >
              Open for opportunity
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                color: "#dbf4a7",
                marginLeft: 4,
              }}
            >
              ↗
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts,
    },
  );
}
