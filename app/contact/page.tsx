import type { Metadata } from 'next';
import ContactUs from '../../src/page-components/ContactUs';
export const metadata: Metadata = {
  title: 'Contact Us — Technossus',
  description: 'Get in touch with Technossus. Start a conversation about your next enterprise AI or digital transformation project.',
  alternates: { canonical: 'https://newtechnossus-v2.vercel.app/contact' },
  openGraph: { url: 'https://newtechnossus-v2.vercel.app/contact', type: 'website' },
};
export default function Page() { return <ContactUs />; }
