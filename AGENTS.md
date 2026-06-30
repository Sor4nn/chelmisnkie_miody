# AGENTS.md

## Project
Static honey landing page (PL). React 19 + Vite 8 + TypeScript (strict). Deployed to GitHub Pages.

## Stack
- React 19 (function components, hooks, TypeScript).
- Vite 8 (`base: './'` for portable GH Pages deploy).
- Vanilla CSS (BEM, `@layer` organization), no Tailwind / CSS-in-JS.
- No state library, no router (single page).
- Polish strings, `lang="pl"`.

## Local preview
```bash
npm install
npm run dev          # vite dev server on :8080
npm run build        # production build → dist/
npm run preview      # serve dist/
npm run typecheck    # tsc --noEmit
```

## Layout
```
public/                 # copied to dist/ root as-is
  .nojekyll
  CNAME
  robots.txt
  sitemap.xml
  404.html
  favicon.svg
  og-cover.svg
  assets/img/           # SVGs (hero, about, products)

src/
  main.jsx              # React root
  App.jsx               # composes sections
  styles/
    main.css
    print.css
  data/
    products.ts
  components/
    SkipLink.tsx
    Header.tsx          # uses useNav
    Hero.tsx
    Featured.tsx        # bestseller spotlight (NEW)
    About.tsx
    Offer.tsx           # renders from products.ts
    Process.tsx
    Testimonials.tsx
    Faq.tsx
    CtaBand.tsx         # CTA callout (NEW)
    Contact.tsx         # uses useForm
    Footer.tsx
    JsonLd.tsx          # LocalBusiness + ItemList<Product>
  hooks/
    useNav.ts
    useForm.ts
    useScrollSpy.ts     # IntersectionObserver (NEW)
```

## Conventions
- Indent: 2 spaces, LF.
- Components: PascalCase, default export, function declaration.
- Hooks: `useXxx`, named export, one hook per file.
- CSS: BEM, `@layer` organization, classes mirror React `className`.
- JS: no inline handlers beyond simple `onClick` for nav toggle. Form/validation logic lives in `useForm`.
- A11y: skip link, `aria-expanded`/`aria-controls`, focus-visible, reduced-motion, semantic landmarks.
- Polish strings, `lang="pl"`.

## Do not
- Add state libraries (Redux, Zustand) — use React state.
- Add CSS-in-JS or Tailwind without discussion.
- Commit real personal data (phone, address) without owner consent.
- Use external image CDNs (self-host in `public/`).

## Deploy
Push to `main` → workflow runs `npm ci && npm run build` → uploads `dist/` → GH Pages.
CNAME (`pasiekalas.pl`) in `public/` is copied to `dist/` for custom domain.
