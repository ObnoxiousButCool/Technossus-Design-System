import React, { useState } from 'react';
import { useBreakpoint } from '../../ts/breakpoints';

// Figma asset URLs (node 2224:14122)
const imgBgGlow     = 'http://localhost:3845/assets/e656c8753bae72822861dd6f6ef7424990db2349.png';
const imgGroupLogo  = 'http://localhost:3845/assets/30f5ea3fef5714e5969e054275c3c3d5f425deac.svg';
const imgVectorL    = 'http://localhost:3845/assets/22da8268791bf1ad67d4263cf0b4f098e5054b2e.svg';
const imgVectorR    = 'http://localhost:3845/assets/e42f40009d317a9d71ff95afdb66d5607546eef7.svg';
const imgSocialIG   = 'http://localhost:3845/assets/6a00908eb6bd4641b0a4e8cb2350f564e48d7d2b.svg';
const imgSocialLI   = 'http://localhost:3845/assets/fa373e610fe616834b7105bb1d4d3616c6199f8e.svg';
const imgSocialX    = 'http://localhost:3845/assets/c5d3af9e9305ffc0b3b4359688a0df3337d46980.svg';
const imgSocialGH   = 'http://localhost:3845/assets/be84f68c6a79149d79e586b0b5b01611477cc446.svg';
const imgMail       = 'http://localhost:3845/assets/e8d6b5721b7832e3e8b3dfff1882e57b57f43b3b.svg';
const imgCall       = 'http://localhost:3845/assets/cc2161879de0de7879df9185d3f3d1dd0da8626f.svg';
const imgLocationOn = 'http://localhost:3845/assets/574d773c73caadf45288b9d45439cb8fe275e1f9.svg';

const sans = '"General Sans", system-ui, -apple-system, sans-serif';
const gray500 = '#ADADAD';
const gray200 = '#F5F5F5';
const gray300 = '#E1E0E0';
const red     = '#ED2939';

export interface FooterLinkGroup {
  heading: string;
  links: { label: string; href: string }[];
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
      { label: 'Product Engineering',             href: '/services/product-engineering' },
      { label: 'Data Intelligence & Analytics',   href: '/services/data-intelligence-analytics' },
      { label: 'Cloud & Product Modernization',   href: '/services/cloud-product-modernization' },
      { label: 'Digital Experience Design',       href: '/services/digital-experience-design' },
      { label: 'Quality Engineering & Verification', href: '/services/quality-engineering' },
      { label: 'AI Studio',                       href: '/ai-studio' },
    ],
  },
  {
    heading: 'INDUSTRIES',
    links: [
      { label: 'Healthcare',         href: '/industries/healthcare' },
      { label: 'Financial Services', href: '/industries/financial-services' },
      { label: 'HiTech / SaaS',      href: '/industries/hitech-saas' },
    ],
  },
  {
    heading: 'COMPANY',
    links: [
      { label: 'About Us',    href: '/about' },
      { label: 'Careers',     href: '/careers' },
      { label: 'Insights',    href: '/insights' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Contact',     href: '/contact' },
    ],
  },
];

function FooterLink({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: sans,
        fontWeight: 500,
        fontSize: 14,
        lineHeight: '20px',
        color: hovered ? red : gray500,
        textDecoration: 'none',
        display: 'block',
        width: '100%',
        transition: 'color 0.15s',
      }}
    >
      {label}
    </a>
  );
}

