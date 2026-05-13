import React from 'react';
import { Tag }        from '../../../components/Tag';
import { Breadcrumb } from '../../../components/Breadcrumb';
import { Accordion }  from '../../../components/Accordion';
import { CTABanner }  from '../../../components/CTABanner';
import { Button }     from '../../../components/Button';
import { FadeUp }     from '../../../components/Animate/FadeUp';
import { Stats }      from '../../../components/Stats';
import { Card }       from '../../../components/Card';
import { useBreakpoint } from '../../../ts/breakpoints';
import type { AccordionItem } from '../../../components/Accordion';
import { SEOHead, breadcrumbSchema, serviceSchema } from '../../components/SEOHead';
import imgHero from '../../../assets/Website_Images/Services/Quality Eng..png';

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
    title: 'Quality Engineering & Independent Assurance',
    subtitle: 'Objective validation across releases, environments, and system changes — designed around how you actually build.',
    content: {
      type: 'detail',
      serviceLabel: 'QUALITY ENGINEERING & INDEPENDENT ASSURANCE',
      heading: 'Your release shouldn\'t feel like a bet every time.',
      body: [
        'Objective validation matters most when the team that built the system is also the one reviewing it. Independent QA brings a consistent, unbiased perspective across releases, environments, and system changes. We design test strategies around how you actually build: your stack, release cadence, and the business-critical paths where a failure would hurt most.',
        'Organizations with mature QE practices resolve production defects 6x faster and at 30x lower cost than teams catching the same issues post-release. — NIST',
      ],
    },
  },
  {
    title: 'Continuous Quality & QAOps Engineering',
    subtitle: 'Quality built into CI/CD pipelines — from design to release, risk surfaces early where it\'s cheapest to fix.',
    content: {
      type: 'detail',
      serviceLabel: 'CONTINUOUS QUALITY & QAOPS ENGINEERING',
      heading: 'Quality that lives in the pipeline — from design to release.',
      body: [
        'Functional, non-functional, API, and regression testing shouldn\'t wait for the build to finish. Embedding quality into CI/CD pipelines means risk surfaces early, where it\'s cheapest to fix. We build Quality as Code: automated test suites integrated into the pipeline, risk-based coverage, and real-time observability at every stage.',
        'Teams with QAOps-integrated pipelines report up to 40% fewer production incidents and measurable improvements in release frequency and defect escape rates. — World Quality Report',
      ],
    },
  },
  {
    title: 'Performance, Resilience & Scalability',
    subtitle: 'Validate system behavior under real load, resilience when dependencies fail, and behavior at scale.',
    content: {
      type: 'detail',
      serviceLabel: 'PERFORMANCE, RESILIENCE & SCALABILITY',
      heading: 'Know how your system behaves before your users find out.',
      body: [
        'Staging environments don\'t tell the whole truth. Performance under real load, resilience when dependencies fail, and behavior at scale are questions staging can\'t fully answer. We validate system performance against real-world usage patterns — load and stress testing, chaos engineering for cloud-native environments, scalability benchmarking as traffic and data volumes grow.',
        'Organizations that invest in performance and resilience engineering report 50–70% reduction in unplanned downtime and significantly lower cloud cost overruns at scale. — Gartner',
      ],
    },
  },
  {
    title: 'Governance, Compliance & Trust Assurance',
    subtitle: 'Compliance-as-code for HIPAA, FDA, SOC 2, WCAG, and the EU AI Act — built into delivery from the start.',
    content: {
      type: 'detail',
      serviceLabel: 'GOVERNANCE, COMPLIANCE & TRUST ASSURANCE',
      heading: 'The audit doesn\'t start when the auditor arrives.',
      body: [
        'In regulated industries — healthcare, fintech, pharma, government — compliance isn\'t a final checkpoint. HIPAA, PHI, PCI-DSS, FDA, GDPR, SOC 2, WCAG accessibility, and the EU AI Act each carry validation standards that have to be mapped into the test strategy from the start. We build compliance-as-code: Validation Master Plans, security and accessibility testing embedded in delivery, and documentation that holds up under scrutiny.',
        'Compliance-related defects identified post-release cost 4–5x more to remediate than those caught during design and requirements validation. — NIST',
      ],
    },
  },
  {
    title: 'AI-First & Responsible Quality Engineering',
    subtitle: 'Validate model outputs, detect drift, test for bias, and build agentic test automation that adapts as systems evolve.',
    content: {
      type: 'detail',
      serviceLabel: 'AI-FIRST & RESPONSIBLE QUALITY ENGINEERING',
      heading: 'Your AI ships confident. Not because you hoped it was ready — because you tested it that way.',
      body: [
        'AI systems don\'t fail the way conventional software fails. Model outputs drift. Behavior shifts under edge cases and adversarial inputs no predefined test scenario anticipated. Bias surfaces in production. We validate model outputs, detect drift early, test for bias and responsible AI compliance, and build agentic test automation that uses AI to generate cases, self-heal scripts, and adapt coverage as systems evolve.',
        'Gartner predicts 75%+ of enterprises will incorporate GenAI-driven testing by 2026. Organizations with structured AI validation practices significantly outperform peers on production reliability.',
      ],
    },
  },
];

