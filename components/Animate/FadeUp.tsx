'use client';

/**
 * FadeUp — scroll-triggered fade + translate animation.
 *
 * SSR / SSG behaviour:
 *  - During renderToString  : mounted = false → no animation styles → content
 *    is fully visible in the static HTML so search engines and no-JS users
 *    see all content immediately.
 *  - After client hydration : mounted = true, IntersectionObserver kicks in,
 *    elements that are off-screen start at opacity:0 and animate up as the
 *    user scrolls.  Elements already in the viewport start visible.
 *
 * This avoids the hydration mismatch that would occur if we tried to render
 * opacity:0 on the server but opacity:1 on the first client pass.
 */
import React, { useState, useEffect } from 'react';
import { useReducedMotion, useScrollReveal } from '../../ts/useAnimation';

export interface FadeUpProps {
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  as?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export function FadeUp({
  delay = 0,
  duration = 640,
  distance = 24,
  threshold = 0.12,
  as = 'div',
  className,
  style,
  children,
}: FadeUpProps) {
  const reducedMotion = useReducedMotion();
  const { ref, inView } = useScrollReveal(threshold);

  // `mounted` is false on the server AND on the first synchronous client
  // render (hydration pass), so both produce identical markup — no mismatch.
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const Tag = as as React.ElementType;

  // No animation: reduced motion, SSR, or pre-hydration pass
  if (!mounted || reducedMotion) {
    return (
      <Tag ref={ref} className={className} style={style}>
        {children}
      </Tag>
    );
  }

  // Animated (client only, post-hydration)
  const animStyle: React.CSSProperties = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'none' : `translateY(${distance}px)`,
    transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    ...style,
  };

  return (
    <Tag ref={ref} className={className} style={animStyle}>
      {children}
    </Tag>
  );
}

export default FadeUp;
