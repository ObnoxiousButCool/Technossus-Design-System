'use client';

import React from 'react';
import { Tag }         from '../../components/Tag';
import { Accordion }   from '../../components/Accordion';
import { Testimonial } from '../../components/Testimonial';
import { CTABanner }   from '../../components/CTABanner';
import { FadeUp }      from '../../components/Animate/FadeUp';
import { colors, fontFamily } from '../../ts/tokens';
import { useBreakpoint } from '../../ts/breakpoints';
import type { AccordionItem } from '../../components/Accordion';
import { resolveImageSrc } from '../../ts/imageSrc';
import imgHeroBg from '../../assets/Website_Images/Hero section/Careers page.png';

// ── Figma asset URLs ──────────────────────────────────────────────────────────
const imgArrowForward = '/assets/8a747203f958377d346e5cba2f8ebb5af2b3712b.svg';
const imgBento1       = '/assets/a2c5aedfd47c9d61a54070b6ef0abcd89a59217a.png';
const imgBento2       = '/assets/b0f341860b2c6f76cfb4422ad266623aab2d1f6e.png';
const imgBento3       = '/assets/fba5208f46ffc48029fdd0a7b3697e305c66419c.png';
const imgHiringPerson = '/assets/841d1956c23918ec138a2eef41ff5a34b6b981e1.png';
const imgSubtractTL   = '/assets/e35ee95a68b0f29bf73fcd76e8285772bff083b1.svg';
const imgSubtractBR   = '/assets/d3bd3c494981fc117beb9354c38eaf44f6d42039.svg';
const imgJeffreyHarker = 'https://randomuser.me/api/portraits/men/32.jpg';
const imgAnitaSalgado  = 'https://randomuser.me/api/portraits/women/44.jpg';
const imgTylerZucchiatti = 'https://randomuser.me/api/portraits/men/75.jpg';

// ── Local tokens ──────────────────────────────────────────────────────────────
const sans  = fontFamily.sans;
const serif = fontFamily.serif;
const red   = colors.brand.primary;
const dark  = colors.brand.black;
const dark1 = colors.background.dark1;

