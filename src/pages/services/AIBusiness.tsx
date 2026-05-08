import React from 'react';
import { Tag }        from '../../../components/Tag';
import { Breadcrumb } from '../../../components/Breadcrumb';
import { Accordion }  from '../../../components/Accordion';
import { CTABanner }  from '../../../components/CTABanner';
import { Button }     from '../../../components/Button';
import { Stats }      from '../../../components/Stats';
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

const accordionItems: AccordionItem[] = [
  {
    title: 'AI Strategy & Readiness',
    subtitle: 'Know where AI fits and the pace your organization can actually absorb it.',
    content: {
      type: 'detail',
      serviceLabel: 'AI STRATEGY & READINESS',
      heading: 'Know where AI fits and the pace your organization can actually absorb it.',
      body: [
        'Most AI strategies fail not because the technology isn\'t capable, but because the organization isn\'t structured to absorb it. We work with your leadership team to map AI opportunities against your actual delivery capacity — what\'s ready now, what needs infrastructure first, and what the board needs to see.',
        'The output is a prioritized roadmap with investment accountability built in — not a vision document that sits in a drawer after the kickoff.',
      ],
    },
  },
  {
    title: 'Decision Intelligence',
    subtitle: 'Decisions that land where your strategy said they would.',
    content: {
      type: 'detail',
      serviceLabel: 'DECISION INTELLIGENCE',
      heading: 'Decisions that land where your strategy said they would.',
      body: [
        'Your operating decisions — pricing, capacity, risk, market response — need real-time inputs from the data you already own. We build decision intelligence layers that combine predictive models, live data pipelines, and AI-driven insight into the workflows your leaders actually make calls in.',
        'No dashboards that require someone to translate. No models only data scientists can read. Decision-intelligence adopters report material improvement in decision cycle time across pricing, capacity, and risk functions.',
      ],
      quote: 'Decision-intelligence adopters report material improvement in decision cycle time across pricing, capacity, and risk functions. — Gartner, 2025.',
    },
  },
  {
    title: 'Agentic Automation',
    subtitle: 'Work that coordinates itself, until it needs a human decision.',
    content: {
      type: 'detail',
      serviceLabel: 'AGENTIC AUTOMATION',
      heading: 'Work that coordinates itself, until it needs a human decision.',
      body: [
        'Agentic AI doesn\'t just answer questions — it completes tasks, routes decisions, and escalates when human judgment is required. We design agentic workflows that reduce coordination overhead without removing accountability.',
        'From procurement approval chains to compliance review loops, we map the decision boundaries that need to stay human and automate everything in between.',
      ],
    },
  },
  {
    title: 'Enterprise Generative AI',
    subtitle: 'Gen AI tools your teams actually use, because they actually help.',
    content: {
      type: 'detail',
      serviceLabel: 'ENTERPRISE GENERATIVE AI',
      heading: 'Gen AI tools your teams actually use, because they actually help.',
      body: [
        'Generic AI assistants don\'t work at enterprise scale. The tools your teams use need to understand your data, your domain, and your workflows — not just generate plausible text.',
        'We build generative AI systems that are grounded in your knowledge base, connected to your systems, and evaluated against the use cases that matter for your business — before they go anywhere near production.',
      ],
    },
  },
  {
    title: 'AI Governance, Risk & Data Security',
    subtitle: 'Board-defensible AI. From policy to production.',
    content: {
      type: 'detail',
      serviceLabel: 'AI GOVERNANCE, RISK & DATA SECURITY',
      heading: 'Board-defensible AI. From policy to production.',
      body: [
        'Three different teams have deployed something AI-powered. You learned about two of them from a vendor invoice. Shadow deployment is now the default state — and governance that used to be implicit in the process no longer is.',
        'We build AI governance infrastructure that makes the inventory visible, the risk accountable, and the policy defensible at the altitude your board operates at. From model documentation to data classification to audit trails, we close the gap between what was approved and what\'s running.',
      ],
    },
  },
  {
    title: 'Innovation Labs & Prototyping',
    subtitle: 'See it working, before you bet the strategy on it.',
    content: {
      type: 'detail',
      serviceLabel: 'INNOVATION LABS & PROTOTYPING',
      heading: 'See it working, before you bet the strategy on it.',
      body: [
        'The fastest way to resolve a disagreement about whether an AI concept will work is to build it quickly enough that you can test it. We run structured prototyping sprints — two to three days — that produce working systems you can evaluate with real users and real data.',
        'Not decks. Not wireframes. Working prototypes that answer the question the business is actually asking.',
      ],
    },
  },
];

