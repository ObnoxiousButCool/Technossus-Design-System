'use client';

import React, { useState } from 'react';
import { Tag }            from '../../components/Tag';
import { TextInputField } from '../../components/TextInputField';
import { CTABanner }      from '../../components/CTABanner';
import { FadeUp }         from '../../components/Animate/FadeUp';
import { colors, fontFamily } from '../../ts/tokens';
import { useBreakpoint }  from '../../ts/breakpoints';
import { resolveImageSrc } from '../../ts/imageSrc';
import imgHeroBg      from '../../assets/Website_Images/Hero section/Contact Us.png';
import imgLocUSA      from '../../assets/Website_images 2/Location/USA.png';
import imgLocUK       from '../../assets/Website_images 2/Location/UK.png';
import imgLocPune     from '../../assets/Website_images 2/Location/Pune.png';
import imgLocLudhiana from '../../assets/Website_images 2/Location/Ludhiana.png';

// ── Figma asset URLs ──────────────────────────────────────────────────────────
const imgArrowForward = '/assets/8a747203f958377d346e5cba2f8ebb5af2b3712b.svg';
const imgPhilosophyImg= '/assets/841d1956c23918ec138a2eef41ff5a34b6b981e1.png';
const imgSubtractTL   = '/assets/e35ee95a68b0f29bf73fcd76e8285772bff083b1.svg';
const imgSubtractBR   = '/assets/d3bd3c494981fc117beb9354c38eaf44f6d42039.svg';

// ── Local tokens ──────────────────────────────────────────────────────────────
const sans  = fontFamily.sans;
const serif = fontFamily.serif;
const red   = colors.brand.primary;
const dark  = colors.brand.black;
const dark1 = colors.background.dark1;

const locations = [
  { country: 'United States',  company: 'Technossus Inc.',    city: 'Irvine, California, USA',       address: 'Technossus USA, 5 Park Plaza, Suite 320, Irvine, 92614',                                             phone: '+1 (949) 555-0123',  image: imgLocUSA      },
  { country: 'United Kingdom', company: 'Technossus UK Ltd.', city: 'London, United Kingdom',         address: 'The Hill Hub, 1a Highfield Road, Darford DA1 2JH, United Kingdom',                                  phone: '+44 20 5555 0123',   image: imgLocUK       },
  { country: 'India',          company: 'Technossus Inc.',    city: 'Ludhiana, Punjab, India',         address: 'SCO-59, Phase-2, Dugri Ludhiana, Punjab 141002',                                                     phone: '+1 (949) 555-0123',  image: imgLocLudhiana },
  { country: 'India',          company: 'Technossus Inc.',    city: 'Pune, Maharashtra, India',        address: '6th Floor, Tower-5, 1 Kharadi, opp. EON Free Zone MIDC, Knowledge Park, 411014',                    phone: '+1 (949) 555-0123',  image: imgLocPune     },
];

