import React from 'react';

interface SearchBarProps {
  placeholder?: string;
  onSubmit?: (value: string) => void;
  className?: string;
}

export function SearchBar({
  placeholder = 'Ask about services, industries, solutions, or case studies',
  onSubmit,
  className,
}: SearchBarProps) {
  const [value, setValue] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={className}
      style={{
        background: '#FFFFFF',
        border: '1px solid #F5F5F5',
        borderRadius: '9999px',
        boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '65px',
        paddingLeft: '25px',
        paddingRight: '17px',
        paddingTop: '21px',
        paddingBottom: '21px',
        width: '100%',
        maxWidth: '1152px',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
        {/* AI star icon */}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
          <path d="M10 2L11.8 7.2L17 9L11.8 10.8L10 16L8.2 10.8L3 9L8.2 7.2L10 2Z" fill="#ED2939" />
          <path d="M16 1L16.9 3.1L19 4L16.9 4.9L16 7L15.1 4.9L13 4L15.1 3.1L16 1Z" fill="#ED2939" />
          <path d="M4 14L4.6 15.4L6 16L4.6 16.6L4 18L3.4 16.6L2 16L3.4 15.4L4 14Z" fill="#ED2939" />
        </svg>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          style={{
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontFamily: '"General Sans", system-ui, sans-serif',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#949494',
            width: '100%',
          }}
        />
      </div>

      {/* Send button */}
      <button
        type="submit"
        style={{
          background: '#1E1E1E',
          borderRadius: '22px',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8px',
          flexShrink: 0,
        }}
        aria-label="Submit search"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </form>
  );
}

export default SearchBar;
