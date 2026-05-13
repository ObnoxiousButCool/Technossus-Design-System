'use client';

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
import imgHero from '../../../assets/Website_Images/Services/Digital Exp..png';

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
    title: 'Experience Strategy & Transformation',
    subtitle: 'Align every experience decision to a business outcome.',
    content: {
      type: 'detail',
      serviceLabel: 'EXPERIENCE STRATEGY & TRANSFORMATION',
      heading: 'Align every experience decision to a business outcome.',
      body: [
        'Experience strategy that sits above individual products, channels, and teams — not a vision document, but an executable framework your organization can own and act on. We map the current experience landscape, identify where friction is costing you customers, and build the transformation roadmap with the people who will carry it forward. Every decision traces to a growth, retention, or adoption metric.',
        'Organizations that invest in unified experience strategy before individual product redesigns reduce downstream correction costs by 2–3× compared to reactive, channel-by-channel approaches.',
      ],
    },
  },
  {
    title: 'Product Ideation & Co-Design',
    subtitle: 'Pressure-test the idea before the roadmap commits to it.',
    content: {
      type: 'detail',
      serviceLabel: 'PRODUCT IDEATION & CO-DESIGN',
      heading: 'Pressure-test the idea before the roadmap commits to it.',
      body: [
        'Structured ideation as a service — not a brainstorm, not a hackathon that leaves the room with Post-its and no direction. A facilitated engagement where your product, engineering, and business stakeholders co-ideate alongside our design team. Generative AI participates as a co-creator: surfacing patterns, accelerating prototypes, and letting your team explore more directions in a day than traditional ideation covers in a month.',
        'Teams that run structured co-design validation before committing to roadmap reduce post-launch redesign costs by 30–50% and ship with measurably higher user confidence scores from day one.',
      ],
    },
  },
  {
    title: 'Digital Experience V&V',
    subtitle: "Don't let accessibility debt become a compliance crisis.",
    content: {
      type: 'detail',
      serviceLabel: 'DIGITAL EXPERIENCE V&V',
      heading: 'Don\'t let accessibility debt become a compliance crisis.',
      body: [
        'Most firms address usability, accessibility, and compliance separately — on different timelines, by different teams, often after launch. We bundle all three into a single validated engagement: WCAG and ADA compliance review, usability testing across real user scenarios, and AI-UX pattern validation for products deploying generative interfaces.',
        'Digital accessibility litigation in the U.S. exceeded 4,600 cases in 2023 — a 42% year-over-year increase. The majority of violations were preventable through pre-launch V&V.',
      ],
    },
  },
  {
    title: 'Omnichannel Customer Experience',
    subtitle: "Meet your customer where they are and make it feel like the same company.",
    content: {
      type: 'detail',
      serviceLabel: 'OMNICHANNEL CUSTOMER EXPERIENCE',
      heading: 'Meet your customer where they are — and make it feel like the same company.',
      body: [
        'Your customers don\'t see your org chart. They see whether the experience on your mobile app matches your web portal, your customer support interface, and every other surface they interact with. We design across channels with a unified experience model — shared interaction patterns, consistent language, and a visual identity that holds at every touchpoint.',
        'Customers who engage across three or more channels have 90% higher lifetime value than single-channel customers — and experience consistency is what makes sustained cross-channel engagement possible.',
      ],
    },
  },
  {
    title: 'Design Systems',
    subtitle: 'Make the design decision once. Deploy it everywhere.',
    content: {
      type: 'detail',
      serviceLabel: 'DESIGN SYSTEMS',
      heading: 'Make the design decision once. Deploy it everywhere.',
      body: [
        'A design system is only as valuable as your team\'s ability to use and extend it. We build in Figma — tokens, components, patterns, documentation, and governance — to the standards your engineering teams can implement and scale. Your teams move faster because the decisions are already made. Your product looks consistent because the decisions are shared.',
        'Teams operating from a mature design system ship 3–5× faster and spend 40% less time on design QA — freeing designers for the work that requires craft, not repetition.',
      ],
    },
  },
  {
    title: 'Adaptive Experience Design',
    subtitle: "Experiences that know who they're talking to.",
    content: {
      type: 'detail',
      serviceLabel: 'ADAPTIVE EXPERIENCE DESIGN',
      heading: 'Experiences that know who they\'re talking to.',
      body: [
        'AI-native UX goes beyond personalization toggles — it\'s the architecture of experiences that observe, infer, and respond to each user in context. We design the interaction models, content patterns, and feedback loops that make your product feel less like software and more like a service that understands the person using it. Content that surfaces at the right moment. Flows that adapt based on what the user has already done.',
        'Personalized digital experiences drive 40% higher engagement and measurably lower abandonment rates at every stage of the user journey — the patterns are the product.',
      ],
    },
  },
];

const howCards = [
  { title: 'Outcomes, not outputs.',                    body: 'Every engagement is framed around the business metric it should move — adoption, retention, conversion, satisfaction, time-to-value. Deliverables are the means. The metric is how we know the work worked.' },
  { title: 'Capability transfers as we build.',         body: 'Workshop formats, design system components, and validation frameworks we produce are documented, trained on, and handed over. When we leave, your team is running the system — not waiting for us to come back.' },
  { title: 'We work within your product cadence.',      body: 'We don\'t ask you to pause delivery to do experience strategy. We embed inside your existing sprint rhythm and move at a pace your organization can absorb and sustain.' },
  { title: 'Accessibility and compliance are not checkboxes.', body: 'Every engagement is validated against WCAG, ADA, and usability standards before it ships. Quality is non-negotiable — and we carry that standard from the first wireframe to the final release.' },
];

