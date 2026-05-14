'use client';

import React, { useState } from 'react';
import { Tag }        from '../../components/Tag';
import { Stats }      from '../../components/Stats';
import { CTABanner }  from '../../components/CTABanner';
import { Button }     from '../../components/Button';
import { Card }       from '../../components/Card';
import { Chips }      from '../../components/Chips';
import { SearchBar }  from '../../components/SearchBar';
import { FadeUp }     from '../../components/Animate/FadeUp';
import { useBreakpoint } from '../../ts/breakpoints';
import { resolveImageSrc } from '../../ts/imageSrc';

import imgCollaborators from '../../assets/Website_images 2/Logo.png';
import imgSvcAI         from '../../assets/Website_Images/Services/AI Led Transformation.png';
import imgSvcData       from '../../assets/Website_Images/Services/Data Intelligence.png';
import imgSvcCloud      from '../../assets/Website_Images/Services/Cloud consulting.png';
import imgSvcDigital    from '../../assets/Website_Images/Services/Digital Exp..png';
import imgSvcProduct    from '../../assets/Website_Images/Services/Product Eng. .png';
import imgFeaturedPhoto from '../../assets/Website_Images/Services/Ai-studio-image.png';

// ─── Design tokens ────────────────────────────────────────────────────────────
const sans   = '"General Sans", system-ui, -apple-system, sans-serif';
const serif  = '"Roboto Serif", Georgia, serif';
const red    = '#ED2939';
const dark1  = '#050510';
const dark2  = '#1E1E1E';

// ─── Figma asset URLs ─────────────────────────────────────────────────────────
const imgHeroBg      = '/assets/cf9c112d09fc9f6437fa76b0e30e6382f36dc276.png';
const imgCornerSvgTL = '/assets/d3bd3c494981fc117beb9354c38eaf44f6d42039.svg';
const imgCornerSvgBR = '/assets/e35ee95a68b0f29bf73fcd76e8285772bff083b1.svg';
const imgCardPhoto   = '/assets/fbbad1d37f7a4e076de4d16631dc6863c6c4444a.png';
const imgArrow       = '/assets/5ab4759937e9a9e8b7e9cb731f7784df694959c0.svg';

// ─── Red corner decorators ────────────────────────────────────────────────────
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

// ─── Data ────────────────────────────────────────────────────────────────────

const statsData = [
  { value: '48+',  label: 'POCS SHAPED AND SHIPPED' },
  { value: '12+',  label: 'LIVE DEMOS AVAILABLE' },
  { value: '240+', label: 'STUDIO MEMBERS AND COLLABORATORS' },
  { value: '4+',   label: 'INDUSTRIES REPRESENTED' },
];

const whatIsItems = [
  {
    num: '01',
    title: 'An Innovation Lab',
    description: 'Explore working AI demos by industry. Watch use case videos and test ideas in a safe environment before committing a sprint to anything.',
  },
  {
    num: '02',
    title: 'Accelerators',
    description: 'Pre-built, production-tested AI frameworks ready to plug into your stack. All the hard setup is done — just add your context and go.',
  },
  {
    num: '03',
    title: 'Collaborate',
    description: 'A curated space for enterprise leaders, practitioners, and partners sharing what works, co-creating in sprints, and shaping how AI gets applied at scale.',
  },
  {
    num: '04',
    title: 'The Framework',
    description: 'The TAS Delivery Framework is our structured AI SDLC — taking validated prototypes to production safely, with governance and adoption built in at every stage.',
  },
];

const engagementFormats = [
  {
    duration: '12-24 HOURS',
    title: 'Half-day or Full-Day',
    description: 'Identify where AI can create the most meaningful value in your business. Walk away with a prioritized use case map and a clearer view of where to begin.',
  },
  {
    duration: '1-3 DAYS',
    title: 'AI Design Sprint',
    description: 'Identify where AI can create the most meaningful value in your business. Walk away with a prioritized use case map and a clearer view of where to begin.',
  },
  {
    duration: '1-2 WEEKS',
    title: 'AI Build Sprint',
    description: 'Identify where AI can create the most meaningful value in your business. Walk away with a prioritized use case map and a clearer view of where to begin.',
  },
  {
    duration: '2-4 WEEKS',
    title: 'PoC Development',
    description: 'Build a stakeholder-ready proof of concept with defined business value, technical feasibility, and a path toward production.',
  },
];

