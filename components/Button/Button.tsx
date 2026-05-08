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
    fontWeight: 700,
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '0px',
    opacity: disabled ? 0.5 : 1,
    transition: 'opacity 0.2s, background-color 0.2s',
    whiteSpace: 'nowrap' as const,
  };

  const styles: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
      ...baseStyle,
      backgroundColor: '#ED2939',
      color: '#FFFFFF',
      height: '56px',
      padding: '16px 28px',
      fontSize: '14px',
      lineHeight: '1',
      gap: '10px',
    },
    secondary: {
      ...baseStyle,
      backgroundColor: 'transparent',
      color: '#ED2939',
      height: '56px',
      padding: '16px 28px',
      fontSize: '14px',
      lineHeight: '1',
      border: '2px solid #ED2939',
    },
    cta: {
      ...baseStyle,
      backgroundColor: '#1E1E1E',
      color: '#FFFFFF',
      height: '48px',
      padding: '12px 20px',
      fontSize: '14px',
      lineHeight: '1',
    },
    'text-link': {
      ...baseStyle,
      display: 'inline',
      backgroundColor: 'transparent',
      color: '#ED2939',
      fontSize: '14px',
      lineHeight: '1',
      textDecoration: 'underline',
      padding: '0',
      height: 'auto',
      fontWeight: 400,
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
      {variant === 'primary' && <span aria-hidden="true"> →</span>}
    </Tag>
  );
}

export type { ButtonProps, ButtonVariant };
export default Button;
