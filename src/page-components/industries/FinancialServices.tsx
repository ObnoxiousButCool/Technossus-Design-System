'use client';

import React from 'react';
import { Tag }        from '../../../components/Tag';
import { Breadcrumb } from '../../../components/Breadcrumb';
import { Accordion }  from '../../../components/Accordion';
import { CTABanner }  from '../../../components/CTABanner';
import { Button }     from '../../../components/Button';
import { FadeUp }     from '../../../components/Animate/FadeUp';
import { Card }       from '../../../components/Card';
import { useBreakpoint } from '../../../ts/breakpoints';
import type { AccordionItem } from '../../../components/Accordion';
import imgHero from '../../../assets/Industries/BSFI.png';

const imgCardPhoto = '/assets/fbbad1d37f7a4e076de4d16631dc6863c6c4444a.png';

const sans  = '"General Sans", system-ui, -apple-system, sans-serif';
const serif = '"Roboto Serif", Georgia, serif';
const red   = '#ED2939';
const dark1 = '#1B1B1B';

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

const whatWeDoItems: AccordionItem[] = [
  {
    title: 'Modernize on Top of Core Systems',
    subtitle: 'Extend and modernize systems on top of stable core platforms — enabling new capabilities without disrupting existing operations.',
    content: {
      type: 'detail',
      serviceLabel: 'MODERNIZE ON TOP OF CORE SYSTEMS',
      heading: 'New capabilities shouldn\'t require touching what already works.',
      body: [
        'We extend and modernize systems on top of stable core platforms, enabling new capabilities without disrupting existing operations. By building modular layers and integrations, we support faster product innovation, better system performance, and easier scalability.',
        'This allows organizations to evolve continuously while keeping core systems stable, reliable, and unchanged — launching new lending products, insurance offerings, and customer features without the risk of a core system replacement.',
      ],
    },
  },
  {
    title: 'Predictive, Real-Time Decisioning and Fraud Detection',
    subtitle: 'Build systems that support real-time decisions across risk, underwriting, and fraud using predictive models and live data.',
    content: {
      type: 'detail',
      serviceLabel: 'REAL-TIME DECISIONING & FRAUD DETECTION',
      heading: 'Underwriting, fraud, and credit decisions are expected instantly — not in a batch tomorrow.',
      body: [
        'We build systems that support real-time decisions across risk, underwriting, and fraud using predictive models and live data. By embedding intelligence directly into workflows, decisions happen instantly across channels — reducing delays and improving accuracy.',
        'This strengthens risk management, improves fraud detection, and enables faster, more confident decision-making across web, mobile, broker, and partner ecosystems — without inconsistency or delay.',
      ],
    },
  },
  {
    title: 'Automate Processes with Intelligent Agents',
    subtitle: 'Design agentic workflows that handle coordination, decisions, and execution across underwriting, claims, and loan processing.',
    content: {
      type: 'detail',
      serviceLabel: 'INTELLIGENT PROCESS AUTOMATION',
      heading: 'From underwriting to claims — workflows that become adaptive, not just automated.',
      body: [
        'We design and implement workflows that go beyond automation, using AI and agentic systems to handle coordination, decisions, and execution. From underwriting to claims and loan processing, workflows become adaptive — reducing manual intervention and handling complexity at scale.',
        'This improves throughput, reduces operational effort, and ensures processes can scale with demand without adding proportionate headcount.',
      ],
    },
  },
  {
    title: 'Strengthen Cybersecurity, Compliance, and Digital Trust',
    subtitle: 'Secure systems across APIs, integrations, and data flows while ensuring alignment with evolving regulatory requirements.',
    content: {
      type: 'detail',
      serviceLabel: 'CYBERSECURITY, COMPLIANCE & DIGITAL TRUST',
      heading: '73% of financial institutions cite APIs and third-party integrations as their top cybersecurity risk.',
      body: [
        'As ecosystems expand, we help manage risk, maintain data protection, and ensure systems remain resilient under increasing exposure. Security is built into how systems operate — not applied as a layer after deployment.',
        'This builds digital trust, supports compliance, and protects systems without slowing innovation. Regulatory requirements are embedded into delivery so audits aren\'t events — they\'re already covered.',
      ],
    },
  },
  {
    title: 'Prepare Systems for AI-Ready, Continuous Innovation',
    subtitle: 'Enable systems to support AI adoption across operations, decisioning, and customer journeys.',
    content: {
      type: 'detail',
      serviceLabel: 'AI-READY CONTINUOUS INNOVATION',
      heading: 'AI only scales in production when the systems beneath it are ready to carry it.',
      body: [
        'We enable systems to support AI adoption across operations, decisioning, and customer journeys while maintaining performance and control. By improving data readiness, system integration, and architecture, we ensure AI capabilities can scale effectively in production environments.',
        'This allows organizations to innovate continuously, adapt faster, and stay competitive without compromising reliability or creating governance gaps.',
      ],
    },
  },
];

