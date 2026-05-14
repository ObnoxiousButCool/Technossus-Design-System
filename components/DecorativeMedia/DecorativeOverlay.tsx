import React from 'react';

/**
 * DecorativeOverlay
 *
 * An absolutely-positioned, non-interactive container for decorative media layers.
 * Requires the parent to have `position: relative` (or absolute/fixed).
 *
 * Use this when you need to stack multiple decorative images or vectors inside
 * a section without affecting layout flow.
 *
 * Supports partial offscreen placement via negative top/right/bottom/left values.
 */
export interface DecorativeOverlayProps {
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
  width?: number | string;
  height?: number | string;
  /** Z-index for the overlay layer. Defaults to 0. */
  zIndex?: number;
  children: React.ReactNode;
}

export function DecorativeOverlay({
  top,
  right,
  bottom,
  left,
  width,
  height,
  zIndex = 0,
  children,
}: DecorativeOverlayProps) {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        top,
        right,
        bottom,
        left,
        width,
        height,
        pointerEvents: 'none',
        zIndex,
      }}
    >
      {children}
    </div>
  );
}
