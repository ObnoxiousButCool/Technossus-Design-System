import React from 'react';
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

  if (reducedMotion) {
    const Tag = as as React.ElementType;
    return (
      <Tag ref={ref} className={className} style={style}>
        {children}
      </Tag>
    );
  }

  const Tag = as as React.ElementType;
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
