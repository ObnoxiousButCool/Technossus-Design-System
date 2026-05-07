import React from 'react';

type CTABannerSize = 'large' | 'small';

interface CTABannerProps {
  size?: CTABannerSize;
  heading: string;
  subheading?: string;
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
}

const fontSans = '"General Sans", system-ui, -apple-system, sans-serif';
const fontSerif = '"Roboto Serif", Georgia, serif';

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function CTABanner({
  size = 'large',
  heading,
  subheading,
  ctaLabel = 'Explore Solutions',
  onCta,
  className = '',
}: CTABannerProps) {
  if (size === 'large') {
    return (
      <div
        className={className}
        style={{
          background: '#ED2939',
          padding: '80px 48px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
          textAlign: 'center',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '720px' }}>
          <h2
            style={{
              fontFamily: fontSerif,
              fontWeight: 600,
              fontSize: '40px',
              lineHeight: '48px',
              letterSpacing: '-1px',
              color: '#FFFFFF',
              margin: 0,
            }}
          >
            {heading}
          </h2>
          {subheading && (
            <p
              style={{
                fontFamily: fontSans,
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '24px',
                color: 'rgba(255,255,255,0.85)',
                margin: 0,
              }}
            >
              {subheading}
            </p>
          )}
        </div>
        <button
          onClick={onCta}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#FFFFFF',
            color: '#ED2939',
            border: 'none',
            height: '56px',
            padding: '16px 24px',
            borderRadius: '8px',
            fontFamily: fontSans,
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '28px',
            cursor: 'pointer',
          }}
        >
          {ctaLabel}
          <ArrowIcon />
        </button>
      </div>
    );
  }

  return (
    <div
      className={className}
      style={{
        background: '#1E1E1E',
        padding: '40px 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '32px',
        width: '100%',
        boxSizing: 'border-box',
        flexWrap: 'wrap',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
        <h3
          style={{
            fontFamily: fontSans,
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '32px',
            color: '#FFFFFF',
            margin: 0,
          }}
        >
          {heading}
        </h3>
        {subheading && (
          <p
            style={{
              fontFamily: fontSans,
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '24px',
              color: '#ADADAD',
              margin: 0,
            }}
          >
            {subheading}
          </p>
        )}
      </div>
      <button
        onClick={onCta}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: '#ED2939',
          color: '#FFFFFF',
          border: 'none',
          height: '56px',
          padding: '16px 24px',
          borderRadius: '8px',
          fontFamily: fontSans,
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: '28px',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        {ctaLabel}
        <ArrowIcon />
      </button>
    </div>
  );
}

export type { CTABannerProps, CTABannerSize };
export default CTABanner;
