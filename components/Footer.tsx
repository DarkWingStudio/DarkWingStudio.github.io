"use client";

// Fix 4: explicit scrollToTop function, avoids any ambiguity
function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

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