const deliverySteps = [
  {
    num: '01',
    title: 'Discover & Frame',
    description: 'Identify high-impact AI opportunities and validate feasibility before any build begins.',
  },
  {
    num: '02',
    title: 'Design & Prototype',
    description: 'Rapid prototyping in the lab — co-created with your team, validated with real users.',
  },
  {
    num: '03',
    title: 'Build & Integrate',
    description: 'Production-grade AI engineering using TAS accelerators integrated securely into your stack.',
  },
  {
    num: '04',
    title: 'Govern & Validate',
    description: 'Responsible AI guardrails and compliance controls built in, not bolted on after deployment.',
  },
  {
    num: '05',
    title: 'Deploy & Adapt',
    description: 'Structured rollout and user enablement — because software nobody uses isn\'t a success.',
  },
  {
    num: '06',
    title: 'Monitor & Improve',
    description: 'Continuous monitoring and model drift detection — AI that gets better over time, not stale.',
  },
];

const capabilities = [
  {
    icon: '💬',
    title: 'Generative AI & LLMs',
    description: 'Custom LLM fine-tuning and GenAI feature design built for enterprise workflows, not consumer demos.',
  },
  {
    icon: '🤖',
    title: 'Autonomous Agents',
    description: 'Multi-agent systems that reason, plan, and execute complex workflows — from document processing to operational automation.',
  },
  {
    icon: '🗄️',
    title: 'RAG & Knowledge Systems',
    description: 'Retrieval-augmented generation on your enterprise data — grounded answers, no hallucinations, full auditability.',
  },
  {
    icon: '📊',
    title: 'Predictive Analytics',
    description: 'ML models that forecast demand, detect risk, and surface actionable signals — trained on your data.',
  },
  {
    icon: '💻',
    title: 'AI-Native Product Features',
    description: 'Embedding intelligence into your SaaS or enterprise product — co-pilots, adaptive interfaces, recommendations users trust.',
  },
  {
    icon: '📄',
    title: 'Intelligent Document Processing',
    description: 'Extract, classify, and validate information from unstructured documents at scale — contracts, claims, clinical notes.',
  },
  {
    icon: '🔄',
    title: 'Responsible AI & Governance',
    description: 'Bias detection, explainability frameworks, and compliance controls built in from the start.',
  },
  {
    icon: '✨',
    title: 'AI UX & Interaction Design',
    description: 'Explainable interactions, adaptive interfaces, and UX patterns that make AI feel intuitive, not intrusive.',
  },
];

