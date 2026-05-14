# Claude Design Brief — Landing Page "Gabriel"

> Brief standalone, denso, exaustivo, escrito pra Claude Design (Anthropic) consumir como prompt e gerar protótipos visuais de uma landing page premium pra um app mobile chamado **Gabriel**. Nenhum codebase prévio é pré-requisito de leitura. Toda informação necessária está aqui.
>
> Autor: Architect VHXCO. Cliente: VHXCO (CNPJ 62.874.893/0001-51). Data: 2026-05-14. Idioma primário do output: PT-BR (com versões EN/ES da copy quando indicado).

---

## 1. Visão do Produto

### 1.1 O que é Gabriel

Gabriel é um **app mobile (Android + iOS)** de crescimento espiritual cristão. Não é um app de catequese institucional, não é um app de igreja, não é um app de versículo aleatório com fundo de nuvens. É um companheiro diário, íntimo, **literário** — projetado pra adultos que tratam fé como prática reflexiva, não como ritual performativo.

Nome **Gabriel** vem do arcanjo da Anunciação (Lucas 1:26-38), o que traz a mensagem. O posicionamento é de mensageiro silencioso, não de cruzado.

**Editora:** VHXCO (uma software house movida por IA; CNPJ 62.874.893/0001-51).
**Estado atual:** alpha aberto chegando, escala pequena, sem co-founders famosos, sem endorsements de bispos. O ângulo é qualidade, não influência.

### 1.2 Features (mapa funcional completo)

1. **Devocionais diários gerados por IA** — texto curto (3-6 min), contextualizado pelo histórico do usuário e pelas respostas do onboarding. Não é template genérico.
2. **Bíblia integral** em PT (preferência ARA/NVI), EN (preferência ESV/NIV) e ES (preferência RVR/NVI). Navegação por livro/capítulo/versículo, busca, marcação.
3. **Sistema de streak inteligente** — usuário escolhe entre constância diária ou 3x/5x por semana. Sem shaming. Pausas legítimas previstas.
4. **Jardim da Fé** — visualização do progresso de leitura bíblica como um jardim que cresce. Cada livro lido floresce uma planta diferente. **Anti-padrão a evitar no brief visual:** Duolingo gamification estridente.
5. **Gabriel Chat** — IA contextualizada por religião pra dúvidas teológicas. Tom de orientação espiritual, não de respostas absolutas.
6. **Verso do dia** — uma passagem por dia, com contexto histórico curto + reflexão de 1 frase.
7. **Onboarding em 7 etapas** com clímax na "Carta para Deus" (texto livre do usuário) analisada por IA pra gerar a primeira recomendação personalizada.
8. **Auth:** anônimo (uso imediato sem cadastro), Google, Apple.

### 1.3 Modelo de negócio

Freemium com **trial 3-7 dias** via RevenueCat. Preço alvo $4-8/mês ou anual equivalente com desconto. Hard paywall pós-trial. Conteúdo grátis: verso do dia + capítulo bíblico do dia + 1 devocional/semana. Pago: devocionais ilimitados personalizados + Jardim da Fé + Chat ilimitado.

> Dado de mercado (RevenueCat State of Subscription Apps 2025): hard paywall converte 5x melhor que freemium puro no D35; 82% dos trial starts acontecem no dia 0 do install. **Implicação pro brief:** a landing precisa empurrar pra download direto (App Store/Play Store), não pra signup web — o paywall é dentro do app.

### 1.4 Por que existe — qual problema resolve

Cristão adulto, 25-45 anos, tem 4 opções hoje:

- **YouVersion Bible (bible.com)** — domina escala, gratuito, mas o design é o de uma org sem fins lucrativos texana de 2008. Funcional, mas datado. Sem voz.
- **Hallow** — premium, americano, católico-centric. Production value alto (Mark Wahlberg endossando, Jonathan Roumie narrando), mas pesado de celebridade e culturalmente Estados-Unidos.
- **Glorify (UK)** — bonito, "instagrámico", mas conteúdo raso e modelo freemium agressivo.
- **Abide / Pray.com** — ambiente sleep-stories cristão, mood "audiolivro adormecedor", tom genérico de wellness.

Gabriel ocupa um espaço **ainda vazio**: companheiro espiritual cristão **literário, sóbrio, IA-nativo, multilingue PT/EN/ES**, sem celebridade, sem cosplay medieval, sem mood de igreja-evangélica-com-app. Pra quem lê livro impresso, aprecia tipografia, e acha que reverência não exige rigidez.

### 1.5 Persona detalhada (Lia, 32)

- **Nome:** Lia. 32 anos. Lisboa (nascida em Belo Horizonte, mora em Portugal há 6 anos).
- **Profissão:** product designer sênior numa fintech. Salário sólido, paga $11/mês pelo Notion, $8/mês Spotify, $14/mês Calm, $5/mês Day One.
- **Vida espiritual:** batizada católica, hoje frequenta uma congregação evangélica não-denominacional aos domingos. Faz devocional 4-5x/semana, mas o app que usa (YouVersion) "não combina com o resto da minha tela". Sente vergonha visual de abrir o app na frente de colegas no café.
- **Hábitos digitais:** iPhone 15 Pro, mode escuro, Linear/Arc/Notion/Cron. Lê em PT-BR e EN com fluência; entende ES.
- **Frustrações com apps cristãos atuais:** "infantilizam", "parecem feitos por igreja", "design dos anos 2010", "ou são caros pra caralho com cara de SaaS aleatório, ou são gratuitos e parecem newsletter de pastor".
- **O que valoriza:** tipografia, sobriedade, traduções confiáveis, app rápido, dark mode bem feito, anti-gamification estridente. Aprecia *quietness*.
- **O que NÃO quer:** quizzes "que tipo de cristão você é?", animações de chamas/raios, mascotes, push notifications agressivas, login obrigatório.

**Personas secundárias:**

- **Daniel, 39, São Paulo** — pai, advogado, católico moderado, busca devocional diário curto. Quer algo que ele e a esposa possam usar; ambos PT-BR.
- **María, 28, Madrid** — bilíngue ES/EN, evangélica, nômade digital, valoriza design tanto quanto Lia.
- **James, 41, Austin** — protestante, EN nativo, já paga Hallow mas acha "too Catholic". Curioso por alternativa.

A landing tem que falar primeiro com Lia. Daniel/María/James são bônus.

---

## 2. Brand DNA

### 2.1 Brand attributes (7 pilares)

1. **Reverente sem peso religioso.** Respeito pelo sagrado sem o sotaque institucional. Como um caderno de anotações de um monge bento contemporâneo que também usa Linear.
2. **Premium sem ostentação.** Materiais nobres, mas nada de "luxury Christian™". O luxo está na restrição, não no ouro.
3. **Moderno sem futurista.** 2026 com pés numa biblioteca de manuscritos do século XIV. Sem chrome metalizado, sem holograma, sem AI-glow azul-roxo.
4. **Íntimo sem confessional.** Tom de quem te conhece, não de quem te julga. "Bom te ver de novo." não "Bem-vindo, fiel."
5. **Literário sem ser hermético.** Como Granta, Aeon, Plough Quarterly: pensamento sério em prosa límpida. Não Tolstói, não Buzzfeed.
6. **Multilíngue por natureza.** PT/EN/ES tratados como iguais; nenhum é "tradução do outro". Visualmente a landing precisa parecer feita por alguém que pensa em três idiomas, não traduzida.
7. **Construído por humanos com IA, não por IA.** A IA é técnica, não estética. Zero "AI-generated look" — sem aquele azul-roxo Midjourney, sem aquele text gradient automático ChatGPT, sem stock illustrations de "robô segurando coração".

### 2.2 Inspirações não-óbvias (de onde extrair, sem copiar)

- **Editorial:** *The New York Times Magazine* (cover stories), *Aeon Magazine* (web typography), *The Paris Review* (intimidade literária), *Plough Quarterly* (cristianismo intelectual), *Kinfolk* (silêncio).
- **Religioso erudito:** manuscritos iluminados do MET (Book of Hours, Très Riches Heures du Duc de Berry) **filtrados por sensibilidade do NYT design team** — ou seja, **citação sutil, não cosplay**.
- **Espaços físicos:** mosteiro de São Bento de Vaals (NL) por Hans van der Laan, arquitetura monástica contemporânea, capela Bruder Klaus de Zumthor (sem ser sobre arquitetura, é sobre **o silêncio que ela cria**).
- **Apps:** Linear (engineering elegance), Mercury (financial premium, dark editorial), Arc (brand-forward sem agressividade), Things (deliberação minimalista).
- **Marcas físicas:** Aesop (austeridade luxuosa), Le Labo (paper-craft tactil), Apartamento Magazine (warmth editorial).
- **Tipografia/livraria:** Penguin Classics covers (2014-2024), Fitzcarraldo Editions (Reino Unido — capas só com Garamond branco em azul/branco). **Fitzcarraldo é a referência editorial mais próxima do que queremos** pra capas e marcação.

### 2.3 Anti-brand (clichês a evitar à risca)

Lista do que **NÃO** pode aparecer, em nenhuma circunstância, em **nenhuma** seção da landing:

1. **Cruz** como elemento gráfico decorativo. Cruz só aparece como caractere bíblico em citação, nunca como ornamento.
2. **Pomba estilizada** voando, em qualquer estilo (line art ou full color).
3. **Raios de luz** descendo das nuvens. **Halo dourado**. **Aura.**
4. **Mãos juntas em prece** (qualquer ângulo, qualquer estilo).
5. **Bíblia aberta** com folha virando ao vento.
6. **Pôr-do-sol** ou nuvens dramáticas como hero background.
7. **Tipografia gótica/blackletter.** Sem fontes Old English Text, Cloister Black, etc. Sem exceção.
8. **Fonte "script" de casamento** (Great Vibes, Allura, Pinyon Script).
9. Paleta **azul-celeste + dourado-cromado** ("igreja evangélica anos 2000").
10. **Marble/granite texture** ("cristianismo greco-romano").
11. **Madeira de mesa** como background ("mood Bible study group").
12. Versículos em **caixa alta com aspas em itálico chamativo** estilo Pinterest motivacional.
13. **Stock photo** de pessoa olhando pra cima com luz no rosto.
14. **Mascote** ou **personagem ilustrado** (anjo cartoon, padre simpático).
15. **"#blessed" energy** — emojis nas headlines, copy efusiva, exclamações.
16. **Gradiente AI** roxo-rosa-azul (Stable Diffusion vibe).
17. **Glassmorphism pesado** sobre fundo gradiente (Apple 2020 over-applied).
18. **3D iPhone flutuando com partículas de luz.**
19. **Animação parallax** com hero scroll-jacking.
20. **Logo com asas** ou **logo com brilho/raios saindo da letra**.

Se Claude Design hesitar em qualquer asset, perguntar: *"isso poderia estar na landing do Hallow, do Glorify, ou de uma igreja regional?"* Se sim → refazer.

---

## 3. Mood Board Detalhado

### 3.1 Referências URL com extração específica

Para cada referência, **o que extrair** (princípio) e **o que NÃO copiar** (especificidade):

