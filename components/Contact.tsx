"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const socials = [
  { 
    label: "GitHub", 
    href: "https://github.com/DarkWingStudio",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    )
  },
  { 
    label: "Twitter / X", 
    href: "https://x.com/Darkwingstudio",
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
  { 
    label: "Pinterest", 
    href: "https://pinterest.com/DarkWingstudio",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345l-.288 1.148c-.05.204-.166.248-.373.151-1.389-.643-2.254-2.614-2.254-4.204 0-3.422 2.486-6.557 7.159-6.557 3.754 0 6.671 2.673 6.671 6.236 0 3.733-2.353 6.736-5.619 6.736-1.098 0-2.13-.57-2.483-1.243l-.678 2.581c-.244.929-.906 2.086-1.353 2.793 1.111.34 2.296.521 3.526.521 6.621 0 11.988-5.367 11.988-11.987C24.004 5.367 18.638 0 12.017 0z" />
      </svg>
    )
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        padding: "clamp(60px, 10vw, 120px) 24px",
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "48px",
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
            (06)
          </span>
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
            Have a good idea?
          </span>
        </div>

        {/* Big heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(48px, 10vw, 140px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            color: "#f0f0f0",
            marginBottom: "48px",
          }}
        >
          Let&rsquo;s make
          <br />
          <span style={{ color: "#333" }}>it real.</span>
        </motion.h2>

        {/* Availability note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "15px",
            color: "#555",
            maxWidth: "480px",
            lineHeight: 1.7,
            marginBottom: "56px",
          }}
        >
          I&rsquo;m interested in frontend development opportunities where I can contribute to real products, learn from experienced developers, and continue improving my understanding of production-quality web development. Open to internships, freelance work, and collaborative projects.
        </motion.p>

        {/* Email */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          href="mailto:darkwingdomain@gmail.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "16px",
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(20px, 3vw, 36px)",
            fontWeight: 700,
            color: "#888",
            letterSpacing: "-0.02em",
            marginBottom: "72px",
            transition: "color 0.3s ease",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f0")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
        >
          darkwingdomain@gmail.com
          <span style={{ fontSize: "0.7em" }}>↗</span>
        </motion.a>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "999px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                color: "#666",
                transition: "color 0.2s, border-color 0.2s, background 0.2s",
                whiteSpace: "nowrap",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#f0f0f0";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#666";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              {s.icon}
              {s.label} ↗
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
