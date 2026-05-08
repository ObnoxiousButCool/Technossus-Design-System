import React, { useState } from 'react';

type AccordionVariant = 'desktop' | 'mobile';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  variant?: AccordionVariant;
  items: AccordionItem[];
  defaultOpen?: number;
  className?: string;
}

const fontSans = '"General Sans", system-ui, -apple-system, sans-serif';

const PlusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const MinusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export function Accordion({
  variant = 'desktop',
  items,
  defaultOpen,
  className = '',
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen ?? null);

  const isDesktop = variant === 'desktop';

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: isDesktop ? '800px' : '100%',
      }}
    >
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            style={{
              borderBottom: '1px solid #343434',
            }}
          >
            <button
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                padding: isDesktop ? '24px 0' : '20px 0',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span
                style={{
                  fontFamily: fontSans,
                  fontWeight: 600,
                  fontSize: isDesktop ? '20px' : '16px',
                  lineHeight: isDesktop ? '28px' : '24px',
                  color: isOpen ? '#ED2939' : '#1E1E1E',
                  flex: 1,
                }}
              >
                {item.question}
              </span>
              <span
                style={{
                  color: isOpen ? '#ED2939' : '#1E1E1E',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {isOpen ? <MinusIcon /> : <PlusIcon />}
              </span>
            </button>
            {isOpen && (
              <div
                style={{
                  paddingBottom: isDesktop ? '24px' : '20px',
                }}
              >
                <p
                  style={{
                    fontFamily: fontSans,
                    fontWeight: 500,
                    fontSize: isDesktop ? '16px' : '14px',
                    lineHeight: isDesktop ? '24px' : '20px',
                    color: '#5C5C5C',
                    margin: 0,
                  }}
                >
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export type { AccordionProps, AccordionItem, AccordionVariant };
export default Accordion;
