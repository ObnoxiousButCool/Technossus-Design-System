'use client';

import React from 'react';
import { Tag } from '../../../components/Tag';
import { Breadcrumb } from '../../../components/Breadcrumb';
import { Accordion } from '../../../components/Accordion';
import { CTABanner } from '../../../components/CTABanner';
import { Button } from '../../../components/Button';
import { FadeUp } from '../../../components/Animate/FadeUp';
import { Card } from '../../../components/Card';
import { useBreakpoint } from '../../../ts/breakpoints';
import type { AccordionItem } from '../../../components/Accordion';
import { resolveImageSrc } from '../../../ts/imageSrc';
import Image from 'next/image';
import imgHero from '../../../assets/Industries/Healthcare.png';
import imgCollaborators from '../../../assets/Website_images 2/Logo.png';

const imgCardPhoto = '/assets/fbbad1d37f7a4e076de4d16631dc6863c6c4444a.png';

const sans = '"General Sans", system-ui, -apple-system, sans-serif';
const serif = '"Roboto Serif", Georgia, serif';
const red = '#ED2939';
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
    title: 'From Fragmented Systems to a Unified Lab Platform',
    subtitle: 'Helix replaces fragmented legacy systems with a single, flexible solution for connected lab operations.',
    content: {
      type: 'detail',
      serviceLabel: 'UNIFIED LAB PLATFORM - HELIX',
      heading: 'One platform. Seamless lab operations. Scalable patient-centric workflows.',
      body: [
        'Helix replaces fragmented legacy systems with a single, flexible solution that supports seamless integration, patient-centric workflows, and scalable lab operations. Licensing fees were reduced by replacing three lab systems with one higher-performing LIMS.',
        'By integrating the LIMS with their billing company, invoicing costs are reduced and payments received faster. Manual labor is eliminated through standardized integration with systems at all facilities, enabling greater testing throughput without a proportionate increase in staff.',
      ],
    },
  },
  {
    title: 'Streaming Analytics Platform',
    subtitle: 'Enable real-time visibility across patient care, operations, and systems by streaming data as it is generated, not hours or days later.',
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
        'We bring visibility and automation into the revenue cycle, helping healthcare organizations reduce delays, improve collections, and operate with greater financial control. Intelligent automation catches errors before claims are submitted, routes exceptions to the right workflows, and gives finance teams a real-time view from service to payment.',
        'Value created: Faster reimbursements • Reduced claim denials • Improved revenue predictability.',
      ],
    },
  },
];

const featuredCards = [
  { tags: 'HEALTHCARE • CRM INTEGRATION', title: 'CRM Requires Complex External Integrations, Digital Healthcare ID Cards', excerpt: 'Technossus delivered a scalable mobile platform enabling real-time access to digital healthcare ID cards, seamlessly integrated across insurers, brokers, and enterprise systems. This improved data accessibility and reduced manual effort, while increasing user adoption, customer retention, and overall brand value.' },
  { tags: 'HEALTHCARE • CRM INTEGRATION', title: 'CRM Requires Complex External Integrations, Unified Customer Data', excerpt: 'Technossus delivered a unified CRM with real-time access to customer data, enrollment progress, and interaction history across multiple external platforms. This improved response times and productivity, ensured data accuracy, enhanced reporting visibility, and enabled a successful on-time launch despite high complexity.' },
  { tags: 'HEALTHCARE • ALM & GOVERNANCE', title: 'ALM Expertise Drives Project Success', excerpt: 'Technossus established enterprise-wide ALM processes, tools, and governance frameworks to enable structured execution and coordination across systems and vendors. This improved visibility and control, reduced delivery risks, and strengthened execution confidence in a complex, large-scale transformation program.' },
];

