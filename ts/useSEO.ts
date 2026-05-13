import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  jsonLd?: object;
}

/**
 * Sets document <head> meta tags for SEO on mount and restores defaults on unmount.
 * Works with any Vite/React SPA — no extra library needed.
 */
export function useSEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterTitle,
  twitterDescription,
  twitterImage,
  canonicalUrl,
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    const prevTitle = document.title;

    // ── Title ──────────────────────────────────────────────────────────────
    document.title = title;

    // ── Meta helpers ───────────────────────────────────────────────────────
    const addedTags: HTMLElement[] = [];

    function setMeta(selector: string, attr: string, value: string | undefined) {
      if (!value) return;
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      const isNew = !el;
      if (isNew) {
        el = document.createElement('meta');
        const [key, val] = attr.split('=');
        el.setAttribute(key, val.replace(/"/g, ''));
        document.head.appendChild(el);
        addedTags.push(el);
      }
      el!.setAttribute('content', value);
    }

    function setLink(rel: string, href: string | undefined) {
      if (!href) return;
      let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      const isNew = !el;
      if (isNew) {
        el = document.createElement('link');
        el.rel = rel;
        document.head.appendChild(el);
        addedTags.push(el);
      }
      el!.href = href;
    }

    setMeta('meta[name="description"]', 'name=description', description);
    setMeta('meta[name="keywords"]', 'name=keywords', keywords);
    setMeta('meta[property="og:title"]', 'property=og:title', ogTitle ?? title);
    setMeta('meta[property="og:description"]', 'property=og:description', ogDescription ?? description);
    setMeta('meta[property="og:type"]', 'property=og:type', 'website');
    setMeta('meta[property="og:url"]', 'property=og:url', ogUrl);
    setMeta('meta[property="og:image"]', 'property=og:image', ogImage);
    setMeta('meta[name="twitter:card"]', 'name=twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name=twitter:title', twitterTitle ?? title);
    setMeta('meta[name="twitter:description"]', 'name=twitter:description', twitterDescription ?? description);
    setMeta('meta[name="twitter:image"]', 'name=twitter:image', twitterImage ?? ogImage);
    setLink('canonical', canonicalUrl);

    // ── JSON-LD structured data ────────────────────────────────────────────
    let jsonLdScript: HTMLScriptElement | null = null;
    if (jsonLd) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.type = 'application/ld+json';
      jsonLdScript.text = JSON.stringify(jsonLd);
      document.head.appendChild(jsonLdScript);
    }

    return () => {
      document.title = prevTitle;
      addedTags.forEach(t => t.remove());
      jsonLdScript?.remove();
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, twitterTitle, twitterDescription, twitterImage, canonicalUrl, jsonLd]);
}
