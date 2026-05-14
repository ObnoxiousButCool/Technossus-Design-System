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
import { resolveImageSrc } from '../../../ts/imageSrc';
import imgHero from '../../../assets/Industries/Healthcare.png';

const imgCardPhoto = '/assets/fbbad1d37f7a4e076de4d16631dc6863c6c4444a.png';

const sans  = '"General Sans", system-ui, -apple-system, sans-serif';
const serif = '"Roboto Serif", Georgia, serif';
const red   = '#ED2939';
const dark1 = '#1B1B1B';
const imgHealthcareOfferings = '/assets/healthcare-offerings.png';

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


const solutionItems: AccordionItem[] = [
  {
    title: 'Helix — From Fragmented Systems to a Unified Lab Platform',
    subtitle: 'Helix replaces fragmented legacy systems with a single, flexible solution for connected lab operations.',
    content: {
      type: 'detail',
      serviceLabel: 'UNIFIED LAB PLATFORM — HELIX',
      heading: 'One platform. Seamless lab operations. Scalable patient-centric workflows.',
      body: [
        'Helix replaces fragmented legacy systems with a single, flexible solution that supports seamless integration, patient-centric workflows, and scalable lab operations. Licensing fees were reduced by replacing three lab systems with one higher-performing LIMS.',
        'By integrating the LIMS with their billing company, invoicing costs are reduced and payments received faster. Manual labor is eliminated through standardized integration with systems at all facilities, enabling greater testing throughput without a proportionate increase in staff.',
      ],
    },
  },
  {
    title: 'Streaming Analytics Platform',
    subtitle: 'Enable real-time visibility across patient care, operations, and systems by streaming data as it is generated — not hours or days later.',
    content: {
      type: 'detail',
      serviceLabel: 'STREAMING ANALYTICS PLATFORM',
      heading: 'The window for clinical decisions closes fast. Real-time data is what keeps it open.',
      body: [
        'We stream data from core healthcare systems into a real-time layer that enables live visibility across patient flow, diagnostics, devices, and revenue processes — helping teams act immediately on delays, risks, and operational bottlenecks.',
        'Clinical teams get the signal they need when decisions still matter, not hours after the window has passed.',
      ],
    },
  },
  {
    title: 'Revenue Cycle Intelligence & Automation',
    subtitle: 'Improve cash flow, reduce denials, and streamline revenue processes using data and automation.',
    content: {
      type: 'detail',
      serviceLabel: 'REVENUE CYCLE INTELLIGENCE',
      heading: 'Revenue cycle failures are rarely visible until the denial arrives.',
      body: [
        'We bring visibility and automation into the revenue cycle — helping healthcare organizations reduce delays, improve collections, and operate with greater financial control. Intelligent automation catches errors before claims are submitted, routes exceptions to the right workflows, and gives finance teams a real-time view from service to payment.',
        'Value created: Faster reimbursements • Reduced claim denials • Improved revenue predictability.',
      ],
    },
  },
  {
    title: 'Digital Patient Experience (DPx)',
    subtitle: 'Intuitive, connected experiences across the care journey — from discovery to post-care engagement.',
    content: {
      type: 'detail',
      serviceLabel: 'DIGITAL PATIENT EXPERIENCE — DPx',
      heading: 'The patient journey doesn\'t begin at the appointment. It begins at the search.',
      body: [
        'We design and deliver patient portals, booking journeys, and digital touchpoints that simplify search, scheduling, and registration workflows. CDPs and MVPs are built to enable personalization that makes care feel like it\'s designed for each patient.',
        'When digital experiences match patient expectations, friction goes down, satisfaction goes up, and care teams spend less time managing the gaps.',
      ],
    },
  },
  {
    title: 'Care Provider Experience (CPx)',
    subtitle: 'Engage care teams with systems that reduce friction and improve coordination across facilities.',
    content: {
      type: 'detail',
      serviceLabel: 'CARE PROVIDER EXPERIENCE — CPx',
      heading: 'Burnout starts where friction lives. Better tools change that equation.',
      body: [
        'We build ambulatory pre-visit solutions scaled across 200+ facilities, pharmacy automation (340B optimization), and provider data management tools that reduce the coordination overhead that exhausts clinical teams.',
        'When the systems care providers use every day actually work — smoothly, reliably, without manual workarounds — clinical capacity goes up and burnout risk goes down.',
      ],
    },
  },
];

