# Multilingual Implementation Plan — zuzanakalfus.cz

**Datum:** 2026-03-16
**Jazyky:** Čeština (výchozí) + Angličtina
**Typ webu:** Statický HTML, jeden soubor, bez build nástrojů

---

## 1. Kontext a rozhodnutí

### Aktuální architektura
Web je **single-page** — veškerý obsah je v jednom `index.html`, sekce se odkazují přes anchor linky (`#sluzby`, `#projekty` apod.). Neexistují samostatné stránky pro `/sluzby/` nebo `/o-mne/`.

### Zvolená strategie
**Duplikovaný single-page přístup:**

```
zuzanakalfus.cz/           → index.html (česky)
zuzanakalfus.cz/en/        → en/index.html (anglicky)
```

Proč ne `/sluzby/`, `/en/services/` jako samostatné stránky:
- Web je one-page — přidávat multi-page architekturu jen kvůli překladu by byl neúměrný zásah
- Udržení jednoho HTML souboru na jazyk je jednoduché a udržitelné
- Pro statický hosting (Webkitty) nevyžaduje server-side routing
- Anchor linky v angličtině budou anglicky (`#services`, `#projects` apod.)

---

## 2. Souborová struktura

```
zuzanakalfus.cz/
├── index.html                  ← česká verze (existující, upravená)
├── en/
│   └── index.html              ← anglická verze (nová)
├── sitemap.xml                 ← aktualizovaný (multilingual)
├── robots.txt                  ← beze změny
├── src/
│   ├── css/
│   │   └── style.css           ← beze změny (sdílený)
│   ├── js/
│   │   ├── main.js             ← beze změny (sdílený)
│   │   └── lang-detect.js      ← nový (detekce jazyka)
│   └── fonts/                  ← beze změny (sdílené)
└── assets/                     ← beze změny (sdílené)
```

---

## 3. HTML — head sekce

### Česká verze (`index.html`)

```html
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <title>Zuzana Kalfus — Webdesign &amp; WordPress | Liberec</title>
  <meta name="description" content="Webdesign a WordPress na míru v Liberci a celé ČR. Tvořím přehledné weby pro podnikatele a malé firmy — čisté, funkční a dlouhodobě udržitelné.">

  <link rel="canonical" href="https://zuzanakalfus.cz/">
  <link rel="alternate" hreflang="cs" href="https://zuzanakalfus.cz/">
  <link rel="alternate" hreflang="en" href="https://zuzanakalfus.cz/en/">
  <link rel="alternate" hreflang="x-default" href="https://zuzanakalfus.cz/">

  <meta property="og:title" content="Zuzana Kalfus — Web Design &amp; WordPress | Czech Republic">
  <meta property="og:description" content="Webdesign a WordPress na míru v Liberci a celé ČR.">
  <meta property="og:url" content="https://zuzanakalfus.cz/">
  <meta property="og:locale" content="cs_CZ">
  <meta property="og:locale:alternate" content="en_US">
  ...
</head>
```

### Anglická verze (`en/index.html`)

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Zuzana Kalfus — Web Design &amp; WordPress | Czech Republic</title>
  <meta name="description" content="Custom web design and WordPress development from the Czech Republic. Clean, functional websites for entrepreneurs and small businesses worldwide.">

  <link rel="canonical" href="https://zuzanakalfus.cz/en/">
  <link rel="alternate" hreflang="cs" href="https://zuzanakalfus.cz/">
  <link rel="alternate" hreflang="en" href="https://zuzanakalfus.cz/en/">
  <link rel="alternate" hreflang="x-default" href="https://zuzanakalfus.cz/">

  <meta property="og:title" content="Zuzana Kalfus — Web Design &amp; WordPress | Czech Republic">
  <meta property="og:description" content="Custom web design and WordPress development. Clean, functional websites for entrepreneurs and small businesses.">
  <meta property="og:url" content="https://zuzanakalfus.cz/en/">
  <meta property="og:locale" content="en_US">
  <meta property="og:locale:alternate" content="cs_CZ">
  ...
</head>
```

---

## 4. Anchor linky — mapování CZ → EN

V `en/index.html` musí mít sekce anglické ID atributy:

| Česky (`index.html`) | Anglicky (`en/index.html`) |
|----------------------|----------------------------|
| `#sluzby`            | `#services`                |
| `#projekty`          | `#projects`                |
| `#jak-to-probiha`    | `#process`                 |
| `#o-mne`             | `#about`                   |
| `#kontakt`           | `#contact`                 |

Navigace v `en/index.html`:
```html
<nav class="nav">
  <a href="#services">Services</a>
  <a href="#projects">Projects</a>
  <a href="#process">Process</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</nav>
```

---

## 5. Language Switcher

### Umístění
V hlavičce, vedle CTA tlačítka. Na mobilech v hamburger menu.

### HTML (česká verze)
```html
<div class="lang-switcher">
  <span class="lang-active" aria-current="true">CZ</span>
  <a href="/en/" hreflang="en" lang="en">EN</a>
</div>
```

