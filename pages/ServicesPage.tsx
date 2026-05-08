import React, { useState } from 'react';
import { Tag }        from '../components/Tag';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button }     from '../components/Button';
import { Accordion }  from '../components/Accordion';
import { Card }       from '../components/Card';
import { CTABanner }  from '../components/CTABanner';
import { colors, typography, spacing } from '../ts/tokens';

// ─── Asset URLs (from Figma MCP localhost server) ────────────────────────────
const imgHero        = 'http://localhost:3845/assets/f68775186969128d3be25b0026c80030ba4ab81f.png';
const imgLogo1       = 'http://localhost:3845/assets/07257e50d6618362732217b05125eff67876481e.png';
const imgLogo2       = 'http://localhost:3845/assets/2401c6977517bcd5d77ed42b90f5f4b022f8186c.png';
const imgLogo3       = 'http://localhost:3845/assets/91534fe0e36130e7166a22de186f19e1011c79f0.png';
const imgLogo4       = 'http://localhost:3845/assets/e2af84967fea8470188b90cf7819b999289255d7.png';
const imgCaseStudy1  = 'http://localhost:3845/assets/fbbad1d37f7a4e076de4d16631dc6863c6c4444a.png';
const imgSubtractTL  = 'http://localhost:3845/assets/d3bd3c494981fc117beb9354c38eaf44f6d42039.svg';
const imgSubtractBR  = 'http://localhost:3845/assets/e35ee95a68b0f29bf73fcd76e8285772bff083b1.svg';

// ─── Shared style constants ───────────────────────────────────────────────────
const fontSans  = '"General Sans", system-ui, -apple-system, sans-serif';
const fontSerif = '"Roboto Serif", Georgia, serif';
const red       = colors.brand.primary;
const dark1     = colors.background.dark1;
const nearBlack = colors.brand.black;

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionTag({ label }: { label: string }) {
  return <Tag label={label} />;
}

function StatBox({ stat, description, source }: { stat: string; description: string; source: string }) {
  return (
    <div
      style={{
        flex: 1,
        border: `1px solid ${colors.text[700]}`,
        padding: `${spacing[24]}px`,
        display: 'flex',
        flexDirection: 'column',
        gap: `${spacing[12]}px`,
      }}
    >
      <p style={{ fontFamily: fontSerif, fontWeight: 500, fontSize: 36, lineHeight: '40px', color: red, margin: 0 }}>
        {stat}
      </p>
      <p style={{ fontFamily: fontSans, fontWeight: 500, fontSize: 16, lineHeight: '24px', color: colors.text[100], margin: 0 }}>
        {description}
      </p>
      <p style={{ fontFamily: fontSans, fontWeight: 500, fontSize: 14, lineHeight: '20px', color: colors.text[300], margin: 0 }}>
        {source}
      </p>
    </div>
  );
}

function PainPointBox({ heading, body }: { heading: string; body: string }) {
  return (
    <div
      style={{
        flex: 1,
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        borderLeft: `1px solid ${colors.background.dark3}`,
      }}
    >
      <h4
        style={{
          fontFamily: fontSans,
          fontWeight: 600,
          fontSize: 20,
          lineHeight: '28px',
          color: nearBlack,
          margin: 0,
        }}
      >
        {heading}
      </h4>
      <div style={{ height: 2, background: colors.background.dark3 }} />
      <p
        style={{
          fontFamily: fontSans,
          fontWeight: 500,
          fontSize: 16,
          lineHeight: '24px',
          color: colors.text[700],
          margin: 0,
        }}
      >
        {body}
      </p>
    </div>
  );
}

// ─── Navigation Header ────────────────────────────────────────────────────────

