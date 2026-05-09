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
    title: 'Experience Strategy & Adoption Roadmapping',
    subtitle: 'Define where experience gaps exist, what\'s driving them, and the clearest path to closing them.',
    content: {
      type: 'detail',
      serviceLabel: 'EXPERIENCE STRATEGY & ADOPTION ROADMAPPING',
      heading: 'Most digital investments underdeliver not because the technology fails, but because adoption was never designed for.',
      body: [
        'We help you define where experience gaps exist, what\'s driving them, and the clearest path to closing them. That work happens before a single design frame is opened — because the most expensive design is the one that solves the wrong problem.',
        'Adoption roadmaps are built around how your users actually work, not how the system expects them to. The result is a clear, sequenced plan that connects design investment to measurable behavior change.',
      ],
    },
  },
  {
    title: 'Design-Led Innovation & Rapid Validation',
    subtitle: 'The best ideas don\'t need more time — they need faster proof.',
    content: {
      type: 'detail',
      serviceLabel: 'DESIGN-LED INNOVATION & RAPID VALIDATION',
      heading: 'See it working before you bet engineering resources on it.',
      body: [
        'We run design sprints, prototyping cycles, and early validation sessions that surface what works before engineering resources are committed. A validated direction is worth ten well-documented assumptions.',
        'From concept to clickable prototype to user feedback in days — not weeks. The discipline of rapid validation isn\'t about moving fast for its own sake. It\'s about closing the gap between what you believe users need and what they actually respond to.',
      ],
    },
  },
  {
    title: 'AI-Driven Design Innovation',
    subtitle: 'Embed intelligence into product flows through predictive recommendations and adaptive UI states.',
    content: {
      type: 'detail',
      serviceLabel: 'AI-DRIVEN DESIGN INNOVATION',
      heading: 'AI amplifies human creativity when it\'s built into the design process, not bolted on after.',
      body: [
        'We integrate AI across the design and delivery lifecycle — to amplify human creativity and reduce uncertainty. This includes embedding intelligence into product flows through predictive recommendations, contextual automation, and adaptive UI states that respond to real user behavior.',
        'The interfaces that win adoption don\'t just look good — they learn from usage and respond to context. We help design teams build that capability in, rather than treating AI as a feature to be added in a future release.',
      ],
    },
  },
  {
    title: 'Enterprise & Platform UX Design',
    subtitle: 'Complex enterprise systems don\'t have to feel complex to the people using them.',
    content: {
      type: 'detail',
      serviceLabel: 'ENTERPRISE & PLATFORM UX DESIGN',
      heading: 'Complexity in the system shouldn\'t mean complexity for the user.',
      body: [
        'Enterprise platforms are often built by engineering teams optimizing for function, not experience. The result is software that works — technically — but creates friction, training overhead, and adoption resistance at scale.',
        'We specialize in making enterprise-grade platforms feel intuitive. From information architecture to interaction design to design system governance, we work with your product and engineering teams to build platforms that people actually want to use.',
      ],
    },
  },
  {
    title: 'Legacy Platform Modernization & UX Uplift',
    subtitle: 'Modernize without losing what already works for your users.',
    content: {
      type: 'detail',
      serviceLabel: 'LEGACY PLATFORM MODERNIZATION & UX UPLIFT',
      heading: 'The goal isn\'t to redesign everything. It\'s to improve what matters most without breaking what works.',
      body: [
        'Legacy modernization projects fail when design is treated as a skin applied to a new system. Users have workflows, muscle memory, and mental models built over years. Ignoring that context creates resistance, not adoption.',
        'We work with your teams to identify the highest-friction points in existing experiences, prioritize where investment will drive the most behavioral change, and execute modernization in phases that users can absorb — not in a big-bang cutover that puts everything at risk.',
      ],
    },
  },
];

const howCards = [
  { title: 'Validate Assumptions Faster',        body: 'Get to a validated design direction sooner, so the plan responds to real user signal instead of assumptions — reducing downstream rework before engineering commits.' },
  { title: 'Design with Engineering, Not After', body: 'Design and engineering work together from the start, reducing handoff friction and helping ideas move into production more cleanly.' },
  { title: 'Human-Centered, Always',             body: 'Whether the end user is an enterprise employee, a B2B partner, or a consumer, we apply the same discipline: understand how they work, design around how they think.' },
  { title: 'Adoption Is the Metric',             body: 'We measure success by what users actually do, not by what was delivered. Adoption signals tell us whether the design solved the right problem.' },
];

const proofCards = [
  { tags: 'COMMERCE • AI REDESIGN',         title: '56% Faster Product Discovery',    excerpt: 'A high-volume commerce experience was redesigned so users could find what they needed faster and with less friction — validated through usability research before a single line of production code changed.' },
  { tags: 'FINTECH • RAPID PROTOTYPING',    title: 'Working Prototype in 24 Hours',   excerpt: 'A fintech concept moved from idea to functioning product in a single day — fast enough to test, validate, and spark investor and market interest.' },
  { tags: 'ENTERPRISE • PLATFORM UPLIFT',  title: 'Legacy System Adopted at Scale',   excerpt: 'An enterprise workflow platform that users were actively avoiding was redesigned around real work patterns. Adoption increased 40% in the first quarter post-launch.' },
];

