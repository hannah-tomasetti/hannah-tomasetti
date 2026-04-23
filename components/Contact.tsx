"use client";

const contactLinkStyle = {
  fontFamily: "'Merriweather', serif",
  fontWeight: 700,
  fontStyle: "italic",
  fontSize: "clamp(14px, 2.2vw, 22px)",
  color: "var(--text)",
  textDecoration: "none",
  border: "1px solid var(--border)",
  borderRadius: "999px",
  padding: "clamp(8px, 1vw, 12px) clamp(20px, 2.5vw, 36px)",
  transition: "background 0.2s, color 0.2s",
  display: "inline-block",
  lineHeight: 1.1,
} as const;

function pillHoverHandlers() {
  return {
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      (e.currentTarget as HTMLElement).style.background = "var(--text)";
      (e.currentTarget as HTMLElement).style.color = "var(--bg)";
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      (e.currentTarget as HTMLElement).style.background = "transparent";
      (e.currentTarget as HTMLElement).style.color = "var(--text)";
    },
  };
}

export default function Contact() {
  const hover = pillHoverHandlers();

  return (
    <section
      id="contact"
      style={{
        padding: "clamp(40px, 5vw, 80px) clamp(20px, 4vw, 40px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* CTA block */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
          paddingBottom: "clamp(32px, 5vw, 60px)",
        }}
      >
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(18px, 3vw, 32px)",
            letterSpacing: "-0.01em",
            color: "var(--text)",
            marginBottom: "36px",
          }}
        >
          Connect for any work opportunities or collaborations:
        </h2>

        <div style={{ display: "inline-flex", alignItems: "center", gap: "clamp(12px, 2vw, 24px)", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="mailto:hannaht1124@gmail.com" style={contactLinkStyle} {...hover}>
            hannaht1124@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/hannahtomasetti"
            target="_blank"
            rel="noopener noreferrer"
            style={contactLinkStyle}
            {...hover}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
