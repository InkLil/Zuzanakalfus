// ─── Mobile nav ──────────────────────────────────────
const navToggle  = document.getElementById('nav-toggle');
const navMobile  = document.getElementById('nav-mobile');

function toggleNav(open) {
  navToggle.classList.toggle('is-open', open);
  navMobile.classList.toggle('is-open', open);
  navToggle.setAttribute('aria-expanded', open);
  navMobile.setAttribute('aria-hidden', !open);
  document.body.style.overflow = open ? 'hidden' : '';
}

navToggle.addEventListener('click', () => {
  toggleNav(!navMobile.classList.contains('is-open'));
});

navMobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => toggleNav(false));
});

// ─── Year ───────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();


// ─── Scroll animations ───────────────────────────────
const ANIMATED = [
  '.brand-copy',
  '.brand-media',
  '.services-header .section-display',
  '.services-media',
  '.service-card',
  '.work-row',
  '.work-section .section-display',
  '.work-all-projects .btn',
  '.process-header',
  '.process-item',
  '.reviews-layout',
  '.review-slide',
  '.about-copy',
  '.about-media',
  '.cta-sub',
  '.cta-display',
  '.cta-lead',
  '.cta-actions',
].join(', ');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
);

document.querySelectorAll(ANIMATED).forEach((el, i) => {
  // Stagger siblings inside the same parent
  const siblings = el.parentElement
    ? [...el.parentElement.querySelectorAll(ANIMATED)]
    : [];
  const index = siblings.indexOf(el);
  if (index > 0) {
    el.style.transitionDelay = `${index * 0.07}s`;
  }
  observer.observe(el);
});

// ─── Scroll preview on website screenshots ───────────
document.querySelectorAll('.brand-media, .services-media').forEach(wrapper => {
  const img = wrapper.querySelector('img');
  if (!img) return;

  wrapper.addEventListener('mouseenter', () => {
    const dist = img.offsetHeight - wrapper.offsetHeight;
    if (dist > 0) {
      const dur = Math.max(1.2, dist / 300);
      img.style.transition = `transform ${dur}s cubic-bezier(0.45, 0, 0.55, 1)`;
      img.style.transform = `translateY(-${dist}px)`;
    }
  });

  wrapper.addEventListener('mouseleave', () => {
    img.style.transition = 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)';
    img.style.transform = 'translateY(0)';
  });
});

// ─── Reviews slider ──────────────────────────────────
const slides = document.querySelectorAll('.review-slide');
const currentEl = document.getElementById('reviews-current');
let current = 0;

function showSlide(n) {
  slides[current].classList.remove('is-active');
  current = (n + slides.length) % slides.length;
  slides[current].classList.add('is-active');
  if (currentEl) currentEl.textContent = current + 1;
}

document.getElementById('reviews-prev')?.addEventListener('click', () => showSlide(current - 1));
document.getElementById('reviews-next')?.addEventListener('click', () => showSlide(current + 1));

// ─── Stat counters ───────────────────────────────────
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = +el.dataset.target;
    const duration = 1200;
    const step = Math.ceil(target / (duration / 16));
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current;
      if (current >= target) clearInterval(timer);
    }, 16);
    statObserver.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num').forEach(el => statObserver.observe(el));

// ─── Header shadow on scroll ─────────────────────────
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 20);
}, { passive: true });

// ─── Lightbox ────────────────────────────────────────
const lightbox    = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  lightbox.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.preview-btn').forEach(btn => {
  btn.addEventListener('click', () => openLightbox(btn.dataset.src, btn.dataset.alt));
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
