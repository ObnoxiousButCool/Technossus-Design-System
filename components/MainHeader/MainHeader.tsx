import React, { useState, useEffect, useRef } from 'react';
import { useBreakpoint } from '../../ts/breakpoints';

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export interface MainHeaderProps {
  navItems?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
  logoSrc?: string;
  className?: string;
}

const sans = '"General Sans", system-ui, -apple-system, sans-serif';
const red  = '#ED2939';
const dark = '#1E1E1E';

const ChevronDown = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HamburgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M3 6H21M3 12H21M3 18H21" stroke={dark} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M6 6L18 18M18 6L6 18" stroke={dark} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const defaultNavItems: NavItem[] = [
  { label: 'AI Studio', href: '/ai-studio' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'AI Led Business Transformation',  href: '/services/ai-business-transformation', description: 'Engineering the new operating model.' },
      { label: 'Data Intelligence & Analytics',   href: '/services/data-intelligence',          description: 'Turn into a decision engine.' },
      { label: 'Digital Experience Design',       href: '/services/digital-experience',         description: 'Reimagine product, UX and brand.' },
      { label: 'Product Engineering',             href: '/services/product-engineering',        description: 'Ship full-stack at startup speed.' },
      { label: 'Quality Engineering & Automation', href: '/services/quality-engineering',       description: 'Test, observe, accelerate releases.' },
      { label: 'Cloud & Product Modernization',   href: '/services/cloud-modernization',        description: 'Lift, refactor, and run smarter.' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Healthcare',    href: '/industries/healthcare',    description: 'Digital health, interoperability & compliance.' },
      { label: 'Fintech',       href: '/industries/fintech',       description: 'Trading systems, payments, and risk.' },
      { label: 'Life Sciences', href: '/industries/life-sciences', description: 'LIMS, clinical trials, and lab automation.' },
      { label: 'Manufacturing', href: '/industries/manufacturing', description: 'Smart factory, IoT, and supply chain.' },
    ],
  },
  { label: 'Resources', href: '/resources' },
  { label: 'About Us',  href: '/about' },
  { label: 'Careers',   href: '/careers' },
];

