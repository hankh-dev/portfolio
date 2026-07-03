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
  /** Optional scannable bullet points shown on the card. */
  highlights?: Record<Locale, string[]>;
  tags: string[];
  /** Optional outbound links. */
  href?: string;
  /** Custom label for the href link (defaults to the dictionary's "view project"). */
  hrefLabel?: Localized;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "serobonneung",
    title: "세로본능",
    year: "2025–2026",
    description: {
      ko: "숏폼 영상 앱의 백엔드를 설계·개발했습니다. 영상·자막 업로드와 mp4→HLS 변환 파이프라인부터 결제·정산까지, 서비스의 핵심 서버를 만들었습니다. (재택)",
      en: "Backend design and development for a short-form video app — from video/subtitle uploads and an mp4→HLS transcoding pipeline to payments and settlement, building the service's core servers. (Remote)",
    },
    highlights: {
      ko: [
        "DB·API 설계 및 개발 — 영상·자막 업로드, mp4→HLS 변환",
        "토스페이먼츠 등 PG 결제·정산, NICE 본인인증 연동",
        "푸시·배치 서버 및 Next.js 어드민 개발",
        "AWS·Cloudflare 인프라 구성, GitLab CI/CD 자동화",
        "React Native(Expo) 앱·웹 개발 참여",
      ],
      en: [
        "Designed DB & APIs — video/subtitle uploads, mp4→HLS transcoding",
        "Payments & settlement (Toss Payments/PG); NICE identity verification",
        "Push & batch servers, plus a Next.js admin dashboard",
        "AWS & Cloudflare infrastructure; GitLab CI/CD automation",
        "Contributed to the React Native (Expo) app and web",
      ],
    },
    tags: ["NestJS", "MySQL", "TypeORM", "AWS", "Cloudflare", "Docker", "React Native (Expo)", "Next.js"],
    featured: true,
  },
  {
    slug: "memocat",
    title: "메모캣",
    year: "2026",
    description: {
      ko: "혼자 기획·디자인·개발해 Google Play에 출시한 메모 앱입니다. Expo(React Native)로 만든 오프라인 메모 앱으로, 드래그로 순서를 바꾸며 빠르게 기록할 수 있습니다.",
      en: "A memo app I planned, designed, built, and shipped to Google Play solo — an offline note-taking app made with Expo (React Native), with drag-to-reorder and quick capture.",
    },
    highlights: {
      ko: [
        "기획·디자인·개발·출시까지 1인 개발",
        "Expo(React Native)·TypeScript, expo-router 파일 기반 라우팅",
        "AsyncStorage 오프라인 저장, 드래그 정렬(햅틱 피드백)",
        "EAS 빌드 및 OTA 업데이트로 배포",
      ],
      en: [
        "Solo end-to-end: planning, design, development, and release",
        "Expo (React Native) & TypeScript with expo-router file-based routing",
        "Offline storage via AsyncStorage; drag-to-reorder with haptics",
        "EAS builds and OTA updates for delivery",
      ],
    },
    tags: ["Expo", "React Native", "TypeScript", "expo-router", "Reanimated", "EAS"],
    href: "https://play.google.com/store/apps/details?id=xyz.memocat.app",
    hrefLabel: { ko: "Play 스토어", en: "Play Store" },
    featured: true,
  },
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
