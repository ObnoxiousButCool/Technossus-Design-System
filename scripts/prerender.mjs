/**
 * Static Site Generation — pre-render script
 *
 * Run after `vite build` (client) + `vite build --ssr` (server):
 *   node scripts/prerender.mjs
 *
 * For each route it:
 *  1. Renders the React tree to HTML via the SSR bundle
 *  2. Injects rendered HTML + Helmet <head> tags into the index.html template
 *  3. Writes a fully-formed index.html to dist/<route>/index.html
 *
 * The result is a folder of static HTML files that Vercel / any static host
 * can serve directly — content is visible in browser "View Page Source".
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

// All routes that exist in src/App.tsx
const ROUTES = [
  '/',
  '/ai-studio',
  '/about',
  '/contact',
  '/careers',
  '/case-studies',
  '/services/ai-business-transformation',
  '/services/data-intelligence-analytics',
  '/services/digital-experience-design',
  '/services/product-engineering',
  '/services/quality-engineering',
  '/services/cloud-product-modernization',
  '/industries/healthcare',
  '/industries/financial-services',
  '/industries/hitech-saas',
];

async function prerender() {
  console.log('\n🔨  Pre-rendering static HTML...\n');

  // Read the client-built index.html as the template
  const templatePath = resolve(root, 'dist', 'index.html');
  let template;
  try {
    template = readFileSync(templatePath, 'utf-8');
  } catch {
    console.error('❌  dist/index.html not found. Run `npm run build:client` first.');
    process.exit(1);
  }

  // Import the SSR bundle built by `vite build --ssr`
  // Vite SSR build outputs .mjs for ESM, fall back to .js for CJS
  const serverEntryPath = resolve(root, 'dist-server', 'entry-server.mjs');
  let render;
  try {
    ({ render } = await import(serverEntryPath));
  } catch (e) {
    console.error('❌  dist-server/entry-server.mjs not found. Run `npm run build:server` first.', e);
    process.exit(1);
  }

  let succeeded = 0;
  let failed = 0;

  for (const route of ROUTES) {
    try {
      const { html, headTags } = render(route);

      // Inject app HTML and <head> tags into template
      let page = template
        .replace('<!--app-html-->', html)
        .replace('<!--head-tags-->', headTags);

      // Determine output path: '/' → dist/index.html, '/about' → dist/about/index.html
      const routeDir = route === '/'
        ? resolve(root, 'dist')
        : resolve(root, 'dist', ...route.replace(/^\//, '').split('/'));

      mkdirSync(routeDir, { recursive: true });
      writeFileSync(resolve(routeDir, 'index.html'), page, 'utf-8');

      console.log(`  ✅  ${route}`);
      succeeded++;
    } catch (err) {
      console.error(`  ❌  ${route}`, err?.message ?? err);
      failed++;
    }
  }

  console.log(`\n✨  Pre-render complete: ${succeeded} succeeded, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

prerender();
