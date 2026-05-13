import type { Metadata } from 'next';
import DigitalExperience from '../../../src/page-components/services/DigitalExperience';
export const metadata: Metadata = {
  title: 'Digital Experience Design — Technossus',
  description: 'Human-centered digital experiences built for enterprise scale. Design, prototype, and ship with Technossus.',
  alternates: { canonical: 'https://newtechnossus-v2.vercel.app/services/digital-experience-design' },
  openGraph: { url: 'https://newtechnossus-v2.vercel.app/services/digital-experience-design', type: 'website' },
};
export default function Page() { return <DigitalExperience />; }
