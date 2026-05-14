import type { Metadata } from 'next';
import CloudModernization from '../../../src/page-components/services/CloudModernization';
export const metadata: Metadata = {
  title: 'Cloud & Product Modernization — Technossus',
  description: 'Modernize legacy systems and cloud infrastructure with Technossus. Reduce costs, improve resilience, enable scale.',
  alternates: { canonical: 'https://newtechnossus-v2.vercel.app/services/cloud-product-modernization' },
  openGraph: { url: 'https://newtechnossus-v2.vercel.app/services/cloud-product-modernization', type: 'website' },
};
export default function Page() { return <CloudModernization />; }
