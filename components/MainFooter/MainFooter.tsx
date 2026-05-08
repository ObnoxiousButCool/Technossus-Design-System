import React from 'react';

// Asset URLs from Figma
const imgBgGlow     = 'http://localhost:3845/assets/e656c8753bae72822861dd6f6ef7424990db2349.png';
const imgGroupLogo  = 'http://localhost:3845/assets/30f5ea3fef5714e5969e054275c3c3d5f425deac.svg';
const imgVectorLogo = 'http://localhost:3845/assets/22da8268791bf1ad67d4263cf0b4f098e5054b2e.svg';
const imgVector1Logo= 'http://localhost:3845/assets/e42f40009d317a9d71ff95afdb66d5607546eef7.svg';
const imgLinkedIn   = 'http://localhost:3845/assets/fa373e610fe616834b7105bb1d4d3616c6199f8e.svg';
const imgLinkedInFrame = 'http://localhost:3845/assets/6a00908eb6bd4641b0a4e8cb2350f564e48d7d2b.svg';
const imgXLogo      = 'http://localhost:3845/assets/c5d3af9e9305ffc0b3b4359688a0df3337d46980.svg';
const imgMail       = 'http://localhost:3845/assets/e8d6b5721b7832e3e8b3dfff1882e57b57f43b3b.svg';
const imgCall       = 'http://localhost:3845/assets/cc2161879de0de7879df9185d3f3d1dd0da8626f.svg';
const imgLocationOn = 'http://localhost:3845/assets/574d773c73caadf45288b9d45439cb8fe275e1f9.svg';

// Design tokens
const sans = '"General Sans", system-ui, -apple-system, sans-serif';

export interface FooterLinkGroup {
  heading: string;
  links: { label: string; href: string; highlight?: boolean }[];
}

export interface MainFooterProps {
  linkGroups?: FooterLinkGroup[];
  className?: string;
  style?: React.CSSProperties;
}

