import React from 'react';
import { Tag }         from '../../components/Tag';
import { Stats }       from '../../components/Stats';
import { Testimonial } from '../../components/Testimonial';
import { CTABanner }   from '../../components/CTABanner';
import { Button }      from '../../components/Button';
import { Card }        from '../../components/Card';
import { FadeUp }      from '../../components/Animate/FadeUp';
import { useBreakpoint } from '../../ts/breakpoints';
import { DecorativeOverlay, DecorativeImage } from '../../components/DecorativeMedia';
import imgCollaborators  from '../../assets/Website_images 2/Logo.png';
import imgAuthorJeffrey  from '../../assets/testimonials/Jaffrey.png';
import imgAuthorAnita    from '../../assets/testimonials/anita.png';
import imgAuthorTyler    from '../../assets/testimonials/Tyler.png';
import imgSvcAI          from '../../assets/Website_Images/Services/AI Led Transformation.png';
import imgSvcCloud       from '../../assets/Website_Images/Services/Cloud consulting.png';
import imgSvcData        from '../../assets/Website_Images/Services/Data Intelligence.png';
import imgSvcDigital     from '../../assets/Website_Images/Services/Digital Exp..png';
import imgSvcProduct     from '../../assets/Website_Images/Services/Product Eng. .png';
import imgSvcQuality     from '../../assets/Website_Images/Services/Quality Eng..png';

// ─── Design tokens ────────────────────────────────────────────────────────────
const sans  = '"General Sans", system-ui, -apple-system, sans-serif';
const serif = '"Roboto Serif", Georgia, serif';
const red   = '#ED2939';
const dark1 = '#1B1B1B';
const dark2 = '#1E1E1E';

// ─── Figma asset URLs ─────────────────────────────────────────────────────────
// Hero
const imgHeroBg         = '/assets/cf9c112d09fc9f6437fa76b0e30e6382f36dc276.png';

// Search bar icons
const imgSearchAiStar   = '/assets/1396fbe0e7d98149afea22065d702750dbf4a387.svg';
const imgSearchSend     = '/assets/d884bbc847b6fe02ec374e4281caa99cdfc0977c.svg';

// Stats section — combined globe + network arc composition
const imgStatsComposed  = '/assets/215811fe-eab7-431c-9d72-d65f9783311c.png';

// Case Study
const imgCaseStudy      = '/assets/11485e6d5400122979be42e072e5eb53cb43660e.png';

// What We Deliver + Insights card image
const imgCardPhoto      = '/assets/fbbad1d37f7a4e076de4d16631dc6863c6c4444a.png';

// AI Studio medium card icon (document)
const imgDocumentIcon   = '/assets/e242e8576977e4f3d29c4be05ad738619168755a.svg';

// Why Technossus card icons
const imgIconOutcome    = '/assets/ac8dbae3d6a4ef3869c92f062ba66c3ebc0095c2.svg';
const imgIconScale      = '/assets/1842a7b6c6f7844a725781346897858a8c24e609.svg';
const imgIconEnhance    = '/assets/be00e1883e0f4b7bbdff5b000b66f3f1cfa30930.svg';

// Testimonial author images — imported at top of file

