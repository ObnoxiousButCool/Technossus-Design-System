import React from 'react';
import { Tag }        from '../../../components/Tag';
import { Breadcrumb } from '../../../components/Breadcrumb';
import { Accordion }  from '../../../components/Accordion';
import { CTABanner }  from '../../../components/CTABanner';
import { Button }     from '../../../components/Button';
import { FadeUp }     from '../../../components/Animate/FadeUp';
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

const accordionItems: AccordionItem[] = [
  {
    title: 'Multi-Cloud Resilience Engineering',
    subtitle: 'Design and manage platforms that perform consistently across cloud and hybrid environments.',
    content: {
      type: 'detail',
      serviceLabel: 'MULTI-CLOUD RESILIENCE ENGINEERING',
      heading: 'Modern cloud environments span multiple providers. Consistency across them shouldn\'t require heroics.',
      body: [
        'We help ensure systems remain observable and perform consistently across multi-cloud and hybrid environments, reducing operational blind spots and dependency risks. Resilience is built into how platforms run — not retrofitted after the first outage.',
        'Through structured monitoring, failover readiness, and consistent performance management across infrastructure layers, your platform recovers reliably under disruptions — and your team knows why before users do.',
      ],
    },
  },
  {
    title: 'Cloud FinOps & AI Token Optimization',
    subtitle: 'Establish clear ownership, cost visibility, and usage discipline across cloud and AI consumption.',
    content: {
      type: 'detail',
      serviceLabel: 'CLOUD FINOPS & AI TOKEN OPTIMIZATION',
      heading: 'Cloud and AI consumption grow without clear ownership. Costs become unpredictable. We fix that.',
      body: [
        'We bring structure through FinOps practices — defining accountability, improving cost visibility, and aligning usage with business priorities. The result is predictable, optimized spend — where both cloud usage and AI consumption are continuously monitored, governed, and aligned to value.',
        'As AI token consumption becomes a significant line item for enterprises, governance of that spend requires the same discipline as cloud infrastructure. We build both into a single, unified cost ownership model.',
      ],
    },
  },
  {
    title: 'AI Model Governance',
    subtitle: 'Govern the full lifecycle of AI workloads — from deployment to monitoring and control.',
    content: {
      type: 'detail',
      serviceLabel: 'AI MODEL GOVERNANCE',
      heading: 'As AI adoption scales, managing access, usage, and compliance becomes critical infrastructure.',
      body: [
        'We enable governed cloud environments that support the full lifecycle of AI workloads — from deployment to monitoring and control. With governance embedded, organizations can scale AI confidently — ensuring compliance, reducing risk, and maintaining control over model usage and outcomes.',
        'Shadow AI deployment is now the default state in most enterprises. Governance that used to be implicit in the deployment process now has to be explicit, tracked, and defensible at the altitude your board operates at.',
      ],
    },
  },
  {
    title: 'Autonomous Cloud Operations (AI/ML Ops)',
    subtitle: 'Improve incident response and routine operations through automation and operational visibility.',
    content: {
      type: 'detail',
      serviceLabel: 'AUTONOMOUS CLOUD OPERATIONS',
      heading: 'Cloud operations that depend on manual processes are always one incident away from a problem.',
      body: [
        'We improve incident response and routine operations through automation, operational visibility, and structured workflows. Over time, operations become more predictable and efficient — reducing downtime, improving reliability, and allowing teams to focus on higher-value work instead of reactive fixes.',
        'The goal is operations that self-heal where possible, escalate intelligently where needed, and give your team clear visibility into everything that matters.',
      ],
    },
  },
  {
    title: 'Cloud Security & Compliance',
    subtitle: 'Security and compliance built into how cloud environments operate — not an afterthought.',
    content: {
      type: 'detail',
      serviceLabel: 'CLOUD SECURITY & COMPLIANCE',
      heading: 'Security integrated into operations means you can scale confidently without introducing additional risk.',
      body: [
        'We embed access control, policy enforcement, and compliance into day-to-day cloud operations — so security isn\'t a gate at the end of the release cycle, but a property of how the environment runs.',
        'With security integrated into operations, organizations can maintain control, meet regulatory requirements, and scale confidently — without every new workload requiring a separate security review from scratch.',
      ],
    },
  },
];

