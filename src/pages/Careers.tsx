import React from 'react';
import { Tag }         from '../../components/Tag';
import { Accordion }   from '../../components/Accordion';
import { Testimonial } from '../../components/Testimonial';
import { CTABanner }   from '../../components/CTABanner';
import { FadeUp }      from '../../components/Animate/FadeUp';
import { colors, fontFamily } from '../../ts/tokens';
import { useBreakpoint } from '../../ts/breakpoints';
import type { AccordionItem } from '../../components/Accordion';
import imgHeroBg from '../../assets/Website_Images/Hero section/Careers page.png';

// ── Figma asset URLs ──────────────────────────────────────────────────────────
const imgArrowForward = '/assets/8a747203f958377d346e5cba2f8ebb5af2b3712b.svg';
const imgBento1       = '/assets/a2c5aedfd47c9d61a54070b6ef0abcd89a59217a.png';
const imgBento2       = '/assets/b0f341860b2c6f76cfb4422ad266623aab2d1f6e.png';
const imgBento3       = '/assets/fba5208f46ffc48029fdd0a7b3697e305c66419c.png';
const imgHiringPerson = '/assets/841d1956c23918ec138a2eef41ff5a34b6b981e1.png';
const imgSubtractTL   = '/assets/e35ee95a68b0f29bf73fcd76e8285772bff083b1.svg';
const imgSubtractBR   = '/assets/d3bd3c494981fc117beb9354c38eaf44f6d42039.svg';

// ── Local tokens ──────────────────────────────────────────────────────────────
const sans  = fontFamily.sans;
const serif = fontFamily.serif;
const red   = colors.brand.primary;
const dark  = colors.brand.black;
const dark1 = colors.background.dark1;

const accordionItems: AccordionItem[] = [
  {
    title: 'Continuous Quality & QA Ops Engineering',
    subtitle: 'Quality that lives in the pipeline, from design to release.',
    content: {
      type: 'detail',
      serviceLabel: 'ENGINEERING EXCELLENCE',
      heading: 'A culture built on curiosity, ownership, and continuous learning',
      body: [
        "Objective validation matters most when the team that built the system is also the one reviewing it. Independent quality assurance brings a consistent, unbiased perspective across releases, environments, and system changes — surfacing what's easy to miss when engineers are close to the code.",
        'We work with your product and engineering teams to design test strategies around how you actually build: your stack, release cadence, and the business-critical paths where a failure would hurt most.',
      ],
    },
  },
  {
    title: 'Work - Life Balance',
    subtitle: 'Flexible schedules and remote options that respect your personal time.',
    content: {
      type: 'detail',
      serviceLabel: 'WORK - LIFE BALANCE',
      heading: 'A culture built on trust, flexibility, and respect for your time',
      body: [
        'We believe the best work happens when people have the space to recharge. Flexible scheduling, remote work options, and generous leave policies give our team the breathing room to do their best work.',
        'From async-first workflows to flexible start times, we make sure our people can bring their whole selves to work every day.',
      ],
    },
  },
  {
    title: 'Global Impact',
    subtitle: 'Work with cutting-edge technologies on projects that redefine industries.',
    content: {
      type: 'detail',
      serviceLabel: 'GLOBAL IMPACT',
      heading: 'A culture built on curiosity, ownership, and continuous learning',
      body: [
        "Objective validation matters most when the team that built the system is also the one reviewing it. Independent quality assurance brings a consistent, unbiased perspective across releases, environments, and system changes surfacing what's easy to miss when engineers are close to the code.",
        "We work with your product and engineering teams to design test strategies around how you actually build: your stack, release cadence, and the business-critical paths where a failure would hurt most. Coverage gets built to hold across releases, not just pass the next one.",
      ],
    },
  },
  {
    title: 'Career Growth',
    subtitle: 'Personalized mentorship, clear promotion paths, and training budgets.',
    content: {
      type: 'detail',
      serviceLabel: 'CAREER GROWTH',
      heading: 'Grow faster with a team that invests in your development',
      body: [
        "At Technossus, career growth isn't a buzzword — it's built into how we operate. Every team member has access to personalized mentorship, clear promotion paths, and dedicated training budgets.",
        'We believe that when our people grow, the company grows. That\'s why we create real opportunities to learn, lead, and make meaningful impact.',
      ],
    },
  },
];

const testimonials: Array<{ quote: string; name: string; title: string; color: 'white' | 'red' }> = [
  {
    quote: '"Flawless rollout of New Relic with no downtime and no change window allows CommonSpirit Health deep understanding of consumer experience. Net savings on overall costs by delivering projects with half of the requested staff — \'Ridiculously Qualified Team.\'"',
    name: 'Jeffrey Harker', title: 'System Manager Cloud Engineering', color: 'white',
  },
  {
    quote: '"Technossus has been a game-changer for AdaptHealth. Their dedication to quality and commitment to continuous improvement is unmatched. Their adaptability and willingness to learn make them the perfect partner. The team is knowledgeable, skilled, and go beyond to exceed expectations."',
    name: 'Anita Salgado', title: 'Senior Business Systems Analyst', color: 'red',
  },
  {
    quote: '"We are very pleased with the quality of service the Technossus team has provided to the BTX lab. The lab sincerely appreciates the team\'s responsiveness and attention to detail in building new features into our LIMS and for the resolution of production issues."',
    name: 'Tyler Zucchiatti', title: 'Director, Software Development – Middleware & Integration', color: 'white',
  },
];

