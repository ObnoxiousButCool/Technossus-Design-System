import React from 'react';
import { Tag }        from '../../../components/Tag';
import { Breadcrumb } from '../../../components/Breadcrumb';
import { Accordion }  from '../../../components/Accordion';
import { CTABanner }  from '../../../components/CTABanner';
import { Button }     from '../../../components/Button';
import { Card }       from '../../../components/Card';
import { useBreakpoint } from '../../../ts/breakpoints';
import type { AccordionItem } from '../../../components/Accordion';

const sans  = '"General Sans", system-ui, -apple-system, sans-serif';
const serif = '"Roboto Serif", Georgia, serif';
const red   = '#ED2939';
const dark1 = '#1B1B1B';

const CornerTL = () => (
  <img src="/assets/icons/corner-topleft.svg" alt="" aria-hidden
    style={{ position: 'absolute', top: 0, left: 0, width: 118, height: 118, pointerEvents: 'none', zIndex: 2 }} />
);
const CornerBR = () => (
  <img src="/assets/icons/corner-bottomright.svg" alt="" aria-hidden
    style={{ position: 'absolute', bottom: 0, right: 0, width: 118, height: 118, pointerEvents: 'none', zIndex: 2 }} />
);

const solutionItems: AccordionItem[] = [
  {
    title: 'From fragmented systems to a unified lab platform',
    subtitle: 'Helix replaces fragmented legacy systems with a single, flexible solution.',
    content: {
      type: 'detail',
      serviceLabel: 'UNIFIED LAB PLATFORM',
      heading: 'A single, flexible solution for connected lab operations.',
      body: [
        'Helix replaces fragmented legacy systems with a single, flexible solution that supports seamless integration, patient-centric workflows, and scalable lab operations. It unifies data across labs, departments, and care settings — reducing the manual coordination that slows clinical teams down.',
      ],
    },
  },
  {
    title: 'Streaming Analytics Platform',
    subtitle: 'Enable real-time visibility across patient care, operations, and systems.',
    content: {
      type: 'detail',
      serviceLabel: 'STREAMING ANALYTICS PLATFORM',
      heading: 'Real-time visibility as care happens, not hours after.',
      body: [
        'Enable real-time visibility across patient care, operations, and systems by streaming data as it is generated — not hours or days later. Clinical teams get the signal they need when decisions still matter, not after the window has passed.',
      ],
    },
  },
  {
    title: 'Healthcare analytics for a USA-based healthcare firm',
    subtitle: 'Advanced analytics solutions improving visibility across diagnostics and operations.',
    content: {
      type: 'spec',
      impact: [
        'Reduced turnaround times across diagnostic and operational workflows.',
        'Improved visibility across clinical, financial, and operational functions.',
        'Enabled faster, data-driven decision-making across care teams.',
      ],
      techStack: ['AI Adoption Strategy', 'SQL Server', 'Azure Data Services', 'API'],
      capabilities: ['Healthcare Analytics', 'Clinical Insights', 'Performance Visibility', 'Decision Support System'],
    },
  },
  {
    title: 'Revenue Cycle Intelligence & Automation',
    subtitle: 'Automate the revenue cycle. Recover what\'s leaking.',
    content: {
      type: 'detail',
      serviceLabel: 'REVENUE CYCLE INTELLIGENCE',
      heading: 'Automate the revenue cycle. Recover what\'s leaking.',
      body: [
        'Revenue cycle failures are rarely visible until the denial arrives. We build intelligent automation that catches errors before claims are submitted, routes exceptions to the right workflows, and gives finance teams a real-time view of the cycle from service to payment.',
      ],
    },
  },
];

const shiftCards = [
  { title: 'Real-time care depends on real-time systems',  body: 'Clinical workflows are shifting from retrospective analysis to real-time decisioning. Systems must process patient data instantly without latency or inconsistency.' },
  { title: 'Distributed care demands connected systems',   body: 'Healthcare is no longer centralized. Hospitals, remote monitoring devices, telehealth platforms, and third-party systems must work together seamlessly, but interoperability remains complex.' },
  { title: 'Reliable AI in clinical workflows',            body: 'AI solutions are moving from pilots into diagnostics, triage, and care recommendations. Ensuring accuracy and consistency in real clinical environments is now a critical challenge.' },
  { title: 'Cybersecurity is a patient safety issue',      body: 'Healthcare systems are often high-value targets. As systems become more connected, protecting patient data, ensuring uptime, and maintaining system integrity directly impact care delivery.' },
];

