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
    title: 'AI Advisory & Enablement',
    subtitle: 'Define where AI fits, identify high-impact use cases, and build the capability to scale them.',
    content: {
      type: 'detail',
      serviceLabel: 'AI ADVISORY & ENABLEMENT',
      heading: 'Most AI efforts fail not because the technology isn\'t capable — but because the organization isn\'t structured to absorb it.',
      body: [
        'We work with your leadership team to define where AI fits, identify and prioritize high-impact use cases, and support adoption through consulting-led enablement, capability building, and implementation support.',
        'The output is a prioritized roadmap with investment accountability built in — not a vision document that sits in a drawer after the kickoff. What gets approved is what gets built.',
      ],
    },
  },
  {
    title: 'AI-Augmented Decision Intelligence',
    subtitle: 'Embed models for forecasting, prediction, and optimization into the systems where decisions happen.',
    content: {
      type: 'detail',
      serviceLabel: 'AI-AUGMENTED DECISION INTELLIGENCE',
      heading: 'Your operating decisions need real-time intelligence from the data you already own.',
      body: [
        'We embed models for forecasting, prediction, and optimization into your systems, so decisions are driven by real-time data and continuous intelligence — not dashboards that require someone to translate or models only data scientists can read.',
        'From pricing and capacity to risk and market response, decision intelligence gets built into the workflows your leaders actually use to make calls.',
      ],
      quote: 'Decision-intelligence adopters report material improvement in decision cycle time across pricing, capacity, and risk functions. — Gartner, 2025.',
    },
  },
  {
    title: 'Systems That Think and Evolve',
    subtitle: 'AI becomes the intelligence layer of the enterprise — powering systems that learn, reason, and self-correct.',
    content: {
      type: 'detail',
      serviceLabel: 'SYSTEMS THAT THINK AND EVOLVE',
      heading: 'AI is no longer just used for analysis or experiments — it\'s becoming part of how systems operate.',
      body: [
        'We build AI systems that power your enterprise workflows with intelligence that learns, reasons, self-corrects, and continuously evolves without requiring constant human intervention. The systems improve as they run.',
        'Instead of relying only on fixed rules, these systems adapt to new patterns, surface emerging risks, and optimize across the business in real time — turning AI from a point solution into an enterprise capability.',
      ],
    },
  },
  {
    title: 'Autonomous Decisioning in Real Time',
    subtitle: 'Decisions move from delayed approvals to autonomous, real-time execution.',
    content: {
      type: 'detail',
      serviceLabel: 'AUTONOMOUS DECISIONING',
      heading: 'Real-time decisioning driven by continuously learning intelligence across the organization.',
      body: [
        'We design autonomous decision systems that complete tasks, route approvals, and escalate when human judgment is required — reducing coordination overhead without removing accountability.',
        'From procurement approval chains to compliance review loops and fraud detection, we map the decision boundaries that need to stay human and automate everything in between.',
      ],
    },
  },
  {
    title: 'Self-Healing Workflows',
    subtitle: 'Workflows that sense, respond, optimize, and self-heal — reducing dependency on manual intervention.',
    content: {
      type: 'detail',
      serviceLabel: 'SELF-HEALING WORKFLOWS',
      heading: 'The next frontier isn\'t faster workflows. It\'s workflows that fix themselves.',
      body: [
        'We build adaptive operational systems that detect anomalies, reroute around failures, and restore normal state without requiring a human to identify and diagnose the problem first.',
        'Self-healing workflows reduce operational overhead, minimize downtime, and free your teams to focus on higher-value work — not monitoring systems for problems that should never have required human attention.',
      ],
    },
  },
];

const howCards = [
  { title: 'Start with what matters.',        body: 'We identify high-impact use cases based on business value, data readiness, and feasibility — so effort goes where it can deliver real outcomes, not just impressive demos.' },
  { title: 'Prove it early.',                 body: 'We move quickly to a working proof of concept, validating use cases before committing full investment — so the plan responds to real signal instead of assumptions.' },
  { title: 'Build for scale.',                body: 'We architect solutions that can grow — governed, reliable, and ready to expand as AI maturity increases across the organization.' },
  { title: 'Your board stays informed.',      body: 'What you approved is what gets built. Governance is visible from week one, and your leadership team can explain every decision at the altitude the board operates at.' },
];

const proofCards = [
  { tags: 'HEALTHCARE • AI / NLP',          title: 'AI-Powered OCR Engine: ~95% Accuracy in Document Extraction', excerpt: 'Document-heavy workflows required manual data entry, causing delays and inconsistencies. A proprietary OCR + NER engine now extracts and structures data from unstructured inputs with ~95% accuracy.' },
  { tags: 'HEALTHCARE • PREDICTIVE AI',     title: 'Predictive Fatigue Modeling Prevents Operational Risk',       excerpt: 'A healthcare organization lacked visibility into fatigue-related workforce risks. A predictive analytics platform using biometric data now forecasts fatigue levels and triggers proactive alerts.' },
  { tags: 'SECURITY • REAL-TIME AI',        title: 'Threat Detection Reduced from 8 Hours to Minutes',            excerpt: 'Manual monitoring of restricted premises delayed identification of unauthorized individuals. A real-time AI-based recognition system now detects and alerts on intrusions in under 10 minutes.' },
];

