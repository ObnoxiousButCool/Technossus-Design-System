import React from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const fontSans = '"General Sans", system-ui, -apple-system, sans-serif';

const ChevronIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M6 4L10 8L6 12" stroke="#949494" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          flexWrap: 'wrap',
        }}
      >
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          const isActive = item.active ?? isLast;

          return (
            <React.Fragment key={i}>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                {item.href && !isActive ? (
                  <a
                    href={item.href}
                    style={{
                      fontFamily: fontSans,
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '20px',
                      color: '#949494',
                      textDecoration: 'none',
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <span
                    aria-current={isActive ? 'page' : undefined}
                    style={{
                      fontFamily: fontSans,
                      fontWeight: isActive ? 600 : 500,
                      fontSize: '14px',
                      lineHeight: '20px',
                      color: isActive ? '#ED2939' : '#949494',
                    }}
                  >
                    {item.label}
                  </span>
                )}
              </li>
              {!isLast && (
                <li aria-hidden="true" style={{ display: 'flex', alignItems: 'center' }}>
                  <ChevronIcon />
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

export type { BreadcrumbProps, BreadcrumbItem };
export default Breadcrumb;
