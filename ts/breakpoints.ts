import { useState, useEffect } from 'react';

// ─── Breakpoint values (px) ──────────────────────────────────────────────────
export const breakpoints = {
  xs:  320,
  sm:  375,
  md:  430,
  lg:  768,
  xl:  1024,
  '2xl': 1280,
  '3xl': 1440,
  '4xl': 1728,
  '5xl': 1920,
} as const;

export type Breakpoint = keyof typeof breakpoints;

// ─── Grid configuration ──────────────────────────────────────────────────────
export const grid = {
  mobile: {
    columns: 4,
    margin: 16,
    gutter: 16,
    maxWidth: '100%' as const,
  },
  tablet: {
    columns: 8,
    margin: 32,
    gutter: 24,
    maxWidth: '100%' as const,
  },
  desktop: {
    columns: 12,
    margin: 80,
    gutter: 24,
    maxWidth: 1440,
  },
  largeDesktop: {
    columns: 12,
    margin: 80,
    gutter: 24,
    maxWidth: 1728,
  },
} as const;

// ─── Media query strings ─────────────────────────────────────────────────────
export const mq = {
  xs:    `(min-width: ${breakpoints.xs}px)`,
  sm:    `(min-width: ${breakpoints.sm}px)`,
  md:    `(min-width: ${breakpoints.md}px)`,
  lg:    `(min-width: ${breakpoints.lg}px)`,
  xl:    `(min-width: ${breakpoints.xl}px)`,
  '2xl': `(min-width: ${breakpoints['2xl']}px)`,
  '3xl': `(min-width: ${breakpoints['3xl']}px)`,
  '4xl': `(min-width: ${breakpoints['4xl']}px)`,
  '5xl': `(min-width: ${breakpoints['5xl']}px)`,

  // Max-width (mobile-first range queries)
  maxSm:  `(max-width: ${breakpoints.lg - 1}px)`,
  maxMd:  `(max-width: ${breakpoints.xl - 1}px)`,
  maxLg:  `(max-width: ${breakpoints['2xl'] - 1}px)`,
} as const;

// ─── useBreakpoint hook ──────────────────────────────────────────────────────
export interface BreakpointState {
  width: number;
  isMobile: boolean;   // < 768px
  isTablet: boolean;   // 768px – 1023px
  isDesktop: boolean;  // >= 1024px
  isWide: boolean;     // >= 1440px
  isUltraWide: boolean; // >= 1920px
  breakpoint: Breakpoint | null;
}

function getBreakpoint(width: number): Breakpoint | null {
  if (width >= breakpoints['5xl']) return '5xl';
  if (width >= breakpoints['4xl']) return '4xl';
  if (width >= breakpoints['3xl']) return '3xl';
  if (width >= breakpoints['2xl']) return '2xl';
  if (width >= breakpoints.xl)     return 'xl';
  if (width >= breakpoints.lg)     return 'lg';
  if (width >= breakpoints.md)     return 'md';
  if (width >= breakpoints.sm)     return 'sm';
  if (width >= breakpoints.xs)     return 'xs';
  return null;
}

function getState(width: number): BreakpointState {
  return {
    width,
    isMobile:    width < breakpoints.lg,
    isTablet:    width >= breakpoints.lg && width < breakpoints.xl,
    isDesktop:   width >= breakpoints.xl,
    isWide:      width >= breakpoints['3xl'],
    isUltraWide: width >= breakpoints['5xl'],
    breakpoint:  getBreakpoint(width),
  };
}

export function useBreakpoint(): BreakpointState {
  const [state, setState] = useState<BreakpointState>(() => getState(1280));

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let rafId: number;
    const handler = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setState(getState(window.innerWidth));
      });
    };

    setState(getState(window.innerWidth));
    window.addEventListener('resize', handler, { passive: true });
    return () => {
      window.removeEventListener('resize', handler);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return state;
}

export default breakpoints;
