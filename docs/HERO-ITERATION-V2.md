# HERO-ITERATION-V2 — Reset Estratégico do Hero do Gabriel

**Autor:** Planner (Architect)
**Data:** 2026-05-14
**Branch:** `feature/redesign-landing-v1`
**Supersede parcialmente:** ADR-0015 (apenas seção Hero)
**Status:** aguardando escolha de direção pelo Vitor

---

## 1. Contexto

Hero v1 (template centrado + asas inventadas + Lora) e Hero v1.5 ("manuscrito iluminado": wordmark Fraunces 800 opsz 144, drop cap U, pull quote Sl 119:105 lateral, MarginaliaCorner, FloralDivider, CornerFleuron, fundo paper `#FAF7F0`) foram rejeitados pelo Vitor. Feedback literal: *"ainda está muito feio e antigo... pode iniciar apenas pela Hero."*

**Análise do que falhou no v1.5.** A direção interpretou "editorial" como **literal histórico** — drop cap floreado + ornamentos vegetais + paper aged + dourado #D4AF37 + Newsreader serifa orgânica. Isso transmite "Bíblia ilustrada século XV", não "produto cristão premium 2026". Concorrentes Hallow e Glorify NÃO usam vocabulário manuscrito — usam **lifestyle photography + mockups + sans-serif limpo + paleta neutra warm**. O briefing original do Vitor era "2030 sem futurista" — entendi mal e fui pra "2030 ancorado em 1530". A correção é deslizar o ponteiro pra **editorial contemporâneo premium** (Aesop, Linear, Arc, ORDR) com sinalização cristã via copy e mood, não via ornamentos.

**Hipótese central desta iteração.** Identidade cristã não precisa ser visualmente declarada — é declarada pela copy ("devocional", "jornada espiritual", versículo discreto) e pelo mood (luz, contemplação, restraint). O visual deve ser premium contemporâneo neutro, deixando a categoria emergir da linguagem. É o que Hallow faz: o site dele poderia ser de uma fintech se você trocasse a copy.

---

## 2. Pesquisa — referências consultadas

| Ref | URL | O que extrair |
|---|---|---|
| **Hallow** | hallow.com | Two-column asymmetric: copy left, mockups stack right. Sans-serif bold headline "Find God's Peace in Prayer". Paleta neutra white/soft. Celebrity proof. Conclusão: **mockup-led + minimalism**, espiritualidade via copy não via grafismo. |
| **Glorify** | glorify-app.com | Single-column centered, headline-first, CTA único "Download Glorify". Orange accent navigation. Vocabulário: "Grow with God. Every day." Conclusão: **wordmark-led**, restraint extremo, parece app de wellness genérico. |
| **YouVersion** | bible.com | Hero centrado vertical, headline com itálico de ênfase ("For *Everyone*. 100% Free."), background photography warm naturalística. Conclusão: **editorial-photo** lifestyle + ênfase tipográfica via itálico (não bold). |
| **Linear** | linear.app | Stacked vertical, headline "The product development system for teams and agents", mockups UI reais com agente IA ativo. Sans-serif Inter Display. Whitespace generoso. Conclusão: **product UI as hero**, AI/agentic narrative dentro do hero. |
| **Mercury** | mercury.com | Headline "Radically different banking" + frame inicial/final visuais. Custom sans-serif premium, padding luxuoso. Conclusão: **promise concreto + dois frames visuais**, polish editorial via tipografia proprietária. |
| **Arc / Browser Co.** | arc.net + thebrowser.company | Asymmetric, headline conversacional (não slogan), screenshot do produto full-width como cama. Margens generosas magazine-like. Sem gradient, sem CTAs glossy. Conclusão: **screenshot editorial + tom de prosa**, evita SaaS glossy. |
| **Stripe** | stripe.com | Headline grande sans + gradient mesh organic-wave atrás. Centrado vertical, dual CTA. Conclusão: **gradient mesh signature** + headline-first. |
| **Things** | culturedcode.com/things | Centrado vertical, logo top → headline → tagline → CTA → video poster. Sans-serif sistema. Whitespace = confiança. Conclusão: **minimalismo centralizado** funciona quando o produto tem track-record (Gabriel ainda não tem). |
| **Headspace** | headspace.com | Split com headline + lifestyle imagery + CTA "Try for $0". Paleta blue calming + ilustrações figurativas simplificadas. Conclusão: **lifestyle photography humanista** + paleta única dominante. |
| **Aesop** | aesop.com (research) | Austerity premium: serif clássica, paleta off-white/sand/black, fotografia produto editorial b&w ou cor única, copy literária. Conclusão: **restraint maximal** + foto product/lifestyle b&w. |
| **ORDR** | ordrhealth.com (Awwwards SOTD 2026) | Beige `#F5F1ED` + black + foto lifestyle b&w. Headline "Health curated" sans bold. Tagline tempo-respeitoso ("5-minute weekly newsletter"). Conclusão: **paleta warm + b&w photo + restraint = premium 2026 wellness**. |
| **Calm** | calm.com | (403, research indireta) Paleta blue/dark + video loop ambient natureza. Conclusão: **ambient video** como cama do Hero é vocabulário consolidado. |
| **Awwwards SOTD 2026** | Vibrant Wellness, Happly, Studio375 | Trend 2026 dominante: **typography-as-art** (font massiva = elemento central), motion design subtil GSAP, microinterações táteis. |