const solutionItems: AccordionItem[] = [
  {
    title: 'Intelligent Document Intake & AI-Driven Decisioning Engine',
    subtitle: 'Automatically ingest, extract, validate, and route data across underwriting, claims, and transaction workflows in real time.',
    content: {
      type: 'detail',
      serviceLabel: 'INTELLIGENT DOCUMENT INTAKE',
      heading: 'Manual processing of loan applications, claims documents, and KYC forms creates bottlenecks that compound across every workflow.',
      body: [
        'We built an AI-powered intake system that automatically ingests, extracts, validates, and routes data across underwriting, claims, and transaction workflows in real time. OCR, NLP, and deep learning extract structured data from unstructured inputs with high accuracy.',
        'Impact: Faster processing across underwriting and claims • Reduced manual data entry • Improved data accuracy • Accelerated decisioning • Enhanced customer and broker experience.',
      ],
    },
  },
  {
    title: 'Real-Time Fraud Detection & Prevention Systems',
    subtitle: 'Intelligent fraud detection that operates in real time across transactions, channels, and customer journeys.',
    content: {
      type: 'detail',
      serviceLabel: 'REAL-TIME FRAUD DETECTION',
      heading: 'Fraud patterns evolve faster than rule-based systems can adapt.',
      body: [
        'We build intelligent fraud detection systems that operate in real time across transactions, channels, and customer journeys — using AI and ML models that update as patterns change, not just when rules are rewritten.',
        'Impact: Improved fraud detection accuracy with fewer false positives • Real-time transaction monitoring and intervention • Reduced financial loss and operational risk • Adaptive fraud models that evolve with new patterns.',
      ],
    },
  },
  {
    title: 'Claims & Policy Workflow Orchestration Platform',
    subtitle: 'Connect claims, policy administration, broker portals, and backend systems into a unified workflow layer.',
    content: {
      type: 'detail',
      serviceLabel: 'CLAIMS & POLICY ORCHESTRATION',
      heading: 'When claims processing spans multiple systems, manual handoffs slow everything down.',
      body: [
        'We built an orchestration platform that connected claims, policy administration, broker portals, and backend systems into a unified workflow layer — eliminating the friction that accumulates across system boundaries.',
        'Impact: Accelerated underwriting and loan approvals • Improved consistency in risk evaluation • Reduced manual intervention • Real-time decisioning across channels • Scalable, data-driven financial operations.',
      ],
    },
  },
];

const featuredCards = [
  { tags: 'FINTECH • MORTGAGE PLATFORM',       title: 'Unified Mortgage Platform Enables Scalable Lending Operations',       excerpt: 'A leading financial services organization needed to unify multiple acquired mortgage systems into a single, seamless experience. Technossus built a unified platform connecting fragmented systems, improving data flow and simplifying workflows across customers, brokers, and underwriters.' },
  { tags: 'INVESTMENT BANKING • DATA QUALITY', title: 'Automated Data Validation Improves Decision Confidence',              excerpt: 'A global investment bank depended on manual validation of financial dashboards, resulting in slow reporting cycles. An automated validation framework now continuously tests data across systems — automating 95% of validation scenarios and significantly improving reporting accuracy.' },
  { tags: 'INSURANCE • DIGITAL EXPERIENCE',   title: 'Insurance Brokerage Achieves 30% Faster Quote Turnaround',           excerpt: 'A leading insurance broker lacked a fast, intuitive way to generate quotes. A mobile-first QuoteLite portal with real-time quoting capabilities reduced turnaround time by ~30% and improved broker productivity and customer experience.' },
];

