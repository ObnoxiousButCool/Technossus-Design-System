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
    title: 'Continuous Quality & QA Ops Engineering',
    subtitle: 'Quality that lives in the pipeline, from design to release.',
    content: {
      type: 'detail',
      serviceLabel: 'CONTINUOUS QUALITY & QA OPS ENGINEERING',
      heading: 'Build quality into every commit, not just the last one before release.',
      body: [
        'Continuous quality means your pipeline catches problems the moment they appear — not three sprints later when the cost to fix them has compounded. We work with your team to embed quality gates, test automation, and observability throughout the delivery lifecycle.',
        'From CI/CD integration to release readiness dashboards, every touchpoint is designed to give engineers real signal, not noise. The result is a pipeline that moves fast and holds up.',
      ],
      quote: 'Defects found in production cost 100x more to fix than those found during design. Shift quality left — before the first commit. — IBM Research',
    },
  },
  {
    title: 'Performance, Resilience & Scalability',
    subtitle: 'Ship version one. Then build the product it needs to become.',
    content: {
      type: 'detail',
      serviceLabel: 'PERFORMANCE, RESILIENCE & SCALABILITY',
      heading: 'Ship version one. Then build the product it needs to become.',
      body: [
        'Performance testing is most valuable when it\'s run before the system is under pressure, not after users are experiencing it. We design load, stress, and resilience tests that reflect real traffic patterns and failure modes — so you know how the product behaves before the world does.',
        'We help teams establish performance baselines, define SLOs that matter, and automate the tests that protect them across every release.',
      ],
    },
  },
  {
    title: 'Quality Engineering & Independent Assurance',
    subtitle: 'Your release shouldn\'t feel like a bet every time.',
    content: {
      type: 'detail',
      serviceLabel: 'QUALITY ENGINEERING & INDEPENDENT ASSURANCE',
      heading: 'Find out if the idea works before you bet the quarter on it.',
      body: [
        'Objective validation matters most when the team that built the system is also the one reviewing it. Independent quality assurance brings a consistent, unbiased perspective across releases, environments, and system changes — surfacing what\'s easy to miss when engineers are close to the code.',
        'We work with your product and engineering teams to design test strategies around how you actually build: your stack, release cadence, and the business-critical paths where a failure would hurt most. Coverage gets built to hold across releases, not just pass the next one.',
      ],
      quote: 'Organizations with mature QE practices resolve production defects 6x faster and at 30x lower cost than teams catching the same issues post-release. — NIST',
    },
  },
  {
    title: 'Governance, Compliance & Trust Assurance',
    subtitle: 'The product works. Now make it work like it was built today.',
    content: {
      type: 'detail',
      serviceLabel: 'GOVERNANCE, COMPLIANCE & TRUST ASSURANCE',
      heading: 'The product works. Now make sure it works the way it was meant to.',
      body: [
        'Compliance validation is most expensive when it\'s the last thing addressed before a submission, audit, or release. We build traceability and governance into quality practices from the start — so the documentation exists when it\'s needed, not when it\'s requested.',
        'Whether your context is FDA regulated, SOC 2, HIPAA, or internal standards, we help teams build quality artifacts that hold up to scrutiny and transfer to whoever needs them next.',
      ],
    },
  },
  {
    title: 'AI-first & Responsible Quality Engineering',
    subtitle: 'Keep the business logic. Lose the technical debt holding it hostage.',
    content: {
      type: 'detail',
      serviceLabel: 'AI-FIRST & RESPONSIBLE QUALITY ENGINEERING',
      heading: 'AI models need quality engineering too — it just looks different.',
      body: [
        'Model outputs aren\'t deterministic. Traditional test suites don\'t catch hallucinations, fairness drift, or latency degradation under production load. We build evaluation frameworks for AI systems that reflect the risks that matter: accuracy, safety, consistency, and behavior at scale.',
        'From prompt regression suites to LLM evaluation pipelines, we work alongside your AI team to build the infrastructure that gives confidence before deployment — and catches drift after it.',
      ],
    },
  },
];

const howCards = [
  { title: 'Embedded From Day One',  body: 'Quality strategy gets shaped alongside engineering and product, before the first test case is written.' },
  { title: 'Capability Transfers',   body: 'Frameworks, tooling, and methodology are documented and handed over as working knowledge, not as artifacts nobody can use.' },
  { title: 'Alignment Before Delivery', body: 'We work within what serves the product and business, and get alignment on what needs to change before it becomes a problem.' },
  { title: 'Standards That Hold',    body: 'Quality benchmarks are set at the start and maintained through delivery. They don\'t flex when timelines get tight.' },
];

const proofCards = [
  { tags: 'FINTECH • PLATFORM MODERNIZATION', title: 'Architecting a High-Frequency Trading Engine for Global Markets', excerpt: 'We overhauled the legacy infrastructure of a Tier-1 financial institution, reducing latency by 40% using event-driven microservices and localized data centers.' },
  { tags: 'HEALTHCARE • QUALITY ENGINEERING', title: 'Rebuilding QA Confidence Across a Multi-Cloud Healthcare Platform', excerpt: 'A regional health system was shipping monthly but losing trust with every release. We embedded QA from sprint zero and rebuilt their automation framework from the ground up.' },
  { tags: 'AI • RESPONSIBLE QE',              title: 'Evaluation Frameworks for LLM-Powered Clinical Decision Support', excerpt: 'A diagnostics company needed confidence in their AI model before going live with hospital partners. We built a full evaluation pipeline covering accuracy, safety, and latency.' },
];

