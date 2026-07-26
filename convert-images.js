/**
 * convert-images.js — Ávila Parfums
 * Convierte todas las imágenes JPG/PNG a WebP usando sharp.
 *
 * Uso:
 *   npm install sharp
 *   node convert-images.js
 *
 * Las imágenes originales se mantienen como fallback.
 * Las WebP se guardan junto a los originales con extensión .webp
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const DIRS = [".", "./img/perfumes", "./img/promos"];
const EXTS = [".jpg", ".jpeg", ".png"];

async function convertDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!EXTS.includes(ext)) continue;
    const src = path.join(dir, file);
    const dest = path.join(dir, path.basename(file, ext) + ".webp");
    if (fs.existsSync(dest)) {
      console.log(`✓ Ya existe: ${dest}`);
      continue;
    }
    try {
      await sharp(src).webp({ quality: 82 }).toFile(dest);
      const srcSize = (fs.statSync(src).size / 1024).toFixed(0);
      const destSize = (fs.statSync(dest).size / 1024).toFixed(0);
      console.log(`✓ ${file} → ${path.basename(dest)} (${srcSize}KB → ${destSize}KB)`);
    } catch (e) {
      console.error(`✗ Error convirtiendo ${file}:`, e.message);
    }
  }
}

(async () => {
  console.log("🔄 Convirtiendo imágenes a WebP...\n");
  for (const dir of DIRS) await convertDir(dir);
  console.log("\n✅ Conversión completada.");
})();
