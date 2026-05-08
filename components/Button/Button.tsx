import React from 'react';

// Asset URLs from Figma
const imgArrowForward = 'http://localhost:3845/assets/5ab4759937e9a9e8b7e9cb731f7784df694959c0.svg';

// Design tokens
const sans = '"General Sans", system-ui, -apple-system, sans-serif';
const red = '#ED2939';
const dark1 = '#1B1B1B';

export type ButtonVariant = 'primary' | 'secondary' | 'cta' | 'text-link';

export interface ButtonProps {
  variant?: ButtonVariant;
  label?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function Button({
  variant = 'primary',
  label,
  href,
  onClick,
  disabled = false,
  className = '',
  style,
  children,
}: ButtonProps) {
  const content = children ?? label;

  if (variant === 'primary') {
    const s: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: 56,
      padding: '16px 24px',
      backgroundColor: red,
      color: '#FFFFFF',
      fontFamily: sans,
      fontWeight: 600,
      fontSize: 16,
      lineHeight: '28px',
      letterSpacing: 0,
      textDecoration: 'none',
      border: 'none',
      borderRadius: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      whiteSpace: 'nowrap',
      ...style,
    };
    const Tag = href ? 'a' : 'button';
    return (
      <Tag href={href} onClick={onClick} disabled={!href && disabled} className={className} style={s}>
        <span>{content ?? 'Explore Solutions'}</span>
        <img src={imgArrowForward} alt="" style={{ width: 24, height: 24, display: 'block', flexShrink: 0 }} />
      </Tag>
    );
  }

  if (variant === 'secondary') {
    const s: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 56,
      padding: '16px 24px',
      backgroundColor: 'transparent',
      color: red,
      fontFamily: sans,
      fontWeight: 600,
      fontSize: 16,
      lineHeight: '28px',
      letterSpacing: 0,
      textDecoration: 'none',
      border: `1px solid ${red}`,
      borderRadius: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      whiteSpace: 'nowrap',
      ...style,
    };
    const Tag = href ? 'a' : 'button';
    return (
      <Tag href={href} onClick={onClick} disabled={!href && disabled} className={className} style={s}>
        {content ?? 'See How We Work'}
      </Tag>
    );
  }

  if (variant === 'cta') {
    const s: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: 48,
      padding: '8px 24px',
      backgroundColor: '#1E1E1E',
      color: '#FFFFFF',
      fontFamily: sans,
      fontWeight: 600,
      fontSize: 14,
      lineHeight: '20px',
      letterSpacing: 0,
      textDecoration: 'none',
      border: 'none',
      borderRadius: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      whiteSpace: 'nowrap',
      ...style,
    };
    const Tag = href ? 'a' : 'button';
    return (
      <Tag href={href} onClick={onClick} disabled={!href && disabled} className={className} style={s}>
        {content ?? 'Contact us'}
      </Tag>
    );
  }

  // text-link
  const s: React.CSSProperties = {
    display: 'inline',
    backgroundColor: 'transparent',
    color: red,
    fontFamily: sans,
    fontWeight: 600,
    fontSize: 16,
    lineHeight: '28px',
    letterSpacing: 0,
    textDecoration: 'underline',
    textDecorationStyle: 'solid',
    border: 'none',
    borderRadius: 0,
    padding: 0,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    ...style,
  };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} onClick={onClick} disabled={!href && disabled} className={className} style={s}>
      {content ?? 'Try in AI Studio'}
    </Tag>
  );
}

export default Button;
