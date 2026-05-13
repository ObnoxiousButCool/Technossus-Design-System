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
import imgHero from '../../../assets/Website_Images/Services/Data Intelligence.png';

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
    title: 'Conversational Analytics',
    subtitle: 'Speak to Your Data',
    content: {
      type: 'detail',
      serviceLabel: 'CONVERSATIONAL ANALYTICS',
      heading: 'Speak to Your Data',
      body: [
        'Your leadership team asks a question and gets an answer in seconds — from your own data, in plain language. No SQL. No ticket to the BI team. Your analysts stop fielding repetitive requests and focus on the strategic analysis that influences decisions. Contextual business stories, not just charts.',
        'Organizations implementing conversational analytics report 60–70% reduction in ad-hoc requests — freeing data teams for higher-value work.',
      ],
    },
  },
  {
    title: 'Data Engineering & Modernization',
    subtitle: 'Your Data Team on the Work That Matters',
    content: {
      type: 'detail',
      serviceLabel: 'DATA ENGINEERING & MODERNIZATION',
      heading: 'Your Data Team on the Work That Matters',
      body: [
        'Your data engineers spend 80% of their time on pipeline maintenance, ingestion troubleshooting, and ETL debugging. We help automate the plumbing — AI extracts semantic meaning from existing SQL and ETL logic, automates ingestion, and modernizes legacy pipelines — so your team focuses on architecture, modeling, and the analysis that creates value.',
        'AI-automated data engineering reduces pipeline development time by 40–60%, shifting your most expensive talent from maintenance to innovation.',
      ],
    },
  },
  {
    title: 'Data Governance & Compliance',
    subtitle: 'Trust Your Data Enough to Bet On It',
    content: {
      type: 'detail',
      serviceLabel: 'DATA GOVERNANCE & COMPLIANCE',
      heading: 'Trust Your Data Enough to Bet On It',
      body: [
        'Your governance program can\'t keep pace with your data. Classification is manual, lineage is incomplete, and quality rules are always six months behind. We help your team deploy governance that runs continuously — AI classifies data, enriches metadata with business context, and auto-applies governance rules — eliminating the heavy manual configuration that makes most governance programs fail.',
        'Automated governance closes the gap between data growth and compliance coverage — critical for regulated industries where audit readiness isn\'t optional.',
      ],
    },
  },
  {
    title: 'Predictive Intelligence',
    subtitle: "Know What's Coming, Not Just What Happened",
    content: {
      type: 'detail',
      serviceLabel: 'PREDICTIVE INTELLIGENCE',
      heading: 'Know What\'s Coming, Not Just What Happened',
      body: [
        'Shift your team from dashboards that explain last quarter to intelligence that predicts next quarter — and recommends what to do about it. Predictive models trained on your data, validated by your domain experts, and owned by your team: demand forecasting, churn prediction, revenue projection, risk scoring, anomaly detection.',
        'Companies using AI-driven forecasting outperform peers by 10–20% on key financial metrics. Predictive analytics has moved from advantage to necessity.',
      ],
    },
  },
  {
    title: 'Unstructured Data',
    subtitle: "Unlock the 80% You Haven't Been Able to Touch",
    content: {
      type: 'detail',
      serviceLabel: 'UNSTRUCTURED DATA',
      heading: 'Unlock the 80% You Haven\'t Been Able to Touch',
      body: [
        'The vast majority of your enterprise data sits in documents, emails, call transcripts, PDFs, and images — invisible to traditional analytics. We help your team unlock it: sentiment analysis on customer calls, automated contract analysis, medical record intelligence, claims processing your analysts can query and explore.',
        'What was cost-prohibitive is now achievable in weeks. The economics of unlocking unstructured data have changed by an order of magnitude.',
      ],
    },
  },
  {
    title: 'Data Platform Optimization',
    subtitle: 'Make the Investment You Already Made Actually Work',
    content: {
      type: 'detail',
      serviceLabel: 'DATA PLATFORM OPTIMIZATION',
      heading: 'Make the Investment You Already Made Actually Work',
      body: [
        'You bought the platform. You migrated the data. You hired the engineers. But your leadership still isn\'t getting the insights they were promised. We work with your team to bridge the gap — connecting your existing infrastructure to the decisions that matter, surfacing insights already hiding in your data, and turning your data platform from a cost center into a competitive advantage your leadership can see and measure.',
        'Most enterprises extract business decisions from less than 40% of their data platform\'s capacity. The rest sits idle — paid for, but not connected to outcomes.',
      ],
    },
  },
];

const howCards = [
  { title: 'Your data team stays in the driver\'s seat.', body: 'We augment your analysts\' and engineers\' capacity — we don\'t replace their expertise. They own the data strategy, the governance decisions, and the roadmap.' },
  { title: 'Knowledge transfers as we build.',            body: 'Every practice we introduce — from conversational analytics to automated governance — becomes your team\'s capability, not a dependency on us.' },
  { title: 'We work within your governance.',             body: 'Your compliance requirements, your data classification rules, your access controls. We don\'t ask you to bend your policies — we build within them.' },
  { title: 'Quality and accuracy are non-negotiable.',    body: 'Data intelligence is only valuable if it\'s trustworthy. Every model, every pipeline, every insight is validated against your domain expertise before it reaches a decision-maker.' },
];

