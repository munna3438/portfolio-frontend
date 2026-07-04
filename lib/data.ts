export const about = {
  name: "Md Masudur Rahman Munna",
  role: "Full-Stack Web Developer",
  tagline:
    "I build Laravel & Next.js platforms — integrating third-party APIs, optimizing queries, and leading full-cycle delivery from VPS to domain.",
  bio: [
    "Full-Stack Developer focused on Laravel backend and modern frontends. Currently leading projects at Ticket Booking.com — working with third-party APIs, database optimization, and full deployment on VPS.",
    "Previously at Touch And Solve, I delivered 7+ production systems: institute management, real-time tracking, e-commerce, VAT management, and HR platforms. I own the full stack and mentor teams."
  ],
  location: "Dhaka, Bangladesh",
  resumeUrl: "/cv.pdf",
  email: "mdmashudurrahmanmunna@gmail.com",
  photo: "/my-image.png",
  socials: [
    { label: "GitHub", url: "https://github.com/munna3438" },
    { label: "LinkedIn", url: "https://linkedin.com/in/munna3438" },
    { label: "Facebook", url: "https://facebook.com/munna3438" }
  ]
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  techStack: string[];
  year: string;
  status: "Live" | "In progress" | "Archived";
  screenshot?: string;
};

export const projects: Project[] = [
  {
    slug: "apromise-management",
    title: "Apromise — Institute & Student Management",
    summary:
      "Centralized system for managing students, attendance, results, and job placement with an API-driven backend.",
    techStack: ["Laravel", "PHP", "MySQL"],
    year: "2025",
    status: "Live",
    screenshot: "/project-1.png"
  },
  {
    slug: "geotrack-tracking",
    title: "GeoTrack — Real-Time Location & Monitoring",
    summary:
      "Tracking system with geofencing, RESTful APIs for mobile, real-time location visualization, and secure authentication.",
    techStack: ["Laravel", "PHP", "MySQL"],
    year: "2025",
    status: "Live",
    screenshot: "/project-2.png"
  },
  {
    slug: "al-hadi-express",
    title: "Al Hadi Express — Multi-Vendor E-Commerce",
    summary:
      "Multi-vendor eCommerce with role-based auth, online payments, product filtering, and performance optimization.",
    techStack: ["Laravel", "PHP", "MySQL", "jQuery", "Tailwind"],
    year: "2025",
    status: "Live",
    screenshot: "/project-3.png"
  },
  {
    slug: "nbr-hr-management",
    title: "NBR — Officer & HR Management",
    summary:
      "HR solution for officer transfers, leave management, training tracking, and an AI-powered monitoring dashboard.",
    techStack: ["Laravel", "React", "Redux", "MySQL", "Tailwind"],
    year: "2025",
    status: "Live",
    screenshot: "/project-4.png"
  }
];

export const projectScreenshots = [
  { src: "/project-1.png", alt: "Apromise Student Management" },
  { src: "/project-2.png", alt: "GeoTrack Location Monitoring" },
  { src: "/project-3.png", alt: "Al Hadi Express E-Commerce" },
  { src: "/project-4.png", alt: "NBR HR Management Dashboard" }
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Ticket Booking.com",
    role: "Full-Stack Web Developer & Team Lead",
    period: "Feb 2026 — Present",
    points: [
      "Integrate and manage multiple third-party APIs for flight and travel booking systems.",
      "Optimize complex database queries to improve response time and system throughput.",
      "Lead full project lifecycle as team lead — architecture, development, and deployment on VPS.",
      "Manage Git workflows, server configuration, domain setup, and production releases.",
      "Develop and maintain frontend and backend features across Laravel projects."
    ]
  },
  {
    company: "Touch And Solve",
    role: "Full-Stack Web Developer",
    period: "Nov 2023 — Jan 2026",
    points: [
      "Delivered 7+ production projects including institute management, real-time tracking, e-commerce, VAT management, and HR systems.",
      "Built complete backend APIs and optimized database queries for performance and scalability.",
      "Developed responsive frontends with React, Next.js, jQuery, and Tailwind CSS.",
      "Handled server deployment, domain configuration, and ongoing client support for live products."
    ]
  }
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { category: "Backend", items: ["PHP / Laravel", "Express.js / Node.js", "REST APIs", "MySQL"] },
  { category: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "Bootstrap", "jQuery"] },
  { category: "DevOps & Tools", items: ["Linux", "Git / GitHub / GitLab", "VPS Deployment", "Nginx", "Postman"] },
  { category: "Design & Others", items: ["Figma", "Photoshop", "Canva", "VS Code", "CodePen"] }
];
