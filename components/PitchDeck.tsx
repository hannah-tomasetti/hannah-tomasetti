"use client";

import { useState } from "react";

export default function PitchDeck({ slides }: { slides: string[] }) {
  const [index, setIndex] = useState(0);

  if (slides.length === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "clamp(20px, 3vw, 32px)" }}>
        <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(13px, 1.2vw, 15px)", fontStyle: "italic", color: "var(--text-muted)", letterSpacing: "0.02em" }}>
          Process deck
        </p>
        <span style={{ fontFamily: "Poppins", fontSize: "0.7rem", color: "var(--text-muted)" }}>
          {index + 1} / {slides.length}
        </span>
      </div>

      <div style={{ position: "relative", background: "var(--border)", aspectRatio: "16/9", overflow: "hidden" }}>
        <img
          src={slides[index]}
          alt={`Slide ${index + 1}`}
          style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
        />

        <button
          onClick={prev}
          aria-label="Previous slide"
          style={{
            position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)",
            background: "rgba(16,15,15,0.7)", border: "1px solid var(--border)", color: "var(--text)",
            width: "40px", height: "40px", borderRadius: "50%", cursor: "pointer",
            fontFamily: "Poppins", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.2s",
          }}
        >
          ←
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          style={{
            position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)",
            background: "rgba(16,15,15,0.7)", border: "1px solid var(--border)", color: "var(--text)",
            width: "40px", height: "40px", borderRadius: "50%", cursor: "pointer",
            fontFamily: "Poppins", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.2s",
          }}
        >
          →
        </button>
      </div>

      {/* Dot indicators */}
      <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginTop: "16px" }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === index ? "20px" : "6px", height: "6px",
              borderRadius: "999px", border: "none", cursor: "pointer",
              background: i === index ? "var(--text)" : "var(--border)",
              transition: "all 0.3s", padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
