# Gabriel Website v1 — Plano de Implementação

> **Plano operacional do builder.** Source of truth pra execução. Decisões de framework e visão criativa estão em:
> - `agentic/docs/decisions/ADR-0013-gabriel-website-framework.md` — stack
> - `agentic/docs/decisions/ADR-0014-gabriel-website-visao-criativa.md` — mood/paleta/fontes/asas
>
> Este documento detalha **wireframes, componentes, assets, sub-tasks e ordem de execução**.

---

## 1. Resumo

**Objetivo:** transformar o site placeholder ("Em breve no Google Play" + 3 páginas legais) em **landing real de apresentação do app Gabriel** com paleta do app, identidade visual editorial, conceito-chave de asas SVG revelando ao scroll e transição pra fundo azul céu. Manter pipeline CapRover funcional.

**Stack v1:** Astro 5 + Tailwind 4 + TypeScript + 1 island Motion One.

**Páginas v1:** 5 — Home, Privacy, Terms, Delete-Account, 404.

**i18n v1:** PT-BR only (estrutura para multi-língua entra em v2).

**Sub-tasks builder:** 8 (5 M + 3 S), ordem garantindo que páginas legais nunca quebram.

---

## 2. Wireframes

### 2.1 Home (mobile-first, breakpoints `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px)

```
═══════════════════════════════════════════════════════
HEADER (sticky, transparent → solid celestial-700/95 ao scroll)
┌─────────────────────────────────────────────────────┐
│ [Gabriel·]            [Privacy] [Terms] [Excluir]   │  64px
└─────────────────────────────────────────────────────┘

SEÇÃO 1 — HERO (white bg, ~100vh, padding-y 32 lg)
┌─────────────────────────────────────────────────────┐
│                                                     │
│                                                     │
│                                                     │
│              Gabriel                                │ ← Lora 700, clamp(3rem,12vw,6rem), celestial-700
│         Sua jornada espiritual,                     │ ← Lora 500 italic, clamp(1.25rem,3vw,1.75rem)
│            todos os dias.                           │   celestial-600
│                                                     │
│                                                     │
│   ┌──────────────────────┐ ┌──────────────────┐    │
│   │ Baixar no Google Play│ │ Saiba mais     ↓ │    │ ← divine-500 / outline celestial-700
│   └──────────────────────┘ └──────────────────┘    │
│                                                     │
│                                                     │
│                       ↓                             │ ← microcue scroll, fade slow
│                  (scroll)                           │
└─────────────────────────────────────────────────────┘

SEÇÃO 2 — TRANSIÇÃO ASAS (white→reveals, ~60vh sticky scroll effect)
┌─────────────────────────────────────────────────────┐
│                                                     │
│           ___           ___                         │
│        ⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒                       │ ← SVG asas line-art
│      ⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒    ⌒⌒⌒⌒⌒⌒⌒⌒⌒⌒                       │   stroke celestial-700
│    ⌒⌒⌒⌒⌒⌒    asas    ⌒⌒⌒⌒⌒⌒⌒                         │   reveal clip-path 0→100%
│  ⌒⌒⌒⌒⌒⌒⌒  reveladas  ⌒⌒⌒⌒⌒⌒⌒                         │   conforme scroll
│ ⌒⌒⌒⌒⌒⌒    no scroll    ⌒⌒⌒⌒⌒⌒                         │   width ~80vw
│                                                     │
└─────────────────────────────────────────────────────┘
↓ transição cor: white → celestial-300/400 gradient ↓

SEÇÃO 3 — PITCH (celestial-400 → 300 gradient bg, ~80vh)
┌─────────────────────────────────────────────────────┐
│                                                     │
│                                                     │
│        Um santuário no seu bolso.                   │ ← Lora 600 white, ~2.5rem
│                                                     │
│        Devocionais personalizados por IA,           │ ← Inter 400 white/90, ~1.0625rem
│        a Bíblia inteira em 3 idiomas, e             │   max-w-prose
│        um caminho de leitura que cresce com         │
│        você. Tudo isso, todos os dias.              │
│                                                     │
│                                                     │
└─────────────────────────────────────────────────────┘

SEÇÃO 4 — FEATURES (white bg, ~120vh)
┌─────────────────────────────────────────────────────┐
│                                                     │
│       O que o Gabriel entrega                       │ ← Lora 600 celestial-700, ~2.25rem center
│                                                     │
│  ┌─────────────┐ ┌─────────────┐                   │
│  │ ⌘ icon      │ │ ⌘ icon      │  mobile: 2x2 grid │
│  │ Devocional  │ │ Bíblia +    │  desktop: 4x1     │
│  │ diário, IA  │ │ Jardim da Fé│                   │
│  │ Cada dia um │ │ 66 livros   │  card:            │
│  │ capítulo... │ │ como plant..│  bg heavenly      │
│  └─────────────┘ └─────────────┘  border celestial │
│  ┌─────────────┐ ┌─────────────┐  -200             │
│  │ ⌘ icon      │ │ ⌘ icon      │  rounded-2xl      │
│  │ Streak      │ │ Gabriel Chat│  p-6              │
│  │ inteligente │ │ Tira dúvidas│                   │
│  │ Constância..│ │ teológicas..│                   │
│  └─────────────┘ └─────────────┘                   │
│                                                     │
└─────────────────────────────────────────────────────┘

SEÇÃO 5 — SHOWCASE + CTA STORES (heavenly bg, ~100vh)
┌─────────────────────────────────────────────────────┐
│                                                     │
│        ┌──────┐ ┌──────┐ ┌──────┐                  │
│        │      │ │      │ │      │  3 mockups       │
│        │ scr- │ │ scr- │ │ scr- │  placeholder     │
│        │ eens │ │ eens │ │ eens │  layered/parallax│
│        │  1   │ │  2   │ │  3   │  Vitor entrega   │
│        │      │ │      │ │      │  screenshots reais│
│        └──────┘ └──────┘ └──────┘                  │
│                                                     │
│              Comece hoje                            │ ← Lora 600 celestial-700, ~2.5rem
│                                                     │
│   ┌────────────────────┐ ┌────────────────────┐    │
│   │ ▶ Google Play      │ │ ⌘ App Store        │    │ ← divine-500 / disabled gray
│   │   Baixar grátis    │ │   Em breve         │    │
│   └────────────────────┘ └────────────────────┘    │
│                                                     │
└─────────────────────────────────────────────────────┘

SEÇÃO 6 — FOOTER (celestial-700 bg, auto height)
┌─────────────────────────────────────────────────────┐
│                                                     │
│  Gabriel · uma criação                              │ ← Lora 600 white
│  da VHXCO                                           │
│                                                     │
│  © 2026 VHXCO                  Privacidade · Termos │ ← Inter 400 celestial-200, ~0.8125rem
│                                · Excluir Conta      │
│                                                     │
└─────────────────────────────────────────────────────┘
═══════════════════════════════════════════════════════
```

