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
import imgHero from "../../../assets/Website_Images/Services/Data Intelligence.png";
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
    title: "Conversational Analytics",
    subtitle: "Speak to Your Data",
    content: {
      type: "detail",
      serviceLabel: "CONVERSATIONAL ANALYTICS",
      heading: "Speak to Your Data",
      body: [
        "Your leadership team asks a question and gets an answer in seconds — from your own data, in plain language. No SQL. No ticket to the BI team. Your analysts stop fielding repetitive requests and focus on the strategic analysis that influences decisions. Contextual business stories, not just charts.",
        "Organizations implementing conversational analytics report 60–70% reduction in ad-hoc requests — freeing data teams for higher-value work.",
      ],
    },
  },
  {
    title: "Data Engineering & Modernization",
    subtitle: "Your Data Team on the Work That Matters",
    content: {
      type: "detail",
      serviceLabel: "DATA ENGINEERING & MODERNIZATION",
      heading: "Your Data Team on the Work That Matters",
      body: [
        "Your data engineers spend 80% of their time on pipeline maintenance, ingestion troubleshooting, and ETL debugging. We help automate the plumbing — AI extracts semantic meaning from existing SQL and ETL logic, automates ingestion, and modernizes legacy pipelines — so your team focuses on architecture, modeling, and the analysis that creates value.",
        "AI-automated data engineering reduces pipeline development time by 40–60%, shifting your most expensive talent from maintenance to innovation.",
      ],
    },
  },
  {
    title: "Data Governance & Compliance",
    subtitle: "Trust Your Data Enough to Bet On It",
    content: {
      type: "detail",
      serviceLabel: "DATA GOVERNANCE & COMPLIANCE",
      heading: "Trust Your Data Enough to Bet On It",
      body: [
        "Your governance program can't keep pace with your data. Classification is manual, lineage is incomplete, and quality rules are always six months behind. We help your team deploy governance that runs continuously — AI classifies data, enriches metadata with business context, and auto-applies governance rules — eliminating the heavy manual configuration that makes most governance programs fail.",
        "Automated governance closes the gap between data growth and compliance coverage — critical for regulated industries where audit readiness isn't optional.",
      ],
    },
  },
  {
    title: "Predictive Intelligence",
    subtitle: "Know What's Coming, Not Just What Happened",
    content: {
      type: "detail",
      serviceLabel: "PREDICTIVE INTELLIGENCE",
      heading: "Know What's Coming, Not Just What Happened",
      body: [
        "Shift your team from dashboards that explain last quarter to intelligence that predicts next quarter — and recommends what to do about it. Predictive models trained on your data, validated by your domain experts, and owned by your team: demand forecasting, churn prediction, revenue projection, risk scoring, anomaly detection.",
        "Companies using AI-driven forecasting outperform peers by 10–20% on key financial metrics. Predictive analytics has moved from advantage to necessity.",
      ],
    },
  },
  {
    title: "Unstructured Data",
    subtitle: "Unlock the 80% You Haven't Been Able to Touch",
    content: {
      type: "detail",
      serviceLabel: "UNSTRUCTURED DATA",
      heading: "Unlock the 80% You Haven't Been Able to Touch",
      body: [
        "The vast majority of your enterprise data sits in documents, emails, call transcripts, PDFs, and images — invisible to traditional analytics. We help your team unlock it: sentiment analysis on customer calls, automated contract analysis, medical record intelligence, claims processing your analysts can query and explore.",
        "What was cost-prohibitive is now achievable in weeks. The economics of unlocking unstructured data have changed by an order of magnitude.",
      ],
    },
  },
  {
    title: "Data Platform Optimization",
    subtitle: "Make the Investment You Already Made Actually Work",
    content: {
      type: "detail",
      serviceLabel: "DATA PLATFORM OPTIMIZATION",
      heading: "Make the Investment You Already Made Actually Work",
      body: [
        "You bought the platform. You migrated the data. You hired the engineers. But your leadership still isn't getting the insights they were promised. We work with your team to bridge the gap — connecting your existing infrastructure to the decisions that matter, surfacing insights already hiding in your data, and turning your data platform from a cost center into a competitive advantage your leadership can see and measure.",
        "Most enterprises extract business decisions from less than 40% of their data platform's capacity. The rest sits idle — paid for, but not connected to outcomes.",
      ],
    },
  },
];

