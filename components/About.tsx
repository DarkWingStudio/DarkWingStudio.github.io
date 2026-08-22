"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const traits = [
  {
    label: "Builder",
    text: "I learn by building. Instead of keeping ideas as tutorial exercises, I turn them into small products, experiments, and interfaces that can be tested and improved.",
  },
  {
    label: "Detail-oriented",
    text: "I notice the small things first — inconsistent spacing, awkward transitions, layouts that break on mobile, or a button that doesn't behave the way someone expects.",
  },
  {
    label: "Design-aware",
    text: "Frontend work isn't just \"make the design file into HTML.\" The interface itself is part of the engineering problem.",
  },
  {
    label: "Iterative",
    text: "A first implementation is never automatically the final one. Projects are expected to evolve. That's not a bug — that's how good software gets made.",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
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
        {/* Section label */}
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
            (03)
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
            About
          </h2>
        </div>

        {/* Two-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "clamp(40px, 8vw, 80px)",
            alignItems: "start",
          }}
        >
          {/* Left: intro text & image */}
          <div>
            <div style={{ marginBottom: "32px", borderRadius: "16px", overflow: "hidden", position: "relative", width: "120px", height: "120px", border: "1px solid rgba(255,255,255,0.1)" }}>
              <Image 
                src="/profile.png" 
                alt="Rohit Kumar" 
                fill 
                style={{ objectFit: "cover" }} 
              />
            </div>

            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(18px, 2.5vw, 24px)",
                fontWeight: 400,
                color: "#888",
                lineHeight: 1.65,
                marginBottom: "32px",
              }}
            >
              I&rsquo;m Rohit Kumar, a student and frontend developer focused on learning how good websites are actually designed and built.
            </p>

            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                color: "#555",
                lineHeight: 1.75,
                marginBottom: "32px",
              }}
            >
              My interest sits somewhere between engineering and visual design: I like writing the code behind an interface, but I also care about hierarchy, spacing, typography, motion, responsiveness, performance, and the way a real person experiences the finished product.
            </p>

            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                color: "#555",
                lineHeight: 1.75,
                marginBottom: "48px",
              }}
            >
              I&rsquo;m currently completing a BCA while building projects, exploring 3D web experiences, creative coding, and AI-assisted development. My goal isn&rsquo;t simply to make websites that look good in a screenshot.
            </p>

            {/* Quick facts */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {[
                ["Education", "Bachelor of Computer Applications (BCA) · In Progress"],
                ["Location", "India · Available for remote opportunities"],
                ["GitHub", "github.com/DarkWingStudio"],
                ["Email", "darkwingdomain@gmail.com"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    gap: "24px",
                    alignItems: "baseline",
                    paddingBottom: "16px",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "11px",
                      fontWeight: 500,
                      color: "#333",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      minWidth: "90px",
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "14px",
                      color: "#666",
                      wordBreak: "break-word",
                      overflowWrap: "anywhere",
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: working traits */}
          <div>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                color: "#333",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "32px",
              }}
            >
              How I work
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {traits.map((trait, i) => (
                <motion.div
                  key={trait.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.1 }}
                >
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#f0f0f0",
                      letterSpacing: "-0.02em",
                      marginBottom: "8px",
                    }}
                  >
                    {trait.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "14px",
                      color: "#555",
                      lineHeight: 1.7,
                    }}
                  >
                    {trait.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Quote callout */}
            <div
              style={{
                marginTop: "48px",
                padding: "24px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "16px",
                borderLeft: "2px solid rgba(255,255,255,0.15)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#888",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.4,
                }}
              >
                &ldquo;I learn best by building. When I encounter a concept I don&rsquo;t understand, I turn it into a small experiment and use the result to understand the underlying idea.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
