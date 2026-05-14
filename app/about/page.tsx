import type { Metadata } from 'next';
import AboutUs from '../../src/page-components/AboutUs';
export const metadata: Metadata = {
  title: 'About Us — Technossus',
  description: 'Learn about Technossus — our mission, team, and approach to enterprise AI and digital transformation.',
  alternates: { canonical: 'https://newtechnossus-v2.vercel.app/about' },
  openGraph: { url: 'https://newtechnossus-v2.vercel.app/about', type: 'website' },
};
export default function Page() { return <AboutUs />; }
