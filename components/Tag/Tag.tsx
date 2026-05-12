import React from 'react';

// Asset URLs from Figma (node 2233-20140)
const imgBracketLeft  = '/assets/a503f8db2ff38d97c46dcf929d8bac29e3db7723.svg';
const imgBracketRight = '/assets/c1e94a65e8e3a307886bea2c5f20cbbca8d072df.svg';

// Design tokens
const sans = '"General Sans", system-ui, -apple-system, sans-serif';

export type TagVariant = 'dark' | 'light';

export interface TagProps {
  label?: string;
  /** 'dark' = black text (#1E1E1E), 'light' = white text (#FFFFFF) */
  variant?: TagVariant;
  className?: string;
  style?: React.CSSProperties;
}

export function Tag({ label = 'INTEGRATED CAPABILITIES', variant = 'dark', className, style }: TagProps) {
  const containerStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    paddingRight: 8,
    paddingTop: 5,
    paddingBottom: 5,
    position: 'relative',
    borderRadius: 37,
    ...style,
  };

  const textStyle: React.CSSProperties = {
    fontFamily: sans,
    fontWeight: 600,
    fontSize: 14,
    lineHeight: '20px',
    letterSpacing: 0,
    color: variant === 'light' ? '#FFFFFF' : '#1E1E1E',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  };

  return (
    <div className={className} style={containerStyle} data-node-id={variant === 'light' ? '2233:20139' : '8:630'}>
      {/* Opening bracket */}
      <div style={{ width: 4.83, height: 16, position: 'relative', flexShrink: 0 }}>
        <img
          alt=""
          src={imgBracketLeft}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
        />
      </div>

      <div style={textStyle}>{label}</div>

      {/* Closing bracket (rotated 180°) */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <div style={{ transform: 'rotate(180deg)' }}>
          <div style={{ width: 4.83, height: 16, position: 'relative' }}>
            <img
              alt=""
              src={imgBracketRight}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tag;
