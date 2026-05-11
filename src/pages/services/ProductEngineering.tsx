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
    title: 'Discovery & Incubation',
    subtitle: 'Find out if the idea works before you bet the quarter on it.',
    content: {
      type: 'detail',
      serviceLabel: 'DISCOVERY & INCUBATION',
      heading: 'Find out if the idea works before you bet the quarter on it.',
      body: [
        'Most product bets fail in discovery — not because the idea was wrong, but because the team spent too long finding out. We move from hypothesis to working prototype in weeks, using AI-accelerated methods that compress the front of the build without skipping the thinking that matters. You leave with a validated foundation to build on, or the clarity to redirect before the cost compounds.',
        'Gartner: 45% of product launches are delayed by at least one month — and 20% of those delayed launches fail to meet their internal targets.',
      ],
    },
  },
  {
    title: 'Product Scaling & Engineering',
    subtitle: 'Ship version one. Then build the product it needs to become.',
    content: {
      type: 'detail',
      serviceLabel: 'PRODUCT SCALING & ENGINEERING',
      heading: 'Ship version one. Then build the product it needs to become.',
      body: [
        'Getting to launch is one discipline. Scaling what you\'ve launched is an entirely different one — and most product teams hit the gap between the two harder than they expected. We evolve the architecture, integrations, and experience layer across releases, so the product grows without accumulating the kind of technical debt that makes every new feature a negotiation.',
        'Gartner: 80% of product launches require significant changes after initial rollout due to market disruptions and evolving customer needs.',
      ],
    },
  },
  {
    title: 'Enterprise Integration & Product Architecture',
    subtitle: 'Your systems know things your business needs. They\'re just not talking to each other.',
    content: {
      type: 'detail',
      serviceLabel: 'ENTERPRISE INTEGRATION & PRODUCT ARCHITECTURE',
      heading: 'Your systems know things your business needs. They\'re just not talking to each other.',
      body: [
        'Most organizations aren\'t short on systems — they\'re short on connections between them. Inventory sits in one place, finance in another, supply chain somewhere else entirely. We design and build the integration layer that connects your systems of record — so data flows where it needs to and processes run the way the business actually works.',
        '71% of applications remain unintegrated or disconnected — unchanged for three consecutive years. Only 2% of IT leaders report integrating more than half of their applications.',
      ],
    },
  },
  {
    title: 'AI & SaaS Product Augmentation',
    subtitle: 'The product works. Now make it work like it was built today.',
    content: {
      type: 'detail',
      serviceLabel: 'AI & SAAS PRODUCT AUGMENTATION',
      heading: 'The product works. Now make it work like it was built today.',
      body: [
        'Most products in market today were built before the current wave of AI and SaaS capabilities existed. We identify where AI can eliminate friction your users have quietly accepted for years: document parsing instead of manual entry, agentic workflows that automate repetitive handoffs, intelligent features that make the product feel like it was built for today\'s expectations.',
        'Gartner 2024: Early adopters of Gen AI report an average 15.2% cost savings and 22.6% productivity improvement. For every $1 invested, companies see an average return of $3.70.',
      ],
    },
  },
  {
    title: 'Application Modernization',
    subtitle: 'Keep the business logic. Lose the technical debt holding it hostage.',
    content: {
      type: 'detail',
      serviceLabel: 'APPLICATION MODERNIZATION',
      heading: 'Keep the business logic. Lose the technical debt holding it hostage.',
      body: [
        'The value in your existing application isn\'t the code — it\'s the business logic, domain knowledge, and workflows refined over years. We modernize the application layer incrementally — preserving what works, refactoring what doesn\'t, and introducing modern architecture patterns that let the product evolve without a big-bang rewrite.',
        'Gartner: 60–80% of IT budgets are spent maintaining legacy systems — leaving little room for innovation or the strategic work that actually moves the product forward.',
      ],
    },
  },
  {
    title: 'Product Support Automation',
    subtitle: 'Product support burden doesn\'t have to scale with your product\'s success.',
    content: {
      type: 'detail',
      serviceLabel: 'PRODUCT SUPPORT AUTOMATION',
      heading: 'Product support burden doesn\'t have to scale with your product\'s success.',
      body: [
        'As your product grows, so does the volume of questions, issues, and requests. Without the right support architecture, that volume lands on your engineering and product teams. We design and implement intelligent support systems that handle the predictable load automatically, escalate what genuinely needs human attention, and generate operational insight your team needs to eliminate recurring issues at the source.',
        'Gartner: Agentic AI will autonomously resolve 80% of common customer service issues without human intervention by 2029 — with a 30% reduction in operational costs.',
      ],
    },
  },
  {
    title: 'Continuous Delivery & Release Engineering',
    subtitle: 'The best release is the one nobody notices. Getting there should feel routine.',
    content: {
      type: 'detail',
      serviceLabel: 'CONTINUOUS DELIVERY & RELEASE ENGINEERING',
      heading: 'The best release is the one nobody notices. Getting there should feel routine.',
      body: [
        'Release pain isn\'t a technology problem — it\'s an architecture and process problem that compounds quietly until it owns the calendar. We build the CI/CD pipelines, deployment architecture, and release governance that turn shipping into a repeatable, low-drama operation. The goal is a team that can push to production with confidence and spend its energy on the next feature rather than the last incident.',
        'DORA 2024: Low-performing teams have a 64% change failure rate. Elite teams have 5%. The difference is process and architecture, not talent.',
      ],
    },
  },
];

