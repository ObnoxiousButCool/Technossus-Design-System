import React from 'react';

export type TestimonialColor = 'white' | 'red';

interface TestimonialProps {
  color?: TestimonialColor;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage?: string;
  className?: string;
}

const fontSans = '"General Sans", system-ui, -apple-system, sans-serif';
const fontPlusJakarta = '"Plus Jakarta Sans", system-ui, sans-serif';

export function Testimonial({
  color = 'white',
  quote,
  authorName,
  authorTitle,
  authorImage,
  className,
}: TestimonialProps) {
  const isRed = color === 'red';

  const bg          = isRed ? '#ED2939' : '#F5F5F5';
  const quoteColor  = isRed ? '#FFFFFF' : '#1B1B1B';
  const accentColor = isRed ? '#FFFFFF' : '#ED2939';
  const nameColor   = '#1B1B1B';

  return (
    <div
      className={className}
      style={{
        background: bg,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '442px',
        width: '392px',
        padding: '24px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Top block: quote icon + text */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {/* Quote icon */}
        <div style={{ width: '30px', height: '30px', flexShrink: 0 }}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
            <path
              d="M4 22C4 18.134 7.13401 15 11 15V10C5.47715 10 1 14.4772 1 20V28H9V22H4Z"
              fill={accentColor}
            />
            <path
              d="M19 22C19 18.134 22.134 15 26 15V10C20.4772 10 16 14.4772 16 20V28H24V22H19Z"
              fill={accentColor}
            />
          </svg>
        </div>
        <p
          style={{
            fontFamily: fontSans,
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '24px',
            color: quoteColor,
            margin: 0,
            ...(isRed ? { height: '212px', overflow: 'hidden', textOverflow: 'ellipsis' } : {}),
          }}
        >
          {quote}
        </p>
      </div>

      {/* Bottom block: author */}
      <div
        style={{
          display: 'flex',
          gap: '12px',
          alignItems: isRed ? 'flex-start' : 'center',
        }}
      >
        {/* Red accent bar */}
        <div
          style={{
            width: '3px',
            height: '48px',
            borderRadius: '7px',
            background: accentColor,
            flexShrink: 0,
          }}
        />

        {/* Avatar */}
        {authorImage && (
          <div
            style={{
              width: '49px',
              height: '49px',
              borderRadius: '1px',
              overflow: 'hidden',
              background: '#FFFFFF',
              flexShrink: 0,
            }}
          >
            <img
              src={authorImage}
              alt={authorName}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        )}

        {/* Name + title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1, minWidth: 0 }}>
          <span
            style={{
              fontFamily: fontSans,
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: 'normal',
              color: nameColor,
              textTransform: 'capitalize',
            }}
          >
            {authorName}
          </span>
          <span
            style={{
              fontFamily: fontPlusJakarta,
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '0.28px',
              color: nameColor,
            }}
          >
            {authorTitle}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
