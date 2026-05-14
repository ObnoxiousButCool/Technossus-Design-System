import type { Metadata } from 'next';
import Careers from '../../src/page-components/Careers';
export const metadata: Metadata = {
  title: 'Careers — Technossus',
  description: 'Join the Technossus team. Explore open roles in AI, engineering, design, and more.',
  alternates: { canonical: 'https://newtechnossus-v2.vercel.app/careers' },
  openGraph: { url: 'https://newtechnossus-v2.vercel.app/careers', type: 'website' },
};
export default function Page() { return <Careers />; }
