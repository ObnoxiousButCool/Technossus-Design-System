'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useEmblaCarousel from 'embla-carousel-react';
import { Tag } from '../../components/Tag';
import { Stats } from '../../components/Stats';
import { Testimonial } from '../../components/Testimonial';
import { CTABanner } from '../../components/CTABanner';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { FadeUp } from '../../components/Animate/FadeUp';
import { useBreakpoint } from '../../ts/breakpoints';
import { DecorativeOverlay, DecorativeImage } from '../../components/DecorativeMedia';
import imgCollaborators from '../../assets/Website_images 2/Logo.png';
import imgAuthorJeffrey from '../../assets/testimonials/Jaffrey.png';
import imgAuthorAnita from '../../assets/testimonials/anita.png';
import imgAuthorTyler from '../../assets/testimonials/Tyler.png';
import imgSvcAI from '../../assets/Website_Images/Services/AI Led Transformation.png';
import imgSvcCloud from '../../assets/Website_Images/Services/Cloud consulting.png';
import imgSvcData from '../../assets/Website_Images/Services/Data Intelligence.png';
import imgSvcDigital from '../../assets/Website_Images/Services/Digital Exp..png';
import imgSvcProduct from '../../assets/Website_Images/Services/Product Eng. .png';
import imgSvcQuality from '../../assets/Website_Images/Services/Quality Eng..png';
import imgHomeFuture from '../../assets/Website_Images/Home page/home3.png';
import imgHomeModernize from '../../assets/Website_Images/Home page/home2.png';
import imgHomeAI from '../../assets/Website_Images/Home page/home1.png';
import imgStatsGlobe from '../../assets/Website_Images/Home page/globe.png';
import imgViewInAr from '../../assets/Website_Images/Home page/view_in_ar.svg';

// ─── Design tokens ────────────────────────────────────────────────────────────
const sans = '"General Sans", system-ui, -apple-system, sans-serif';
const serif = '"Roboto Serif", Georgia, serif';
const red = '#ED2939';
const dark1 = '#1B1B1B';
const dark2 = '#1E1E1E';

// ─── Figma asset URLs ─────────────────────────────────────────────────────────
// Hero
const imgHeroBg = '/assets/cf9c112d09fc9f6437fa76b0e30e6382f36dc276.png';

// Search bar icons
const imgSearchAiStar = '/assets/1396fbe0e7d98149afea22065d702750dbf4a387.svg';
const imgSearchSend = '/assets/d884bbc847b6fe02ec374e4281caa99cdfc0977c.svg';
const imgArrowForward = '/assets/5ab4759937e9a9e8b7e9cb731f7784df694959c0.svg';

// Stats section — globe composition
const imgStatsComposed = imgStatsGlobe;

// Case Study
const imgCaseStudy = '/assets/11485e6d5400122979be42e072e5eb53cb43660e.png';

// What We Deliver + Insights card image
const imgCardPhoto = '/assets/fbbad1d37f7a4e076de4d16631dc6863c6c4444a.png';

// Why Technossus card icons
const imgIconOutcome = '/assets/ac8dbae3d6a4ef3869c92f062ba66c3ebc0095c2.svg';
const imgIconScale = '/assets/1842a7b6c6f7844a725781346897858a8c24e609.svg';
const imgIconEnhance = '/assets/be00e1883e0f4b7bbdff5b000b66f3f1cfa30930.svg';

// Testimonial author images — imported at top of file

// Corner decorators (Figma Subtract SVGs)
const imgCornerTL = '/assets/d3bd3c494981fc117beb9354c38eaf44f6d42039.svg';
const imgCornerBR = '/assets/e35ee95a68b0f29bf73fcd76e8285772bff083b1.svg';

