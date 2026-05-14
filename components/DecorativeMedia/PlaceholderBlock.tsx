import React from 'react';

/**
 * PlaceholderBlock
 *
 * A gray placeholder used in sections where final imagery is not yet available.
 * Renders a non-interactive filled rectangle with optional label text.
 *
 * Switch to a real image or DecorativeImage once assets are ready —
 * the dimensions and style props transfer directly.
 */
export interface PlaceholderBlockProps {
  width?: number | string;
  height?: number | string;
  /** Optional text label shown centered in the placeholder. */
  label?: string;
  style?: React.CSSProperties;
}

export function PlaceholderBlock({
  width = '100%',
  height = 200,
  label,
  style,
}: PlaceholderBlockProps) {
  return (
    <div
      aria-hidden
      style={{
        width,
        height,
        background: '#D4D4D4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        ...style,
      }}
    >
      {label && (
        <span
          style={{
            fontFamily: '"General Sans", system-ui, -apple-system, sans-serif',
            fontSize: 12,
            fontWeight: 500,
            color: '#888888',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
