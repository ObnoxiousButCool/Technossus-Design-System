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
import imgHero from "../../../assets/Website_Images/Services/AI Led Transformation.png";
// import imgCollaborators from "../../../assets/Website_images 2/Logo.png";
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
    title: "AI Strategy & Readiness",
    subtitle:
      "Know where AI fits  and the pace your organization can actually absorb it.",
    content: {
      type: "detail",
      serviceLabel: "AI STRATEGY & READINESS",
      heading: "Align the roadmap before scaling the technology.",
      body: [
        "Every AI engagement starts here. We map where AI creates durable value in your business, sequence the use cases by impact and readiness, and align the organization around what's being built and why. Strategy is the artifact your board signs off on. Readiness is the work that makes the strategy executable on the ground, at the pace your teams can carry.",
        "Organizations with a sequenced AI roadmap are significantly more likely to reach production outcomes within 18 months. McKinsey State of AI, 2025.",
      ],
    },
  },
  {
    title: "Decision Intelligence",
    subtitle: "Decisions that land where your strategy said they would.",
    content: {
      type: "detail",
      serviceLabel: "DECISION INTELLIGENCE",
      heading: "Decisions powered by live data and predictive insight.",
      body: [
        "Your operating decisions: pricing, capacity, risk, market response need real-time inputs from the data you already own. We build decision intelligence layers that combine predictive models, live data pipelines, and AI-driven insight into the workflows your leaders actually make calls in. No dashboards that require someone to translate.",
        "Decision-intelligence adopters report material improvement in decision cycle time across pricing, capacity, and risk functions. Gartner, 2025.",
      ],
    },
  },
  {
    title: "Agentic Automation",
    subtitle: "Work that coordinates itself,until it needs a human decision.",
    content: {
      type: "detail",
      serviceLabel: "AGENTIC AUTOMATION",
      heading: "Processes that coordinate, adapt, and escalate intelligently.",
      body: [
        "Process automation used to mean scripted workflows that broke when context changed. Agentic automation is different; AI agents that understand context, make decisions within guardrails, and coordinate work across systems without constant human intervention. We identify where agentic workflows unlock real capacity and build them into the platforms your teams already use.",
        "By 2027, 40% of enterprise applications will include task-specific AI agents embedded in core workflows. Gartner.",
      ],
    },
  },
  {
    title: "Enterprise Generative AI",
    subtitle:
      "Gen-AI tools your teams actually use,because they actually help.",
    content: {
      type: "detail",
      serviceLabel: "ENTERPRISE GENERATIVE AI",
      heading: "GenAI embedded into workflows your teams already operate in.",
      body: [
        "Copilots, internal assistants, and content generation tools are the GenAI surface your teams interact with every day. We build them into your workflow, trained on your data, governed by your policy, and measured against the productivity lift they deliver. Not demos. Not pilots. Tools that land on the desk and stay there because the team wants them.",
        "Copilots deliver 26–45% productivity gains when built into existing workflows, near zero when bolted on. GitHub / McKinsey, 2024–25.",
      ],
    },
  },
  {
    title: "AI Governance, Risk & Data Security",
    subtitle: "Board-defensible AI. From policy to production.",
    content: {
      type: "detail",
      serviceLabel: "AI GOVERNANCE, RISK & DATA SECURITY",
      heading:
        "Governance layers designed for production-scale AI environments.",
      body: [
        "Every AI deployment in your organization now sits inside a governance gap that didn't exist three years ago. Model decisions have to be explainable to regulators. Data flows through LLMs have to be traceable. We put the governance layer in place: policy frameworks, model registries, usage guardrails, data boundary architecture, and audit trails wired into the deployment path.",
        "Governance gaps are the single largest blocker to scaling enterprise generative AI through 2027. Gartner, 2025.",
      ],
    },
  },
  {
    title: "Innovation Labs & Prototyping",
    subtitle: "See it working,before you bet the strategy on it.",
    content: {
      type: "detail",
      serviceLabel: "INNOVATION LABS & PROTOTYPING",
      heading: "Validate the idea before scaling the investment.",
      body: [
        "Not every strategic question needs a full engagement to answer. Innovation Labs is where we build a working prototype in two weeks that tests whether an idea is worth scaling. Walk in with a question. Walk out with a validated prototype, a clear read on what works, and a defensible answer to 'should we build this?'",
        "Every engagement starts with a two-day consulting investment at no cost — a pressure test on the problem, not a pitch.",
      ],
    },
  },
];

