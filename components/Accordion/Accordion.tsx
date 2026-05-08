import React, { useState } from 'react';
import { useBreakpoint } from '../../ts/breakpoints';

// ─── Content Types ─────────────────────────────────────────────────────────────

export interface SpecContent {
  type: 'spec';
  impact: string[];
  techStack: string[];
  capabilities: string[];
}

export interface DetailContent {
  type: 'detail';
  serviceLabel: string;
  heading: string;
  body: string[];
  quote?: string;
}

export type AccordionContent = SpecContent | DetailContent;

export interface AccordionItem {
  title: string;
  subtitle: string;
  content: AccordionContent;
}

export type AccordionVariant = 'desktop' | 'mobile';

export interface AccordionProps {
  items: AccordionItem[];
  defaultActiveIndex?: number;
  className?: string;
}

// ─── Design Tokens ─────────────────────────────────────────────────────────────

const fontSans = '"General Sans", system-ui, -apple-system, sans-serif';
const red      = '#ED2939';
const dark     = '#1E1E1E';
const gray     = '#767676';
const border   = '#D4D4D4';
const bgLight  = '#F2F2F2';

// ─── Content Renderers ─────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily:     fontSans,
      fontWeight:     700,
      fontSize:       '11px',
      lineHeight:     '16px',
      letterSpacing:  '0.08em',
      textTransform:  'uppercase',
      color:          red,
      margin:         '0 0 12px',
    }}>
      {children}
    </p>
  );
}

