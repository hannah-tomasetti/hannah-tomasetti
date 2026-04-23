export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  dateRange: string;
  skills: string[];
  description: string;
  goals: string;
  approach: string;
  coverImage: string;
  /** `object-position` for work grid thumbnails (`object-fit: cover`). */
  thumbnailObjectPosition?: string;
  /** Use light (white) year text on the thumbnail instead of dark. */
  yearTextLight?: boolean;
  heroImage?: string;
  /** `object-position` for the project hero when using `object-fit: cover` (e.g. `center 56%`). */
  heroObjectPosition?: string;
  spotlight?: { image: string; text: string };
  websiteUrl?: string;
  websiteLabel?: string;
  /** YouTube embed IDs shown in the Inspiration section (after overview). */
  inspirationVideos?: string[];
  mockups: string[];
  videos: string[];
  /** Label above the video block (defaults to "Video" on the project page). */
  videoSectionTitle?: string;
  /** Full-width image shown after narrative sections and before the video block. */
  imageAboveVideo?: string;
  /** Full-width image shown directly under the Overview section. */
  imageBelowOverview?: string;
  /** Reduce the top margin before imageBelowOverview (for transparent images that sit visually close to the text). */
  imageBelowOverviewCompact?: boolean;
  /** Additional full-width images stacked under `imageBelowOverview` in order. */
  imagesBelowOverview?: string[];
  /** Horizontal scroll-snap carousel directly under the overview (after optional overview images). */
  overviewCarousel?: string[];
  /** Video(s) directly under the overview area (after optional overview images & carousel). */
  videosBelowOverview?: string[];
  /** Optional label above `videosBelowOverview`; omit or leave empty for no heading. */
  videosBelowOverviewTitle?: string;
  /** Full-width images under `videosBelowOverview` (e.g. transparent strip then mockup). First entry is shown slightly zoomed (cropped). */
  imagesBelowOverviewVideo?: string[];
  /** Full-width image after the video block and before the process deck. */
  imageAbovePitchDeck?: string;
  /** Video (mp4) shown between the video block and pitch deck, rendered inverted to blend with site bg. */
  videoAbovePitchDeck?: string;
  pitchDeck: string[];
  /** Day/night photo gallery shown after the overview description. Each array is a list of image paths. */
  dayNightGallery?: { day: string[]; night: string[] };
  /** When true, hides the project from the work grid while keeping its page accessible. */
  hidden?: boolean;
};

