# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Zuzana Kalfus (BEZlimituWEB) — web designer & WordPress developer. Static HTML, no build tools, no frameworks.

Live at: zuzanakalfus.cz

## File Structure

- `index.html` — single page, all sections
- `src/css/style.css` — all styles
- `src/js/main.js` — vanilla JS (cursor, slider, marquee, animations, counters)
- `assets/logo/` — logos (dark/light variants + favicon logo-mark_03.jpg)
- `assets/images/` — profile photos, project screenshots, og-image
- `assets/images/projects/` — project mockup images (3 projects)
- `assets/images/logo_clients/` — client logos for marquee (webp/png/svg)
- `assets/images/logo_tech/` — tech logos SVG downloaded from simpleicons.org
- `docs/` — brand-brief.md, design-system.md, projects.md, layout-rules.md
- `src/components/ui-components.md` — component library reference

## Design System

- **Font**: Satoshi (CDN: fonts.cdnfonts.com/css/satoshi), weights 300/400/500/600/700
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
2. Hero — "TVORBA WEBŮ" display + grid (copy + profile_02.png), glass pill services list
3. Tech logo marquee — SVG logos scrolling (WordPress, HTML5, CSS3, Figma, JS, PHP, Elementor, WooCommerce, Claude AI)
4. Brand section — bitemarksmedia.com screenshot + copy (scroll preview on hover)
5. Services — section-display + youngtravelconcierge.com screenshot + 4 cards
6. Selected Work — 3 projects asymmetric grid (LeadAgent, Léto v USA, Martin Easy Production)
7. Clients list — editorial table with links
8. All Projects btn → bezlimituweb.cz/portfolio/
9. Process — 4 steps
10. Reviews — slider (left: heading, right: one review + arrow controls)
11. Client logo marquee — 12 client logos scrolling
12. About — two-column (copy + stat bubbles + form | contact form via Formspree)
13. CTA — dark, "Připraveni začít?" + "Pojďme TVOŘIT"
14. Footer — dark, logo + 4 nav columns (Často hledané, Kontakt, Sociální sítě, Fakturační údaje)

## Key JS Features

- Custom red circle cursor (hides on mobile/touch)
- Reviews slider with prev/next buttons
- Stat counters animation (IntersectionObserver)
- Scroll preview on brand/services photos (JS-calculated translateY on hover)
- Levitation hover on all images (translateY -14px)
- Scroll-triggered fade-up animations (IntersectionObserver)
- Hero display text entrance animation (CSS keyframes)
- Infinite marquee (CSS animation, pauses on hover)

## Contact & Business

- Email: zuzana@bezlimituweb.cz
- Phone: +720 739 744 503
- Contact form: Formspree (https://formspree.io/f/mqedrgkq)
- Google Calendar: appointments link in "Rezervovat termín" button
- IČO: 03772381, Ruská 156/1, Liberec 460 01

## Conventions

- Vanilla HTML/CSS/JS only
- Semantic HTML, no framework classes
- CSS custom properties for all tokens
- Match existing naming conventions before adding new patterns