export function MainHeader({
  navItems = defaultNavItems,
  ctaLabel = 'Contact us',
  ctaHref  = '/contact',
  logoSrc,
  className = '',
}: MainHeaderProps) {
  const { isMobile } = useBreakpoint();
  const [openDropdown,   setOpenDropdown]   = useState<string | null>(null);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinkBase: React.CSSProperties = {
    fontFamily: sans, fontSize: 14, fontWeight: 500, color: dark,
    textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer',
    padding: 0, display: 'inline-flex', alignItems: 'center', gap: 3, whiteSpace: 'nowrap',
  };

  return (
    <header
      ref={headerRef}
      className={className}
      style={{ background: '#fff', borderBottom: '1px solid #E8E8E8', position: 'sticky', top: 0, zIndex: 1000, width: '100%' }}
    >
      {/* Top bar */}
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: isMobile ? '0 20px' : '0 48px', height: 80, display: 'flex', alignItems: 'center', gap: 48 }}>

        <a href="/" aria-label="Technossus home" style={{ display: 'inline-flex', lineHeight: 0, flexShrink: 0 }}>
          <img src={logoSrc ?? '/assets/logos/logo-dark.svg'} alt="Technossus" height={32} />
        </a>

        {/* Desktop nav */}
        {!isMobile && (
          <nav aria-label="Main" style={{ flex: 1, display: 'flex', gap: 32, alignItems: 'center', justifyContent: 'center' }}>
            {navItems.map(item => (
              <div key={item.label} style={{ position: 'relative' }}>
                {item.children ? (
                  <button
                    style={{ ...navLinkBase, color: openDropdown === item.label ? red : dark }}
                    aria-expanded={openDropdown === item.label}
                    onClick={() => setOpenDropdown(p => p === item.label ? null : item.label)}
                  >
                    {item.label}
                    <span style={{ transform: openDropdown === item.label ? 'rotate(180deg)' : 'none', transition: 'transform .2s', display: 'inline-flex' }}>
                      <ChevronDown />
                    </span>
                  </button>
                ) : (
                  <a href={item.href} style={navLinkBase}
                    onMouseEnter={e => (e.currentTarget.style.color = red)}
                    onMouseLeave={e => (e.currentTarget.style.color = dark)}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <a href={ctaHref} style={{ flexShrink: 0, background: dark, color: '#fff', fontFamily: sans, fontSize: 14, fontWeight: 600, padding: '12px 20px', display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap', textDecoration: 'none' }}>
            {ctaLabel}
          </a>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(o => !o)}
            style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex' }}
          >
            {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        )}
      </div>

      {/* Desktop mega-menu */}
      {!isMobile && openDropdown && (() => {
        const active = navItems.find(i => i.label === openDropdown);
        if (!active?.children) return null;
        return (
          <div style={{ position: 'absolute', left: 0, right: 0, background: '#fff', borderBottom: '1px solid #E8E8E8', boxShadow: '0 8px 32px rgba(0,0,0,.08)', zIndex: 999 }}>
            <div style={{ maxWidth: 1440, margin: '0 auto', padding: '48px 48px 52px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(active.children.length, 3)}, 1fr)`, gap: '40px 64px' }}>
                {active.children.map(child => (
                  <a
                    key={child.label}
                    href={child.href}
                    onClick={() => setOpenDropdown(null)}
                    style={{ display: 'flex', flexDirection: 'column', gap: 6, textDecoration: 'none' }}
                  >
                    <span style={{ fontFamily: sans, fontSize: 16, fontWeight: 600, color: dark, transition: 'color .15s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = red)}
                      onMouseLeave={e => (e.currentTarget.style.color = dark)}
                    >
                      {child.label}
                    </span>
                    {child.description && (
                      <span style={{ fontFamily: sans, fontSize: 13, fontWeight: 400, color: '#767676', lineHeight: 1.5 }}>
                        {child.description}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        );
      })()}

      {/* Mobile fullscreen overlay */}
      {isMobile && mobileOpen && (
        <div style={{ position: 'fixed', inset: 0, background: '#fff', zIndex: 998, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', height: 80, borderBottom: '1px solid #E8E8E8', flexShrink: 0 }}>
            <a href="/" style={{ display: 'inline-flex', lineHeight: 0 }} onClick={() => setMobileOpen(false)}>
              <img src="/assets/logos/logo-dark.svg" alt="Technossus" height={32} />
            </a>
            <button onClick={() => setMobileOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex' }}>
              <CloseIcon />
            </button>
          </div>
          <nav style={{ flex: 1, padding: '0 20px' }}>
            {navItems.map(item => (
              <div key={item.label} style={{ borderBottom: '1px solid #E8E8E8' }}>
                {item.children ? (
                  <>
                    <button
                      aria-expanded={mobileExpanded === item.label}
                      onClick={() => setMobileExpanded(p => p === item.label ? null : item.label)}
                      style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', fontFamily: sans, fontSize: 18, fontWeight: 600, color: dark }}
                    >
                      {item.label}
                      <span style={{ transform: mobileExpanded === item.label ? 'rotate(180deg)' : 'none', transition: 'transform .2s', display: 'inline-flex' }}>
                        <ChevronDown size={20} />
                      </span>
                    </button>
                    {mobileExpanded === item.label && (
                      <div style={{ paddingBottom: 16 }}>
                        {item.children.map(child => (
                          <a key={child.label} href={child.href} onClick={() => setMobileOpen(false)}
                            style={{ display: 'block', padding: '14px 0 14px 20px', fontFamily: sans, fontSize: 15, fontWeight: 400, color: '#545454', borderBottom: '1px solid #F2F2F2', textDecoration: 'none' }}>
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a href={item.href} onClick={() => setMobileOpen(false)}
                    style={{ display: 'flex', alignItems: 'center', padding: '20px 0', fontFamily: sans, fontSize: 18, fontWeight: 600, color: dark, textDecoration: 'none' }}>
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <div style={{ padding: '24px 0' }}>
              <a href={ctaHref} onClick={() => setMobileOpen(false)}
                style={{ display: 'inline-flex', background: dark, color: '#fff', fontFamily: sans, fontSize: 14, fontWeight: 600, padding: '14px 28px', textDecoration: 'none' }}>
                {ctaLabel}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default MainHeader;