const howCards = [
  {
    title: "Your data team stays in the driver's seat.",
    body: "We augment your analysts' and engineers' capacity — we don't replace their expertise. They own the data strategy, the governance decisions, and the roadmap.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask
          id="mask0_2742_3082"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2742_3082)">
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
    body: "Every practice we introduce — from conversational analytics to automated governance — becomes your team's capability, not a dependency on us.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask
          id="mask0_2742_3089"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect
            width="32"
            height="32"
            transform="matrix(1 0 0 -1 0 32)"
            fill="#D9D9D9"
          />
        </mask>
        <g mask="url(#mask0_2742_3089)">
          <path
            d="M15 3.0004V6.82107H17V3.0004H15ZM3 15.0004V17.0004H6.82067V15.0004H3ZM25.1793 15.0004V17.0004H29V15.0004H25.1793ZM24.0257 5.90307L21.354 8.57474L22.759 9.97974L25.4307 7.30807L24.0257 5.90307ZM7.97433 5.90307L6.56933 7.30807L9.241 9.97974L10.646 8.57474L7.97433 5.90307ZM11.7513 11.7517C10.5838 12.9193 10 14.3355 10 16.0004C10 17.0157 10.2389 17.9567 10.7167 18.8234C11.1944 19.6901 11.8444 20.4072 12.6667 20.9747V26.8721H19.3333V20.9747C20.1556 20.4072 20.8056 19.6901 21.2833 18.8234C21.7611 17.9567 22 17.0157 22 16.0004C22 14.3355 21.4162 12.9193 20.2487 11.7517C19.0811 10.5842 17.6649 10.0004 16 10.0004C14.3351 10.0004 12.9189 10.5842 11.7513 11.7517ZM14.6667 21.8414C14.8889 21.8943 15.109 21.9341 15.327 21.9607C15.545 21.9872 15.7693 22.0004 16 22.0004C16.2307 22.0004 16.455 21.9872 16.673 21.9607C16.891 21.9341 17.1111 21.8943 17.3333 21.8414V24.8721H14.6667V21.8414Z"
            fill="#ED2939"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "We work within your governance.",
    body: "Your compliance requirements, your data classification rules, your access controls. We don't ask you to bend your policies — we build within them.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask
          id="mask0_2742_3124"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2742_3124)">
          <path
            d="M5.41034 27.6665V25.6665H20.7437V27.6665H5.41034ZM13.1487 20.7895L6.07701 13.7178L8.41534 11.3128L15.5537 18.3845L13.1487 20.7895ZM21.0513 12.8868L13.9797 5.74849L16.3847 3.41016L23.4563 10.4818L21.0513 12.8868ZM27.4667 26.2048L10.5283 9.26649L11.9333 7.86149L28.8717 24.7998L27.4667 26.2048Z"
            fill="#ED2939"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Quality and accuracy are non-negotiable.",
    body: "Data intelligence is only valuable if it's trustworthy. Every model, every pipeline, every insight is validated against your domain expertise before it reaches a decision-maker.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask
          id="mask0_2742_3117"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2742_3117)">
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
    tags: "MDXHEALTH • DATA UNIFICATION",
    title: "From Fragmented Data to Predictive, Decision-Ready Insights",
    excerpt:
      "We unified MDxHealth's scattered data ecosystem to create a governed, single source of truth across clinical, operational, and financial workflows. Advanced predictive analytics enabled proactive decision-making, improving visibility into outcomes, risks, and performance trends.",
  },
  {
    tags: "CAREPREDICTOR • HEALTHCARE ANALYTICS",
    title: "CarePredictor Helps Turn Care Signals Into Earlier Action",
    excerpt:
      "Technossus supported CarePredictor in strengthening a healthcare platform that uses data-driven insights to help care teams identify risks sooner and respond with more confidence. The work focused on improving reliability, usability, and decision support so technology could better serve the people delivering care.",
  },
  {
    tags: "JUPITER HOSPITAL • RECEIVABLES",
    title: "Improving Receivables Visibility & DSO Control",
    excerpt:
      "Jupiter Hospital lacked a consolidated, drill-down view of receivables and DSO across group, hospital, and account levels, limiting timely decision-making. Manual processes and absence of mapping to sales and account teams made it difficult to track performance against targets and take corrective actions.",
  },
];

