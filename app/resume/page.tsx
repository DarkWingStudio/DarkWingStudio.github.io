"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code2,
  FileJson,
  Palette,
  PenTool,
  GitBranch,
  Globe,
  Terminal,
  MonitorPlay,
  Server
} from "lucide-react";

export default function Resume() {
  return (
    <>
      <style jsx global>{`
        @media print {
          body {
            background: #fff !important;
            color: #000 !important;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
            cursor: default !important;
          }
          .no-print {
            display: none !important;
          }
          .resume-container {
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
          }
          .bento-box {
            background: #fff !important;
            border: 1px solid #e5e5e5 !important;
            color: #000 !important;
            break-inside: avoid;
            box-shadow: none !important;
          }
          .text-muted { color: #666 !important; }
          .text-accent { color: #000 !important; }
          .resume-grid { gap: 16px !important; }
        }
        @media (min-width: 768px) {
          .resume-grid-header { grid-template-columns: 3fr 1fr !important; }
          .resume-grid-main   { grid-template-columns: 2fr 1.2fr !important; }
        }
      `}</style>

      <div
        className="no-print"
        style={{
          padding: "24px",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          background: "#050505",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <Link href="/" style={{ fontFamily: "'Syne', sans-serif", fontSize: "16px", fontWeight: 700, color: "#fff", textDecoration: "none" }}>
          ← Back to Portfolio
        </Link>
      </div>

      <main style={{ minHeight: "100vh", padding: "clamp(24px, 5vw, 64px) 24px", background: "#050505" }}>
        <motion.div
          className="resume-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gap: "24px",
          }}
        >
          {/* Header section */}
          <div className="resume-grid resume-grid-header" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px" }}>
            <div className="bento-box" style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}>
              <h1 className="text-accent" style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(40px, 8vw, 64px)", fontWeight: 800, margin: "0 0 8px 0", lineHeight: 1 }}>
                ROHIT KUMAR
              </h1>
              <h2 className="text-muted" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "20px", fontWeight: 400, color: "#aaa", margin: "0 0 24px 0", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Frontend Developer
              </h2>
              <p className="text-muted" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px", color: "#888", lineHeight: 1.6, maxWidth: "600px" }}>
                Passionate Frontend Developer specializing in React, Next.js, and modern web aesthetics. Experienced in creating high-quality visual content, interactive web applications, and delivering exceptional user experiences with a strong focus on clean architecture and performance.
              </p>
            </div>

            <div className="bento-box" style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "16px"
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span className="text-muted" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#666" }}>Email</span>
                <span className="text-accent" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px" }}>darkwingdomain@gmail.com</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span className="text-muted" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#666" }}>Website</span>
                <span className="text-accent" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px" }}>darkwingstudio.github.io</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span className="text-muted" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#666" }}>Location</span>
                <span className="text-accent" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px" }}>India</span>
              </div>
            </div>
          </div>

          <div className="resume-grid resume-grid-main" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px" }}>
            {/* Experience & Education */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div className="bento-box" style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "40px",
              }}>
                <h3 className="text-accent" style={{ fontFamily: "'Syne', sans-serif", fontSize: "24px", fontWeight: 700, margin: "0 0 32px 0" }}>Experience</h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                  <div style={{ position: "relative", paddingLeft: "24px", borderLeft: "1px solid rgba(255,255,255,0.2)" }}>
                    <div style={{ position: "absolute", left: "-4px", top: "6px", width: "8px", height: "8px", borderRadius: "50%", background: "#fff" }} />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
                      <h4 className="text-accent" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "18px", fontWeight: 600, margin: 0 }}>Freelance Web Developer</h4>
                      <span className="text-muted" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", color: "#888" }}>2023 – Present</span>
                    </div>
                    <span className="text-muted" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "#aaa", display: "block", marginBottom: "12px" }}>Self-Employed</span>
                    <ul className="text-muted" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "#888", paddingLeft: "16px", margin: 0, lineHeight: 1.6 }}>
                      <li>Designed and developed responsive, high-performance websites for multiple clients.</li>
                      <li>Implemented UI/UX designs into functional React and Next.js applications.</li>
                      <li>Optimized web applications for maximum speed and scalability.</li>
                      <li>Managed project timelines and communicated directly with clients to ensure satisfaction.</li>
                    </ul>
                  </div>

                  <div style={{ position: "relative", paddingLeft: "24px", borderLeft: "1px solid rgba(255,255,255,0.2)" }}>
                    <div style={{ position: "absolute", left: "-4px", top: "6px", width: "8px", height: "8px", borderRadius: "50%", background: "#fff" }} />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
                      <h4 className="text-accent" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "18px", fontWeight: 600, margin: 0 }}>Open Source Contributor</h4>
                      <span className="text-muted" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", color: "#888" }}>2022 – 2023</span>
                    </div>
                    <span className="text-muted" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "#aaa", display: "block", marginBottom: "12px" }}>Various Projects</span>
                    <ul className="text-muted" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "#888", paddingLeft: "16px", margin: 0, lineHeight: 1.6 }}>
                      <li>Contributed to React-based open source projects on GitHub.</li>
                      <li>Resolved UI bugs and improved accessibility across different components.</li>
                      <li>Collaborated with maintainers and other developers globally.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bento-box" style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "40px",
              }}>
                <h3 className="text-accent" style={{ fontFamily: "'Syne', sans-serif", fontSize: "24px", fontWeight: 700, margin: "0 0 24px 0" }}>Education</h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4px", flexWrap: "wrap", gap: "8px" }}>
                      <h4 className="text-accent" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", fontWeight: 600, margin: 0 }}>Bachelor of Computer Applications (BCA)</h4>
                      <span className="text-muted" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", color: "#888" }}>2025 – Present</span>
                    </div>
                    <p className="text-muted" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "#aaa", margin: 0 }}>Computer Science</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills & Tools */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div className="bento-box" style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "40px",
              }}>
                <h3 className="text-accent" style={{ fontFamily: "'Syne', sans-serif", fontSize: "24px", fontWeight: 700, margin: "0 0 24px 0" }}>Skills</h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    { name: "React / Next.js", icon: <Code2 size={18} /> },
                    { name: "JavaScript / TypeScript", icon: <FileJson size={18} /> },
                    { name: "Tailwind CSS", icon: <Palette size={18} /> },
                    { name: "Framer Motion", icon: <MonitorPlay size={18} /> },
                    { name: "UI/UX Design", icon: <PenTool size={18} /> },
                  ].map((skill) => (
                    <div key={skill.name} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "12px" }}>
                      <span style={{ color: "#fff", display: "flex" }}>{skill.icon}</span>
                      <span className="text-accent" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", fontWeight: 500 }}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bento-box" style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "40px",
              }}>
                <h3 className="text-accent" style={{ fontFamily: "'Syne', sans-serif", fontSize: "24px", fontWeight: 700, margin: "0 0 24px 0" }}>Tools & Tech</h3>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  {[
                    { name: "VS Code", icon: <Terminal size={14} /> },
                    { name: "Figma", icon: <PenTool size={14} /> },
                    { name: "Git", icon: <GitBranch size={14} /> },
                    { name: "GitHub", icon: (
                      <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    )},
                    { name: "Supabase", icon: <Server size={14} /> },
                    { name: "Vercel", icon: <Globe size={14} /> }
                  ].map((tool) => (
                    <span key={tool.name} className="text-muted" style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "8px 16px",
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: "8px",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "13px",
                      color: "#aaa",
                      border: "1px solid rgba(255,255,255,0.05)"
                    }}>
                      <span style={{ display: "flex", color: "#888" }}>{tool.icon}</span>
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
}
