import React from 'react';
import { Tag }        from '../../../components/Tag';
import { Breadcrumb } from '../../../components/Breadcrumb';
import { Accordion }  from '../../../components/Accordion';
import { CTABanner }  from '../../../components/CTABanner';
import { Button }     from '../../../components/Button';
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

const whatWeDoItems: AccordionItem[] = [
  {
    title: 'Develop Platforms That Scale With Demand',
    subtitle: 'Modernize the foundation so growth doesn\'t make the product harder to run.',
    content: {
      type: 'detail',
      serviceLabel: 'PLATFORMS THAT SCALE WITH DEMAND',
      heading: 'As SaaS products grow, the platform beneath them starts carrying more — and showing the strain.',
      body: [
        'We help strengthen the foundation so teams can support demand without constant rework, fragile fixes, or slowing product momentum. More users, more workflows, more integrations, and more release pressure all land on the platform — and it needs to hold.',
        'Modernizing the foundation is how SaaS companies protect the product they\'ve already built while creating room for what comes next.',
      ],
    },
  },
  {
    title: 'Architect Impactful Customer Journeys',
    subtitle: 'Make onboarding, support, account access, and self-service feel simple and connected.',
    content: {
      type: 'detail',
      serviceLabel: 'IMPACTFUL CUSTOMER JOURNEYS',
      heading: 'Your customers experience your company through every digital touchpoint — not just the product.',
      body: [
        'We help design portals, onboarding flows, support journeys, configuration experiences, and customer-facing tools that feel clear, useful, and easier to navigate. Before, during, and after product use — every moment matters.',
        '61% of customers prefer self-service for simple issues. When those moments feel disconnected or difficult, the product may be strong, but the experience still feels incomplete.',
      ],
    },
  },
  {
    title: 'Make Every Release Feel Safer',
    subtitle: 'Strengthen testing, API management, and release workflows so speed doesn\'t create avoidable risk.',
    content: {
      type: 'detail',
      serviceLabel: 'SAFER RELEASES AT SPEED',
      heading: 'As the customer base grows, every release carries more consequence.',
      body: [
        'We help improve test coverage, API discipline, release workflows, and quality practices so teams can keep shipping quickly while reducing instability, rework, and production risk.',
        'The goal isn\'t slowing down — it\'s building the confidence that lets teams move faster without holding their breath every time a release goes out.',
      ],
    },
  },
  {
    title: 'Connect What Customers Cannot See',
    subtitle: 'Bring product, support, billing, partner, and operational systems into a smoother working flow.',
    content: {
      type: 'detail',
      serviceLabel: 'CONNECTED OPERATIONS',
      heading: 'Customers don\'t see the systems behind the product, but they feel every disconnect.',
      body: [
        'We help connect the tools and workflows behind product delivery, support, billing, partner operations, and customer management so the experience feels smoother outside and easier to run inside.',
        '55% of customers say it often feels like they\'re communicating with separate departments instead of one company. The systems behind the product are the reason that feeling exists — and the place where it gets fixed.',
      ],
    },
  },
  {
    title: 'Make Revenue Signals Easier To Act Upon',
    subtitle: 'Give teams clearer visibility into billing, collections, usage, and revenue movement.',
    content: {
      type: 'detail',
      serviceLabel: 'REVENUE SIGNAL CLARITY',
      heading: 'Growth can make revenue operations harder to control when data lives in too many places.',
      body: [
        'When subscriptions, collections, renewals, invoices, and usage data sit across different places, it becomes harder to see what\'s happening and act on it quickly. We help simplify revenue workflows and create clearer visibility so leaders can track what\'s happening and teams can act faster.',
        'Revenue clarity is a product problem as much as a finance problem — and it gets worse the faster a SaaS business grows.',
      ],
    },
  },
];

