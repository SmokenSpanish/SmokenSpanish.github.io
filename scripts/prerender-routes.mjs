/**
 * Writes a static HTML entry for every client-side route, so direct links
 * (e.g. /play/scoopy, /resume) return 200 on GitHub Pages instead of 404.
 * Each copy gets its own <title>, description, and Open Graph tags for link previews.
 * Also writes 404.html as an SPA fallback for any other path.
 *
 *   node scripts/prerender-routes.mjs <outDir>   (runs after vite build)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import ts from 'typescript';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.resolve(root, process.argv[2] || 'dist');
const siteUrl = 'https://smokenspanish.github.io';

async function loadPlayables() {
  const source = fs.readFileSync(path.join(root, 'src/data/playables.ts'), 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
  });
  const tmp = path.join(outDir, '.playables.tmp.mjs');
  fs.writeFileSync(tmp, outputText);
  try {
    return (await import(pathToFileURL(tmp).href)).playables;
  } finally {
    fs.rmSync(tmp, { force: true });
  }
}

const escapeAttr = (text) => text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function withMeta(html, { title, description, url }) {
  const t = escapeAttr(title);
  const d = escapeAttr(description);
  const set = (pattern, replacement) => {
    if (!pattern.test(html)) throw new Error(`index.html is missing ${pattern}`);
    html = html.replace(pattern, replacement);
  };
  set(/<title>[^<]*<\/title>/, `<title>${t}</title>`);
  set(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${d}$2`);
  set(/(<meta\s+property="og:title"\s+content=")[^"]*(")/, `$1${t}$2`);
  set(/(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${d}$2`);
  set(/(<meta\s+name="twitter:title"\s+content=")[^"]*(")/, `$1${t}$2`);
  set(/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, `$1${d}$2`);
  set(/(<meta\s+property="og:url"\s+content=")[^"]*(")/, `$1${url}$2`);
  return html;
}

function write(route, html) {
  const file = path.join(outDir, route, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  console.log(`  /${route}`);
}

const indexFile = path.join(outDir, 'index.html');
if (!fs.existsSync(indexFile)) throw new Error(`No index.html in ${outDir}`);
const template = fs.readFileSync(indexFile, 'utf8');

const playables = await loadPlayables();
console.log('Prerendered routes:');

write(
  'resume',
  withMeta(template, {
    title: 'Resume — Maksim Basov',
    description: 'Playable Ads Developer: ~60 HTML5 playables in Cocos Creator and PixiJS, 4 years of React / Vue frontend.',
    url: `${siteUrl}/resume`,
  }),
);

for (const item of playables) {
  write(
    `play/${item.slug}`,
    withMeta(template, {
      title: `${item.title} — Maksim Basov`,
      description: `${item.summary} Play it in the browser.`,
      url: `${siteUrl}/play/${item.slug}`,
    }),
  );
}

fs.writeFileSync(path.join(outDir, '404.html'), template);
console.log('  404.html (SPA fallback)');
