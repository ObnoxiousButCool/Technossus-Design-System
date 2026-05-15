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
import { useBreakpoint } from "../../../ts/breakpoints";
import type { AccordionItem } from "../../../components/Accordion";
import { resolveImageSrc } from "../../../ts/imageSrc";
import { getContactFormTopicForRoute } from "../../../components/CTABanner/contactFormTopics";
import imgHero from "../../../assets/Website_Images/Services/Cloud consulting.png";
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
    title: "Cloud FinOps & AI Token Optimization",
    subtitle: "Your cloud bill has line items nobody on your team can explain.",
    content: {
      type: "detail",
      serviceLabel: "CLOUD FINOPS & AI TOKEN OPTIMIZATION",
      heading:
        "Your cloud bill has line items nobody on your team can explain.",
      body: [
        "A resource provisioned for a project that pivoted. An environment spun up for testing that never came down. A model integration whose tokens kept flowing after the project moved on. We bring FinOps discipline and AI token governance together in a single practice — because the pattern is the same, and separating them means solving half the problem.",
        "29% of enterprise cloud spend is wasted annually — a rate held between 27–32% every year since 2019. We build the visibility and ownership model that changes that permanently.",
      ],
    },
  },
  {
    title: "Multi-Cloud Resilience Engineering",
    subtitle: "One vendor's outage shouldn't be your outage.",
    content: {
      type: "detail",
      serviceLabel: "MULTI-CLOUD RESILIENCE ENGINEERING",
      heading: "One vendor's outage shouldn't be your outage.",
      body: [
        "Most multi-cloud environments grew organically — a workload here, an acquisition there. The result is an estate that runs across clouds without being designed for it. We architect for portability, failover, and resilience across AWS, Azure, and GCP — so your infrastructure can absorb disruption at the provider level without passing it to your business.",
        "73% of organizations now run hybrid or multi-cloud environments. Most weren't designed for it from day one.",
      ],
    },
  },
  {
    title: "Autonomous Cloud Operations & AI/MLOps",
    subtitle: "Your team didn't sign up to babysit infrastructure.",
    content: {
      type: "detail",
      serviceLabel: "AUTONOMOUS CLOUD OPERATIONS & AI/MLOPS",
      heading: "Your team didn't sign up to babysit infrastructure.",
      body: [
        "Monitoring alerts that fire at 2am. Scaling decisions made manually. MLOps pipelines that require human intervention at every stage. We implement self-healing infrastructure, intelligent observability, and AI-assisted operations so your engineers focus on architecture and business logic — not keeping the lights on.",
        "AIOps and MLOps convergence is now the primary DevOps investment priority for enterprises scaling AI workloads.",
      ],
    },
  },
  {
    title: "Cloud-Hosted AI Governance & Compliance",
    subtitle: "Govern the models. Own the outcomes.",
    content: {
      type: "detail",
      serviceLabel: "CLOUD-HOSTED AI GOVERNANCE & COMPLIANCE",
      heading: "Govern the models. Own the outcomes.",
      body: [
        "Regulatory pressure on AI is accelerating — the EU AI Act, state-level legislation, and sector-specific requirements are arriving faster than most governance frameworks were designed to absorb. We implement model lifecycle controls, audit trails, policy enforcement, and compliance architecture directly into your cloud environment.",
        "47% of large enterprises now have a dedicated AI governance team or leader — up sharply as regulatory requirements moved from horizon to reality.",
      ],
    },
  },
  {
    title: "Cloud Security & Compliance for AI",
    subtitle: "Be the one in the room who already knows the answer.",
    content: {
      type: "detail",
      serviceLabel: "CLOUD SECURITY & COMPLIANCE FOR AI",
      heading: "Be the one in the room who already knows the answer.",
      body: [
        "Security posture in AI-era cloud environments isn't just about perimeter controls. It's about zero-trust architecture, DevSecOps pipelines that enforce policy at every deployment, and AI-specific security patterns for inference endpoints and model access. Defensible by design, not by documentation.",
        "Cloud security and AI-specific compliance controls rank as the top buyer concern in enterprise cloud engagements — above cost optimization and above performance.",
      ],
    },
  },
];

