import React from 'react';

interface FooterLinkGroup {
  heading: string;
  links: { label: string; href: string }[];
}

interface MainFooterProps {
  logo?: React.ReactNode;
  linkGroups?: FooterLinkGroup[];
  legalLinks?: { label: string; href: string }[];
  copyright?: string;
  className?: string;
}

const fontSans = '"General Sans", system-ui, -apple-system, sans-serif';

const defaultLinkGroups: FooterLinkGroup[] = [
  {
    heading: 'Services',
    links: [
      { label: 'AI & Machine Learning', href: '/services/ai' },
      { label: 'Cloud Solutions', href: '/services/cloud' },
      { label: 'Digital Transformation', href: '/services/digital' },
      { label: 'Data & Analytics', href: '/services/data' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Finance', href: '/industries/finance' },
      { label: 'Manufacturing', href: '/industries/manufacturing' },
      { label: 'Retail', href: '/industries/retail' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Insights', href: '/insights' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

const defaultLegalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
];

export function MainFooter({
  logo,
  linkGroups = defaultLinkGroups,
  legalLinks = defaultLegalLinks,
  copyright,
  className = '',
}: MainFooterProps) {
  const currentYear = new Date().getFullYear();
  const copyrightText = copyright ?? `© ${currentYear} Technossus. All rights reserved.`;

  return (
    <footer
      className={className}
      style={{
        background: '#010101',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Main footer content */}
      <div
        style={{
          padding: '64px 48px 48px',
          display: 'flex',
          gap: '64px',
          flexWrap: 'wrap',
        }}
      >
        {/* Logo + tagline column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: '0 0 auto', minWidth: '220px' }}>
          <a href="/" aria-label="Technossus home" style={{ display: 'flex', textDecoration: 'none' }}>
            {logo ?? (
              <svg width="160" height="32" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="29" fontFamily={fontSans} fontWeight="600" fontSize="24" fill="#FFFFFF" letterSpacing="-0.5">
                  Technossus
                </text>
                <circle cx="174" cy="8" r="5" fill="#ED2939" />
              </svg>
            )}
          </a>
          <p
            style={{
              fontFamily: fontSans,
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '20px',
              color: '#949494',
              margin: 0,
              maxWidth: '220px',
            }}
          >
            Technology solutions that drive real business impact.
          </p>
        </div>

        {/* Link groups */}
        <div
          style={{
            display: 'flex',
            gap: '48px',
            flex: 1,
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
          }}
        >
          {linkGroups.map((group) => (
            <div key={group.heading} style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '140px' }}>
              <h4
                style={{
                  fontFamily: fontSans,
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#FFFFFF',
                  margin: 0,
                }}
              >
                {group.heading}
              </h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontFamily: fontSans,
                        fontWeight: 500,
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: '#949494',
                        textDecoration: 'none',
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: '#343434', margin: '0 48px' }} />

      {/* Bottom bar */}
      <div
        style={{
          padding: '24px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            fontFamily: fontSans,
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '20px',
            color: '#5C5C5C',
          }}
        >
          {copyrightText}
        </span>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {legalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: fontSans,
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#5C5C5C',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export type { MainFooterProps, FooterLinkGroup };
export default MainFooter;
