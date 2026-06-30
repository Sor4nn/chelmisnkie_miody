# Plan: chelmisnkie_miody — Full Rebuild

## Goal
Convert single-file static honey site into maintainable, deployable, accessible static site on GitHub Pages. Polish + structure + tooling. No backend, keep visual-only form. Placeholder assets only.

## Architecture
- Split monolithic `index.html` into: `index.html` + `assets/css/main.css` + `assets/js/main.js` + `assets/img/`.
- Add `404.html`, `robots.txt`, `sitemap.xml`, `.nojekyll`.
- Add `CNAME` placeholder.
- Add `.editorconfig`, `.gitattributes`, ignore rules.
- No build tool. Hand-split. Trivial deploy on GH Pages.

## File Tree (target)
```
.
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── CNAME                  # placeholder
├── .nojekyll
├── .editorconfig
├── .gitattributes
├── .gitignore
├── AGENTS.md
├── README.md
├── plan.md
├── data/
│   └── products.json
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   └── print.css
│   ├── js/
│   │   ├── main.js
│   │   └── modules/
│   │       ├── nav.js
│   │       └── form.js
│   ├── img/
│   │   ├── og-cover.svg
│   │   ├── favicon.svg
│   │   ├── hero/
│   │   ├── about/
│   │   ├── products/
│   │   └── icons/
└── .github/
    └── workflows/
        └── pages.yml
```

## Sections (index.html)
1. `<head>` — meta, OG, JSON-LD (`LocalBusiness` + `Product`×3), preconnect, preload hero.
2. Nav (skip-link + a11y).
3. Hero.
4. About.
5. Offer — 3 product cards, data-driven via `data/products.json`.
6. Process / "Jak powstaje" (optional).
7. Testimonials.
8. FAQ.
9. Contact.
10. Footer.

## Improvements

### A. Accessibility
- Skip-to-content link, `:focus-visible` ring.
- Hamburger: `aria-expanded`, `aria-controls`, ESC-to-close, body scroll-lock.
- Icons: `aria-hidden` or labeled.
- Form: proper `<label for>`, error states, `aria-invalid`, `aria-describedby`.
- Reduced-motion: disable hero parallax + card scale.

### B. Performance
- Self-host placeholder images, `loading="lazy"`, `decoding="async"`, explicit `width/height`.
- Preload LCP image, defer non-critical CSS.
- Google Fonts: `font-display: swap`, subset `latin` + `latin-ext`.
- Prune unused CSS.

### C. SEO
- `<html lang="pl">`.
- Meta description, canonical, OG (`og:title`, `og:description`, `og:image`, `og:locale=pl_PL`), Twitter card.
- JSON-LD: `LocalBusiness` + `Product` per honey.
- `sitemap.xml`, `robots.txt`.
- Semantic landmarks: `header`, `nav`, `main`, `section[aria-labelledby]`, `footer`.
- Heading order: h1 once, h2 per section.

### D. Code Quality
- CSS: organize by `@layer reset, tokens, base, layout, components, utilities, responsive`.
- BEM naming kept.
- JS: ES modules, no globals, no inline `onclick`.

### E. Content & UX
- Local SVG placeholders (honey-themed gradient + label).
- GDPR notice (no cookies used → static text).
- Product data: weight, price, "Zamów" CTA (mailto:).
- FAQ, testimonials.

### F. Tooling / Deploy
- GH Pages workflow: push to `main` → deploy `/`.
- Local preview: `python -m http.server 8080` (README).
- Lighthouse target: Perf ≥ 90, A11y ≥ 95, SEO ≥ 95.

## Implementation Order
1. Repo hygiene.
2. Split CSS/JS into `assets/`.
3. Add `404.html`, `robots.txt`, `sitemap.xml`, `.nojekyll`, `CNAME`.
4. A11y pass.
5. Perf: placeholders, `loading="lazy"`, dims, font subset.
6. SEO: OG, JSON-LD, canonical.
7. Content: FAQ, testimonials, data-driven cards.
8. GH Pages workflow + README.
9. Smoke test.
10. Final polish.

## Out of Scope
- Real backend for form.
- CMS, i18n, e-commerce, payments.
- Build tool.

## Risks
- External image deps → self-hosted placeholders.
- Google Fonts FOUT → `font-display: swap`.
- Form spam → honeypot + `mailto:` fallback.

## Verify Checklist
- [ ] Lighthouse: Perf ≥90, A11y ≥95, SEO ≥95.
- [ ] axe-core: 0 critical.
- [ ] Mobile menu: ESC + focus trap.
- [ ] Form: client validation + per-field errors.
- [ ] JSON-LD validates.
- [ ] GH Pages deploy OK.

---

## Addendum: React Remake (2026-06-30)

**Why:** maintainability, component reuse, future expansion (CMS hook, i18n, cart).

**Stack change:**
- Vanilla HTML/CSS/JS → **React 18 + Vite 5** (JS, not TS, to keep zero-config).
- `npm` introduced. `package.json` + `node_modules/` added.
- GH Pages workflow now runs `npm ci && npm run build` and uploads `dist/`.

**Vite config:** `base: './'` (relative paths) so deploy works on user-site (`pasiekalas.pl`) and project-site (`chelmisnkie-miody.github.io/chelmisnkie_miody/`).

**New layout:**
```
public/                  # served at root
  .nojekyll
  CNAME
  robots.txt
  sitemap.xml
  404.html
  favicon.svg
  og-cover.svg
  assets/img/            # SVGs (hero, about, products)
src/
  main.jsx               # React root
  App.jsx                # composes sections
  styles/
    main.css
    print.css
  data/
    products.json
  components/
    SkipLink.jsx
    Header.jsx           # uses useNav hook
    Hero.jsx
    About.jsx
    Offer.jsx            # renders from products.json
    Process.jsx
    Testimonials.jsx
    Faq.jsx
    Contact.jsx          # uses useForm hook
    Footer.jsx
    JsonLd.jsx           # injects LocalBusiness + ItemList
  hooks/
    useNav.js            # toggle, ESC, body lock, resize
    useForm.js           # validation, mailto fallback, honeypot
```

**Removed:** `assets/css/`, `assets/js/`, root `index.html` replaced by Vite template.

**Preserved:** a11y (skip link, ARIA, focus-visible, reduced-motion), SEO (canonical, OG, JSON-LD, sitemap, robots), print.css, mailto form, no tracking, Polish strings, `lang="pl"`.

**Risks:**
- Bundle size: Vite default is ~45kB gzip. Acceptable.
- Build step on GH Pages: add Node setup in workflow.
- `public/CNAME` + Vite base `./`: works on both custom domain and project site.

**New verify checklist:**
- [ ] `npm run build` → `dist/` generated.
- [ ] `dist/index.html` has no `onclick`, has JSON-LD.
- [ ] All `public/` assets copied to `dist/`.
- [ ] `dist/CNAME` present for custom domain.
- [ ] Lighthouse after deploy: Perf ≥90, A11y ≥95, SEO ≥95.