const howCards = [
  {
    title: "Your team stays in the driver's seat.",
    body: "We work alongside your engineers — not instead of them. Architecture decisions, tooling choices, and operational patterns are built with your team's input, not handed down.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask
          id="mask0_2742_3136"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2742_3136)">
          <path
            d="M25.1027 11.795C23.9042 11.795 22.8661 11.4257 21.9883 10.687C21.1106 9.94856 20.5547 9.01867 20.3207 7.89733H11.646C11.4529 8.84778 11.0174 9.664 10.3397 10.346C9.66189 11.0282 8.84778 11.4659 7.89733 11.659V20.3207C9.01867 20.5547 9.94856 21.1106 10.687 21.9883C11.4257 22.8661 11.795 23.9042 11.795 25.1027C11.795 26.4582 11.3176 27.6133 10.3627 28.568C9.408 29.5227 8.25289 30 6.89733 30C5.54178 30 4.38667 29.5227 3.432 28.568C2.47733 27.6133 2 26.4582 2 25.1027C2 23.9042 2.36922 22.8661 3.10767 21.9883C3.84611 21.1106 4.776 20.5547 5.89733 20.3207V11.659C4.776 11.4248 3.84611 10.8688 3.10767 9.991C2.36922 9.11322 2 8.082 2 6.89733C2 5.54178 2.47733 4.38667 3.432 3.432C4.38667 2.47733 5.53756 2 6.88467 2C8.06933 2 9.10056 2.36922 9.97833 3.10767C10.8561 3.84611 11.412 4.776 11.646 5.89733H20.3207C20.5547 4.776 21.1106 3.84611 21.9883 3.10767C22.8661 2.36922 23.9042 2 25.1027 2C26.4496 2 27.6024 2.47955 28.5613 3.43867C29.5204 4.39755 30 5.55044 30 6.89733C30 8.25289 29.5204 9.408 28.5613 10.3627C27.6024 11.3176 26.4496 11.795 25.1027 11.795ZM25.1027 30C23.7471 30 22.592 29.5227 21.6373 28.568C20.6824 27.6133 20.205 26.4624 20.205 25.1153C20.205 23.7598 20.6824 22.6026 21.6373 21.6437C22.592 20.6846 23.7471 20.205 25.1027 20.205C26.4582 20.205 27.6133 20.6846 28.568 21.6437C29.5227 22.6026 30 23.7598 30 25.1153C30 26.4624 29.5227 27.6133 28.568 28.568C27.6133 29.5227 26.4582 30 25.1027 30Z"
            fill="#ED2939"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Knowledge transfers as we build.",
    body: "Every session is a working session. Every optimization is explained. Your engineers leave each phase understanding what was built and why.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask
          id="mask0_2742_3101"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2742_3101)">
          <path
            d="M9.53831 25.987L3.33331 19.782L9.53831 13.577L10.9436 15.0027L7.16398 18.782H16.8716V20.782H7.16398L10.9436 24.5617L9.53831 25.987ZM22.4616 18.4103L21.0563 16.9847L24.836 13.205H15.1283V11.2053H24.836L21.0563 7.42567L22.4616 6L28.6666 12.205L22.4616 18.4103Z"
            fill="#ED2939"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "We work within your existing cloud governance.",
    body: "We assess what's already in place, strengthen it, and build on it — so your organization's processes stay intact while your capability grows.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask
          id="mask0_2742_3130"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2742_3130)">
          <path
            d="M5.41034 27.6665V25.6665H20.7437V27.6665H5.41034ZM13.1487 20.7895L6.07701 13.7178L8.41534 11.3128L15.5537 18.3845L13.1487 20.7895ZM21.0513 12.8868L13.9797 5.74849L16.3847 3.41016L23.4563 10.4818L21.0513 12.8868ZM27.4667 26.2048L10.5283 9.26649L11.9333 7.86149L28.8717 24.7998L27.4667 26.2048Z"
            fill="#ED2939"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "The optimization holds after we leave.",
    body: "We build the hygiene practices, not just the outcome. FinOps discipline, cost attribution, and governance patterns are operational habits your team carries forward.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask
          id="mask0_2742_3154"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2742_3154)">
          <path
            d="M14.795 14.5383V6H28.6666V14.5383H14.795ZM3.33331 26V17.4617H15.8716V26H3.33331ZM3.33331 14.5383V6H11.8716V14.5383H3.33331ZM22.487 28.5383L22.2153 26.9487C21.8718 26.8462 21.5491 26.7168 21.2473 26.5603C20.9458 26.4039 20.6599 26.1983 20.3896 25.9437L18.8666 26.4667L17.841 24.7897L19.0666 23.7383C18.9709 23.3641 18.923 22.9898 18.923 22.6153C18.923 22.2409 18.9709 21.8666 19.0666 21.4923L17.841 20.441L18.8666 18.764L20.3896 19.2873C20.6512 19.0324 20.935 18.8269 21.241 18.6707C21.547 18.5142 21.8718 18.3847 22.2153 18.282L22.487 16.6923H24.487L24.759 18.282C25.1025 18.3847 25.4273 18.5142 25.7333 18.6707C26.0393 18.8269 26.3231 19.0324 26.5846 19.2873L28.1076 18.764L29.1333 20.441L27.9076 21.4923C28.0034 21.8666 28.0513 22.2409 28.0513 22.6153C28.0513 22.9898 28.0034 23.3641 27.9076 23.7383L29.1333 24.7897L28.1076 26.4667L26.5846 25.9437C26.3144 26.1983 26.0285 26.4039 25.727 26.5603C25.4252 26.7168 25.1025 26.8462 24.759 26.9487L24.487 28.5383H22.487ZM25.4473 24.5757C25.9866 24.0363 26.2563 23.3829 26.2563 22.6153C26.2563 21.8478 25.9866 21.1943 25.4473 20.655C24.908 20.1157 24.2545 19.846 23.487 19.846C22.7196 19.846 22.0663 20.1157 21.527 20.655C20.9876 21.1943 20.718 21.8478 20.718 22.6153C20.718 23.3829 20.9876 24.0363 21.527 24.5757C22.0663 25.115 22.7196 25.3847 23.487 25.3847C24.2545 25.3847 24.908 25.115 25.4473 24.5757Z"
            fill="#ED2939"
          />
        </g>
      </svg>
    ),
  },
];

