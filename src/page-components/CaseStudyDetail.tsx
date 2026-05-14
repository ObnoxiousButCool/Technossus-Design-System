'use client';

import React from 'react';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Tag }        from '../../components/Tag';
import { CTABanner }  from '../../components/CTABanner';
import { Button }     from '../../components/Button';
import { FadeUp }     from '../../components/Animate/FadeUp';
import { useBreakpoint } from '../../ts/breakpoints';

const sans  = '"General Sans", system-ui, -apple-system, sans-serif';
const serif = '"Roboto Serif", Georgia, serif';
const red   = '#ED2939';
const dark1 = '#1E1E1E';

// ─── Corner bracket decorations (reused from service pages) ──────────────────
const CornerTL = () => (
  <>
    <div style={{ position: 'absolute', top: 0, left: 0, width: 118, height: 10, background: red, pointerEvents: 'none', zIndex: 2 }} />
    <div style={{ position: 'absolute', top: 0, left: 0, width: 10, height: 118, background: red, pointerEvents: 'none', zIndex: 2 }} />
  </>
);
const CornerBR = () => (
  <>
    <div style={{ position: 'absolute', bottom: 0, right: 0, width: 118, height: 10, background: red, pointerEvents: 'none', zIndex: 2 }} />
    <div style={{ position: 'absolute', bottom: 0, right: 0, width: 10, height: 118, background: red, pointerEvents: 'none', zIndex: 2 }} />
  </>
);

// ─── Data shape ───────────────────────────────────────────────────────────────
export interface CaseStudyData {
  slug: string;
  tagLine: string;           // e.g. "FINTECH • PLATFORM MODERNIZATION"
  title: string;
  heroImage: string;

  clientName: string;
  clientDescription: string;

  challengeHeading: string;
  challengeBody: string;

  solutionHeading: string;
  solutionBody: string;
  solutionCapabilities: string[];

  impactHeading: string;
  impactDescription: string;
  impactMetrics: { value: string; label: string }[];
  industryStats: { value: string; label: string }[];