const solutionItems: AccordionItem[] = [
  {
    title: 'Humanized Digital Product Experience',
    subtitle: 'Redesign the experience around the user\'s real context — especially where stress, urgency, or friction affects product use.',
    content: {
      type: 'detail',
      serviceLabel: 'HUMANIZED DIGITAL PRODUCT EXPERIENCE',
      heading: 'A technically strong product can still fail to earn adoption if the experience doesn\'t match how users actually work.',
      body: [
        'We help redesign the experience around the user\'s real context — especially true where stress, urgency, accessibility, or low tolerance for friction affects product use.',
        'Impact: Reduced onboarding friction • Simplified complex user journeys • Improved product trust and usability • More intuitive self-service experiences • Products that feel like useful extensions of the user\'s workflow, not tools they have to fight.',
      ],
    },
  },
  {
    title: 'Mission-Critical Product Reliability',
    subtitle: 'Resilient architectures that continue performing under pressure — offline-first, zero-drop, reliable under real conditions.',
    content: {
      type: 'detail',
      serviceLabel: 'MISSION-CRITICAL RELIABILITY',
      heading: 'When platforms operate in high-stakes environments, downtime is not acceptable.',
      body: [
        'We help build resilient architectures that continue performing under pressure — supporting offline-first and zero-drop system behavior, reducing dependency on fragile connectivity, and strengthening background processing and telemetry flows.',
        'Impact: Improved reliability across live environments • Supported offline-first system behavior • Strengthened background processing • Helped digital products perform consistently in real-world conditions.',
      ],
    },
  },
  {
    title: 'Computer Vision Intelligence Systems',
    subtitle: 'Turn images, video feeds, and edge-device inputs into actionable intelligence at speed.',
    content: {
      type: 'detail',
      serviceLabel: 'COMPUTER VISION INTELLIGENCE',
      heading: 'When teams need to identify, classify, detect, or act on visual information faster than manual review allows.',
      body: [
        'We build computer vision systems that turn images, video feeds, and edge-device inputs into actionable intelligence. From live video ingestion to license plate recognition to automated matching against watchlist databases — detection at 10ms precision for faster field response.',
        'Impact: Reduced manual monitoring effort • Accelerated detection and response times • Real-time alerting from live visual inputs • Improved accuracy in high-volume review environments.',
      ],
    },
  },
  {
    title: 'Workflow Hyper-Automation Platform',
    subtitle: 'Automate the workflow from intake to decision to system update — clearing backlogs and reducing manual processing.',
    content: {
      type: 'detail',
      serviceLabel: 'WORKFLOW HYPER-AUTOMATION',
      heading: 'When teams are buried under repetitive reports, approvals, validations, and manual queues.',
      body: [
        'We help automate the workflow from intake to decision to system update. Historical backlogs cleared in a single 24-hour cycle. 24/7 non-attended processing. 1000% improvement in operational efficiency for one client\'s traffic offence reporting workflow.',
        'Impact: Reduced manual processing time • Cleared backlogs faster • Improved rule-based decisioning • Created repeatable automation patterns reusable across departments.',
      ],
    },
  },
  {
    title: 'Connected Operations Mobile Platform',
    subtitle: 'Mobile-first platforms that standardize workflows for distributed teams across locations, roles, and operating environments.',
    content: {
      type: 'detail',
      serviceLabel: 'CONNECTED OPERATIONS MOBILE',
      heading: 'When distributed teams need one consistent way to manage work at scale.',
      body: [
        'We build mobile-first platforms that standardize workflows and make operations easier to run across thousands of users, distributed locations, and varying operating environments.',
        'Impact: Moved teams from manual to mobile workflows • Improved visibility across distributed locations • Enabled faster field updates and reporting • Reduced operational inconsistency • Scalable deployment across thousands of users.',
      ],
    },
  },
];

const featuredCards = [
  { tags: 'HEALTHTECH • PRODUCT REDESIGN',    title: 'Connected Product Experience Improves Adoption — App Rating 1.4 to 3.4', excerpt: 'A migraine treatment companion app was redesigned around real user conditions. Onboarding steps reduced from 13 to 7. Bluetooth reliability re-engineered. App rating improved from 1.4 to 3.4, shifting from a buggy remote to a trusted companion.' },
  { tags: 'SECURITY • COMPUTER VISION',       title: 'Real-Time Visual Intelligence Enables 10ms Plate Recognition',            excerpt: 'An edge-to-alert computer vision pipeline ingested live video from cameras, drones, and moving patrol cars — detecting vehicles, extracting license plate data via OCR, and matching against watchlist databases in near real time.' },
  { tags: 'GOVTECH • WORKFLOW AUTOMATION',    title: 'Workflow Automation Clears 100% of Operational Backlog in 24 Hours',      excerpt: 'A high-volume traffic offence reporting workflow was automated from email intake to PDF review, validation, API lookups, and system submission — clearing the entire historical backlog in a single 24-hour cycle with 1000% efficiency improvement.' },
];