const proofCards = [
  {
    tags: "HEALTHCARE • CLINICAL TRIALS",
    title: "Cloud Platform Helps Save Millions in Clinical Trials",
    excerpt:
      "A cloud-based clinical trials system enabled real-time monitoring and early risk detection. With $70M+ trial costs and 80%+ failure rates, early intervention through cloud-enabled visibility helped avoid significant losses.",
  },
  {
    tags: "MARKETING • ANALYTICS & VOICE",
    title: "Cloud-Based Analytics and Voice-Driven Brand Insights",
    excerpt:
      "A cloud-based data visualization and voice-enabled experience was prototyped to help marketers access brand performance insights faster and more intuitively — reducing analysis time from days to minutes.",
  },
  {
    tags: "HEALTHCARE • ARCHITECTURE DESIGN",
    title: "Proof of Concept Minimizes Project Risk",
    excerpt:
      "A cloud-based reference architecture was designed and validated to reduce risk in a multi-million-dollar healthcare digital transformation initiative — before a single production line was written.",
  },
];

const painCards = [
  {
    heading: '"We budgeted for 20% cloud growth. The bill came in at 47%."',
    body: "AI workloads don't scale linearly, and most budgeting tools weren't built for inference cost volatility. Visibility comes before governance.",
  },
  {
    heading:
      '"We have 400 microservices. Three people understand the full picture."',
    body: "Distributed architecture distributes knowledge risk too. Modernization without documentation and observability creates a different kind of fragility.",
  },
  {
    heading:
      '"We\'re on three clouds. None of them talk to each other the way we need."',
    body: "Multi-cloud through acquisition or organic growth rarely produces a coherent operating model. Resilience requires architecture, not just presence.",
  },
  {
    heading:
      '"Our ML models are deployed. We have no idea what they\'re costing us to run."',
    body: "Production AI without cost attribution is a liability that compounds with every model update. Token governance is an operational discipline, not a one-time audit.",
  },
];

