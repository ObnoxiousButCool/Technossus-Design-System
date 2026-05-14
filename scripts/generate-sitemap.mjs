/**
 * Sitemap generator — run after prerender.mjs
 *
 * Writes:
 *  - dist/sitemap.xml
 *  - dist/robots.txt  (if not already in public/)
 */

import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const BASE_URL = 'https://newtechnossus-v2.vercel.app';

const ROUTES = [
  { path: '/',                                       priority: '1.0', changefreq: 'weekly'  },
  { path: '/ai-studio',                             priority: '0.9', changefreq: 'weekly'  },
  { path: '/about',                                 priority: '0.8', changefreq: 'monthly' },
  { path: '/careers',                               priority: '0.7', changefreq: 'weekly'  },
  { path: '/case-studies',                          priority: '0.8', changefreq: 'weekly'  },
  { path: '/contact',                               priority: '0.7', changefreq: 'monthly' },
  { path: '/services/ai-business-transformation',   priority: '0.8', changefreq: 'monthly' },
  { path: '/services/data-intelligence-analytics',  priority: '0.8', changefreq: 'monthly' },
  { path: '/services/digital-experience-design',    priority: '0.8', changefreq: 'monthly' },
  { path: '/services/product-engineering',          priority: '0.8', changefreq: 'monthly' },
  { path: '/services/quality-engineering',          priority: '0.8', changefreq: 'monthly' },
  { path: '/services/cloud-product-modernization',  priority: '0.8', changefreq: 'monthly' },
  { path: '/industries/healthcare',                 priority: '0.7', changefreq: 'monthly' },
  { path: '/industries/financial-services',         priority: '0.7', changefreq: 'monthly' },
  { path: '/industries/hitech-saas',                priority: '0.7', changefreq: 'monthly' },
];

const today = new Date().toISOString().split('T')[0];

// ── sitemap.xml ──────────────────────────────────────────────────────────────
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(({ path, priority, changefreq }) => `  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

writeFileSync(resolve(root, 'dist', 'sitemap.xml'), sitemap, 'utf-8');
console.log('✅  dist/sitemap.xml written');

// ── robots.txt ───────────────────────────────────────────────────────────────
const robots = `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${BASE_URL}/sitemap.xml

# Disallow internal/utility paths
Disallow: /assets/logos/
`;

writeFileSync(resolve(root, 'dist', 'robots.txt'), robots, 'utf-8');
console.log('✅  dist/robots.txt written');