const howCards = [
  {
    title: "Your story to the board stays defensible.",
    body: "What you approved is what gets built and you can explain every decision along the way, in the altitude your board operates at.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask
          id="mask0_2742_3070"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2742_3070)">
          <path
            d="M12.754 20.1334L16 17.6668L19.1793 20.1078L17.959 16.1641L21.2563 13.5898H17.287L16 9.62077L14.713 13.5898H10.7437L13.9743 16.1641L12.754 20.1334ZM16 28.6411C13.1162 27.8547 10.7287 26.1572 8.83733 23.5488C6.94578 20.9403 6 18.0241 6 14.8001V7.12843L16 3.38477L26 7.12843V14.8001C26 18.0241 25.0542 20.9403 23.1627 23.5488C21.2713 26.1572 18.8838 27.8547 16 28.6411Z"
            fill="#ED2939"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "What gets built traces back to what you approved.",
    body: "No scope creep that lands on your desk at invoice time. Investment accountability is part of the delivery, not a risk we hand back.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask
          id="mask0_2742_3086"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2742_3086)">
          <path
            d="M11.0586 27.669C9.51776 27.0041 8.17742 26.1018 7.03765 24.962C5.89787 23.8222 4.99554 22.4819 4.33065 20.941C3.66576 19.4001 3.33331 17.7538 3.33331 16.002C3.33331 14.25 3.66587 12.6077 4.33098 11.075C4.99587 9.54234 5.89831 8.20523 7.03831 7.06367C8.17831 5.92212 9.51887 5.01834 11.06 4.35234C12.6011 3.68656 14.2478 3.35367 16 3.35367C16.5675 3.35367 17.1214 3.38612 17.6616 3.45101C18.2016 3.5159 18.735 3.62445 19.2616 3.77667C18.9932 4.26223 18.7842 4.7719 18.6346 5.30567C18.4851 5.83945 18.4103 6.40412 18.4103 6.99967C18.4103 8.04456 18.6282 9.00234 19.064 9.87301C19.5 10.7439 20.0923 11.4819 20.841 12.087L14.0873 18.8613L10.3076 15.0613L8.88198 16.487L14.0873 21.6713L22.618 13.1407C22.994 13.286 23.3776 13.3971 23.769 13.474C24.1603 13.5509 24.5706 13.5893 25 13.5893C25.5955 13.5893 26.1602 13.5146 26.694 13.365C27.2278 13.2155 27.7374 13.0065 28.223 12.738C28.3752 13.2647 28.4838 13.798 28.5486 14.338C28.6135 14.8782 28.646 15.4321 28.646 15.9997C28.646 17.7519 28.3131 19.3986 27.6473 20.9397C26.9813 22.4808 26.0775 23.8213 24.936 24.9613C23.7944 26.1013 22.4573 27.0038 20.9246 27.6687C19.392 28.3338 17.7496 28.6663 15.9976 28.6663C14.2459 28.6663 12.5995 28.3339 11.0586 27.669ZM22.404 9.59734C21.6902 8.88467 21.3333 8.01934 21.3333 7.00134C21.3333 5.98312 21.6896 5.11723 22.4023 4.40367C23.115 3.6899 23.9803 3.33301 24.9983 3.33301C26.0165 3.33301 26.8824 3.68934 27.596 4.40201C28.3098 5.11467 28.6666 5.98012 28.6666 6.99834C28.6666 8.01634 28.3103 8.88212 27.5976 9.59567C26.885 10.3095 26.0195 10.6663 25.0013 10.6663C23.9833 10.6663 23.1175 10.31 22.404 9.59734Z"
            fill="#ED2939"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Your organization moves at the pace it can absorb.",
    body: "Change management is part of the deliverable. Fast where the organization is ready, patient where it isn't, honest about which is which.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask
          id="mask0_2742_3121"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2742_3121)">
          <path
            d="M4.33331 27.4359V9.43587H9.66665V4.10254H22.3333V14.7692H27.6666V27.4359H17.6666V22.1025H14.3333V27.4359H4.33331ZM6.33331 25.4359H9.66665V22.1025H6.33331V25.4359ZM6.33331 20.1025H9.66665V16.7692H6.33331V20.1025ZM6.33331 14.7692H9.66665V11.4359H6.33331V14.7692ZM11.6666 20.1025H15V16.7692H11.6666V20.1025ZM11.6666 14.7692H15V11.4359H11.6666V14.7692ZM11.6666 9.43587H15V6.10254H11.6666V9.43587ZM17 20.1025H20.3333V16.7692H17V20.1025ZM17 14.7692H20.3333V11.4359H17V14.7692ZM17 9.43587H20.3333V6.10254H17V9.43587ZM22.3333 25.4359H25.6666V22.1025H22.3333V25.4359ZM22.3333 20.1025H25.6666V16.7692H22.3333V20.1025Z"
            fill="#ED2939"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "We tell you when fast is the right bet.",
    body: "Our job is strategic pace, not performance theater. We'll push when the window is open, and slow you down when speed is the wrong signal to the organization.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask
          id="mask0_2742_3105"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2742_3105)">
          <path
            d="M5.17969 28.1533V21.5253H9.16935L9.99235 15.6663H6.51302V13.6663H25.487V15.6663H22.0077L22.8307 21.5253H26.8204V28.1533H5.17969ZM9.57435 12.0767L7.74369 3.84601C8.42569 4.32467 9.09791 4.74212 9.76035 5.09834C10.4228 5.45479 11.1522 5.63301 11.9487 5.63301C12.7607 5.63301 13.5026 5.45867 14.1744 5.11001C14.8461 4.76134 15.4547 4.33567 16 3.83301C16.5454 4.33567 17.1539 4.76134 17.8257 5.11001C18.4975 5.45867 19.235 5.63301 20.0384 5.63301C20.8092 5.63301 21.5217 5.45701 22.1757 5.10501C22.8295 4.75278 23.5272 4.33312 24.269 3.84601L22.446 12.0767H9.57435Z"
            fill="#ED2939"
          />
        </g>
      </svg>
    ),
  },
];

