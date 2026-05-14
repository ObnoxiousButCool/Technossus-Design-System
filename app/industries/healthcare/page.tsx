import type { Metadata } from 'next';
import Healthcare from '../../../src/page-components/industries/Healthcare';
export const metadata: Metadata = {
  title: 'Healthcare AI & Digital Transformation — Technossus',
  description: 'AI and digital transformation solutions purpose-built for healthcare providers and payers.',
  alternates: { canonical: 'https://newtechnossus-v2.vercel.app/industries/healthcare' },
  openGraph: { url: 'https://newtechnossus-v2.vercel.app/industries/healthcare', type: 'website' },
};
export default function Page() { return <Healthcare />; }
