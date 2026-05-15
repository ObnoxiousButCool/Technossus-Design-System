"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Tag } from "../../../components/Tag";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Accordion } from "../../../components/Accordion";
import { CTABanner } from "../../../components/CTABanner";
import { ContactFormPopUp } from "../../../components/ContactFormPopUp";
import { Button } from "../../../components/Button";
import { FadeUp } from "../../../components/Animate/FadeUp";
import { Stats } from "../../../components/Stats";
import { Card } from "../../../components/Card";
import { useBreakpoint } from "../../../ts/breakpoints";
import type { AccordionItem } from "../../../components/Accordion";
import { resolveImageSrc } from "../../../ts/imageSrc";
import { getContactFormTopicForRoute } from "../../../components/CTABanner/contactFormTopics";
import imgHero from "../../../assets/Website_Images/Services/Quality Eng..png";
import imgCollaborators from "../../../assets/Website_images 2/Logo.png";

const imgCardPhoto = "/assets/fbbad1d37f7a4e076de4d16631dc6863c6c4444a.png";

const sans = '"General Sans", system-ui, -apple-system, sans-serif';
const serif = '"Roboto Serif", Georgia, serif';
const red = "#ED2939";
const dark1 = "#1B1B1B";

const CornerTL = () => (
  <>
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 118,
        height: 10,
        background: red,
        pointerEvents: "none",
        zIndex: 2,
      }}
    />
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 10,
        height: 118,
        background: red,
        pointerEvents: "none",
        zIndex: 2,
      }}
    />
  </>
);
const CornerBR = () => (
  <>
    <div
      style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 118,
        height: 10,
        background: red,
        pointerEvents: "none",
        zIndex: 2,
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 10,
        height: 118,
        background: red,
        pointerEvents: "none",
        zIndex: 2,
      }}
    />
  </>
);

const accordionItems: AccordionItem[] = [
  {
    title: "Quality Engineering & Independent Assurance",
    subtitle: "Your release shouldn't feel like a bet every time.",
    content: {
      type: "detail",
      serviceLabel: "QUALITY ENGINEERING & INDEPENDENT ASSURANCE",
      heading: "Your release shouldn't feel like a bet every time.",
      body: [
        "Objective validation matters most when the team that built the system is also the one reviewing it. Independent QA brings a consistent, unbiased perspective across releases, environments, and system changes. We design test strategies around how you actually build: your stack, release cadence, and the business-critical paths where a failure would hurt most.",
        "Organizations with mature QE practices resolve production defects 6x faster and at 30x lower cost than teams catching the same issues post-release. — NIST",
      ],
    },
  },
  {
    title: "Continuous Quality & QAOps Engineering",
    subtitle: "Quality that lives in the pipeline, from design to release.",
    content: {
      type: "detail",
      serviceLabel: "CONTINUOUS QUALITY & QAOPS ENGINEERING",
      heading: "Quality that lives in the pipeline — from design to release.",
      body: [
        "Functional, non-functional, API, and regression testing shouldn't wait for the build to finish. Embedding quality into CI/CD pipelines means risk surfaces early, where it's cheapest to fix. We build Quality as Code: automated test suites integrated into the pipeline, risk-based coverage, and real-time observability at every stage.",
        "Teams with QAOps-integrated pipelines report up to 40% fewer production incidents and measurable improvements in release frequency and defect escape rates. — World Quality Report",
      ],
    },
  },
  {
    title: "Performance, Resilience & Scalability",
    subtitle: "Ship version one. Then build the product it needs to become.",
    content: {
      type: "detail",
      serviceLabel: "PERFORMANCE, RESILIENCE & SCALABILITY",
      heading: "Know how your system behaves before your users find out.",
      body: [
        "Staging environments don't tell the whole truth. Performance under real load, resilience when dependencies fail, and behavior at scale are questions staging can't fully answer. We validate system performance against real-world usage patterns — load and stress testing, chaos engineering for cloud-native environments, scalability benchmarking as traffic and data volumes grow.",
        "Organizations that invest in performance and resilience engineering report 50–70% reduction in unplanned downtime and significantly lower cloud cost overruns at scale. — Gartner",
      ],
    },
  },
  {
    title: "Governance, Compliance & Trust Assurance",
    subtitle: "The product works. Now make it work like it was built today.",
    content: {
      type: "detail",
      serviceLabel: "GOVERNANCE, COMPLIANCE & TRUST ASSURANCE",
      heading: "The audit doesn't start when the auditor arrives.",
      body: [
        "In regulated industries — healthcare, fintech, pharma, government — compliance isn't a final checkpoint. HIPAA, PHI, PCI-DSS, FDA, GDPR, SOC 2, WCAG accessibility, and the EU AI Act each carry validation standards that have to be mapped into the test strategy from the start. We build compliance-as-code: Validation Master Plans, security and accessibility testing embedded in delivery, and documentation that holds up under scrutiny.",
        "Compliance-related defects identified post-release cost 4–5x more to remediate than those caught during design and requirements validation. — NIST",
      ],
    },
  },
  {
    title: "AI-First & Responsible Quality Engineering",
    subtitle:
      "Keep the business logic. Lose the technical debt holding it hostage.",
    content: {
      type: "detail",
      serviceLabel: "AI-FIRST & RESPONSIBLE QUALITY ENGINEERING",
      heading:
        "Your AI ships confident. Not because you hoped it was ready — because you tested it that way.",
      body: [
        "AI systems don't fail the way conventional software fails. Model outputs drift. Behavior shifts under edge cases and adversarial inputs no predefined test scenario anticipated. Bias surfaces in production. We validate model outputs, detect drift early, test for bias and responsible AI compliance, and build agentic test automation that uses AI to generate cases, self-heal scripts, and adapt coverage as systems evolve.",
        "Gartner predicts 75%+ of enterprises will incorporate GenAI-driven testing by 2026. Organizations with structured AI validation practices significantly outperform peers on production reliability.",
      ],
    },
  },
];