### HTML (anglická verze)
```html
<div class="lang-switcher">
  <a href="/" hreflang="cs" lang="cs">CZ</a>
  <span class="lang-active" aria-current="true">EN</span>
</div>
```

### CSS
```css
.lang-switcher {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.lang-switcher a {
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s;
}

.lang-switcher a:hover {
  color: var(--text);
}

.lang-switcher .lang-active {
  color: var(--accent);
}

/* Oddělovač */
.lang-switcher a::before,
.lang-switcher span + a::before {
  content: "/";
  margin-right: 0.5rem;
  color: var(--border);
}
```

---

## 6. Language Detection (`lang-detect.js`)

Tento skript se vkládá pouze do **české verze** (`index.html`).
Na anglické verzi není potřeba — uživatel tam přišel vědomě.

```js
// lang-detect.js
// Spustí se jen na index.html (česká verze)
// Zobrazí banner s návrhem anglické verze nečesky mluvícím návštěvníkům

(function () {
  const STORAGE_KEY = 'lang_preference';
  const stored = localStorage.getItem(STORAGE_KEY);

  // Pokud uživatel preference uložil — neznepokojovat
  if (stored) return;

  // Detekce jazyka prohlížeče
  const lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  const isCzechOrSlovak = lang.startsWith('cs') || lang.startsWith('sk');

  if (isCzechOrSlovak) return;

  // Zobrazit banner s návrhem EN verze
  const banner = document.createElement('div');
  banner.className = 'lang-banner';
  banner.innerHTML = `
    <p>This website is also available in <strong>English</strong>.</p>
    <div class="lang-banner-actions">
      <a href="/en/" class="lang-banner-accept">Switch to English</a>
      <button class="lang-banner-dismiss" type="button">Stay in Czech</button>
    </div>
  `;
  document.body.appendChild(banner);

  // Přijmout → přejít na EN + uložit preferenci
  banner.querySelector('.lang-banner-accept').addEventListener('click', function () {
    localStorage.setItem(STORAGE_KEY, 'en');
  });

  // Odmítnout → skrýt + uložit preferenci
  banner.querySelector('.lang-banner-dismiss').addEventListener('click', function () {
    localStorage.setItem(STORAGE_KEY, 'cs');
    banner.remove();
  });
})();
```

### CSS pro lang-banner
```css
.lang-banner {
  position: fixed;
  bottom: 1.5rem;
  left: 1.5rem;
  z-index: 9000;
  background: var(--bg-soft);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  max-width: 320px;
  font-size: 0.875rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
  animation: fadeSlideUp 0.3s ease;
}

.lang-banner p {
  margin: 0 0 0.75rem;
  color: var(--muted);
}

.lang-banner-actions {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.lang-banner-accept {
  background: var(--accent);
  color: #fff;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-weight: 500;
  text-decoration: none;
  font-size: 0.8rem;
}

.lang-banner-dismiss {
  background: none;
  border: none;
  color: var(--muted);
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0;
}

.lang-banner-dismiss:hover {
  color: var(--text);
}

@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

**Poznámka:** Banner se záměrně nezobrazí ihned při prvním načtení — počká 1,5 s, aby nerušil při prvním dojmu:
```js
setTimeout(function() { document.body.appendChild(banner); }, 1500);
```

---

## 7. Schema.org JSON-LD — anglická verze

V `en/index.html` přidat anglicky lokalizované hodnoty:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "BEZlimituWEB — Zuzana Kalfus",
  "url": "https://zuzanakalfus.cz/en/",
  "description": "Custom web design and WordPress development. Clean, functional websites for entrepreneurs and small businesses.",
  "areaServed": ["CZ", "SK", "AT", "DE"],
  "serviceType": ["Web Design", "WordPress Development", "Website Redesign", "SEO Optimization"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Liberec",
    "addressCountry": "CZ"
  },
  "telephone": "+420739744503",
  "email": "zuzana@bezlimituweb.cz"
}
```

---

## 8. Sitemap (`sitemap.xml`)

Aktualizovat stávající `sitemap.xml` — přidat EN URL a hreflang anotace:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <url>
    <loc>https://zuzanakalfus.cz/</loc>
    <lastmod>2026-03-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="cs" href="https://zuzanakalfus.cz/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://zuzanakalfus.cz/en/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://zuzanakalfus.cz/"/>
  </url>

  <url>
    <loc>https://zuzanakalfus.cz/en/</loc>
    <lastmod>2026-03-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="cs" href="https://zuzanakalfus.cz/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://zuzanakalfus.cz/en/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://zuzanakalfus.cz/"/>
  </url>