const defaultGroups: FooterLinkGroup[] = [
  {
    heading: 'OUR OFFERINGS',
    links: [
      { label: 'AI Led Business Transformation', href: '/services/ai-business-transformation' },
      { label: 'Product Engineering',            href: '/services/product-engineering' },
      { label: 'Data Intelligence & Analytics',  href: '/services/data-intelligence' },
      { label: 'Cloud Consulting & Support',     href: '/services/cloud-consulting' },
      { label: 'Digital Experience Design',      href: '/services/digital-experience' },
      { label: 'Quality Engineering & Verification', href: '/services/quality-engineering' },
      { label: 'AI Studio',                      href: '/ai-studio', highlight: true },
    ],
  },
  {
    heading: 'INDUSTRIES',
    links: [
      { label: 'Healthcare',         href: '/industries/healthcare' },
      { label: 'Financial Services', href: '/industries/fintech' },
      { label: 'HiTech / SaaS',      href: '/industries/hitech' },
    ],
  },
  {
    heading: 'COMPANY',
    links: [
      { label: 'About Us',   href: '/about' },
      { label: 'Careers',    href: '/careers' },
      { label: 'Insights',   href: '/insights' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Contact',    href: '/contact' },
    ],
  },
];

export function MainFooter({ linkGroups = defaultGroups, className = '', style }: MainFooterProps) {
  return (
    <footer
      className={className}
      data-node-id="8:76"
      style={{
        backgroundColor: '#0B0B0B',
        display: 'flex',
        flexDirection: 'column',
        gap: 48,
        alignItems: 'flex-start',
        overflow: 'hidden',
        paddingBottom: 80,
        paddingTop: 52,
        paddingLeft: 96,
        paddingRight: 96,
        position: 'relative',
        width: 1440,
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {/* Background glow image */}
      <div
        data-node-id="8:9"
        style={{
          position: 'absolute',
          bottom: -0.37,
          left: '50%',
          transform: 'translateX(-50%)',
          height: 180,
          width: 1440,
          opacity: 0.46,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <img
          alt=""
          src={imgBgGlow}
          style={{
            position: 'absolute',
            height: '420%',
            left: '-0.01%',
            top: '-186.11%',
            width: '100.02%',
            maxWidth: 'none',
          }}
        />
      </div>

      {/* ── Top row: brand + links ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
          width: '100%',
          position: 'relative',
        }}
      >
        {/* Brand column */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', alignSelf: 'stretch' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexShrink: 0,
              width: 275,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start', flexShrink: 0, width: '100%' }}>
              {/* Logo */}
              <div style={{ height: 32.478, position: 'relative', overflow: 'hidden', flexShrink: 0, width: 195.732 }}>
                <div style={{ position: 'absolute', top: '24.85%', right: '7.54%', bottom: '24.85%', left: '8.11%' }}>
                  <img alt="Technossus" src={imgGroupLogo} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
                </div>
                <div style={{ position: 'absolute', top: 0, right: '95.74%', bottom: 0, left: 0 }}>
                  <img alt="" src={imgVectorLogo} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
                </div>
                <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: '95.93%' }}>
                  <img alt="" src={imgVector1Logo} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
                </div>
              </div>

              {/* Tagline */}
              <p
                style={{
                  fontFamily: sans,
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: '20px',
                  color: '#E1E0E0',
                  margin: 0,
                  minWidth: '100%',
                  width: 'min-content',
                }}
              >
                Leading the charge in enterprise digital transformation, combining deep technical expertise with a relentless focus on client success.
              </p>
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexShrink: 0 }}>
              {/* LinkedIn frame */}
              <div
                style={{
                  border: '1px solid #E1E0E0',
                  display: 'flex',
                  height: 32,
                  alignItems: 'center',
                  overflow: 'hidden',
                  padding: 8,
                  flexShrink: 0,
                }}
              >
                <div style={{ width: 16, height: 16, position: 'relative', flexShrink: 0 }}>
                  <img alt="LinkedIn" src={imgLinkedInFrame} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
                </div>
              </div>

              {/* LinkedIn icon */}
              <div style={{ width: 32, height: 32, position: 'relative', flexShrink: 0 }}>
                <img alt="LinkedIn" src={imgLinkedIn} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
              </div>

              {/* X */}
              <div
                style={{
                  border: '1px solid #E1E0E0',
                  display: 'flex',
                  height: 32,
                  alignItems: 'center',
                  overflow: 'hidden',
                  padding: 8,
                  flexShrink: 0,
                }}
              >
                <div style={{ width: 16, height: 11.273, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
                  <img alt="X" src={imgXLogo} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start', flexShrink: 0 }}>
          {linkGroups.map((group) => (
            <div
              key={group.heading}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
                alignItems: 'flex-start',
                flexShrink: 0,
              }}
            >
              <p
                style={{
                  fontFamily: sans,
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: '20px',
                  color: '#F5F5F5',
                  margin: 0,
                  minWidth: '100%',
                  width: 'min-content',
                }}
              >
                {group.heading}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start', flexShrink: 0, width: group.heading === 'OUR OFFERINGS' ? 216 : undefined }}>
                {group.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{
                      fontFamily: sans,
                      fontWeight: link.highlight ? 600 : 500,
                      fontSize: 14,
                      lineHeight: '20px',
                      color: link.highlight ? '#E60000' : '#ADADAD',
                      textDecoration: 'none',
                      display: 'block',
                      width: '100%',
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Get In Touch */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start', flexShrink: 0, width: 273 }}>
            <p
              style={{
                fontFamily: sans,
                fontWeight: 600,
                fontSize: 14,
                lineHeight: '20px',
                color: '#F5F5F5',
                margin: 0,
                width: '100%',
              }}
            >
              GET IN TOUCH
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start', flexShrink: 0, width: '100%' }}>
              {/* Email */}
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexShrink: 0, width: '100%' }}>
                <div style={{ width: 16, height: 16, position: 'relative', flexShrink: 0 }}>
                  <img alt="" src={imgMail} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
                </div>
                <p style={{ fontFamily: sans, fontWeight: 500, fontSize: 14, lineHeight: '20px', color: '#ADADAD', margin: 0, height: 20, flexShrink: 0, width: 211.36 }}>
                  contact@technossus.com
                </p>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexShrink: 0, width: '100%' }}>
                <div style={{ width: 16, height: 16, position: 'relative', flexShrink: 0 }}>
                  <img alt="" src={imgCall} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
                </div>
                <p style={{ fontFamily: sans, fontWeight: 500, fontSize: 14, lineHeight: '20px', color: '#ADADAD', margin: 0, height: 20, flexShrink: 0, width: 149.23 }}>
                  +1 (949) 769-3500
                </p>
              </div>

              {/* Address */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start', flexShrink: 0, width: '100%' }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexShrink: 0, width: '100%' }}>
                  <div style={{ width: 16, height: 16, position: 'relative', flexShrink: 0 }}>
                    <img alt="" src={imgLocationOn} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
                  </div>
                  <p style={{ fontFamily: sans, fontWeight: 500, fontSize: 14, lineHeight: '20px', color: '#ADADAD', margin: 0, height: 20, flexShrink: 0, width: 224 }}>
                    Location
                  </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start', paddingLeft: 28, flexShrink: 0, width: '100%' }}>
                  {[
                    'USA: Irvine, CA  (Headquarters)',
                    'UK: London',
                    'INDIA: Pune, Ludhyana',
                  ].map((loc) => (
                    <p
                      key={loc}
                      style={{
                        fontFamily: sans,
                        fontWeight: 500,
                        fontSize: 14,
                        lineHeight: '20px',
                        color: '#ADADAD',
                        margin: 0,
                        width: '100%',
                        flexShrink: 0,
                      }}
                    >
                      {loc}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        data-node-id="8:66"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
          width: '100%',
          position: 'relative',
        }}
      >
        {/* Copyright */}
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <p
            style={{
              fontFamily: sans,
              fontWeight: 500,
              fontSize: 14,
              lineHeight: '20px',
              color: '#ADADAD',
              margin: 0,
              whiteSpace: 'nowrap',
            }}
          >
            © {new Date().getFullYear()} Technossus. All rights reserved.
          </p>
        </div>

        {/* Legal links */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', height: 20, flexShrink: 0, position: 'relative' }}>
          {[
            { label: 'Privacy Policy',    href: '/privacy' },
            { label: 'Terms of Service',  href: '/terms' },
            { label: 'Cookie Policy',     href: '/cookies' },
          ].map((link) => (
            <div key={link.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', alignSelf: 'stretch', flexShrink: 0 }}>
              <a
                href={link.href}
                style={{
                  fontFamily: sans,
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: '20px',
                  color: '#ADADAD',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
