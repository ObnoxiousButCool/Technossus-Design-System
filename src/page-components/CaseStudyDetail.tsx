'use client';

import React from 'react';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Tag }        from '../../components/Tag';
import { CTABanner }  from '../../components/CTABanner';
import { FadeUp }     from '../../components/Animate/FadeUp';
import { useBreakpoint } from '../../ts/breakpoints';

const sans  = '"General Sans", system-ui, -apple-system, sans-serif';
const serif = '"Roboto Serif", Georgia, serif';
const red   = '#ED2939';
const dark1 = '#1E1E1E';

// ─── Corner bracket decorations ──────────────────────────────────────────────
const CornerTL = () => (
  <>
    <div style={{ position: 'absolute', top: 0,    left:  0, width: 118, height: 10, background: red, zIndex: 2, pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', top: 0,    left:  0, width: 10, height: 118, background: red, zIndex: 2, pointerEvents: 'none' }} />
  </>
);
const CornerBR = () => (
  <>
    <div style={{ position: 'absolute', bottom: 0, right: 0, width: 118, height: 10, background: red, zIndex: 2, pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', bottom: 0, right: 0, width: 10, height: 118, background: red, zIndex: 2, pointerEvents: 'none' }} />
  </>
);

// ─── Checkmark icon ───────────────────────────────────────────────────────────
const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="11" stroke="#383838" strokeWidth="1.5" />
    <path d="M7.5 12.5L10.5 15.5L16.5 9.5" stroke="#383838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Data shape ───────────────────────────────────────────────────────────────
export interface CaseStudyData {
  slug: string;
  tagLine: string;
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
  impactContextLabel?: string;
  impactContextBody?: string;
  impactCards: { title: string; body: string }[];
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
  const isDesktop = !isMobile && !isTablet;

  // Section horizontal padding (matches Figma per-section values)
  const heroPadH  = isMobile ? '16px' : isTablet ? '32px' : '0px';
  const padS      = isMobile ? 24 : 32;   // solution / client sections
  const padL      = isMobile ? 24 : 56;   // impact / related sections

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', boxSizing: 'border-box' }}>

          {/* Breadcrumb row — paddingTop=8, paddingBottom=8 */}
          <div style={{
            padding: `8px ${heroPadH}`,
            boxSizing: 'border-box',
          }}>
            <Breadcrumb
              items={[
                { label: 'Home',         href: '/' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: data.tagLine.split('•')[0].trim(), active: true },
              ]}
            />
          </div>

          {/* Hero content — 657px left / 80px gap / image fills */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isDesktop ? 80 : isTablet ? 40 : 24,
            minHeight: isMobile ? 'auto' : 540,
            boxSizing: 'border-box',
            padding: isMobile ? '0 16px 40px' : isTablet ? '0 32px 48px' : 0,
          }}>
            {/* Left text — vertically centered within 540px */}
            <div style={{
              flex: isDesktop ? `0 0 657px` : isTablet ? '0 0 55%' : '1 1 auto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 16,
              padding: isMobile ? '32px 0 0' : isTablet ? '40px 32px' : 0,
              boxSizing: 'border-box',
            }}>
              <FadeUp>
                <p style={{
                  fontFamily: sans,
                  fontWeight: 600,
                  fontSize: 16,
                  lineHeight: '16px',
                  color: '#363636',
                  margin: 0,
                  letterSpacing: 0,
                }}>
                  {data.tagLine}
                </p>
              </FadeUp>

              <FadeUp delay={60}>
                <h1 style={{
                  fontFamily: serif,
                  fontWeight: 500,
                  fontSize: isMobile ? 28 : isTablet ? 38 : 48,
                  lineHeight: isMobile ? '36px' : isTablet ? '48px' : '56px',
                  letterSpacing: isMobile ? 0 : -0.96,
                  color: dark1,
                  margin: 0,
                }}>
                  {data.title}
                </h1>
              </FadeUp>
            </div>

            {/* Right image — full height, no aspect ratio crop */}
            {!isMobile && (
              <div style={{
                flex: 1,
                minHeight: isTablet ? 360 : 540,
                overflow: 'hidden',
              }}>
                <img
                  src={data.heroImage}
                  alt={data.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 80px gap after hero */}
      <div style={{ height: 80 }} />

      {/* ── CLIENT & CHALLENGE ────────────────────────────────────────────── */}
      <section>
        <div style={{
          maxWidth: 1440,
          margin: '0 auto',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          boxSizing: 'border-box',
        }}>
          {/* Left: Client — 539px at desktop */}
          <div style={{
            flex: isDesktop ? `0 0 539px` : isMobile ? '1 1 auto' : '0 0 38%',
            background: '#F4F4F4',
            padding: padS,
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            boxSizing: 'border-box',
          }}>
            <Tag label="CLIENT" />
            <FadeUp>
              <h2 style={{
                fontFamily: serif,
                fontWeight: 600,
                fontSize: isMobile ? 22 : 32,
                lineHeight: isMobile ? '28px' : '36px',
                color: dark1,
                margin: 0,
              }}>
                {data.clientName}
              </h2>
            </FadeUp>
            <p style={{
              fontFamily: sans,
              fontWeight: 500,
              fontSize: 16,
              lineHeight: '24px',
              color: '#5B5B5B',
              margin: 0,
            }}>
              {data.clientDescription}
            </p>
          </div>

          {/* Right: Challenge — fills rest */}
          <div style={{
            flex: 1,
            background: '#fff',
            padding: padS,
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            boxSizing: 'border-box',
          }}>
            <Tag label="CHALLENGES" />
            <FadeUp>
              <h2 style={{
                fontFamily: serif,
                fontWeight: 600,
                fontSize: isMobile ? 22 : 32,
                lineHeight: isMobile ? '28px' : '36px',
                color: red,
                margin: 0,
              }}>
                {data.challengeHeading}
              </h2>
            </FadeUp>
            <p style={{
              fontFamily: sans,
              fontWeight: 500,
              fontSize: 16,
              lineHeight: '24px',
              color: '#5B5B5B',
              margin: 0,
            }}>
              {data.challengeBody}
            </p>
          </div>
        </div>
      </section>

      {/* 48px gap */}
      <div style={{ height: 48 }} />

      {/* ── SOLUTION ──────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff' }}>
        <div style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: padS,
          boxSizing: 'border-box',
        }}>
          <Tag label="SOLUTION" />

          <FadeUp>
            <h2 style={{
              fontFamily: serif,
              fontWeight: 600,
              fontSize: isMobile ? 22 : 32,
              lineHeight: isMobile ? '28px' : '36px',
              color: red,
              margin: '24px 0 0',
            }}>
              {data.solutionHeading}
            </h2>
          </FadeUp>

          {/* Body + capabilities card — 50/50 at desktop, gap=24 */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: 24,
            marginTop: 24,
            alignItems: 'flex-start',
          }}>
            {/* Left: solution body */}
            <p style={{
              flex: 1,
              fontFamily: sans,
              fontWeight: 500,
              fontSize: 16,
              lineHeight: '24px',
              color: '#5B5B5B',
              margin: 0,
              alignSelf: 'center',
            }}>
              {data.solutionBody}
            </p>

            {/* Right: capabilities card */}
            <div style={{
              flex: isDesktop ? `0 0 676px` : isMobile ? '1 1 auto' : '0 0 50%',
              background: '#F4F4F4',
              padding: 24,
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}>
              <p style={{
                fontFamily: sans,
                fontWeight: 600,
                fontSize: 20,
                lineHeight: '28px',
                color: dark1,
                margin: 0,
              }}>
                Key solution capabilities included:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {data.solutionCapabilities.map((cap, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                    <CheckIcon />
                    <span style={{
                      fontFamily: sans,
                      fontWeight: 500,
                      fontSize: 16,
                      lineHeight: '24px',
                      color: '#383838',
                    }}>
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 48px gap */}
      <div style={{ height: 48 }} />

      {/* ── IMPACT ────────────────────────────────────────────────────────── */}
      <section style={{ background: dark1, position: 'relative', overflow: 'hidden' }}>
        <CornerTL />
        <CornerBR />
        <div style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: padL,
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: 36,
        }}>
          {/* Top: left text col + right cards col */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: 24,
            alignItems: 'flex-start',
          }}>
            {/* Left column — 600px at desktop */}
            <div style={{
              flex: isDesktop ? `0 0 600px` : isMobile ? '1 1 auto' : '0 0 46%',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <FadeUp>
                  <h2 style={{
                    fontFamily: serif,
                    fontWeight: 600,
                    fontSize: isMobile ? 24 : 32,
                    lineHeight: '36px',
                    color: '#fff',
                    margin: 0,
                  }}>
                    {data.impactHeading}
                  </h2>
                </FadeUp>
                <p style={{
                  fontFamily: sans,
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: '24px',
                  color: '#E0DFDF',
                  margin: 0,
                }}>
                  {data.impactDescription}
                </p>
              </div>

              {(data.impactContextLabel || data.impactContextBody) && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {data.impactContextLabel && (
                    <p style={{
                      fontFamily: sans,
                      fontWeight: 600,
                      fontSize: 20,
                      lineHeight: '28px',
                      color: '#fff',
                      margin: 0,
                    }}>
                      {data.impactContextLabel}
                    </p>
                  )}
                  {data.impactContextBody && (
                    <p style={{
                      fontFamily: sans,
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: '20px',
                      color: '#ADADAD',
                      margin: 0,
                    }}>
                      {data.impactContextBody}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Right column — 704px at desktop, two stacked cards */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
            }}>
              {data.impactCards.map((card, i) => (
                <React.Fragment key={i}>
                  {i > 0 && (
                    <div style={{ height: 1, background: '#5B5B5B' }} />
                  )}
                  <div style={{
                    padding: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                  }}>
                    {/* Red accent line */}
                    <div style={{ width: 48, height: 3, background: red }} />
                    <p style={{
                      fontFamily: sans,
                      fontWeight: 600,
                      fontSize: 20,
                      lineHeight: '28px',
                      color: red,
                      margin: 0,
                    }}>
                      {card.title}
                    </p>
                    <p style={{
                      fontFamily: sans,
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: '20px',
                      color: '#949494',
                      margin: 0,
                    }}>
                      {card.body}
                    </p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Industry stats row — 3 equal cols, gap=20 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : `repeat(${data.industryStats.length}, 1fr)`,
            gap: 20,
          }}>
            {data.industryStats.map((s, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}>
                <span style={{
                  fontFamily: serif,
                  fontWeight: 500,
                  fontSize: 36,
                  lineHeight: '40px',
                  color: red,
                }}>
                  {s.value}
                </span>
                <span style={{
                  fontFamily: sans,
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: '24px',
                  color: '#fff',
                }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 48px gap */}
      <div style={{ height: 48 }} />

      {/* ── RELATED CASE STUDIES ─────────────────────────────────────────── */}
      {data.relatedCaseStudies.length > 0 && (
        <section>
          {/* PROOF tag on white background — outside dark box */}
          <div style={{
            maxWidth: 1440,
            margin: '0 auto',
            padding: `0 ${padL}px`,
            marginBottom: 16,
            boxSizing: 'border-box',
          }}>
            <Tag label="PROOF" />
          </div>

          {/* Dark box with corner brackets */}
          <div style={{ background: dark1, position: 'relative', overflow: 'hidden' }}>
            <CornerTL />
            <CornerBR />
            <div style={{
              maxWidth: 1440,
              margin: '0 auto',
              padding: padL,
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              gap: 36,
            }}>
              {/* Header row */}
              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'flex-start' : 'center',
                justifyContent: 'space-between',
                gap: 8,
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <h2 style={{
                    fontFamily: serif,
                    fontWeight: 500,
                    fontSize: isMobile ? 28 : 36,
                    lineHeight: '40px',
                    color: red,
                    margin: 0,
                  }}>
                    Success stories.
                  </h2>
                  <p style={{
                    fontFamily: sans,
                    fontWeight: 500,
                    fontSize: 18,
                    lineHeight: '24px',
                    color: '#fff',
                    margin: 0,
                  }}>
                    If any of these describe where your team is right now, we should talk.
                  </p>
                </div>
                <a
                  href="/case-studies"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 28,
                    padding: '0 16px',
                    background: '#fff',
                    color: red,
                    fontFamily: sans,
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: '28px',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  View All
                </a>
              </div>

              {/* Cards grid — gap=20 */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(3,1fr)',
                gap: 20,
              }}>
                {data.relatedCaseStudies.map((cs, i) => (
                  <a
                    key={i}
                    href={`/case-studies/${cs.slug}`}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      background: dark1,
                      textDecoration: 'none',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Image — 260px */}
                    <img
                      src={cs.image}
                      alt={cs.title}
                      style={{
                        width: '100%',
                        height: 260,
                        objectFit: 'cover',
                        display: 'block',
                        flexShrink: 0,
                      }}
                    />
                    {/* Content — 306px, padding=24, gap=24 */}
                    <div style={{
                      flex: 1,
                      padding: 24,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 24,
                      boxSizing: 'border-box',
                      minHeight: 306,
                    }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                        <p style={{
                          fontFamily: sans,
                          fontWeight: 600,
                          fontSize: 14,
                          lineHeight: '20px',
                          color: '#adadad',
                          margin: 0,
                          letterSpacing: '0.03em',
                        }}>
                          {cs.tags}
                        </p>
                        <h3 style={{
                          fontFamily: sans,
                          fontWeight: 600,
                          fontSize: 20,
                          lineHeight: '28px',
                          color: '#fff',
                          margin: 0,
                        }}>
                          {cs.title}
                        </h3>
                        <p style={{
                          fontFamily: sans,
                          fontWeight: 500,
                          fontSize: 16,
                          lineHeight: '26px',
                          color: '#E0DFDF',
                          margin: 0,
                        }}>
                          {cs.excerpt}
                        </p>
                      </div>
                      {/* "See How We Work" button — 180x56, border red */}
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 56,
                        width: 180,
                        border: `1px solid ${red}`,
                        color: red,
                        fontFamily: sans,
                        fontWeight: 600,
                        fontSize: 16,
                        lineHeight: '28px',
                        padding: '0 24px',
                        boxSizing: 'border-box',
                        flexShrink: 0,
                        whiteSpace: 'nowrap',
                      }}>
                        See How We Work
                      </div>
                    </div>
                  </a>
                ))}
              </div>
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
    </div>
  );
}