const howCards = [
  {
    title: "Embedded From Day One.",
    body: "Quality strategy gets shaped alongside engineering and product before the first test case is written.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask
          id="mask0_2742_3079"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2742_3079)">
          <path
            d="M14.8206 18.7694V16.4104H17.1793V18.7694H14.8206ZM9.48729 18.7694V16.4104H11.846V18.7694H9.48729ZM20.154 18.7694V16.4104H22.5126V18.7694H20.154ZM14.8206 24V21.641H17.1793V24H14.8206ZM9.48729 24V21.641H11.846V24H9.48729ZM20.154 24V21.641H22.5126V24H20.154ZM4.66663 28.6667V6.00002H8.92296V3.17969H10.9743V6.00002H21.077V3.17969H23.077V6.00002H27.3333V28.6667H4.66663ZM6.66663 26.6667H25.3333V13.7437H6.66663V26.6667Z"
            fill="#ED2939"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Capability Transfers.",
    body: "Frameworks, tooling, and methodology are documented and handed over as working knowledge — not as artifacts nobody can explain.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask
          id="mask0_2742_3098"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2742_3098)">
          <path
            d="M9.53831 25.987L3.33331 19.782L9.53831 13.577L10.9436 15.0027L7.16398 18.782H16.8716V20.782H7.16398L10.9436 24.5617L9.53831 25.987ZM22.4616 18.4103L21.0563 16.9847L24.836 13.205H15.1283V11.2053H24.836L21.0563 7.42567L22.4616 6L28.6666 12.205L22.4616 18.4103Z"
            fill="#ED2939"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Alignment Before Delivery.",
    body: "We work within what serves the product and business and get alignment on what needs to change before it becomes a problem.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask
          id="mask0_2742_3139"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2742_3139)">
          <path
            d="M9.69231 15.3467V3.84668H20.2563V15.3467H9.69231ZM22.2563 15.3467V3.84668H28.6666V15.3467H22.2563ZM10.5126 27.3463V17.3463H20.3743C20.6503 17.3463 20.8869 17.4225 21.084 17.5747C21.2811 17.7269 21.4198 17.9123 21.5 18.131C21.5804 18.3499 21.5992 18.5756 21.5563 18.808C21.5136 19.0405 21.3872 19.2439 21.177 19.4183L19.2616 21.0387H13.7563V22.667H19.8206L23.9513 19.226C24.3889 18.8876 24.8563 18.6611 25.3536 18.5467C25.8512 18.432 26.3495 18.4179 26.8486 18.5043C27.3478 18.5906 27.8212 18.7649 28.269 19.0273C28.717 19.2898 29.1033 19.6423 29.428 20.085L20.736 27.3463H10.5126ZM3.33331 28.667V17.3337H8.51298V28.667H3.33331Z"
            fill="#ED2939"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Standards That Hold.",
    body: "Quality benchmarks are set at the start and maintained through delivery. They don't flex when timelines get tight.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask
          id="mask0_2742_3108"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2742_3108)">
          <path
            d="M12.1513 11.2047L15.6076 4.33301H16.3923L19.8486 11.2047H12.1513ZM15.205 26.5177L3.76931 12.7947H15.205V26.5177ZM16.795 26.5177V12.7947H28.2306L16.795 26.5177ZM21.6 11.2047L18.1846 4.33301H25.1283L28.564 11.2047H21.6ZM3.43597 11.2047L6.87164 4.33301H13.8153L10.4 11.2047H3.43597Z"
            fill="#ED2939"
          />
        </g>
      </svg>
    ),
  },
];

