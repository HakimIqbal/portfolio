export const profile = {
  name: "Muhammad Iqbal Alhakim",
  shortName: "Hakim",
  role: "Backend & AI Engineer",
  location: "Jember, Indonesia",
  timezone: "GMT+7",
  email: "moeh.iqbal.hakim@gmail.com",
  github: "https://github.com/HakimIqbal",
  githubLabel: "github.com/HakimIqbal",
  linkedin: "https://linkedin.com/in/muhiqbalhakim",
  linkedinLabel: "linkedin.com/in/muhiqbalhakim",
  headline: "Backend systems and AI pipelines, built to hold up in production.",
  subtext:
    "I ship secure APIs and LLM-powered products for organizations across 67+ countries.",
} as const;

export type Fact = { label: string; value: string; note?: string };

export const facts: Fact[] = [
  {
    label: "Currently",
    value: "Backend Engineer, PPI Dunia",
    note: "NestJS donor platform, 150,000+ members",
  },
  {
    label: "Education",
    value: "Double degree, 2022-2026",
    note: "D4 Informatics, Politeknik Negeri Jember (GPA 3.58) + BSc CS, MSU Malaysia",
  },
  {
    label: "Recognition",
    value: "Bangkit Academy Distinction Graduate",
    note: "Google / Gojek / Tokopedia / Traveloka, 900+ hours",
  },
  {
    label: "Certification",
    value: "BNSP Certified Web Developer",
    note: "Badan Nasional Sertifikasi Profesi, 2025",
  },
];

export type Project = {
  id: string;
  index: string;
  name: string;
  role: string;
  description: string;
  stack: string[];
  year: string;
  href?: string;
  hrefLabel?: string;
  image?: { src: string; width: number; height: number; alt: string };
  secondaryImage?: { src: string; width: number; height: number; alt: string };
  spec?: { k: string; v: string }[];
  metrics?: string[];
};

export const projects: Project[] = [
  {
    id: "donor-platform",
    index: "01",
    name: "Donor & Endowment Platform",
    role: "Backend Engineer",
    description:
      "Donor management for PPI Dunia at mengabdi.ppi.id. Modular NestJS backend with JWT auth, DTO validation, RBAC, and Admin + Analytics modules serving an organization of 150,000+ members across 67+ countries.",
    stack: ["NestJS", "TypeScript", "Supabase RLS", "PostgreSQL"],
    year: "2025-2026",
    href: "https://mengabdi.ppi.id/",
    hrefLabel: "mengabdi.ppi.id",
    image: {
      src: "/projects/mengabdi.webp",
      width: 1272,
      height: 1180,
      alt: "Live landing page of mengabdi.ppi.id, the PPI Dunia donor and endowment platform",
    },
    metrics: ["150,000+ members", "67+ countries"],
    secondaryImage: {
      src: "/projects/dpbd.webp",
      width: 1400,
      height: 875,
      alt: "DPBD donor and endowment platform repository README documenting 14-role RBAC, audit trail, and investment modules",
    },
  },
  {
    id: "diaspora-hub",
    index: "02",
    name: "Diaspora Business Hub",
    role: "Full-Stack Developer",
    description:
      "Connectivity platform for Indonesian diaspora businesses in 15 countries. Supabase Row Level Security with security-definer functions, RBAC administration, CSP hardening, rate limiting, and anti-scraping for services integrated with 120+ PPI organizations.",
    stack: ["Next.js", "Supabase", "RBAC", "CSP", "CI/CD"],
    year: "2026",
    spec: [
      { k: "Coverage", v: "15 countries" },
      { k: "Integrations", v: "120+ PPI organizations" },
      { k: "Access control", v: "Supabase RLS + security-definer functions" },
      { k: "Hardening", v: "CSP, rate limiting, anti-scraping" },
      { k: "Delivery", v: "Automated testing + CI/CD" },
    ],
    metrics: ["15 countries", "120+ PPI organizations"],
  },
  {
    id: "draftmind",
    index: "03",
    name: "DraftMind",
    role: "Full-Stack Developer",
    description:
      "AI-powered SaaS for writing and reviewing Product Requirement Documents. TipTap collaborative editor with version history and PDF/DOCX export, Vercel AI SDK routing across Anthropic, OpenAI, and Groq, Supabase SSR auth, and LangSmith tracing.",
    stack: ["Next.js 15", "TipTap", "Vercel AI SDK", "Supabase SSR", "Docker"],
    year: "2026",
    href: "https://draftmind.web.id/",
    hrefLabel: "draftmind.web.id",
    image: {
      src: "/projects/draftmind.webp",
      width: 1600,
      height: 1000,
      alt: "DraftMind PRD editor interface with collaborative TipTap document editing",
    },
    secondaryImage: {
      src: "/projects/draftmind-dashboard.webp",
      width: 1600,
      height: 1000,
      alt: "DraftMind dashboard showing project overview and document pipeline",
    },
  },
  {
    id: "prdify",
    index: "04",
    name: "PRDify",
    role: "ML Engineer, Bangkit capstone C242-PM",
    description:
      "Automated PRD generation as a Flask + Docker microservice on Groq Llama 3 70B. LangChain ConversationBufferMemory turns 10 product parameters into validated JSON Schema, with LangSmith observability for latency, tokens, and streaming.",
    stack: ["Flask", "Docker", "Llama 3 70B", "LangChain", "LangSmith"],
    year: "2024",
    href: "https://github.com/unChris666/C242-PM02",
    hrefLabel: "capstone repository",
    image: {
      src: "/projects/prdify.webp",
      width: 1400,
      height: 875,
      alt: "PRDify Bangkit capstone C242-PM02 repository README describing the ML, backend, and cloud architecture",
    },
    metrics: ["Distinction Graduate capstone"],
  },
];

