import type { Metadata } from 'next';
import AIBusiness from '../../../src/page-components/services/AIBusiness';
export const metadata: Metadata = {
  title: 'AI Business Transformation — Technossus',
  description: 'End-to-end AI strategy and implementation. Technossus helps enterprise teams transform operations with AI.',
  alternates: { canonical: 'https://newtechnossus-v2.vercel.app/services/ai-business-transformation' },
  openGraph: { url: 'https://newtechnossus-v2.vercel.app/services/ai-business-transformation', type: 'website' },
};
export default function Page() { return <AIBusiness />; }
