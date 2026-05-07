import React from 'react';

type LogoColor = 'dark' | 'white';

interface LogoProps {
  color?: LogoColor;
  width?: number;
  height?: number;
  className?: string;
}

export function Logo({ color = 'dark', width = 180, height = 40, className = '' }: LogoProps) {
  const textColor = color === 'white' ? '#FFFFFF' : '#1E1E1E';
  const dotColor = '#ED2939';

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Technossus"
      role="img"
    >
      {/* Wordmark */}
      <text
        x="0"
        y="29"
        fontFamily='"General Sans", system-ui, -apple-system, sans-serif'
        fontWeight="600"
        fontSize="24"
        fill={textColor}
        letterSpacing="-0.5"
      >
        Technossus
      </text>
      {/* Red accent dot */}
      <circle cx="174" cy="8" r="5" fill={dotColor} />
    </svg>
  );
}

export type { LogoProps, LogoColor };
export default Logo;