export default function Careers() {
  const { isMobile, isTablet } = useBreakpoint();

  const px = {
    maxWidth: 1440,
    margin: '0 auto',
    padding: isMobile ? '48px 16px' : isTablet ? '60px 32px' : '80px 96px',
  };

  const heroFontSize   = isMobile ? 28 : isTablet ? 36 : 48;
  const heroLineHeight = isMobile ? '36px' : isTablet ? '44px' : '56px';
  const h2FontSize     = isMobile ? 24 : isTablet ? 28 : 36;
  const h2LineHeight   = isMobile ? '32px' : '40px';
  const bentoHeight    = isMobile ? 280 : isTablet ? 400 : 600;

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <img
          alt=""
          src={imgHeroBg}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(89.97deg, rgba(1,1,1,0.91) 36.4%, rgba(1,1,1,0) 108.78%)' }} />
        <div style={{ position: 'relative', ...px, minHeight: isMobile ? 400 : 560, display: 'flex', alignItems: 'center' }}>
          <div style={{ maxWidth: 711, display: 'flex', flexDirection: 'column', gap: isMobile ? 32 : 60 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <FadeUp>
                <p style={{ fontFamily: serif, fontWeight: 500, fontSize: heroFontSize, lineHeight: heroLineHeight, letterSpacing: '-0.96px', margin: 0 }}>
                  <span style={{ color: '#FFFFFF' }}>Shape the </span>
                  <span style={{ color: red }}>future of technology</span>
                </p>
              </FadeUp>
              <FadeUp delay={80}>
                <p style={{ fontFamily: sans, fontWeight: 500, fontSize: isMobile ? 15 : 18, lineHeight: '24px', color: '#FFFFFF', margin: 0 }}>
                  We're more than a company, we're a hub of innovation, collaboration, and continuous learning. If you're passionate about technology and making real impact, your next chapter starts here.
                </p>
              </FadeUp>
            </div>
            <FadeUp delay={120}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button style={{ display: 'flex', alignItems: 'center', gap: 8, height: 56, padding: '16px 24px', backgroundColor: red, border: 'none', cursor: 'pointer', fontFamily: sans, fontWeight: 600, fontSize: 16, lineHeight: '28px', color: '#FFFFFF' }}>
                Show us the problem
                <img alt="" src={imgArrowForward} style={{ width: 24, height: 24 }} />
              </button>
              <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 56, padding: '16px 24px', backgroundColor: 'transparent', border: `1px solid ${red}`, cursor: 'pointer', fontFamily: sans, fontWeight: 600, fontSize: 16, lineHeight: '28px', color: red }}>
                See how we work
              </button>
            </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── LIFE AT TECHNOSSUS / BENTO PHOTO GRID ────────────────────────────── */}
      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div style={{ ...px, paddingTop: isMobile ? 48 : isTablet ? 60 : 80, paddingBottom: isMobile ? 48 : isTablet ? 60 : 80, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <FadeUp duration={500}><Tag label="LIFE AT TECHNOSSUS" /></FadeUp>
          {isMobile ? (
            /* Mobile: stacked */
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ position: 'relative', overflow: 'hidden', height: 280 }}>
                <img alt="Team retreats" src={imgBento1} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: 12, right: 12, backgroundColor: red, padding: '4px 10px', fontFamily: sans, fontWeight: 600, fontSize: 12, lineHeight: '20px', color: '#FFFFFF' }}>Team Retreats</div>
              </div>
              <div style={{ display: 'flex', gap: 12, height: 180 }}>
                <div style={{ position: 'relative', overflow: 'hidden', flex: 1 }}>
                  <img alt="Collaborative workspace" src={imgBento2} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', bottom: 10, right: 8, backgroundColor: red, padding: '3px 8px', fontFamily: sans, fontWeight: 600, fontSize: 11, lineHeight: '18px', color: '#FFFFFF' }}>Collaborative Workspace</div>
                </div>
                <div style={{ position: 'relative', overflow: 'hidden', flex: 1 }}>
                  <img alt="Knowledge transfer" src={imgBento3} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', bottom: 10, right: 8, backgroundColor: red, padding: '3px 8px', fontFamily: sans, fontWeight: 600, fontSize: 11, lineHeight: '18px', color: '#FFFFFF' }}>Knowledge Transfer</div>
                </div>
              </div>
            </div>
          ) : (
            /* Tablet / Desktop: 2-col flex, matching Figma */
            <div style={{ display: 'flex', gap: 24, height: bentoHeight }}>
              {/* Left: single tall photo */}
              <div style={{ flex: '1 0 0', position: 'relative', overflow: 'hidden' }}>
                <img
                  alt="Team retreats"
                  src={imgBento1}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'bottom', pointerEvents: 'none' }}
                />
                <div style={{ position: 'absolute', bottom: 20, right: 20, backgroundColor: red, padding: '5px 10px', fontFamily: sans, fontWeight: 600, fontSize: 14, lineHeight: '20px', color: '#FFFFFF' }}>
                  Team Retreats
                </div>
              </div>
              {/* Right: two stacked photos */}
              <div style={{ flex: '1 0 0', display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ flex: '1 0 0', position: 'relative', overflow: 'hidden' }}>
                  <img
                    alt="Collaborative workspace"
                    src={imgBento2}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'bottom', pointerEvents: 'none' }}
                  />
                  <div style={{ position: 'absolute', bottom: 20, right: 20, backgroundColor: red, padding: '5px 10px', fontFamily: sans, fontWeight: 600, fontSize: 14, lineHeight: '20px', color: '#FFFFFF' }}>
                    Collaborative Workspace
                  </div>
                </div>
                <div style={{ flex: '1 0 0', position: 'relative', overflow: 'hidden' }}>
                  <img
                    alt="Knowledge transfer"
                    src={imgBento3}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'bottom', pointerEvents: 'none' }}
                  />
                  <div style={{ position: 'absolute', bottom: 20, right: 20, backgroundColor: red, padding: '5px 10px', fontFamily: sans, fontWeight: 600, fontSize: 14, lineHeight: '20px', color: '#FFFFFF' }}>
                    Knowledge Transfer
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── A PLACE TO BELONG ────────────────────────────────────────────────── */}
      <section>
        <div style={{ ...px, display: 'flex', flexDirection: 'column', gap: 36 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <FadeUp duration={500}><Tag label="A PLACE TO BELONG" /></FadeUp>
            <FadeUp>
              <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: h2FontSize, lineHeight: h2LineHeight, margin: 0, maxWidth: 844, color: dark }}>
                Release confidence, compliance readiness, and{' '}
                <span style={{ color: red }}>AI quality built in from the start.</span>
              </h2>
            </FadeUp>
          </div>
          <Accordion items={accordionItems} defaultActiveIndex={0} />
        </div>
      </section>

      {/* ── WE ARE HIRING ────────────────────────────────────────────────────── */}
      <section>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div style={{
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: dark1,
            padding: isMobile ? '40px 24px' : isTablet ? '48px 40px' : 56,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? 32 : 36,
            alignItems: isMobile ? 'flex-start' : 'center',
          }}>
            {/* Corner decorations */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: 118, height: 10, background: red, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: 10, height: 118, background: red, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: 118, height: 10, background: red, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: 10, height: 118, background: red, pointerEvents: 'none' }} />

            {/* Left: text + button */}
            <div style={{ position: 'relative', flex: '1 0 0', display: 'flex', flexDirection: 'column', gap: 36, minWidth: 0 }}>
              <FadeUp>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: h2FontSize, lineHeight: h2LineHeight, color: '#FFFFFF', margin: 0 }}>
                  We ARE HIRING!
                </h2>
                <p style={{ fontFamily: sans, fontWeight: 500, fontSize: isMobile ? 15 : 18, lineHeight: '24px', color: colors.text[300], margin: 0 }}>
                  Share your profile with Technossus and tell us where you'd like to contribute! We're always looking for enthusiastic people across engineering, design, AI, cloud, and more.
                </p>
              </div>
            </FadeUp>
              <button
                style={{ display: 'flex', alignItems: 'center', gap: 8, height: 56, padding: '16px 24px', backgroundColor: red, border: 'none', cursor: 'pointer', fontFamily: sans, fontWeight: 600, fontSize: 16, lineHeight: '28px', color: '#FFFFFF', alignSelf: 'flex-start' }}
              >
                Talk to Our Team
                <img alt="" src={imgArrowForward} style={{ width: 24, height: 24 }} />
              </button>
            </div>

            {/* Right: person image */}
            {!isMobile && (
              <img
                alt="Join our team"
                src={imgHiringPerson}
                style={{ position: 'relative', width: isTablet ? 320 : 479, height: isTablet ? 320 : 479, objectFit: 'cover', flexShrink: 0 }}
              />
            )}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <section>
        <div style={{ ...px, display: 'flex', flexDirection: 'column', gap: 48 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <FadeUp duration={500}><Tag label="TESTIMONIALS" /></FadeUp>
            <FadeUp>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: h2FontSize, lineHeight: h2LineHeight, margin: 0 }}>
                  <span style={{ color: '#010101' }}>Hear what </span>
                  <span style={{ color: red }}>our clients have to say.</span>
                </h2>
                <p style={{ fontFamily: sans, fontWeight: 500, fontSize: isMobile ? 15 : 18, lineHeight: '24px', color: colors.text[700], margin: 0 }}>
                  Real experiences, trusted partnerships, and measurable impact from the businesses we've helped transform.
                </p>
              </div>
            </FadeUp>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: 24 }}>
            {testimonials.map((t, i) => (
              <Testimonial
                key={i}
                color={t.color}
                quote={t.quote}
                name={t.name}
                title={t.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────────── */}
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
