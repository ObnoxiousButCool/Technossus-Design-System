import React from 'react';

export type CTABannerSize = 'large' | 'small';

export interface CTABannerProps {
  size?: CTABannerSize;
  label?: string;
  heading: string;
  body?: string;
  primaryCta?: string;
  secondaryCta?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  /** @deprecated use primaryCta + onPrimary */
  ctaLabel?: string;
  /** @deprecated */
  onCta?: () => void;
  className?: string;
}

const sans  = '"General Sans", system-ui, -apple-system, sans-serif';
const serif = '"Roboto Serif", Georgia, serif';
const red   = '#ED2939';
const dark  = '#1B1B1B';

export function CTABanner({
  size = 'large',
  label,
  heading,
  body,
  primaryCta,
  secondaryCta,
  onPrimary,
  onSecondary,
  ctaLabel,
  onCta,
  className = '',
}: CTABannerProps) {

  const resolvedPrimary  = primaryCta ?? ctaLabel ?? 'Get Started →';
  const resolvedCallback = onPrimary  ?? onCta;

  /* ── Large: dark banner with red top border, left content + right image ── */
  if (size === 'large') {
    return (
      <div className={className} style={{ padding: '0 96px' }}>
        <div style={{ background: dark, position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: red }} />
          <div style={{ padding: 80, display: 'flex', alignItems: 'center', gap: 64 }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
              {label && (
                <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#9B9B9B', margin: 0 }}>
                  {label}
                </p>
              )}
              <h2 style={{ fontFamily: serif, fontSize: 40, lineHeight: '48px', fontWeight: 600, letterSpacing: '-1px', color: '#fff', margin: 0 }}>
                {heading}
              </h2>
              {body && (
                <p style={{ fontFamily: sans, fontSize: 15, lineHeight: 1.7, color: '#B5B5B5', maxWidth: 500, margin: 0 }}>
                  {body}
                </p>
              )}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
                <button onClick={resolvedCallback}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: red, color: '#fff', fontFamily: sans, fontWeight: 700, fontSize: 14, height: 56, padding: '0 28px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                  {resolvedPrimary}
                </button>
                {secondaryCta && (
                  <button onClick={onSecondary}
                    style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 28px', border: '2px solid #fff', color: '#fff', fontFamily: sans, fontWeight: 700, fontSize: 14, background: 'transparent', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                    {secondaryCta}
                  </button>
                )}
              </div>
            </div>
            <div style={{ flex: '0 0 420px', height: 320, background: '#2A2A2A' }} />
          </div>
        </div>
      </div>
    );
  }

  /* ── Small: dark banner with red radial glow ── */
  return (
    <div className={className}
      style={{ background: dark, border: '1px solid #2E2E2E', padding: '36px 40px', display: 'flex', alignItems: 'center', gap: 32, backgroundImage: 'radial-gradient(circle at right,#3A1416 0%,#1B1B1B 60%)' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <h3 style={{ fontFamily: serif, fontWeight: 600, fontSize: 24, lineHeight: 1.3, color: '#fff', margin: 0 }}>
          {heading}
        </h3>
        {body && (
          <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: '#B5B5B5', margin: 0 }}>{body}</p>
        )}
      </div>
      <button onClick={resolvedCallback}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: red, color: '#fff', fontFamily: sans, fontWeight: 700, fontSize: 14, height: 48, padding: '0 20px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0 }}>
        {resolvedPrimary}
      </button>
    </div>
  );
}

export default CTABanner;