const proofCards = [
  {
    tags: "DOCUMENT INTELLIGENCE • AI / OCR",
    title:
      "AI-Powered OCR Engine Achieves ~95% Accuracy in Document Extraction",
    excerpt:
      "Document-heavy workflows required manual data entry, causing delays and inconsistencies. A proprietary OCR + NER engine now extracts and structures data from unstructured inputs with ~95% accuracy, enabling faster downstream processing.",
  },
  {
    tags: "HEALTHCARE • PREDICTIVE AI",
    title:
      "Predictive Fatigue Modeling Prevents Operational Risk Before It Occurs",
    excerpt:
      "A healthcare organization lacked visibility into fatigue-related risks impacting workforce safety. A predictive analytics platform using biometric data now forecasts fatigue levels and triggers proactive alerts.",
  },
  {
    tags: "SECURITY OPERATIONS • REAL-TIME AI",
    title:
      "Automated Threat Detection Reduces Security Processing Time from 8 Hours to Minutes",
    excerpt:
      "Manual monitoring of restricted premises delayed identification of unauthorized individuals. A real-time AI-based facial recognition system now detects and alerts on intrusions in under 10 minutes.",
  },
];

const painCards = [
  {
    heading:
      '"The steering committee keeps asking for AI transformation updates."',
    body: "You're not sure how to give them without sounding like nothing is happening, or like too much is happening unchecked.",
  },
  {
    heading: '"Three different teams have deployed something AI-powered."',
    body: "You learned about two of them from a vendor invoice.",
  },
  {
    heading: '"Your board asks how the AI strategy is going."',
    body: "You know the answer you want to give. You're not sure it's the one the data supports.",
  },
  {
    heading: '"Your general counsel flagged model governance as a gap."',
    body: "No one in the organization owns the fix.",
  },
];