const howCards = [
  { title: 'Embedded From Day One.',     body: 'Quality strategy gets shaped alongside engineering and product before the first test case is written.' },
  { title: 'Capability Transfers.',      body: 'Frameworks, tooling, and methodology are documented and handed over as working knowledge — not as artifacts nobody can explain.' },
  { title: 'Alignment Before Delivery.', body: 'We work within what serves the product and business and get alignment on what needs to change before it becomes a problem.' },
  { title: 'Standards That Hold.',       body: 'Quality benchmarks are set at the start and maintained through delivery. They don\'t flex when timelines get tight.' },
];

const proofCards = [
  { tags: 'FINANCIAL SERVICES • QE AUTOMATION',  title: '2x Faster Dashboard Validation',             excerpt: 'Automated validation across 20+ critical dashboards replaced manual checks at a global investment bank, improving data accuracy and enabling faster, more reliable decision-making.' },
  { tags: 'FINANCIAL SERVICES • TEST AUTOMATION', title: '50% Faster Testing Cycles',                  excerpt: 'Automated 400+ Salesforce test scenarios to reduce testing effort, accelerate releases, and improve system reliability across critical workflows at a global investment bank.' },
  { tags: 'MANUFACTURING • QUALITY ENGINEERING', title: 'From Manual Testing to Scalable Automation', excerpt: 'Introduced automated testing at Glidewell Labs without impacting active projects, reducing manual effort and enabling faster, more reliable releases.' },
];

const painCards = [
  { heading: 'We keep finding issues too late.',                                     body: 'Testing happens at the end. The build is already done, the release is already scheduled, and the defects showing up now should have been caught three sprints ago.' },
  { heading: 'Automation suite exists. It just doesn\'t help.',                     body: 'Coverage numbers look reasonable on paper. But the suite is brittle, maintenance is constant, and half the team isn\'t sure what the tests are actually validating anymore.' },
  { heading: 'We found out about the compliance gap at the wrong moment.',           body: 'The audit window opened or the submission deadline arrived, and the validation documentation wasn\'t where it needed to be.' },
  { heading: 'We tested it thoroughly. So why doesn\'t it behave the way it did?', body: 'The model passed every evaluation. Staging looked good. But in production, outputs drift, edge cases surface, and guardrails show gaps under real user behavior.' },
];

