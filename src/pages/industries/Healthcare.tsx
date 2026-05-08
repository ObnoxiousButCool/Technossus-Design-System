import React from 'react';
import { Tag }        from '../../../components/Tag';
import { Breadcrumb } from '../../../components/Breadcrumb';
import { Accordion }  from '../../../components/Accordion';
import { CTABanner }  from '../../../components/CTABanner';
import { Button }     from '../../../components/Button';
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

const inner: React.CSSProperties = { maxWidth: 1440, margin: '0 auto', padding: '80px 80px' };

function D1({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <h1 style={{ fontFamily: serif, fontSize: 48, lineHeight: '52px', fontWeight: 500, margin: 0, ...style }}>{children}</h1>;
}
function D2({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <h2 style={{ fontFamily: serif, fontSize: 40, lineHeight: '48px', fontWeight: 600, letterSpacing: '-1px', margin: 0, ...style }}>{children}</h2>;
}

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

const featuredCards = [
  { tags: 'HEALTHCARE • INTEROPERABILITY', title: 'Unifying Patient Records Across a 12-Hospital System', excerpt: 'A regional health network was operating on six different EHR platforms with no shared data layer. We built the integration architecture that connected them, enabling unified patient records and real-time data exchange.' },
  { tags: 'HEALTHCARE • AI ENGINEERING',   title: 'Streaming Analytics for Real-Time Clinical Decision Support', excerpt: 'A diagnostics company needed visibility into patient data as it was generated, not hours later. We built a streaming pipeline that feeds their clinical dashboards with sub-second latency.' },
  { tags: 'HEALTHCARE • REVENUE CYCLE',    title: 'Reducing Claim Denials by 38% with Intelligent Automation', excerpt: 'A payer organization was losing significant revenue to avoidable claim denials. We implemented an AI-driven pre-submission validation layer that catches errors before they become denials.' },
];

const successCards = [
  { tags: 'TELEHEALTH • PLATFORM ENGINEERING', title: 'Scaling a Telehealth Platform to 2M Monthly Active Users', excerpt: 'A telehealth provider was hitting infrastructure limits during peak demand. We redesigned their platform architecture to handle 10x load without downtime or performance degradation.' },
  { tags: 'LIFE SCIENCES • DIGITAL THERAPEUTICS', title: 'FDA-Cleared Digital Therapeutic for Chronic Condition Management', excerpt: 'A medtech startup needed a digital therapeutic to reach FDA clearance. We built the software validation framework, quality documentation, and compliance pipeline that got them there.' },
  { tags: 'PAYER • ANALYTICS', title: 'Population Health Analytics Dashboard for a National Payer', excerpt: 'A national health insurance company needed real-time population health insights to support care management programs. We built an analytics platform that surfaces risk signals and care gaps.' },
];

const shiftCards = [
  { title: 'Real-time care depends on real-time systems',  body: 'Clinical workflows are shifting from retrospective analysis to real-time decisioning. Systems must process patient data instantly without latency or inconsistency.' },
  { title: 'Distributed care demands connected systems',   body: 'Healthcare is no longer centralized. Hospitals, remote monitoring devices, telehealth platforms, and third-party systems must work together seamlessly, but interoperability remains complex.' },
  { title: 'Reliable AI in clinical workflows',           body: 'AI solutions are moving from pilots into diagnostics, triage, and care recommendations. Ensuring accuracy and consistency in real clinical environments is now a critical challenge.' },
  { title: 'Cybersecurity is a patient safety issue',     body: 'Healthcare systems are often high-value targets. As systems become more connected, protecting patient data, ensuring uptime, and maintaining system integrity directly impact care delivery.' },
];

export default function Healthcare() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 80px 80px' }}>
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Healthcare', active: true },
          ]} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 60, marginTop: 40 }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
              <D1 style={{ color: '#1E1E1E' }}>
                We care for those who care for others.{' '}
                <span style={{ color: red }}>Driving change across healthcare.</span>
              </D1>
              <p style={{ fontFamily: sans, fontSize: 16, lineHeight: 1.7, color: '#5C5C5C', margin: 0, maxWidth: 560 }}>
                Healthcare friction doesn't start in the exam room. It starts in the gaps between systems. Disconnected tools, manual workflows, delayed insights. A patient journey that shouldn't be this hard. Technossus connects the systems behind care, simplifies the work around it. Because better operations are where better care begins.
              </p>
              <div style={{ display: 'flex', gap: 16 }}>
                <Button variant="primary"   label="Talk to Our Team" href="#" />
                <Button variant="secondary" label="Explore Our Work"  href="#" />
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', minHeight: 460 }}>
              <div style={{ background: '#D4D4D4', width: '100%', height: 460 }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      <section style={{ borderTop: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '32px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
          <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: '.12em', color: '#ADADAD', textTransform: 'uppercase' }}>Trusted By</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 72, flexWrap: 'wrap' }}>
            {['TOYOTA FINANCIAL SERVICES', 'GE HealthCare', 'CHOICE ADMINISTRATORS', 'BIO THERANOSTICS'].map(name => (
              <span key={name} style={{ fontFamily: sans, fontSize: 13, fontWeight: 700, color: '#888', filter: 'grayscale(100%)', opacity: .65 }}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 80 }} />

      {/* ── THE SHIFT ── */}
      <section style={{ background: dark1, position: 'relative', overflow: 'hidden' }}>
        <CornerTL /><CornerBR />
        <div style={inner}>
          <Tag label="THE SHIFT" />
          <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start', marginTop: 32, flexWrap: 'wrap' }}>
            <div style={{ flex: '0 0 380px', minWidth: 280 }}>
              <D2 style={{ color: '#fff' }}>
                Healthcare is facing a seismic shift. There is speed, but operational readiness remains uneven.
              </D2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'Patients are more digitally aware, less tolerant of friction, and quicker to switch when experiences fall short. Expectations around convenience, speed, and transparency are rising across the care journey, while systems and workflows struggle to keep pace.',
                  'At the same time, administrative burden and operational complexity continue to strain care teams, contributing to inefficiencies and burnout. Interoperability remains an ongoing challenge, limiting how effectively systems connect and how smoothly care is delivered.',
                ].map((p, i) => (
                  <p key={i} style={{ fontFamily: sans, fontSize: 15, lineHeight: 1.7, color: '#B5B5B5', margin: 0 }}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
              {/* Row 1: 2 equal cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                {shiftCards.slice(0, 2).map(card => (
                  <div key={card.title} style={{ background: '#262626', border: '1px solid #343434', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <h3 style={{ fontFamily: sans, fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.4, margin: 0 }}>{card.title}</h3>
                    <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: '#9B9B9B', margin: 0 }}>{card.body}</p>
                  </div>
                ))}
              </div>
              {/* Row 2: 2 equal cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                {shiftCards.slice(2).map(card => (
                  <div key={card.title} style={{ background: '#262626', border: '1px solid #343434', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <h3 style={{ fontFamily: sans, fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.4, margin: 0 }}>{card.title}</h3>
                    <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: '#9B9B9B', margin: 0 }}>{card.body}</p>
                  </div>
                ))}
              </div>
              {/* Stats bar */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: '#343434' }}>
                {[
                  { num: '85%',        desc: 'of healthcare leaders say administrative burden is limiting clinical capacity' },
                  { num: 'Nearly 2 in 3', desc: 'sought care elsewhere when the wait felt too long.' },
                  { num: '41.9%',      desc: 'of physicians reported at least one symptom of burnout in 2025.' },
                  { num: '60%',        desc: 'of AI initiatives in healthcare fail to scale beyond pilot environments' },
                ].map(s => (
                  <div key={s.num} style={{ background: dark1, padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{ fontFamily: serif, fontSize: 28, fontWeight: 600, color: red, lineHeight: 1 }}>{s.num}</div>
                    <p style={{ fontFamily: sans, fontSize: 12, lineHeight: 1.5, color: '#9B9B9B', margin: 0 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 80 }} />

      {/* ── DHE ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="WHAT WE BUILD WITH YOU" />
          <D2 style={{ color: '#1E1E1E', marginTop: 16 }}>
            Digital health engineering <span style={{ color: red }}>(DHE)</span>
          </D2>
          <p style={{ fontFamily: sans, fontSize: 16, color: '#5C5C5C', marginTop: 12 }}>
            Connect care, better outcomes, scalable systems
          </p>
        </div>
        <div style={{ background: '#D4D4D4', height: 765, width: '100%', marginTop: 48 }} />
      </section>

      <div style={{ height: 80 }} />

      {/* ── FEATURED CASE STUDIES ── */}
      <section style={{ background: dark1, position: 'relative', overflow: 'hidden' }}>
        <CornerTL /><CornerBR />
        <div style={inner}>
          <Tag label="PROOF" />
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, marginTop: 16, marginBottom: 40 }}>
            <div>
              <D1 style={{ color: '#fff' }}>Featured case studies</D1>
              <p style={{ fontFamily: sans, fontSize: 15, color: '#9B9B9B', marginTop: 10 }}>
                If any of these describe where your team is right now, we should talk.
              </p>
            </div>
            <a href="#" style={{ fontFamily: sans, fontSize: 14, color: '#9B9B9B', textDecoration: 'underline', whiteSpace: 'nowrap', flexShrink: 0 }}>View All</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {featuredCards.map((card, i) => (
              <article key={i} style={{ background: '#262626', border: '1px solid #343434', display: 'flex', flexDirection: 'column' }}>
                <div style={{ background: '#2A2A2A', height: 200, width: '100%' }} />
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                  <div style={{ fontFamily: sans, fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: '#767676' }}>{card.tags}</div>
                  <h3 style={{ fontFamily: sans, fontSize: 18, fontWeight: 700, color: '#fff', lineHeight: 1.4, margin: 0 }}>{card.title}</h3>
                  <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: '#9B9B9B', flex: 1, margin: 0 }}>{card.excerpt}</p>
                  <a href="#" style={{ fontFamily: sans, fontSize: 14, fontWeight: 700, color: red, textDecoration: 'underline', marginTop: 8 }}>See How We Work →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 80 }} />

      {/* ── SUCCESS STORIES ── */}
      <section style={{ background: dark1, position: 'relative', overflow: 'hidden' }}>
        <CornerTL /><CornerBR />
        <div style={inner}>
          <Tag label="PROOF" />
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, marginTop: 16, marginBottom: 40 }}>
            <div>
              <D1 style={{ color: '#fff' }}>Success <span style={{ color: red }}>stories.</span></D1>
              <p style={{ fontFamily: sans, fontSize: 15, color: '#9B9B9B', marginTop: 10 }}>
                If any of these describe where your team is right now, we should talk.
              </p>
            </div>
            <a href="#" style={{ fontFamily: sans, fontSize: 14, color: '#9B9B9B', textDecoration: 'underline', whiteSpace: 'nowrap', flexShrink: 0 }}>View All</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {successCards.map((card, i) => (
              <article key={i} style={{ background: '#262626', border: '1px solid #343434', display: 'flex', flexDirection: 'column' }}>
                <div style={{ background: '#2A2A2A', height: 200, width: '100%' }} />
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                  <div style={{ fontFamily: sans, fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: '#767676' }}>{card.tags}</div>
                  <h3 style={{ fontFamily: sans, fontSize: 18, fontWeight: 700, color: '#fff', lineHeight: 1.4, margin: 0 }}>{card.title}</h3>
                  <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: '#9B9B9B', flex: 1, margin: 0 }}>{card.excerpt}</p>
                  <a href="#" style={{ fontFamily: sans, fontSize: 14, fontWeight: 700, color: red, textDecoration: 'underline', marginTop: 8 }}>See How We Work →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 80 }} />

      {/* ── SOLUTION ACCORDION ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="SOLUTION" />
          <D2 style={{ color: '#1E1E1E', marginTop: 16 }}>
            Turning Fragmented Systems into Intelligent{' '}
            <span style={{ color: red }}>Healthcare Ecosystems</span>
          </D2>
          <div style={{ marginTop: 48 }}>
            <Accordion items={solutionItems} defaultActiveIndex={2} />
          </div>
        </div>
      </section>

      <div style={{ height: 80 }} />

      {/* ── CTA BANNER ── */}
      <CTABanner
        size="large"
        label="LET'S WORK ON IT TOGETHER"
        heading="Ready to accelerate your digital & AI journey?"
        body="Whether you're modernizing systems, building a new product, or scaling engineering, we're ready to collaborate."
        primaryCta="Schedule a Strategy Session →"
        secondaryCta="Contact Us"
      />

      <div style={{ height: 80 }} />
    </>
  );
}
