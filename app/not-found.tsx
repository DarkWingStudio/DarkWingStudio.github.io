import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Not Found",
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#050505",
        color: "#f0f0f0",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          marginBottom: "32px",
        }}
      >
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(120px, 20vw, 240px)",
            fontWeight: 800,
            lineHeight: 1,
            color: "#9ca3af", // light grey for the 4
          }}
        >
          4
        </span>
        
        {/* Custom 0 shape matching the image */}
        <div style={{ 
          width: "clamp(100px, 16vw, 190px)", 
          height: "clamp(120px, 19vw, 230px)", 
          position: "relative" 
        }}>
          <svg viewBox="0 0 100 120" width="100%" height="100%">
            {/* Right dark half */}
            <path d="M50 0 C90 0, 100 30, 100 60 C100 90, 80 120, 50 120 Z" fill="#1f2937" />
            {/* Left lighter half */}
            <path d="M50 0 C10 0, 0 30, 0 60 C0 90, 20 120, 50 120 Z" fill="#374151" />
            
            {/* Exclamation mark */}
            <rect x="40" y="25" width="20" height="50" rx="10" fill="#050505" />
            <circle cx="50" cy="95" r="10" fill="#050505" />
          </svg>
        </div>

        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(120px, 20vw, 240px)",
            fontWeight: 800,
            lineHeight: 1,
            color: "#9ca3af", // light grey for the 4
          }}
        >
          4
        </span>
      </div>

      <h1
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(24px, 5vw, 36px)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: "16px",
        }}
      >
        Page not found
      </h1>
      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "16px",
          color: "#888",
          maxWidth: "400px",
          lineHeight: 1.6,
          marginBottom: "40px",
        }}
      >
        The Page you are looking for doesn't exist or an other error occurred. Go back, or head over to{" "}
        <Link href="/" style={{ color: "#f0f0f0", fontWeight: 600, textDecoration: "underline" }}>
          Home
        </Link>
      </p>
    </div>
  );
}