export default function QualityEngineering() {
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
      <SEOHead
        title="Quality Engineering & Automation — Technossus"
        description="Accelerate releases with confidence. Technossus builds AI-augmented QA automation, testing frameworks, and observability pipelines."
        canonicalPath="/services/quality-engineering"
        keywords="quality engineering, test automation, QA, software testing, observability"
        jsonLd={breadcrumbSchema([{name:'Home',url:'https://newtechnossus-v2.vercel.app'},{name:'Services',url:'https://newtechnossus-v2.vercel.app/services'},{name:'Quality Engineering',url:'https://newtechnossus-v2.vercel.app/services/quality-engineering'}])}
      />
      {/* ── HERO ── */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: isMobile ? '32px 16px 48px' : isTablet ? '40px 32px 60px' : '40px 80px 80px' }}>
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Service Offerings', href: '/services' },
            { label: 'Quality Engineering & Automation', active: true },
          ]} />
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? 32 : 60, marginTop: 40 }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
              <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase', color: '#ADADAD', margin: 0 }}>QUALITY ENGINEERING AND AUTOMATION</p>
              <FadeUp>
                <h1 style={d1()}>
                  You know what's broken.{' '}
                  <span style={{ color: red }}>The problem is what you don't know yet.</span>
                </h1>
              </FadeUp>
              <FadeUp delay={80}>
                <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: '#5C5C5C', margin: 0, maxWidth: 560 }}>
                  Most quality programs are built to catch what already went wrong. We work with your team to build the kind of intelligence that finds problems before your users do, and the kind of automation that holds up long after we're gone.
                </p>
              </FadeUp>
              <FadeUp delay={120}>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <Button variant="primary"   label="Show us the problem" href="#" />
                  <Button variant="secondary" label="See How We Work"     href="#how" />
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
      <section style={{ borderTop: '1px solid #E8E8E8', background: '#fff' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: isMobile ? '24px 16px' : '32px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
          <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: '.12em', color: '#ADADAD', textTransform: 'uppercase' }}>Trusted By</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: isMobile ? 24 : 72, flexWrap: 'wrap' }}>
            {['HOULIHAN LOKEY', 'ASIAN PAINTS', 'MDx', 'WORD & BROWN'].map(name => (
              <span key={name} style={{ fontFamily: sans, fontSize: 13, fontWeight: 700, color: '#888', filter: 'grayscale(100%)', opacity: .65 }}>{name}</span>
            ))}
          </div>
        </div>
      </section>

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
                Quality doesn't start at the end of the build. That's just where{' '}
                <span style={{ color: red }}>quality failures get identified.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'Testing has always been the part of the delivery cycle that absorbs everyone else\'s delays and still gets blamed when something ships broken. Engineers are moving faster than ever, and the gap between release velocity and quality confidence is widening, not closing.',
                  'AI is changing the economics of that gap. Not by replacing QA engineers, but by giving them the kind of leverage that actually matches the pace they\'re being asked to work at. We work alongside your team to build that leverage — through automation that transfers, tooling your team can own, and a quality practice that compounds instead of decaying.',
                ].map((p, i) => (
                  <p key={i} style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#B5B5B5', margin: 0 }}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, flex: isMobile ? undefined : '0 0 440px', width: isMobile ? '100%' : undefined }}>
              {[
                { num: '85%',              desc: 'of defects that reach production were detectable earlier in the cycle, at a fraction of the cost to fix.', src: '— IBM Systems Sciences Institute' },
                { num: '26%',              desc: 'of organizations report test automation coverage declined over two years, even as release frequency increased.', src: '— World Quality Report' },
                { num: '100s',             desc: 'of automation suites built and maintained across client teams — none handed over as shelf-ware.', src: '— Technossus Engagements' },
                { num: 'Every engagement', desc: 'closes with your team owning the practice, not dependent on us to run it.', src: '— Technossus Internal' },
              ].map(s => (
                <div key={s.num} style={{ background: '#262626', border: '1px solid #343434', padding: isMobile ? 16 : 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <Stats value={s.num} label="" />
                  <p style={{ fontFamily: sans, fontSize: 13, lineHeight: 1.6, color: '#9B9B9B', margin: 0 }}>{s.desc}</p>
                  <p style={{ fontFamily: sans, fontSize: 11, color: '#5C5C5C', margin: 0 }}>{s.src}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE OFFERINGS ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="SERVICE OFFERINGS" />
          <h2 style={{ ...d2(), marginTop: 16 }}>
            Release confidence, compliance readiness, and{' '}
            <span style={{ color: red }}>AI quality built in from the start.</span>
          </h2>
          <div style={{ marginTop: 48 }}>
            <Accordion items={accordionItems} defaultActiveIndex={2} />
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section id="how" style={{ background: '#F5F5F5' }}>
        <div style={inner}>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 32 : 64, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: isMobile ? '100%' : 320 }}>
              <Tag label="HOW WE WORK" />
              <h2 style={{ ...d2(), marginTop: 16 }}>
                We don't build a testing practice{' '}
                <span style={{ color: red }}>your team can't maintain.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'Every engagement is designed around transfer, not dependency. Quality strategies, automation frameworks, and validation practices get built collaboratively, with the people who will own them involved from the first conversation. When delivery closes, the capability stays.',
                  'Over 90% of Technossus clients continue working with us after the first engagement. Many have for over a decade. That\'s not a retention metric — it\'s what happens when a practice gets built right the first time.',
                ].map((p, i) => (
                  <p key={i} style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#5C5C5C', margin: 0 }}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: cols2, gap: 20, minWidth: isMobile ? '100%' : 320 }}>
              {howCards.map(card => (
                <div key={card.title} style={{ background: '#fff', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ color: red, fontSize: 24 }}>◈</div>
                  <h3 style={{ fontFamily: sans, fontSize: 16, fontWeight: 700, color: '#1E1E1E', lineHeight: 1.4, margin: 0 }}>{card.title}</h3>
                  <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: '#5C5C5C', margin: 0 }}>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
              <p style={{ fontFamily: sans, fontSize: 15, color: '#9B9B9B', marginTop: 10 }}>If any of these describe where your team is right now, we should talk.</p>
            </div>
            <a href="#" style={{ fontFamily: sans, fontSize: 14, color: '#9B9B9B', textDecoration: 'underline', whiteSpace: 'nowrap', flexShrink: 0 }}>View All</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: cols3, gap: 20 }}>
            {proofCards.map((card, i) => (
              <Card key={i} mode="dark" type="insights" tags={card.tags} title={card.title} excerpt={card.excerpt} ctaLabel="See How We Work" />
            ))}
          </div>
        </div>
      </section>

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
              <div key={i} style={{ background: '#F5F5F5', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h3 style={{ fontFamily: sans, fontSize: 18, fontWeight: 700, color: '#1E1E1E', lineHeight: 1.4, margin: 0 }}>{card.heading}</h3>
                <div style={{ height: 2, background: red, width: 40 }} />
                <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.7, color: '#5C5C5C', margin: 0 }}>{card.body}</p>
              </div>
            ))}
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