function SocialIcon({ src, alt, boxed = false }: { src: string; alt: string; boxed?: boolean }) {
  return boxed ? (
    <div style={{ border: `1px solid ${gray300}`, display: 'flex', height: 32, width: 32, alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
      <img alt={alt} src={src} style={{ width: 16, height: 16, display: 'block' }} />
    </div>
  ) : (
    <div style={{ width: 32, height: 32, position: 'relative', flexShrink: 0 }}>
      <img alt={alt} src={src} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
    </div>
  );
}

export function MainFooter({ linkGroups = defaultGroups, className = '', style }: MainFooterProps) {
  const { isMobile, isTablet } = useBreakpoint();

  return (
    <footer
      className={className}
      style={{
        backgroundColor: '#0B0B0B',
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? 32 : 48,
        alignItems: 'flex-start',
        overflow: 'hidden',
        paddingBottom: isMobile ? 48 : 80,
        paddingTop: isMobile ? 40 : 52,
        paddingLeft: isMobile ? 16 : isTablet ? 32 : 96,
        paddingRight: isMobile ? 16 : isTablet ? 32 : 96,
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          height: 180,
          width: '100%',
          opacity: 0.46,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <img
          alt=""
          src={imgBgGlow}
          style={{ position: 'absolute', height: '420%', left: 0, top: '-186%', width: '100%', maxWidth: 'none' }}
        />
      </div>

      {/* ── Top row ── */}
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'flex-start', justifyContent: 'space-between', width: '100%', position: 'relative', gap: isMobile ? 32 : 0 }}>

        {/* Brand column */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: isMobile ? '100%' : 275, alignSelf: 'stretch', flexShrink: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start' }}>
            {/* Logo */}
            <div style={{ height: 32.5, position: 'relative', overflow: 'hidden', flexShrink: 0, width: 195.7 }}>
              <div style={{ position: 'absolute', top: '24.85%', right: '7.54%', bottom: '24.85%', left: '8.11%' }}>
                <img alt="Technossus" src={imgGroupLogo} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
              </div>
              <div style={{ position: 'absolute', top: 0, right: '95.74%', bottom: 0, left: 0 }}>
                <img alt="" src={imgVectorL} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
              </div>
              <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: '95.93%' }}>
                <img alt="" src={imgVectorR} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
              </div>
            </div>

            {/* Tagline */}
            <p style={{ fontFamily: sans, fontWeight: 500, fontSize: 14, lineHeight: '20px', color: gray300, margin: 0, width: '100%' }}>
              Leading the charge in enterprise digital transformation, combining deep technical expertise with a relentless focus on client success.
            </p>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginTop: 24 }}>
            <SocialIcon src={imgSocialIG} alt="Instagram" boxed />
            <SocialIcon src={imgSocialLI} alt="LinkedIn" />
            <SocialIcon src={imgSocialX}  alt="X"        boxed />
            <SocialIcon src={imgSocialGH} alt="GitHub"   boxed />
          </div>
        </div>

        {/* Link columns */}
        <div style={{ display: 'flex', flexWrap: isMobile ? 'wrap' : 'nowrap', gap: isMobile ? 32 : 48, alignItems: 'flex-start', width: isMobile ? '100%' : undefined }}>
          {linkGroups.map((group) => (
            <div key={group.heading} style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start', flexShrink: 0 }}>
              <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 14, lineHeight: '20px', color: gray200, margin: 0, whiteSpace: 'nowrap' }}>
                {group.heading}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: group.heading === 'OUR OFFERINGS' ? 216 : undefined }}>
                {group.links.map((link) => (
                  <FooterLink key={link.label} {...link} />
                ))}
              </div>
            </div>
          ))}

          {/* GET IN TOUCH */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start', flexShrink: 0, width: isMobile ? '100%' : 273 }}>
            <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 14, lineHeight: '20px', color: gray200, margin: 0 }}>
              GET IN TOUCH
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
              {/* Email */}
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <img alt="" src={imgMail} style={{ width: 16, height: 16, flexShrink: 0, display: 'block' }} />
                <span style={{ fontFamily: sans, fontWeight: 500, fontSize: 14, lineHeight: '20px', color: gray500 }}>
                  contact@technossus.com
                </span>
              </div>
              {/* Phone */}
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <img alt="" src={imgCall} style={{ width: 16, height: 16, flexShrink: 0, display: 'block' }} />
                <span style={{ fontFamily: sans, fontWeight: 500, fontSize: 14, lineHeight: '20px', color: gray500 }}>
                  +1 (949) 769-3500
                </span>
              </div>
              {/* Location */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <img alt="" src={imgLocationOn} style={{ width: 16, height: 16, flexShrink: 0, display: 'block' }} />
                  <span style={{ fontFamily: sans, fontWeight: 500, fontSize: 14, lineHeight: '20px', color: gray500 }}>
                    Location
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingLeft: 28 }}>
                  {['USA: Irvine, CA  (Headquarters)', 'UK: London', 'INDIA: Pune, Ludhyana'].map((loc) => (
                    <span key={loc} style={{ fontFamily: sans, fontWeight: 500, fontSize: 14, lineHeight: '20px', color: gray500 }}>
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'space-between', width: '100%', position: 'relative', gap: isMobile ? 16 : 0 }}>
        <span style={{ fontFamily: sans, fontWeight: 500, fontSize: 14, lineHeight: '20px', color: gray500, whiteSpace: 'nowrap' }}>
          © {new Date().getFullYear()} Technossus. All rights reserved.
        </span>
        <div style={{ display: 'flex', gap: isMobile ? 16 : 32, alignItems: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'Privacy Policy',   href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Cookie Policy',    href: '/cookies' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{ fontFamily: sans, fontWeight: 500, fontSize: 14, lineHeight: '20px', color: gray500, textDecoration: 'none', whiteSpace: 'nowrap' }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
