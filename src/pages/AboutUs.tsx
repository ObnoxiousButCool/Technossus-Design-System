import React from 'react';
import { Tag }         from '../../components/Tag';
import { Leader }      from '../../components/Leader';
import { Testimonial } from '../../components/Testimonial';
import { CTABanner }   from '../../components/CTABanner';
import { FadeUp }      from '../../components/Animate/FadeUp';
import { colors, fontFamily } from '../../ts/tokens';
import { useBreakpoint } from '../../ts/breakpoints';
import imgRavnish from '../../assets/Website_Images/Leadership/Ravnish.png';
import imgGiri    from '../../assets/Website_Images/Leadership/Giri.png';
import imgKumar   from '../../assets/Website_Images/Leadership/Kumar.png';
import imgSham    from '../../assets/Website_Images/Leadership/Sham.png';
import imgZia     from '../../assets/Website_Images/Leadership/Zia.png';
import imgBasudev from '../../assets/Website_Images/Leadership/Basudev.png';
import imgSambit  from '../../assets/Website_Images/Leadership/Sambit.png';
import imgDainish from '../../assets/Website_Images/Leadership/Dainish.png';
import imgHeroBg  from '../../assets/Website_Images/Hero section/About Us.png';

// ── Figma asset URLs ──────────────────────────────────────────────────────────
const imgArrowForward = '/assets/8a747203f958377d346e5cba2f8ebb5af2b3712b.svg';
const imgMissionIcon  = '/assets/61200c7f88a68751add502d264dc727a8b8164b7.svg';
const imgSubtractTL   = '/assets/e35ee95a68b0f29bf73fcd76e8285772bff083b1.svg';
const imgSubtractBR   = '/assets/d3bd3c494981fc117beb9354c38eaf44f6d42039.svg';
const imgHistory      = '/assets/530970c90fed204526d7d1dd49d291d623489c6c.png';

// ── Local tokens ──────────────────────────────────────────────────────────────
const sans  = fontFamily.sans;
const serif = fontFamily.serif;
const red   = colors.brand.primary;
const dark  = colors.brand.black;
const dark1 = colors.background.dark1;

const pillars = [
  { title: 'Empower',  body: 'Enabling teams with the tools and strategies to achieve autonomous high-performance.' },
  { title: 'Enhance',  body: 'Optimizing existing ecosystems through intelligent data layers and refined UX.' },
  { title: 'Secure',   body: 'Fortifying digital infrastructure with proactive, enterprise-grade security protocols.' },
  { title: 'Evolve',   body: 'Adapting architectures to meet the demands of a future-first AI landscape.' },
];

const leaders = [
  { role: 'FOUNDER, MANAGING PARTNER, TECHNOSSUS USA',                       name: 'Ravnish Bhalla',    bio: '', photo: imgRavnish },
  { role: 'MANAGING PARTNER, TECHNOSSUS USA',                                 name: 'Giri Kalluri',      bio: '', photo: imgGiri    },
  { role: 'CEO & PRESIDENT, TECHNOSSUS INDIA',                                name: 'Kumar Gaurav',      bio: '', photo: imgKumar   },
  { role: 'EXECUTIVE DIRECTOR, CLIENT SUCCESS GROUP, TECHNOSSUS USA',         name: 'Sham Ramakrishnan', bio: '', photo: imgSham    },
  { role: 'VICE PRESIDENT, DIGITAL EXPERIENCE DESIGN, TECHNOSSUS INDIA',     name: 'Zia Rahman',        bio: '', photo: imgZia     },
  { role: 'DIRECTOR SALES, TECHNOSSUS UK',                                    name: 'Basudev Pal',       bio: '', photo: imgBasudev },
  { role: 'DIRECTOR GLOBAL COMPETENCY HEAD, TECHNOSSUS INDIA',               name: 'Sambit Mohanty',    bio: '', photo: imgSambit  },
  { role: 'EXECUTIVE DIRECTOR, TECHNOSSUS INDIA',                             name: 'Dainish Hingwe',    bio: '', photo: imgDainish },
];

