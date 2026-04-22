"use client";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "clamp(40px, 5vw, 80px) clamp(20px, 4vw, 40px)",
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

          <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(14px, 1.5vw, 18px)", lineHeight: 1.85, color: "var(--text)", fontWeight: 300, marginBottom: "1.4em" }}>
            From building a startup to supporting established brands, my focus has always been the same: creating user experiences that feel intentional and human. As I learn more about the ever-evolving world of technology, I have found a deep love for bridging the gap between art and tech.
          </p>

          <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(14px, 1.5vw, 18px)", lineHeight: 1.85, color: "var(--text)", fontWeight: 300, marginBottom: "1.4em" }}>
            My academic foundation draws from two distinct experiences. At the Savannah College of Art and Design, I developed my design process, learned to embrace critique, and led cross-functional projects from concept to execution. A year at Syracuse University introduced me to the technical side, where I picked up HTML and CSS. I have continued that education independently, exploring how AI can enhance and accelerate the creative process. I now build with tools like Cursor, Claude Code, and Vercel, bringing design thinking directly into development.
          </p>

          <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(14px, 1.5vw, 18px)", lineHeight: 1.85, color: "var(--text)", fontWeight: 300 }}>
            Together, these experiences have shaped how I approach every project: with a clear creative vision, organized thinking, and a drive to execute.
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
