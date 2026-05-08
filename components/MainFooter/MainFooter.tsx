import React from 'react';

export interface FooterLinkGroup {
  heading: string;
  links: { label: string; href: string }[];
}

export interface MainFooterProps {
  linkGroups?: FooterLinkGroup[];
  className?: string;
}

const sans = '"General Sans", system-ui, -apple-system, sans-serif';

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const defaultGroups: FooterLinkGroup[] = [
  {
    heading: 'Services',
    links: [
      { label: 'Quality Engineering',    href: '/services/quality-engineering' },
      { label: 'AI & Data Engineering',  href: '/services/ai-business-transformation' },
      { label: 'Cloud & DevOps',         href: '/services/cloud-modernization' },
      { label: 'Platform Engineering',   href: '/services/product-engineering' },
      { label: 'Digital Transformation', href: '/services/digital-experience' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'Healthcare',    href: '/industries/healthcare' },
      { label: 'Fintech',       href: '/industries/fintech' },
      { label: 'Insurance',     href: '/industries/insurance' },
      { label: 'Life Sciences', href: '/industries/life-sciences' },
      { label: 'Manufacturing', href: '/industries/manufacturing' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us',  href: '/about' },
      { label: 'Careers',   href: '/careers' },
      { label: 'Insights',  href: '/insights' },
      { label: 'Partners',  href: '/partners' },
    ],
  },
];

export function MainFooter({ linkGroups = defaultGroups, className = '' }: MainFooterProps) {
  const socialBtn: React.CSSProperties = {
    width: 36, height: 36, border: '1px solid #2E2E2E',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: '#B5B5B5', textDecoration: 'none', flexShrink: 0,
  };

  return (
    <footer className={className} style={{ background: '#111' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '64px 80px 0', display: 'flex', gap: 64, flexWrap: 'wrap' }}>
        {/* Brand */}
        <div style={{ flex: '0 0 260px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <a href="/" style={{ display: 'inline-flex', lineHeight: 0 }}>
            <img src="/assets/logos/logo-white.svg" alt="Technossus" height={32} />
          </a>
          <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 400, lineHeight: 1.7, color: '#B5B5B5' }}>
            Engineering intelligence into every layer of your digital operations.
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
            {[
              { href: '#', label: 'LinkedIn', icon: <LinkedInIcon /> },
              { href: '#', label: 'X / Twitter', icon: <XIcon /> },
              { href: '#', label: 'GitHub', icon: <GitHubIcon /> },
            ].map(s => (
              <a key={s.label} href={s.href} aria-label={s.label} style={socialBtn}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div style={{ flex: 1, display: 'flex', gap: 48, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {linkGroups.map(group => (
            <div key={group.heading} style={{ display: 'flex', flexDirection: 'column', gap: 16, minWidth: 130 }}>
              <div style={{ fontFamily: sans, fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#fff' }}>
                {group.heading}
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {group.links.map(link => (
                  <li key={link.label}>
                    <a href={link.href} style={{ fontFamily: sans, fontSize: 13, color: '#7A7A7A', lineHeight: 1.5, textDecoration: 'none' }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ maxWidth: 1440, margin: '48px auto 0', padding: '24px 80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, borderTop: '1px solid #222' }}>
        <span style={{ fontFamily: sans, fontSize: 13, color: '#5C5C5C' }}>
          © {new Date().getFullYear()} Technossus. All rights reserved.
        </span>
        <div style={{ display: 'flex', gap: 24 }}>
          {[
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Cookie Policy', href: '/cookies' },
          ].map(l => (
            <a key={l.label} href={l.href} style={{ fontFamily: sans, fontSize: 13, color: '#5C5C5C', textDecoration: 'none' }}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