const howCards = [
  { title: 'Stabilize Before You Scale',                body: 'We start with current environments — stabilize performance, reduce operational friction, and improve reliability before introducing new layers or tools.' },
  { title: 'Make Ownership Visible and Actionable',     body: 'Define clear accountability across teams so decisions on cost, performance, and reliability are taken with full context and the right authority.' },
  { title: 'Govern Continuously, Not Periodically',     body: 'Governance is embedded into how environments are managed — so compliance and cost control are routine decisions, not reactive responses to audits.' },
  { title: 'Build for What\'s Coming, Not Just What Is', body: 'Cloud environments that support today\'s workloads need to be ready for AI, data, and new business models. We build that readiness in from the start.' },
];

const proofCards = [
  { tags: 'HEALTHCARE • CLOUD PLATFORM',      title: 'Cloud Platform Saves Millions in Clinical Trials',          excerpt: 'A cloud-based clinical trials system enabled real-time monitoring and early risk detection. With $70M+ trial costs and 80%+ failure rates, early intervention through cloud-enabled visibility helped avoid significant losses.' },
  { tags: 'MARKETING • ANALYTICS & VOICE',    title: 'Cloud-Based Analytics and Voice-Driven Brand Insights',     excerpt: 'A cloud-based data visualization and voice-enabled experience was prototyped to help marketers access brand performance insights faster and more intuitively — reducing analysis time from days to minutes.' },
  { tags: 'HEALTHCARE • ARCHITECTURE DESIGN', title: 'Proof of Concept Minimizes Risk at Dignity Health',         excerpt: 'A cloud-based reference architecture was designed and validated to reduce risk in a multi-million-dollar healthcare digital transformation initiative — before a single production line was written.' },
];

const painCards = [
  { heading: '"Infrastructure is active, but there\'s limited clarity on performance."',             body: 'Systems are running, but nobody can say confidently whether they\'re performing as expected, what the dependencies are, or where the next failure is most likely to come from.' },
  { heading: '"AI usage is growing, but token consumption isn\'t governed."',                        body: 'Usage is increasing faster than anyone planned for, costs are rising unpredictably, and there\'s no clear owner for the spend. Every month is a surprise at invoice time.' },
  { heading: '"How do I add new capabilities without disrupting current operations?"',               body: 'Every time a new capability is introduced, the team holds its breath. The integration risk is real, the downtime tolerance is zero, and the runway for a measured rollout keeps getting shorter.' },
  { heading: '"Systems scale, but reliability depends heavily on manual effort."',                   body: 'Incident response requires heroics. Failover procedures live in someone\'s head. The system works — but only because people are watching it around the clock.' },
  { heading: '"Am I getting locked into vendor decisions that limit flexibility later?"',             body: 'Commitments that made sense at the time are now creating constraints. Moving workloads, switching tooling, or re-platforming feels expensive and risky in equal measure.' },
];

