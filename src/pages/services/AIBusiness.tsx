import React from 'react';
import { Tag }        from '../../../components/Tag';
import { Breadcrumb } from '../../../components/Breadcrumb';
import { Accordion }  from '../../../components/Accordion';
import { CTABanner }  from '../../../components/CTABanner';
import { Button }     from '../../../components/Button';
import { FadeUp }     from '../../../components/Animate/FadeUp';
import { useBreakpoint } from '../../../ts/breakpoints';
import { PlaceholderBlock } from '../../../components/DecorativeMedia';
import type { AccordionItem } from '../../../components/Accordion';

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

const accordionItems: AccordionItem[] = [
  {
    title: 'AI Strategy & Readiness',
    subtitle: 'Map where AI creates durable value, sequence use cases by impact, and align the organization around what\'s being built.',
    content: {
      type: 'detail',
      serviceLabel: 'AI STRATEGY & READINESS',
      heading: 'Know where AI fits, and the pace your organization can actually absorb it.',
      body: [
        'Every AI engagement starts here. We map where AI creates durable value in your business, sequence the use cases by impact and readiness, and align the organization around what\'s being built and why. Strategy is the artifact your board signs off on. Readiness is the work that makes the strategy executable on the ground, at the pace your teams can carry.',
        'Organizations with a sequenced AI roadmap are significantly more likely to reach production outcomes within 18 months. McKinsey State of AI, 2025.',
      ],
    },
  },
  {
    title: 'Decision Intelligence',
    subtitle: 'Predictive models and live data pipelines embedded into the workflows your leaders actually make decisions in.',
    content: {
      type: 'detail',
      serviceLabel: 'DECISION INTELLIGENCE',
      heading: 'Decisions that land where your strategy said they would.',
      body: [
        'Your operating decisions — pricing, capacity, risk, market response — need real-time inputs from the data you already own. We build decision intelligence layers that combine predictive models, live data pipelines, and AI-driven insight into the workflows your leaders actually make calls in. No dashboards that require someone to translate.',
        'Decision-intelligence adopters report material improvement in decision cycle time across pricing, capacity, and risk functions. Gartner, 2025.',
      ],
    },
  },
  {
    title: 'Agentic Automation',
    subtitle: 'AI agents that understand context, make decisions within guardrails, and coordinate work without constant human intervention.',
    content: {
      type: 'detail',
      serviceLabel: 'AGENTIC AUTOMATION',
      heading: 'Work that coordinates itself, until it needs a human decision.',
      body: [
        'Process automation used to mean scripted workflows that broke when context changed. Agentic automation is different — AI agents that understand context, make decisions within guardrails, and coordinate work across systems without constant human intervention. We identify where agentic workflows unlock real capacity and build them into the platforms your teams already use.',
        'By 2027, 40% of enterprise applications will include task-specific AI agents embedded in core workflows. Gartner.',
      ],
    },
  },
  {
    title: 'Enterprise Generative AI',
    subtitle: 'Copilots and assistants trained on your data, governed by your policy, and measured against the productivity lift they deliver.',
    content: {
      type: 'detail',
      serviceLabel: 'ENTERPRISE GENERATIVE AI',
      heading: 'GenAI tools your teams actually use — because they actually help.',
      body: [
        'Copilots, internal assistants, and content generation tools are the GenAI surface your teams interact with every day. We build them into your workflow, trained on your data, governed by your policy, and measured against the productivity lift they deliver. Not demos. Not pilots. Tools that land on the desk and stay there because the team wants them.',
        'Copilots deliver 26–45% productivity gains when built into existing workflows, near zero when bolted on. GitHub / McKinsey, 2024–25.',
      ],
    },
  },
  {
    title: 'AI Governance, Risk & Data Security',
    subtitle: 'Policy frameworks, model registries, usage guardrails, and audit trails wired into the deployment path.',
    content: {
      type: 'detail',
      serviceLabel: 'AI GOVERNANCE, RISK & DATA SECURITY',
      heading: 'Board-defensible AI. From policy to production.',
      body: [
        'Every AI deployment in your organization now sits inside a governance gap that didn\'t exist three years ago. Model decisions have to be explainable to regulators. Data flows through LLMs have to be traceable. We put the governance layer in place: policy frameworks, model registries, usage guardrails, data boundary architecture, and audit trails wired into the deployment path.',
        'Governance gaps are the single largest blocker to scaling enterprise generative AI through 2027. Gartner, 2025.',
      ],
    },
  },
  {
    title: 'Innovation Labs & Prototyping',
    subtitle: 'A working prototype in two weeks — to test whether an idea is worth scaling before you bet the strategy on it.',
    content: {
      type: 'detail',
      serviceLabel: 'INNOVATION LABS & PROTOTYPING',
      heading: 'See it working, before you bet the strategy on it.',
      body: [
        'Not every strategic question needs a full engagement to answer. Innovation Labs is where we build a working prototype in two weeks that tests whether an idea is worth scaling. Walk in with a question. Walk out with a validated prototype, a clear read on what works, and a defensible answer to \'should we build this?\'',
        'Every engagement starts with a two-day consulting investment at no cost — a pressure test on the problem, not a pitch.',
      ],
    },
  },
];