const howCards = [
  { title: 'Your story to the board stays defensible.',    body: 'What you approved is what gets built and you can explain every decision along the way, in the altitude your board operates at.' },
  { title: 'Your organization moves at the pace it can absorb.', body: 'Change management is part of the deliverable. Fast where the organization is ready, patient where it isn\'t, honest about which is which.' },
  { title: 'What gets built traces back to what you approved.', body: 'No scope creep that lands on your desk at invoice time. Investment accountability is part of the delivery, not a risk we hand back.' },
  { title: 'We tell you when fast is the right bet and when it isn\'t.', body: 'Our job is strategic pace, not performance theater. We\'ll push when the window is open, and slow you down when speed is the wrong signal to the organization.' },
];

const proofCards = [
  { tags: 'COMMERCE • AI REDESIGN',  title: '56% faster product discovery', excerpt: 'A high-volume commerce experience was redesigned so users could find what they needed faster and with less friction.' },
  { tags: 'FINTECH • RAPID PROTOTYPING', title: 'Working prototype in 24 hours', excerpt: 'A fintech concept moved from idea to functioning product in a single day — fast enough to test, validate, and spark market interest.' },
  { tags: 'MOBILE • LAUNCH READINESS', title: '4M+ views in 48 hours', excerpt: 'A client\'s configurable mobile product launched with immediate traction, proving the value of speed, usability, and launch readiness.' },
];

const painCards = [
  {
    heading: '"We\'ve been in discovery for months and still aren\'t sure what we\'re building."',
    body: 'The steering committee keeps asking for AI transformation updates. You\'re not sure how to give them without sounding like nothing is happening, or like too much is happening unchecked.',
  },
  {
    heading: '"We shipped a product, but now every new feature feels like open-heart surgery."',
    body: 'Three different teams have deployed something AI-powered. You learned about two of them from a vendor invoice.',
  },
  {
    heading: '"We know AI could improve our product, we just haven\'t found the right entry point."',
    body: 'Your board asks how the AI strategy is going. You know the answer you want to give. You\'re not sure it\'s the one the data supports.',
  },
  {
    heading: '"Our teams pull data from three different systems to answer one question."',
    body: 'Your general counsel flagged model governance as a gap. No one in the organization owns the fix.',
  },
];