const quickPicks = [
  'AI Adoption Strategy',
  'Modernize Platforms',
  'Data Analytics',
  'Healthcare IT',
  'Product Engineering',
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AIStudio() {
  const { isMobile, isTablet } = useBreakpoint();
  const [searchQuery, setSearchQuery] = useState('');


  const px = isMobile ? 12 : isTablet ? 32 : 80;
  const sectionPaddingY = isMobile ? 48 : isTablet ? 60 : 80;
  const inner: React.CSSProperties = {
    maxWidth: 1440,
    margin: '0 auto',
    paddingLeft: px,
    paddingRight: px,
    boxSizing: 'border-box',
  };
  const darkPanelPadding = isMobile ? '32px 16px' : isTablet ? '48px 32px' : 56;

  // ── Section label styles ─────────────────────────────────────────────────
  const sectionH2: React.CSSProperties = {
    fontFamily: serif,
    fontWeight: 600,
    fontSize: isMobile ? 28 : isTablet ? 36 : 48,
    lineHeight: isMobile ? '36px' : isTablet ? '44px' : '56px',
    color: '#1E1E1E',
    margin: 0,
  };

  const sectionH2Dark: React.CSSProperties = {
    ...sectionH2,
    color: '#FFFFFF',
  };

  const sectionSubtitle: React.CSSProperties = {
    fontFamily: sans,
    fontWeight: 500,
    fontSize: isMobile ? 15 : 16,
    lineHeight: '24px',
    color: '#5C5C5C',
    margin: 0,
    maxWidth: 900,
  };

  const sectionSubtitleDark: React.CSSProperties = {
    ...sectionSubtitle,
    color: '#E1E0E0',
  };

  return (
    <main style={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        aria-label="AI Studio hero"
        style={{ backgroundColor: dark1, position: 'relative', overflow: 'hidden' }}
      >
        {/* Hero bg overlay */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${imgHeroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.18,
            pointerEvents: 'none',
          }}
        />

        <div style={{ ...inner, position: 'relative', zIndex: 1, paddingTop: sectionPaddingY, paddingBottom: 0 }}>
          {/* Eyebrow */}
          <FadeUp>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 32, flexWrap: 'wrap' }}>
              <Tag label="TAS" variant="light" />
              <Tag label="AI STUDIO" variant="light" />
            </div>
          </FadeUp>

          {/* Headline + body */}
          <FadeUp delay={80}>
            <div style={{ maxWidth: 740 }}>
              <h1
                style={{
                  fontFamily: serif,
                  fontWeight: 500,
                  fontSize: isMobile ? 36 : isTablet ? 40 : 48,
                  lineHeight: isMobile ? '44px' : isTablet ? '52px' : '56px',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  margin: '0 0 16px',
                }}
              >
                Shape the{' '}
                <span style={{ color: red }}>future of technology</span>
              </h1>
              <p
                style={{
                  fontFamily: sans,
                  fontWeight: 500,
                  fontSize: isMobile ? 16 : 18,
                  lineHeight: '24px',
                  color: '#FFFFFF',
                  margin: 0,
                }}
              >
                We're more than a company, we're a hub of innovation, collaboration, and
                continuous learning. If you're passionate about technology and making real
                impact, your next chapter starts here.
              </p>
            </div>
          </FadeUp>

          {/* CTA buttons */}
          <FadeUp delay={160}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: isMobile ? 32 : 60, width: isMobile ? '100%' : undefined }}>
              <Button variant="primary" label="Show us the problem" style={isMobile ? { width: '100%' } : undefined} />
              <Button variant="secondary" label="See How We Work" style={isMobile ? { width: '100%' } : undefined} />
            </div>
          </FadeUp>

          {/* Smart Search */}
          <FadeUp delay={240}>
            <div style={{ marginTop: isMobile ? 40 : 56, paddingBottom: sectionPaddingY }}>
              <SearchBar
                placeholder="Ask about AI use cases, accelerators, industries, or sprints…"
                value={searchQuery}
                onChange={setSearchQuery}
                onSubmit={(v) => console.log('search:', v)}
              />

              {/* Quick picks */}
              <div style={{ marginTop: 20 }}>
                {/* Divider with label */}
                <div style={{ display: isMobile ? 'none' : 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                  <div style={{ flex: 1, height: 1, backgroundColor: 'rgba(255,255,255,0.12)' }} />
                  <span
                    style={{
                      fontFamily: sans, fontWeight: 500,
                      fontSize: 13, lineHeight: '20px',
                      color: 'rgba(255,255,255,0.5)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Quick picks to get you started
                  </span>
                  <div style={{ flex: 1, height: 1, backgroundColor: 'rgba(255,255,255,0.12)' }} />
                </div>

                {/* Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: isMobile ? 'flex-start' : 'center', gap: isMobile ? 8 : 12 }}>
                  {quickPicks.map((pick) => (
                    <Chips
                      key={pick}
                      mode="dark"
                      label={pick}
                      style={{ cursor: 'pointer' }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          STATS + COLLABORATORS
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Why TAS — stats"
        style={{ backgroundColor: '#F5F5F5', paddingTop: sectionPaddingY, paddingBottom: sectionPaddingY }}
      >
        <div style={inner}>
          <FadeUp>
            <Tag label="STATISTICS" />
          </FadeUp>

          <FadeUp delay={80}>
            <h2 style={{ ...sectionH2, marginTop: 16, marginBottom: 48, maxWidth: 860 }}>
              Built for enterprise teams exploring{' '}
              <span style={{ color: red }}>AI with purpose.</span>
            </h2>
          </FadeUp>

          {/* Stats grid */}
          <FadeUp delay={160}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : `repeat(4, 1fr)`,
                gap: isMobile ? 20 : 24,
                marginBottom: isMobile ? 40 : 64,
              }}
            >
              {statsData.map((s) => (
                <Stats key={s.value} value={s.value} label={s.label} style={isMobile ? { whiteSpace: 'normal' } : undefined} />
              ))}
            </div>
          </FadeUp>

          {/* Collaborators */}
          <FadeUp delay={200}>
            <div>
              <p
                style={{
                  fontFamily: sans, fontWeight: 600,
                  fontSize: 13, lineHeight: '20px',
                  color: '#ADADAD', letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  marginBottom: 24,
                }}
              >
                OUR COLLABORATORS
              </p>
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: isMobile ? '20px 12px' : '24px 40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={resolveImageSrc(imgCollaborators)}
                  alt="Technossus enterprise collaborators — Microsoft, AWS, Google, and more"
                  style={{ width: '100%', maxWidth: 960, height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          WHAT IS AI STUDIO — dark section, left-border cards
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        aria-label="What is AI Studio"
        style={{ backgroundColor: '#FFFFFF', paddingTop: sectionPaddingY, paddingBottom: sectionPaddingY }}
      >
        <div style={inner}>
           <FadeUp>
            <Tag label="WHAT IS AI STUDIO" style={{ marginBottom: 16 }} />
          </FadeUp>

          <div style={{ backgroundColor: dark2, padding: darkPanelPadding, boxSizing: 'border-box', overflow: 'hidden' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile || isTablet ? 'column' : 'row',
              gap: isMobile ? 32 : isTablet ? 36 : 52,
              alignItems: 'flex-start',
              backgroundColor: dark2,
              padding: isMobile ? '24px 0 0' : '40px 0 0',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Left — heading + body */}
            <FadeUp style={{ flexShrink: 0, maxWidth: isMobile || isTablet ? '100%' : 560 }}>
              <h2 style={{ ...sectionH2Dark, fontSize: isMobile ? 28 : 36, lineHeight: isMobile ? '36px' : '40px', marginBottom: 24 }}>
                A place to explore, validate, and build{' '}
                <span style={{ color: red }}>enterprise AI with clarity.</span>
              </h2>
              <p style={{ ...sectionSubtitleDark, fontSize: isMobile ? 15 : 16, lineHeight: isMobile ? '22px' : '24px' }}>
                Testing has always been the part of the delivery cycle that absorbs everyone
                else's delays and still gets blamed when something ships broken. Engineers
                are moving faster than ever, and the gap between release velocity and quality
                confidence is widening, not closing.
              </p>
              <p style={{ ...sectionSubtitleDark, fontSize: isMobile ? 15 : 16, lineHeight: isMobile ? '22px' : '24px', marginTop: 10 }}>
                AI is changing the economics of that gap. Not by replacing QA engineers, but
                by giving them the kind of leverage that actually matches the pace they're
                being asked to work at. We work alongside your team to build that leverage,
                through automation that transfers, tooling your team can own, and a quality
                practice that compounds instead of decaying.
              </p>
            </FadeUp>

            {/* Right — numbered cards with left-border style */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: isMobile ? 16 : 24,
                flex: isMobile || isTablet ? undefined : 1,
                width: isMobile || isTablet ? '100%' : undefined,
              }}
            >
              {whatIsItems.map((item, i) => (
                <FadeUp key={item.num} delay={i * 80}>
                  <article
                    style={{
                      borderLeft: `1px solid #ADADAD`,
                      paddingLeft: isMobile ? 16 : 21,
                      paddingRight: isMobile ? 0 : 12,
                      paddingTop: 12,
                      paddingBottom: 12,
                      boxSizing: 'border-box',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: serif, fontWeight: 500,
                        fontSize: 36, lineHeight: '40px',
                        color: red, display: 'block',
                        marginBottom: 12,
                      }}
                    >
                      {item.num}
                    </span>
                    <h3
                      style={{
                        fontFamily: sans, fontWeight: 600,
                        fontSize: 20, lineHeight: '28px',
                        color: '#FFFFFF', margin: '0 0 12px',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: sans, fontWeight: 500,
                        fontSize: 14, lineHeight: '20px',
                        color: '#DEDEDE', margin: 0,
                      }}
                    >
                      {item.description}
                    </p>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          ENGAGEMENT FORMATS — light section
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Engagement formats"
        style={{ backgroundColor: '#FFFFFF'}}
      >
        <div style={inner}>
          {/* Header */}
          <FadeUp>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
              <Tag label="1" />
              <Tag label="INNOVATION LABS" />
            </div>
          </FadeUp>

          <FadeUp delay={80}>
            <h2 style={{ ...sectionH2, maxWidth: 720, marginBottom: 8 }}>
              Bring a business challenge. Leave with a{' '}
              <span style={{ color: red }}>clearer path forward.</span>
            </h2>
          </FadeUp>

          <FadeUp delay={120}>
            <p style={{ ...sectionSubtitle, marginBottom: isMobile ? 40 : 64 }}>
              Whether you are exploring AI for the first time or ready to validate a specific
              use case, AI Studio gives your team practical formats to move from discussion
              to direction.
            </p>
          </FadeUp>

          {/* Format cards — 4 columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
              gap: isMobile ? 16 : 24,
              marginBottom: isMobile ? 56 : 80,
            }}
          >
            {engagementFormats.map((f, i) => (
              <FadeUp key={f.title} delay={i * 80}>
                <article
                  style={{
                    backgroundColor: '#F5F5F5',
                    padding: 24,
                    boxSizing: 'border-box',
                    height: '100%',
                  }}
                >
                  <span
                    style={{
                      fontFamily: sans, fontWeight: 600,
                      fontSize: 13, lineHeight: '20px',
                      color: '#5C5C5C', letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: 12,
                    }}
                  >
                    {f.duration}
                  </span>
                  <h3
                    style={{
                      fontFamily: sans, fontWeight: 600,
                      fontSize: 20, lineHeight: '28px',
                      color: red,
                      margin: '0 0 12px',
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: sans, fontWeight: 500,
                      fontSize: 15, lineHeight: '24px',
                      color: '#5C5C5C', margin: 0,
                    }}
                  >
                    {f.description}
                  </p>
                </article>
              </FadeUp>
            ))}
          </div>

          {/* AI Use Cases heading */}
          <FadeUp>
            <h2 style={{ ...sectionH2, maxWidth: 720, marginBottom: isMobile ? 32 : 48 }}>
              AI Use Cases built for how 
              <span style={{ color: red }}> your business operates</span>
            </h2>
          </FadeUp>

          {/* 3 Use Case cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
              gap: 24,
              marginBottom: isMobile ? 40 : 64,
            }}
          >
            {[
              { image: imgSvcAI,    tags: 'HEALTHCARE • AI AUTOMATION',     title: 'Intelligent Care Journey Orchestration',     excerpt: 'Streamline patient coordination across appointments, follow-ups, and provider workflows through real-time AI-driven orchestration.' },
              { image: imgSvcData,  tags: 'FINANCIAL SERVICES • ANALYTICS', title: 'Enterprise Financial Intelligence Platform ',   excerpt: 'Subhead:Transform invoices, receipts, and vendor records into structured financial intelligence with AI-powered automation and ERP integration.' },
              { image: imgSvcCloud, tags: 'HITECH & SAAS • AGENTS',         title: 'AI-Powered Conversation Intelligence',   excerpt: 'Analyze sales and support interactions at scale to improve customer experience, agent performance, and operational visibility.' },
            ].map((card, i) => (
              <FadeUp key={card.title} delay={i * 80}>
                <Card
                  mode="light"
                  type="insights"
                  image={card.image}
                  tags={card.tags}
                  title={card.title}
                  excerpt={card.excerpt}
                  ctaLabel="See How We Work"
                />
              </FadeUp>
            ))}
          </div>

          {/* CTA Banner */}
          <FadeUp>
            <CTABanner
              size="small"
              heading="Not sure which format is right for you?"
              body="Tell us your challenge and we'll recommend the right starting point."
              primaryCta="Talk to an Expert"
              fullWidthMobileAction
            />
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          AI SOLUTIONS & ACCELERATORS
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        aria-label="AI Solutions and Accelerators"
        style={{ backgroundColor: '#FFFFFF', paddingTop: sectionPaddingY, paddingBottom: sectionPaddingY }}
      >
        <div style={inner}>
          <div style={{ backgroundColor: '#0A0A0F', padding: darkPanelPadding, boxSizing: 'border-box', overflow: 'hidden' }}>
          {/* Header */}
          <FadeUp>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
              <Tag label="2" variant="light" />
              <Tag label="ACCELERATION" variant="light" />
            </div>
          </FadeUp>

          <FadeUp delay={80}>
            <h2 style={{ ...sectionH2Dark, maxWidth: 680, marginBottom: 12 }}>
              Pre-built solutions. Just add your context.
            </h2>
          </FadeUp>

          <FadeUp delay={120}>
            <p style={{ ...sectionSubtitleDark, marginBottom: isMobile ? 40 : 56 }}>
              Pre-built, production-tested AI frameworks that compress months of setup into
              days. Watch the demo — TAS members can Try Now in the live TAS environment.
            </p>
          </FadeUp>

          {/* Accelerator cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
              gap: isMobile ? 16 : 24,
              marginBottom: isMobile ? 40 : 64,
            }}
          >
            {[
              {
                image: imgSvcData,
                badge: '• LIVE IN TAS',
                techTags: ['Pinecone', 'Kafka', 'Snowflake', 'dbt'],
                category: 'DATA & INFRASTRUCTURE',
                title: 'Intelligent Data Platform',
                description: 'Pre-built ingestion pipelines, vector schemas, and retrieval infrastructure ready from day one.',
                ctaLabel: 'Try Now',
              },
              {
                image: imgSvcAI,
                badge: '• LIVE IN TAS',
                techTags: ['LangChain', 'OpenAI', 'Pinecone', 'FastAPI'],
                category: 'GENERATIVE AI',
                title: 'Enterprise RAG Framework',
                description: 'Retrieval-augmented generation on your documents — grounded, auditable, no hallucinations.',
                ctaLabel: 'Try Now',
              },
              {
                image: imgSvcCloud,
                badge: '• COMING SOON',
                techTags: ['CrewAI', 'AutoGen', 'Redis', 'K8s'],
                category: 'AGENTIC AUTOMATION',
                title: 'Multi-Agent Orchestration',
                description: 'Drop-in agent framework that handles planning, tool use, and human-in-the-loop review out of the box.',
                ctaLabel: 'Join Waitlist',
              },
            ].map((acc, i) => (
              <FadeUp key={acc.title} delay={i * 80}>
                <Card
                  mode="dark"
                  type="accelerators"
                  image={acc.image}
                  badge={acc.badge}
                  techTags={acc.techTags}
                  category={acc.category}
                  title={acc.title}
                  description={acc.description}
                  ctaLabel={acc.ctaLabel}
                />
              </FadeUp>
            ))}
          </div>

          {/* CTA Banner */}
          <FadeUp>
            <CTABanner
              size="small"
              heading="Looking for an accelerator built for your stack?"
              body="Our solutions library is growing weekly. Tell us what you need and we'll flag when it's ready."
              primaryCta="Request an Accelerator"
              fullWidthMobileAction
            />
          </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          LATEST INSIGHTS
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Latest insights"
        style={{ backgroundColor: '#F5F5F5', paddingTop: sectionPaddingY, paddingBottom: sectionPaddingY }}
      >
        <div style={inner}>
          {/* Header */}
          <FadeUp>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
              <Tag label="3" />
              <Tag label="COLLABORATE" />
            </div>
          </FadeUp>

          <FadeUp delay={80}>
            <h2 style={{ ...sectionH2, marginBottom: 12 }}>
              Latest <span style={{ color: red }}>Insights</span>
            </h2>
          </FadeUp>

          <FadeUp delay={120}>
            <p style={{ ...sectionSubtitle, marginBottom: isMobile ? 10 : 0 }}>
              Articles, research, case studies, and perspectives from TAS members. Featured
              pieces selected by the Technossus editorial team.
            </p>
          </FadeUp>

          {/* Featured card */}
          <FadeUp>
            <Card
              mode="light"
              type="featured"
              image={imgFeaturedPhoto}
              badge="FEATURED BY TECHNOSSUS"
              category="HEALTHCARE • AI STRATEGY"
              title="Why Prior Authorisation Is the Best First AI Use Case in Healthcare"
              description="Most health systems look to clinical decision support as their AI entry point. This paper argues that prior auth — with structured rules, clear metrics, and enormous admin burden — delivers the highest ROI for most organisations."
              authorInitials="DR"
              authorName="Dr. Rohan Mehta"
              authorRole="Chief Medical Informatics Officer · TAS Member"
              ctaLabel="READ MORE"
              stackOnTablet
              style={{
                marginBottom: isMobile ? 40 : 64,
                padding: isMobile ? '32px 16px' : isTablet ? '32px 24px' : '0px 0px',
              }}
              
            />
          </FadeUp>

          <div
            style={{
              backgroundColor: dark2,
              padding: darkPanelPadding,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
          {!isMobile && !isTablet && <CornerTL />}
          {!isMobile && !isTablet && <CornerBR />}

          {/* From the Community heading */}
          <FadeUp>
            <h2 style={{ ...sectionH2Dark, fontSize: isMobile ? 24 : 32, lineHeight: '40px', marginBottom: isMobile ? 32 : 48 }}>
              From the Community
            </h2>
          </FadeUp>

          {/* Community insight cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
              gap: isMobile ? 16 : 24,
              marginBottom: isMobile ? 40 : 64,
            }}
          >
            {[
              { image: imgSvcDigital,  tags: 'FINTECH • PLATFORM MODERNIZATION',    title: 'Architecting a High-Frequency Trading Engine for Global Markets',         excerpt: 'We overhauled the legacy infrastructure of a Tier-1 financial institution, reducing latency by 40% using event-driven microservices and localised caching…' },
              { image: imgSvcProduct,  tags: 'HITECH & SAAS • AGENTIC AUTOMATION',  title: 'How We Cut Document Processing Time by 80% with Multi-Agent Pipelines',   excerpt: 'A deep dive into the agent architecture that replaced a 14-person manual review team — without any redundancies.' },
              { image: imgSvcAI,       tags: 'HEALTHCARE • RESPONSIBLE AI',         title: 'Building Explainable AI for Clinical Decision Support at Scale',           excerpt: "Clinicians trust tools they understand. Here's how we built explainability into a predictive model from day one, not as an afterthought." },
            ].map((card, i) => (
              <FadeUp key={card.title} delay={i * 80}>
                <Card
                  mode="dark"
                  type="insights"
                  image={card.image}
                  tags={card.tags}
                  title={card.title}
                  excerpt={card.excerpt}
                  ctaLabel="Read Article"
                />
              </FadeUp>
            ))}
          </div>

          {/* Community CTA */}
          <FadeUp>
            <div
              style={{
                backgroundColor: '#0A0A0F',
                border: '1px solid #2A2A2A',
                padding: isMobile ? 20 : isTablet ? 28 : 40,
                display: 'flex',
                flexDirection: isMobile || isTablet ? 'column' : 'row',
                alignItems: isMobile || isTablet ? 'stretch' : 'center',
                justifyContent: 'space-between',
                gap: 24,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Red glow */}
              <div
                aria-hidden
                style={{
                  position: 'absolute', bottom: -60, right: -60,
                  width: 240, height: 240,
                  borderRadius: 9999,
                  backgroundColor: 'rgba(237,41,57,0.06)',
                  filter: 'blur(40px)',
                  pointerEvents: 'none',
                }}
              />
              <div style={{ maxWidth: 680, minWidth: 0 }}>
                <h3
                  style={{
                    fontFamily: sans, fontWeight: 600,
                    fontSize: isMobile ? 20 : 24, lineHeight: '32px',
                    color: '#FFFFFF', margin: '0 0 8px',
                  }}
                >
                  Have something worth sharing?
                </h3>
                <p style={{ ...sectionSubtitleDark, margin: 0 }}>
                  TAS members can submit articles, research, and case studies. Selected
                  pieces are editorially featured and distributed to the full TAS community.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', flexShrink: 0, width: isMobile || isTablet ? '100%' : undefined }}>
                <Button variant="primary" label="Submit an Article" style={isMobile || isTablet ? { width: '100%' } : undefined} />
                <Button variant="secondary" label="Become a TAS Member" style={isMobile || isTablet ? { width: '100%' } : undefined} />
              </div>
            </div>
          </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          TAS DELIVERY FRAMEWORK
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        aria-label="TAS Delivery Framework"
        style={{ backgroundColor: '#FFFFFF', paddingTop: sectionPaddingY, paddingBottom: sectionPaddingY }}
      >
        <div style={inner}>
          {/* Header */}
          <FadeUp>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16 }}>
              <Tag label="4" />
              <Tag label="TAS DELIVERY FRAMEWORK" />
            </div>
          </FadeUp>

          <FadeUp delay={80}>
            <h2 style={{ ...sectionH2, maxWidth: 760, marginBottom: 16 }}>
              From experiment to enterprise{' '}
              <span style={{ color: red }}>a structured path to production AI.</span>
            </h2>
          </FadeUp>

          <FadeUp delay={120}>
            <p style={{ ...sectionSubtitle, marginBottom: isMobile ? 40 : 64 }}>
              Most AI experiments fail not because the idea is wrong, but because there's
              no clear path to production. The TAS Delivery Framework is our AI SDLC: a
              structured lifecycle that takes validated ideas and ships them safely, with
              governance built in at every stage.
            </p>
          </FadeUp>

          {/* 6 step cards — 3 × 2 grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
              gap: 0,
              border: '1px solid #E5E5E5',
              overflow: 'hidden',
            }}
          >
            {deliverySteps.map((step, i) => {
              const isLastRow = i >= 3;
              const col = i % 3;
              return (
                <FadeUp key={step.num} delay={i * 60}>
                  <article
                    style={{
                      padding: isMobile ? '28px 20px' : '32px 28px',
                      borderRight: (isMobile || isTablet) ? 'none' : col < 2 ? '1px solid #E5E5E5' : 'none',
                      borderBottom: isMobile ? (i < deliverySteps.length - 1 ? '1px solid #E5E5E5' : 'none') : isTablet ? (i < deliverySteps.length - 2 ? '1px solid #E5E5E5' : 'none') : isLastRow ? 'none' : '1px solid #E5E5E5',
                      boxSizing: 'border-box',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: serif, fontWeight: 600,
                        fontSize: 32, lineHeight: '40px',
                        color: red, display: 'block',
                        marginBottom: 16,
                      }}
                    >
                      {step.num}
                    </span>
                    <h3
                      style={{
                        fontFamily: sans, fontWeight: 600,
                        fontSize: 20, lineHeight: '28px',
                        color: '#1E1E1E', margin: '0 0 10px',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: sans, fontWeight: 500,
                        fontSize: 15, lineHeight: '24px',
                        color: '#5C5C5C', margin: 0,
                      }}
                    >
                      {step.description}
                    </p>
                  </article>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          ENTERPRISE AI STACK
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Enterprise AI capabilities"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div style={inner}>
          <div style={{ backgroundColor: dark1, padding: darkPanelPadding, boxSizing: 'border-box', overflow: 'hidden' }}>
          {/* Header */}
          <FadeUp>
            <Tag label="OUR AI CAPABILITIES" variant="light" style={{ marginBottom: 16 }} />
          </FadeUp>

          <FadeUp delay={80}>
            <h2 style={{ ...sectionH2Dark, maxWidth: 700, marginBottom: 16 }}>
              The full enterprise AI stack{' '}
              <span style={{ color: red }}>applied with intent.</span>
            </h2>
          </FadeUp>

          <FadeUp delay={120}>
            <p style={{ ...sectionSubtitleDark, marginBottom: isMobile ? 40 : 64 }}>
              Every capability inside TAS is grounded in real enterprise use — applied where
              it creates measurable value, not just because it's possible.
            </p>
          </FadeUp>

          {/* 8-tile grid — 4 × 2 */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
              border: '1px solid #2A2A2A',
              overflow: 'hidden',
            }}
          >
            {capabilities.map((cap, i) => {
              const col = i % 4;
              const row = Math.floor(i / 4);
              const totalRows = 2;
              const isLastRow = row === totalRows - 1;
              return (
                <FadeUp key={cap.title} delay={i * 50}>
                  <article
                    style={{
                      padding: isMobile ? '28px 20px' : '40px 24px',
                      borderRight: isMobile ? 'none' : isTablet ? (col % 2 === 0 ? '1px solid #2A2A2A' : 'none') : col < 3 ? '1px solid #2A2A2A' : 'none',
                      borderBottom: isMobile ? (i < capabilities.length - 1 ? '1px solid #2A2A2A' : 'none') : isTablet ? (i < capabilities.length - 2 ? '1px solid #2A2A2A' : 'none') : isLastRow ? 'none' : '1px solid #2A2A2A',
                      boxSizing: 'border-box',
                      backgroundColor: '#0A0A10',
                    }}
                  >
                    <div
                      style={{
                        width: 40, height: 40,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginBottom: 20,
                        fontSize: 24,
                      }}
                      aria-hidden="true"
                    >
                      {cap.icon}
                    </div>
                    <h3
                      style={{
                        fontFamily: sans, fontWeight: 600,
                        fontSize: 18, lineHeight: '26px',
                        color: '#FFFFFF', margin: '0 0 8px',
                      }}
                    >
                      {cap.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: sans, fontWeight: 500,
                        fontSize: 14, lineHeight: '22px',
                        color: '#E1E0E0', margin: 0,
                      }}
                    >
                      {cap.description}
                    </p>
                  </article>
                </FadeUp>
              );
            })}
          </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          LARGE CTA BANNER
      ═══════════════════════════════════════════════════════════════════ */}
      <section aria-label="Get started with AI Studio" style={{ backgroundColor: '#FFFFFF' }}>
        <div style={{ ...inner, paddingTop: sectionPaddingY, paddingBottom: sectionPaddingY }}>
        <CTABanner
          size="large"
          label="LET'S BUILD SOMETHING"
          heading="Bring your toughest AI challenge. We'll help you find the path forward."
          body="Whether you need an accelerator, a sprint, a PoC, or just a clear second opinion — AI Studio is the place to start."
          primaryCta="Schedule a Strategy Session"
          secondaryCta="Explore Accelerators"
          contactFormTopic="AI Studio Enquiry"
          centerOnMobile
          style={{ width: '100%', maxWidth: 'none' }}
        />
        </div>
      </section>
    </main>
  );
}
