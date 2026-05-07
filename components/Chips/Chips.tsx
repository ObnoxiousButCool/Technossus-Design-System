import React from 'react';

type ChipsMode = 'dark' | 'light';

interface ChipItem {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

interface ChipsProps {
  mode?: ChipsMode;
  items: ChipItem[];
  className?: string;
}

const fontSans = '"General Sans", system-ui, -apple-system, sans-serif';

export function Chips({ mode = 'light', items, className = '' }: ChipsProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        alignItems: 'center',
      }}
    >
      {items.map((item, i) => {
        const isActive = item.active;
        const isDark = mode === 'dark';

        let bg: string;
        let color: string;
        let border: string;

        if (isActive) {
          bg = '#ED2939';
          color = '#FFFFFF';
          border = '1px solid #ED2939';
        } else if (isDark) {
          bg = 'transparent';
          color = '#E1E0E0';
          border = '1px solid #5C5C5C';
        } else {
          bg = 'transparent';
          color = '#5C5C5C';
          border = '1px solid #C6C6C7';
        }

        return (
          <button
            key={i}
            onClick={item.onClick}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '32px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: bg,
              color,
              border,
              fontFamily: fontSans,
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '20px',
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

export type { ChipsProps, ChipItem, ChipsMode };
export default Chips;
