// This file mirrors the shape of the data that will eventually come from
// your Express + MongoDB API (GET /api/about, /api/projects, etc).
// Swap each constant below for a `fetch()` call once the backend is ready —
// component code will not need to change.

export const about = {
  name: "Munna",
  role: "Full-Stack Developer",
  tagline:
    "I build reliable web platforms — from Laravel booking systems to Next.js products — for agencies and startups in Bangladesh and beyond.",
  bio: [
    "I run Nexara IT Solutions, where I design and ship web applications end to end: architecture, backend logic, and interfaces that people actually enjoy using.",
    "Most of my recent work has been deep in Laravel — integrating GDS/flight-booking providers, building admin dashboards, and untangling gnarly business logic. This site is my first full Next.js + Express build, made to show that range."
  ],
  location: "Gazipur, Dhaka, Bangladesh",
  resumeUrl: "/resume.pdf",
  email: "hello@example.com",
  socials: [
    { label: "GitHub", url: "https://github.com/yourhandle" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourhandle" },
    { label: "Facebook", url: "https://facebook.com/yourhandle" }
  ]
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  techStack: string[];
  year: string;
  status: "Live" | "In progress" | "Archived";
};

export const projects: Project[] = [
  {
    slug: "flight-booking-system",
    title: "Multi-GDS Flight Booking Platform",
    summary:
      "A Laravel booking engine unifying Sabre and Riya GDS providers behind one consistent fare and checkout flow.",
    techStack: ["Laravel", "Blade", "Tailwind CSS", "MySQL"],
    year: "2026",
    status: "Live"
  },
  {
    slug: "bkash-nagad-gateway",
    title: "bKash / Nagad Payment Gateway Plugin",
    summary:
      "A WooCommerce plugin adding native bKash and Nagad checkout for Bangladeshi merchants.",
    techStack: ["PHP", "WordPress", "WooCommerce API"],
    year: "2026",
    status: "In progress"
  },
  {
    slug: "school-management-saas",
    title: "Coaching Center Management SaaS",
    summary:
      "A multi-tenant SaaS for attendance, fees, and result tracking, built for local coaching centers.",
    techStack: ["Laravel", "MySQL", "Alpine.js"],
    year: "2026",
    status: "In progress"
  }
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Nexara IT Solutions",
    role: "Founder & Full-Stack Developer",
    period: "2024 — Present",
    points: [
      "Lead development for international and local client projects across Laravel and WordPress.",
      "Scoped and shipped a multi-provider flight booking system integrating live GDS APIs.",
      "Building a roadmap of SaaS products, starting with a bKash/Nagad payment gateway plugin."
    ]
  }
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { category: "Backend", items: ["PHP", "Laravel", "Express.js", "REST APIs"] },
  { category: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "Blade"] },
  { category: "Database", items: ["MySQL", "MongoDB", "Redis"] },
  { category: "Tools", items: ["Git/GitHub", "Docker", "Postman", "Linux"] }
];
