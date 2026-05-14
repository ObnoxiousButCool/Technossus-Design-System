import React from 'react';

// Asset URLs from Figma
const imgGroupDark  = '/assets/f3e451e62d0a62f01f4f1b0698024af87155a795.svg';
const imgGroupWhite = '/assets/923217667e0c1525eeb7dcbbf41a47f9131ef9da.svg';
const imgVector     = '/assets/5debaa76a49f7c9140a5b02e65db6c5c3ce03c29.svg';
const imgVector1    = '/assets/128fdad109b4136371919c890dfdf0ce864d7fd0.svg';

export type LogoColor = 'dark' | 'white';

export interface LogoProps {
  color?: LogoColor;
  className?: string;
  style?: React.CSSProperties;
}

export function Logo({ color = 'dark', className = '', style }: LogoProps) {
  const isWhite = color === 'white';

  return (
    <div
      className={className}
      data-node-id={isWhite ? '40:64' : '40:65'}
      style={{
        height: 50.86,
        width: 306.51,
        overflow: 'hidden',
        position: 'relative',
        ...style,
      }}
    >
      {/* Main wordmark group */}
      <div
        style={{
          position: 'absolute',
          top: '24.85%',
          right: '7.54%',
          bottom: '24.85%',
          left: '8.11%',
        }}
      >
        <img
          alt="Technossus"
          src={isWhite ? imgGroupWhite : imgGroupDark}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
        />
      </div>

      {/* Left accent line */}
      <div style={{ position: 'absolute', top: 0, right: '95.74%', bottom: 0, left: 0 }}>
        <img
          alt=""
          src={imgVector}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
        />
      </div>

      {/* Right accent line */}
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: '95.93%' }}>
        <img
          alt=""
          src={imgVector1}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
        />
      </div>
    </div>
  );
}

export type { LogoProps as LogoPropsType };
export default Logo;