const painCards = [
  { heading: '"We shipped the product, but users aren\'t adopting it."',                               body: 'The build is done. The launch happened. But usage metrics tell a different story. Support tickets are up, training costs are rising, and the team is starting to ask whether the design solved the right problem.' },
  { heading: '"Design and engineering keep misaligning — too many handoffs."',                         body: 'Specs get handed over, developers interpret them differently, and by the time QA catches the gap, it\'s too late to fix without a full rebuild. The friction compounds with every sprint.' },
  { heading: '"We need to modernize a legacy platform without breaking what already works."',          body: 'The old system has years of institutional knowledge baked into workflows. Every attempt to modernize it risks breaking something users depend on. The team is stuck between urgency and caution.' },
];

export default function DigitalExperience() {
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
            { label: 'Digital Experience Design', active: true },
          ]} />
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? 32 : 60, marginTop: 40 }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
              <FadeUp>
                <h1 style={d1()}>
                  Experiences that drive adoption,{' '}
                  <span style={{ color: red }}>not just attention.</span>
                </h1>
              </FadeUp>
              <FadeUp delay={80}>
                <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: '#5C5C5C', margin: 0, maxWidth: 560 }}>
                  Most software is built fast. Few are adopted with confidence. We combine research, design, and engineering to create experiences — across enterprise platforms, partner portals, and customer applications — that fit how people work, earn real adoption, and deliver the outcomes your business is built to achieve.
                </p>
              </FadeUp>
              <FadeUp delay={120}>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <Button variant="primary"   label="Talk to a Design Expert" href="#" />
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
      <section style={{ background: dark1, position: 'relative', overflow: 'hidden' }}>
        <CornerTL /><CornerBR />
        <div style={inner}>
          <Tag label="THE SHIFT" variant="light" />
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 48, alignItems: 'flex-start', marginTop: 32, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: isMobile ? '100%' : 320 }}>
              <h2 style={d2('#fff')}>
                Digital is everywhere.{' '}
                <span style={{ color: red }}>Adoption isn't.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'Organisations have invested heavily in digital — new platforms, modernised systems, and customer-facing products. But investment alone doesn\'t create usage. The shift now is toward experiences that are intuitive, trusted, and built to be adopted — not just deployed.',
                  'Faster release cycles solved time-to-market. The next frontier is time-to-adoption. Design-led validation, early prototyping, and user research close that gap before go-live — and before the cost of the wrong answer becomes the cost of a full rebuild.',
                ].map((p, i) => (
                  <p key={i} style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#B5B5B5', margin: 0 }}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, flex: isMobile ? undefined : '0 0 440px', width: isMobile ? '100%' : undefined }}>
              {[
                { num: '70%',   desc: 'Of digital transformation projects fail to meet adoption targets — not because the technology doesn\'t work, but because users don\'t.' },
                { num: '56%',   desc: 'Faster product discovery for a high-volume commerce client after a research-led design intervention.' },
                { num: '24hrs', desc: 'From concept to working prototype for a fintech client — fast enough to validate, iterate, and raise interest.' },
                { num: '4M+',   desc: 'Views in 48 hours for a mobile product that launched with a design-led go-to-market experience.' },
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
            Human-centered, seamless, and intelligent experiences —{' '}
            <span style={{ color: red }}>from insights to implementation.</span>
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
                Validate early, design together,{' '}
                <span style={{ color: red }}>build with intent.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'The Technossus way is simple: validate early where it saves effort, stay human-centered where it matters, and design with your team — not around them. Whether the end user is an enterprise employee, a B2B partner, or a consumer, the discipline is the same.',
                  'We work embedded with your product and engineering teams. Design decisions get made with engineering context, and engineering decisions get made with design context. That alignment is what makes adoption possible at the speed your business needs.',
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
              <h1 style={d1('#fff')}>Results that speak <span style={{ color: red }}>for themselves.</span></h1>
              <p style={{ fontFamily: sans, fontSize: 15, color: '#9B9B9B', marginTop: 10 }}>Adoption metrics tell the real story of a design engagement.</p>
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
            If adoption gaps are slowing momentum, we{' '}
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
            <h3 style={{ fontFamily: serif, fontSize: isMobile ? 22 : 28, fontWeight: 600, color: '#fff', margin: 0 }}>Have an experience to design, improve, or scale?</h3>
            <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#B5B5B5', maxWidth: 640, margin: 0 }}>
              If adoption gaps, modernization needs, or design-engineering friction are slowing momentum — let's start with what matters most. A focused conversation with a Technossus design leader costs nothing and usually surfaces the clearest path forward.
            </p>
            <div>
              <Button variant="primary" label="Talk to a Design Expert →" href="#" />
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
