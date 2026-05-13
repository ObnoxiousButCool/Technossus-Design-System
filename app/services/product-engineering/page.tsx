import type { Metadata } from 'next';
import ProductEngineering from '../../../src/page-components/services/ProductEngineering';
export const metadata: Metadata = {
  title: 'Product Engineering — Technossus',
  description: 'End-to-end product engineering for enterprise software. Build fast, ship confidently with Technossus.',
  alternates: { canonical: 'https://newtechnossus-v2.vercel.app/services/product-engineering' },
  openGraph: { url: 'https://newtechnossus-v2.vercel.app/services/product-engineering', type: 'website' },
};
export default function Page() { return <ProductEngineering />; }