export default function CloudModernization() {
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
    getContactFormTopicForRoute(pathname) ?? "Cloud & Product Modernization";

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
              { label: "Cloud & Product Modernization", active: true },
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
                {"CLOUD CONSULTING AND SUPPORT"}
              </p>
              <FadeUp>
                <h1 style={d1()}>
                  The cloud promised to simplify infrastructure and contain
                  costs.{" "}
                  <span style={{ color: red }}>
                    Your last invoice told a different story.
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
                  Complexity crept in quietly — through architectural decisions
                  that made sense at the time, containerized environments that
                  multiplied infrastructure overhead, and AI workloads nobody
                  fully priced. We work alongside your team to untangle what's
                  there, govern what's coming, and build infrastructure that
                  actually earns its cost.
                </p>
              </FadeUp>
              <FadeUp delay={120}>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <Button
                    variant="primary"
                    label="Show us the Bill"
                    onClick={() => setFormOpen(true)}
                  />
                  <Button
                    variant="secondary"
                    label="See How We Work"
                    href="#"
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
                  Your engineers followed every best practice. They didn't sign
                  up for what it costs to maintain, scale{" "}
                  <span style={{ color: red }}>and keep it running.</span>
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
                    "The move from monolithic systems to microservices and containerized architectures wasn't a mistake — it was the right call, endorsed by every major platform and best-practice framework. What nobody fully modeled was the operational weight that came with it. More services meant more infrastructure to provision, monitor, patch, and govern. Complexity accumulated quietly, one well-intentioned architectural decision at a time.",
                    "AI has added an entirely new layer to an environment already carrying more than it showed. Inference endpoints, vector databases, GPU compute, and token consumption don't behave like traditional workloads. We work alongside your team to bring visibility to what's running, governance to what's being added, and architecture that can carry both — without starting over.",
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
                    num: "29%",
                    desc: "of enterprise cloud spend is wasted annually — a rate held between 27–32% every year since 2019, ticked up in 2026 as AI workloads added new cost complexity.",
                  },
                  {
                    num: "73%",
                    desc: "of organizations run hybrid or multi-cloud — most weren't architecturally designed for it from the start.",
                  },
                  {
                    num: "84%",
                    desc: "of enterprises report AI costs cutting gross margins — only 15% can forecast those costs within ±10%.",
                  },
                  {
                    num: "Zero",
                    desc: "Handoffs without knowledge transfer. Your team understands what we build before we leave.",
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
            Cloud platforms that stay reliable, controlled, and cost-efficient —{" "}
            <span style={{ color: red }}>
              while enabling secure AI adoption.
            </span>
          </h2>
          <div style={{ marginTop: 48 }}>
            <Accordion items={accordionItems} defaultActiveIndex={1} />
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
                We don't clean up your cloud and leave your team{" "}
                <span style={{ color: red }}>
                  no smarter than when we arrived.
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
                  "The pattern is familiar: a consultant reduces the bill, optimizes the architecture, hands off runbooks — and six months later the costs are back. Not because the work was wrong. Because the capability didn't transfer. We build embedded into your team, not alongside it. Every FinOps practice, every governance layer, every automation — your engineers are in the room, learning as it happens.",
                  "We've maintained a 90%+ client retention rate not because engagements are sticky, but because the outcomes are. More than half our cloud engagements extend because clients want to go deeper, not because they have to.",
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
            If any of these feel recent, we{" "}
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
            These aren't edge cases. They're the conversations we have most
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