const painCards = [
  {
    heading:
      "You're sitting on years of data but your team still makes decisions on gut feel.",
    body: "Because getting to the insight takes too long. The data is there — the path to it isn't.",
  },
  {
    heading:
      "Your governance program is always six months behind your data growth.",
    body: "And your next audit is making you nervous. Manual classification and incomplete lineage compound every quarter.",
  },
  {
    heading:
      "You have regulatory and compliance data in documents and PDFs that needs to be searchable and auditable.",
    body: "And right now it's not. Unstructured data is invisible to your analytics stack.",
  },
  {
    heading:
      "Your data engineers spend more time fixing pipelines than building anything new.",
    body: "And the backlog of analytics requests keeps growing. Maintenance is consuming the capacity meant for innovation.",
  },
  {
    heading:
      "Your BI team is buried in ad-hoc requests and your executives wait days for answers.",
    body: "Answers that should take seconds. Every question that requires a ticket slows the decision that depends on it.",
  },
  {
    heading:
      "You invested in Snowflake or Databricks but your leadership still can't answer basic business questions.",
    body: "Without a week-long analyst cycle. The platform is ready. The path from question to answer isn't.",
  },
];

export default function DataIntelligence() {
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
    getContactFormTopicForRoute(pathname) ?? "Data Intelligence & Analytics";

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
              { label: "Data Intelligence & Analytics", active: true },
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
                {"Data Intelligence & Analytics"}
              </p>
              <FadeUp>
                <h1 style={d1()}>
                  Your data is talking.{" "}
                  <span style={{ color: red }}>
                    You're just not hearing it fast enough.
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
                  Decisions still take weeks because data lives in silos,
                  reports look backward, and by the time the analysis arrives,
                  the market has moved. We work with your team to close the gap
                  between data collected and decision made — from months to
                  minutes.
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
                  The cost of analyzing your data collapsed.{" "}
                  <span style={{ color: red }}>
                    The cost of acting on it didn't.
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
                    "AI is what caused the collapse. Pipeline maintenance, report generation, SQL writing, metadata cataloging — the plumbing that once consumed 80% of your data team's time — can now be automated. The work that can't be automated is the work that matters most: which decision to make, when to make it, and how to make it trustworthy enough to stake the business on.",
                    "You may have already invested in a modern data platform. The real work now is in the distance between what your platform can do and what your people are equipped to ask of it. We work alongside your team to close that distance, transferring capability as we deliver.",
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
                    num: "47%",
                    desc: "Of CXOs say data readiness is their #1 challenge for AI initiatives.",
                  },
                  {
                    num: "80/20",
                    desc: "Data teams spend 80% on plumbing, 20% on insight — we flip that ratio.",
                  },
                  {
                    num: "60–70%",
                    desc: "Reduction in ad-hoc requests when your team can query data directly.",
                  },
                  {
                    num: "Zero",
                    desc: "Handoffs without knowledge transfer. Your team learns as we build.",
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
            Better decisions, faster insight,{" "}
            <span style={{ color: red }}>stronger teams.</span>
          </h2>
          <div style={{ marginTop: 48 }}>
            <Accordion items={accordionItems} defaultActiveIndex={0} />
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
                We don't build a platform and{" "}
                <span style={{ color: red }}>leave you dependent on it.</span>
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
                  "We work embedded with your data team — transferring capability as we deliver. When the engagement ends, your analysts and engineers own the platform, understand the architecture, and can extend it without us.",
                  "We know that new data capabilities create as many questions as answers for your team. Our approach is designed to bring your people along, not leave them behind. That's how we've maintained 90%+ client retention.",
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
            Sound <span style={{ color: red }}>Familiar?</span>
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
          heading="Bring us your toughest data problem."
          body="No six-month proposal. No 200-slide deck. Working intelligence, built with your team — and your data team will be stronger for the experience."
          primaryCta="Bring us your problem →"
          secondaryCta="Explore Solution"
          secondaryHref="/contact"
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
