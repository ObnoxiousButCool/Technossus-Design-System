import React, { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

interface MainHeaderProps {
  logo?: React.ReactNode;
  navItems?: NavItem[];
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
}

const fontSans = '"General Sans", system-ui, -apple-system, sans-serif';

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const defaultNavItems: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
];

export function MainHeader({
  logo,
  navItems = defaultNavItems,
  ctaLabel = 'Contact Us',
  onCta,
  className = '',
}: MainHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const headerStyle: React.CSSProperties = {
    background: '#010101',
    width: '100%',
    boxSizing: 'border-box',
    position: 'relative',
    zIndex: 100,
  };

  const navLinkStyle: React.CSSProperties = {
    fontFamily: fontSans,
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '28px',
    color: '#FFFFFF',
    textDecoration: 'none',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  };

  return (
    <header className={className} style={headerStyle}>
      {/* Desktop / tablet top bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 48px',
          height: '80px',
          gap: '40px',
        }}
      >
        {/* Logo */}
        <a href="/" aria-label="Technossus home" style={{ flexShrink: 0, display: 'flex' }}>
          {logo ?? (
            <svg width="160" height="32" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="29" fontFamily={fontSans} fontWeight="600" fontSize="24" fill="#FFFFFF" letterSpacing="-0.5">
                Technossus
              </text>
              <circle cx="174" cy="8" r="5" fill="#ED2939" />
            </svg>
          )}
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Main navigation"
          style={{ display: 'flex', gap: '32px', alignItems: 'center', flex: 1 }}
        >
          {navItems.map((item) => (
            <div key={item.label} style={{ position: 'relative' }}>
              {item.children ? (
                <>
                  <button
                    style={navLinkStyle}
                    onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                    aria-expanded={expandedItem === item.label}
                  >
                    {item.label}
                    <ChevronDownIcon />
                  </button>
                  {expandedItem === item.label && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        background: '#1B1B1B',
                        minWidth: '200px',
                        padding: '8px 0',
                        zIndex: 200,
                      }}
                    >
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          style={{
                            ...navLinkStyle,
                            padding: '10px 20px',
                            display: 'block',
                            fontWeight: 500,
                          }}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={item.href} style={navLinkStyle}>
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* CTA button */}
        <button
          onClick={onCta}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#ED2939',
            color: '#FFFFFF',
            border: 'none',
            height: '48px',
            padding: '12px 20px',
            borderRadius: '8px',
            fontFamily: fontSans,
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '20px',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          {ctaLabel}
          <ArrowIcon />
        </button>

        {/* Mobile hamburger */}
        <button
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#FFFFFF',
            cursor: 'pointer',
            padding: '4px',
            display: 'none',
          }}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          style={{
            background: '#1B1B1B',
            padding: '24px 24px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
          }}
        >
          {navItems.map((item) => (
            <div key={item.label} style={{ borderBottom: '1px solid #343434' }}>
              <a
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  ...navLinkStyle,
                  padding: '16px 0',
                  display: 'block',
                }}
              >
                {item.label}
              </a>
            </div>
          ))}
          <button
            onClick={() => { onCta?.(); setMobileOpen(false); }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#ED2939',
              color: '#FFFFFF',
              border: 'none',
              height: '48px',
              padding: '12px 20px',
              borderRadius: '8px',
              fontFamily: fontSans,
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '20px',
              cursor: 'pointer',
              marginTop: '24px',
              alignSelf: 'flex-start',
            }}
          >
            {ctaLabel}
            <ArrowIcon />
          </button>
        </nav>
      )}
    </header>
  );
}

export type { MainHeaderProps, NavItem };
export default MainHeader;
