/**
 * SEOHead — drop-in per-page SEO component.
 *
 * Uses react-helmet-async so tags are injected at both:
 *  - Build time (SSG via renderToString + HelmetProvider context)
 *  - Run time  (client-side navigation)
 *
 * Usage:
 *   <SEOHead
 *     title="Page Title | Technossus"
 *     description="..."
 *     canonicalPath="/page-slug"
 *   />
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://newtechnossus-v2.vercel.app';
const SITE_NAME = 'Technossus';
const DEFAULT_OG_IMAGE = `${BASE_URL}/assets/logos/logo-dark.svg`;

export interface SEOHeadProps {
  /** Full <title> tag content */
  title: string;
  /** Meta description (≤160 chars for best results) */
  description: string;
  /** URL path, e.g. "/ai-studio" — used for canonical + og:url */
  canonicalPath?: string;
  /** Keywords for meta keywords tag */
  keywords?: string;
  /** Open Graph image URL (absolute) */
  ogImage?: string;
  /** Page type for og:type (default: "website") */
  ogType?: string;
  /** JSON-LD structured data object(s) */
  jsonLd?: object | object[];
  /** Set to "noindex, nofollow" for draft or private pages */
  robots?: string;
}

export function SEOHead({
  title,
  description,
  canonicalPath,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  jsonLd,
  robots = 'index, follow',
}: SEOHeadProps) {
  const canonicalUrl = canonicalPath ? `${BASE_URL}${canonicalPath}` : undefined;
  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      {/* ── Core ── */}
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      <meta name="author" content={SITE_NAME} />

      {/* ── Canonical ── */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* ── Open Graph ── */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@technossus" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* ── JSON-LD Structured Data ── */}
      {jsonLdArray.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

// ── Reusable JSON-LD schema builders ─────────────────────────────────────────

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Technossus',
  url: BASE_URL,
  logo: `${BASE_URL}/assets/logos/logo-dark.svg`,
  sameAs: [
    'https://www.linkedin.com/company/technossus',
    'https://twitter.com/technossus',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hello@technossus.com',
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: BASE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BASE_URL}/ai-studio?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  provider?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      '@type': 'Organization',
      name: opts.provider ?? SITE_NAME,
    },
  };
}

export default SEOHead;