export type SecondaryProject = {
  name: string;
  description: string;
  stack: string;
  href?: string;
};

export const secondaryProjects: SecondaryProject[] = [
  {
    name: "ARTEX",
    description: "Autonomous penetration testing platform with agent-driven task orchestration.",
    stack: "Go",
    href: "https://github.com/HakimIqbal/ARTEX",
  },
  {
    name: "onmi-routers",
    description: "OpenAI-compatible AI gateway with multi-account routing and circuit breakers.",
    stack: "Go",
    href: "https://github.com/HakimIqbal/onmi-routers",
  },
  {
    name: "Pixel Quest",
    description: "Browser platformer with enemy AI, stomp mechanics, and adaptive mobile controls.",
    stack: "Phaser 3 + TypeScript",
  },
];

export type Experience = {
  period: string;
  role: string;
  org: string;
  place: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    period: "Dec 2025 - Sep 2026",
    role: "Backend Engineer",
    org: "PPI Dunia",
    place: "Malaysia",
    points: [
      "NestJS backend for the Donor Management System (mengabdi.ppi.id): JWT auth, DTO validation, RBAC, Admin + Analytics modules for 150,000+ members across 67+ countries.",
      "Supabase Row Level Security and security-definer functions for the Diaspora Business Hub spanning 15 countries.",
      "Rate limiting and anti-scraping for services integrated with 120+ PPI organizations.",
    ],
  },
  {
    period: "Feb - Jun 2025",
    role: "Backend Engineering Intern",
    org: "PT Lambda Solusi Informatika",
    place: "Indonesia",
    points: [
      "FastAPI services for a multimodal AI chatbot: conversation, coding assistance, and document Q&A.",
      "RAG pipeline with document chunking, BAAI/bge-m3 embeddings, and Pinecone semantic search.",
      "Multi-LLM integration across Groq, Google Gemini, and OpenRouter; Supabase + Firebase OAuth.",
    ],
  },
  {
    period: "Oct - Dec 2024",
    role: "ML Engineer Intern",
    org: "Algo Network (PRDify)",
    place: "Indonesia",
    points: [
      "Flask + Docker microservice on Groq Llama 3 70B for automated PRD generation.",
      "LangSmith observability for latency, token usage, and streaming responses.",
      "LangChain ConversationBufferMemory mapping 10 product parameters to validated JSON Schema.",
    ],
  },
  {
    period: "Sep - Dec 2024",
    role: "ML Cohort, Distinction Graduate",
    org: "Bangkit Academy",
    place: "Google / Gojek / Tokopedia / Traveloka",
    points: [
      "900+ hours over 20 weeks: TensorFlow, deep learning, generative AI, and ML deployment.",
      "Industry capstone with Algo Network, graduated with Distinction recognition.",
    ],
  },
];

export type CapabilityGroup = { discipline: string; items: string[] };

export const capabilities: CapabilityGroup[] = [
  { discipline: "Backend", items: ["NestJS", "FastAPI", "Flask", "Laravel", "Express", "Node.js"] },
  { discipline: "AI / ML", items: ["RAG", "LangChain", "TensorFlow", "LLM routing", "Pinecone", "LangSmith"] },
  { discipline: "Data", items: ["PostgreSQL", "MySQL", "Supabase", "RLS design", "Schema validation"] },
  { discipline: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind", "TipTap", "Phaser 3"] },
  { discipline: "Security", items: ["JWT / RBAC", "Rate limiting", "CSP", "Anti-scraping", "API hardening"] },
  { discipline: "Infra", items: ["Docker", "CI/CD", "PM2", "Vercel", "Webpack", "Vitest"] },
];

export const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "Malay", level: "Intermediate" },
  { name: "English", level: "Intermediate" },
];
