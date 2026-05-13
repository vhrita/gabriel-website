# Gabriel Website v1.5 — Plano de Implementação (Revamp Manuscrito Iluminado)

> **Plano operacional do builder pro revamp visual v1.5.** Source of truth pra execução.
> ADR fonte: `agentic/docs/decisions/ADR-0015-gabriel-website-visao-criativa-v2-manuscrito.md` — leia ANTES de codar.
> Substitui visualmente o que PLAN.md (v1) prescrevia. Estrutura técnica (Astro+Tailwind+SEO+legais+CapRover) intacta.

---

## 1. Resumo executivo

**Objetivo:** transformar landing v1 rejeitada (template-style, asas inventadas, sem identidade) em landing **editorial-manuscrito** com tipografia variable Fraunces+Newsreader, paleta paper-ink-divine, ornamentos SVG licenciados, composições assimétricas e hierarquia diminuendo. Site reconhecível, premium, calmo. Anti-genérico.

**Estimativa:** 1-2 dias builder (M-L), 1 PR único (commits incrementais em `feature/redesign-landing-v1`).

**Branch:** `feature/redesign-landing-v1` (mesma do PR #1, soma commits).

**Pipeline:** intacto. Sem mudança em Dockerfile, nginx.conf, GitHub Actions, sitemap.xml, robots.txt, llms.txt, JsonLd schemas.

**Legais (privacy/terms/delete-account):** intactos. Apenas herdam tipografia nova via BaseLayout (Inter mantida em `.prose-legal`; sem Lora).

---

## 2. Wireframes ASCII (assimétricos, editorial)

### 2.1 Header

```
═══════════════════════════════════════════════════════════════════════
HEADER (sticky, paper-deep bg quando scrolled, paper bg no top)
┌─────────────────────────────────────────────────────────────────────┐
│  [G·] Gabriel                       Privacidade  Termos  Excluir  ❧ │  56px
└─────────────────────────────────────────────────────────────────────┘
                                                                       └─ CornerFleuron sutil
- Wordmark "Gabriel" Fraunces 700 opsz 24 — ink-color
- "[G·]" é Fraunces 800 opsz 32 italic em divine-700 (sigil leve)
- Nav links: Inter 500 14px caps tracked 0.05em
- Bg transparent (mostra paper) no top → paper-deep/80 backdrop-blur ao scrollar
```

### 2.2 Hero (asssimétrico 2 colunas, drop cap, marginalia)

```
═══════════════════════════════════════════════════════════════════════
SEÇÃO I — HERO (paper bg, min-h 88vh, generous padding-top 32-40)

┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  I — UM SANTUÁRIO                              ╭─────────────────╮  │
│  (kicker Inter 500 caps tracked 0.08em                            │  │  ← MarginaliaCorner
│   divine-700, 12-13px,                       ╰─ pull quote ─╮     │  │     ornament top-right
│   FloralDivider mini abaixo)                                │     │  │
│                                              «  A pedra      │     │  │
│  ╔══════════════╗                              que os         │     │  │
│  ║      ╗       ║                              construtores   │     │  │
│  ║     G        ║  abriel                      rejeitaram     │     │  │
│  ║              ║  (rest of word: ink-color,   tornou-se a    │     │  │
│  ║   [DropCap   ║   Fraunces 800 opsz 144,    pedra angular. »│     │  │
│  ║   Frame      ║   clamp(4.5rem,18vw,12rem)) │               │     │  │
│  ║   ornament   ║                              — Mt 21:42      │     │  │
│  ║   in divine] ║                              (Inter 500 caps │     │  │
│  ╚══════════════╝                               9px tracked)   │     │  │
│  (G é Fraunces 900 opsz 96,                                     │     │  │
│   ink-color, ~clamp(7rem,16vw,10rem),                          │     │  │
│   wrapped por DropCapFrame SVG                                  │     │  │
│   ornament divine-500 stroke)                                   │     │  │
│                                                                 │     │  │
│  ────── FloralDivider (280px, divine-500) ──────                │     │  │
│                                                                 │     │  │
│  Um devocional diário, gerado por IA, feito                    │     │  │
│  pra sua jornada espiritual. A Bíblia inteira                  │     │  │
│  em português, inglês e espanhol. Um caminho                   │     │  │
│  de leitura que cresce com você.                               │     │  │
│  (Newsreader 400 opsz display, clamp(1.125rem,                 │     │  │
│   1.6vw, 1.375rem), ink-soft, max-w-prose ~58ch)               │     │  │
│                                                                 │     │  │
│  ┌────────────────────────┐  ╭──────────────╮                  │     │  │
│  │ Baixar no Google Play →│  │ Saiba mais ↓ │                  │     │  │
│  └────────────────────────┘  ╰──────────────╯                  │     │  │
│  (divine-500 bg, ink text,    (outline ink,                    │     │  │
│   Inter 600 15px,             ink text)                        │     │  │
│   rounded-lg 8px — não                                         │     │  │
│   2xl, manuscrito é menos                                      │     │  │
│   "pillow shaped")                                             │     │  │
│                                                                 │     │  │
│                                                                 ╰─────╯  │
│                                                                          │
│  ❧ (CornerFleuron centralizado bottom, scroll cue sutil)                │
│                                                                          │
└──────────────────────────────────────────────────────────────────────┘

PROPORÇÕES:
- Desktop ≥1024px: grid-cols-[1.6fr_1fr] gap-16, content left, pull quote right
- Tablet 768-1024px: grid-cols-[1fr_1fr] gap-8
- Mobile <768px: stack vertical, pull quote vira inline abaixo do parágrafo (sem marginalia)
- Drop cap "G" float-left ou grid-item, mr-4, alinhado pelo baseline com a primeira linha do parágrafo subsequente OU oversized inline com o resto da palavra como prefixo

ANIMAÇÃO:
- Wordmark "Gabriel" stagger por letra (delay 0/80/160/240/320/400/480ms), 600ms total
- DropCapFrame stroke draw-in (stroke-dashoffset 0→full), 1.2s, delay 200ms
- FloralDivider stroke draw-in, 800ms, delay 600ms
- Lead paragraph fade-up, 600ms, delay 1000ms
- Pull quote brackets fade, 500ms, delay 1200ms
- prefers-reduced-motion: tudo aparece estático sem delay
```

### 2.3 Pitch (full-bleed celestial, layout editorial centralizado-mas-quebrado)

```
═══════════════════════════════════════════════════════════════════════
SEÇÃO II — PITCH (celestial-700 bg, ink-light = paper text, ~64vh)

┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  II — UM SANTUÁRIO NO SEU BOLSO                                     │ ← kicker
│  ─── (FloralDivider divine-500 reverso pra contraste) ───           │
│                                                                     │
│                                                                     │
│      Devocionais  personalizados                                    │  ← Fraunces 600 opsz 72
│      por IA. A Bíblia inteira em                                    │     paper-color, line-height 1.05
│      três idiomas. Um caminho de                                    │     clamp(2.5rem, 6vw, 4.5rem)
│      leitura que cresce contigo.                                    │     max-width ~24ch
│                                                                     │
│                                                                     │
│      Tudo isso, todos os dias.                                      │  ← Fraunces 500 italic opsz 48
│      (italic destaque, divine-300 tint)                             │     clamp(1.5rem, 3vw, 2.25rem)
│                                                                     │     divine-300
│                                                                     │
│                                  ❧                                  │  ← CornerFleuron divine-500
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

PROPORÇÕES:
- Container max-w-3xl mx-auto
- Mas o texto NÃO é center-aligned — é text-left dentro do container, com kicker e divider posicionados deliberadamente
- Marginalia: NÃO usar aqui (estaria perdida em fundo escuro)
- Padding vertical: py-24 md:py-32 lg:py-40 (tight em relação aos 88vh do Hero — variando ritmo)

ANIMAÇÃO:
- Reveal-on-enter no bloco inteiro, 600ms ease-out
- Sem stagger interno
```

### 2.4 VerseMarquee (sutil entre Pitch e Features)

```
═══════════════════════════════════════════════════════════════════════
BANNER VERSE MARQUEE (paper-deep bg, ~80px height)

┌─────────────────────────────────────────────────────────────────────┐
│  ❧  «A tua palavra é lâmpada que ilumina os meus passos» — Sl 119:105  ❧  «Aquietai-vos e sabei que eu sou Deus» — Sl 46:10  ❧  «Vinde a mim todos vós que estais cansados» — Mt 11:28  ❧
└─────────────────────────────────────────────────────────────────────┘
- Newsreader 400 italic opsz display, ink-muted, ~1rem
- ❧ separator em divine-700
- Marquee CSS @keyframes translateX(-100%) loop 60s linear infinite
- Hover: animation-play-state paused
- prefers-reduced-motion: estático, 1 versículo visível centralizado
- aria-hidden="true" (decorativo, não conteúdo crítico)
```

### 2.5 Features (4 itens, lista numerada editorial, ASSIMÉTRICA)

```
═══════════════════════════════════════════════════════════════════════
SEÇÃO III — FEATURES (paper bg, ~auto vh com generous gaps)

┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  III — O QUE O GABRIEL ENTREGA                                      │
│  ─── (FloralDivider divine-500 280px) ───                           │
│                                                                     │
│                                                                     │
│  ┌──── I ────────────────────────────────────────────────────────┐  │
│  │  I.    Devocional diário, gerado por IA                       │  │
│  │  (Fraunces 800 italic    (Fraunces 600 opsz 32,               │  │
│  │   opsz 96 divine-700,     ink-color, h3)                      │  │
│  │   60px width column)                                          │  │
│  │                          Cada dia, uma reflexão personalizada │  │
│  │                          pela sua jornada espiritual.         │  │
│  │                          (Newsreader 400 opsz text, ink-soft, │  │
│  │                           max-w ~52ch)                        │  │
│  │                                                               │  │
│  │  ────────────── (thin ink-muted divider 1px) ──────────────── │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌──── II ───────────────────────────────────────────────────────┐  │
│  │  II.   Bíblia + Jardim da Fé                                  │  │
│  │                          66 livros da Bíblia em 3 idiomas.    │  │
│  │                          Veja seu progresso crescer como um   │  │
│  │                          jardim.                              │  │
│  │  ────────────────────────────────────────────────────────────  │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌──── III ──────────────────────────────────────────────────────┐  │
│  │  III.  Streak inteligente                                     │  │
│  │                          Construa constância no seu próprio   │  │
│  │                          ritmo — diário, 3x ou 5x na semana.  │  │
│  │  ────────────────────────────────────────────────────────────  │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌──── IV ───────────────────────────────────────────────────────┐  │
│  │  IV.   Gabriel Chat                                           │  │
│  │                          Tira dúvidas sobre fé e Bíblia com   │  │
│  │                          IA contextualizada pela sua religião.│  │
│  │  (sem divider no último — fim de lista)                       │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                     │
│                                  ❧                                  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

PROPORÇÕES:
- Container max-w-4xl mx-auto px-4
- Grid interno: grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-8
- Numeral romano column: text-right, baseline-aligned com h3 (vertical-align: baseline ou align-items: baseline em flex)
- Cada feature: py-12 md:py-16 (generous, manuscrito respira)
- Divider 1px solid ink-muted/30 entre features 1-2, 2-3, 3-4 (NÃO depois da 4)

ANIMAÇÃO:
- Cada feature reveal-on-enter, stagger 120ms entre elas (delay 0/120/240/360)
- Numerais romanos draw-in sutil (opacity 0→1, scale 0.95→1) em 400ms

DECISÃO DELIBERADA:
- NÃO usar cards bg-heavenly border-celestial. Cards uniformes foram o que afundou o v1.
- Lista vertical editorial >>> grid de cards.
- Manuscrito tem entradas numeradas, não cards.
```

### 2.6 Showcase (assimétrico: 1 mockup central grande + texto à direita)

```
═══════════════════════════════════════════════════════════════════════
SEÇÃO IV — SHOWCASE (paper-deep bg, ~90vh)

┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  IV — COMECE HOJE                                                   │
│  ─── (FloralDivider divine-500 200px) ───                           │
│                                                                     │
│  ┌────────────────────────────┐    ┌──────────────────────────┐    │
│  │                            │    │                          │    │
│  │  ┌──────────────────┐      │    │   Gratuito pra            │    │
│  │  │                  │      │    │   começar.                │    │
│  │  │                  │      │    │   (Fraunces 600 opsz 72,  │    │
│  │  │  PHONE MOCKUP    │      │    │    ink-color, h2)         │    │
│  │  │  CENTRAL         │      │    │                          │    │
│  │  │  (gentle float   │      │    │   Sem anúncios. Sem       │    │
│  │  │   scroll-driven, │      │    │   tracking. Sua jornada,  │    │
│  │  │   -40px range)   │      │    │   sua privacidade.        │    │
│  │  │                  │      │    │   (Newsreader 400 opsz    │    │
│  │  │                  │      │    │    text, ink-soft)        │    │
│  │  └──────────────────┘      │    │                          │    │
│  │                            │    │   ┌──────────────────┐    │    │
│  │  ┌──────┐    ┌──────┐      │    │   │ Google Play →    │    │    │
│  │  │ left │    │right │      │    │   └──────────────────┘    │    │
│  │  │mockup│    │mockup│      │    │   ┌──────────────────┐    │    │
│  │  │small │    │small │      │    │   │ App Store · Em   │    │    │
│  │  │ offset       offset     │    │   │ breve            │    │    │
│  │  │ -8px y      +8px y      │    │   └──────────────────┘    │    │
│  │  └──────┘    └──────┘      │    │   (Disabled state)        │    │
│  │                            │    │                          │    │
│  └────────────────────────────┘    └──────────────────────────┘    │
│                                                                     │
│  ❧                                                                  │
└─────────────────────────────────────────────────────────────────────┘

PROPORÇÕES:
- Desktop ≥1024px: grid-cols-[1.4fr_1fr] gap-12, mockup left, copy+CTA right
- Tablet/Mobile: stack vertical, mockups primeiro

MOCKUPS:
- 3 phone frames placeholder (TODO: Vitor entrega screenshots reais)
- Central: 200×356px viewBox, ink stroke 3.5px, paper interior
- Esquerdo/direito: 150×265px, offset Y -8px/+8px do central
- TODOS placeholder ainda — SVG vetorial com "screenshot aqui" placeholder, igual v1
- Quando Vitor entregar PNGs, builder troca SVG por <img> com proper aspect ratio

ANIMAÇÃO:
- Gentle float scroll-driven no central (mantém de v1, 60% range, -40px translateY)
- Reveal-on-enter no copy-block direito, delay 200ms

DECISÃO:
- Removido CTA repetido "Comece hoje" da v1 — copy passou pra "Gratuito pra começar"
- Adicionado bullet de privacidade (Sem anúncios. Sem tracking.) — diferencial real do produto
```

### 2.7 Footer (refeito, editorial)

```
═══════════════════════════════════════════════════════════════════════
FOOTER (ink bg, paper text — invertido)

┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   ─── (FloralDivider divine-500 reverso, full width) ───            │
│                                                                     │
│   Gabriel                          Privacidade                      │
│   (Fraunces 700 opsz 32,           Termos de Uso                    │
│    paper text)                     Excluir Conta                    │
│                                    (Inter 500 14px caps tracked,    │
│   © 2026 VHXCO                      paper-deep text)                │
│   Todos os direitos reservados.                                     │
│   (Inter 400 13px, paper-deep)                                      │
│                                                                     │
│   ❧                                                                 │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

PROPORÇÕES:
- Container max-w-5xl mx-auto py-16
- Grid 2 cols (wordmark+copyright | nav)
- Mobile: stack vertical, wordmark primeiro

ANIMAÇÃO: nenhuma. Footer é estático.
```

---

## 3. Tokens novos em `src/styles/global.css` `@theme`

### 3.1 Cores

```css
@theme {
  /* Existentes (mantém todos celestial/divine/sacred/garden/life/lavender) */

  /* NOVOS — Editorial neutrals */
  --color-paper: #FAF7F0;
  --color-paper-deep: #F2EDE0;
  --color-ink: #1A1814;
  --color-ink-soft: #3A352B;
  --color-ink-muted: #6E6759;

  /* Aliases semânticos pro builder usar (pra clareza nas classes) */
  /* Não estritamente necessários — preferir cor direta nas classes */
}
```

### 3.2 Fontes

```css
@theme {
  --font-family-display: 'Fraunces Variable', 'Fraunces', Georgia, serif;
  --font-family-serif: 'Newsreader Variable', 'Newsreader', Georgia, serif;
  --font-family-sans: 'Inter', system-ui, sans-serif;
  /* Remove --font-family que apontava pra Lora */
}
```

### 3.3 Escala tipográfica (tokens novos)

```css
@theme {
  --text-display-2xl: clamp(4.5rem, 18vw, 12rem);
  --text-display-xl: clamp(3rem, 9vw, 6rem);
  --text-display: clamp(2.5rem, 6vw, 4.5rem);
  --text-h1: clamp(2rem, 4.5vw, 3.25rem);
  --text-h2: clamp(1.625rem, 3.2vw, 2.25rem);
  --text-h3: 1.375rem;
  --text-h4: 1.125rem;
  --text-lead: clamp(1.125rem, 1.6vw, 1.375rem);
  --text-body-lg: 1.125rem;
  --text-body: 1rem;
  --text-small: 0.875rem;
  --text-caption: 0.75rem;

  /* Line heights pareados */
  --leading-display: 0.95;
  --leading-h: 1.1;
  --leading-body: 1.65;
}
```

### 3.4 Sombras editoriais

```css
@theme {
  /* Manter shadow-soft, shadow-glow */
  --shadow-paper-lift: 0 4px 16px rgba(26, 24, 20, 0.04), 0 1px 2px rgba(26, 24, 20, 0.06);
  --shadow-soft-text: 0 1px 1px rgba(26, 24, 20, 0.08);
  --shadow-divine-glow: 0 0 24px rgba(212, 175, 55, 0.16);
}
```

### 3.5 Border radii editoriais (menos pillow, mais editorial)

```css
@theme {
  /* Manter radius-2xl pra cards legados (legais), mas substituir nos editoriais */
  --radius-editorial-sm: 4px;
  --radius-editorial-md: 8px;
  --radius-editorial-lg: 12px;
  /* Buttons no v1.5 usam radius-editorial-md (8px) em vez de 2xl (24px) */
}
```

### 3.6 Spacing editorial

```css
@theme {
  --spacing-editorial-tight: 4rem;     /* py-16 */
  --spacing-editorial-comfy: 6rem;     /* py-24 */
  --spacing-editorial-spacious: 10rem; /* py-40 */
}
```

### 3.7 Paper texture (utility class, não token)

Adicionar em `global.css` (fora de `@theme`):

```css
/* Paper texture via SVG turbulence — opt-in via classe .paper-grain */
.paper-grain {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='5'/><feColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.09 0 0 0 0 0.08 0 0 0 0.035 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
  background-blend-mode: multiply;
  background-size: 200px 200px;
}

/* Aplicar SUTILMENTE no body — pode ser overrideado por Vitor (decisão aberta) */
body {
  background-color: var(--color-paper);
}
```

**Decisão aberta:** intensidade da textura (CSS noise filter de qual amplitude, SVG pattern fixo, ou liso). Ver §9.

---

## 4. Componentes a CRIAR

### 4.1 `src/components/ornaments/`

| Arquivo | Conteúdo | Fonte SVG (hard rule) |
|---|---|---|
| `DropCapFrame.astro` | SVG ornamento ao redor de letra capitular, 96×96 viewBox, 4 cantos com flourishes simétricos, stroke divine-500 1.5px, currentColor | **Fonte:** https://www.svgrepo.com/svg/15114/floral-ornament (CC0) — adaptar pra moldura. Se não couber, **Vitor decide** entre: (a) eu (planner) descrevo coordenadas Figma exatas pro Vitor desenhar; (b) builder usa Iconify `ph:flower-fill` composto em 4 cantos. **NUNCA inventar Bezier.** |
| `FloralDivider.astro` | SVG horizontal divider, 280×24 viewBox (escalável via CSS), 3 elementos centrais + linhas afilando lateralmente, stroke divine-500 1.5px | **Fonte:** https://www.svgrepo.com/vectors/flourish/ (CC0 collection) — escolher 1 asset adequado. Builder lista 2-3 candidatos pra Vitor aprovar antes de implementar. |
| `MarginaliaCorner.astro` | SVG canto ornamental, 120×120 viewBox, folhagem estilizada estendendo top-right por padrão, `transform-origin` configurável pra outros cantos | **Fonte:** Iconify `ph:flower-lotus-light` (MIT, https://icon-sets.iconify.design/ph/flower-lotus-light/) composto com filete linear, OU SVGRepo "vine corner" CC0. Builder propõe 2 opções. |
| `RomanNumeral.astro` | Componente tipográfico (não SVG): aceita prop `n: 'I'\|'II'\|'III'\|'IV'`, renderiza span com Fraunces 800 italic opsz 96 divine-700 | CSS-only, sem SVG. Estilo via classe Tailwind. |
| `PullQuoteBrackets.astro` | Wrapper component que aceita slot e renderiza « » antes/depois em divine-500 com `font-family: 'Fraunces Variable'`, weight 600, opsz 48 | CSS+slot, sem SVG externo. |
| `SectionKickerBanner.astro` | Wrapper que combina RomanNumeral + label em caps Inter + FloralDivider mini abaixo. Props: `n: I\|II\|III\|IV`, `label: string` | Composição de outros componentes. |
| `CornerFleuron.astro` | Símbolo único `❧` (Unicode U+2767 Rotated Floral Heart Bullet) em Fraunces 500 opsz 32 divine-700, ou SVG fleuron equivalente se Vitor preferir | **Fonte preferida:** Unicode (`❧` zero-cost, escala perfeito). Fallback: https://www.svgrepo.com/svg/86866/heart-flower (CC0) adaptado. |
| `HaloGlyph.astro` | SVG sol/halo estilizado, 32×32 viewBox, divine-500 stroke 1.5px | **Fonte:** Iconify `solar:sun-bold-duotone` ou `ph:sun-dim-bold` (MIT). Builder propõe 2 candidatos. |

### 4.2 `src/components/editorial/`

| Arquivo | Conteúdo |
|---|---|
| `DropCap.astro` | Wrapper que aceita 1 letra como prop e renderiza com Fraunces 900 opsz 96 + DropCapFrame envolvente. Props: `letter: string`, `frame?: boolean = true` |
| `PullQuote.astro` | Wrapper editorial: aceita citação em slot, props `attribution: string`. Renderiza com Newsreader italic + PullQuoteBrackets + linha de attribution Inter 500 caps. |
| `Kicker.astro` | Pequena tag categórica caps Inter 500 tracked. Props: `roman?: 'I'\|'II'\|'III'\|'IV'`, slot é label. Usado por SectionKickerBanner internamente. |
| `VerseMarquee.astro` | Banner full-bleed com marquee CSS de 3 versículos. Versículos passados via prop `verses: Array<{ text: string; ref: string }>`. Marquee CSS animation, pause on hover, prefers-reduced-motion estático. |

---

## 5. Componentes a REFATORAR

### 5.1 `src/styles/global.css`

- Remover imports `@fontsource/lora/*` (3 linhas)
- Adicionar import `@fontsource-variable/fraunces` e `@fontsource-variable/newsreader`
- Atualizar `@theme` com todos tokens novos da §3
- Atualizar `body { background: var(--color-paper); color: var(--color-ink); }`
- Manter `.prose-legal` intacto (legais usam Inter, sem mudança)
- Adicionar `.paper-grain` utility (§3.7)
- Manter legacy `:root` custom properties (compat com legais ainda em transição)
- Adicionar regras `@keyframes` pros stagger + draw-in (§7 da ADR)

### 5.2 `src/layouts/BaseLayout.astro`

- **Preloads:**
  - Remover `inter-latin-400` (mantém)
  - Adicionar `fraunces-variable-latin-wght.woff2`
  - Adicionar `inter-latin-500-normal.woff2` (kicker é 500)
  - **NÃO** preload Newsreader (lazy)
  - Remover `lora-latin-700-normal.woff2` preload
- **Body class:** `bg-paper text-ink font-sans` (em vez de `bg-white text-celestial-700`)
- **Header:**
  - Wordmark "Gabriel" usa Fraunces 700 opsz 24 + `[G·]` em Fraunces 800 italic divine-700 como sigil
  - Variant `transparent`: bg transparent no top, bg `paper-deep/80 backdrop-blur` ao scroll (não celestial-700)
  - Variant `solid`: bg `paper-deep` direto
  - Links nav: Inter 500 caps 12-13px tracked 0.05em, ink-soft → ink hover
- **Footer:**
  - Bg `ink` (em vez de celestial-700)
  - Wordmark Fraunces 700 paper text
  - Nav links Inter 500 caps 13px paper-deep
  - FloralDivider divine-500 no topo do footer (full width, dimmed)
  - CornerFleuron centralizado bottom
- **Theme color meta:** mudar de `#1E3A5F` pra `#FAF7F0` (paper)

### 5.3 `src/components/ui/Section.astro`

- Adicionar prop `rhythm?: 'tight' | 'comfy' | 'spacious'` (default `comfy`)
  - `tight`: `py-16 md:py-20 lg:py-24`
  - `comfy`: `py-24 md:py-28 lg:py-32` (atual)
  - `spacious`: `py-32 md:py-40 lg:py-48`
- Adicionar prop `bg`:
  - `paper` (novo, default)
  - `paper-deep` (novo)
  - `ink` (novo, pro Pitch)
  - manter `white`, `heavenly`, `celestial-gradient`, `celestial-700` (legacy compat com legais)

### 5.4 `src/components/ui/SectionTitle.astro`

- Trocar `font-serif font-semibold text-3xl md:text-4xl lg:text-5xl` por aplicação do token `--text-h1` ou `--text-display`
- Aceitar prop `size: 'display'|'h1'|'h2'|'h3'` (default `h1`)
- Aceitar prop `tone: 'on-paper'|'on-ink'|'on-light'|'on-dark'`:
  - `on-paper`: `text-ink` (default v1.5)
  - `on-ink`: `text-paper`
  - `on-light`: `text-celestial-700` (legacy, legais)
  - `on-dark`: `text-heavenly` (legacy)
- Font family: `font-display` (Fraunces) em vez de `font-serif` (era Lora)

### 5.5 `src/components/ui/Button.astro`

- **primary:** bg-divine-500 hover:bg-divine-600 **text-ink** (era celestial-900) rounded-editorial-md (8px, era 2xl) px-7 py-3.5 font-sans font-semibold text-base shadow-paper-lift hover:shadow-divine-glow
- **secondary:** border-2 border-ink **text-ink** hover:bg-ink hover:text-paper rounded-editorial-md
- **disabled:** mantém (slate)
- Remover hover lift `-translate-y-0.5` (manuscrito não pula; mantém só shadow change)

### 5.6 `src/components/hero/HeroSection.astro` — REESCRITA COMPLETA

Componente passa a:
- Importar `DropCap`, `PullQuote`, `Kicker`, `MarginaliaCorner`, `FloralDivider`, `Button`
- Renderizar wireframe §2.2 (assimétrico 2 colunas)
- Wordmark "Gabriel": cada letra em `<span>` com `style="animation-delay: Xms"` pra stagger
- Drop cap "G" via `<DropCap letter="G" frame>` (frame ornament SVG envolto)
- Pull quote: `<PullQuote attribution="Mt 21:42">A pedra que os construtores rejeitaram tornou-se a pedra angular.</PullQuote>`
- MarginaliaCorner top-right da pull quote column
- 2 CTAs Button como antes
- Sem `<ScrollCue />` legado (substitui por CornerFleuron centralizado small)

### 5.7 `src/components/home/PitchSection.astro` — REESCRITA

- Bg `ink` (em vez de celestial gradient)
- SectionKickerBanner "II — UM SANTUÁRIO NO SEU BOLSO"
- H1 grande: Fraunces 600 opsz 72 **paper text** "Devocionais personalizados por IA. A Bíblia inteira em três idiomas. Um caminho de leitura que cresce contigo."
- Italic destaque: Fraunces 500 italic divine-300 "Tudo isso, todos os dias."
- CornerFleuron divine-500 bottom
- `rhythm="comfy"`

### 5.8 `src/components/home/FeaturesGrid.astro` — REESCRITA

- Rename mental: vira "FeaturesList" mas mantém filename
- SectionKickerBanner "III — O QUE O GABRIEL ENTREGA"
- Em vez de grid de 4 cards, renderizar lista vertical de 4 itens com:
  - Grid 2 col: `grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-8`
  - Coluna 1: `<RomanNumeral n="I" />` (etc), text-right baseline-aligned
  - Coluna 2: H3 Fraunces 600 + body Newsreader 400
- Thin divider entre items (`border-t border-ink/10`)
- Sem ícones SVG das features (removidos — eram template-y)
- Reveal stagger 120ms entre items

### 5.9 `src/components/home/Showcase.astro`

- Bg muda pra `paper-deep`
- SectionKickerBanner "IV — COMECE HOJE"
- Layout muda: grid-cols-[1.4fr_1fr] desktop, mockup left, copy+CTA right
- H2 muda copy pra "Gratuito pra começar" (mais editorial)
- Adicionar parágrafo "Sem anúncios. Sem tracking. Sua jornada, sua privacidade."
- Mantém 3 mockups SVG placeholder (sem mudança)
- Mantém scroll-driven parallax do central
- Remove SectionTitle no center — passa pro right column h2

### 5.10 `src/pages/index.astro`

- Remover `import WingsTransition`
- Remover `<WingsTransition />` da composição
- Adicionar `import VerseMarquee` e renderizar entre `<PitchSection />` e `<FeaturesGrid />`
- Atualizar `headerVariant="transparent"` permanece

---

## 6. Componentes a DELETAR

- `src/components/hero/WingsTransition.astro` — substituído por composição editorial do novo Hero
- `src/components/hero/WingsReveal.client.ts` — sem uso após delete
- (Diretório `src/components/hero/` pode ser renomeado pra `src/components/home/` consolidando, mas opcional)

**MANTÉM:**
- `src/scripts/reveal-on-enter.ts` — continua útil pros stagger + ornament draw-in
- Todos componentes UI base (Container, Card, ScrollCue, TOC, etc.) — Card pode ganhar variante editorial via prop, mas API estável
- Todos `src/pages/*.astro` (apenas index.astro tem mudança estrutural; legais herdam tipografia)
- `src/components/seo/JsonLd.astro` — intacto

---

## 7. Dependências a alterar (`package.json`)

```diff
  "dependencies": {
    "@astrojs/sitemap": "^3.7.2",
    "@fontsource/inter": "^5.2.8",
-   "@fontsource/lora": "^5.2.8",
+   "@fontsource-variable/fraunces": "^5.2.8",
+   "@fontsource-variable/newsreader": "^5.2.8",
    "@tailwindcss/vite": "^4.3.0",
    "astro": "^5.17.1",
    "tailwindcss": "^4.3.0"
  }
```

**Builder roda:** `npm install` após editar package.json. Commit lock file.

---

## 8. DAG de execução (decisão: 1 builder task M-L sequencial)

**Decisão:** **1 builder task M-L única**, não 3-4 sub-tasks paralelas.

**Justificativa:**
- Todas as mudanças são acopladas: tokens novos + fontes novas + ornamentos novos + refactor de Hero/Pitch/Features/Showcase tudo depende do mesmo `global.css` final. Builders paralelos pisariam uns nos outros.
- v1.5 é revamp visual coeso — fazer Hero novo sem ornamentos novos sem paper bg seria meio-caminho que não testa o conceito.
- Single builder PR (continuação do PR #1) preserva história limpa. Multi-PR proliferaria conflitos.
- Tamanho estimado: M-L (1-2 dias = 1 sessão builder concentrada).

**Ordem interna sugerida pro builder (commits atômicos):**

1. **deps + tokens** (~30min)
   - Editar package.json (Lora out, Fraunces+Newsreader in)
   - `npm install`
   - Atualizar `global.css` @theme com tokens novos (cores paper/ink + fontes + escala tipográfica + sombras + radii)
   - Atualizar body bg/color
   - Commit: `feat(tokens): paleta paper/ink + Fraunces+Newsreader tokens (v1.5)`

2. **BaseLayout + footer** (~45min)
   - Refatorar preloads
   - Refatorar header (variant transparent + paper-deep solid)
   - Refatorar footer (ink bg + FloralDivider top + CornerFleuron)
   - Verificar legais ainda renderizam (Inter mantida em .prose-legal)
   - Commit: `feat(layout): BaseLayout paper+ink, header+footer editoriais`

3. **ornamentos** (~1h30)
   - Criar 8 componentes em `src/components/ornaments/`
   - Hard rule: cada SVG vem de URL documentada (SVGRepo asset id ou Iconify icon name). Builder lista escolhas no commit body se houver mais de 1 opção. **Se URL morta:** abre HITL Vitor antes de improvisar.
   - Commit: `feat(ornaments): DropCapFrame, FloralDivider, Marginalia, Kicker, CornerFleuron, HaloGlyph, RomanNumeral, PullQuoteBrackets`

4. **editorial primitives** (~30min)
   - Criar `src/components/editorial/`: DropCap, PullQuote, Kicker, VerseMarquee
   - Cada um compõe ornamentos
   - Commit: `feat(editorial): DropCap, PullQuote, Kicker, VerseMarquee primitives`

5. **UI tweaks** (~30min)
   - Section.astro: prop `rhythm` + variantes bg novas
   - SectionTitle.astro: tokens novos + tone editorial
   - Button.astro: text-ink, radius editorial, sem lift
   - Commit: `refactor(ui): Section rhythm, SectionTitle tokens, Button editorial`

6. **Hero novo** (~1h30)
   - Reescrever HeroSection.astro com wireframe §2.2
   - Stagger animation de letras
   - Drop cap + frame
   - Pull quote + marginalia
   - Commit: `feat(hero): composição editorial assimétrica com drop cap e marginalia`

7. **Pitch + VerseMarquee** (~45min)
   - Reescrever PitchSection.astro com bg ink + tipografia paper
   - Adicionar VerseMarquee entre Pitch e Features no index.astro
   - Definir 3-4 versículos default (com fallback se Vitor não decidir até builder pegar)
   - Commit: `feat(home): Pitch editorial ink + VerseMarquee sutil`

8. **Features list editorial** (~1h)
   - Reescrever FeaturesGrid.astro como lista numerada
   - Remover ícones, adicionar RomanNumeral
   - Stagger animation
   - Commit: `feat(home): Features lista editorial com numerais romanos`

9. **Showcase refactor + cleanup** (~1h)
   - Reescrever Showcase.astro com layout assimétrico
   - Atualizar copy
   - Deletar WingsTransition.astro + WingsReveal.client.ts
   - Atualizar index.astro removendo import wings
   - Smoke test mobile 320px / desktop 1440px
   - Commit: `feat(home): Showcase assimétrico + remove WingsTransition obsoleto`

10. **Polish + a11y** (~45min)
    - Verificar focus rings em paper bg (divine-700 visível?)
    - Verificar `prefers-reduced-motion` em todos animations
    - Verificar contraste WCAG AA com axe DevTools
    - Verificar Lighthouse mantém 90+ (esperado 100/100/95+/100 — perf pode cair pouco com Fraunces variable, aceitável)
    - Commit: `polish(v1.5): focus rings, reduced-motion, contrast verification`

**Total estimado:** ~8h trabalho concentrado = 1 dia builder. Margem pra debugging = 1.5 dias.

---

## 9. Decisões abertas pra Vitor bater (HITL antes do builder)

> Essas decisões ficam pendentes até Vitor responder. Builder não pega a task até que respostas existam (ou Vitor mande "use default").

### Q1. Tom da copy editorial — solene vs acolhedor vs poético?

- **(a) Solene** ("A pedra angular. O caminho. A reflexão diária.") — gravita pra evangélico tradicional
- **(b) Acolhedor** ("Um devocional pra cada dia. Pra você crescer no seu ritmo.") — gravita pra "amigável moderno"
- **(c) Poético** ("Devocionais que se desdobram como folhas. Um santuário no seu bolso.") — gravita pra contemplativo

**Recomendação planner:** (c) poético com toques de (b). Manuscrito iluminado pede contemplação, mas sem solenidade pesada.

### Q2. Versículo bíblico destacado no Hero (pull quote)

Opções:
- **(a) Mt 21:42** — "A pedra que os construtores rejeitaram tornou-se a pedra angular." Encadeia com "santuário". Forte.
- **(b) Lc 1:26-28** — "No sexto mês, Deus enviou o anjo chamado Gabriel… Salve, agraciada! O Senhor está contigo." Liga literal ao nome do app — Gabriel = mensageiro da Anunciação. Muito "on the nose" mas autêntico.
- **(c) Sl 119:105** — "A tua palavra é lâmpada que ilumina os meus passos." Universal, alusão a iluminação (manuscrito iluminado!), bíblico-clássico.

**Recomendação planner:** (c) Sl 119:105 pelo duplo sentido "iluminação". (a) é defensável e mais visual. (b) é meta demais.

Versículos secundários pro VerseMarquee (3-4): Sl 46:10 ("Aquietai-vos"), Mt 11:28 ("Vinde a mim"), Pv 3:5 ("Confia no Senhor de todo o teu coração"), Is 40:31 ("Os que esperam no Senhor renovam as forças").

### Q3. Drop cap em qual letra?

- **(a) G de "Gabriel"** — wordmark já é "Gabriel" no header e Hero. Redundante.
- **(b) U de "Um devocional"** — primeiro parágrafo do lead. Padrão editorial clássico (drop cap inicia o body).
- **(c) Inicial do versículo** — drop cap dentro da pull quote (ex: "A" de "A pedra...").

**Recomendação planner:** (b) U de "Um devocional...". É onde drop cap **funcionalmente** mora em manuscritos editoriais — início de body, não wordmark. Mantém wordmark "Gabriel" limpo como display, e dá foco editorial ao parágrafo principal.

### Q4. Intensidade da textura de paper

- **(a) SVG noise filter sutil** (`.paper-grain` class, opacity ~3-4%) — discreto, tátil
- **(b) SVG pattern fixo** (linhas verticais sutis estilo papel pautado) — mais "papel"
- **(c) Liso completo** — bg `#FAF7F0` puro, sem texture

**Recomendação planner:** (a) noise filter. Tátil sem ruído. (c) é safe. (b) é exagero medieval.

### Q5. Ornamentos: SVGRepo CC0 OU contratar designer pontual?

- **(a) SVGRepo CC0 + Iconify MIT** — zero custo, builder lista candidatos, Vitor aprova 1 por ornamento
- **(b) Contratar designer Fiverr** — ~$50-100 pacote inteiro de 8 ornamentos custom, ~3-5 dias
- **(c) Vitor desenha em Figma** — ~2-4h Vitor + planner descreve coordenadas

**Recomendação planner:** (a). Tem material CC0 suficiente, mood "iluminado moderno" não exige asset autoral. Reserva (b)/(c) pra v2 se assets CC0 não convencerem visualmente.

### Q6. Marquee de versículos sim/não?

- **(a) Sim** — banner sutil entre Pitch e Features, 3-4 versículos rotacionando
- **(b) Não** — manuscrito tem que ser quieto, marquee parece e-commerce
- **(c) Versão estática** — 1 versículo destacado em banner fino, sem rotação

**Recomendação planner:** (c). Estática. Marquee tem risco de virar e-commerce-ish. Versículo destacado fixo respeita o mood "quieto" sem perder o elemento textual.

### Q7. Footer: igual atual ou refeito com mood manuscrito?

- **(a) Refeito** — bg ink + FloralDivider + CornerFleuron + Fraunces wordmark (proposta em §2.7)
- **(b) Atual** — bg celestial-700, sem ornamentos (consistência com legais que ainda usam celestial)

**Recomendação planner:** (a) refeito. Footer fecha a peça. Manuscrito pede coerência cross-page no footer; legais herdam BaseLayout então footer novo se propaga corretamente.

### Q8. Manter Lora em algum lugar OU remover totalmente?

- **(a) Remover totalmente** — Fraunces+Newsreader+Inter cobrem tudo
- **(b) Manter Lora 600 só em legais** (segurança)

**Recomendação planner:** (a). Legais usam Inter via `.prose-legal` (já é o caso). Fraunces+Newsreader cobrem display+body editorial. Remover Lora reduz bundle ~30KB.

---

## 10. Verificação (DoD pro builder)

- [ ] `npm run build` verde
- [ ] `npm run dev` renderiza Home sem console errors
- [ ] Smoke test mobile (Chrome DevTools 320px): Hero não quebra, drop cap legível, marginalia se ajusta (mobile esconde ou stack)
- [ ] Smoke test desktop 1440px: Hero composição assimétrica visível, pull quote à direita, drop cap monumental
- [ ] Lighthouse Home: Performance 90+ (esperado 95+, Fraunces variable pode custar ~5pt), Accessibility 100, Best Practices 100, SEO 100
- [ ] WCAG AA verificado em axe DevTools: zero violations em Home, legais, 404
- [ ] `prefers-reduced-motion`: animations desligam, marquee estático, drop cap fade-in vira estático
- [ ] 3 legais (privacy/terms/delete-account) renderizam sem layout shift, herdam tipografia Inter, sem referências a Lora
- [ ] 404 renderiza com novo footer + tipografia
- [ ] OG image + JsonLd + sitemap + robots.txt **inalterados** (verifica diff no PR — só assets visuais e estrutura, não meta)
- [ ] Dockerfile + nginx.conf inalterados (verifica diff)
- [ ] Bundle JS Home < 5KB gzip (sem Motion/GSAP/Lottie)
- [ ] Fonts total ~165KB (Fraunces variable + Newsreader variable + 2 Inter weights)
- [ ] Build artifacts em `dist/` deploy normalmente em CapRover (sem mudança de pipeline)

---

## 11. Pipeline CapRover — confirmação intacta

- **Dockerfile:** sem alteração. nginx serve `dist/` estático.
- **nginx.conf:** sem alteração. Caching de fonts/css/js inalterado.
- **GitHub Actions** (`.github/workflows/`): sem alteração. Build → deploy continuam idênticos.
- **CapRover app:** mesma. Deploy via webhook ao merge do PR.
- **DNS/SSL:** sem alteração.
- **Lighthouse CI** (se houver no workflow): pode precisar ajustar budget de Performance pra 95 em vez de 100 (variable fonts custam ~3-5pt FCP em mobile).

Builder valida via `npm run build && npx http-server dist/ -p 4321` antes de commitar.

---

## 12. Sumário de mudanças (cheat-sheet)

| Categoria | Item |
|---|---|
| **Conceito** | Santuário editorial → Manuscrito iluminado moderno |
| **Fonts** | Lora out, Fraunces variable in (display) + Newsreader variable in (body serif); Inter mantida (sans) |
| **Paleta** | Adiciona paper #FAF7F0 + ink #1A1814; mantém celestial/divine/heavenly |
| **Ornamentos** | 8 novos componentes em `src/components/ornaments/` — todos com fonte SVG documentada (CC0/MIT) |
| **Editorial** | 4 novos em `src/components/editorial/`: DropCap, PullQuote, Kicker, VerseMarquee |
| **Asas** | DELETADAS (WingsTransition + WingsReveal) |
| **Hero** | Reescrita: composição assimétrica 2-col, drop cap, marginalia, pull quote |
| **Pitch** | Reescrita: bg ink + paper text + kicker romano + italic destaque |
| **Features** | Reescrita: lista numerada editorial (não grid de cards), numerais romanos Fraunces |
| **Showcase** | Reescrita: layout assimétrico, copy nova, paper-deep bg |
| **Footer** | Reescrita: ink bg + FloralDivider + CornerFleuron + Fraunces wordmark |
| **Animações** | Stagger letras Hero + draw-in ornamentos + reveal-on-enter mantido; sem Motion One/GSAP/Lottie |
| **Bundle** | JS Home <5KB; Fonts ~165KB total |
| **Pipeline** | Intacto (Docker/nginx/Actions/CapRover) |
| **Legais** | Intactos (só herdam tipografia via BaseLayout) |
| **SEO** | Intacto (sitemap/JsonLd/og-image/robots/llms.txt) |

---

**Próximo passo:** Vitor responde Q1-Q8 da §9, status ADR-0015 → Accepted, planner cria sub-task builder em `vhxco-office/10-Backlog/` com link pra este PLAN, builder pega e executa em 1 dia.