const successCards = [
  { tags: 'FINTECH • AI DECISIONING',         title: 'AI-Powered Intake Engine Accelerates Underwriting by 40%',           excerpt: 'An AI-powered document intake system that automatically ingests, extracts, validates, and routes data across underwriting and claims workflows reduced processing time by 40% and cut manual data entry significantly.' },
  { tags: 'BANKING • FRAUD PREVENTION',       title: 'Real-Time Fraud Detection Reduces False Positives Across Channels',  excerpt: 'An intelligent fraud detection system operating across transactions, channels, and customer journeys improved detection accuracy while reducing false positives — protecting revenue without slowing legitimate transactions.' },
  { tags: 'INSURANCE • WORKFLOW AUTOMATION',  title: 'Claims Orchestration Platform Connects Fragmented Policy Systems',   excerpt: 'A workflow orchestration platform connected claims, policy administration, broker portals, and backend systems — eliminating manual handoffs and enabling real-time decisioning across a complex multi-system environment.' },
];

export default function FinancialServices() {
  const { isMobile, isTablet } = useBreakpoint();

  const inner = {
    maxWidth: 1440,
    margin: '0 auto',
    padding: isMobile ? '48px 16px' : isTablet ? '60px 32px' : '80px 80px',
  };

  const d1 = (color?: string): React.CSSProperties => ({
    fontFamily: serif,
    fontSize: isMobile ? 26 : isTablet ? 34 : 48,
    lineHeight: isMobile ? '34px' : isTablet ? '42px' : '52px',
    fontWeight: 500,
    margin: 0,
    color: color ?? '#1E1E1E',
  });

  const d2 = (color?: string): React.CSSProperties => ({
    fontFamily: serif,
    fontSize: isMobile ? 22 : isTablet ? 28 : 40,
    lineHeight: isMobile ? '30px' : isTablet ? '36px' : '48px',
    fontWeight: 600,
    letterSpacing: '-1px',
    margin: 0,
    color: color ?? '#1E1E1E',
  });

  const cols3 = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';
  const cols2 = isMobile ? '1fr' : 'repeat(2, 1fr)';

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: isMobile ? '32px 16px 48px' : isTablet ? '40px 32px 60px' : '40px 80px 80px' }}>
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Financial Services & Insurance', active: true },
          ]} />
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? 32 : 60, marginTop: 40 }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
              <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase', color: '#ADADAD', margin: 0 }}>Financial Services & Insurance</p>
              <FadeUp>
                <h1 style={d1()}>
                  Core financial systems are reliable. The complexity lies in{' '}
                  <span style={{ color: red }}>integrations, decisioning, and product innovation.</span>
                </h1>
              </FadeUp>
              <FadeUp delay={80}>
                <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: '#5C5C5C', margin: 0, maxWidth: 560 }}>
                  The challenge in financial systems isn't the core — it's everything built on top of it. Disconnected integrations, manual workflows, delayed decisions, and slower product releases create friction across the system. We help organizations streamline how these systems work together, reduce operational complexity, and support continuous product innovation without compromising security or performance.
                </p>
              </FadeUp>
              <FadeUp delay={120}>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <Button variant="primary"   label="Explore Our Solutions"           href="#" />
                  <Button variant="secondary" label="Talk to a Financial Expert"      href="#" />
                </div>
              </FadeUp>
            </div>
            {!isMobile && (
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', minHeight: isTablet ? 300 : 460 }}>
                <img src={imgHero} alt="" style={{ width: '100%', height: isTablet ? 300 : 460, objectFit: 'cover', display: 'block' }} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      <section style={{ borderTop: '1px solid #E8E8E8', background: '#fff' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: isMobile ? '24px 16px' : '32px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
          <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: '.12em', color: '#ADADAD', textTransform: 'uppercase' }}>Trusted By</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: isMobile ? 24 : 72, flexWrap: 'wrap' }}>
            {['TOYOTA FINANCIAL SERVICES', 'COMMONSPIRIT', 'BIO-RAD', 'ADAPTHEALTH', 'GE HealthCare'].map(name => (
              <span key={name} style={{ fontFamily: sans, fontSize: 13, fontWeight: 700, color: '#888', filter: 'grayscale(100%)', opacity: .65 }}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: isMobile ? 48 : 80 }} />

      {/* ── THE SHIFT ── */}
      <div style={{ maxWidth: 1440, margin: '0 auto', marginBottom: isMobile ? 12 : 16, padding: isMobile ? '0 16px' : isTablet ? '0 32px' : '0 80px', background: '#fff' }}>
        <Tag label="THE SHIFT" variant="dark" />
      </div>
      <section style={{ background: dark1, position: 'relative', overflow: 'hidden' }}>
        <CornerTL /><CornerBR />
        <div style={inner}>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 48, alignItems: 'flex-start', marginTop: 0, flexWrap: 'wrap' }}>
            <div style={{ flex: isMobile ? undefined : '0 0 380px', minWidth: isMobile ? '100%' : 280, width: isMobile ? '100%' : undefined }}>
              <h2 style={d2('#fff')}>
                Core systems are stable. The pressure is shifting to everything{' '}
                <span style={{ color: red }}>built on top of them.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'Product layers, integrations, workflows, and data pipelines are under constant pressure to move faster, handle more, and stay secure at the same time. The expectation is clear: launch faster, respond in real time, integrate seamlessly, and stay secure under growing exposure.',
                  'Most systems can do parts of this well. Few can do all of it together without trade-offs starting to show. That\'s where the real engineering work lives — not in replacing the core, but in building reliably on top of it.',
                ].map((p, i) => (
                  <p key={i} style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#B5B5B5', margin: 0 }}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20, width: isMobile ? '100%' : undefined }}>
              <div style={{ display: 'grid', gridTemplateColumns: cols2, gap: 20 }}>
                {[
                  { title: 'Real-Time Risk & Decisioning',          body: 'Underwriting, fraud detection, and credit decisions are no longer batch-driven. Decisions are expected instantly across all channels — without inconsistency or delay.' },
                  { title: 'Continuous Releases on Core Systems',   body: 'New lending products, insurance offerings, and customer features are being launched continuously while maintaining stability, compliance, and performance across core systems.' },
                  { title: 'Adaptive Fraud & Threat Detection',     body: 'Fraud is no longer rule-based or predictable. Systems need to detect and respond to evolving patterns in real time without increasing false positives or slowing legitimate transactions.' },
                  { title: 'Expanding Ecosystems, Limited Control', body: 'Open banking, partner APIs, and embedded finance increase connectivity — but also complexity. Managing performance, data consistency, and security across this ecosystem is becoming harder.' },
                ].map(card => (
                  <div key={card.title} style={{ background: '#262626', border: '1px solid #343434', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <h3 style={{ fontFamily: sans, fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.4, margin: 0 }}>{card.title}</h3>
                    <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: '#9B9B9B', margin: 0 }}>{card.body}</p>
                  </div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 1, background: '#343434' }}>
                {[
                  { num: '70%',   desc: 'of claims processing is still manual, slowing decisioning and increasing operational costs' },
                  { num: '73%',   desc: 'of financial institutions cite APIs and third-party integrations as increasing cybersecurity risk' },
                  { num: '2–3×',  desc: 'faster time-to-market achieved through modular, API-driven architectures' },
                  { num: '40%',   desc: 'improvement in decision-making speed using real-time data and AI-driven workflows' },
                ].map((s, i) => (
                  <div key={i} style={{ background: dark1, padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{ fontFamily: serif, fontSize: isMobile ? 20 : 26, fontWeight: 600, color: red, lineHeight: 1.1 }}>{s.num}</div>
                    <p style={{ fontFamily: sans, fontSize: 12, lineHeight: 1.5, color: '#9B9B9B', margin: 0 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: isMobile ? 48 : 80 }} />

      {/* ── WHAT WE DO ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="WHAT WE DO" />
          <h2 style={{ ...d2(), marginTop: 16 }}>
            We help financial institutions build on top of their systems,{' '}
            <span style={{ color: red }}>without slowing them down.</span>
          </h2>
          <p style={{ fontFamily: sans, fontSize: 16, color: '#5C5C5C', marginTop: 12, maxWidth: 720 }}>We don't just build on top of financial systems. We solve the operational and system-level challenges that slow down product innovation, decisioning, and scale.</p>
          <div style={{ marginTop: 48 }}>
            <Accordion items={whatWeDoItems} defaultActiveIndex={1} />
          </div>
        </div>
      </section>

      <div style={{ height: isMobile ? 48 : 80 }} />

      {/* ── SOLUTIONS ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="SOLUTIONS" />
          <h2 style={{ ...d2(), marginTop: 16 }}>
            Proven solutions for financial services{' '}
            <span style={{ color: red }}>at production scale.</span>
          </h2>
          <div style={{ marginTop: 48 }}>
            <Accordion items={solutionItems} defaultActiveIndex={0} />
          </div>
        </div>
      </section>

      <div style={{ height: isMobile ? 48 : 80 }} />

      {/* ── CASE STUDIES ── */}
      <div style={{ maxWidth: 1440, margin: '0 auto', marginBottom: isMobile ? 12 : 16, padding: isMobile ? '0 16px' : isTablet ? '0 32px' : '0 80px', background: '#fff' }}>
        <Tag label="CASE STUDIES" variant="dark" />
      </div>
      <section id="proof" style={{ background: dark1, position: 'relative', overflow: 'hidden' }}>
        <CornerTL /><CornerBR />
        <div style={inner}>
          <div style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'flex-end', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: 16, marginTop: 0, marginBottom: 40 }}>
            <div>
              <h1 style={d1('#fff')}>Results from the <span style={{ color: red }}>field.</span></h1>
              <p style={{ fontFamily: sans, fontSize: 15, color: '#9B9B9B', marginTop: 10 }}>Real outcomes from financial services organizations we've partnered with.</p>
            </div>
            <a href="#" style={{ fontFamily: sans, fontSize: 14, color: '#9B9B9B', textDecoration: 'underline', whiteSpace: 'nowrap', flexShrink: 0 }}>View All</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: cols3, gap: 20 }}>
            {featuredCards.map((card, i) => (
              <Card key={i} mode="dark" type="insights" tags={card.tags} title={card.title} excerpt={card.excerpt} ctaLabel="See How We Work" />
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: isMobile ? 48 : 80 }} />

      {/* ── MORE STORIES ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="MORE FROM FINANCIAL SERVICES" />
          <div style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'flex-end', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: 16, marginTop: 16, marginBottom: 40 }}>
            <h1 style={d1()}>More <span style={{ color: red }}>success stories.</span></h1>
            <a href="#" style={{ fontFamily: sans, fontSize: 14, color: red, textDecoration: 'underline', whiteSpace: 'nowrap', flexShrink: 0 }}>View All</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: cols3, gap: 20 }}>
            {successCards.map((card, i) => (
              <Card key={i} mode="light" type="insights" image={imgCardPhoto} tags={card.tags} title={card.title} excerpt={card.excerpt} ctaLabel="See How We Work" />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <CTABanner
        size="large"
        label="LET'S WORK ON IT TOGETHER"
        heading="Start with what's actually slowing you down."
        body="Bring us the system, workflow, or decision point that isn't keeping up — we'll understand your architecture, dependencies, and data flow. Within days, you'll have a clear view of what's happening and what actually needs to change."
        primaryCta="Explore Our Solutions →"
        secondaryCta="Talk to a Financial Expert"
      />
      <div style={{ height: isMobile ? 48 : 80 }} />
    </>
  );
}