const howCards = [
  { title: 'Your team stays in the driver\'s seat.',               body: 'We work alongside your engineers and product managers — never around them. Decision authority stays where it belongs.' },
  { title: 'We build it so your team can own it.',                 body: 'The engagement model follows your business needs, not our convenience. We build it so your team can own it — or we stay as your delivery partner.' },
  { title: 'We work within your governance, processes, and pace.', body: 'No mandate to change how your organization runs. We adapt to what exists and improve from the inside.' },
  { title: 'Quality is non-negotiable.',                           body: 'Compressed timelines don\'t mean corners cut. The speed comes from eliminating waste, not from skipping what matters.' },
];

const proofCards = [
  { tags: 'COMMERCE • PRODUCT REDESIGN',  title: '56% Faster Product Discovery',  excerpt: 'A high-volume commerce experience was redesigned so users could find what they needed faster and with less friction — validated through research before a single production change.' },
  { tags: 'FINTECH • RAPID PROTOTYPING',  title: 'Working Prototype in 24 Hours', excerpt: 'A fintech concept moved from idea to functioning product in a single day — fast enough to test, validate, and spark market interest.' },
  { tags: 'MOBILE • LAUNCH READINESS',    title: '4M+ Views in 48 Hours',         excerpt: 'A client\'s configurable mobile product launched with immediate traction, proving the value of speed, usability, and launch readiness.' },
];

const painCards = [
  { heading: '"We\'ve been in discovery for months and still aren\'t sure what we\'re building."',      body: 'The idea is solid. The scope keeps shifting. Discovery has become the project rather than the path to the project.' },
  { heading: '"We shipped a product — but now every new feature feels like open-heart surgery."',       body: 'Launch was a success. But the architecture that got you there isn\'t the one that scales. Every sprint costs more than the last.' },
  { heading: '"Our teams pull data from three different systems to answer one question."',               body: 'Inventory, finance, and supply chain each have their version of reality. Nobody trusts the numbers until they\'ve reconciled them manually.' },
  { heading: '"We know AI could improve our product — we just haven\'t found the right entry point."', body: 'The capability exists. The use cases are obvious in hindsight. But nobody has the bandwidth to scope it properly while keeping the product running.' },
];

