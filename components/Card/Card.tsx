'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useBreakpoint } from '../../ts/breakpoints';
import { resolveImageSrc, type ImageSource } from '../../ts/imageSrc';

// Asset URLs from Figma
const imgHeroPhoto     = '/assets/fbbad1d37f7a4e076de4d16631dc6863c6c4444a.png';
const imgPhoto2Dark    = '/assets/11485e6d5400122979be42e072e5eb53cb43660e.png';
const imgPhoto2Light   = '/assets/841d1956c23918ec138a2eef41ff5a34b6b981e1.png';
const imgFeaturedPhoto = '/assets/8b5b322290a3502aa74e1a09d670545080a3d3a8.png';
const imgContainerSvg  = '/assets/f6fd2f419935273b9e66a4b9c11731de18271c48.svg';
const imgIconSvg       = '/assets/da42ce3d86cd28e1121776ec014cdcdbe6f8208e.svg';
const imgContainerSvg1 = '/assets/487c967a36fb2b5113f573275756c62f0ec9a2fb.svg';
const imgArrowForward  = '/assets/5ab4759937e9a9e8b7e9cb731f7784df694959c0.svg';

const sans  = '"General Sans", system-ui, -apple-system, sans-serif';
const serif = '"Roboto Serif", Georgia, serif';
const red   = '#ED2939';

type CardImageSource = ImageSource;

// ─── Prop types ──────────────────────────────────────────────────────────────

interface StatItem { value: string; label: string }

interface CardDarkSmallProps {
  mode: 'dark'; type: 'small';
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  style?: React.CSSProperties;
}

interface CardDarkMediumProps {
  mode: 'dark'; type: 'medium';
  icon?: CardImageSource;
  category?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

interface CardDarkLargeProps {
  mode: 'dark'; type: 'large';
  category?: string;
  heading?: string;
  body?: string;
  stats?: StatItem[];
  image?: CardImageSource;
  hideImageOnTablet?: boolean;
  onPrimary?: () => void;
  onSecondary?: () => void;
  primaryLabel?: string;
  secondaryLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

interface CardDarkInsightsProps {
  mode: 'dark'; type: 'insights';
  image?: CardImageSource;
  tags?: string;
  title?: string;
  excerpt?: string;
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

interface CardLightInsightsProps {
  mode: 'light'; type: 'insights';
  image?: CardImageSource;
  tags?: string;
  title?: string;
  excerpt?: string;
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

interface CardLightDeliverProps {
  mode: 'light'; type: 'deliver';
  image?: CardImageSource;
  title?: string;
  description?: string;
  onArrow?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

interface CardLightLargeProps {
  mode: 'light'; type: 'large';
  heading?: string;
  body?: string[];
  image?: CardImageSource;
  className?: string;
  style?: React.CSSProperties;
}

interface CardLightFeaturedProps {
  mode: 'light'; type: 'featured';
  /** Cover image shown on the right */
  image?: CardImageSource;
  /** Stack the content and image vertically on tablet layouts. */
  stackOnTablet?: boolean;
  /** Red top badge, e.g. 'FEATURED BY TECHNOSSUS' */
  badge?: string;
  /** Category line, e.g. 'FINTECH • PLATFORM MODERNIZATION' */
  category?: string;
  title?: string;
  description?: string;
  /** Avatar initials, e.g. 'DR' */
  authorInitials?: string;
  authorName?: string;
  authorRole?: string;
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

interface CardDarkAcceleratorsProps {
  mode: 'dark'; type: 'accelerators';
  /** Cover image at top of card */
  image?: CardImageSource;
  /** Tech stack pill tags e.g. ['Pinecone', 'Kafka', 'Snowflake', 'dbt'] */
  techTags?: string[];
  /** Category label e.g. 'DATA & INFRASTRUCTURE' */
  category?: string;
  title?: string;
  description?: string;
  /** Floating badge top-left e.g. '• LIVE IN TAS' */
  badge?: string;
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export type CardProps =
  | CardDarkSmallProps
  | CardDarkMediumProps
  | CardDarkLargeProps
  | CardDarkInsightsProps
  | CardDarkAcceleratorsProps
  | CardLightInsightsProps
  | CardLightDeliverProps
  | CardLightLargeProps
  | CardLightFeaturedProps;

// ─── Component ───────────────────────────────────────────────────────────────

export function Card(props: CardProps) {
  const { isMobile, isTablet } = useBreakpoint();
  const [isHovered, setIsHovered] = useState(false);

  // ── Dark / Small ─────────────────────────────────────────────────────────
  if (props.mode === 'dark' && props.type === 'small') {
    return (
      <div
        className={props.className}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          alignItems: 'flex-start',
          backgroundColor: '#1E1E1E',
          border: '1px solid #5C5C5C',
          padding: 33,
          width: '100%',
          boxSizing: 'border-box',
          cursor: 'pointer',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: isHovered ? '0 12px 32px rgba(0,0,0,0.25)' : 'none',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          willChange: 'transform',
          ...props.style,
        }}
      >
        <div style={{ height: 28, width: 28, flexShrink: 0 }}>
          {props.icon ? (
            <>{props.icon}</>
          ) : (
            <img alt="" src={imgIconSvg} style={{ width: '100%', height: '100%', display: 'block', objectFit: 'contain' }} />
          )}
        </div>

        <h3 style={{ fontFamily: sans, fontWeight: 600, fontSize: 24, lineHeight: '32px', color: '#FFFFFF', margin: 0, width: '100%' }}>
          {props.title ?? 'Outcome Driven'}
        </h3>

        <p style={{ fontFamily: sans, fontWeight: 500, fontSize: 16, lineHeight: '24px', color: '#E1E0E0', margin: 0, width: '100%' }}>
          {props.description ?? 'Our systems are meticulously designed to scale operations and unlock new growth opportunities, ensuring measurable impact on your bottom line.'}
        </p>
      </div>
    );
  }