const howCards = [
  { title: 'Your story to the board stays defensible.',          body: 'What you approved is what gets built — and you can explain every decision along the way, in the altitude your board operates at.' },
  { title: 'What gets built traces back to what you approved.',  body: 'No scope creep that lands on your desk at invoice time. Investment accountability is part of the delivery, not a risk we hand back.' },
  { title: 'Your organization moves at the pace it can absorb.', body: 'Change management is part of the deliverable. Fast where the organization is ready, patient where it isn\'t, honest about which is which.' },
  { title: 'We tell you when fast is the right bet.',            body: 'Our job is strategic pace, not performance theater. We\'ll push when the window is open, and slow you down when speed is the wrong signal to the organization.' },
];

const proofCards = [
  { tags: 'DOCUMENT INTELLIGENCE • AI / OCR',    title: 'AI-Powered OCR Engine Achieves ~95% Accuracy in Document Extraction',          excerpt: 'Document-heavy workflows required manual data entry, causing delays and inconsistencies. A proprietary OCR + NER engine now extracts and structures data from unstructured inputs with ~95% accuracy, enabling faster downstream processing.' },
  { tags: 'HEALTHCARE • PREDICTIVE AI',           title: 'Predictive Fatigue Modeling Prevents Operational Risk Before It Occurs',        excerpt: 'A healthcare organization lacked visibility into fatigue-related risks impacting workforce safety. A predictive analytics platform using biometric data now forecasts fatigue levels and triggers proactive alerts.' },
  { tags: 'SECURITY OPERATIONS • REAL-TIME AI',  title: 'Automated Threat Detection Reduces Security Processing Time from 8 Hours to Minutes', excerpt: 'Manual monitoring of restricted premises delayed identification of unauthorized individuals. A real-time AI-based facial recognition system now detects and alerts on intrusions in under 10 minutes.' },
];

