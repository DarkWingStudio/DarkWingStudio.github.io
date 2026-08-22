"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

// Fix 3: scroll with navbar offset so sticky header doesn't cover target
function scrollToSection(href: string) {
  if (href === "#top" || href === "") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.querySelector(href) as HTMLElement | null;
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    // Small delay so mobile menu can close before scroll fires
    setTimeout(() => scrollToSection(href), 50);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number], delay: 0.1 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(5,5,5,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollToSection("#top")}
          aria-label="Back to top"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "20px",
            fontWeight: 800,
            color: "#f0f0f0",
            letterSpacing: "-0.04em",
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          RK
          <span style={{ fontSize: "10px", color: "#444", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400, letterSpacing: "0.1em" }}>®</span>
        </button>

        {/* Desktop nav — Fix 2: use className, NO inline display style */}
        <nav className="nav-desktop">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                color: "#888",
                background: "none",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.02em",
                transition: "color 0.2s ease",
                padding: "4px 0",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Hamburger — Fix 2: use className, NO inline display:none */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            style={{
              width: "22px",
              height: "1.5px",
              background: "#f0f0f0",
              display: "block",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: menuOpen ? "rotate(45deg) translate(4.5px, 4.5px)" : "none",
            }}
          />
          <span
            style={{
              width: "22px",
              height: "1.5px",
              background: "#f0f0f0",
              display: "block",
              transition: "opacity 0.3s ease",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              width: "22px",
              height: "1.5px",
              background: "#f0f0f0",
              display: "block",
              transition: "transform 0.3s ease",
              transform: menuOpen ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none",
            }}
          />
        </button>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              background: "rgba(5,5,5,0.97)",
              backdropFilter: "blur(16px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {links.map((l, i) => (
              <motion.button
                key={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                onClick={() => handleNav(l.href)}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(36px, 12vw, 56px)",
                  fontWeight: 800,
                  color: "#f0f0f0",
                  letterSpacing: "-0.03em",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "12px 24px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#666")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#f0f0f0")}
              >
                {l.label}
              </motion.button>
            ))}

            {/* Contact CTA in mobile menu */}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.32, duration: 0.3 }}
              href="mailto:darkwingdomain@gmail.com"
              style={{
                marginTop: "24px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "13px",
                color: "#444",
                letterSpacing: "0.04em",
              }}
            >
              darkwingdomain@gmail.com
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
