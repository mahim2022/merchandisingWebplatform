import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #ffffff 0%, #f4f7ff 100%)",
          color: "#111827",
          padding: "64px",
        }}
      >
        <div style={{ fontSize: 88, fontWeight: 800, letterSpacing: -1 }}>
          <span style={{ color: "#2563eb" }}>Source</span>Loom
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 40,
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          B2B Apparel Manufacturing Partner
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 26,
            color: "#4b5563",
            textAlign: "center",
          }}
        >
          Knit · Woven · Denim | U.S. · Canada · Australia · EU
        </div>
      </div>
    ),
    size
  );
}
