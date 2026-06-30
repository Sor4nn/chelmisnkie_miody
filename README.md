# chelmisnkie_miody

Static honey landing page (PL). React 18 + Vite 5. Deployed to GitHub Pages.

## Stack
- React 18 (function components, hooks).
- Vite 5 (no TypeScript).
- Vanilla CSS (BEM, `@layer` organization).
- No router, no state library, no CSS framework.

## Local preview
```bash
npm install
npm run dev          # http://localhost:8080
npm run build        # → dist/
npm run preview      # serve dist/
```

## File tree
```
public/                 # copied to dist/ as-is
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
  App.jsx
  styles/
    main.css
    print.css
  data/
    products.json
  components/
    SkipLink.jsx
    Header.jsx          # useNav hook
    Hero.jsx
    About.jsx
    Offer.jsx
    Process.jsx
    Testimonials.jsx
    Faq.jsx
    Contact.jsx         # useForm hook
    Footer.jsx
    JsonLd.jsx          # LocalBusiness + ItemList<Product>
  hooks/
    useNav.js
    useForm.js
```

## Deploy
1. Push to `main`.
2. GH Pages workflow: `npm ci` → `npm run build` → uploads `dist/`.
3. Settings → Pages: source = GitHub Actions.
4. Custom domain: `public/CNAME`.

## SEO
- `LocalBusiness` + `ItemList<Product>` JSON-LD in `JsonLd.jsx`.
- Open Graph + Twitter Card meta in `index.html`.
- `sitemap.xml`, `robots.txt`, canonical URL.

## A11y
- Skip link, focus-visible, ARIA on nav, ESC closes mobile menu.
- Form: per-field error, `aria-invalid`, `aria-describedby`, honeypot.
- `prefers-reduced-motion` respected.

## License
Private project. All rights reserved.