  // ── Dark / Medium ────────────────────────────────────────────────────────
  if (props.mode === 'dark' && props.type === 'medium') {
    return (
      <div
        className={props.className}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
          alignItems: 'flex-start',
          backgroundColor: '#1E1E1E',
          border: '1px solid #5C5C5C',
          backdropFilter: 'blur(10px)',
          padding: 33,
          width: '100%',
          boxSizing: 'border-box',
          cursor: 'pointer',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: isHovered ? '0 12px 32px rgba(0,0,0,0.25)' : 'none',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          willChange: 'transform',
          ...props.style,
        }}
      >
        <div style={{ backgroundColor: '#262626', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          {props.icon ? (
            <img alt="" src={resolveImageSrc(props.icon)} style={{ width: 24, height: 30, objectFit: 'contain' }} />
          ) : (
            <img alt="" src={imgContainerSvg1} style={{ width: 24, height: 30, display: 'block', objectFit: 'contain' }} />
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start', width: '100%' }}>
          <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 14, lineHeight: '20px', color: red, margin: 0 }}>
            {props.category ?? 'FASTER PROCESSING'}
          </p>
          <h3 style={{ fontFamily: sans, fontWeight: 600, fontSize: 24, lineHeight: '32px', color: '#FFFFFF', margin: 0, width: '100%' }}>
            {props.title ?? 'Automate document workflows'}
          </h3>
          <p style={{ fontFamily: sans, fontWeight: 500, fontSize: 16, lineHeight: '24px', color: '#E1E0E0', margin: 0, width: '100%' }}>
            {props.description ?? 'Use advanced machine learning to automatically extract and categorize data from complex documents.'}
          </p>
        </div>

        <button
          onClick={props.onCta}
          style={{ fontFamily: sans, fontWeight: 600, fontSize: 16, lineHeight: '28px', color: red, textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          {props.ctaLabel ?? 'Try in AI Studio'}
        </button>
      </div>
    );
  }

  // ── Dark / Large ─────────────────────────────────────────────────────────
  if (props.mode === 'dark' && props.type === 'large') {
    const stats = props.stats ?? [
      { value: '$50M+', label: 'TOTAL COST SAVING' },
      { value: '20,000+', label: 'ORDERS PLACED SUCCESSFULLY' },
    ];
    return (
      <div
        className={props.className}
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? 32 : 61,
          alignItems: isMobile ? 'flex-start' : 'center',
          backgroundColor: '#1E1E1E',
          overflow: 'hidden',
          padding: isMobile ? '32px 24px' : '52px 48px',
          width: '100%',
          boxSizing: 'border-box',
          ...props.style,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', flex: '1 0 0', gap: 48, alignItems: 'flex-start', minWidth: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
            <div style={{ backgroundColor: red, display: 'inline-flex', alignItems: 'center', padding: '4px 12px', borderRadius: 37, alignSelf: 'flex-start' }}>
              <span style={{ fontFamily: sans, fontWeight: 600, fontSize: 14, lineHeight: '20px', color: '#FFFFFF' }}>
                {props.category ?? 'HEALTHCARE'}
              </span>
            </div>
            <h2 style={{ fontFamily: serif, fontWeight: 600, fontSize: isMobile ? 24 : 32, lineHeight: isMobile ? '32px' : '36px', color: '#FFFFFF', margin: 0 }}>
              {props.heading ?? 'Automating Home Care Operations for Unprecedented Efficiency.'}
            </h2>
            <p style={{ fontFamily: sans, fontWeight: 500, fontSize: 16, lineHeight: '24px', color: '#E1E0E0', margin: 0 }}>
              {props.body ?? 'Transformed high-volume operational workflows with RPA and Smart Rules, eliminating manual bottlenecks.'}
            </p>
          </div>

          <div style={{ display: 'flex', gap: isMobile ? 20 : 32, alignItems: 'center', flexWrap: 'wrap' }}>
            {stats.map((stat, i) => (
              <React.Fragment key={i}>
                {i > 0 && !isMobile && <div style={{ width: 1, height: 60, backgroundColor: '#7C7C7C', flexShrink: 0 }} />}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flexShrink: 0, width: isMobile ? '100%' : undefined }}>
                  <span style={{ fontFamily: serif, fontWeight: 600, fontSize: isMobile ? 28 : 32, lineHeight: '36px', color: red }}>{stat.value}</span>
                  <span style={{ fontFamily: sans, fontWeight: 500, fontSize: isMobile ? 13 : 16, lineHeight: '24px', color: '#E1E0E0' }}>{stat.label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <button onClick={props.onPrimary} style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center', height: 56, padding: '16px 24px', backgroundColor: red, border: 'none', cursor: 'pointer', minWidth: isMobile ? '100%' : 215, boxSizing: 'border-box' }}>
              <span style={{ fontFamily: sans, fontWeight: 600, fontSize: 16, lineHeight: '28px', color: '#FFFFFF' }}>{props.primaryLabel ?? 'View All Case Study'}</span>
              <img alt="" src={imgArrowForward} style={{ width: 24, height: 24, display: 'block' }} />
            </button>
            <button onClick={props.onSecondary} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 56, padding: '16px 24px', backgroundColor: 'transparent', border: `1px solid ${red}`, cursor: 'pointer', minWidth: isMobile ? '100%' : 140, boxSizing: 'border-box' }}>
              <span style={{ fontFamily: sans, fontWeight: 600, fontSize: 16, lineHeight: '28px', color: red }}>{props.secondaryLabel ?? 'View All'}</span>
            </button>
          </div>
        </div>

        {!isMobile && !(isTablet && props.hideImageOnTablet) && (
          <div style={{ height: 400, position: 'relative', flexShrink: 0, width: 400, overflow: 'hidden' }}>
            <img alt="" src={resolveImageSrc(props.image) ?? imgPhoto2Dark} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}
      </div>
    );
  }

  // ── Dark / Insights ──────────────────────────────────────────────────────
  if (props.mode === 'dark' && props.type === 'insights') {
    return (
      <div
        className={props.className}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          backgroundColor: '#1E1E1E',
          width: '100%',
          boxSizing: 'border-box',
          cursor: 'pointer',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: isHovered ? '0 12px 32px rgba(0,0,0,0.18)' : 'none',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          willChange: 'transform',
          ...props.style,
        }}
      >
        <div style={{ height: 220, position: 'relative', flexShrink: 0, width: '100%', overflow: 'hidden', backgroundColor: '#2A2A2A' }}>
          {props.image && <img alt="" src={resolveImageSrc(props.image)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />}
          {!props.image && <img alt="" src={imgHeroPhoto} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 24, width: '100%', boxSizing: 'border-box', flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', flex: 1 }}>
            <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 14, lineHeight: '20px', color: '#ADADAD', margin: 0 }}>
              {props.tags ?? 'FINTECH • PLATFORM MODERNIZATION'}
            </p>
            <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 20, lineHeight: '28px', color: '#FFFFFF', margin: 0 }}>
              {props.title ?? 'Architecting a High-Frequency Trading Engine for Global Markets'}
            </p>
            <p style={{ fontFamily: sans, fontWeight: 500, fontSize: 16, lineHeight: '26px', color: '#E1E0E0', margin: 0 }}>
              {props.excerpt ?? 'We overhauled the legacy infrastructure of a Tier-1 financial institution, reducing latency by 40%…'}
            </p>
          </div>

          <button onClick={props.onCta} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 56, width: 180, padding: '16px 24px', backgroundColor: 'transparent', border: `1px solid ${red}`, cursor: 'pointer', flexShrink: 0 }}>
            <span style={{ fontFamily: sans, fontWeight: 600, fontSize: 16, lineHeight: '28px', color: red, whiteSpace: 'nowrap' }}>
              {props.ctaLabel ?? 'See How We Work'}
            </span>
          </button>
        </div>
      </div>
    );
  }

