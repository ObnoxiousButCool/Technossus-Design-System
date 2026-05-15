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
import imgHero from "../../../assets/Website_Images/Services/Product Eng. .png";
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
    title: "Discovery & Incubation",
    subtitle: "Find out if the idea works before you bet the quarter on it.",
    content: {
      type: "detail",
      serviceLabel: "DISCOVERY & INCUBATION",
      heading: "Find out if the idea works before you bet the quarter on it.",
      body: [
        "Most product bets fail in discovery — not because the idea was wrong, but because the team spent too long finding out. We move from hypothesis to working prototype in weeks, using AI-accelerated methods that compress the front of the build without skipping the thinking that matters. You leave with a validated foundation to build on, or the clarity to redirect before the cost compounds.",
        "Gartner: 45% of product launches are delayed by at least one month — and 20% of those delayed launches fail to meet their internal targets.",
      ],
    },
  },
  {
    title: "Product Scaling & Engineering",
    subtitle: "Ship version one. Then build the product it needs to become.",
    content: {
      type: "detail",
      serviceLabel: "PRODUCT SCALING & ENGINEERING",
      heading: "Ship version one. Then build the product it needs to become.",
      body: [
        "Getting to launch is one discipline. Scaling what you've launched is an entirely different one — and most product teams hit the gap between the two harder than they expected. We evolve the architecture, integrations, and experience layer across releases, so the product grows without accumulating the kind of technical debt that makes every new feature a negotiation.",
        "Gartner: 80% of product launches require significant changes after initial rollout due to market disruptions and evolving customer needs.",
      ],
    },
  },
  {
    title: "Enterprise Integration & Product Architecture",
    subtitle:
      "Your systems know things your business needs. They're just not talking to each other.",
    content: {
      type: "detail",
      serviceLabel: "ENTERPRISE INTEGRATION & PRODUCT ARCHITECTURE",
      heading:
        "Your systems know things your business needs. They're just not talking to each other.",
      body: [
        "Most organizations aren't short on systems — they're short on connections between them. Inventory sits in one place, finance in another, supply chain somewhere else entirely. We design and build the integration layer that connects your systems of record — so data flows where it needs to and processes run the way the business actually works.",
        "71% of applications remain unintegrated or disconnected — unchanged for three consecutive years. Only 2% of IT leaders report integrating more than half of their applications.",
      ],
    },
  },
  {
    title: "AI & SaaS Product Augmentation",
    subtitle: "The product works. Now make it work like it was built today.",
    content: {
      type: "detail",
      serviceLabel: "AI & SAAS PRODUCT AUGMENTATION",
      heading: "The product works. Now make it work like it was built today.",
      body: [
        "Most products in market today were built before the current wave of AI and SaaS capabilities existed. We identify where AI can eliminate friction your users have quietly accepted for years: document parsing instead of manual entry, agentic workflows that automate repetitive handoffs, intelligent features that make the product feel like it was built for today's expectations.",
        "Gartner 2024: Early adopters of Gen AI report an average 15.2% cost savings and 22.6% productivity improvement. For every $1 invested, companies see an average return of $3.70.",
      ],
    },
  },
  {
    title: "Application Modernization",
    subtitle:
      "Keep the business logic. Lose the technical debt holding it hostage.",
    content: {
      type: "detail",
      serviceLabel: "APPLICATION MODERNIZATION",
      heading:
        "Keep the business logic. Lose the technical debt holding it hostage.",
      body: [
        "The value in your existing application isn't the code — it's the business logic, domain knowledge, and workflows refined over years. We modernize the application layer incrementally — preserving what works, refactoring what doesn't, and introducing modern architecture patterns that let the product evolve without a big-bang rewrite.",
        "Gartner: 60–80% of IT budgets are spent maintaining legacy systems — leaving little room for innovation or the strategic work that actually moves the product forward.",
      ],
    },
  },
  {
    title: "Product Support Automation",
    subtitle:
      "Product support burden doesn't have to scale with your product's success.",
    content: {
      type: "detail",
      serviceLabel: "PRODUCT SUPPORT AUTOMATION",
      heading:
        "Product support burden doesn't have to scale with your product's success.",
      body: [
        "As your product grows, so does the volume of questions, issues, and requests. Without the right support architecture, that volume lands on your engineering and product teams. We design and implement intelligent support systems that handle the predictable load automatically, escalate what genuinely needs human attention, and generate operational insight your team needs to eliminate recurring issues at the source.",
        "Gartner: Agentic AI will autonomously resolve 80% of common customer service issues without human intervention by 2029 — with a 30% reduction in operational costs.",
      ],
    },
  },
  {
    title: "Continuous Delivery & Release Engineering",
    subtitle:
      "The best release is the one nobody notices. Getting there should feel routine.",
    content: {
      type: "detail",
      serviceLabel: "CONTINUOUS DELIVERY & RELEASE ENGINEERING",
      heading:
        "The best release is the one nobody notices. Getting there should feel routine.",
      body: [
        "Release pain isn't a technology problem — it's an architecture and process problem that compounds quietly until it owns the calendar. We build the CI/CD pipelines, deployment architecture, and release governance that turn shipping into a repeatable, low-drama operation. The goal is a team that can push to production with confidence and spend its energy on the next feature rather than the last incident.",
        "DORA 2024: Low-performing teams have a 64% change failure rate. Elite teams have 5%. The difference is process and architecture, not talent.",
      ],
    },
  },
];

