/**
 * reveal-on-enter.ts
 * IntersectionObserver universal para elementos [data-reveal] ou .reveal-on-enter.
 * Adiciona classe `is-visible` quando o elemento entra na viewport.
 * prefers-reduced-motion: tudo aparece imediatamente, sem animação.
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
          const el = entry.target as HTMLElement;
          const delay = el.style.getPropertyValue('--delay') || '0ms';
          // Aplicar delay via setTimeout apenas se definido
          const ms = parseFloat(delay) || 0;
          if (ms > 0) {
            setTimeout(() => el.classList.add('is-visible'), ms);
          } else {
            el.classList.add('is-visible');
          }
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.12 },
  );

  targets.forEach((el) => observer.observe(el));
}

// Roda após DOM estar pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal);
} else {
  initReveal();
}
