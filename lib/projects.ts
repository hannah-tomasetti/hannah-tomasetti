export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  dateRange: string;
  skills: string[];
  goals: string;
  approach: string;
  coverImage: string;
  mockups: string[];
  videos: string[];
  pitchDeck: string[];
};

export const projects: Project[] = [
  {
    slug: "the-grotto",
    title: "The Grotto",
    category: "Experience Design",
    year: "2026",
    dateRange: "",
    skills: [],
    goals: "",
    approach: "",
    coverImage: "/projects/the-grotto.jpg",
    mockups: [],
    videos: [],
    pitchDeck: [],
  },
  {
    slug: "terra-by-ki",
    title: "Terra by Ki",
    category: "UX/UI Design",
    year: "2026",
    dateRange: "",
    skills: [],
    goals: "",
    approach: "",
    coverImage: "/projects/terra-by-ki.jpg",
    mockups: [],
    videos: [],
    pitchDeck: [],
  },
  {
    slug: "sisley-paris",
    title: "Sisley Paris",
    category: "Digital Marketing",
    year: "2025",
    dateRange: "",
    skills: [],
    goals: "",
    approach: "",
    coverImage: "/projects/sisley-paris.jpg",
    mockups: [],
    videos: [],
    pitchDeck: [],
  },
  {
    slug: "skram",
    title: "SKRAM",
    category: "Health & Wellness",
    year: "2025",
    dateRange: "",
    skills: [],
    goals: "",
    approach: "",
    coverImage: "/projects/skram.jpg",
    mockups: [],
    videos: [],
    pitchDeck: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