### 2.2 Legal pages (Privacy, Terms, Delete-Account) — wireframe único

```
═══════════════════════════════════════════════════════
HEADER (sempre solid celestial-700 em legais)

┌──────┬──────────────────────────────────────────────┐
│ TOC  │  TÍTULO DA PÁGINA                           │
│      │  Subtítulo / última atualização              │
│ side-│                                              │
│ bar  │  1. Seção                                    │
│      │     Texto texto texto...                     │
│ dsk- │                                              │
│ top  │  2. Outra seção                              │
│      │     Texto texto...                           │
│ link │                                              │
│ list │  ...                                         │
│      │                                              │
│ mob- │                                              │
│ ile: │                                              │
│ acc- │                                              │
│ ord- │                                              │
│ ion  │                                              │
│      │                                              │
└──────┴──────────────────────────────────────────────┘

FOOTER (igual home)
═══════════════════════════════════════════════════════
```

- TOC desktop: `<aside>` sticky `top-24`, lista de seções com active-section highlight via IntersectionObserver.
- TOC mobile: `<details><summary>Conteúdo</summary>...</details>` no topo, accordion nativo.
- Tipografia body: Inter 1rem `line-height: 1.75`, max-w-prose.
- Conteúdo extraído tal qual dos `.astro` atuais — **zero perda de texto**.

### 2.3 Página 404

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│                  404                                │ ← Lora 700 celestial-700 ~6rem
│                                                     │
│      Esse caminho não levou a lugar nenhum.         │ ← Lora 500 italic celestial-600
│                                                     │
│      ┌──────────────────┐                          │
│      │ ← Voltar pra Home │                          │
│      └──────────────────┘                          │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 3. Design system mínimo

### 3.1 Tokens (em `tailwind.config.mjs`)

