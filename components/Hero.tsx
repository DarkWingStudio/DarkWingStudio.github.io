"use client";

import type { Variants } from "framer-motion";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "120px 24px 80px",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow — contained so it never causes overflow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "min(500px, 80vw)",
          height: "min(500px, 80vw)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.018) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Name */}
        <motion.p
          variants={item}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(13px, 1.5vw, 16px)",
            fontWeight: 500,
            color: "#555",
            marginBottom: "12px",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Rohit Kumar
        </motion.p>

        {/* Main heading */}
        <motion.h1
          variants={item}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(36px, 8.5vw, 110px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: "1.1",
            color: "#f0f0f0",
            marginBottom: "48px",
          }}
        >
          Frontend
          <br />
          <span style={{ color: "#444" }}>Developer</span>
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #f0f0f0 0%, #555 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            & Creative
          </span>
          <br />
          <span style={{ color: "#2a2a2a" }}>Technologist</span>
        </motion.h1>

        {/* Bottom row */}
        <motion.div
          variants={item}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          {/* Tagline */}
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(14px, 2vw, 18px)",
              fontWeight: 400,
              color: "#666",
              maxWidth: "420px",
              lineHeight: 1.6,
            }}
          >
            I build thoughtful web interfaces where design, interaction, and code work together.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("work");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              style={{
                padding: "14px 28px",
                background: "#f0f0f0",
                color: "#050505",
                borderRadius: "999px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.02em",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "background 0.2s ease, transform 0.2s ease",
                cursor: "pointer",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#f0f0f0";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              View my work <span>↓</span>
            </a>

            <a
              href="https://github.com/DarkWingStudio"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "14px 28px",
                background: "transparent",
                color: "#888",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "999px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.02em",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "color 0.2s ease, border-color 0.2s ease, transform 0.2s ease",
                cursor: "pointer",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#f0f0f0";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#888";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              GitHub ↗
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "48px",
            background: "linear-gradient(to bottom, #444, transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
