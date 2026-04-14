"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    const handleScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      el.style.opacity = `${Math.max(0, 1 - window.scrollY * 0.002)}`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
      {/* Giant name headline */}
      <div style={{ paddingTop: "clamp(60px, 10vw, 100px)", paddingLeft: "clamp(20px, 4vw, 40px)", paddingRight: "clamp(20px, 4vw, 40px)", overflow: "hidden" }}>
        <h1
          ref={headlineRef}
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(32px, 9.2vw, 150px)",
            lineHeight: 0.9,
            letterSpacing: "-0.015em",
            textTransform: "uppercase",
            color: "var(--text)",
            willChange: "transform, opacity",
            whiteSpace: "nowrap",
          }}
        >
          Hannah Tomasetti
        </h1>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: "var(--border)", margin: "clamp(24px, 4vw, 40px) clamp(20px, 4vw, 40px)" }} />

      {/* Intro row */}
      <div
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          padding: "0 clamp(20px, 4vw, 40px) clamp(60px, 8vw, 100px)",
          alignItems: "start",
        }}
      >
        {/* Photo */}
        <div style={{ aspectRatio: "4/5", maxWidth: "420px", background: "var(--border)", overflow: "hidden", position: "relative" }}>
          <img
            src="/hannah-hero.jpg"
            alt="Hannah Tomasetti"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "Poppins" }}>
            Photo
          </div>
        </div>

        {/* Blurb */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingTop: "20px" }}>
          <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(13px, 1.2vw, 15px)", fontStyle: "italic", color: "var(--text-muted)", marginBottom: "16px", letterSpacing: "0.02em" }}>
            A little about me…
          </p>
          <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(14px, 1.4vw, 17px)", lineHeight: 1.75, color: "var(--text)", fontWeight: 300 }}>
            I am a digital designer that specializes in crafting brand experiences that feel effortless &amp; intuitive. My work experience spans across UX, brand strategy, visual identity &amp; marketing.
          </p>
          <div style={{ marginTop: "40px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {["UX", "Brand Strategy", "Visual Identity", "Marketing"].map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
