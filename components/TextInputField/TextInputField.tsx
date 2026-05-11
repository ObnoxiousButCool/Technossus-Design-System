import React, { useState } from 'react';

const sans = '"General Sans", system-ui, -apple-system, sans-serif';

export type TextInputFieldState = 'Default' | 'Filled';

export interface TextInputFieldProps {
  state?: TextInputFieldState;
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
  type?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function TextInputField({
  state = 'Default',
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  name,
  type = 'text',
  className,
  style,
}: TextInputFieldProps) {
  const [focused, setFocused] = useState(false);

  // Figma defaults per state
  const resolvedLabel = label ?? (state === 'Filled' ? 'Your Name' : "What's this about?");
  const resolvedPlaceholder = placeholder ?? (state === 'Filled' ? 'Jane Doe' : "What's this about");

  return (
    <div
      className={className}
      data-node-id={state === 'Default' ? '2203:12009' : '2203:12010'}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        alignItems: 'flex-start',
        width: '100%',
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {/* Label */}
      <label
        style={{
          fontFamily: sans,
          fontWeight: 600,
          fontSize: 14,
          lineHeight: '20px',
          color: '#1E1E1E',
          display: 'block',
          width: '100%',
        }}
      >
        {resolvedLabel}
      </label>

      {/* Input */}
      <input
        type={type}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={resolvedPlaceholder}
        onChange={(e) => onChange?.(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          fontFamily: sans,
          fontWeight: 500,
          fontSize: 16,
          lineHeight: '24px',
          color: '#1E1E1E',
          backgroundColor: '#FFFFFF',
          border: `1px solid ${focused ? '#1E1E1E' : '#ADADAD'}`,
          borderRadius: 2,
          padding: '18px 16px',
          width: '100%',
          boxSizing: 'border-box',
          outline: 'none',
          transition: 'border-color 0.15s',
        }}
      />

      <style>{`
        input::placeholder { color: #ADADAD; }
      `}</style>
    </div>
  );
}

export default TextInputField;
