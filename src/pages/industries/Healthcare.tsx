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

const whatWeDoItems: AccordionItem[] = [
  {
    title: 'Unify Critical Platforms',
    subtitle: 'Connect the systems healthcare teams rely on — labs, billing, analytics, workflows, and patient experiences.',
    content: {
      type: 'detail',
      serviceLabel: 'UNIFY CRITICAL PLATFORMS',
      heading: 'Healthcare teams coordinate care more effectively when information flows seamlessly.',
      body: [
        'We connect the systems that healthcare teams rely on every day across lab operations, billing, analytics, workflows, and patient-facing experiences — enabling a single, connected environment with real-time data flow.',
        'Better visibility across clinical, operational, and financial workflows enables faster, more confident decision-making. When a nurse, clinician, or administrator needs information, it\'s there — not somewhere else, not delayed, not wrong.',
      ],
    },
  },
  {
    title: 'Modernize High-Friction Workflows',
    subtitle: 'Redesign and automate workflows across care operations and revenue cycle management.',
    content: {
      type: 'detail',
      serviceLabel: 'MODERNIZE HIGH-FRICTION WORKFLOWS',
      heading: 'Manual work in clinical and revenue workflows is one of the most expensive problems in healthcare.',
      body: [
        'We redesign and automate workflows across care operations and revenue cycle management, reducing manual effort, duplicated steps, and disconnected approvals while improving billing efficiency, claims processing, and overall cycle time.',
        'This leads to faster payments, better cash flow visibility, and reduced revenue leakage. With intelligent decisioning embedded into processes, teams can manage exceptions more effectively and sustain financial performance at scale.',
      ],
    },
  },
  {
    title: 'Build Decision-Ready Visibility',
    subtitle: 'Analytics and AI-driven insights that help teams act faster and with greater confidence.',
    content: {
      type: 'detail',
      serviceLabel: 'BUILD DECISION-READY VISIBILITY',
      heading: 'The right information, at the right moment, changes what\'s possible for care teams.',
      body: [
        'We create analytics and reporting systems that improve visibility across clinical, operational, and financial functions, supported by AI-driven insights that help teams act faster and with greater confidence.',
        'This gives leaders and teams the clarity to make faster, better-informed decisions — improving coordination and overall performance across care delivery and operations.',
      ],
    },
  },
  {
    title: 'Improve the Digital Care Experience',
    subtitle: 'Patient portals, booking journeys, and digital touchpoints that are easier to use and simpler to manage.',
    content: {
      type: 'detail',
      serviceLabel: 'IMPROVE THE DIGITAL CARE EXPERIENCE',
      heading: 'The patient experience is shaped by the digital systems around care as much as the care itself.',
      body: [
        'We design and engineer digital experiences that are easier for patients to navigate and simpler for teams to manage, with personalization and responsiveness built into the experience from the start.',
        'We help design and deliver patient portals, booking journeys, internal tools, and digital touchpoints that are easier to use, simpler to manage, and more effective for both patients and care teams.',
      ],
    },
  },
  {
    title: 'Engineer for Growth, Reliability, and Change',
    subtitle: 'Systems built for performance, security, and scalability — with AI capabilities ready to scale.',
    content: {
      type: 'detail',
      serviceLabel: 'ENGINEER FOR GROWTH, RELIABILITY & CHANGE',
      heading: 'Healthcare technology cannot be fragile. Every downtime is a patient care risk.',
      body: [
        'We build systems for performance, security, and scalability, with AI-enhanced capabilities that support adaptability and continuous improvement. Reliability isn\'t a post-launch concern — it\'s a design requirement from day one.',
        'We build systems that remain reliable, secure, and ready to scale — while incorporating AI and GenAI capabilities to support smarter automation, adaptive workflows, and continuous improvement, without adding unnecessary complexity.',
      ],
    },
  },
];

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
    subtitle: 'Real-time visibility across patient care, operations, and systems — as data is generated, not hours later.',
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
    subtitle: 'Faster reimbursements, reduced claim denials, and improved revenue predictability.',
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
  { tags: 'HEALTHCARE • MOBILE PLATFORM',    title: 'Mobile Platform Increases Company Value for Healthcare Benefits Provider', excerpt: 'A leading healthcare benefits provider needed a mobile strategy to extend services to brokers, employers, and end users. Technossus defined the mobile strategy and delivered a scalable platform with seamless data integration across insurers, brokers, and enterprise systems.' },
  { tags: 'HEALTHCARE • CRM INTEGRATION',    title: 'CRM with Complex External Integrations Launches On Time',                 excerpt: 'A leading healthcare insurance provider needed a CRM integrating data from state and federal platforms under evolving regulatory requirements and a fixed go-live deadline. Delivered on time with real-time access to customer data and enrollment progress.' },
  { tags: 'HEALTHCARE • ALM & GOVERNANCE',   title: 'ALM Expertise Drives Successful Large-Scale Digital Transformation',       excerpt: 'A major U.S. healthcare provider needed to coordinate a complex multi-vendor digital platform transformation. Technossus established enterprise-wide ALM processes and governance frameworks, improving visibility, reducing risk, and enabling structured execution.' },
];

