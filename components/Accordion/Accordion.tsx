'use client';

import React, { useState } from 'react';
import { useBreakpoint } from '../../ts/breakpoints';

// Design tokens
const sans = '"General Sans", system-ui, -apple-system, sans-serif';
const red  = '#ED2939';

// ─── Content types ────────────────────────────────────────────────────────────

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
  items?: AccordionItem[];
  defaultActiveIndex?: number;
  className?: string;
  style?: React.CSSProperties;
}

// ─── Figma default items ──────────────────────────────────────────────────────

const defaultItems: AccordionItem[] = [
  {
    title: 'Continuous Quality & QA Ops Engineering',
    subtitle: 'Quality that lives in the pipeline, from design to release.',
    content: {
      type: 'detail',
      serviceLabel: 'QUALITY ENGINEERING & INDEPENDENT ASSURANCE',
      heading: 'Find out if the idea works before you bet the quarter on it.',
      body: [
        "Objective validation matters most when the team that built the system is also the one reviewing it. Independent quality assurance brings a consistent, unbiased perspective across releases, environments, and system changes surfacing what's easy to miss when engineers are close to the code. ",
        'We work with your product and engineering teams to design test strategies around how you actually build: your stack, release cadence, and the business-critical paths where a failure would hurt most. Coverage gets built to hold across releases, not just pass the next one.',
      ],
      quote: 'Organizations with mature QE practices resolve production defects 6x faster and at 30x lower cost than teams catching the same issues post-release. — NIST',
    },
  },
  {
    title: 'Performance, Resilience & Scalability',
    subtitle: 'Ship version one. Then build the product it needs to become.',
    content: {
      type: 'detail',
      serviceLabel: 'PERFORMANCE, RESILIENCE & SCALABILITY',
      heading: 'Find out if the idea works before you bet the quarter on it.',
      body: ['Objective validation matters most when the team that built the system is also the one reviewing it.'],
    },
  },
  {
    title: 'Quality Engineering & Independent Assurance',
    subtitle: "Your release shouldn't feel like a bet every time.",
    content: {
      type: 'detail',
      serviceLabel: 'QUALITY ENGINEERING & INDEPENDENT ASSURANCE',
      heading: 'Find out if the idea works before you bet the quarter on it.',
      body: [
        "Objective validation matters most when the team that built the system is also the one reviewing it. Independent quality assurance brings a consistent, unbiased perspective across releases, environments, and system changes surfacing what's easy to miss when engineers are close to the code. ",
        'We work with your product and engineering teams to design test strategies around how you actually build: your stack, release cadence, and the business-critical paths where a failure would hurt most. Coverage gets built to hold across releases, not just pass the next one.',
      ],
      quote: 'Organizations with mature QE practices resolve production defects 6x faster and at 30x lower cost than teams catching the same issues post-release. — NIST',
    },
  },
  {
    title: 'Governance, Compliance & Trust Assurance',
    subtitle: 'The product works. Now make it work like it was built today.',
    content: {
      type: 'detail',
      serviceLabel: 'GOVERNANCE, COMPLIANCE & TRUST ASSURANCE',
      heading: 'Find out if the idea works before you bet the quarter on it.',
      body: ['Objective validation matters most when the team that built the system is also the one reviewing it.'],
    },
  },
  {
    title: 'AI-first & Responsible Quality Engineering',
    subtitle: 'Keep the business logic. Lose the technical debt holding it hostage.',
    content: {
      type: 'detail',
      serviceLabel: 'AI-FIRST & RESPONSIBLE QUALITY ENGINEERING',
      heading: 'Find out if the idea works before you bet the quarter on it.',
      body: ['Objective validation matters most when the team that built the system is also the one reviewing it.'],
    },
  },
];

// ─── Detail content panel ─────────────────────────────────────────────────────

function DetailPanel({ content }: { content: DetailContent }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%', flex: 1 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          alignItems: 'flex-start',
          width: '100%',
          flexShrink: 0,
        }}
      >
        <p
          style={{
            fontFamily: sans,
            fontWeight: 600,
            fontSize: 14,
            lineHeight: '20px',
            color: '#949494',
            margin: 0,
            width: '100%',
          }}
        >
          {content.serviceLabel}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start', width: '100%', flexShrink: 0 }}>
          <h3
            style={{
              fontFamily: sans,
              fontWeight: 600,
              fontSize: 24,
              lineHeight: '32px',
              color: red,
              margin: 0,
              width: '100%',
            }}
          >
            {content.heading}
          </h3>
          <p
            style={{
              fontFamily: sans,
              fontWeight: 500,
              fontSize: 16,
              lineHeight: '26px',
              color: '#5C5C5C',
              margin: 0,
              width: '100%',
              whiteSpace: 'pre-wrap',
            }}
          >
            {content.body.join('\n\n')}
          </p>
        </div>
      </div>

      {content.quote && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '14px 16px',
            flexShrink: 0,
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <p
            style={{
              fontFamily: sans,
              fontWeight: 600,
              fontSize: 16,
              lineHeight: '28px',
              color: '#383838',
              margin: 0,
              flex: '1 0 0',
              minWidth: 0,
            }}
          >
            {content.quote}
          </p>
        </div>
      )}
    </div>
  );
}