const painCards = [
  { heading: 'We keep finding issues too late',          body: 'Testing happens at the end. The build is already done, the release is already scheduled, and the defects showing up now should have been caught three sprints ago. Every cycle ends the same way — scrambling, slipping, or shipping something you\'re not fully confident in.' },
  { heading: 'Our automation suite exists. It just doesn\'t help.', body: 'The test infrastructure is there. Coverage numbers look reasonable on paper. But the suite is brittle, maintenance is constant, and half the team isn\'t sure what the tests are actually validating anymore. Automation that was supposed to create confidence has become its own source of risk.' },
  { heading: 'We found out about the compliance gap at the wrong moment.', body: 'The audit window opened or the submission deadline arrived and the validation documentation wasn\'t where it needed to be. Requirements that should have been mapped at the start got picked up midway through, or not at all.' },
  { heading: 'We tested it thoroughly. So why doesn\'t it behave the way it did?', body: 'The model passed every evaluation. Staging looked good. But in production, outputs drift, edge cases surface, and guardrails show gaps under real user behavior. Something between validation and production isn\'t adding up — and it\'s not always obvious where to look.' },
];

export default function QualityEngineering() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 80px 80px' }}>
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Service Offerings', href: '/services' },
            { label: 'Quality Engineering and Automation', active: true },
          ]} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 60, marginTop: 40 }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
              <D1 style={{ color: '#1E1E1E' }}>
                You know what's broken. The problem is{' '}
                <span style={{ color: red }}>what you don't know yet.</span>
              </D1>
              <p style={{ fontFamily: sans, fontSize: 16, lineHeight: 1.7, color: '#5C5C5C', margin: 0, maxWidth: 560 }}>
                Most quality programs are built to catch what already went wrong. We work with your team to build the kind of intelligence that finds problems before your users do and the kind of automation that holds up long after we're gone.
              </p>
              <div style={{ display: 'flex', gap: 16 }}>
                <Button variant="primary"   label="Show us the problem" href="#" />
                <Button variant="secondary" label="See How We Work"     href="#" />
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
            {['TOYOTA FINANCIAL SERVICES', 'GE HealthCare', 'CHOICE ADMINISTRATORS', 'BIO THERANOSTICS'].map(name => (
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
                Quality doesn't start at the end of the build. That's just where{' '}
                <span style={{ color: red }}>quality failures get identified.</span>
              </D2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'Testing has always been the part of the delivery cycle that absorbs everyone else\'s delays and still gets blamed when something ships broken. Engineers are moving faster than ever, and the gap between release velocity and quality confidence is widening, not closing.',
                  'AI is changing the economics of that gap. Not by replacing QA engineers, but by giving them the kind of leverage that actually matches the pace they\'re being asked to work at. We work alongside your team to build that leverage — through automation that transfers, tooling your team can own, and a quality practice that compounds instead of decaying.',
                ].map((p, i) => (
                  <p key={i} style={{ fontFamily: sans, fontSize: 15, lineHeight: 1.7, color: '#B5B5B5', margin: 0 }}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, flex: '0 0 440px' }}>
              {[
                { num: '85%',  desc: 'of defects that reach production were detectable earlier in the cycle at a fraction of the cost to fix.', src: '— IBM Systems Sciences Institute' },
                { num: '6×',   desc: 'more expensive to fix a defect post-release than to catch it during development.', src: '— NIST' },
                { num: '30%',  desc: 'average release cycle reduction when QA is shifted left and automated pipelines replace manual regression.', src: '— Technossus Engagements' },
                { num: '90%+', desc: 'of Technossus clients continue working with us after the first engagement — many for over a decade.', src: '— Technossus Internal' },
              ].map(s => (
                <div key={s.num} style={{ background: '#262626', border: '1px solid #343434', padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <Stats value={s.num} label="" />
                  <p style={{ fontFamily: sans, fontSize: 13, lineHeight: 1.6, color: '#9B9B9B', margin: 0 }}>{s.desc}</p>
                  <p style={{ fontFamily: sans, fontSize: 11, color: '#5C5C5C', margin: 0 }}>{s.src}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 80 }} />

      {/* ── SERVICE OFFERINGS (Accordion) ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="SERVICE OFFERINGS" />
          <D2 style={{ color: '#1E1E1E', marginTop: 16 }}>
            Release confidence, compliance readiness, and{' '}
            <span style={{ color: red }}>AI quality built in from the start.</span>
          </D2>
          <div style={{ marginTop: 48 }}>
            <Accordion items={accordionItems} defaultActiveIndex={2} />
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
                We don't build a testing practice{' '}
                <span style={{ color: red }}>your team can't maintain.</span>
              </D2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'Every engagement is designed around transfer, not dependency. Quality strategies, automation frameworks, and validation practices get built collaboratively, with the people who will own them involved from the first conversation. When delivery closes, the capability stays.',
                  'Bringing in outside expertise on quality creates a real tension for most teams — the fear that what gets built won\'t be understood, or that standards will slip the moment the engagement ends. Over 90% of Technossus clients continue working with us after the first engagement. Many have for over a decade. That\'s not a retention metric, it\'s what happens when a practice gets built right the first time.',
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
                  <a href="#" style={{ fontFamily: sans, fontSize: 14, fontWeight: 700, color: red, textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 8 }}>See How We Work →</a>
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
            If any of these sound like your last project retrospective, we{' '}
            <span style={{ color: red }}>should talk.</span>
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
