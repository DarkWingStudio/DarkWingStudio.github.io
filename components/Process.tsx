"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const capabilities = [
  {
    number: "01",
    title: "Frontend Engineering",
    text: "Responsive, accessible interfaces built with React, modern CSS, and a strong eye for the structure underneath the visual layer. Performance and maintainability are part of the brief — not afterthoughts.",
  },
  {
    number: "02",
    title: "Interaction & Motion",
    text: "Animation that communicates rather than decorates. Entrance reveals, state transitions, hover feedback, and subtle motion that makes an interface feel alive — while respecting reduced-motion preferences.",
  },
  {
    number: "03",
    title: "Design Thinking",
    text: "Hierarchy, spacing, typography, contrast, and component consistency. A technically correct interface can still feel confusing or unfinished. I care about both the code and how someone experiences the result.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 24px 120px",
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "64px",
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              color: "#333",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            (05)
          </span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              color: "#f0f0f0",
              letterSpacing: "-0.03em",
            }}
          >
            What I Bring
          </h2>
        </div>

        {/* Capabilities */}
        <div>
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
              style={{
                display: "grid",
                gridTemplateColumns: "48px 1fr auto",
                gap: "24px",
                alignItems: "start",
                padding: "32px 0",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                cursor: "default",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#2a2a2a",
                  letterSpacing: "0.1em",
                  paddingTop: "4px",
                }}
              >
                {cap.number}
              </span>

              <div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(20px, 3vw, 32px)",
                    fontWeight: 800,
                    color: "#f0f0f0",
                    letterSpacing: "-0.02em",
                    marginBottom: "12px",
                  }}
                >
                  {cap.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "15px",
                    color: "#555",
                    lineHeight: 1.7,
                    maxWidth: "580px",
                  }}
                >
                  {cap.text}
                </p>
              </div>

              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "20px",
                  color: "#222",
                  fontWeight: 800,
                  paddingTop: "2px",
                  transition: "color 0.3s ease",
                }}
                className="cap-arrow"
              >
                ↗
              </span>
            </motion.div>
          ))}
          {/* Final border */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
        </div>
      </motion.div>
    </section>
  );
}