</urlset>
```

---

## 9. Anglické copy — přehled sekcí

### Meta tagy
| | Česky | Anglicky |
|---|---|---|
| **title** | Zuzana Kalfus — Webdesign & WordPress \| Liberec | Zuzana Kalfus — Web Design & WordPress \| Czech Republic |
| **description** | Webdesign a WordPress na míru v Liberci a celé ČR... | Custom web design and WordPress development from the Czech Republic... |
| **og:title** | stejné jako title | stejné jako title |
| **og:description** | zkrácená verze | zkrácená verze anglicky |

### Hero sekce
| CZ | EN |
|---|---|
| TVORBA WEBŮ | WEB DESIGN |
| Webové stránky, které pracují za vás | Websites that work for you |
| CTA tlačítko: „Chci web" | CTA button: "I want a website" |

### Služby
| CZ | EN |
|---|---|
| Webdesign na míru | Custom Web Design |
| WordPress vývoj | WordPress Development |
| Redesign webu | Website Redesign |
| SEO optimalizace | SEO Optimization |

### Claim sekce
| CZ | EN |
|---|---|
| Můj styl je minimalismus... | My style is minimalism... |

### Process
| CZ | EN |
|---|---|
| Konzultace | Consultation |
| Návrh | Design |
| Vývoj | Development |
| Spuštění | Launch |

### CTA sekce
| CZ | EN |
|---|---|
| Připraveni začít? | Ready to start? |
| Pojďme TVOŘIT | Let's CREATE |

### Footer
| CZ | EN |
|---|---|
| Kontakt | Contact |
| Fakturační údaje | Billing Info |
| Sociální sítě | Social Media |
| Často hledané | Popular searches |

---

## 10. Implementační checklist

### Fáze 1 — Příprava
- [ ] Vytvořit složku `en/`
- [ ] Zkopírovat `index.html` → `en/index.html`
- [ ] Přidat `src/js/lang-detect.js`

### Fáze 2 — Česká verze (`index.html`)
- [ ] Přidat hreflang tagy do `<head>`
- [ ] Aktualizovat canonical na `https://zuzanakalfus.cz/` (trailing slash)
- [ ] Přidat `og:locale:alternate`
- [ ] Přidat language switcher do headeru
- [ ] Načíst `lang-detect.js` před `</body>`

### Fáze 3 — Anglická verze (`en/index.html`)
- [ ] Změnit `<html lang="cs">` → `<html lang="en">`
- [ ] Přeložit `<title>` a `<meta name="description">`
- [ ] Aktualizovat canonical na `https://zuzanakalfus.cz/en/`
- [ ] Přidat hreflang tagy
- [ ] Přeložit og:title, og:description, og:locale
- [ ] Aktualizovat Schema.org JSON-LD
- [ ] Přeložit veškerý viditelný text (nav, hero, sekce, footer)
- [ ] Aktualizovat anchor ID atributy sekcí (#services, #projects apod.)
- [ ] Aktualizovat interní anchor linky v navigaci
- [ ] Přidat language switcher (CZ aktivní jako odkaz, EN jako aktivní stav)
- [ ] Zkontrolovat alt texty obrázků — přeložit
- [ ] **Nepřekládat:** jména klientů, název firmy, telefonní číslo, e-mail, IČO, adresu

### Fáze 4 — SEO & sitemap
- [ ] Aktualizovat `sitemap.xml` (multilingual s xhtml:link)
- [ ] Zkontrolovat reciprocitu hreflang (obě stránky musí odkazovat na sebe navzájem)
- [ ] Odeslat aktualizovaný sitemap do Google Search Console
- [ ] Přidat EN URL do Google Search Console jako Coverage monitor

### Fáze 5 — Hosting & cache
- [ ] FTP: nejdřív smazat starý `index.html`, pak nahrát nový
- [ ] Nahrát složku `en/` s `index.html` uvnitř
- [ ] Nahrát nový `sitemap.xml`
- [ ] Zapnout **Development Mode** v Webkitty CDN panelu
- [ ] Ověřit hreflang přes Google Search Console → Mezinárodní cílení

---

## 11. Co NEPŘEKLÁDAT

- Jméno a název firmy: „Zuzana Kalfus", „BEZlimituWEB"
- Kontaktní údaje: telefon, e-mail
- Fakturační údaje: IČO, adresa
- Jména klientů a názvů projektů (pokud nemají anglický ekvivalent)
- Technické zkratky: WordPress, SEO, HTML, CSS, PHP, Figma

---

## 12. Validace po implementaci

1. [validator.w3.org](https://validator.w3.org/) — validace HTML obou verzí
2. [Google Search Console](https://search.google.com/search-console/) → Mezinárodní cílení → Jazyk
3. [hreflang.org tester](https://www.hreflang.org/checker) — ověření reciprocity hreflang
4. [Bing Webmaster Tools](https://www.bing.com/webmasters/) — přidat EN sitemap
5. Manuální test: prohlížeč s `Accept-Language: en` → zkontrolovat, zda se zobrazí lang-banner
6. Lighthouse SEO audit na `/en/` — cíl: 100

---

## 13. Poznámky k budoucímu rozšíření

- Pokud přibyde třetí jazyk (např. němčina `/de/`), stačí duplikovat `en/index.html` do `de/index.html` a přidat hreflang tag do všech stránek
- Pokud se web v budoucnu přesune na generátor (Astro, Eleventy), překladový systém lze nahradit i18n soubory — struktura URL zůstane stejná