const proofCards = [
  { tags: 'MDXHEALTH • DATA UNIFICATION',         title: 'From Fragmented Data to Predictive, Decision-Ready Insights',   excerpt: 'We unified MDxHealth\'s scattered data ecosystem to create a governed, single source of truth across clinical, operational, and financial workflows. Advanced predictive analytics enabled proactive decision-making, improving visibility into outcomes, risks, and performance trends.' },
  { tags: 'CAREPREDICTOR • HEALTHCARE ANALYTICS', title: 'CarePredictor Helps Turn Care Signals Into Earlier Action',      excerpt: 'Technossus supported CarePredictor in strengthening a healthcare platform that uses data-driven insights to help care teams identify risks sooner and respond with more confidence. The work focused on improving reliability, usability, and decision support so technology could better serve the people delivering care.' },
  { tags: 'JUPITER HOSPITAL • RECEIVABLES',       title: 'Improving Receivables Visibility & DSO Control',                excerpt: 'Jupiter Hospital lacked a consolidated, drill-down view of receivables and DSO across group, hospital, and account levels, limiting timely decision-making. Manual processes and absence of mapping to sales and account teams made it difficult to track performance against targets and take corrective actions.' },
];

const painCards = [
  { heading: 'You\'re sitting on years of data but your team still makes decisions on gut feel.',        body: 'Because getting to the insight takes too long. The data is there — the path to it isn\'t.' },
  { heading: 'Your governance program is always six months behind your data growth.',                    body: 'And your next audit is making you nervous. Manual classification and incomplete lineage compound every quarter.' },
  { heading: 'You have regulatory and compliance data in documents and PDFs that needs to be searchable and auditable.',  body: 'And right now it\'s not. Unstructured data is invisible to your analytics stack.' },
  { heading: 'Your data engineers spend more time fixing pipelines than building anything new.',         body: 'And the backlog of analytics requests keeps growing. Maintenance is consuming the capacity meant for innovation.' },
  { heading: 'Your BI team is buried in ad-hoc requests and your executives wait days for answers.',     body: 'Answers that should take seconds. Every question that requires a ticket slows the decision that depends on it.' },
  { heading: 'You invested in Snowflake or Databricks but your leadership still can\'t answer basic business questions.', body: 'Without a week-long analyst cycle. The platform is ready. The path from question to answer isn\'t.' },
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
              <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase', color: '#ADADAD', margin: 0 }}>Data Intelligence & Analytics</p>
              <FadeUp>
                <h1 style={d1()}>
                  Your data is talking.{' '}
                  <span style={{ color: red }}>You're just not hearing it fast enough.</span>
                </h1>
              </FadeUp>
              <FadeUp delay={80}>
                <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: '#5C5C5C', margin: 0, maxWidth: 560 }}>
                  Decisions still take weeks because data lives in silos, reports look backward, and by the time the analysis arrives, the market has moved. We work with your team to close the gap between data collected and decision made — from months to minutes.
                </p>
              </FadeUp>
              <FadeUp delay={120}>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <Button variant="primary"   label="Show us the problem"  href="#" />
                  <Button variant="secondary" label="See How We Work"      href="#" />
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
                The cost of analyzing your data collapsed.{' '}
                <span style={{ color: red }}>The cost of acting on it didn't.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'AI is what caused the collapse. Pipeline maintenance, report generation, SQL writing, metadata cataloging — the plumbing that once consumed 80% of your data team\'s time — can now be automated. The work that can\'t be automated is the work that matters most: which decision to make, when to make it, and how to make it trustworthy enough to stake the business on.',
                  'You may have already invested in a modern data platform. The real work now is in the distance between what your platform can do and what your people are equipped to ask of it. We work alongside your team to close that distance, transferring capability as we deliver.',
                ].map((p, i) => (
                  <p key={i} style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#B5B5B5', margin: 0 }}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, flex: isMobile ? undefined : '0 0 440px', width: isMobile ? '100%' : undefined }}>
              {[
                { num: '47%',    desc: 'Of CXOs say data readiness is their #1 challenge for AI initiatives.' },
                { num: '80/20',  desc: 'Data teams spend 80% on plumbing, 20% on insight — we flip that ratio.' },
                { num: '60–70%', desc: 'Reduction in ad-hoc requests when your team can query data directly.' },
                { num: 'Zero',   desc: 'Handoffs without knowledge transfer. Your team learns as we build.' },
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
            Better decisions, faster insight,{' '}
            <span style={{ color: red }}>stronger teams.</span>
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
                We don't build a platform and{' '}
                <span style={{ color: red }}>leave you dependent on it.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'We work embedded with your data team — transferring capability as we deliver. When the engagement ends, your analysts and engineers own the platform, understand the architecture, and can extend it without us.',
                  'We know that new data capabilities create as many questions as answers for your team. Our approach is designed to bring your people along, not leave them behind. That\'s how we\'ve maintained 90%+ client retention.',
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
            Sound <span style={{ color: red }}>Familiar?</span>
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
            <h3 style={{ fontFamily: serif, fontSize: isMobile ? 22 : 28, fontWeight: 600, color: '#fff', margin: 0 }}>Bring us your toughest data problem.</h3>
            <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#B5B5B5', maxWidth: 640, margin: 0 }}>
              We'll spend two days with your team — at no cost — understanding the challenge, evaluating the landscape, and coming back within a week with a concrete approach. No 50-page proposal. No six-month roadmap. A real solution to a real problem.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Button variant="primary"   label="Bring us your problem →" href="#" />
              <Button variant="secondary" label="Explore Solution"        href="#" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <CTABanner
        size="large"
        label="LET'S WORK ON IT TOGETHER"
        heading="Bring us your toughest data problem."
        body="No six-month proposal. No 200-slide deck. Working intelligence, built with your team — and your data team will be stronger for the experience."
        primaryCta="Bring us your problem →"
        secondaryCta="Explore Solution"
      />

      <div style={{ height: isMobile ? 48 : 80 }} />
    </>
  );
}
