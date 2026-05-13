/**
 * WingsReveal.client.ts
 * Scroll-driven clip-path reveal das asas — vanilla JS, sem dependências externas.
 *
 * Estratégia:
 *   - Interpola clip-path de inset(100% 0 0 0) → inset(0 0 0 0)
 *     em função do scroll progress da seção #wings-transition.
 *   - prefers-reduced-motion: reduce → fade-in simples via IntersectionObserver.
 *
 * Decisão de implementação: vanilla JS ao invés de Motion One para manter
 * bundle JS gzip abaixo de 10 KB. Motion One (framer-motion/dom) pesa ~24 KB gzip
 * mesmo para apenas scroll+animate. O efeito aqui é suficientemente simples
 * para ser implementado sem biblioteca.
 */

const wings = document.querySelector<HTMLElement>('#wings-clip');
const target = document.querySelector<HTMLElement>('#wings-transition');

if (!wings || !target) {
  // Elementos não encontrados — silenciosamente ignora (SSR ou page sem hero)
} else if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Branch reduced-motion: fade-in simples via IntersectionObserver (300ms)
  wings.style.clipPath = 'inset(0 0 0 0)';
  wings.style.opacity = '0';
  wings.style.transition = 'opacity 300ms ease-out';

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          wings.style.opacity = '1';
          io.disconnect();
          break;
        }
      }
    },
    { threshold: 0.2 }
  );
  io.observe(target);
} else {
  // Branch padrão: scroll-driven clip-path reveal via rAF
  // Calcula progress: 0 quando o topo da seção entra pela base do viewport (start end)
  //                   1 quando o fundo da seção sai pelo topo do viewport (end start)
  let rafId: number | null = null;

  function clamp(v: number, min: number, max: number): number {
    return Math.min(Math.max(v, min), max);
  }

  function updateClipPath() {
    rafId = null;
    const rect = target!.getBoundingClientRect();
    const vh = window.innerHeight;

    // progress = 0 quando rect.top === vh (seção começa a entrar)
    // progress = 1 quando rect.bottom === 0 (seção saiu pelo topo)
    const total = rect.height + vh;
    const scrolled = vh - rect.top;
    const progress = clamp(scrolled / total, 0, 1);

    // clip-path: inset(top% 0 0 0) — top de 100% → 0%
    const insetTop = Math.round((1 - progress) * 100);
    wings!.style.clipPath = `inset(${insetTop}% 0 0 0)`;
  }

  function onScroll() {
    if (rafId === null) {
      rafId = requestAnimationFrame(updateClipPath);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  updateClipPath(); // estado inicial
}