const successCards = [
  { tags: 'SAAS • PLATFORM RELIABILITY',      title: 'Mission-Critical Platform Achieves Zero-Drop Performance Under Load',    excerpt: 'A platform operating in high-stakes environments needed offline-first and zero-drop system behavior. A re-engineered resilient architecture eliminated connectivity dependency and improved reliability across all live environments.' },
  { tags: 'ENTERPRISE • MOBILE OPERATIONS',   title: 'Connected Operations Platform Deployed Across Thousands of Field Users',  excerpt: 'A distributed operations team needed one consistent way to manage work across locations. A mobile-first platform standardized workflows, improved visibility, and enabled faster field reporting at scale.' },
  { tags: 'HITECH • RELEASE CONFIDENCE',      title: 'Test Coverage and API Discipline Reduce Production Incidents by 60%',     excerpt: 'Improved test coverage, API management, and release workflow discipline reduced production incidents significantly — giving the engineering team confidence to ship faster without the brittleness that had been slowing momentum.' },
];

export default function HiTechSaaS() {
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
            { label: 'Industries', href: '/industries' },
            { label: 'HiTech & SaaS', active: true },
          ]} />
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? 32 : 60, marginTop: 40 }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
              <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase', color: '#ADADAD', margin: 0 }}>HiTech & SaaS</p>
              <h1 style={d1()}>
                Your product is growing. Are the systems behind it{' '}
                <span style={{ color: red }}>keeping up?</span>
              </h1>
              <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: '#5C5C5C', margin: 0, maxWidth: 560 }}>
                Growth should make a SaaS business stronger, not harder to run. But as customers, products, integrations, and markets expand, the systems behind the business often start to strain. Technossus helps HiTech and SaaS companies strengthen those systems so product, revenue, support, and customer experiences can scale with confidence.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Button variant="primary"   label="Explore HiTech & SaaS Solutions" href="#" />
                <Button variant="secondary" label="Talk to Our Team"                 href="#" />
              </div>
            </div>
            {!isMobile && (
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', minHeight: isTablet ? 300 : 460 }}>
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
          <Tag label="THE SHIFT" />
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 48, alignItems: 'flex-start', marginTop: 32, flexWrap: 'wrap' }}>
            <div style={{ flex: isMobile ? undefined : '0 0 380px', minWidth: isMobile ? '100%' : 280, width: isMobile ? '100%' : undefined }}>
              <h2 style={d2('#fff')}>
                Growth is the goal. But in SaaS, growth also exposes what your product{' '}
                <span style={{ color: red }}>was never meant to carry alone.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
                {[
                  'Your customers do not see your internal systems. They see the experience. They see how quickly they can get onboarded. How easily they can find support. How smoothly billing works. How reliably your product performs after every release.',
                  'That is why the strongest SaaS companies do not only invest in the product surface. They strengthen the operating layer behind it — the workflows, data, integrations, and platforms that keep the customer experience moving.',
                ].map((p, i) => (
                  <p key={i} style={{ fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#B5B5B5', margin: 0 }}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20, width: isMobile ? '100%' : undefined }}>
              <div style={{ display: 'grid', gridTemplateColumns: cols2, gap: 20 }}>
                {[
                  { title: 'Platform Strain',    body: 'What worked for early growth may not support what comes next. As usage rises, older architecture, manual operations, and disconnected systems slow delivery and weaken reliability.' },
                  { title: 'Release Risk',        body: 'As more customers depend on the product, every release carries more weight. Without stronger testing and release workflows, teams spend more time managing risk than building momentum.' },
                  { title: 'Digital Front Door', body: 'Customers expect onboarding, support, billing, and account access to feel simple. When these moments feel disconnected, the product may be strong — but the experience still feels incomplete.' },
                  { title: 'Scattered Signals',  body: 'Usage data, support issues, billing signals, and customer feedback sit in different places — making it harder to see what\'s working, what\'s breaking, and what needs attention next.' },
                ].map(card => (
                  <div key={card.title} style={{ background: '#262626', border: '1px solid #343434', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <h3 style={{ fontFamily: sans, fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.4, margin: 0 }}>{card.title}</h3>
                    <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: '#9B9B9B', margin: 0 }}>{card.body}</p>
                  </div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 1, background: '#343434' }}>
                {[
                  { num: '79%', desc: 'of customers expect consistent interactions across departments' },
                  { num: '61%', desc: 'of customers prefer to use self-service for simple issues' },
                  { num: '55%', desc: 'of customers say it often feels like they\'re communicating with separate departments' },
                  { num: '56%', desc: 'of customers say they often have to repeat or re-explain information to different representatives' },
                ].map((s, i) => (
                  <div key={i} style={{ background: dark1, padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{ fontFamily: serif, fontSize: isMobile ? 20 : 26, fontWeight: 600, color: red, lineHeight: 1.1 }}>{s.num}</div>
                    <p style={{ fontFamily: sans, fontSize: 12, lineHeight: 1.5, color: '#9B9B9B', margin: 0 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: isMobile ? 48 : 80 }} />

      {/* ── WHAT WE DO ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="WHAT WE DO" />
          <h2 style={{ ...d2(), marginTop: 16 }}>
            Strengthen the systems behind the product so growth feels{' '}
            <span style={{ color: red }}>smooth, not strained.</span>
          </h2>
          <p style={{ fontFamily: sans, fontSize: 16, color: '#5C5C5C', marginTop: 12, maxWidth: 720 }}>The best digital transformation work doesn't always look dramatic. Sometimes the real win is that the product becomes easier to use, teams move faster, and systems stop getting in the way.</p>
          <div style={{ marginTop: 48 }}>
            <Accordion items={whatWeDoItems} defaultActiveIndex={0} />
          </div>
        </div>
      </section>

      <div style={{ height: isMobile ? 48 : 80 }} />

      {/* ── SOLUTIONS ── */}
      <section style={{ background: dark1, position: 'relative', overflow: 'hidden' }}>
        <CornerTL /><CornerBR />
        <div style={inner}>
          <Tag label="SOLUTIONS" />
          <h2 style={{ ...d2('#fff'), marginTop: 16 }}>
            Proven solutions for HiTech and SaaS{' '}
            <span style={{ color: red }}>at scale.</span>
          </h2>
          <div style={{ marginTop: 48 }}>
            <Accordion items={solutionItems} defaultActiveIndex={0} />
          </div>
        </div>
      </section>

      <div style={{ height: isMobile ? 48 : 80 }} />

      {/* ── CASE STUDIES ── */}
      <section id="proof" style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="CASE STUDIES" />
          <div style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'flex-end', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: 16, marginTop: 16, marginBottom: 40 }}>
            <div>
              <h1 style={d1()}>The work speaks <span style={{ color: red }}>for itself.</span></h1>
              <p style={{ fontFamily: sans, fontSize: 15, color: '#5C5C5C', marginTop: 10 }}>Real outcomes from HiTech and SaaS organizations we've partnered with.</p>
            </div>
            <a href="#" style={{ fontFamily: sans, fontSize: 14, color: red, textDecoration: 'underline', whiteSpace: 'nowrap', flexShrink: 0 }}>View All</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: cols3, gap: 20 }}>
            {featuredCards.map((card, i) => (
              <Card key={i} mode="light" type="insights" tags={card.tags} title={card.title} excerpt={card.excerpt} ctaLabel="See How We Work" />
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: isMobile ? 48 : 80 }} />

      {/* ── MORE STORIES ── */}
      <section style={{ background: dark1, position: 'relative', overflow: 'hidden' }}>
        <CornerTL /><CornerBR />
        <div style={inner}>
          <Tag label="MORE SUCCESS STORIES" />
          <div style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'flex-end', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: 16, marginTop: 16, marginBottom: 40 }}>
            <h1 style={d1('#fff')}>More from <span style={{ color: red }}>HiTech & SaaS.</span></h1>
            <a href="#" style={{ fontFamily: sans, fontSize: 14, color: '#9B9B9B', textDecoration: 'underline', whiteSpace: 'nowrap', flexShrink: 0 }}>View All</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: cols3, gap: 20 }}>
            {successCards.map((card, i) => (
              <Card key={i} mode="dark" type="insights" tags={card.tags} title={card.title} excerpt={card.excerpt} ctaLabel="See How We Work" />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <CTABanner
        size="large"
        label="LET'S WORK ON IT TOGETHER"
        heading="If growth is starting to feel heavier than it should, the product may not be the only thing that needs attention."
        body="Let's look at the systems behind the product — the workflows, data, integrations, revenue operations, and customer experiences that decide whether growth feels smooth or strained."
        primaryCta="Talk to a HiTech & SaaS Expert →"
        secondaryCta="Explore Our Solutions"
      />
    </>
  );
}
