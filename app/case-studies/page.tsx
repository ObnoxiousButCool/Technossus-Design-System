import type { Metadata } from 'next';
import CaseStudies from '../../src/page-components/CaseStudies';
export const metadata: Metadata = {
  title: 'Case Studies — Technossus',
  description: 'Explore Technossus case studies across healthcare, financial services, HiTech, and more.',
  alternates: { canonical: 'https://newtechnossus-v2.vercel.app/case-studies' },
  openGraph: { url: 'https://newtechnossus-v2.vercel.app/case-studies', type: 'website' },
};
export default function Page() { return <CaseStudies />; }
