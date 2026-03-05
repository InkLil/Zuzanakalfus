# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Zuzana Kalfus (BEZlimituWEB) — web designer & WordPress developer. Static HTML, no build tools, no frameworks.

Live at: zuzanakalfus.cz
Hosting: Webkitty (CDN Edge Caching — Development Mode needed after each index.html upload)

## File Structure

- `index.html` — single page, all sections
- `src/css/style.css` — all styles (current: v=16)
- `src/js/main.js` — vanilla JS (current: v=2)
- `src/fonts/Satoshi-Variable.woff2` — self-hosted variable font
- `assets/logo/` — logos (dark/light variants + favicon logo-mark_03.jpg)
- `assets/images/` — profile photos (WebP), project screenshots (WebP), og-image
- `assets/images/projects/` — project mockup images (3 projects, all WebP)
- `assets/images/logo_clients/` — client logos for marquee (webp/png/svg)
- `assets/images/logo_tech/` — tech logos SVG downloaded from simpleicons.org
- `docs/` — brand-brief.md, design-system.md, projects.md, layout-rules.md
- `src/components/ui-components.md` — component library reference
- `robots.txt` — allows all, links to sitemap
- `sitemap.xml` — single URL, lastmod 2026-03-05

## Design System

- **Font**: Satoshi Variable — self-hosted (`src/fonts/Satoshi-Variable.woff2`), @font-face in style.css, preloaded in HTML
- **Colors (dark mode)**:
  - `--bg: #242323` (main background)
  - `--bg-soft: #1C1C1A`
  - `--text: #FFFFFF`
  - `--muted: #C0BFBD`
  - `--border: #272725`
  - `--bg-dark: #000000` (footer + CTA)
  - `--accent: #EF0D33` (red — buttons, highlights, stars, hover)
- **Body font-size**: 1.5rem (24px), weight 400
- **Max-width**: 1620px
- **Border-radius on buttons**: 50px (pill shape)

## Page Sections (top to bottom)

1. Site Header — sticky, logo + nav (right-aligned) + CTA btn
2. Hero — "TVORBA WEBŮ" display + grid (copy + profile_02.webp), glass pill services list
3. Tech logo marquee — SVG logos scrolling (WordPress, HTML5, CSS3, Figma, JS, PHP, Elementor, WooCommerce, Claude AI)
4. Brand section — bitemarksmedia.com screenshot (WebP) + copy (scroll preview on hover)
5. Services — section-display + youngtravelconcierge.com screenshot (WebP) + 4 cards
6. Selected Work — 3 projects asymmetric grid (LeadAgent, Léto v USA, Martin Easy Production), all WebP
7. All Projects btn → bezlimituweb.cz/portfolio/
8. Process — 4 steps
9. Reviews — slider (left: heading + Google link, right: 4 reviews + arrow controls)
10. Client logo marquee — 13 client logos scrolling
11. About — two-column (copy + stat bubbles + CTA btn | contact form via Formspree)
12. CTA — dark, "Připraveni začít?" + "Pojďme TVOŘIT"
13. Footer — dark, logo + 4 nav columns (Kontakt, Fakturační údaje, Sociální sítě, Často hledané)

## Key JS Features

- Anchor scroll offset: JS-based (`getBoundingClientRect().top + window.pageYOffset - headerHeight - 24px`)
- Custom subtle cursor (8px white dot, grows red on hover — hides on mobile/touch)
- Mobile nav toggle (hamburger, mobile-first CSS)
- Reviews slider with prev/next buttons
- Stat counters animation (IntersectionObserver)
- Scroll preview on brand/services photos (JS-calculated translateY on hover)
- Levitation hover on all images (translateY -14px)
- Scroll-triggered fade-up animations (IntersectionObserver)
- Hero display text entrance animation (CSS keyframes)
- Infinite marquee (CSS animation, pauses on hover)
- Lightbox for project screenshots
- Cookie consent bar (floating card, bottom-right) — GDPR, Consent Mode v2, localStorage `cookie_consent`

## Analytics & Cookie Consent

- **GA4 Measurement ID**: `G-CZYRGXG5FE`
- **Consent Mode v2**: analytics_storage defaultně `denied`, update na `granted` po kliknutí Přijmout
- **Cookie karta**: floating card vpravo dole, animace fade+slide, 2 tlačítka (Přijmout / Odmítnout)
- Souhlas uložen v `localStorage` pod klíčem `cookie_consent` (`granted` / `denied`)

## SEO

- Title: `Zuzana Kalfus — Webdesign & WordPress | Liberec`
- Description: `Webdesign a WordPress na míru v Liberci a celé ČR. Tvořím přehledné weby pro podnikatele a malé firmy — čisté, funkční a dlouhodobě udržitelné.`
- Canonical: `https://zuzanakalfus.cz`
- OG tags: complete (og:title, og:description, og:image absolute URL, og:url, og:type, og:locale)
- Schema.org JSON-LD: ProfessionalService (name, url, address Liberec, telephone, email, sameAs)
- Google Search Console: verified, sitemap submitted
- Google Business Profile: verified, NAP consistent

## Performance (PageSpeed — 2026-03-05)

- Mobile Výkon: **99** / Přístupnost: 91 / Doporučené postupy: 100 / SEO: 100
- LCP: 1,4 s | FCP: 0,9 s | TBT: 0 ms | CLS: 0

## Hosting — Webkitty

- CDN Edge Caching: after uploading index.html, enable **Development Mode** in CDN panel
- FTP upload: always DELETE old file first, then upload new — file manager creates duplicates otherwise
- Cache busting: CSS uses `?v=N`, JS uses `?v=N` on script tag

## Contact & Business

- Email: zuzana@bezlimituweb.cz
- Phone: +420 739 744 503
- Contact form: Formspree (https://formspree.io/f/mqedrgkq)
- Google Calendar: appointments link in "Rezervovat termín" button
- IČO: 03772381, Ruská 156/1, Liberec 460 01

## Conventions

- Vanilla HTML/CSS/JS only
- Semantic HTML, no framework classes
- CSS custom properties for all tokens
- Match existing naming conventions before adding new patterns
- All main images in WebP format