**Padrões 2026 cristalizados pela pesquisa:**

1. **Editorial > SaaS template.** Margens generosas, prose-like copy, headlines conversacionais.
2. **Subtraction signals premium.** ORDR/Aesop provam: tirar > adicionar.
3. **Color paletas warm neutras** (`#F5F1ED`, `#FAF7F0`) substituíram pure white.
4. **B&W lifestyle photography** voltou como sinal de seriedade editorial (NYT, ORDR, Aesop).
5. **Typography massiva** (fonte hero ocupando 60-80% viewport width) sinaliza confiança.
6. **Mockup com conteúdo real** (não wireframe genérico) prova que o app funciona.
7. **Motion deliberado e raro** (1-2 animações por hero) > parallax/scroll-jacking.
8. **AI-narrative integrada** ao hero quando o produto usa IA (Linear faz isso).

---

## 3. As três direções

### Direção A — "Mockup-Led Premium" (Hallow + Headspace approach)

**Tom emocional:** acolhedor · tangível · confiável

**Argumento de paradigma.** O app é o herói. Em vez de wordmark gigante decorativo, o **mockup do app exibindo um devocional real** ocupa 45% do viewport. Vitor consegue mostrar pro usuário exatamente o que ele recebe — o conteúdo gerado por IA fica visível, não promete. Resolve "feio e antigo" porque substitui ornamento por **produto real**: o que o usuário vê é o que ele baixa.

**Wireframe ASCII — desktop 1440px:**

```
+--------------------------------------------------------------------+
| [logo Gabriel]                            [Login]  [Baixar app]    |  <- header transparente
+--------------------------------------------------------------------+
|                                                                    |
|                                                                    |
|  DEVOCIONAL · 14 DE MAIO                  ┌──────────────────┐    |
|  ─                                        │ ┌────────────┐   │    |
|                                           │ │  9:41    ●● │   │    |
|  Sua jornada                              │ │             │   │    |
|  espiritual,                              │ │ Bom dia,    │   │    |
|  todos os dias.                           │ │ Vitor       │   │    |
|                                           │ │             │   │    |
|  Devocionais escritos pra você por IA,    │ │ DEVOCIONAL  │   │    |
|  a Bíblia em três idiomas, e um caminho   │ │ DE HOJE     │   │    |
|  de leitura que cresce com sua vida.      │ │ ─────────   │   │    |
|                                           │ │ Quando o    │   │    |
|  ┌─────────────────┐  ┌────────────────┐  │ │ vento se    │   │    |
|  │  Baixar grátis  │  │ Como funciona →│  │ │ acalma na   │   │    |
|  └─────────────────┘  └────────────────┘  │ │ tempestade  │   │    |
|                                           │ │ — Mc 4,39   │   │    |
|  ★★★★★ 4.8 · 12 mil avaliações            │ │             │   │    |
|                                           │ │ ┌─────────┐ │   │    |
|                                           │ │ │ Ler hoje│ │   │    |
|                                           │ │ └─────────┘ │   │    |
|                                           │ └────────────┘   │    |
|                                           └──────────────────┘    |
|                                                                    |
+--------------------------------------------------------------------+
                  ↓ scroll cue minúsculo
```

