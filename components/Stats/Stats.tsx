import React from 'react';

// Design tokens
const sans  = '"General Sans", system-ui, -apple-system, sans-serif';
const serif = '"Roboto Serif", Georgia, serif';
const red   = '#ED2939';

export interface StatsProps {
  value: string;
  label: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Stats({ value, label, className, style }: StatsProps) {
  return (
    <div
      className={className}
      data-node-id="31:845"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {/* Display number — Roboto Serif Medium 48px, tracking -0.96px */}
      <span
        style={{
          fontFamily: serif,
          fontWeight: 500,
          fontSize: 48,
          lineHeight: '52px',
          letterSpacing: '-0.96px',
          color: red,
          display: 'block',
        }}
      >
        {value}
      </span>

      {/* Label — General Sans Semibold 20px */}
      <span
        style={{
          fontFamily: sans,
          fontWeight: 600,
          fontSize: 20,
          lineHeight: '28px',
          letterSpacing: 0,
          color: '#949494',
          display: 'block',
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default Stats;