export default function ContactUs() {
  const { isMobile, isTablet } = useBreakpoint();
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' });
  const [consent, setConsent] = useState(false);

  const px = {
    maxWidth: 1440,
    margin: '0 auto',
    padding: isMobile ? '48px 16px' : isTablet ? '60px 32px' : '80px 96px',
  };

  const heroFontSize   = isMobile ? 26 : isTablet ? 34 : 48;
  const heroLineHeight = isMobile ? '34px' : isTablet ? '42px' : '56px';
  const h2FontSize     = isMobile ? 24 : isTablet ? 28 : 36;
  const h2LineHeight   = isMobile ? '32px' : '40px';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <img
          alt=""
          src={resolveImageSrc(imgHeroBg)}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(89.97deg, rgba(1,1,1,0.91) 36.4%, rgba(1,1,1,0) 108.78%)' }} />
        <div style={{ position: 'relative', ...px, minHeight: isMobile ? 400 : 560, display: 'flex', alignItems: 'center' }}>
          <div style={{ maxWidth: 711, display: 'flex', flexDirection: 'column', gap: isMobile ? 32 : 60 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <FadeUp>
                <p style={{ fontFamily: serif, fontWeight: 500, fontSize: heroFontSize, lineHeight: heroLineHeight, letterSpacing: '-0.96px', margin: 0 }}>
                  <span style={{ color: '#FFFFFF' }}>Big ideas, complex problems, or questions about what we do. </span>
                  <span style={{ color: red }}>We're here to listen and help.</span>
                </p>
              </FadeUp>
              <FadeUp delay={80}>
                <p style={{ fontFamily: sans, fontWeight: 500, fontSize: isMobile ? 15 : 18, lineHeight: '24px', color: '#FFFFFF', margin: 0 }}>
                  At Technossus, every conversation is a starting point for solving meaningful challenges. Whether you're exploring a new idea, need support with a complex problem, or want to understand how our technology solutions can fit your business, our team is ready to connect. Reach out to us and let's turn your challenges into opportunities together.
                </p>
              </FadeUp>
            </div>
            <FadeUp delay={120}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button style={{ display: 'flex', alignItems: 'center', gap: 8, height: 56, padding: '16px 24px', backgroundColor: red, border: 'none', cursor: 'pointer', fontFamily: sans, fontWeight: 600, fontSize: 16, color: '#FFFFFF' }}>
                Show us the problem
                <img alt="" src={imgArrowForward} style={{ width: 24, height: 24 }} />
              </button>
              <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 56, padding: '16px 24px', backgroundColor: 'transparent', border: `1px solid ${red}`, cursor: 'pointer', fontFamily: sans, fontWeight: 600, fontSize: 16, color: red }}>
                See how we work
              </button>
            </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── OUR PHILOSOPHY ───────────────────────────────────────────────────── */}
      <section>
        <div style={{ ...px, display: 'flex', flexDirection: 'column', gap: 36 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <FadeUp duration={500}><Tag label="OUR PHILOSPHY" /></FadeUp>
            <FadeUp>
              <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: h2FontSize, lineHeight: h2LineHeight, color: dark, margin: 0, maxWidth: 844 }}>
                At Technossus, we believe every conversation is the{' '}
                <span style={{ color: red }}>beginning of a meaningful relationship.</span>
              </h2>
            </FadeUp>
          </div>
          <div style={{ backgroundColor: colors.text[200], display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 24 : 61, alignItems: 'center', padding: isMobile ? '32px 20px' : isTablet ? '40px 32px' : '52px 48px', overflow: 'hidden' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h3 style={{ fontFamily: sans, fontWeight: 600, fontSize: isMobile ? 18 : 24, lineHeight: '32px', color: dark, margin: 0 }}>
                We approach every inquiry with curiosity, clarity, and a commitment to understanding the real challenge behind it.
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <p style={{ fontFamily: sans, fontWeight: 500, fontSize: isMobile ? 14 : 16, lineHeight: '24px', color: colors.text[700], margin: 0 }}>
                  No problem is too complex, and no idea is too early, we listen first, then collaborate to shape the right path forward.
                </p>
                <p style={{ fontFamily: sans, fontWeight: 500, fontSize: isMobile ? 14 : 16, lineHeight: '24px', color: colors.text[700], margin: 0 }}>
                  We see partnership as the foundation of progress. That means being transparent, responsive, and focused on outcomes that create lasting value. Whether it's a question, an idea, or a challenge, we treat it as an opportunity to build something better together.
                </p>
              </div>
            </div>
            {!isMobile && (
              <img
                alt="Team collaboration"
                src={imgPhilosophyImg}
                style={{ width: isTablet ? 280 : 480, height: isTablet ? 280 : 479, objectFit: 'cover', flexShrink: 0 }}
              />
            )}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────────────────────── */}
      <section>
        <div style={{ ...px, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <FadeUp>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: h2FontSize, lineHeight: h2LineHeight, color: dark, margin: 0, maxWidth: 583 }}>
              Let's start the conversation
            </h2>
            <p style={{ fontFamily: sans, fontWeight: 500, fontSize: isMobile ? 15 : 18, lineHeight: '24px', color: colors.text[700], margin: 0 }}>
              Share your details and our team will get back to you to explore how we can help.
            </p>
          </div>
          </FadeUp>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

            {/* Row 1: Your Name + Work Email */}
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 24 }}>
              <TextInputField
                label="Your Name"
                placeholder="Jane Doe"
                value={form.name}
                onChange={(v) => setForm(f => ({ ...f, name: v }))}
                required
              />
              <TextInputField
                label="Work Email"
                placeholder="jane@company.com"
                type="email"
                value={form.email}
                onChange={(v) => setForm(f => ({ ...f, email: v }))}
                required
              />
            </div>

            {/* Row 2: Phone Number + Area of Interest */}
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 24 }}>
              <TextInputField
                label="Phone Number"
                placeholder="+1 (949) 000-0000"
                type="tel"
                value={form.phone}
                onChange={(v) => setForm(f => ({ ...f, phone: v }))}
              />
              <TextInputField
                label="Area of Interest"
                state="Dropdown"
                selectedValue={form.interest}
                onSelectChange={(v) => setForm(f => ({ ...f, interest: v }))}
                options={[
                  { value: 'ai-transformation',     label: 'AI-Led Business Transformation' },
                  { value: 'data-analytics',         label: 'Data Intelligence & Analytics' },
                  { value: 'digital-experience',     label: 'Digital Experience Design' },
                  { value: 'product-engineering',    label: 'Product Engineering' },
                  { value: 'quality-engineering',    label: 'Quality Engineering' },
                  { value: 'cloud-modernization',    label: 'Cloud & Product Modernization' },
                ]}
              />
            </div>

            {/* Row 3: Full-width textarea */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
              <label style={{ fontFamily: sans, fontWeight: 600, fontSize: 14, lineHeight: '20px', color: dark }}>
                How Can We Help You?
              </label>
              <textarea
                placeholder="Briefly describe what you'd like to discuss or achieve..."
                value={form.message}
                onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                style={{
                  fontFamily: sans, fontWeight: 500, fontSize: 16, lineHeight: '24px',
                  color: dark, backgroundColor: '#FFFFFF', border: '1px solid #ADADAD',
                  borderRadius: 2, padding: '18px 16px', width: '100%',
                  boxSizing: 'border-box', outline: 'none', resize: 'vertical',
                  minHeight: 142,
                }}
              />
            </div>

            {/* Consent row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button
                type="button"
                onClick={() => setConsent(c => !c)}
                aria-checked={consent}
                role="checkbox"
                style={{
                  width: 24, height: 24, flexShrink: 0, cursor: 'pointer',
                  border: `2px solid ${red}`, borderRadius: 2,
                  background: consent ? red : '#fff', padding: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                {consent && (
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5L5 9L13 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
              <span style={{ fontFamily: sans, fontWeight: 500, fontSize: 14, lineHeight: '20px', color: '#5B5B5B' }}>
                I agree to be contacted by a Technossus representative regarding this request. Your data is never sold or shared.
              </span>
            </div>

            <button
              type="submit"
              style={{ display: 'flex', alignItems: 'center', gap: 8, height: 56, padding: '16px 24px', backgroundColor: red, border: 'none', cursor: 'pointer', fontFamily: sans, fontWeight: 600, fontSize: 16, color: '#FFFFFF', alignSelf: isMobile ? 'stretch' : 'flex-start' }}
            >
              Let's Talk
              <img alt="" src={imgArrowForward} style={{ width: 24, height: 24 }} />
            </button>
          </form>
        </div>
      </section>

      {/* ── OFFICE LOCATIONS ─────────────────────────────────────────────────── */}
      <section>
        <div style={{ ...px, display: 'flex', flexDirection: 'column', gap: 0 }}>
          <div style={{ backgroundColor: dark1, padding: isMobile ? '32px 20px' : isTablet ? '40px 32px' : 56, display: 'flex', flexDirection: 'column', gap: 36, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: 118, height: 10, background: red, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: 10, height: 118, background: red, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: 118, height: 10, background: red, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: 10, height: 118, background: red, pointerEvents: 'none' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: h2FontSize, lineHeight: h2LineHeight, margin: 0 }}>
                <span style={{ color: '#FFFFFF' }}>Wherever you are, </span>
                <span style={{ color: red }}>we're here to help you move forward.</span>
              </h2>
              <p style={{ fontFamily: sans, fontWeight: 500, fontSize: isMobile ? 15 : 18, lineHeight: '24px', color: '#FFFFFF', margin: 0, maxWidth: 813 }}>
                Technossus operates across multiple locations to stay close to our clients and partners. Our global teams are ready to collaborate, solve challenges, and support your digital transformation journey with speed and expertise. Reach out to the office nearest you and let's start the conversation.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 20 }}>
              {locations.map((loc, i) => (
                <div key={i} style={{ backgroundColor: dark1, display: 'flex', flexDirection: 'column' }}>
                  <img alt={loc.country} src={resolveImageSrc(loc.image)} style={{ width: '100%', height: isMobile ? 200 : 260, objectFit: 'cover', display: 'block' }} />
                  <div style={{ border: `1px solid ${colors.text[700]}`, borderTop: 'none', padding: isMobile ? 16 : 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div>
                      <h3 style={{ fontFamily: sans, fontWeight: 600, fontSize: isMobile ? 18 : 24, lineHeight: '32px', color: '#FFFFFF', margin: 0 }}>{loc.country}</h3>
                      <p style={{ fontFamily: sans, fontWeight: 500, fontSize: isMobile ? 13 : 14, lineHeight: '20px', color: colors.text[400], margin: 0 }}>{loc.company}</p>
                    </div>
                    <p style={{ fontFamily: sans, fontWeight: 500, fontSize: isMobile ? 13 : 14, lineHeight: '20px', color: colors.text[500], margin: 0 }}>{loc.city}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <p style={{ fontFamily: sans, fontWeight: 500, fontSize: isMobile ? 12 : 13, lineHeight: '18px', color: colors.text[400], margin: 0 }}>{loc.address}</p>
                      <p style={{ fontFamily: sans, fontWeight: 500, fontSize: isMobile ? 12 : 13, lineHeight: '18px', color: colors.text[400], margin: 0 }}>{loc.phone}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