const painCards = [
  { heading: '"AI efforts are underway, but direction and impact are still unclear."',         body: 'The steering committee keeps asking for AI transformation updates. You\'re not sure how to answer without sounding like nothing is happening — or like too much is happening unchecked.' },
  { heading: '"Early experiments show promise, but scaling across teams remains a challenge."', body: 'Pilots succeed. Production deployments stall. The gap between a working prototype and an enterprise capability turns out to be the hardest part of the journey.' },
  { heading: '"Multiple AI efforts are active, but they operate in silos."',                   body: 'Three different teams have deployed something AI-powered. You learned about two of them from a vendor invoice. Governance that used to be implicit in the process no longer is.' },
];

export default function AIBusiness() {
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
            { label: 'AI-Led Business Transformation', active: true },
          ]} />
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? 32 : 60, marginTop: 40 }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
              <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase', color: '#ADADAD', margin: 0 }}>AI that drives real business outcomes</p>
              <FadeUp>
                <h1 style={d1()}>
                  Make AI your{' '}
                  <span style={{ color: red }}>competitive advantage.</span>
                </h1>
              </FadeUp>
              <FadeUp delay={80}>
                <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: '#5C5C5C', margin: 0, maxWidth: 560 }}>
                  Move into an era of intelligent systems with AI embedded across your business. We help you identify high-impact use cases, build solutions, and integrate them into your workflows so your systems operate with less friction and scale more reliably.
                </p>
              </FadeUp>
              <FadeUp delay={120}>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <Button variant="primary"   label="Explore AI Studio"         href="#" />
                  <Button variant="secondary" label="Talk to an AI Evangelist"  href="#" />
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
      <section style={{ background: dark1, position: 'relative', overflow: 'hidden' }}>
        <CornerTL /><CornerBR />
        <div style={inner}>
          <Tag label="THE SHIFT" variant="light" />
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 48, alignItems: 'flex-start', marginTop: 32, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: isMobile ? '100%' : 320 }}>
              <h2 style={d2('#fff')}>
                From AI adoption to{' '}
                <span style={{ color: red }}>intelligent enterprise systems.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'AI is no longer just used for analysis or experiments. It is becoming part of how products work, how teams operate, and how decisions are made. The focus is now on building systems that deliver value across the business.',
                  'Systems are starting to improve as they run — instead of relying only on fixed rules. The organizations pulling ahead are the ones building AI into their core workflows, not running it as a parallel experiment.',
                ].map((p, i) => (
                  <p key={i} style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#B5B5B5', margin: 0 }}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 1fr', gap: 20, flex: isMobile ? undefined : '0 0 440px', width: isMobile ? '100%' : undefined }}>
              {[
                { num: '7%',  desc: 'Of businesses have successfully scaled AI enterprise-wide. The other 93% are still running pilots.' },
                { num: '92%', desc: 'Of companies are planning to increase their AI investments — the pressure to scale is accelerating.' },
                { num: '~70%', desc: 'Of large organizations cannot produce a single inventory of AI in production. Shadow deployment is now the default state.' },
                { num: 'Week 1', desc: 'Your leadership team sees what\'s being built, how governance is structured, and what they\'ll own at handoff.' },
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
            Your strategy, configured across the delivery that makes it{' '}
            <span style={{ color: red }}>land.</span>
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
                We don't deliver an AI transformation and leave you to{' '}
                <span style={{ color: red }}>explain it.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'We work embedded with your leadership team — making governance visible, tracing investment to outcome, and transferring the thread to your people as we build. When the engagement ends, your team owns the framework, understands the architecture, and can defend it without us in the room.',
                  'AI transformation creates as many questions as answers for executives, for middle management, for the teams doing the work. Our approach is designed to bring your organization along, not leave it dependent on us.',
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
      <section style={{ background: dark1, position: 'relative', overflow: 'hidden' }}>
        <CornerTL /><CornerBR />
        <div style={inner}>
          <Tag label="PROOF" variant="light" />
          <div style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'flex-end', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: 16, marginTop: 16, marginBottom: 40 }}>
            <div>
              <h1 style={d1('#fff')}>Success <span style={{ color: red }}>stories.</span></h1>
              <p style={{ fontFamily: sans, fontSize: 15, color: '#9B9B9B', marginTop: 10 }}>If any of these describe where your team is right now, we should talk.</p>
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
            If any of these describe your current AI situation, we{' '}
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

          {/* Consulting offer block */}
          <div style={{ background: dark1, padding: isMobile ? '32px 20px' : '48px', marginTop: 48, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <h3 style={{ fontFamily: serif, fontSize: isMobile ? 22 : 28, fontWeight: 600, color: '#fff', margin: 0 }}>Win with AI. Start with the right use cases and a clear plan.</h3>
            <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#B5B5B5', maxWidth: 640, margin: 0 }}>
              We help bring clarity and direction to your AI efforts — identifying meaningful use cases, aligning them with business priorities, and turning early experiments into scalable, real solutions. Your first AI use case, defined with us, at no cost.
            </p>
            <p style={{ fontFamily: sans, fontSize: 13, color: '#9B9B9B', margin: 0 }}>No-cost AI Opportunity Assessment. No pitch deck. A real read on your highest-value use case.</p>
            <div>
              <Button variant="primary" label="Get Your First AI Use Case Defined →" href="#" />
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
