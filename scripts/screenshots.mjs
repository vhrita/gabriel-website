/**
 * scripts/screenshots.mjs — Playwright local screenshot validator
 *
 * Generates fullPage screenshots at 4 viewports x 5 pages = 20 PNGs.
 * Runs against `npm run preview` (Astro preview server on port 4321).
 *
 * Prerequisites:
 *   npm install -D playwright
 *   npx playwright install chromium
 *   npm run build && npm run preview  (in a separate terminal)
 *
 * Usage:
 *   node scripts/screenshots.mjs
 *
 * Output: docs/screenshots/v2/{page}-{viewport}-{w}x{h}.png (20 files)
 */

import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const OUT = resolve(__dirname, "../docs/screenshots/v2");
const BASE = process.env.PREVIEW_URL ?? "http://localhost:4321";

const VIEWPORTS = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "laptop", width: 1280, height: 800 },
  { name: "desktop", width: 1920, height: 1080 },
];

const PAGES = [
  { name: "home", url: "/" },
  { name: "privacy", url: "/privacy" },
  { name: "terms", url: "/terms" },
  { name: "delete-account", url: "/delete-account" },
  { name: "404", url: "/404" },
];

mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();

for (const vp of VIEWPORTS) {
  const ctx = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
  });
  const page = await ctx.newPage();

  for (const p of PAGES) {
    await page.goto(`${BASE}${p.url}`, { waitUntil: "networkidle" });
    // Wait for fonts + fade-in animations to settle
    await page.waitForTimeout(800);

    const outPath = `${OUT}/${p.name}-${vp.name}-${vp.width}x${vp.height}.png`;
    await page.screenshot({ path: outPath, fullPage: true });
    console.log(`✓ ${p.name} @ ${vp.name} (${vp.width}x${vp.height})`);
  }

  await ctx.close();
}

await browser.close();
console.log(`\nDone. 20 screenshots saved to docs/screenshots/v2/`);
