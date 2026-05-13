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
import imgHero from '../../../assets/Website_Images/Services/Cloud consulting.png';

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
    title: 'Cloud FinOps & AI Token Optimization',
    subtitle: 'Your cloud bill has line items nobody on your team can explain.',
    content: {
      type: 'detail',
      serviceLabel: 'CLOUD FINOPS & AI TOKEN OPTIMIZATION',
      heading: 'Your cloud bill has line items nobody on your team can explain.',
      body: [
        'A resource provisioned for a project that pivoted. An environment spun up for testing that never came down. A model integration whose tokens kept flowing after the project moved on. We bring FinOps discipline and AI token governance together in a single practice — because the pattern is the same, and separating them means solving half the problem.',
        '29% of enterprise cloud spend is wasted annually — a rate held between 27–32% every year since 2019. We build the visibility and ownership model that changes that permanently.',
      ],
    },
  },
  {
    title: 'Multi-Cloud Resilience Engineering',
    subtitle: "One vendor's outage shouldn't be your outage.",
    content: {
      type: 'detail',
      serviceLabel: 'MULTI-CLOUD RESILIENCE ENGINEERING',
      heading: 'One vendor\'s outage shouldn\'t be your outage.',
      body: [
        'Most multi-cloud environments grew organically — a workload here, an acquisition there. The result is an estate that runs across clouds without being designed for it. We architect for portability, failover, and resilience across AWS, Azure, and GCP — so your infrastructure can absorb disruption at the provider level without passing it to your business.',
        '73% of organizations now run hybrid or multi-cloud environments. Most weren\'t designed for it from day one.',
      ],
    },
  },
  {
    title: 'Autonomous Cloud Operations & AI/MLOps',
    subtitle: "Your team didn't sign up to babysit infrastructure.",
    content: {
      type: 'detail',
      serviceLabel: 'AUTONOMOUS CLOUD OPERATIONS & AI/MLOPS',
      heading: 'Your team didn\'t sign up to babysit infrastructure.',
      body: [
        'Monitoring alerts that fire at 2am. Scaling decisions made manually. MLOps pipelines that require human intervention at every stage. We implement self-healing infrastructure, intelligent observability, and AI-assisted operations so your engineers focus on architecture and business logic — not keeping the lights on.',
        'AIOps and MLOps convergence is now the primary DevOps investment priority for enterprises scaling AI workloads.',
      ],
    },
  },
  {
    title: 'Cloud-Hosted AI Governance & Compliance',
    subtitle: 'Govern the models. Own the outcomes.',
    content: {
      type: 'detail',
      serviceLabel: 'CLOUD-HOSTED AI GOVERNANCE & COMPLIANCE',
      heading: 'Govern the models. Own the outcomes.',
      body: [
        'Regulatory pressure on AI is accelerating — the EU AI Act, state-level legislation, and sector-specific requirements are arriving faster than most governance frameworks were designed to absorb. We implement model lifecycle controls, audit trails, policy enforcement, and compliance architecture directly into your cloud environment.',
        '47% of large enterprises now have a dedicated AI governance team or leader — up sharply as regulatory requirements moved from horizon to reality.',
      ],
    },
  },
  {
    title: 'Cloud Security & Compliance for AI',
    subtitle: 'Be the one in the room who already knows the answer.',
    content: {
      type: 'detail',
      serviceLabel: 'CLOUD SECURITY & COMPLIANCE FOR AI',
      heading: 'Be the one in the room who already knows the answer.',
      body: [
        'Security posture in AI-era cloud environments isn\'t just about perimeter controls. It\'s about zero-trust architecture, DevSecOps pipelines that enforce policy at every deployment, and AI-specific security patterns for inference endpoints and model access. Defensible by design, not by documentation.',
        'Cloud security and AI-specific compliance controls rank as the top buyer concern in enterprise cloud engagements — above cost optimization and above performance.',
      ],
    },
  },
];

const howCards = [
  { title: 'Your team stays in the driver\'s seat.',        body: 'We work alongside your engineers — not instead of them. Architecture decisions, tooling choices, and operational patterns are built with your team\'s input, not handed down.' },
  { title: 'Knowledge transfers as we build.',              body: 'Every session is a working session. Every optimization is explained. Your engineers leave each phase understanding what was built and why.' },
  { title: 'We work within your existing cloud governance.', body: 'We assess what\'s already in place, strengthen it, and build on it — so your organization\'s processes stay intact while your capability grows.' },
  { title: 'The optimization holds after we leave.',        body: 'We build the hygiene practices, not just the outcome. FinOps discipline, cost attribution, and governance patterns are operational habits your team carries forward.' },
];

const proofCards = [
  { tags: 'HEALTHCARE • CLINICAL TRIALS',      title: 'Cloud Platform Helps Save Millions in Clinical Trials',   excerpt: 'A cloud-based clinical trials system enabled real-time monitoring and early risk detection. With $70M+ trial costs and 80%+ failure rates, early intervention through cloud-enabled visibility helped avoid significant losses.' },
  { tags: 'MARKETING • ANALYTICS & VOICE',     title: 'Cloud-Based Analytics and Voice-Driven Brand Insights',   excerpt: 'A cloud-based data visualization and voice-enabled experience was prototyped to help marketers access brand performance insights faster and more intuitively — reducing analysis time from days to minutes.' },
  { tags: 'HEALTHCARE • ARCHITECTURE DESIGN',  title: 'Proof of Concept Minimizes Project Risk',                 excerpt: 'A cloud-based reference architecture was designed and validated to reduce risk in a multi-million-dollar healthcare digital transformation initiative — before a single production line was written.' },
];

