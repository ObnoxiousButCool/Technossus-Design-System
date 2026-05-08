import React from 'react';

// Design tokens
const sans = '"General Sans", system-ui, -apple-system, sans-serif';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  style?: React.CSSProperties;
}

export function Breadcrumb({ items, className = '', style }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={className} style={style}>
      <ol
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          listStyle: 'none',
          margin: 0,
          padding: 0,
          flexWrap: 'wrap',
        }}
      >
        {items.map((item, i) => {
          const isLast   = i === items.length - 1;
          const isActive = item.active ?? isLast;

          return (
            <React.Fragment key={i}>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                {isActive ? (
                  /* Active state — Figma node 38:434: General Sans Semibold 14px #383838 */
                  <span
                    aria-current="page"
                    data-node-id="38:434"
                    style={{
                      fontFamily: sans,
                      fontWeight: 600,
                      fontSize: 14,
                      lineHeight: '20px',
                      color: '#383838',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.label}
                  </span>
                ) : item.href ? (
                  /* Default state — Figma node 38:454: General Sans Medium 14px #5C5C5C underline */
                  <div
                    data-node-id="38:449"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
                  >
                    <a
                      href={item.href}
                      data-node-id="38:450"
                      style={{
                        fontFamily: sans,
                        fontWeight: 500,
                        fontSize: 14,
                        lineHeight: '20px',
                        color: '#5C5C5C',
                        textDecoration: 'underline',
                        textDecorationStyle: 'solid',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.label}
                    </a>
                  </div>
                ) : (
                  <span
                    style={{
                      fontFamily: sans,
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: '20px',
                      color: '#5C5C5C',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.label}
                  </span>
                )}
              </li>

              {/* Separator — Figma: "/" in General Sans Medium 14px #5C5C5C */}
              {!isLast && (
                <li
                  aria-hidden="true"
                  data-node-id="38:451"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
                >
                  <span
                    data-node-id="38:452"
                    style={{
                      fontFamily: sans,
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: '20px',
                      color: '#5C5C5C',
                    }}
                  >
                    /
                  </span>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