export const projects: Project[] = [
  {
    slug: "the-grotto",
    title: "The Grotto",
    subtitle: "Immersive Experience in Miami, FL",
    category: "Experience Design",
    year: "2026",
    dateRange: "Mar 2026 – Apr 2026",
    skills: ["Experience Design", "Interior Design", "Brand Identity", "Copy Writing", "Storytelling", "Photography"],
    description: `The Grotto is a nautical-themed immersive Airbnb experience in Miami, built around a converted boat and cavern retreat. The goal was to elevate the listing beyond a standard short-term rental by creating a cohesive, premium brand experience that communicates the magic of the space.

I led creative direction and execution across the physical space, digital presence, and guest experience. For the space itself, I styled and staged the interior, creating themed side tables, installing flowing curtains to frame the grotto entrance, and curating a nautical history wall above the sitting area. I then photographed the finished space for use across all deliverables.

For the website, I developed the brand voice and wrote all copy, establishing a warm, voyager-inspired narrative that guides visitors through the space as if they're already on board. I also contributed to the UI design, ensuring the visual presentation matched the immersive tone of the writing.

Lastly, the Captain's Handbook is a premium digital guest guide accessible via QR code during the stay. Structured like a ship's log across seven chapters, it covers everything from arrival instructions and space-by-space guidance to contrast therapy protocols and curated local recommendations, turning a functional necessity into an extension of the brand experience.`,
    goals: "",
    approach: "",
    coverImage: "/projects/the-grotto.jpg",
    yearTextLight: true,
    heroImage: "/projects/the-grotto-hero.png",
    heroObjectPosition: "center 56%",
    websiteUrl: "https://the-grotto.vercel.app/",
    websiteLabel: "Explore The Grotto",
    dayNightGallery: {
      day: [
        "/projects/day/DSC_0262.JPG",
        "/projects/day/DSC_0294.JPG",
        "/projects/day/DSC_0379.JPG",
        "/projects/day/DSC_0428.JPG",
        "/projects/day/DSC_0523.JPEG",
        "/projects/day/DSC_0557.JPEG",
        "/projects/day/IMG_1053.jpg",
        "/projects/day/IMG_1138.jpg",
      ],
      night: [
        "/projects/night/DSC_0307.JPG",
        "/projects/night/DSC_0488.JPG",
        "/projects/night/IMG_1015.jpg",
        "/projects/night/IMG_1024.jpg",
        "/projects/night/IMG_1153.jpg",
        "/projects/night/IMG_1157.jpg",
      ],
    },
    mockups: [],
    videos: [],
    pitchDeck: [],
  },
  {
    slug: "terra-by-ki",
    title: "Terra by Ki",
    subtitle: "Women's Wellness App",
    category: "UX/UI Design",
    year: "2026",
    dateRange: "Jan 2026 – Mar 2026",
    skills: ["UI Design", "UX Design", "Copy Writing", "Brand Identity", "Figma", "Claude Code", "Cursor"],
    description: `Terra is a cyclical pattern tracker built for women with regular cycles. Log your energy, emotions, and body signals daily and watch the patterns emerge over time. This is a tool for understanding your body and building the self-knowledge to live in alignment with it. Currently in Beta testing on TestFlight by Apple.

My main role in the development of this app was the UI & UX design. I created screen mockups & prototyped the app layout. I also helped with marketing initiatives to attract Beta testers.`,
    goals: "",
    approach: "",
    coverImage: "/projects/terra-by-ki.png",
    yearTextLight: true,
    heroImage: "/projects/terra-by-ki.png",
    mockups: [],
    videos: [],
    pitchDeck: [],
    videosBelowOverview: ["/projects/terra-by-ki-overview.mp4"],
    imagesBelowOverviewVideo: [
      "/projects/terra-by-ki-after-video.png",
      "/projects/terra-by-ki-check-in-mockup.png",
      "/projects/terra-by-ki-social-row/01.png",
      "/projects/terra-by-ki-social-row/02.png",
      "/projects/terra-by-ki-social-row/03.png",
    ],
  },
  {
    slug: "sisley-paris",
    title: "Sisley Paris",
    subtitle: "Marketing Internship - New York City",
    category: "Digital Marketing",
    year: "2025",
    dateRange: "Jun 2025 – Dec 2025",
    skills: ["Digital Marketing", "Event Sourcing", "Copy Writing", "E-Com Product Detail Page", "Email Design", "Visual Merchandising", "Adobe Photoshop"],
    description: `As a Marketing Intern at Sisley Paris, I coordinated with regional teams to ensure alignment on campaigns, led sourcing and liaising with manufacturers for key projects, and assisted with behind-the-scenes execution of upcoming product launches.

On the retail side, I contributed to visual merchandising for core accounts including Bluemercury and Saks Fifth Avenue. Curating product displays that reflected Sisley's luxury brand identity and carried product that aligned with the consumer demographics of each location. I also collaborated closely with the Senior Creative Manager to design event email templates that were both on-brand and visually engaging on Photoshop.

To close out my time with the brand, I led a full Product Detail Page (PDP) audit to identify opportunities to optimize website performance and elevate the digital shopping experience.`,
    goals: "",
    approach: "",
    coverImage: "/projects/sisley-paris.png",
    heroImage: "/projects/sisley-paris.png",
    yearTextLight: true,
    mockups: [],
    videos: [],
    pitchDeck: [],
  },
  {
    slug: "skram",
    title: "skram",
    subtitle: "Senior Capstone — Skin healing redefined",
    category: "Health & Wellness",
    year: "2025",
    dateRange: "Jan 2025 – May 2025",
    skills: ["Brand Identity", "Product Development", "Packaging Design", "Social Strategy", "Marketing", "Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "Microsoft Excel"],
    description: `This project would not have been possible without my collaborators:

Ana Durrego / Industrial Design / @adurrego
Winter Royer / Graphic Design / @winterroyer
Nicole Gegg / Social Strategy / @nikki_el
Lauren Rockwell / Photography / @lauren.rockwell
Zion Hall / Videography / @zion.mh
Dietrich Hagenau / Photo Assist / @dietrich_hagenau
Keyonna Sease / Talent / @keyonnaaa.s
Hannah Adelle / Talent / @han.adelle
Ximena Vaire / Talent / @menaavaire
Casey Lennerd / Talent / @_caseylennerd_
Kenzie Alderson / Talent / @kenziealdersonn
Julianne Cournand / Talent / @juliannebree`,
    goals: "",
    approach: "",
    coverImage: "/projects/skram.jpg",
    heroImage: "/projects/skram-hero.jpg",
    spotlight: {
      image: "/projects/skram-spotlight.jpg",
      text: `For my senior capstone, I led the development of Skram: an inclusive scar care brand that acknowledges the emotional scars that often come with physical ones. The conception of Skram came from my own personal experience with scarring, paired with a deep dive into beauty industry research and trends to identify whitespace opportunities.

To validate demand, I conducted primary research through a consumer survey with 1,000+ participants of all genders and ages, as well as an expert interview with renowned dermatologist Dr. Nelson Novick. The research confirmed consumer need for scar solutions across different skin and scar types.

From there, I developed cohesive branding aligned with an inclusive mission and brought four research-backed hero products to life. I collaborated with Rose Sparacio, a clinical research and claims advisor, to develop efficacious ingredient formulations tailored to each scar type.

Throughout the final execution of skram, I led a cross-functional team spanning industrial design, graphic design, social strategy, photography, and film to bring the brand to life.`,
    },
    mockups: [],
    videos: ["/projects/skram-video.mp4"],
    videoSectionTitle: "Brand Teaser",
    videoAbovePitchDeck: "/projects/MARKS to SKRAM 01_1.mp4",
    pitchDeck: [
      "/projects/skram-deck/01.jpg",
      "/projects/skram-deck/02.jpg",
      "/projects/skram-deck/03.jpg",
      "/projects/skram-deck/04.jpg",
      "/projects/skram-deck/05.jpg",
      "/projects/skram-deck/06.jpg",
      "/projects/skram-deck/07.jpg",
      "/projects/skram-deck/08.jpg",
      "/projects/skram-deck/09.jpg",
      "/projects/skram-deck/10.jpg",
      "/projects/skram-deck/11.jpg",
      "/projects/skram-deck/12.jpg",
      "/projects/skram-deck/13.jpg",
      "/projects/skram-deck/14.jpg",
      "/projects/skram-deck/15.jpg",
      "/projects/skram-deck/16.jpg",
      "/projects/skram-deck/17.jpg",
      "/projects/skram-deck/18.jpg",
      "/projects/skram-deck/19.jpg",
      "/projects/skram-deck/20.jpg",
      "/projects/skram-deck/21.jpg",
      "/projects/skram-deck/22.jpg",
      "/projects/skram-deck/23.jpg",
      "/projects/skram-deck/24.jpg",
      "/projects/skram-deck/25.jpg",
      "/projects/skram-deck/26.jpg",
      "/projects/skram-deck/27.jpg",
      "/projects/skram-deck/28.jpg",
      "/projects/skram-deck/29.jpg",
      "/projects/skram-deck/30.jpg",
    ],
  },
  {
    slug: "ds-durga",
    title: "DS & DURGA",
    subtitle: "Cowgirl & Cowboy Grass Film — Comfort in Chaos",
    category: "Brand Film",
    year: "2025",
    dateRange: "Feb 2025 – Mar 2025",
    skills: ["Video Editing", "Creative Direction", "Storytelling", "Adobe Premiere Pro"],
    description: `Inspired by the Cowgirl & Cowboy Grass fragrances from DS & DURGA, Comfort in Chaos beautifully portrays the essence of young love and the importance of trusting your instincts through mesmerizing movement sequences. This group project entailed art history research, concept development, casting, location scouting, directing & editing.`,
    goals: "",
    approach: "",
    coverImage: "/projects/ds-durga.png",
    inspirationVideos: [
      "BZcbntA4bVY",
      "bdBuDg7mrT8",
      "SLC0omm3N98",
      "7e-qe3RYXWw",
    ],
    mockups: [],
    videos: ["/projects/DS%26DURGA-film.mp4"],
    videoSectionTitle: "Comfort in Chaos",
    pitchDeck: [
      "/projects/ds-durga-deck/01.png",
      "/projects/ds-durga-deck/02.png",
      "/projects/ds-durga-deck/03.png",
      "/projects/ds-durga-deck/04.png",
      "/projects/ds-durga-deck/05.png",
      "/projects/ds-durga-deck/06.png",
      "/projects/ds-durga-deck/07.png",
      "/projects/ds-durga-deck/08.png",
      "/projects/ds-durga-deck/09.png",
      "/projects/ds-durga-deck/10.png",
      "/projects/ds-durga-deck/11.png",
      "/projects/ds-durga-deck/12.png",
      "/projects/ds-durga-deck/13.png",
      "/projects/ds-durga-deck/14.png",
      "/projects/ds-durga-deck/15.png",
      "/projects/ds-durga-deck/16.png",
      "/projects/ds-durga-deck/17.png",
      "/projects/ds-durga-deck/18.png",
      "/projects/ds-durga-deck/19.png",
      "/projects/ds-durga-deck/20.png",
      "/projects/ds-durga-deck/21.png",
      "/projects/ds-durga-deck/22.png",
      "/projects/ds-durga-deck/23.png",
      "/projects/ds-durga-deck/24.png",
      "/projects/ds-durga-deck/25.png",
      "/projects/ds-durga-deck/26.png",
    ],
  },
  {
    slug: "thin-wild-mercury",
    title: "Thin Wild Mercury",
    subtitle: "Instagram Carousel Campaign — Signature Collections",
    category: "Advertising",
    year: "2025",
    dateRange: "Jan 2025 – Feb 2025",
    skills: ["Content Creation", "Social Strategy", "Adobe Photoshop"],
    description: `Thin Wild Mercury is a niche, luxury perfume brand inspired by the cultural history and artistic spirit of Los Angeles and New York. Their mission is to craft evocative, story-driven scents that transport wearers to specific places and moments. For this project I created two Instagram carousels that align with their branding, while pushing the boundaries of what they currently have on their social media platforms.`,
    goals: "",
    approach: "",
    coverImage: "/projects/thin-wild-mercury.png",
    heroImage: "/projects/thin-wild-mercury-hero.png",
    yearTextLight: true,
    thumbnailObjectPosition: "28% center",
    imageBelowOverview: "/projects/thin-wild-mercury-carousel.png",
    imageBelowOverviewCompact: true,
    mockups: [],
    videos: [],
    pitchDeck: [
      "/projects/thin-wild-mercury-deck/01.png",
      "/projects/thin-wild-mercury-deck/02.png",
      "/projects/thin-wild-mercury-deck/03.png",
      "/projects/thin-wild-mercury-deck/04.png",
      "/projects/thin-wild-mercury-deck/05.png",
      "/projects/thin-wild-mercury-deck/06.png",
      "/projects/thin-wild-mercury-deck/07.png",
      "/projects/thin-wild-mercury-deck/08.png",
      "/projects/thin-wild-mercury-deck/09.png",
      "/projects/thin-wild-mercury-deck/10.png",
      "/projects/thin-wild-mercury-deck/11.png",
      "/projects/thin-wild-mercury-deck/12.png",
    ],
  },
  {
    slug: "poppi-x-glow-recipe",
    hidden: true,
    title: "Poppi x Glow Recipe",
    subtitle: "Brand Collaboration",
    category: "Packaging Design",
    year: "2025",
    dateRange: "Jan 2025",
    skills: ["Packaging Design", "Adobe Illustrator"],
    description: `Developed a new product & packaging for a brand collaboration with Poppi & Glow Recipe. This is a new venture from what either of these brands have already done but is a logical product category expansion for both. I developed a new product concept & designed unique packaging that is a beautiful blend between the two branding styles.`,
    goals: "",
    approach: "",
    coverImage: "/projects/poppi-x-glow-recipe.png",
    heroImage: "/projects/poppi-x-glow-recipe-hero.png",
    thumbnailObjectPosition: "center 54%",
    imageBelowOverview: "/projects/poppi-x-glow-recipe-overview.png",
    imageBelowOverviewCompact: true,
    imagesBelowOverview: [
      "/projects/poppi-x-glow-recipe-overview-2.png",
      "/projects/poppi-x-glow-recipe-overview-3.png",
      "/projects/poppi-x-glow-recipe-overview-4.png",
    ],
    mockups: [],
    videos: [],
    pitchDeck: [],
  },
  {
    slug: "good-light-cosmetics",
    title: "good light cosmetics",
    subtitle: "Marketing Internship — Remote",
    category: "Digital Marketing",
    year: "2025",
    dateRange: "Sep 2024 – Mar 2025",
    skills: ["CRM Marketing", "Email & SMS", "Industry Research", "Copy Writing", "Digital Marketing", "Shopify"],
    description: `From September 2024 to March 2025, I had the privilege of interning at Good Light Cosmetics as a marketing intern. In this role, I contributed to CRM campaigns, social media content creation, industry research, data analytics, and customer service, gaining hands-on experience in various aspects of beauty marketing. This experience exposed me to platforms like Shopify, Klaviyo, Okendo, Attentive, ViralSweep, MidJourney, Typeform, & Canva.`,
    goals: "",
    approach: "",
    coverImage: "/projects/good-light-cosmetics.png",
    heroImage: "/projects/good-light-cosmetics-hero.png",
    thumbnailObjectPosition: "center 42%",
    heroObjectPosition: "center 45%",
    mockups: [],
    videos: [],
    pitchDeck: [
      "/projects/good-light-deck/02.png",
      "/projects/good-light-deck/03.png",
      "/projects/good-light-deck/04.png",
      "/projects/good-light-deck/05.png",
    ],
  },
  {
    slug: "absolute",
    title: "Absolute",
    subtitle: "Future of Beauty Care",
    category: "Research & Development",
    year: "2024",
    dateRange: "Mar 2024 – May 2024",
    skills: ["Industry Research", "Product Development", "Brand Identity", "3D Mockups", "Figma"],
    description: `A research-based SCAD Pro focused on bringing innovation & technology to the future beauty care market. The two roles I was most hands-on with were the logistics of an epigenetic skincare brand, brand identity development, & product mockups.

This project involves industry research, product development, pricing strategy, & launch campaign planning. The platforms utilized were WGSN, Statista, Adobe Photoshop, Figma, & Midjourney AI.`,
    goals: "",
    approach: "",
    coverImage: "/projects/absolute.png",
    imageBelowOverview: "/projects/absolute-overview-1.png",
    imagesBelowOverview: [
      "/projects/absolute-overview-3.png",
    ],
    mockups: [],
    videos: [],
    pitchDeck: [
      "/projects/absolute-deck/01.png",
      "/projects/absolute-deck/02.png",
      "/projects/absolute-deck/03.png",
      "/projects/absolute-deck/04.png",
      "/projects/absolute-deck/05.png",
      "/projects/absolute-deck/06.png",
      "/projects/absolute-deck/07.png",
      "/projects/absolute-deck/08.png",
      "/projects/absolute-deck/09.png",
      "/projects/absolute-deck/10.png",
      "/projects/absolute-deck/11.png",
      "/projects/absolute-deck/12.png",
      "/projects/absolute-deck/13.png",
      "/projects/absolute-deck/14.png",
      "/projects/absolute-deck/15.png",
      "/projects/absolute-deck/16.png",
      "/projects/absolute-deck/17.png",
      "/projects/absolute-deck/18.png",
      "/projects/absolute-deck/19.png",
      "/projects/absolute-deck/20.png",
      "/projects/absolute-deck/21.png",
      "/projects/absolute-deck/22.png",
      "/projects/absolute-deck/23.png",
    ],
  },
  {
    slug: "mara-beauty",
    title: "Mara Beauty",
    subtitle: "Global Market Expansion — Vietnam",
    category: "Global Expansion",
    year: "2024",
    dateRange: "Jan 2024 – Mar 2024",
    skills: ["Global Marketing", "Industry Research", "Product Development", "Pricing Strategy", "Adobe Photoshop", "Adobe Illustrator"],
    description: `For my Brand Management in Global Markets class, I was tasked to research a country & identify a new product to launch successfully to market. Vietnam was the country I selected & the goal was to find a brand that would connect with local consumer needs and cultural values.

This project involves industry research, product development, pricing strategy, & launch campaign planning. The platforms utilized were WGSN, Statista, Photoshop, Illustrator, & Midjourney AI.`,
    goals: "",
    approach: "",
    coverImage: "/projects/mara-beauty.png",
    thumbnailObjectPosition: "60% 56%",
    heroObjectPosition: "60% 44%",
    mockups: [],
    videos: [],
    pitchDeck: [
      "/projects/mara-beauty-deck/01.png",
      "/projects/mara-beauty-deck/02.png",
      "/projects/mara-beauty-deck/03.png",
      "/projects/mara-beauty-deck/04.png",
      "/projects/mara-beauty-deck/05.png",
      "/projects/mara-beauty-deck/06.png",
      "/projects/mara-beauty-deck/07.png",
      "/projects/mara-beauty-deck/08.png",
      "/projects/mara-beauty-deck/09.png",
      "/projects/mara-beauty-deck/10.png",
      "/projects/mara-beauty-deck/11.png",
      "/projects/mara-beauty-deck/12.png",
      "/projects/mara-beauty-deck/13.png",
      "/projects/mara-beauty-deck/14.png",
      "/projects/mara-beauty-deck/15.png",
    ],
  },
  {
    slug: "byredo",
    title: "BYREDO",
    subtitle: "Fragrance Launch",
    category: "Fragrance",
    year: "2023",
    dateRange: "Jan 2023 – Feb 2023",
    skills: ["Story Telling", "Product Mockups", "Adobe Photoshop"],
    description: `Introducing 'Nocturne,' a new BYREDO scent. Experience the scent of midnight—a moment suspended between invitation and indulgence.

In my Visual Communication for Consumer Engagement class, I had the opportunity to curate a new scent at the SCAD fragrance lab. To bring the fragrance to life, I created a fragrance story, product mockups, and mock advertisements with Adobe Photoshop.`,
    goals: "",
    approach: "",
    coverImage: "/projects/byredo.png",
    yearTextLight: true,
    thumbnailObjectPosition: "54% 46%",
    heroObjectPosition: "52% 44%",
    imageBelowOverview: "/projects/byredo-overview-1.png",
    imagesBelowOverview: [
      "/projects/byredo-overview-2.png",
      "/projects/byredo-overview-3.png",
      "/projects/byredo-overview-4.png",
    ],
    mockups: [],
    videos: [],
    pitchDeck: [],
  },
  {
    slug: "elf-cosmetics",
    title: "E.L.F. Cosmetics",
    subtitle: "Fashion Scholarship Fund — Group Project",
    category: "FSF Project",
    year: "2024",
    dateRange: "Sep 2024 – Oct 2024",
    skills: ["Merchandising", "Industry Research", "AI", "Social Listening", "Microsoft Excel"],
    description: `A group collaboration with three other members to identify the future of merchandising utilizing AI. In today's digital world, AI & big data are widely adopted to benefit businesses.

We identified that AI-powered social listening can leverage capabilities like tracking emerging trends & gaining competitive insights through social media analysis. By analyzing this data, e.l.f. can forecast market shifts & respond proactively to consumer demands through e-commerce channels.

The tasks I worked on for this group project were industry research, presentation design, the website & online shopping mockups, distribution, the assortment plan & the 6-month plan.`,
    goals: "",
    approach: "",
    coverImage: "/projects/elf-cosmetics.png",
    mockups: [],
    videos: [],
    pitchDeck: [
      "/projects/elf-deck/01.png",
      "/projects/elf-deck/02.png",
      "/projects/elf-deck/03.png",
      "/projects/elf-deck/04.png",
      "/projects/elf-deck/05.png",
      "/projects/elf-deck/06.png",
      "/projects/elf-deck/07.png",
      "/projects/elf-deck/08.png",
      "/projects/elf-deck/09.png",
      "/projects/elf-deck/10.png",
      "/projects/elf-deck/11.png",
      "/projects/elf-deck/12.png",
      "/projects/elf-deck/13.png",
      "/projects/elf-deck/14.png",
      "/projects/elf-deck/15.png",
      "/projects/elf-deck/16.png",
      "/projects/elf-deck/17.png",
    ],
  },
  {
    hidden: true,
    slug: "digital-collaging",
    title: "Digital Collaging",
    subtitle: "Moodboards",
    category: "Moodboard",
    year: "2024",
    dateRange: "2024",
    skills: ["Art History", "Creative Inspiration", "Digital Collaging", "Adobe Photoshop"],
    description: `Artists used in the collages:

Vanessa Beecroft
Edward Hopper
Babette Mangolte
Keith Dotson
Harold Davis
Alex Katz
K Haring
Banksy
Eric White
Carolee Schneemann
Jenny Holzer`,
    goals: "",
    approach: "",
    coverImage: "/projects/digital-collaging.png",
    imageBelowOverview: "/projects/digital-collaging/01.png",
    imagesBelowOverview: [
      "/projects/digital-collaging/02.png",
      "/projects/digital-collaging/03.png",
      "/projects/digital-collaging/04.png",
      "/projects/digital-collaging/05.png",
      "/projects/digital-collaging/06.png",
    ],
    mockups: [],
    videos: [],
    pitchDeck: [],
  },
  {
    slug: "supergoop-x-red-bull",
    title: "Supergoop! x Red Bull",
    subtitle: "Brand Collaboration",
    category: "Packaging Design",
    year: "2024",
    dateRange: "Feb 2023 – Mar 2023",
    skills: ["Packaging Design", "Brand Concept", "Digital Renderings", "Adobe Illustrator", "Adobe Dimension"],
    description: `The goal was to create a brand experience with two unexpected brands. We developed a line of SPF products taking inspiration from the Red Bull Summer & Winter Editions. We formulated SPF products with ingredients to compliment skin concerns for the season & also developed SPF lip balms with the 3 most popular Red Bull flavors. I was involved with the brand collaboration conception, branding logistics & packaging design. I also executed the mock-ups on Adobe Dimension.`,
    goals: "",
    approach: "",
    coverImage: "/projects/supergoop-x-red-bull.png",
    heroObjectPosition: "center 78%",
    imageBelowOverview: "/projects/supergoop-overview-1.png",
    imagesBelowOverview: [
      "/projects/supergoop-overview-2.png",
      "/projects/supergoop-overview-3.png",
      "/projects/supergoop-overview-4.png",
    ],
    mockups: [],
    videos: [],
    pitchDeck: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