const painCards = [
  { heading: '"We budgeted for 20% cloud growth. The bill came in at 47%."',                    body: 'AI workloads don\'t scale linearly, and most budgeting tools weren\'t built for inference cost volatility. Visibility comes before governance.' },
  { heading: '"We have 400 microservices. Three people understand the full picture."',           body: 'Distributed architecture distributes knowledge risk too. Modernization without documentation and observability creates a different kind of fragility.' },
  { heading: '"We\'re on three clouds. None of them talk to each other the way we need."',      body: 'Multi-cloud through acquisition or organic growth rarely produces a coherent operating model. Resilience requires architecture, not just presence.' },
  { heading: '"Our ML models are deployed. We have no idea what they\'re costing us to run."', body: 'Production AI without cost attribution is a liability that compounds with every model update. Token governance is an operational discipline, not a one-time audit.' },
];

export default function CloudModernization() {
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
            { label: 'Cloud & Product Modernization', active: true },
          ]} />
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? 32 : 60, marginTop: 40 }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
              <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase', color: '#ADADAD', margin: 0 }}>CLOUD CONSULTING AND SUPPORT</p>
              <FadeUp>
                <h1 style={d1()}>
                  The cloud promised to simplify infrastructure and contain costs.{' '}
                  <span style={{ color: red }}>Your last invoice told a different story.</span>
                </h1>
              </FadeUp>
              <FadeUp delay={80}>
                <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: '#5C5C5C', margin: 0, maxWidth: 560 }}>
                  Complexity crept in quietly — through architectural decisions that made sense at the time, containerized environments that multiplied infrastructure overhead, and AI workloads nobody fully priced. We work alongside your team to untangle what's there, govern what's coming, and build infrastructure that actually earns its cost.
                </p>
              </FadeUp>
              <FadeUp delay={120}>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <Button variant="primary"   label="Show us the Bill"  href="#" />
                  <Button variant="secondary" label="See How We Work"   href="#" />
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
            {['CEFALY', 'ADAPTHEALTH', 'GLIDEWELL LABS', 'FIRST AMERICAN', 'WORD AND BROWN'].map(name => (
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
                Your engineers followed every best practice. They didn't sign up for what it costs to maintain, scale{' '}
                <span style={{ color: red }}>and keep it running.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'The move from monolithic systems to microservices and containerized architectures wasn\'t a mistake — it was the right call, endorsed by every major platform and best-practice framework. What nobody fully modeled was the operational weight that came with it. More services meant more infrastructure to provision, monitor, patch, and govern. Complexity accumulated quietly, one well-intentioned architectural decision at a time.',
                  'AI has added an entirely new layer to an environment already carrying more than it showed. Inference endpoints, vector databases, GPU compute, and token consumption don\'t behave like traditional workloads. We work alongside your team to bring visibility to what\'s running, governance to what\'s being added, and architecture that can carry both — without starting over.',
                ].map((p, i) => (
                  <p key={i} style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#B5B5B5', margin: 0 }}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, flex: isMobile ? undefined : '0 0 440px', width: isMobile ? '100%' : undefined }}>
              {[
                { num: '29%',    desc: 'of enterprise cloud spend is wasted annually — a rate held between 27–32% every year since 2019, ticked up in 2026 as AI workloads added new cost complexity.' },
                { num: '73%',    desc: 'of organizations run hybrid or multi-cloud — most weren\'t architecturally designed for it from the start.' },
                { num: '84%',    desc: 'of enterprises report AI costs cutting gross margins — only 15% can forecast those costs within ±10%.' },
                { num: 'Zero',   desc: 'Handoffs without knowledge transfer. Your team understands what we build before we leave.' },
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
            Cloud platforms that stay reliable, controlled, and cost-efficient —{' '}
            <span style={{ color: red }}>while enabling secure AI adoption.</span>
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
                We don't clean up your cloud and leave your team{' '}
                <span style={{ color: red }}>no smarter than when we arrived.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'The pattern is familiar: a consultant reduces the bill, optimizes the architecture, hands off runbooks — and six months later the costs are back. Not because the work was wrong. Because the capability didn\'t transfer. We build embedded into your team, not alongside it. Every FinOps practice, every governance layer, every automation — your engineers are in the room, learning as it happens.',
                  'We\'ve maintained a 90%+ client retention rate not because engagements are sticky, but because the outcomes are. More than half our cloud engagements extend because clients want to go deeper, not because they have to.',
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
              <p style={{ fontFamily: sans, fontSize: 15, color: '#9B9B9B', marginTop: 10 }}>Real cloud outcomes from organizations that needed control as much as capability.</p>
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
            If any of these feel recent, we{' '}
            <span style={{ color: red }}>should talk.</span>
          </h1>
          <p style={{ fontFamily: sans, fontSize: 15, color: '#5C5C5C', marginTop: 12 }}>These aren't edge cases. They're the conversations we have most often.</p>
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
            <h3 style={{ fontFamily: serif, fontSize: isMobile ? 22 : 28, fontWeight: 600, color: '#fff', margin: 0 }}>Bring us your toughest cloud problem.</h3>
            <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#B5B5B5', maxWidth: 640, margin: 0 }}>
              We'll invest two days understanding your environment — your architecture, your cost profile, your team's current capabilities — and come back within a week with a concrete approach. No proposal theater. No 200-slide assessment deck. Just clarity on what's actually happening and what to do about it.
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
