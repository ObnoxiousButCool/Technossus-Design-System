import React from 'react';
import { Tag }         from '../../components/Tag';
import { Stats }       from '../../components/Stats';
import { Badge }       from '../../components/Badge';
import { Testimonial } from '../../components/Testimonial';
import { CTABanner }   from '../../components/CTABanner';
import { Button }      from '../../components/Button';
import { Card }        from '../../components/Card';
import { useBreakpoint } from '../../ts/breakpoints';

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

export default function Home() {
  const { isMobile, isTablet } = useBreakpoint();

  const inner: React.CSSProperties = {
    maxWidth: 1440,
    margin: '0 auto',
    padding: isMobile ? '48px 16px' : isTablet ? '60px 32px' : '80px 80px',
  };

  const d2Size  = isMobile ? 24 : isTablet ? 30 : 40;
  const d2Line  = isMobile ? '32px' : isTablet ? '38px' : '48px';
  const cols3   = isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(3,1fr)';

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: dark1 }}>
        <div style={{ position: 'relative', width: '100%', height: isMobile ? 360 : isTablet ? 420 : 463, background: '#1A1A1A', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(0,0,0,.85) 0%,rgba(0,0,0,.55) 45%,rgba(0,0,0,.25) 100%)' }} />
          <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: 1440, height: '100%', padding: isMobile ? '48px 16px' : isTablet ? '60px 32px' : '110px 80px', zIndex: 2, display: 'flex', alignItems: 'flex-start', boxSizing: 'border-box' }}>
            <div style={{ maxWidth: 565, display: 'flex', flexDirection: 'column', gap: 32 }}>
              <h1 style={{ fontFamily: serif, fontSize: isMobile ? 28 : isTablet ? 36 : 48, lineHeight: isMobile ? '36px' : isTablet ? '44px' : '52px', fontWeight: 500, color: '#fff', margin: 0 }}>
                Hit the outcomes that matter,{' '}
                <span style={{ color: red }}>with precision.</span>
              </h1>
              <p style={{ fontFamily: sans, fontSize: isMobile ? 14 : 16, fontWeight: 400, lineHeight: 1.6, color: '#D9D9D9', margin: 0 }}>
                We help you identify what works, execute with precision, and turn effort into measurable results faster.
              </p>
              <div>
                <Button variant="primary" label="Explore Solutions" href="/services" />
              </div>
            </div>
          </div>
        </div>

        {/* Smart Search */}
        <div style={{ background: dark1, padding: isMobile ? '24px 16px' : isTablet ? '24px 32px' : '32px 80px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ maxWidth: 1344, margin: '0 auto', background: '#fff', height: 65, borderRadius: 48, display: 'flex', alignItems: 'center', gap: 14, padding: '0 28px', width: '100%', boxSizing: 'border-box' }}>
            <span style={{ color: red, fontSize: 18, fontWeight: 700 }}>+</span>
            <input type="text" placeholder="Ask about services, industries, solutions, or case studies"
              style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontFamily: sans, fontSize: 14, color: '#5C5C5C' }} />
          </div>
          {!isMobile && (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ flex: 1, height: 1, background: '#3A3A3A' }} />
                <span style={{ fontFamily: sans, fontSize: 14, color: '#C9C9C9', whiteSpace: 'nowrap' }}>Quick picks to get you started</span>
                <span style={{ flex: 1, height: 1, background: '#3A3A3A' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
                {['AI Adoption Strategy', 'Modernize Platforms', 'Data Analytics', 'Healthcare IT', 'Product Engineering'].map(chip => (
                  <button key={chip} style={{ display: 'inline-flex', alignItems: 'center', height: 48, padding: '0 20px', borderRadius: 24, background: '#2D2D2D', border: '1px solid #3A3A3A', fontFamily: sans, fontSize: 14, fontWeight: 500, color: '#fff', cursor: 'pointer' }}>
                    {chip}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="STATISTICS" />
          <h2 style={{ fontFamily: serif, fontSize: d2Size, lineHeight: d2Line, fontWeight: 600, color: '#1E1E1E', marginTop: 16, letterSpacing: '-1px' }}>
            Trusted by <span style={{ color: red }}>leaders.</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 24 : 80, alignItems: 'flex-start', marginTop: 54, flexWrap: 'wrap' }}>
            <div style={{ flex: isMobile ? undefined : '0 0 524px', background: '#FAFAFA', padding: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 76px', width: isMobile ? '100%' : undefined, boxSizing: 'border-box' }}>
              <Stats value="250+" label="Consultants" />
              <Stats value="150+" label="Global Clients" />
              <Stats value="15+"  label="Years Experience" />
              <Stats value="98+"  label="Client Retention" />
            </div>
            <div style={{ flex: 1, height: isMobile ? 240 : isTablet ? 320 : 429, background: '#D4D4D4', width: isMobile ? '100%' : undefined }} />
          </div>
        </div>
      </section>

      {/* ── COLLABORATORS ── */}
      <section style={{ borderTop: '1px solid #E8E8E8', background: '#fff' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: isMobile ? '24px 16px' : '32px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
          <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: '.12em', color: '#ADADAD', textTransform: 'uppercase' }}>Our Collaborators</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: isMobile ? 24 : 72, flexWrap: 'wrap' }}>
            {['TOYOTA FINANCIAL SERVICES', 'GE HealthCare', 'CHOICE ADMINISTRATORS', 'BIO THERANOSTICS'].map(name => (
              <span key={name} style={{ fontFamily: sans, fontSize: 13, fontWeight: 700, color: '#888', filter: 'grayscale(100%)', opacity: .65 }}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED CASE STUDY ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="FEATURED CASE STUDY" />
          <div style={{ marginTop: 32 }}>
            <Card
              mode="dark"
              type="large"
              category="HEALTHCARE"
              heading="Automating Home Care Operations for Unprecedented Efficiency."
              body="Transformed high-volume operational workflows with RPA and Smart Rules, eliminating manual bottlenecks across order entry, billing, and insurance, while enabling seamless management of thousands of daily transactions."
              stats={[
                { value: '$50M+', label: 'TOTAL COST SAVING' },
                { value: '20,000+', label: 'ORDERS PLACED SUCCESSFULLY' },
              ]}
              primaryLabel="View Case Study"
              secondaryLabel="View All"
            />
          </div>
        </div>
      </section>

      {/* ── WHAT WE DELIVER ── */}
      <section style={{ background: '#F5F5F5' }}>
        <div style={inner}>
          <Tag label="INTEGRATED CAPABILITIES" />
          <h2 style={{ fontFamily: serif, fontSize: d2Size, lineHeight: d2Line, fontWeight: 600, color: '#1E1E1E', marginTop: 16, letterSpacing: '-1px' }}>
            What we <span style={{ color: red }}>deliver.</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: cols3, gap: 16, marginTop: 48 }}>
            {[
              { title: 'AI Led Transformation',                        description: 'Revolutionizing enterprise workflows through custom LLM integration and proprietary cognitive automation engines designed for scale.' },
              { title: 'Product Engineering & Sustained Operations',   description: 'End-to-end software lifecycle management, from rapid prototyping to mission-critical maintenance and DevOps optimization.' },
              { title: 'Quality Engineering & Verification',           description: 'Implementing automated testing frameworks and formal verification methods to ensure absolute reliability in high-stakes environments.' },
              { title: 'Digital Experience Design',                    description: 'Crafting human-centric interfaces for complex technical systems, balancing utility with an uncompromising editorial aesthetic.' },
              { title: 'Cloud & Product Modernization',                description: 'Lift, refactor, and run smarter — migrating monoliths to cloud-native architectures without sacrificing reliability.' },
              { title: 'Data Intelligence & Analytics',                description: 'Turn raw data into decision-grade intelligence with real-time pipelines, semantic layers, and AI-powered insight delivery.' },
            ].map((card, i) => (
              <Card key={i} mode="light" type="deliver" title={card.title} description={card.description} />
            ))}
          </div>
        </div>
      </section>

      {/* ── AI STUDIO ── */}
      <section style={{ background: '#FFFFFF' }}>
        <div style={inner}>
          <Tag label="AI SOLUTIONS AND ACCELERATORS" />
          <div style={{ marginTop: 16, position: 'relative', overflow: 'hidden', backgroundColor: '#1E1E1E', padding: isMobile ? '48px 24px' : isTablet ? '60px 32px' : 56 }}>
            <CornerTL /><CornerBR />
            <h2 style={{ fontFamily: serif, fontSize: d2Size, lineHeight: d2Line, fontWeight: 500, color: '#fff', maxWidth: 740, letterSpacing: '-1px', margin: '0 0 8px 0' }}>
              See AI in action, before you build at{' '}
              <span style={{ color: red }}>Technossus AI Studio</span>
              {' - TAS'}
            </h2>
            <p style={{ fontFamily: sans, fontSize: 18, color: '#F9FAFB', marginTop: 0, marginBottom: 36 }}>Explore real AI systems you can test before committing to build.</p>
            <div style={{ display: 'grid', gridTemplateColumns: cols3, gap: 20, marginBottom: 32 }}>
              {[
                { category: 'FASTER PROCESSING',  title: 'Automate document workflows',        description: 'Use advanced ML to automatically extract and categorize data from complex documents. Streamline pipelines and eliminate manual entry to accelerate high-volume processing.',  ctaLabel: 'Try in AI Studio' },
                { category: 'INTELLIGENT SEARCH', title: 'Surface insights from your data',    description: 'Connect your enterprise knowledge base to conversational AI that understands context, retrieves accurately, and scales across every team without custom pipelines.',           ctaLabel: 'Try in AI Studio' },
                { category: 'AGENTIC OPERATIONS', title: 'Coordinate multi-step AI workflows', description: 'Deploy agents that reason, route, and act — handling approval chains, escalations, and data handoffs without human orchestration at every step.',                            ctaLabel: 'Try in AI Studio' },
              ].map(card => (
                <Card key={card.category} mode="dark" type="medium" category={card.category} title={card.title} description={card.description} ctaLabel={card.ctaLabel} />
              ))}
            </div>
            <CTABanner
              size="small"
              heading="Explore these in a working environment"
              body="Test, validate, and experience what's possible inside AI Studio."
              primaryCta="Explore AI Studio →"
            />
          </div>
        </div>
      </section>

      {/* ── LATEST INSIGHTS ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="INSIGHTS" />
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'flex-end', justifyContent: 'space-between', gap: 16, marginTop: 16, marginBottom: 48 }}>
            <div>
              <h2 style={{ fontFamily: serif, fontSize: d2Size, lineHeight: d2Line, fontWeight: 600, color: '#1E1E1E', letterSpacing: '-1px' }}>
                Latest <span style={{ color: red }}>insights.</span>
              </h2>
              <p style={{ fontFamily: sans, fontSize: 15, color: '#5C5C5C', marginTop: 10 }}>Thinking and perspectives from our domain experts.</p>
            </div>
            <a href="#" style={{ fontFamily: sans, fontSize: 14, color: red, textDecoration: 'underline', whiteSpace: 'nowrap', flexShrink: 0 }}>View All</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: cols3, gap: 24 }}>
            {[
              { tags: 'FINTECH • PLATFORM MODERNIZATION', title: 'Architecting a High-Frequency Trading Engine for Global Markets',           excerpt: 'We overhauled the legacy infrastructure of a Tier-1 financial institution, reducing latency by 40% using event-driven microservices and localized data centers.' },
              { tags: 'HEALTHCARE • AI AUTOMATION',       title: 'Automating Prior Auth with AI: 60% Faster Approvals in Clinical Workflows', excerpt: 'A payer-provider integration that cut prior authorization turnaround from days to hours by embedding AI decision layers into existing clinical systems.' },
              { tags: 'DATA ENGINEERING • ANALYTICS',     title: 'Building a Real-Time Analytics Platform for Enterprise Decision Intelligence', excerpt: 'How we replaced a batch-heavy data warehouse with a streaming architecture that delivers insights 14x faster across 12 business units.' },
            ].map((card, i) => (
              <Card key={i} mode="light" type="insights" tags={card.tags} title={card.title} excerpt={card.excerpt} ctaLabel="See How We Work" />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY TECHNOSSUS ── */}
      <section style={{ background: dark1, position: 'relative', overflow: 'hidden' }}>
        <CornerTL /><CornerBR />
        <div style={inner}>
          <Tag label="TECHNOSSUS" />
          <h2 style={{ fontFamily: serif, fontSize: d2Size, lineHeight: d2Line, fontWeight: 600, color: '#fff', marginTop: 16, letterSpacing: '-1px' }}>
            Why <span style={{ color: red }}>Technossus</span>
          </h2>
          <p style={{ fontFamily: sans, fontSize: 15, color: '#9B9B9B', marginTop: 12 }}>
            We don't just build software; we engineer competitive advantages through technological precision.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: cols3, gap: 24, marginTop: 48 }}>
            {[
              { title: 'Outcome Driven',      description: 'Our systems are meticulously designed to scale operations and unlock new growth opportunities, ensuring measurable impact on your bottom line.' },
              { title: 'Scale AI',            description: 'Rapidly scale your business operations through high-performance engineering that integrates advanced AI models into your existing enterprise infrastructure.' },
              { title: 'Speed To Market',     description: 'Accelerate your product roadmap and launch faster with AI-powered engineering cycles that significantly reduce time-to-market while maintaining quality.' },
              { title: 'Enhance Experience',  description: 'We engineer intuitive, high-performance digital products that elevate user engagement and foster long-term brand loyalty through seamless experiences.' },
              { title: 'Integrated Approach', description: 'Our methodology bridges the gap between high-level product strategy, user-centric design, and robust technical engineering for unified results.' },
              { title: 'Simplify Complexity', description: 'We build architectures designed to manage massive scale and inherent technical complexity while ensuring security and adaptability for evolving needs.' },
            ].map(card => (
              <Card key={card.title} mode="dark" type="small" title={card.title} description={card.description} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="TESTIMONIALS" />
          <h2 style={{ fontFamily: serif, fontSize: d2Size, lineHeight: d2Line, fontWeight: 600, color: '#1E1E1E', marginTop: 16, letterSpacing: '-1px' }}>
            Hear what <span style={{ color: red }}>our clients have to say.</span>
          </h2>
          <p style={{ fontFamily: sans, fontSize: 15, color: '#5C5C5C', marginTop: 12 }}>
            Real experiences, trusted partnerships, and measurable impact from the businesses we've helped transform.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: cols3, gap: 24, marginTop: 48 }}>
            <Testimonial color="white"
              quote="We are very pleased with the quality of service the Technossus team has provided. The lab sincerely appreciates the team's responsiveness and attention to detail in building new features into our LIMS and for the resolution of production issues."
              authorName="Jeffrey Harker" authorTitle="System Manager Cloud Engineering" />
            <Testimonial color="red"
              quote="Technossus has been a game-changer for AdaptHealth. Their dedication to quality and commitment to continuous improvement is unmatched. Their adaptability and willingness to learn make them the perfect partner."
              authorName="Anita Salgado" authorTitle="Senior Business Systems Analyst" />
            <Testimonial color="white"
              quote="Flawless rollout of New Relic with no downtime allows CommonSpirit Health deep understanding of consumer experience. Net savings on overall costs by delivering projects with half of the requested staff — 'Ridiculously Qualified Team.'"
              authorName="Jeffrey Harker" authorTitle="System Manager Cloud Engineering" />
          </div>
        </div>
      </section>

      {/* ── CTA BANNER LARGE ── */}
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