const proofCards = [
  {
    tags: "FINANCIAL SERVICES • QE AUTOMATION",
    title: "2x Faster Dashboard Validation",
    excerpt:
      "Automated validation across 20+ critical dashboards replaced manual checks at a global investment bank, improving data accuracy and enabling faster, more reliable decision-making.",
  },
  {
    tags: "FINANCIAL SERVICES • TEST AUTOMATION",
    title: "50% Faster Testing Cycles",
    excerpt:
      "Automated 400+ Salesforce test scenarios to reduce testing effort, accelerate releases, and improve system reliability across critical workflows at a global investment bank.",
  },
  {
    tags: "MANUFACTURING • QUALITY ENGINEERING",
    title: "From Manual Testing to Scalable Automation",
    excerpt:
      "Introduced automated testing at Glidewell Labs without impacting active projects, reducing manual effort and enabling faster, more reliable releases.",
  },
];

const painCards = [
  {
    heading: "We keep finding issues too late.",
    body: "Testing happens at the end. The build is already done, the release is already scheduled, and the defects showing up now should have been caught three sprints ago.",
  },
  {
    heading: "Automation suite exists. It just doesn't help.",
    body: "Coverage numbers look reasonable on paper. But the suite is brittle, maintenance is constant, and half the team isn't sure what the tests are actually validating anymore.",
  },
  {
    heading: "We found out about the compliance gap at the wrong moment.",
    body: "The audit window opened or the submission deadline arrived, and the validation documentation wasn't where it needed to be.",
  },
  {
    heading:
      "We tested it thoroughly. So why doesn't it behave the way it did?",
    body: "The model passed every evaluation. Staging looked good. But in production, outputs drift, edge cases surface, and guardrails show gaps under real user behavior.",
  },
];

