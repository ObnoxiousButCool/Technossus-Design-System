import type { Metadata } from 'next';
import HiTechSaaS from '../../../src/page-components/industries/HiTechSaaS';
export const metadata: Metadata = {
  title: 'HiTech & SaaS — Technossus',
  description: 'Build AI-native SaaS products and modernize HiTech platforms with Technossus engineering expertise.',
  alternates: { canonical: 'https://newtechnossus-v2.vercel.app/industries/hitech-saas' },
  openGraph: { url: 'https://newtechnossus-v2.vercel.app/industries/hitech-saas', type: 'website' },
};
export default function Page() { return <HiTechSaaS />; }
