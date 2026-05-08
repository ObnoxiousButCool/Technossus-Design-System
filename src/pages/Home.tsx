import React from 'react';
import { Tag }         from '../../components/Tag';
import { Stats }       from '../../components/Stats';
import { Badge }       from '../../components/Badge';
import { Testimonial } from '../../components/Testimonial';
import { CTABanner }   from '../../components/CTABanner';
import { Button }      from '../../components/Button';

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

function D2({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <h2 style={{ fontFamily: serif, fontSize: 40, lineHeight: '48px', fontWeight: 600, letterSpacing: '-1px', margin: 0, ...style }}>
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: dark1 }}>
        <div style={{ position: 'relative', width: '100%', height: 463, background: '#1A1A1A', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(0,0,0,.85) 0%,rgba(0,0,0,.55) 45%,rgba(0,0,0,.25) 100%)' }} />
          <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: 1440, height: '100%', padding: '110px 80px', zIndex: 2, display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ maxWidth: 565, display: 'flex', flexDirection: 'column', gap: 32 }}>
              <h1 style={{ fontFamily: serif, fontSize: 48, lineHeight: '52px', fontWeight: 500, color: '#fff', margin: 0 }}>
                Hit the outcomes that matter,{' '}
                <span style={{ color: red }}>with precision.</span>
              </h1>
              <p style={{ fontFamily: sans, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: '#D9D9D9', margin: 0 }}>
                We help you identify what works, execute with precision, and turn effort into measurable results faster.
              </p>
              <div>
                <Button variant="primary" label="Explore Solutions" href="/services" />
              </div>
            </div>
          </div>
        </div>

        {/* Smart Search */}
        <div style={{ background: dark1, padding: '32px 80px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ maxWidth: 1344, margin: '0 auto', background: '#fff', height: 65, borderRadius: 48, display: 'flex', alignItems: 'center', gap: 14, padding: '0 28px', width: '100%' }}>
            <span style={{ color: red, fontSize: 18, fontWeight: 700 }}>+</span>
            <input type="text" placeholder="Ask about services, industries, solutions, or case studies"
              style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontFamily: sans, fontSize: 14, color: '#5C5C5C' }} />
          </div>
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
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="STATISTICS" />
          <D2 style={{ color: '#1E1E1E', marginTop: 16 }}>
            Trusted by <span style={{ color: red }}>leaders.</span>
          </D2>
          <div style={{ display: 'flex', gap: 80, alignItems: 'flex-start', marginTop: 54, flexWrap: 'wrap' }}>
            <div style={{ flex: '0 0 524px', background: '#FAFAFA', padding: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 76px' }}>
              <Stats value="250+" label="Consultants" />
              <Stats value="150+" label="Global Clients" />
              <Stats value="15+"  label="Years Experience" />
              <Stats value="98+"  label="Client Retention" />
            </div>
            <div style={{ flex: 1, height: 429, background: '#D4D4D4' }} />
          </div>
        </div>
      </section>

      {/* ── COLLABORATORS ── */}
      <section style={{ borderTop: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '32px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
          <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: '.12em', color: '#ADADAD', textTransform: 'uppercase' }}>Our Collaborators</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 72, flexWrap: 'wrap' }}>
            {['TOYOTA FINANCIAL SERVICES', 'GE HealthCare', 'CHOICE ADMINISTRATORS', 'BIO THERANOSTICS'].map(name => (
              <span key={name} style={{ fontFamily: sans, fontSize: 13, fontWeight: 700, color: '#888', filter: 'grayscale(100%)', opacity: .65 }}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 80 }} />

      {/* ── FEATURED CASE STUDY ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="FEATURED CASE STUDY" />
          <article style={{ background: dark1, display: 'flex', alignItems: 'stretch', minHeight: 520, marginTop: 32 }}>
            <div style={{ flex: 1, padding: '64px 48px', display: 'flex', flexDirection: 'column', gap: 32 }}>
              <Badge label="Healthcare" variant="primary" />
              <D2 style={{ color: '#fff' }}>Automating Home Care Operations for Unprecedented Efficiency.</D2>
              <p style={{ fontFamily: sans, fontSize: 15, lineHeight: 1.7, color: '#B5B5B5', maxWidth: 525, margin: 0 }}>
                Transformed high-volume operational workflows with RPA and Smart Rules, eliminating manual bottlenecks across order entry, billing, and insurance, while enabling seamless management of thousands of daily transactions.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 32, marginTop: 24 }}>
                {[{ val: '$50M+', lbl: 'TOTAL COST SAVING' }, { val: '20,000+', lbl: 'ORDERS PLACED SUCCESSFULLY' }].map((s, i) => (
                  <React.Fragment key={s.lbl}>
                    {i > 0 && <div style={{ width: 1, height: 60, background: '#3A3A3A' }} />}
                    <div>
                      <div style={{ fontFamily: serif, fontSize: 36, lineHeight: 1, fontWeight: 600, color: red }}>{s.val}</div>
                      <div style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: '#fff', marginTop: 8 }}>{s.lbl}</div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 24, marginTop: 24 }}>
                <Button variant="primary" label="View Case Study" href="#" />
                <Button variant="secondary" label="View All" href="#" />
              </div>
            </div>
            <div style={{ flex: '0 0 480px', background: '#2A2A2A' }} />
          </article>
        </div>
      </section>

      <div style={{ height: 80 }} />

      {/* ── WHAT WE DELIVER ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="INTEGRATED CAPABILITIES" />
          <D2 style={{ color: '#1E1E1E', marginTop: 16 }}>
            What we <span style={{ color: red }}>deliver.</span>
          </D2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 48 }}>
            {[
              { title: 'AI Led Transformation',                      body: 'Revolutionizing enterprise workflows through custom LLM integration and proprietary cognitive automation engines designed for scale.', first: true },
              { title: 'Product Engineering & Sustained Operations', body: 'End-to-end software lifecycle management, from rapid prototyping to mission-critical maintenance and DevOps optimization.' },
              { title: 'Quality Engineering & Verification',         body: 'Implementing automated testing frameworks and formal verification methods to ensure absolute reliability in high-stakes environments.' },
              { title: 'Digital Experience Design',                  body: 'Crafting human-centric interfaces for complex technical systems, balancing utility with an uncompromising editorial aesthetic.' },
              { title: 'Cloud & Product Modernization',              body: 'Lift, refactor, and run smarter — migrating monoliths to cloud-native architectures without sacrificing reliability.' },
              { title: 'Data Intelligence & Analytics',              body: 'Turn raw data into decision-grade intelligence with real-time pipelines, semantic layers, and AI-powered insight delivery.' },
            ].map((card, i) => (
              <article key={i} style={{ background: '#fff', display: 'flex', flexDirection: 'column', minHeight: 516 }}>
                <div style={{ background: '#D4D4D4', height: 240, width: '100%' }} />
                <div style={{ padding: '24px 0 0', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
                  <h3 style={{ fontFamily: sans, fontSize: 18, fontWeight: 700, lineHeight: 1.4, color: card.first ? red : '#1E1E1E', margin: 0 }}>{card.title}</h3>
                  <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: '#5C5C5C', margin: 0 }}>{card.body}</p>
                  <div style={{ marginTop: 'auto', width: 40, height: 40, borderRadius: '50%', border: `1px solid ${card.first ? red : '#D4D4D4'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: card.first ? red : '#5C5C5C' }}>→</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 80 }} />

      {/* ── AI STUDIO ── */}
      <section>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px 16px' }}>
          <Tag label="AI SOLUTIONS AND ACCELERATORS" />
        </div>
        <div style={{ background: dark1, position: 'relative', overflow: 'hidden' }}>
          <CornerTL /><CornerBR />
          <div style={inner}>
            <D2 style={{ color: '#fff', maxWidth: 740 }}>
              See AI in action, before you build at{' '}
              <span style={{ color: red }}>Technossus AI Studio — TAS</span>
            </D2>
            <p style={{ fontFamily: sans, fontSize: 15, color: '#9B9B9B', marginTop: 12 }}>Explore real AI systems you can test before committing to build.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 48 }}>
              {[
                { label: 'FASTER PROCESSING',  title: 'Automate document workflows',        body: 'Use advanced ML to automatically extract and categorize data from complex documents. Streamline pipelines and eliminate manual entry to accelerate high-volume processing.' },
                { label: 'INTELLIGENT SEARCH', title: 'Surface insights from your data',    body: 'Connect your enterprise knowledge base to conversational AI that understands context, retrieves accurately, and scales across every team without custom pipelines.' },
                { label: 'AGENTIC OPERATIONS', title: 'Coordinate multi-step AI workflows', body: 'Deploy agents that reason, route, and act — handling approval chains, escalations, and data handoffs without human orchestration at every step.' },
              ].map(card => (
                <article key={card.label} style={{ background: '#262626', border: '1px solid #2E2E2E', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 16, minHeight: 300 }}>
                  <div style={{ width: 48, height: 48, background: '#1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9B9B9B', fontSize: 22 }}>⬡</div>
                  <div style={{ fontFamily: sans, fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: red }}>{card.label}</div>
                  <h3 style={{ fontFamily: sans, fontSize: 18, fontWeight: 700, color: '#fff', lineHeight: 1.4, margin: 0 }}>{card.title}</h3>
                  <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: '#9B9B9B', flex: 1, margin: 0 }}>{card.body}</p>
                  <a href="#" style={{ fontFamily: sans, fontSize: 14, fontWeight: 700, color: red, textDecoration: 'underline' }}>Try in AI Studio</a>
                </article>
              ))}
            </div>
            <CTABanner
              size="small"
              heading="Explore these in a working environment"
              body="Test, validate, and experience what's possible inside AI Studio."
              primaryCta="Explore AI Studio →"
              style={{ marginTop: 32 } as React.CSSProperties}
            />
          </div>
        </div>
      </section>

      <div style={{ height: 80 }} />

      {/* ── LATEST INSIGHTS ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="INSIGHTS" />
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, marginTop: 16, marginBottom: 48 }}>
            <div>
              <D2 style={{ color: '#1E1E1E' }}>Latest <span style={{ color: red }}>insights.</span></D2>
              <p style={{ fontFamily: sans, fontSize: 15, color: '#5C5C5C', marginTop: 10 }}>Thinking and perspectives from our domain experts.</p>
            </div>
            <a href="#" style={{ fontFamily: sans, fontSize: 14, color: red, textDecoration: 'underline', whiteSpace: 'nowrap', flexShrink: 0 }}>View All</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {[
              { tags: 'FINTECH • PLATFORM MODERNIZATION', title: 'Architecting a High-Frequency Trading Engine for Global Markets', excerpt: 'We overhauled the legacy infrastructure of a Tier-1 financial institution, reducing latency by 40% using event-driven microservices and localized data centers.' },
              { tags: 'HEALTHCARE • AI AUTOMATION',       title: 'Automating Prior Auth with AI: 60% Faster Approvals in Clinical Workflows', excerpt: 'A payer-provider integration that cut prior authorization turnaround from days to hours by embedding AI decision layers into existing clinical systems.' },
              { tags: 'DATA ENGINEERING • ANALYTICS',     title: 'Building a Real-Time Analytics Platform for Enterprise Decision Intelligence', excerpt: 'How we replaced a batch-heavy data warehouse with a streaming architecture that delivers insights 14x faster across 12 business units.' },
            ].map((card, i) => (
              <article key={i} style={{ background: '#fff', display: 'flex', flexDirection: 'column', minHeight: 566 }}>
                <div style={{ background: '#D4D4D4', height: 230, width: '100%' }} />
                <div style={{ padding: '24px 0 0', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
                  <div style={{ fontFamily: sans, fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: '#5C5C5C' }}>{card.tags}</div>
                  <h3 style={{ fontFamily: sans, fontSize: 20, fontWeight: 700, lineHeight: 1.3, color: '#1E1E1E', margin: 0 }}>{card.title}</h3>
                  <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: '#5C5C5C', flex: 1, margin: 0 }}>{card.excerpt}</p>
                  <Button variant="secondary" label="See How We Work" href="#" style={{ alignSelf: 'flex-start', height: 48 }} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 80 }} />

      {/* ── WHY TECHNOSSUS ── */}
      <section style={{ background: dark1, position: 'relative', overflow: 'hidden' }}>
        <CornerTL /><CornerBR />
        <div style={inner}>
          <Tag label="TECHNOSSUS" />
          <D2 style={{ color: '#fff', marginTop: 16 }}>Why <span style={{ color: red }}>Technossus</span></D2>
          <p style={{ fontFamily: sans, fontSize: 15, color: '#9B9B9B', marginTop: 12 }}>
            We don't just build software; we engineer competitive advantages through technological precision.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 48 }}>
            {[
              { title: 'Outcome Driven',      body: 'Our systems are meticulously designed to scale operations and unlock new growth opportunities, ensuring measurable impact on your bottom line.' },
              { title: 'Scale AI',            body: 'Rapidly scale your business operations through high-performance engineering that integrates advanced AI models into your existing enterprise infrastructure.' },
              { title: 'Speed To Market',     body: 'Accelerate your product roadmap and launch faster with AI-powered engineering cycles that significantly reduce time-to-market while maintaining quality.' },
              { title: 'Enhance Experience',  body: 'We engineer intuitive, high-performance digital products that elevate user engagement and foster long-term brand loyalty through seamless experiences.' },
              { title: 'Integrated Approach', body: 'Our methodology bridges the gap between high-level product strategy, user-centric design, and robust technical engineering for unified results.' },
              { title: 'Simplify Complexity', body: 'We build architectures designed to manage massive scale and inherent technical complexity while ensuring security and adaptability for evolving needs.' },
            ].map(card => (
              <article key={card.title} style={{ background: '#262626', border: '1px solid #2E2E2E', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 16, minHeight: 253 }}>
                <div style={{ color: red, fontSize: 28 }}>◈</div>
                <h3 style={{ fontFamily: sans, fontSize: 20, fontWeight: 700, color: '#fff', lineHeight: 1.3, margin: 0 }}>{card.title}</h3>
                <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: '#9B9B9B', margin: 0 }}>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 80 }} />

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: '#fff' }}>
        <div style={inner}>
          <Tag label="TESTIMONIALS" />
          <D2 style={{ color: '#1E1E1E', marginTop: 16 }}>
            Hear what <span style={{ color: red }}>our clients have to say.</span>
          </D2>
          <p style={{ fontFamily: sans, fontSize: 15, color: '#5C5C5C', marginTop: 12 }}>
            Real experiences, trusted partnerships, and measurable impact from the businesses we've helped transform.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 48 }}>
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

      <div style={{ height: 80 }} />

      {/* ── CTA BANNER LARGE ── */}
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
