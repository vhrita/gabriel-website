/**
 * reveal-on-enter.ts
 * IntersectionObserver universal para elementos [data-reveal] ou .reveal-on-enter.
 * One-way: adds `is-visible` once on first intersection, then unobserves.
 * Elements stay visible permanently after entering viewport — no re-animation on scroll back.
 * threshold: 0 — any pixel intersecting triggers reveal.
 * rootMargin: '0px 0px -10% 0px' — triggers when element is 10% above bottom of viewport.
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
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0, rootMargin: '0px 0px -10% 0px' },
  );

  targets.forEach((el) => observer.observe(el));
}

// Roda após DOM estar pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal);
} else {
  initReveal();
}
