import React, { useState } from 'react';

// Asset URLs from Figma
const imgStarIcon = 'http://localhost:3845/assets/48d3f461d4f1fb6e204239f98530920c972d5b67.svg';
const imgSendIcon = 'http://localhost:3845/assets/2580e4c1a8b8f63b73573a7293d6016283d423ca.svg';

// Design tokens
const sans = '"General Sans", system-ui, -apple-system, sans-serif';

export interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

export function SearchBar({
  placeholder = 'Ask about services, industries, solutions, or case studies',
  value: controlledValue,
  onChange,
  onSubmit,
  className,
  style,
}: SearchBarProps) {
  const [internalValue, setInternalValue] = useState('');
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setInternalValue(v);
    onChange?.(v);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={className}
      data-node-id="31:857"
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #F5F5F5',
        borderRadius: 9999,
        boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 65,
        paddingLeft: 25,
        paddingRight: 17,
        paddingTop: 21,
        paddingBottom: 21,
        width: '100%',
        maxWidth: 1152,
        overflow: 'hidden',
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {/* Left: star icon + input */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, position: 'relative', flexShrink: 0 }}>
        {/* Figma-provided AI star icon */}
        <div style={{ width: 20, height: 20, position: 'relative', flexShrink: 0 }}>
          <img
            alt=""
            src={imgStarIcon}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
          />
        </div>

        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          aria-label="AI search"
          style={{
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontFamily: sans,
            fontWeight: 500,
            fontSize: 16,
            lineHeight: '24px',
            color: '#949494',
            width: 'auto',
            minWidth: 200,
          }}
        />
      </div>

      {/* Right: send button */}
      <button
        type="submit"
        aria-label="Submit search"
        style={{
          backgroundColor: '#1E1E1E',
          borderRadius: 22,
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          padding: 8,
          flexShrink: 0,
        }}
      >
        <div style={{ width: 24, height: 24, position: 'relative' }}>
          <img
            alt=""
            src={imgSendIcon}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
          />
        </div>
      </button>
    </form>
  );
}

export default SearchBar;
