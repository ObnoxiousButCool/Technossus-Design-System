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
    title: 'Product Strategy & Discovery',
    subtitle: 'Don\'t just build more. Build what matters.',
    content: {
      type: 'detail',
      serviceLabel: 'PRODUCT STRATEGY & DISCOVERY',
      heading: 'Most products don\'t lose momentum because teams lack effort. They lose momentum because the direction is fuzzy.',
      body: [
        'We work with your team to sharpen the opportunity, clarify the user need, define what deserves to be built first, and shape an MVP that can prove its value quickly. The goal is not "more planning". It is better product judgment.',
        'Priorities get bloated and too much gets funded before the right things get validated. We help teams cut through that — so effort goes toward the parts of the roadmap that will actually move the business.',
      ],
    },
  },
  {
    title: 'Experience Design & Product UX',
    subtitle: 'If the experience feels heavy, growth feels heavy too.',
    content: {
      type: 'detail',
      serviceLabel: 'EXPERIENCE DESIGN & PRODUCT UX',
      heading: 'Users don\'t care how impressive the architecture is. They care whether the product helps them.',
      body: [
        'We help teams turn complexity into clarity through better journeys, stronger interaction design, faster prototyping, and sharper product decisions. The payoff is bigger than usability — it shows up in activation, retention, and product confidence.',
        'Design and engineering working together from the start means fewer handoff gaps, less rework, and products that actually feel like they were built by one team.',
      ],
    },
  },
  {
    title: 'Custom Product Development',
    subtitle: 'Ideas only matter if they survive real-world use.',
    content: {
      type: 'detail',
      serviceLabel: 'CUSTOM PRODUCT DEVELOPMENT',
      heading: 'Vision meets engineering discipline. That\'s where products are made.',
      body: [
        'We help teams turn product ideas into scalable software that works in the real world — not just in a demo, not just in a roadmap deck, and not just as a proof of concept. We engineer for performance, maintainability, and product momentum from the start.',
        'That is the difference between shipping software and building product advantage. Every architecture decision is made with the product\'s next phase in mind, not just the current sprint.',
      ],
    },
  },
  {
    title: 'Platform Engineering & Architecture',
    subtitle: 'Weak foundations always send the bill later.',
    content: {
      type: 'detail',
      serviceLabel: 'PLATFORM ENGINEERING & ARCHITECTURE',
      heading: 'When products grow on shaky foundations, the symptoms show up fast.',
      body: [
        'Slower releases, brittle integrations, rising maintenance drag, and teams spending more time managing complexity than moving the product forward. We build the technical backbone that lets products scale cleanly — cloud-ready, integration-ready, performance-ready, and resilient under real-world pressure.',
        'A strong platform is not the headline. It is the reason the product can keep moving.',
      ],
    },
  },
  {
    title: 'Quality Engineering & Release Confidence',
    subtitle: 'Speed means nothing if every release feels like a gamble.',
    content: {
      type: 'detail',
      serviceLabel: 'QUALITY ENGINEERING & RELEASE CONFIDENCE',
      heading: 'When teams lose confidence in the release, momentum slows everywhere.',
      body: [
        'Roadmaps stall, quality questions pile up, and engineering energy gets pulled into firefighting instead of forward motion. We build quality into the lifecycle through automation, regression coverage, release-readiness practices, and the kind of validation discipline that makes faster delivery safer — not riskier.',
        'When confidence goes up, velocity stops being fragile.',
      ],
    },
  },
  {
    title: 'Product Modernization & Continuous Evolution',
    subtitle: 'The strongest products are not replaced. They are re-engineered to keep winning.',
    content: {
      type: 'detail',
      serviceLabel: 'PRODUCT MODERNIZATION & CONTINUOUS EVOLUTION',
      heading: 'Most products don\'t need a dramatic reset. They need a smarter path forward.',
      body: [
        'We identify where legacy systems, technical debt, aging workflows, or outdated architecture are slowing the product down — then define a practical path to move it forward in phases. The product keeps delivering value while the right changes are being made underneath it.',
        'Modernization stops stalling momentum when it\'s treated as an ongoing discipline, not a one-time project.',
      ],
    },
  },
];

const howCards = [
  { title: 'Validate Builds Faster',        body: 'Get to an early working version sooner, so the plan can respond to real signal instead of assumptions — reducing wasted engineering investment.' },
  { title: 'Modernize Without Disruption',  body: 'Reduce product drag while creating room for new product value. The product keeps moving while the right changes are being made under the hood.' },
  { title: 'Build Team Capability',         body: 'Transfer knowledge and build engineering capacity within your team as delivery progresses — so the team becomes stronger through the engagement, not dependent on it.' },
  { title: 'Move Fast Where It Helps',      body: 'We push pace when the window is open, and slow down when speed is the wrong signal. Our job is product momentum, not performance theater.' },
];

