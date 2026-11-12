/**
 * Builds PDF versions of the CV from the markdown sources in resume/.
 *
 *   npm run cv:pdf
 *
 * EN → public/Maksim-Basov-CV.pdf (linked from the Resume page)
 * RU → resume/ru/Maksim-Basov-CV.pdf
 *
 * Uses a locally installed Chrome or Edge in headless mode; no extra dependencies.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const targets = [
  { lang: 'en', src: 'resume/en/Maksim-Basov-CV.md', out: 'public/Maksim-Basov-CV.pdf' },
  { lang: 'ru', src: 'resume/ru/Maksim-Basov-CV.md', out: 'resume/ru/Maksim-Basov-CV.pdf' },
];

const browsers = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);

const escapeHtml = (text) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function inline(text) {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(https?:\/\/[^\s<]+)/g, (url) => `<a href="${url}">${url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</a>`)
    .replace(/([\w.+-]+@[\w-]+\.[\w.]+)/g, '<a href="mailto:$1">$1</a>');
}

/** Minimal markdown → HTML for the subset the CV uses: headings, paragraphs, hard breaks, two-level lists. */
function toHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let paragraph = [];
  let listDepth = 0;
  let inHeader = false;

  const flushParagraph = () => {
    if (paragraph.length) out.push(`<p>${paragraph.join('<br>')}</p>`);
    paragraph = [];
  };
  const setDepth = (depth) => {
    while (listDepth < depth) {
      out.push('<ul>');
      listDepth += 1;
    }
    while (listDepth > depth) {
      out.push('</ul>');
      listDepth -= 1;
    }
  };

  for (const line of lines) {
    const item = line.match(/^(\s*)- (.*)$/);
    if (item) {
      flushParagraph();
      setDepth(item[1].length >= 2 ? 2 : 1);
      out.push(`<li>${inline(item[2])}</li>`);
      continue;
    }
    setDepth(0);
    if (line.startsWith('# ')) {
      out.push(`<header><h1>${inline(line.slice(2))}</h1>`);
      inHeader = true;
    } else if (line.startsWith('## ')) {
      flushParagraph();
      if (inHeader) out.push('</header>');
      inHeader = false;
      out.push(`<h2>${inline(line.slice(3))}</h2>`);
    } else if (line.startsWith('### ')) {
      flushParagraph();
      out.push(`<h3>${inline(line.slice(4))}</h3>`);
    } else if (line.trim() === '') {
      flushParagraph();
    } else {
      paragraph.push(inline(line.trimEnd()));
    }
  }
  flushParagraph();
  setDepth(0);
  return out.join('\n');
}

const css = `
  @page { size: A4; margin: 14mm 16mm; }
  * { box-sizing: border-box; }
  body { font: 10pt/1.42 "Segoe UI", "Helvetica Neue", Arial, sans-serif; color: #1a1a1a; margin: 0; }
  a { color: #1a1a1a; text-decoration: none; border-bottom: 0.5pt solid #9a9a9a; }
  header h1 { font-size: 22pt; line-height: 1.1; margin: 0 0 4pt; letter-spacing: -0.01em; }
  header p { margin: 0; color: #444; }
  h2 { font-size: 8.5pt; letter-spacing: 0.14em; text-transform: uppercase; color: #555;
       border-top: 0.75pt solid #cfcfcf; padding-top: 8pt; margin: 12pt 0 6pt; break-after: avoid; }
  h3 { font-size: 11pt; margin: 9pt 0 1pt; break-after: avoid; }
  h3 + p { color: #555; margin: 0 0 3pt; font-size: 9.5pt; }
  p { margin: 0 0 5pt; }
  ul { margin: 2pt 0 4pt; padding-left: 14pt; }
  li { margin: 0 0 2pt; }
`;

function render(target) {
  const markdown = fs.readFileSync(path.join(root, target.src), 'utf8');
  const title = markdown.split('\n')[0].replace(/^# /, '').trim();
  return `<!doctype html><html lang="${target.lang}"><head><meta charset="utf-8"><title>${escapeHtml(title)} — CV</title><style>${css}</style></head><body>${toHtml(markdown)}</body></html>`;
}

const browser = browsers.find((candidate) => fs.existsSync(candidate));
if (!browser) {
  console.error('Chrome or Edge not found. Set CHROME_PATH to a Chromium-based browser.');
  process.exit(1);
}

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'cv-pdf-'));
for (const target of targets) {
  const htmlPath = path.join(tmp, `${target.lang}.html`);
  const outPath = path.join(root, target.out);
  fs.writeFileSync(htmlPath, render(target));
  execFileSync(
    browser,
    [
      '--headless=new',
      '--disable-gpu',
      `--user-data-dir=${path.join(tmp, 'profile')}`,
      '--no-pdf-header-footer',
      `--print-to-pdf=${outPath}`,
      pathToFileURL(htmlPath).href,
    ],
    { stdio: 'ignore' },
  );
  console.log(`${target.out}  ${(fs.statSync(outPath).size / 1024).toFixed(0)} kB`);
}
fs.rmSync(tmp, { recursive: true, force: true });