const proofCards = [
  { tags: 'COMMERCE • EXPERIENCE REDESIGN', title: '56% Faster Product Discovery',  excerpt: 'A high-volume commerce experience was redesigned so users could find what they needed faster and with less friction — validated through usability research before a single line of production code changed.' },
  { tags: 'FINTECH • RAPID PROTOTYPING',    title: 'Working Prototype in 24 Hours', excerpt: 'A fintech concept moved from idea to functioning product in a single day — fast enough to test, validate, and spark investor and market interest.' },
  { tags: 'MOBILE • LAUNCH READINESS',      title: '4M+ Views in 48 Hours',         excerpt: 'A client\'s configurable mobile product launched with immediate traction, proving the value of speed, usability, and design-led go-to-market readiness.' },
];

const painCards = [
  { heading: '"We shipped the product, but adoption is lower than expected."',              body: 'Nobody can agree on whether it\'s a design problem, a feature problem, or a user research problem. The build is done and the question is still open.' },
  { heading: '"Every team is designing their own patterns."',                                body: 'The product looks like three different companies built it, and the inconsistencies are starting to show up in customer feedback.' },
  { heading: '"We have a product idea that everyone agrees on in principle."',               body: 'Until someone asks what you\'re actually building and the room goes quiet. Alignment on concept doesn\'t mean alignment on scope.' },
  { heading: '"Our accessibility audit came back with violations we didn\'t know existed."', body: 'The legal team is asking how this reached production without anyone catching it. The answer is that compliance was treated as a post-launch checkbox.' },
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
                  Your users know what you built. They're just not sure{' '}
                  <span style={{ color: red }}>it was built for them.</span>
                </h1>
              </FadeUp>
              <FadeUp delay={80}>
                <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: '#5C5C5C', margin: 0, maxWidth: 560 }}>
                  The gap between what your team designed and what users actually experience isn't inevitable — it's the cost of building without validation, designing across silos, and shipping before the experience is proven. We work with your team to close that gap: from the first whiteboard session to the final release.
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
                <img src={imgHero} alt="" style={{ width: '100%', height: isTablet ? 300 : 460, objectFit: 'cover', display: 'block' }} />
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
            {['CEFALY', 'CARE PREDICTOR', 'WORD AND BROWN', 'BIOCAIR', 'TECH E STEEL'].map(name => (
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
                The craft should be your designers' job.{' '}
                <span style={{ color: red }}>The repetition shouldn't.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'Intelligence has compressed what used to take months in experience design — not by replacing your team\'s craft, but by accelerating the discovery, validation, and iteration cycles that consume most of the calendar. Your designers focus on the judgment, strategy, and creative decisions that shape the product. The repetitive layers move faster.',
                  'Many organizations already have design teams, partial design systems, and experience work in motion. The challenge isn\'t starting — it\'s orchestrating what\'s already there: aligning experience across channels, closing the gap between design intent and what engineering delivers, and validating before the roadmap commits.',
                ].map((p, i) => (
                  <p key={i} style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#B5B5B5', margin: 0 }}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, flex: isMobile ? undefined : '0 0 440px', width: isMobile ? '100%' : undefined }}>
              {[
                { num: '88%',  desc: 'of customers say experience is as important as the product or service itself.' },
                { num: '3–5×', desc: 'faster feature delivery for teams operating from a unified design system.' },
                { num: '70%',  desc: 'of product failures traced to poor user research and validation before build.' },
                { num: 'Zero', desc: 'Handoffs without capability transfer. Your team owns the system when we leave.' },
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
                We're measured by what your business does{' '}
                <span style={{ color: red }}>differently after we leave.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'Experience design is only worth what it moves — adoption that holds, retention that compounds, revenue that traces back to decisions made in the design phase. Everything we build is structured to deliver against those metrics and to keep delivering after the engagement ends.',
                  'More than 90% of our clients extend their engagement beyond the original scope. Not because they can\'t move forward without us, but because the outcomes are compounding and the work is worth continuing.',
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
              <h1 style={d1('#fff')}>Results that speak <span style={{ color: red }}>for themselves.</span></h1>
              <p style={{ fontFamily: sans, fontSize: 15, color: '#9B9B9B', marginTop: 10 }}>Adoption metrics tell the real story of a design engagement.</p>
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
            These are the conversations we have most often with{' '}
            <span style={{ color: red }}>product and design leaders.</span>
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
            <h3 style={{ fontFamily: serif, fontSize: isMobile ? 22 : 28, fontWeight: 600, color: '#fff', margin: 0 }}>Bring us your toughest design problem.</h3>
            <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#B5B5B5', maxWidth: 640, margin: 0 }}>
              We'll invest two days with your team — at no cost — understanding the challenge, mapping the experience landscape, and coming back within a week with a concrete direction. No 200-slide deck. No six-month proposal. A real path forward, built with the people who'll carry it.
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