  // ── Dark / Accelerators ──────────────────────────────────────────────────
  if (props.mode === 'dark' && props.type === 'accelerators') {
    return (
      <div
        className={props.className}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-node-id="2428-3068"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          backgroundColor: '#1E1E1E',
          width: '100%',
          boxSizing: 'border-box',
          cursor: 'pointer',
          position: 'relative',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: isHovered ? '0 12px 32px rgba(0,0,0,0.25)' : 'none',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          willChange: 'transform',
          ...props.style,
        }}
      >
        {/* Cover image */}
        <div style={{ height: 260, position: 'relative', flexShrink: 0, width: '100%', overflow: 'hidden', backgroundColor: '#2A2A2A' }}>
          {props.image && (
            <img
              alt=""
              src={resolveImageSrc(props.image)}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}

          {/* Floating badge */}
          {props.badge && (
            <div
              style={{
                position: 'absolute',
                top: 19,
                left: 18.67,
                backgroundColor: '#FFFFFF',
                padding: '4px 10px',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: sans,
                  fontWeight: 600,
                  fontSize: 12,
                  lineHeight: '18px',
                  color: red,
                  whiteSpace: 'nowrap',
                }}
              >
                {props.badge}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            padding: 24,
            width: '100%',
            boxSizing: 'border-box',
            flex: 1,
          }}
        >
          {/* Tech stack pills */}
          {props.techTags && props.techTags.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {props.techTags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: sans,
                    fontWeight: 500,
                    fontSize: 13,
                    lineHeight: '18px',
                    color: '#858585',
                    backgroundColor: '#181818',
                    border: '1px solid #454545',
                    height: 32,
                    padding: '0 12px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
            {/* Category */}
            {props.category && (
              <p
                style={{
                  fontFamily: sans,
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: '20px',
                  color: '#ADADAD',
                  margin: 0,
                  textTransform: 'uppercase',
                }}
              >
                {props.category}
              </p>
            )}

            {/* Title */}
            <h3
              style={{
                fontFamily: sans,
                fontWeight: 600,
                fontSize: 20,
                lineHeight: '28px',
                color: '#FFFFFF',
                margin: 0,
              }}
            >
              {props.title ?? 'Intelligent Data Platform'}
            </h3>

            {/* Description */}
            {props.description && (
              <p
                style={{
                  fontFamily: sans,
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: '24px',
                  color: '#E1E0E0',
                  margin: 0,
                }}
              >
                {props.description}
              </p>
            )}
          </div>

          {/* CTA */}
          <button
            onClick={props.onCta}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 56,
              width: 180,
              padding: '16px 24px',
              backgroundColor: 'transparent',
              border: `1px solid ${red}`,
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: sans,
                fontWeight: 600,
                fontSize: 16,
                lineHeight: '28px',
                color: red,
                whiteSpace: 'nowrap',
              }}
            >
              {props.ctaLabel ?? 'Try Now'}
            </span>
          </button>
        </div>
      </div>
    );
  }