const howCards = [
  {
    title: "Your team stays in the driver's seat.",
    body: "We work alongside your engineers and product managers — never around them. Decision authority stays where it belongs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask
          id="mask0_2742_3076"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2742_3076)">
          <path
            d="M25.1027 11.795C23.9042 11.795 22.8661 11.4257 21.9883 10.687C21.1106 9.94856 20.5547 9.01867 20.3207 7.89733H11.646C11.4529 8.84778 11.0174 9.664 10.3397 10.346C9.66189 11.0282 8.84778 11.4659 7.89733 11.659V20.3207C9.01867 20.5547 9.94856 21.1106 10.687 21.9883C11.4257 22.8661 11.795 23.9042 11.795 25.1027C11.795 26.4582 11.3176 27.6133 10.3627 28.568C9.408 29.5227 8.25289 30 6.89733 30C5.54178 30 4.38667 29.5227 3.432 28.568C2.47733 27.6133 2 26.4582 2 25.1027C2 23.9042 2.36922 22.8661 3.10767 21.9883C3.84611 21.1106 4.776 20.5547 5.89733 20.3207V11.659C4.776 11.4248 3.84611 10.8688 3.10767 9.991C2.36922 9.11322 2 8.082 2 6.89733C2 5.54178 2.47733 4.38667 3.432 3.432C4.38667 2.47733 5.53756 2 6.88467 2C8.06933 2 9.10056 2.36922 9.97833 3.10767C10.8561 3.84611 11.412 4.776 11.646 5.89733H20.3207C20.5547 4.776 21.1106 3.84611 21.9883 3.10767C22.8661 2.36922 23.9042 2 25.1027 2C26.4496 2 27.6024 2.47955 28.5613 3.43867C29.5204 4.39755 30 5.55044 30 6.89733C30 8.25289 29.5204 9.408 28.5613 10.3627C27.6024 11.3176 26.4496 11.795 25.1027 11.795ZM25.1027 30C23.7471 30 22.592 29.5227 21.6373 28.568C20.6824 27.6133 20.205 26.4624 20.205 25.1153C20.205 23.7598 20.6824 22.6026 21.6373 21.6437C22.592 20.6846 23.7471 20.205 25.1027 20.205C26.4582 20.205 27.6133 20.6846 28.568 21.6437C29.5227 22.6026 30 23.7598 30 25.1153C30 26.4624 29.5227 27.6133 28.568 28.568C27.6133 29.5227 26.4582 30 25.1027 30Z"
            fill="#ED2939"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "We build it so your team can own it.",
    body: "The engagement model follows your business needs, not our convenience. We build it so your team can own it — or we stay as your delivery partner.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask
          id="mask0_2742_3095"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2742_3095)">
          <path
            d="M11.6217 18.2887C12.2499 17.6605 12.564 16.8977 12.564 16.0003C12.564 15.103 12.2499 14.3402 11.6217 13.712C10.9935 13.0838 10.2307 12.7697 9.33335 12.7697C8.43602 12.7697 7.67324 13.0838 7.04502 13.712C6.4168 14.3402 6.10269 15.103 6.10269 16.0003C6.10269 16.8977 6.4168 17.6605 7.04502 18.2887C7.67324 18.9169 8.43602 19.231 9.33335 19.231C10.2307 19.231 10.9935 18.9169 11.6217 18.2887ZM9.33335 23.154C7.33335 23.154 5.64102 22.4618 4.25635 21.0773C2.87191 19.6927 2.17969 18.0003 2.17969 16.0003C2.17969 14.0003 2.87191 12.308 4.25635 10.9233C5.64102 9.5389 7.33335 8.84668 9.33335 8.84668C10.988 8.84668 12.4278 9.31501 13.6527 10.2517C14.8774 11.1883 15.7008 12.3268 16.123 13.667H27.7384L30.0514 15.9797L26.064 20.4027L23.1797 18.167L20.6284 20.4617L18.2564 18.3337H16.123C15.6872 19.7286 14.8467 20.8807 13.6014 21.79C12.356 22.6993 10.9334 23.154 9.33335 23.154Z"
            fill="#ED2939"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "We work within your governance, processes, and pace.",
    body: "No mandate to change how your organization runs. We adapt to what exists and improve from the inside.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask
          id="mask0_2742_3127"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2742_3127)">
          <path
            d="M5.41034 27.6665V25.6665H20.7437V27.6665H5.41034ZM13.1487 20.7895L6.07701 13.7178L8.41534 11.3128L15.5537 18.3845L13.1487 20.7895ZM21.0513 12.8868L13.9797 5.74849L16.3847 3.41016L23.4563 10.4818L21.0513 12.8868ZM27.4667 26.2048L10.5283 9.26649L11.9333 7.86149L28.8717 24.7998L27.4667 26.2048Z"
            fill="#ED2939"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Quality is non-negotiable.",
    body: "Compressed timelines don't mean corners cut. The speed comes from eliminating waste, not from skipping what matters.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask
          id="mask0_2742_3111"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2742_3111)">
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
    tags: "COMMERCE • PRODUCT REDESIGN",
    title: "56% Faster Product Discovery",
    excerpt:
      "A high-volume commerce experience was redesigned so users could find what they needed faster and with less friction — validated through research before a single production change.",
  },
  {
    tags: "FINTECH • RAPID PROTOTYPING",
    title: "Working Prototype in 24 Hours",
    excerpt:
      "A fintech concept moved from idea to functioning product in a single day — fast enough to test, validate, and spark market interest.",
  },
  {
    tags: "MOBILE • LAUNCH READINESS",
    title: "4M+ Views in 48 Hours",
    excerpt:
      "A client's configurable mobile product launched with immediate traction, proving the value of speed, usability, and launch readiness.",
  },
];

