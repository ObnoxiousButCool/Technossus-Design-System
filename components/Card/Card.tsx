import React from 'react';

// ─── Shared sub-types ────────────────────────────────────────────────────────

interface StatItem {
  value: string;
  label: string;
}

// ─── Dark / Small ────────────────────────────────────────────────────────────

interface CardDarkSmallProps {
  mode: 'dark';
  variant: 'small';
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

// ─── Dark / Large ────────────────────────────────────────────────────────────

interface CardDarkLargeProps {
  mode: 'dark';
  variant: 'large';
  category: string;
  heading: string;
  body: string;
  stats: StatItem[];
  image?: string;
  className?: string;
}

// ─── Dark / Insights ─────────────────────────────────────────────────────────

interface CardDarkInsightsProps {
  mode: 'dark';
  variant: 'insights';
  image: string;
  tags: string;
  title: string;
  excerpt: string;
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
}

// ─── Light / Insights ────────────────────────────────────────────────────────

interface CardLightInsightsProps {
  mode: 'light';
  variant: 'insights';
  image: string;
  tags: string;
  title: string;
  excerpt: string;
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
}

// ─── Light / Deliver ─────────────────────────────────────────────────────────

interface CardLightDeliverProps {
  mode: 'light';
  variant: 'deliver';
  image: string;
  title: string;
  description: string;
  onArrow?: () => void;
  className?: string;
}

export type CardProps =
  | CardDarkSmallProps
  | CardDarkLargeProps
  | CardDarkInsightsProps
  | CardLightInsightsProps
  | CardLightDeliverProps;

// ─── Styles ──────────────────────────────────────────────────────────────────

const baseCardStyle: React.CSSProperties = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
};

const fontSans = '"General Sans", system-ui, -apple-system, sans-serif';
const fontSerif = '"Roboto Serif", Georgia, serif';

// ─── Component ───────────────────────────────────────────────────────────────

export function Card(props: CardProps) {
  if (props.mode === 'dark' && props.variant === 'small') {
    return (
      <div
        className={props.className}
        style={{
          ...baseCardStyle,
          background: '#1E1E1E',
          border: '1px solid #5C5C5C',
          gap: '16px',
          padding: '33px',
          width: '336px',
        }}
      >
        {props.icon && (
          <div style={{ height: '28px', flexShrink: 0 }}>
            {props.icon}
          </div>
        )}
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
          {props.title}
        </h3>
        <p
          style={{
            fontFamily: fontSans,
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#E1E0E0',
            margin: 0,
          }}
        >
          {props.description}
        </p>
      </div>
    );
  }

  if (props.mode === 'dark' && props.variant === 'large') {
    return (
      <div
        className={props.className}
        style={{
          ...baseCardStyle,
          flexDirection: 'row',
          background: '#1E1E1E',
          gap: '61px',
          alignItems: 'center',
          padding: '52px 48px',
          width: '1162px',
          overflow: 'hidden',
        }}
      >
        {/* Left – content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '58px', flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Category pill */}
            <span
              style={{
                background: '#ED2939',
                borderRadius: '37px',
                padding: '4px 12px',
                fontFamily: fontSans,
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#FFFFFF',
                display: 'inline-flex',
                alignSelf: 'flex-start',
              }}
            >
              {props.category}
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h2
                style={{
                  fontFamily: fontSerif,
                  fontWeight: 600,
                  fontSize: '32px',
                  lineHeight: '36px',
                  color: '#FFFFFF',
                  margin: 0,
                }}
              >
                {props.heading}
              </h2>
              <p
                style={{
                  fontFamily: fontSans,
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#E1E0E0',
                  margin: 0,
                }}
              >
                {props.body}
              </p>
            </div>
          </div>
          {/* Stats row */}
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {props.stats.map((stat, i) => (
              <React.Fragment key={i}>
                {i > 0 && (
                  <div style={{ width: '1px', height: '79px', background: '#7C7C7C', flexShrink: 0 }} />
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', whiteSpace: 'nowrap' }}>
                  <span
                    style={{
                      fontFamily: fontSerif,
                      fontWeight: 600,
                      fontSize: '32px',
                      lineHeight: '36px',
                      color: '#ED2939',
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontFamily: fontSans,
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#E1E0E0',
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* Right – image */}
        {props.image && (
          <div style={{ flexShrink: 0, width: '460px', height: '420px', overflow: 'hidden' }}>
            <img
              src={props.image}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        )}
      </div>
    );
  }

  if (props.variant === 'insights') {
    const isDark = props.mode === 'dark';
    return (
      <div
        className={props.className}
        style={{
          ...baseCardStyle,
          background: isDark ? '#1E1E1E' : '#FFFFFF',
          width: '400px',
        }}
      >
        <div style={{ height: '260px', flexShrink: 0, position: 'relative' }}>
          <img
            src={props.image}
            alt=""
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span
              style={{
                fontFamily: fontSans,
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '20px',
                color: isDark ? '#ADADAD' : '#949494',
              }}
            >
              {props.tags}
            </span>
            <h4
              style={{
                fontFamily: fontSans,
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '28px',
                color: isDark ? '#FFFFFF' : '#383838',
                margin: 0,
              }}
            >
              {props.title}
            </h4>
            <p
              style={{
                fontFamily: fontSans,
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '26px',
                color: isDark ? '#E1E0E0' : '#5C5C5C',
                margin: 0,
              }}
            >
              {props.excerpt}
            </p>
          </div>
          <button
            onClick={props.onCta}
            style={{
              border: '1px solid #ED2939',
              background: 'transparent',
              height: '56px',
              width: '180px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              padding: '16px 24px',
            }}
          >
            <span
              style={{
                fontFamily: fontSans,
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '28px',
                color: '#ED2939',
                whiteSpace: 'nowrap',
              }}
            >
              {props.ctaLabel ?? 'See How We Work'}
            </span>
          </button>
        </div>
      </div>
    );
  }

  if (props.mode === 'light' && props.variant === 'deliver') {
    return (
      <div
        className={props.className}
        style={{
          ...baseCardStyle,
          background: '#FFFFFF',
          width: '400px',
        }}
      >
        <div style={{ height: '260px', flexShrink: 0, position: 'relative' }}>
          <img
            src={props.image}
            alt=""
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px', height: '256px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
            <h4
              style={{
                fontFamily: fontSans,
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '28px',
                color: '#383838',
                margin: 0,
              }}
            >
              {props.title}
            </h4>
            <p
              style={{
                fontFamily: fontSans,
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '24px',
                color: '#5C5C5C',
                margin: 0,
              }}
            >
              {props.description}
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={props.onArrow}
              style={{
                border: '1px solid #ED2939',
                borderRadius: '9999px',
                background: 'transparent',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                padding: '1px',
              }}
              aria-label="View more"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="#ED2939" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default Card;