const testimonials: Array<{ quote: string; name: string; title: string; color: 'white' | 'red' }> = [
  {
    quote: '"We are very pleased with the quality of service the Technossus team has provided to the BTX lab. The lab sincerely appreciates the team\'s responsiveness and attention to detail in building new features into our LIMS and for the resolution of production issues."',
    name: 'Jeffrey Harker', title: 'System Manager Cloud Engineering', color: 'white',
  },
  {
    quote: '"Technossus has been a game-changer for AdaptHealth. Their dedication to quality and commitment to continuous improvement is unmatched. Their adaptability and willingness to learn make them the perfect partner."',
    name: 'Anita Salgado', title: 'Senior Business Systems Analyst', color: 'red',
  },
  {
    quote: '"Flawless rollout of New Relic with no downtime. Net savings on overall costs by delivering projects with half of the requested staff — Ridiculously Qualified Team."',
    name: 'Tyler Zucchiatti', title: 'Director, Software Development - Middleware & Integration', color: 'white',
  },
];

export default function AboutUs() {
  const { isMobile, isTablet } = useBreakpoint();
  const isCompact = isMobile || isTablet;

  const px = {
    maxWidth: 1440,
    margin: '0 auto',
    padding: isMobile ? '48px 16px' : isTablet ? '60px 32px' : '80px 96px',
  };

  const heroFontSize   = isMobile ? 28 : isTablet ? 36 : 48;
  const heroLineHeight = isMobile ? '36px' : isTablet ? '44px' : '56px';
  const h2FontSize     = isMobile ? 24 : isTablet ? 28 : 36;
  const h2LineHeight   = isMobile ? '32px' : isTablet ? '36px' : '40px';

  const leadersGrid = isMobile
    ? 'repeat(2, 1fr)'
    : isTablet
    ? 'repeat(2, 1fr)'
    : 'repeat(4, 1fr)';

  const pillarsGrid = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)';

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
        <div style={{ position: 'relative', ...px, minHeight: isMobile ? 420 : 560, display: 'flex', alignItems: 'center' }}>
          <div style={{ maxWidth: 711, display: 'flex', flexDirection: 'column', gap: isMobile ? 32 : 60 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <FadeUp>
                <p style={{ fontFamily: serif, fontWeight: 500, fontSize: heroFontSize, lineHeight: heroLineHeight, letterSpacing: '-0.96px', margin: 0 }}>
                  <span style={{ color: '#FFFFFF' }}>Our Focus is On Your Success. </span>
                  <span style={{ color: red }}>Your Success is an Extension of Our Values.</span>
                </p>
              </FadeUp>
              <FadeUp delay={80}>
                <p style={{ fontFamily: sans, fontWeight: 500, fontSize: isMobile ? 15 : 18, lineHeight: '24px', color: '#FFFFFF', margin: 0 }}>
                  At Technossus, our mission is to accelerate your vision through purposeful digital transformation engineered across four core pillars that bring strategy, technology, and execution into alignment. We aim to simplify complexity and enable businesses to adopt the right technologies with clarity and speed.
                </p>
              </FadeUp>
            </div>
            <FadeUp delay={120}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button style={{ display: 'flex', alignItems: 'center', gap: 8, height: 56, padding: '16px 24px', backgroundColor: red, border: 'none', cursor: 'pointer', fontFamily: sans, fontWeight: 600, fontSize: 16, lineHeight: '28px', color: '#FFFFFF' }}>
                See how we work
                <img alt="" src={imgArrowForward} style={{ width: 24, height: 24, display: 'block' }} />
              </button>
              <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 56, padding: '16px 24px', backgroundColor: 'transparent', border: `1px solid ${red}`, cursor: 'pointer', fontFamily: sans, fontWeight: 600, fontSize: 16, lineHeight: '28px', color: red }}>
                Contact Us
              </button>
            </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── OUR MISSION ──────────────────────────────────────────────────────── */}
      <section>
        <div style={{ ...px, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <FadeUp duration={500}><Tag label="OUR MISSION" /></FadeUp>
          <div style={{ position: 'relative', backgroundColor: dark1, padding: isMobile ? '32px 20px' : isTablet ? '40px 32px' : 56, display: 'flex', flexDirection: 'column', gap: 36, overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: 118, height: 10, background: red, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: 10, height: 118, background: red, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: 118, height: 10, background: red, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: 10, height: 118, background: red, pointerEvents: 'none' }} />

            <FadeUp>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 934, color: '#FFFFFF' }}>
                <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: h2FontSize, lineHeight: h2LineHeight, margin: 0 }}>
                  Engineered to accelerate your vision through{' '}
                  <span style={{ color: red }}>four core pillars</span>
                  {' '}of digital transformation.
                </h2>
                <p style={{ fontFamily: sans, fontWeight: 500, fontSize: isMobile ? 15 : 18, lineHeight: '24px', margin: 0 }}>
                  At Technossus, our mission is to accelerate your vision through purposeful digital transformation engineered across four core pillars that bring strategy, technology, and execution into alignment.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={60}>
            <div style={{ display: 'grid', gridTemplateColumns: pillarsGrid, gap: 24 }}>
              {pillars.map((p) => (
                <div key={p.title} style={{ backgroundColor: dark1, border: '1px solid rgba(255,255,255,0.05)', padding: isMobile ? '24px 20px' : 33, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ width: 28, height: 28, position: 'relative', flexShrink: 0 }}>
                    <img alt="" src={imgMissionIcon} style={{ width: '100%', height: '100%', display: 'block' }} />
                  </div>
                  <h3 style={{ fontFamily: sans, fontWeight: 600, fontSize: isMobile ? 18 : 24, lineHeight: '32px', color: '#FFFFFF', margin: 0 }}>{p.title}</h3>
                  <p style={{ fontFamily: sans, fontWeight: 500, fontSize: isMobile ? 14 : 16, lineHeight: '24px', color: colors.text[300], margin: 0 }}>{p.body}</p>
                </div>
              ))}
            </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── EXECUTIVE LEADERSHIP ─────────────────────────────────────────────── */}
      <section>
        <div style={{ ...px, display: 'flex', flexDirection: 'column', gap: 36 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <FadeUp duration={500}><Tag label="EXECUTIVE LEADERSHIP" /></FadeUp>
            <FadeUp>
              <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: h2FontSize, lineHeight: h2LineHeight, color: colors.text[900], margin: 0, maxWidth: 946 }}>
                <span style={{ color: dark1 }}>Meet the executive leadership </span>
                <span style={{ color: red }}>driving Technossus with vision and impact.</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={60}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[leaders.slice(0, 4), leaders.slice(4)].map((row, ri) => (
              <div key={ri} style={{ display: 'grid', gridTemplateColumns: leadersGrid, gap: 16 }}>
                {row.map((l) => (
                  <Leader key={l.name} role={l.role} name={l.name} bio={l.bio} photo={l.photo} />
                ))}
              </div>
            ))}
          </div>
          </FadeUp>
        </div>
      </section>

      {/* ── OUR HISTORY ──────────────────────────────────────────────────────── */}
      <section>
        <div style={{ ...px, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <FadeUp duration={500}><Tag label="OUR HISTORY" /></FadeUp>
            <FadeUp>
              <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: h2FontSize, lineHeight: h2LineHeight, margin: 0, maxWidth: 946 }}>
                <span style={{ color: dark1 }}>From vision to execution: </span>
                <span style={{ color: red }}>our story of continuous evolution</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={40} distance={16}>
            <img
              alt="Technossus history timeline"
              src={imgHistory}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </FadeUp>
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