```js
// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        celestial: { 50:'#E8F4F8', 100:'#D1E9F1', 200:'#A3D3E3', 300:'#75BDD5',
                     400:'#47A7C7', 500:'#1E3A5F', 600:'#1A3354', 700:'#162B49',
                     800:'#12243E', 900:'#0E1D33' },
        divine:    { 50:'#FBF7E8', 100:'#F7EFD1', 200:'#EFDFA3', 300:'#E7CF75',
                     400:'#DFBF47', 500:'#D4AF37', 600:'#BF9E32', 700:'#AA8D2C',
                     800:'#957C27', 900:'#806B21' },
        sacred:    { 50:'#EEEAF4', 500:'#4A3B6E', 700:'#3A2F58' },
        garden:    { 50:'#EDF4EF', 500:'#4A7C59', 700:'#3A6447' },
        life:      { 50:'#F4FAE6', 500:'#7CB518', 700:'#649114' },
        heavenly:  '#E8F4F8',
        lavender:  '#E6E6FA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'], // disponível se Vitor pedir
      },
      borderRadius: { 'xl': '1rem', '2xl': '1.5rem', '3xl': '2rem' },
      boxShadow: {
        'soft': '0 4px 20px rgba(30, 58, 95, 0.08)',
        'glow': '0 0 20px rgba(212, 175, 55, 0.3)',
      },
      animation: {
        'breath': 'breath 4s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
      keyframes: {
        'breath': { '0%,100%': { transform: 'scale(1)' }, '50%': { transform: 'scale(1.005)' } },
        'fade-up': { '0%': { opacity: 0, transform: 'translateY(20px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
      },
    },
  },
};
```

### 3.2 Componentes base (em `src/components/ui/`)

| Componente | Responsabilidade | Props |
|---|---|---|
| `Container.astro` | Wrapper max-width + padding lateral | `class?` |
| `Section.astro` | Wrapper de seção com padding vertical + bg color slot | `bg`, `class?`, `slot` |
| `Button.astro` | CTA primário (divine) / secundário (outline) / disabled | `variant`, `href?`, `as`, `disabled?` |
| `Card.astro` | Card feature (bg heavenly, border, rounded-2xl, p-6) | `slot` |
| `LegalSection.astro` | H2 + slot, com id pra TOC | `title`, `id` |
| `InfoBox.astro` | Caixa de info (bg heavenly border celestial-200) | `slot` |
| `HighlightBox.astro` | Caixa de destaque (bg divine-50 border divine-300) | `slot` |
| `TOC.astro` | Table of contents sidebar/accordion | `sections: {id, title}[]` |

### 3.3 Componentes feature (em `src/components/`)

| Componente | Onde | Notas |
|---|---|---|
| `Header.astro` | layout | sticky, transparent → solid no scroll. Logo wordmark + 3 links legais |
| `Footer.astro` | layout | celestial-700 bg, logo+copy+links legais |
| `Hero.astro` | home | wordmark, tagline, 2 CTAs, scroll cue |
| `WingsTransition.astro` | home | SVG inline + import `WingsReveal.client.ts` (island Motion One) |
| `PitchSection.astro` | home | bg gradient celestial-400→300, H2 + parágrafo |
| `FeaturesGrid.astro` | home | grid 2x2/4x1, 4 `<Card>` |
| `Showcase.astro` | home | 3 mockup placeholders + H2 + CTAs grandes |
| `ScrollCue.astro` | home | seta animada fade in/out |

### 3.4 Island JavaScript (em `src/components/hero/`)

```
src/components/hero/
├── HeroSection.astro
├── WingsTransition.astro
├── WingsReveal.client.ts      ← Motion One: scroll progress → clip-path
└── wings.svg.astro            ← SVG inline (Astro file pra permitir CSS sobre paths)
```

```ts
// WingsReveal.client.ts
import { scroll, animate } from 'motion';

const wings = document.querySelector('#wings-clip');
if (wings && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  scroll(animate(wings, { clipPath: ['inset(100% 0 0 0)', 'inset(0 0 0 0)'] }), {
    target: document.querySelector('#wings-transition')!,
    offset: ['start end', 'end start'],
  });
}
```

---

## 4. Tabela de assets