  // ── Light / Insights ─────────────────────────────────────────────────────
  if (props.mode === 'light' && props.type === 'insights') {
    return (
      <div
        className={props.className}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          backgroundColor: '#FFFFFF',
          width: '100%',
          boxSizing: 'border-box',
          cursor: 'pointer',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: isHovered ? '0 12px 32px rgba(0,0,0,0.10)' : 'none',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          willChange: 'transform',
          ...props.style,
        }}
      >
        <div style={{ height: 220, position: 'relative', flexShrink: 0, width: '100%', overflow: 'hidden', backgroundColor: '#D4D4D4' }}>
          {props.image && <img alt="" src={resolveImageSrc(props.image)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 24, width: '100%', boxSizing: 'border-box', flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', flex: 1 }}>
            <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 14, lineHeight: '20px', color: '#949494', margin: 0 }}>
              {props.tags ?? 'FINTECH • PLATFORM MODERNIZATION'}
            </p>
            <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 20, lineHeight: '28px', color: '#383838', margin: 0 }}>
              {props.title ?? 'Architecting a High-Frequency Trading Engine for Global Markets'}
            </p>
            <p style={{ fontFamily: sans, fontWeight: 500, fontSize: 16, lineHeight: '26px', color: '#5C5C5C', margin: 0 }}>
              {props.excerpt ?? 'We overhauled the legacy infrastructure of a Tier-1 financial institution, reducing latency by 40%…'}
            </p>
          </div>

          <button onClick={props.onCta} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 56, width: 180, padding: '16px 24px', backgroundColor: 'transparent', border: `1px solid ${red}`, cursor: 'pointer', flexShrink: 0 }}>
            <span style={{ fontFamily: sans, fontWeight: 600, fontSize: 16, lineHeight: '28px', color: red, whiteSpace: 'nowrap' }}>
              {props.ctaLabel ?? 'See How We Work'}
            </span>
          </button>
        </div>
      </div>
    );
  }

  // ── Light / Deliver ──────────────────────────────────────────────────────
  if (props.mode === 'light' && props.type === 'deliver') {
    return (
      <div
        className={props.className}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          backgroundColor: '#FFFFFF',
          width: '100%',
          boxSizing: 'border-box',
          cursor: 'pointer',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: isHovered ? '0 8px 24px rgba(0,0,0,0.08)' : 'none',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          willChange: 'transform',
          ...props.style,
        }}
      >
        <div style={{ height: 220, position: 'relative', flexShrink: 0, width: '100%', overflow: 'hidden', backgroundColor: '#D4D4D4' }}>
          {props.image && <img alt="" src={resolveImageSrc(props.image)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 24, width: '100%', boxSizing: 'border-box', flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
            <h4 style={{ fontFamily: sans, fontWeight: 600, fontSize: 20, lineHeight: '28px', color: isHovered ? red : '#383838', margin: 0, transition: 'color 0.2s ease' }}>
              {props.title ?? 'AI Led Transformation'}
            </h4>
            <p style={{ fontFamily: sans, fontWeight: 500, fontSize: 16, lineHeight: '24px', color: '#5C5C5C', margin: 0 }}>
              {props.description ?? 'Revolutionizing enterprise workflows through custom LLM integration.'}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
            <button onClick={props.onArrow} aria-label="View more" style={{ border: `1px solid ${red}`, borderRadius: 9999, backgroundColor: 'transparent', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: 0, flexShrink: 0 }}>
              <img alt="" src={imgContainerSvg} style={{ width: 16, height: 16, display: 'block' }} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Light / Large ────────────────────────────────────────────────────────
  if (props.mode === 'light' && props.type === 'large') {
    const bodyParagraphs = props.body ?? [
      'No problem is too complex, and no idea is too early, we listen first, then collaborate to shape the right path forward.',
      'We see partnership as the foundation of progress. That means being transparent, responsive, and focused on outcomes that create lasting value.',
    ];

    return (
      <div
        className={props.className}
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? 32 : 61,
          alignItems: isMobile ? 'flex-start' : 'center',
          backgroundColor: '#F5F5F5',
          overflow: 'hidden',
          padding: isMobile ? '32px 24px' : '52px 48px',
          width: '100%',
          boxSizing: 'border-box',
          ...props.style,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start', flex: 1, minWidth: 0 }}>
          <h2 style={{ fontFamily: sans, fontWeight: 600, fontSize: isMobile ? 20 : 24, lineHeight: isMobile ? '28px' : '32px', color: '#1E1E1E', margin: 0 }}>
            {props.heading ?? 'We approach every inquiry with curiosity, clarity, and a commitment to understanding the real challenge behind it.'}
          </h2>
          {bodyParagraphs.map((para, i) => (
            <p key={i} style={{ fontFamily: sans, fontWeight: 500, fontSize: 16, lineHeight: '24px', color: '#5C5C5C', margin: 0 }}>
              {para}
            </p>
          ))}
        </div>

        {!isMobile && (
          <div style={{ height: 400, position: 'relative', flexShrink: 0, width: 400, overflow: 'hidden' }}>
            <img alt="" src={resolveImageSrc(props.image) ?? imgPhoto2Light} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}
      </div>
    );
  }

  // ── Light / Featured ─────────────────────────────────────────────────────
  if (props.mode === 'light' && props.type === 'featured') {
    const shouldStack = isMobile || (isTablet && props.stackOnTablet);

    return (
      <div
        className={props.className}
        data-node-id="2432-2780"
        style={{
          backgroundColor: '#F5F5F5',
          display: 'flex',
          flexDirection: shouldStack ? 'column' : 'row',
          gap: shouldStack ? 32 : 61,
          alignItems: shouldStack ? 'flex-start' : 'center',
          overflow: 'hidden',
          padding: isMobile ? '32px 24px' : '52px 48px',
          width: '100%',
          boxSizing: 'border-box',
          ...props.style,
        }}
      >
        {/* ── Left: content ── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            alignItems: 'flex-start',
            flex: shouldStack ? 'none' : '1 0 0',
            minWidth: 0,
            width: shouldStack ? '100%' : undefined,
          }}
        >
          {/* Red badge */}
          <div
            style={{
              backgroundColor: red,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4px 8px',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: sans,
                fontWeight: 600,
                fontSize: 14,
                lineHeight: '20px',
                color: '#FFFFFF',
                whiteSpace: 'nowrap',
              }}
            >
              {props.badge ?? 'FEATURED BY TECHNOSSUS'}
            </span>
          </div>

          {/* Text body */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              alignItems: 'flex-start',
              flex: '1 0 0',
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                alignItems: 'flex-start',
                width: '100%',
                flexShrink: 0,
              }}
            >
              {/* Category */}
              <p
                style={{
                  fontFamily: sans,
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: '20px',
                  color: '#949494',
                  margin: 0,
                }}
              >
                {props.category ?? 'FINTECH • PLATFORM MODERNIZATION'}
              </p>

              {/* Title */}
              <h3
                style={{
                  fontFamily: sans,
                  fontWeight: 600,
                  fontSize: 24,
                  lineHeight: '32px',
                  color: '#1E1E1E',
                  margin: 0,
                  width: '100%',
                }}
              >
                {props.title ?? 'Why Prior Authorisation Is the Best First AI Use Case in Healthcare'}
              </h3>
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: sans,
                fontWeight: 500,
                fontSize: 16,
                lineHeight: '24px',
                color: '#5C5C5C',
                margin: 0,
                width: '100%',
              }}
            >
              {props.description ?? 'Most health systems look to clinical decision support as their AI entry point. This paper argues that prior auth—with structured rules, clear metrics, and enormous admin burden—delivers the highest ROI for most organisations.'}
            </p>
          </div>

          {/* Author row + CTA */}
          <div
            style={{
              display: 'flex',
              gap: 24,
              alignItems: 'flex-end',
              width: '100%',
              flexShrink: 0,
            }}
          >
            {/* Author */}
            <div
              style={{
                display: 'flex',
                flex: '1 0 0',
                gap: 12,
                alignItems: 'center',
                minWidth: 0,
              }}
            >
              {/* Avatar circle */}
              <div
                style={{
                  backgroundColor: 'rgba(217,48,37,0.1)',
                  borderRadius: 50,
                  width: 40,
                  height: 40,
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: sans,
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: '28px',
                    color: '#D93025',
                    textAlign: 'center',
                  }}
                >
                  {props.authorInitials ?? 'DR'}
                </span>
              </div>

              {/* Author text */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: sans,
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: '28px',
                    color: '#1E1E1E',
                  }}
                >
                  {props.authorName ?? 'Dr. Rohan Mehta'}
                </span>
                <span
                  style={{
                    fontFamily: sans,
                    fontWeight: 500,
                    fontSize: 14,
                    lineHeight: '20px',
                    color: '#5C5C5C',
                  }}
                >
                  {props.authorRole ?? 'Chief Medical Informatics Officer · TAS Member'}
                </span>
              </div>
            </div>

            {/* READ MORE link */}
            <button
              onClick={props.onCta}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                fontFamily: sans,
                fontWeight: 600,
                fontSize: 16,
                lineHeight: '28px',
                color: red,
                textDecoration: 'underline',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              {props.ctaLabel ?? 'READ MORE'}
            </button>
          </div>
        </div>

        {/* ── Right: image ── */}
        {!isMobile && (
          <div
            style={{
              height: isTablet && props.stackOnTablet ? 320 : 381,
              width: isTablet && props.stackOnTablet ? '100%' : 540,
              flexShrink: 0,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Image
              alt=""
              src={resolveImageSrc(props.image) ?? imgPhoto2Light}
              fill
              sizes={isTablet && props.stackOnTablet ? '100vw' : '540px'}
              style={{
                objectFit: 'cover',
                objectPosition: 'bottom',
              }}
            />
          </div>
        )}
      </div>
    );
  }

  return null;
}

export default Card;
