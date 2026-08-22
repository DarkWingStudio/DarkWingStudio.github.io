"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const groups = [
  {
    label: "Comfortable",
    sublabel: "Use regularly, build independently",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    color: "#f0f0f0",
  },
  {
    label: "Working Knowledge",
    sublabel: "Used in projects, some areas need docs",
    skills: ["Git", "GitHub", "Netlify", "Firebase", "Node.js ecosystem", "APIs / REST"],
    color: "#888",
  },
  {
    label: "Design",
    sublabel: "Applied in all frontend work",
    skills: ["Visual hierarchy", "Typography", "Responsive layouts", "Interaction design", "Motion"],
    color: "#666",
  },
  {
    label: "Exploring",
    sublabel: "Experiments, not production expertise",
    skills: ["Three.js", "WebGL", "Creative coding", "AI-assisted development", "Advanced animation"],
    color: "#444",
  },
];

export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="stack"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "clamp(60px, 10vw, 120px) 24px",
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "16px",
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
            (04)
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
            Tech Stack
          </h2>
        </div>

        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "14px",
            color: "#444",
            marginBottom: "64px",
            paddingLeft: "60px",
            letterSpacing: "0.02em",
          }}
        >
          Honest groupings — no fake percentages.
        </p>

        {/* Groups grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2px",
          }}
        >
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 + gi * 0.1 }}
              style={{
                padding: "32px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.04)",
                transition: "border-color 0.3s ease, background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.09)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.035)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
              }}
            >
              <div style={{ marginBottom: "24px" }}>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: group.color,
                    letterSpacing: "-0.02em",
                    marginBottom: "4px",
                  }}
                >
                  {group.label}
                </h3>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "11px",
                    color: "#333",
                    letterSpacing: "0.05em",
                  }}
                >
                  {group.sublabel}
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: group.color,
                        opacity: 0.4,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#666",
                        lineHeight: 1,
                      }}
                    >
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