1. **[linear.app](https://linear.app)**
   - **Extrair:** restraint tipográfica, contraste preciso entre Display variable e text, dark mode autoral (não preto puro), animações curtas com easing custom (`cubic-bezier(0.2, 0.9, 0.3, 1.4)`), uso de `Inter Display` pra heading e `Inter` pra body.
   - **Não copiar:** paleta cinza-puro com accent roxo neon (Gabriel é paper warmth, não cool gray). Sem orbs/gradient meshs roxos.

2. **[stripe.com](https://stripe.com)**
   - **Extrair:** gradient mesh sutil (não como hero único, mas como section divider acentuador), grid 12-col rigoroso, hierarquia tipográfica honesta, marketing copy em prosa não-corporativa.
   - **Não copiar:** o roxo/pink saturado, o moodboard "global commerce", a complexidade de dashboard screenshots.

3. **[mercury.com](https://mercury.com)**
   - **Extrair:** **dark palette autoral**, tipografia custom (Arcadia Display) usada com peso variável fino, cinematic photography com luz lateral suave, generous line-height (1.6+) em body text dark, soft off-white em vez de branco puro.
   - **Não copiar:** semantic financial colors (verde/vermelho/amber não fazem sentido aqui), product screenshots de banco.

4. **[arc.net](https://arc.net)**
   - **Extrair:** brand-forward sem agressividade, gradiente sutil como respiro entre seções, geometria limpa que respeita espaço, soft shadows quase imperceptíveis.
   - **Não copiar:** o motif "browser tabs", a paleta amarelo-laranja-rosa.

5. **[headspace.com](https://www.headspace.com)**
   - **Extrair:** approachable warmth de uma marca wellness, custom typeface com personalidade (Aperçu modificada), uso editorial de illustration vector minimal.
   - **Não copiar:** orange brand vivo (longe demais de Gabriel), illustrations de personagens cartoon arredondados.

6. **[calm.com](https://www.calm.com)**
   - **Extrair:** photography de natureza (paisagens calmas, sem pessoa em foco), tipografia serif em hero, mood de "respira".
   - **Não copiar:** o azul-verde marítimo padrão, sleep-story branding genérico.

7. **[aesop.com](https://www.aesop.com)**
   - **Extrair:** **paleta neutra apothecary** (cream/off-white/sand/khaki/charcoal), tipografia Optima/Garamond em logo, layout de produto como escultura, copy poética mas simples (nunca grita), generous white space.
   - **Não copiar:** product-driven (Gabriel não é loja), fotografia de still life de embalagens.

8. **[things.app (culturedcode.com)](https://culturedcode.com/things/)**
   - **Extrair:** deliberação extrema em cada animação, "nada é default", peso emocional do detalhe (corner radius, ease curves), product hero em isometric/tilted clean.
   - **Não copiar:** o yellow accent, o brand-forward do checkmark amarelo.

9. **[Fitzcarraldo Editions (fitzcarraldoeditions.com)](https://www.fitzcarraldoeditions.com)**
   - **Extrair:** **referência editorial mais próxima do brief**. Capas só com tipografia branca em campo azul/branco sólido. Identidade construída só por letterspacing e ratio. Editorial trust by minimalism.
   - **Não copiar:** o exato azul Fitzcarraldo (não queremos virar branda confundível).

10. **[The Paris Review (theparisreview.org)](https://www.theparisreview.org)**
    - **Extrair:** hierarquia tipográfica jornalística clássica (display serif + sans body), sumário em formato lista delicada, dignidade editorial atemporal.
    - **Não copiar:** layout-de-revista-com-tudo-na-home overload.

11. **[Aeon (aeon.co)](https://aeon.co)**
    - **Extrair:** essays online com longform tipografia perfeita, dark mode opcional implementado com cuidado, tags categorias delicadas, foco no texto.
    - **Não copiar:** dense magazine layout.

12. **[Plough Quarterly (plough.com)](https://www.plough.com)**
    - **Extrair:** **cristianismo intelectual** sem peso institucional. Como tratar fé como objeto de pensamento sem virar livraria evangélica. Paleta serene com 1 accent.
    - **Não copiar:** layout newsletter-pesado, alguns vícios anabaptistas-conservadores.

13. **[Standards Site Case Study: Headspace (standards.site/case-studies/headspace)](https://standards.site/case-studies/headspace)**
    - **Extrair:** como um sistema de design wellness "calm + expressive" é construído (typography rules, color rules, motion rules em paralelo).
    - **Não copiar:** o sistema literal (orange brand, smiles, etc.).

14. **[Awwwards SOTD wellness/editorial 2025-2026](https://www.awwwards.com/websites/sites_of_the_day/)** — referências rotativas. Investigar especificamente **"ORDR"** (newsletter wellness curado) e **"We Are Wellness"** entre os nominees como mood premium-editorial. Extrair: tactile editorial details, private-club mood. Não copiar: layout literal.

### 3.2 Adjetivos editoriais (15)

Pra Claude Design carregar mentalmente antes de cada decisão:

1. Hesicasta (do *hesychia* — quietude monástica oriental)
2. Reverente
3. Tatil
4. Marfim (cor + textura)
5. Manuscrito
6. Diminuendo (hierarquia que desce)
7. Silente
8. Conversacional
9. Bilíngue-nativo
10. Vellum (papel pergaminho contemporâneo)
11. Bibliográfico
12. Devocional
13. Sóbrio
14. Apothecary
15. Crepuscular (luz de fim de tarde, não pôr-do-sol)

### 3.3 What it is vs What it isn't (pares opostos)

| **Gabriel IS** | **Gabriel IS NOT** |
|---|---|
| Manuscrito do MET citado por NYT design | Cosplay medieval Etsy |
| Caderno Moleskine de viagem | Bíblia de capa dura com strass |
| Fitzcarraldo Editions | Penguin Books mainstream |
| Aesop apothecary | Sephora wellness corner |
| Mosteiro contemporâneo de Zumthor | Catedral barroca |
| Inter Display 480 weight | Helvetica Bold 700 |
| Fraunces opsz 144 em headline | Old English Text MT |
| Dark mode sand+ink (warm) | Dark mode cinza Apple default (cool) |
| Linear meet Plough Quarterly | Hallow meet YouVersion |
| Devocional como prática | Devocional como produto |
| "Bom te ver de novo." | "Bem-vindo, irmão em Cristo!" |
| Off-white #F5F1E8 | White #FFFFFF |
| Ink black #1B1B18 | Pure black #000000 |
| Variable font axes precisos | Wedding script display |
| Photography com luz crepuscular indireta | Sunset filter + lens flare |
| Marginalia tipográfica sutil | Drop shadows pesadas |
| Citação bíblica em corpo do parágrafo, sem caps | "JOHN 3:16" em allcaps gold gradient |
| Animação 200-400ms ease custom | Parallax infinito scroll-jacking |
| Wordmark "Gabriel" em Fraunces 700 opsz 96 | Logo com asas + chama |
| Multi-language nativo PT/EN/ES | "English only beta" |

---

## 4. Sistema Tipográfico Completo

### 4.1 Famílias propostas

**3 famílias. Todas Google Fonts gratuitas. Justificadas individualmente.**

1. **Fraunces (display serif variável)** — Google Fonts.
   - 4 axes: `opsz` (9-144), `wght` (100-900), `SOFT` (0-100 / Sharp→SuperSoft), `WONK` (0-1).
   - Uso: títulos de seção, hero headline, drop caps, números editoriais grandes.
   - **Configuração padrão Gabriel:** `opsz` 144 nos displays grandes, `SOFT` 30 (entre Sharp e Soft pra suavizar sem perder elegância), `WONK` 1 nos display (acima de 32px), `WONK` 0 no body se Fraunces aparecer pequeno.
   - Pesos usados: 400, 500, 600, 700, 800, 900.
   - Por quê não outra serif: Cormorant Garamond é boa mas tem só estática; Newsreader é ótima pra body mas não tem o WONK; Playfair é hipertraduzida demais (clichê 2018). Fraunces tem personalidade própria e variable axes que dão controle preciso.

2. **Inter (sans serif UI / body sans variável)** — Google Fonts, v4+ recomendada.
   - Axes: `opsz` (14-32), `wght` (100-900).
   - Uso: navegação, botões, labels, captions, microcopy, eyebrows kicker, prices, badges.
   - **Configuração padrão Gabriel:** texto pequeno (12-15px) → Inter regular; texto display (≥20px) → Inter `opsz` 28+ (equivalente Inter Display).
   - Pesos usados: 400, 500, 600, 700.

3. **Newsreader (serif body variável)** — Google Fonts.
   - Axes: `opsz` (6-72), `wght` (200-800), italic.
   - Uso: parágrafos de leitura, lead body, pull quotes, blockquotes, citações bíblicas longas.
   - **Configuração padrão Gabriel:** `opsz` 16-24 conforme tamanho, weight 400 regular / 500 medium / italic 400.
   - Por quê não usar Fraunces no body também: cansa o olho em parágrafo longo; Newsreader é desenhada exatamente pra essa função (lê melhor a 16-18px do que qualquer serif display).

**Resumo:** Fraunces (display) + Newsreader (body serif) + Inter (UI sans). Trio raro, sofisticado, todos open-source.

### 4.2 Escala tipográfica (11 tokens em rem; base 16px)

| Token | rem | px @ 16px base | Uso | Família | Configuração |
|---|---|---|---|---|---|
| `display-2xl` | 9.0rem | 144 | Hero headline desktop, drop caps | Fraunces | wght 800, opsz 144, SOFT 30, WONK 1, line-height 0.92, letter-spacing -0.04em |
| `display-xl` | 6.0rem | 96 | Section openers grandes | Fraunces | wght 700, opsz 96, SOFT 30, line-height 0.96, letter-spacing -0.03em |
| `display-lg` | 4.5rem | 72 | Section H2 hero secundário | Fraunces | wght 600, opsz 72, line-height 1.0, letter-spacing -0.025em |
| `display-md` | 3.0rem | 48 | H2 padrão | Fraunces | wght 600, opsz 48, line-height 1.05, letter-spacing -0.02em |
| `display-sm` | 2.25rem | 36 | H3 ou pull quote | Fraunces | wght 500, opsz 36, italic optional, line-height 1.15 |
| `lead` | 1.375rem | 22 | Lead paragraph hero / abertura de seção | Newsreader | wght 400, opsz 22, line-height 1.55 |
| `body` | 1.0625rem | 17 | Body padrão | Newsreader | wght 400, opsz 17, line-height 1.65 |
| `body-sm` | 0.9375rem | 15 | Body secundário, captions importantes | Newsreader | wght 400, opsz 15, line-height 1.6 |
| `ui` | 0.9375rem | 15 | Botões, labels, navegação | Inter | wght 500/600, opsz 15, line-height 1.4 |
| `ui-sm` | 0.8125rem | 13 | Microcopy UI, footer | Inter | wght 400/500, line-height 1.4 |
| `eyebrow` | 0.75rem | 12 | Kicker tipo "I — UM SANTUÁRIO", section number | Inter | wght 600, all-caps, letter-spacing 0.12em, line-height 1.0 |

Mobile (<768px) reduz `display-2xl` pra 5rem, `display-xl` pra 4rem; resto fluido com `clamp()`.

### 4.3 Uso por contexto

- **Hero headline ("Gabriel")** → Fraunces display-2xl, wght 800, opsz 144, SOFT 30, WONK 1, com a letra capitular podendo ser inflada (display-2xl no "G" e display-xl no resto via grid).
- **Section kickers ("I — UM SANTUÁRIO", "II — A PRÁTICA")** → Inter `eyebrow`. Sempre roman numeral + em-dash + título.
- **Section headlines** → Fraunces `display-md` ou `display-lg`.
- **Pull quotes / citações bíblicas curtas** → Newsreader italic display-sm, em margem ou centralizadas, **com colchetes/aspas chevron tipográficos « »** (não as straight ").
- **Body** → Newsreader body / body-sm. Nunca Fraunces no body — cansa.
- **Citações bíblicas integradas no parágrafo** → inline italic, sem chamar atenção excessiva. Referência (ex: Mt 21:42) em Inter `ui-sm` ao final.
- **Footer / legal** → Inter `ui-sm`.
- **Buttons** → Inter wght 600, `ui` size, letter-spacing 0.01em (subtly tight, não tracked-open).

### 4.4 Variable axes que importam

- **Fraunces `opsz`** — ajustar **sempre** ao tamanho real renderizado. opsz 144 num display de 144px; opsz 72 num display de 72px; opsz 48 em 48px. Nunca opsz padrão (24) em headline 96px — perde personalidade.
- **Fraunces `SOFT`** — Gabriel default 30. Subir pra 60-80 em CTAs (botões com texto em Fraunces) pra dar warmth. Manter 0 (Sharp) **só** em legal/contratos onde for usado.
- **Fraunces `WONK`** — ON (1) acima de 32px. OFF (0) abaixo. Wonky letters dão personalidade em display, atrapalham em texto.
- **Inter `opsz`** — `opsz` 14-16 em body/UI pequeno; `opsz` 28-32 em UI grande (botões grandes, badges grandes).
- **Newsreader `opsz`** — corresponder ao tamanho. Aumenta x-height em sizes pequenos, dá mais elegância em grandes.

### 4.5 Anti-padrões tipográficos

- **NÃO** usar Fraunces em parágrafo longo (>2 linhas). Cansa.
- **NÃO** usar Inter em headline grande (>36px). Inter é UI, não display.
- **NÃO** usar all-caps em Fraunces display. All-caps só em Inter eyebrow.
- **NÃO** usar drop shadows em texto.
- **NÃO** usar text gradients em headline (clichê SaaS 2022).
- **NÃO** usar `text-stroke` ou `outline text`.
- **NÃO** usar fontes script/handwritten em nenhum lugar.
- **NÃO** comprimir letras (`font-stretch: condensed`) — Fraunces tem peso pra isso, não condense.
- **NÃO** fazer kerning artificial pesado. Usar os defaults do variable opsz.

---

## 5. Sistema de Cores Completo

### 5.1 Paleta primária (6 cores) — Light mode (default)

> **Paleta "Paper & Ink"** — derivada de manuscritos do século XIV vistos no MET, pergaminho envelhecido + tinta de carbono + ouro folha. Não saturada. Warmth de marfim, não cool gray.

| Token | Hex | HSL | Uso |
|---|---|---|---|
| `paper` | `#F5F1E8` | `42° 35% 93%` | Background primário da landing. Pergaminho creme, levemente quente. |
| `paper-deep` | `#EDE7D7` | `42° 32% 88%` | Surface secundária (card backgrounds, header on scroll). |
| `paper-shadow` | `#E2DBC6` | `42° 28% 83%` | Surfaces elevadas, bordas sutis, divider areas. |
| `ink` | `#1B1B18` | `60° 8% 10%` | Texto primário. Não é #000 — tem 8% de saturation amarelada pra harmonizar com paper warm. |
| `ink-soft` | `#3D3A33` | `45° 8% 22%` | Texto secundário, body em hierarquia menor. |
| `divine` | `#A8804A` | `33° 38% 47%` | Accent único. Ouro folha contemporâneo. Não brilhante, não yellow-gold. Tabaco-bronze. Usado em kickers, drop cap ornament strokes, link underlines, sub-CTAs. |

### 5.2 Paleta secundária (3 accent colors — uso restrito)

| Token | Hex | HSL | Uso |
|---|---|---|---|
| `divine-soft` | `#C9A671` | `33° 42% 62%` | Hover state de divine, ornament fills leves. |
| `divine-deep` | `#7A5A2E` | `33° 45% 33%` | Texto sobre paper quando precisa de "link forte" sem virar ink. |
| `celestial` | `#1F2D3A` | `210° 30% 18%` | **Surface alternativa pra section breaks** — azul-meia-noite quase preto, mood "céu de Compline". Usado raramente, 1 seção da landing no máximo. Acompanha texto em `paper` (off-white) sobre ele. |

### 5.3 Sistema de neutros (extensão de paper/ink)

| Token | Hex | Uso |
|---|---|---|
| `surface` | `#FBFAF5` | Cards de testimonial, blocos de citação destacados |
| `border` | `#D8D1BD` | Divisores horizontais finos (1px), bordas de card |
| `border-strong` | `#9C9580` | Bordas que precisam aparecer (botão outline) |
| `divider` | `#E2DBC6` | Mesmo que `paper-shadow` — usado como `<hr>` |

### 5.4 Dark mode — RECOMENDADO. **Implementar.**

Dark mode é parte da identidade premium em 2026. Lia usa dark sempre. **Não é toggle ornamental — é estado igual em qualidade ao light.**

> **Paleta "Compline"** — derivada de iluminação noturna em capela, vela única refletindo em pergaminho velho. Quente, sem nunca cair em cinza estéril.

| Token | Hex | HSL | Uso |
|---|---|---|---|
| `paper` (dark) | `#14130F` | `45° 13% 7%` | Background primário dark. Não é #000 nem #111 — tem warmth marrom-tabaco. |
| `paper-deep` (dark) | `#1C1B16` | `45° 13% 10%` | Surface elevada. |
| `paper-shadow` (dark) | `#252319` | `45° 13% 13%` | Surface mais elevada (card, header on scroll). |
| `ink` (dark) | `#F2EDDB` | `45° 38% 90%` | Texto primário dark — off-white com tinge marfim, não pure white (#FFF é hostil pro olho à noite). |
| `ink-soft` (dark) | `#C9C3AE` | `45° 22% 73%` | Texto secundário. |
| `divine` (dark) | `#D4A765` | `35° 55% 62%` | Mesmo accent, ligeiramente mais luminoso porque sobre dark precisa contrastar mais. |

**Regra de troca:** toggle via `prefers-color-scheme` + override manual via toggle no header (pequeno glifo de meia-lua / sol pequeno, sem ser jokey). Persistir em localStorage.

### 5.5 Contraste WCAG (validado por par)

Light mode:
- `ink` sobre `paper` → contrast ratio **14.8:1** ✅ AAA
- `ink-soft` sobre `paper` → **7.2:1** ✅ AAA
- `divine` sobre `paper` → **4.7:1** ✅ AA large
- `paper` sobre `celestial` → **9.1:1** ✅ AAA
- `divine` sobre `celestial` → **3.9:1** — usar **só em texto grande** (≥24px) ou redesign

Dark mode:
- `ink` sobre `paper` (dark) → **15.2:1** ✅ AAA
- `ink-soft` sobre `paper` (dark) → **9.5:1** ✅ AAA
- `divine` (dark) sobre `paper` (dark) → **8.1:1** ✅ AAA

### 5.6 Anti-paleta (NUNCA usar)

- **Azul royal** `#1E40AF` ou similares — religião protestante US
- **Dourado brilhante metalizado** `#FFD700`, `#F5C518` — kitsch
- **Vermelho-sangue** `#B91C1C` — alarme + simbologia errada
- **Roxo Tailwind purple-500** `#A855F7` — AI-vibe + new age
- **Verde-menta** `#10B981` — finanças/saúde, errado
- **Pink rosé** qualquer hex acima de 60% saturation — "wellness for women" stereotype
- **Pure black** `#000000` — frio demais
- **Pure white** `#FFFFFF` — sem warmth, hostil ao olho

---

## 6. Sistema de Layout

### 6.1 Grid base

**12-col CSS Grid**, mas usado de forma **editorial-assimétrica**. Nunca 4-cols equal cards alinhados como SaaS B2B. Preferir:

- **1.6fr / 1fr** (golden ratio approx) pra hero
- **2fr / 1fr** pra seções com pull quote lateral
- **Centered narrow** (max-width 720px) pra seções de prosa
- **Full-bleed** pra seções celestial/diferenciadas
- **3-col equal** apenas em pricing/features-grid quando inevitável (e nunca com cards exatamente idênticos — pequenas variações de altura ou tratamento)

### 6.2 Espaçamento (escala em rem, base 16px)

Usar escala **4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 160**.

- Inter-elementos (texto ↔ texto): 8/12/16
- Intra-seção (heading ↔ body): 16/24
- Inter-seção verticalmente: 96/128 desktop, 64/80 mobile
- Padding lateral de seção: 24 mobile, 64 tablet, 96+ desktop
- Whitespace **GENEROSO**. Mais é mais.

### 6.3 Breakpoints (mobile-first)

- `sm` 640px — phone landscape / phablet
- `md` 768px — tablet portrait
- `lg` 1024px — tablet landscape / small desktop
- `xl` 1280px — desktop padrão
- `2xl` 1536px — large desktop

**Lia tem iPhone 15 Pro. Otimizar primeiro pro 390-430px.** Mas o desktop é o show-off — Lia vai ver primeiro no iPhone, mas vai compartilhar no Slack com a equipe abrindo no laptop.

### 6.4 Container widths

- **Reading prose** (body longo): max-width 64ch (~720px)
- **Wide prose** (hero/seções com headline + body): max-width 1120px
- **Full wide** (showcase, pricing): max-width 1280px
- **Edge-to-edge** (celestial section, footer): no max-width

### 6.5 Asymmetric vs symmetric

- **Hero**: assimétrico (left content heavy, right marginalia/pull-quote ou device mockup tilted).
- **Pitch/Mission**: centered narrow (max 720px), prosa quieta.
- **Features**: 3-col equal **mas com row offset** (cards alternados verticalmente em ±8px pra ganhar ritmo).
- **Showcase do app**: assimétrico, mockup left-aligned, copy right ou vice-versa.
- **Testimonials**: 1 só, grande, central, citado como excerto literário (não 3 cards).
- **Pricing**: centered, 1 ou 2 planos, generoso ar.
- **Footer**: edge-to-edge, grid utilitário.

---

## 7. Estrutura da Landing Page — SEÇÕES

A landing tem **7 seções principais** + Header + Footer.

Ordem:

1. **Header (sticky)**
2. **Hero**
3. **Pitch/Mission** (manifesto curto)
4. **Features** (4-5 pillars do app, editorial)
5. **Showcase** (app screens, tilted mockup, dark)
6. **Testimonial / Citação** (1 só, grande)
7. **Pricing / CTA**
8. **Footer**

---

### 7.1 HEADER

**7.1.1 Propósito:** navegação utilitária + reforço de identidade (wordmark). Não competir com o hero.

**7.1.2 Wireframe ASCII:**

```
═════════════════════════════════════════════════════════════════════
HEADER (h-14 = 56px, sticky, paper bg no top, paper-deep/80 backdrop-blur on scroll)
┌───────────────────────────────────────────────────────────────────┐
│  Gabriel                       Sobre · Bíblia · Preço      ☾ EN ▾ │
│  ↑ Fraunces 600 opsz 24                ↑ Inter 500 14            │
│  ink-color                              ink-soft                  │
│  letter-spacing -0.01em                 hover: ink + divine       │
│                                         underline-offset 4        │
└───────────────────────────────────────────────────────────────────┘
                                              ↑ moon glyph p/ dark
                                                + lang switch
```

**7.1.3 Copy:**
- Wordmark: `Gabriel`
- Nav: `Sobre` · `Bíblia` · `Preço` (PT) / `About` · `Bible` · `Pricing` (EN) / `Sobre` · `Biblia` · `Precio` (ES)
- Lang switch: dropdown `PT · EN · ES`
- Theme toggle: glifo sol/lua, sem texto

**7.1.4 Tipografia:** wordmark Fraunces 600 opsz 24 ink; nav links Inter 500 size 14 ink-soft com hover ink + underline-offset 4 divine.

**7.1.5 Assets:** glifo lua-crescente (custom SVG simples, não Material/Heroicon padrão). Sem favicon-do-app no header.

**7.1.6 Motion:** on scroll (>40px), background fade-in pra `paper-deep/80` com `backdrop-blur(16px)` em 200ms. Nav links hover underline draw-in 150ms ease-out.

**7.1.7 Responsivo:** mobile (<768px): wordmark + hamburger no canto direito. Menu expande full-screen com nav items em Fraunces display-sm centrados, lang + theme toggle no fundo.

---

### 7.2 HERO

**7.2.1 Propósito:** ancorar identidade em 3 segundos. Dizer o que é Gabriel. Ofereçer dois caminhos: download direto OU saiba mais. Lia precisa, ao ver, **respirar fundo** e pensar "finalmente alguém entendeu".

**7.2.2 Wireframe ASCII:**

```
═════════════════════════════════════════════════════════════════════
HERO (min-h 88vh, paper bg, padding-top 32 desktop / 24 mobile)

┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  I — UM SANTUÁRIO                       ╭──────────────────╮     │
│  ↑ Inter eyebrow 12 caps tracked        │  ❧ ornament      │     │
│    divine color                         │     top-right    │     │
│  ─── tiny divider (24px) divine ───     │     marginalia   │     │
│                                         │                  │     │
│  ┌────────────────────────────┐         │  «               │     │
│  │       ╭───────╮            │         │   A pedra        │     │
│  │       │       │            │         │   que os         │     │
│  │       │   G   │  abriel    │         │   construtores   │     │
│  │       │       │  (rest:    │         │   rejeitaram     │     │
│  │       ╰───────╯  Fraunces  │         │   tornou-se      │     │
│  │  (G: Fraunces  800 opsz   │         │   pedra          │     │
│  │   900 opsz 144 144 WONK   │         │   angular.       │     │
│  │   inflated)    1, ink)    │         │                  »│     │
│  │  ↑ optional DropCap       │         │   — Mt 21:42     │     │
│  │  Frame ornament  hugging  │         │   ↑ Newsreader   │     │
│  │  the G in divine stroke   │         │     italic       │     │
│  │  (light 1.5px, optional)  │         │     display-sm   │     │
│  └────────────────────────────┘         │                  │     │
│                                         ╰──────────────────╯     │
│  ────── horizontal hairline divider ─────                        │
│  (1px divine, max-w 280px, opacity 0.4)                          │
│                                                                  │
│  Um devocional diário escrito pra você. A Bíblia                 │
│  inteira em três idiomas. Um caminho de leitura                  │
│  que cresce com você.                                            │
│  ↑ Newsreader lead 22, opsz 22, ink-soft, line-height 1.55       │
│    max-w 58ch                                                    │
│                                                                  │
│  ┌─────────────────────────────┐   ┌──────────────────────┐      │
│  │  Baixar pra iPhone     →    │   │  Saiba mais     ↓    │      │
│  │  ↑ divine bg, paper text   │   │  ↑ ghost ink         │      │
│  │  rounded 6px, Inter 600 15 │   │  Inter 500 15        │      │
│  │  px-6 py-3.5               │   │  underline offset 6  │      │
│  └─────────────────────────────┘   └──────────────────────┘      │
│                                                                  │
│  Disponível também na Google Play. PT · EN · ES.                 │
│  ↑ Inter ui-sm 13, ink-soft, mt-3                                │
│                                                                  │
│                              ❧                                   │
│                       (scroll cue, centered, bottom 40px)        │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘

PROPORÇÕES DESKTOP (≥1024px):
- grid-cols-[1.6fr_1fr], gap 64
- Left: kicker → wordmark → divider → lead → CTAs
- Right: pull quote marginalia (top-aligned, sticky-ish until scroll past)

PROPORÇÕES MOBILE (<768px):
- single column, marginalia vira block depois do lead
- "G" não tem DropCapFrame ornament (simplifica)
- CTAs full-width stacked
```

**7.2.3 Copy (PT-BR primário):**

- **Kicker:** `I — UM SANTUÁRIO`
- **Wordmark:** `Gabriel`
- **Pull quote:** `« A pedra que os construtores rejeitaram tornou-se a pedra angular. »` — `Mt 21:42`
- **Lead:** `Um devocional diário escrito pra você. A Bíblia inteira em três idiomas. Um caminho de leitura que cresce com você.`
- **CTA primário:** `Baixar pra iPhone →`
- **CTA secundário:** `Saiba mais ↓`
- **Disclaimer:** `Disponível também na Google Play. PT · EN · ES.`

**EN:**
- Kicker: `I — A SANCTUARY`
- Pull quote: `« The stone the builders rejected has become the cornerstone. »` — Mt 21:42
- Lead: `A daily devotional written for you. The whole Bible in three languages. A path of reading that grows with you.`
- CTAs: `Download for iPhone →` / `Learn more ↓`
- Disclaimer: `Also on Google Play. PT · EN · ES.`

**ES:**
- Kicker: `I — UN SANTUARIO`
- Pull quote: `« La piedra que desecharon los constructores se ha convertido en la piedra angular. »` — Mt 21:42
- Lead: `Un devocional diario escrito para ti. La Biblia entera en tres idiomas. Un camino de lectura que crece contigo.`
- CTAs: `Descargar para iPhone →` / `Saber más ↓`
- Disclaimer: `También en Google Play. PT · EN · ES.`

**7.2.4 Tipografia aplicada:**
- Kicker: Inter 600, 12px, all-caps, letter-spacing 0.12em, color `divine`
- Wordmark "Gabriel": Fraunces 800, opsz 144, SOFT 30, WONK 1, color `ink`, letter-spacing -0.04em, line-height 0.92, clamp(4.5rem, 14vw, 9rem)
- Drop cap "G": pode ser Fraunces 900 opsz 144 inflado (~140% do x-height da palavra) com ornament SVG opcional
- Pull quote: Newsreader italic 400, opsz 36, ~28px, line-height 1.3, color `ink-soft`, com `« »` em Fraunces 400
- Lead: Newsreader 400, opsz 22, line-height 1.55, color `ink-soft`, max-w 58ch
- CTAs: Inter 600, 15px, letter-spacing 0.01em
- Disclaimer: Inter 400, 13px, `ink-soft`

**7.2.5 Assets necessários:**
- `CornerFleuron` SVG — pequeno ornamento de canto, ~32×32px, inspirado em manuscrito iluminado (não literal, **estilizado contemporâneo**). Versão tracé linear single-stroke 1.5px, no acabamento dourado-tabaco divine. **Não usa cruz, não usa pomba, não usa fleur-de-lis literal.** Pode ser uma espiral, um trifólio abstrato, um nó-vesica-piscis simplificado.
- `DropCapFrame` SVG (opcional, desktop only) — moldura geométrica delicada ao redor do "G", linhas finas (1px) divine, decoração de manuscrito reinterpretada.
- `HorizontalDivider` SVG — linha + 1 ornamento central (ponto, losango pequeno, ou trifólio). Width 280px, stroke divine, opacity 0.4-0.6.
- `ScrollCueGlyph` — pode ser o mesmo `❧` (hedera/florón) em Fraunces ou um SVG custom.
- NÃO PRECISA: foto, ilustração de pessoa, mockup ainda (mockup é seção Showcase).

**7.2.6 Motion:**
- Carregamento sequencial (total ~1400ms):
  - 0ms: kicker fade-in opacity 0→1 + translateY 4px→0, 400ms ease-out
  - 200ms: tiny divider draw-in (SVG stroke-dashoffset)
  - 400ms: wordmark "Gabriel" letter-by-letter stagger (cada letra 80ms delay, total ~640ms), fade + translateY 8px→0
  - 800ms: DropCapFrame stroke draw-in 800ms
  - 1000ms: horizontal divider draw-in 600ms
  - 1100ms: lead fade-up 400ms
  - 1300ms: pull quote fade + brackets `«` `»` translate slight in 400ms
  - 1400ms: CTAs fade-up 300ms
- Hover CTAs: micro tilt nenhum, mas background-color shift 200ms; CTA primário: shift de `divine` → `divine-deep` background. Outline CTA: border-color shift de `border` → `ink`.
- Cursor: default. **Sem cursor custom** (clichê 2022).

**7.2.7 Responsivo mobile:**
- Wordmark `Gabriel` reduz pra clamp(3rem, 18vw, 5rem)
- DropCapFrame ornament desabilitado (simplifica, evita overcrowding)
- Pull quote vira block centrado abaixo do lead, sem marginalia sidebar
- CTAs full-width stacked, 12px gap entre
- Tap target mínimo 48×48 pra acessibilidade
- Scroll cue `❧` ainda aparece, menor

---

### 7.3 PITCH / MISSION

**7.3.1 Propósito:** declarar a missão em 3-5 frases. Manifesto curto. Diferenciar de concorrentes sem nomear. Lia precisa ler isso e pensar "exatamente o que eu queria que alguém dissesse".

**7.3.2 Wireframe ASCII:**

```
═════════════════════════════════════════════════════════════════════
PITCH (paper bg ou celestial bg [recomendado], ~64vh, padding-y 96)

┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│             II — A PRÁTICA                                       │
│             ─── divider divine ───                               │
│                                                                  │
│                                                                  │
│                                                                  │
│           Devocional diário,                                     │
│           escrito por inteligência                               │
│           e revisado pela tradição.                              │
│           A Bíblia em três idiomas.                              │
│           Sem barulho.                                           │
│                                                                  │
│           ↑ Fraunces 500 opsz 72, paper color (sobre celestial)  │
│             clamp(2rem, 5vw, 4.5rem), line-height 1.08           │
│             letter-spacing -0.02em                               │
│             max-w 28ch (forced line breaks importam)             │
│                                                                  │
│                                                                  │
│           Gabriel é um companheiro de leitura. Não               │
│           um aplicativo de igreja, não um sermão                 │
│           empacotado. É um lugar pra parar, ler                  │
│           devagar, e voltar amanhã.                              │
│                                                                  │
│           ↑ Newsreader 400 opsz 20, ink-soft (sobre celestial:   │
│             paper) opacity ~0.85, max-w 56ch, mt-12              │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘

LAYOUT: centered narrow, max-w 720px. Texto deslocado levemente da
exata centralização (offset 16px left desktop) pra dar irregularidade
editorial.
```

**7.3.3 Copy:**

- Kicker: `II — A PRÁTICA`
- Headline (force line-breaks importantes):
  ```
  Devocional diário,
  escrito por inteligência
  e revisado pela tradição.
  A Bíblia em três idiomas.
  Sem barulho.
  ```
- Body:
  > Gabriel é um companheiro de leitura. Não um aplicativo de igreja, não um sermão empacotado. É um lugar pra parar, ler devagar, e voltar amanhã.

**EN:**
- Kicker: `II — THE PRACTICE`
- Headline:
  ```
  A daily devotional,
  written with intelligence
  and revised by tradition.
  The Bible in three languages.
  No noise.
  ```
- Body: *Gabriel is a reading companion. Not a church app, not a sermon packaged for download. It's a place to stop, read slowly, and come back tomorrow.*

**ES:**
- Kicker: `II — LA PRÁCTICA`
- Headline:
  ```
  Un devocional diario,
  escrito con inteligencia
  y revisado por la tradición.
  La Biblia en tres idiomas.
  Sin ruido.
  ```
- Body: *Gabriel es un compañero de lectura. No es una app de iglesia, no es un sermón empaquetado. Es un lugar para detenerse, leer despacio, y volver mañana.*

**7.3.4 Tipografia:**
- Kicker: Inter 600, 12px caps, divine sobre celestial (cuidado contraste — usar divine-soft ou aumentar para 14px); ou se em paper bg, divine direto.
- Headline: Fraunces 500, opsz 72, line-height 1.08, letter-spacing -0.02em, color paper (sobre celestial) ou ink (sobre paper). Quebra de linha **forçada** — o ritmo de leitura é parte do design.
- Body: Newsreader 400 opsz 20, ink-soft / paper@85%.

**7.3.5 Assets:** apenas `HorizontalDivider` SVG decorativo divine na linha do kicker. Sem fotos, sem ícones.

**7.3.6 Motion:**
- Scroll-triggered (entra no viewport): fade-up cada linha da headline, stagger 100ms entre linhas. Total ~600ms.
- Body fade-up 400ms, delay 600ms após headline.
- Sem parallax. Sem text reveal por palavra (overused 2024).
- Reduzir movimento: tudo aparece estático no `prefers-reduced-motion: reduce`.

**7.3.7 Responsivo:** mobile → headline reduz pra clamp(1.75rem, 7vw, 2.5rem). Quebras de linha forçadas podem ser substituídas por flow natural se ficar feio em viewport estreito.

---

### 7.4 FEATURES

**7.4.1 Propósito:** mostrar 4-5 pillars do produto sem virar feature dump de SaaS. Cada feature merece respiração editorial. Lia tem que ler 1 ou 2 e querer ler todas.

**7.4.2 Wireframe ASCII:**

```
═════════════════════════════════════════════════════════════════════
FEATURES (paper bg, padding-y 128)

┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  III — O QUE TEM DENTRO                                          │
│  ─── divider divine ───                                          │
│                                                                  │
│  Cinco práticas diárias, costuradas em um único caderno.         │
│  ↑ Newsreader lead 22, ink-soft, max-w 56ch, mt-8                │
│                                                                  │
│                                                                  │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │                 │  │                 │  │                 │  │
│  │  ❧              │  │  ❦              │  │  ☙              │  │
│  │                 │  │                 │  │                 │  │
│  │  Devocional     │  │  Bíblia em      │  │  Jardim         │  │
│  │  diário         │  │  três idiomas   │  │  da Fé          │  │
│  │                 │  │                 │  │                 │  │
│  │  Cada manhã,    │  │  Versões fiéis  │  │  Seu progresso  │  │
│  │  uma página     │  │  em PT, EN e    │  │  de leitura     │  │
│  │  nova. Curta,   │  │  ES, navegação  │  │  vira jardim.   │  │
│  │  contextual.    │  │  em segundos.   │  │  Sem barulho.   │  │
│  │                 │  │                 │  │                 │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
│   ↑ paper-deep bg,     ↑ offset down 24      ↑ offset up 8       │
│     border 1px           (intentional         (rhythm,            │
│     border color         asymmetry)             not lazy)         │
│     rounded 8px,                                                  │
│     padding 32                                                    │
│                                                                  │
│        ┌─────────────────┐  ┌─────────────────┐                  │
│        │  ✦              │  │  ✜              │                  │
│        │                 │  │                 │                  │
│        │  Conversa       │  │  Verso          │                  │
│        │  com Gabriel    │  │  do dia         │                  │
│        │                 │  │                 │                  │
│        │  Dúvidas        │  │  Uma passagem,  │                  │
│        │  teológicas,    │  │  uma frase de   │                  │
│        │  respostas      │  │  contexto.      │                  │
│        │  refletidas.    │  │                 │                  │
│        └─────────────────┘  └─────────────────┘                  │
│        ↑ row 2, 2 cards centered with gap (asymmetric vs row 1)  │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘

GRID: 3 cards row 1 (intencionalmente offset vertical), 2 cards row 2
      centralizados. Não é grid de 6 perfeito — é editorial.

DESKTOP ≥1024: 3+2 layout
TABLET 768-1024: 2+2+1 layout
MOBILE <768: stack vertical, sem offset
```

**7.4.3 Copy:**

| # | Título PT | Body PT | Glifo |
|---|---|---|---|
| 1 | `Devocional diário` | `Cada manhã, uma página nova. Curta, contextual, escrita pra onde você está.` | ❧ |
| 2 | `Bíblia em três idiomas` | `Versões fiéis em português, inglês e espanhol. Navegação em segundos. Sem ruído.` | ❦ |
| 3 | `Jardim da Fé` | `Seu progresso de leitura vira um jardim. Cada livro que você lê, uma planta nova floresce.` | ☙ |
| 4 | `Conversa com Gabriel` | `Dúvidas teológicas, perguntas sobre passagens difíceis. Respostas refletidas, não respostas absolutas.` | ✦ |
| 5 | `Verso do dia` | `Uma passagem por dia, com uma frase de contexto. Lê-se em quarenta segundos.` | ✜ |

**EN/ES versions:** anexadas na seção 11 (tom de copy) — toda copy tem 3 idiomas.

**7.4.4 Tipografia:**
- Kicker: Inter 600 12 caps tracked, divine
- Section lead: Newsreader lead 22, ink-soft, max-w 56ch
- Card glyph: Fraunces 500 opsz 36, 28-32px, color `divine`
- Card title: Fraunces 600 opsz 28, ~22-24px, color ink
- Card body: Newsreader 400 opsz 16, line-height 1.55, color ink-soft

**7.4.5 Assets:**
- 5 **glifos tipográficos** (não ícones SVG). Usar: `❧` (hedera), `❦` (rotated florón), `☙` (reversed hedera), `✦` (four-point star), `✜` (cross of voids — pode-se substituir por qualquer ornamento gráfico que NÃO seja cruz cristã literal; alternativas: `✱`, `❀`, `❉`).
- Se glifos Unicode não derem caráter suficiente, **criar 5 SVGs custom** com mood manuscrito iluminado (linha fina, sem fill), todos visualmente da mesma família mas diferentes.

**7.4.6 Motion:**
- Cards entram em viewport scroll-triggered: cada um stagger 80ms, fade-up 8px → 0, 500ms ease-out.
- Hover: card sobe 2px com `transform: translateY(-2px)`, shadow muito sutil aparece (0 4px 12px rgba(27,27,24,0.04)), border-color shift de `border` → `border-strong`. Glifo muda de color de `divine` → `divine-deep`. Duração 200ms.
- Sem parallax. Sem flip. Sem accordion expand.

**7.4.7 Responsivo:**
- Mobile (<768): stack vertical full-width, sem offset assimétrico, glifos maiores (40px) na esquerda, copy na direita (flex-row dentro do card).
- Tablet (768-1024): 2-col grid, last card alone on its row.

---

### 7.5 SHOWCASE

**7.5.1 Propósito:** mostrar o app **como objeto**. Tela do app aparece pela primeira vez (até agora a landing foi pura tipografia). Quebrar o ritmo "leia, leia, leia" com um momento visual forte. Usar tema **celestial** ou **dark mode** pra fazer o iPhone screen pop.

**7.5.2 Wireframe ASCII:**

```
═════════════════════════════════════════════════════════════════════
SHOWCASE (celestial bg, padding-y 128, full-bleed)

┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  IV — DENTRO DO APP                                              │
│  ─── divider divine ───                                          │
│                                                                  │
│                                                                  │
│  ┌──────────────────────┐    ╭───────────────────────────────╮   │
│  │                      │    │                               │   │
│  │   ┌──────────────┐   │    │   Devocional, Bíblia          │   │
│  │   │              │   │    │   e silêncio em um só         │   │
│  │   │  [iPhone     │   │    │   lugar.                      │   │
│  │   │   screen     │   │    │                               │   │
│  │   │   tilted     │   │    │   ↑ Fraunces 600 opsz 56,     │   │
│  │   │   -8deg]     │   │    │     paper color, line-h 1.05  │   │
│  │   │              │   │    │     max-w 22ch                │   │
│  │   │   showing    │   │    │                               │   │
│  │   │   devocional │   │    │   Cada tela do Gabriel        │   │
│  │   │   page       │   │    │   foi desenhada como          │   │
│  │   │              │   │    │   página de livro. Texto      │   │
│  │   └──────────────┘   │    │   primeiro. Cromo zero.       │   │
│  │                      │    │                               │   │
│  │   subtle drop        │    │   ↑ Newsreader 400 opsz 18,   │   │
│  │   shadow (large      │    │     paper@85%, max-w 48ch     │   │
│  │   soft blur 60px)    │    │                               │   │
│  │                      │    │                               │   │
│  │   gradient floor     │    │   [ Saiba mais sobre o app ]  │   │
│  │   reflection below   │    │   ↑ ghost button paper text    │   │
│  │                      │    │     border paper@40            │   │
│  └──────────────────────┘    ╰───────────────────────────────╯   │
│                                                                  │
│  ─── horizontal hairline paper/40 ───                            │
│                                                                  │
│  [Below the headline mockup, a secondary row of 3 SMALLER        │
│   iPhone mockups showing: Bíblia · Jardim · Chat — each ~280px  │
│   wide, no tilt, straight, in a horizontal row with caption     │
│   under each.]                                                   │
│                                                                  │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐             │
│  │ [BÍBLIA]    │   │ [JARDIM]    │   │ [CHAT]      │             │
│  │             │   │             │   │             │             │
│  └─────────────┘   └─────────────┘   └─────────────┘             │
│  Bíblia em PT,     Jardim que       Conversas com                │
│  EN e ES.          floresce.        Gabriel.                     │
│  ↑ Newsreader body, paper@70, mt-4                               │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘

LAYOUT: hero showcase 60/40 split (left mockup, right copy).
Secondary row 3-col equal.

DEVICE TREATMENT: iPhone 15 Pro frame (titanium natural, sem
Dynamic Island estilizado demais), tilted -8deg na primary, straight
nas secondary. Drop shadow soft (60px blur, ~10% black). Sem floor
gradient artificial (mood "Apple keynote") — apenas shadow.

DEVICE TREATMENT: REJEITAR mockups com partículas brilhantes,
gradient holographic reflections, floating multiple devices in 3D.
```

**7.5.3 Copy:**

- Kicker: `IV — DENTRO DO APP`
- Hero headline: `Devocional, Bíblia e silêncio em um só lugar.`
- Body: `Cada tela do Gabriel foi desenhada como página de livro. Texto primeiro. Cromo zero.`
- CTA ghost: `Saiba mais sobre o app →`
- Captions row secondary:
  - `Bíblia em PT, EN e ES.`
  - `Jardim que floresce.`
  - `Conversas com Gabriel.`

**EN:** *Devotional, Bible, and silence in a single place.* / *Each screen of Gabriel was designed as a book page. Text first. Zero chrome.* / *Bible in PT, EN, ES.* · *A garden that blooms.* · *Conversations with Gabriel.*

**ES:** *Devocional, Biblia y silencio en un solo lugar.* / *Cada pantalla de Gabriel se diseñó como página de libro. Primero el texto. Cero cromo.* / *Biblia en PT, EN, ES.* · *Un jardín que florece.* · *Conversaciones con Gabriel.*

**7.5.4 Tipografia:**
- Hero headline: Fraunces 600 opsz 56, line-height 1.05, color paper (sobre celestial), max-w 22ch
- Body: Newsreader 400 opsz 18, paper@85%, max-w 48ch
- CTA ghost: Inter 600 15, paper, border 1px paper@40, padding 14×24, rounded 6px. Hover: bg paper@10.
- Captions: Newsreader 400 16, paper@70%

**7.5.5 Assets — CRÍTICO:**
- **Mockup principal:** iPhone 15 Pro frame (sourced from Figma Community kit oficial Apple ou Mockuuups Studio — frame correto, sem 3D render exagerado), tilted -8deg, showing a **devocional screen** mock-up real do app. Recomendado: gerar via Figma + export PNG @2x. Tamanho 600-720px largura. Shadow soft 60px blur 10% black/40 offset y 24px. **Sem gradient floor reflection.**
- **3 mockups secundários:** iPhones straight (no tilt), cada um mostrando uma tela diferente do app:
  1. Bíblia (lista de capítulos de Gênesis, tipografia clean)
  2. Jardim da Fé (visualização do progresso como plantas)
  3. Gabriel Chat (conversa com balões)
- **Conteúdo dos mockups:** copy real do app, não "Lorem ipsum". Pode ser placeholder textual mas com mood Gabriel (Newsreader-vibe nas screens).
- **Frame escolha:** "iPhone 15 Pro Titanium Natural" (cor titanium claro). NÃO Black Titanium (some no celestial), NÃO Blue Titanium (briga com palette).

**7.5.6 Motion:**
- Primary mockup: scroll-triggered, entra com translateY 32px → 0 + rotate -10deg → -8deg, 800ms ease-out.
- Secondary mockups: stagger 120ms entrada, fade-up 16px.
- Hover sobre mockup primary: rotate -8deg → -6deg (slight straighten), 300ms. **Não** brilhar, não scale-up.
- Sem parallax pesado no scroll. Pode ter shift de -2% paralela sutil (não scroll-jacking).

**7.5.7 Responsivo:**
- Mobile: mockup primary fica straight (no tilt — fica feio em viewport estreito), 80% width centered. Copy abaixo full-width. Secondary mockups stack vertical, 60% width each, centered.

---

### 7.6 TESTIMONIAL / CITAÇÃO

**7.6.1 Propósito:** social proof, mas **literária**, não SaaS-bro. Uma única citação grande, tratada como excerto editorial. Construir confiança via voz real. Se Gabriel é alpha (poucos usuários), pode-se substituir por uma citação de **review beta** longa e bem escrita, ou (mais arriscado) por uma citação patrística cristã breve que ressoe com a missão.

**Recomendação:** começar com 1 quote de beta tester real. Se Vitor não tiver ainda, **placeholder claramente sinalizado** + nota pendente.

**7.6.2 Wireframe ASCII:**

```
═════════════════════════════════════════════════════════════════════
TESTIMONIAL (paper bg, padding-y 160, centered narrow max-w 720)

┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│                       V — DA LEITURA                             │
│                       ─── divider ───                            │
│                                                                  │
│                                                                  │
│         «                                                        │
│                                                                  │
│         Pela primeira vez em anos um app                         │
│         me deixou ler em paz. Devocional                         │
│         que respeita o tempo. Bíblia                             │
│         em três idiomas sem fricção.                             │
│         Vale o assinatura sem pensar.                            │
│                                                                  │
│                                                          »       │
│         ↑ Fraunces 500 opsz 36, italic, ink, line-h 1.35         │
│           max-w 32ch, paragraph indent 0, brackets oversized     │
│           (Fraunces 700 opsz 96, divine, opacity 0.6)            │
│                                                                  │
│                                                                  │
│         — Mariana C., beta tester, Lisboa                        │
│         ↑ Inter 500 14, caps tracked 0.08em, ink-soft, mt-12     │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘

LAYOUT: max-w 720, centered. Brackets « » oversized (size of two
lines of copy), positioned absolute top-left and bottom-right of
the quote block.

NÃO usar: foto da pessoa, estrela rating, "verified user" badge.
```

**7.6.3 Copy (placeholder — Vitor confirma na review):**

PT: *«Pela primeira vez em anos um app me deixou ler em paz. Devocional que respeita o tempo. Bíblia em três idiomas sem fricção. Vale a assinatura sem pensar.»* — Mariana C., beta tester, Lisboa

EN: *«For the first time in years an app let me read in peace. A devotional that respects time. The Bible in three languages, no friction. Worth the subscription without thinking twice.»* — Mariana C., beta tester, Lisbon

ES: *«Por primera vez en años una app me dejó leer en paz. Un devocional que respeta el tiempo. La Biblia en tres idiomas sin fricción. Vale la suscripción sin pensarlo.»* — Mariana C., beta tester, Lisboa

**7.6.4 Tipografia:**
- Kicker: Inter 600 12 caps divine
- Quote body: Fraunces 500 opsz 36, italic, ink, line-height 1.35, max-w 32ch
- Brackets « »: Fraunces 700 opsz 96, divine, opacity 0.6, absolute positioned
- Attribution: Inter 500 14 caps letter-spacing 0.08em, ink-soft

**7.6.5 Assets:** apenas os brackets oversized SVG ou text. Sem photo, sem badge.

**7.6.6 Motion:** scroll-triggered fade-in, brackets aparecem 200ms antes do texto. Hover: nada (testimonial não é interativo).

**7.6.7 Responsivo:** brackets reduzem (Fraunces 700 opsz 56) mobile. Quote max-w livre.

---

### 7.7 PRICING / CTA

**7.7.1 Propósito:** fechar. Lia já leu até aqui — está cogitando. Hora de mostrar custo + ativar download. **Não** é página de pricing completa (já que o checkout é no app via RevenueCat). É CTA forte com transparência.

**7.7.2 Wireframe ASCII:**

```
═════════════════════════════════════════════════════════════════════
PRICING (paper-deep bg, padding-y 128, centered max-w 720)

┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│                      VI — A ASSINATURA                           │
│                      ─── divider ───                             │
│                                                                  │
│                                                                  │
│                                                                  │
│              Sete dias grátis.                                   │
│              Depois, R$ 24,90 por mês                            │
│              ou R$ 199 por ano.                                  │
│                                                                  │
│              ↑ Fraunces 600 opsz 56, ink, line-h 1.1             │
│                                                                  │
│                                                                  │
│                                                                  │
│              Verso do dia e capítulo bíblico                     │
│              do dia são grátis pra sempre.                       │
│              A assinatura abre devocional                        │
│              diário, Jardim e Chat ilimitado.                    │
│              Cancele dentro do app, a qualquer                   │
│              hora.                                               │
│                                                                  │
│              ↑ Newsreader 400 opsz 18, ink-soft, max-w 52ch      │
│                                                                  │
│                                                                  │
│       ┌──────────────────────────┐  ┌──────────────────────────┐ │
│       │  Baixar pra iPhone   →   │  │  Baixar no Android   →   │ │
│       │  ↑ App Store official    │  │  ↑ Google Play official  │ │
│       │   badge OR our custom    │  │   badge OR our custom    │ │
│       │   button (matching       │  │   button                 │ │
│       │   design system)         │  │                          │ │
│       └──────────────────────────┘  └──────────────────────────┘ │
│                                                                  │
│       Sem cartão pra começar. Trial real.                        │
│       ↑ Inter 400 13, ink-soft, mt-4, centered                   │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘

LAYOUT: centered, max-w 720. Botões side-by-side desktop, stacked
mobile. **NÃO** usar tabela "Free vs Pro" com checkmarks.
```

**7.7.3 Copy:**

PT:
- Kicker: `VI — A ASSINATURA`
- Headline:
  ```
  Sete dias grátis.
  Depois, R$ 24,90 por mês
  ou R$ 199 por ano.
  ```
- Body: *Verso do dia e capítulo bíblico do dia são grátis pra sempre. A assinatura abre devocional diário, Jardim e Chat ilimitado. Cancele dentro do app, a qualquer hora.*
- CTA primário: `Baixar pra iPhone →`
- CTA secundário: `Baixar no Android →`
- Disclaimer: `Sem cartão pra começar. Trial real.`

EN:
- Headline: *Seven days free. Then $4.99/month or $39/year.*
- Body: *The daily verse and the daily Bible chapter are free forever. The subscription unlocks daily devotional, the Garden, and unlimited Chat. Cancel inside the app, anytime.*
- Disclaimer: `No card to start. Real trial.`

ES:
- Headline: *Siete días gratis. Después, €4,99 al mes o €39 al año.*
- Disclaimer: `Sin tarjeta para empezar. Prueba real.`

> **Preço a confirmar com Vitor** — usei $4.99/€4.99/R$24.90 como faixa coerente com persona, RevenueCat data, e mercado. Validar no momento do design.

**7.7.4 Tipografia:**
- Headline: Fraunces 600 opsz 56, ink, line-height 1.1, forced line breaks
- Body: Newsreader 400 opsz 18, ink-soft, max-w 52ch
- CTAs: App Store / Google Play **oficiais** (badges Apple/Google guidelines) OU custom buttons matching design system (mais alinhado se conseguirem ficar fiéis às guidelines da loja)
- Disclaimer: Inter 400 13, ink-soft

**7.7.5 Assets:**
- App Store badge oficial (download direto Apple Marketing Tools — PNG, mas exige fidelity)
- Google Play badge oficial (Google Play Brand Guidelines)
- OU: custom CTAs com lockup `[Apple logo] Baixar pra iPhone` em Inter 600 white sobre `ink` background, rounded 8px. Cuidado: guidelines de ambas as stores exigem tratamentos específicos — preferir oficiais se possível.

**7.7.6 Motion:** CTAs hover: background shift `ink` → `ink-soft`, ou border shift se ghost. 200ms.

**7.7.7 Responsivo:** mobile → CTAs stacked, full-width.

---

### 7.8 FOOTER

**7.8.1 Propósito:** utilidade. Links legais, brand reinforcement final, idioma switch.

**7.8.2 Wireframe ASCII:**

```
═════════════════════════════════════════════════════════════════════
FOOTER (celestial bg, padding-y 64, edge-to-edge)

┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  Gabriel                                                         │
│  ↑ Fraunces 600 opsz 32, paper                                   │
│                                                                  │
│  Um devocional diário e a Bíblia inteira em três idiomas.        │
│  ↑ Newsreader 400 opsz 16, paper@70, max-w 48ch, mt-2            │
│                                                                  │
│  ─── divider paper@20 ───                                        │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐            │
│  │ APP          │  │ EMPRESA      │  │ LEGAIS       │            │
│  │              │  │              │  │              │            │
│  │ iPhone       │  │ Sobre        │  │ Privacidade  │            │
│  │ Android      │  │ Contato      │  │ Termos       │            │
│  │ Bíblia       │  │ Imprensa     │  │ Excluir conta│            │
│  │ Preço        │  │              │  │              │            │
│  └──────────────┘  └──────────────┘  └──────────────┘            │
│  ↑ Inter 600 12 caps paper@80 (header) + 400 14 paper@70 (items) │
│                                                                  │
│  ─── divider paper@20 ───                                        │
│                                                                  │
│  © 2026 VHXCO · CNPJ 62.874.893/0001-51        PT · EN · ES   ☾  │
│  ↑ Inter 400 13 paper@60                       ↑ lang switch    │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘

LAYOUT desktop: brand left, columns 3-col, copyright row bottom
edge-to-edge.

LAYOUT mobile: stack vertical, columns viram lista única.
```

**7.8.3 Copy:**
- Brand line: `Um devocional diário e a Bíblia inteira em três idiomas.`
- Columns: APP / EMPRESA / LEGAIS (PT) — APP / COMPANY / LEGAL (EN) — APP / EMPRESA / LEGAL (ES)
- Copyright: `© 2026 VHXCO · CNPJ 62.874.893/0001-51`

**7.8.4 Tipografia:** column headers Inter 600 12 caps; items Inter 400 14; copyright Inter 400 13 — todos paper@60-80.

**7.8.5 Assets:** apenas o wordmark Gabriel + lang/theme glifos pequenos.

**7.8.6 Motion:** links hover underline subtle. Sem mais.

**7.8.7 Responsivo:** stack vertical mobile.

---

## 8. Sistema de Componentes

### 8.1 Buttons

| Variant | Specs |
|---|---|
| **Primary** | bg `divine`, text `paper`, Inter 600 15px, padding 14×24, rounded 6px, hover bg `divine-deep` 200ms, focus ring 2px `divine-soft` offset 2px. Letter-spacing 0.01em. **Não** uppercase. **Não** drop shadow. |
| **Secondary (outline)** | bg transparent, text `ink`, border 1px `ink-soft`, same dimensions, hover bg `paper-shadow`. |
| **Ghost** | bg transparent, text `ink-soft`, no border, hover bg `paper-shadow` + text `ink`. |
| **Disabled** | bg `paper-shadow`, text `ink-soft@40`, no hover, cursor not-allowed. |
| **On dark (celestial/dark mode)** | text `paper`, border `paper@40` (ghost) ou bg `divine` (primary). |

**NUNCA:** gradient fill, drop shadow, pill (`rounded-full`), iconography pesado dentro do botão (apenas seta `→` ou `↓` em texto Inter).

### 8.2 Cards (Feature Cards / Showcase Cards)

- bg `paper-deep` (light) ou `paper-shadow` (dark)
- border 1px `border`
- rounded 8px (não 16, não 24 — manuscrito é menos "pillow")
- padding 32 desktop, 24 mobile
- Hover: translateY -2px, shadow `0 4px 16px rgba(27,27,24,0.05)`, border-color → `border-strong`, 200ms ease-out
- **NÃO**: gradient backgrounds, glassmorphism, neon borders

### 8.3 Forms (newsletter / contato)

Se tiver newsletter signup (recomendado: **não tem** na v1 — landing é app download only, sem coletar email web):
- Input: paper-deep bg, border `border`, padding 12×16, font Newsreader 400 16, rounded 6px, focus border `divine`
- Submit: primary button

### 8.4 Navigation

- Header desktop: já especificado em 7.1.
- Header mobile: hamburger glyph (3 linhas, 1.5px, ink, sem caixa redonda), tap abre full-screen overlay com nav items em Fraunces display-sm centered, lang + theme toggles no bottom.
- Skip to content link (acessibilidade): visualmente hidden até foco.

### 8.5 CTAs especiais — App Store / Play Store badges

**Recomendação:** usar badges oficiais (Apple Marketing Tools, Google Play Brand Guidelines) **dentro de container preservando hierarquia**. Dimensões: ~140px height máximo na seção primária, ~120px no footer.

Alternativa: lockup custom seguindo guidelines:
- `[Apple logo SVG]  Baixar pra iPhone` em Inter 600 15 white sobre bg `ink`, rounded 8px, padding 14×22
- `[Google Play logo SVG]  Baixar no Android` mesmo tratamento

Atenção: Apple e Google requerem que badges não sejam alterados (cor, proporção). Se Claude Design propor custom buttons, **garantir que respeitem essas regras**.

### 8.6 Lang switch dropdown

- Trigger: `EN ▾` (ou idioma current) em Inter 500 14
- Open: menu com 3 options PT · EN · ES, paper-deep bg, border, rounded 6px
- Selected item: divine text + checkmark `✓` à direita
- Hover: paper-shadow bg

### 8.7 Theme toggle

- Glifo único: meia-lua `☾` (light mode → switch to dark) ou sol `☀` (dark mode → switch to light)
- 18-20px tamanho, ink color, hover divine
- **Não** é toggle switch animado tipo iOS — é glifo clickable

### 8.8 Dividers

- Hairline horizontal: 1px, `border` color, opacity 0.4-0.6
- Decorado: hairline + glifo central (`❧` ou ponto + losango pequeno) em Fraunces 500 24 divine

### 8.9 Section kicker (eyebrow + divider)

Padrão repetido em todas as seções principais:
```
ROMAN NUMERAL — TITLE
─── decorated divider divine ───
```
- Roman + em-dash + title (caps): Inter 600 12 caps letter-spacing 0.12em divine
- Divider: 24-40px wide, 1px stroke divine, com glifo central opcional

---

## 9. Motion & Interaction Principles

### 9.1 Princípios gerais

- **Duração:** 200-600ms em micro-interações (hover, focus); 600-1200ms em entries scroll-triggered. Nunca >1500ms.
- **Easing custom:** evitar `ease`, `linear`, `ease-in`. Usar:
  - Entry: `cubic-bezier(0.2, 0.9, 0.3, 1.0)` (overshoot leve, "settled")
  - Hover/UI: `cubic-bezier(0.4, 0, 0.2, 1)` (Material standard)
  - Quietude: `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out, "respiração")
- **Restraint:** se houver dúvida entre "uma animação a mais" e "uma a menos" → **menos**.
- **Choreography:** stagger pequeno (60-120ms entre elementos), nunca >150ms (vira slideshow).

### 9.2 Micro-interactions APROVADAS

| Elemento | Interação |
|---|---|
| Buttons | bg color shift 200ms, focus ring fade-in 150ms |
| Cards | translateY -2px on hover 200ms + shadow appearance |
| Links | underline draw-in (right-to-left ou center-out) 150ms |
| Nav items | color shift + underline 150ms |
| Hero wordmark | letter stagger fade-up on load (one-shot) |
| Section entry | fade-up 8px → 0, scroll-triggered, 400-600ms |
| Section kickers | scroll-triggered fade-in, no movement |
| Pull quote brackets | scale 0.95 → 1 + fade on entry |
| Mockup primary | rotate -10 → -8deg + fade-up on scroll into view |
| SVG ornaments | stroke-dasharray draw-in (one-shot) 600-1200ms |
| Theme toggle | glyph swap with 200ms crossfade |
| Lang switch | dropdown fade-in 150ms |

### 9.3 Animações REJEITADAS

- Parallax pesado (>20% layer movement)
- Scroll-jacking (intercept scroll behavior)
- Cursor custom (custom shape, follower, etc.)
- Magnetic buttons (button "pulls" cursor)
- Page transitions (fade-out / fade-in entire pages on navigation)
- Animação de palavra-por-palavra reveal scroll (overused)
- Text scramble/typewriter
- Floating particles / dust / sparkles
- Lens flares
- 3D models loaded with three.js
- Infinite marquees de logos
- Lottie animations chamativas (ok pra ornament SVG sutil, não pra "look at me")
- Hover scale-up >1.05
- Bounce effects (`ease-out-back` exagerado)

### 9.4 `prefers-reduced-motion`

**Obrigatório.** Em `@media (prefers-reduced-motion: reduce)`:
- Todos os scroll-triggered animations → instant (opacity 1, transform none, no transition)
- SVG draw-in animations → svg renderiza completo, sem stroke-dasharray
- Hero load sequence → tudo aparece em 0ms
- Hover transitions reduzidas a duration 0ms
- Theme toggle não anima crossfade
- **Não** desabilitar transições funcionais (dropdown open/close) — só motion ornamental

---

## 10. Assets Específicos a Produzir

Lista numerada do que designer/curador precisa criar/curar. Cada item tem: **estilo**, **quantidade**, **onde aparece**, **fonte sugerida**, **licenciamento**.

1. **Wordmark Gabriel (vector)**
   - Estilo: Fraunces 800 opsz 144 SOFT 30 WONK 1 — letra "G" capitular pode ser inflada
   - Quantidade: 4 variantes (full color ink / dark mode paper / monochrome ink / monochrome paper)
   - Onde: header, footer, hero, OG image
   - Fonte: produzido in-house em Figma usando Fraunces (Google Fonts free)
   - Licenciamento: Fraunces SIL Open Font License 1.1 (compatível comercial)

2. **Drop cap "G" com ornament frame (SVG opcional)**
   - Estilo: letra "G" Fraunces 900 opsz 144 com moldura geométrica delicada ao redor, linhas finas 1px-1.5px em `divine` color, inspiração manuscrito iluminado MET filtrado pelo NYT design team — **abstrato contemporâneo, não literal medieval**
   - Quantidade: 1 SVG
   - Onde: Hero (desktop only)
   - Fonte: custom design in Figma; exportar como SVG otimizado
   - Licenciamento: custom (owned)

3. **CornerFleuron ornament**
   - Estilo: ornamento de canto pequeno (~32×32px), linha única 1.5px, divine color, geometria abstrata (trifólio, espiral, nó-vesica) — **não fleur-de-lis literal**
   - Quantidade: 1 base + 4 rotations (top-left, top-right, bottom-left, bottom-right)
   - Onde: marginalia hero, decoração de cantos de cards de testimonial
   - Fonte: custom design in Figma
   - Licenciamento: custom

4. **FloralDivider (decorated horizontal divider)**
   - Estilo: linha horizontal 1px com glifo ornamental central (ponto + losango, ou trifólio abstrato), width 280px, divine color, opacity 0.4-0.6
   - Quantidade: 2 variantes (decorated / plain hairline)
   - Onde: section kickers, pricing, testimonial
   - Fonte: custom
   - Licenciamento: custom

5. **5 Feature glyphs (SVG ou tipográficos)**
   - Estilo: pequenos ornamentos tipográficos manuscritos (hedera, florón rotacionado, four-point star, etc.), todos visualmente da mesma família, line art, sem fill, divine color
   - Quantidade: 5 (um por feature card)
   - Onde: Features section
   - Fonte: começar com glifos Unicode (`❧ ❦ ☙ ✦ ✜`); se não der personalidade suficiente, custom SVGs
   - Licenciamento: Unicode (free) ou custom

6. **iPhone 15 Pro mockup frame**
   - Estilo: device frame oficial Apple (titanium natural ou branco), realista, sem 3D render exagerado
   - Quantidade: 1 frame com 4 variações de screen content (devocional / Bíblia / Jardim / Chat)
   - Onde: Showcase section
   - Fonte: **Apple Design Resources** (apple.com/design/resources/) — frames oficiais GRÁTIS; OR Mockuuups Studio / Rotato / Previewed
   - Licenciamento: Apple Design Resources permite uso pra mostrar app em sites/marketing

7. **Screen mockup content (UI screens do app real)**
   - Estilo: telas reais do app Gabriel exportadas como PNG @2x ou SVG (preferir SVG se possível)
   - Quantidade: 4 telas (devocional / Bíblia / Jardim / Chat)
   - Onde: dentro dos iPhone frames na Showcase
   - Fonte: produzido pela equipe do app Gabriel — Vitor deve fornecer ou o brief deve assumir que serão geradas
   - Licenciamento: in-house (owned)
   - **DECISÃO PENDENTE:** se ainda não houver mockups das telas finais, gerar placeholders com mood Gabriel (tipografia Newsreader em fundo `paper`, sem cromo, mostrando "Devocional · Quinta-feira · A pedra angular" headline e um parágrafo Lorem). Sinalizar no design final.

8. **App Store badge oficial**
   - Estilo: oficial Apple (English ou localized — PT/EN/ES)
   - Quantidade: 3 (uma por idioma)
   - Fonte: Apple Marketing Tools — https://tools.applemediaservices.com/app-store/
   - Licenciamento: Apple guidelines (must follow exactly)

9. **Google Play badge oficial**
   - Estilo: oficial Google
   - Quantidade: 3 (uma por idioma)
   - Fonte: Google Play Brand Guidelines — https://play.google.com/intl/en_us/badges/
   - Licenciamento: Google guidelines (must follow exactly)

10. **OG image (1200×630px)**
    - Estilo: paper bg, wordmark "Gabriel" centered grande, tagline em uma linha (`Um devocional diário em três idiomas.`), CornerFleuron decoração discreta
    - Quantidade: 3 (PT / EN / ES) + 1 fallback EN
    - Fonte: produzido in-house Figma
    - Licenciamento: custom

11. **Favicon**
    - Estilo: "G" capitular Fraunces em paper bg redondo, ou monogram simples
    - Quantidade: full favicon set (16, 32, 48, 192, 512 + apple-touch-icon 180×180)
    - Fonte: custom Figma → exportar PNG/SVG/ICO

12. **Photography (opcional, restrito)**
    - Estilo: **se** alguma seção precisar de foto (não recomendado, mas se sim) — natureza calma (uma pedra, uma página de livro velho, uma vela em ambiente íntimo, luz crepuscular indireta). **Nunca** pessoas, **nunca** cenas religiosas literais. Mood Aesop apothecary still life.
    - Quantidade: 0-3 (preferir zero)
    - Fonte: Unsplash curated (Annie Spratt, Aaron Burden) ou commissioned shoot
    - Licenciamento: Unsplash License (commercial use)

13. **Illustration (NÃO recomendado pra v1)**
    - Justificativa: ilustração arrisca cair em estilo (mascote / cartoon flat / hand-drawn). Tipografia + ornament SVG carrega a identidade. Adicionar illustration depois quando brand consolidar.

14. **Patterns/textures**
    - Estilo: textura de papel sutil (vellum, paper grain) como overlay opcional em backgrounds de seção. Nunca dominante. Opacity 5-10%.
    - Quantidade: 1 PNG/SVG noise/grain pattern
    - Fonte: Subtle Patterns ou custom Photoshop noise
    - Licenciamento: respeitar source

---

## 11. Tom da Copy Editorial

### 11.1 Voice and tone

**Voice (sempre):** sóbrio, íntimo, literário, bilíngue-nativo, com restraint.
**Tone (varia):** principalmente **calmo e confidente**; nas CTAs, **direto sem urgência fabricada**; nas seções místicas (testimonial, hero), **um pouco mais literário**.

5 adjetivos pra carregar:
1. Sóbrio (não solene — sóbrio)
2. Íntimo (sem ser invasivo)
3. Literário (legível, não pretensioso)
4. Bilíngue (escreve em três línguas como se cada uma fosse a primeira)
5. Honesto (claro sobre preço, gratuidade, cancelamento — sem dark patterns)

### 11.2 Antes / depois — exemplos

| ❌ Copy ruim (genérico SaaS / cristão clichê) | ✅ Copy Gabriel |
|---|---|
| `Transforme sua vida espiritual hoje!` | `Um devocional diário escrito pra você.` |
| `Conecte-se com Deus como nunca antes.` | `Cada manhã, uma página nova.` |
| `O melhor app cristão de 2026!` | `Devocional, Bíblia e silêncio em um só lugar.` |
| `Junte-se a milhões de fiéis ao redor do mundo!` | `Pela primeira vez em anos um app me deixou ler em paz.` |
| `Recursos incríveis: Devocionais, Bíblia, Chat IA, mais!` | `Cinco práticas diárias, costuradas em um único caderno.` |
| `Grátis por 7 dias! Não perca!` | `Sete dias grátis. Sem cartão pra começar.` |
| `Baixe agora e comece sua jornada de fé!` | `Baixar pra iPhone →` |
| `🙏 Versículos diários inspiradores 🙏` | `Verso do dia, com uma frase de contexto.` |

### 11.3 Headlines vs body vs CTA tone

- **Headlines (Fraunces):** declarativas, curtas, com cadência. Quebras de linha como pontuação. Sem ponto final em frases curtas (estilo editorial).
- **Body (Newsreader):** prosa fluida, frase média 12-18 palavras, parágrafos curtos 2-4 frases. Pode ter ponto e vírgula. Sem jargão.
- **CTAs (Inter):** imperativo direto, máximo 5 palavras, com seta `→` ou `↓`. Sem exclamação.

### 11.4 Tratamento de citações bíblicas

- **Hero pull quote:** Mt 21:42 ("A pedra que os construtores rejeitaram tornou-se a pedra angular") — funciona porque é citação **sobre rejeição/transformação**, ressoa com persona da Lia (que rejeitou apps cristãos pré-existentes) **sem moralismo**.
- **Outras seções:** evitar citações bíblicas decorativas. Se houver, sempre:
  - Em Newsreader italic
  - Com aspas angulares `« »` ou em block quote
  - Sem caps em referência (use `Mt 21:42`, não `MATEUS 21:42`)
  - Tradução: PT-BR ARA/NVI, EN ESV/NIV, ES RVR/NVI
  - **Nunca** versículos "instagramáveis" em caps + serif chamativa
- **Não** usar versículos como CTA, headlines vazias, ou prooftexts.

### 11.5 Idioma

**PT-BR primário** (Vitor + Lia + persona principal). Tradução EN e ES no nível de **co-original**, não literal:
- Cada idioma tem sua cadência. PT pode ser ligeiramente mais filosófico ("Não há corrida. Há o passo de hoje."); EN mais direto; ES com mais musicalidade.
- Nunca tradução automática óbvia. Se Claude Design propor copy, devo revisar pelo princípio "soa nativo no idioma?".

### 11.6 Numerais e datas

- Roman numerals em section kickers (I, II, III, IV, V, VI)
- Preços com formato local: PT `R$ 24,90` / EN `$4.99` / ES `€4,99`
- Datas no devocional sample: PT `Quinta-feira, 14 de maio`

---

## 12. Princípios Anti-Genérico (10 rules)

Se algum desses aparecer no design entregue, **refazer**. Sem negociação.

1. **Se parece com Hallow** → refazer. Hallow é a referência negativa próxima — não copiar mood (sépia + pessoas olhando pra cima + cinematic dark).
2. **Se parece com template SaaS B2B** (3 cards azuis equal grid, hero com gradient mesh roxo, "Trusted by 10,000+ companies" logo wall) → refazer.
3. **Se tem qualquer um dos 20 anti-clichês da seção 2.3** (cruz, pomba, mãos, etc.) → refazer.
4. **Se a hero não funciona em PT primário** (foi pensada em EN e traduzida) → refazer.
5. **Se mockup do iPhone tem partículas brilhantes ou floor reflection 3D** → refazer.
6. **Se tipografia não respeita opsz axis** (Fraunces opsz 24 em 96px display) → refazer.
7. **Se paleta tem hex de azul royal, dourado metálico brilhante, ou roxo SaaS** → refazer.
8. **Se motion inclui scroll-jacking, parallax pesado, ou cursor custom** → refazer.
9. **Se copy tem `!` mais de 1 vez no site inteiro** → refazer copy (CTA direto sem exclamation).
10. **Se Lia (persona) ao olhar pensar "parece um pouco igreja"** → refazer. Esse é o teste final.

Anti-pattern de "look-alike" a evitar em ordem decrescente de proximidade:
- Hallow (muito próximo do espaço, fácil de cair na mesma estética)
- Glorify (pastel feminino, fácil de virar pinterest motivacional)
- Calm/Headspace (wellness genérico)
- YouVersion (datado funcional)
- Igreja-com-app-anos-90 (Lifeway, Christianity Today)
- SaaS template (Linear-clone superficial sem identidade)

---

## 13. Decision Tree pro Claude Design

Em ordem decrescente de prioridade quando houver trade-off:

### 13.1 Hierarquia de prioridades

1. **Estética / identidade editorial** > Conversão > A11y > Lighthouse perf > Funcionalidade extra
2. Mas A11y **WCAG AA é piso inegociável** (mesmo que prioridade 3 numericamente)
3. Conversão é importante: CTAs precisam ser óbvios, paywall info precisa estar clara. Mas não a ponto de virar pop-up agressivo.

### 13.2 Trade-offs específicos

| Trade-off | Decisão padrão |
|---|---|
| Performance vs visual (carregamento de Fraunces 800 opsz 144 vai pesar) | **Visual** ganha. Subset Fraunces variable de wght 400-800 + opsz 9-144. Preload only display weights. Self-host fonts (não Google Fonts CDN). |
| Texto vs imagem | **Texto.** Gabriel é literário. Se em dúvida entre headline grande e imagem grande → headline. |
| Animação vs static | **Static.** Se a animação não adiciona significado, deletar. |
| 1 plano de pricing vs 2 (mês/ano) | **Mostrar ambos** (mês + ano com desconto). Não mostrar comparison table — copy fluida basta. |
| Dark mode toggle visível vs system-preference only | **Visible toggle no header.** Lia espera controle. |
| Light mode ou dark mode default | **Light mode default**, mas respeitar `prefers-color-scheme: dark` no first visit. |
| Versão EN ou PT como default da landing | **Detectar via `navigator.language`**. PT-BR/PT-PT → PT, ES-* → ES, default fallback EN. Toggle no header sempre. |
| Coletar email pra newsletter | **NÃO coletar.** v1 é app download direto. Sem signup web. |
| Mostrar logos de imprensa ("featured in") | **Só se reais.** Se Gabriel não foi featured em nada, omitir. Sem "as seen on" placeholder. |
| Mostrar número de usuários ("10k+ users") | **Omitir até ser >50k.** Honestidade > inflation. |
| Mostrar foto da equipe ou founder Vitor | **Omitir.** Landing é sobre o produto, não founder-led brand. |
| Adicionar FAQ section | **Omitir na v1.** Pode adicionar v2 se houver dúvidas recorrentes. |
| Adicionar blog/devotional samples na landing | **Omitir na v1.** Showcase via mockups basta. |

### 13.3 Em dúvida entre A e B

| Dúvida | Decisão |
|---|---|
| Margem maior ou menor entre seções | **Maior.** |
| Headline maior ou menor | **Maior** (até `display-xl` 96px desktop). |
| Mais elementos na seção ou menos | **Menos.** |
| Cor accent mais saturada ou menos | **Menos saturada** (warmth marfim > brilho). |
| Animação mais sutil ou mais expressiva | **Mais sutil.** |
| Border radius mais arredondado ou menos | **Menos** (6-8px max, nunca 16+). |
| Ornamento mais detalhado ou abstrato | **Mais abstrato.** |
| Pergaminho texture overlay sim ou não | **Apenas sutilíssimo (5-10% opacity)** ou omitir. |

---

## 14. Output Esperado do Claude Design

### 14.1 Granularidade ideal

- **2-3 protótipos completos** (hero + pricing high-fidelity, resto medium-fidelity), **com tema light e dark de cada**.
- **Sistema de design pequeno** (1 página) mostrando: tokens de cor, escala tipográfica aplicada em sample, componentes (buttons, cards, kicker), motion notes.
- **Variantes:** 2 versões do Hero (uma com DropCapFrame ornament desktop, outra mais minimal sem ornament), pra Vitor escolher direção.

### 14.2 Formato preferido

Em ordem de preferência:
1. **Figma frames navegáveis** (com layers organizadas, fonts vinculadas, motion notes em comentários)
2. **HTML+CSS estático** (Tailwind-based, single page, demonstrável no browser)
3. **Imagens PNG de alta resolução** + breakdown em texto

Não precisa ser produzido em React/Next/Astro — implementação técnica é responsabilidade separada. Foco: visual fidelity.

### 14.3 Quantidade de variações por seção

- **Hero:** 2 variações (com ornament / sem ornament)
- **Pitch:** 1 variação (paper bg) + 1 alt (celestial bg) pra decidir tom
- **Features:** 1 variação base
- **Showcase:** 1 variação principal (precisa mockup quality alto)
- **Testimonial:** 1 variação
- **Pricing:** 1 variação
- **Footer:** 1 variação

### 14.4 Entregáveis específicos a pedir

1. Hero high-fidelity desktop + mobile, light + dark = **4 frames**
2. Pitch + Features + Showcase + Testimonial + Pricing + Footer = **6 frames** desktop (mobile pode ser sketches/wireframes lower-fidelity)
3. Sistema de design **summary page** = **1 frame**
4. Asset library de SVGs ornamentais = **1 frame com 5-7 SVGs prontos pra export**

Total: **~12 frames Figma** ou equivalente.

### 14.5 O que **não** entregar

- Não entregar 50 variações ABCDEF de cor pra Vitor escolher; entregar 1 paleta forte com 1 alternativa máxima.
- Não entregar Hero em 8 estilos diferentes; entregar 2.
- Não entregar copy em 6 idiomas; entregar PT+EN+ES.
- Não entregar implementação completa — só visual + design system tokens.
- Não entregar logo redesign (já há wordmark Fraunces).

---

## Decisões pendentes do founder (Vitor)

Aspectos do produto Gabriel que estão sub-definidos no momento do brief e que Claude Design pode trabalhar com hipótese **mas** Vitor deve validar antes de aceitar o output final:

1. **Preço exato e moeda.** Brief assume `R$ 24,90/mês` ou `R$ 199/ano` (PT), `$4.99/mês` ou `$39/ano` (EN), `€4,99/mês` ou `€39/ano` (ES). RevenueCat configura por região, mas a copy da landing precisa um número fixo na landing PT/EN/ES. **Vitor confirma valores antes de design final.**
2. **Duração do trial.** Brief assume **7 dias** (estimado entre faixa 3-7 que Vitor mencionou). RevenueCat data mostra que trials 17-32 dias convertem ~70% melhor que <4 dias — vale discutir se 7 está certo ou se faz sentido **14 dias**.
3. **Telas reais do app pros mockups.** O app está em alpha aberto chegando; mockups finais podem ainda não existir. Decisão: usar placeholders fiéis ao mood + Newsreader-vibe nas telas, ou esperar mockups reais. **Recomendação:** começar com placeholders fiéis pra design avançar, refresh quando mockups reais ficarem prontos.
4. **Testimonial real ou placeholder.** Brief usa "Mariana C., Lisboa" como placeholder. Vitor: ou substituir por quote real de beta tester PT/EN/ES (preferível), ou aceitar placeholder até alpha aberto coletar testimonials reais.
5. **Newsletter signup web.** Brief recomenda **não coletar** email web na v1 (CTA é direto pra App Store/Play Store). Vitor confirma se concorda — alternativa seria coletar email pra "waitlist alpha" se o app ainda não estiver public nas stores.
6. **Logo final do Gabriel.** Brief usa wordmark Fraunces 800 como solução de logotipia. Se Vitor planeja logo separado (símbolo + wordmark), informar antes.
7. **Dark mode como padrão.** Brief sugere light mode default + respeitar `prefers-color-scheme`. Alternativa: dark mode default (mais "premium 2026"). Vitor decide.
8. **Nome dos planos.** Brief não dá nome aos planos (só "free / subscription"). Se Vitor quer nomes (ex: "Gabriel Mensal", "Gabriel Anual", "Gabriel Communitas pra família") deixar saber.

---

## Anexo A — Glossário de termos do brief

- **Diminuendo:** hierarquia tipográfica decrescente, "do grande ao pequeno" como cadência musical (manuscrito iluminado clássico).
- **Drop cap:** letra capitular inflada no início de parágrafo, tradição editorial.
- **Marginalia:** notas, ornamentos ou citações dispostos na margem da página principal.
- **Pull quote:** citação destacada visualmente (geralmente em tamanho maior, font diferente) puxada do corpo do texto.
- **Hesicasta:** relativo à hesychia, tradição monástica oriental de quietude e oração silenciosa. Usado aqui como adjetivo de mood.
- **opsz / WONK / SOFT:** variable font axes do Fraunces — controle preciso de optical size, "wonky letters" (substituição decorativa), e softness.
- **paper / ink / divine / celestial:** tokens semânticos da paleta Gabriel.
- **Compline:** última hora canônica do dia, antes de dormir. Usado pra nomear paleta dark mode.

---

**Fim do brief.**

Esse documento, lido inteiro por Claude Design, deve ser suficiente pra gerar 2-3 protótipos de hero + sistema de design completo + variações de seções, sem voltar a perguntar nada exceto os 8 pontos listados em "Decisões pendentes do founder".