export default function ProductEngineering() {
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
            { label: 'Product Engineering', active: true },
          ]} />
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? 32 : 60, marginTop: 40 }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
              <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase', color: '#ADADAD', margin: 0 }}>PRODUCT ENGINEERING</p>
              <FadeUp>
                <h1 style={d1()}>
                  Great products don't stall because the idea was wrong. They stall because{' '}
                  <span style={{ color: red }}>building and scaling are two completely different problems.</span>
                </h1>
              </FadeUp>
              <FadeUp delay={80}>
                <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: '#5C5C5C', margin: 0, maxWidth: 560 }}>
                  Most teams discover the gap between working and scaling only after they're already in it. We work with your team from first concept through platform maturity — getting to a working product faster than you'd expect, without the shortcuts that cause problems later.
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
            {['CEFALY', 'WORD AND BROWN', 'CARE PREDICTOR', 'NEC', 'BIO-RAD'].map(name => (
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
                Your product team didn't sign up to spend six months{' '}
                <span style={{ color: red }}>finding out if the idea works.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'The window between idea and evidence used to be measured in quarters. Today, AI-accelerated engineering compresses that window to weeks — not by cutting corners, but by eliminating the cycles that never needed to exist.',
                  'The teams we work with don\'t abandon their instincts or existing investments. They get to the answer faster, then build on ground they\'ve actually tested.',
                ].map((p, i) => (
                  <p key={i} style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#B5B5B5', margin: 0 }}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, flex: isMobile ? undefined : '0 0 440px', width: isMobile ? '100%' : undefined }}>
              {[
                { num: 'Weeks not quarters', desc: 'From concept to working product — compressed without shortcuts.' },
                { num: '70%',               desc: 'Of product delays are scope and discovery failures, not engineering ones — we solve for the front of the problem.' },
                { num: '1→N',               desc: 'Scaling a product is a different discipline than building one — we bring both.' },
                { num: 'Built to hand off',  desc: 'Your team owns it when we\'re done, or we transition into managed services.' },
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
            From strategy to launch to continuous evolution —{' '}
            <span style={{ color: red }}>we build alongside your team.</span>
          </h2>
          <div style={{ marginTop: 48 }}>
            <Accordion items={accordionItems} defaultActiveIndex={2} />
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
                We don't fly in, build something,{' '}
                <span style={{ color: red }}>and leave.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'Technossus engineers are embedded in your delivery — not parachuted in to hand over a product and disappear. We work with your team as a natural extension of it: your processes, your governance, your cadence. Capability transfers as we build, so when the engagement ends, your team is stronger than when we started.',
                  'Over 90% of our clients extend or expand their engagement within the first year.',
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
              <p style={{ fontFamily: sans, fontSize: 15, color: '#9B9B9B', marginTop: 10 }}>When product engineering works, you feel it in pace, clarity, and confidence.</p>
            </div>
            <a href="#" style={{ fontFamily: sans, fontSize: 14, color: '#9B9B9B', textDecoration: 'underline', whiteSpace: 'nowrap', flexShrink: 0 }}>View All</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: cols3, gap: 20 }}>
            {proofCards.map((card, i) => (
              <article key={i} style={{ background: '#262626', border: '1px solid #343434', display: 'flex', flexDirection: 'column' }}>
                <PlaceholderBlock width="100%" height={200} style={{ background: '#2A2A2A' }} />
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
            If any of these describe where your team is right now, we{' '}
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
            <h3 style={{ fontFamily: serif, fontSize: isMobile ? 22 : 28, fontWeight: 600, color: '#fff', margin: 0 }}>Bring us your toughest Engineering problem.</h3>
            <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#B5B5B5', maxWidth: 640, margin: 0 }}>
              We start with a 2-day free consulting engagement — no proposal theater, no 200-slide deck. Just your team, ours, and the real problem on the table.
            </p>
            <div>
              <Button variant="primary" label="Bring us your problems →" href="#" />
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
