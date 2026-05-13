import React from 'react';
import { useBreakpoint } from '../../ts/breakpoints';

// Asset URLs from Figma
const imgQuoteRed   = '/assets/0998def33f700c7cb3694e6d19602e37485c5521.svg';
const imgQuoteWhite = '/assets/6d7dc670fa855e67c9d007a12ccf9dfcf80945cf.svg';

// Design tokens
const sans = '"General Sans", system-ui, -apple-system, sans-serif';

export type TestimonialColor = 'white' | 'red';

export interface TestimonialProps {
  color?: TestimonialColor;
  quote: string;
  /** @deprecated use authorName */
  name?: string;
  /** @deprecated use authorTitle */
  title?: string;
  authorName?: string;
  authorTitle?: string;
  authorImage?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Testimonial({
  color = 'white',
  quote,
  name,
  title,
  authorName,
  authorTitle,
  authorImage,
  className,
  style,
}: TestimonialProps) {
  const { isMobile } = useBreakpoint();
  const resolvedName  = authorName  ?? name  ?? '';
  const resolvedTitle = authorTitle ?? title ?? '';

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
        minHeight: isMobile ? 'auto' : 442,
        width: '100%',
        padding: isMobile ? 16 : 24,
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {/* Top: quote icon + quote text */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start', width: '100%' }}>
        <div style={{ width: 30, height: 30, position: 'relative', flexShrink: 0, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '3.53%', right: 0, bottom: '3.53%', left: 0 }}>
            <img
              alt=""
              src={isRed ? imgQuoteRed : imgQuoteWhite}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
            />
          </div>
        </div>
        <p
          style={{
            fontFamily: sans,
            fontWeight: 500,
            fontSize: isMobile ? 15 : 18,
            lineHeight: '24px',
            color: quoteColor,
            margin: 0,
            width: '100%',
          }}
        >
          {quote}
        </p>
      </div>

      {/* Bottom: author attribution */}
      <div
        style={{
          display: 'flex',
          gap: 12,
          alignItems: isRed ? 'flex-start' : 'center',
          width: '100%',
          flexShrink: 0,
          marginTop: 24,
        }}
      >
        <div style={{ width: 3, height: 48, borderRadius: 7, backgroundColor: accentColor, flexShrink: 0 }} />
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            overflow: 'hidden',
            backgroundColor: '#FFFFFF',
            flexShrink: 0,
            position: 'relative',
          }}
        >
          {authorImage ? (
            <img src={authorImage} alt={resolvedName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <div style={{ width: '100%', height: '100%', backgroundColor: '#D0D0D0' }} />
          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1, minWidth: 0 }}>
          <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 16, lineHeight: 'normal', color: isRed ? '#FFFFFF' : '#1B1B1B', margin: 0 }}>
            {resolvedName}
          </p>
          <p style={{ fontFamily: sans, fontWeight: 400, fontSize: 13, lineHeight: '20px', color: isRed ? '#FFFFFF' : '#1B1B1B', margin: 0 }}>
            {resolvedTitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
