export const contactFormTopicsByRoute: Record<string, string> = {
  '/': '',
  '/about': 'About Technossus',
  '/ai-studio': 'AI Studio',
  '/careers': 'Careers',
  '/case-studies': 'Case Studies',
  '/contact': 'General Inquiry',
  '/financing-option': 'Financing Options',
  '/financing-options': 'Financing Options',
  '/industries/financial-services': 'Financial Services',
  '/industries/healthcare': 'Healthcare',
  '/industries/hitech-saas': 'HiTech / SaaS',
  '/services/ai-business-transformation': 'AI-Led Business Transformation',
  '/services/cloud-product-modernization': 'Cloud & Product Modernization',
  '/services/data-intelligence-analytics': 'Data Intelligence & Analytics',
  '/services/digital-experience-design': 'Digital Experience Design',
  '/services/product-engineering': 'Product Engineering',
  '/services/quality-engineering': 'Quality Engineering & Verification',
};

function normalizePathname(pathname: string) {
  const [pathWithoutQuery] = pathname.split(/[?#]/);
  const normalized = pathWithoutQuery.replace(/\/+$/, '');
  return normalized || '/';
}

export function getContactFormTopicForRoute(pathname?: string | null) {
  if (!pathname) return undefined;

  return contactFormTopicsByRoute[normalizePathname(pathname)];
}
