import React from 'react';
import { Tag }         from '../../components/Tag';
import { Testimonial } from '../../components/Testimonial';
import { CTABanner }   from '../../components/CTABanner';
import { colors, fontFamily } from '../../ts/tokens';
import { useBreakpoint } from '../../ts/breakpoints';

// ── Figma asset URLs ──────────────────────────────────────────────────────────
const imgHeroBg       = 'http://localhost:3845/assets/dedded0b1d928a3885f126fb06d8645c5ff773d6.png';
const imgArrowForward = 'http://localhost:3845/assets/8a747203f958377d346e5cba2f8ebb5af2b3712b.svg';
const imgBento1       = 'http://localhost:3845/assets/a2c5aedfd47c9d61a54070b6ef0abcd89a59217a.png';
const imgBento2       = 'http://localhost:3845/assets/b0f341860b2c6f76cfb4422ad266623aab2d1f6e.png';
const imgBento3       = 'http://localhost:3845/assets/fba5208f46ffc48029fdd0a7b3697e305c66419c.png';
const imgBenefitsImg  = 'http://localhost:3845/assets/841d1956c23918ec138a2eef41ff5a34b6b981e1.png';
const imgHiringBg     = 'http://localhost:3845/assets/d54db829342bc10c2665f6d43218ad53a4d590e5.png';

// ── Local tokens ──────────────────────────────────────────────────────────────
const sans  = fontFamily.sans;
const serif = fontFamily.serif;
const red   = colors.brand.primary;
const dark  = colors.brand.black;
const dark1 = colors.background.dark1;

const benefits = [
  {
    title: 'Continuous Quality & QA Ops Engineering',
    body: 'Quality flows from the beginning — not just the end.',
    tag: 'LOCAL',
  },
  {
    title: 'Work – Life Balance',
    body: 'Flexible work arrangements that respect your personal time.',
    tag: 'LOCAL',
  },
  {
    title: 'Global Impact',
    body: 'Apply cutting-edge technologies on projects that transform industries.',
    tag: 'GLOBAL IMPACT',
    highlight: true,
  },
  {
    title: 'Career Growth',
    body: 'Personalized roadmaps, clear promotion paths, and training budgets.',
    tag: 'LOCAL',
  },
];

