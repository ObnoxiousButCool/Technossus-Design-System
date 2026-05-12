import React, { useState } from 'react';

const sans = '"General Sans", system-ui, -apple-system, sans-serif';

export type TextInputFieldState = 'Default' | 'Filled' | 'Error';

export interface TextInputFieldProps {
  state?: TextInputFieldState;
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
  type?: string;
  /** Optional error message shown below the field when state="Error" */
  errorMessage?: string;
  /** Shows a red asterisk (*) after the label */
  required?: boolean;
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
  errorMessage,
  required = false,
  className,
  style,
}: TextInputFieldProps) {
  const [focused, setFocused] = useState(false);

  const isError = state === 'Error';

  // Figma defaults per state
  const resolvedLabel       = label       ?? (state !== 'Default' ? 'Your Name'        : "What's this about?");
  const resolvedPlaceholder = placeholder ?? (state !== 'Default' ? 'Jane Doe'         : "What's this about");

  // Border: red on error, dark on focus, gray otherwise
  const borderColor = isError ? '#ED2939' : focused ? '#1E1E1E' : '#ADADAD';

  const nodeId = state === 'Default' ? '2203:12009' : isError ? '2398:2917' : '2203:12010';

  return (
    <div
      className={className}
      data-node-id={nodeId}
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
      {/* Label — red when error, asterisk when required */}
      <label
        style={{
          fontFamily: sans,
          fontWeight: 600,
          fontSize: 14,
          lineHeight: '20px',
          color: isError ? '#ED2939' : '#1E1E1E',
          display: 'block',
          width: '100%',
        }}
      >
        {resolvedLabel}
        {required && <span style={{ color: '#ED2939', marginLeft: 1 }}>*</span>}
      </label>

      {/* Input — red border when error */}
      <input
        type={type}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={resolvedPlaceholder}
        onChange={(e) => onChange?.(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        aria-invalid={isError}
        style={{
          fontFamily: sans,
          fontWeight: 500,
          fontSize: 16,
          lineHeight: '24px',
          color: '#1E1E1E',
          backgroundColor: '#FFFFFF',
          border: `1px solid ${borderColor}`,
          borderRadius: 2,
          padding: '18px 16px',
          width: '100%',
          boxSizing: 'border-box',
          outline: 'none',
          transition: 'border-color 0.15s',
        }}
      />

      {/* Inline error message (optional) */}
      {isError && errorMessage && (
        <p
          style={{
            fontFamily: sans,
            fontWeight: 500,
            fontSize: 12,
            lineHeight: '16px',
            color: '#ED2939',
            margin: 0,
          }}
        >
          {errorMessage}
        </p>
      )}

      <style>{`input::placeholder { color: #ADADAD; }`}</style>
    </div>
  );
}

export default TextInputField;