| Asset | Tipo | Onde | v1 = placeholder ou Vitor entrega? | Notas |
|---|---|---|---|---|
| Logo Gabriel (gráfico) | SVG/PNG | header, footer, og-image | **placeholder** (wordmark Lora) | Vitor entrega logo real depois — substituição não-bloqueante |
| Asas SVG hero | SVG inline | `WingsTransition.astro` | **builder cria** (line art simples) | Vitor refina/contrata ilustrador se ficar insatisfeito |
| Ícones features (4) | SVG inline | feature cards | **builder cria** (line icons em divine) | Devocional, Bíblia, Streak, Chat — geomtricos simples |
| Mini-ilustração "Jardim da Fé" | SVG inline | card feature Bíblia | **placeholder** (3 plantas-glifo simples) | Vitor pode pedir designer real |
| Screenshots app (3) | PNG/WebP | `Showcase.astro` | **placeholder** (mockup com texto "screenshot AQUI") | Vitor entrega screenshots reais durante alpha aberto |
| OG image | PNG 1200×630 | `/public/og-image.png` | **placeholder** (wordmark + asa sobre heavenly) | Vitor refina se quiser |
| Favicon | SVG/ICO | `/public/` | **manter atual** | Já existe e funciona |
| Mockup device frames (iPhone/Android) | SVG | wrappers dos screenshots | **placeholder** (frame simples genérico) | Bibliotecas tipo CleanMock ou desenho manual no Figma — Vitor escolhe |
| Google Play badge | SVG | CTA showcase | **download oficial Google** | https://developer.android.com/distribute/marketing-tools/badge-files |
| App Store badge | SVG | CTA showcase (grayed) | **download oficial Apple** | https://developer.apple.com/app-store/marketing/guidelines/ |
| Logo VHXCO | SVG | footer | **placeholder** wordmark | Existe em `vhxco-website`? Verificar e reaproveitar |
| Copy completo | texto | em cada componente | **placeholder honesto** | Vitor refina depois — sub-task SUB-5 inclui copy provisório |

---

## 5. Decomposição em sub-tasks

### Princípios de sequenciamento
1. **Páginas legais nunca quebram.** SUB-2 (re-skin) acontece **antes ou junto** de qualquer mudança em `BaseLayout.astro`/`global.css`.
2. **Setup primeiro, features depois.** SUB-1 estabelece Tailwind + tokens + fonts antes de qualquer trabalho visual.
3. **Sub-tasks atômicas.** Cada uma é mergeável standalone (PR pequeno e revisável).
4. **Não-bloqueantes para deploy.** Após SUB-2 (legais + layout), todo merge subsequente pode ir pra produção sem quebrar legal compliance.
5. **Deploy final isolado.** SUB-8 é só ops/QA, não código.

### DAG (dependências)

```
SUB-1 (setup) ──> SUB-2 (BaseLayout + legais) ──> SUB-3 (UI base)
                                                       │
                                                       ▼
                  SUB-4 (Hero+asas) ──> SUB-5 (seções Home) ──> SUB-6 (SEO) ──> SUB-7 (a11y+Lighthouse) ──> SUB-8 (deploy)
                                                                                                                  │
                                                                                                                  └─ HITL Vitor
```

### Lista das 8 sub-tasks

| # | Title (slug) | Sizing | Role | Depende de |
|---|---|---|---|---|
| SUB-1 | gabriel-website-setup-tailwind-tokens | M | builder | — |
| SUB-2 | gabriel-website-baselayout-legais-reskin | M | builder | SUB-1 |
| SUB-3 | gabriel-website-ui-base-components | S | builder | SUB-1 |
| SUB-4 | gabriel-website-hero-asas-island | M | builder | SUB-2, SUB-3 |
| SUB-5 | gabriel-website-home-secoes-conteudo | M | builder | SUB-3, SUB-4 |
| SUB-6 | gabriel-website-seo-jsonld-sitemap | S | builder | SUB-5 |
| SUB-7 | gabriel-website-a11y-lighthouse-hardening | M | builder | SUB-5, SUB-6 |
| SUB-8 | gabriel-website-deploy-caprover-validation | S | operator | SUB-7 |

Detalhes de cada sub-task ficam em `vhxco-office/10-Backlog/TASK-2026-0512-13XX-gabriel-website-*.md`.

---

## 6. Branch strategy

- Base: `master` (protegida, default).
- Working branch v1: `feature/redesign-landing-v1` (saída de `master`).
- Cada sub-task = 1 commit ou pequena série de commits na `feature/redesign-landing-v1`. Não criar sub-branches por sub-task — todas vão pra mesma feature branch sequencial.
- **PR único final**: `feature/redesign-landing-v1 → master` quando todas sub-tasks concluídas. HITL Vitor.
- **Alternativa**: PR incremental por sub-task se Vitor preferir ver progresso. Default: PR único final.

> Nota do planner: o ADR documenta `flow: pr` do project page. Pra v1, recomendo PR final único — simplifica review e reduz noise. Se Vitor quiser PRs incrementais, troca pra `flow: pr-incremental` no project page e cada sub-task gera 1 PR.

---

## 7. Pipeline CapRover (zero mudança planejada)

### O que NÃO muda
- `Dockerfile` — multi-stage `node:22-alpine` → `nginx:alpine`. Sem alterações.
- `nginx.conf` — gzip + cache rules + try_files. Sem alterações.
- `.github/workflows/deploy.yml` — GH Actions trigger em push/PR. Sem alterações **a menos que** o workflow tenha problema atual (a confirmar em SUB-8).