export default function Healthcare() {
  const { isMobile, isTablet } = useBreakpoint();

  const inner: React.CSSProperties = {
    maxWidth: 1440,
    margin: '0 auto',
    boxSizing: 'border-box',
    padding: isMobile ? '48px 16px' : isTablet ? '60px 32px' : '80px 80px',
  };

  const d1 = (color?: string): React.CSSProperties => ({
    fontFamily: serif,
    fontSize: isMobile ? 26 : isTablet ? 34 : 40,
    lineHeight: isMobile ? '34px' : isTablet ? '42px' : '48px',
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
  const featuredCardHeight = isMobile ? 'auto' : isTablet ? 560 : 580;
  const handleCaseStudiesCta = () => {
    window.location.href = '/case-studies';
  };

  return (
    <main style={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
      {/* ── HERO ── */}
      <section style={{ background: '#fff' }}>
        <div style={{
          maxWidth: 1440,
          margin: '0 auto',
          boxSizing: 'border-box',
          padding: isMobile
            ? '32px 16px 48px'
            : isTablet
              ? '40px 32px 60px'
              : '60px 80px 80px',
        }}>
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Healthcare & Life Sciences', active: true },
          ]} />
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            gap: isMobile ? 32 : 60,
            marginTop: 40,
          }}>
            {/* Left content */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32, paddingRight: isMobile || isTablet ? 0 : 80 }}>

              <FadeUp>
                <h1 style={d1()}>
                  We care for those who care for others.{' '}
                  <span style={{ color: red }}>Driving change across healthcare.</span>
                </h1>
              </FadeUp>

              <FadeUp delay={80}>
                <p style={{ fontFamily: sans, fontSize: 18, lineHeight: '28px', color: '#1E1E1E', margin: 0, maxWidth: 560, fontWeight: 500 }}>
                  Healthcare friction doesn't start in the exam room. It starts in the gaps between systems. Disconnected tools, manual workflows, delayed insights. A patient journey that shouldn't be this hard.
                  <br /> <br />
                  {' '}Technossus connects the systems behind care, simplifies the work around it. Because better operations are where better care begins.
                </p>
              </FadeUp>

              <FadeUp delay={120}>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <Button variant="primary" label="Talk to Our Team" href="#" />
                  <Button variant="secondary" label="Explore Our Work" href="#proof" />
                </div>
              </FadeUp>
            </div>

            {/* Right — hero image */}
            {!isMobile && (
              <div
                style={{
                  flex: '0 0 44%',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: 540,
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                }}
              >
                <img
                  src={resolveImageSrc(imgHero)}
                  alt="Healthcare Hero"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 40,
                    height: 540,
                    width: 1000,
                    objectFit: 'cover',
                    transform: 'scaleX(-1)',
                    display: 'block',
                    maskImage: 'linear-gradient(to top, transparent 0%, black 18%)',
                    WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 18%)',
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ── */}

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
            TRUSTED BY
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

      {/* ── THE SHIFT ── */}
      <div style={{
        maxWidth: 1440,
        margin: '0 auto',
        boxSizing: 'border-box',
        padding: isMobile ? '48px 16px 0' : isTablet ? '60px 32px 0' : '80px 80px 0',
      }}>

        <Tag label="THE SHIFT" variant="dark" />

        <section style={{ background: dark1, position: 'relative', overflow: 'hidden', marginTop: 16 }}>
          <CornerTL /><CornerBR />

          <div style={{
            maxWidth: 1440,
            margin: '0 auto',
            boxSizing: 'border-box',
            padding: isMobile ? '48px 16px 0' : isTablet ? '60px 32px 0' : '80px 80px 0',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? 40 : 56,
              alignItems: 'flex-start',
            }}>

              <div style={{
                flex: isMobile ? undefined : '0 0 38%',
                width: isMobile ? '100%' : undefined,
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
              }}>
                <h2 style={d2('#fff')}>
                  Healthcare is facing a seismic shift. There is speed, but operational readiness remains uneven.
                </h2>
                {[
                  'Patients are more digitally aware, less tolerant of friction, and quicker to switch when experiences fall short. Expectations around convenience, speed, and transparency are rising across the care journey, while systems and workflows struggle to keep pace.',
                  'Administrative burden and operational complexity continue to strain care teams, contributing to inefficiencies and burnout. Interoperability remains an ongoing challenge, limiting how effectively systems connect and how smoothly care is delivered.',
                ].map((p, i) => (
                  <p key={i} style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#e1e0e0', margin: 0 }}>{p}</p>
                ))}
              </div>

              <div style={{ flex: 1, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 20, alignItems: 'start' }}>
                {[
                  { title: 'Real-time care depends on real-time systems', body: 'Clinical workflows are shifting from retrospective analysis to real-time decisioning. Systems must process patient data instantly without latency or inconsistency.' },
                  { title: 'Distributed care demands connected systems', body: 'Healthcare is no longer centralized. Hospitals, remote monitoring devices, telehealth platforms, and third-party systems must work together seamlessly, but interoperability remains complex.' },
                  { title: 'Reliable AI in clinical workflows', body: 'AI solutions are moving from pilots into diagnostics, triage, and care recommendations. Ensuring accuracy and consistency in real clinical environments is now a critical challenge.' },
                  { title: 'Cybersecurity is a Patient Safety Issue', body: 'Healthcare systems are high-value targets. As systems become more connected, protecting patient data, ensuring uptime, and maintaining system integrity directly impact care delivery.' },
                ].map(card => (
                  <div key={card.title} style={{
                    background: '#1e1e1e',
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 14,
                    height: 'fit-content',
                    alignSelf: 'flex-start',
                    border: '1px solid #2e2e2e',
                  }}>
                    <h3 style={{ fontFamily: sans, fontSize: 16, fontWeight: 600, color: '#fff', lineHeight: 1.4, margin: 0 }}>{card.title}</h3>
                    <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: '#e1e0e0', margin: 0 }}>{card.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM — full-width 4-stat bar */}
          <div style={{
            maxWidth: 1440,
            margin: '0 auto',
            boxSizing: 'border-box',
            padding: isMobile ? '48px 16px' : isTablet ? '60px 32px' : '80px 80px',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
              gap: 16,
            }}>
              {[
                { num: '85%', desc: 'of healthcare leaders say administrative burden is limiting clinical capacity' },
                { num: '2 in 3', desc: 'patients sought care elsewhere when the wait felt too long' },
                { num: '41.9%', desc: 'of physicians reported at least one symptom of burnout in 2025' },
                { num: '60%', desc: 'of AI initiatives in healthcare fail to scale beyond pilot environments' },
              ].map((s, i) => (
                <div key={i} style={{ background: dark1, padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 10, borderTop: `1px solid ${red}`, borderLeft: `1px solid ${red}` }}>
                  <div style={{ fontFamily: serif, fontSize: isMobile ? 22 : 30, fontWeight: 600, color: red, lineHeight: 1.1 }}>{s.num}</div>
                  <p style={{ fontFamily: sans, fontSize: 13, lineHeight: 1.5, color: '#ffffff', margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
      {/* ── END THE SHIFT ── */}

      {/* ── HEALTHCARE OFFERINGS IMAGE ── */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', boxSizing: 'border-box', padding: isMobile ? '48px 16px 0' : isTablet ? '60px 32px 0' : '80px 80px 0' }}>
          <img src={imgHealthcareOfferings} alt="Healthcare offerings" style={{ width: '100%', display: 'block' }} />
        </div>
      </section>

      {/* ── PROOF ── */}
      <div style={{
        maxWidth: 1440,
        margin: '0 auto',
        boxSizing: 'border-box',
        padding: isMobile ? '48px 16px 0' : isTablet ? '60px 32px 0' : '80px 80px 0',
      }}>
        <div style={{ marginBottom: isMobile ? 12 : 16 }}>
          <Tag label="PROOF" variant="dark" />
        </div>

        <section id="proof" style={{
          background: dark1,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <CornerTL /><CornerBR />
          <div style={inner}>
            <div style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'flex-end', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: 16, marginTop: 0, marginBottom: 40 }}>
              <div>
                <h1 style={d1('#fff')}>Featured <span style={{ color: red }}>case studies.</span></h1>
                <p style={{ fontFamily: sans, fontWeight: 500, fontSize: 18, lineHeight: '24px', color: '#ffffff', marginTop: 10 }}>If any of these describe where your team is right now, we should talk.</p>
              </div>
              <a href="#" style={{ fontFamily: sans, fontSize: 14, color: red, textDecoration: 'underline', whiteSpace: 'nowrap', flexShrink: 0 }}>View All</a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: cols3, gap: 20 }}>
              <style>{`[data-excerpt-normal] p, [data-excerpt-normal] [class*='excerpt'] { font-weight: 400 !important; }`}</style>
              {featuredCards.map((card, i) => (
                <div key={i} data-excerpt-normal>
                  <Card
                    mode="dark"
                    type="insights"
                    image={imgCardPhoto}
                    tags={card.tags}
                    title={card.title}
                    excerpt={card.excerpt}
                    excerptLines={3}
                    ctaLabel="See How We Work"
                    onCta={handleCaseStudiesCta}
                    style={{ height: featuredCardHeight }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── SOLUTION ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="SOLUTION" />
          <h2 style={{ ...d2(), marginTop: 16 }}>
            Turning fragmented systems into intelligent{' '}<br />
            <span style={{ color: red }}>Healthcare Ecosystems.</span>
          </h2>
          <div style={{ marginTop: 48 }}>
            <Accordion items={solutionItems} defaultActiveIndex={0} />
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <div style={{ maxWidth: 1440, margin: '0 auto', boxSizing: 'border-box', padding: isMobile ? '48px 16px 0' : isTablet ? '60px 32px 0' : '80px 80px 0' }}>
        <CTABanner
          size="large"
          label="LET'S WORK ON IT TOGETHER"
          heading="Ready to accelerate your digital & AI journey ?"
          body="Whether you're modernizing systems, building a new product, or scaling engineering , we're ready to collaborate."
          primaryCta="Schedule a Strategy Session"
          secondaryCta="Contact Us"
          style={{ width: '100%', maxWidth: '100%', margin: 0 }}
        />
      </div>
      <div style={{ height: isMobile ? 48 : 80 }} />
    </main>
  );
}
