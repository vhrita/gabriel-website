/**
 * scripts/optimize-screenshots.mjs
 *
 * Optimizes 8 Play Store marketing PNGs to WebP at two resolutions:
 *   - {N}-1080.webp  — 1080px wide, q=82 (mobile/tablet)
 *   - {N}-1620.webp  — 1620px wide, q=82 (desktop/retina)
 *
 * Also generates og-image.png (1200x630 center crop from PNG 1).
 *
 * Source: gabriel/docs/screenshots/open-alpha/{1..8}.png (2160×3140 each)
 * Output: public/screens/v2/{N}-{1080,1620}.webp
 *
 * Usage: node scripts/optimize-screenshots.mjs
 */

import sharp from "sharp";
import { mkdirSync, statSync } from "node:fs";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const REPO_ROOT = resolve(__dirname, "..");
const SRC_DIR =
  "/Users/vitor/Documents/VHXCO Products/gabriel/docs/screenshots/open-alpha";
const OUT_DIR = join(REPO_ROOT, "public/screens/v2");

mkdirSync(OUT_DIR, { recursive: true });

const QUALITY = 82;
const SIZES = [1080, 1620];

let totalBytes = 0;

for (let i = 1; i <= 8; i++) {
  const srcPath = join(SRC_DIR, `${i}.png`);

  for (const width of SIZES) {
    const outPath = join(OUT_DIR, `${i}-${width}.webp`);
    await sharp(srcPath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outPath);

    const size = statSync(outPath).size;
    totalBytes += size;
    console.log(`✓ ${i}-${width}.webp  ${(size / 1024).toFixed(0)}KB`);
  }
}

// Generate og-image.png: 1200×630 center crop from PNG 1
const ogPath = join(REPO_ROOT, "public/og-image.png");
await sharp(join(SRC_DIR, "1.png"))
  .resize({
    width: 1200,
    height: 630,
    fit: "cover",
    position: "centre",
  })
  .png({ quality: 85, compressionLevel: 8 })
  .toFile(ogPath);

const ogSize = statSync(ogPath).size;
console.log(`✓ og-image.png  ${(ogSize / 1024).toFixed(0)}KB`);

const totalMB = (totalBytes / (1024 * 1024)).toFixed(2);
console.log(`\nTotal WebP: ${totalMB}MB (target: < 4MB)`);

if (totalBytes > 4 * 1024 * 1024) {
  console.warn("WARNING: total exceeds 4MB target!");
} else {
  console.log("OK: within 4MB target.");
}