// Corner decorators (Figma Subtract SVGs)
const imgCornerTL       = '/assets/d3bd3c494981fc117beb9354c38eaf44f6d42039.svg';
const imgCornerBR       = '/assets/e35ee95a68b0f29bf73fcd76e8285772bff083b1.svg';

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
  const { isMobile, isTablet } = useBreakpoint();

  const inner: React.CSSProperties = {
    maxWidth: 1440,
    margin: '0 auto',
    padding: isMobile ? '48px 16px' : isTablet ? '60px 32px' : '80px 80px',
  };

  const h1Size = isMobile ? 28 : isTablet ? 36 : 48;
  const h1Line = isMobile ? '36px' : isTablet ? '44px' : '56px';

  const shSize = isMobile ? 24 : isTablet ? 30 : 36;
  const shLine = isMobile ? '32px' : isTablet ? '38px' : '40px';

  const cols3 = isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(3,1fr)';

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section style={{ background: dark1 }}>

        {/* Hero image + headline */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: isMobile ? 360 : isTablet ? 420 : 463,
          overflow: 'hidden',
        }}>
          {/* Background photo */}
          <img
            src={imgHeroBg}
            alt=""
            aria-hidden
            style={{
              position: 'absolute', top: 0, left: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center',
            }}
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
            padding: isMobile ? '48px 16px' : isTablet ? '60px 32px' : '110px 98px',
            zIndex: 2,
            display: 'flex', alignItems: 'flex-start',
            boxSizing: 'border-box',
          }}>
            <div style={{ maxWidth: 565, display: 'flex', flexDirection: 'column', gap: 43 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <FadeUp>
                  <h1 style={{
                    fontFamily: serif,
                    fontSize: h1Size, lineHeight: h1Line,
                    fontWeight: 500, letterSpacing: '-0.02em',
                    color: '#fff', margin: 0,
                  }}>
                    Hit the outcomes that matter,{' '}
                    <span style={{ color: red }}>Every time.</span>
                  </h1>
                </FadeUp>
                <FadeUp delay={80}>
                  <p style={{
                    fontFamily: sans,
                    fontSize: isMobile ? 14 : 18,
                    fontWeight: 500, lineHeight: '24px',
                    color: '#fff', margin: 0,
                  }}>
                   We identify what works, execute with precision, and turn effort into measurable results, faster.
                  </p>
                </FadeUp>
              </div>
              <FadeUp delay={120}>
                <div>
                  <Button variant="primary" label="Explore Solutions" href="/services" />
                </div>
              </FadeUp>
            </div>
          </div>
        </div>

        {/* ── Smart Search ── */}
        <div style={{
          background: '#010101',
          padding: isMobile ? '24px 16px' : isTablet ? '24px 32px' : '32px 24px',
          display: 'flex', flexDirection: 'column', gap: 24,
        }}>
          <div style={{
            maxWidth: 1392, margin: '0 auto', width: '100%',
            display: 'flex', flexDirection: 'column', gap: 24,
          }}>
            {/* AI Search bar */}
            <div style={{
              background: '#fff',
              height: 65,
              borderRadius: 9999,
              border: '1px solid #F5F5F5',
              boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)',
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 17px 0 25px',
              boxSizing: 'border-box',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src={imgSearchAiStar} alt="" style={{ width: 20, height: 20, flexShrink: 0 }} />
                <span style={{
                  fontFamily: sans, fontSize: 16, fontWeight: 500,
                  color: '#949494', lineHeight: '24px',
                }}>
                  Ask about services, industries, solutions, or case studies
                </span>
              </div>
              <div style={{
                background: dark2, borderRadius: 22, padding: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <img src={imgSearchSend} alt="Send" style={{ width: 24, height: 24 }} />
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
                  justifyContent: 'center', gap: 16, flexWrap: 'wrap',
                }}>
                  {['AI Adoption Strategy', 'Modernize Platforms', 'Data Analytics', 'Healthcare IT', 'Product Engineering'].map(chip => (
                    <button key={chip} style={{
                      display: 'inline-flex', alignItems: 'center',
                      height: 48, padding: '0 20px', borderRadius: 37,
                      background: '#383838', border: 'none',
                      fontFamily: sans, fontSize: 16, fontWeight: 500,
                      color: '#fff', cursor: 'pointer', lineHeight: '24px',
                    }}>
                      {chip}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', overflow: 'hidden' }}>
        <div style={inner}>
          <FadeUp duration={500}><Tag label="STATISTICS" /></FadeUp>
          <FadeUp>
            <h2 style={{
              fontFamily: serif,
              fontSize: shSize, lineHeight: shLine,
              fontWeight: 500, color: '#1E1E1E',
              marginTop: 16, marginBottom: 0,
            }}>
              Trusted by <span style={{ color: red }}>leaders.</span>
            </h2>
          </FadeUp>

          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? 40 : 0,
            alignItems: 'flex-start',
            marginTop: 67,
            position: 'relative',
            minHeight: isMobile ? undefined : 453,
          }}>
            {/* Stats grid */}
            <div style={{
              flex: isMobile ? undefined : '0 0 524px',
              background: '#F9F9F9',
              padding: 24,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '32px 76px',
              width: isMobile ? '100%' : undefined,
              boxSizing: 'border-box',
            }}>
              <Stats value="250+" label="CONSULTANTS" />
              <Stats value="150+" label="GLOBAL CLIENTS" />
              <Stats value="15+"  label="YEARS EXPERIENCE" />
              <Stats value="98%"  label="CLIENT RETENTION" />
            </div>

            {/* Globe + arc composition — single inline SVG so image href resolves in DOM */}
            {!isMobile && (
              <DecorativeOverlay top={-80} right={isTablet ? -32 : -80} width={608} height={453}>
                <DecorativeImage
                  src={imgStatsComposed}
                  top={0} left={0}
                  width={608} height={453}
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
          padding: isMobile ? '24px 16px' : '10px 80px 32px',
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
          <img
            src={imgCollaborators}
            alt="Our collaborators"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </section>

      {/* ── FEATURED CASE STUDY ──────────────────────────────────────────────── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <FadeUp duration={500}><Tag label="FEATURED CASE STUDY" /></FadeUp>
          <FadeUp delay={60}>
            <div style={{ marginTop: 32 }}>
              <Card
                mode="dark"
                type="large"
                category="HEALTHCARE"
                heading="Automating Home Care Operations for Unprecedented Efficiency."
                body="Transformed high-volume operational workflows with RPA and Smart Rules, eliminating manual bottlenecks across order entry, billing, and insurance, while enabling seamless management of thousands of daily transactions."
                image={imgCaseStudy}
                stats={[
                  { value: '$50M+',   label: 'TOTAL COST SAVING' },
                  { value: '20,000+', label: 'ORDERS PLACED SUCCESSFULLY' },
                ]}
                primaryLabel="View All Case Study"
                secondaryLabel="View All"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── WHAT WE DELIVER ──────────────────────────────────────────────────── */}
      <section style={{ background: '#fff' }}>
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
            <div style={{ display: 'grid', gridTemplateColumns: cols3, gap: 16, marginTop: 36 }}>
              {[
                { title: 'AI Led Transformation',                       description: 'Revolutionizing enterprise workflows through custom LLM integration and proprietary cognitive automation engines designed for scale.',          image: imgSvcAI      },
                { title: 'Cloud & Product Modernization',               description: 'Lift, refactor, and run smarter — migrating monoliths to cloud-native architectures without sacrificing reliability.',                          image: imgSvcCloud   },
                { title: 'Data Intelligence & Analytics',               description: 'Turn raw data into decision-grade intelligence with real-time pipelines, semantic layers, and AI-powered insight delivery.',                     image: imgSvcData    },
                { title: 'Digital Experience Design',                   description: 'Crafting human-centric interfaces for complex technical systems, balancing utility with an uncompromising editorial aesthetic.',                  image: imgSvcDigital },
                { title: 'Product Engineering & Sustained Operations',  description: 'End-to-end software lifecycle management, from rapid prototyping to mission-critical maintenance and DevOps optimization.',                     image: imgSvcProduct },
                { title: 'Quality Engineering & Verification',          description: 'Implementing automated testing frameworks and formal verification methods to ensure absolute reliability in high-stakes environments.',           image: imgSvcQuality },
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

      {/* ── AI STUDIO ────────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <FadeUp duration={500}><Tag label="AI SOLUTIONS AND ACCELERATORS" /></FadeUp>
          <div style={{
            marginTop: 16,
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: dark2,
            padding: isMobile ? '48px 24px' : isTablet ? '60px 32px' : 56,
          }}>
            <CornerTL />
            <CornerBR />

            <FadeUp>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 36 }}>
                <h2 style={{
                  fontFamily: serif,
                  fontSize: shSize, lineHeight: shLine,
                  fontWeight: 500, color: '#fff',
                  maxWidth: 731, margin: 0,
                }}>
                  See AI in action, before you build at{' '}
                  <span style={{ color: red }}>Technossus AI Studio</span>
                  {' - TAS'}
                </h2>
                <p style={{
                  fontFamily: sans, fontSize: 18, fontWeight: 500,
                  color: '#F9FAFB', lineHeight: '24px', margin: 0,
                }}>
                  Explore real AI systems you can test before committing to build.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={60}>
              <div style={{ display: 'grid', gridTemplateColumns: cols3, gap: 20, marginBottom: 36 }}>
                {[
                  { category: 'AGENTIC OPERATIONS', title: 'Coordinate multi-step AI workflows', description: 'Deploy agents that reason, route, and act — handling approval chains, escalations, and data handoffs without human orchestration at every step.',                                        ctaLabel: 'Try in AI Studio' },
                  { category: 'FASTER PROCESSING',  title: 'Automate document workflows',        description: 'Use advanced machine learning to automatically extract and categorize data from complex documents. Streamline pipelines and eliminate manual entry to accelerate high-volume processing.',  ctaLabel: 'Try in AI Studio' },
                  { category: 'INTELLIGENT SEARCH', title: 'Surface insights from your data',    description: 'Connect your enterprise knowledge base to conversational AI that understands context, retrieves accurately, and scales across every team without custom pipelines.',                       ctaLabel: 'Try in AI Studio' },
                ].map(card => (
                  <Card
                    key={card.category}
                    mode="dark"
                    type="medium"
                    icon={imgDocumentIcon}
                    category={card.category}
                    title={card.title}
                    description={card.description}
                    ctaLabel={card.ctaLabel}
                  />
                ))}
              </div>
            </FadeUp>

            <CTABanner
              size="small"
              heading="Explore these in a working environment"
              body="Test, validate, and experience what's possible inside AI Studio."
              primaryCta="Explore AI Studio"
            />
          </div>
        </div>
      </section>

      {/* ── LATEST INSIGHTS ──────────────────────────────────────────────────── */}
      <section style={{ background: '#fff' }}>
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
                  fontFamily: sans, fontSize: 18, fontWeight: 500,
                  color: '#5C5C5C', lineHeight: '24px', margin: 0,
                }}>
                  Thinking and perspectives from our domain experts.
                </p>
              </div>
              <a href="#" style={{
                fontFamily: sans, fontSize: 16, fontWeight: 600,
                color: red, textDecoration: 'underline',
                whiteSpace: 'nowrap', flexShrink: 0, lineHeight: '28px',
              }}>
                View All
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={60}>
            <div style={{ display: 'grid', gridTemplateColumns: cols3, gap: 32 }}>
              {[
                { tags: 'FINTECH • PLATFORM MODERNIZATION', title: 'Architecting a High-Frequency Trading Engine for Global Markets',           excerpt: 'We overhauled the legacy infrastructure of a Tier-1 financial institution, reducing latency by 40% using event-driven microservices and localized data centers.' },
                { tags: 'HEALTHCARE • AI AUTOMATION',       title: 'Automating Prior Auth with AI: 60% Faster Approvals in Clinical Workflows', excerpt: 'A payer-provider integration that cut prior authorization turnaround from days to hours by embedding AI decision layers into existing clinical systems.' },
                { tags: 'DATA ENGINEERING • ANALYTICS',     title: 'Building a Real-Time Analytics Platform for Enterprise Decision Intelligence', excerpt: 'How we replaced a batch-heavy data warehouse with a streaming architecture that delivers insights 14x faster across 12 business units.' },
              ].map((card, i) => (
                <Card
                  key={i}
                  mode="light"
                  type="insights"
                  image={imgCardPhoto}
                  tags={card.tags}
                  title={card.title}
                  excerpt={card.excerpt}
                  ctaLabel="See How We Work"
                />
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── WHY TECHNOSSUS ───────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1440, margin: '0 auto', marginBottom: isMobile ? 12 : 16, padding: isMobile ? '0 16px' : isTablet ? '0 32px' : '0 80px', background: '#fff' }}>
        <FadeUp duration={500}><Tag label="TECHNOSSUS" variant="dark" /></FadeUp>
      </div>
      <section style={{ background: dark2, position: 'relative', overflow: 'hidden', maxWidth: 1280, margin:"0px auto" }}>
        <CornerTL />
        <CornerBR />
        <div style={inner}>
          <FadeUp>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 0, marginBottom: 36 }}>
              <h2 style={{
                fontFamily: serif,
                fontSize: shSize, lineHeight: shLine,
                fontWeight: 500, margin: 0,
              }}>
                <span style={{ color: '#fff' }}>Why </span>
                <span style={{ color: red }}>Technossus</span>
              </h2>
              <p style={{
                fontFamily: sans, fontSize: 18, fontWeight: 500,
                color: '#fff', lineHeight: '24px', margin: 0,
              }}>
                We don't just build software; we engineer competitive advantages through technological precision.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={60}>
          <div style={{ display: 'grid', gridTemplateColumns: cols3, gap: 24 }}>
            {[
              { icon: imgIconOutcome, title: 'Outcome Driven',      description: 'Our systems are meticulously designed to scale operations and unlock new growth opportunities, ensuring measurable impact on your bottom line.' },
              { icon: imgIconScale,   title: 'Scale AI',            description: 'Rapidly scale your business operations through high-performance engineering that integrates advanced AI models into your existing enterprise infrastructure.' },
              { icon: imgIconScale,   title: 'Speed To Market',     description: 'Accelerate your product roadmap and launch faster with AI-powered engineering cycles that significantly reduce time-to-market while maintaining quality.' },
              { icon: imgIconEnhance, title: 'Enhance Experience',  description: 'We engineer intuitive, high-performance digital products that elevate user engagement and foster long-term brand loyalty through seamless experiences.' },
              { icon: imgIconScale,   title: 'Integrated Approach', description: 'Our methodology bridges the gap between high-level product strategy, user-centric design, and robust technical engineering for unified results.' },
              { icon: imgIconScale,   title: 'Simplify Complexity', description: 'We build architectures designed to manage massive scale and inherent technical complexity while ensuring security and adaptability for evolving needs.' },
            ].map(card => (
              <Card
                key={card.title}
                mode="dark"
                type="small"
                icon={<img src={card.icon} alt="" style={{ width: 'auto', height: 28 }} />}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
          </FadeUp>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <FadeUp duration={500}><Tag label="TESTIMONIALS" /></FadeUp>

          <FadeUp>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16, marginBottom: 48 }}>
            <h2 style={{
              fontFamily: serif,
              fontSize: shSize, lineHeight: shLine,
              fontWeight: 500, color: '#010101', margin: 0,
            }}>
              Hear what{' '}
              <span style={{ color: red }}>our clients have to say.</span>
            </h2>
            <p style={{
              fontFamily: sans, fontSize: 18, fontWeight: 500,
              color: '#5C5C5C', lineHeight: '24px', margin: 0,
            }}>
              Real experiences, trusted partnerships, and measurable impact from the businesses we've helped transform.
            </p>
          </div>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: cols3, gap: 24 }}>
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
      <CTABanner
        size="large"
        label="LET'S WORK ON IT TOGETHER"
        heading="Ready to accelerate your digital & AI journey ?"
        body="Whether you're modernizing systems, building a new product, or scaling engineering, we're ready to collaborate."
        primaryCta="Schedule a Strategy Session"
        secondaryCta="Contact Us"
      />
      <div style={{ height: isMobile ? 48 : 80 }} />
    </>
  );
}