const featuredCards = [
  { tags: 'HEALTHCARE • INTEROPERABILITY', title: 'Unifying Patient Records Across a 12-Hospital System',       excerpt: 'A regional health network was operating on six different EHR platforms with no shared data layer. We built the integration architecture that connected them, enabling unified patient records and real-time data exchange.' },
  { tags: 'HEALTHCARE • AI ENGINEERING',   title: 'Streaming Analytics for Real-Time Clinical Decision Support', excerpt: 'A diagnostics company needed visibility into patient data as it was generated, not hours later. We built a streaming pipeline that feeds their clinical dashboards with sub-second latency.' },
  { tags: 'HEALTHCARE • REVENUE CYCLE',    title: 'Reducing Claim Denials by 38% with Intelligent Automation',   excerpt: 'A payer organization was losing significant revenue to avoidable claim denials. We implemented an AI-driven pre-submission validation layer that catches errors before they become denials.' },
];

const successCards = [
  { tags: 'TELEHEALTH • PLATFORM ENGINEERING',    title: 'Scaling a Telehealth Platform to 2M Monthly Active Users',      excerpt: 'A telehealth provider was hitting infrastructure limits during peak demand. We redesigned their platform architecture to handle 10x load without downtime or performance degradation.' },
  { tags: 'LIFE SCIENCES • DIGITAL THERAPEUTICS', title: 'FDA-Cleared Digital Therapeutic for Chronic Condition Management', excerpt: 'A medtech startup needed a digital therapeutic to reach FDA clearance. We built the software validation framework, quality documentation, and compliance pipeline that got them there.' },
  { tags: 'PAYER • ANALYTICS',                    title: 'Population Health Analytics Dashboard for a National Payer',      excerpt: 'A national health insurance company needed real-time population health insights to support care management programs. We built an analytics platform that surfaces risk signals and care gaps.' },
];

