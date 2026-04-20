import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Works — Hannah Tomasetti",
};

export default function WorksPage() {
  const sorted = [...projects].sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <main style={{ paddingTop: "clamp(80px, 12vw, 140px)", paddingBottom: "clamp(60px, 8vw, 120px)", minHeight: "100vh" }}>
      <div style={{ padding: "0 clamp(20px, 4vw, 40px)" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "clamp(32px, 5vw, 60px)", borderBottom: "1px solid var(--border)", paddingBottom: "clamp(20px, 3vw, 32px)" }}>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900, fontSize: "clamp(32px, 7vw, 100px)", letterSpacing: "-0.02em", textTransform: "uppercase", color: "var(--text)", lineHeight: 1 }}>
            Works
          </h1>
          <span style={{ fontFamily: "'Merriweather', serif", fontSize: "0.85rem", fontStyle: "italic", color: "var(--text-muted)" }}>
            {sorted.length} projects
          </span>
        </div>

        {/* Grid */}
        <div className="work-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px" }}>
          {sorted.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              style={{ display: "block", position: "relative", textDecoration: "none", overflow: "hidden", background: "var(--border)", aspectRatio: "4/3" }}
            >
              <img
                src={project.coverImage}
                alt={project.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
              />
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "clamp(13px, 1.4vw, 16px)", color: "var(--text)", textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}>
                  {project.title}
                </span>
                <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                  <span className="tag">{project.category}</span>
                  <span style={{ fontFamily: "Poppins", fontSize: "0.65rem", color: "var(--text-muted)" }}>{project.year}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
