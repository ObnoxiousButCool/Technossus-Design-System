import React from 'react';

interface TagProps {
  label: string;
  className?: string;
}

export function Tag({ label, className }: TagProps) {
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        paddingRight: '8px',
        paddingTop: '5px',
        paddingBottom: '5px',
        borderRadius: '37px',
        position: 'relative',
      }}
    >
      {/* Opening bracket decoration */}
      <svg width="5" height="16" viewBox="0 0 5 16" fill="none" aria-hidden="true">
        <path d="M4.5 1L1 8L4.5 15" stroke="#ED2939" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <span
        style={{
          fontFamily: '"General Sans", system-ui, sans-serif',
          fontWeight: 600,
          fontSize: '14px',
          lineHeight: '20px',
          color: '#1E1E1E',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>

      {/* Closing bracket decoration */}
      <svg width="5" height="16" viewBox="0 0 5 16" fill="none" aria-hidden="true" style={{ transform: 'rotate(180deg)' }}>
        <path d="M4.5 1L1 8L4.5 15" stroke="#ED2939" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default Tag;
