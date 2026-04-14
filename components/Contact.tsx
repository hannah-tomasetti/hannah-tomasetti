"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        borderTop: "1px solid var(--border)",
        padding: "clamp(80px, 10vw, 140px) clamp(20px, 4vw, 40px) 0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* CTA block */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "600px",
          margin: "0 auto",
          paddingBottom: "clamp(60px, 8vw, 100px)",
        }}
      >
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 5vw, 52px)",
            letterSpacing: "-0.02em",
            color: "var(--text)",
            marginBottom: "12px",
          }}
        >
          Stay updated on my work.
        </h2>
        <p
          style={{
            fontFamily: "'Merriweather', serif",
            fontStyle: "italic",
            fontSize: "clamp(13px, 1.2vw, 15px)",
            color: "var(--text-muted)",
            marginBottom: "36px",
          }}
        >
          Or connect with me for any opportunities &amp; collaborations!
        </p>

        <a
          href="mailto:hannaht1124@gmail.com"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(18px, 3vw, 32px)",
            color: "var(--text)",
            textDecoration: "none",
            borderBottom: "2px solid var(--border)",
            paddingBottom: "4px",
            transition: "border-color 0.2s",
            display: "inline-block",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.borderColor = "var(--text)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.borderColor = "var(--border)")
          }
        >
          hannaht1124@gmail.com
        </a>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          padding: "20px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "0",
        }}
      >
        <a
          href="https://linkedin.com/in/hannah-tomasetti"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "Poppins",
            fontSize: "0.75rem",
            letterSpacing: "0.06em",
            color: "var(--text-muted)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.color = "var(--text)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.color = "var(--text-muted)")
          }
        >
          LinkedIn ↗
        </a>

        <a
          href="https://unlock-ki.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "Poppins",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.color = "var(--text)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.color = "var(--text-muted)")
          }
        >
          Unlock Ki ↗
        </a>
      </div>

      {/* Giant footer name */}
      <div style={{ overflow: "hidden", lineHeight: 0.85, paddingRight: "0.04em" }}>
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(32px, 9vw, 170px)",
            textTransform: "uppercase",
            letterSpacing: "-0.015em",
            color: "var(--text)",
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
        >
          Hannah Tomasetti
        </h2>
      </div>
    </section>
  );
}
