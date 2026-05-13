import type { Metadata } from 'next';
import './globals.css';
import { MainHeader } from '../components/MainHeader';
import { MainFooter } from '../components/MainFooter';

export const metadata: Metadata = {
  metadataBase: new URL('https://newtechnossus-v2.vercel.app'),
  title: {
    default: 'Technossus — Enterprise AI, Cloud & Digital Transformation',
    template: '%s | Technossus',
  },
  description:
    'Technossus partners with enterprise teams to design, build, and ship AI-led solutions — from strategy to production.',
  keywords: ['enterprise AI', 'digital transformation', 'cloud modernization', 'AI strategy', 'product engineering', 'Technossus'],
  authors: [{ name: 'Technossus' }],
  openGraph: {
    siteName: 'Technossus',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@technossus',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for font performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Roboto Serif */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,400;0,8..144,500;0,8..144,600;0,8..144,700;1,8..144,400;1,8..144,600&display=swap"
          rel="stylesheet"
        />
        {/* General Sans (Fontshare) */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/assets/logos/logo-dark.svg" />
      </head>
      <body>
        <MainHeader />
        <main>{children}</main>
        <MainFooter />
      </body>
    </html>
  );
}
