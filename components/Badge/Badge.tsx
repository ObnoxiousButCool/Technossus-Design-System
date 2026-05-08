import React from 'react';

type BadgeVariant = 'default' | 'primary' | 'outline';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

const fontSans = '"General Sans", system-ui, -apple-system, sans-serif';

export function Badge({ label, variant = 'default', className = '' }: BadgeProps) {
  const styles: Record<BadgeVariant, React.CSSProperties> = {
    default: {
      background: '#343434',
      color: '#E1E0E0',
      border: 'none',
    },
    primary: {
      background: '#ED2939',
      color: '#FFFFFF',
      border: 'none',
    },
    outline: {
      background: 'transparent',
      color: '#ED2939',
      border: '1px solid #ED2939',
    },
  };

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '24px',
        padding: '2px 10px',
        borderRadius: '9999px',
        fontFamily: fontSans,
        fontWeight: 600,
        fontSize: '12px',
        lineHeight: '16px',
        whiteSpace: 'nowrap',
        ...styles[variant],
      }}
    >
      {label}
    </span>
  );
}

export type { BadgeProps, BadgeVariant };
export default Badge;
