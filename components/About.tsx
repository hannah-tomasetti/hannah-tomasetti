"use client";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "clamp(60px, 8vw, 120px) clamp(20px, 4vw, 40px)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "clamp(40px, 5vw, 80px)",
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Left: photos stacked */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ background: "var(--border)", aspectRatio: "4/3", overflow: "hidden", position: "relative" }}>
            <img src="/about-1.jpg" alt="Hannah at work" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }} />
          </div>
          <div style={{ background: "var(--border)", aspectRatio: "4/3", overflow: "hidden", position: "relative" }}>
            <img src="/about-2.jpg" alt="Hannah working" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }} />
          </div>
        </div>

        {/* Right: copy */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "clamp(0px, 4vw, 40px)" }}>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.02em", color: "var(--text)", marginBottom: "clamp(20px, 3vw, 36px)" }}>
            Get to know<br />
            <span style={{ fontStyle: "italic", fontFamily: "Merriweather" }}>Hannah…</span>
          </h2>

          <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(13px, 1.2vw, 15px)", lineHeight: 1.85, color: "var(--text)", fontWeight: 300, marginBottom: "20px" }}>
            From diving into building a startup to working with established businesses, my main objective is to curate user experiences that feel intuitive. A core focus in my work process is bridging the gap between art &amp; the ever-evolving tech world.
          </p>

          <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(13px, 1.2vw, 15px)", lineHeight: 1.85, color: "var(--text-muted)", fontWeight: 300 }}>
            By leveraging my tech background from Syracuse University iSchool &amp; creative experience from Savannah College of Art &amp; Design… I create brand experiences &amp; campaigns that can connect with audiences both digitally &amp; in person.
          </p>

          <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {["Syracuse University iSchool", "Savannah College of Art & Design"].map((school) => (
              <div key={school} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--text)", flexShrink: 0 }} />
                <span style={{ fontFamily: "Poppins", fontSize: "0.75rem", letterSpacing: "0.06em", color: "var(--text-muted)" }}>{school}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
