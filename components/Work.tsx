"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "40px 0",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "24px",
        cursor: "pointer",
        transition: "border-color 0.3s ease",
      }}
      className="project-row"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
      }}
    >
      {/* Top row: number + name + status */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "24px" }}>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              color: "#333",
              letterSpacing: "0.1em",
              marginTop: "6px",
              minWidth: "24px",
            }}
          >
            {project.number}
          </span>
          <div>
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 800,
                color: "#f0f0f0",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                marginBottom: "8px",
              }}
            >
              {project.name}
            </h3>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                color: "#666",
                maxWidth: "520px",
                lineHeight: 1.6,
              }}
            >
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Status + links */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "12px",
          }}
        >
          <span
            style={{
              padding: "4px 12px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "999px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              color: "#666",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            {project.status}
          </span>

          <div style={{ display: "flex", gap: "8px" }}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  padding: "6px 14px",
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "999px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#666",
                  transition: "color 0.2s, border-color 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#f0f0f0";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#666";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                }}
              >
                GitHub ↗
              </a>
            )}
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  padding: "6px 14px",
                  background: "#f0f0f0",
                  borderRadius: "999px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#050505",
                  transition: "background 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#f0f0f0")}
              >
                Live ↗
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "15px",
          color: "#555",
          lineHeight: 1.7,
          maxWidth: "680px",
          paddingLeft: "48px",
        }}
      >
        {project.description}
      </p>

      {/* Tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          paddingLeft: "48px",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "11px",
            fontWeight: 500,
            color: "#444",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginRight: "8px",
            alignSelf: "center",
          }}
        >
          {project.category}
        </span>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "4px 10px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "6px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              color: "#555",
              letterSpacing: "0.04em",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="work"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "clamp(60px, 10vw, 120px) 24px",
      }}
    >
      {/* Section header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "64px",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
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
            (02)
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
            Selected Work
          </h2>
        </div>
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "12px",
            color: "#444",
            letterSpacing: "0.1em",
          }}
        >
          01 — 04
        </span>
      </motion.div>

      {/* Projects list */}
      <div>
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
        {/* Final border */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
      </div>
    </section>
  );
}
