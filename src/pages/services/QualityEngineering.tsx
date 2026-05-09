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
    title: 'Independent Quality Assurance',
    subtitle: 'Validate end-to-end system behavior through functional, non-functional, API, and regression testing.',
    content: {
      type: 'detail',
      serviceLabel: 'INDEPENDENT QUALITY ASSURANCE',
      heading: 'Objective validation matters most when the team that built the system is also the one reviewing it.',
      body: [
        'Independent quality assurance brings a consistent, unbiased perspective across releases, environments, and system changes — surfacing what\'s easy to miss when engineers are close to the code.',
        'We work with your product and engineering teams to design test strategies around how you actually build: your stack, release cadence, and the business-critical paths where a failure would hurt most. Coverage gets built to hold across releases, not just pass the next one.',
      ],
      quote: 'Organizations with mature QE practices resolve production defects 6x faster and at 30x lower cost than teams catching the same issues post-release. — NIST',
    },
  },
  {
    title: 'Test Automation Engineering',
    subtitle: 'Integrate automated testing into CI/CD pipelines to enable continuous validation and surface risks early.',
    content: {
      type: 'detail',
      serviceLabel: 'TEST AUTOMATION ENGINEERING',
      heading: 'Quality built into the pipeline is quality that holds across every release.',
      body: [
        'We integrate automated testing and intelligent agents into CI/CD pipelines to enable continuous validation — so risks surface early in the release cycle, when they cost the least to fix.',
        'Automated functional, non-functional, API, and regression testing gets built to protect business-critical outcomes — not to maximize coverage numbers. The result is a test suite your team can maintain and trust.',
      ],
      quote: 'Defects found in production cost 100x more to fix than those found during design. Shift quality left — before the first commit. — IBM Research',
    },
  },
  {
    title: 'Governance, Compliance & Trust Assurance',
    subtitle: 'Ensure systems remain reliable, traceable, and compliant with WCAG, HIPAA, and audit requirements.',
    content: {
      type: 'detail',
      serviceLabel: 'GOVERNANCE, COMPLIANCE & TRUST ASSURANCE',
      heading: 'Compliance validation is most expensive when it\'s the last thing addressed before an audit.',
      body: [
        'We build traceability and governance into quality practices from the start — so the documentation exists when it\'s needed, not when it\'s requested. Whether your context is FDA regulated, SOC 2, HIPAA, or accessibility standards, quality artifacts are built to hold up to scrutiny.',
        'Systems remain reliable, traceable, and compliant at scale — with security, accessibility, and audit readiness embedded into how quality gets delivered.',
      ],
    },
  },
  {
    title: 'Model Validation, Security & Performance Engineering',
    subtitle: 'Validate model outputs, system security, and performance under real-world usage and load.',
    content: {
      type: 'detail',
      serviceLabel: 'MODEL VALIDATION, SECURITY & PERFORMANCE ENGINEERING',
      heading: 'AI models need quality engineering too — and it looks very different from traditional testing.',
      body: [
        'Model outputs aren\'t deterministic. Traditional test suites don\'t catch hallucinations, fairness drift, or latency degradation under production load. We build evaluation frameworks for AI systems that reflect the risks that matter: accuracy, safety, consistency, and behavior at scale.',
        'Performance testing is most valuable before the system is under pressure, not after users experience it. We design load, stress, and resilience tests that reflect real traffic patterns — so you know how the product behaves before the world does.',
      ],
    },
  },
  {
    title: 'Probabilistic Testing',
    subtitle: 'Test how systems behave under unpredictable inputs, edge cases, and changing conditions.',
    content: {
      type: 'detail',
      serviceLabel: 'PROBABILISTIC TESTING',
      heading: 'The failures that hurt most are rarely the ones you planned your test cases around.',
      body: [
        'Probabilistic testing validates how systems behave under unpredictable inputs, edge cases, and changing conditions — not just the predefined scenarios your team already thought of.',
        'From prompt regression suites to LLM evaluation pipelines and chaos engineering, we work alongside your team to build the infrastructure that gives confidence before deployment — and catches unexpected behavior after it.',
      ],
    },
  },
];

const howCards = [
  { title: 'Embed Quality into Delivery Pipelines', body: 'Quality is built into CI/CD through functional, API, regression, and non-functional testing — so validation happens continuously, not at the end of the sprint.' },
  { title: 'Focus on What Actually Matters',        body: 'Validation is prioritized using risk signals, usage patterns, and change impact — so effort goes toward what protects real business outcomes, not just coverage numbers.' },
  { title: 'Transfer Knowledge, Not Just Frameworks', body: 'Every engagement is designed to leave your team more capable — with automation frameworks, testing strategies, and quality practices they can own and evolve after we leave.' },
  { title: 'Standards That Hold',                   body: 'Quality benchmarks are set at the start and maintained through delivery. They don\'t flex when timelines get tight, and they transfer cleanly to your team.' },
];

