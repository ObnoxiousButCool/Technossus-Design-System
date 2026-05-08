import React from 'react';

// Asset URLs from Figma
const imgQuoteRed   = 'http://localhost:3845/assets/0998def33f700c7cb3694e6d19602e37485c5521.svg';
const imgQuoteWhite = 'http://localhost:3845/assets/6d7dc670fa855e67c9d007a12ccf9dfcf80945cf.svg';

// Design tokens
const sans = '"General Sans", system-ui, -apple-system, sans-serif';

export type TestimonialColor = 'white' | 'red';

export interface TestimonialProps {
  color?: TestimonialColor;
  quote: string;
  authorName: string;
  authorTitle: string;
  /** URL or placeholder — will show a gray box if omitted */
  authorImage?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Testimonial({
  color = 'white',
  quote,
  authorName,
  authorTitle,
  authorImage,
  className,
  style,
}: TestimonialProps) {
  const isRed = color === 'red';

  const bg          = isRed ? '#ED2939' : '#F5F5F5';
  const quoteColor  = isRed ? '#FFFFFF' : '#1B1B1B';
  const accentColor = isRed ? '#FFFFFF' : '#ED2939';

  return (
    <div
      className={className}
      data-node-id={isRed ? '8:401' : '8:301'}
      style={{
        backgroundColor: bg,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 442,
        width: 392,
        padding: 24,
        overflow: 'hidden',
        position: 'relative',
        flexShrink: 0,
        ...style,
      }}
    >
      {/* ── Top: quote icon + quote text ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32, alignItems: 'flex-start', flexShrink: 0, width: '100%' }}>
        {/* Quote icon 30×30 */}
        <div style={{ width: 30, height: 30, position: 'relative', flexShrink: 0, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '3.53%', right: 0, bottom: '3.53%', left: 0 }}>
            <img
              alt=""
              src={isRed ? imgQuoteRed : imgQuoteWhite}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
            />
          </div>
        </div>

        {/* Quote body */}
        <p
          data-node-id={isRed ? '8:305' : '8:94'}
          style={{
            fontFamily: sans,
            fontWeight: 500,
            fontSize: 18,
            lineHeight: '24px',
            color: quoteColor,
            margin: 0,
            minWidth: '100%',
            width: 'min-content',
            ...(isRed ? { height: 212, overflow: 'hidden', textOverflow: 'ellipsis' } : {}),
          }}
        >
          {quote}
        </p>
      </div>

      {/* ── Bottom: author attribution ── */}
      <div
        data-node-id={isRed ? '8:306' : '8:95'}
        style={{
          display: 'flex',
          gap: 12,
          alignItems: isRed ? 'flex-start' : 'center',
          width: '100%',
          flexShrink: 0,
        }}
      >
        {/* Vertical accent bar */}
        <div
          style={{
            width: 3,
            height: 48,
            borderRadius: 7,
            backgroundColor: accentColor,
            flexShrink: 0,
          }}
        />

        {/* Avatar */}
        <div
          style={{
            width: isRed ? 48 : 49,
            height: isRed ? 48 : 49,
            borderRadius: isRed ? 0 : 1,
            overflow: 'hidden',
            backgroundColor: '#FFFFFF',
            flexShrink: 0,
            position: 'relative',
          }}
        >
          {authorImage ? (
            <img
              src={authorImage}
              alt={authorName}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            /* placeholder gray box */
            <div style={{ width: '100%', height: '100%', backgroundColor: '#D0D0D0' }} />
          )}
        </div>

        {/* Name + title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1, minWidth: 0 }}>
          <p
            style={{
              fontFamily: sans,
              fontWeight: 600,
              fontSize: 18,
              lineHeight: 'normal',
              color: isRed ? '#FFFFFF' : '#1B1B1B',
              margin: 0,
              textTransform: 'capitalize',
              width: '100%',
              flexShrink: 0,
            }}
          >
            {authorName}
          </p>
          <p
            style={{
              fontFamily: sans,
              fontWeight: 400,
              fontSize: 14,
              lineHeight: '20px',
              letterSpacing: '0.28px',
              color: isRed ? '#FFFFFF' : '#1B1B1B',
              margin: 0,
              width: isRed ? 269 : '100%',
              flexShrink: 0,
            }}
          >
            {authorTitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
