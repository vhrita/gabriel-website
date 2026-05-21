/**
 * reveal-on-enter.ts
 * IntersectionObserver universal para elementos [data-reveal] ou .reveal-on-enter.
 * polish-v2: bidirectional — toggles `is-visible` on both enter and leave.
 * Removed observer.unobserve so elements re-animate when scrolling back up.
 * threshold: 0 — any pixel intersecting counts as visible.
 * rootMargin: '0px' — only "exits" when element is fully outside the viewport.
 * prefers-reduced-motion: all elements shown immediately, no animation.
 */

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initReveal() {
  const targets = document.querySelectorAll<HTMLElement>(
    '[data-reveal], .reveal-on-enter',
  );

  if (prefersReduced) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        // Toggle: add when entering, remove when leaving
        el.classList.toggle('is-visible', entry.isIntersecting);
      });
    },
    { threshold: 0, rootMargin: '0px 0px 0px 0px' },
  );

  targets.forEach((el) => observer.observe(el));
}

// Roda após DOM estar pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal);
} else {
  initReveal();
}