function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = ['AI Studio', 'Services', 'Industries', 'Resources', 'About Us', 'Careers'];

  return (
    <header
      style={{
        background: '#FFFFFF',
        borderBottom: `1px solid ${colors.brand.lightGray}`,
        position: 'sticky',
        top: 0,
        zIndex: 100,
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: '0 96px',
          height: 80,
          display: 'flex',
          alignItems: 'center',
          gap: 40,
        }}
      >
        {/* Logo */}
        <a href="/" style={{ flexShrink: 0, display: 'flex', textDecoration: 'none' }}>
          <svg width="193" height="32" viewBox="0 0 220 40" fill="none">
            <text x="0" y="29" fontFamily={fontSans} fontWeight="700" fontSize="22" fill={nearBlack} letterSpacing="-0.5">
              technossus
            </text>
            <circle cx="214" cy="7" r="5" fill={red} />
          </svg>
        </a>

        {/* Desktop Nav */}
        <nav style={{ flex: 1, display: 'flex', gap: 32, alignItems: 'center', justifyContent: 'center' }}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
              style={{
                fontFamily: fontSans,
                fontWeight: 500,
                fontSize: 14,
                lineHeight: '20px',
                color: nearBlack,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                whiteSpace: 'nowrap',
              }}
            >
              {item}
              {(item === 'Services' || item === 'Industries') && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6l4 4 4-4" stroke={nearBlack} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <Button variant="cta" label="Contact us" />
      </div>
    </header>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function SiteFooter() {
  const offerings = [
    'AI Led Business Transformation',
    'Product Engineering',
    'Data Intelligence & Analytics',
    'Cloud Consulting & Support',
    'Digital Experience Design',
    'Quality Engineering & Verification',
    'AI Studio',
  ];
  const industries = ['Healthcare', 'Financial Services', 'HiTech / SaaS'];
  const company    = ['About Us', 'Careers', 'Insights', 'Case Studies', 'Contact'];

  const colHead: React.CSSProperties = {
    fontFamily: fontSans, fontWeight: 600, fontSize: 14,
    lineHeight: '20px', color: colors.text[200], margin: 0,
  };
  const colLink: React.CSSProperties = {
    fontFamily: fontSans, fontWeight: 500, fontSize: 14,
    lineHeight: '20px', color: colors.text[500], textDecoration: 'none', display: 'block',
  };

  return (
    <footer style={{ background: '#0B0B0B', width: '100%', boxSizing: 'border-box' }}>
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: '52px 96px 80px',
          display: 'flex',
          gap: 48,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand col */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 275 }}>
          <a href="/" style={{ display: 'flex', textDecoration: 'none' }}>
            <svg width="196" height="33" viewBox="0 0 220 40" fill="none">
              <text x="0" y="29" fontFamily={fontSans} fontWeight="700" fontSize="22" fill="#FFFFFF" letterSpacing="-0.5">technossus</text>
              <circle cx="214" cy="7" r="5" fill={red} />
            </svg>
          </a>
          <p style={{ fontFamily: fontSans, fontWeight: 500, fontSize: 14, lineHeight: '20px', color: colors.text[300], margin: 0, maxWidth: 240 }}>
            Leading the charge in enterprise digital transformation, combining deep technical expertise with a relentless focus on client success.
          </p>
        </div>

        {/* Link columns */}
        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, minWidth: 216 }}>
            <p style={colHead}>OUR OFFERINGS</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {offerings.map((o) => (
                <a key={o} href="#" style={{ ...colLink, color: o === 'AI Studio' ? '#E60000' : colors.text[500] }}>{o}</a>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <p style={colHead}>INDUSTRIES</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {industries.map((i) => <a key={i} href="#" style={colLink}>{i}</a>)}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <p style={colHead}>COMPANY</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {company.map((c) => <a key={c} href="#" style={colLink}>{c}</a>)}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 273 }}>
            <p style={colHead}>GET IN TOUCH</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <p style={{ ...colLink, display: 'flex', alignItems: 'center', gap: 12, margin: 0 }}>
                <span>✉</span> contact@technossus.com
              </p>
              <p style={{ ...colLink, display: 'flex', alignItems: 'center', gap: 12, margin: 0 }}>
                <span>📞</span> +1 (949) 769-3500
              </p>
              <p style={{ ...colLink, display: 'flex', alignItems: 'center', gap: 12, margin: 0 }}>
                <span>📍</span> Irvine, CA · London · Pune
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ height: 1, background: colors.background.dark3, margin: '0 96px' }} />
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: '24px 96px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <p style={{ fontFamily: fontSans, fontWeight: 500, fontSize: 14, color: colors.text[500], margin: 0 }}>
          © 2026 Technossus. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: 32 }}>
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((l) => (
            <a key={l} href="#" style={{ fontFamily: fontSans, fontWeight: 500, fontSize: 14, color: colors.text[500], textDecoration: 'none' }}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export function ServicesPage() {
  const accordionItems = [
    {
      question: 'Continuous Quality & QA Ops Engineering',
      answer:   'Quality that lives in the pipeline, from design to release. We embed testing at every phase so defects get caught early, costs stay low, and release confidence is built in — not bolted on.',
    },
    {
      question: 'Quality Engineering & Independent Assurance',
      answer:   'Your release shouldn't feel like a bet every time. Independent QA teams with structured assurance frameworks, traceability matrices, and compliance validation — built to hold up under audit.',
    },
    {
      question: 'Performance, Resilience & Scalability',
      answer:   'Ship version one. Then build the product it needs to become. Load testing, chaos engineering, and capacity planning that ensures your system handles real-world demand.',
    },
    {
      question: 'AI Quality & Model Validation',
      answer:   'LLMs behave differently in production than they do in staging. We build evaluation pipelines, guardrail testing, and behavioral drift detection so your AI systems stay trustworthy at scale.',
    },
  ];

  const bentoStats = [
    { stat: '85%',   description: 'of defects that reach production were detectable earlier in the cycle at a fraction of the cost to fix.',          source: '— IBM Systems Sciences Institute' },
    { stat: '6×',    description: 'more expensive to fix a defect post-release than to catch it during development.',                                  source: '— NIST' },
    { stat: '30%',   description: 'average release cycle reduction when QA is shifted left and automated pipelines replace manual regression.',         source: '— Technossus Engagements' },
    { stat: '90%+',  description: 'of Technossus clients continue working with us after the first engagement — many for over a decade.',              source: '— Technossus Internal' },
  ];

  const painPoints = [
    {
      heading: 'We keep finding issues too late',
      body:    'Testing happens at the end. The build is already done, the release is already scheduled, and the defects showing up now should have been caught three sprints ago.',
    },
    {
      heading: 'Our automation suite exists. It just doesn't help.',
      body:    'The test infrastructure is there. Coverage numbers look reasonable on paper. But the suite is brittle, maintenance is constant, and half the team isn't sure what the tests are actually validating anymore.',
    },
    {
      heading: 'We found out about the compliance gap at the wrong moment.',
      body:    'The audit window opened or the submission deadline arrived and the validation documentation wasn't where it needed to be. Requirements that should have been mapped at the start got picked up midway through, or not at all.',
    },
    {
      heading: 'We tested it thoroughly. So why doesn't it behave the way it did?',
      body:    'The model passed every evaluation. Staging looked good. But in production, outputs drift, edge cases surface, and guardrails show gaps under real user behavior.',
    },
  ];

  const sectionPad: React.CSSProperties = {
    maxWidth: 1440,
    width: '100%',
    margin: '0 auto',
    padding: `0 96px`,
    boxSizing: 'border-box',
  };

  return (
    <div style={{ background: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: fontSans }}>
      {/* ── Header ── */}
      <SiteHeader />

      {/* ── Hero ── */}
      <section style={{ ...sectionPad, paddingTop: 0, paddingBottom: 0 }}>
        {/* Breadcrumb */}
        <div style={{ paddingTop: 8, paddingBottom: 8 }}>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Service Offerings', href: '/services' },
              { label: 'Quality Engineering and Automation', active: true },
            ]}
          />
        </div>

        {/* Hero two-col */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 80,
            minHeight: 540,
            overflow: 'hidden',
          }}
        >
          {/* Left */}
          <div style={{ flex: '0 0 820px', display: 'flex', flexDirection: 'column', gap: 60 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h1
                style={{
                  fontFamily: fontSerif,
                  fontWeight: 500,
                  fontSize: 48,
                  lineHeight: '56px',
                  letterSpacing: '-0.96px',
                  margin: 0,
                }}
              >
                <span style={{ color: '#424242' }}>You know what's broken. The problem is </span>
                <span style={{ color: red }}>what you don't know yet.</span>
              </h1>
              <p
                style={{
                  fontFamily: fontSans,
                  fontWeight: 500,
                  fontSize: 18,
                  lineHeight: '24px',
                  color: colors.text[700],
                  margin: 0,
                }}
              >
                Most quality programs are built to catch what already went wrong. We work with your team to build the kind of intelligence that finds problems before your users do and the kind of automation that holds up long after we're gone.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <Button variant="primary" label="Show us the problem" />
              <Button variant="secondary" label="See How We Work" />
            </div>
          </div>

          {/* Right – hero image */}
          <div style={{ flex: '0 0 540px', height: 540, overflow: 'hidden', position: 'relative' }}>
            <img
              src={imgHero}
              alt="Business professional"
              style={{ position: 'absolute', inset: 0, width: '120%', height: '100%', objectFit: 'cover', left: '-10%' }}
            />
          </div>
        </div>
      </section>

      {/* ── Trusted By ── */}
      <section style={{ ...sectionPad, paddingTop: 40, paddingBottom: 48, borderTop: `1px solid ${colors.brand.lightGray}` }}>
        <p
          style={{
            fontFamily: fontSans, fontWeight: 500, fontSize: 16,
            lineHeight: '24px', color: colors.neutral[600],
            textAlign: 'center', margin: '0 0 24px',
          }}
        >
          TRUSTED BY
        </p>
        <div style={{ display: 'flex', gap: 96, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          <img src={imgLogo1} alt="Client" style={{ height: 42, objectFit: 'contain' }} />
          <img src={imgLogo2} alt="Client" style={{ height: 42, objectFit: 'contain' }} />
          <img src={imgLogo3} alt="Client" style={{ height: 35, objectFit: 'contain' }} />
          <img src={imgLogo4} alt="Client" style={{ height: 61, objectFit: 'contain' }} />
        </div>
      </section>

      {/* ── The Shift ── */}
      <section style={{ width: '100%', boxSizing: 'border-box', padding: '0 96px' }}>
        <SectionTag label="THE SHIFT" />
        <div
          style={{
            background: dark1,
            display: 'flex',
            gap: 36,
            alignItems: 'center',
            padding: 56,
            marginTop: 16,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Corner decorations */}
          <img src={imgSubtractTL} alt="" style={{ position: 'absolute', top: 0, left: 0, width: 118, height: 118, pointerEvents: 'none', transform: 'rotate(180deg) scaleY(-1)' }} />
          <img src={imgSubtractBR} alt="" style={{ position: 'absolute', bottom: 0, right: 0, width: 118, height: 118, pointerEvents: 'none', transform: 'scaleY(-1)' }} />

          {/* Left text */}
          <div style={{ flex: '0 0 485px', display: 'flex', flexDirection: 'column', gap: 36 }}>
            <h2
              style={{
                fontFamily: fontSerif, fontWeight: 500, fontSize: 36,
                lineHeight: '40px', margin: 0,
              }}
            >
              <span style={{ color: '#FFFFFF' }}>Quality doesn't start at the end of the build. That's just where </span>
              <span style={{ color: red }}>quality failures get identified.</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{ fontFamily: fontSans, fontWeight: 500, fontSize: 16, lineHeight: '24px', color: colors.text[300], margin: 0 }}>
                Testing has always been the part of the delivery cycle that absorbs everyone else's delays and still gets blamed when something ships broken. Engineers are moving faster than ever, and the gap between release velocity and quality confidence is widening, not closing.
              </p>
              <p style={{ fontFamily: fontSans, fontWeight: 500, fontSize: 16, lineHeight: '24px', color: colors.text[300], margin: 0 }}>
                AI is changing the economics of that gap. Not by replacing QA engineers, but by giving them the kind of leverage that actually matches the pace they're being asked to work at. We work alongside your team to build that leverage, through automation that transfers, tooling your team can own, and a quality practice that compounds instead of decaying.
              </p>
            </div>
          </div>

          {/* Right – 2×2 stat bento */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'flex', gap: 20 }}>
              <StatBox stat={bentoStats[0].stat} description={bentoStats[0].description} source={bentoStats[0].source} />
              <StatBox stat={bentoStats[1].stat} description={bentoStats[1].description} source={bentoStats[1].source} />
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              <StatBox stat={bentoStats[2].stat} description={bentoStats[2].description} source={bentoStats[2].source} />
              <StatBox stat={bentoStats[3].stat} description={bentoStats[3].description} source={bentoStats[3].source} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Offerings (Accordion) ── */}
      <section style={{ ...sectionPad, paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <SectionTag label="SERVICE OFFERINGS" />
            <h2
              style={{
                fontFamily: fontSerif, fontWeight: 500, fontSize: 36,
                lineHeight: '40px', color: nearBlack, margin: 0, maxWidth: 844,
              }}
            >
              Release confidence, compliance readiness, and{' '}
              <span style={{ color: red }}>AI quality built in from the start.</span>
            </h2>
          </div>
          <Accordion variant="desktop" items={accordionItems} />
        </div>
      </section>

      {/* ── Capability Transfer ── */}
      <section style={{ ...sectionPad, paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
          {/* Left text */}
          <div style={{ flex: '0 0 726px', display: 'flex', flexDirection: 'column', gap: 24 }}>
            <SectionTag label="CAPABILITY TRANSFER" />
            <h2
              style={{
                fontFamily: fontSerif, fontWeight: 500, fontSize: 36,
                lineHeight: '40px', color: nearBlack, margin: 0,
              }}
            >
              We don't build a testing practice your team can't maintain.
            </h2>
            <p style={{ fontFamily: fontSans, fontWeight: 500, fontSize: 16, lineHeight: '24px', color: colors.text[700], margin: 0 }}>
              Every engagement is designed around transfer, not dependency. Quality strategies, automation frameworks, and validation practices get built collaboratively, with the people who will own them involved from the first conversation. When delivery closes, the capability stays.
            </p>
            <p style={{ fontFamily: fontSans, fontWeight: 500, fontSize: 16, lineHeight: '24px', color: colors.text[700], margin: 0 }}>
              Bringing in outside expertise on quality creates a real tension for most teams — the fear that what gets built won't be understood, or that standards will slip the moment the engagement ends. Over 90% of Technossus clients continue working with us after the first engagement. Many have for over a decade. That's not a retention metric, it's what happens when a practice gets built right the first time.
            </p>
          </div>

          {/* Right – 2×2 service cards */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'flex', gap: 24 }}>
              <Card
                mode="dark" variant="small"
                title="Automate document workflows"
                description="Use advanced ML to automatically extract and categorize data from complex documents. Streamline pipelines and eliminate manual entry."
              />
              <Card
                mode="dark" variant="small"
                title="AI-powered test generation"
                description="Generate intelligent test cases from requirements and user stories. Let AI identify edge cases your team might miss."
              />
            </div>
            <div style={{ display: 'flex', gap: 24 }}>
              <Card
                mode="dark" variant="small"
                title="Continuous compliance monitoring"
                description="Track regulatory requirements automatically. Surface traceability gaps before audits — not during them."
              />
              <Card
                mode="dark" variant="small"
                title="Performance & load intelligence"
                description="Simulate real user load, identify bottlenecks early, and validate your system's behaviour under peak conditions."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Success Stories ── */}
      <section
        style={{
          width: '100%', boxSizing: 'border-box',
          background: colors.background.gray4,
          padding: '80px 96px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            <SectionTag label="CASE STUDIES" />
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h2 style={{ fontFamily: fontSerif, fontWeight: 500, fontSize: 36, lineHeight: '40px', color: nearBlack, margin: 0 }}>
                  Success stories.
                </h2>
                <p style={{ fontFamily: fontSans, fontWeight: 500, fontSize: 16, lineHeight: '24px', color: colors.text[700], margin: 0 }}>
                  If any of these describe where your team is right now, we should talk.
                </p>
              </div>
              <Button variant="text-link" label="View All" />
            </div>

            <div style={{ display: 'flex', gap: 20 }}>
              <Card
                mode="light" variant="insights"
                image={imgCaseStudy1}
                tags="HEALTHCARE · RPA"
                title="Automating Home Care Operations for Unprecedented Efficiency"
                excerpt="Transformed high-volume operational workflows with RPA and Smart Rules, eliminating manual bottlenecks across order entry, billing, and insurance."
                ctaLabel="See How We Work"
              />
              <Card
                mode="light" variant="insights"
                image={imgCaseStudy1}
                tags="FINTECH · PLATFORM MODERNIZATION"
                title="Architecting a High-Frequency Trading Engine for Global Markets"
                excerpt="We overhauled the legacy infrastructure of a Tier-1 financial institution, reducing latency by 40% using event-driven microservices."
                ctaLabel="See How We Work"
              />
              <Card
                mode="light" variant="insights"
                image={imgCaseStudy1}
                tags="HITECH · AI QUALITY"
                title="Building AI Evaluation Pipelines for a Global SaaS Platform"
                excerpt="Designed and deployed model validation infrastructure to detect behavioral drift, bias, and safety regressions across production LLM deployments."
                ctaLabel="See How We Work"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Pain Points ── */}
      <section style={{ ...sectionPad, paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <SectionTag label="COMMON CHALLENGES" />
            <div>
              <h2 style={{ fontFamily: fontSerif, fontWeight: 500, fontSize: 36, lineHeight: '40px', color: nearBlack, margin: '0 0 8px' }}>
                If any of these sound like your last project retrospective, we should talk.
              </h2>
              <p style={{ fontFamily: fontSans, fontWeight: 500, fontSize: 16, lineHeight: '24px', color: colors.text[700], margin: 0 }}>
                These aren't hypotheticals. They're the conversations we have most often.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <div style={{ display: 'flex', borderTop: `1px solid ${colors.background.dark3}` }}>
              <PainPointBox heading={painPoints[0].heading} body={painPoints[0].body} />
              <div style={{ width: 1, background: colors.background.dark3, flexShrink: 0 }} />
              <PainPointBox heading={painPoints[1].heading} body={painPoints[1].body} />
            </div>
            <div style={{ display: 'flex', borderTop: `1px solid ${colors.background.dark3}`, borderBottom: `1px solid ${colors.background.dark3}` }}>
              <PainPointBox heading={painPoints[2].heading} body={painPoints[2].body} />
              <div style={{ width: 1, background: colors.background.dark3, flexShrink: 0 }} />
              <PainPointBox heading={painPoints[3].heading} body={painPoints[3].body} />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ width: '100%', padding: '0 96px', boxSizing: 'border-box', paddingBottom: 80 }}>
        <CTABanner
          size="large"
          heading="Ready to accelerate your digital & AI journey?"
          subheading="Whether you're modernizing systems, building a new product, or scaling engineering, we're ready to collaborate."
          ctaLabel="Schedule a Strategy Session"
        />
      </section>

      {/* ── Footer ── */}
      <SiteFooter />
    </div>
  );
}

export default ServicesPage;
