import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { u as useBreakpoint, S as SEOHead, b as breadcrumbSchema, B as Breadcrumb, F as FadeUp, a as Button, T as Tag, C as Card, A as Accordion, c as CTABanner } from "./pages-services-DzA64b9Y.mjs";
const imgHero$2 = "/assets/Healthcare-BiUhUpJq.png";
const imgCardPhoto$2 = "/assets/fbbad1d37f7a4e076de4d16631dc6863c6c4444a.png";
const sans$2 = '"General Sans", system-ui, -apple-system, sans-serif';
const serif$2 = '"Roboto Serif", Georgia, serif';
const red$2 = "#ED2939";
const dark1$2 = "#1B1B1B";
const imgHealthcareOfferings = "/assets/healthcare-offerings.png";
const CornerTL$2 = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, left: 0, width: 118, height: 10, background: red$2, pointerEvents: "none", zIndex: 2 } }),
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, left: 0, width: 10, height: 118, background: red$2, pointerEvents: "none", zIndex: 2 } })
] });
const CornerBR$2 = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, right: 0, width: 118, height: 10, background: red$2, pointerEvents: "none", zIndex: 2 } }),
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, right: 0, width: 10, height: 118, background: red$2, pointerEvents: "none", zIndex: 2 } })
] });
const solutionItems$2 = [
  {
    title: "Helix — From Fragmented Systems to a Unified Lab Platform",
    subtitle: "Helix replaces fragmented legacy systems with a single, flexible solution for connected lab operations.",
    content: {
      type: "detail",
      serviceLabel: "UNIFIED LAB PLATFORM — HELIX",
      heading: "One platform. Seamless lab operations. Scalable patient-centric workflows.",
      body: [
        "Helix replaces fragmented legacy systems with a single, flexible solution that supports seamless integration, patient-centric workflows, and scalable lab operations. Licensing fees were reduced by replacing three lab systems with one higher-performing LIMS.",
        "By integrating the LIMS with their billing company, invoicing costs are reduced and payments received faster. Manual labor is eliminated through standardized integration with systems at all facilities, enabling greater testing throughput without a proportionate increase in staff."
      ]
    }
  },
  {
    title: "Streaming Analytics Platform",
    subtitle: "Real-time visibility across patient care, operations, and systems — as data is generated, not hours later.",
    content: {
      type: "detail",
      serviceLabel: "STREAMING ANALYTICS PLATFORM",
      heading: "The window for clinical decisions closes fast. Real-time data is what keeps it open.",
      body: [
        "We stream data from core healthcare systems into a real-time layer that enables live visibility across patient flow, diagnostics, devices, and revenue processes — helping teams act immediately on delays, risks, and operational bottlenecks.",
        "Clinical teams get the signal they need when decisions still matter, not hours after the window has passed."
      ]
    }
  },
  {
    title: "Revenue Cycle Intelligence & Automation",
    subtitle: "Faster reimbursements, reduced claim denials, and improved revenue predictability.",
    content: {
      type: "detail",
      serviceLabel: "REVENUE CYCLE INTELLIGENCE",
      heading: "Revenue cycle failures are rarely visible until the denial arrives.",
      body: [
        "We bring visibility and automation into the revenue cycle — helping healthcare organizations reduce delays, improve collections, and operate with greater financial control. Intelligent automation catches errors before claims are submitted, routes exceptions to the right workflows, and gives finance teams a real-time view from service to payment.",
        "Value created: Faster reimbursements • Reduced claim denials • Improved revenue predictability."
      ]
    }
  },
  {
    title: "Digital Patient Experience (DPx)",
    subtitle: "Intuitive, connected experiences across the care journey — from discovery to post-care engagement.",
    content: {
      type: "detail",
      serviceLabel: "DIGITAL PATIENT EXPERIENCE — DPx",
      heading: "The patient journey doesn't begin at the appointment. It begins at the search.",
      body: [
        "We design and deliver patient portals, booking journeys, and digital touchpoints that simplify search, scheduling, and registration workflows. CDPs and MVPs are built to enable personalization that makes care feel like it's designed for each patient.",
        "When digital experiences match patient expectations, friction goes down, satisfaction goes up, and care teams spend less time managing the gaps."
      ]
    }
  },
  {
    title: "Care Provider Experience (CPx)",
    subtitle: "Engage care teams with systems that reduce friction and improve coordination across facilities.",
    content: {
      type: "detail",
      serviceLabel: "CARE PROVIDER EXPERIENCE — CPx",
      heading: "Burnout starts where friction lives. Better tools change that equation.",
      body: [
        "We build ambulatory pre-visit solutions scaled across 200+ facilities, pharmacy automation (340B optimization), and provider data management tools that reduce the coordination overhead that exhausts clinical teams.",
        "When the systems care providers use every day actually work — smoothly, reliably, without manual workarounds — clinical capacity goes up and burnout risk goes down."
      ]
    }
  }
];
const featuredCards$2 = [
  { tags: "HEALTHCARE • CRM INTEGRATION", title: "CRM Requires Complex External Integrations — Digital Healthcare ID Cards", excerpt: "Technossus delivered a scalable mobile platform enabling real-time access to digital healthcare ID cards, seamlessly integrated across insurers, brokers, and enterprise systems. This improved data accessibility and reduced manual effort, while increasing user adoption, customer retention, and overall brand value." },
  { tags: "HEALTHCARE • CRM INTEGRATION", title: "CRM Requires Complex External Integrations — Unified Customer Data", excerpt: "Technossus delivered a unified CRM with real-time access to customer data, enrollment progress, and interaction history across multiple external platforms. This improved response times and productivity, ensured data accuracy, enhanced reporting visibility, and enabled a successful on-time launch despite high complexity." },
  { tags: "HEALTHCARE • ALM & GOVERNANCE", title: "ALM Expertise Drives Project Success", excerpt: "Technossus established enterprise-wide ALM processes, tools, and governance frameworks to enable structured execution and coordination across systems and vendors. This improved visibility and control, reduced delivery risks, and strengthened execution confidence in a complex, large-scale transformation program." }
];
function Healthcare() {
  const { isMobile, isTablet } = useBreakpoint();
  const inner = {
    maxWidth: 1440,
    margin: "0 auto",
    padding: isMobile ? "48px 16px" : isTablet ? "60px 32px" : "80px 80px"
  };
  const d1 = (color) => ({
    fontFamily: serif$2,
    fontSize: isMobile ? 26 : isTablet ? 34 : 48,
    lineHeight: isMobile ? "34px" : isTablet ? "42px" : "52px",
    fontWeight: 500,
    margin: 0,
    color: color ?? "#1E1E1E"
  });
  const d2 = (color) => ({
    fontFamily: serif$2,
    fontSize: isMobile ? 22 : isTablet ? 28 : 40,
    lineHeight: isMobile ? "30px" : isTablet ? "36px" : "48px",
    fontWeight: 600,
    letterSpacing: "-1px",
    margin: 0,
    color: color ?? "#1E1E1E"
  });
  const cols3 = isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)";
  const cols2 = isMobile ? "1fr" : "repeat(2, 1fr)";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "AI & Technology for Healthcare — Technossus",
        description: "Technossus helps healthcare organizations implement AI for prior authorisation, clinical decision support, and intelligent document processing.",
        canonicalPath: "/industries/healthcare",
        keywords: "healthcare AI, prior authorisation automation, clinical AI, healthcare technology",
        jsonLd: breadcrumbSchema([{ name: "Home", url: "https://newtechnossus-v2.vercel.app" }, { name: "Industries", url: "https://newtechnossus-v2.vercel.app/industries" }, { name: "Healthcare", url: "https://newtechnossus-v2.vercel.app/industries/healthcare" }])
      }
    ),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 1440, margin: "0 auto", padding: isMobile ? "32px 16px 48px" : isTablet ? "40px 32px 60px" : "40px 80px 80px" }, children: [
      /* @__PURE__ */ jsx(Breadcrumb, { items: [
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Healthcare & Life Sciences", active: true }
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 32 : 60, marginTop: 40 }, children: [
        /* @__PURE__ */ jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 32 }, children: [
          /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$2, fontWeight: 600, fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", color: "#ADADAD", margin: 0 }, children: "Healthcare & Life Sciences" }),
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("h1", { style: d1(), children: [
            "We care for those who care for others.",
            " ",
            /* @__PURE__ */ jsx("span", { style: { color: red$2 }, children: "Driving Change Across Healthcare" })
          ] }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 80, children: /* @__PURE__ */ jsxs("p", { style: { fontFamily: sans$2, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: "#5C5C5C", margin: 0, maxWidth: 560 }, children: [
            "Healthcare friction doesn't start in the exam room. It starts in the gaps between systems. Disconnected tools, manual workflows, delayed insights. A patient journey that shouldn't be this hard.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            "Technossus connects the systems behind care, simplifies the work around it. Because better operations are where better care begins."
          ] }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 120, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 16, flexWrap: "wrap" }, children: [
            /* @__PURE__ */ jsx(Button, { variant: "primary", label: "Talk to Our Team", href: "#" }),
            /* @__PURE__ */ jsx(Button, { variant: "secondary", label: "Explore Our Work", href: "#proof" })
          ] }) })
        ] }),
        !isMobile && /* @__PURE__ */ jsx("div", { style: { flex: 1, display: "flex", alignItems: "center", minHeight: isTablet ? 300 : 460 }, children: /* @__PURE__ */ jsx("img", { src: imgHero$2, alt: "", style: { width: "100%", height: isTablet ? 300 : 460, objectFit: "cover", display: "block" } }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { style: { borderTop: "1px solid #E8E8E8", background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 1440, margin: "0 auto", padding: isMobile ? "24px 16px" : "32px 80px", display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }, children: [
      /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$2, fontSize: 13, fontWeight: 600, letterSpacing: ".12em", color: "#ADADAD", textTransform: "uppercase" }, children: "Trusted By" }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: isMobile ? 24 : 72, flexWrap: "wrap" }, children: ["GE HealthCare", "CHOICE ADMINISTRATORS", "BIO THERANOSTICS", "COMMONSPIRIT", "ADAPTHEALTH"].map((name) => /* @__PURE__ */ jsx("span", { style: { fontFamily: sans$2, fontSize: 13, fontWeight: 700, color: "#888", filter: "grayscale(100%)", opacity: 0.65 }, children: name }, name)) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("div", { style: { maxWidth: 1440, margin: "0 auto", marginBottom: isMobile ? 12 : 16, padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 80px", background: "#fff" }, children: /* @__PURE__ */ jsx(Tag, { label: "THE SHIFT", variant: "dark" }) }),
    /* @__PURE__ */ jsxs("section", { style: { background: dark1$2, position: "relative", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx(CornerTL$2, {}),
      /* @__PURE__ */ jsx(CornerBR$2, {}),
      /* @__PURE__ */ jsx("div", { style: inner, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", gap: 48, alignItems: "flex-start", marginTop: 0, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxs("div", { style: { flex: isMobile ? void 0 : "0 0 380px", minWidth: isMobile ? "100%" : 280, width: isMobile ? "100%" : void 0 }, children: [
          /* @__PURE__ */ jsxs("h2", { style: d2("#fff"), children: [
            "Healthcare is facing a seismic shift. There is speed, but operational readiness",
            " ",
            /* @__PURE__ */ jsx("span", { style: { color: red$2 }, children: "remains uneven." })
          ] }),
          /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 20, marginTop: 28 }, children: [
            "Patients are more digitally aware, less tolerant of friction, and quicker to switch when experiences fall short. Expectations around convenience, speed, and transparency are rising across the care journey, while systems and workflows struggle to keep pace.",
            "Administrative burden and operational complexity continue to strain care teams, contributing to inefficiencies and burnout. Interoperability remains an ongoing challenge, limiting how effectively systems connect and how smoothly care is delivered."
          ].map((p, i) => /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$2, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: "#B5B5B5", margin: 0 }, children: p }, i)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 20, width: isMobile ? "100%" : void 0 }, children: [
          /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: cols2, gap: 20 }, children: [
            { title: "Real-time care depends on real-time systems", body: "Clinical workflows are shifting from retrospective analysis to real-time decisioning. Systems must process patient data instantly without latency or inconsistency." },
            { title: "Reliable AI in clinical workflows", body: "AI solutions are moving from pilots into diagnostics, triage, and care recommendations. Ensuring accuracy and consistency in real clinical environments is now a critical challenge." },
            { title: "Distributed care demands connected systems", body: "Healthcare is no longer centralized. Hospitals, remote monitoring devices, telehealth platforms, and third-party systems must work together seamlessly — but interoperability remains complex." },
            { title: "Cybersecurity is a Patient Safety Issue", body: "Healthcare systems are high-value targets. As systems become more connected, protecting patient data, ensuring uptime, and maintaining system integrity directly impact care delivery." }
          ].map((card) => /* @__PURE__ */ jsxs("div", { style: { background: "#262626", border: "1px solid #343434", padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12 }, children: [
            /* @__PURE__ */ jsx("h3", { style: { fontFamily: sans$2, fontSize: 16, fontWeight: 700, color: "#fff", lineHeight: 1.4, margin: 0 }, children: card.title }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$2, fontSize: 14, lineHeight: 1.6, color: "#9B9B9B", margin: 0 }, children: card.body })
          ] }, card.title)) }),
          /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 1, background: "#343434" }, children: [
            { num: "85%", desc: "of healthcare leaders say administrative burden is limiting clinical capacity" },
            { num: "2 in 3", desc: "patients sought care elsewhere when the wait felt too long" },
            { num: "41.9%", desc: "of physicians reported at least one symptom of burnout in 2025" },
            { num: "60%", desc: "of AI initiatives in healthcare fail to scale beyond pilot environments" }
          ].map((s, i) => /* @__PURE__ */ jsxs("div", { style: { background: dark1$2, padding: "24px 20px", display: "flex", flexDirection: "column", gap: 8 }, children: [
            /* @__PURE__ */ jsx("div", { style: { fontFamily: serif$2, fontSize: isMobile ? 20 : 26, fontWeight: 600, color: red$2, lineHeight: 1.1 }, children: s.num }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$2, fontSize: 12, lineHeight: 1.5, color: "#9B9B9B", margin: 0 }, children: s.desc })
          ] }, i)) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsx("div", { style: { maxWidth: 1440, margin: "0 auto", padding: isMobile ? "0 16px 48px" : isTablet ? "0 32px 60px" : "0 80px 80px" }, children: /* @__PURE__ */ jsx("img", { src: imgHealthcareOfferings, alt: "Healthcare offerings", style: { width: "100%", display: "block" } }) }) }),
    /* @__PURE__ */ jsx("div", { style: { maxWidth: 1440, margin: "0 auto", marginBottom: isMobile ? 12 : 16, padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 80px", background: "#fff" }, children: /* @__PURE__ */ jsx(Tag, { label: "PROOF", variant: "dark" }) }),
    /* @__PURE__ */ jsxs("section", { id: "proof", style: { background: dark1$2, position: "relative", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx(CornerTL$2, {}),
      /* @__PURE__ */ jsx(CornerBR$2, {}),
      /* @__PURE__ */ jsxs("div", { style: inner, children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: isMobile ? "flex-start" : "flex-end", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", gap: 16, marginTop: 0, marginBottom: 40 }, children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h1", { style: d1("#fff"), children: [
              "Success ",
              /* @__PURE__ */ jsx("span", { style: { color: red$2 }, children: "stories." })
            ] }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$2, fontSize: 15, color: "#9B9B9B", marginTop: 10 }, children: "Real outcomes from healthcare organizations we've partnered with." })
          ] }),
          /* @__PURE__ */ jsx("a", { href: "#", style: { fontFamily: sans$2, fontSize: 14, color: "#9B9B9B", textDecoration: "underline", whiteSpace: "nowrap", flexShrink: 0 }, children: "View All" })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: cols3, gap: 20 }, children: featuredCards$2.map((card, i) => /* @__PURE__ */ jsx(Card, { mode: "dark", type: "insights", image: imgCardPhoto$2, tags: card.tags, title: card.title, excerpt: card.excerpt, ctaLabel: "See How We Work" }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
      /* @__PURE__ */ jsx(Tag, { label: "SOLUTION" }),
      /* @__PURE__ */ jsxs("h2", { style: { ...d2(), marginTop: 16 }, children: [
        "Turning fragmented systems into intelligent",
        " ",
        /* @__PURE__ */ jsx("span", { style: { color: red$2 }, children: "healthcare ecosystems." })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { marginTop: 48 }, children: /* @__PURE__ */ jsx(Accordion, { items: solutionItems$2, defaultActiveIndex: 0 }) })
    ] }) }),
    /* @__PURE__ */ jsx(
      CTABanner,
      {
        size: "large",
        label: "LET'S WORK ON IT TOGETHER",
        heading: "Reduce complexity by fixing the disconnected systems beneath the care journey.",
        body: "Technossus helps healthcare and life sciences organizations build systems that move faster, work smarter, and scale with less friction.",
        primaryCta: "Bring us your problems →",
        secondaryCta: "Explore Solution"
      }
    ),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } })
  ] });
}
const imgHero$1 = "/assets/BSFI-BV0KZOHC.png";
const imgCardPhoto$1 = "/assets/fbbad1d37f7a4e076de4d16631dc6863c6c4444a.png";
const sans$1 = '"General Sans", system-ui, -apple-system, sans-serif';
const serif$1 = '"Roboto Serif", Georgia, serif';
const red$1 = "#ED2939";
const dark1$1 = "#1B1B1B";
const CornerTL$1 = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, left: 0, width: 118, height: 10, background: red$1, pointerEvents: "none", zIndex: 2 } }),
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, left: 0, width: 10, height: 118, background: red$1, pointerEvents: "none", zIndex: 2 } })
] });
const CornerBR$1 = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, right: 0, width: 118, height: 10, background: red$1, pointerEvents: "none", zIndex: 2 } }),
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, right: 0, width: 10, height: 118, background: red$1, pointerEvents: "none", zIndex: 2 } })
] });
const whatWeDoItems$1 = [
  {
    title: "Modernize on Top of Core Systems",
    subtitle: "Extend and modernize systems on top of stable core platforms — enabling new capabilities without disrupting existing operations.",
    content: {
      type: "detail",
      serviceLabel: "MODERNIZE ON TOP OF CORE SYSTEMS",
      heading: "New capabilities shouldn't require touching what already works.",
      body: [
        "We extend and modernize systems on top of stable core platforms, enabling new capabilities without disrupting existing operations. By building modular layers and integrations, we support faster product innovation, better system performance, and easier scalability.",
        "This allows organizations to evolve continuously while keeping core systems stable, reliable, and unchanged — launching new lending products, insurance offerings, and customer features without the risk of a core system replacement."
      ]
    }
  },
  {
    title: "Predictive, Real-Time Decisioning and Fraud Detection",
    subtitle: "Build systems that support real-time decisions across risk, underwriting, and fraud using predictive models and live data.",
    content: {
      type: "detail",
      serviceLabel: "REAL-TIME DECISIONING & FRAUD DETECTION",
      heading: "Underwriting, fraud, and credit decisions are expected instantly — not in a batch tomorrow.",
      body: [
        "We build systems that support real-time decisions across risk, underwriting, and fraud using predictive models and live data. By embedding intelligence directly into workflows, decisions happen instantly across channels — reducing delays and improving accuracy.",
        "This strengthens risk management, improves fraud detection, and enables faster, more confident decision-making across web, mobile, broker, and partner ecosystems — without inconsistency or delay."
      ]
    }
  },
  {
    title: "Automate Processes with Intelligent Agents",
    subtitle: "Design agentic workflows that handle coordination, decisions, and execution across underwriting, claims, and loan processing.",
    content: {
      type: "detail",
      serviceLabel: "INTELLIGENT PROCESS AUTOMATION",
      heading: "From underwriting to claims — workflows that become adaptive, not just automated.",
      body: [
        "We design and implement workflows that go beyond automation, using AI and agentic systems to handle coordination, decisions, and execution. From underwriting to claims and loan processing, workflows become adaptive — reducing manual intervention and handling complexity at scale.",
        "This improves throughput, reduces operational effort, and ensures processes can scale with demand without adding proportionate headcount."
      ]
    }
  },
  {
    title: "Strengthen Cybersecurity, Compliance, and Digital Trust",
    subtitle: "Secure systems across APIs, integrations, and data flows while ensuring alignment with evolving regulatory requirements.",
    content: {
      type: "detail",
      serviceLabel: "CYBERSECURITY, COMPLIANCE & DIGITAL TRUST",
      heading: "73% of financial institutions cite APIs and third-party integrations as their top cybersecurity risk.",
      body: [
        "As ecosystems expand, we help manage risk, maintain data protection, and ensure systems remain resilient under increasing exposure. Security is built into how systems operate — not applied as a layer after deployment.",
        "This builds digital trust, supports compliance, and protects systems without slowing innovation. Regulatory requirements are embedded into delivery so audits aren't events — they're already covered."
      ]
    }
  },
  {
    title: "Prepare Systems for AI-Ready, Continuous Innovation",
    subtitle: "Enable systems to support AI adoption across operations, decisioning, and customer journeys.",
    content: {
      type: "detail",
      serviceLabel: "AI-READY CONTINUOUS INNOVATION",
      heading: "AI only scales in production when the systems beneath it are ready to carry it.",
      body: [
        "We enable systems to support AI adoption across operations, decisioning, and customer journeys while maintaining performance and control. By improving data readiness, system integration, and architecture, we ensure AI capabilities can scale effectively in production environments.",
        "This allows organizations to innovate continuously, adapt faster, and stay competitive without compromising reliability or creating governance gaps."
      ]
    }
  }
];
const solutionItems$1 = [
  {
    title: "Intelligent Document Intake & AI-Driven Decisioning Engine",
    subtitle: "Automatically ingest, extract, validate, and route data across underwriting, claims, and transaction workflows in real time.",
    content: {
      type: "detail",
      serviceLabel: "INTELLIGENT DOCUMENT INTAKE",
      heading: "Manual processing of loan applications, claims documents, and KYC forms creates bottlenecks that compound across every workflow.",
      body: [
        "We built an AI-powered intake system that automatically ingests, extracts, validates, and routes data across underwriting, claims, and transaction workflows in real time. OCR, NLP, and deep learning extract structured data from unstructured inputs with high accuracy.",
        "Impact: Faster processing across underwriting and claims • Reduced manual data entry • Improved data accuracy • Accelerated decisioning • Enhanced customer and broker experience."
      ]
    }
  },
  {
    title: "Real-Time Fraud Detection & Prevention Systems",
    subtitle: "Intelligent fraud detection that operates in real time across transactions, channels, and customer journeys.",
    content: {
      type: "detail",
      serviceLabel: "REAL-TIME FRAUD DETECTION",
      heading: "Fraud patterns evolve faster than rule-based systems can adapt.",
      body: [
        "We build intelligent fraud detection systems that operate in real time across transactions, channels, and customer journeys — using AI and ML models that update as patterns change, not just when rules are rewritten.",
        "Impact: Improved fraud detection accuracy with fewer false positives • Real-time transaction monitoring and intervention • Reduced financial loss and operational risk • Adaptive fraud models that evolve with new patterns."
      ]
    }
  },
  {
    title: "Claims & Policy Workflow Orchestration Platform",
    subtitle: "Connect claims, policy administration, broker portals, and backend systems into a unified workflow layer.",
    content: {
      type: "detail",
      serviceLabel: "CLAIMS & POLICY ORCHESTRATION",
      heading: "When claims processing spans multiple systems, manual handoffs slow everything down.",
      body: [
        "We built an orchestration platform that connected claims, policy administration, broker portals, and backend systems into a unified workflow layer — eliminating the friction that accumulates across system boundaries.",
        "Impact: Accelerated underwriting and loan approvals • Improved consistency in risk evaluation • Reduced manual intervention • Real-time decisioning across channels • Scalable, data-driven financial operations."
      ]
    }
  }
];
const featuredCards$1 = [
  { tags: "FINTECH • MORTGAGE PLATFORM", title: "Unified Mortgage Platform Enables Scalable Lending Operations", excerpt: "A leading financial services organization needed to unify multiple acquired mortgage systems into a single, seamless experience. Technossus built a unified platform connecting fragmented systems, improving data flow and simplifying workflows across customers, brokers, and underwriters." },
  { tags: "INVESTMENT BANKING • DATA QUALITY", title: "Automated Data Validation Improves Decision Confidence", excerpt: "A global investment bank depended on manual validation of financial dashboards, resulting in slow reporting cycles. An automated validation framework now continuously tests data across systems — automating 95% of validation scenarios and significantly improving reporting accuracy." },
  { tags: "INSURANCE • DIGITAL EXPERIENCE", title: "Insurance Brokerage Achieves 30% Faster Quote Turnaround", excerpt: "A leading insurance broker lacked a fast, intuitive way to generate quotes. A mobile-first QuoteLite portal with real-time quoting capabilities reduced turnaround time by ~30% and improved broker productivity and customer experience." }
];
const successCards$1 = [
  { tags: "FINTECH • AI DECISIONING", title: "AI-Powered Intake Engine Accelerates Underwriting by 40%", excerpt: "An AI-powered document intake system that automatically ingests, extracts, validates, and routes data across underwriting and claims workflows reduced processing time by 40% and cut manual data entry significantly." },
  { tags: "BANKING • FRAUD PREVENTION", title: "Real-Time Fraud Detection Reduces False Positives Across Channels", excerpt: "An intelligent fraud detection system operating across transactions, channels, and customer journeys improved detection accuracy while reducing false positives — protecting revenue without slowing legitimate transactions." },
  { tags: "INSURANCE • WORKFLOW AUTOMATION", title: "Claims Orchestration Platform Connects Fragmented Policy Systems", excerpt: "A workflow orchestration platform connected claims, policy administration, broker portals, and backend systems — eliminating manual handoffs and enabling real-time decisioning across a complex multi-system environment." }
];
function FinancialServices() {
  const { isMobile, isTablet } = useBreakpoint();
  const inner = {
    maxWidth: 1440,
    margin: "0 auto",
    padding: isMobile ? "48px 16px" : isTablet ? "60px 32px" : "80px 80px"
  };
  const d1 = (color) => ({
    fontFamily: serif$1,
    fontSize: isMobile ? 26 : isTablet ? 34 : 48,
    lineHeight: isMobile ? "34px" : isTablet ? "42px" : "52px",
    fontWeight: 500,
    margin: 0,
    color: color ?? "#1E1E1E"
  });
  const d2 = (color) => ({
    fontFamily: serif$1,
    fontSize: isMobile ? 22 : isTablet ? 28 : 40,
    lineHeight: isMobile ? "30px" : isTablet ? "36px" : "48px",
    fontWeight: 600,
    letterSpacing: "-1px",
    margin: 0,
    color: color ?? "#1E1E1E"
  });
  const cols3 = isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)";
  const cols2 = isMobile ? "1fr" : "repeat(2, 1fr)";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "AI & Technology for Financial Services — Technossus",
        description: "Technossus builds AI-powered fraud detection, risk analytics, and intelligent automation for banks, insurers, and fintech companies.",
        canonicalPath: "/industries/financial-services",
        keywords: "financial services AI, fintech, fraud detection, risk analytics, banking technology",
        jsonLd: breadcrumbSchema([{ name: "Home", url: "https://newtechnossus-v2.vercel.app" }, { name: "Industries", url: "https://newtechnossus-v2.vercel.app/industries" }, { name: "Financial Services", url: "https://newtechnossus-v2.vercel.app/industries/financial-services" }])
      }
    ),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 1440, margin: "0 auto", padding: isMobile ? "32px 16px 48px" : isTablet ? "40px 32px 60px" : "40px 80px 80px" }, children: [
      /* @__PURE__ */ jsx(Breadcrumb, { items: [
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Financial Services & Insurance", active: true }
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 32 : 60, marginTop: 40 }, children: [
        /* @__PURE__ */ jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 32 }, children: [
          /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$1, fontWeight: 600, fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", color: "#ADADAD", margin: 0 }, children: "Financial Services & Insurance" }),
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("h1", { style: d1(), children: [
            "Core financial systems are reliable. The complexity lies in",
            " ",
            /* @__PURE__ */ jsx("span", { style: { color: red$1 }, children: "integrations, decisioning, and product innovation." })
          ] }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 80, children: /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$1, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: "#5C5C5C", margin: 0, maxWidth: 560 }, children: "The challenge in financial systems isn't the core — it's everything built on top of it. Disconnected integrations, manual workflows, delayed decisions, and slower product releases create friction across the system. We help organizations streamline how these systems work together, reduce operational complexity, and support continuous product innovation without compromising security or performance." }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 120, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 16, flexWrap: "wrap" }, children: [
            /* @__PURE__ */ jsx(Button, { variant: "primary", label: "Explore Our Solutions", href: "#" }),
            /* @__PURE__ */ jsx(Button, { variant: "secondary", label: "Talk to a Financial Expert", href: "#" })
          ] }) })
        ] }),
        !isMobile && /* @__PURE__ */ jsx("div", { style: { flex: 1, display: "flex", alignItems: "center", minHeight: isTablet ? 300 : 460 }, children: /* @__PURE__ */ jsx("img", { src: imgHero$1, alt: "", style: { width: "100%", height: isTablet ? 300 : 460, objectFit: "cover", display: "block" } }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { style: { borderTop: "1px solid #E8E8E8", background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 1440, margin: "0 auto", padding: isMobile ? "24px 16px" : "32px 80px", display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }, children: [
      /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$1, fontSize: 13, fontWeight: 600, letterSpacing: ".12em", color: "#ADADAD", textTransform: "uppercase" }, children: "Trusted By" }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: isMobile ? 24 : 72, flexWrap: "wrap" }, children: ["TOYOTA FINANCIAL SERVICES", "COMMONSPIRIT", "BIO-RAD", "ADAPTHEALTH", "GE HealthCare"].map((name) => /* @__PURE__ */ jsx("span", { style: { fontFamily: sans$1, fontSize: 13, fontWeight: 700, color: "#888", filter: "grayscale(100%)", opacity: 0.65 }, children: name }, name)) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("div", { style: { maxWidth: 1440, margin: "0 auto", marginBottom: isMobile ? 12 : 16, padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 80px", background: "#fff" }, children: /* @__PURE__ */ jsx(Tag, { label: "THE SHIFT", variant: "dark" }) }),
    /* @__PURE__ */ jsxs("section", { style: { background: dark1$1, position: "relative", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx(CornerTL$1, {}),
      /* @__PURE__ */ jsx(CornerBR$1, {}),
      /* @__PURE__ */ jsx("div", { style: inner, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", gap: 48, alignItems: "flex-start", marginTop: 0, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxs("div", { style: { flex: isMobile ? void 0 : "0 0 380px", minWidth: isMobile ? "100%" : 280, width: isMobile ? "100%" : void 0 }, children: [
          /* @__PURE__ */ jsxs("h2", { style: d2("#fff"), children: [
            "Core systems are stable. The pressure is shifting to everything",
            " ",
            /* @__PURE__ */ jsx("span", { style: { color: red$1 }, children: "built on top of them." })
          ] }),
          /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 20, marginTop: 28 }, children: [
            "Product layers, integrations, workflows, and data pipelines are under constant pressure to move faster, handle more, and stay secure at the same time. The expectation is clear: launch faster, respond in real time, integrate seamlessly, and stay secure under growing exposure.",
            "Most systems can do parts of this well. Few can do all of it together without trade-offs starting to show. That's where the real engineering work lives — not in replacing the core, but in building reliably on top of it."
          ].map((p, i) => /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$1, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: "#B5B5B5", margin: 0 }, children: p }, i)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 20, width: isMobile ? "100%" : void 0 }, children: [
          /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: cols2, gap: 20 }, children: [
            { title: "Real-Time Risk & Decisioning", body: "Underwriting, fraud detection, and credit decisions are no longer batch-driven. Decisions are expected instantly across all channels — without inconsistency or delay." },
            { title: "Continuous Releases on Core Systems", body: "New lending products, insurance offerings, and customer features are being launched continuously while maintaining stability, compliance, and performance across core systems." },
            { title: "Adaptive Fraud & Threat Detection", body: "Fraud is no longer rule-based or predictable. Systems need to detect and respond to evolving patterns in real time without increasing false positives or slowing legitimate transactions." },
            { title: "Expanding Ecosystems, Limited Control", body: "Open banking, partner APIs, and embedded finance increase connectivity — but also complexity. Managing performance, data consistency, and security across this ecosystem is becoming harder." }
          ].map((card) => /* @__PURE__ */ jsxs("div", { style: { background: "#262626", border: "1px solid #343434", padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12 }, children: [
            /* @__PURE__ */ jsx("h3", { style: { fontFamily: sans$1, fontSize: 16, fontWeight: 700, color: "#fff", lineHeight: 1.4, margin: 0 }, children: card.title }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$1, fontSize: 14, lineHeight: 1.6, color: "#9B9B9B", margin: 0 }, children: card.body })
          ] }, card.title)) }),
          /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 1, background: "#343434" }, children: [
            { num: "70%", desc: "of claims processing is still manual, slowing decisioning and increasing operational costs" },
            { num: "73%", desc: "of financial institutions cite APIs and third-party integrations as increasing cybersecurity risk" },
            { num: "2–3×", desc: "faster time-to-market achieved through modular, API-driven architectures" },
            { num: "40%", desc: "improvement in decision-making speed using real-time data and AI-driven workflows" }
          ].map((s, i) => /* @__PURE__ */ jsxs("div", { style: { background: dark1$1, padding: "24px 20px", display: "flex", flexDirection: "column", gap: 8 }, children: [
            /* @__PURE__ */ jsx("div", { style: { fontFamily: serif$1, fontSize: isMobile ? 20 : 26, fontWeight: 600, color: red$1, lineHeight: 1.1 }, children: s.num }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$1, fontSize: 12, lineHeight: 1.5, color: "#9B9B9B", margin: 0 }, children: s.desc })
          ] }, i)) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
      /* @__PURE__ */ jsx(Tag, { label: "WHAT WE DO" }),
      /* @__PURE__ */ jsxs("h2", { style: { ...d2(), marginTop: 16 }, children: [
        "We help financial institutions build on top of their systems,",
        " ",
        /* @__PURE__ */ jsx("span", { style: { color: red$1 }, children: "without slowing them down." })
      ] }),
      /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$1, fontSize: 16, color: "#5C5C5C", marginTop: 12, maxWidth: 720 }, children: "We don't just build on top of financial systems. We solve the operational and system-level challenges that slow down product innovation, decisioning, and scale." }),
      /* @__PURE__ */ jsx("div", { style: { marginTop: 48 }, children: /* @__PURE__ */ jsx(Accordion, { items: whatWeDoItems$1, defaultActiveIndex: 1 }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
      /* @__PURE__ */ jsx(Tag, { label: "SOLUTIONS" }),
      /* @__PURE__ */ jsxs("h2", { style: { ...d2(), marginTop: 16 }, children: [
        "Proven solutions for financial services",
        " ",
        /* @__PURE__ */ jsx("span", { style: { color: red$1 }, children: "at production scale." })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { marginTop: 48 }, children: /* @__PURE__ */ jsx(Accordion, { items: solutionItems$1, defaultActiveIndex: 0 }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("div", { style: { maxWidth: 1440, margin: "0 auto", marginBottom: isMobile ? 12 : 16, padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 80px", background: "#fff" }, children: /* @__PURE__ */ jsx(Tag, { label: "CASE STUDIES", variant: "dark" }) }),
    /* @__PURE__ */ jsxs("section", { id: "proof", style: { background: dark1$1, position: "relative", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx(CornerTL$1, {}),
      /* @__PURE__ */ jsx(CornerBR$1, {}),
      /* @__PURE__ */ jsxs("div", { style: inner, children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: isMobile ? "flex-start" : "flex-end", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", gap: 16, marginTop: 0, marginBottom: 40 }, children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h1", { style: d1("#fff"), children: [
              "Results from the ",
              /* @__PURE__ */ jsx("span", { style: { color: red$1 }, children: "field." })
            ] }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$1, fontSize: 15, color: "#9B9B9B", marginTop: 10 }, children: "Real outcomes from financial services organizations we've partnered with." })
          ] }),
          /* @__PURE__ */ jsx("a", { href: "#", style: { fontFamily: sans$1, fontSize: 14, color: "#9B9B9B", textDecoration: "underline", whiteSpace: "nowrap", flexShrink: 0 }, children: "View All" })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: cols3, gap: 20 }, children: featuredCards$1.map((card, i) => /* @__PURE__ */ jsx(Card, { mode: "dark", type: "insights", tags: card.tags, title: card.title, excerpt: card.excerpt, ctaLabel: "See How We Work" }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
      /* @__PURE__ */ jsx(Tag, { label: "MORE FROM FINANCIAL SERVICES" }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: isMobile ? "flex-start" : "flex-end", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", gap: 16, marginTop: 16, marginBottom: 40 }, children: [
        /* @__PURE__ */ jsxs("h1", { style: d1(), children: [
          "More ",
          /* @__PURE__ */ jsx("span", { style: { color: red$1 }, children: "success stories." })
        ] }),
        /* @__PURE__ */ jsx("a", { href: "#", style: { fontFamily: sans$1, fontSize: 14, color: red$1, textDecoration: "underline", whiteSpace: "nowrap", flexShrink: 0 }, children: "View All" })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: cols3, gap: 20 }, children: successCards$1.map((card, i) => /* @__PURE__ */ jsx(Card, { mode: "light", type: "insights", image: imgCardPhoto$1, tags: card.tags, title: card.title, excerpt: card.excerpt, ctaLabel: "See How We Work" }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx(
      CTABanner,
      {
        size: "large",
        label: "LET'S WORK ON IT TOGETHER",
        heading: "Start with what's actually slowing you down.",
        body: "Bring us the system, workflow, or decision point that isn't keeping up — we'll understand your architecture, dependencies, and data flow. Within days, you'll have a clear view of what's happening and what actually needs to change.",
        primaryCta: "Explore Our Solutions →",
        secondaryCta: "Talk to a Financial Expert"
      }
    ),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } })
  ] });
}
const imgHero = "/assets/HiTech-201Jhj9y.png";
const imgCardPhoto = "/assets/fbbad1d37f7a4e076de4d16631dc6863c6c4444a.png";
const sans = '"General Sans", system-ui, -apple-system, sans-serif';
const serif = '"Roboto Serif", Georgia, serif';
const red = "#ED2939";
const dark1 = "#1B1B1B";
const CornerTL = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, left: 0, width: 118, height: 10, background: red, pointerEvents: "none", zIndex: 2 } }),
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, left: 0, width: 10, height: 118, background: red, pointerEvents: "none", zIndex: 2 } })
] });
const CornerBR = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, right: 0, width: 118, height: 10, background: red, pointerEvents: "none", zIndex: 2 } }),
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, right: 0, width: 10, height: 118, background: red, pointerEvents: "none", zIndex: 2 } })
] });
const whatWeDoItems = [
  {
    title: "Develop Platforms That Scale With Demand",
    subtitle: "Modernize the foundation so growth doesn't make the product harder to run.",
    content: {
      type: "detail",
      serviceLabel: "PLATFORMS THAT SCALE WITH DEMAND",
      heading: "As SaaS products grow, the platform beneath them starts carrying more — and showing the strain.",
      body: [
        "We help strengthen the foundation so teams can support demand without constant rework, fragile fixes, or slowing product momentum. More users, more workflows, more integrations, and more release pressure all land on the platform — and it needs to hold.",
        "Modernizing the foundation is how SaaS companies protect the product they've already built while creating room for what comes next."
      ]
    }
  },
  {
    title: "Architect Impactful Customer Journeys",
    subtitle: "Make onboarding, support, account access, and self-service feel simple and connected.",
    content: {
      type: "detail",
      serviceLabel: "IMPACTFUL CUSTOMER JOURNEYS",
      heading: "Your customers experience your company through every digital touchpoint — not just the product.",
      body: [
        "We help design portals, onboarding flows, support journeys, configuration experiences, and customer-facing tools that feel clear, useful, and easier to navigate. Before, during, and after product use — every moment matters.",
        "61% of customers prefer self-service for simple issues. When those moments feel disconnected or difficult, the product may be strong, but the experience still feels incomplete."
      ]
    }
  },
  {
    title: "Make Every Release Feel Safer",
    subtitle: "Strengthen testing, API management, and release workflows so speed doesn't create avoidable risk.",
    content: {
      type: "detail",
      serviceLabel: "SAFER RELEASES AT SPEED",
      heading: "As the customer base grows, every release carries more consequence.",
      body: [
        "We help improve test coverage, API discipline, release workflows, and quality practices so teams can keep shipping quickly while reducing instability, rework, and production risk.",
        "The goal isn't slowing down — it's building the confidence that lets teams move faster without holding their breath every time a release goes out."
      ]
    }
  },
  {
    title: "Connect What Customers Cannot See",
    subtitle: "Bring product, support, billing, partner, and operational systems into a smoother working flow.",
    content: {
      type: "detail",
      serviceLabel: "CONNECTED OPERATIONS",
      heading: "Customers don't see the systems behind the product, but they feel every disconnect.",
      body: [
        "We help connect the tools and workflows behind product delivery, support, billing, partner operations, and customer management so the experience feels smoother outside and easier to run inside.",
        "55% of customers say it often feels like they're communicating with separate departments instead of one company. The systems behind the product are the reason that feeling exists — and the place where it gets fixed."
      ]
    }
  },
  {
    title: "Make Revenue Signals Easier To Act Upon",
    subtitle: "Give teams clearer visibility into billing, collections, usage, and revenue movement.",
    content: {
      type: "detail",
      serviceLabel: "REVENUE SIGNAL CLARITY",
      heading: "Growth can make revenue operations harder to control when data lives in too many places.",
      body: [
        "When subscriptions, collections, renewals, invoices, and usage data sit across different places, it becomes harder to see what's happening and act on it quickly. We help simplify revenue workflows and create clearer visibility so leaders can track what's happening and teams can act faster.",
        "Revenue clarity is a product problem as much as a finance problem — and it gets worse the faster a SaaS business grows."
      ]
    }
  }
];
const solutionItems = [
  {
    title: "Humanized Digital Product Experience",
    subtitle: "Redesign the experience around the user's real context — especially where stress, urgency, or friction affects product use.",
    content: {
      type: "detail",
      serviceLabel: "HUMANIZED DIGITAL PRODUCT EXPERIENCE",
      heading: "A technically strong product can still fail to earn adoption if the experience doesn't match how users actually work.",
      body: [
        "We help redesign the experience around the user's real context — especially true where stress, urgency, accessibility, or low tolerance for friction affects product use.",
        "Impact: Reduced onboarding friction • Simplified complex user journeys • Improved product trust and usability • More intuitive self-service experiences • Products that feel like useful extensions of the user's workflow, not tools they have to fight."
      ]
    }
  },
  {
    title: "Mission-Critical Product Reliability",
    subtitle: "Resilient architectures that continue performing under pressure — offline-first, zero-drop, reliable under real conditions.",
    content: {
      type: "detail",
      serviceLabel: "MISSION-CRITICAL RELIABILITY",
      heading: "When platforms operate in high-stakes environments, downtime is not acceptable.",
      body: [
        "We help build resilient architectures that continue performing under pressure — supporting offline-first and zero-drop system behavior, reducing dependency on fragile connectivity, and strengthening background processing and telemetry flows.",
        "Impact: Improved reliability across live environments • Supported offline-first system behavior • Strengthened background processing • Helped digital products perform consistently in real-world conditions."
      ]
    }
  },
  {
    title: "Computer Vision Intelligence Systems",
    subtitle: "Turn images, video feeds, and edge-device inputs into actionable intelligence at speed.",
    content: {
      type: "detail",
      serviceLabel: "COMPUTER VISION INTELLIGENCE",
      heading: "When teams need to identify, classify, detect, or act on visual information faster than manual review allows.",
      body: [
        "We build computer vision systems that turn images, video feeds, and edge-device inputs into actionable intelligence. From live video ingestion to license plate recognition to automated matching against watchlist databases — detection at 10ms precision for faster field response.",
        "Impact: Reduced manual monitoring effort • Accelerated detection and response times • Real-time alerting from live visual inputs • Improved accuracy in high-volume review environments."
      ]
    }
  },
  {
    title: "Workflow Hyper-Automation Platform",
    subtitle: "Automate the workflow from intake to decision to system update — clearing backlogs and reducing manual processing.",
    content: {
      type: "detail",
      serviceLabel: "WORKFLOW HYPER-AUTOMATION",
      heading: "When teams are buried under repetitive reports, approvals, validations, and manual queues.",
      body: [
        "We help automate the workflow from intake to decision to system update. Historical backlogs cleared in a single 24-hour cycle. 24/7 non-attended processing. 1000% improvement in operational efficiency for one client's traffic offence reporting workflow.",
        "Impact: Reduced manual processing time • Cleared backlogs faster • Improved rule-based decisioning • Created repeatable automation patterns reusable across departments."
      ]
    }
  },
  {
    title: "Connected Operations Mobile Platform",
    subtitle: "Mobile-first platforms that standardize workflows for distributed teams across locations, roles, and operating environments.",
    content: {
      type: "detail",
      serviceLabel: "CONNECTED OPERATIONS MOBILE",
      heading: "When distributed teams need one consistent way to manage work at scale.",
      body: [
        "We build mobile-first platforms that standardize workflows and make operations easier to run across thousands of users, distributed locations, and varying operating environments.",
        "Impact: Moved teams from manual to mobile workflows • Improved visibility across distributed locations • Enabled faster field updates and reporting • Reduced operational inconsistency • Scalable deployment across thousands of users."
      ]
    }
  }
];
const featuredCards = [
  { tags: "HEALTHTECH • PRODUCT REDESIGN", title: "Connected Product Experience Improves Adoption — App Rating 1.4 to 3.4", excerpt: "A migraine treatment companion app was redesigned around real user conditions. Onboarding steps reduced from 13 to 7. Bluetooth reliability re-engineered. App rating improved from 1.4 to 3.4, shifting from a buggy remote to a trusted companion." },
  { tags: "SECURITY • COMPUTER VISION", title: "Real-Time Visual Intelligence Enables 10ms Plate Recognition", excerpt: "An edge-to-alert computer vision pipeline ingested live video from cameras, drones, and moving patrol cars — detecting vehicles, extracting license plate data via OCR, and matching against watchlist databases in near real time." },
  { tags: "GOVTECH • WORKFLOW AUTOMATION", title: "Workflow Automation Clears 100% of Operational Backlog in 24 Hours", excerpt: "A high-volume traffic offence reporting workflow was automated from email intake to PDF review, validation, API lookups, and system submission — clearing the entire historical backlog in a single 24-hour cycle with 1000% efficiency improvement." }
];
const successCards = [
  { tags: "SAAS • PLATFORM RELIABILITY", title: "Mission-Critical Platform Achieves Zero-Drop Performance Under Load", excerpt: "A platform operating in high-stakes environments needed offline-first and zero-drop system behavior. A re-engineered resilient architecture eliminated connectivity dependency and improved reliability across all live environments." },
  { tags: "ENTERPRISE • MOBILE OPERATIONS", title: "Connected Operations Platform Deployed Across Thousands of Field Users", excerpt: "A distributed operations team needed one consistent way to manage work across locations. A mobile-first platform standardized workflows, improved visibility, and enabled faster field reporting at scale." },
  { tags: "HITECH • RELEASE CONFIDENCE", title: "Test Coverage and API Discipline Reduce Production Incidents by 60%", excerpt: "Improved test coverage, API management, and release workflow discipline reduced production incidents significantly — giving the engineering team confidence to ship faster without the brittleness that had been slowing momentum." }
];
function HiTechSaaS() {
  const { isMobile, isTablet } = useBreakpoint();
  const inner = {
    maxWidth: 1440,
    margin: "0 auto",
    padding: isMobile ? "48px 16px" : isTablet ? "60px 32px" : "80px 80px"
  };
  const d1 = (color) => ({
    fontFamily: serif,
    fontSize: isMobile ? 26 : isTablet ? 34 : 48,
    lineHeight: isMobile ? "34px" : isTablet ? "42px" : "52px",
    fontWeight: 500,
    margin: 0,
    color: color ?? "#1E1E1E"
  });
  const d2 = (color) => ({
    fontFamily: serif,
    fontSize: isMobile ? 22 : isTablet ? 28 : 40,
    lineHeight: isMobile ? "30px" : isTablet ? "36px" : "48px",
    fontWeight: 600,
    letterSpacing: "-1px",
    margin: 0,
    color: color ?? "#1E1E1E"
  });
  const cols3 = isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)";
  const cols2 = isMobile ? "1fr" : "repeat(2, 1fr)";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "AI & Technology for HiTech & SaaS — Technossus",
        description: "Technossus helps HiTech and SaaS companies embed AI into their products — co-pilots, intelligent search, and agentic automation for B2B platforms.",
        canonicalPath: "/industries/hitech-saas",
        keywords: "HiTech AI, SaaS AI features, co-pilot, B2B product AI, software company AI",
        jsonLd: breadcrumbSchema([{ name: "Home", url: "https://newtechnossus-v2.vercel.app" }, { name: "Industries", url: "https://newtechnossus-v2.vercel.app/industries" }, { name: "HiTech SaaS", url: "https://newtechnossus-v2.vercel.app/industries/hitech-saas" }])
      }
    ),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 1440, margin: "0 auto", padding: isMobile ? "32px 16px 48px" : isTablet ? "40px 32px 60px" : "40px 80px 80px" }, children: [
      /* @__PURE__ */ jsx(Breadcrumb, { items: [
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "HiTech & SaaS", active: true }
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 32 : 60, marginTop: 40 }, children: [
        /* @__PURE__ */ jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 32 }, children: [
          /* @__PURE__ */ jsx("p", { style: { fontFamily: sans, fontWeight: 600, fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", color: "#ADADAD", margin: 0 }, children: "HiTech & SaaS" }),
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("h1", { style: d1(), children: [
            "Your product is growing. Are the systems behind it",
            " ",
            /* @__PURE__ */ jsx("span", { style: { color: red }, children: "keeping up?" })
          ] }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 80, children: /* @__PURE__ */ jsx("p", { style: { fontFamily: sans, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: "#5C5C5C", margin: 0, maxWidth: 560 }, children: "Growth should make a SaaS business stronger, not harder to run. But as customers, products, integrations, and markets expand, the systems behind the business often start to strain. Technossus helps HiTech and SaaS companies strengthen those systems so product, revenue, support, and customer experiences can scale with confidence." }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 120, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 16, flexWrap: "wrap" }, children: [
            /* @__PURE__ */ jsx(Button, { variant: "primary", label: "Explore HiTech & SaaS Solutions", href: "#" }),
            /* @__PURE__ */ jsx(Button, { variant: "secondary", label: "Talk to Our Team", href: "#" })
          ] }) })
        ] }),
        !isMobile && /* @__PURE__ */ jsx("div", { style: { flex: 1, display: "flex", alignItems: "center", minHeight: isTablet ? 300 : 460 }, children: /* @__PURE__ */ jsx("img", { src: imgHero, alt: "", style: { width: "100%", height: isTablet ? 300 : 460, objectFit: "cover", display: "block" } }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { style: { borderTop: "1px solid #E8E8E8", background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 1440, margin: "0 auto", padding: isMobile ? "24px 16px" : "32px 80px", display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }, children: [
      /* @__PURE__ */ jsx("p", { style: { fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: ".12em", color: "#ADADAD", textTransform: "uppercase" }, children: "Trusted By" }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: isMobile ? 24 : 72, flexWrap: "wrap" }, children: ["TOYOTA FINANCIAL SERVICES", "GE HealthCare", "COMMONSPIRIT", "BIO-RAD", "ADAPTHEALTH"].map((name) => /* @__PURE__ */ jsx("span", { style: { fontFamily: sans, fontSize: 13, fontWeight: 700, color: "#888", filter: "grayscale(100%)", opacity: 0.65 }, children: name }, name)) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("div", { style: { maxWidth: 1440, margin: "0 auto", marginBottom: isMobile ? 12 : 16, padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 80px", background: "#fff" }, children: /* @__PURE__ */ jsx(Tag, { label: "THE SHIFT", variant: "dark" }) }),
    /* @__PURE__ */ jsxs("section", { style: { background: dark1, position: "relative", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx(CornerTL, {}),
      /* @__PURE__ */ jsx(CornerBR, {}),
      /* @__PURE__ */ jsx("div", { style: inner, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", gap: 48, alignItems: "flex-start", marginTop: 0, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxs("div", { style: { flex: isMobile ? void 0 : "0 0 380px", minWidth: isMobile ? "100%" : 280, width: isMobile ? "100%" : void 0 }, children: [
          /* @__PURE__ */ jsxs("h2", { style: d2("#fff"), children: [
            "Growth is the goal. But in SaaS, growth also exposes what your product",
            " ",
            /* @__PURE__ */ jsx("span", { style: { color: red }, children: "was never meant to carry alone." })
          ] }),
          /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 20, marginTop: 28 }, children: [
            "Your customers do not see your internal systems. They see the experience. They see how quickly they can get onboarded. How easily they can find support. How smoothly billing works. How reliably your product performs after every release.",
            "That is why the strongest SaaS companies do not only invest in the product surface. They strengthen the operating layer behind it — the workflows, data, integrations, and platforms that keep the customer experience moving."
          ].map((p, i) => /* @__PURE__ */ jsx("p", { style: { fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: "#B5B5B5", margin: 0 }, children: p }, i)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 20, width: isMobile ? "100%" : void 0 }, children: [
          /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: cols2, gap: 20 }, children: [
            { title: "Platform Strain", body: "What worked for early growth may not support what comes next. As usage rises, older architecture, manual operations, and disconnected systems slow delivery and weaken reliability." },
            { title: "Release Risk", body: "As more customers depend on the product, every release carries more weight. Without stronger testing and release workflows, teams spend more time managing risk than building momentum." },
            { title: "Digital Front Door", body: "Customers expect onboarding, support, billing, and account access to feel simple. When these moments feel disconnected, the product may be strong — but the experience still feels incomplete." },
            { title: "Scattered Signals", body: "Usage data, support issues, billing signals, and customer feedback sit in different places — making it harder to see what's working, what's breaking, and what needs attention next." }
          ].map((card) => /* @__PURE__ */ jsxs("div", { style: { background: "#262626", border: "1px solid #343434", padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12 }, children: [
            /* @__PURE__ */ jsx("h3", { style: { fontFamily: sans, fontSize: 16, fontWeight: 700, color: "#fff", lineHeight: 1.4, margin: 0 }, children: card.title }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: "#9B9B9B", margin: 0 }, children: card.body })
          ] }, card.title)) }),
          /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 1, background: "#343434" }, children: [
            { num: "79%", desc: "of customers expect consistent interactions across departments" },
            { num: "61%", desc: "of customers prefer to use self-service for simple issues" },
            { num: "55%", desc: "of customers say it often feels like they're communicating with separate departments" },
            { num: "56%", desc: "of customers say they often have to repeat or re-explain information to different representatives" }
          ].map((s, i) => /* @__PURE__ */ jsxs("div", { style: { background: dark1, padding: "24px 20px", display: "flex", flexDirection: "column", gap: 8 }, children: [
            /* @__PURE__ */ jsx("div", { style: { fontFamily: serif, fontSize: isMobile ? 20 : 26, fontWeight: 600, color: red, lineHeight: 1.1 }, children: s.num }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans, fontSize: 12, lineHeight: 1.5, color: "#9B9B9B", margin: 0 }, children: s.desc })
          ] }, i)) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
      /* @__PURE__ */ jsx(Tag, { label: "WHAT WE DO" }),
      /* @__PURE__ */ jsxs("h2", { style: { ...d2(), marginTop: 16 }, children: [
        "Strengthen the systems behind the product so growth feels",
        " ",
        /* @__PURE__ */ jsx("span", { style: { color: red }, children: "smooth, not strained." })
      ] }),
      /* @__PURE__ */ jsx("p", { style: { fontFamily: sans, fontSize: 16, color: "#5C5C5C", marginTop: 12, maxWidth: 720 }, children: "The best digital transformation work doesn't always look dramatic. Sometimes the real win is that the product becomes easier to use, teams move faster, and systems stop getting in the way." }),
      /* @__PURE__ */ jsx("div", { style: { marginTop: 48 }, children: /* @__PURE__ */ jsx(Accordion, { items: whatWeDoItems, defaultActiveIndex: 0 }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
      /* @__PURE__ */ jsx(Tag, { label: "SOLUTIONS" }),
      /* @__PURE__ */ jsxs("h2", { style: { ...d2(), marginTop: 16 }, children: [
        "Proven solutions for HiTech and SaaS",
        " ",
        /* @__PURE__ */ jsx("span", { style: { color: red }, children: "at scale." })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { marginTop: 48 }, children: /* @__PURE__ */ jsx(Accordion, { items: solutionItems, defaultActiveIndex: 0 }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("div", { style: { maxWidth: 1440, margin: "0 auto", marginBottom: isMobile ? 12 : 16, padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 80px", background: "#fff" }, children: /* @__PURE__ */ jsx(Tag, { label: "CASE STUDIES", variant: "dark" }) }),
    /* @__PURE__ */ jsxs("section", { id: "proof", style: { background: dark1, position: "relative", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx(CornerTL, {}),
      /* @__PURE__ */ jsx(CornerBR, {}),
      /* @__PURE__ */ jsxs("div", { style: inner, children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: isMobile ? "flex-start" : "flex-end", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", gap: 16, marginTop: 0, marginBottom: 40 }, children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h1", { style: d1("#fff"), children: [
              "The work speaks ",
              /* @__PURE__ */ jsx("span", { style: { color: red }, children: "for itself." })
            ] }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans, fontSize: 15, color: "#9B9B9B", marginTop: 10 }, children: "Real outcomes from HiTech and SaaS organizations we've partnered with." })
          ] }),
          /* @__PURE__ */ jsx("a", { href: "#", style: { fontFamily: sans, fontSize: 14, color: "#9B9B9B", textDecoration: "underline", whiteSpace: "nowrap", flexShrink: 0 }, children: "View All" })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: cols3, gap: 20 }, children: featuredCards.map((card, i) => /* @__PURE__ */ jsx(Card, { mode: "dark", type: "insights", tags: card.tags, title: card.title, excerpt: card.excerpt, ctaLabel: "See How We Work" }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
      /* @__PURE__ */ jsx(Tag, { label: "MORE SUCCESS STORIES" }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: isMobile ? "flex-start" : "flex-end", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", gap: 16, marginTop: 16, marginBottom: 40 }, children: [
        /* @__PURE__ */ jsxs("h1", { style: d1(), children: [
          "More from ",
          /* @__PURE__ */ jsx("span", { style: { color: red }, children: "HiTech & SaaS." })
        ] }),
        /* @__PURE__ */ jsx("a", { href: "#", style: { fontFamily: sans, fontSize: 14, color: red, textDecoration: "underline", whiteSpace: "nowrap", flexShrink: 0 }, children: "View All" })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: cols3, gap: 20 }, children: successCards.map((card, i) => /* @__PURE__ */ jsx(Card, { mode: "light", type: "insights", image: imgCardPhoto, tags: card.tags, title: card.title, excerpt: card.excerpt, ctaLabel: "See How We Work" }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx(
      CTABanner,
      {
        size: "large",
        label: "LET'S WORK ON IT TOGETHER",
        heading: "If growth is starting to feel heavier than it should, the product may not be the only thing that needs attention.",
        body: "Let's look at the systems behind the product — the workflows, data, integrations, revenue operations, and customer experiences that decide whether growth feels smooth or strained.",
        primaryCta: "Talk to a HiTech & SaaS Expert →",
        secondaryCta: "Explore Our Solutions"
      }
    ),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } })
  ] });
}
export {
  FinancialServices as F,
  Healthcare as H,
  HiTechSaaS as a
};