const accordionItems: AccordionItem[] = [
  {
    title: 'Innovation Driven',
    subtitle: 'Work with cutting-edge technologies on projects that redefine industries.',
    content: {
      type: 'detail',
      serviceLabel: 'ENGINEERING EXCELLENCE',
      heading: 'A culture built on curiosity, ownership, and continuous learning',
      body: [
        "Discover a culture of innovation, collaboration, and continuous growth at Technossus, where ideas are valued, ownership is encouraged, and learning never stops. We bring together passionate individuals to solve complex challenges and create meaningful impact through technology.",
        'We’re looking for curious, driven people ready to shape the future of technology with us where your work matters, your voice is heard, and your growth is supported.',
      ],
    },
  },
  {
    title: 'Work - Life Balance',
    subtitle: 'Flexible schedules and remote options that respect your personal time.',
    content: {
      type: 'detail',
      serviceLabel: 'WORK - LIFE BALANCE',
      heading: 'Flexibility that supports both performance and personal well-being.',
      body: [
        'At Technossus, we believe great work happens when people have the space to recharge, focus, and maintain balance outside of work. Flexible schedules and remote work options help our teams manage personal commitments without compromising collaboration or growth.',
        'We foster a culture built on trust, ownership, and respect for personal time. Whether it’s supporting flexible work hours, encouraging time off, or creating a healthier pace of work, we aim to help our teams perform sustainably over the long term.',
      ],
    },
  },
  {
    title: 'Global Impact',
    subtitle: 'Work with cutting-edge technologies on projects that redefine industries.',
    content: {
      type: 'detail',
      serviceLabel: 'GLOBAL IMPACT',
      heading: 'Continuous learning, mentorship, and growth opportunities built into every stage of your journey.',
      body: [
        "At Technossus, growth is not limited to job titles, it is driven by continuous learning, hands-on experience, and exposure to meaningful work. We support our teams through mentorship, skill development programs, certifications, and opportunities to work across emerging technologies and industries.",
        "With clear growth pathways and a culture of ownership, employees are encouraged to take initiative, expand their capabilities, and shape their careers based on their strengths and interests.",
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

const testimonials: Array<{ quote: string; name: string; title: string; color: 'white' | 'red'; authorImage: string }> = [
  {
    quote: 'Working at Technossus has given me the opportunity to solve meaningful challenges while continuously growing my technical and leadership skills. The collaborative environment here truly encourages innovation and ownership.',
    name: 'Pooja Thite', title: 'Consultant- Software Development (Level I) | Technical', color: 'white', authorImage: imgJeffreyHarker,
  },
  {
    quote: 'Technossus empowers its teams to think beyond conventional solutions. Every project brings new opportunities to learn, innovate, and create real business impact for clients across industries.',
    name: 'Aman', title: 'Senior Management Trainee | Functional', color: 'red', authorImage: imgAnitaSalgado,
  },
  {
    quote: 'What stands out most about Technossus is the people. It’s a place where expertise, teamwork, and ambition come together, creating an environment where you’re supported to do your best work every day.',
    name: 'Kuldeep Thakur', title: 'Intern-Software Development | Technical', color: 'white', authorImage: imgTylerZucchiatti,
  },
];

export default function Careers() {
  const { isMobile, isTablet } = useBreakpoint();

  const px = {
    maxWidth: 1440,
    margin: '0 auto',
    padding: isMobile ? '0 16px' : isTablet ? '0 32px' : '0 80px',
  };

  const heroPx = {
    maxWidth: 1440,
    margin: '0 auto',
    padding: isMobile ? '0 16px' : isTablet ? '0 32px' : '0 96px',
  };

  const heroFontSize   = isMobile ? 28 : isTablet ? 36 : 48;
  const heroLineHeight = isMobile ? '36px' : isTablet ? '44px' : '56px';
  const h2FontSize     = isMobile ? 24 : isTablet ? 28 : 36;
  const h2LineHeight   = isMobile ? '32px' : '40px';
  const bentoHeight    = isMobile ? 280 : isTablet ? 400 : 600;

  return (
    <>
      <main style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <img
          alt=""
          src={resolveImageSrc(imgHeroBg)}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(89.97deg, rgba(1,1,1,0.91) 36.4%, rgba(1,1,1,0) 108.78%)' }} />
        <div style={{ position: 'relative', ...heroPx, minHeight: isMobile ? 400 : 560, display: 'flex', alignItems: 'center' }}>
          <div style={{ maxWidth: 711, display: 'flex', flexDirection: 'column', gap: isMobile ? 32 : 60 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <FadeUp duration={500}><Tag label="CAREERS AT TECHNOSSUS" variant="light" /></FadeUp>
              <FadeUp>
                <p style={{ fontFamily: serif, fontWeight: 500, fontSize: heroFontSize, lineHeight: heroLineHeight, letterSpacing: '-0.96px', margin: 0 }}>
                  <span style={{ color: '#FFFFFF' }}>Your Next Chapter </span>
                  <span style={{ color: red }}>Starts Here</span>
                </p>
              </FadeUp>
              {/* <FadeUp delay={80}>
                <p style={{ fontFamily: sans, fontWeight: 500, fontSize: isMobile ? 15 : 18, lineHeight: '24px', color: '#FFFFFF', margin: 0 }}>
                  We're more than a company, we're a hub of innovation, collaboration, and continuous learning. If you're passionate about technology and making real impact, your next chapter starts here.
                </p>
              </FadeUp> */}
            </div>
            <FadeUp delay={120}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button style={{ display: 'flex', alignItems: 'center', gap: 8, height: 56, padding: '16px 24px', backgroundColor: red, border: 'none', cursor: 'pointer', fontFamily: sans, fontWeight: 600, fontSize: 16, lineHeight: '28px', color: '#FFFFFF' }}>
                Send Us Your Resume
                <img alt="" src={imgArrowForward} style={{ width: 24, height: 24 }} />
              </button>
              {/* <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 56, padding: '16px 24px', backgroundColor: 'transparent', border: `1px solid ${red}`, cursor: 'pointer', fontFamily: sans, fontWeight: 600, fontSize: 16, lineHeight: '28px', color: red }}>
                See how we work
              </button> */}
            </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── LIFE AT TECHNOSSUS / BENTO PHOTO GRID ────────────────────────────── */}
      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div style={{ ...px, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div>
            <FadeUp duration={500}><Tag label="LIFE AT TECHNOSSUS" /></FadeUp>
            <FadeUp>
              <p style={{ fontFamily: serif, fontWeight: 500, fontSize: h2FontSize, lineHeight: heroLineHeight, letterSpacing: '-0.96px', margin: 0 }}>
                <span>Collaboration. Innovation. Growth.</span>
              </p>
            </FadeUp>
          </div>
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
              <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: h2FontSize, lineHeight: h2LineHeight, margin: 0,  color: dark }}>
                Work alongside passionate teams crafting scalable digital solutions for some of the
                <span style={{ color: red }}> world’s most dynamic industries</span>
              </h2>
            </FadeUp>
          </div>
          <Accordion items={accordionItems} defaultActiveIndex={0} />
        </div>
      </section>

      {/* ── WE ARE HIRING ────────────────────────────────────────────────────── */}
      <section>
        <div style={{ ...px }}>
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
                  <span style={{ color: red }}> our Team Says.</span>
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
                authorImage={t.authorImage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────────── */}
      <section>
        <div style={{ ...px }}>
      <CTABanner
        size="large"
        label="LET'S WORK TOGETHER"
        heading="Together, we can break boundaries and build what’s next with confidence"
        body="Join our talent community to stay updated on future openings that match your skill set and interests."
        primaryCta="Join Us"
        secondaryCta="Contact Us"
        style={{ width: '100%', maxWidth: 'none' }}
      />
        </div>
      </section>
      </main>
      <div style={{ height: 80 }} />
    </>
  );
}
