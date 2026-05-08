import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'cta' | 'text-link';

interface ButtonProps {
  variant?: ButtonVariant;
  label?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const ArrowForwardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function Button({
  variant = 'primary',
  label,
  href,
  onClick,
  disabled = false,
  className = '',
  children,
}: ButtonProps) {
  const content = children ?? label;

  const baseStyle: React.CSSProperties = {
    fontFamily: '"General Sans", system-ui, -apple-system, sans-serif',
    fontWeight: 600,
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    border: 'none',
    opacity: disabled ? 0.5 : 1,
    transition: 'opacity 0.2s, background-color 0.2s',
  };

  const styles: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
      ...baseStyle,
      backgroundColor: '#ED2939',
      color: '#FFFFFF',
      height: '56px',
      padding: '16px 24px',
      borderRadius: '0px',
      fontSize: '16px',
      lineHeight: '28px',
    },
    secondary: {
      ...baseStyle,
      backgroundColor: 'transparent',
      color: '#ED2939',
      height: '56px',
      padding: '16px 24px',
      borderRadius: '0px',
      fontSize: '16px',
      lineHeight: '28px',
      border: '1.5px solid #ED2939',
    },
    cta: {
      ...baseStyle,
      backgroundColor: '#1E1E1E',
      color: '#FFFFFF',
      height: '48px',
      padding: '12px 20px',
      borderRadius: '0px',
      fontSize: '14px',
      lineHeight: '20px',
    },
    'text-link': {
      ...baseStyle,
      backgroundColor: 'transparent',
      color: '#ED2939',
      fontSize: '16px',
      lineHeight: '28px',
      textDecoration: 'underline',
      padding: '0',
      height: 'auto',
    },
  };

  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      href={href}
      onClick={onClick}
      disabled={!href && disabled}
      className={className}
      style={styles[variant]}
    >
      {content}
      {variant === 'primary' && <ArrowForwardIcon />}
    </Tag>
  );
}

export type { ButtonProps, ButtonVariant };
export default Button;