const proofCards = [
  { tags: 'COMMERCE • PRODUCT REDESIGN',   title: '56% Faster Product Discovery',     excerpt: 'A high-volume commerce experience was redesigned so users could find what they needed faster and with less friction — validated through research before a single production change.' },
  { tags: 'FINTECH • RAPID PROTOTYPING',   title: 'Working Prototype in 24 Hours',    excerpt: 'A fintech concept moved from idea to functioning product in a single day — fast enough to test, validate, and spark investor and market interest.' },
  { tags: 'MOBILE • LAUNCH READINESS',     title: '4M+ Views in 48 Hours',            excerpt: 'AppFitters\' configurable mobile platform generated massive organic traction immediately after launch, proving the value of speed, usability, and engineering-led go-to-market readiness.' },
];

const painCards = [
  { heading: '"The team needs to move faster, but they need clarity, quality, and control."', body: 'Velocity without discipline creates technical debt. Discipline without velocity creates stalled roadmaps. We help teams find the balance that actually compounds.' },
  { heading: '"We have something worth building, but we\'re missing the dedicated capacity."', body: 'The idea is validated. The market window is open. What\'s missing is the engineering capacity and execution structure to push it forward properly without destabilizing the existing product.' },
  { heading: '"The team can create so much more value, if only they spent less time on maintenance."', body: 'Engineering cycles that should go into new product features keep getting pulled into scaffolding, rework, and the overhead of maintaining a system that wasn\'t built to evolve.' },
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
              <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase', color: '#ADADAD', margin: 0 }}>Build with agility. Evolve with intent.</p>
              <FadeUp>
                <h1 style={d1()}>
                  Want to turn a bold product vision{' '}
                  <span style={{ color: red }}>into something real?</span>
                </h1>
              </FadeUp>
              <FadeUp delay={80}>
                <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: '#5C5C5C', margin: 0, maxWidth: 560 }}>
                  Great products are no longer built for one release, one region, or one moment in time. We help teams launch, modernize, and improve digital products with stronger velocity, sharper execution, and the foundations to keep moving as the market moves.
                </p>
              </FadeUp>
              <FadeUp delay={120}>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <Button variant="primary"   label="Talk to a Product Expert" href="#" />
                  <Button variant="secondary" label="Explore Our Work"         href="#" />
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
                The market is moving fast. Product teams{' '}
                <span style={{ color: red }}>need to move faster.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'Great products begin with ambition, but today they get funded, built, and scaled only when teams can show a faster path from idea to working prototypes. The market now rewards velocity, adaptability, and products built for global reach with local relevance.',
                  'The teams pulling ahead are not just building faster. They are building with more adaptability, more discipline, and more room to scale. Funding follows proof — ideas get backing faster when teams can show a credible, working product early.',
                ].map((p, i) => (
                  <p key={i} style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#B5B5B5', margin: 0 }}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, flex: isMobile ? undefined : '0 0 440px', width: isMobile ? '100%' : undefined }}>
              {[
                { num: '56%',   desc: 'Faster product discovery for a high-volume commerce client after a research-led product redesign.' },
                { num: '24hrs', desc: 'Time from concept to working prototype for a fintech client — fast enough to validate and raise investment.' },
                { num: '4M+',   desc: 'Views in 48 hours for a client\'s configurable mobile platform after a design-led launch.' },
                { num: '90%+',  desc: 'Of Technossus product clients continue working with us after the first engagement — many for over a decade.' },
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
                Move fast where it helps. Stay{' '}
                <span style={{ color: red }}>disciplined where it matters.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'The Technossus way is simple: move fast where it helps, stay disciplined where it matters, and build with your team — not around them. We work embedded with your product and engineering teams, making decisions together rather than handing work over and walking away.',
                  'When working software shows up sooner, teams get something real to test, learn from, and improve earlier. More engineering time goes to product value. Less goes into scaffolding, repetitive tasks, and delivery overhead.',
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
              <p style={{ fontFamily: sans, fontSize: 15, color: '#9B9B9B', marginTop: 10 }}>When product engineering works, you feel it in pace, clarity, and confidence.</p>
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
            If roadmap pressure is slowing momentum, we{' '}
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
            <h3 style={{ fontFamily: serif, fontSize: isMobile ? 22 : 28, fontWeight: 600, color: '#fff', margin: 0 }}>Have a product to build, maintain, or scale?</h3>
            <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#B5B5B5', maxWidth: 640, margin: 0 }}>
              If roadmap pressure, modernization needs, or delivery friction are slowing momentum — let's start with the parts that matter most. Two days with a Technossus product team. At no cost. A real read on the real problem.
            </p>
            <div>
              <Button variant="primary" label="Talk to a Product Expert →" href="#" />
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