  relatedCaseStudies: {
    tags: string;
    title: string;
    excerpt: string;
    image: string;
    slug: string;
  }[];
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function CaseStudyDetail({ data }: { data: CaseStudyData }) {
  const { isMobile, isTablet } = useBreakpoint();

  const outerPad = isMobile ? '0 16px' : isTablet ? '0 32px' : '0 80px';
  const sectionPad = isMobile ? '48px 16px' : isTablet ? '60px 32px' : '80px 80px';

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff' }}>
        <div
          style={{
            maxWidth: 1440,
            margin: '0 auto',
            padding: outerPad,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'stretch',
            minHeight: isMobile ? 'auto' : 540,
            boxSizing: 'border-box',
          }}
        >
          {/* Left: text */}
          <div
            style={{
              flex: '0 0 auto',
              width: isMobile ? '100%' : isTablet ? '55%' : '54%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 24,
              padding: isMobile ? '40px 0 32px' : isTablet ? '48px 0' : '56px 0',
              paddingRight: isMobile ? 0 : 48,
              boxSizing: 'border-box',
            }}
          >
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: data.tagLine.split('•')[0].trim(), active: true },
              ]}
            />

            <FadeUp>
              <p
                style={{
                  fontFamily: sans,
                  fontWeight: 600,
                  fontSize: 16,
                  color: '#363636',
                  margin: 0,
                  letterSpacing: '0.02em',
                }}
              >
                {data.tagLine}
              </p>
            </FadeUp>

            <FadeUp delay={60}>
              <h1
                style={{
                  fontFamily: serif,
                  fontWeight: 500,
                  fontSize: isMobile ? 28 : isTablet ? 38 : 48,
                  lineHeight: isMobile ? '36px' : isTablet ? '46px' : '56px',
                  color: dark1,
                  margin: 0,
                }}
              >
                {data.title}
              </h1>
            </FadeUp>
          </div>

          {/* Right: hero image */}
          {!isMobile && (
            <div
              style={{
                flex: 1,
                minHeight: 400,
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <img
                src={data.heroImage}
                alt={data.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          )}
        </div>
      </section>

      {/* ── CLIENT & CHALLENGE ────────────────────────────────────────────── */}
      <section>
        <div
          style={{
            maxWidth: 1440,
            margin: '0 auto',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'stretch',
            boxSizing: 'border-box',
          }}
        >
          {/* Left: Client */}
          <div
            style={{
              flex: isMobile ? '1 1 auto' : '0 0 37%',
              background: '#F4F4F4',
              padding: isMobile ? '40px 16px' : isTablet ? '48px 32px' : '56px 56px',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
              boxSizing: 'border-box',
            }}
          >
            <Tag label="CLIENT" />
            <FadeUp>
              <h2
                style={{
                  fontFamily: serif,
                  fontWeight: 600,
                  fontSize: isMobile ? 22 : 32,
                  lineHeight: isMobile ? '30px' : '40px',
                  color: dark1,
                  margin: 0,
                }}
              >
                {data.clientName}
              </h2>
            </FadeUp>
            <p
              style={{
                fontFamily: sans,
                fontWeight: 500,
                fontSize: 16,
                lineHeight: '26px',
                color: '#5B5B5B',
                margin: 0,
              }}
            >
              {data.clientDescription}
            </p>
          </div>

          {/* Right: Challenge */}
          <div
            style={{
              flex: 1,
              background: '#fff',
              padding: isMobile ? '40px 16px' : isTablet ? '48px 32px' : '56px 64px',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
              boxSizing: 'border-box',
            }}
          >
            <Tag label="CHALLENGES" />
            <FadeUp>
              <h2
                style={{
                  fontFamily: serif,
                  fontWeight: 600,
                  fontSize: isMobile ? 22 : 32,
                  lineHeight: isMobile ? '30px' : '40px',
                  color: red,
                  margin: 0,
                }}
              >
                {data.challengeHeading}
              </h2>
            </FadeUp>
            <p
              style={{
                fontFamily: sans,
                fontWeight: 500,
                fontSize: 16,
                lineHeight: '26px',
                color: '#5B5B5B',
                margin: 0,
              }}
            >
              {data.challengeBody}
            </p>
          </div>
        </div>
      </section>

      {/* ── SOLUTION ──────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff' }}>
        <div
          style={{
            maxWidth: 1440,
            margin: '0 auto',
            padding: sectionPad,
            boxSizing: 'border-box',
          }}
        >
          <Tag label="SOLUTION" />

          <FadeUp>
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 600,
                fontSize: isMobile ? 24 : 32,
                lineHeight: isMobile ? '32px' : '42px',
                color: red,
                margin: '20px 0 0',
                maxWidth: 800,
              }}
            >
              {data.solutionHeading}
            </h2>
          </FadeUp>

          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? 32 : 48,
              marginTop: 32,
              alignItems: 'flex-start',
            }}
          >
            {/* Body text */}
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontFamily: sans,
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: '26px',
                  color: '#5B5B5B',
                  margin: 0,
                }}
              >
                {data.solutionBody}
              </p>
            </div>

            {/* Capabilities card */}
            <div
              style={{
                flex: isMobile ? '1 1 auto' : '0 0 48%',
                background: '#F4F4F4',
                padding: '32px',
                boxSizing: 'border-box',
              }}
            >
              <p
                style={{
                  fontFamily: sans,
                  fontWeight: 600,
                  fontSize: 20,
                  color: dark1,
                  margin: '0 0 20px',
                }}
              >
                Key solution capabilities included:
              </p>
              <ul
                style={{
                  margin: 0,
                  padding: '0 0 0 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                {data.solutionCapabilities.map((cap, i) => (
                  <li
                    key={i}
                    style={{
                      fontFamily: sans,
                      fontWeight: 500,
                      fontSize: 15,
                      lineHeight: '24px',
                      color: '#383838',
                    }}
                  >
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT ────────────────────────────────────────────────────────── */}
      <section style={{ background: dark1 }}>
        <div
          style={{
            maxWidth: 1440,
            margin: '0 auto',
            padding: sectionPad,
            boxSizing: 'border-box',
          }}
        >
          {/* Top: description + metric cards */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? 32 : 48,
              padding: isMobile ? '24px' : '40px',
              border: '1px solid rgba(255,255,255,0.1)',
              marginBottom: 40,
              boxSizing: 'border-box',
            }}
          >
            <CornerTL />
            <CornerBR />

            {/* Left */}
            <div
              style={{
                flex: isMobile ? '1 1 auto' : '0 0 42%',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              <Tag label="IMPACT" />
              <FadeUp>
                <h2
                  style={{
                    fontFamily: serif,
                    fontWeight: 600,
                    fontSize: isMobile ? 24 : 32,
                    lineHeight: isMobile ? '32px' : '42px',
                    color: '#fff',
                    margin: 0,
                  }}
                >
                  {data.impactHeading}
                </h2>
              </FadeUp>
              <p
                style={{
                  fontFamily: sans,
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: '26px',
                  color: '#B0B0B0',
                  margin: 0,
                }}
              >
                {data.impactDescription}
              </p>
            </div>

            {/* Right: metric cards */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              {data.impactMetrics.map((m, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '24px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 20,
                  }}
                >
                  <span
                    style={{
                      fontFamily: serif,
                      fontWeight: 600,
                      fontSize: 36,
                      color: red,
                      flexShrink: 0,
                      lineHeight: 1,
                    }}
                  >
                    {m.value}
                  </span>
                  <span
                    style={{
                      fontFamily: sans,
                      fontWeight: 500,
                      fontSize: 15,
                      lineHeight: '22px',
                      color: '#fff',
                    }}
                  >
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Industry stats row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : `repeat(${data.industryStats.length}, 1fr)`,
              gap: 1,
              background: 'rgba(255,255,255,0.1)',
            }}
          >
            {data.industryStats.map((s, i) => (
              <div
                key={i}
                style={{
                  background: dark1,
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <span
                  style={{
                    fontFamily: serif,
                    fontWeight: 500,
                    fontSize: 36,
                    color: red,
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontFamily: sans,
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: '24px',
                    color: '#fff',
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED CASE STUDIES ─────────────────────────────────────────── */}
      {data.relatedCaseStudies.length > 0 && (
        <section style={{ background: dark1 }}>
          <div
            style={{
              maxWidth: 1440,
              margin: '0 auto',
              padding: sectionPad,
              boxSizing: 'border-box',
            }}
          >
            <Tag label="PROOF" />

            {/* Header row */}
            <div
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'flex-start' : 'center',
                justifyContent: 'space-between',
                gap: 16,
                margin: '20px 0 40px',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h2
                  style={{
                    fontFamily: serif,
                    fontWeight: 500,
                    fontSize: isMobile ? 24 : 36,
                    color: red,
                    margin: 0,
                  }}
                >
                  Success stories.
                </h2>
                <p
                  style={{
                    fontFamily: sans,
                    fontWeight: 500,
                    fontSize: 18,
                    color: '#fff',
                    margin: 0,
                  }}
                >
                  If any of these describe where your team is right now, we should talk.
                </p>
              </div>
              <Button variant="secondary" label="View All" href="/case-studies" />
            </div>

            {/* Cards grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(3,1fr)',
                gap: isMobile ? 24 : 32,
              }}
            >
              {data.relatedCaseStudies.map((cs, i) => (
                <a
                  key={i}
                  href={`/case-studies/${cs.slug}`}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    overflow: 'hidden',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <img
                    src={cs.image}
                    alt={cs.title}
                    style={{
                      width: '100%',
                      height: 200,
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <div
                    style={{
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 10,
                      flex: 1,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: sans,
                        fontWeight: 600,
                        fontSize: 13,
                        color: '#949494',
                        margin: 0,
                        letterSpacing: '0.03em',
                      }}
                    >
                      {cs.tags}
                    </p>
                    <h3
                      style={{
                        fontFamily: sans,
                        fontWeight: 600,
                        fontSize: 17,
                        lineHeight: '24px',
                        color: '#fff',
                        margin: 0,
                      }}
                    >
                      {cs.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: sans,
                        fontWeight: 500,
                        fontSize: 14,
                        lineHeight: '22px',
                        color: '#B0B0B0',
                        margin: 0,
                      }}
                    >
                      {cs.excerpt}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <CTABanner
        size="large"
        label="LET'S WORK ON IT TOGETHER"
        heading="Ready to accelerate your digital & AI journey?"
        body="Whether you're modernizing systems, building a new product, or scaling engineering, we're ready to collaborate."
        primaryCta="Schedule a Strategy Session"
        secondaryCta="Contact Us"
      />

      <div style={{ height: isMobile ? 48 : 80 }} />
    </>
  );
}