**Mobile 390px (stack vertical):** header → headline pequena → mockup centralizado 320px wide → copy abaixo → CTAs full-width stacked.

**Tipografia.** Display: **Fraunces** 700 opsz 96 (não 800 opsz 144 — descer um nível). Tamanho `clamp(2.75rem, 5.5vw, 4.5rem)`, line-height `1.05`, letter-spacing `-0.02em`. Body: **Newsreader** 400 opsz 18, `clamp(1.0625rem, 1.4vw, 1.1875rem)`. Microcopy ("DEVOCIONAL · 14 DE MAIO"): **Inter** 600, 0.75rem, tracking 0.18em uppercase. Drop cap **fora**.

**Paleta.** Reusa `--color-paper` (`#FAF7F0`) como bg, `--color-ink` (`#1A1814`) headline, `--color-ink-soft` (`#3A352B`) body. Adiciona token novo `--color-mockup-shadow` (`rgba(26, 24, 20, 0.12)`) pra sombra do device. **Remove uso de `--color-divine-500` (#D4AF37) no hero** — ouro fica reservado pra accent em features depois.

**Asset central.** Mockup iPhone 15 Pro inclinado 6° à direita, 480px altura, mostrando tela real do app com devocional gerado. Conteúdo do mockup precisa ser **produzido pelo Vitor** — screenshot real do app rodando, exportado em @3x, mockup frame Apple oficial (Figma Community link já existe). Sombra projetada `0 40px 80px -20px var(--color-mockup-shadow)`.

**Motion.**
1. Mockup entra com `translateY(40px) opacity(0)` → `0,0,opacity(1)` em 800ms ease-out, delay 200ms.
2. Hover no mockup: tilt sutil de 6° → 4° em 400ms ease-out (perspective).
3. CTAs button: `transform scale(1.02)` em hover, 150ms.

`prefers-reduced-motion`: tudo aparece estático.

**Copy concreta.**
- Eyebrow: `DEVOCIONAL · 14 DE MAIO` (sans uppercase, divider em ponto médio)
- Headline: `Sua jornada espiritual, todos os dias.`
- Sub: `Devocionais escritos pra você por IA, a Bíblia em três idiomas, e um caminho de leitura que cresce com sua vida.`
- CTA primary: `Baixar grátis`
- CTA secondary: `Como funciona →`
- Social proof: `★★★★★ 4.8 · 12 mil avaliações` (se Vitor não tem 12 mil ainda, remover linha — não inventar)

**Como resolve "feio e antigo".** (1) Sem ornamentos floreados — paradigma muda de "manuscrito" pra "app store premium". (2) Mockup com conteúdo real prova que existe app — gera credibilidade que ornamento não dá. (3) Tipografia Fraunces sai do extremo opsz 144 (que parecia poster) pra opsz 96 (que parece editorial moderno).

**Risco principal.** Depende de **mockup de altíssima qualidade do app** — se o screenshot ficar feio, todo o hero cai. Mitigação: Vitor (ou Builder com asset fornecido) precisa exportar uma tela perfeita do app. Sem mockup decente, essa direção é inviável.

**Custo de implementação.** Médio. Reusa Button/SectionKickerBanner. Cria: `<AppMockup />` componente (frame Apple SVG + slot pra screenshot). Apaga: DropCap, FloralDivider, PullQuote, MarginaliaCorner, CornerFleuron do hero (continuam usáveis em outras seções). Asset novo: 1x screenshot @3x do app + 1x device frame SVG.

---

### Direção B — "Type as Sky" (typography ambient — Linear/Stripe approach editorial)

**Tom emocional:** contemplativo · espaçoso · luminoso

**Argumento de paradigma.** Tipografia **massiva mas sutil** + gradient mesh ambient ocupa todo o viewport. Não tem mockup. Não tem ornamento. O hero é **uma respiração visual**: wordmark em escala dramática, sub-frase poética, CTA único minimalista, versículo Sl 119:105 como microcopy no rodapé do hero — não como pull quote lateral. Gradient mesh de azul-celestial pra dourado-divino (reusa tokens) cria sensação de **alvorecer / luz da manhã** sem ser literal.

**Wireframe ASCII — desktop 1440px:**

```
+--------------------------------------------------------------------+
|  Gabriel                                       Login   Baixar app  |  <- header sem cor
+--------------------------------------------------------------------+
|                                                                    |
|             ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░               |  <- gradient mesh
|           ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░             |     blue → divine
|         ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░           |     ambient blur
|                                                                    |
|                                                                    |
|                                                                    |
|                  d e v o c i o n a i s                             |  <- eyebrow Inter
|                                                                    |
|                                                                    |
|        Que crescem                                                 |
|        com você.                                                   |  <- Fraunces 880
|                                                                    |     opsz 144
|                                                                    |     italic em "você"
|                                                                    |
|                                                                    |
|        Gerados por IA, escritos pra sua jornada.                   |  <- Newsreader 400
|        Bíblia em português, inglês e espanhol.                     |     opsz 28
|                                                                    |
|                                                                    |
|        ┌─────────────────────┐                                     |
|        │  Baixar no Android →│                                     |  <- CTA único
|        └─────────────────────┘                                     |
|                                                                    |
|                                                                    |
|        ·   Sl 119:105 — A tua palavra é lâmpada que                |  <- microcopy
|            ilumina os meus passos.                                 |     ink-muted
|                                                                    |
+--------------------------------------------------------------------+
```

**Mobile 390px:** mesma estrutura, gradient cobre full bleed, type cai pra `clamp(3rem, 14vw, 5rem)`, alinhamento mantém left-aligned (não centra — quebra do default).

**Tipografia.** Display: **Fraunces** opsz 144 wght 880 (mantém variable, mas o **italic em "você"** é a quebra deliberada — não bold, não drop cap, italic preciso). Tamanho `clamp(3.5rem, 9vw, 8.5rem)`, line-height `0.92`, letter-spacing `-0.035em`. Body: **Newsreader** 400 opsz 28, `clamp(1.125rem, 1.5vw, 1.375rem)`. Eyebrow: **Inter** 500, `0.8125rem`, tracking `0.3em`, uppercase, letter-spacing extremo dá efeito "wordmark sutil". Microcopy versículo: **Newsreader** italic 16px, `--color-ink-muted`.

**Paleta.** Bg **gradient mesh** custom: `radial-gradient` posicionado 30% top-left de `--color-celestial-100` (`#D1E9F1`) → `radial-gradient` 70% bottom-right de `--color-divine-100` (`#FBF7E8`) → base `--color-paper`. Ink mantém `#1A1814`. Microcopy `--color-ink-muted` (`#6E6759`). **Sem dourado puro `#D4AF37` aparente** — vira atmosfera, não accent. Token novo: `--gradient-hero-mesh` agregando os 3 stops.

**Asset central.** **Gradient mesh CSS puro** — zero imagem. Implementado como `background: radial-gradient(...) , radial-gradient(...) , var(--color-paper)` na section. Performance: zero overhead, renderiza no GPU. Animação leve descrita abaixo.

**Motion.**
1. Gradient mesh: dois `radial-gradient` shifting suavemente em loop 18s (translate `background-position` 0 → 4% → 0). Quase imperceptível, sensação de respiração.
2. Wordmark: cada linha (`Que crescem` / `com você.`) entra com `clip-path: inset(0 0 100% 0)` → `inset(0 0 0% 0)` em 900ms cubic-bezier(0.2, 0.8, 0.2, 1), stagger 150ms.
3. CTA: arrow `→` translateX 0 → 4px em hover 200ms.

`prefers-reduced-motion`: mesh estático, type aparece sem clip-path.

**Copy concreta.**
- Eyebrow: `d e v o c i o n a i s` (lowercase, tracking 0.3em — vira textura)
- Headline linha 1: `Que crescem`
- Headline linha 2: `com você.` (italic em "você")
- Sub: `Gerados por IA, escritos pra sua jornada. Bíblia em português, inglês e espanhol.`
- CTA único: `Baixar no Android →`
- Microcopy versículo: `Sl 119:105 — A tua palavra é lâmpada que ilumina os meus passos.`

**Como resolve "feio e antigo".** (1) Zero ornamento. A "espiritualidade" vira **atmosfera de luz** via gradient mesh, não símbolo. (2) Italic em "você" é a única decoração — escolha tipográfica precisa, não floral. (3) Versículo continua presente mas em microcopy 16px subordinado — declara identidade cristã sem dominar.

**Risco principal.** Gradient mesh mal calibrado vira "screensaver Windows 95". Mitigação: testar 3-4 combinações de stops com Vitor visual antes do builder finalizar. Segundo risco: tipografia massiva em mobile pode quebrar — atenção ao `clamp` floor.

**Custo de implementação.** Baixo. Reusa Button. Cria: nenhum componente novo — tudo CSS na section. Apaga: DropCap, FloralDivider, PullQuote, MarginaliaCorner, CornerFleuron, SectionKickerBanner do hero. Asset novo: zero.

---

### Direção C — "Editorial Light" (foto humanista b&w + restraint Aesop/ORDR/NYT)

**Tom emocional:** silencioso · íntimo · reverente

**Argumento de paradigma.** Fotografia editorial b&w **half-bleed à direita** (alguém lendo um livro à luz de janela, mão segurando phone com app aberto, ou paisagem contemplativa de alvorecer). Coluna esquerda: copy editorial restraint extremo. Sem cor decorativa — preto-e-branco da foto + warm cream do bg + ink. Espaçamento magazine-grade. Inspirado em Aesop + ORDR + NYT Magazine cover.

**Wireframe ASCII — desktop 1440px:**

```
+--------------------------------------------------------------------+
| Gabriel                                       Login   Baixar app   |
+--------------------------------------------------------------------+
|                                  |                                 |
|                                  |       ░░░░░░░░░░░░░░░░░░       |
|   No 014  ·  MAIO MMXXVI         |     ░░░░░░░░░░░░░░░░░░░░░     |
|                                  |    ░░░░░░░░░░░░░░░░░░░░░░░    |
|                                  |   ░░░░░░░░░░░░░░░░░░░░░░░░░   |
|   Devocionais que                |  ░░░░░░░░░ b&w photo ░░░░░░░  |
|   se desdobram                   |  ░░ pessoa lendo à janela ░░  |
|   como folhas.                   |  ░░ luz natural lateral  ░░░  |
|                                  |  ░░░░░░░░░░░░░░░░░░░░░░░░░░░  |
|                                  |   ░░░░░░░░░░░░░░░░░░░░░░░░░   |
|                                  |    ░░░░░░░░░░░░░░░░░░░░░░░    |
|   Um caminho diário, escrito     |     ░░░░░░░░░░░░░░░░░░░░░     |
|   pela inteligência artificial   |       ░░░░░░░░░░░░░░░░░░      |
|   pra sua jornada, com a Bíblia  |                                 |
|   em três idiomas.               |                                 |
|                                  |                                 |
|                                  |                                 |
|   Baixar grátis  ─→              |                                 |
|                                  |                                 |
|                                  |                                 |
|                                  |   Sl 119:105                    |
|                                  |   "A tua palavra é lâmpada"     |
+--------------------------------------------------------------------+

```

Foto ocupa 48% direito do viewport, vai do topo do hero ao bottom (full bleed vertical), corte `clip-path: inset(0 0 0 12%)` no desktop pra dar margem editorial interna. Caption sob a foto canto-inferior-direito.

**Mobile 390px:** foto **acima** ocupa 60vh full bleed top, texto desce abaixo single-column.

**Tipografia.** Display: **Fraunces** opsz 72 wght 400 italic — **light italic, não bold**. Quebra do default "headline = bold". Tamanho `clamp(2.5rem, 5.5vw, 4.75rem)`, line-height `1.05`, letter-spacing `-0.015em`. Body: **Newsreader** 400 opsz 20, `clamp(1.0625rem, 1.3vw, 1.1875rem)`, line-height `1.55`. Eyebrow numeral magazine: **Newsreader** small caps `0.875rem` (custom feature `smcp`). Caption: **Inter** 400 `0.8125rem`, ink-muted. Versículo embaixo: Newsreader italic 14px.

**Paleta.** Bg `--color-paper` mais quente, talvez `#F7F2E8` (token novo `--color-paper-warm`). Ink `--color-ink`. Foto **b&w puro**, sem tint. Nada de dourado. Nada de celestial. Token novo: `--color-paper-warm` (`#F7F2E8`).

**Asset central.** **Fotografia b&w editorial** — pessoa de meia-idade lendo livro/phone à luz lateral de janela, OU mão segurando phone com app aberto sobre uma mesa com xícara e Bíblia, OU paisagem de alvorecer minimalista (campo+horizonte+luz). 1600x1800px @2x, JPG. Crítico: foto **humanista real**, não stock genérico. Opção 1: contratar fotógrafo (Unsplash editorial Pexels não basta nesse tier). Opção 2: gerar com Midjourney v7 prompt extremamente curado + retocar manual. Vitor decide.

**Motion.**
1. Foto: zoom in lento de `scale(1.03)` → `scale(1)` em 1200ms ease-out no mount.
2. Headline: cada linha entra com `translateY(20px) opacity(0)` → `0,1` em 700ms ease-out, stagger 120ms.
3. CTA: arrow `─→` desenha-se da esquerda pra direita em 600ms no mount (SVG stroke).

`prefers-reduced-motion`: foto estática 100%, type estático, arrow estático.

**Copy concreta.**
- Eyebrow: `No 014  ·  MAIO MMXXVI` (numeral romano deliberado — única referência clássica que sobrevive, vira **carimbo de edição**, não ornamento)
- Headline: `Devocionais que se desdobram como folhas.` (mantém a frase poética que Vitor já validou)
- Sub: `Um caminho diário, escrito pela inteligência artificial pra sua jornada, com a Bíblia em três idiomas.`
- CTA: `Baixar grátis  ─→` (texto-link, não botão sólido — editorial)
- Versículo: `Sl 119:105 — "A tua palavra é lâmpada"` (canto inferior direito, sob a foto, microcopy)

**Como resolve "feio e antigo".** (1) Foto b&w é o oposto de ornamento vegetal — é **realidade contemporânea humana**. (2) Tipografia italic light (não bold) é a referência editorial NYT Magazine / Aperture / The New Yorker — visivelmente 2026. (3) CTA como texto-link, não botão sólido, é o sinal mais forte de "isso não é template SaaS".

**Risco principal.** Depende **inteiramente da foto**. Foto stock genérica destrói essa direção. Custo de aquisição da foto pode ser real ($$ fotógrafo, horas curando MJ). Segundo risco: hero com CTA texto-link em vez de botão sólido pode **diminuir conversão**. Mitigação A: testar foto antes de comprometer. Mitigação B: aceitar trade-off conversão↓ vs brand↑.

**Custo de implementação.** Baixo (código) + Médio/Alto (asset). Reusa Button só como variant ghost. Cria: nenhum componente novo. Apaga: tudo do v1.5 hero. Asset novo: **1 foto editorial de altíssima qualidade** — bloqueante.

---

## 4. Tabela comparativa

| Critério | A. Mockup-Led | B. Type as Sky | C. Editorial Light |
|---|---|---|---|
| **Tom** | Acolhedor, tangível | Contemplativo, luminoso | Silencioso, reverente |
| **Paradigma** | Produto é o herói | Tipografia é o herói | Foto é o herói |
| **Diferenciação vs v1.5** | Substitui ornamento por produto real | Substitui ornamento por luz/atmosfera | Substitui ornamento por humanidade |
| **Resolve "feio e antigo"** | Forte — cred via mockup | Forte — abstração 2026 | Forte — editorial premium |
| **Risco de cair em template** | Médio (Hallow-like óbvio) | Médio (Linear-like óbvio) | Baixo (NYT-like incomum) |
| **Risco de falhar na execução** | Alto se mockup ruim | Médio se gradient ruim | Muito alto se foto ruim |
| **Custo de implementação (código)** | Médio | Baixo | Baixo |
| **Custo de asset** | 1 screenshot app + frame | Zero (CSS) | 1 foto editorial premium |
| **Tempo estimado builder** | 6-8h | 4-5h | 4-5h + tempo curando foto |
| **Conversão esperada** | Alta (CTA forte + prova) | Média-alta | Média (CTA texto-link) |
| **Diferenciação no mercado cristão** | Média (Hallow já faz) | Alta (ninguém cristão faz) | Muito alta (ninguém cristão faz) |
| **Escalabilidade pro resto da landing** | Boa | Excelente | Excelente |
| **Robustez no mobile** | Boa | Atenção ao clamp | Boa (foto vai pro topo) |

---

## 5. Recomendação do planner

**Primária: Direção B — Type as Sky.**

Três razões concretas:
1. **Custo/risco mais favorável.** Zero assets externos. Gradient mesh é CSS puro — Builder não depende de Vitor produzir screenshot perfeito nem foto editorial. Risco fica todo dentro do código.
2. **Diferenciação no mercado cristão é máxima.** Hallow e Glorify são mockup-led. Bible.com é foto. **Ninguém no segmento cristão premium está fazendo typography-ambient.** Gabriel ocuparia espaço vago.
3. **Reaproveita tokens existentes.** Reusa `--color-celestial-100`, `--color-divine-100`, `--color-paper`, `--color-ink`, Fraunces + Newsreader. Trabalho de design system já feito não é desperdiçado — só descansa os ornamentos.

A direção B também é a mais coerente com a copy poética que Vitor já validou ("Devocionais que se desdobram como folhas" cabe perfeitamente como sub-headline alternativo) e com o conceito **"espiritualidade evocada via luz, não símbolo"** — gradient mesh é literalmente luz.

**Secundária: Direção C — Editorial Light.**

Se Vitor topar investir tempo na foto. É a direção com **maior potencial de "uau"** e maior diferenciação no segmento — mas depende inteiramente do asset.

**Terciária: Direção A — Mockup-Led.**

Mais segura comercialmente (conversão alta, prova social forte) mas **mais próxima de já parecer Hallow** — risco de "Gabriel é Hallow brasileiro" é real. Recomendo se Vitor priorizar conversão sobre identidade visual diferenciada.

---

## 6. HITL — decisão do Vitor

Builder não inicia até Vitor responder:

1. **Qual direção?** (A / B / C)
2. **Mantém copy poética "Devocionais que se desdobram como folhas"** ou prefere a alternativa proposta dentro da direção escolhida?
3. **Versículo Sl 119:105 fica?** Em qual posição (sub-microcopy, fim do hero, ou removido)?
4. Se C: **quem produz a foto?** (fotógrafo / Midjourney curado / Unsplash com aprovação manual)
5. Se A: **screenshot do app pronto?** Caso contrário, qual prazo pra ter um?

Após decisão, planner emite plano de implementação detalhado (PLAN-V2.md) com lista de arquivos a tocar, componentes a criar/apagar, e DoD pro Builder.
