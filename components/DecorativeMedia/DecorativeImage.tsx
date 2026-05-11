import React from 'react';

/**
 * DecorativeImage
 *
 * A non-interactive, absolutely-positioned decorative image layer.
 * Designed to be nested inside DecorativeOverlay, but can also be used
 * directly inside any position:relative container.
 *
 * Supports opacity, blend modes, and object-fit for faded/blended graphics.
 */
export interface DecorativeImageProps {
  src: string;
  width?: number | string;
  height?: number | string;
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
  /** Opacity multiplier (0–1). Defaults to 1. */
  opacity?: number;
  /** CSS mix-blend-mode for layering effects (e.g. 'color-dodge'). */
  blendMode?: React.CSSProperties['mixBlendMode'];
  /** CSS object-fit for image sizing within its box. */
  objectFit?: React.CSSProperties['objectFit'];
}

export function DecorativeImage({
  src,
  width,
  height,
  top,
  right,
  bottom,
  left,
  opacity = 1,
  blendMode,
  objectFit,
}: DecorativeImageProps) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden
      style={{
        position: 'absolute',
        top,
        right,
        bottom,
        left,
        width,
        height,
        opacity,
        mixBlendMode: blendMode,
        objectFit,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
}
