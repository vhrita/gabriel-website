# gabriel-website

Landing publica do app Gabriel — Biblia e Devocional.

## Stack

- Astro 5 (SSG)
- Tailwind 4
- Self-hosted fonts (Inter + Lora via @fontsource)
- Vanilla TS island para reveal das asas (sem dependencias externas de animacao)
- Deploy: Docker multi-stage nginx-alpine CapRover

## Desenvolvimento

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # gera dist/
npm run preview   # serve dist/
```

## Deploy

```bash
docker build -t gabriel-website .
docker run -p 8080:80 gabriel-website
```

Producao em https://gabriel.vhxco.com via CapRover (`.github/workflows/deploy.yml`).

## Estrutura

```
src/
├── components/
│   ├── hero/         # HeroSection + WingsTransition + WingsReveal client
│   ├── home/         # PitchSection, FeaturesGrid, Showcase
│   ├── seo/          # JsonLd utility
│   └── ui/           # Container, Section, Button, Card, TOC, etc.
├── layouts/          # BaseLayout (head completo: OG, Twitter, canonical, JsonLd)
├── pages/            # index, privacy, terms, delete-account, 404
├── scripts/          # reveal-on-enter.ts (IntersectionObserver universal)
└── styles/           # global.css com @theme tokens Tailwind 4
public/               # robots.txt, llms.txt, og-image.png, favicon
docs/PLAN.md          # plano operacional das sub-tasks
```

## Acessibilidade

- WCAG AA: contraste validado em todas combinacoes texto/fundo
- Skip-to-content link no inicio do body
- Focus-visible rings (divine-500) em todos elementos interativos
- prefers-reduced-motion: animacoes desligadas globalmente + por componente
- SVGs decorativos com aria-hidden; asas hero com role=img + aria-label

## ADRs

- ADR-0013 — Stack (Astro 5 + Tailwind 4 + vanilla TS islands)
- ADR-0014 — Visao criativa (paleta celestial/divine, tipografia Lora/Inter)

ADRs em agentic/docs/decisions/ (repositorio separado).
