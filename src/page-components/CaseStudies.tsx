'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Tag } from '../../components/Tag';
import { CTABanner } from '../../components/CTABanner';
import { FadeUp } from '../../components/Animate/FadeUp';
import { useBreakpoint } from '../../ts/breakpoints';

// ─── Design tokens ────────────────────────────────────────────────────────────
const sans  = '"General Sans", system-ui, -apple-system, sans-serif';
const serif = '"Roboto Serif", Georgia, serif';
const red   = '#ED2939';
const dark1 = '#1B1B1B';

// ─── Asset URLs ───────────────────────────────────────────────────────────────
const imgHero        = '/assets/d16e5b610d1fff4d128bb7e9580d630eb3fa03e8.png';
const imgCardDefault = '/assets/fbbad1d37f7a4e076de4d16631dc6863c6c4444a.png';
const imgChevron     = '/assets/83feb004fa8d4ad578fcccdd2d4ee67a5041135b.svg';

// ─── Data ─────────────────────────────────────────────────────────────────────
interface CaseStudy {
  tags: string;
  industry: string;
  service: string;
  title: string;
  excerpt: string;
  slug?: string;
}

const caseStudies: CaseStudy[] = [
  // Healthcare
  { tags: 'HEALTHCARE • MOBILE PLATFORM',    industry: 'Healthcare',         service: 'Product Engineering',            title: 'Mobile Platform Increases Company Value for Healthcare Benefits Provider',         excerpt: 'A leading healthcare benefits provider needed a mobile strategy to extend services to brokers, employers, and end users. Technossus delivered a scalable platform with seamless data integration across insurers, brokers, and enterprise systems.', slug: 'healthcare-mobile-platform' },
  { tags: 'HEALTHCARE • CRM INTEGRATION',    industry: 'Healthcare',         service: 'Product Engineering',            title: 'CRM with Complex External Integrations Launches On Time',                         excerpt: 'A leading healthcare insurance provider needed a CRM integrating data from state and federal platforms under evolving regulatory requirements and a fixed go-live deadline. Delivered on time with real-time access to customer data.' },
  { tags: 'HEALTHCARE • ALM & GOVERNANCE',   industry: 'Healthcare',         service: 'Quality Engineering',            title: 'ALM Expertise Drives Successful Large-Scale Digital Transformation',               excerpt: 'A major U.S. healthcare provider needed to coordinate a complex multi-vendor digital platform transformation. Technossus established enterprise-wide ALM processes and governance frameworks, improving visibility and reducing risk.' },
  { tags: 'LIFE SCIENCES • CLINICAL PLATFORM', industry: 'Healthcare',       service: 'Product Engineering',            title: 'Clinical Trial Platform Accelerates Drug Development Timelines',                 excerpt: 'A leading pharmaceutical company conducting multi-site clinical trials across 30+ countries needed a unified digital platform to manage trial data, patient recruitment, and regulatory compliance from a single source of truth.', slug: 'clinical-trial-platform' },
  { tags: 'LIFE SCIENCES • LAB PLATFORM',    industry: 'Healthcare',         service: 'Product Engineering',            title: 'Unified Lab Platform Reduces Licensing Costs and Improves Throughput',             excerpt: 'Helix replaced three fragmented lab systems with one higher-performing LIMS, reducing licensing fees, eliminating manual labor through standardized integrations, and enabling greater testing throughput without adding staff.' },
  { tags: 'HEALTHCARE • STREAMING DATA',     industry: 'Healthcare',         service: 'Data Intelligence & Analytics',  title: 'Streaming Analytics Enables Real-Time Visibility Across Patient Flow',             excerpt: 'A healthcare organization needed live visibility into patient data as it was generated. A streaming analytics platform now feeds clinical dashboards in real time, enabling immediate action on delays, risks, and bottlenecks.' },
  { tags: 'HEALTHCARE • REVENUE CYCLE',      industry: 'Healthcare',         service: 'AI Led Business Transformation', title: 'Revenue Cycle Automation Reduces Denials and Improves Cash Flow',                 excerpt: 'Intelligent pre-submission validation catches errors before claims are submitted, routes exceptions automatically, and gives finance teams a real-time view from service to payment — improving collections and reducing revenue leakage.' },
  // Financial Services
  { tags: 'FINTECH • MORTGAGE PLATFORM',     industry: 'Financial Services', service: 'Product Engineering',            title: 'Unified Mortgage Platform Enables Scalable Lending Operations',                   excerpt: 'A leading financial services organization needed to unify multiple acquired mortgage systems into a single, seamless experience. Technossus built a unified platform connecting fragmented systems, improving data flow and simplifying workflows.' },
  { tags: 'INVESTMENT BANKING • DATA',       industry: 'Financial Services', service: 'Data Intelligence & Analytics',  title: 'Automated Data Validation Improves Decision Confidence',                          excerpt: 'A global investment bank depended on manual validation of financial dashboards, resulting in slow reporting cycles. An automated validation framework now continuously tests data across systems, automating 95% of validation scenarios.' },
  { tags: 'INSURANCE • DIGITAL EXPERIENCE',  industry: 'Financial Services', service: 'Digital Experience Design',      title: 'Insurance Brokerage Achieves 30% Faster Quote Turnaround',                       excerpt: 'A leading insurance broker lacked a fast, intuitive way to generate quotes. A mobile-first QuoteLite portal with real-time quoting capabilities reduced turnaround time by ~30% and improved broker productivity.' },
  // HiTech & SaaS
  { tags: 'HEALTHTECH • PRODUCT REDESIGN',   industry: 'HiTech / SaaS',     service: 'Digital Experience Design',      title: 'Connected Product Experience Improves Adoption — App Rating 1.4 to 3.4',        excerpt: 'A migraine treatment companion app was redesigned around real user conditions. Onboarding steps reduced from 13 to 7. Bluetooth reliability re-engineered. App rating improved from 1.4 to 3.4.' },
  { tags: 'SECURITY • COMPUTER VISION',      industry: 'HiTech / SaaS',     service: 'AI Led Business Transformation', title: 'Real-Time Visual Intelligence Enables 10ms Plate Recognition',                  excerpt: 'An edge-to-alert computer vision pipeline ingested live video from cameras, drones, and moving patrol cars — detecting vehicles, extracting license plate data via OCR, and matching against watchlist databases in near real time.' },
  { tags: 'GOVTECH • WORKFLOW AUTOMATION',   industry: 'HiTech / SaaS',     service: 'AI Led Business Transformation', title: 'Workflow Automation Clears 100% of Operational Backlog in 24 Hours',            excerpt: 'A high-volume traffic offence reporting workflow was automated from email intake to PDF review, validation, API lookups, and system submission — clearing the entire historical backlog in a single 24-hour cycle with 1000% efficiency improvement.' },
];

