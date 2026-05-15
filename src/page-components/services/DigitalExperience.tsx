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
import imgHero from "../../../assets/Website_Images/Services/Digital Exp..png";
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
    title: "Experience Strategy & Transformation",
    subtitle: "Align every experience decision to a business outcome.",
    content: {
      type: "detail",
      serviceLabel: "EXPERIENCE STRATEGY & TRANSFORMATION",
      heading: "Align every experience decision to a business outcome.",
      body: [
        "Experience strategy that sits above individual products, channels, and teams — not a vision document, but an executable framework your organization can own and act on. We map the current experience landscape, identify where friction is costing you customers, and build the transformation roadmap with the people who will carry it forward. Every decision traces to a growth, retention, or adoption metric.",
        "Organizations that invest in unified experience strategy before individual product redesigns reduce downstream correction costs by 2–3× compared to reactive, channel-by-channel approaches.",
      ],
    },
  },
  {
    title: "Product Ideation & Co-Design",
    subtitle: "Pressure-test the idea before the roadmap commits to it.",
    content: {
      type: "detail",
      serviceLabel: "PRODUCT IDEATION & CO-DESIGN",
      heading: "Pressure-test the idea before the roadmap commits to it.",
      body: [
        "Structured ideation as a service — not a brainstorm, not a hackathon that leaves the room with Post-its and no direction. A facilitated engagement where your product, engineering, and business stakeholders co-ideate alongside our design team. Generative AI participates as a co-creator: surfacing patterns, accelerating prototypes, and letting your team explore more directions in a day than traditional ideation covers in a month.",
        "Teams that run structured co-design validation before committing to roadmap reduce post-launch redesign costs by 30–50% and ship with measurably higher user confidence scores from day one.",
      ],
    },
  },
  {
    title: "Digital Experience V&V",
    subtitle: "Don't let accessibility debt become a compliance crisis.",
    content: {
      type: "detail",
      serviceLabel: "DIGITAL EXPERIENCE V&V",
      heading: "Don't let accessibility debt become a compliance crisis.",
      body: [
        "Most firms address usability, accessibility, and compliance separately — on different timelines, by different teams, often after launch. We bundle all three into a single validated engagement: WCAG and ADA compliance review, usability testing across real user scenarios, and AI-UX pattern validation for products deploying generative interfaces.",
        "Digital accessibility litigation in the U.S. exceeded 4,600 cases in 2023 — a 42% year-over-year increase. The majority of violations were preventable through pre-launch V&V.",
      ],
    },
  },
  {
    title: "Omnichannel Customer Experience",
    subtitle:
      "Meet your customer where they are and make it feel like the same company.",
    content: {
      type: "detail",
      serviceLabel: "OMNICHANNEL CUSTOMER EXPERIENCE",
      heading:
        "Meet your customer where they are — and make it feel like the same company.",
      body: [
        "Your customers don't see your org chart. They see whether the experience on your mobile app matches your web portal, your customer support interface, and every other surface they interact with. We design across channels with a unified experience model — shared interaction patterns, consistent language, and a visual identity that holds at every touchpoint.",
        "Customers who engage across three or more channels have 90% higher lifetime value than single-channel customers — and experience consistency is what makes sustained cross-channel engagement possible.",
      ],
    },
  },
  {
    title: "Design Systems",
    subtitle: "Make the design decision once. Deploy it everywhere.",
    content: {
      type: "detail",
      serviceLabel: "DESIGN SYSTEMS",
      heading: "Make the design decision once. Deploy it everywhere.",
      body: [
        "A design system is only as valuable as your team's ability to use and extend it. We build in Figma — tokens, components, patterns, documentation, and governance — to the standards your engineering teams can implement and scale. Your teams move faster because the decisions are already made. Your product looks consistent because the decisions are shared.",
        "Teams operating from a mature design system ship 3–5× faster and spend 40% less time on design QA — freeing designers for the work that requires craft, not repetition.",
      ],
    },
  },
  {
    title: "Adaptive Experience Design",
    subtitle: "Experiences that know who they're talking to.",
    content: {
      type: "detail",
      serviceLabel: "ADAPTIVE EXPERIENCE DESIGN",
      heading: "Experiences that know who they're talking to.",
      body: [
        "AI-native UX goes beyond personalization toggles — it's the architecture of experiences that observe, infer, and respond to each user in context. We design the interaction models, content patterns, and feedback loops that make your product feel less like software and more like a service that understands the person using it. Content that surfaces at the right moment. Flows that adapt based on what the user has already done.",
        "Personalized digital experiences drive 40% higher engagement and measurably lower abandonment rates at every stage of the user journey — the patterns are the product.",
      ],
    },
  },
];

