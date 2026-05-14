import type { Metadata } from 'next';
import QualityEngineering from '../../../src/page-components/services/QualityEngineering';
export const metadata: Metadata = {
  title: 'Quality Engineering — Technossus',
  description: 'Shift quality left. Technossus quality engineering services accelerate delivery without compromising reliability.',
  alternates: { canonical: 'https://newtechnossus-v2.vercel.app/services/quality-engineering' },
  openGraph: { url: 'https://newtechnossus-v2.vercel.app/services/quality-engineering', type: 'website' },
};
export default function Page() { return <QualityEngineering />; }
