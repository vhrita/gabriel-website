/**
 * scripts/generate-placeholders.mjs
 *
 * Gera 5 placeholder PNGs para o PhoneFrame v3.
 * Path de output: public/screens/v3/{slug}.png
 *
 * Cada PNG: 1170×2532 (iPhone 14 native), gradient navy 1A2B5F→0E1D33,
 * label centralizada em Newsreader italic dourado + ícone discreto.
 *
 * Vitor substitui esses PNGs por prints reais (mesmo path + nome) depois
 * que a LP estiver merged. Substituição 1:1, zero mudança de código.
 *
 * Uso: node scripts/generate-placeholders.mjs
 */

import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const OUT = resolve(__dirname, '../public/screens/v3');
mkdirSync(OUT, { recursive: true });

const W = 1170;
const H = 2532;

const SCREENS = [
  { slug: 'devocional', label: 'Devocional do dia',     emoji: '✦' },
  { slug: 'bible',      label: 'Bíblia · Jardim da Fé', emoji: '✿' },
  { slug: 'chat',       label: 'Conversa com Gabriel',   emoji: '✶' },
  { slug: 'streak',     label: 'Sua constância',         emoji: '♢' },
  { slug: 'verse',      label: 'Versículo de hoje',      emoji: '✺' },
];

for (const s of SCREENS) {
  // SVG carrega: gradient bg + texto centralizado.
  // Newsreader não está disponível no sharp/svg server-side sem font embed —
  // fallback é "Georgia, serif" (mais próximo do Newsreader que system-ui).
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1A2B5F"/>
      <stop offset="100%" stop-color="#0E1D33"/>
    </linearGradient>
    <linearGradient id="goldGlow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#D4AF37" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#D4AF37" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <!-- Subtle gold radial at top — like a halo -->
  <ellipse cx="${W/2}" cy="${H*0.35}" rx="${W*0.7}" ry="${H*0.3}" fill="url(#goldGlow)"/>
  <!-- Status bar simulado (top thin) -->
  <text x="${W/2}" y="${H*0.08}" fill="rgba(250,247,240,0.45)" font-family="Inter, sans-serif" font-size="42" font-weight="500" letter-spacing="6" text-anchor="middle">PLACEHOLDER</text>
  <!-- Emoji decorative -->
  <text x="${W/2}" y="${H*0.45}" fill="#D4AF37" font-family="Georgia, serif" font-size="180" text-anchor="middle">${s.emoji}</text>
  <!-- Main label -->
  <text x="${W/2}" y="${H*0.55}" fill="rgba(250,247,240,0.92)" font-family="Georgia, serif" font-style="italic" font-size="82" text-anchor="middle">${s.label}</text>
  <!-- Sub label -->
  <text x="${W/2}" y="${H*0.60}" fill="rgba(250,247,240,0.55)" font-family="Inter, sans-serif" font-size="36" font-weight="400" letter-spacing="2" text-anchor="middle">Print real em breve</text>
  <!-- Home indicator simulado -->
  <rect x="${W*0.35}" y="${H*0.97}" width="${W*0.30}" height="8" fill="rgba(250,247,240,0.30)" rx="4"/>
</svg>`;

  const outPath = resolve(OUT, `${s.slug}.png`);
  await sharp(Buffer.from(svg))
    .png({ quality: 85, compressionLevel: 9 })
    .toFile(outPath);
  console.log(`wrote ${outPath}`);
}

console.log('Done. 5 placeholders generated in public/screens/v3/');