export default function Healthcare() {
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
            { label: 'Healthcare', active: true },
          ]} />
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? 32 : 60, marginTop: 40 }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
              <h1 style={d1()}>
                We care for those who care for others.{' '}
                <span style={{ color: red }}>Driving change across healthcare.</span>
              </h1>
              <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: '#5C5C5C', margin: 0, maxWidth: 560 }}>
                Healthcare friction doesn't start in the exam room. It starts in the gaps between systems. Disconnected tools, manual workflows, delayed insights. A patient journey that shouldn't be this hard. Technossus connects the systems behind care, simplifies the work around it. Because better operations are where better care begins.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Button variant="primary"   label="Talk to Our Team" href="#" />
                <Button variant="secondary" label="Explore Our Work"  href="#proof" />
              </div>
            </div>
            {!isMobile && (
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', minHeight: isTablet ? 300 : 460 }}>
                <div style={{ background: '#D4D4D4', width: '100%', height: isTablet ? 300 : 460 }} />
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
            {['TOYOTA FINANCIAL SERVICES', 'GE HealthCare', 'CHOICE ADMINISTRATORS', 'BIO THERANOSTICS'].map(name => (
              <span key={name} style={{ fontFamily: sans, fontSize: 13, fontWeight: 700, color: '#888', filter: 'grayscale(100%)', opacity: .65 }}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE SHIFT ── */}
      <section style={{ background: dark1, position: 'relative', overflow: 'hidden' }}>
        <CornerTL /><CornerBR />
        <div style={inner}>
          <Tag label="THE SHIFT" />
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 48, alignItems: 'flex-start', marginTop: 32, flexWrap: 'wrap' }}>
            <div style={{ flex: isMobile ? undefined : '0 0 380px', minWidth: isMobile ? '100%' : 280, width: isMobile ? '100%' : undefined }}>
              <h2 style={d2('#fff')}>
                Healthcare is facing a seismic shift. There is speed, but{' '}
                <span style={{ color: red }}>operational readiness remains uneven.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'Patients are more digitally aware, less tolerant of friction, and quicker to switch when experiences fall short. Expectations around convenience, speed, and transparency are rising across the care journey, while systems and workflows struggle to keep pace.',
                  'At the same time, administrative burden and operational complexity continue to strain care teams, contributing to inefficiencies and burnout. Interoperability remains an ongoing challenge, limiting how effectively systems connect.',
                ].map((p, i) => (
                  <p key={i} style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#B5B5B5', margin: 0 }}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20, width: isMobile ? '100%' : undefined }}>
              <div style={{ display: 'grid', gridTemplateColumns: cols2, gap: 20 }}>
                {shiftCards.map(card => (
                  <div key={card.title} style={{ background: '#262626', border: '1px solid #343434', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <h3 style={{ fontFamily: sans, fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.4, margin: 0 }}>{card.title}</h3>
                    <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: '#9B9B9B', margin: 0 }}>{card.body}</p>
                  </div>
                ))}
              </div>
              {/* Stats bar — values from Figma design */}
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 1, background: '#343434' }}>
                {[
                  { num: 'Nearly 2 in 3', desc: 'healthcare leaders say administrative burden is limiting clinical capacity' },
                  { num: 'Nearly 2 in 3', desc: 'patients sought care elsewhere when the wait felt too long' },
                  { num: '80%',           desc: 'of physicians reported at least one symptom of burnout in 2025' },
                  { num: '80%',           desc: 'of AI initiatives in healthcare fail to scale beyond pilot environments' },
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

      {/* ── DHE ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="WHAT WE BUILD WITH YOU" />
          <h2 style={{ ...d2(), marginTop: 16 }}>
            Digital health engineering <span style={{ color: red }}>(DHE)</span>
          </h2>
          <p style={{ fontFamily: sans, fontSize: 16, color: '#5C5C5C', marginTop: 12 }}>Connect care, better outcomes, scalable systems</p>
        </div>
        <div style={{ background: '#D4D4D4', height: isMobile ? 300 : isTablet ? 500 : 765, width: '100%', marginTop: 32 }} />
      </section>

      {/* ── SOLUTION ACCORDION ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="SOLUTION" />
          <h2 style={{ ...d2(), marginTop: 16 }}>
            Turning Fragmented Systems into Intelligent{' '}
            <span style={{ color: red }}>Healthcare Ecosystems</span>
          </h2>
          <div style={{ marginTop: 48 }}>
            <Accordion items={solutionItems} defaultActiveIndex={2} />
          </div>
        </div>
      </section>

      {/* ── FEATURED CASE STUDIES ── */}
      <section id="proof" style={{ background: dark1, position: 'relative', overflow: 'hidden' }}>
        <CornerTL /><CornerBR />
        <div style={inner}>
          <Tag label="FEATURED CASE STUDIES" />
          <div style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'flex-end', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: 16, marginTop: 16, marginBottom: 40 }}>
            <div>
              <h1 style={d1('#fff')}>Featured case <span style={{ color: red }}>studies.</span></h1>
              <p style={{ fontFamily: sans, fontSize: 15, color: '#9B9B9B', marginTop: 10 }}>Real outcomes from healthcare organizations we've partnered with.</p>
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

      {/* ── SUCCESS STORIES ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="SUCCESS STORIES" />
          <div style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'flex-end', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: 16, marginTop: 16, marginBottom: 40 }}>
            <div>
              <h1 style={d1()}>More from <span style={{ color: red }}>healthcare.</span></h1>
              <p style={{ fontFamily: sans, fontSize: 15, color: '#5C5C5C', marginTop: 10 }}>If any of these describe where your team is right now, we should talk.</p>
            </div>
            <a href="#" style={{ fontFamily: sans, fontSize: 14, color: red, textDecoration: 'underline', whiteSpace: 'nowrap', flexShrink: 0 }}>View All</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: cols3, gap: 20 }}>
            {successCards.map((card, i) => (
              <Card key={i} mode="light" type="insights" tags={card.tags} title={card.title} excerpt={card.excerpt} ctaLabel="See How We Work" />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <CTABanner
        size="large"
        label="LET'S WORK ON IT TOGETHER"
        heading="Ready to accelerate your digital & AI journey?"
        body="Whether you're modernizing systems, building a new product, or scaling engineering, we're ready to collaborate."
        primaryCta="Schedule a Strategy Session →"
        secondaryCta="Contact Us"
      />
    </>
  );
}
