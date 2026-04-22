"use client";

const contactLinkStyle = {
  fontFamily: "'Merriweather', serif",
  fontWeight: 700,
  fontStyle: "italic",
  fontSize: "clamp(14px, 2.2vw, 22px)",
  color: "var(--text)",
  textDecoration: "none",
  borderBottom: "2px solid var(--border)",
  paddingBottom: "4px",
  transition: "border-color 0.2s",
  display: "inline-block",
  lineHeight: 1.1,
} as const;

function underlineHoverHandlers() {
  return {
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      (e.currentTarget as HTMLElement).style.borderColor = "var(--text)";
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
    },
  };
}

export default function Contact() {
  const hover = underlineHoverHandlers();

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
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 48px)",
            letterSpacing: "-0.01em",
            color: "var(--text)",
            marginBottom: "36px",
          }}
        >
          Let's connect for any work opportunities or collaborations:
        </h2>

        <div style={{ display: "inline-flex", alignItems: "center", gap: "clamp(16px, 2.5vw, 32px)" }}>
          <a href="mailto:hannaht1124@gmail.com" style={contactLinkStyle} {...hover}>
            hannaht1124@gmail.com
          </a>

          <a
            href="https://linkedin.com/in/hannah-tomasetti"
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