const painCards = [
  {
    heading:
      "\"We've been in discovery for months and still aren't sure what we're building.\"",
    body: "The idea is solid. The scope keeps shifting. Discovery has become the project rather than the path to the project.",
  },
  {
    heading:
      '"We shipped a product — but now every new feature feels like open-heart surgery."',
    body: "Launch was a success. But the architecture that got you there isn't the one that scales. Every sprint costs more than the last.",
  },
  {
    heading:
      '"Our teams pull data from three different systems to answer one question."',
    body: "Inventory, finance, and supply chain each have their version of reality. Nobody trusts the numbers until they've reconciled them manually.",
  },
  {
    heading:
      '"We know AI could improve our product — we just haven\'t found the right entry point."',
    body: "The capability exists. The use cases are obvious in hindsight. But nobody has the bandwidth to scope it properly while keeping the product running.",
  },
];

export default function ProductEngineering() {
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
    getContactFormTopicForRoute(pathname) ?? "Product Engineering";

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
              { label: "Product Engineering", active: true },
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
                {"PRODUCT ENGINEERING"}
              </p>
              <FadeUp>
                <h1 style={d1()}>
                  Great products don't stall because the idea was wrong. They
                  stall because{" "}
                  <span style={{ color: red }}>
                    building and scaling are two completely different problems.
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
                  Most teams discover the gap between working and scaling only
                  after they're already in it. We work with your team from first
                  concept through platform maturity — getting to a working
                  product faster than you'd expect, without the shortcuts that
                  cause problems later.
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
                  Your product team didn't sign up to spend six months{" "}
                  <span style={{ color: red }}>
                    finding out if the idea works.
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
                    "The window between idea and evidence used to be measured in quarters. Today, AI-accelerated engineering compresses that window to weeks — not by cutting corners, but by eliminating the cycles that never needed to exist.",
                    "The teams we work with don't abandon their instincts or existing investments. They get to the answer faster, then build on ground they've actually tested.",
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
                    num: "Weeks not quarters",
                    desc: "From concept to working product — compressed without shortcuts.",
                  },
                  {
                    num: "70%",
                    desc: "Of product delays are scope and discovery failures, not engineering ones — we solve for the front of the problem.",
                  },
                  {
                    num: "1→N",
                    desc: "Scaling a product is a different discipline than building one — we bring both.",
                  },
                  {
                    num: "Built to hand off",
                    desc: "Your team owns it when we're done, or we transition into managed services.",
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
            From strategy to launch to continuous evolution —{" "}
            <span style={{ color: red }}>we build alongside your team.</span>
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
                We don't fly in, build something,{" "}
                <span style={{ color: red }}>and leave.</span>
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
                  "Technossus engineers are embedded in your delivery — not parachuted in to hand over a product and disappear. We work with your team as a natural extension of it: your processes, your governance, your cadence. Capability transfers as we build, so when the engagement ends, your team is stronger than when we started.",
                  "Over 90% of our clients extend or expand their engagement within the first year.",
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
            If any of these describe where your team is right now, we{" "}
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