export default function AIBusiness() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 80px 80px' }}>
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Service Offerings', href: '/services' },
            { label: 'AI-Led Business Transformation', active: true },
          ]} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 60, marginTop: 40 }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
              <D1 style={{ color: '#1E1E1E' }}>
                The AI strategy is approved, and the teams are moving. The question is whether{' '}
                <span style={{ color: red }}>the investment is actually working.</span>
              </D1>
              <p style={{ fontFamily: sans, fontSize: 16, lineHeight: 1.7, color: '#5C5C5C', margin: 0, maxWidth: 560 }}>
                Governance frameworks, investment accountability, and team alignment don't self-organize around an approved strategy. We work with your leadership team to make sure what's building across the organization actually lands where you said it would.
              </p>
              <div style={{ display: 'flex', gap: 16 }}>
                <Button variant="primary"   label="Bring us your toughest problem" href="#" />
                <Button variant="secondary" label="See How We Work" href="#" />
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 460 }}>
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
            {['TOYOTA FINANCIAL SERVICES', 'GE HealthCare', 'COMMONSPIRIT', 'BIO-RAD', 'ADAPTHEALTH'].map(name => (
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
            <div style={{ flex: 1, minWidth: 320 }}>
              <D2 style={{ color: '#fff' }}>
                The constraint used to be capability. Now the constraint is{' '}
                <span style={{ color: red }}>coherence.</span>
              </D2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'Three years ago, deploying AI was a specialist act. It required a data science team, procurement review, architecture review, an executive sponsor, and a budget line. Governance was implicit in the deployment process. Nothing reached production without a lot of eyes on it.',
                  'That infrastructure has dissolved. AI capability now arrives through every SaaS tool and every agentic workflow. Any team that can write a prompt can deploy it. The executive didn\'t lose visibility because decisions went wrong — it\'s gone because the process that used to produce visibility isn\'t there anymore.',
                  'Governance that used to be implicit now has to be explicit. It has to be approved, tracked, and visible at the altitude the board operates at. That work doesn\'t self-organize around momentum. It\'s what we build with your leadership team.',
                ].map((p, i) => (
                  <p key={i} style={{ fontFamily: sans, fontSize: 15, lineHeight: 1.7, color: '#B5B5B5', margin: 0 }}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, flex: '0 0 440px' }}>
              {[
                { num: '26%',    desc: 'Of enterprise AI initiatives produce measurable business value at scale. The rest stall in pilots or deploy without a path to outcome.' },
                { num: '5 of 5', desc: 'Delivery lines configured to every engagement: Product Engineering, Data Intelligence, Cloud, Quality, Experience Design.' },
                { num: '~70%',   desc: 'Of large organizations cannot produce a single inventory of AI in production. Shadow deployment is now the default state.' },
                { num: 'Week 1', desc: 'Your leadership team sees what\'s being built, how governance is structured, and what they\'ll own at handoff.' },
              ].map(s => (
                <div key={s.num} style={{ background: '#262626', border: '1px solid #343434', padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ fontFamily: serif, fontSize: 36, lineHeight: 1, fontWeight: 600, color: red }}>{s.num}</div>
                  <p style={{ fontFamily: sans, fontSize: 13, lineHeight: 1.6, color: '#9B9B9B', margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 80 }} />

      {/* ── SERVICE OFFERINGS ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="SERVICE OFFERINGS" />
          <D2 style={{ color: '#1E1E1E', marginTop: 16 }}>
            Your strategy, configured across the delivery that makes it{' '}
            <span style={{ color: red }}>land.</span>
          </D2>
          <div style={{ marginTop: 48 }}>
            <Accordion items={accordionItems} defaultActiveIndex={1} />
          </div>
        </div>
      </section>

      <div style={{ height: 80 }} />

      {/* ── HOW WE WORK ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 320 }}>
              <Tag label="HOW WE WORK" />
              <D2 style={{ color: '#1E1E1E', marginTop: 16 }}>
                We don't deliver an AI transformation and leave you to{' '}
                <span style={{ color: red }}>explain it.</span>
              </D2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'We work embedded with your leadership team — making governance visible, tracing investment to outcome, and transferring the thread to your people as we build. When the engagement ends, your team owns the framework, understands the architecture, and can defend it without us in the room.',
                  'AI transformation creates as many questions as answers for executives, for middle management, for the teams doing the work. Our approach is designed to bring your organization along, not leave it dependent on us. That\'s how we\'ve maintained 90%+ client retention across our delivery history.',
                ].map((p, i) => (
                  <p key={i} style={{ fontFamily: sans, fontSize: 15, lineHeight: 1.7, color: '#5C5C5C', margin: 0 }}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, minWidth: 320 }}>
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

      <div style={{ height: 80 }} />

      {/* ── SOUND FAMILIAR ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="SOUND FAMILIAR" />
          <D1 style={{ color: '#1E1E1E', marginTop: 16 }}>
            This page is for leadership teams who recognize themselves in{' '}
            <span style={{ color: red }}>these moments.</span>
          </D1>
          <p style={{ fontFamily: sans, fontSize: 15, color: '#5C5C5C', marginTop: 12 }}>
            These aren't hypotheticals. They're the conversations we have most often.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24, marginTop: 48 }}>
            {painCards.map((card, i) => (
              <div key={i} style={{ background: '#F2F2F2', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h3 style={{ fontFamily: sans, fontSize: 18, fontWeight: 700, color: '#1E1E1E', lineHeight: 1.4, margin: 0 }}>{card.heading}</h3>
                <div style={{ height: 2, background: red, width: 40 }} />
                <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.7, color: '#5C5C5C', margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>

          {/* Consulting offer block */}
          <div style={{ background: dark1, padding: '48px', marginTop: 48, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <h3 style={{ fontFamily: serif, fontSize: 28, fontWeight: 600, color: '#fff', margin: 0 }}>Bring us your toughest transformation problem.</h3>
            <p style={{ fontFamily: sans, fontSize: 15, lineHeight: 1.7, color: '#B5B5B5', maxWidth: 640, margin: 0 }}>
              Two days with a Technossus partner and a senior team. At no cost. Pressure-test the problem on the table — the governance gap, the adoption curve, the investment that isn't landing, the strategy that needs a second read. Walk out with a clear view on whether a larger engagement would help, and what the shape of it would be.
            </p>
            <p style={{ fontFamily: sans, fontSize: 13, color: '#9B9B9B', margin: 0 }}>
              Two-day consulting investment. No pitch deck. No deliverable handoff. A real read on a real problem.
            </p>
            <div>
              <Button variant="primary" label="Schedule Two Days →" href="#" />
            </div>
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
