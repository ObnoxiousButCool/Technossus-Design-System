'use client';

import React, { useId, useState } from 'react';

// Design tokens
const sans = '"General Sans", system-ui, -apple-system, sans-serif';

export type InputState = 'default' | 'filled';

export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'email' | 'password' | 'tel' | 'number' | 'search';
  state?: InputState;
  error?: string;
  hint?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function Input({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = 'text',
  state = 'default',
  error,
  hint,
  disabled = false,
  required = false,
  className = '',
  style,
}: InputProps) {
  const id = useId();
  const isFilled = state === 'filled';

  // Label from Figma: "What's this about?" (default) or "Your Name" (filled)
  const resolvedLabel       = label       ?? (isFilled ? 'Your Name' : "What's this about?");
  const resolvedPlaceholder = placeholder ?? (isFilled ? 'Jane Doe' : "What's this about");

  return (
    <div
      className={className}
      data-node-id={isFilled ? '2203:12010' : '2203:12009'}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        alignItems: 'flex-start',
        width: 704,
        ...style,
      }}
    >
      {/* Label */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '100%',
          flexShrink: 0,
        }}
      >
        <label
          htmlFor={id}
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
          {required && <span style={{ color: '#ED2939', marginLeft: 2 }} aria-hidden="true">*</span>}
        </label>
      </div>

      {/* Input box — Figma: white bg, 1px #ADADAD border, borderRadius 2px, px 16 py 18 */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: error ? '1px solid #ED2939' : '1px solid #ADADAD',
          borderRadius: 2,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          overflow: 'hidden',
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 18,
          paddingBottom: 18,
          width: '100%',
          boxSizing: 'border-box',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: 'flex',
            flex: '1 0 0',
            flexDirection: 'column',
            alignItems: 'flex-start',
            overflow: 'hidden',
            minWidth: 0,
          }}
        >
          <input
            id={id}
            type={type}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            placeholder={resolvedPlaceholder}
            disabled={disabled}
            required={required}
            aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
            aria-invalid={!!error}
            style={{
              fontFamily: sans,
              fontWeight: 500,
              fontSize: 16,
              lineHeight: '24px',
              color: isFilled ? '#1E1E1E' : '#ADADAD',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              width: '100%',
              padding: 0,
              cursor: disabled ? 'not-allowed' : 'text',
            }}
          />
        </div>
      </div>

      {/* Error */}
      {error && (
        <span
          id={`${id}-error`}
          role="alert"
          style={{
            fontFamily: sans,
            fontWeight: 500,
            fontSize: 12,
            lineHeight: '16px',
            color: '#ED2939',
          }}
        >
          {error}
        </span>
      )}

      {/* Hint */}
      {hint && !error && (
        <span
          id={`${id}-hint`}
          style={{
            fontFamily: sans,
            fontWeight: 500,
            fontSize: 12,
            lineHeight: '16px',
            color: '#949494',
          }}
        >
          {hint}
        </span>
      )}
    </div>
  );
}

export default Input;
