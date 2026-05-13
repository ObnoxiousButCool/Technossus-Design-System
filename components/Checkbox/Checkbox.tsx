'use client';

import React from 'react';

// Asset URLs from Figma (node 2398-3002)
const imgChecked   = '/assets/a58ccd91e94f87dd303b813745ef82cf9f12ea7c.svg';  // filled red checkbox
const imgUnchecked = '/assets/80e18f3fa88e038d81acec091916f62b3ff1c41e.svg';  // red outline checkbox

export interface CheckboxProps {
  /** Controlled checked state */
  checked?: boolean;
  /** Default value for uncontrolled usage */
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  /** Accessible label (passed to aria-label if no visible label) */
  label?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function Checkbox({
  checked,
  defaultChecked = false,
  onChange,
  label,
  disabled = false,
  className,
  style,
}: CheckboxProps) {
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
  const isControlled = checked !== undefined;
  const isChecked    = isControlled ? checked : internalChecked;

  const handleClick = () => {
    if (disabled) return;
    const next = !isChecked;
    if (!isControlled) setInternalChecked(next);
    onChange?.(next);
  };

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={isChecked}
      aria-label={label}
      onClick={handleClick}
      disabled={disabled}
      data-node-id={isChecked ? '2398:3001' : '2398:3000'}
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 24,
        height: 24,
        padding: 0,
        background: 'none',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        flexShrink: 0,
        ...style,
      }}
    >
      <img
        src={isChecked ? imgChecked : imgUnchecked}
        alt={isChecked ? 'Checked' : 'Unchecked'}
        style={{ width: 24, height: 24, display: 'block', pointerEvents: 'none' }}
      />
    </button>
  );
}

export default Checkbox;
