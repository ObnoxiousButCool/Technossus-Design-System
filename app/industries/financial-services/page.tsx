import type { Metadata } from 'next';
import FinancialServices from '../../../src/page-components/industries/FinancialServices';
export const metadata: Metadata = {
  title: 'Financial Services AI & Transformation — Technossus',
  description: 'AI-powered solutions for banking, insurance, and capital markets. Built for compliance, scale, and speed.',
  alternates: { canonical: 'https://newtechnossus-v2.vercel.app/industries/financial-services' },
  openGraph: { url: 'https://newtechnossus-v2.vercel.app/industries/financial-services', type: 'website' },
};
export default function Page() { return <FinancialServices />; }
