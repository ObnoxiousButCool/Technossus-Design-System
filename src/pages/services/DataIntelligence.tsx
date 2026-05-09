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
  <img src="/assets/icons/corner-topleft.svg" alt="" aria-hidden
    style={{ position: 'absolute', top: 0, left: 0, width: 118, height: 118, pointerEvents: 'none', zIndex: 2 }} />
);
const CornerBR = () => (
  <img src="/assets/icons/corner-bottomright.svg" alt="" aria-hidden
    style={{ position: 'absolute', bottom: 0, right: 0, width: 118, height: 118, pointerEvents: 'none', zIndex: 2 }} />
);

const accordionItems: AccordionItem[] = [
  {
    title: 'Data Infrastructure & Productization',
    subtitle: 'Scalable, governed data platforms that ensure consistent, clean, and decision-ready data across the enterprise.',
    content: {
      type: 'detail',
      serviceLabel: 'DATA INFRASTRUCTURE & PRODUCTIZATION',
      heading: 'Build the data foundation your decisions can actually rely on.',
      body: [
        'Modern enterprises generate large volumes of data, but the challenge is making it usable, consistent, and reliable for decision-making. We strengthen existing data ecosystems and design scalable, governed platforms — enabling seamless data migration and improving accessibility with minimal disruption.',
        'We establish and enhance robust data pipelines that ingest, transform, and standardize data across systems — creating a single, consistent view. Beyond infrastructure, we enable data productization by treating data as a reusable asset across teams.',
      ],
    },
  },
  {
    title: 'Analytics, Visualization & Insights',
    subtitle: 'Intuitive dashboards and predictive insights that enable faster, more informed decisions.',
    content: {
      type: 'detail',
      serviceLabel: 'ANALYTICS, VISUALIZATION & INSIGHTS',
      heading: 'Turn your data into a single, aligned story your teams can act on.',
      body: [
        'We design intuitive dashboards and reporting solutions that provide a unified view of business performance. By standardizing metrics and aligning data models, we ensure a single version of truth — eliminating discrepancies and enabling consistent decision-making.',
        'Insights are delivered in near real-time and embedded into business workflows, enabling users to interpret trends, identify issues, and take action quickly — without waiting for a data analyst to run a report.',
      ],
    },
  },
  {
    title: 'Next-Gen Data & Enterprise LLM Builds',
    subtitle: 'AI and LLM solutions built on enterprise data for contextual, reliable, and business-relevant outputs.',
    content: {
      type: 'detail',
      serviceLabel: 'NEXT-GEN DATA & ENTERPRISE LLM BUILDS',
      heading: 'AI that works with your data, not around it.',
      body: [
        'We integrate internal data sources — documents, knowledge bases, and structured datasets — into AI workflows, supported by model-ready data pipelines. The result is AI that answers questions grounded in what your organization actually knows.',
        'With built-in governance and monitoring, we ensure AI solutions remain controlled, consistent, and scalable — so the answers your teams get reflect reality, not hallucination.',
      ],
    },
  },
  {
    title: 'Data Annotation, Validation & Verification',
    subtitle: 'High-quality, labeled, and verified data that powers reliable analytics and AI.',
    content: {
      type: 'detail',
      serviceLabel: 'DATA ANNOTATION, VALIDATION & VERIFICATION',
      heading: 'Clean data isn\'t a nice-to-have. It\'s what separates useful AI from unreliable AI.',
      body: [
        'High-quality data is essential for both analytics and AI, yet many organizations struggle with incomplete, inconsistent, or unverified datasets. We establish scalable processes to label, categorize, and enrich data across structured, semi-structured, and unstructured formats.',
        'Validation and verification mechanisms are embedded within data pipelines to detect errors, inconsistencies, and anomalies early — before they propagate into models, dashboards, or executive decisions.',
      ],
    },
  },
  {
    title: 'Augmented Decision Intelligence',
    subtitle: 'Integrate data, analytics, and AI into the workflows where decisions actually happen.',
    content: {
      type: 'detail',
      serviceLabel: 'AUGMENTED DECISION INTELLIGENCE',
      heading: 'From reactive dashboards to proactive decision support.',
      body: [
        'We integrate data, analytics, and AI into the environments where decisions are made — whether through dashboards, applications, or operational systems. By leveraging predictive analytics, recommendations, and AI-driven insights, we enable organizations to move from reactive to proactive decision-making.',
        'The result isn\'t another dashboard that sits unused. It\'s decision support embedded where your teams already work — so the right signal reaches the right person at the right moment.',
      ],
    },
  },
];

const howCards = [
  { title: 'Business-First, Data-Driven Solutions',  body: 'Every solution is anchored in the outcomes leaders need to drive, ensuring data models, pipelines, and reporting layers directly support business priorities — not just technical best practices.' },
  { title: 'Data Lineage and Governance',             body: 'We embed data quality, governance, and end-to-end data lineage into every layer, ensuring transparency, traceability, and trust across the data ecosystem.' },
  { title: 'Bridging Technical and Business Teams',  body: 'Our focus is on making data usable and trusted in real business environments, bridging the gap between technical systems and the decision-making outcomes your teams need.' },
  { title: 'Continuous Monitoring & Improvement',    body: 'Data quality isn\'t a project — it\'s an ongoing discipline. We embed monitoring into pipelines so data integrity is validated continuously, not just at deployment.' },
];

