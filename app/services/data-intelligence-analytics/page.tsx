import type { Metadata } from 'next';
import DataIntelligence from '../../../src/page-components/services/DataIntelligence';
export const metadata: Metadata = {
  title: 'Data Intelligence & Analytics — Technossus',
  description: 'Turn data into decisions with Technossus data intelligence and analytics services.',
  alternates: { canonical: 'https://newtechnossus-v2.vercel.app/services/data-intelligence-analytics' },
  openGraph: { url: 'https://newtechnossus-v2.vercel.app/services/data-intelligence-analytics', type: 'website' },
};
export default function Page() { return <DataIntelligence />; }