export default function QualityEngineering() {
  const { width, isMobile, isTablet } = useBreakpoint();
  const pathname = usePathname();
  const [formOpen, setFormOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = formOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [formOpen]);

  const resolvedContactTopic =
    getContactFormTopicForRoute(pathname) ?? "Quality Engineering & Automation";

  const inner = {
    maxWidth: 1440,
    margin: "0 auto",
    padding: isMobile ? "48px 16px" : isTablet ? "60px 32px" : "80px 80px",
  };
  const d1 = (color?: string): React.CSSProperties => ({
    fontFamily: serif,
    fontSize: isMobile ? 26 : isTablet ? 34 : 40,
    lineHeight: isMobile ? "34px" : isTablet ? "42px" : "52px",
    fontWeight: 500,
    margin: 0,
    color: color ?? "#424242",
  });
  const d2 = (color?: string): React.CSSProperties => ({
    fontFamily: serif,
    fontSize: isMobile ? 22 : isTablet ? 28 : 40,
    lineHeight: isMobile ? "30px" : isTablet ? "36px" : "48px",
    fontWeight: 600,
    letterSpacing: "-1px",
    margin: 0,
    color: color ?? "#1E1E1E",
  });
  const d3 = (color?: string): React.CSSProperties => ({
    fontFamily: "Roboto Serif",
    fontSize: isMobile ? 22 : isTablet ? 28 : 36,
    lineHeight: isMobile ? "26px" : isTablet ? "32px" : "40px",
    fontWeight: 500,
    letterSpacing: "0px",
    margin: 0,
    color: color ?? "#FFFFFF",
  });
  const cols3 = isMobile
    ? "1fr"
    : isTablet
      ? "repeat(2, 1fr)"
      : "repeat(3, 1fr)";
  const cols2 = isMobile ? "1fr" : "repeat(2, 1fr)";
  const stackHero = isMobile || isTablet || width < 1180;

  return (
    <>
      <section style={{ background: "#fff" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            padding: isMobile
              ? "32px 16px 48px"
              : isTablet
                ? "40px 32px 60px"
                : "40px 80px 80px",
          }}
        >
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Service Offerings", href: "/services" },
              { label: "Quality Engineering & Automation", active: true },
            ]}
          />
          <div
            style={{
              display: "flex",
              flexDirection: stackHero ? "column" : "row",
              alignItems: stackHero ? "flex-start" : "center",
              gap: isMobile ? 32 : 60,
              marginTop: 40,
            }}
          >
            <div
              style={{
                flex: 2,
                order: isTablet ? 2 : 1,
                width: stackHero ? "100%" : undefined,
                display: "flex",
                flexDirection: "column",
                gap: 32,
              }}
            >
              <p
                style={{
                  fontFamily: sans,
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "#ADADAD",
                  margin: 0,
                }}
              >
                {"QUALITY ENGINEERING AND AUTOMATION"}
              </p>
              <FadeUp>
                <h1 style={d1()}>
                  You know what's broken.{" "}
                  <span style={{ color: red }}>
                    The problem is what you don't know yet.
                  </span>
                </h1>
              </FadeUp>
              <FadeUp delay={80}>
                <p
                  style={{
                    fontFamily: sans,
                    fontSize: isMobile ? 14 : 18,
                    fontWeight: 500,
                    lineHeight: 1.7,
                    color: "#1E1E1E",
                    margin: 0,
                  }}
                >
                  Most quality programs are built to catch what already went
                  wrong. We work with your team to build the kind of
                  intelligence that finds problems before your users do, and the
                  kind of automation that holds up long after we're gone.
                </p>
              </FadeUp>
              <FadeUp delay={120}>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <Button
                    variant="primary"
                    label="Show us the problem"
                    onClick={() => setFormOpen(true)}
                  />
                  <Button
                    variant="secondary"
                    label="See How We Work"
                    href="#how"
                  />
                </div>
              </FadeUp>
            </div>
            {!isMobile && (
              <div
                style={{
                  flex: stackHero ? "0 0 auto" : "0 0 501px",
                  order: isTablet ? 1 : 2,
                  width: stackHero ? "100%" : 501,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: isTablet
                    ? "center"
                    : stackHero
                      ? "flex-start"
                      : "center",
                  minHeight: 400,
                }}
              >
                <img
                  src={resolveImageSrc(imgHero)}
                  alt=""
                  style={{
                    width: 501,
                    maxWidth: "100%",
                    height: 400,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </section>
      <section style={{ background: "#fff" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <p
            style={{
              fontFamily: sans,
              fontSize: 16,
              fontWeight: 500,
              color: "#949494",
              textAlign: "center",
              lineHeight: "24px",
              margin: 0,
            }}
          >
            Trusted By
          </p>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Image
              src={imgCollaborators}
              alt="Our collaborators"
              sizes={isMobile || isTablet ? "100vw" : "860px"}
              style={{
                display: "block",
                width: "100%",
                maxWidth: isMobile ? "100%" : isTablet ? "100%" : 860,
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
      <div style={{ height: isMobile ? 40 : 60 }} />
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 80px",
        }}
      >
        <div style={{ marginBottom: isMobile ? 12 : 16 }}>
          <Tag label="THE SHIFT" variant="dark" />
        </div>
        <section
          style={{
            background: dark1,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <CornerTL />
          <CornerBR />
          <div
            style={{
              padding: isMobile
                ? "40px 24px"
                : isTablet
                  ? "48px 40px"
                  : "56px 68px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: isMobile || isTablet ? "column" : "row",
                gap: isMobile ? 32 : 48,
                alignItems: "flex-start",
                marginTop: 0,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  flex: isMobile || isTablet ? undefined : "485 1 0",
                  minWidth: isMobile || isTablet ? "100%" : 320,
                }}
              >
                <h2 style={d3("#fff")}>
                  Quality doesn't start at the end of the build. That's just
                  where{" "}
                  <span style={{ color: red }}>
                    quality failures get identified.
                  </span>
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                    marginTop: 28,
                  }}
                >
                  {[
                    "Testing has always been the part of the delivery cycle that absorbs everyone else's delays and still gets blamed when something ships broken. Engineers are moving faster than ever, and the gap between release velocity and quality confidence is widening, not closing.",
                    "AI is changing the economics of that gap. Not by replacing QA engineers, but by giving them the kind of leverage that actually matches the pace they're being asked to work at. We work alongside your team to build that leverage — through automation that transfers, tooling your team can own, and a quality practice that compounds instead of decaying.",
                  ].map((p, i) => (
                    <p
                      key={i}
                      style={{
                        fontFamily: "General Sans",
                        fontSize: isMobile ? 14 : 16,
                        lineHeight: 1.7,
                        color: "#E1E0E0",
                        margin: 0,
                      }}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile
                    ? "1fr"
                    : "repeat(2, minmax(0, 1fr))",
                  gap: 20,
                  flex: isMobile || isTablet ? undefined : "807 1 0",
                  width: isMobile || isTablet ? "100%" : undefined,
                }}
              >
                {[
                  {
                    num: "85%",
                    desc: "of defects that reach production were detectable earlier in the cycle, at a fraction of the cost to fix.",
                    src: "— IBM Systems Sciences Institute",
                  },
                  {
                    num: "26%",
                    desc: "of organizations report test automation coverage declined over two years, even as release frequency increased.",
                    src: "— World Quality Report",
                  },
                  {
                    num: "100s",
                    desc: "of automation suites built and maintained across client teams — none handed over as shelf-ware.",
                    src: "— Technossus Engagements",
                  },
                  {
                    num: "Every engagement",
                    desc: "closes with your team owning the practice, not dependent on us to run it.",
                    src: "— Technossus Internal",
                  },
                ].map((s) => (
                  <div
                    key={s.num}
                    style={{
                      background: "#1E1E1E",
                      border: "1px solid #5C5C5C",
                      padding: isMobile ? 16 : 24,
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "Roboto Serif",
                        fontSize: isMobile ? 28 : 36,
                        lineHeight: 1,
                        fontWeight: 500,
                        color: red,
                      }}
                    >
                      {s.num}
                    </div>
                    <p
                      style={{
                        fontFamily: "General Sans",
                        fontSize: isMobile ? 14 : 16,
                        lineHeight: 1.6,
                        color: "#fff",
                        margin: 0,
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <section style={{ background: "#fff" }}>
        <div style={{ ...inner, paddingBottom: 0 }}>
          <Tag label="SERVICE OFFERINGS" />
          <h2 style={{ ...d3("#1E1E1E"), marginTop: 16 }}>
            Release confidence, compliance readiness, and{" "}
            <span style={{ color: red }}>
              AI quality built in from the start.
            </span>
          </h2>
          <div style={{ marginTop: 48 }}>
            <Accordion items={accordionItems} defaultActiveIndex={2} />
          </div>
        </div>
      </section>
      <section style={{ background: "#fff", marginTop: 0 }}>
        <div style={inner}>
          <div
            style={{
              display: "flex",
              flexDirection: isMobile || isTablet ? "column" : "row",
              gap: isMobile ? 32 : 32,
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{ flex: 1, minWidth: isMobile || isTablet ? "100%" : 320 }}
            >
              <Tag label="HOW WE WORK" />
              <h2 style={{ ...d3("#1E1E1E"), marginTop: 16 }}>
                We don't build a testing practice{" "}
                <span style={{ color: red }}>your team can't maintain.</span>
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  marginTop: 28,
                }}
              >
                {[
                  "Every engagement is designed around transfer, not dependency. Quality strategies, automation frameworks, and validation practices get built collaboratively, with the people who will own them involved from the first conversation. When delivery closes, the capability stays.",
                  "Over 90% of Technossus clients continue working with us after the first engagement. Many have for over a decade. That's not a retention metric — it's what happens when a practice gets built right the first time.",
                ].map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: "General Sans",
                      fontSize: isMobile ? 14 : 16,
                      fontWeight: 500,
                      lineHeight: 1.7,
                      color: "#5C5C5C",
                      margin: 0,
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div
              style={{
                flex: 1,
                display: "grid",
                gridTemplateColumns: cols2,
                gap: 20,
                width: "100%",
                minWidth: isMobile || isTablet ? "100%" : 320,
              }}
            >
              {howCards.map((card) => (
                <div
                  key={card.title}
                  style={{
                    background: "#F5F5F5",
                    padding: isMobile ? "24px 20px" : "28px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <div style={{ color: red, fontSize: 24 }}>{card.icon}</div>
                  <h3
                    style={{
                      fontFamily: "General Sans",
                      fontSize: isMobile ? 18 : 20,
                      fontWeight: 600,
                      color: "#1E1E1E",
                      lineHeight: 1.4,
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "General Sans",
                      fontSize: isMobile ? 14 : 16,
                      fontWeight: 500,
                      color: "#383838",
                      margin: 0,
                    }}
                  >
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 80px",
        }}
      >
        <div style={{ marginBottom: isMobile ? 12 : 16 }}>
          <Tag label="PROOF" variant="dark" />
        </div>
        <section
          style={{
            background: dark1,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <CornerTL />
          <CornerBR />
          <div
            style={{
              padding: isMobile
                ? "40px 24px"
                : isTablet
                  ? "48px 40px"
                  : "56px 68px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: isMobile ? "flex-start" : "flex-end",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "space-between",
                gap: 16,
                marginBottom: 40,
              }}
            >
              <div>
                <h1 style={d3("#fff")}>
                  Success <span style={{ color: red }}>stories</span>
                </h1>
              </div>
              <a
                href="/case-studies"
                style={{
                  fontFamily: "General Sans",
                  fontSize: 16,
                  color: "#ED2939",
                  textDecoration: "underline",
                }}
              >
                View All
              </a>
            </div>
            <div
              style={{ display: "grid", gridTemplateColumns: cols3, gap: 20 }}
            >
              {proofCards.map((card, i) => (
                <article
                  key={i}
                  style={{
                    background: "#1E1E1E",
                    border: "1px solid #5C5C5C",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <img
                    src={imgCardPhoto}
                    alt=""
                    style={{
                      width: "100%",
                      height: isMobile ? 200 : 240,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      padding: isMobile ? "20px" : "24px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                      flex: 1,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "General Sans",
                        fontSize: 14,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        color: "#ADADAD",
                      }}
                    >
                      {card.tags}
                    </div>
                    <h3
                      style={{
                        fontFamily: "General Sans",
                        fontSize: isMobile ? 18 : 20,
                        fontWeight: 600,
                        color: "#fff",
                        lineHeight: 1.4,
                        margin: 0,
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "General Sans",
                        fontSize: isMobile ? 14 : 16,
                        lineHeight: 1.6,
                        color: "#E1E0E0",
                        flex: 1,
                        margin: 0,
                      }}
                    >
                      {card.excerpt}
                    </p>
                    <Button
                      variant="secondary"
                      label="View Case Study"
                      href="#"
                      style={{
                        width: isMobile ? "100%" : "50%",
                        minWidth: isMobile ? undefined : 180,
                        maxWidth: "100%",
                        fontSize: "15px",
                        fontWeight: 600,
                      }}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
      <section style={{ background: "#fff" }}>
        <div style={inner}>
          <Tag label="SOUND FAMILIAR" />
          <h2 style={{ ...d3("#1E1E1E"), marginTop: 16 }}>
            If any of these sound like your last project retrospective, we{" "}
            <span style={{ color: red }}>should talk.</span>
          </h2>
          <p
            style={{
              fontFamily: "General Sans",
              fontSize: isMobile ? 14 : 18,
              color: "#5C5C5C",
              marginTop: 12,
            }}
          >
            These aren't hypotheticals. They're the conversations we have most
            often.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: cols2,
              gap: 24,
              marginTop: 48,
            }}
          >
            {painCards.map((card, i) => (
              <div
                key={i}
                style={{
                  background: "#F5F5F5",
                  padding: isMobile ? "24px 20px" : "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <h3
                  style={{
                    fontFamily: sans,
                    fontSize: isMobile ? 18 : 24,
                    fontWeight: 600,
                    color: "#424242",
                    lineHeight: 1.4,
                    margin: 0,
                  }}
                >
                  {card.heading}
                </h3>
                <div style={{ height: 2, background: red, width: "100%" }} />
                <p
                  style={{
                    fontFamily: sans,
                    fontSize: 16,
                    fontWeight: 500,
                    lineHeight: 1.7,
                    color: "#383838",
                    margin: 0,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 80px",
        }}
      >
        <CTABanner
          size="large"
          label="LET'S WORK ON IT TOGETHER"
          heading="Ready to accelerate your digital & AI journey?"
          body="Whether you're modernizing systems, building a new product, or scaling engineering, we're ready to collaborate."
          primaryCta="Schedule a Strategy Session →"
          secondaryCta="Contact Us"
          style={{ width: "100%", margin: 0 }}
        />
      </div>
      <div style={{ height: isMobile ? 48 : 80 }} />
      {formOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setFormOpen(false);
          }}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: 16,
          }}
        >
          <ContactFormPopUp
            topic={resolvedContactTopic}
            onClose={() => setFormOpen(false)}
            onSubmit={(data) => {
              setFormOpen(false);
              console.log("Contact form submitted:", data);
            }}
            style={{
              maxWidth: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
            }}
          />
        </div>
      )}
    </>
  );
}
