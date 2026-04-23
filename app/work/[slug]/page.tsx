import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects";
import PitchDeck from "@/components/PitchDeck";
import OverviewCarousel from "@/components/OverviewCarousel";
import VideosBelowOverview from "@/components/VideosBelowOverview";
import SlowVideo from "@/components/SlowVideo";
import DayNightGallery from "@/components/DayNightGallery";

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

  const sectionGap = "clamp(40px, 5vw, 64px)";
  const sectionGapTight = "clamp(20px, 3vw, 32px)";

  /** Shared horizontal inset for overview video + stacked images (aligned edges, symmetric padding). */
  const overviewMediaInset = "clamp(16px, 3vw, 32px)";

  return (
    <main style={{ paddingTop: "clamp(80px, 10vw, 120px)", paddingBottom: "clamp(60px, 8vw, 120px)", minHeight: "100vh" }}>

      {/* Back link */}
      <div style={{ padding: "0 clamp(20px, 4vw, 40px)", marginBottom: "clamp(24px, 3vw, 40px)" }}>
        <Link
          href="/work"
          style={{ fontFamily: "Poppins", fontSize: "0.75rem", letterSpacing: "0.06em", color: "var(--text-muted)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
        >
          ← All Works
        </Link>
      </div>

      {/* Hero image */}
      <div style={{ width: "100%", aspectRatio: "21/9", background: "var(--border)", overflow: "hidden", marginBottom: "clamp(32px, 5vw, 56px)" }}>
        <img
          src={project.heroImage ?? project.coverImage}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: project.heroObjectPosition ?? "center",
            display: "block",
          }}
        />
      </div>

      <div style={{ padding: "0 clamp(20px, 4vw, 40px)" }}>

        {/* Title + subtitle */}
        <div style={{ marginBottom: "clamp(20px, 3vw, 32px)" }}>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900, fontSize: "clamp(32px, 6vw, 88px)", letterSpacing: "-0.02em", color: "var(--text)", lineHeight: 1 }}>
            {project.title}
          </h1>
          {project.subtitle && (
            <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(14px, 1.4vw, 18px)", fontStyle: "italic", color: "var(--text-muted)", marginTop: "10px", fontWeight: 300 }}>
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Meta: date + tags */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
          {project.dateRange && (
            <span style={{ fontFamily: "Poppins", fontSize: "0.75rem", letterSpacing: "0.06em", color: "var(--text-muted)" }}>
              {project.dateRange}
            </span>
          )}
          {(project.dateRange && project.skills.length > 0) && (
            <span style={{ color: "var(--border)", fontSize: "0.75rem" }}>|</span>
          )}
          {project.skills.map((skill) => (
            <span key={skill} className="tag">{skill}</span>
          ))}
        </div>

        {/* Description */}
        {project.description && (
          <>
            {divider}
            <div style={{ display: "grid", gridTemplateColumns: "clamp(100px, 18%, 200px) 1fr", gap: "clamp(20px, 4vw, 60px)", alignItems: "start" }} className="project-content-row">
              <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(14px, 1.5vw, 18px)", fontStyle: "italic", color: "var(--text-muted)", letterSpacing: "0.02em", paddingTop: "4px" }}>
                Overview
              </p>
              <div>
                <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(14px, 1.5vw, 18px)", lineHeight: 1.85, color: "var(--text)", fontWeight: 300, whiteSpace: "pre-line" }}>
                  {project.description}
                </p>
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-pill"
                    style={{ marginTop: "clamp(20px, 3vw, 32px)", display: "inline-block", fontSize: "1rem", padding: "9px 27px" }}
                  >
                    {project.websiteLabel ?? "Visit Website"} →
                  </a>
                )}
              </div>
            </div>
          </>
        )}

        {/* Day/Night gallery (after overview description) */}
        {project.dayNightGallery && (project.dayNightGallery.day.length > 0 || project.dayNightGallery.night.length > 0) && (
          <>
            {divider}
            <DayNightGallery day={project.dayNightGallery.day} night={project.dayNightGallery.night} title={project.title} />
          </>
        )}

        {/* Full-width image directly under the Overview section. */}
        {project.imageBelowOverview && (
          <div style={{ marginTop: project.imageBelowOverviewCompact ? 0 : sectionGap, width: "100%", overflow: "hidden", background: "transparent", display: "flex", flexDirection: "column", gap: "2px" }}>
            <img
              src={project.imageBelowOverview}
              alt={`${project.title} — overview`}
              style={{ width: "100%", display: "block", objectFit: "contain", background: "transparent" }}
            />
            {project.imagesBelowOverview && project.imagesBelowOverview.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: sectionGap, marginTop: sectionGap }}>
                {project.imagesBelowOverview.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${project.title} — overview detail`}
                    style={{ width: "100%", display: "block", objectFit: "contain", background: "transparent" }}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {project.overviewCarousel && project.overviewCarousel.length > 0 && (
          <div style={{ marginTop: sectionGap }}>
            <OverviewCarousel slides={project.overviewCarousel} title={project.title} />
          </div>
        )}

        {project.videosBelowOverview && project.videosBelowOverview.length > 0 && (
          <div style={{ marginTop: sectionGap }}>
            {(project.videosBelowOverviewTitle?.trim() ?? "") !== "" && (
              <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(14px, 1.5vw, 18px)", fontStyle: "italic", color: "var(--text-muted)", letterSpacing: "0.02em", marginBottom: "clamp(20px, 3vw, 32px)" }}>
                {project.videosBelowOverviewTitle}
              </p>
            )}
            <div
              style={{
                paddingLeft: overviewMediaInset,
                paddingRight: overviewMediaInset,
                boxSizing: "border-box",
              }}
            >
              <VideosBelowOverview sources={project.videosBelowOverview} projectTitle={project.title} />
            </div>
          </div>
        )}

        {project.imagesBelowOverviewVideo && project.imagesBelowOverviewVideo.length > 0 && (
          <div
            style={{
              marginTop: sectionGap,
              display: "flex",
              flexDirection: "column",
              gap:
                project.imagesBelowOverviewVideo.length > 1
                  ? "clamp(40px, 5vw, 64px)"
                  : "clamp(20px, 3vw, 32px)",
              width: "100%",
              paddingLeft: overviewMediaInset,
              paddingRight: overviewMediaInset,
              boxSizing: "border-box",
            }}
          >
            {project.imagesBelowOverviewVideo.map((src, i) => (
              <div
                key={src}
                style={{
                  width: "100%",
                  overflow: "hidden",
                  background: "transparent",
                  lineHeight: 0,
                }}
              >
                <img
                  src={src}
                  alt={i === 0 ? `${project.title} — overview` : `${project.title} — overview detail`}
                  style={{
                    width: "100%",
                    display: "block",
                    objectFit: "contain",
                    background: "transparent",
                  }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Inspiration — YouTube embeds */}
        {project.inspirationVideos && project.inspirationVideos.length > 0 && (
          <div style={{ marginTop: sectionGap, display: "grid", gridTemplateColumns: "clamp(100px, 18%, 200px) 1fr", gap: "clamp(20px, 4vw, 60px)", alignItems: "start" }} className="project-content-row">
            <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(14px, 1.5vw, 18px)", fontStyle: "italic", color: "var(--text-muted)", letterSpacing: "0.02em", paddingTop: "4px" }}>
              Inspiration
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "clamp(8px, 1.5vw, 16px)" }}>
              {project.inspirationVideos.map((id) => (
                <a
                  key={id}
                  href={`https://www.youtube.com/watch?v=${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ position: "relative", display: "block", aspectRatio: "16/9", background: "var(--border)", overflow: "hidden" }}
                >
                  <img
                    src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                    alt="Inspiration video"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  {/* Play button overlay */}
                  <div className="yt-overlay">
                    <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(255,255,255,0.9)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: 0, height: 0, borderTop: "9px solid transparent", borderBottom: "9px solid transparent", borderLeft: "16px solid #111", marginLeft: "3px" }} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Spotlight — image left, text right */}
        {project.spotlight && (
          <>
            {divider}
            <div
              className="project-spotlight-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(24px, 4vw, 60px)", alignItems: "start" }}
            >
              <div style={{ overflow: "hidden", background: "var(--border)" }}>
                <img
                  src={project.spotlight.image}
                  alt={project.title}
                  style={{ width: "100%", display: "block", objectFit: "cover" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(14px, 1.5vw, 18px)", lineHeight: 1.85, color: "var(--text)", fontWeight: 300, whiteSpace: "pre-line" }}>
                  {project.spotlight.text}
                </p>
              </div>
            </div>
          </>
        )}

        {/* Goals */}
        {project.goals && (
          <div style={{ marginTop: sectionGap, display: "grid", gridTemplateColumns: "clamp(100px, 18%, 200px) 1fr", gap: "clamp(20px, 4vw, 60px)", alignItems: "start" }} className="project-content-row">
            <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(14px, 1.5vw, 18px)", fontStyle: "italic", color: "var(--text-muted)", letterSpacing: "0.02em", paddingTop: "4px" }}>
              Project goals
            </p>
            <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(14px, 1.5vw, 18px)", lineHeight: 1.85, color: "var(--text)", fontWeight: 300, whiteSpace: "pre-line" }}>
              {project.goals}
            </p>
          </div>
        )}

        {/* Approach */}
        {project.approach && (
          <div style={{ marginTop: sectionGap, display: "grid", gridTemplateColumns: "clamp(100px, 18%, 200px) 1fr", gap: "clamp(20px, 4vw, 60px)", alignItems: "start" }} className="project-content-row">
            <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(14px, 1.5vw, 18px)", fontStyle: "italic", color: "var(--text-muted)", letterSpacing: "0.02em", paddingTop: "4px" }}>
              My approach
            </p>
            <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(14px, 1.5vw, 18px)", lineHeight: 1.85, color: "var(--text)", fontWeight: 300, whiteSpace: "pre-line" }}>
              {project.approach}
            </p>
          </div>
        )}

        {/* Mockups */}
        {project.mockups.length > 0 && (
          <div style={{ marginTop: sectionGap }}>
            <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(14px, 1.5vw, 18px)", fontStyle: "italic", color: "var(--text-muted)", letterSpacing: "0.02em", marginBottom: "clamp(20px, 3vw, 32px)" }}>
              Mockups
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {project.mockups.map((src, i) => (
                <div key={i} style={{ width: "100%", background: "var(--border)", overflow: "hidden" }}>
                  <img src={src} alt={`${project.title} mockup ${i + 1}`} style={{ width: "100%", display: "block", objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Image above video (e.g. social / campaign still) */}
        {project.imageAboveVideo && (
          <div style={{ marginTop: sectionGap, width: "100%", overflow: "hidden", background: "transparent" }}>
            <img
              src={project.imageAboveVideo}
              alt={`${project.title} — campaign`}
              style={{ width: "100%", display: "block", objectFit: "contain", background: "transparent" }}
            />
          </div>
        )}

        {/* Videos */}
        {project.videos.length > 0 && (
          <div style={{ marginTop: sectionGap }}>
            <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(14px, 1.5vw, 18px)", fontStyle: "italic", color: "var(--text-muted)", letterSpacing: "0.02em", marginBottom: "clamp(20px, 3vw, 32px)" }}>
              {project.videoSectionTitle ?? "Video"}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {project.videos.map((src) => (
                <video key={src} src={src} controls playsInline preload="metadata" style={{ width: "100%", display: "block", background: "var(--border)" }} />
              ))}
            </div>
          </div>
        )}

        {/* Image between video and process deck — full bleed */}
        {project.imageAbovePitchDeck && (
          <div
            style={{
              marginTop: project.videos.length > 0 ? sectionGapTight : sectionGap,
              width: "calc(100% + 2 * clamp(20px, 4vw, 40px))",
              marginLeft: "calc(-1 * clamp(20px, 4vw, 40px))",
              marginRight: "calc(-1 * clamp(20px, 4vw, 40px))",
              overflow: "hidden",
              background: "transparent",
              lineHeight: 0,
            }}
          >
            <img
              src={project.imageAbovePitchDeck}
              alt={`${project.title} — web`}
              style={{
                width: "100%",
                display: "block",
                objectFit: "contain",
                objectPosition: "center top",
                background: "transparent",
              }}
            />
          </div>
        )}

        {/* Video above pitch deck (inverted to blend with site bg) */}
        {project.videoAbovePitchDeck && (
          <div
            style={{
              marginTop: project.videos.length > 0 ? sectionGapTight : sectionGap,
              width: "calc(100% + 2 * clamp(20px, 4vw, 40px))",
              marginLeft: "calc(-1 * clamp(20px, 4vw, 40px))",
              marginRight: "calc(-1 * clamp(20px, 4vw, 40px))",
              lineHeight: 0,
            }}
          >
            <SlowVideo src={project.videoAbovePitchDeck} rate={0.75} />
          </div>
        )}

        {/* Pitch deck */}
        {project.pitchDeck.length > 0 && (
          <div style={{ marginTop: (project.imageAbovePitchDeck || project.videoAbovePitchDeck) ? sectionGapTight : sectionGap }}>
            <PitchDeck slides={project.pitchDeck} />
          </div>
        )}

        {/* Mock campaign footnote */}
        {project.mockCampaign && (
          <p style={{
            fontFamily: "'Merriweather', serif",
            fontStyle: "italic",
            fontSize: "clamp(14px, 1.5vw, 18px)",
            color: "var(--text-muted)",
            textAlign: "center",
            marginTop: sectionGap,
          }}>
            Mock brand campaign — SCAD
          </p>
        )}

      </div>
    </main>
  );
}