const proofCards = [
  { tags: 'HEALTHCARE • DATA UNIFICATION',       title: 'From Fragmented Data to Predictive, Decision-Ready Insights', excerpt: 'We unified MDxHealth\'s scattered data ecosystem to create a governed, single source of truth across clinical, operational, and financial workflows. Advanced predictive analytics enabled proactive decision-making.' },
  { tags: 'HEALTHCARE • ANALYTICS PLATFORM',     title: 'CarePredictor: Turning Care Signals Into Earlier Action',       excerpt: 'Technossus supported CarePredictor in strengthening a healthcare platform that uses data-driven insights to identify patients at risk earlier, enabling timely interventions and better care outcomes.' },
  { tags: 'ENTERPRISE • DATA PLATFORM',          title: 'Scalable Data Foundation for Enterprise AI Readiness',          excerpt: 'A large enterprise needed a reliable data foundation before scaling AI. We designed a governed data platform that unified disparate sources and enabled AI teams to build with confidence.' },
];

const painCards = [
  { heading: '"Data is spread across systems, but our reports don\'t match."',     body: 'Teams spend more time reconciling numbers than making decisions. Every meeting starts with a debate about which number is right — and ends without resolving it.' },
  { heading: '"Our AI initiatives keep failing to scale."',                        body: 'Early experiments show promise, but when the team tries to scale them, they hit a wall. The data isn\'t structured, complete, or trustworthy enough for production AI.' },
  { heading: '"Decision-making is delayed because nobody trusts the data."',       body: 'Manual processes, inconsistent data, and too many one-off reports mean decisions wait on data validation instead of moving on insight.' },
];

export default function DataIntelligence() {
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
            { label: 'Data Intelligence & Analytics', active: true },
          ]} />
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? 32 : 60, marginTop: 40 }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
              <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase', color: '#ADADAD', margin: 0 }}>Data you can trust. Insights you can act on.</p>
              <FadeUp>
                <h1 style={d1()}>
                  Your data is speaking.{' '}
                  <span style={{ color: red }}>Are you listening fast enough?</span>
                </h1>
              </FadeUp>
              <FadeUp delay={80}>
                <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: '#5C5C5C', margin: 0, maxWidth: 560 }}>
                  Data and Analytics only matter when they lead to clear, confident decisions. We unify, clean, and structure data so it tells a single, aligned story. Decisions move faster, and teams focus on acting — not reconciling.
                </p>
              </FadeUp>
              <FadeUp delay={120}>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <Button variant="primary"   label="Talk to a Data Expert"  href="#" />
                  <Button variant="secondary" label="Explore Our Work"       href="#" />
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
                Data is growing faster than{' '}
                <span style={{ color: red }}>decision readiness.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'Organizations have moved beyond collecting data — the challenge today is making it usable for decisions. The shift is from descriptive dashboards to predictive, personalised, and decision-support capabilities.',
                  'As expectations rise, teams need data that is aligned, governed, and ready to act on — so insight turns into action without friction. The bottleneck is no longer data volume. It\'s data trust.',
                ].map((p, i) => (
                  <p key={i} style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#B5B5B5', margin: 0 }}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, flex: isMobile ? undefined : '0 0 440px', width: isMobile ? '100%' : undefined }}>
              {[
                { num: '73%',   desc: 'Of organizations say data quality is a major barrier to realizing value from analytics and AI. — Gartner' },
                { num: '2.5×',  desc: 'More revenue growth among organizations that treat data as a product and govern it at the enterprise level.' },
                { num: '60%',   desc: 'Of AI project failures are attributed to data issues — not model problems. Clean data is the foundation.' },
                { num: '< 1%',  desc: 'Of enterprise data is analyzed and acted upon. The opportunity isn\'t more collection — it\'s better utilization.' },
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
            From raw data to trusted insights — configured for{' '}
            <span style={{ color: red }}>how your business actually decides.</span>
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
                We focus on making data usable and trusted in{' '}
                <span style={{ color: red }}>real business environments.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'Every data engagement starts with the decision it needs to support — not the technology that will deliver it. We work with your business and data teams together, so the solutions we build are anchored in real outcomes, not technical milestones.',
                  'Our approach bridges the gap between the people who manage data infrastructure and the people who make decisions with it. When the engagement ends, your team owns both the platform and the practice.',
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
              <p style={{ fontFamily: sans, fontSize: 15, color: '#9B9B9B', marginTop: 10 }}>Real outcomes from teams that needed data they could trust.</p>
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
            If data problems are slowing your decisions, you're not{' '}
            <span style={{ color: red }}>alone.</span>
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
            <h3 style={{ fontFamily: serif, fontSize: isMobile ? 22 : 28, fontWeight: 600, color: '#fff', margin: 0 }}>Turn your data into a reliable business asset.</h3>
            <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#B5B5B5', maxWidth: 640, margin: 0 }}>
              Whether you are strengthening your data foundation or scaling AI, we help you move forward with clarity, control, and measurable outcomes. Start with a focused conversation about where your data ecosystem needs the most attention.
            </p>
            <div>
              <Button variant="primary" label="Schedule a Discussion →" href="#" />
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