function SpecPanel({ content }: { content: SpecContent }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 14, lineHeight: '20px', color: red, margin: '0 0 12px' }}>IMPACT</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {content.impact.map((item, i) => (
            <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: '50%', backgroundColor: '#E1E0E0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: sans, fontWeight: 600, fontSize: 11, color: '#5C5C5C' }}>{i + 1}</span>
              <span style={{ fontFamily: sans, fontWeight: 500, fontSize: 14, lineHeight: '22px', color: '#1E1E1E' }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 14, lineHeight: '20px', color: red, margin: '0 0 12px' }}>TECH STACK</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {content.techStack.map((tag) => (
            <span key={tag} style={{ fontFamily: sans, fontWeight: 500, fontSize: 14, lineHeight: '20px', color: '#1E1E1E', border: '1px solid #E1E0E0', borderRadius: 37, padding: '5px 14px' }}>{tag}</span>
          ))}
        </div>
      </div>
      <div>
        <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 14, lineHeight: '20px', color: red, margin: '0 0 12px' }}>CAPABILITIES</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {content.capabilities.map((tag) => (
            <span key={tag} style={{ fontFamily: sans, fontWeight: 500, fontSize: 14, lineHeight: '20px', color: '#1E1E1E', border: '1px solid #E1E0E0', borderRadius: 37, padding: '5px 14px' }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContentPanel({ content }: { content: AccordionContent }) {
  return content.type === 'detail' ? <DetailPanel content={content} /> : <SpecPanel content={content} />;
}

// ─── Accordion item row ───────────────────────────────────────────────────────

function ItemRow({
  item,
  isActive,
  onClick,
}: {
  item: AccordionItem;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-expanded={isActive}
      style={{
        width: '100%',
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        padding: '10px 16px',
        backgroundColor: isActive ? '#F5F5F5' : 'transparent',
        borderLeft: isActive ? `4px solid ${red}` : '4px solid transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        flexShrink: 0,
        boxSizing: 'border-box',
      }}
    >
      {/* Bullet */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <div style={{ backgroundColor: '#E1E0E0', borderRadius: 32, width: 28, height: 28 }} />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: isActive ? red : '#383838',
            borderRadius: 32,
            width: 16,
            height: 16,
          }}
        />
      </div>

      {/* Text */}
      <div style={{ display: 'flex', flex: '1 0 0', flexDirection: 'column', alignItems: 'flex-start', minWidth: 0 }}>
        <span
          style={{
            fontFamily: sans,
            fontWeight: 600,
            fontSize: 20,
            lineHeight: '28px',
            color: '#383838',
            whiteSpace: 'normal',
            wordBreak: 'break-word',
          }}
        >
          {item.title}
        </span>
        <span
          style={{
            fontFamily: sans,
            fontWeight: 500,
            fontSize: 16,
            lineHeight: '24px',
            color: '#5C5C5C',
            width: '100%',
          }}
        >
          {item.subtitle}
        </span>
      </div>
    </button>
  );
}

// ─── Desktop layout ───────────────────────────────────────────────────────────

function DesktopAccordion({
  items,
  activeIndex,
  setActiveIndex,
}: {
  items: AccordionItem[];
  activeIndex: number;
  setActiveIndex: (i: number) => void;
}) {
  const active = items[activeIndex];

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 40 }}>
      {/* Left: list — caps at 573px but scales down on smaller viewports */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'stretch', flexShrink: 0, width: 'min(573px, 48%)' }}>
        {items.map((item, i) => (
          <ItemRow key={i} item={item} isActive={activeIndex === i} onClick={() => setActiveIndex(i)} />
        ))}
      </div>

      {/* Right: expanded panel */}
      <div
        data-node-id="2043:4924"
        style={{
          backgroundColor: '#F5F5F5',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          minHeight: 480,
          alignItems: 'flex-start',
          padding: 24,
          flex: 1,
          minWidth: 0,
          boxSizing: 'border-box',
        }}
      >
        {active && <ContentPanel content={active.content} />}
      </div>
    </div>
  );
}

// ─── Mobile layout ────────────────────────────────────────────────────────────

function MobileAccordion({
  items,
  activeIndex,
  setActiveIndex,
}: {
  items: AccordionItem[];
  activeIndex: number | null;
  setActiveIndex: (i: number | null) => void;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', alignItems: 'stretch' }}>
      {items.map((item, i) => {
        const isActive = activeIndex === i;
        return (
          <React.Fragment key={i}>
            <ItemRow item={item} isActive={isActive} onClick={() => setActiveIndex(isActive ? null : i)} />
            {isActive && (
              <div
                style={{
                  backgroundColor: '#F5F5F5',
                  borderLeft: `4px solid ${red}`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 24,
                  alignItems: 'flex-start',
                  padding: 24,
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              >
                <ContentPanel content={item.content} />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function Accordion({
  items = defaultItems,
  defaultActiveIndex = 2,
  className = '',
  style,
}: AccordionProps) {
  const { isDesktop } = useBreakpoint();
  const [desktopActive, setDesktopActive] = useState(defaultActiveIndex);
  const [mobileActive,  setMobileActive]  = useState<number | null>(null);

  return (
    <div className={className} data-node-id="38:412" style={{ width: '100%', ...style }}>
      {isDesktop ? (
        <DesktopAccordion items={items} activeIndex={desktopActive} setActiveIndex={setDesktopActive} />
      ) : (
        <MobileAccordion items={items} activeIndex={mobileActive} setActiveIndex={setMobileActive} />
      )}
    </div>
  );
}

export default Accordion;