const painCards = [
  { heading: '"The steering committee keeps asking for AI transformation updates."', body: 'You\'re not sure how to give them without sounding like nothing is happening, or like too much is happening unchecked.' },
  { heading: '"Three different teams have deployed something AI-powered."',           body: 'You learned about two of them from a vendor invoice. Governance that used to be implicit in the process no longer is.' },
  { heading: '"Your board asks how the AI strategy is going."',                       body: 'You know the answer you want to give. You\'re not sure it\'s the one the data supports.' },
  { heading: '"Your general counsel flagged model governance as a gap."',             body: 'No one in the organization owns the fix. The question has been on the agenda for two quarters.' },
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
              <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase', color: '#ADADAD', margin: 0 }}>AI-LED BUSINESS TRANSFORMATION</p>
              <FadeUp>
                <h1 style={d1()}>
                  The AI strategy is approved, and the teams are moving. The question is whether{' '}
                  <span style={{ color: red }}>the investment is actually working.</span>
                </h1>
              </FadeUp>
              <FadeUp delay={80}>
                <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: '#5C5C5C', margin: 0, maxWidth: 560 }}>
                  Governance frameworks, investment accountability, and team alignment don't self-organize around an approved strategy. We work with your leadership team to make sure what's building across the organization actually lands where you said it would.
                </p>
              </FadeUp>
              <FadeUp delay={120}>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <Button variant="primary"   label="Show us the problem" href="#" />
                  <Button variant="secondary" label="See How We Work"     href="#" />
                </div>
              </FadeUp>
            </div>
            {!isMobile && (
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: isTablet ? 300 : 460 }}>
                <PlaceholderBlock width="100%" height={isTablet ? 300 : 460} />
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
            {['TOYOTA FINANCIAL', 'GE HEALTHCARE', 'COMMONSPIRIT', 'BIO-RAD', 'ADAPTHEALTH'].map(name => (
              <span key={name} style={{ fontFamily: sans, fontSize: 13, fontWeight: 700, color: '#888', filter: 'grayscale(100%)', opacity: .65 }}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: isMobile ? 48 : 80 }} />

      {/* ── THE SHIFT ── */}
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: isMobile ? '0 16px' : isTablet ? '0 32px' : '0 80px' }}>
        <div style={{ marginBottom: isMobile ? 12 : 16 }}><Tag label="THE SHIFT" variant="dark" /></div>
        <section style={{ background: dark1, position: 'relative', overflow: 'hidden' }}>
          <CornerTL /><CornerBR />
          <div style={{ padding: isMobile ? '40px 24px' : isTablet ? '48px 40px' : '56px 68px' }}>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 48, alignItems: 'flex-start', marginTop: 0, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: isMobile ? '100%' : 320 }}>
              <h2 style={d2('#fff')}>
                The constraint used to be capability. Now the constraint{' '}
                <span style={{ color: red }}>is coherence.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'Three years ago, deploying AI was a specialist act. It required a data science team, procurement review, architecture review, an executive sponsor, and a budget line. Governance was implicit in the deployment process. Nothing reached production without a lot of eyes on it.',
                  'That infrastructure has dissolved. AI capability now arrives through every SaaS tool and every agentic workflow. Any team that can write a prompt can deploy it. The executive didn\'t lose visibility because decisions went wrong — it\'s gone because the process that used to produce visibility isn\'t there anymore.',
                  'Governance that used to be implicit now has to be explicit. It has to be approved, tracked, and visible at the altitude the board operates at. That work doesn\'t self-organize around momentum. It\'s what we build with your leadership team.',
                ].map((p, i) => (
                  <p key={i} style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#B5B5B5', margin: 0 }}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 1fr', gap: 20, flex: isMobile ? undefined : '0 0 440px', width: isMobile ? '100%' : undefined }}>
              {[
                { num: '26%',     desc: 'of AI initiatives produce measurable business value at scale. The rest stall in pilots or deploy without a path to outcome.' },
                { num: '~70%',    desc: 'of large organizations cannot produce a single inventory of AI in production. Shadow deployment is now the default state.' },
                { num: '5 of 5',  desc: 'delivery lines configured to every engagement — Product, Data, Cloud, Quality, Experience Design.' },
                { num: 'Week 1',  desc: 'Your leadership team sees what\'s being built, how governance is structured, and what they\'ll own at handoff.' },
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
      </div>

      <div style={{ height: isMobile ? 48 : 80 }} />

      {/* ── SERVICE OFFERINGS ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="SERVICE OFFERINGS" />
          <h2 style={{ ...d2(), marginTop: 16 }}>
            Your strategy, configured across the delivery {' '}
            <br />
            <span style={{ color: red }}>that makes it land.</span>
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
<div
  style={{
    maxWidth: 1440,
    margin: '0 auto',
    padding: isMobile ? '0 16px' : isTablet ? '0 32px' : '0 80px',
  }}
>
  <div style={{ marginBottom: isMobile ? 12 : 16 }}><Tag label="PROOF" variant="dark" /></div>

  <section
    style={{
      background: dark1,
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <CornerTL />
    <CornerBR />

    <div style={{ padding: isMobile ? '40px 24px' : isTablet ? '48px 40px' : '56px 68px' }}>
    <div
      style={{
        display: 'flex',
        alignItems: isMobile ? 'flex-start' : 'flex-end',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        gap: 16,
        marginBottom: 40,
      }}
    >
      <div>
        <h1 style={d1('#fff')}>
          Success <span style={{ color: red }}>stories.</span>
        </h1>

        <p
          style={{
            fontFamily: sans,
            fontSize: 15,
            color: '#9B9B9B',
            marginTop: 10,
          }}
        >
          If any of these describe where your team is right now, we should talk.
        </p>
      </div>

      <a
        href="#"
        style={{
          fontFamily: sans,
          fontSize: 14,
          color: '#9B9B9B',
          textDecoration: 'underline',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        View All
      </a>
    </div>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: cols3,
        gap: 20,
      }}
    >
      {proofCards.map((card, i) => (
        <article
          key={i}
          style={{
            background: '#262626',
            border: '1px solid #343434',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <PlaceholderBlock width="100%" height={200} style={{ background: '#2A2A2A' }} />

          <div
            style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              flex: 1,
            }}
          >
            <div
              style={{
                fontFamily: sans,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: '#767676',
              }}
            >
              {card.tags}
            </div>

            <h3
              style={{
                fontFamily: sans,
                fontSize: 18,
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              {card.title}
            </h3>

            <p
              style={{
                fontFamily: sans,
                fontSize: 14,
                lineHeight: 1.6,
                color: '#9B9B9B',
                flex: 1,
                margin: 0,
              }}
            >
              {card.excerpt}
            </p>

            <a
              href="#"
              style={{
                fontFamily: sans,
                fontSize: 14,
                fontWeight: 700,
                color: red,
                textDecoration: 'underline',
                marginTop: 8,
              }}
            >
              See How We Work →
            </a>
          </div>
        </article>
      ))}
    </div>
    </div>
  </section>
</div>

      <div style={{ height: isMobile ? 48 : 80 }} />

      {/* ── SOUND FAMILIAR ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="SOUND FAMILIAR" />
          <h1 style={{ ...d1(), marginTop: 16 }}>
            If any of these sound like your last project retrospective, we{' '}
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
            <h3 style={{ fontFamily: serif, fontSize: isMobile ? 22 : 28, fontWeight: 600, color: '#fff', margin: 0 }}>Bring us your toughest transformation problem.</h3>
            <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#B5B5B5', maxWidth: 640, margin: 0 }}>
              Two days with a Technossus partner and a senior team. At no cost. Pressure-test the problem on the table — the governance gap, the adoption curve, the investment that isn't landing, the strategy that needs a second read. Walk out with a clear view on whether a larger engagement would help, and what the shape of it would be.
            </p>
            <div>
              <Button variant="primary" label="Bring us your problem →" href="#" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: isMobile ? '0 16px' : isTablet ? '0 32px' : '0 80px' }}>
        <CTABanner
          size="large"
          label="LET'S WORK ON IT TOGETHER"
          heading="Ready to accelerate your digital & AI journey?"
          body="Whether you're modernizing systems, building a new product, or scaling engineering, we're ready to collaborate."
          primaryCta="Schedule a Strategy Session →"
          secondaryCta="Contact Us"
          style={{ width: '100%', margin: 0 }}
        />
      </div>

      <div style={{ height: isMobile ? 48 : 80 }} />
    </>
  );
}
