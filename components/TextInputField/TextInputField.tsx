'use client';

import React, { useState, useRef, useEffect } from 'react';

const sans = '"General Sans", system-ui, -apple-system, sans-serif';

export type TextInputFieldState = 'Default' | 'Filled' | 'Error' | 'Dropdown';

export interface DropdownOption {
  value: string;
  label: string;
}

export interface TextInputFieldProps {
  state?: TextInputFieldState;
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
  type?: string;
  /** Error message shown below the field when state="Error" */
  errorMessage?: string;
  /** Shows a red asterisk (*) after the label */
  required?: boolean;
  /** Options for state="Dropdown" */
  options?: DropdownOption[];
  /** Controlled selected value for Dropdown */
  selectedValue?: string;
  /** Called when a dropdown option is selected */
  onSelectChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

// Chevron down SVG — matches Figma keyboard_arrow_down (12×7.4px, #383838)
const ChevronDown = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    style={{ flexShrink: 0, pointerEvents: 'none' }}
    aria-hidden="true"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="#383838"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
  options = [],
  selectedValue,
  onSelectChange,
  className,
  style,
}: TextInputFieldProps) {
  const [focused, setFocused] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [internalSelected, setInternalSelected] = useState<string>(selectedValue ?? '');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isError    = state === 'Error';
  const isDropdown = state === 'Dropdown';

  // Keep internal state in sync when controlled value changes
  useEffect(() => {
    if (selectedValue !== undefined) setInternalSelected(selectedValue);
  }, [selectedValue]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!dropdownOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [dropdownOpen]);

  // Figma label defaults per state
  const resolvedLabel = label ?? (state !== 'Default' ? 'Your Name' : "What's this about?");
  const resolvedPlaceholder = placeholder ?? (state !== 'Default' ? 'Jane Doe' : "What's this about");

  // Border colour: red on error, dark on focus, gray otherwise
  const borderColor = isError
    ? '#ED2939'
    : focused || dropdownOpen
    ? '#1E1E1E'
    : '#ADADAD';

  // The displayed value in the dropdown trigger
  const selectedLabel =
    options.find((o) => o.value === internalSelected)?.label ?? resolvedPlaceholder;
  const hasSelection = Boolean(internalSelected);

  const handleOptionSelect = (opt: DropdownOption) => {
    setInternalSelected(opt.value);
    onSelectChange?.(opt.value);
    setDropdownOpen(false);
  };

  // Shared input-box styles (Figma: h=60, pad=18/18/16/16, border-radius=2, bg=#fff)
  const inputBoxStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    border: `1px solid ${borderColor}`,
    borderRadius: 2,
    padding: '18px 16px',
    width: '100%',
    boxSizing: 'border-box',
    minHeight: 60,
    transition: 'border-color 0.15s',
    position: 'relative',
  };

  return (
    <div
      className={className}
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
      {resolvedLabel && (
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
      )}

      {/* ── Dropdown variant ── */}
      {isDropdown ? (
        <div ref={dropdownRef} style={{ width: '100%', position: 'relative' }}>
          {/* Trigger */}
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={dropdownOpen}
            name={name}
            onClick={() => setDropdownOpen((o) => !o)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{
              ...inputBoxStyle,
              cursor: 'pointer',
              justifyContent: 'space-between',
              textAlign: 'left',
              background: '#FFFFFF',
              outline: 'none',
              appearance: 'none',
              WebkitAppearance: 'none',
            }}
          >
            <span
              style={{
                fontFamily: sans,
                fontWeight: 500,
                fontSize: 16,
                lineHeight: '24px',
                color: hasSelection ? '#1E1E1E' : '#ADADAD',
                flex: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {hasSelection ? selectedLabel : resolvedPlaceholder}
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                transform: dropdownOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.18s',
                marginLeft: 8,
              }}
            >
              <ChevronDown />
            </span>
          </button>

          {/* Options list */}
          {dropdownOpen && options.length > 0 && (
            <ul
              role="listbox"
              style={{
                position: 'absolute',
                top: 'calc(100% + 4px)',
                left: 0,
                right: 0,
                background: '#FFFFFF',
                border: '1px solid #ADADAD',
                borderRadius: 2,
                margin: 0,
                padding: '4px 0',
                listStyle: 'none',
                zIndex: 200,
                boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
                maxHeight: 240,
                overflowY: 'auto',
              }}
            >
              {options.map((opt) => {
                const isSelected = opt.value === internalSelected;
                return (
                  <li
                    key={opt.value}
                    role="option"
                    aria-selected={isSelected}
                    onMouseDown={(e) => {
                      e.preventDefault(); // keep focus on trigger
                      handleOptionSelect(opt);
                    }}
                    style={{
                      fontFamily: sans,
                      fontWeight: isSelected ? 600 : 500,
                      fontSize: 16,
                      lineHeight: '24px',
                      color: isSelected ? '#ED2939' : '#1E1E1E',
                      padding: '10px 16px',
                      cursor: 'pointer',
                      backgroundColor: isSelected ? 'rgba(237,41,57,0.05)' : 'transparent',
                      transition: 'background-color 0.1s',
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected)
                        (e.currentTarget as HTMLLIElement).style.backgroundColor = '#F4F4F4';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLLIElement).style.backgroundColor = isSelected
                        ? 'rgba(237,41,57,0.05)'
                        : 'transparent';
                    }}
                  >
                    {opt.label}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ) : (
        /* ── Text input variant (Default / Filled / Error) ── */
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
      )}

      {/* Inline error message */}
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
