import type { Metadata } from 'next';
import Home from '../src/page-components/Home';
export const metadata: Metadata = {
  title: 'Technossus — Enterprise AI, Cloud & Digital Transformation',
  description: 'Technossus partners with enterprise teams to design, build, and ship AI-led solutions — from strategy to production.',
  alternates: { canonical: 'https://newtechnossus-v2.vercel.app/' },
  openGraph: { url: 'https://newtechnossus-v2.vercel.app/', type: 'website' },
};
export default function Page() { return <Home />; }