const proofCards = [
  { tags: 'FINTECH • PLATFORM MODERNIZATION', title: 'Architecting a High-Frequency Trading Engine for Global Markets',         excerpt: 'We overhauled the legacy infrastructure of a Tier-1 financial institution, reducing latency by 40% using event-driven microservices and localized data centers.' },
  { tags: 'HEALTHCARE • QUALITY ENGINEERING', title: 'Rebuilding QA Confidence Across a Multi-Cloud Healthcare Platform',        excerpt: 'A regional health system was shipping monthly but losing trust with every release. We embedded QA from sprint zero and rebuilt their automation framework from the ground up.' },
  { tags: 'AI • RESPONSIBLE QE',              title: 'Evaluation Frameworks for LLM-Powered Clinical Decision Support',          excerpt: 'A diagnostics company needed confidence in their AI model before going live with hospital partners. We built a full evaluation pipeline covering accuracy, safety, and latency.' },
];

const painCards = [
  { heading: 'We keep finding issues too late',                                                body: 'Testing happens at the end. The build is already done, the release is already scheduled, and the defects showing up now should have been caught three sprints ago.' },
  { heading: 'Our automation suite exists. It just doesn\'t help.',                            body: 'The test infrastructure is there. Coverage numbers look reasonable on paper. But the suite is brittle, maintenance is constant, and half the team isn\'t sure what the tests are actually validating anymore.' },
  { heading: 'We found out about the compliance gap at the wrong moment.',                     body: 'The audit window opened or the submission deadline arrived and the validation documentation wasn\'t where it needed to be.' },
  { heading: 'We tested it thoroughly. So why doesn\'t it behave the way it did?',            body: 'The model passed every evaluation. Staging looked good. But in production, outputs drift, edge cases surface, and guardrails show gaps under real user behavior.' },
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
              <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase', color: '#ADADAD', margin: 0 }}>Move beyond testing. Build for quality.</p>
              <FadeUp>
                <h1 style={d1()}>
                  Engineer quality into{' '}
                  <span style={{ color: red }}>every release.</span>
                </h1>
              </FadeUp>
              <FadeUp delay={80}>
                <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: '#5C5C5C', margin: 0, maxWidth: 560 }}>
                  Traditional testing is nearing its end. We help teams fast-track modern quality engineering — embedding continuous validation into delivery pipelines so every release is reliable, secure, and ready for real-world use.
                </p>
              </FadeUp>
              <FadeUp delay={120}>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <Button variant="primary"   label="Talk to a Quality Expert" href="#" />
                  <Button variant="secondary" label="See How We Work"          href="#how" />
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
      <section style={{ borderTop: '1px solid #E8E8E8', background: '#fff' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: isMobile ? '24px 16px' : '32px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
          <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: '.12em', color: '#ADADAD', textTransform: 'uppercase' }}>Trusted By</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: isMobile ? 24 : 72, flexWrap: 'wrap' }}>
            {['TOYOTA FINANCIAL SERVICES', 'GE HealthCare', 'CHOICE ADMINISTRATORS', 'BIO THERANOSTICS'].map(name => (
              <span key={name} style={{ fontFamily: sans, fontSize: 13, fontWeight: 700, color: '#888', filter: 'grayscale(100%)', opacity: .65 }}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE SHIFT ── */}
      <section style={{ background: dark1, position: 'relative', overflow: 'hidden' }}>
        <CornerTL /><CornerBR />
        <div style={inner}>
          <Tag label="THE SHIFT" variant="light" />
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 48, alignItems: 'flex-start', marginTop: 32, flexWrap: 'wrap' }}>
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
                { num: '85%',  desc: 'of defects that reach production were detectable earlier in the cycle at a fraction of the cost to fix.', src: '— IBM Systems Sciences Institute' },
                { num: '6×',   desc: 'more expensive to fix a defect post-release than to catch it during development.', src: '— NIST' },
                { num: '30%',  desc: 'average release cycle reduction when QA is shifted left and automated pipelines replace manual regression.', src: '— Technossus Engagements' },
                { num: '90%+', desc: 'of Technossus clients continue working with us after the first engagement — many for over a decade.', src: '— Technossus Internal' },
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
                  'Bringing in outside expertise on quality creates a real tension for most teams — the fear that what gets built won\'t be understood, or that standards will slip the moment the engagement ends. Over 90% of Technossus clients continue working with us after the first engagement.',
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
    </>
  );
}
