import type { Locale } from "@/i18n/config";

/** A string available in every supported locale. */
export type Localized = Record<Locale, string>;

export const profile = {
  name: "hankh.dev",
  email: "hankh.dev@gmail.com",
  /** Public, shareable links. Replace with your own. */
  socials: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    x: "https://x.com/",
  },
  location: {
    ko: "대한민국 · 서울",
    en: "Seoul, South Korea",
  } satisfies Localized,
};

export type SkillGroup = {
  category: Localized;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: { ko: "언어", en: "Languages" },
    items: ["Java", "Kotlin", "TypeScript", "JavaScript", "Python", "Go"],
  },
  {
    category: { ko: "백엔드", en: "Backend" },
    items: ["Spring", "NestJS", "Node.js", "JPA", "TypeORM", "REST", "Swagger", "Kafka"],
  },
  {
    category: { ko: "데이터베이스", en: "Databases" },
    items: ["MySQL", "MariaDB", "PostgreSQL", "MSSQL", "Oracle", "Redis", "Elasticsearch"],
  },
  {
    category: { ko: "인프라 · DevOps", en: "Infra & DevOps" },
    items: ["AWS (EC2, S3, Lambda, ALB)", "Docker", "Cloudflare"],
  },
  {
    category: { ko: "프론트엔드 · 앱", en: "Frontend & App" },
    items: ["React", "Next.js", "React Native (Expo)", "HTML", "CSS"],
  },
  {
    category: { ko: "AI · 도구", en: "AI & Tools" },
    items: ["Claude Code", "Codex", "Antigravity", "Git", "Figma"],
  },
];

export type Project = {
  slug: string;
  title: string;
  year: string;
  description: Localized;
  tags: string[];
  /** Optional outbound links. */
  href?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "portfolio",
    title: "Portfolio Website",
    year: "2026",
    description: {
      ko: "Next.js와 Tailwind CSS로 만든 다국어 포트폴리오. 다크모드, MDX 블로그, 스크롤 애니메이션을 직접 구현했습니다.",
      en: "A multilingual portfolio built with Next.js and Tailwind CSS, featuring dark mode, an MDX blog, and scroll animations.",
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
    href: "#",
    repo: "https://github.com/",
    featured: true,
  },
  {
    slug: "realtime-dashboard",
    title: "Realtime Analytics Dashboard",
    year: "2025",
    description: {
      ko: "WebSocket 기반 실시간 데이터 시각화 대시보드. 수천 개의 이벤트를 끊김 없이 렌더링하도록 가상화와 메모이제이션을 적용했습니다.",
      en: "A WebSocket-powered realtime data dashboard. Applied virtualization and memoization to render thousands of events without jank.",
    },
    tags: ["React", "WebSocket", "D3", "Zustand"],
    href: "#",
    repo: "https://github.com/",
    featured: true,
  },
  {
    slug: "storefront",
    title: "E-commerce Storefront",
    year: "2024",
    description: {
      ko: "서버 사이드 렌더링과 이미지 최적화로 LCP를 40% 개선한 커머스 프론트엔드. 결제·장바구니 플로우를 설계했습니다.",
      en: "A commerce frontend that improved LCP by 40% through SSR and image optimization. Designed the cart and checkout flows.",
    },
    tags: ["Next.js", "Stripe", "React Query"],
    href: "#",
    repo: "https://github.com/",
    featured: true,
  },
  {
    slug: "design-system",
    title: "Component Design System",
    year: "2024",
    description: {
      ko: "팀 전반에서 재사용하는 컴포넌트 라이브러리. 접근성(A11y)을 기본으로 갖추고 Storybook으로 문서화했습니다.",
      en: "A shared component library used across teams. Built accessibility in by default and documented everything in Storybook.",
    },
    tags: ["React", "Storybook", "A11y"],
    repo: "https://github.com/",
  },
];

export type ExperienceItem = {
  role: Localized;
  company: string;
  /** Use the literal "present" sentinel for an ongoing role. */
  start: string;
  end: string;
  description: Localized;
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: { ko: "프론트엔드 개발자", en: "Frontend Developer" },
    company: "Acme Corp",
    start: "2023",
    end: "present",
    description: {
      ko: "핵심 웹 제품의 프론트엔드를 담당하며 성능 최적화와 디자인 시스템 도입을 주도했습니다.",
      en: "Led frontend for the core web product, driving performance optimization and design-system adoption.",
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    role: { ko: "주니어 프론트엔드 개발자", en: "Junior Frontend Developer" },
    company: "Startup Inc.",
    start: "2021",
    end: "2023",
    description: {
      ko: "0에서 1까지 제품을 만드는 초기 단계에 합류해 다양한 기능을 빠르게 구현하고 출시했습니다.",
      en: "Joined at the zero-to-one stage, shipping a wide range of features quickly in a fast-moving environment.",
    },
    tags: ["React", "JavaScript", "Node.js"],
  },
  {
    role: { ko: "컴퓨터공학 학사", en: "B.S. in Computer Science" },
    company: "University",
    start: "2017",
    end: "2021",
    description: {
      ko: "컴퓨터공학을 전공하며 웹과 사용자 인터페이스에 관심을 키웠습니다.",
      en: "Studied computer science and grew a focus on the web and user interfaces.",
    },
    tags: [],
  },
];