// ─── Corner decorator components ──────────────────────────────────────────────
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

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const router = useRouter();
  const { isMobile, isTablet } = useBreakpoint();
  const sectionGap = isMobile ? 48 : isTablet ? 60 : 80;

  const inner: React.CSSProperties = {
    maxWidth: 1440,
    margin: '0 auto',
    padding: isMobile ? '0 12px' : isTablet ? '0 32px' : '0 80px',
    boxSizing: 'border-box',
  };

  const sectionBlock = (background = '#fff'): React.CSSProperties => ({
    background,
    marginTop: sectionGap,
  });

  const panelInner: React.CSSProperties = {
    maxWidth: 1440,
    margin: '0 auto',
    padding: isMobile ? '40px 12px' : isTablet ? '60px 32px' : '80px 80px',
  };
  const darkPanelPadding = isMobile ? '32px 16px' : isTablet ? '48px 32px' : 56;

  const h1Size = isMobile ? 28 : isTablet ? 36 : 48;
  const h1Line = isMobile ? '36px' : isTablet ? '44px' : '56px';

  const shSize = isMobile ? 24 : isTablet ? 30 : 36;
  const shLine = isMobile ? '32px' : isTablet ? '38px' : '40px';
  const statsImageWidth = isTablet ? 420 : 608;
  const statsImageHeight = isTablet ? 313 : 453;

  const cols3 = isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(3,1fr)';
  const mobileGutter = 12;
  const fullBleedStyle: React.CSSProperties = isMobile
    ? {
        width: `calc(100% + ${mobileGutter * 2}px)`,
        maxWidth: 'none',
        marginLeft: -mobileGutter,
      }
    : {
        width: '100vw',
        maxWidth: '100vw',
        marginLeft: 'calc(50% - 50vw)',
      };
  const heroSlides = [
    {
      heading: 'Shape the ',
      accent: 'future of technology',
      subheading: 'We’re more than a company, we’re a hub of innovation, collaboration, and continuous learning. If you’re passionate about technology and making real impact, your next chapter starts here. ',
      cta: 'Show us the problem ',
      href: '/services/ai-business-transformation',
      image: imgHomeFuture,
    },
    {
      heading: 'Modernize what’s ',
      accent: 'holding you back',
      subheading: 'Move beyond legacy constraints to a scalable, future-ready foundation, enabling faster innovation and reliable business outcomes',
      cta: 'Explore solutions',
      href: '/services/product-engineering',
      image: imgHomeModernize,
    },
    {
      heading: 'Scale AI with Purpose,',
      accent: ' not just pilots',
      subheading: 'Move beyond experimentation to real-world implementation, delivering measurable business outcomes at scale',
      cta: 'Explore solutions',
      href: '/ai-studio',
      image: imgHomeAI,
    },
    {
      heading: 'Built with precision, delivered at',
      accent: ' speed and scale',
      subheading: 'From strategy to execution, we build, scale, and get it right the first time — delivering at speed to drive measurable outcomes',
      cta: 'Explore Solutions',
      href: '/services/product-engineering',
      image: imgHeroBg,
    },
  ];
  const quickPickLinks = [
    { label: 'AI Adoption Strategy', href: '/services/ai-business-transformation' },
    { label: 'Modernize Platforms', href: '/services/cloud-product-modernization' },
    { label: 'Data Analytics', href: '/services/data-intelligence-analytics' },
    { label: 'Healthcare IT', href: '/industries/healthcare' },
    { label: 'Product Engineering', href: '/services/product-engineering' },
  ];
  const whatIsAiStudioItems = [
    {
      num: '01',
      title: 'Explore real use cases',
      description: 'Browse proven implementations and understand what works before you build.',
    },
    {
      num: '02',
      title: 'Build with accelerators',
      description: 'Build faster using pre-configured components and production-ready accelerators.',
    },
    {
      num: '03',
      title: 'Test and validate ideas',
      description: 'Rapidly prototype and validate ideas in a safe environment before committing resources.',
    },
    {
      num: '04',
      title: 'Take it to production',
      description: 'Move from validated ideas to production systems with governance and scale built in.',
    },
  ];
  const healthcareCaseStudiesHref = '/case-studies?industry=Healthcare';
  const caseStudiesHref = '/case-studies';
  const [heroCarouselRef, heroCarouselApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
  });
  const [selectedHeroIndex, setSelectedHeroIndex] = React.useState(0);
  const [isHeroDragging, setIsHeroDragging] = React.useState(false);
  const heroAutoplayRef = React.useRef<ReturnType<typeof setInterval> | null>(null);
  const reduceMotionRef = React.useRef(false);

  const stopHeroAutoplay = React.useCallback(() => {
    if (!heroAutoplayRef.current) return;

    clearInterval(heroAutoplayRef.current);
    heroAutoplayRef.current = null;
  }, []);

  const startHeroAutoplay = React.useCallback(() => {
    if (!heroCarouselApi || reduceMotionRef.current || heroAutoplayRef.current) return;

    heroAutoplayRef.current = setInterval(() => {
      if (document.hidden) return;

      heroCarouselApi.scrollNext();
    }, 4500);
  }, [heroCarouselApi]);

  React.useEffect(() => {
    if (!heroCarouselApi || typeof window === 'undefined') return undefined;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotionPreference = () => {
      reduceMotionRef.current = motionQuery.matches;

      if (motionQuery.matches) {
        stopHeroAutoplay();
      } else {
        startHeroAutoplay();
      }
    };

    syncMotionPreference();
    motionQuery.addEventListener('change', syncMotionPreference);

    return () => {
      motionQuery.removeEventListener('change', syncMotionPreference);
      stopHeroAutoplay();
    };
  }, [heroCarouselApi, startHeroAutoplay, stopHeroAutoplay]);

  React.useEffect(() => {
    if (!heroCarouselApi) return undefined;

    const syncSelectedSlide = () => {
      setSelectedHeroIndex(heroCarouselApi.selectedScrollSnap());
    };

    syncSelectedSlide();
    heroCarouselApi.on('select', syncSelectedSlide);
    heroCarouselApi.on('reInit', syncSelectedSlide);

    return () => {
      heroCarouselApi.off('select', syncSelectedSlide);
      heroCarouselApi.off('reInit', syncSelectedSlide);
    };
  }, [heroCarouselApi]);

  return (
    <main style={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', overflow: 'hidden' }}>
        <div style={inner}>

          {/* Hero image + headline */}
          <div
            className="home-hero-carousel"
            role="region"
            aria-label="Featured Technossus messages"
            onMouseEnter={stopHeroAutoplay}
            onMouseLeave={() => {
              setIsHeroDragging(false);
              startHeroAutoplay();
            }}
            onFocusCapture={stopHeroAutoplay}
            onBlurCapture={startHeroAutoplay}
            onPointerDown={() => setIsHeroDragging(true)}
            onPointerUp={() => setIsHeroDragging(false)}
            onPointerCancel={() => setIsHeroDragging(false)}
            style={{
              position: 'relative',
              ...fullBleedStyle,
              height: isMobile ? 430 : isTablet ? 420 : 463,
              overflow: 'hidden',
              cursor: isHeroDragging ? 'grabbing' : 'grab',
            }}>
            <div ref={heroCarouselRef} style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
              <div className="home-hero-carousel-track" style={{
                display: 'flex',
                height: '100%',
                touchAction: 'pan-y pinch-zoom',
              }}>
                {heroSlides.map((slide, index) => (
                  <div key={`${slide.heading}-${index}`} style={{
                    position: 'relative',
                    height: '100%',
                    flex: '0 0 100%',
                    minWidth: 0,
                    overflow: 'hidden',
                  }}>
                    {/* Background photo */}
                    <Image
                      src={slide.image}
                      alt=""
                      aria-hidden
                      fill
                      priority={index === 0}
                      sizes="100vw"
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                    {/* Dark gradient overlay */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(90deg,rgba(0,0,0,.85) 0%,rgba(0,0,0,.55) 45%,rgba(0,0,0,.2) 100%)',
                    }} />

                    {/* Content */}
                    <div style={{
                      position: 'absolute', top: 0, left: '50%',
                      transform: 'translateX(-50%)',
                      width: '100%', maxWidth: 1440, height: '100%',
                      padding: isMobile ? '56px 12px' : isTablet ? '60px 32px' : '110px 98px',
                      zIndex: 2,
                      display: 'flex', alignItems: 'flex-start',
                      boxSizing: 'border-box',
                    }}>
                      <div style={{ maxWidth: 565, display: 'flex', flexDirection: 'column', gap: isMobile ? 28 : 43 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                          <FadeUp>
                            <h1 style={{
                              fontFamily: serif,
                              fontSize: h1Size, lineHeight: h1Line,
                              fontWeight: 500, letterSpacing: 0,
                              color: '#fff', margin: 0,
                            }}>
                              {slide.heading}{' '}
                              <span style={{ color: red }}>{slide.accent}</span>
                            </h1>
                          </FadeUp>
                          <FadeUp delay={80}>
                            <p style={{
                              fontFamily: sans,
                              fontSize: isMobile ? 14 : 18,
                              fontWeight: 500, lineHeight: '24px',
                              color: '#fff', margin: 0,
                            }}>
                              {slide.subheading}
                            </p>
                          </FadeUp>
                        </div>
                        <FadeUp delay={120}>
                          <div>
                            <a
                              href={slide.href}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 8,
                                minHeight: 48,
                                padding: '10px 20px',
                                background: red,
                                color: '#fff',
                                textDecoration: 'none',
                                fontFamily: sans,
                                fontSize: 16,
                                fontWeight: 600,
                                lineHeight: '28px',
                                boxSizing: 'border-box',
                              }}
                            >
                              <span>{slide.cta}</span>
                              <img
                                alt=""
                                src={imgArrowForward}
                                style={{ width: 24, height: 24, display: 'block', flexShrink: 0 }}
                              />
                            </a>
                          </div>
                        </FadeUp>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              aria-label="Carousel slides"
              style={{
                position: 'absolute',
                left: '50%',
                bottom: isMobile ? 16 : 0,
                transform: 'translateX(-50%)',
                zIndex: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                padding: '8px 10px',
                background: 'transparent',
              }}
            >
              {heroSlides.map((slide, index) => {
                const isActive = selectedHeroIndex === index;

                return (
                  <button
                    key={`${slide.heading}-indicator`}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={() => {
                      stopHeroAutoplay();
                      heroCarouselApi?.scrollTo(index);
                    }}
                    style={{
                      width: isActive ? 28 : 9,
                      height: 9,
                      borderRadius: 999,
                      border: 'none',
                      padding: 0,
                      background: isActive ? red : 'rgba(255, 255, 255, 0.62)',
                      cursor: 'pointer',
                      transition: 'width 0.2s ease, background 0.2s ease',
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* ── Smart Search ── */}
          <div style={{
            background: '#010101',
            ...fullBleedStyle,
            padding: isMobile ? '24px 12px' : isTablet ? '24px 32px' : '32px 24px',
            display: 'flex', flexDirection: 'column', gap: 24,
            boxSizing: 'border-box',
          }}>
            <div style={{
              maxWidth: 1440, margin: '0 auto', width: '100%',
              padding: isMobile ? 0 : isTablet ? 0 : '0 56px',
              boxSizing: 'border-box',
              display: 'flex', flexDirection: 'column', gap: 24,
            }}>
              {/* AI Search bar */}
              <div style={{
                background: '#fff',
                minHeight: isMobile ? 58 : 65,
                borderRadius: isMobile ? 24 : 9999,
                border: '1px solid #F5F5F5',
                boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)',
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between',
                gap: 12,
                padding: isMobile ? '12px 12px 12px 16px' : '0 17px 0 25px',
                boxSizing: 'border-box',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
                  <Image src={imgSearchAiStar} alt="" width={20} height={20} style={{ flexShrink: 0 }} />
                  <span style={{
                    fontFamily: sans, fontSize: isMobile ? 13 : 16, fontWeight: 500,
                    color: '#949494', lineHeight: isMobile ? '18px' : '24px',
                    overflowWrap: 'anywhere',
                  }}>
                    Ask about services, industries, solutions, or case studies
                  </span>
                </div>
                <div style={{
                  background: dark2, borderRadius: 22, padding: 8,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Image src={imgSearchSend} alt="Send" width={24} height={24} />
                </div>
              </div>

              {/* Quick picks */}
              {!isMobile && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <span style={{ flex: 1, height: 1, background: '#383838' }} />
                    <span style={{
                      fontFamily: sans, fontSize: 18, fontWeight: 500,
                      color: '#ADADAD', whiteSpace: 'nowrap', lineHeight: '24px',
                    }}>
                      Quick picks to get you started
                    </span>
                    <span style={{ flex: 1, height: 1, background: '#383838' }} />
                  </div>
                  <div style={{
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center',
                    gap: 16, flexWrap: 'wrap',
                  }}>
                    {quickPickLinks.map((chip) => (
                      <button key={chip.label} onClick={() => router.push(chip.href)} style={{
                        display: 'inline-flex', alignItems: 'center',
                        height: 48, padding: '0 20px', borderRadius: 37,
                        background: '#383838', border: 'none',
                        fontFamily: sans, fontSize: 16, fontWeight: 500,
                        color: '#fff', cursor: 'pointer', lineHeight: '24px',
                      }}>
                        {chip.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────────── */}
      <section style={{ ...sectionBlock('#fff'), overflow: 'hidden' }}>
        <div style={inner}>
          <FadeUp duration={500}><Tag label="STATISTICS" /></FadeUp>
          <FadeUp>
            <h2 style={{
              fontFamily: serif,
              fontSize: shSize, lineHeight: shLine,
              fontWeight: 500, color: red,
              marginTop: 16, marginBottom: 0,
            }}>
              Trusted by leaders.
            </h2>
          </FadeUp>

          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? 40 : 0,
            alignItems: 'flex-start',
            marginTop: isMobile ? 32 : 67,
            position: 'relative',
            minHeight: isMobile ? undefined : 320,
          }}>
            {/* Stats grid */}
            <div style={{
              flex: isMobile ? undefined : '0 0 524px',
              background: '#F9F9F9',
              padding: 24,
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: isMobile ? 24 : '32px 76px',
              width: isMobile ? '100%' : undefined,
              boxSizing: 'border-box',
            }}>
              <Stats value="250+" label="CONSULTANTS" style={isMobile ? { whiteSpace: 'normal' } : undefined} />
              <Stats value="150+" label="GLOBAL CLIENTS" style={isMobile ? { whiteSpace: 'normal' } : undefined} />
              <Stats value="15+" label="YEARS EXPERIENCE" style={isMobile ? { whiteSpace: 'normal' } : undefined} />
              <Stats value="98%" label="CLIENT RETENTION" style={isMobile ? { whiteSpace: 'normal' } : undefined} />
            </div>

            {/* Globe + arc composition — single inline SVG so image href resolves in DOM */}
            {!isMobile && (
              <DecorativeOverlay top={isTablet ? -40 : -80} right={0} width={statsImageWidth} height={statsImageHeight}>
                <DecorativeImage
                  src={imgStatsComposed}
                  top={0} left={0}
                  width={statsImageWidth} height={statsImageHeight}
                  objectFit="contain"
                />
              </DecorativeOverlay>
            )}
          </div>
        </div>
      </section>
      {/* ── COLLABORATORS ────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff' }}>
        <div style={{
          maxWidth: 1440, margin: '0 auto',
          padding: isMobile ? '0 12px' : isTablet ? '0 32px' : '0 80px',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 16,
        }}>
          <p style={{
            fontFamily: sans, fontSize: 16, fontWeight: 500,
            color: '#949494', textAlign: 'center',
            lineHeight: '24px', margin: 0,
          }}>
            OUR COLLABORATORS
          </p>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Image
              src={imgCollaborators}
              alt="Our collaborators"
              sizes={isMobile || isTablet ? '100vw' : '860px'}
              style={{
                display: 'block',
                width: '100%',
                maxWidth: isMobile ? '100%' : isTablet ? '100%' : 860,
                height: 'auto',
              }}
            />
          </div>
        </div>
      </section>


       {/* ── AI STUDIO ────────────────────────────────────────────────────────── */}
      <section style={sectionBlock('#fff')}>
        <div style={inner}>
          <FadeUp duration={500}><Tag label="AI STUDIO" style={{ marginBottom: 16 }} /></FadeUp>
          <div style={{
            backgroundColor: dark2,
            padding: darkPanelPadding,
            boxSizing: 'border-box',
            overflow: 'hidden',
          }}>
            <div
              style={{
                display: 'flex',
                flexDirection: isMobile || isTablet ? 'column' : 'row',
                gap: isMobile ? 32 : isTablet ? 36 : 52,
                alignItems: 'flex-start',
                padding: isMobile ? '24px 0 0' : '40px 0 0',
                marginBottom: 36,
              }}
            >
              <FadeUp style={{ flexShrink: 0, maxWidth: isMobile || isTablet ? '100%' : 560 }}>
                <h2 style={{
                  fontFamily: serif,
                  fontSize: isMobile ? 28 : 36,
                  lineHeight: isMobile ? '36px' : '40px',
                  fontWeight: 600,
                  color: '#fff',
                  margin: '0 0 24px',
                }}>
                  Explore, validate, and build 
                  <span style={{ color: red }}> enterprise systems with clarity</span>
                </h2>
                <p style={{
                  fontFamily: sans,
                  fontSize: isMobile ? 15 : 16,
                  fontWeight: 500,
                  lineHeight: isMobile ? '22px' : '24px',
                  color: '#E1E0E0',
                  margin: 0,
                }}>
                  AI Studio is a dedicated environment to explore real use cases, test ideas, and move from prototype to production with structure and speed.
                </p>
                <p style={{
                  fontFamily: sans,
                  fontSize: isMobile ? 15 : 16,
                  fontWeight: 500,
                  lineHeight: isMobile ? '22px' : '24px',
                  color: '#E1E0E0',
                  margin: '10px 0 0',
                }}>
                  Built on the Technossus Delivery Framework with pre-built accelerators, it helps you create scalable, governed systems aligned with enterprise architecture.
                </p>
              </FadeUp>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                  gap: isMobile ? 16 : 24,
                  flex: isMobile || isTablet ? undefined : 1,
                  width: isMobile || isTablet ? '100%' : undefined,
                }}
              >
                {whatIsAiStudioItems.map((item, i) => (
                  <FadeUp key={item.num} delay={i * 80}>
                    <article
                      style={{
                        borderLeft: '1px solid #ADADAD',
                        paddingLeft: isMobile ? 16 : 21,
                        paddingRight: isMobile ? 0 : 12,
                        paddingTop: 12,
                        paddingBottom: 12,
                        boxSizing: 'border-box',
                      }}
                    >
                      <Image
                        src={imgViewInAr}
                        alt=""
                        aria-hidden
                        width={40}
                        height={40}
                        style={{ display: 'block', marginBottom: 12 }}
                      />
                      <h3 style={{ fontFamily: sans, fontWeight: 600, fontSize: 20, lineHeight: '28px', color: '#fff', margin: '0 0 12px' }}>
                        {item.title}
                      </h3>
                      <p style={{ fontFamily: sans, fontWeight: 500, fontSize: 14, lineHeight: '20px', color: '#DEDEDE', margin: 0 }}>
                        {item.description}
                      </p>
                    </article>
                  </FadeUp>
                ))}
              </div>
            </div>

            <CTABanner
              size="small"
              heading="Explore these in a working environment"
              body="Test, validate, and experience what's possible inside AI Studio."
              primaryCta="Explore AI Studio"
              onPrimary={() => router.push('/ai-studio')}
              fullWidthMobileAction
            />
          </div>
        </div>
      </section>

       {/* ── WHAT WE DELIVER ──────────────────────────────────────────────────── */}
      <section style={sectionBlock('#fff')}>
        <div style={inner}>
          <FadeUp duration={500}><Tag label="INTEGRATED CAPABILITIES" /></FadeUp>
          <FadeUp>
            <h2 style={{
              fontFamily: serif,
              fontSize: shSize, lineHeight: shLine,
              fontWeight: 500, color: '#1E1E1E',
              marginTop: 16, marginBottom: 0,
            }}>
              What we <span style={{ color: red }}>deliver.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={60}>
            <div style={{ display: 'grid', gridTemplateColumns: cols3, gap: isMobile ? 16 : 16, marginTop: 36 }}>
              {[
                { title: 'AI Led Transformation', description: 'Revolutionizing enterprise workflows through custom LLM integration and proprietary cognitive automation engines designed for scale.', image: imgSvcAI },
                { title: 'Cloud & Product Modernization', description: 'Lift, refactor, and run smarter — migrating monoliths to cloud-native architectures without sacrificing reliability.', image: imgSvcCloud },
                { title: 'Data Intelligence & Analytics', description: 'Closing the gap between data and decision with conversational analytics, predictive intelligence, governance, and unstructured data.', image: imgSvcData },
                { title: 'Digital Experience Design', description: 'Crafting human-centric interfaces for complex technical systems, balancing utility with an uncompromising editorial aesthetic.', image: imgSvcDigital },
                { title: 'Product Engineering & Sustained Operations', description: 'From first prototype to scaled platform, we support discovery, integration, modernization, and continuous delivery with your team.', image: imgSvcProduct },
                { title: 'Quality Engineering & Verification', description: 'Implementing automated testing frameworks and formal verification methods to ensure absolute reliability in high-stakes environments.', image: imgSvcQuality },
              ].map((card, i) => (
                <Card
                  key={i}
                  mode="light"
                  type="deliver"
                  image={card.image}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
      {/* ── FEATURED CASE STUDY ──────────────────────────────────────────────── */}
      <section style={sectionBlock('#fff')}>
        <div style={inner}>
          <FadeUp duration={500}><Tag label="FEATURED CASE STUDY" /></FadeUp>
          <FadeUp delay={60}>
            <div style={{ marginTop: 32 }}>
              <Card
                mode="dark"
                type="large"
                category="HEALTHCARE"
                heading="Home Care Operations, Automated at Scale."
                body="Transformed authorization, billing, and supply reorder workflows for a national home care leader, clearing manual bottlenecks across order entry and insurance while moving millions of transactions cleanly.
$1.5M+ ANNUAL LABOR SAVINGS 
DENIALS 11% → 9% ON $4B REVENUE"
                image={imgCaseStudy}
                hideImageOnTablet
                stats={[
                  { value: '$50M+', label: 'TOTAL COST SAVING' },
                  { value: '20,000+', label: 'ORDERS PLACED SUCCESSFULLY' },
                ]}
                primaryLabel="View Case Study"
                secondaryLabel="View All"
                onPrimary={() => router.push(healthcareCaseStudiesHref)}
                onSecondary={() => router.push(caseStudiesHref)}
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── LATEST INSIGHTS ──────────────────────────────────────────────────── */}
      <section style={sectionBlock('#fff')}>
        <div style={inner}>
          <FadeUp duration={500}><Tag label="INSIGHTS" /></FadeUp>
          <FadeUp>
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'flex-start' : 'flex-end',
              justifyContent: 'space-between',
              gap: 8,
              marginTop: 16, marginBottom: 32,
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h2 style={{
                  fontFamily: serif,
                  fontSize: shSize, lineHeight: shLine,
                  fontWeight: 500, color: '#1E1E1E', margin: 0,
                }}>
                  Latest <span style={{ color: red }}>insights.</span>
                </h2>
                <p style={{
                  fontFamily: sans, fontSize: isMobile ? 15 : 18, fontWeight: 500,
                  color: '#5C5C5C', lineHeight: isMobile ? '22px' : '24px', margin: 0,
                }}>
                  Thinking and perspectives from our domain experts.
                </p>
              </div>
              <a href="/case-studies" style={{
                fontFamily: sans, fontSize: 16, fontWeight: 600,
                color: red, textDecoration: 'underline',
                whiteSpace: 'nowrap', flexShrink: 0, lineHeight: '28px',
              }}>
                View All
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={60}>
            <div style={{ display: 'grid', gridTemplateColumns: cols3, gap: isMobile ? 16 : 32 }}>
              {[
                { tags: 'FINTECH • PLATFORM MODERNIZATION', title: 'Architecting a High-Frequency Trading Engine for Global Markets', excerpt: 'We overhauled the legacy infrastructure of a Tier-1 financial institution, reducing latency by 40% using event-driven microservices and localized data centers.' },
                { tags: 'HEALTHCARE • AI AUTOMATION', title: 'Automating Prior Auth with AI: 60% Faster Approvals in Clinical Workflows', excerpt: 'A payer-provider integration that cut prior authorization turnaround from days to hours by embedding AI decision layers into existing clinical systems.' },
                { tags: 'DATA ENGINEERING • ANALYTICS', title: 'Building a Real-Time Analytics Platform for Enterprise Decision Intelligence', excerpt: 'How we replaced a batch-heavy data warehouse with a streaming architecture that delivers insights 14x faster across 12 business units.' },
              ].map((card, i) => (
                <Card
                  key={i}
                  mode="light"
                  type="insights"
                  image={imgCardPhoto}
                  tags={card.tags}
                  title={card.title}
                  excerpt={card.excerpt}
                  ctaLabel="Read More"
                />
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── WHY TECHNOSSUS ───────────────────────────────────────────────────── */}
      <section style={sectionBlock('#fff')}>
        <div style={inner}>
          <FadeUp duration={500}><Tag label="INSIGHTS" style={{marginBottom: 16}} /></FadeUp>
          <div style={{ background: dark2, position: 'relative', overflow: 'hidden', width: '100%' }}>
            {!isMobile && <CornerTL />}
            {!isMobile && <CornerBR />}
            <div style={panelInner}>
              <FadeUp>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 0, marginBottom: 36 }}>
                  <h2 style={{
                    fontFamily: serif,
                    fontSize: shSize, lineHeight: shLine,
                    fontWeight: 500, color: red, margin: 0,
                  }}>
                    Why Technossus
                  </h2>
                  <p style={{
                    fontFamily: sans, fontSize: isMobile ? 15 : 18, fontWeight: 500,
                    color: '#fff', lineHeight: isMobile ? '22px' : '24px', margin: 0,
                  }}>
                    We don't just build software; we engineer competitive advantages through technological precision.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={60}>
                <div style={{ display: 'grid', gridTemplateColumns: cols3, gap: isMobile ? 16 : 24 }}>
                  {[
                    { icon: imgIconOutcome, title: 'Embedded Delivery', description: "We work as an extension of your team , your governance, your cadence, your decisions. Engineers are embedded in your delivery, not parachuted in to disappear." },
                    { icon: imgIconScale, title: 'Built to Hand Off', description: "When the engagement ends, your team owns the architecture. Capability transfers as we build — which is how we've maintained 90%+ client retention across 15+ years." },
                    { icon: imgIconScale, title: 'Weeks, Not Quarters', description: 'AI-accelerated engineering compresses idea to evidence into weeks. Speed comes from eliminating waste, not from skipping what matters, your quality bar stays intact.' },
                    { icon: imgIconEnhance, title: 'Consulting Meets Engineering', description: 'We own the intersection of consultative thinking and expert engineering, strategy you can act on, and systems your team can defend in front of a board.' },
                    { icon: imgIconScale, title: 'Outcomes That Land', description: "Investment accountability is part of delivery. What you approved is what gets built, and every decision traces back to the outcome it was meant to shape." },
                    { icon: imgIconScale, title: 'Simplify Complexity', description: 'We build architectures designed to manage massive scale and inherent technical complexity while ensuring security and adaptability for evolving needs.' },
                  ].map(card => (
                    <Card
                      key={card.title}
                      mode="dark"
                      type="small"
                      icon={<Image src={card.icon} alt="" width={28} height={28} style={{ width: 'auto', height: 28 }} />}
                      title={card.title}
                      description={card.description}
                      style={{border:"1px solid #FFFFFF08"}}
                    />
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <section style={sectionBlock('#fff')}>
        <div style={inner}>
          <FadeUp duration={500}><Tag label="TESTIMONIALS" /></FadeUp>

          <FadeUp>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16, marginBottom: 48 }}>
              <h2 style={{
                fontFamily: serif,
                fontSize: shSize, lineHeight: shLine,
                fontWeight: 500, color: red, margin: 0,
              }}>
                Hear what our clients have to say.
              </h2>
              <p style={{
                fontFamily: sans, fontSize: isMobile ? 15 : 18, fontWeight: 500,
                color: '#5C5C5C', lineHeight: isMobile ? '22px' : '24px', margin: 0,
              }}>
                Real experiences, trusted partnerships, and measurable impact from the businesses we've helped transform.
              </p>
            </div>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: cols3, gap: isMobile ? 16 : 24 }}>
            <Testimonial
              color="white"
              quote={`"Flawless rollout of New Relic with no downtime and no change window allows CommonSpirit Health deep understanding of consumer experience. Net savings on overall costs by delivering projects with half of the requested staff — 'Ridiculously Qualified Team.'"`}
              authorName="Jeffrey Harker"
              authorTitle="System Manager Cloud Engineering"
              authorImage={imgAuthorJeffrey}
            />
            <Testimonial
              color="red"
              quote={`"Technossus has been a game-changer for AdaptHealth. Their dedication to quality and commitment to continuous improvement is unmatched. Their adaptability and willingness to learn make them the perfect partner. The team is knowledgeable, skilled, and go beyond to exceed expectations."`}
              authorName="Anita Salgado"
              authorTitle="Senior Business Systems Analyst"
              authorImage={imgAuthorAnita}
            />
            <Testimonial
              color="white"
              quote={`"We are very pleased with the quality of service the Technossus team has provided to the BTX lab. The lab sincerely appreciates the team's responsiveness and attention to detail in building new features into our LIMS and for the resolution of production issues."`}
              authorName="Tyler Zucchiatti"
              authorTitle="Director, Software Development – Middleware & Integration"
              authorImage={imgAuthorTyler}
            />
          </div>
        </div>
      </section>

      {/* ── CTA BANNER LARGE ─────────────────────────────────────────────────── */}
      <section style={sectionBlock('#fff')}>
        <div style={inner}>
          <CTABanner
            size="large"
            label="LET'S WORK ON IT TOGETHER"
            heading="Ready to accelerate your digital & AI journey?"
            body="Whether you're modernizing systems, building a new product, or scaling engineering, we're ready to collaborate."
            primaryCta="Schedule a Strategy Session"
            secondaryCta="Contact Us"
            onSecondary={() => router.push('/contact')}
            centerOnMobile
            style={{ width: '100%', maxWidth: 'none' }}
          />
        </div>
      </section>
      <div style={{ height: isMobile ? 48 : 80 }} />
    </main>
  );
}