### Validações em SUB-8
1. `npm run build` localmente gera `dist/` igual ao master.
2. `docker build .` constrói sem erros.
3. `docker run -p 8080:80 <image>` serve corretamente.
4. Lighthouse run em `localhost:8080` confirma ≥ 90 em todas categorias.
5. PR merge → GH Actions deploy → CapRover smoke test → confirmação Vitor.

### Riscos pipeline
- **R1**: `npm ci` no Dockerfile assume `package-lock.json`. Adicionar Tailwind 4 + Motion One + @fontsource muda lock — verificar reprodutibilidade.
- **R2**: Tailwind 4 + Astro 5 Vite plugin é combinação relativamente nova — smoke test em SUB-1 antes de avançar.
- **R3**: Self-hosted fonts via @fontsource adicionam ~80KB ao bundle final. Confirmar que `nginx.conf` serve woff2 com cache `Cache-Control: public, immutable` (regra atual cobre).

---

## 8. Definition of Done (toda a iniciativa)

- [x] ADR-0013 aprovado (status Accepted) — pendente Vitor confirmar recomendações.
- [x] ADR-0014 aprovado (status Accepted) — pendente Vitor confirmar visão criativa.
- [ ] Todas 8 sub-tasks merged em `feature/redesign-landing-v1`.
- [ ] PR aberto pra `master`, HITL Vitor aprovou.
- [ ] CapRover deploy concluído, smoke test passa.
- [ ] Lighthouse ≥ 90 em todas categorias × 2 viewports confirmado em produção (gabriel.vhxco.com.br ou domínio definitivo).
- [ ] Páginas legais (Privacy/Terms/Delete-Account) acessíveis e visualmente atualizadas — **conteúdo idêntico** verificado.
- [ ] WCAG AA validado (axe-core CLI ou similar).
- [ ] OG image + meta tags + sitemap + robots + llms.txt em produção.
- [ ] Backlog atualizado: sub-tasks movidas pra `90-Done/`, task pai (TASK-2026-0512-1253) movida pra `90-Done/` com `completed:` e resumo.

---

## 9. Decisões pendentes do Vitor (resumo do que destrava builder)

Pra builder pegar SUB-1, Vitor precisa confirmar (cada uma é 1-linha):

1. **Framework**: Astro 5 + 1 island Motion One? (Recomendação primária ADR-0013.)
2. **i18n v1**: PT-BR only? Ou /en/ também?
3. **Tipografia**: Lora + Inter (recomendação ADR-0014) ou substituir Lora por Playfair Display?
4. **Mood**: "Santuário editorial fluído" alinhado? Ou ajustar?
5. **Paleta seção azul**: celestial-400/300 gradient (mais "céu") ou celestial-500 puro (mais "noite-promessa")?
6. **Estrutura Home**: 6 seções (recomendação) ou 7 separando "Como funciona"?
7. **Escopo páginas**: só legais re-skin (recomendação) ou inclui /about?
8. **Logo**: wordmark Lora provisório ok? Ou esperar Vitor entregar logo gráfico?
9. **Branch/PR**: 1 PR final único (recomendação) ou PRs incrementais por sub-task?

Builder pode começar SUB-1 **com defaults da recomendação** se Vitor não objetar — toda decisão tem reversal trivial (config edit, sem rewrite de componentes).

---

## 10. Anti-objetivos (pra builder não derivar)

- ❌ Não implementar 3D, particles, audio gate, custom cursor (vetado pelo briefing).
- ❌ Não criar blog/CMS, conta/login, /faq dinâmico.
- ❌ Não tocar `master` direto.
- ❌ Não migrar pra Next.js ou outro framework.
- ❌ Não refinar copy final — placeholders honestos servem.
- ❌ Não esperar logo gráfico do Vitor pra começar — wordmark provisório libera trabalho.
- ❌ Não bloquear sub-tasks 4-7 esperando design "perfeito" de asas/ícones — placeholders honestos publicáveis, Vitor refina depois.

---

## 11. Notas

- Este plano foi gerado em 2026-05-12 pelo planner como output da TASK-2026-0512-1253.
- Source of truth: este arquivo (PLAN.md) + ADR-0013 + ADR-0014. Sub-tasks no backlog referenciam este plano.
- Atualizações neste plano devem ser commitadas no mesmo PR da sub-task que motivou a mudança.
- Se Vitor pedir alteração estrutural (ex: trocar framework, adicionar 3 páginas extras), abrir novo planning round antes de continuar.