export default function AIBusiness() {
  const { width, isMobile, isTablet } = useBreakpoint();
  const pathname = usePathname();
  const [formOpen, setFormOpen] = React.useState(false);

  React.useEffect(() => {
    if (formOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [formOpen]);

  const resolvedContactTopic =
    getContactFormTopicForRoute(pathname) ?? "AI-Led Business Transformation";

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
      {/* ── HERO ── */}
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
              { label: "AI-Led Business Transformation", active: true },
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
                AI-LED BUSINESS TRANSFORMATION
              </p>
              <FadeUp>
                <h1 style={d1()}>
                  The AI strategy is approved, and the teams are moving. The
                  question is whether the investment is{" "}
                  <span style={{ color: red }}>actually working.</span>
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
                  Governance frameworks, investment accountability, and team
                  alignment don't self-organize around an approved strategy. We
                  work with your leadership team to make sure what's building
                  across the organization actually lands where you said it
                  would.
                </p>
              </FadeUp>
              <FadeUp delay={120}>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <Button
                    variant="primary"
                    label="Bring us into the conversation"
                    onClick={() => setFormOpen(true)}
                  />
                  <Button
                    variant="secondary"
                    label="See how we work"
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

      {/* ── TRUSTED BY ── */}

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

      {/* ── THE SHIFT ── */}
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
                  The constraint used to be capability. Now the{" "}
                  <span style={{ color: red }}>constraint is coherence.</span>
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
                    "Three years ago, deploying AI was a specialist act. It required a data science team, procurement review, architecture review, an executive sponsor, and a budget line. Governance was implicit in the deployment process. Nothing reached production without a lot of eyes on it.",
                    "That infrastructure has dissolved. AI capability now arrives through every SaaS tool and every agentic workflow. Any team that can write a prompt can deploy it. The executive didn't lose visibility because decisions went wrong and it's gone because the process that used to produce visibility isn't there anymore.",
                    "Governance that used to be implicit now has to be explicit. It has to be approved, tracked, and visible at the altitude the board operates at. That work doesn't self-organize around momentum. It's what we build with your leadership team.",
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
                    num: "26%",
                    desc: "of AI initiatives produce measurable business value at scale. The rest stall in pilots or deploy without a path to outcome.",
                  },
                  {
                    num: "~70%",
                    desc: "of large organizations cannot produce a single inventory of AI in production. Shadow deployment is now the default state.",
                  },
                  {
                    num: "5 of 5",
                    desc: "delivery lines configured to every engagement Product, Data, Cloud, Quality, Experience Design.",
                  },
                  {
                    num: "Week 1",
                    desc: "Your leadership team sees what's being built, how governance is structured, and what they'll own at handoff.",
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

      {/* ── SERVICE OFFERINGS ── */}
      <section style={{ background: "#fff" }}>
        <div style={{ ...inner, paddingBottom: 0 }}>
          <Tag label="SERVICE OFFERINGS" />
          <h2 style={{ ...d3("#1E1E1E"), marginTop: 16 }}>
            Your strategy, configured across the delivery {!isMobile && <br />}
            <span style={{ color: red }}>that makes it land.</span>
          </h2>
          <div style={{ marginTop: 48 }}>
            <Accordion items={accordionItems} defaultActiveIndex={0} />
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
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
                We don't deliver an{" "}
                <span style={{ color: red }}> AI transformation </span>
                and leave you to explain it.
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
                  "We work embedded with your leadership team, making governance visible, tracing investment to outcome, and transferring the thread to your people as we build. When the engagement ends, your team owns the framework, understands the architecture, and can defend it without us in the room.",
                  "AI transformation creates as many questions as answers for executives, for middle management, for the teams doing the work. Our approach is designed to bring your organization along, not leave it dependent on us.",
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

      {/* ── SUCCESS STORIES ── */}
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
              style={{
                display: "grid",
                gridTemplateColumns: cols3,
                gap: 20,
              }}
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

      {/* ── SOUND FAMILIAR ── */}
      <section style={{ background: "#fff" }}>
        <div style={inner}>
          <Tag label="SOUND FAMILIAR" />
          <h2 style={{ ...d3("#1E1E1E"), marginTop: 16 }}>
            If any of these sound like your last project {!isMobile && <br />}
            retrospective, we <span style={{ color: red }}>should talk.</span>
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
                <div
                  style={{
                    height: 2,
                    background: red,
                    width: "100%",
                    maxWidth: 550,
                  }}
                />
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

      {/* ── CTA BANNER ── */}
      <div
        style={{
          maxWidth: 1440,
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
          style={{ width: "100%", maxWidth: "100%", margin: 0 }}
        />
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
      </div>
    </>
  );
}
