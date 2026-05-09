import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useBreakpoint } from '../../ts/breakpoints';

// Asset URLs from Figma
const imgGroupDark    = 'http://localhost:3845/assets/848a2b3ff5faeffd006796fa2fd67e06f439fc5a.svg';
const imgVectorDark   = 'http://localhost:3845/assets/efd5f1d9f9e1ddeffb9a2c0e8bdb4bf929613739.svg';
const imgVector1Dark  = 'http://localhost:3845/assets/6124ed745a3f456ad8224b80fd39bfef3a22bf3d.svg';
const imgGroupMobile  = 'http://localhost:3845/assets/695666a5f2eb0d5292832164ad938ed7569216fd.svg';
const imgVectorMobile = 'http://localhost:3845/assets/d87fac3a6d6d9e25c67b5a01544bc22857c3f986.svg';
const imgVector1Mobile= 'http://localhost:3845/assets/8b570c1a688d9313d655e94f4df2d62c83009b0e.svg';
const imgArrowForward = 'http://localhost:3845/assets/5ab4759937e9a9e8b7e9cb731f7784df694959c0.svg';
const imgChevronDown  = 'http://localhost:3845/assets/f88d5745dbe17d6eba516dff8c1ec66ec8f95eab.svg';
const imgChevronDownRed = 'http://localhost:3845/assets/872f59963a8db7797238fb9af0174f8aafeeae1e.svg';
const imgDehaze       = 'http://localhost:3845/assets/6e17ae7884a4c0e898213f199f1e02dde4bf9183.svg';
const imgClose        = 'http://localhost:3845/assets/9e2c1bf0fb472642f558f6a71e09a2760043da15.svg';
const imgChevronMobile= 'http://localhost:3845/assets/c1a9ec4c00df07c37e0547669be3582f3fea68da.svg';
const imgChevronMobile2= 'http://localhost:3845/assets/2b83e41f03742bdfe0c3187ec66114fe384b11e1.svg';

// Design tokens
const sans = '"General Sans", system-ui, -apple-system, sans-serif';
const red  = '#ED2939';
const dark = '#383838';

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
  children?: { label: string; href: string; description?: string }[];
}

export interface MainHeaderProps {
  navItems?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
  style?: React.CSSProperties;
}

// Figma default nav items
const defaultNavItems: NavItem[] = [
  { label: 'AI Studio', href: '/ai-studio' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'AI Led Business Transformation',  href: '/services/ai-business-transformation',  description: 'Engineering the new operating model.' },
      { label: 'Data Intelligence & Analytics',   href: '/services/data-intelligence-analytics', description: 'Turn into a decision engine.' },
      { label: 'Digital Experience Design',       href: '/services/digital-experience-design',   description: 'Reimagine product, UX and brand.' },
      { label: 'Product Engineering',             href: '/services/product-engineering',         description: 'Ship full-stack at startup speed.' },
      { label: 'Quality Engineering & Automation', href: '/services/quality-engineering',        description: 'Test, observe, accelerate releases.' },
      { label: 'Cloud & Product Modernization',   href: '/services/cloud-product-modernization', description: 'Lift, refactor, and run smarter.' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Healthcare',         href: '/industries/healthcare' },
      { label: 'Financial Services', href: '/industries/financial-services' },
      { label: 'HiTech / SaaS',      href: '/industries/hitech-saas' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Insights',     href: '/insights' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Blog',         href: '/blog' },
    ],
  },
  { label: 'About Us',  href: '/about' },
  { label: 'Careers',   href: '/careers' },
];

// ── Mega menu link with hover animation ─────────────────────────────────────
function MegaMenuLink({ child, onClose }: { child: { label: string; href: string; description?: string }; onClose: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={child.href}
      onClick={onClose}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ display: 'flex', flexDirection: 'column', gap: 8, textDecoration: 'none', whiteSpace: 'nowrap' }}
    >
      <span style={{ fontFamily: sans, fontWeight: 600, fontSize: 20, lineHeight: '28px', color: isHovered ? red : dark, transition: 'color 0.15s ease' }}>
        {child.label}
      </span>
      {child.description && (
        <span style={{ fontFamily: sans, fontWeight: 500, fontSize: 16, lineHeight: '24px', color: isHovered ? '#ED2939' : '#949494', transition: 'color 0.15s ease' }}>
          {child.description}
        </span>
      )}
    </a>
  );
}

