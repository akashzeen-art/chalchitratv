import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const logoPath = path.join(root, "public/logo/chalcitratv.png");
const outDir = path.join(root, "public");
const BG = { r: 10, g: 10, b: 15, alpha: 1 };

const logoMeta = await sharp(logoPath).metadata();
const iconSize = logoMeta.height ?? 373;

const iconMark = await sharp(logoPath)
  .extract({ left: 0, top: 0, width: iconSize, height: iconSize })
  .png()
  .toBuffer();

async function makeIconFavicon(size, filename) {
  const padding = Math.round(size * 0.06);
  const inner = size - padding * 2;

  const resized = await sharp(iconMark)
    .resize(inner, inner, { fit: "contain", background: BG })
    .png()
    .toBuffer();

  await sharp({
    create: { width: size, height: size, channels: 4, background: BG },
  })
    .composite([{ input: resized, left: padding, top: padding }])
    .png()
    .toFile(path.join(outDir, filename));
}

async function makeFullLogoFavicon(size, filename) {
  const padding = Math.round(size * 0.08);
  const maxW = size - padding * 2;
  const maxH = size - padding * 2;

  const resized = await sharp(logoPath)
    .resize({ width: maxW, height: maxH, fit: "inside" })
    .toBuffer();

  const { width = maxW, height = maxH } = await sharp(resized).metadata();
  const left = Math.round((size - width) / 2);
  const top = Math.round((size - height) / 2);

  await sharp({
    create: { width: size, height: size, channels: 4, background: BG },
  })
    .composite([{ input: resized, left, top }])
    .png()
    .toFile(path.join(outDir, filename));
}

await makeIconFavicon(16, "favicon-16x16.png");
await makeIconFavicon(32, "favicon-32x32.png");
await makeFullLogoFavicon(180, "apple-touch-icon.png");
await makeFullLogoFavicon(192, "favicon-192x192.png");

await sharp(path.join(outDir, "favicon-32x32.png")).toFile(path.join(outDir, "favicon.ico"));

console.log("Favicons generated from public/logo/chalcitratv.png");
