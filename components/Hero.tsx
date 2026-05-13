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
      <div style={{ paddingTop: "clamp(80px, 9vw, 92px)", paddingBottom: "clamp(32px, 5vw, 60px)", paddingLeft: "clamp(12px, 2vw, 24px)", paddingRight: "clamp(12px, 2vw, 24px)", overflow: "hidden", textAlign: "center" }}>
        <h1
          ref={headlineRef}
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(30px, 7.8vw, 122px)",
            lineHeight: 1.03,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            color: "var(--text)",
            willChange: "transform, opacity",
            whiteSpace: "nowrap",
            display: "inline-block",
          }}
        >
          Hannah Tomasetti
        </h1>
      </div>


      {/* Intro row */}
      <div
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          padding: "0 clamp(20px, 4vw, 40px) clamp(40px, 5vw, 80px)",
          alignItems: "stretch",
        }}
      >
        {/* Photos */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ background: "var(--border)", aspectRatio: "4/3", overflow: "hidden" }}>
            <img src="/about-2.jpg" alt="Hannah Tomasetti" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ background: "var(--border)", aspectRatio: "4/3", overflow: "hidden" }}>
            <img src="/about-1.jpg" alt="Hannah Tomasetti" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>

        {/* Blurb */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "20px" }}>
          <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(14px, 1.5vw, 18px)", fontStyle: "italic", color: "var(--text-muted)", marginBottom: "16px", letterSpacing: "0.02em" }}>
            A little about me…
          </p>
          <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(14px, 1.5vw, 18px)", lineHeight: 1.75, color: "var(--text)", fontWeight: 300 }}>
            I am a digital designer and marketing professional specializing in graphic design, user experience and AI-integration. Whether I am designing campaign assets, developing brand strategy, or building digital experiences, my focus is always creating with intention.
          </p>
          <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(14px, 1.5vw, 18px)", lineHeight: 1.75, color: "var(--text)", fontWeight: 300, marginTop: "1.25em" }}>
            My goal is to support brands in their integrated marketing efforts. I am looking to build experience developing community, crafting strategy across the full marketing funnel, and creating visual assets that drive engagement and brand growth. I am drawn to early-stage and fast-moving environments where design and marketing intersect.
          </p>
          <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(14px, 1.5vw, 18px)", lineHeight: 1.75, color: "var(--text)", fontWeight: 300, marginTop: "1.25em" }}>
            My academic foundation comes from two distinct experiences. Studying at the Savannah College of Art &amp; Design (SCAD), I developed my design process, learned to embrace critique, and led cross-functional projects from concept through execution. A year at Syracuse University introduced me to the basic capabilities of integrating technology. I have since then continued that education independently, building web platforms with AI tools like Claude Code, Cursor, and Vercel. Everyday, I explore new ways to accelerate the creative process, without losing the human touch or thinking behind it.
          </p>

          <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { name: "Syracuse University iSchool", dates: "2020 - 2021" },
              { name: "Savannah College of Art and Design", dates: "2022–2025" },
            ].map(({ name, dates }) => (
              <div key={name} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--text)", flexShrink: 0 }} />
                <span style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(14px, 1.5vw, 18px)", letterSpacing: "0.02em", color: "var(--text-muted)" }}>
                  {name} <span style={{ color: "var(--text-muted)", opacity: 0.6 }}>({dates})</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
