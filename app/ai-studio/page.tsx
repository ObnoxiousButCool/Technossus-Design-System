import type { Metadata } from 'next';
import AIStudio from '../../src/page-components/AIStudio';
export const metadata: Metadata = {
  title: 'AI Studio — Technossus',
  description: 'Explore, validate, and build enterprise AI in a structured environment. Browse accelerators, join a sprint, or connect with practitioners doing it in production.',
  alternates: { canonical: 'https://newtechnossus-v2.vercel.app/ai-studio' },
  openGraph: { url: 'https://newtechnossus-v2.vercel.app/ai-studio', type: 'website' },
};
export default function Page() { return <AIStudio />; }
