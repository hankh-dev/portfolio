# hankh.dev — Developer Portfolio

**🔗 라이브: https://portfolio-tau-lake-94.vercel.app**

Next.js(App Router) + TypeScript + Tailwind CSS로 만든 **다국어 개발자 포트폴리오**입니다.
Minimal / Clean 디자인에 다크모드, MDX 블로그, 스크롤 애니메이션을 갖췄습니다.

## ✨ 주요 기능

- **디자인** — 흑백 + 포인트 컬러 1개, 넓은 여백의 미니멀 스타일
- **다국어(i18n)** — 한국어(`/ko`) · 영어(`/en`), 라이브러리 없이 `[locale]` 세그먼트 + 사전(JSON)
- **다크모드** — `next-themes` 기반 시스템/수동 토글 (FOUC 없음)
- **MDX 블로그** — `content/blog/<locale>/*.mdx`, 프론트매터 + GFM 표 지원
- **연락 폼** — React Server Action + Resend(선택), 허니팟 스팸 방지
- **스크롤 애니메이션** — `motion`(Framer Motion)으로 뷰포트 진입 시 등장
- **SEO** — 로케일별 메타데이터·OpenGraph, `sitemap.xml`, `robots.txt`
- 접근성: `prefers-reduced-motion` 존중, 시맨틱 마크업, 포커스 스타일

## 🚀 시작하기

```bash
npm install
npm run dev
# http://localhost:3000 → /ko 로 리다이렉트
```

기타 스크립트:

```bash
npm run build   # 프로덕션 빌드
npm run start   # 빌드 결과 실행
npm run lint    # ESLint
```

## 🔧 내 정보로 바꾸기

| 무엇을 | 어디서 |
| --- | --- |
| 이름·이메일·소셜 링크 | `src/data/profile.ts` |
| 프로젝트 / 경력 / 스킬 | `src/data/profile.ts` |
| 문구·번역(섹션 제목, 폼 라벨 등) | `src/i18n/dictionaries/ko.json`, `en.json` |
| 색상·디자인 토큰 | `src/app/globals.css` (`--accent` 등) |
| 블로그 글 | `content/blog/ko/*.mdx`, `content/blog/en/*.mdx` |

> 포인트 컬러는 `globals.css`의 `--accent`(라이트)와 `.dark`의 `--accent`(다크) 값만 바꾸면 사이트 전체에 반영됩니다.

### 블로그 글 추가

`content/blog/<locale>/my-post.mdx` 파일을 만들고 프론트매터를 채우면 끝입니다:

```mdx
---
title: "글 제목"
description: "목록에 보일 한 줄 설명"
date: "2026-07-01"
tags: ["Next.js"]
---

본문(Markdown / MDX)...
```

## 📬 연락 폼 설정 (선택)

`.env.example`을 `.env.local`로 복사한 뒤 [Resend](https://resend.com) 키를 넣으세요.

```bash
cp .env.example .env.local
```

```env
RESEND_API_KEY=re_xxxxxxxx
CONTACT_TO_EMAIL=hankh.dev@gmail.com
CONTACT_FROM_EMAIL=Portfolio <onboarding@resend.dev>
```

키가 없어도 폼은 동작합니다 — 개발 중에는 메시지를 서버 콘솔에 로그하고 성공으로 처리합니다.

## ▲ 배포 (Vercel 권장)

1. GitHub에 푸시
2. [vercel.com](https://vercel.com)에서 저장소 import
3. 환경변수 등록: `NEXT_PUBLIC_SITE_URL`(실서비스 도메인), 필요하면 `RESEND_API_KEY` 등

## 🗂 구조

```
src/
  app/
    layout.tsx              # 루트(최소) — html은 [locale]에서
    page.tsx                # / → /ko 리다이렉트
    sitemap.ts, robots.ts
    [locale]/
      layout.tsx            # html·폰트·테마·헤더/푸터·메타데이터
      page.tsx              # 홈(Hero/About/Skills/Projects/Experience/Contact)
      blog/
        page.tsx            # 글 목록
        [slug]/page.tsx     # 글 상세 (MDX 렌더링)
  components/               # Header, Footer, ThemeToggle, Reveal, sections/*
  data/profile.ts          # 프로필·프로젝트·경력·스킬 데이터
  i18n/                     # 로케일 설정 + 사전
  lib/                      # blog.ts, contact-action.ts
content/blog/<locale>/*.mdx # 블로그 콘텐츠
```

## 🧰 스택

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · motion · next-themes · next-mdx-remote · Resend