const howCards = [
  {
    title: "Outcomes, not outputs.",
    body: "Every engagement is framed around the business metric it should move — adoption, retention, conversion, satisfaction, time-to-value. Deliverables are the means. The metric is how we know the work worked.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask
          id="mask0_2742_3073"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2742_3073)">
          <path
            d="M11.1284 17.2766V8.46126H14.205V17.2766L12.6667 15.7943L11.1284 17.2766ZM17.359 19.7636V3.12793H20.4357V16.6869L17.359 19.7636ZM4.87204 23.4919V13.7946H7.94871V20.4149L4.87204 23.4919ZM4.79504 27.7329L12.6257 19.9023L17.359 23.9689L25.595 15.7329H23V13.7329H29V19.7329H27V17.1379L17.441 26.6969L12.7077 22.6303L7.60504 27.7329H4.79504Z"
            fill="#ED2939"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Capability transfers as we build.",
    body: "Workshop formats, design system components, and validation frameworks we produce are documented, trained on, and handed over. When we leave, your team is running the system — not waiting for us to come back.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask
          id="mask0_2742_3092"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2742_3092)">
          <path
            d="M13.0667 17.9843L14.1693 14.3637L11.2693 12.128H14.877L16 8.52267L17.123 12.128H20.7307L17.8103 14.3637L18.9127 17.9843L16 15.733L13.0667 17.9843ZM8.66667 29.6407V20.097C7.82222 19.215 7.16667 18.1953 6.7 17.038C6.23333 15.8809 6 14.6459 6 13.333C6 10.5432 6.96922 8.17912 8.90767 6.24067C10.8461 4.30223 13.2102 3.33301 16 3.33301C18.7898 3.33301 21.1539 4.30223 23.0923 6.24067C25.0308 8.17912 26 10.5432 26 13.333C26 14.6459 25.7667 15.8809 25.3 17.038C24.8333 18.1953 24.1778 19.215 23.3333 20.097V29.6407L16 27.3073L8.66667 29.6407ZM21.6667 18.9997C23.2222 17.4441 24 15.5552 24 13.333C24 11.1108 23.2222 9.2219 21.6667 7.66634C20.1111 6.11079 18.2222 5.33301 16 5.33301C13.7778 5.33301 11.8889 6.11079 10.3333 7.66634C8.77778 9.2219 8 11.1108 8 13.333C8 15.5552 8.77778 17.4441 10.3333 18.9997C11.8889 20.5552 13.7778 21.333 16 21.333C18.2222 21.333 20.1111 20.5552 21.6667 18.9997Z"
            fill="#ED2939"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "We work within your product cadence.",
    body: "We don't ask you to pause delivery to do experience strategy. We embed inside your existing sprint rhythm and move at a pace your organization can absorb and sustain.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask
          id="mask0_2742_3133"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2742_3133)">
          <path
            d="M15 27.3337V9.83366H17V27.3337H15ZM9.82065 23.449V13.7053H11.8203V23.449H9.82065ZM20.1796 23.449V13.7053H22.1793V23.449H20.1796ZM4.64098 19.5773V17.5773H6.64098V19.5773H4.64098ZM25.359 19.5773V17.5773H27.359V19.5773H25.359ZM3.33331 13.1287V11.1287H4.55398C5.51531 11.1287 6.41376 10.891 7.24931 10.4157C8.08487 9.94055 8.75131 9.29444 9.24865 8.47733C9.96154 7.28755 10.9164 6.3551 12.1133 5.67999C13.3102 5.00466 14.6059 4.66699 16.0003 4.66699C17.395 4.66699 18.6905 5.00466 19.887 5.67999C21.0836 6.3551 22.0384 7.28755 22.7513 8.47733C23.2402 9.29444 23.9009 9.94055 24.7333 10.4157C25.5658 10.891 26.47 11.1287 27.446 11.1287H28.6666V13.1287H27.4666C26.1522 13.1287 24.921 12.8077 23.773 12.1657C22.6252 11.5239 21.7171 10.6414 21.0486 9.51832C20.5204 8.62588 19.808 7.92755 18.9113 7.42333C18.0146 6.9191 17.0442 6.66699 16 6.66699C14.9782 6.66699 14.019 6.9191 13.1223 7.42333C12.2254 7.92755 11.5129 8.62588 10.9846 9.51832C10.3078 10.6414 9.39531 11.5239 8.24731 12.1657C7.09954 12.8077 5.86842 13.1287 4.55398 13.1287H3.33331Z"
            fill="#ED2939"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Accessibility and compliance are not checkboxes.",
    body: "Every engagement is validated against WCAG, ADA, and usability standards before it ships. Quality is non-negotiable — and we carry that standard from the first wireframe to the final release.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask
          id="mask0_2742_3114"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2742_3114)">
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
    tags: "COMMERCE • EXPERIENCE REDESIGN",
    title: "56% Faster Product Discovery",
    excerpt:
      "A high-volume commerce experience was redesigned so users could find what they needed faster and with less friction — validated through usability research before a single line of production code changed.",
  },
  {
    tags: "FINTECH • RAPID PROTOTYPING",
    title: "Working Prototype in 24 Hours",
    excerpt:
      "A fintech concept moved from idea to functioning product in a single day — fast enough to test, validate, and spark investor and market interest.",
  },
  {
    tags: "MOBILE • LAUNCH READINESS",
    title: "4M+ Views in 48 Hours",
    excerpt:
      "A client's configurable mobile product launched with immediate traction, proving the value of speed, usability, and design-led go-to-market readiness.",
  },
];

