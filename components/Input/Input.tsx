import React, { useId } from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'email' | 'password' | 'tel' | 'number' | 'search';
  error?: string;
  hint?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

const fontSans = '"General Sans", system-ui, -apple-system, sans-serif';

export function Input({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = 'text',
  error,
  hint,
  disabled = false,
  required = false,
  className = '',
}: InputProps) {
  const id = useId();

  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {label && (
        <label
          htmlFor={id}
          style={{
            fontFamily: fontSans,
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '20px',
            color: '#383838',
          }}
        >
          {label}
          {required && (
            <span style={{ color: '#ED2939', marginLeft: '2px' }} aria-hidden="true">*</span>
          )}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        aria-invalid={!!error}
        style={{
          fontFamily: fontSans,
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '24px',
          color: disabled ? '#ADADAD' : '#1E1E1E',
          background: disabled ? '#F9F9F9' : '#FFFFFF',
          border: error ? '1.5px solid #ED2939' : '1.5px solid #C6C6C7',
          borderRadius: '8px',
          height: '48px',
          padding: '12px 16px',
          width: '100%',
          boxSizing: 'border-box',
          outline: 'none',
          cursor: disabled ? 'not-allowed' : 'text',
        }}
        onFocus={(e) => {
          if (!disabled) e.target.style.borderColor = '#ED2939';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = error ? '#ED2939' : '#C6C6C7';
        }}
      />
      {error && (
        <span
          id={`${id}-error`}
          role="alert"
          style={{
            fontFamily: fontSans,
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '16px',
            color: '#ED2939',
          }}
        >
          {error}
        </span>
      )}
      {hint && !error && (
        <span
          id={`${id}-hint`}
          style={{
            fontFamily: fontSans,
            fontWeight: 500,
            fontSize: '12px',
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

export type { InputProps };
export default Input;
