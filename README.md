# Pafolio

Portfolio site for **Dat Do** — Frontend Developer.

Built with Next.js, React, and Tailwind CSS.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [Tailwind CSS](https://tailwindcss.com) 4
- [Motion](https://motion.dev) for animations
- [shadcn/ui](https://ui.shadcn.com) + Base UI

## Getting started

Requires [Node.js](https://nodejs.org) 20+ and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command      | Description              |
| ------------ | ------------------------ |
| `pnpm dev`   | Start development server |
| `pnpm build` | Create production build  |
| `pnpm start` | Run production server    |
| `pnpm lint`  | Run ESLint               |

## Structure

```
app/                 # Routes, layout, API
components/
  home/              # Page sections (Hero, Profile, Services, Projects, Contact)
  layouts/           # Header, Footer, Container, Section
  ui/                # Shared UI primitives
lib/                 # Utilities, content data
fonts/               # Local variable fonts
```

## Deploy

Deploy on [Vercel](https://vercel.com) or any platform that supports Next.js.