const painCards = [
  {
    heading: '"We shipped the product, but adoption is lower than expected."',
    body: "Nobody can agree on whether it's a design problem, a feature problem, or a user research problem. The build is done and the question is still open.",
  },
  {
    heading: '"Every team is designing their own patterns."',
    body: "The product looks like three different companies built it, and the inconsistencies are starting to show up in customer feedback.",
  },
  {
    heading: '"We have a product idea that everyone agrees on in principle."',
    body: "Until someone asks what you're actually building and the room goes quiet. Alignment on concept doesn't mean alignment on scope.",
  },
  {
    heading:
      '"Our accessibility audit came back with violations we didn\'t know existed."',
    body: "The legal team is asking how this reached production without anyone catching it. The answer is that compliance was treated as a post-launch checkbox.",
  },
];

export default function DigitalExperience() {
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
    getContactFormTopicForRoute(pathname) ?? "Digital Experience & Design";

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
              { label: "Digital Experience Design", active: true },
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
                {
                  "The gap between what your team designed and what users actually experience isn't inevitable — it's the cost of building without validation, designing across silos, and shipping before the experience is proven. We work with your team to close that gap: from the first whiteboard session to the final release."
                }
              </p>
              <FadeUp>
                <h1 style={d1()}>
                  Your users know what you built. They're just not sure{" "}
                  <span style={{ color: red }}>it was built for them.</span>
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
                  The gap between what your team designed and what users
                  actually experience isn't inevitable — it's the cost of
                  building without validation, designing across silos, and
                  shipping before the experience is proven. We work with your
                  team to close that gap: from the first whiteboard session to
                  the final release.
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
                  The craft should be your designers' job.{" "}
                  <span style={{ color: red }}>The repetition shouldn't.</span>
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
                    "Intelligence has compressed what used to take months in experience design — not by replacing your team's craft, but by accelerating the discovery, validation, and iteration cycles that consume most of the calendar. Your designers focus on the judgment, strategy, and creative decisions that shape the product. The repetitive layers move faster.",
                    "Many organizations already have design teams, partial design systems, and experience work in motion. The challenge isn't starting — it's orchestrating what's already there: aligning experience across channels, closing the gap between design intent and what engineering delivers, and validating before the roadmap commits.",
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
                    num: "88%",
                    desc: "of customers say experience is as important as the product or service itself.",
                  },
                  {
                    num: "3–5×",
                    desc: "faster feature delivery for teams operating from a unified design system.",
                  },
                  {
                    num: "70%",
                    desc: "of product failures traced to poor user research and validation before build.",
                  },
                  {
                    num: "Zero",
                    desc: "Handoffs without capability transfer. Your team owns the system when we leave.",
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
            Human-centered, seamless, and intelligent experiences —{" "}
            <span style={{ color: red }}>from insights to implementation.</span>
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
                We're measured by what your business does{" "}
                <span style={{ color: red }}>differently after we leave.</span>
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
                  "Experience design is only worth what it moves — adoption that holds, retention that compounds, revenue that traces back to decisions made in the design phase. Everything we build is structured to deliver against those metrics and to keep delivering after the engagement ends.",
                  "More than 90% of our clients extend their engagement beyond the original scope. Not because they can't move forward without us, but because the outcomes are compounding and the work is worth continuing.",
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
            These are the conversations we have most often with{" "}
            <span style={{ color: red }}>product and design leaders.</span>
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