const industries = ['Healthcare', 'Financial Services', 'HiTech / SaaS'];
const services   = ['AI Led Business Transformation', 'Data Intelligence & Analytics', 'Digital Experience Design', 'Product Engineering', 'Quality Engineering', 'Cloud & Product Modernization'];

const PAGE_SIZE = 6;

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CaseStudies() {
  const { isMobile, isTablet } = useBreakpoint();

  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedService,  setSelectedService]  = useState<string | null>(null);
  const [industryOpen,     setIndustryOpen]     = useState(false);
  const [serviceOpen,      setServiceOpen]      = useState(false);
  const [visibleCount,     setVisibleCount]     = useState(PAGE_SIZE);

  const industryRef = useRef<HTMLDivElement>(null);
  const serviceRef  = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (industryRef.current && !industryRef.current.contains(e.target as Node)) {
        setIndustryOpen(false);
      }
      if (serviceRef.current && !serviceRef.current.contains(e.target as Node)) {
        setServiceOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const industry = params.get('industry');

    if (industry && industries.includes(industry)) {
      setSelectedIndustry(industry);
      setSelectedService(null);
    }
  }, []);

  // Filter logic
  const filtered = caseStudies.filter(cs => {
    if (selectedIndustry && cs.industry !== selectedIndustry) return false;
    if (selectedService  && cs.service  !== selectedService)  return false;
    return true;
  });

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [selectedIndustry, selectedService]);

  // ─── Layout helpers ────────────────────────────────────────────────────────
  const sectionGap = isMobile ? 48 : isTablet ? 60 : 80;
  const horizontalPadding = isMobile ? '0 16px' : isTablet ? '0 32px' : '0 80px';

  const inner: React.CSSProperties = {
    maxWidth: 1440,
    margin: '0 auto',
    padding: horizontalPadding,
  };

  const heroPadding = isMobile ? '32px 16px 0' : isTablet ? '40px 32px 0' : '40px 80px 0';

  const cols3 = isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(3,1fr)';
  const cardGap = isMobile ? 24 : 48;

  // ─── Dropdown style helpers ────────────────────────────────────────────────
  const dropdownMenuStyle: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: 0,
    background: '#fff',
    border: '1px solid #E8E8E8',
    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
    zIndex: 100,
    minWidth: 200,
    marginTop: 4,
  };

  function optionStyle(active: boolean): React.CSSProperties {
    return {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      padding: '12px 16px',
      fontFamily: sans,
      fontSize: 14,
      border: 'none',
      cursor: 'pointer',
      color:      active ? red     : '#383838',
      background: active ? '#F5F5F5' : 'transparent',
      fontWeight: active ? 600 : 500,
      boxSizing: 'border-box',
    };
  }

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff' }}>
        <div
          style={{
            maxWidth: 1440,
            margin: '0 auto',
            padding: heroPadding,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            gap: isMobile ? 32 : isTablet ? 40 : 80,
            boxSizing: 'border-box',
          }}
        >
          {/* Left: text */}
          <div
            style={{
              flex: '1 1 0',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
              minWidth: 0,
            }}
          >
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Case Studies', active: true },
              ]}
            />

            <FadeUp>
              <h1
                style={{
                  fontFamily: serif,
                  fontWeight: 600,
                  fontSize: isMobile ? 28 : isTablet ? 40 : 48,
                  lineHeight: isMobile ? '36px' : isTablet ? '48px' : '56px',
                  color: '#1E1E1E',
                  margin: 0,
                }}
              >
                Real outcomes, delivered with{' '}
                <span style={{ color: red }}>precision.</span>
              </h1>
            </FadeUp>

            <FadeUp delay={80}>
              <p
                style={{
                  fontFamily: sans,
                  fontWeight: 500,
                  fontSize: 18,
                  lineHeight: '24px',
                  color: '#5C5C5C',
                  margin: 0,
                }}
              >
                Explore how Technossus has helped healthcare, financial services, and technology organizations solve their most complex engineering challenges.
              </p>
            </FadeUp>

            {/* <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
              <Button variant="primary" label="Talk to Our Team" href="/contact" />
              <Button variant="secondary" label="Explain Our Work" href="#case-studies" />
            </div> */}
          </div>

          {/* Right: image */}
          {!isMobile && (
            <div style={{ flexShrink: 0 }}>
              <img
                src={imgHero}
                alt="AI digital human"
                style={{
                  width: isTablet ? 360 : 540,
                  height: isTablet ? 360 : 540,
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>
          )}
        </div>
      </section>

      {/* ── CASE STUDIES ──────────────────────────────────────────────────────── */}
      <section id="case-studies" style={{ background: '#fff', marginTop: isMobile ? 40 : 0 }}>
        <div style={inner}>

          {/* Tag */}
          <Tag label="PROOF" />

          {/* Filter bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 8,
              marginTop: 16,
              marginBottom: 48,
            }}
          >
            {/* All Case Studies */}
            <button
              onClick={() => { setSelectedIndustry(null); setSelectedService(null); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 48,
                padding: '8px 24px',
                background: (!selectedIndustry && !selectedService) ? red : '#fff',
                color:      (!selectedIndustry && !selectedService) ? '#fff' : red,
                border: `1px solid ${red}`,
                fontFamily: sans,
                fontWeight: 600,
                fontSize: 14,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                boxSizing: 'border-box',
              }}
            >
              All Case Studies
            </button>

            {/* Industry dropdown */}
            <div ref={industryRef} style={{ position: 'relative' }}>
              <button
                onClick={() => { setIndustryOpen(o => !o); setServiceOpen(false); }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: 48,
                  paddingLeft: 24,
                  paddingRight: 18,
                  background: selectedIndustry ? red : '#fff',
                  color:      selectedIndustry ? '#fff' : red,
                  border: `1px solid ${red}`,
                  fontFamily: sans,
                  fontWeight: selectedIndustry ? 600 : 500,
                  fontSize: 14,
                  cursor: 'pointer',
                  gap: 8,
                  whiteSpace: 'nowrap',
                  boxSizing: 'border-box',
                }}
              >
                {selectedIndustry ?? 'Industry'}
                <img
                  src={imgChevron}
                  alt=""
                  style={{
                    width: 16,
                    height: 16,
                    transform: 'rotate(90deg)',
                    display: 'block',
                    flexShrink: 0,
                    filter: selectedIndustry ? 'brightness(0) invert(1)' : 'invert(17%) sepia(97%) saturate(5234%) hue-rotate(344deg) brightness(96%) contrast(98%)',
                  }}
                />
              </button>
              {industryOpen && (
                <div style={dropdownMenuStyle}>
                  {selectedIndustry && (
                    <button
                      style={optionStyle(false)}
                      onClick={() => { setSelectedIndustry(null); setIndustryOpen(false); }}
                    >
                      All Industries
                    </button>
                  )}
                  {industries.map(ind => (
                    <button
                      key={ind}
                      style={optionStyle(selectedIndustry === ind)}
                      onClick={() => { setSelectedIndustry(ind); setIndustryOpen(false); }}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Service dropdown */}
            <div ref={serviceRef} style={{ position: 'relative' }}>
              <button
                onClick={() => { setServiceOpen(o => !o); setIndustryOpen(false); }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: 48,
                  paddingLeft: 24,
                  paddingRight: 18,
                  background: selectedService ? red : '#fff',
                  color:      selectedService ? '#fff' : red,
                  border: `1px solid ${red}`,
                  fontFamily: sans,
                  fontWeight: selectedService ? 600 : 500,
                  fontSize: 14,
                  cursor: 'pointer',
                  gap: 8,
                  whiteSpace: 'nowrap',
                  boxSizing: 'border-box',
                }}
              >
                {selectedService ?? 'Service'}
                <img
                  src={imgChevron}
                  alt=""
                  style={{
                    width: 16,
                    height: 16,
                    transform: 'rotate(90deg)',
                    display: 'block',
                    flexShrink: 0,
                    filter: selectedService ? 'brightness(0) invert(1)' : 'invert(17%) sepia(97%) saturate(5234%) hue-rotate(344deg) brightness(96%) contrast(98%)',
                  }}
                />
              </button>
              {serviceOpen && (
                <div style={dropdownMenuStyle}>
                  {selectedService && (
                    <button
                      style={optionStyle(false)}
                      onClick={() => { setSelectedService(null); setServiceOpen(false); }}
                    >
                      All Services
                    </button>
                  )}
                  {services.map(svc => (
                    <button
                      key={svc}
                      style={optionStyle(selectedService === svc)}
                      onClick={() => { setSelectedService(svc); setServiceOpen(false); }}
                    >
                      {svc}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Card grid */}
          {visible.length > 0 ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: cols3,
                gap: cardGap,
              }}
            >
              {visible.map((cs, i) => (
                <CaseStudyCard key={i} cs={cs} />
              ))}
            </div>
          ) : (
            <p
              style={{
                fontFamily: sans,
                fontSize: 16,
                fontWeight: 500,
                color: '#5C5C5C',
                textAlign: 'center',
                padding: '48px 0',
              }}
            >
              No case studies match the selected filters.
            </p>
          )}

          {/* Load More */}
          {hasMore && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
              <button
                onClick={() => setVisibleCount(c => c + PAGE_SIZE)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: sans,
                  fontWeight: 600,
                  fontSize: 16,
                  color: red,
                  padding: 0,
                }}
              >
                Load More Impact Stories
                <img
                  src={imgChevron}
                  alt=""
                  style={{
                    width: 16,
                    height: 16,
                    transform: 'rotate(90deg)',
                    display: 'block',
                    flexShrink: 0,
                    filter: 'invert(17%) sepia(97%) saturate(5234%) hue-rotate(344deg) brightness(96%) contrast(98%)',
                  }}
                />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────────────── */}
      <section style={{ marginTop: sectionGap }}>
        <div style={inner}>
          <CTABanner
            size="large"
            label="LET'S WORK ON IT TOGETHER"
            heading="Ready to become our next success story?"
            body="Whether you're modernizing systems, building a new product, or scaling engineering, we're ready to collaborate."
            primaryCta="Schedule a Strategy Session"
            secondaryCta="Contact Us"
            style={{ width: '100%', maxWidth: 'none' }}
          />
        </div>
      </section>

      <div style={{ height: isMobile ? 48 : 80 }} />
    </>
  );
}

// ─── CaseStudyCard ────────────────────────────────────────────────────────────
function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  const sans = '"General Sans", system-ui, -apple-system, sans-serif';
  const red  = '#ED2939';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: '#fff',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
        overflow: 'hidden',
      }}
    >
      {/* Card image */}
      <img
        src={imgCardDefault}
        alt={cs.title}
        style={{
          width: '100%',
          height: 260,
          objectFit: 'cover',
          display: 'block',
          flexShrink: 0,
        }}
      />

      {/* Card body */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          padding: '24px 0px 28px',
          flex: '1 1 auto',
        }}
      >
        {/* Tags */}
        <p
          style={{
            fontFamily: sans,
            fontWeight: 600,
            fontSize: 14,
            color: '#949494',
            margin: 0,
            lineHeight: '20px',
          }}
        >
          {cs.tags}
        </p>

        {/* Title */}
        <h3
          style={{
            fontFamily: sans,
            fontWeight: 600,
            fontSize: 20,
            lineHeight: '28px',
            color: '#383838',
            margin: 0,
          }}
        >
          {cs.title}
        </h3>

        {/* Excerpt */}
        <p
          style={{
            fontFamily: sans,
            fontWeight: 500,
            fontSize: 16,
            lineHeight: '24px',
            color: '#5C5C5C',
            margin: 0,
          }}
        >
          {cs.excerpt}
        </p>

        {/* CTA */}
        <div style={{ marginTop: 8 }}>
          {cs.slug ? (
            <a
              href={`/case-studies/${cs.slug}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 56,
                width: 180,
                background: 'transparent',
                border: `1px solid ${red}`,
                color: red,
                fontFamily: sans,
                fontWeight: 600,
                fontSize: 16,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                boxSizing: 'border-box',
                textDecoration: 'none',
              }}
            >
              View case study
            </a>
          ) : (
          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 56,
              width: 180,
              background: 'transparent',
              border: `1px solid ${red}`,
              color: red,
              fontFamily: sans,
              fontWeight: 600,
              fontSize: 16,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              boxSizing: 'border-box',
            }}
          >
            View case study
          </button>
          )}
        </div>
      </div>
    </div>
  );
}
