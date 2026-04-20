import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects";
import PitchDeck from "@/components/PitchDeck";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: `${project.title} — Hannah Tomasetti` };
}

export default async function ProjectPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const divider = (
    <div style={{ height: "1px", background: "var(--border)", margin: "clamp(40px, 5vw, 64px) 0" }} />
  );

  return (
    <main style={{ paddingTop: "clamp(80px, 10vw, 120px)", paddingBottom: "clamp(60px, 8vw, 120px)", minHeight: "100vh" }}>
      {/* Back link */}
      <div style={{ padding: "0 clamp(20px, 4vw, 40px)", marginBottom: "clamp(24px, 3vw, 40px)" }}>
        <Link
          href="/work"
          style={{ fontFamily: "Poppins", fontSize: "0.75rem", letterSpacing: "0.06em", color: "var(--text-muted)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", transition: "color 0.2s" }}
        >
          ← All Works
        </Link>
      </div>

      {/* Cover image */}
      <div style={{ width: "100%", aspectRatio: "21/9", background: "var(--border)", overflow: "hidden", marginBottom: "clamp(32px, 5vw, 56px)" }}>
        <img
          src={project.coverImage}
          alt={project.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
        />
      </div>

      <div style={{ padding: "0 clamp(20px, 4vw, 40px)" }}>
        {/* Title + meta */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "20px", marginBottom: "clamp(24px, 3vw, 36px)" }}>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900, fontSize: "clamp(28px, 5vw, 72px)", letterSpacing: "-0.02em", textTransform: "uppercase", color: "var(--text)", lineHeight: 1 }}>
            {project.title}
          </h1>
          <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="tag">{project.category}</span>
            {project.dateRange
              ? <span style={{ fontFamily: "Poppins", fontSize: "0.75rem", color: "var(--text-muted)" }}>{project.dateRange}</span>
              : <span style={{ fontFamily: "Poppins", fontSize: "0.75rem", color: "var(--text-muted)" }}>{project.year}</span>
            }
          </div>
        </div>

        {/* Skills */}
        {project.skills.length > 0 && (
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {project.skills.map((skill) => (
              <span key={skill} className="tag">{skill}</span>
            ))}
          </div>
        )}

        {divider}

        {/* Goals */}
        {project.goals && (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "clamp(100px, 18%, 200px) 1fr", gap: "clamp(20px, 4vw, 60px)", alignItems: "start" }} className="project-content-row">
              <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(13px, 1.2vw, 15px)", fontStyle: "italic", color: "var(--text-muted)", letterSpacing: "0.02em", paddingTop: "4px" }}>
                Project goals
              </p>
              <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(14px, 1.4vw, 17px)", lineHeight: 1.85, color: "var(--text)", fontWeight: 300 }}>
                {project.goals}
              </p>
            </div>
            {divider}
          </>
        )}

        {/* Approach */}
        {project.approach && (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "clamp(100px, 18%, 200px) 1fr", gap: "clamp(20px, 4vw, 60px)", alignItems: "start" }} className="project-content-row">
              <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(13px, 1.2vw, 15px)", fontStyle: "italic", color: "var(--text-muted)", letterSpacing: "0.02em", paddingTop: "4px" }}>
                My approach
              </p>
              <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(14px, 1.4vw, 17px)", lineHeight: 1.85, color: "var(--text)", fontWeight: 300 }}>
                {project.approach}
              </p>
            </div>
            {divider}
          </>
        )}

        {/* Mockups */}
        {project.mockups.length > 0 && (
          <>
            <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(13px, 1.2vw, 15px)", fontStyle: "italic", color: "var(--text-muted)", letterSpacing: "0.02em", marginBottom: "clamp(20px, 3vw, 32px)" }}>
              Mockups
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {project.mockups.map((src, i) => (
                <div key={i} style={{ width: "100%", background: "var(--border)", overflow: "hidden" }}>
                  <img
                    src={src}
                    alt={`${project.title} mockup ${i + 1}`}
                    style={{ width: "100%", display: "block", objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
            {divider}
          </>
        )}

        {/* Videos */}
        {project.videos.length > 0 && (
          <>
            <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(13px, 1.2vw, 15px)", fontStyle: "italic", color: "var(--text-muted)", letterSpacing: "0.02em", marginBottom: "clamp(20px, 3vw, 32px)" }}>
              Video
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {project.videos.map((src, i) => (
                <video key={i} src={src} controls style={{ width: "100%", display: "block", background: "var(--border)" }} />
              ))}
            </div>
            {divider}
          </>
        )}

        {/* Pitch deck */}
        {project.pitchDeck.length > 0 && (
          <PitchDeck slides={project.pitchDeck} />
        )}
      </div>
    </main>
  );
}