const successCards = [
  { tags: 'LIFE SCIENCES • LAB PLATFORM',    title: 'Unified Lab Platform Reduces Licensing Costs and Improves Throughput',  excerpt: 'Helix replaced three fragmented lab systems with one higher-performing LIMS, reducing licensing fees, eliminating manual labor through standardized integrations, and enabling greater testing throughput without adding staff.' },
  { tags: 'HEALTHCARE • STREAMING DATA',     title: 'Streaming Analytics Enables Real-Time Visibility Across Patient Flow',   excerpt: 'A healthcare organization needed live visibility into patient data as it was generated. A streaming analytics platform now feeds clinical dashboards in real time, enabling immediate action on delays, risks, and operational bottlenecks.' },
  { tags: 'HEALTHCARE • REVENUE CYCLE',      title: 'Revenue Cycle Automation Reduces Denials and Improves Cash Flow',        excerpt: 'Intelligent pre-submission validation catches errors before claims are submitted, routes exceptions automatically, and gives finance teams a real-time view from service to payment — improving collections and reducing revenue leakage.' },
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
                  When healthcare systems fall short, care delivery feels the impact.{' '}
                  <span style={{ color: red }}>We improve & manage both.</span>
                </h1>
              </FadeUp>
              <FadeUp delay={80}>
                <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: '#5C5C5C', margin: 0, maxWidth: 560 }}>
                  Most healthcare friction doesn't begin in the exam room, the lab, or the patient app. It begins in the gaps between them — a system that doesn't talk, a workflow that still depends on manual work, a report that arrives after the moment has passed. Technossus helps healthcare organizations connect the systems behind care, simplify the work around it, and build digital operations that can actually keep up.
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
            {['GE HealthCare', 'CHOICE ADMINISTRATORS', 'BIO THERANOSTICS', 'COMMONSPIRIT', 'ADAPTHEALTH'].map(name => (
              <span key={name} style={{ fontFamily: sans, fontSize: 13, fontWeight: 700, color: '#888', filter: 'grayscale(100%)', opacity: .65 }}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: isMobile ? 48 : 80 }} />

      {/* ── THE SHIFT ── */}
      <section style={{ background: dark1, position: 'relative', overflow: 'hidden' }}>
        <CornerTL /><CornerBR />
        <div style={inner}>
          <Tag label="THE SHIFT" variant="light" />
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 48, alignItems: 'flex-start', marginTop: 32, flexWrap: 'wrap' }}>
            <div style={{ flex: isMobile ? undefined : '0 0 380px', minWidth: isMobile ? '100%' : 280, width: isMobile ? '100%' : undefined }}>
              <h2 style={d2('#fff')}>
                Healthcare is facing a seismic shift. Operational readiness{' '}
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
                  { title: 'Real-time care depends on real-time systems',  body: 'Clinical workflows are shifting from retrospective analysis to real-time decisioning. Systems must process patient data instantly across devices, platforms, and care settings — without latency or inconsistency.' },
                  { title: 'Distributed care demands connected systems',   body: 'Healthcare is no longer centralized. Hospitals, remote monitoring devices, telehealth platforms, and third-party systems must work together seamlessly — but interoperability remains complex.' },
                  { title: 'Reliable AI in clinical workflows',            body: 'AI solutions are moving from pilots into diagnostics, triage, and care recommendations. Ensuring model accuracy, explainability, and consistency in real clinical environments is now a critical challenge.' },
                  { title: 'Cybersecurity is a patient safety issue',      body: 'Healthcare systems are often high-value targets. As systems become more connected, protecting patient data, ensuring uptime, and maintaining system integrity directly impacts care delivery.' },
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
                  { num: 'Nearly 2 in 3', desc: 'patients sought care elsewhere when the wait felt too long' },
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

      {/* ── WHAT WE DO ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="WHAT WE DO" />
          <h2 style={{ ...d2(), marginTop: 16 }}>
            We help healthcare organizations move from disconnected operations{' '}
            <span style={{ color: red }}>to connected delivery.</span>
          </h2>
          <p style={{ fontFamily: sans, fontSize: 16, color: '#5C5C5C', marginTop: 12, maxWidth: 720 }}>We don't just build software for healthcare. We solve the operating problems that software is supposed to solve.</p>
          <div style={{ marginTop: 48 }}>
            <Accordion items={whatWeDoItems} defaultActiveIndex={0} />
          </div>
        </div>
      </section>

      <div style={{ height: isMobile ? 48 : 80 }} />

      {/* ── DHE FRAMEWORK ── */}
      <section style={{ background: dark1, position: 'relative', overflow: 'hidden' }}>
        <CornerTL /><CornerBR />
        <div style={inner}>
          <Tag label="DIGITAL HEALTH ENGINEERING" variant="light" />
          <h2 style={{ ...d2('#fff'), marginTop: 16 }}>
            The engineering foundation that powers every{' '}
            <span style={{ color: red }}>digital health experience.</span>
          </h2>
          <p style={{ fontFamily: sans, fontSize: 16, color: '#9B9B9B', marginTop: 12, maxWidth: 720 }}>Connect care, better outcomes, scalable systems — across five experience layers, all built on one reliable foundation.</p>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: 20, marginTop: 40 }}>
            {[
              { label: 'DPx', title: 'Digital Patient Experience',   body: 'Intuitive, connected experiences across the care journey — from discovery to post-care engagement. Patient portals, booking journeys, and digital touchpoints that simplify search, scheduling, and registration.' },
              { label: 'CPx', title: 'Care Provider Experience',     body: 'Systems that reduce friction and improve coordination for care teams. Ambulatory pre-visit solutions scaled across 200+ facilities, pharmacy automation, and provider data management tools.' },
              { label: 'VHx', title: 'Virtual Health Experience',    body: 'Connected systems and workflows that address the full continuum of virtual care — improving patient experience, expanding service footprints, and enabling patient-centered navigation for vulnerable populations.' },
              { label: 'DTx', title: 'Digital Therapeutics',         body: 'Digital therapeutics integrated into care delivery with scalable, compliant systems — including RPM-enabled solutions, automated patient education, and SMART FHIR integrations with EHR systems.' },
              { label: 'DHE', title: 'Digital Health Engineering',   body: 'The foundation layer that powers all digital health experience layers — ensuring performance, security, scalability, and integration readiness across every touchpoint.' },
            ].map(item => (
              <div key={item.label} style={{ background: '#262626', border: '1px solid #343434', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ fontFamily: serif, fontSize: 28, fontWeight: 700, color: red, lineHeight: 1 }}>{item.label}</div>
                <h3 style={{ fontFamily: sans, fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.4, margin: 0 }}>{item.title}</h3>
                <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: '#9B9B9B', margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: isMobile ? 48 : 80 }} />

      {/* ── SOLUTIONS ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="SOLUTIONS" />
          <h2 style={{ ...d2(), marginTop: 16 }}>
            Turning fragmented systems into intelligent{' '}
            <span style={{ color: red }}>healthcare ecosystems.</span>
          </h2>
          <div style={{ marginTop: 48 }}>
            <Accordion items={solutionItems} defaultActiveIndex={0} />
          </div>
        </div>
      </section>

      <div style={{ height: isMobile ? 48 : 80 }} />

      {/* ── FEATURED CASE STUDIES ── */}
      <section id="proof" style={{ background: dark1, position: 'relative', overflow: 'hidden' }}>
        <CornerTL /><CornerBR />
        <div style={inner}>
          <Tag label="FEATURED CASE STUDIES" variant="light" />
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

      <div style={{ height: isMobile ? 48 : 80 }} />

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
        heading="If your teams are still carrying the burden of disconnected systems, it's time to fix the layer beneath the care journey."
        body="Technossus helps healthcare and life sciences organizations build systems that move faster, work smarter, and scale with less friction."
        primaryCta="Talk to Our Team →"
        secondaryCta="Explore Our Work"
      />
      <div style={{ height: isMobile ? 48 : 80 }} />
    </>
  );
}
