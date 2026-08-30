"use client";

// Fix 4: explicit scrollToTop function, avoids any ambiguity
function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        padding: "32px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "12px",
              color: "#333",
              letterSpacing: "0.05em",
            }}
          >
            © {new Date().getFullYear()} Rohit Kumar · DarkWingStudio
          </p>
          <Link 
            href="/resume"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "12px",
              color: "#333",
              letterSpacing: "0.05em",
              textDecoration: "none",
              transition: "color 0.2s"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#888")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
          >
            Resume
          </Link>
        </div>

        <div style={{ display: "flex", gap: "24px", alignItems: "center", flexWrap: "wrap" }}>
          {[
            { 
              label: "GitHub", 
              href: "https://github.com/DarkWingStudio",
              icon: (
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              )
            },
            { 
              label: "Twitter / X", 
              href: "https://x.com/Darkwingstudio",
              icon: (
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              )
            },
            { 
              label: "Pinterest", 
              href: "https://pinterest.com/DarkWingstudio",
              icon: (
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345l-.288 1.148c-.05.204-.166.248-.373.151-1.389-.643-2.254-2.614-2.254-4.204 0-3.422 2.486-6.557 7.159-6.557 3.754 0 6.671 2.673 6.671 6.236 0 3.733-2.353 6.736-5.619 6.736-1.098 0-2.13-.57-2.483-1.243l-.678 2.581c-.244.929-.906 2.086-1.353 2.793 1.111.34 2.296.521 3.526.521 6.621 0 11.988-5.367 11.988-11.987C24.004 5.367 18.638 0 12.017 0z" />
                </svg>
              )
            },
            {
              label: "Reddit",
              href: "https://reddit.com/user/darkwingstudio",
              icon: (
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.56 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.562-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.688-.561-1.249-1.249-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                </svg>
              )
            },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "12px",
                color: "#333",
                letterSpacing: "0.05em",
                transition: "color 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#888")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
            >
              {l.icon}
              {l.label}
            </a>
          ))}

          <button
            onClick={scrollToTop}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "12px",
              color: "#333",
              letterSpacing: "0.05em",
              background: "none",
              border: "none",
              cursor: "pointer",
              transition: "color 0.2s",
              padding: "4px 0",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#888")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
