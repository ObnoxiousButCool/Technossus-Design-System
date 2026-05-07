import React from 'react';

interface StatsProps {
  value: string;
  label: string;
  className?: string;
}

export function Stats({ value, label, className }: StatsProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
      }}
    >
      <span
        style={{
          fontFamily: '"Roboto Serif", Georgia, serif',
          fontWeight: 500,
          fontSize: '48px',
          lineHeight: '52px',
          letterSpacing: '-0.02em',
          color: '#ED2939',
          whiteSpace: 'nowrap',
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontFamily: '"General Sans", system-ui, sans-serif',
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '28px',
          color: '#949494',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default Stats;
