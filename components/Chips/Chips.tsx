import React from 'react';

// Design tokens
const sans = '"General Sans", system-ui, -apple-system, sans-serif';

export type ChipsMode = 'dark' | 'light';

export interface ChipItem {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export interface ChipsProps {
  /** Single-chip mode: pass mode + label to render a single Figma chip */
  mode?: ChipsMode;
  label?: string;
  /** Multi-chip mode: pass items array */
  items?: ChipItem[];
  className?: string;
  style?: React.CSSProperties;
}

/** Renders a single chip matching the Figma design exactly */
function SingleChip({
  mode = 'dark',
  label = 'AI Adoption Strategy',
  className,
  style,
}: { mode?: ChipsMode; label?: string; className?: string; style?: React.CSSProperties }) {
  const isLight = mode === 'light';

  const chipStyle: React.CSSProperties = isLight
    ? {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderRadius: 37,
        backgroundColor: '#F5F5F5',
        borderBottom: '1px solid #C6C6C7',
        borderLeft: '1px solid #C6C6C7',
        paddingTop: 12,
        paddingBottom: 13,
        paddingLeft: 21,
        paddingRight: 20,
        ...style,
      }
    : {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderRadius: 37,
        backgroundColor: '#383838',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 20,
        paddingRight: 20,
        ...style,
      };

  const textStyle: React.CSSProperties = isLight
    ? {
        fontFamily: sans,
        fontWeight: 500,
        fontSize: 14,
        lineHeight: '20px',
        color: '#1E1E1E',
        whiteSpace: 'nowrap',
        textAlign: 'center',
      }
    : {
        fontFamily: sans,
        fontWeight: 500,
        fontSize: 16,
        lineHeight: '24px',
        color: '#FFFFFF',
        whiteSpace: 'nowrap',
        textAlign: 'center',
      };

  return (
    <div className={className} style={chipStyle} data-node-id={isLight ? '2043:4822' : '31:1458'}>
      <div style={textStyle}>{label}</div>
    </div>
  );
}

/** Full chips group (multiple items) */
export function Chips({ mode = 'light', label, items, className = '', style }: ChipsProps) {
  // Single chip shorthand
  if (!items) {
    return <SingleChip mode={mode} label={label} className={className} style={style} />;
  }

  return (
    <div
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', ...style }}
    >
      {items.map((item, i) => {
        const isDark = mode === 'dark';
        const isActive = item.active;

        let bg: string;
        let color: string;
        let border: string;
        let fontSize: number;
        let lineHeight: string;
        let py: number;
        let px: number;

        if (isActive) {
          bg = '#ED2939';
          color = '#FFFFFF';
          border = '1px solid #ED2939';
          fontSize = isDark ? 16 : 14;
          lineHeight = isDark ? '24px' : '20px';
          py = 12;
          px = 20;
        } else if (isDark) {
          bg = '#383838';
          color = '#FFFFFF';
          border = 'none';
          fontSize = 16;
          lineHeight = '24px';
          py = 12;
          px = 20;
        } else {
          bg = '#F5F5F5';
          color = '#1E1E1E';
          border = '1px solid #C6C6C7';
          fontSize = 14;
          lineHeight = '20px';
          py = 12;
          px = 20;
        }

        return (
          <button
            key={i}
            onClick={item.onClick}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: `${py}px ${px}px`,
              borderRadius: 37,
              backgroundColor: bg,
              color,
              border,
              fontFamily: sans,
              fontWeight: 500,
              fontSize,
              lineHeight,
              cursor: item.onClick ? 'pointer' : 'default',
              whiteSpace: 'nowrap',
              transition: 'background-color 0.2s, color 0.2s',
            }}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

export default Chips;