export function MainHeader({
  navItems = defaultNavItems,
  ctaLabel = 'Contact us',
  ctaHref  = '/contact',
  className = '',
  style,
}: MainHeaderProps) {
  const { isMobile } = useBreakpoint();
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredNav,   setHoveredNav]   = useState<string | null>(null);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>('Service Offerings');
  const [mobilePressed, setMobilePressed] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const isItemActive = (item: NavItem): boolean => {
    const path = location.pathname;
    if (item.children) {
      return item.children.some(c => path.startsWith(c.href)) || path === item.href;
    }
    if (item.href === '/') return path === '/';
    return path === item.href || path.startsWith(item.href + '/');
  };

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

  // ── Desktop logo
  const DesktopLogo = () => (
    <div style={{ height: 32, position: 'relative', flexShrink: 0, width: 192.849, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '24.85%', right: '7.54%', bottom: '24.85%', left: '8.11%' }}>
        <img alt="Technossus" src={imgGroupDark} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
      </div>
      <div style={{ position: 'absolute', top: 0, right: '95.74%', bottom: 0, left: 0 }}>
        <img alt="" src={imgVectorDark} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
      </div>
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: '95.93%' }}>
        <img alt="" src={imgVector1Dark} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
      </div>
    </div>
  );

  // ── Mobile logo
  const MobileLogo = () => (
    <div style={{ height: 24, position: 'relative', flexShrink: 0, width: 144.637, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '24.85%', right: '7.54%', bottom: '24.85%', left: '8.11%' }}>
        <img alt="Technossus" src={imgGroupMobile} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
      </div>
      <div style={{ position: 'absolute', top: 0, right: '95.74%', bottom: 0, left: 0 }}>
        <img alt="" src={imgVectorMobile} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
      </div>
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: '95.93%' }}>
        <img alt="" src={imgVector1Mobile} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
      </div>
    </div>
  );

  return (
    <header
      ref={headerRef}
      className={className}
      data-node-id={isMobile ? '85:590' : '38:842'}
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #EEEEEE',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        ...style,
      }}
    >
      {/* ── Desktop header bar ── */}
      {!isMobile && (
        <div
          style={{
            display: 'flex',
            gap: 40,
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 1,
            paddingLeft: 96,
            paddingRight: 96,
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <a href="/" style={{ display: 'inline-flex', flexShrink: 0, lineHeight: 0 }}>
            <DesktopLogo />
          </a>

          {/* Nav */}
          <nav
            style={{
              flex: '1 0 0',
              minWidth: 0,
              position: 'relative',
              display: 'flex',
            }}
          >
            <div style={{ display: 'flex', gap: 32, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              {navItems.map((item) => {
                const isActive = isItemActive(item);
                const isOpen = openDropdown === item.label;
                const isHovered = hoveredNav === item.label;
                const highlight = isActive || isOpen || isHovered;

                if (item.children) {
                  return (
                    <div key={item.label} style={{ position: 'relative' }}>
                      <button
                        aria-expanded={isOpen}
                        onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                        onMouseEnter={() => setHoveredNav(item.label)}
                        onMouseLeave={() => setHoveredNav(null)}
                        style={{
                          display: 'flex',
                          gap: 4,
                          alignItems: 'center',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: 0,
                          fontFamily: sans,
                          fontWeight: highlight ? 600 : 500,
                          fontSize: 14,
                          lineHeight: '20px',
                          color: highlight ? red : dark,
                          whiteSpace: 'nowrap',
                          transition: 'color 0.15s ease, font-weight 0.15s ease',
                        }}
                      >
                        {item.label}
                        <div style={{ width: 16, height: 16, position: 'relative', flexShrink: 0 }}>
                          <img
                            alt=""
                            src={highlight ? imgChevronDownRed : imgChevronDown}
                            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
                          />
                        </div>
                      </button>
                    </div>
                  );
                }

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onMouseEnter={() => setHoveredNav(item.label)}
                    onMouseLeave={() => setHoveredNav(null)}
                    style={{
                      fontFamily: sans,
                      fontWeight: highlight ? 600 : 500,
                      fontSize: 14,
                      lineHeight: '20px',
                      color: highlight ? red : dark,
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      transition: 'color 0.15s ease',
                    }}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </nav>

          {/* CTA button */}
          <a
            href={ctaHref}
            style={{
              backgroundColor: location.pathname === ctaHref ? red : '#1E1E1E',
              color: '#FFFFFF',
              fontFamily: sans,
              fontWeight: 600,
              fontSize: 14,
              lineHeight: '20px',
              padding: '8px 24px',
              height: 48,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              width: 122,
              boxSizing: 'border-box',
            }}
          >
            {ctaLabel}
          </a>
        </div>
      )}

      {/* ── Desktop mega menu (ActiveExpanded-3: 3 items per row, gap 120px) ── */}
      {!isMobile && openDropdown && (() => {
        const active = navItems.find(i => i.label === openDropdown);
        if (!active?.children) return null;

        // Chunk children into rows of 3 (matches Figma ActiveExpanded-3 layout)
        const rows: typeof active.children[] = [];
        for (let i = 0; i < active.children.length; i += 3) {
          rows.push(active.children.slice(i, i + 3));
        }

        return (
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              backgroundColor: '#FFFFFF',
              borderBottom: '1px solid #EEEEEE',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 48,
              paddingBottom: 63,
              gap: 48,
            }}
          >
            {rows.map((row, rowIdx) => (
              <div key={rowIdx} style={{ display: 'flex', gap: 120, alignItems: 'center', justifyContent: 'center' }}>
                {row.map((child) => (
                  <MegaMenuLink key={child.label} child={child} onClose={() => setOpenDropdown(null)} />
                ))}
              </div>
            ))}
          </div>
        );
      })()}

      {/* ── Mobile default bar ── */}
      {isMobile && !mobileOpen && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 80,
            paddingBottom: 1,
            paddingLeft: 20,
            paddingRight: 20,
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ display: 'flex', gap: 24, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <div style={{ display: 'flex', flex: '1 0 0', flexDirection: 'column', alignItems: 'flex-start', minWidth: 0 }}>
              <a href="/" style={{ display: 'inline-flex', lineHeight: 0 }}>
                <MobileLogo />
              </a>
            </div>
            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', flexShrink: 0 }}
            >
              <div style={{ width: 32, height: 32, position: 'relative' }}>
                <img alt="" src={imgDehaze} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
              </div>
            </button>
          </div>
        </div>
      )}

      {/* ── Mobile expanded menu ── */}
      {isMobile && mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#FFFFFF',
            zIndex: 998,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
            alignItems: 'center',
            paddingBottom: 25,
            paddingTop: 24,
            paddingLeft: 20,
            paddingRight: 20,
            borderBottom: '1px solid #E5E7EB',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          {/* Logo + close */}
          <div style={{ display: 'flex', gap: 24, alignItems: 'center', justifyContent: 'center', flexShrink: 0, width: '100%' }}>
            <div style={{ display: 'flex', flex: '1 0 0', flexDirection: 'column', alignItems: 'flex-start', minWidth: 0 }}>
              <MobileLogo />
            </div>
            <button
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', flexShrink: 0 }}
            >
              <div style={{ width: 32, height: 32, position: 'relative' }}>
                <img alt="" src={imgClose} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
              </div>
            </button>
          </div>

          {/* Nav items */}
          <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexShrink: 0, width: '100%' }}>
            {navItems.map((item) => {
              const isExpanded = mobileExpanded === item.label;

              if (item.children) {
                return (
                  <div key={item.label} style={{ width: '100%' }}>
                    <button
                      aria-expanded={isExpanded}
                      onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: 24,
                        paddingBottom: 24,
                        borderBottom: '1px solid #C6C6C7',
                        background: 'none',
                        border: 'none',
                        borderBottomWidth: 1,
                        borderBottomStyle: 'solid',
                        borderBottomColor: '#C6C6C7',
                        cursor: 'pointer',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: sans,
                          fontWeight: 600,
                          fontSize: 20,
                          lineHeight: '28px',
                          color: dark,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {item.label === 'Services' ? 'Service Offerings' : item.label}
                      </span>
                      <div style={{ width: 24, height: 24, position: 'relative', flexShrink: 0 }}>
                        <img
                          alt=""
                          src={isExpanded ? imgChevronMobile2 : imgChevronMobile}
                          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
                        />
                      </div>
                    </button>

                    {isExpanded && item.children && (
                      <div>
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            onMouseDown={() => setMobilePressed(child.label)}
                            onMouseUp={() => setMobilePressed(null)}
                            onTouchStart={() => setMobilePressed(child.label)}
                            onTouchEnd={() => setMobilePressed(null)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              padding: '20px 16px',
                              fontFamily: sans,
                              fontWeight: 500,
                              fontSize: 18,
                              lineHeight: '24px',
                              color: mobilePressed === child.label ? red : dark,
                              textDecoration: 'none',
                              whiteSpace: 'nowrap',
                              backgroundColor: mobilePressed === child.label ? '#F5F5F5' : 'transparent',
                              transition: 'color 0.1s ease, background-color 0.1s ease',
                            }}
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div
                  key={item.label}
                  style={{ width: '100%', borderBottom: '1px solid #C6C6C7' }}
                >
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    onMouseDown={() => setMobilePressed(item.label)}
                    onMouseUp={() => setMobilePressed(null)}
                    onTouchStart={() => setMobilePressed(item.label)}
                    onTouchEnd={() => setMobilePressed(null)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingTop: 24,
                      paddingBottom: 24,
                      width: '100%',
                      backgroundColor: mobilePressed === item.label ? '#F5F5F5' : 'transparent',
                      transition: 'background-color 0.1s ease',
                    }}
                  >
                    <span
                      style={{
                        flex: '1 0 0',
                        fontFamily: sans,
                        fontWeight: 600,
                        fontSize: 20,
                        lineHeight: '28px',
                        color: mobilePressed === item.label ? red : dark,
                        textDecoration: 'none',
                        transition: 'color 0.1s ease',
                      }}
                    >
                      {item.label}
                    </span>
                  </a>
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

export default MainHeader;