export default function CloudModernization() {
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
            { label: 'Service Offerings', href: '/services' },
            { label: 'Cloud & Product Modernization', active: true },
          ]} />
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? 32 : 60, marginTop: 40 }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
              <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase', color: '#ADADAD', margin: 0 }}>Designed for control. Ready for scale.</p>
              <FadeUp>
                <h1 style={d1()}>
                  Cloud environments that hold up{' '}
                  <span style={{ color: red }}>as the business scales.</span>
                </h1>
              </FadeUp>
              <FadeUp delay={80}>
                <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: '#5C5C5C', margin: 0, maxWidth: 560 }}>
                  We help organizations design, manage, and improve cloud environments — strengthening reliability, bringing costs under control, and embedding governance. So systems run smoothly while supporting business needs, including future data and AI use cases.
                </p>
              </FadeUp>
              <FadeUp delay={120}>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <Button variant="primary"   label="Talk to a CTO-on-Demand" href="#" />
                  <Button variant="secondary" label="Explore Our Work"        href="#" />
                </div>
              </FadeUp>
            </div>
            {!isMobile && (
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: isTablet ? 300 : 460 }}>
                <div style={{ background: '#D4D4D4', width: '100%', height: isTablet ? 300 : 460 }} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      <section style={{ borderTop: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: isMobile ? '24px 16px' : '32px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
          <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: '.12em', color: '#ADADAD', textTransform: 'uppercase' }}>Trusted By</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: isMobile ? 24 : 72, flexWrap: 'wrap' }}>
            {['TOYOTA FINANCIAL SERVICES', 'GE HealthCare', 'COMMONSPIRIT', 'BIO-RAD', 'ADAPTHEALTH'].map(name => (
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
            <div style={{ flex: 1, minWidth: isMobile ? '100%' : 320 }}>
              <h2 style={d2('#fff')}>
                Cloud is scaling. Operations are{' '}
                <span style={{ color: red }}>catching up.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'Cloud adoption is no longer the barrier — managing it effectively is. As environments grow, the focus has shifted to reliability, cost control, and governance so cloud supports business needs without adding operational complexity.',
                  'Organizations continue to increase cloud spending, but lack clear ownership and cost discipline across environments. Multi-cloud and hybrid architectures are the norm, creating new operational complexity that most teams weren\'t structured to handle.',
                ].map((p, i) => (
                  <p key={i} style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#B5B5B5', margin: 0 }}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, flex: isMobile ? undefined : '0 0 440px', width: isMobile ? '100%' : undefined }}>
              {[
                { num: '$70M+',  desc: 'Clinical trial costs managed through a cloud platform built for real-time monitoring and early risk detection.' },
                { num: '35%',    desc: 'Average cloud spend reduction for enterprises that implement formal FinOps disciplines and cost ownership models.' },
                { num: '80%',    desc: 'Of enterprise AI initiatives are blocked by cloud governance gaps — not model performance or data quality.' },
                { num: 'Week 1', desc: 'When governance is embedded from the start, your board sees what\'s running, what it costs, and who\'s accountable.' },
              ].map(s => (
                <div key={s.num} style={{ background: '#262626', border: '1px solid #343434', padding: isMobile ? 16 : 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ fontFamily: serif, fontSize: isMobile ? 28 : 36, lineHeight: 1, fontWeight: 600, color: red }}>{s.num}</div>
                  <p style={{ fontFamily: sans, fontSize: 13, lineHeight: 1.6, color: '#9B9B9B', margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: isMobile ? 48 : 80 }} />

      {/* ── SERVICE OFFERINGS ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="SERVICE OFFERINGS" />
          <h2 style={{ ...d2(), marginTop: 16 }}>
            Cloud platforms that stay reliable, controlled, and cost-efficient —{' '}
            <span style={{ color: red }}>while enabling secure AI adoption.</span>
          </h2>
          <div style={{ marginTop: 48 }}>
            <Accordion items={accordionItems} defaultActiveIndex={1} />
          </div>
        </div>
      </section>

      <div style={{ height: isMobile ? 48 : 80 }} />

      {/* ── HOW WE WORK ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 32 : 64, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: isMobile ? '100%' : 320 }}>
              <Tag label="HOW WE WORK" />
              <h2 style={{ ...d2(), marginTop: 16 }}>
                Our approach focuses on how cloud environments{' '}
                <span style={{ color: red }}>operate day to day.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'We focus on keeping systems reliable, costs predictable, and governance embedded into routine decisions — not bolt-on audits that happen once a quarter.',
                  'Every engagement starts by understanding how your environment actually runs today — not how the architecture diagram says it should. From there, we build toward the kind of operational maturity that makes scaling predictable instead of nerve-wracking.',
                ].map((p, i) => (
                  <p key={i} style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#5C5C5C', margin: 0 }}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: cols2, gap: 20, minWidth: isMobile ? '100%' : 320 }}>
              {howCards.map(card => (
                <div key={card.title} style={{ background: '#F2F2F2', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ color: red, fontSize: 24 }}>◈</div>
                  <h3 style={{ fontFamily: sans, fontSize: 16, fontWeight: 700, color: '#1E1E1E', lineHeight: 1.4, margin: 0 }}>{card.title}</h3>
                  <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: '#5C5C5C', margin: 0 }}>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: isMobile ? 48 : 80 }} />

      {/* ── SUCCESS STORIES ── */}
      <div style={{ maxWidth: 1440, margin: '0 auto', marginBottom: isMobile ? 12 : 16, padding: isMobile ? '0 16px' : isTablet ? '0 32px' : '0 80px', background: '#fff' }}>
        <Tag label="PROOF" variant="dark" />
      </div>
      <section style={{ background: dark1, position: 'relative', overflow: 'hidden' }}>
        <CornerTL /><CornerBR />
        <div style={inner}>
          <div style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'flex-end', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: 16, marginTop: 0, marginBottom: 40 }}>
            <div>
              <h1 style={d1('#fff')}>Success <span style={{ color: red }}>stories.</span></h1>
              <p style={{ fontFamily: sans, fontSize: 15, color: '#9B9B9B', marginTop: 10 }}>Real cloud outcomes from organizations that needed control as much as capability.</p>
            </div>
            <a href="#" style={{ fontFamily: sans, fontSize: 14, color: '#9B9B9B', textDecoration: 'underline', whiteSpace: 'nowrap', flexShrink: 0 }}>View All</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: cols3, gap: 20 }}>
            {proofCards.map((card, i) => (
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

      <div style={{ height: isMobile ? 48 : 80 }} />

      {/* ── SOUND FAMILIAR ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="SOUND FAMILIAR" />
          <h1 style={{ ...d1(), marginTop: 16 }}>
            If cloud complexity is creating operational risk, we{' '}
            <span style={{ color: red }}>should talk.</span>
          </h1>
          <p style={{ fontFamily: sans, fontSize: 15, color: '#5C5C5C', marginTop: 12 }}>These aren't hypotheticals. They're the conversations we have most often.</p>
          <div style={{ display: 'grid', gridTemplateColumns: cols2, gap: 24, marginTop: 48 }}>
            {painCards.map((card, i) => (
              <div key={i} style={{ background: '#F2F2F2', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h3 style={{ fontFamily: sans, fontSize: 18, fontWeight: 700, color: '#1E1E1E', lineHeight: 1.4, margin: 0 }}>{card.heading}</h3>
                <div style={{ height: 2, background: red, width: 40 }} />
                <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.7, color: '#5C5C5C', margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>

          {/* CTA offer block */}
          <div style={{ background: dark1, padding: isMobile ? '32px 20px' : '48px', marginTop: 48, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <h3 style={{ fontFamily: serif, fontSize: isMobile ? 22 : 28, fontWeight: 600, color: '#fff', margin: 0 }}>Build a platform that holds as you scale.</h3>
            <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#B5B5B5', maxWidth: 640, margin: 0 }}>
              Whether you are improving reliability, bringing cloud spend under control, or preparing for AI — we help you move forward with greater confidence and less operational risk. A focused conversation with our cloud leadership team costs nothing.
            </p>
            <div>
              <Button variant="primary" label="Talk to a CTO-on-Demand →" href="#" />
            </div>
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

      <div style={{ height: isMobile ? 48 : 80 }} />
    </>
  );
}