const testimonials: Array<{ quote: string; name: string; title: string; color: 'white' | 'red' }> = [
  {
    quote: '"We are very pleased with the quality of service the Technossus team has provided to the BTX lab. The lab sincerely appreciates the team\'s responsiveness and attention to detail in building new features."',
    name: 'Jeffrey Harker', title: 'System Manager Cloud Engineering', color: 'white',
  },
  {
    quote: '"Technossus has been a game-changer for AdaptHealth. Their dedication to quality and commitment to continuous improvement is unmatched. Their adaptability and willingness to learn make them the perfect partner."',
    name: 'Anita Salgado', title: 'Senior Business Systems Analyst', color: 'red',
  },
  {
    quote: '"Flawless rollout of New Relic with no downtime. Not savings on overall costs by delivering projects with half of the requested staff — Ridiculously Qualified Team."',
    name: 'Jeffrey Harker', title: 'System Manager Cloud Engineering', color: 'white',
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
              <p style={{ fontFamily: serif, fontWeight: 500, fontSize: heroFontSize, lineHeight: heroLineHeight, letterSpacing: '-0.96px', margin: 0 }}>
                <span style={{ color: '#FFFFFF' }}>Shape the </span>
                <span style={{ color: red }}>future of technology </span>
              </p>
              <p style={{ fontFamily: sans, fontWeight: 500, fontSize: isMobile ? 15 : 18, lineHeight: '24px', color: '#FFFFFF', margin: 0 }}>
                We're more than a company, we're a hub of innovation, collaboration, and continuous learning. If you're passionate about technology and making real impact, your next chapter starts here.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button style={{ display: 'flex', alignItems: 'center', gap: 8, height: 56, padding: '16px 24px', backgroundColor: red, border: 'none', cursor: 'pointer', fontFamily: sans, fontWeight: 600, fontSize: 16, color: '#FFFFFF' }}>
                Show us the problem
                <img alt="" src={imgArrowForward} style={{ width: 24, height: 24 }} />
              </button>
              <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 56, padding: '16px 24px', backgroundColor: 'transparent', border: `1px solid ${red}`, cursor: 'pointer', fontFamily: sans, fontWeight: 600, fontSize: 16, color: red }}>
                See how we work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIFE AT TECHNOSSUS / BENTO PHOTO GRID ────────────────────────────── */}
      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div style={{ ...px, paddingTop: 0, paddingBottom: 0, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Tag label="LIFE AT TECHNOSSUS" />
          {isMobile ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <img alt="Team building" src={imgBento1} style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div style={{ position: 'relative' }}>
                  <img alt="Knowledge transfer" src={imgBento2} style={{ width: '100%', height: 150, objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', bottom: 8, left: 8, backgroundColor: red, padding: '2px 8px', fontFamily: sans, fontWeight: 600, fontSize: 11, color: '#FFFFFF' }}>Team Building</div>
                </div>
                <div style={{ position: 'relative' }}>
                  <img alt="Culture" src={imgBento3} style={{ width: '100%', height: 150, objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', bottom: 8, left: 8, backgroundColor: red, padding: '2px 8px', fontFamily: sans, fontWeight: 600, fontSize: 11, color: '#FFFFFF' }}>Knowledge Transfer</div>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: `${isTablet ? 240 : 320}px ${isTablet ? 240 : 320}px`, gap: 16 }}>
              <img
                alt="Team building"
                src={imgBento1}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', gridRow: '1 / 3' }}
              />
              <div style={{ position: 'relative' }}>
                <img alt="Knowledge transfer" src={imgBento2} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: 16, left: 16, backgroundColor: red, padding: '4px 12px', fontFamily: sans, fontWeight: 600, fontSize: 14, color: '#FFFFFF' }}>Team Building</div>
              </div>
              <div style={{ position: 'relative' }}>
                <img alt="Culture" src={imgBento3} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: 16, left: 16, backgroundColor: red, padding: '4px 12px', fontFamily: sans, fontWeight: 600, fontSize: 14, color: '#FFFFFF' }}>Knowledge Transfer</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── BENEFITS / WHY JOIN ───────────────────────────────────────────────── */}
      <section>
        <div style={{ ...px, display: 'flex', flexDirection: 'column', gap: 36 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Tag label="A PLACE TO BELONG" />
            <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: h2FontSize, lineHeight: h2LineHeight, margin: 0, maxWidth: 700 }}>
              Release confidence, compliance readiness, and{' '}
              <span style={{ color: red }}>AI quality built in from the start.</span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 24 : 48, alignItems: 'flex-start' }}>
            {/* Benefits list */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0 }}>
              {benefits.map((b, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                    padding: `${isMobile ? 16 : 24}px 0`,
                    borderBottom: i < benefits.length - 1 ? `1px solid ${colors.text[300]}` : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    {b.highlight && (
                      <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: red, flexShrink: 0, display: 'inline-block' }} />
                    )}
                    <h3 style={{ fontFamily: sans, fontWeight: 600, fontSize: isMobile ? 16 : 20, lineHeight: '28px', color: b.highlight ? red : dark, margin: 0 }}>
                      {b.title}
                    </h3>
                  </div>
                  <p style={{ fontFamily: sans, fontWeight: 500, fontSize: isMobile ? 14 : 16, lineHeight: '24px', color: colors.text[700], margin: 0 }}>
                    {b.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Right side panel */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24, width: isMobile ? '100%' : undefined }}>
              <div style={{ backgroundColor: colors.text[200], padding: isMobile ? '20px 16px' : 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h3 style={{ fontFamily: sans, fontWeight: 600, fontSize: isMobile ? 18 : 24, lineHeight: '32px', color: dark, margin: 0 }}>
                  A culture built on curiosity, ownership, and continuous learning
                </h3>
                <p style={{ fontFamily: sans, fontWeight: 500, fontSize: isMobile ? 14 : 16, lineHeight: '24px', color: colors.text[700], margin: 0 }}>
                  Objective validation matters more than the team that finds it, so there's also a "trust but verify" culture. A transparent quality strategy drives decisions and quality strategies result from how teams work not just what we do. We work with you around running strong testing teams to design global strategies around how to work effectively and just about how to get there.
                </p>
              </div>
              <img
                alt="Team at work"
                src={imgBenefitsImg}
                style={{ width: '100%', height: isMobile ? 200 : 320, objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WE ARE HIRING ────────────────────────────────────────────────────── */}
      <section>
        <div style={{ ...px, display: 'flex', flexDirection: 'column', gap: 0 }}>
          <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: dark1, padding: isMobile ? '32px 20px' : isTablet ? '40px 32px' : '60px 56px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 32 : 48, alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'space-between' }}>
            <img alt="" src={imgHiringBg} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15, pointerEvents: 'none' }} />
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 640 }}>
              <Tag label="AT TECHNOSSUS" variant="light" />
              <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: h2FontSize, lineHeight: h2LineHeight, color: '#FFFFFF', margin: 0 }}>
                We Are HIRING!
              </h2>
              <p style={{ fontFamily: sans, fontWeight: 500, fontSize: isMobile ? 15 : 18, lineHeight: '24px', color: colors.text[300], margin: 0 }}>
                Share your profile with Technossus and tell us where you'd like to contribute. We're always looking for enthusiastic professionals in engineering, design, QA, cloud, and more.
              </p>
            </div>
            <button
              style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 8, height: 48, padding: '8px 24px', backgroundColor: red, border: 'none', cursor: 'pointer', fontFamily: sans, fontWeight: 600, fontSize: 14, color: '#FFFFFF', flexShrink: 0 }}
            >
              Join Our Team
              <img alt="" src={imgArrowForward} style={{ width: 16, height: 16 }} />
            </button>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <section>
        <div style={{ ...px, display: 'flex', flexDirection: 'column', gap: 48 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Tag label="TESTIMONIALS" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: h2FontSize, lineHeight: h2LineHeight, margin: 0 }}>
                <span style={{ color: '#010101' }}>Hear what </span>
                <span style={{ color: red }}>our clients have to say.</span>
              </h2>
              <p style={{ fontFamily: sans, fontWeight: 500, fontSize: isMobile ? 15 : 18, lineHeight: '24px', color: colors.text[700], margin: 0 }}>
                Real experiences, trusted partnerships, and measurable impact from the businesses we've helped transform.
              </p>
            </div>
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
    </>
  );
}