function SpecPanel({ content }: { content: SpecContent }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* IMPACT */}
      <div>
        <SectionLabel>Impact</SectionLabel>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {content.impact.map((item, i) => (
            <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{
                flexShrink:     0,
                width:          '22px',
                height:         '22px',
                borderRadius:   '50%',
                background:     '#E4E4E4',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                fontFamily:     fontSans,
                fontWeight:     600,
                fontSize:       '11px',
                color:          '#5C5C5C',
                marginTop:      '1px',
              }}>
                {i + 1}
              </span>
              <span style={{
                fontFamily: fontSans,
                fontWeight: 400,
                fontSize:   '14px',
                lineHeight: '22px',
                color:      dark,
              }}>
                {item}
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* TECH STACK */}
      <div>
        <SectionLabel>Tech Stack</SectionLabel>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {content.techStack.map((tag) => (
            <span key={tag} style={{
              fontFamily:   fontSans,
              fontWeight:   400,
              fontSize:     '13px',
              lineHeight:   '20px',
              color:        dark,
              border:       `1px solid ${border}`,
              borderRadius: '40px',
              padding:      '5px 14px',
              background:   '#FFFFFF',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* CAPABILITIES */}
      <div>
        <SectionLabel>Capabilities</SectionLabel>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {content.capabilities.map((tag) => (
            <span key={tag} style={{
              fontFamily:   fontSans,
              fontWeight:   400,
              fontSize:     '13px',
              lineHeight:   '20px',
              color:        dark,
              border:       `1px solid ${border}`,
              borderRadius: '40px',
              padding:      '5px 14px',
              background:   '#FFFFFF',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function DetailPanel({ content }: { content: DetailContent }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <p style={{
        fontFamily:    fontSans,
        fontWeight:    500,
        fontSize:      '10px',
        lineHeight:    '14px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color:         '#9B9B9B',
        margin:        0,
      }}>
        {content.serviceLabel}
      </p>

      <h2 style={{
        fontFamily: fontSans,
        fontWeight: 700,
        fontSize:   '24px',
        lineHeight: '32px',
        color:      red,
        margin:     0,
      }}>
        {content.heading}
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {content.body.map((para, i) => (
          <p key={i} style={{
            fontFamily: fontSans,
            fontWeight: 400,
            fontSize:   '15px',
            lineHeight: '26px',
            color:      '#4D4D4D',
            margin:     0,
          }}>
            {para}
          </p>
        ))}
      </div>

      {content.quote && (
        <blockquote style={{
          background:   '#FFFFFF',
          borderRadius: '8px',
          padding:      '20px 24px',
          margin:       0,
          fontFamily:   fontSans,
          fontWeight:   700,
          fontSize:     '14px',
          lineHeight:   '22px',
          color:        dark,
        }}>
          {content.quote}
        </blockquote>
      )}
    </div>
  );
}

function ContentPanel({ content }: { content: AccordionContent }) {
  return content.type === 'spec'
    ? <SpecPanel content={content} />
    : <DetailPanel content={content} />;
}

// ─── Item Row ──────────────────────────────────────────────────────────────────

interface ItemRowProps {
  item: AccordionItem;
  isActive: boolean;
  onClick: () => void;
  isMobile: boolean;
}

function ItemRow({ item, isActive, onClick, isMobile }: ItemRowProps) {
  return (
    <button
      aria-expanded={isActive}
      onClick={onClick}
      style={{
        width:           '100%',
        display:         'flex',
        alignItems:      'flex-start',
        gap:             '16px',
        padding:         isMobile ? '18px 20px' : '20px 24px',
        background:      isActive ? '#FFFFFF' : 'transparent',
        border:          'none',
        borderLeft:      isActive ? `4px solid ${red}` : '4px solid transparent',
        cursor:          'pointer',
        textAlign:       'left',
        boxSizing:       'border-box',
        transition:      'background 0.2s, border-color 0.2s',
      }}
    >
      {/* Bullet */}
      <span style={{
        flexShrink:   0,
        width:        '10px',
        height:       '10px',
        borderRadius: '50%',
        background:   isActive ? red : dark,
        marginTop:    '6px',
        transition:   'background 0.2s',
      }} />

      {/* Text */}
      <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{
          fontFamily: fontSans,
          fontWeight: 700,
          fontSize:   '16px',
          lineHeight: '24px',
          color:      dark,
        }}>
          {item.title}
        </span>
        <span style={{
          fontFamily: fontSans,
          fontWeight: 400,
          fontSize:   '13px',
          lineHeight: '20px',
          color:      gray,
        }}>
          {item.subtitle}
        </span>
      </span>
    </button>
  );
}

// ─── Desktop Layout ─────────────────────────────────────────────────────────────

function DesktopAccordion({ items, activeIndex, setActiveIndex }: {
  items: AccordionItem[];
  activeIndex: number;
  setActiveIndex: (i: number) => void;
}) {
  const active = items[activeIndex];

  return (
    <div style={{
      display:  'flex',
      width:    '100%',
      minHeight: '400px',
    }}>
      {/* Left sidebar */}
      <div style={{
        width:      '38%',
        flexShrink: 0,
        background: bgLight,
        display:    'flex',
        flexDirection: 'column',
      }}>
        {items.map((item, i) => (
          <ItemRow
            key={i}
            item={item}
            isActive={activeIndex === i}
            onClick={() => setActiveIndex(i)}
            isMobile={false}
          />
        ))}
      </div>

      {/* Vertical divider */}
      <div style={{ width: '1px', background: '#E0E0E0', flexShrink: 0 }} />

      {/* Right content panel */}
      <div style={{
        flex:       1,
        background: bgLight,
        padding:    '40px 48px',
        overflowY:  'auto',
      }}>
        {active && <ContentPanel content={active.content} />}
      </div>
    </div>
  );
}

// ─── Mobile Layout ─────────────────────────────────────────────────────────────

function MobileAccordion({ items, activeIndex, setActiveIndex }: {
  items: AccordionItem[];
  activeIndex: number | null;
  setActiveIndex: (i: number | null) => void;
}) {
  return (
    <div style={{ width: '100%', background: bgLight }}>
      {items.map((item, i) => {
        const isActive = activeIndex === i;
        return (
          <div key={i}>
            <ItemRow
              item={item}
              isActive={isActive}
              onClick={() => setActiveIndex(isActive ? null : i)}
              isMobile={true}
            />
            {/* Inline expansion */}
            {isActive && (
              <div style={{
                background: '#FFFFFF',
                borderLeft: `4px solid ${red}`,
                padding:    '24px 20px 28px',
                boxSizing:  'border-box',
              }}>
                <ContentPanel content={item.content} />
              </div>
            )}
            {/* Divider between items */}
            {i < items.length - 1 && !isActive && (
              <div style={{ height: '1px', background: '#E8E8E8', margin: '0 20px' }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Main Export ───────────────────────────────────────────────────────────────

export function Accordion({
  items,
  defaultActiveIndex = 0,
  className = '',
}: AccordionProps) {
  const { isDesktop } = useBreakpoint();
  const [desktopActive, setDesktopActive] = useState(defaultActiveIndex);
  const [mobileActive, setMobileActive]   = useState<number | null>(null);

  return (
    <div className={className} style={{ width: '100%' }}>
      {isDesktop ? (
        <DesktopAccordion
          items={items}
          activeIndex={desktopActive}
          setActiveIndex={setDesktopActive}
        />
      ) : (
        <MobileAccordion
          items={items}
          activeIndex={mobileActive}
          setActiveIndex={setMobileActive}
        />
      )}
    </div>
  );
}

export type { AccordionVariant };
export default Accordion;
