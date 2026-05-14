"use client";

import React from "react";
import { Tag } from "../../../components/Tag";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Accordion } from "../../../components/Accordion";
import { CTABanner } from "../../../components/CTABanner";
import { Button } from "../../../components/Button";
import { FadeUp } from "../../../components/Animate/FadeUp";
import { useBreakpoint } from "../../../ts/breakpoints";
import type { AccordionItem } from "../../../components/Accordion";
import { resolveImageSrc } from "../../../ts/imageSrc";
import imgHero from "../../../assets/Website_Images/Services/AI Led Transformation.png";

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
  },
  {
    title: "What gets built traces back to what you approved.",
    body: "No scope creep that lands on your desk at invoice time. Investment accountability is part of the delivery, not a risk we hand back.",
  },
  {
    title: "Your organization moves at the pace it can absorb.",
    body: "Change management is part of the deliverable. Fast where the organization is ready, patient where it isn't, honest about which is which.",
  },
  {
    title: "We tell you when fast is the right bet.",
    body: "Our job is strategic pace, not performance theater. We'll push when the window is open, and slow you down when speed is the wrong signal to the organization.",
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
  const { isMobile, isTablet } = useBreakpoint();

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
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
              gap: isMobile ? 32 : 60,
              marginTop: 40,
            }}
          >
            <div
              style={{
                flex: 2,
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
                  question is whetherthe investment is{" "}
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
                    href="#"
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
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: isTablet ? 300 : 460,
                }}
              >
                <img
                  src={resolveImageSrc(imgHero)}
                  alt=""
                  style={{
                    width: "100%",
                    height: isTablet ? 300 : 460,
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
      <section style={{ borderTop: "1px solid #E8E8E8" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            padding: isMobile ? "24px 16px" : "32px 80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 18,
          }}
        >
          <p
            style={{
              fontFamily: sans,
              fontSize: 20,
              fontWeight: 400,
              color: "#424242",
            }}
          >
            Trusted By
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: isMobile ? 24 : 72,
              flexWrap: "wrap",
            }}
          >
            {[
              "TOYOTA FINANCIAL",
              "GE HEALTHCARE",
              "COMMONSPIRIT",
              "BIO-RAD",
              "ADAPTHEALTH",
            ].map((name) => (
              <span
                key={name}
                style={{
                  fontFamily: sans,
                  fontSize: 20,
                  fontWeight: 500,
                  color: "#424242",
                }}
              >
                {name}
              </span>
            ))}
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
                flexDirection: isMobile ? "column" : "row",
                gap: 48,
                alignItems: "flex-start",
                marginTop: 0,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  flex: isMobile ? undefined : "485 1 0",
                  minWidth: isMobile ? "100%" : 320,
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
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                  gap: 20,
                  flex: isMobile ? undefined : "807 1 0",
                  width: isMobile ? "100%" : undefined,
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
                        fontSize: 16,
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
        <div style={inner}>
          <Tag label="SERVICE OFFERINGS" />
          <h2 style={{ ...d3("#1E1E1E"), marginTop: 16 }}>
            Your strategy, configured across the delivery <br />
            <span style={{ color: red }}>that makes it land.</span>
          </h2>
          <div style={{ marginTop: 48 }}>
            <Accordion items={accordionItems} defaultActiveIndex={1} />
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section style={{ background: "#fff" }}>
        <div style={{ ...inner, paddingTop: 0 }}>
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? 32 : 32,
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: isMobile ? "100%" : 320 }}>
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
                minWidth: isMobile ? "100%" : 320,
              }}
            >
              {howCards.map((card) => (
                <div
                  key={card.title}
                  style={{
                    background: "#F5F5F5",
                    padding: "28px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <div style={{ color: red, fontSize: 24 }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M3.9374 11.5452L7.23743 12.9414C7.64513 12.126 8.07975 11.338 8.54129 10.5774C9.00284 9.81685 9.5115 9.06829 10.0673 8.33174L7.86631 7.90482C7.78938 7.88559 7.71485 7.88799 7.64273 7.91203C7.57061 7.93607 7.5057 7.97694 7.44801 8.03463L3.9374 11.5452V11.5452M9.03162 14.3548L13.2922 18.5923C14.4095 18.125 15.5682 17.4789 16.7682 16.6539C17.9682 15.8289 19.1076 14.8769 20.1864 13.7981C21.8691 12.1154 23.1706 10.2822 24.0907 8.2986C25.0109 6.31495 25.4662 4.27408 25.4566 2.17598C23.3585 2.16638 21.3162 2.62167 19.3297 3.54185C17.3432 4.46204 15.5085 5.76348 13.8259 7.44617C12.747 8.52501 11.7951 9.66684 10.9701 10.8717C10.1451 12.0765 9.49893 13.2375 9.03162 14.3548V14.3548M16.2547 11.3548C15.747 10.8471 15.4932 10.2298 15.4932 9.50289C15.4932 8.77597 15.747 8.15867 16.2547 7.65098C16.7624 7.1433 17.386 6.88945 18.1254 6.88945C18.8648 6.88945 19.4884 7.1433 19.996 7.65098C20.5037 8.15867 20.7576 8.77597 20.7576 9.50289C20.7576 10.2298 20.5037 10.8471 19.996 11.3548C19.4884 11.8625 18.8648 12.1163 18.1254 12.1163C17.386 12.1163 16.7624 11.8625 16.2547 11.3548V11.3548M16.0874 23.7096L19.598 20.199C19.6557 20.1413 19.6965 20.0764 19.7206 20.0043C19.7446 19.9322 19.747 19.8576 19.7278 19.7807L19.3009 17.5797C18.5643 18.1355 17.8157 18.6403 17.0552 19.0942C16.2946 19.548 15.5066 19.9788 14.6912 20.3865L16.0874 23.7096V23.7096M27.5075 0.116417C27.8287 3.00679 27.4868 5.7462 26.482 8.33464C25.4772 10.9231 23.8239 13.3683 21.522 15.6702C21.4739 15.7182 21.4306 15.7615 21.3922 15.8C21.3537 15.8384 21.3104 15.8817 21.2623 15.9298L21.9402 19.325C22.0306 19.7769 22.0104 20.2163 21.8797 20.6432C21.7489 21.0701 21.5229 21.4442 21.2018 21.7653L15.3201 27.6326L12.5018 21.0096L6.62302 15.1308L0 12.2981L5.8442 6.43083C6.16535 6.10968 6.54323 5.88131 6.97785 5.74574C7.41246 5.61016 7.85572 5.58756 8.30764 5.67795L11.7317 6.37025C11.7797 6.32217 11.8206 6.2789 11.8543 6.24043C11.8879 6.20197 11.9288 6.1587 11.9769 6.11062C14.2788 3.80872 16.7201 2.15392 19.3008 1.14623C21.8816 0.138547 24.6172 -0.204725 27.5075 0.116417V0.116417M2.59038 19.7202C3.32114 18.9894 4.21199 18.6226 5.26294 18.6197C6.31388 18.6168 7.20473 18.9808 7.93549 19.7115C8.66625 20.4423 9.02779 21.3331 9.02009 22.3841C9.0124 23.435 8.64318 24.3259 7.91242 25.0566C7.34511 25.6239 6.41435 26.111 5.12013 26.5177C3.82592 26.9244 2.16537 27.2499 0.138483 27.4941C0.382706 25.4672 0.710585 23.8067 1.12212 22.5125C1.53366 21.2182 2.02308 20.2875 2.59038 19.7202V19.7202M4.19419 21.3153C3.92495 21.5846 3.66534 22.048 3.41534 22.7057C3.16534 23.3634 2.99515 24.0346 2.90476 24.7192C3.58938 24.6288 4.26053 24.4601 4.91822 24.2129C5.57592 23.9658 6.03938 23.7076 6.30861 23.4384C6.60861 23.1384 6.7663 22.7783 6.78169 22.3581C6.79707 21.9379 6.65476 21.5778 6.35476 21.2778C6.05476 20.9778 5.69467 20.8341 5.27447 20.8466C4.85428 20.8591 4.49419 21.0153 4.19419 21.3153V21.3153"
                        fill="#E31B23"
                      />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontFamily: "General Sans",
                      fontSize: 20,
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
                      fontSize: 16,
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
                      height: 240,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  <div
                    style={{
                      padding: "24px",
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
                        fontSize: 20,
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
                        fontSize: 16,
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
                        width: "50%",
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
            If any of these sound like your last project <br />
            retrospective, we <span style={{ color: red }}>should talk.</span>
          </h2>
          <p
            style={{
              fontFamily: "General Sans",
              fontSize: 18,
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
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <h3
                  style={{
                    fontFamily: sans,
                    fontSize: 24,
                    fontWeight: 600,
                    color: "#424242",
                    lineHeight: 1.4,
                    margin: 0,
                  }}
                >
                  {card.heading}
                </h3>
                <div style={{ height: 2, background: red, width: "100%", maxWidth: 550 }} />
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
      </div>
    </>
  );
}