const featuredCards = [
  { tags: 'HEALTHCARE • CRM INTEGRATION',    title: 'CRM Requires Complex External Integrations — Digital Healthcare ID Cards',  excerpt: 'Technossus delivered a scalable mobile platform enabling real-time access to digital healthcare ID cards, seamlessly integrated across insurers, brokers, and enterprise systems. This improved data accessibility and reduced manual effort, while increasing user adoption, customer retention, and overall brand value.' },
  { tags: 'HEALTHCARE • CRM INTEGRATION',    title: 'CRM Requires Complex External Integrations — Unified Customer Data',        excerpt: 'Technossus delivered a unified CRM with real-time access to customer data, enrollment progress, and interaction history across multiple external platforms. This improved response times and productivity, ensured data accuracy, enhanced reporting visibility, and enabled a successful on-time launch despite high complexity.' },
  { tags: 'HEALTHCARE • ALM & GOVERNANCE',   title: 'ALM Expertise Drives Project Success',                                       excerpt: 'Technossus established enterprise-wide ALM processes, tools, and governance frameworks to enable structured execution and coordination across systems and vendors. This improved visibility and control, reduced delivery risks, and strengthened execution confidence in a complex, large-scale transformation program.' },
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
            { label: 'Healthcare & Life Sciences', active: true },
          ]} />
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? 32 : 60, marginTop: 40 }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
              <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase', color: '#ADADAD', margin: 0 }}>Healthcare & Life Sciences</p>
              <FadeUp>
                <h1 style={d1()}>
                  We care for those who care for others.{' '}
                  <span style={{ color: red }}>Driving Change Across Healthcare</span>
                </h1>
              </FadeUp>
              <FadeUp delay={80}>
                <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: '#5C5C5C', margin: 0, maxWidth: 560 }}>
                  Healthcare friction doesn't start in the exam room. It starts in the gaps between systems. Disconnected tools, manual workflows, delayed insights. A patient journey that shouldn't be this hard.
                  <br /><br />
                  Technossus connects the systems behind care, simplifies the work around it. Because better operations are where better care begins.
                </p>
              </FadeUp>
              <FadeUp delay={120}>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <Button variant="primary"   label="Talk to Our Team"  href="#" />
                  <Button variant="secondary" label="Explore Our Work"  href="#proof" />
                </div>
              </FadeUp>
            </div>
            {!isMobile && (
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', minHeight: isTablet ? 300 : 460 }}>
                <img src={resolveImageSrc(imgHero)} alt="" style={{ width: '100%', height: isTablet ? 300 : 460, objectFit: 'cover', display: 'block' }} />
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
            {['GE HealthCare', 'CHOICE ADMINISTRATORS', 'BIO THERANOSTICS', 'COMMONSPIRIT', 'ADAPTHEALTH'].map(name => (
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
                Healthcare is facing a seismic shift. There is speed, but operational readiness{' '}
                <span style={{ color: red }}>remains uneven.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'Patients are more digitally aware, less tolerant of friction, and quicker to switch when experiences fall short. Expectations around convenience, speed, and transparency are rising across the care journey, while systems and workflows struggle to keep pace.',
                  'Administrative burden and operational complexity continue to strain care teams, contributing to inefficiencies and burnout. Interoperability remains an ongoing challenge, limiting how effectively systems connect and how smoothly care is delivered.',
                ].map((p, i) => (
                  <p key={i} style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#B5B5B5', margin: 0 }}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20, width: isMobile ? '100%' : undefined }}>
              <div style={{ display: 'grid', gridTemplateColumns: cols2, gap: 20 }}>
                {[
                  { title: 'Real-time care depends on real-time systems',  body: 'Clinical workflows are shifting from retrospective analysis to real-time decisioning. Systems must process patient data instantly without latency or inconsistency.' },
                  { title: 'Reliable AI in clinical workflows',            body: 'AI solutions are moving from pilots into diagnostics, triage, and care recommendations. Ensuring accuracy and consistency in real clinical environments is now a critical challenge.' },
                  { title: 'Distributed care demands connected systems',   body: 'Healthcare is no longer centralized. Hospitals, remote monitoring devices, telehealth platforms, and third-party systems must work together seamlessly — but interoperability remains complex.' },
                  { title: 'Cybersecurity is a Patient Safety Issue',      body: 'Healthcare systems are high-value targets. As systems become more connected, protecting patient data, ensuring uptime, and maintaining system integrity directly impact care delivery.' },
                ].map(card => (
                  <div key={card.title} style={{ background: '#262626', border: '1px solid #343434', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <h3 style={{ fontFamily: sans, fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.4, margin: 0 }}>{card.title}</h3>
                    <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: '#9B9B9B', margin: 0 }}>{card.body}</p>
                  </div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 1, background: '#343434' }}>
                {[
                  { num: '85%',           desc: 'of healthcare leaders say administrative burden is limiting clinical capacity' },
                  { num: '2 in 3',        desc: 'patients sought care elsewhere when the wait felt too long' },
                  { num: '41.9%',         desc: 'of physicians reported at least one symptom of burnout in 2025' },
                  { num: '60%',           desc: 'of AI initiatives in healthcare fail to scale beyond pilot environments' },
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

      {/* ── HEALTHCARE OFFERINGS IMAGE ── */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: isMobile ? '0 16px 48px' : isTablet ? '0 32px 60px' : '0 80px 80px' }}>
          <img src={imgHealthcareOfferings} alt="Healthcare offerings" style={{ width: '100%', display: 'block' }} />
        </div>
      </section>

      {/* ── PROOF ── */}
      <div style={{ maxWidth: 1440, margin: '0 auto', marginBottom: isMobile ? 12 : 16, padding: isMobile ? '0 16px' : isTablet ? '0 32px' : '0 80px', background: '#fff' }}>
        <Tag label="PROOF" variant="dark" />
      </div>
      <section id="proof" style={{ background: dark1, position: 'relative', overflow: 'hidden' }}>
        <CornerTL /><CornerBR />
        <div style={inner}>
          <div style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'flex-end', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: 16, marginTop: 0, marginBottom: 40 }}>
            <div>
              <h1 style={d1('#fff')}>Success <span style={{ color: red }}>stories.</span></h1>
              <p style={{ fontFamily: sans, fontSize: 15, color: '#9B9B9B', marginTop: 10 }}>Real outcomes from healthcare organizations we've partnered with.</p>
            </div>
            <a href="#" style={{ fontFamily: sans, fontSize: 14, color: '#9B9B9B', textDecoration: 'underline', whiteSpace: 'nowrap', flexShrink: 0 }}>View All</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: cols3, gap: 20 }}>
            {featuredCards.map((card, i) => (
              <Card key={i} mode="dark" type="insights" image={imgCardPhoto} tags={card.tags} title={card.title} excerpt={card.excerpt} ctaLabel="See How We Work" />
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: isMobile ? 48 : 80 }} />

      {/* ── SOLUTION ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="SOLUTION" />
          <h2 style={{ ...d2(), marginTop: 16 }}>
            Turning fragmented systems into intelligent{' '}
            <span style={{ color: red }}>healthcare ecosystems.</span>
          </h2>
          <div style={{ marginTop: 48 }}>
            <Accordion items={solutionItems} defaultActiveIndex={0} />
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <CTABanner
        size="large"
        label="LET'S WORK ON IT TOGETHER"
        heading="Reduce complexity by fixing the disconnected systems beneath the care journey."
        body="Technossus helps healthcare and life sciences organizations build systems that move faster, work smarter, and scale with less friction."
        primaryCta="Bring us your problems →"
        secondaryCta="Explore Solution"
      />
      <div style={{ height: isMobile ? 48 : 80 }} />
    </>
  );
}
