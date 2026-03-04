\# UI Components Library — zuzanakalfus.cz



Use this library to assemble pages. Keep layout minimal, editorial, structured.

Use design tokens and rules from docs/design-system.md.

Use assets from /assets.



---



\## Global rules

\- Prefer simple sections with clear hierarchy (headline → short text → CTA).

\- Use one primary CTA per section.

\- No decorative clutter, no gradients, no excessive animations.

\- Keep spacing generous.

\- Use existing assets (logo, profile, og-image).

\- Avoid random builder-like classes; use stable class names.



---



\## Component: Site Header (sticky optional)

\*\*Purpose:\*\* brand + navigation + CTA



\*\*HTML\*\*

```html

<header class="site-header">

&nbsp; <div class="container header-inner">

&nbsp;   <a class="brand" href="/">

&nbsp;     <img class="brand-logo" src="assets/logo/logo-primary-dark.png" alt="Zuzana Kalfus">

&nbsp;   </a>



&nbsp;   <nav class="nav">

&nbsp;     <a href="#sluzby">Služby</a>

&nbsp;     <a href="#projekty">Projekty</a>

&nbsp;     <a href="#jak-to-probiha">Jak to probíhá</a>

&nbsp;     <a href="#o-mne">O mně</a>

&nbsp;     <a href="#kontakt">Kontakt</a>

&nbsp;   </nav>



&nbsp;   <a class="btn btn-primary" href="#kontakt">Domluvit konzultaci</a>

&nbsp; </div>

</header>



<section class="hero" id="top">

&nbsp; <div class="container hero-grid">

&nbsp;   <div class="hero-copy">

&nbsp;     <p class="eyebrow">Webdesign \& WordPress</p>

&nbsp;     <h1>Web bez zbytečností.<br>Strategie bez chaosu.</h1>

&nbsp;     <p class="lead">

&nbsp;       Tvořím přehledné weby na míru pro podnikatele a malé firmy.

&nbsp;       Takové, které vypadají čistě — a hlavně fungují.

&nbsp;     </p>



&nbsp;     <div class="cta-row">

&nbsp;       <a class="btn btn-primary" href="#kontakt">Domluvit konzultaci</a>

&nbsp;       <a class="btn btn-secondary" href="#projekty">Ukázky projektů</a>

&nbsp;     </div>



&nbsp;     <p class="note">Bez agenturní omáčky. Jasný proces. Dlouhodobě udržitelné řešení.</p>

&nbsp;   </div>



&nbsp;   <div class="hero-card">

&nbsp;     <div class="mini-card">

&nbsp;       <p class="mini-title">Co ode mě čekat</p>

&nbsp;       <ul class="mini-list">

&nbsp;         <li>Struktura a obsah, který dává smysl</li>

&nbsp;         <li>Čistý design v brandu</li>

&nbsp;         <li>WordPress řešení, které zvládnete spravovat</li>

&nbsp;       </ul>

&nbsp;     </div>

&nbsp;   </div>

&nbsp; </div>

</section>



<section class="section" id="sluzby">

&nbsp; <div class="container">

&nbsp;   <div class="section-head">

&nbsp;     <h2>S čím vám pomůžu</h2>

&nbsp;     <p class="muted">Vyberte si rozsah. Společný základ je vždy strategie a čistá struktura.</p>

&nbsp;   </div>



&nbsp;   <div class="grid cards-3">

&nbsp;     <article class="card">

&nbsp;       <h3>Web na míru</h3>

&nbsp;       <p>Od návrhu struktury až po realizaci. Minimal, přehledné, funkční.</p>

&nbsp;     </article>



&nbsp;     <article class="card">

&nbsp;       <h3>WordPress (Kadence / Divi)</h3>

&nbsp;       <p>Stavba i ladění existujícího webu. Bez zbytečných pluginů.</p>

&nbsp;     </article>



&nbsp;     <article class="card">

&nbsp;       <h3>Redesign a optimalizace</h3>

&nbsp;       <p>Vylepšení výkonu, UX, struktury a konverzí. Web jako nástroj.</p>

&nbsp;     </article>

&nbsp;   </div>

&nbsp; </div>

</section>



<section class="section alt" id="projekty">

&nbsp; <div class="container">

&nbsp;   <div class="section-head">

&nbsp;     <h2>Vybrané projekty</h2>

&nbsp;     <p class="muted">Ukázky realizací a přístup k řešení.</p>

&nbsp;   </div>



&nbsp;   <div class="grid cards-3">

&nbsp;     <a class="card link-card" href="#" aria-label="Projekt 1">

&nbsp;       <p class="tag">Web</p>

&nbsp;       <h3>Název projektu</h3>

&nbsp;       <p class="muted">Krátký popis (1 věta). Co byl cíl a co se zlepšilo.</p>

&nbsp;     </a>



&nbsp;     <a class="card link-card" href="#" aria-label="Projekt 2">

&nbsp;       <p class="tag">WordPress</p>

&nbsp;       <h3>Název projektu</h3>

&nbsp;       <p class="muted">Krátký popis (1 věta). Přehledně a věcně.</p>

&nbsp;     </a>



&nbsp;     <a class="card link-card" href="#" aria-label="Projekt 3">

&nbsp;       <p class="tag">Redesign</p>

&nbsp;       <h3>Název projektu</h3>

&nbsp;       <p class="muted">Krátký popis (1 věta). Důraz na strukturu.</p>

&nbsp;     </a>

&nbsp;   </div>

&nbsp; </div>

</section>



<section class="section" id="jak-to-probiha">

&nbsp; <div class="container">

&nbsp;   <div class="section-head">

&nbsp;     <h2>Jak to probíhá</h2>

&nbsp;     <p class="muted">Jasné kroky. Bez chaosu.</p>

&nbsp;   </div>



&nbsp;   <ol class="steps">

&nbsp;     <li class="step">

&nbsp;       <p class="step-n">01</p>

&nbsp;       <h3>Krátká konzultace</h3>

&nbsp;       <p>Probereme cíl webu a co má přinést.</p>

&nbsp;     </li>

&nbsp;     <li class="step">

&nbsp;       <p class="step-n">02</p>

&nbsp;       <h3>Struktura \& obsah</h3>

&nbsp;       <p>Nastavíme hierarchii, copy a CTA.</p>

&nbsp;     </li>

&nbsp;     <li class="step">

&nbsp;       <p class="step-n">03</p>

&nbsp;       <h3>Design \& stavba</h3>

&nbsp;       <p>Čistý vizuál a realizace v WP.</p>

&nbsp;     </li>

&nbsp;     <li class="step">

&nbsp;       <p class="step-n">04</p>

&nbsp;       <h3>Spuštění \& podpora</h3>

&nbsp;       <p>Nasazení, základní SEO a údržba.</p>

&nbsp;     </li>

&nbsp;   </ol>

&nbsp; </div>

</section>



<section class="section alt" id="o-mne">

&nbsp; <div class="container about-grid">

&nbsp;   <div class="about-media">

&nbsp;     <img src="assets/images/profile.png" alt="Zuzana Kalfus – webdesignérka">

&nbsp;   </div>



&nbsp;   <div class="about-copy">

&nbsp;     <h2>O mně</h2>

&nbsp;     <p class="lead">

&nbsp;       Pomáhám podnikatelům mít web, který je přehledný, profesionální a udržitelný.

&nbsp;     </p>

&nbsp;     <p class="muted">

&nbsp;       Jsem Zuzana. Pracuju přímo s vámi, bez předávání „do agentury“.

&nbsp;       Můj styl je minimalismus, struktura a web jako nástroj.

&nbsp;     </p>



&nbsp;     <div class="cta-row">

&nbsp;       <a class="btn btn-primary" href="#kontakt">Chci konzultaci</a>

&nbsp;     </div>

&nbsp;   </div>

&nbsp; </div>

</section>



<section class="section" id="reference">

&nbsp; <div class="container">

&nbsp;   <div class="section-head">

&nbsp;     <h2>Co říkají klienti</h2>

&nbsp;     <p class="muted">Krátké, konkrétní reference. Bez přehánění.</p>

&nbsp;   </div>



&nbsp;   <div class="grid cards-3">

&nbsp;     <figure class="card quote">

&nbsp;       <blockquote>„Web je přehledný, rychlý a konečně nám přináší poptávky.“</blockquote>

&nbsp;       <figcaption class="muted">Jméno, firma</figcaption>

&nbsp;     </figure>



&nbsp;     <figure class="card quote">

&nbsp;       <blockquote>„Skvělá komunikace a jasný proces. Doporučuju.“</blockquote>

&nbsp;       <figcaption class="muted">Jméno, obor</figcaption>

&nbsp;     </figure>

&nbsp;   </div>

&nbsp; </div>

</section>



<section class="cta" id="kontakt">

&nbsp; <div class="container cta-inner">

&nbsp;   <h2>Domluvme si konzultaci</h2>

&nbsp;   <p class="muted">

&nbsp;     Napište mi pár vět o projektu. Ozvu se s návrhem dalšího kroku.

&nbsp;   </p>



&nbsp;   <div class="cta-row">

&nbsp;     <a class="btn btn-primary" href="mailto:hello@zuzanakalfus.cz">Napsat e-mail</a>

&nbsp;     <a class="btn btn-secondary" href="#">Rezervovat termín</a>

&nbsp;   </div>

&nbsp; </div>

</section>



<footer class="footer">

&nbsp; <div class="container footer-inner">

&nbsp;   <p class="muted">© <span id="year"></span> Zuzana Kalfus</p>

&nbsp;   <nav class="footer-nav">

&nbsp;     <a href="#sluzby">Služby</a>

&nbsp;     <a href="#projekty">Projekty</a>

&nbsp;     <a href="#kontakt">Kontakt</a>

&nbsp;   </nav>

&nbsp; </div>

</footer>

