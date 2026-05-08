import React from 'react';

// Asset URLs from Figma
const imgVector3    = 'http://localhost:3845/assets/1a6054aabb553cb83405edfefb392e579bcc4d72.svg';
const imgArrowForward = 'http://localhost:3845/assets/5ab4759937e9a9e8b7e9cb731f7784df694959c0.svg';
const imgImage108   = 'http://localhost:3845/assets/d54db829342bc10c2665f6d43218ad53a4d590e5.png';

// Design tokens
const sans  = '"General Sans", system-ui, -apple-system, sans-serif';
const serif = '"Roboto Serif", Georgia, serif';
const red   = '#ED2939';

export type CTABannerSize = 'large' | 'small';

export interface CTABannerProps {
  size?: CTABannerSize;
  /** Eyebrow label (large variant) */
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
  style?: React.CSSProperties;
}

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
  style,
}: CTABannerProps) {
  const resolvedPrimary   = primaryCta  ?? ctaLabel ?? 'Schedule a Strategy Session';
  const resolvedCallback  = onPrimary   ?? onCta;

  /* ── Large variant ─────────────────────────────────────────────────────────── */
  if (size === 'large') {
    return (
      <div
        className={className}
        data-node-id="8:90"
        style={{
          backgroundColor: '#050510',
          display: 'flex',
          justifyContent: 'center',
          overflow: 'hidden',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 80,
          width: 1248,
          position: 'relative',
          ...style,
        }}
      >
        {/* Background wave pattern */}
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            left: -2.41,
            top: -1.74,
            width: 1251.717,
            height: 159.569,
          }}
        >
          <div style={{ transform: 'rotate(-90deg) scaleY(-1)', flexShrink: 0 }}>
            <div style={{ height: 1251.717, position: 'relative', width: 159.569 }}>
              <div style={{ position: 'absolute', top: 0, right: '0.31%', bottom: 0, left: 0 }}>
                <img alt="" src={imgVector3} style={{ display: 'block', width: '100%', height: '100%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div
          data-node-id="31:1258"
          style={{ position: 'absolute', height: 456.269, left: 578.32, top: 8, width: 670.984 }}
        >
          <img
            alt=""
            src={imgImage108}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
            alignItems: 'flex-start',
            position: 'relative',
            flexShrink: 0,
            width: '100%',
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: sans,
              fontWeight: 600,
              fontSize: 16,
              lineHeight: '28px',
              color: '#FFFFFF',
              height: 21,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minWidth: '100%',
              width: 'min-content',
            }}
          >
            {label ?? "LET'S WORK ON IT TOGETHER"}
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              alignItems: 'flex-start',
              width: '100%',
              flexShrink: 0,
            }}
          >
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 600,
                fontSize: 32,
                lineHeight: '36px',
                color: '#FFFFFF',
                margin: 0,
                width: 517.771,
              }}
            >
              {heading}
            </h2>
            {body && (
              <p
                style={{
                  fontFamily: sans,
                  fontWeight: 500,
                  fontSize: 18,
                  lineHeight: '24px',
                  color: '#F5F5F5',
                  margin: 0,
                  width: 619.649,
                }}
              >
                {body}
              </p>
            )}
          </div>

          {/* CTA buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              width: 471,
              flexShrink: 0,
            }}
          >
            <div style={{ display: 'flex', flex: '1 0 0', gap: 16, alignItems: 'flex-start', minWidth: 0 }}>
              {/* Primary */}
              <button
                onClick={resolvedCallback}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 56,
                  padding: '16px 24px',
                  backgroundColor: red,
                  color: '#FFFFFF',
                  fontFamily: sans,
                  fontWeight: 600,
                  fontSize: 16,
                  lineHeight: '28px',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {resolvedPrimary}
              </button>

              {/* Secondary */}
              {secondaryCta && (
                <button
                  onClick={onSecondary}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 56,
                    padding: '16px 24px',
                    backgroundColor: 'transparent',
                    color: red,
                    fontFamily: sans,
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: '28px',
                    border: `1px solid ${red}`,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  {secondaryCta}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── Small variant ─────────────────────────────────────────────────────────── */
  return (
    <div
      className={className}
      data-node-id="31:1262"
      style={{
        backgroundColor: '#171717',
        border: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
        gap: 24,
        alignItems: 'center',
        padding: 49,
        width: 1184,
        position: 'relative',
        ...style,
      }}
    >
      {/* Decorative red glow bottom-right */}
      <div
        data-node-id="31:974"
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(227,27,35,0.1)',
          filter: 'blur(50px)',
          bottom: -79.8,
          right: -80,
          borderRadius: 9999,
          width: 320,
          height: 320,
        }}
      />

      {/* Text content */}
      <div style={{ flex: '1 0 0', position: 'relative', minWidth: 0 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <h2
            data-node-id="31:976"
            style={{
              fontFamily: serif,
              fontWeight: 600,
              fontSize: 32,
              lineHeight: '36px',
              color: '#FFFFFF',
              margin: 0,
              height: 48,
              width: 769.89,
            }}
          >
            {heading}
          </h2>
          {body && (
            <p
              data-node-id="31:977"
              style={{
                fontFamily: sans,
                fontWeight: 500,
                fontSize: 18,
                lineHeight: '24px',
                color: '#F5F5F5',
                margin: 0,
                whiteSpace: 'nowrap',
              }}
            >
              {body}
            </p>
          )}
        </div>
      </div>

      {/* Primary button */}
      <div
        data-node-id="31:978"
        style={{
          backgroundColor: red,
          height: 56,
          position: 'relative',
          flexShrink: 0,
          width: 215,
        }}
      >
        <button
          onClick={resolvedCallback}
          style={{
            display: 'flex',
            gap: 8,
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px 24px',
            width: '100%',
            height: '100%',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              fontFamily: sans,
              fontWeight: 600,
              fontSize: 16,
              lineHeight: '28px',
              color: '#FFFFFF',
              whiteSpace: 'nowrap',
              textAlign: 'center',
            }}
          >
            {resolvedPrimary}
          </span>
          <div style={{ width: 24, height: 24, position: 'relative', flexShrink: 0 }}>
            <img
              alt=""
              src={imgArrowForward}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
            />
          </div>
        </button>
      </div>
    </div>
  );
}

export default CTABanner;
