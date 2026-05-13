import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
const breakpoints = {
  xs: 320,
  sm: 375,
  md: 430,
  lg: 768,
  xl: 1024,
  "2xl": 1280,
  "3xl": 1440,
  "4xl": 1728,
  "5xl": 1920
};
function getBreakpoint(width) {
  if (width >= breakpoints["5xl"]) return "5xl";
  if (width >= breakpoints["4xl"]) return "4xl";
  if (width >= breakpoints["3xl"]) return "3xl";
  if (width >= breakpoints["2xl"]) return "2xl";
  if (width >= breakpoints.xl) return "xl";
  if (width >= breakpoints.lg) return "lg";
  if (width >= breakpoints.md) return "md";
  if (width >= breakpoints.sm) return "sm";
  if (width >= breakpoints.xs) return "xs";
  return null;
}
function getState(width) {
  return {
    width,
    isMobile: width < breakpoints.lg,
    isTablet: width >= breakpoints.lg && width < breakpoints.xl,
    isDesktop: width >= breakpoints.xl,
    isWide: width >= breakpoints["3xl"],
    isUltraWide: width >= breakpoints["5xl"],
    breakpoint: getBreakpoint(width)
  };
}
function useBreakpoint() {
  const [state, setState] = useState(() => {
    if (typeof window === "undefined") {
      return getState(1280);
    }
    return getState(window.innerWidth);
  });
  useEffect(() => {
    if (typeof window === "undefined") return;
    let rafId;
    const handler = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setState(getState(window.innerWidth));
      });
    };
    window.addEventListener("resize", handler, { passive: true });
    return () => {
      window.removeEventListener("resize", handler);
      cancelAnimationFrame(rafId);
    };
  }, []);
  return state;
}
const BASE_URL = "https://newtechnossus-v2.vercel.app";
const SITE_NAME = "Technossus";
const DEFAULT_OG_IMAGE = `${BASE_URL}/assets/logos/logo-dark.svg`;
function SEOHead({
  title,
  description,
  canonicalPath,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  jsonLd,
  robots = "index, follow"
}) {
  const canonicalUrl = canonicalPath ? `${BASE_URL}${canonicalPath}` : void 0;
  const jsonLdArray = jsonLd ? Array.isArray(jsonLd) ? jsonLd : [jsonLd] : [];
  return /* @__PURE__ */ jsxs(Helmet, { children: [
    /* @__PURE__ */ jsx("html", { lang: "en" }),
    /* @__PURE__ */ jsx("title", { children: title }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
    keywords && /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords }),
    /* @__PURE__ */ jsx("meta", { name: "robots", content: robots }),
    /* @__PURE__ */ jsx("meta", { name: "author", content: SITE_NAME }),
    canonicalUrl && /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonicalUrl }),
    /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: SITE_NAME }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: ogType }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
    canonicalUrl && /* @__PURE__ */ jsx("meta", { property: "og:url", content: canonicalUrl }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: ogImage }),
    /* @__PURE__ */ jsx("meta", { property: "og:image:width", content: "1200" }),
    /* @__PURE__ */ jsx("meta", { property: "og:image:height", content: "630" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:site", content: "@technossus" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: title }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: description }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: ogImage }),
    jsonLdArray.map((schema, i) => /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(schema) }, i))
  ] });
}
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Technossus",
  url: BASE_URL,
  logo: `${BASE_URL}/assets/logos/logo-dark.svg`,
  sameAs: [
    "https://www.linkedin.com/company/technossus",
    "https://twitter.com/technossus"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@technossus.com"
  }
};
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/ai-studio?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};
function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url
    }))
  };
}
function serviceSchema(opts) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      "@type": "Organization",
      name: opts.provider ?? SITE_NAME
    }
  };
}
const imgBracketLeft = "/assets/a503f8db2ff38d97c46dcf929d8bac29e3db7723.svg";
const imgBracketRight = "/assets/c1e94a65e8e3a307886bea2c5f20cbbca8d072df.svg";
const sans$e = '"General Sans", system-ui, -apple-system, sans-serif';
function Tag({ label = "INTEGRATED CAPABILITIES", variant = "dark", className, style }) {
  const containerStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    paddingRight: 8,
    paddingTop: 5,
    paddingBottom: 5,
    position: "relative",
    borderRadius: 37,
    ...style
  };
  const textStyle = {
    fontFamily: sans$e,
    fontWeight: 600,
    fontSize: 14,
    lineHeight: "20px",
    letterSpacing: 0,
    color: variant === "light" ? "#FFFFFF" : "#1E1E1E",
    whiteSpace: "nowrap",
    flexShrink: 0
  };
  return /* @__PURE__ */ jsxs("div", { className, style: containerStyle, "data-node-id": variant === "light" ? "2233:20139" : "8:630", children: [
    /* @__PURE__ */ jsx("div", { style: { width: 4.83, height: 16, position: "relative", flexShrink: 0 }, children: /* @__PURE__ */ jsx(
      "img",
      {
        alt: "",
        src: imgBracketLeft,
        style: { position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }
      }
    ) }),
    /* @__PURE__ */ jsx("div", { style: textStyle, children: label }),
    /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ jsx("div", { style: { transform: "rotate(180deg)" }, children: /* @__PURE__ */ jsx("div", { style: { width: 4.83, height: 16, position: "relative" }, children: /* @__PURE__ */ jsx(
      "img",
      {
        alt: "",
        src: imgBracketRight,
        style: { position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }
      }
    ) }) }) })
  ] });
}
const sans$d = '"General Sans", system-ui, -apple-system, sans-serif';
const serif$9 = '"Roboto Serif", Georgia, serif';
const red$b = "#ED2939";
function Stats({ value, label, className, style }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className,
      "data-node-id": "31:845",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        whiteSpace: "nowrap",
        ...style
      },
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            style: {
              fontFamily: serif$9,
              fontWeight: 500,
              fontSize: 48,
              lineHeight: "52px",
              letterSpacing: "-0.96px",
              color: red$b,
              display: "block"
            },
            children: value
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            style: {
              fontFamily: sans$d,
              fontWeight: 600,
              fontSize: 20,
              lineHeight: "28px",
              letterSpacing: 0,
              color: "#949494",
              display: "block"
            },
            children: label
          }
        )
      ]
    }
  );
}
const sans$c = '"General Sans", system-ui, -apple-system, sans-serif';
function TextInputField({
  state = "Default",
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  name,
  type = "text",
  errorMessage,
  required = false,
  className,
  style
}) {
  const [focused, setFocused] = useState(false);
  const isError = state === "Error";
  const resolvedLabel = label ?? (state !== "Default" ? "Your Name" : "What's this about?");
  const resolvedPlaceholder = placeholder ?? (state !== "Default" ? "Jane Doe" : "What's this about");
  const borderColor = isError ? "#ED2939" : focused ? "#1E1E1E" : "#ADADAD";
  const nodeId = state === "Default" ? "2203:12009" : isError ? "2398:2917" : "2203:12010";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className,
      "data-node-id": nodeId,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        width: "100%",
        boxSizing: "border-box",
        ...style
      },
      children: [
        /* @__PURE__ */ jsxs(
          "label",
          {
            style: {
              fontFamily: sans$c,
              fontWeight: 600,
              fontSize: 14,
              lineHeight: "20px",
              color: isError ? "#ED2939" : "#1E1E1E",
              display: "block",
              width: "100%"
            },
            children: [
              resolvedLabel,
              required && /* @__PURE__ */ jsx("span", { style: { color: "#ED2939", marginLeft: 1 }, children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type,
            name,
            value,
            defaultValue,
            placeholder: resolvedPlaceholder,
            onChange: (e) => onChange == null ? void 0 : onChange(e.target.value),
            onFocus: () => setFocused(true),
            onBlur: () => setFocused(false),
            "aria-invalid": isError,
            style: {
              fontFamily: sans$c,
              fontWeight: 500,
              fontSize: 16,
              lineHeight: "24px",
              color: "#1E1E1E",
              backgroundColor: "#FFFFFF",
              border: `1px solid ${borderColor}`,
              borderRadius: 2,
              padding: "18px 16px",
              width: "100%",
              boxSizing: "border-box",
              outline: "none",
              transition: "border-color 0.15s"
            }
          }
        ),
        isError && errorMessage && /* @__PURE__ */ jsx(
          "p",
          {
            style: {
              fontFamily: sans$c,
              fontWeight: 500,
              fontSize: 12,
              lineHeight: "16px",
              color: "#ED2939",
              margin: 0
            },
            children: errorMessage
          }
        ),
        /* @__PURE__ */ jsx("style", { children: `input::placeholder { color: #ADADAD; }` })
      ]
    }
  );
}
const imgChecked = "/assets/a58ccd91e94f87dd303b813745ef82cf9f12ea7c.svg";
const imgUnchecked = "/assets/80e18f3fa88e038d81acec091916f62b3ff1c41e.svg";
function Checkbox({
  checked,
  defaultChecked = false,
  onChange,
  label,
  disabled = false,
  className,
  style
}) {
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
  const isControlled = checked !== void 0;
  const isChecked = isControlled ? checked : internalChecked;
  const handleClick = () => {
    if (disabled) return;
    const next = !isChecked;
    if (!isControlled) setInternalChecked(next);
    onChange == null ? void 0 : onChange(next);
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      role: "checkbox",
      "aria-checked": isChecked,
      "aria-label": label,
      onClick: handleClick,
      disabled,
      "data-node-id": isChecked ? "2398:3001" : "2398:3000",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 24,
        height: 24,
        padding: 0,
        background: "none",
        border: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        flexShrink: 0,
        ...style
      },
      children: /* @__PURE__ */ jsx(
        "img",
        {
          src: isChecked ? imgChecked : imgUnchecked,
          alt: isChecked ? "Checked" : "Unchecked",
          style: { width: 24, height: 24, display: "block", pointerEvents: "none" }
        }
      )
    }
  );
}
const sans$b = '"General Sans", system-ui, -apple-system, sans-serif';
const serif$8 = '"Roboto Serif", Georgia, serif';
const red$a = "#ED2939";
function ContactFormPopUp({
  topic = "AI-LED BUSINESS TRANSFORMATION",
  onClose,
  onSubmit,
  className,
  style
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    areaOfInterest: topic !== "AI-LED BUSINESS TRANSFORMATION" ? topic : "AI-Led Business Transformation",
    message: "",
    consent: false
  });
  const [errors, setErrors] = useState({});
  const handleSubmit = () => {
    const newErrors = {
      name: !form.name.trim(),
      email: !form.email.trim()
    };
    setErrors(newErrors);
    if (newErrors.name || newErrors.email) return;
    onSubmit == null ? void 0 : onSubmit(form);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-node-id": "2398:4994",
      className,
      style: {
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        gap: 32,
        alignItems: "flex-end",
        padding: "32px 24px",
        width: 696,
        boxSizing: "border-box",
        overflow: "hidden",
        position: "relative",
        ...style
      },
      children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8, width: "100%" }, children: [
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 16, width: "100%" }, children: [
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 16, width: "100%" }, children: [
              /* @__PURE__ */ jsx("div", { style: { flex: 1 }, children: /* @__PURE__ */ jsx(Tag, { label: topic, variant: "dark" }) }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: onClose,
                  "aria-label": "Close",
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 27,
                    height: 26,
                    backgroundColor: "#F5F5F5",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: sans$b,
                    fontSize: 13,
                    color: "#5C5C5C",
                    flexShrink: 0,
                    padding: 0
                  },
                  children: "✕"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 5, width: "100%" }, children: [
              /* @__PURE__ */ jsx("p", { style: { fontFamily: serif$8, fontWeight: 600, fontSize: 32, lineHeight: "36px", color: red$a, margin: 0 }, children: "Let's Connect" }),
              /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$b, fontWeight: 500, fontSize: 16, lineHeight: "24px", color: "#5C5C5C", margin: 0 }, children: "Fill in the details below and we'll confirm your slot within 24 hours." })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { style: { width: 78.65, height: 3, backgroundColor: red$a, flexShrink: 0 } })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 16, width: "100%" }, children: [
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 24, width: "100%" }, children: [
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 24, width: "100%" }, children: [
              /* @__PURE__ */ jsx(
                TextInputField,
                {
                  label: "Your Name",
                  required: true,
                  placeholder: "What's this about",
                  value: form.name,
                  onChange: (v) => {
                    setForm((f) => ({ ...f, name: v }));
                    setErrors((e) => ({ ...e, name: false }));
                  },
                  state: errors.name ? "Error" : "Default",
                  errorMessage: errors.name ? "This field is required" : void 0,
                  style: { flex: 1 }
                }
              ),
              /* @__PURE__ */ jsx(
                TextInputField,
                {
                  label: "Work Email",
                  required: true,
                  type: "email",
                  placeholder: "jane@company.com",
                  value: form.email,
                  onChange: (v) => {
                    setForm((f) => ({ ...f, email: v }));
                    setErrors((e) => ({ ...e, email: false }));
                  },
                  state: errors.email ? "Error" : "Default",
                  errorMessage: errors.email ? "This field is required" : void 0,
                  style: { flex: 1 }
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 24, width: "100%" }, children: [
              /* @__PURE__ */ jsx(
                TextInputField,
                {
                  label: "Phone Number",
                  type: "tel",
                  placeholder: "+1 (949) 000-0000",
                  value: form.phone,
                  onChange: (v) => setForm((f) => ({ ...f, phone: v })),
                  style: { flex: 1 }
                }
              ),
              /* @__PURE__ */ jsx(
                TextInputField,
                {
                  label: "Area of Interest",
                  placeholder: "AI-Led Business Transformation",
                  value: form.areaOfInterest,
                  onChange: (v) => setForm((f) => ({ ...f, areaOfInterest: v })),
                  style: { flex: 1 }
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8, width: "100%" }, children: [
              /* @__PURE__ */ jsx("label", { style: { fontFamily: sans$b, fontWeight: 600, fontSize: 14, lineHeight: "20px", color: "#1E1E1E" }, children: "How Can We Help You?" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  placeholder: "Briefly describe what you'd like to discuss or achieve...",
                  value: form.message,
                  onChange: (e) => setForm((f) => ({ ...f, message: e.target.value })),
                  rows: 5,
                  style: {
                    fontFamily: sans$b,
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: "#1E1E1E",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #ADADAD",
                    borderRadius: 2,
                    padding: "18px 16px",
                    width: "100%",
                    boxSizing: "border-box",
                    resize: "vertical",
                    outline: "none"
                  }
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 12, alignItems: "center", height: 40, width: "100%" }, children: [
            /* @__PURE__ */ jsx(
              Checkbox,
              {
                checked: form.consent,
                onChange: (v) => setForm((f) => ({ ...f, consent: v })),
                label: "I agree to be contacted"
              }
            ),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$b, fontWeight: 500, fontSize: 14, lineHeight: "20px", color: "#5C5C5C", margin: 0, flex: 1 }, children: "I agree to be contacted by a Technossus representative regarding this request. Your data is never sold or shared." })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: handleSubmit,
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 56,
              width: 202,
              padding: "16px 24px",
              backgroundColor: red$a,
              border: "none",
              cursor: "pointer",
              fontFamily: sans$b,
              fontWeight: 600,
              fontSize: 16,
              lineHeight: "28px",
              color: "#FFFFFF",
              flexShrink: 0
            },
            children: "Let's Talk"
          }
        )
      ]
    }
  );
}
const imgArrowForward$2 = "/assets/5ab4759937e9a9e8b7e9cb731f7784df694959c0.svg";
const imgImage108 = "/assets/d54db829342bc10c2665f6d43218ad53a4d590e5.png";
const sans$a = '"General Sans", system-ui, -apple-system, sans-serif';
const serif$7 = '"Roboto Serif", Georgia, serif';
const red$9 = "#ED2939";
function CTABanner({
  size = "large",
  label,
  heading,
  body,
  primaryCta,
  secondaryCta,
  onPrimary,
  onSecondary,
  contactFormTopic,
  ctaLabel,
  onCta,
  className = "",
  style
}) {
  const { isMobile, isTablet } = useBreakpoint();
  const [largePrimaryHovered, setLargePrimaryHovered] = useState(false);
  const [smallPrimaryHovered, setSmallPrimaryHovered] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const resolvedPrimary = primaryCta ?? ctaLabel ?? "Schedule a Strategy Session";
  const resolvedCallback = onPrimary ?? onCta;
  useEffect(() => {
    if (formOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [formOpen]);
  const handlePrimaryClick = () => {
    if (size === "large") {
      setFormOpen(true);
    } else {
      resolvedCallback == null ? void 0 : resolvedCallback();
    }
  };
  const resolvedTopic = contactFormTopic ?? label ?? "LET'S WORK TOGETHER";
  if (size === "large") {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className,
        "data-node-id": "8:90",
        style: {
          backgroundColor: "#050510",
          display: "flex",
          justifyContent: "center",
          overflow: "visible",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: isMobile ? "40px 24px" : isTablet ? "48px 40px" : "56px 68px",
          width: isMobile ? "calc(100% - 40px)" : isTablet ? "calc(100% - 80px)" : "calc(100% - 160px)",
          maxWidth: 1280,
          minHeight: isMobile ? "auto" : 375,
          margin: "0 auto",
          position: "relative",
          boxSizing: "border-box",
          ...style
        },
        children: [
          !isMobile && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  position: "absolute",
                  top: -16,
                  left: 0,
                  right: 0,
                  height: 16,
                  backgroundColor: red$9,
                  pointerEvents: "none",
                  zIndex: 0
                }
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  position: "absolute",
                  top: -16,
                  left: 0,
                  width: 16,
                  height: 112,
                  backgroundColor: red$9,
                  pointerEvents: "none",
                  zIndex: 0
                }
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  position: "absolute",
                  top: -16,
                  right: 0,
                  width: 16,
                  height: 136,
                  backgroundColor: red$9,
                  pointerEvents: "none",
                  zIndex: 0
                }
              }
            )
          ] }),
          !isMobile && /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                position: "absolute",
                height: "100%",
                right: 0,
                top: 0,
                width: isTablet ? "42%" : "47%",
                pointerEvents: "none",
                zIndex: 1,
                overflow: "hidden"
              },
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  alt: "",
                  src: imgImage108,
                  style: {
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "right bottom",
                    display: "block"
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: 24,
                alignItems: "flex-start",
                position: "relative",
                zIndex: 2,
                width: isMobile ? "100%" : isTablet ? "58%" : "52%",
                maxWidth: 540
              },
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    style: {
                      fontFamily: sans$a,
                      fontWeight: 600,
                      fontSize: 14,
                      lineHeight: "20px",
                      color: "#FFFFFF",
                      textTransform: "uppercase"
                    },
                    children: label ?? "LET'S WORK ON IT TOGETHER"
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: 14,
                      alignItems: "flex-start",
                      width: "100%"
                    },
                    children: [
                      /* @__PURE__ */ jsx(
                        "h2",
                        {
                          style: {
                            fontFamily: serif$7,
                            fontWeight: 600,
                            fontSize: isMobile ? 28 : isTablet ? 30 : 32,
                            lineHeight: isMobile ? "34px" : "36px",
                            color: "#FFFFFF",
                            margin: 0,
                            width: "100%"
                          },
                          children: heading
                        }
                      ),
                      body && /* @__PURE__ */ jsx(
                        "p",
                        {
                          style: {
                            fontFamily: sans$a,
                            fontWeight: 500,
                            fontSize: isMobile ? 15 : 16,
                            lineHeight: isMobile ? "22px" : "24px",
                            color: "#F5F5F5",
                            margin: 0,
                            width: "100%"
                          },
                          children: body
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 14,
                      alignItems: "flex-start"
                    },
                    children: [
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          onClick: handlePrimaryClick,
                          onMouseEnter: () => setLargePrimaryHovered(true),
                          onMouseLeave: () => setLargePrimaryHovered(false),
                          style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: 48,
                            minWidth: 228,
                            padding: "12px 22px",
                            backgroundColor: largePrimaryHovered ? "#D42030" : red$9,
                            color: "#FFFFFF",
                            fontFamily: sans$a,
                            fontWeight: 600,
                            fontSize: 14,
                            lineHeight: "20px",
                            border: "none",
                            cursor: "pointer",
                            whiteSpace: "nowrap",
                            transform: largePrimaryHovered ? "scale(1.01)" : "scale(1)",
                            transition: "background-color 0.2s ease, transform 0.15s ease"
                          },
                          children: resolvedPrimary
                        }
                      ),
                      secondaryCta && /* @__PURE__ */ jsx(
                        "button",
                        {
                          onClick: onSecondary,
                          style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: 48,
                            minWidth: 116,
                            padding: "12px 22px",
                            backgroundColor: "transparent",
                            color: red$9,
                            fontFamily: sans$a,
                            fontWeight: 600,
                            fontSize: 14,
                            lineHeight: "20px",
                            border: `1px solid ${red$9}`,
                            cursor: "pointer",
                            whiteSpace: "nowrap"
                          },
                          children: secondaryCta
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ),
          formOpen && /* @__PURE__ */ jsx(
            "div",
            {
              role: "dialog",
              "aria-modal": "true",
              onClick: (e) => {
                if (e.target === e.currentTarget) setFormOpen(false);
              },
              style: {
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(4px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                padding: 16
              },
              children: /* @__PURE__ */ jsx(
                ContactFormPopUp,
                {
                  topic: resolvedTopic,
                  onClose: () => setFormOpen(false),
                  onSubmit: (data) => {
                    setFormOpen(false);
                    console.log("Contact form submitted:", data);
                  },
                  style: {
                    maxWidth: "100%",
                    maxHeight: "90vh",
                    overflowY: "auto",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.4)"
                  }
                }
              )
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className,
      "data-node-id": "31:1262",
      style: {
        backgroundColor: "#171717",
        border: "1px solid rgba(255,255,255,0.1)",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
        overflow: "hidden",
        gap: isMobile ? 20 : 24,
        alignItems: isMobile ? "flex-start" : "center",
        padding: isMobile ? "32px 20px" : isTablet ? "40px 32px" : 49,
        width: "100%",
        position: "relative",
        boxSizing: "border-box",
        ...style
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              position: "absolute",
              backgroundColor: "rgba(227,27,35,0.1)",
              filter: "blur(50px)",
              bottom: -80,
              right: -80,
              borderRadius: 9999,
              width: 320,
              height: 320,
              pointerEvents: "none"
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { style: { flex: "1 0 0", position: "relative", minWidth: 0 }, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8 }, children: [
          /* @__PURE__ */ jsx(
            "h2",
            {
              style: {
                fontFamily: serif$7,
                fontWeight: 600,
                fontSize: isMobile ? 22 : isTablet ? 26 : 32,
                lineHeight: isMobile ? "30px" : "36px",
                color: "#FFFFFF",
                margin: 0
              },
              children: heading
            }
          ),
          body && /* @__PURE__ */ jsx(
            "p",
            {
              style: {
                fontFamily: sans$a,
                fontWeight: 500,
                fontSize: isMobile ? 14 : 18,
                lineHeight: "24px",
                color: "#F5F5F5",
                margin: 0
              },
              children: body
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            onMouseEnter: () => setSmallPrimaryHovered(true),
            onMouseLeave: () => setSmallPrimaryHovered(false),
            style: {
              backgroundColor: red$9,
              height: 56,
              position: "relative",
              flexShrink: 0,
              width: isMobile ? "100%" : 215,
              transform: smallPrimaryHovered ? "scale(1.01)" : "scale(1)",
              transition: "background-color 0.2s ease, transform 0.15s ease"
            },
            children: /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: resolvedCallback,
                style: {
                  display: "flex",
                  gap: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px 24px",
                  width: "100%",
                  height: "100%",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer"
                },
                children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      style: {
                        fontFamily: sans$a,
                        fontWeight: 600,
                        fontSize: 16,
                        lineHeight: "28px",
                        color: "#FFFFFF",
                        whiteSpace: "nowrap"
                      },
                      children: resolvedPrimary
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { style: { width: 24, height: 24, position: "relative", flexShrink: 0 }, children: /* @__PURE__ */ jsx("img", { alt: "", src: imgArrowForward$2, style: { position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" } }) })
                ]
              }
            )
          }
        )
      ]
    }
  );
}
const imgArrowForward$1 = "/assets/5ab4759937e9a9e8b7e9cb731f7784df694959c0.svg";
const sans$9 = '"General Sans", system-ui, -apple-system, sans-serif';
const red$8 = "#ED2939";
function Button({
  variant = "primary",
  label,
  href,
  onClick,
  disabled = false,
  className = "",
  style,
  children
}) {
  const [isHovered, setIsHovered] = useState(false);
  const content = children ?? label;
  if (variant === "primary") {
    const s2 = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      height: 56,
      padding: "16px 24px",
      backgroundColor: red$8,
      color: "#FFFFFF",
      fontFamily: sans$9,
      fontWeight: 600,
      fontSize: 16,
      lineHeight: "28px",
      letterSpacing: 0,
      textDecoration: "none",
      border: "none",
      borderRadius: 0,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      whiteSpace: "nowrap",
      transform: isHovered && !disabled ? "translateY(-1px)" : "translateY(0)",
      boxShadow: isHovered && !disabled ? "0 6px 20px rgba(237,41,57,0.3)" : "none",
      transition: "background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
      ...style
    };
    const Tag22 = href ? "a" : "button";
    return /* @__PURE__ */ jsxs(
      Tag22,
      {
        href,
        onClick,
        disabled: !href && disabled,
        className,
        style: s2,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        children: [
          /* @__PURE__ */ jsx("span", { children: content ?? "Explore Solutions" }),
          /* @__PURE__ */ jsx("img", { src: imgArrowForward$1, alt: "", style: { width: 24, height: 24, display: "block", flexShrink: 0 } })
        ]
      }
    );
  }
  if (variant === "secondary") {
    const s2 = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: 56,
      padding: "16px 24px",
      backgroundColor: isHovered && !disabled ? red$8 : "transparent",
      color: isHovered && !disabled ? "#fff" : red$8,
      fontFamily: sans$9,
      fontWeight: 600,
      fontSize: 16,
      lineHeight: "28px",
      letterSpacing: 0,
      textDecoration: "none",
      border: `1px solid ${red$8}`,
      borderRadius: 0,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      whiteSpace: "nowrap",
      transition: "background-color 0.2s ease, color 0.2s ease",
      ...style
    };
    const Tag22 = href ? "a" : "button";
    return /* @__PURE__ */ jsx(
      Tag22,
      {
        href,
        onClick,
        disabled: !href && disabled,
        className,
        style: s2,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        children: content ?? "See How We Work"
      }
    );
  }
  if (variant === "cta") {
    const s2 = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      height: 48,
      padding: "8px 24px",
      backgroundColor: isHovered && !disabled ? "#2E2E2E" : "#1E1E1E",
      color: "#FFFFFF",
      fontFamily: sans$9,
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      letterSpacing: 0,
      textDecoration: "none",
      border: "none",
      borderRadius: 0,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      whiteSpace: "nowrap",
      transition: "background-color 0.2s ease",
      ...style
    };
    const Tag22 = href ? "a" : "button";
    return /* @__PURE__ */ jsx(
      Tag22,
      {
        href,
        onClick,
        disabled: !href && disabled,
        className,
        style: s2,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        children: content ?? "Contact us"
      }
    );
  }
  const s = {
    display: "inline",
    backgroundColor: "transparent",
    color: red$8,
    fontFamily: sans$9,
    fontWeight: 600,
    fontSize: 16,
    lineHeight: "28px",
    letterSpacing: 0,
    textDecoration: "underline",
    textDecorationStyle: "solid",
    border: "none",
    borderRadius: 0,
    padding: 0,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : isHovered ? 0.8 : 1,
    transition: "opacity 0.2s ease",
    ...style
  };
  const Tag2 = href ? "a" : "button";
  return /* @__PURE__ */ jsx(
    Tag2,
    {
      href,
      onClick,
      disabled: !href && disabled,
      className,
      style: s,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      children: content ?? "Try in AI Studio"
    }
  );
}
const imgHeroPhoto = "/assets/fbbad1d37f7a4e076de4d16631dc6863c6c4444a.png";
const imgPhoto2Dark = "/assets/11485e6d5400122979be42e072e5eb53cb43660e.png";
const imgPhoto2Light = "/assets/841d1956c23918ec138a2eef41ff5a34b6b981e1.png";
const imgFeaturedPhoto = "/assets/8b5b322290a3502aa74e1a09d670545080a3d3a8.png";
const imgContainerSvg = "/assets/f6fd2f419935273b9e66a4b9c11731de18271c48.svg";
const imgIconSvg = "/assets/da42ce3d86cd28e1121776ec014cdcdbe6f8208e.svg";
const imgContainerSvg1 = "/assets/487c967a36fb2b5113f573275756c62f0ec9a2fb.svg";
const imgArrowForward = "/assets/5ab4759937e9a9e8b7e9cb731f7784df694959c0.svg";
const sans$8 = '"General Sans", system-ui, -apple-system, sans-serif';
const serif$6 = '"Roboto Serif", Georgia, serif';
const red$7 = "#ED2939";
function Card(props) {
  const { isMobile } = useBreakpoint();
  const [isHovered, setIsHovered] = useState(false);
  if (props.mode === "dark" && props.type === "small") {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: props.className,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "flex-start",
          backgroundColor: "#1E1E1E",
          border: "1px solid #5C5C5C",
          padding: 33,
          width: "100%",
          boxSizing: "border-box",
          cursor: "pointer",
          transform: isHovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: isHovered ? "0 12px 32px rgba(0,0,0,0.25)" : "none",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          willChange: "transform",
          ...props.style
        },
        children: [
          /* @__PURE__ */ jsx("div", { style: { height: 28, width: 28, flexShrink: 0 }, children: props.icon ? /* @__PURE__ */ jsx(Fragment, { children: props.icon }) : /* @__PURE__ */ jsx("img", { alt: "", src: imgIconSvg, style: { width: "100%", height: "100%", display: "block", objectFit: "contain" } }) }),
          /* @__PURE__ */ jsx("h3", { style: { fontFamily: sans$8, fontWeight: 600, fontSize: 24, lineHeight: "32px", color: "#FFFFFF", margin: 0, width: "100%" }, children: props.title ?? "Outcome Driven" }),
          /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$8, fontWeight: 500, fontSize: 16, lineHeight: "24px", color: "#E1E0E0", margin: 0, width: "100%" }, children: props.description ?? "Our systems are meticulously designed to scale operations and unlock new growth opportunities, ensuring measurable impact on your bottom line." })
        ]
      }
    );
  }
  if (props.mode === "dark" && props.type === "medium") {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: props.className,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 32,
          alignItems: "flex-start",
          backgroundColor: "#1E1E1E",
          border: "1px solid #5C5C5C",
          backdropFilter: "blur(10px)",
          padding: 33,
          width: "100%",
          boxSizing: "border-box",
          cursor: "pointer",
          transform: isHovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: isHovered ? "0 12px 32px rgba(0,0,0,0.25)" : "none",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          willChange: "transform",
          ...props.style
        },
        children: [
          /* @__PURE__ */ jsx("div", { style: { backgroundColor: "#262626", width: 64, height: 64, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: props.icon ? /* @__PURE__ */ jsx("img", { alt: "", src: props.icon, style: { width: 24, height: 30, objectFit: "contain" } }) : /* @__PURE__ */ jsx("img", { alt: "", src: imgContainerSvg1, style: { width: 24, height: 30, display: "block", objectFit: "contain" } }) }),
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start", width: "100%" }, children: [
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$8, fontWeight: 600, fontSize: 14, lineHeight: "20px", color: red$7, margin: 0 }, children: props.category ?? "FASTER PROCESSING" }),
            /* @__PURE__ */ jsx("h3", { style: { fontFamily: sans$8, fontWeight: 600, fontSize: 24, lineHeight: "32px", color: "#FFFFFF", margin: 0, width: "100%" }, children: props.title ?? "Automate document workflows" }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$8, fontWeight: 500, fontSize: 16, lineHeight: "24px", color: "#E1E0E0", margin: 0, width: "100%" }, children: props.description ?? "Use advanced machine learning to automatically extract and categorize data from complex documents." })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: props.onCta,
              style: { fontFamily: sans$8, fontWeight: 600, fontSize: 16, lineHeight: "28px", color: red$7, textDecoration: "underline", background: "none", border: "none", cursor: "pointer", padding: 0 },
              children: props.ctaLabel ?? "Try in AI Studio"
            }
          )
        ]
      }
    );
  }
  if (props.mode === "dark" && props.type === "large") {
    const stats = props.stats ?? [
      { value: "$50M+", label: "TOTAL COST SAVING" },
      { value: "20,000+", label: "ORDERS PLACED SUCCESSFULLY" }
    ];
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: props.className,
        style: {
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 32 : 61,
          alignItems: isMobile ? "flex-start" : "center",
          backgroundColor: "#1E1E1E",
          overflow: "hidden",
          padding: isMobile ? "32px 24px" : "52px 48px",
          width: "100%",
          boxSizing: "border-box",
          ...props.style
        },
        children: [
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", flex: "1 0 0", gap: 48, alignItems: "flex-start", minWidth: 0 }, children: [
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 16, width: "100%" }, children: [
              /* @__PURE__ */ jsx("div", { style: { backgroundColor: red$7, display: "inline-flex", alignItems: "center", padding: "4px 12px", borderRadius: 37, alignSelf: "flex-start" }, children: /* @__PURE__ */ jsx("span", { style: { fontFamily: sans$8, fontWeight: 600, fontSize: 14, lineHeight: "20px", color: "#FFFFFF" }, children: props.category ?? "HEALTHCARE" }) }),
              /* @__PURE__ */ jsx("h2", { style: { fontFamily: serif$6, fontWeight: 600, fontSize: isMobile ? 24 : 32, lineHeight: isMobile ? "32px" : "36px", color: "#FFFFFF", margin: 0 }, children: props.heading ?? "Automating Home Care Operations for Unprecedented Efficiency." }),
              /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$8, fontWeight: 500, fontSize: 16, lineHeight: "24px", color: "#E1E0E0", margin: 0 }, children: props.body ?? "Transformed high-volume operational workflows with RPA and Smart Rules, eliminating manual bottlenecks." })
            ] }),
            /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: isMobile ? 20 : 32, alignItems: "center", flexWrap: "wrap" }, children: stats.map((stat, i) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
              i > 0 && /* @__PURE__ */ jsx("div", { style: { width: 1, height: 60, backgroundColor: "#7C7C7C", flexShrink: 0 } }),
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8, flexShrink: 0 }, children: [
                /* @__PURE__ */ jsx("span", { style: { fontFamily: serif$6, fontWeight: 600, fontSize: isMobile ? 28 : 32, lineHeight: "36px", color: red$7 }, children: stat.value }),
                /* @__PURE__ */ jsx("span", { style: { fontFamily: sans$8, fontWeight: 500, fontSize: isMobile ? 13 : 16, lineHeight: "24px", color: "#E1E0E0" }, children: stat.label })
              ] })
            ] }, i)) }),
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 24, flexWrap: "wrap" }, children: [
              /* @__PURE__ */ jsxs("button", { onClick: props.onPrimary, style: { display: "flex", gap: 8, alignItems: "center", justifyContent: "center", height: 56, padding: "16px 24px", backgroundColor: red$7, border: "none", cursor: "pointer", minWidth: isMobile ? "100%" : 215, boxSizing: "border-box" }, children: [
                /* @__PURE__ */ jsx("span", { style: { fontFamily: sans$8, fontWeight: 600, fontSize: 16, lineHeight: "28px", color: "#FFFFFF" }, children: props.primaryLabel ?? "View All Case Study" }),
                /* @__PURE__ */ jsx("img", { alt: "", src: imgArrowForward, style: { width: 24, height: 24, display: "block" } })
              ] }),
              /* @__PURE__ */ jsx("button", { onClick: props.onSecondary, style: { display: "flex", alignItems: "center", justifyContent: "center", height: 56, padding: "16px 24px", backgroundColor: "transparent", border: `1px solid ${red$7}`, cursor: "pointer", minWidth: 140 }, children: /* @__PURE__ */ jsx("span", { style: { fontFamily: sans$8, fontWeight: 600, fontSize: 16, lineHeight: "28px", color: red$7 }, children: props.secondaryLabel ?? "View All" }) })
            ] })
          ] }),
          !isMobile && /* @__PURE__ */ jsx("div", { style: { height: 400, position: "relative", flexShrink: 0, width: 400, overflow: "hidden" }, children: /* @__PURE__ */ jsx("img", { alt: "", src: props.image ?? imgPhoto2Dark, style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" } }) })
        ]
      }
    );
  }
  if (props.mode === "dark" && props.type === "insights") {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: props.className,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          backgroundColor: "#1E1E1E",
          width: "100%",
          boxSizing: "border-box",
          cursor: "pointer",
          transform: isHovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: isHovered ? "0 12px 32px rgba(0,0,0,0.18)" : "none",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          willChange: "transform",
          ...props.style
        },
        children: [
          /* @__PURE__ */ jsxs("div", { style: { height: 220, position: "relative", flexShrink: 0, width: "100%", overflow: "hidden", backgroundColor: "#2A2A2A" }, children: [
            props.image && /* @__PURE__ */ jsx("img", { alt: "", src: props.image, style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" } }),
            !props.image && /* @__PURE__ */ jsx("img", { alt: "", src: imgHeroPhoto, style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" } })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 24, padding: 24, width: "100%", boxSizing: "border-box", flex: 1 }, children: [
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 12, width: "100%", flex: 1 }, children: [
              /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$8, fontWeight: 600, fontSize: 14, lineHeight: "20px", color: "#ADADAD", margin: 0 }, children: props.tags ?? "FINTECH • PLATFORM MODERNIZATION" }),
              /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$8, fontWeight: 600, fontSize: 20, lineHeight: "28px", color: "#FFFFFF", margin: 0 }, children: props.title ?? "Architecting a High-Frequency Trading Engine for Global Markets" }),
              /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$8, fontWeight: 500, fontSize: 16, lineHeight: "26px", color: "#E1E0E0", margin: 0 }, children: props.excerpt ?? "We overhauled the legacy infrastructure of a Tier-1 financial institution, reducing latency by 40%…" })
            ] }),
            /* @__PURE__ */ jsx("button", { onClick: props.onCta, style: { display: "flex", alignItems: "center", justifyContent: "center", height: 56, width: 180, padding: "16px 24px", backgroundColor: "transparent", border: `1px solid ${red$7}`, cursor: "pointer", flexShrink: 0 }, children: /* @__PURE__ */ jsx("span", { style: { fontFamily: sans$8, fontWeight: 600, fontSize: 16, lineHeight: "28px", color: red$7, whiteSpace: "nowrap" }, children: props.ctaLabel ?? "See How We Work" }) })
          ] })
        ]
      }
    );
  }
  if (props.mode === "dark" && props.type === "accelerators") {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: props.className,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        "data-node-id": "2428-3068",
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          backgroundColor: "#1E1E1E",
          width: "100%",
          boxSizing: "border-box",
          cursor: "pointer",
          position: "relative",
          transform: isHovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: isHovered ? "0 12px 32px rgba(0,0,0,0.25)" : "none",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          willChange: "transform",
          ...props.style
        },
        children: [
          /* @__PURE__ */ jsxs("div", { style: { height: 260, position: "relative", flexShrink: 0, width: "100%", overflow: "hidden", backgroundColor: "#2A2A2A" }, children: [
            props.image && /* @__PURE__ */ jsx(
              "img",
              {
                alt: "",
                src: props.image,
                style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }
              }
            ),
            props.badge && /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  position: "absolute",
                  top: 19,
                  left: 18.67,
                  backgroundColor: "#FFFFFF",
                  padding: "4px 10px",
                  display: "inline-flex",
                  alignItems: "center"
                },
                children: /* @__PURE__ */ jsx(
                  "span",
                  {
                    style: {
                      fontFamily: sans$8,
                      fontWeight: 600,
                      fontSize: 12,
                      lineHeight: "18px",
                      color: red$7,
                      whiteSpace: "nowrap"
                    },
                    children: props.badge
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: 24,
                padding: 24,
                width: "100%",
                boxSizing: "border-box",
                flex: 1
              },
              children: [
                props.techTags && props.techTags.length > 0 && /* @__PURE__ */ jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: 8 }, children: props.techTags.map((tag) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    style: {
                      fontFamily: sans$8,
                      fontWeight: 500,
                      fontSize: 13,
                      lineHeight: "18px",
                      color: "#858585",
                      backgroundColor: "#181818",
                      border: "1px solid #454545",
                      height: 32,
                      padding: "0 12px",
                      display: "inline-flex",
                      alignItems: "center",
                      whiteSpace: "nowrap"
                    },
                    children: tag
                  },
                  tag
                )) }),
                /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8, flex: 1 }, children: [
                  props.category && /* @__PURE__ */ jsx(
                    "p",
                    {
                      style: {
                        fontFamily: sans$8,
                        fontWeight: 600,
                        fontSize: 14,
                        lineHeight: "20px",
                        color: "#ADADAD",
                        margin: 0,
                        textTransform: "uppercase"
                      },
                      children: props.category
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "h3",
                    {
                      style: {
                        fontFamily: sans$8,
                        fontWeight: 600,
                        fontSize: 20,
                        lineHeight: "28px",
                        color: "#FFFFFF",
                        margin: 0
                      },
                      children: props.title ?? "Intelligent Data Platform"
                    }
                  ),
                  props.description && /* @__PURE__ */ jsx(
                    "p",
                    {
                      style: {
                        fontFamily: sans$8,
                        fontWeight: 500,
                        fontSize: 16,
                        lineHeight: "24px",
                        color: "#E1E0E0",
                        margin: 0
                      },
                      children: props.description
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: props.onCta,
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: 56,
                      width: 180,
                      padding: "16px 24px",
                      backgroundColor: "transparent",
                      border: `1px solid ${red$7}`,
                      cursor: "pointer",
                      flexShrink: 0
                    },
                    children: /* @__PURE__ */ jsx(
                      "span",
                      {
                        style: {
                          fontFamily: sans$8,
                          fontWeight: 600,
                          fontSize: 16,
                          lineHeight: "28px",
                          color: red$7,
                          whiteSpace: "nowrap"
                        },
                        children: props.ctaLabel ?? "Try Now"
                      }
                    )
                  }
                )
              ]
            }
          )
        ]
      }
    );
  }
  if (props.mode === "light" && props.type === "insights") {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: props.className,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          backgroundColor: "#FFFFFF",
          width: "100%",
          boxSizing: "border-box",
          cursor: "pointer",
          transform: isHovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: isHovered ? "0 12px 32px rgba(0,0,0,0.10)" : "none",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          willChange: "transform",
          ...props.style
        },
        children: [
          /* @__PURE__ */ jsx("div", { style: { height: 220, position: "relative", flexShrink: 0, width: "100%", overflow: "hidden", backgroundColor: "#D4D4D4" }, children: props.image && /* @__PURE__ */ jsx("img", { alt: "", src: props.image, style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" } }) }),
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 24, padding: 24, width: "100%", boxSizing: "border-box", flex: 1 }, children: [
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 12, width: "100%", flex: 1 }, children: [
              /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$8, fontWeight: 600, fontSize: 14, lineHeight: "20px", color: "#949494", margin: 0 }, children: props.tags ?? "FINTECH • PLATFORM MODERNIZATION" }),
              /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$8, fontWeight: 600, fontSize: 20, lineHeight: "28px", color: "#383838", margin: 0 }, children: props.title ?? "Architecting a High-Frequency Trading Engine for Global Markets" }),
              /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$8, fontWeight: 500, fontSize: 16, lineHeight: "26px", color: "#5C5C5C", margin: 0 }, children: props.excerpt ?? "We overhauled the legacy infrastructure of a Tier-1 financial institution, reducing latency by 40%…" })
            ] }),
            /* @__PURE__ */ jsx("button", { onClick: props.onCta, style: { display: "flex", alignItems: "center", justifyContent: "center", height: 56, width: 180, padding: "16px 24px", backgroundColor: "transparent", border: `1px solid ${red$7}`, cursor: "pointer", flexShrink: 0 }, children: /* @__PURE__ */ jsx("span", { style: { fontFamily: sans$8, fontWeight: 600, fontSize: 16, lineHeight: "28px", color: red$7, whiteSpace: "nowrap" }, children: props.ctaLabel ?? "See How We Work" }) })
          ] })
        ]
      }
    );
  }
  if (props.mode === "light" && props.type === "deliver") {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: props.className,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          backgroundColor: "#FFFFFF",
          width: "100%",
          boxSizing: "border-box",
          cursor: "pointer",
          transform: isHovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: isHovered ? "0 8px 24px rgba(0,0,0,0.08)" : "none",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          willChange: "transform",
          ...props.style
        },
        children: [
          /* @__PURE__ */ jsx("div", { style: { height: 220, position: "relative", flexShrink: 0, width: "100%", overflow: "hidden", backgroundColor: "#D4D4D4" }, children: props.image && /* @__PURE__ */ jsx("img", { alt: "", src: props.image, style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" } }) }),
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 24, padding: 24, width: "100%", boxSizing: "border-box", flex: 1 }, children: [
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 12, flex: 1 }, children: [
              /* @__PURE__ */ jsx("h4", { style: { fontFamily: sans$8, fontWeight: 600, fontSize: 20, lineHeight: "28px", color: "#383838", margin: 0 }, children: props.title ?? "AI Led Transformation" }),
              /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$8, fontWeight: 500, fontSize: 16, lineHeight: "24px", color: "#5C5C5C", margin: 0 }, children: props.description ?? "Revolutionizing enterprise workflows through custom LLM integration." })
            ] }),
            /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "flex-end" }, children: /* @__PURE__ */ jsx("button", { onClick: props.onArrow, "aria-label": "View more", style: { border: `1px solid ${red$7}`, borderRadius: 9999, backgroundColor: "transparent", width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: 0, flexShrink: 0 }, children: /* @__PURE__ */ jsx("img", { alt: "", src: imgContainerSvg, style: { width: 16, height: 16, display: "block" } }) }) })
          ] })
        ]
      }
    );
  }
  if (props.mode === "light" && props.type === "large") {
    const bodyParagraphs = props.body ?? [
      "No problem is too complex, and no idea is too early, we listen first, then collaborate to shape the right path forward.",
      "We see partnership as the foundation of progress. That means being transparent, responsive, and focused on outcomes that create lasting value."
    ];
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: props.className,
        style: {
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 32 : 61,
          alignItems: isMobile ? "flex-start" : "center",
          backgroundColor: "#F5F5F5",
          overflow: "hidden",
          padding: isMobile ? "32px 24px" : "52px 48px",
          width: "100%",
          boxSizing: "border-box",
          ...props.style
        },
        children: [
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start", flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ jsx("h2", { style: { fontFamily: sans$8, fontWeight: 600, fontSize: isMobile ? 20 : 24, lineHeight: isMobile ? "28px" : "32px", color: "#1E1E1E", margin: 0 }, children: props.heading ?? "We approach every inquiry with curiosity, clarity, and a commitment to understanding the real challenge behind it." }),
            bodyParagraphs.map((para, i) => /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$8, fontWeight: 500, fontSize: 16, lineHeight: "24px", color: "#5C5C5C", margin: 0 }, children: para }, i))
          ] }),
          !isMobile && /* @__PURE__ */ jsx("div", { style: { height: 400, position: "relative", flexShrink: 0, width: 400, overflow: "hidden" }, children: /* @__PURE__ */ jsx("img", { alt: "", src: props.image ?? imgPhoto2Light, style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" } }) })
        ]
      }
    );
  }
  if (props.mode === "light" && props.type === "featured") {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: props.className,
        "data-node-id": "2432-2780",
        style: {
          backgroundColor: "#F5F5F5",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 32 : 61,
          alignItems: isMobile ? "flex-start" : "center",
          overflow: "hidden",
          padding: isMobile ? "32px 24px" : "52px 48px",
          width: "100%",
          boxSizing: "border-box",
          ...props.style
        },
        children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: 24,
                alignItems: "flex-start",
                flex: "1 0 0",
                minWidth: 0
              },
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    style: {
                      backgroundColor: red$7,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "4px 8px",
                      flexShrink: 0
                    },
                    children: /* @__PURE__ */ jsx(
                      "span",
                      {
                        style: {
                          fontFamily: sans$8,
                          fontWeight: 600,
                          fontSize: 14,
                          lineHeight: "20px",
                          color: "#FFFFFF",
                          whiteSpace: "nowrap"
                        },
                        children: props.badge ?? "FEATURED BY TECHNOSSUS"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                      alignItems: "flex-start",
                      flex: "1 0 0",
                      width: "100%"
                    },
                    children: [
                      /* @__PURE__ */ jsxs(
                        "div",
                        {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                            alignItems: "flex-start",
                            width: "100%",
                            flexShrink: 0
                          },
                          children: [
                            /* @__PURE__ */ jsx(
                              "p",
                              {
                                style: {
                                  fontFamily: sans$8,
                                  fontWeight: 600,
                                  fontSize: 14,
                                  lineHeight: "20px",
                                  color: "#949494",
                                  margin: 0
                                },
                                children: props.category ?? "FINTECH • PLATFORM MODERNIZATION"
                              }
                            ),
                            /* @__PURE__ */ jsx(
                              "h3",
                              {
                                style: {
                                  fontFamily: sans$8,
                                  fontWeight: 600,
                                  fontSize: 24,
                                  lineHeight: "32px",
                                  color: "#1E1E1E",
                                  margin: 0,
                                  width: "100%"
                                },
                                children: props.title ?? "Why Prior Authorisation Is the Best First AI Use Case in Healthcare"
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "p",
                        {
                          style: {
                            fontFamily: sans$8,
                            fontWeight: 500,
                            fontSize: 16,
                            lineHeight: "24px",
                            color: "#5C5C5C",
                            margin: 0,
                            width: "100%"
                          },
                          children: props.description ?? "Most health systems look to clinical decision support as their AI entry point. This paper argues that prior auth—with structured rules, clear metrics, and enormous admin burden—delivers the highest ROI for most organisations."
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      gap: 24,
                      alignItems: "flex-end",
                      width: "100%",
                      flexShrink: 0
                    },
                    children: [
                      /* @__PURE__ */ jsxs(
                        "div",
                        {
                          style: {
                            display: "flex",
                            flex: "1 0 0",
                            gap: 12,
                            alignItems: "center",
                            minWidth: 0
                          },
                          children: [
                            /* @__PURE__ */ jsx(
                              "div",
                              {
                                style: {
                                  backgroundColor: "rgba(217,48,37,0.1)",
                                  borderRadius: 50,
                                  width: 40,
                                  height: 40,
                                  flexShrink: 0,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center"
                                },
                                children: /* @__PURE__ */ jsx(
                                  "span",
                                  {
                                    style: {
                                      fontFamily: sans$8,
                                      fontWeight: 600,
                                      fontSize: 16,
                                      lineHeight: "28px",
                                      color: "#D93025",
                                      textAlign: "center"
                                    },
                                    children: props.authorInitials ?? "DR"
                                  }
                                )
                              }
                            ),
                            /* @__PURE__ */ jsxs(
                              "div",
                              {
                                style: {
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "flex-start",
                                  justifyContent: "center",
                                  flexShrink: 0
                                },
                                children: [
                                  /* @__PURE__ */ jsx(
                                    "span",
                                    {
                                      style: {
                                        fontFamily: sans$8,
                                        fontWeight: 600,
                                        fontSize: 16,
                                        lineHeight: "28px",
                                        color: "#1E1E1E"
                                      },
                                      children: props.authorName ?? "Dr. Rohan Mehta"
                                    }
                                  ),
                                  /* @__PURE__ */ jsx(
                                    "span",
                                    {
                                      style: {
                                        fontFamily: sans$8,
                                        fontWeight: 500,
                                        fontSize: 14,
                                        lineHeight: "20px",
                                        color: "#5C5C5C"
                                      },
                                      children: props.authorRole ?? "Chief Medical Informatics Officer · TAS Member"
                                    }
                                  )
                                ]
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          onClick: props.onCta,
                          style: {
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: 0,
                            fontFamily: sans$8,
                            fontWeight: 600,
                            fontSize: 16,
                            lineHeight: "28px",
                            color: red$7,
                            textDecoration: "underline",
                            whiteSpace: "nowrap",
                            flexShrink: 0
                          },
                          children: props.ctaLabel ?? "READ MORE"
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ),
          !isMobile && /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                height: 381,
                width: 540,
                flexShrink: 0,
                position: "relative",
                overflow: "hidden"
              },
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  alt: "",
                  src: props.image ?? imgFeaturedPhoto,
                  style: {
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "bottom",
                    display: "block"
                  }
                }
              )
            }
          )
        ]
      }
    );
  }
  return null;
}
function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}
function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}
function FadeUp({
  delay = 0,
  duration = 640,
  distance = 24,
  threshold = 0.12,
  as = "div",
  className,
  style,
  children
}) {
  const reducedMotion = useReducedMotion();
  const { ref, inView } = useScrollReveal(threshold);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const Tag2 = as;
  if (!mounted || reducedMotion) {
    return /* @__PURE__ */ jsx(Tag2, { ref, className, style, children });
  }
  const animStyle = {
    opacity: inView ? 1 : 0,
    transform: inView ? "none" : `translateY(${distance}px)`,
    transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    ...style
  };
  return /* @__PURE__ */ jsx(Tag2, { ref, className, style: animStyle, children });
}
function DecorativeOverlay({
  top,
  right,
  bottom,
  left,
  width,
  height,
  zIndex = 0,
  children
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "aria-hidden": true,
      style: {
        position: "absolute",
        top,
        right,
        bottom,
        left,
        width,
        height,
        pointerEvents: "none",
        zIndex
      },
      children
    }
  );
}
function DecorativeImage({
  src,
  width,
  height,
  top,
  right,
  bottom,
  left,
  opacity = 1,
  blendMode,
  objectFit
}) {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src,
      alt: "",
      "aria-hidden": true,
      style: {
        position: "absolute",
        top,
        right,
        bottom,
        left,
        width,
        height,
        opacity,
        mixBlendMode: blendMode,
        objectFit,
        pointerEvents: "none",
        display: "block"
      }
    }
  );
}
function PlaceholderBlock({
  width = "100%",
  height = 200,
  label,
  style
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "aria-hidden": true,
      style: {
        width,
        height,
        background: "#D4D4D4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        ...style
      },
      children: label && /* @__PURE__ */ jsx(
        "span",
        {
          style: {
            fontFamily: '"General Sans", system-ui, -apple-system, sans-serif',
            fontSize: 12,
            fontWeight: 500,
            color: "#888888",
            letterSpacing: "0.04em",
            textTransform: "uppercase"
          },
          children: label
        }
      )
    }
  );
}
const imgSvcAI = "/assets/AI%20Led%20Transformation-C82Sq3Av.png";
const imgSvcCloud = "/assets/Cloud%20consulting-JD86C5_b.png";
const imgSvcData = "/assets/Data%20Intelligence-CRIW1Mrt.png";
const imgSvcDigital = "/assets/Digital%20Exp.-BiWLFnjW.png";
const imgSvcProduct = "/assets/Product%20Eng.%20-1uJRBezc.png";
const imgHero = "/assets/Quality%20Eng.-CHewb4QM.png";
const sans$7 = '"General Sans", system-ui, -apple-system, sans-serif';
function Breadcrumb({ items, className = "", style }) {
  return /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", className, style, children: /* @__PURE__ */ jsx(
    "ol",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 4,
        listStyle: "none",
        margin: 0,
        padding: 0,
        flexWrap: "wrap"
      },
      children: items.map((item, i) => {
        const isLast = i === items.length - 1;
        const isActive = item.active ?? isLast;
        return /* @__PURE__ */ jsxs(React.Fragment, { children: [
          /* @__PURE__ */ jsx("li", { style: { display: "flex", alignItems: "center" }, children: isActive ? (
            /* Active state — Figma node 38:434: General Sans Semibold 14px #383838 */
            /* @__PURE__ */ jsx(
              "span",
              {
                "aria-current": "page",
                "data-node-id": "38:434",
                style: {
                  fontFamily: sans$7,
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: "20px",
                  color: "#383838",
                  whiteSpace: "nowrap"
                },
                children: item.label
              }
            )
          ) : item.href ? (
            /* Default state — Figma node 38:454: General Sans Medium 14px #5C5C5C underline */
            /* @__PURE__ */ jsx(
              "div",
              {
                "data-node-id": "38:449",
                style: { display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
                children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: item.href,
                    "data-node-id": "38:450",
                    style: {
                      fontFamily: sans$7,
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      color: "#5C5C5C",
                      textDecoration: "underline",
                      textDecorationStyle: "solid",
                      whiteSpace: "nowrap"
                    },
                    children: item.label
                  }
                )
              }
            )
          ) : /* @__PURE__ */ jsx(
            "span",
            {
              style: {
                fontFamily: sans$7,
                fontWeight: 500,
                fontSize: 14,
                lineHeight: "20px",
                color: "#5C5C5C",
                whiteSpace: "nowrap"
              },
              children: item.label
            }
          ) }),
          !isLast && /* @__PURE__ */ jsx(
            "li",
            {
              "aria-hidden": "true",
              "data-node-id": "38:451",
              style: { display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
              children: /* @__PURE__ */ jsx(
                "span",
                {
                  "data-node-id": "38:452",
                  style: {
                    fontFamily: sans$7,
                    fontWeight: 500,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: "#5C5C5C"
                  },
                  children: "/"
                }
              )
            }
          )
        ] }, i);
      })
    }
  ) });
}
const sans$6 = '"General Sans", system-ui, -apple-system, sans-serif';
const red$6 = "#ED2939";
const defaultItems = [
  {
    title: "Continuous Quality & QA Ops Engineering",
    subtitle: "Quality that lives in the pipeline, from design to release.",
    content: {
      type: "detail",
      serviceLabel: "QUALITY ENGINEERING & INDEPENDENT ASSURANCE",
      heading: "Find out if the idea works before you bet the quarter on it.",
      body: [
        "Objective validation matters most when the team that built the system is also the one reviewing it. Independent quality assurance brings a consistent, unbiased perspective across releases, environments, and system changes surfacing what's easy to miss when engineers are close to the code. ",
        "We work with your product and engineering teams to design test strategies around how you actually build: your stack, release cadence, and the business-critical paths where a failure would hurt most. Coverage gets built to hold across releases, not just pass the next one."
      ],
      quote: "Organizations with mature QE practices resolve production defects 6x faster and at 30x lower cost than teams catching the same issues post-release. — NIST"
    }
  },
  {
    title: "Performance, Resilience & Scalability",
    subtitle: "Ship version one. Then build the product it needs to become.",
    content: {
      type: "detail",
      serviceLabel: "PERFORMANCE, RESILIENCE & SCALABILITY",
      heading: "Find out if the idea works before you bet the quarter on it.",
      body: ["Objective validation matters most when the team that built the system is also the one reviewing it."]
    }
  },
  {
    title: "Quality Engineering & Independent Assurance",
    subtitle: "Your release shouldn't feel like a bet every time.",
    content: {
      type: "detail",
      serviceLabel: "QUALITY ENGINEERING & INDEPENDENT ASSURANCE",
      heading: "Find out if the idea works before you bet the quarter on it.",
      body: [
        "Objective validation matters most when the team that built the system is also the one reviewing it. Independent quality assurance brings a consistent, unbiased perspective across releases, environments, and system changes surfacing what's easy to miss when engineers are close to the code. ",
        "We work with your product and engineering teams to design test strategies around how you actually build: your stack, release cadence, and the business-critical paths where a failure would hurt most. Coverage gets built to hold across releases, not just pass the next one."
      ],
      quote: "Organizations with mature QE practices resolve production defects 6x faster and at 30x lower cost than teams catching the same issues post-release. — NIST"
    }
  },
  {
    title: "Governance, Compliance & Trust Assurance",
    subtitle: "The product works. Now make it work like it was built today.",
    content: {
      type: "detail",
      serviceLabel: "GOVERNANCE, COMPLIANCE & TRUST ASSURANCE",
      heading: "Find out if the idea works before you bet the quarter on it.",
      body: ["Objective validation matters most when the team that built the system is also the one reviewing it."]
    }
  },
  {
    title: "AI-first & Responsible Quality Engineering",
    subtitle: "Keep the business logic. Lose the technical debt holding it hostage.",
    content: {
      type: "detail",
      serviceLabel: "AI-FIRST & RESPONSIBLE QUALITY ENGINEERING",
      heading: "Find out if the idea works before you bet the quarter on it.",
      body: ["Objective validation matters most when the team that built the system is also the one reviewing it."]
    }
  }
];
function DetailPanel({ content }) {
  return /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 24, width: "100%", flex: 1 }, children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "flex-start",
          width: "100%",
          flexShrink: 0
        },
        children: [
          /* @__PURE__ */ jsx(
            "p",
            {
              style: {
                fontFamily: sans$6,
                fontWeight: 600,
                fontSize: 14,
                lineHeight: "20px",
                color: "#949494",
                margin: 0,
                width: "100%"
              },
              children: content.serviceLabel
            }
          ),
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start", width: "100%", flexShrink: 0 }, children: [
            /* @__PURE__ */ jsx(
              "h3",
              {
                style: {
                  fontFamily: sans$6,
                  fontWeight: 600,
                  fontSize: 24,
                  lineHeight: "32px",
                  color: red$6,
                  margin: 0,
                  width: "100%"
                },
                children: content.heading
              }
            ),
            /* @__PURE__ */ jsx(
              "p",
              {
                style: {
                  fontFamily: sans$6,
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: "26px",
                  color: "#5C5C5C",
                  margin: 0,
                  width: "100%",
                  whiteSpace: "pre-wrap"
                },
                children: content.body.join("\n\n")
              }
            )
          ] })
        ]
      }
    ),
    content.quote && /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          backgroundColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "14px 16px",
          flexShrink: 0,
          width: "100%",
          boxSizing: "border-box"
        },
        children: /* @__PURE__ */ jsx(
          "p",
          {
            style: {
              fontFamily: sans$6,
              fontWeight: 600,
              fontSize: 16,
              lineHeight: "28px",
              color: "#383838",
              margin: 0,
              flex: "1 0 0",
              minWidth: 0
            },
            children: content.quote
          }
        )
      }
    )
  ] });
}
function SpecPanel({ content }) {
  return /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 24 }, children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$6, fontWeight: 600, fontSize: 14, lineHeight: "20px", color: red$6, margin: "0 0 12px" }, children: "IMPACT" }),
      /* @__PURE__ */ jsx("ul", { style: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }, children: content.impact.map((item, i) => /* @__PURE__ */ jsxs("li", { style: { display: "flex", gap: 12, alignItems: "flex-start" }, children: [
        /* @__PURE__ */ jsx("span", { style: { flexShrink: 0, width: 22, height: 22, borderRadius: "50%", backgroundColor: "#E1E0E0", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: sans$6, fontWeight: 600, fontSize: 11, color: "#5C5C5C" }, children: i + 1 }),
        /* @__PURE__ */ jsx("span", { style: { fontFamily: sans$6, fontWeight: 500, fontSize: 14, lineHeight: "22px", color: "#1E1E1E" }, children: item })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$6, fontWeight: 600, fontSize: 14, lineHeight: "20px", color: red$6, margin: "0 0 12px" }, children: "TECH STACK" }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: 8 }, children: content.techStack.map((tag) => /* @__PURE__ */ jsx("span", { style: { fontFamily: sans$6, fontWeight: 500, fontSize: 14, lineHeight: "20px", color: "#1E1E1E", border: "1px solid #E1E0E0", borderRadius: 37, padding: "5px 14px" }, children: tag }, tag)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$6, fontWeight: 600, fontSize: 14, lineHeight: "20px", color: red$6, margin: "0 0 12px" }, children: "CAPABILITIES" }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: 8 }, children: content.capabilities.map((tag) => /* @__PURE__ */ jsx("span", { style: { fontFamily: sans$6, fontWeight: 500, fontSize: 14, lineHeight: "20px", color: "#1E1E1E", border: "1px solid #E1E0E0", borderRadius: 37, padding: "5px 14px" }, children: tag }, tag)) })
    ] })
  ] });
}
function ContentPanel({ content }) {
  return content.type === "detail" ? /* @__PURE__ */ jsx(DetailPanel, { content }) : /* @__PURE__ */ jsx(SpecPanel, { content });
}
function ItemRow({
  item,
  isActive,
  onClick
}) {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick,
      "aria-expanded": isActive,
      style: {
        width: "100%",
        display: "flex",
        gap: 24,
        alignItems: "center",
        padding: "20px 16px",
        backgroundColor: isActive ? "#F5F5F5" : "transparent",
        borderLeft: isActive ? `4px solid ${red$6}` : "4px solid transparent",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        flexShrink: 0,
        boxSizing: "border-box"
      },
      children: [
        /* @__PURE__ */ jsxs("div", { style: { position: "relative", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: [
          /* @__PURE__ */ jsx("div", { style: { backgroundColor: "#E1E0E0", borderRadius: 32, width: 28, height: 28 } }),
          /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: isActive ? red$6 : "#383838",
                borderRadius: 32,
                width: 16,
                height: 16
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", flex: "1 0 0", flexDirection: "column", alignItems: "flex-start", minWidth: 0 }, children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              style: {
                fontFamily: sans$6,
                fontWeight: 600,
                fontSize: 20,
                lineHeight: "28px",
                color: "#383838",
                whiteSpace: "normal",
                wordBreak: "break-word"
              },
              children: item.title
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              style: {
                fontFamily: sans$6,
                fontWeight: 500,
                fontSize: 16,
                lineHeight: "24px",
                color: "#5C5C5C",
                width: "100%"
              },
              children: item.subtitle
            }
          )
        ] })
      ]
    }
  );
}
function DesktopAccordion({
  items,
  activeIndex,
  setActiveIndex
}) {
  const active = items[activeIndex];
  return /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "flex-start", gap: 40 }, children: [
    /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 24, alignItems: "stretch", flexShrink: 0, width: "min(573px, 48%)" }, children: items.map((item, i) => /* @__PURE__ */ jsx(ItemRow, { item, isActive: activeIndex === i, onClick: () => setActiveIndex(i) }, i)) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        "data-node-id": "2043:4924",
        style: {
          backgroundColor: "#F5F5F5",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          minHeight: 480,
          alignItems: "flex-start",
          padding: 24,
          flex: 1,
          minWidth: 0,
          boxSizing: "border-box"
        },
        children: active && /* @__PURE__ */ jsx(ContentPanel, { content: active.content })
      }
    )
  ] });
}
function MobileAccordion({
  items,
  activeIndex,
  setActiveIndex
}) {
  return /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 16, width: "100%", alignItems: "stretch" }, children: items.map((item, i) => {
    const isActive = activeIndex === i;
    return /* @__PURE__ */ jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsx(ItemRow, { item, isActive, onClick: () => setActiveIndex(isActive ? null : i) }),
      isActive && /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            backgroundColor: "#F5F5F5",
            borderLeft: `4px solid ${red$6}`,
            display: "flex",
            flexDirection: "column",
            gap: 24,
            alignItems: "flex-start",
            padding: 24,
            width: "100%",
            boxSizing: "border-box"
          },
          children: /* @__PURE__ */ jsx(ContentPanel, { content: item.content })
        }
      )
    ] }, i);
  }) });
}
function Accordion({
  items = defaultItems,
  defaultActiveIndex = 2,
  className = "",
  style
}) {
  const { isDesktop } = useBreakpoint();
  const [desktopActive, setDesktopActive] = useState(defaultActiveIndex);
  const [mobileActive, setMobileActive] = useState(null);
  return /* @__PURE__ */ jsx("div", { className, "data-node-id": "38:412", style: { width: "100%", ...style }, children: isDesktop ? /* @__PURE__ */ jsx(DesktopAccordion, { items, activeIndex: desktopActive, setActiveIndex: setDesktopActive }) : /* @__PURE__ */ jsx(MobileAccordion, { items, activeIndex: mobileActive, setActiveIndex: setMobileActive }) });
}
const sans$5 = '"General Sans", system-ui, -apple-system, sans-serif';
const serif$5 = '"Roboto Serif", Georgia, serif';
const red$5 = "#ED2939";
const dark1$5 = "#1B1B1B";
const CornerTL$5 = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, left: 0, width: 118, height: 10, background: red$5, pointerEvents: "none", zIndex: 2 } }),
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, left: 0, width: 10, height: 118, background: red$5, pointerEvents: "none", zIndex: 2 } })
] });
const CornerBR$5 = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, right: 0, width: 118, height: 10, background: red$5, pointerEvents: "none", zIndex: 2 } }),
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, right: 0, width: 10, height: 118, background: red$5, pointerEvents: "none", zIndex: 2 } })
] });
const accordionItems$5 = [
  {
    title: "Quality Engineering & Independent Assurance",
    subtitle: "Objective validation across releases, environments, and system changes — designed around how you actually build.",
    content: {
      type: "detail",
      serviceLabel: "QUALITY ENGINEERING & INDEPENDENT ASSURANCE",
      heading: "Your release shouldn't feel like a bet every time.",
      body: [
        "Objective validation matters most when the team that built the system is also the one reviewing it. Independent QA brings a consistent, unbiased perspective across releases, environments, and system changes. We design test strategies around how you actually build: your stack, release cadence, and the business-critical paths where a failure would hurt most.",
        "Organizations with mature QE practices resolve production defects 6x faster and at 30x lower cost than teams catching the same issues post-release. — NIST"
      ]
    }
  },
  {
    title: "Continuous Quality & QAOps Engineering",
    subtitle: "Quality built into CI/CD pipelines — from design to release, risk surfaces early where it's cheapest to fix.",
    content: {
      type: "detail",
      serviceLabel: "CONTINUOUS QUALITY & QAOPS ENGINEERING",
      heading: "Quality that lives in the pipeline — from design to release.",
      body: [
        "Functional, non-functional, API, and regression testing shouldn't wait for the build to finish. Embedding quality into CI/CD pipelines means risk surfaces early, where it's cheapest to fix. We build Quality as Code: automated test suites integrated into the pipeline, risk-based coverage, and real-time observability at every stage.",
        "Teams with QAOps-integrated pipelines report up to 40% fewer production incidents and measurable improvements in release frequency and defect escape rates. — World Quality Report"
      ]
    }
  },
  {
    title: "Performance, Resilience & Scalability",
    subtitle: "Validate system behavior under real load, resilience when dependencies fail, and behavior at scale.",
    content: {
      type: "detail",
      serviceLabel: "PERFORMANCE, RESILIENCE & SCALABILITY",
      heading: "Know how your system behaves before your users find out.",
      body: [
        "Staging environments don't tell the whole truth. Performance under real load, resilience when dependencies fail, and behavior at scale are questions staging can't fully answer. We validate system performance against real-world usage patterns — load and stress testing, chaos engineering for cloud-native environments, scalability benchmarking as traffic and data volumes grow.",
        "Organizations that invest in performance and resilience engineering report 50–70% reduction in unplanned downtime and significantly lower cloud cost overruns at scale. — Gartner"
      ]
    }
  },
  {
    title: "Governance, Compliance & Trust Assurance",
    subtitle: "Compliance-as-code for HIPAA, FDA, SOC 2, WCAG, and the EU AI Act — built into delivery from the start.",
    content: {
      type: "detail",
      serviceLabel: "GOVERNANCE, COMPLIANCE & TRUST ASSURANCE",
      heading: "The audit doesn't start when the auditor arrives.",
      body: [
        "In regulated industries — healthcare, fintech, pharma, government — compliance isn't a final checkpoint. HIPAA, PHI, PCI-DSS, FDA, GDPR, SOC 2, WCAG accessibility, and the EU AI Act each carry validation standards that have to be mapped into the test strategy from the start. We build compliance-as-code: Validation Master Plans, security and accessibility testing embedded in delivery, and documentation that holds up under scrutiny.",
        "Compliance-related defects identified post-release cost 4–5x more to remediate than those caught during design and requirements validation. — NIST"
      ]
    }
  },
  {
    title: "AI-First & Responsible Quality Engineering",
    subtitle: "Validate model outputs, detect drift, test for bias, and build agentic test automation that adapts as systems evolve.",
    content: {
      type: "detail",
      serviceLabel: "AI-FIRST & RESPONSIBLE QUALITY ENGINEERING",
      heading: "Your AI ships confident. Not because you hoped it was ready — because you tested it that way.",
      body: [
        "AI systems don't fail the way conventional software fails. Model outputs drift. Behavior shifts under edge cases and adversarial inputs no predefined test scenario anticipated. Bias surfaces in production. We validate model outputs, detect drift early, test for bias and responsible AI compliance, and build agentic test automation that uses AI to generate cases, self-heal scripts, and adapt coverage as systems evolve.",
        "Gartner predicts 75%+ of enterprises will incorporate GenAI-driven testing by 2026. Organizations with structured AI validation practices significantly outperform peers on production reliability."
      ]
    }
  }
];
const howCards$5 = [
  { title: "Embedded From Day One.", body: "Quality strategy gets shaped alongside engineering and product before the first test case is written." },
  { title: "Capability Transfers.", body: "Frameworks, tooling, and methodology are documented and handed over as working knowledge — not as artifacts nobody can explain." },
  { title: "Alignment Before Delivery.", body: "We work within what serves the product and business and get alignment on what needs to change before it becomes a problem." },
  { title: "Standards That Hold.", body: "Quality benchmarks are set at the start and maintained through delivery. They don't flex when timelines get tight." }
];
const proofCards$5 = [
  { tags: "FINANCIAL SERVICES • QE AUTOMATION", title: "2x Faster Dashboard Validation", excerpt: "Automated validation across 20+ critical dashboards replaced manual checks at a global investment bank, improving data accuracy and enabling faster, more reliable decision-making." },
  { tags: "FINANCIAL SERVICES • TEST AUTOMATION", title: "50% Faster Testing Cycles", excerpt: "Automated 400+ Salesforce test scenarios to reduce testing effort, accelerate releases, and improve system reliability across critical workflows at a global investment bank." },
  { tags: "MANUFACTURING • QUALITY ENGINEERING", title: "From Manual Testing to Scalable Automation", excerpt: "Introduced automated testing at Glidewell Labs without impacting active projects, reducing manual effort and enabling faster, more reliable releases." }
];
const painCards$5 = [
  { heading: "We keep finding issues too late.", body: "Testing happens at the end. The build is already done, the release is already scheduled, and the defects showing up now should have been caught three sprints ago." },
  { heading: "Automation suite exists. It just doesn't help.", body: "Coverage numbers look reasonable on paper. But the suite is brittle, maintenance is constant, and half the team isn't sure what the tests are actually validating anymore." },
  { heading: "We found out about the compliance gap at the wrong moment.", body: "The audit window opened or the submission deadline arrived, and the validation documentation wasn't where it needed to be." },
  { heading: "We tested it thoroughly. So why doesn't it behave the way it did?", body: "The model passed every evaluation. Staging looked good. But in production, outputs drift, edge cases surface, and guardrails show gaps under real user behavior." }
];
function QualityEngineering() {
  const { isMobile, isTablet } = useBreakpoint();
  const inner = {
    maxWidth: 1440,
    margin: "0 auto",
    padding: isMobile ? "48px 16px" : isTablet ? "60px 32px" : "80px 80px"
  };
  const d1 = (color) => ({
    fontFamily: serif$5,
    fontSize: isMobile ? 26 : isTablet ? 34 : 48,
    lineHeight: isMobile ? "34px" : isTablet ? "42px" : "52px",
    fontWeight: 500,
    margin: 0,
    color: color ?? "#1E1E1E"
  });
  const d2 = (color) => ({
    fontFamily: serif$5,
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
        title: "Quality Engineering & Automation — Technossus",
        description: "Accelerate releases with confidence. Technossus builds AI-augmented QA automation, testing frameworks, and observability pipelines.",
        canonicalPath: "/services/quality-engineering",
        keywords: "quality engineering, test automation, QA, software testing, observability",
        jsonLd: breadcrumbSchema([{ name: "Home", url: "https://newtechnossus-v2.vercel.app" }, { name: "Services", url: "https://newtechnossus-v2.vercel.app/services" }, { name: "Quality Engineering", url: "https://newtechnossus-v2.vercel.app/services/quality-engineering" }])
      }
    ),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 1440, margin: "0 auto", padding: isMobile ? "32px 16px 48px" : isTablet ? "40px 32px 60px" : "40px 80px 80px" }, children: [
      /* @__PURE__ */ jsx(Breadcrumb, { items: [
        { label: "Home", href: "/" },
        { label: "Service Offerings", href: "/services" },
        { label: "Quality Engineering & Automation", active: true }
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 32 : 60, marginTop: 40 }, children: [
        /* @__PURE__ */ jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 32 }, children: [
          /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$5, fontWeight: 600, fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", color: "#ADADAD", margin: 0 }, children: "QUALITY ENGINEERING AND AUTOMATION" }),
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("h1", { style: d1(), children: [
            "You know what's broken.",
            " ",
            /* @__PURE__ */ jsx("span", { style: { color: red$5 }, children: "The problem is what you don't know yet." })
          ] }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 80, children: /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$5, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: "#5C5C5C", margin: 0, maxWidth: 560 }, children: "Most quality programs are built to catch what already went wrong. We work with your team to build the kind of intelligence that finds problems before your users do, and the kind of automation that holds up long after we're gone." }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 120, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 16, flexWrap: "wrap" }, children: [
            /* @__PURE__ */ jsx(Button, { variant: "primary", label: "Show us the problem", href: "#" }),
            /* @__PURE__ */ jsx(Button, { variant: "secondary", label: "See How We Work", href: "#how" })
          ] }) })
        ] }),
        !isMobile && /* @__PURE__ */ jsx("div", { style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: isTablet ? 300 : 460 }, children: /* @__PURE__ */ jsx("img", { src: imgHero, alt: "", style: { width: "100%", height: isTablet ? 300 : 460, objectFit: "cover", display: "block" } }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { style: { borderTop: "1px solid #E8E8E8", background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 1440, margin: "0 auto", padding: isMobile ? "24px 16px" : "32px 80px", display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }, children: [
      /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$5, fontSize: 13, fontWeight: 600, letterSpacing: ".12em", color: "#ADADAD", textTransform: "uppercase" }, children: "Trusted By" }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: isMobile ? 24 : 72, flexWrap: "wrap" }, children: ["HOULIHAN LOKEY", "ASIAN PAINTS", "MDx", "WORD & BROWN"].map((name) => /* @__PURE__ */ jsx("span", { style: { fontFamily: sans$5, fontSize: 13, fontWeight: 700, color: "#888", filter: "grayscale(100%)", opacity: 0.65 }, children: name }, name)) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: { maxWidth: 1440, margin: "0 auto", marginBottom: isMobile ? 12 : 16, padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 80px", background: "#fff" }, children: /* @__PURE__ */ jsx(Tag, { label: "THE SHIFT", variant: "dark" }) }),
    /* @__PURE__ */ jsxs("section", { style: { background: dark1$5, position: "relative", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx(CornerTL$5, {}),
      /* @__PURE__ */ jsx(CornerBR$5, {}),
      /* @__PURE__ */ jsx("div", { style: inner, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", gap: 48, alignItems: "flex-start", marginTop: 0, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxs("div", { style: { flex: 1, minWidth: isMobile ? "100%" : 320 }, children: [
          /* @__PURE__ */ jsxs("h2", { style: d2("#fff"), children: [
            "Quality doesn't start at the end of the build. That's just where",
            " ",
            /* @__PURE__ */ jsx("span", { style: { color: red$5 }, children: "quality failures get identified." })
          ] }),
          /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 20, marginTop: 28 }, children: [
            "Testing has always been the part of the delivery cycle that absorbs everyone else's delays and still gets blamed when something ships broken. Engineers are moving faster than ever, and the gap between release velocity and quality confidence is widening, not closing.",
            "AI is changing the economics of that gap. Not by replacing QA engineers, but by giving them the kind of leverage that actually matches the pace they're being asked to work at. We work alongside your team to build that leverage — through automation that transfers, tooling your team can own, and a quality practice that compounds instead of decaying."
          ].map((p, i) => /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$5, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: "#B5B5B5", margin: 0 }, children: p }, i)) })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, flex: isMobile ? void 0 : "0 0 440px", width: isMobile ? "100%" : void 0 }, children: [
          { num: "85%", desc: "of defects that reach production were detectable earlier in the cycle, at a fraction of the cost to fix.", src: "— IBM Systems Sciences Institute" },
          { num: "26%", desc: "of organizations report test automation coverage declined over two years, even as release frequency increased.", src: "— World Quality Report" },
          { num: "100s", desc: "of automation suites built and maintained across client teams — none handed over as shelf-ware.", src: "— Technossus Engagements" },
          { num: "Every engagement", desc: "closes with your team owning the practice, not dependent on us to run it.", src: "— Technossus Internal" }
        ].map((s) => /* @__PURE__ */ jsxs("div", { style: { background: "#262626", border: "1px solid #343434", padding: isMobile ? 16 : 24, display: "flex", flexDirection: "column", gap: 12 }, children: [
          /* @__PURE__ */ jsx(Stats, { value: s.num, label: "" }),
          /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$5, fontSize: 13, lineHeight: 1.6, color: "#9B9B9B", margin: 0 }, children: s.desc }),
          /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$5, fontSize: 11, color: "#5C5C5C", margin: 0 }, children: s.src })
        ] }, s.num)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
      /* @__PURE__ */ jsx(Tag, { label: "SERVICE OFFERINGS" }),
      /* @__PURE__ */ jsxs("h2", { style: { ...d2(), marginTop: 16 }, children: [
        "Release confidence, compliance readiness, and",
        " ",
        /* @__PURE__ */ jsx("span", { style: { color: red$5 }, children: "AI quality built in from the start." })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { marginTop: 48 }, children: /* @__PURE__ */ jsx(Accordion, { items: accordionItems$5, defaultActiveIndex: 2 }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "how", style: { background: "#F5F5F5" }, children: /* @__PURE__ */ jsx("div", { style: inner, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 32 : 64, alignItems: "flex-start", flexWrap: "wrap" }, children: [
      /* @__PURE__ */ jsxs("div", { style: { flex: 1, minWidth: isMobile ? "100%" : 320 }, children: [
        /* @__PURE__ */ jsx(Tag, { label: "HOW WE WORK" }),
        /* @__PURE__ */ jsxs("h2", { style: { ...d2(), marginTop: 16 }, children: [
          "We don't build a testing practice",
          " ",
          /* @__PURE__ */ jsx("span", { style: { color: red$5 }, children: "your team can't maintain." })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 20, marginTop: 28 }, children: [
          "Every engagement is designed around transfer, not dependency. Quality strategies, automation frameworks, and validation practices get built collaboratively, with the people who will own them involved from the first conversation. When delivery closes, the capability stays.",
          "Over 90% of Technossus clients continue working with us after the first engagement. Many have for over a decade. That's not a retention metric — it's what happens when a practice gets built right the first time."
        ].map((p, i) => /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$5, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: "#5C5C5C", margin: 0 }, children: p }, i)) })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { flex: 1, display: "grid", gridTemplateColumns: cols2, gap: 20, minWidth: isMobile ? "100%" : 320 }, children: howCards$5.map((card) => /* @__PURE__ */ jsxs("div", { style: { background: "#fff", padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12 }, children: [
        /* @__PURE__ */ jsx("div", { style: { color: red$5, fontSize: 24 }, children: "◈" }),
        /* @__PURE__ */ jsx("h3", { style: { fontFamily: sans$5, fontSize: 16, fontWeight: 700, color: "#1E1E1E", lineHeight: 1.4, margin: 0 }, children: card.title }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$5, fontSize: 14, lineHeight: 1.6, color: "#5C5C5C", margin: 0 }, children: card.body })
      ] }, card.title)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { style: { maxWidth: 1440, margin: "0 auto", marginBottom: isMobile ? 12 : 16, padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 80px", background: "#fff" }, children: /* @__PURE__ */ jsx(Tag, { label: "PROOF", variant: "dark" }) }),
    /* @__PURE__ */ jsxs("section", { style: { background: dark1$5, position: "relative", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx(CornerTL$5, {}),
      /* @__PURE__ */ jsx(CornerBR$5, {}),
      /* @__PURE__ */ jsxs("div", { style: inner, children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: isMobile ? "flex-start" : "flex-end", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", gap: 16, marginTop: 0, marginBottom: 40 }, children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h1", { style: d1("#fff"), children: [
              "Success ",
              /* @__PURE__ */ jsx("span", { style: { color: red$5 }, children: "stories." })
            ] }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$5, fontSize: 15, color: "#9B9B9B", marginTop: 10 }, children: "If any of these describe where your team is right now, we should talk." })
          ] }),
          /* @__PURE__ */ jsx("a", { href: "#", style: { fontFamily: sans$5, fontSize: 14, color: "#9B9B9B", textDecoration: "underline", whiteSpace: "nowrap", flexShrink: 0 }, children: "View All" })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: cols3, gap: 20 }, children: proofCards$5.map((card, i) => /* @__PURE__ */ jsx(Card, { mode: "dark", type: "insights", tags: card.tags, title: card.title, excerpt: card.excerpt, ctaLabel: "See How We Work" }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
      /* @__PURE__ */ jsx(Tag, { label: "SOUND FAMILIAR" }),
      /* @__PURE__ */ jsxs("h1", { style: { ...d1(), marginTop: 16 }, children: [
        "If any of these sound like your last project retrospective, we",
        " ",
        /* @__PURE__ */ jsx("span", { style: { color: red$5 }, children: "should talk." })
      ] }),
      /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$5, fontSize: 15, color: "#5C5C5C", marginTop: 12 }, children: "These aren't hypotheticals. They're the conversations we have most often." }),
      /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: cols2, gap: 24, marginTop: 48 }, children: painCards$5.map((card, i) => /* @__PURE__ */ jsxs("div", { style: { background: "#F5F5F5", padding: "32px 28px", display: "flex", flexDirection: "column", gap: 16 }, children: [
        /* @__PURE__ */ jsx("h3", { style: { fontFamily: sans$5, fontSize: 18, fontWeight: 700, color: "#1E1E1E", lineHeight: 1.4, margin: 0 }, children: card.heading }),
        /* @__PURE__ */ jsx("div", { style: { height: 2, background: red$5, width: 40 } }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$5, fontSize: 14, lineHeight: 1.7, color: "#5C5C5C", margin: 0 }, children: card.body })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx(
      CTABanner,
      {
        size: "large",
        label: "LET'S WORK ON IT TOGETHER",
        heading: "Ready to accelerate your digital & AI journey?",
        body: "Whether you're modernizing systems, building a new product, or scaling engineering, we're ready to collaborate.",
        primaryCta: "Schedule a Strategy Session →",
        secondaryCta: "Contact Us"
      }
    ),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } })
  ] });
}
const imgCardPhoto = "/assets/fbbad1d37f7a4e076de4d16631dc6863c6c4444a.png";
const sans$4 = '"General Sans", system-ui, -apple-system, sans-serif';
const serif$4 = '"Roboto Serif", Georgia, serif';
const red$4 = "#ED2939";
const dark1$4 = "#1B1B1B";
const CornerTL$4 = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, left: 0, width: 118, height: 10, background: red$4, pointerEvents: "none", zIndex: 2 } }),
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, left: 0, width: 10, height: 118, background: red$4, pointerEvents: "none", zIndex: 2 } })
] });
const CornerBR$4 = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, right: 0, width: 118, height: 10, background: red$4, pointerEvents: "none", zIndex: 2 } }),
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, right: 0, width: 10, height: 118, background: red$4, pointerEvents: "none", zIndex: 2 } })
] });
const accordionItems$4 = [
  {
    title: "AI Strategy & Readiness",
    subtitle: "Map where AI creates durable value, sequence use cases by impact, and align the organization around what's being built.",
    content: {
      type: "detail",
      serviceLabel: "AI STRATEGY & READINESS",
      heading: "Know where AI fits, and the pace your organization can actually absorb it.",
      body: [
        "Every AI engagement starts here. We map where AI creates durable value in your business, sequence the use cases by impact and readiness, and align the organization around what's being built and why. Strategy is the artifact your board signs off on. Readiness is the work that makes the strategy executable on the ground, at the pace your teams can carry.",
        "Organizations with a sequenced AI roadmap are significantly more likely to reach production outcomes within 18 months. McKinsey State of AI, 2025."
      ]
    }
  },
  {
    title: "Decision Intelligence",
    subtitle: "Predictive models and live data pipelines embedded into the workflows your leaders actually make decisions in.",
    content: {
      type: "detail",
      serviceLabel: "DECISION INTELLIGENCE",
      heading: "Decisions that land where your strategy said they would.",
      body: [
        "Your operating decisions — pricing, capacity, risk, market response — need real-time inputs from the data you already own. We build decision intelligence layers that combine predictive models, live data pipelines, and AI-driven insight into the workflows your leaders actually make calls in. No dashboards that require someone to translate.",
        "Decision-intelligence adopters report material improvement in decision cycle time across pricing, capacity, and risk functions. Gartner, 2025."
      ]
    }
  },
  {
    title: "Agentic Automation",
    subtitle: "AI agents that understand context, make decisions within guardrails, and coordinate work without constant human intervention.",
    content: {
      type: "detail",
      serviceLabel: "AGENTIC AUTOMATION",
      heading: "Work that coordinates itself, until it needs a human decision.",
      body: [
        "Process automation used to mean scripted workflows that broke when context changed. Agentic automation is different — AI agents that understand context, make decisions within guardrails, and coordinate work across systems without constant human intervention. We identify where agentic workflows unlock real capacity and build them into the platforms your teams already use.",
        "By 2027, 40% of enterprise applications will include task-specific AI agents embedded in core workflows. Gartner."
      ]
    }
  },
  {
    title: "Enterprise Generative AI",
    subtitle: "Copilots and assistants trained on your data, governed by your policy, and measured against the productivity lift they deliver.",
    content: {
      type: "detail",
      serviceLabel: "ENTERPRISE GENERATIVE AI",
      heading: "GenAI tools your teams actually use — because they actually help.",
      body: [
        "Copilots, internal assistants, and content generation tools are the GenAI surface your teams interact with every day. We build them into your workflow, trained on your data, governed by your policy, and measured against the productivity lift they deliver. Not demos. Not pilots. Tools that land on the desk and stay there because the team wants them.",
        "Copilots deliver 26–45% productivity gains when built into existing workflows, near zero when bolted on. GitHub / McKinsey, 2024–25."
      ]
    }
  },
  {
    title: "AI Governance, Risk & Data Security",
    subtitle: "Policy frameworks, model registries, usage guardrails, and audit trails wired into the deployment path.",
    content: {
      type: "detail",
      serviceLabel: "AI GOVERNANCE, RISK & DATA SECURITY",
      heading: "Board-defensible AI. From policy to production.",
      body: [
        "Every AI deployment in your organization now sits inside a governance gap that didn't exist three years ago. Model decisions have to be explainable to regulators. Data flows through LLMs have to be traceable. We put the governance layer in place: policy frameworks, model registries, usage guardrails, data boundary architecture, and audit trails wired into the deployment path.",
        "Governance gaps are the single largest blocker to scaling enterprise generative AI through 2027. Gartner, 2025."
      ]
    }
  },
  {
    title: "Innovation Labs & Prototyping",
    subtitle: "A working prototype in two weeks — to test whether an idea is worth scaling before you bet the strategy on it.",
    content: {
      type: "detail",
      serviceLabel: "INNOVATION LABS & PROTOTYPING",
      heading: "See it working, before you bet the strategy on it.",
      body: [
        "Not every strategic question needs a full engagement to answer. Innovation Labs is where we build a working prototype in two weeks that tests whether an idea is worth scaling. Walk in with a question. Walk out with a validated prototype, a clear read on what works, and a defensible answer to 'should we build this?'",
        "Every engagement starts with a two-day consulting investment at no cost — a pressure test on the problem, not a pitch."
      ]
    }
  }
];
const howCards$4 = [
  { title: "Your story to the board stays defensible.", body: "What you approved is what gets built — and you can explain every decision along the way, in the altitude your board operates at." },
  { title: "What gets built traces back to what you approved.", body: "No scope creep that lands on your desk at invoice time. Investment accountability is part of the delivery, not a risk we hand back." },
  { title: "Your organization moves at the pace it can absorb.", body: "Change management is part of the deliverable. Fast where the organization is ready, patient where it isn't, honest about which is which." },
  { title: "We tell you when fast is the right bet.", body: "Our job is strategic pace, not performance theater. We'll push when the window is open, and slow you down when speed is the wrong signal to the organization." }
];
const proofCards$4 = [
  { tags: "DOCUMENT INTELLIGENCE • AI / OCR", title: "AI-Powered OCR Engine Achieves ~95% Accuracy in Document Extraction", excerpt: "Document-heavy workflows required manual data entry, causing delays and inconsistencies. A proprietary OCR + NER engine now extracts and structures data from unstructured inputs with ~95% accuracy, enabling faster downstream processing." },
  { tags: "HEALTHCARE • PREDICTIVE AI", title: "Predictive Fatigue Modeling Prevents Operational Risk Before It Occurs", excerpt: "A healthcare organization lacked visibility into fatigue-related risks impacting workforce safety. A predictive analytics platform using biometric data now forecasts fatigue levels and triggers proactive alerts." },
  { tags: "SECURITY OPERATIONS • REAL-TIME AI", title: "Automated Threat Detection Reduces Security Processing Time from 8 Hours to Minutes", excerpt: "Manual monitoring of restricted premises delayed identification of unauthorized individuals. A real-time AI-based facial recognition system now detects and alerts on intrusions in under 10 minutes." }
];
const painCards$4 = [
  { heading: '"The steering committee keeps asking for AI transformation updates."', body: "You're not sure how to give them without sounding like nothing is happening, or like too much is happening unchecked." },
  { heading: '"Three different teams have deployed something AI-powered."', body: "You learned about two of them from a vendor invoice. Governance that used to be implicit in the process no longer is." },
  { heading: '"Your board asks how the AI strategy is going."', body: "You know the answer you want to give. You're not sure it's the one the data supports." },
  { heading: '"Your general counsel flagged model governance as a gap."', body: "No one in the organization owns the fix. The question has been on the agenda for two quarters." }
];
function AIBusiness() {
  const { isMobile, isTablet } = useBreakpoint();
  const inner = {
    maxWidth: 1440,
    margin: "0 auto",
    padding: isMobile ? "48px 16px" : isTablet ? "60px 32px" : "80px 80px"
  };
  const d1 = (color) => ({
    fontFamily: serif$4,
    fontSize: isMobile ? 26 : isTablet ? 34 : 48,
    lineHeight: isMobile ? "34px" : isTablet ? "42px" : "52px",
    fontWeight: 500,
    margin: 0,
    color: color ?? "#1E1E1E"
  });
  const d2 = (color) => ({
    fontFamily: serif$4,
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
        title: "AI Led Business Transformation — Technossus",
        description: "Technossus helps enterprises design and deploy AI-driven operating models — from strategy and agentic automation to GenAI and governance.",
        canonicalPath: "/services/ai-business-transformation",
        keywords: "AI business transformation, enterprise AI strategy, agentic automation, GenAI, LLM consulting",
        jsonLd: [breadcrumbSchema([{ name: "Home", url: "https://newtechnossus-v2.vercel.app" }, { name: "Services", url: "https://newtechnossus-v2.vercel.app/services" }, { name: "AI Business Transformation", url: "https://newtechnossus-v2.vercel.app/services/ai-business-transformation" }]), serviceSchema({ name: "AI Led Business Transformation", description: "End-to-end AI strategy and implementation for enterprise teams.", url: "https://newtechnossus-v2.vercel.app/services/ai-business-transformation" })]
      }
    ),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 1440, margin: "0 auto", padding: isMobile ? "32px 16px 48px" : isTablet ? "40px 32px 60px" : "40px 80px 80px" }, children: [
      /* @__PURE__ */ jsx(Breadcrumb, { items: [
        { label: "Home", href: "/" },
        { label: "Service Offerings", href: "/services" },
        { label: "AI-Led Business Transformation", active: true }
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 32 : 60, marginTop: 40 }, children: [
        /* @__PURE__ */ jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 32 }, children: [
          /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$4, fontWeight: 600, fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", color: "#ADADAD", margin: 0 }, children: "AI-LED BUSINESS TRANSFORMATION" }),
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("h1", { style: d1(), children: [
            "The AI strategy is approved, and the teams are moving. The question is whether",
            " ",
            /* @__PURE__ */ jsx("span", { style: { color: red$4 }, children: "the investment is actually working." })
          ] }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 80, children: /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$4, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: "#5C5C5C", margin: 0, maxWidth: 560 }, children: "Governance frameworks, investment accountability, and team alignment don't self-organize around an approved strategy. We work with your leadership team to make sure what's building across the organization actually lands where you said it would." }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 120, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 16, flexWrap: "wrap" }, children: [
            /* @__PURE__ */ jsx(Button, { variant: "primary", label: "Show us the problem", href: "#" }),
            /* @__PURE__ */ jsx(Button, { variant: "secondary", label: "See How We Work", href: "#" })
          ] }) })
        ] }),
        !isMobile && /* @__PURE__ */ jsx("div", { style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: isTablet ? 300 : 460 }, children: /* @__PURE__ */ jsx("img", { src: imgSvcAI, alt: "", style: { width: "100%", height: isTablet ? 300 : 460, objectFit: "cover", display: "block" } }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { style: { borderTop: "1px solid #E8E8E8" }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 1440, margin: "0 auto", padding: isMobile ? "24px 16px" : "32px 80px", display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }, children: [
      /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$4, fontSize: 13, fontWeight: 600, letterSpacing: ".12em", color: "#ADADAD", textTransform: "uppercase" }, children: "Trusted By" }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: isMobile ? 24 : 72, flexWrap: "wrap" }, children: ["TOYOTA FINANCIAL", "GE HEALTHCARE", "COMMONSPIRIT", "BIO-RAD", "ADAPTHEALTH"].map((name) => /* @__PURE__ */ jsx("span", { style: { fontFamily: sans$4, fontSize: 13, fontWeight: 700, color: "#888", filter: "grayscale(100%)", opacity: 0.65 }, children: name }, name)) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsxs("div", { style: { maxWidth: 1440, margin: "0 auto", padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 80px" }, children: [
      /* @__PURE__ */ jsx("div", { style: { marginBottom: isMobile ? 12 : 16 }, children: /* @__PURE__ */ jsx(Tag, { label: "THE SHIFT", variant: "dark" }) }),
      /* @__PURE__ */ jsxs("section", { style: { background: dark1$4, position: "relative", overflow: "hidden" }, children: [
        /* @__PURE__ */ jsx(CornerTL$4, {}),
        /* @__PURE__ */ jsx(CornerBR$4, {}),
        /* @__PURE__ */ jsx("div", { style: { padding: isMobile ? "40px 24px" : isTablet ? "48px 40px" : "56px 68px" }, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", gap: 48, alignItems: "flex-start", marginTop: 0, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ jsxs("div", { style: { flex: 1, minWidth: isMobile ? "100%" : 320 }, children: [
            /* @__PURE__ */ jsxs("h2", { style: d2("#fff"), children: [
              "The constraint used to be capability. Now the constraint",
              " ",
              /* @__PURE__ */ jsx("span", { style: { color: red$4 }, children: "is coherence." })
            ] }),
            /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 20, marginTop: 28 }, children: [
              "Three years ago, deploying AI was a specialist act. It required a data science team, procurement review, architecture review, an executive sponsor, and a budget line. Governance was implicit in the deployment process. Nothing reached production without a lot of eyes on it.",
              "That infrastructure has dissolved. AI capability now arrives through every SaaS tool and every agentic workflow. Any team that can write a prompt can deploy it. The executive didn't lose visibility because decisions went wrong — it's gone because the process that used to produce visibility isn't there anymore.",
              "Governance that used to be implicit now has to be explicit. It has to be approved, tracked, and visible at the altitude the board operates at. That work doesn't self-organize around momentum. It's what we build with your leadership team."
            ].map((p, i) => /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$4, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: "#B5B5B5", margin: 0 }, children: p }, i)) })
          ] }),
          /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr", gap: 20, flex: isMobile ? void 0 : "0 0 440px", width: isMobile ? "100%" : void 0 }, children: [
            { num: "26%", desc: "of AI initiatives produce measurable business value at scale. The rest stall in pilots or deploy without a path to outcome." },
            { num: "~70%", desc: "of large organizations cannot produce a single inventory of AI in production. Shadow deployment is now the default state." },
            { num: "5 of 5", desc: "delivery lines configured to every engagement — Product, Data, Cloud, Quality, Experience Design." },
            { num: "Week 1", desc: "Your leadership team sees what's being built, how governance is structured, and what they'll own at handoff." }
          ].map((s) => /* @__PURE__ */ jsxs("div", { style: { background: "#262626", border: "1px solid #343434", padding: isMobile ? 16 : 24, display: "flex", flexDirection: "column", gap: 12 }, children: [
            /* @__PURE__ */ jsx("div", { style: { fontFamily: serif$4, fontSize: isMobile ? 28 : 36, lineHeight: 1, fontWeight: 600, color: red$4 }, children: s.num }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$4, fontSize: 13, lineHeight: 1.6, color: "#9B9B9B", margin: 0 }, children: s.desc })
          ] }, s.num)) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
      /* @__PURE__ */ jsx(Tag, { label: "SERVICE OFFERINGS" }),
      /* @__PURE__ */ jsxs("h2", { style: { ...d2(), marginTop: 16 }, children: [
        "Your strategy, configured across the delivery ",
        " ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { style: { color: red$4 }, children: "that makes it land." })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { marginTop: 48 }, children: /* @__PURE__ */ jsx(Accordion, { items: accordionItems$4, defaultActiveIndex: 1 }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsx("div", { style: inner, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 32 : 64, alignItems: "flex-start", flexWrap: "wrap" }, children: [
      /* @__PURE__ */ jsxs("div", { style: { flex: 1, minWidth: isMobile ? "100%" : 320 }, children: [
        /* @__PURE__ */ jsx(Tag, { label: "HOW WE WORK" }),
        /* @__PURE__ */ jsxs("h2", { style: { ...d2(), marginTop: 16 }, children: [
          "We don't deliver an AI transformation and leave you to",
          " ",
          /* @__PURE__ */ jsx("span", { style: { color: red$4 }, children: "explain it." })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 20, marginTop: 28 }, children: [
          "We work embedded with your leadership team — making governance visible, tracing investment to outcome, and transferring the thread to your people as we build. When the engagement ends, your team owns the framework, understands the architecture, and can defend it without us in the room.",
          "AI transformation creates as many questions as answers for executives, for middle management, for the teams doing the work. Our approach is designed to bring your organization along, not leave it dependent on us."
        ].map((p, i) => /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$4, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: "#5C5C5C", margin: 0 }, children: p }, i)) })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { flex: 1, display: "grid", gridTemplateColumns: cols2, gap: 20, minWidth: isMobile ? "100%" : 320 }, children: howCards$4.map((card) => /* @__PURE__ */ jsxs("div", { style: { background: "#F2F2F2", padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12 }, children: [
        /* @__PURE__ */ jsx("div", { style: { color: red$4, fontSize: 24 }, children: "◈" }),
        /* @__PURE__ */ jsx("h3", { style: { fontFamily: sans$4, fontSize: 16, fontWeight: 700, color: "#1E1E1E", lineHeight: 1.4, margin: 0 }, children: card.title }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$4, fontSize: 14, lineHeight: 1.6, color: "#5C5C5C", margin: 0 }, children: card.body })
      ] }, card.title)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          maxWidth: 1440,
          margin: "0 auto",
          padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 80px"
        },
        children: [
          /* @__PURE__ */ jsx("div", { style: { marginBottom: isMobile ? 12 : 16 }, children: /* @__PURE__ */ jsx(Tag, { label: "PROOF", variant: "dark" }) }),
          /* @__PURE__ */ jsxs(
            "section",
            {
              style: {
                background: dark1$4,
                position: "relative",
                overflow: "hidden"
              },
              children: [
                /* @__PURE__ */ jsx(CornerTL$4, {}),
                /* @__PURE__ */ jsx(CornerBR$4, {}),
                /* @__PURE__ */ jsxs("div", { style: { padding: isMobile ? "40px 24px" : isTablet ? "48px 40px" : "56px 68px" }, children: [
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: isMobile ? "flex-start" : "flex-end",
                        flexDirection: isMobile ? "column" : "row",
                        justifyContent: "space-between",
                        gap: 16,
                        marginBottom: 40
                      },
                      children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsxs("h1", { style: d1("#fff"), children: [
                            "Success ",
                            /* @__PURE__ */ jsx("span", { style: { color: red$4 }, children: "stories." })
                          ] }),
                          /* @__PURE__ */ jsx(
                            "p",
                            {
                              style: {
                                fontFamily: sans$4,
                                fontSize: 15,
                                color: "#9B9B9B",
                                marginTop: 10
                              },
                              children: "If any of these describe where your team is right now, we should talk."
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsx(
                          "a",
                          {
                            href: "#",
                            style: {
                              fontFamily: sans$4,
                              fontSize: 14,
                              color: "#9B9B9B",
                              textDecoration: "underline",
                              whiteSpace: "nowrap",
                              flexShrink: 0
                            },
                            children: "View All"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      style: {
                        display: "grid",
                        gridTemplateColumns: cols3,
                        gap: 20
                      },
                      children: proofCards$4.map((card, i) => /* @__PURE__ */ jsxs(
                        "article",
                        {
                          style: {
                            background: "#262626",
                            border: "1px solid #343434",
                            display: "flex",
                            flexDirection: "column"
                          },
                          children: [
                            /* @__PURE__ */ jsx("img", { src: imgCardPhoto, alt: "", style: { width: "100%", height: 200, objectFit: "cover", display: "block" } }),
                            /* @__PURE__ */ jsxs(
                              "div",
                              {
                                style: {
                                  padding: "24px",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: 12,
                                  flex: 1
                                },
                                children: [
                                  /* @__PURE__ */ jsx(
                                    "div",
                                    {
                                      style: {
                                        fontFamily: sans$4,
                                        fontSize: 11,
                                        fontWeight: 600,
                                        letterSpacing: ".1em",
                                        textTransform: "uppercase",
                                        color: "#767676"
                                      },
                                      children: card.tags
                                    }
                                  ),
                                  /* @__PURE__ */ jsx(
                                    "h3",
                                    {
                                      style: {
                                        fontFamily: sans$4,
                                        fontSize: 18,
                                        fontWeight: 700,
                                        color: "#fff",
                                        lineHeight: 1.4,
                                        margin: 0
                                      },
                                      children: card.title
                                    }
                                  ),
                                  /* @__PURE__ */ jsx(
                                    "p",
                                    {
                                      style: {
                                        fontFamily: sans$4,
                                        fontSize: 14,
                                        lineHeight: 1.6,
                                        color: "#9B9B9B",
                                        flex: 1,
                                        margin: 0
                                      },
                                      children: card.excerpt
                                    }
                                  ),
                                  /* @__PURE__ */ jsx(
                                    "a",
                                    {
                                      href: "#",
                                      style: {
                                        fontFamily: sans$4,
                                        fontSize: 14,
                                        fontWeight: 700,
                                        color: red$4,
                                        textDecoration: "underline",
                                        marginTop: 8
                                      },
                                      children: "See How We Work →"
                                    }
                                  )
                                ]
                              }
                            )
                          ]
                        },
                        i
                      ))
                    }
                  )
                ] })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
      /* @__PURE__ */ jsx(Tag, { label: "SOUND FAMILIAR" }),
      /* @__PURE__ */ jsxs("h1", { style: { ...d1(), marginTop: 16 }, children: [
        "If any of these sound like your last project retrospective, we",
        " ",
        /* @__PURE__ */ jsx("span", { style: { color: red$4 }, children: "should talk." })
      ] }),
      /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$4, fontSize: 15, color: "#5C5C5C", marginTop: 12 }, children: "These aren't hypotheticals. They're the conversations we have most often." }),
      /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: cols2, gap: 24, marginTop: 48 }, children: painCards$4.map((card, i) => /* @__PURE__ */ jsxs("div", { style: { background: "#F2F2F2", padding: "32px 28px", display: "flex", flexDirection: "column", gap: 16 }, children: [
        /* @__PURE__ */ jsx("h3", { style: { fontFamily: sans$4, fontSize: 18, fontWeight: 700, color: "#1E1E1E", lineHeight: 1.4, margin: 0 }, children: card.heading }),
        /* @__PURE__ */ jsx("div", { style: { height: 2, background: red$4, width: 40 } }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$4, fontSize: 14, lineHeight: 1.7, color: "#5C5C5C", margin: 0 }, children: card.body })
      ] }, i)) }),
      /* @__PURE__ */ jsxs("div", { style: { background: dark1$4, padding: isMobile ? "32px 20px" : "48px", marginTop: 48, display: "flex", flexDirection: "column", gap: 20 }, children: [
        /* @__PURE__ */ jsx("h3", { style: { fontFamily: serif$4, fontSize: isMobile ? 22 : 28, fontWeight: 600, color: "#fff", margin: 0 }, children: "Bring us your toughest transformation problem." }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$4, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: "#B5B5B5", maxWidth: 640, margin: 0 }, children: "Two days with a Technossus partner and a senior team. At no cost. Pressure-test the problem on the table — the governance gap, the adoption curve, the investment that isn't landing, the strategy that needs a second read. Walk out with a clear view on whether a larger engagement would help, and what the shape of it would be." }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Button, { variant: "primary", label: "Bring us your problem →", href: "#" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: { maxWidth: 1440, margin: "0 auto", padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 80px" }, children: /* @__PURE__ */ jsx(
      CTABanner,
      {
        size: "large",
        label: "LET'S WORK ON IT TOGETHER",
        heading: "Ready to accelerate your digital & AI journey?",
        body: "Whether you're modernizing systems, building a new product, or scaling engineering, we're ready to collaborate.",
        primaryCta: "Talk to Expert →",
        secondaryCta: "Contact Us",
        style: { width: "100%", margin: 0 }
      }
    ) }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } })
  ] });
}
const sans$3 = '"General Sans", system-ui, -apple-system, sans-serif';
const serif$3 = '"Roboto Serif", Georgia, serif';
const red$3 = "#ED2939";
const dark1$3 = "#1B1B1B";
const CornerTL$3 = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, left: 0, width: 118, height: 10, background: red$3, pointerEvents: "none", zIndex: 2 } }),
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, left: 0, width: 10, height: 118, background: red$3, pointerEvents: "none", zIndex: 2 } })
] });
const CornerBR$3 = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, right: 0, width: 118, height: 10, background: red$3, pointerEvents: "none", zIndex: 2 } }),
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, right: 0, width: 10, height: 118, background: red$3, pointerEvents: "none", zIndex: 2 } })
] });
const accordionItems$3 = [
  {
    title: "Conversational Analytics",
    subtitle: "Your leadership team asks a question and gets an answer in seconds — from your own data, in plain language.",
    content: {
      type: "detail",
      serviceLabel: "CONVERSATIONAL ANALYTICS",
      heading: "Speak to Your Data",
      body: [
        "Your leadership team asks a question and gets an answer in seconds — from your own data, in plain language. No SQL. No ticket to the BI team. Your analysts stop fielding repetitive requests and focus on the strategic analysis that influences decisions. Contextual business stories, not just charts.",
        "Organizations implementing conversational analytics report 60–70% reduction in ad-hoc requests — freeing data teams for higher-value work."
      ]
    }
  },
  {
    title: "Data Engineering & Modernization",
    subtitle: "Automate the plumbing so your data team focuses on architecture, modeling, and the analysis that creates value.",
    content: {
      type: "detail",
      serviceLabel: "DATA ENGINEERING & MODERNIZATION",
      heading: "Your Data Team on the Work That Matters",
      body: [
        "Your data engineers spend 80% of their time on pipeline maintenance, ingestion troubleshooting, and ETL debugging. We help automate the plumbing — AI extracts semantic meaning from existing SQL and ETL logic, automates ingestion, and modernizes legacy pipelines — so your team focuses on architecture, modeling, and the analysis that creates value.",
        "AI-automated data engineering reduces pipeline development time by 40–60%, shifting your most expensive talent from maintenance to innovation."
      ]
    }
  },
  {
    title: "Data Governance & Compliance",
    subtitle: "Deploy governance that runs continuously — eliminating the manual configuration that makes most governance programs fail.",
    content: {
      type: "detail",
      serviceLabel: "DATA GOVERNANCE & COMPLIANCE",
      heading: "Trust Your Data Enough to Bet On It",
      body: [
        "Your governance program can't keep pace with your data. Classification is manual, lineage is incomplete, and quality rules are always six months behind. We help your team deploy governance that runs continuously — AI classifies data, enriches metadata with business context, and auto-applies governance rules — eliminating the heavy manual configuration that makes most governance programs fail.",
        "Automated governance closes the gap between data growth and compliance coverage — critical for regulated industries where audit readiness isn't optional."
      ]
    }
  },
  {
    title: "Predictive Intelligence",
    subtitle: "Shift from dashboards that explain last quarter to intelligence that predicts next quarter.",
    content: {
      type: "detail",
      serviceLabel: "PREDICTIVE INTELLIGENCE",
      heading: "Know What's Coming, Not Just What Happened",
      body: [
        "Shift your team from dashboards that explain last quarter to intelligence that predicts next quarter — and recommends what to do about it. Predictive models trained on your data, validated by your domain experts, and owned by your team: demand forecasting, churn prediction, revenue projection, risk scoring, anomaly detection.",
        "Companies using AI-driven forecasting outperform peers by 10–20% on key financial metrics. Predictive analytics has moved from advantage to necessity."
      ]
    }
  },
  {
    title: "Unstructured Data",
    subtitle: "Unlock the 80% of enterprise data sitting in documents, emails, call transcripts, PDFs, and images.",
    content: {
      type: "detail",
      serviceLabel: "UNSTRUCTURED DATA",
      heading: "Unlock the 80% You Haven't Been Able to Touch",
      body: [
        "The vast majority of your enterprise data sits in documents, emails, call transcripts, PDFs, and images — invisible to traditional analytics. We help your team unlock it: sentiment analysis on customer calls, automated contract analysis, medical record intelligence, claims processing your analysts can query and explore.",
        "What was cost-prohibitive is now achievable in weeks. The economics of unlocking unstructured data have changed by an order of magnitude."
      ]
    }
  },
  {
    title: "Data Platform Optimization",
    subtitle: "Bridge the gap between the platform you invested in and the decisions your leadership was promised.",
    content: {
      type: "detail",
      serviceLabel: "DATA PLATFORM OPTIMIZATION",
      heading: "Make the Investment You Already Made Actually Work",
      body: [
        "You bought the platform. You migrated the data. You hired the engineers. But your leadership still isn't getting the insights they were promised. We work with your team to bridge the gap — connecting your existing infrastructure to the decisions that matter, surfacing insights already hiding in your data, and turning your data platform from a cost center into a competitive advantage your leadership can see and measure.",
        "Most enterprises extract business decisions from less than 40% of their data platform's capacity. The rest sits idle — paid for, but not connected to outcomes."
      ]
    }
  }
];
const howCards$3 = [
  { title: "Your data team stays in the driver's seat.", body: "We augment your analysts' and engineers' capacity — we don't replace their expertise. They own the data strategy, the governance decisions, and the roadmap." },
  { title: "Knowledge transfers as we build.", body: "Every practice we introduce — from conversational analytics to automated governance — becomes your team's capability, not a dependency on us." },
  { title: "We work within your governance.", body: "Your compliance requirements, your data classification rules, your access controls. We don't ask you to bend your policies — we build within them." },
  { title: "Quality and accuracy are non-negotiable.", body: "Data intelligence is only valuable if it's trustworthy. Every model, every pipeline, every insight is validated against your domain expertise before it reaches a decision-maker." }
];
const proofCards$3 = [
  { tags: "MDXHEALTH • DATA UNIFICATION", title: "From Fragmented Data to Predictive, Decision-Ready Insights", excerpt: "We unified MDxHealth's scattered data ecosystem to create a governed, single source of truth across clinical, operational, and financial workflows. Advanced predictive analytics enabled proactive decision-making, improving visibility into outcomes, risks, and performance trends." },
  { tags: "CAREPREDICTOR • HEALTHCARE ANALYTICS", title: "CarePredictor Helps Turn Care Signals Into Earlier Action", excerpt: "Technossus supported CarePredictor in strengthening a healthcare platform that uses data-driven insights to help care teams identify risks sooner and respond with more confidence. The work focused on improving reliability, usability, and decision support so technology could better serve the people delivering care." },
  { tags: "JUPITER HOSPITAL • RECEIVABLES", title: "Improving Receivables Visibility & DSO Control", excerpt: "Jupiter Hospital lacked a consolidated, drill-down view of receivables and DSO across group, hospital, and account levels, limiting timely decision-making. Manual processes and absence of mapping to sales and account teams made it difficult to track performance against targets and take corrective actions." }
];
const painCards$3 = [
  { heading: "You're sitting on years of data but your team still makes decisions on gut feel.", body: "Because getting to the insight takes too long. The data is there — the path to it isn't." },
  { heading: "Your governance program is always six months behind your data growth.", body: "And your next audit is making you nervous. Manual classification and incomplete lineage compound every quarter." },
  { heading: "You have regulatory and compliance data in documents and PDFs that needs to be searchable and auditable.", body: "And right now it's not. Unstructured data is invisible to your analytics stack." },
  { heading: "Your data engineers spend more time fixing pipelines than building anything new.", body: "And the backlog of analytics requests keeps growing. Maintenance is consuming the capacity meant for innovation." },
  { heading: "Your BI team is buried in ad-hoc requests and your executives wait days for answers.", body: "Answers that should take seconds. Every question that requires a ticket slows the decision that depends on it." },
  { heading: "You invested in Snowflake or Databricks but your leadership still can't answer basic business questions.", body: "Without a week-long analyst cycle. The platform is ready. The path from question to answer isn't." }
];
function DataIntelligence() {
  const { isMobile, isTablet } = useBreakpoint();
  const inner = {
    maxWidth: 1440,
    margin: "0 auto",
    padding: isMobile ? "48px 16px" : isTablet ? "60px 32px" : "80px 80px"
  };
  const d1 = (color) => ({
    fontFamily: serif$3,
    fontSize: isMobile ? 26 : isTablet ? 34 : 48,
    lineHeight: isMobile ? "34px" : isTablet ? "42px" : "52px",
    fontWeight: 500,
    margin: 0,
    color: color ?? "#1E1E1E"
  });
  const d2 = (color) => ({
    fontFamily: serif$3,
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
        title: "Data Intelligence & Analytics — Technossus",
        description: "Turn your enterprise data into a decision engine. Technossus builds data platforms, ML models, and real-time analytics pipelines.",
        canonicalPath: "/services/data-intelligence-analytics",
        keywords: "data intelligence, enterprise analytics, ML pipelines, data platform, predictive analytics",
        jsonLd: [breadcrumbSchema([{ name: "Home", url: "https://newtechnossus-v2.vercel.app" }, { name: "Services", url: "https://newtechnossus-v2.vercel.app/services" }, { name: "Data Intelligence", url: "https://newtechnossus-v2.vercel.app/services/data-intelligence-analytics" }]), serviceSchema({ name: "Data Intelligence & Analytics", description: "Data platform engineering and ML for enterprise decision-making.", url: "https://newtechnossus-v2.vercel.app/services/data-intelligence-analytics" })]
      }
    ),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 1440, margin: "0 auto", padding: isMobile ? "32px 16px 48px" : isTablet ? "40px 32px 60px" : "40px 80px 80px" }, children: [
      /* @__PURE__ */ jsx(Breadcrumb, { items: [
        { label: "Home", href: "/" },
        { label: "Service Offerings", href: "/services" },
        { label: "Data Intelligence & Analytics", active: true }
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 32 : 60, marginTop: 40 }, children: [
        /* @__PURE__ */ jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 32 }, children: [
          /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$3, fontWeight: 600, fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", color: "#ADADAD", margin: 0 }, children: "Data Intelligence & Analytics" }),
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("h1", { style: d1(), children: [
            "Your data is talking.",
            " ",
            /* @__PURE__ */ jsx("span", { style: { color: red$3 }, children: "You're just not hearing it fast enough." })
          ] }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 80, children: /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$3, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: "#5C5C5C", margin: 0, maxWidth: 560 }, children: "Decisions still take weeks because data lives in silos, reports look backward, and by the time the analysis arrives, the market has moved. We work with your team to close the gap between data collected and decision made — from months to minutes." }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 120, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 16, flexWrap: "wrap" }, children: [
            /* @__PURE__ */ jsx(Button, { variant: "primary", label: "Show us the problem", href: "#" }),
            /* @__PURE__ */ jsx(Button, { variant: "secondary", label: "See How We Work", href: "#" })
          ] }) })
        ] }),
        !isMobile && /* @__PURE__ */ jsx("div", { style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: isTablet ? 300 : 460 }, children: /* @__PURE__ */ jsx("img", { src: imgSvcData, alt: "", style: { width: "100%", height: isTablet ? 300 : 460, objectFit: "cover", display: "block" } }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { style: { borderTop: "1px solid #E8E8E8" }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 1440, margin: "0 auto", padding: isMobile ? "24px 16px" : "32px 80px", display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }, children: [
      /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$3, fontSize: 13, fontWeight: 600, letterSpacing: ".12em", color: "#ADADAD", textTransform: "uppercase" }, children: "Trusted By" }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: isMobile ? 24 : 72, flexWrap: "wrap" }, children: ["TOYOTA FINANCIAL SERVICES", "GE HealthCare", "COMMONSPIRIT", "BIO-RAD", "ADAPTHEALTH"].map((name) => /* @__PURE__ */ jsx("span", { style: { fontFamily: sans$3, fontSize: 13, fontWeight: 700, color: "#888", filter: "grayscale(100%)", opacity: 0.65 }, children: name }, name)) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("div", { style: { maxWidth: 1440, margin: "0 auto", marginBottom: isMobile ? 12 : 16, padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 80px", background: "#fff" }, children: /* @__PURE__ */ jsx(Tag, { label: "THE SHIFT", variant: "dark" }) }),
    /* @__PURE__ */ jsxs("section", { style: { background: dark1$3, position: "relative", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx(CornerTL$3, {}),
      /* @__PURE__ */ jsx(CornerBR$3, {}),
      /* @__PURE__ */ jsx("div", { style: inner, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", gap: 48, alignItems: "flex-start", marginTop: 0, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxs("div", { style: { flex: 1, minWidth: isMobile ? "100%" : 320 }, children: [
          /* @__PURE__ */ jsxs("h2", { style: d2("#fff"), children: [
            "The cost of analyzing your data collapsed.",
            " ",
            /* @__PURE__ */ jsx("span", { style: { color: red$3 }, children: "The cost of acting on it didn't." })
          ] }),
          /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 20, marginTop: 28 }, children: [
            "AI is what caused the collapse. Pipeline maintenance, report generation, SQL writing, metadata cataloging — the plumbing that once consumed 80% of your data team's time — can now be automated. The work that can't be automated is the work that matters most: which decision to make, when to make it, and how to make it trustworthy enough to stake the business on.",
            "You may have already invested in a modern data platform. The real work now is in the distance between what your platform can do and what your people are equipped to ask of it. We work alongside your team to close that distance, transferring capability as we deliver."
          ].map((p, i) => /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$3, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: "#B5B5B5", margin: 0 }, children: p }, i)) })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, flex: isMobile ? void 0 : "0 0 440px", width: isMobile ? "100%" : void 0 }, children: [
          { num: "47%", desc: "Of CXOs say data readiness is their #1 challenge for AI initiatives." },
          { num: "80/20", desc: "Data teams spend 80% on plumbing, 20% on insight — we flip that ratio." },
          { num: "60–70%", desc: "Reduction in ad-hoc requests when your team can query data directly." },
          { num: "Zero", desc: "Handoffs without knowledge transfer. Your team learns as we build." }
        ].map((s) => /* @__PURE__ */ jsxs("div", { style: { background: "#262626", border: "1px solid #343434", padding: isMobile ? 16 : 24, display: "flex", flexDirection: "column", gap: 12 }, children: [
          /* @__PURE__ */ jsx("div", { style: { fontFamily: serif$3, fontSize: isMobile ? 28 : 36, lineHeight: 1, fontWeight: 600, color: red$3 }, children: s.num }),
          /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$3, fontSize: 13, lineHeight: 1.6, color: "#9B9B9B", margin: 0 }, children: s.desc })
        ] }, s.num)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
      /* @__PURE__ */ jsx(Tag, { label: "SERVICE OFFERINGS" }),
      /* @__PURE__ */ jsxs("h2", { style: { ...d2(), marginTop: 16 }, children: [
        "Better decisions, faster insight,",
        " ",
        /* @__PURE__ */ jsx("span", { style: { color: red$3 }, children: "stronger teams." })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { marginTop: 48 }, children: /* @__PURE__ */ jsx(Accordion, { items: accordionItems$3, defaultActiveIndex: 1 }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsx("div", { style: inner, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 32 : 64, alignItems: "flex-start", flexWrap: "wrap" }, children: [
      /* @__PURE__ */ jsxs("div", { style: { flex: 1, minWidth: isMobile ? "100%" : 320 }, children: [
        /* @__PURE__ */ jsx(Tag, { label: "HOW WE WORK" }),
        /* @__PURE__ */ jsxs("h2", { style: { ...d2(), marginTop: 16 }, children: [
          "We don't build a platform and",
          " ",
          /* @__PURE__ */ jsx("span", { style: { color: red$3 }, children: "leave you dependent on it." })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 20, marginTop: 28 }, children: [
          "We work embedded with your data team — transferring capability as we deliver. When the engagement ends, your analysts and engineers own the platform, understand the architecture, and can extend it without us.",
          "We know that new data capabilities create as many questions as answers for your team. Our approach is designed to bring your people along, not leave them behind. That's how we've maintained 90%+ client retention."
        ].map((p, i) => /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$3, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: "#5C5C5C", margin: 0 }, children: p }, i)) })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { flex: 1, display: "grid", gridTemplateColumns: cols2, gap: 20, minWidth: isMobile ? "100%" : 320 }, children: howCards$3.map((card) => /* @__PURE__ */ jsxs("div", { style: { background: "#F2F2F2", padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12 }, children: [
        /* @__PURE__ */ jsx("div", { style: { color: red$3, fontSize: 24 }, children: "◈" }),
        /* @__PURE__ */ jsx("h3", { style: { fontFamily: sans$3, fontSize: 16, fontWeight: 700, color: "#1E1E1E", lineHeight: 1.4, margin: 0 }, children: card.title }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$3, fontSize: 14, lineHeight: 1.6, color: "#5C5C5C", margin: 0 }, children: card.body })
      ] }, card.title)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("div", { style: { maxWidth: 1440, margin: "0 auto", marginBottom: isMobile ? 12 : 16, padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 80px", background: "#fff" }, children: /* @__PURE__ */ jsx(Tag, { label: "PROOF", variant: "dark" }) }),
    /* @__PURE__ */ jsxs("section", { style: { background: dark1$3, position: "relative", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx(CornerTL$3, {}),
      /* @__PURE__ */ jsx(CornerBR$3, {}),
      /* @__PURE__ */ jsxs("div", { style: inner, children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: isMobile ? "flex-start" : "flex-end", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", gap: 16, marginTop: 0, marginBottom: 40 }, children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h1", { style: d1("#fff"), children: [
              "Success ",
              /* @__PURE__ */ jsx("span", { style: { color: red$3 }, children: "stories." })
            ] }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$3, fontSize: 15, color: "#9B9B9B", marginTop: 10 }, children: "Real outcomes from teams that needed data they could trust." })
          ] }),
          /* @__PURE__ */ jsx("a", { href: "#", style: { fontFamily: sans$3, fontSize: 14, color: "#9B9B9B", textDecoration: "underline", whiteSpace: "nowrap", flexShrink: 0 }, children: "View All" })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: cols3, gap: 20 }, children: proofCards$3.map((card, i) => /* @__PURE__ */ jsxs("article", { style: { background: "#262626", border: "1px solid #343434", display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ jsx(PlaceholderBlock, { width: "100%", height: 200, style: { background: "#2A2A2A" } }),
          /* @__PURE__ */ jsxs("div", { style: { padding: "24px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }, children: [
            /* @__PURE__ */ jsx("div", { style: { fontFamily: sans$3, fontSize: 11, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "#767676" }, children: card.tags }),
            /* @__PURE__ */ jsx("h3", { style: { fontFamily: sans$3, fontSize: 18, fontWeight: 700, color: "#fff", lineHeight: 1.4, margin: 0 }, children: card.title }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$3, fontSize: 14, lineHeight: 1.6, color: "#9B9B9B", flex: 1, margin: 0 }, children: card.excerpt }),
            /* @__PURE__ */ jsx("a", { href: "#", style: { fontFamily: sans$3, fontSize: 14, fontWeight: 700, color: red$3, textDecoration: "underline", marginTop: 8 }, children: "See How We Work →" })
          ] })
        ] }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
      /* @__PURE__ */ jsx(Tag, { label: "SOUND FAMILIAR" }),
      /* @__PURE__ */ jsxs("h1", { style: { ...d1(), marginTop: 16 }, children: [
        "Sound ",
        /* @__PURE__ */ jsx("span", { style: { color: red$3 }, children: "Familiar?" })
      ] }),
      /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$3, fontSize: 15, color: "#5C5C5C", marginTop: 12 }, children: "These aren't hypotheticals. They're the conversations we have most often." }),
      /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: cols2, gap: 24, marginTop: 48 }, children: painCards$3.map((card, i) => /* @__PURE__ */ jsxs("div", { style: { background: "#F2F2F2", padding: "32px 28px", display: "flex", flexDirection: "column", gap: 16 }, children: [
        /* @__PURE__ */ jsx("h3", { style: { fontFamily: sans$3, fontSize: 18, fontWeight: 700, color: "#1E1E1E", lineHeight: 1.4, margin: 0 }, children: card.heading }),
        /* @__PURE__ */ jsx("div", { style: { height: 2, background: red$3, width: 40 } }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$3, fontSize: 14, lineHeight: 1.7, color: "#5C5C5C", margin: 0 }, children: card.body })
      ] }, i)) }),
      /* @__PURE__ */ jsxs("div", { style: { background: dark1$3, padding: isMobile ? "32px 20px" : "48px", marginTop: 48, display: "flex", flexDirection: "column", gap: 20 }, children: [
        /* @__PURE__ */ jsx("h3", { style: { fontFamily: serif$3, fontSize: isMobile ? 22 : 28, fontWeight: 600, color: "#fff", margin: 0 }, children: "Bring us your toughest data problem." }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$3, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: "#B5B5B5", maxWidth: 640, margin: 0 }, children: "We'll spend two days with your team — at no cost — understanding the challenge, evaluating the landscape, and coming back within a week with a concrete approach. No 50-page proposal. No six-month roadmap. A real solution to a real problem." }),
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 16, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ jsx(Button, { variant: "primary", label: "Bring us your problem →", href: "#" }),
          /* @__PURE__ */ jsx(Button, { variant: "secondary", label: "Explore Solution", href: "#" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      CTABanner,
      {
        size: "large",
        label: "LET'S WORK ON IT TOGETHER",
        heading: "Bring us your toughest data problem.",
        body: "No six-month proposal. No 200-slide deck. Working intelligence, built with your team — and your data team will be stronger for the experience.",
        primaryCta: "Bring us your problem →",
        secondaryCta: "Explore Solution"
      }
    ),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } })
  ] });
}
const sans$2 = '"General Sans", system-ui, -apple-system, sans-serif';
const serif$2 = '"Roboto Serif", Georgia, serif';
const red$2 = "#ED2939";
const dark1$2 = "#1B1B1B";
const CornerTL$2 = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, left: 0, width: 118, height: 10, background: red$2, pointerEvents: "none", zIndex: 2 } }),
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, left: 0, width: 10, height: 118, background: red$2, pointerEvents: "none", zIndex: 2 } })
] });
const CornerBR$2 = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, right: 0, width: 118, height: 10, background: red$2, pointerEvents: "none", zIndex: 2 } }),
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, right: 0, width: 10, height: 118, background: red$2, pointerEvents: "none", zIndex: 2 } })
] });
const accordionItems$2 = [
  {
    title: "Experience Strategy & Transformation",
    subtitle: "An executable framework that maps experience gaps to growth, retention, and adoption metrics.",
    content: {
      type: "detail",
      serviceLabel: "EXPERIENCE STRATEGY & TRANSFORMATION",
      heading: "Align every experience decision to a business outcome.",
      body: [
        "Experience strategy that sits above individual products, channels, and teams — not a vision document, but an executable framework your organization can own and act on. We map the current experience landscape, identify where friction is costing you customers, and build the transformation roadmap with the people who will carry it forward. Every decision traces to a growth, retention, or adoption metric.",
        "Organizations that invest in unified experience strategy before individual product redesigns reduce downstream correction costs by 2–3× compared to reactive, channel-by-channel approaches."
      ]
    }
  },
  {
    title: "Product Ideation & Co-Design",
    subtitle: "Pressure-test the idea before the roadmap commits to it — with Generative AI as a co-creator.",
    content: {
      type: "detail",
      serviceLabel: "PRODUCT IDEATION & CO-DESIGN",
      heading: "Pressure-test the idea before the roadmap commits to it.",
      body: [
        "Structured ideation as a service — not a brainstorm, not a hackathon that leaves the room with Post-its and no direction. A facilitated engagement where your product, engineering, and business stakeholders co-ideate alongside our design team. Generative AI participates as a co-creator: surfacing patterns, accelerating prototypes, and letting your team explore more directions in a day than traditional ideation covers in a month.",
        "Teams that run structured co-design validation before committing to roadmap reduce post-launch redesign costs by 30–50% and ship with measurably higher user confidence scores from day one."
      ]
    }
  },
  {
    title: "Digital Experience V&V",
    subtitle: "WCAG, ADA compliance review, usability testing, and AI-UX pattern validation in a single engagement.",
    content: {
      type: "detail",
      serviceLabel: "DIGITAL EXPERIENCE V&V",
      heading: "Don't let accessibility debt become a compliance crisis.",
      body: [
        "Most firms address usability, accessibility, and compliance separately — on different timelines, by different teams, often after launch. We bundle all three into a single validated engagement: WCAG and ADA compliance review, usability testing across real user scenarios, and AI-UX pattern validation for products deploying generative interfaces.",
        "Digital accessibility litigation in the U.S. exceeded 4,600 cases in 2023 — a 42% year-over-year increase. The majority of violations were preventable through pre-launch V&V."
      ]
    }
  },
  {
    title: "Omnichannel Customer Experience",
    subtitle: "Design across channels with a unified experience model — shared patterns, consistent language, visual identity at every touchpoint.",
    content: {
      type: "detail",
      serviceLabel: "OMNICHANNEL CUSTOMER EXPERIENCE",
      heading: "Meet your customer where they are — and make it feel like the same company.",
      body: [
        "Your customers don't see your org chart. They see whether the experience on your mobile app matches your web portal, your customer support interface, and every other surface they interact with. We design across channels with a unified experience model — shared interaction patterns, consistent language, and a visual identity that holds at every touchpoint.",
        "Customers who engage across three or more channels have 90% higher lifetime value than single-channel customers — and experience consistency is what makes sustained cross-channel engagement possible."
      ]
    }
  },
  {
    title: "Design Systems",
    subtitle: "Built in Figma — tokens, components, patterns, documentation, and governance your engineering teams can implement and scale.",
    content: {
      type: "detail",
      serviceLabel: "DESIGN SYSTEMS",
      heading: "Make the design decision once. Deploy it everywhere.",
      body: [
        "A design system is only as valuable as your team's ability to use and extend it. We build in Figma — tokens, components, patterns, documentation, and governance — to the standards your engineering teams can implement and scale. Your teams move faster because the decisions are already made. Your product looks consistent because the decisions are shared.",
        "Teams operating from a mature design system ship 3–5× faster and spend 40% less time on design QA — freeing designers for the work that requires craft, not repetition."
      ]
    }
  },
  {
    title: "Adaptive Experience Design",
    subtitle: "AI-native UX that observes, infers, and responds to each user in context.",
    content: {
      type: "detail",
      serviceLabel: "ADAPTIVE EXPERIENCE DESIGN",
      heading: "Experiences that know who they're talking to.",
      body: [
        "AI-native UX goes beyond personalization toggles — it's the architecture of experiences that observe, infer, and respond to each user in context. We design the interaction models, content patterns, and feedback loops that make your product feel less like software and more like a service that understands the person using it. Content that surfaces at the right moment. Flows that adapt based on what the user has already done.",
        "Personalized digital experiences drive 40% higher engagement and measurably lower abandonment rates at every stage of the user journey — the patterns are the product."
      ]
    }
  }
];
const howCards$2 = [
  { title: "Outcomes, not outputs.", body: "Every engagement is framed around the business metric it should move — adoption, retention, conversion, satisfaction, time-to-value. Deliverables are the means. The metric is how we know the work worked." },
  { title: "Capability transfers as we build.", body: "Workshop formats, design system components, and validation frameworks we produce are documented, trained on, and handed over. When we leave, your team is running the system — not waiting for us to come back." },
  { title: "We work within your product cadence.", body: "We don't ask you to pause delivery to do experience strategy. We embed inside your existing sprint rhythm and move at a pace your organization can absorb and sustain." },
  { title: "Accessibility and compliance are not checkboxes.", body: "Every engagement is validated against WCAG, ADA, and usability standards before it ships. Quality is non-negotiable — and we carry that standard from the first wireframe to the final release." }
];
const proofCards$2 = [
  { tags: "COMMERCE • EXPERIENCE REDESIGN", title: "56% Faster Product Discovery", excerpt: "A high-volume commerce experience was redesigned so users could find what they needed faster and with less friction — validated through usability research before a single line of production code changed." },
  { tags: "FINTECH • RAPID PROTOTYPING", title: "Working Prototype in 24 Hours", excerpt: "A fintech concept moved from idea to functioning product in a single day — fast enough to test, validate, and spark investor and market interest." },
  { tags: "MOBILE • LAUNCH READINESS", title: "4M+ Views in 48 Hours", excerpt: "A client's configurable mobile product launched with immediate traction, proving the value of speed, usability, and design-led go-to-market readiness." }
];
const painCards$2 = [
  { heading: '"We shipped the product, but adoption is lower than expected."', body: "Nobody can agree on whether it's a design problem, a feature problem, or a user research problem. The build is done and the question is still open." },
  { heading: '"Every team is designing their own patterns."', body: "The product looks like three different companies built it, and the inconsistencies are starting to show up in customer feedback." },
  { heading: '"We have a product idea that everyone agrees on in principle."', body: "Until someone asks what you're actually building and the room goes quiet. Alignment on concept doesn't mean alignment on scope." },
  { heading: `"Our accessibility audit came back with violations we didn't know existed."`, body: "The legal team is asking how this reached production without anyone catching it. The answer is that compliance was treated as a post-launch checkbox." }
];
function DigitalExperience() {
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
        title: "Digital Experience Design — Technossus",
        description: "Reimagine your product, UX, and brand. Technossus designs and engineers digital experiences that delight users and drive business outcomes.",
        canonicalPath: "/services/digital-experience-design",
        keywords: "digital experience design, UX design, product design, enterprise UX",
        jsonLd: breadcrumbSchema([{ name: "Home", url: "https://newtechnossus-v2.vercel.app" }, { name: "Services", url: "https://newtechnossus-v2.vercel.app/services" }, { name: "Digital Experience Design", url: "https://newtechnossus-v2.vercel.app/services/digital-experience-design" }])
      }
    ),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 1440, margin: "0 auto", padding: isMobile ? "32px 16px 48px" : isTablet ? "40px 32px 60px" : "40px 80px 80px" }, children: [
      /* @__PURE__ */ jsx(Breadcrumb, { items: [
        { label: "Home", href: "/" },
        { label: "Service Offerings", href: "/services" },
        { label: "Digital Experience Design", active: true }
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 32 : 60, marginTop: 40 }, children: [
        /* @__PURE__ */ jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 32 }, children: [
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("h1", { style: d1(), children: [
            "Your users know what you built. They're just not sure",
            " ",
            /* @__PURE__ */ jsx("span", { style: { color: red$2 }, children: "it was built for them." })
          ] }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 80, children: /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$2, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: "#5C5C5C", margin: 0, maxWidth: 560 }, children: "The gap between what your team designed and what users actually experience isn't inevitable — it's the cost of building without validation, designing across silos, and shipping before the experience is proven. We work with your team to close that gap: from the first whiteboard session to the final release." }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 120, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 16, flexWrap: "wrap" }, children: [
            /* @__PURE__ */ jsx(Button, { variant: "primary", label: "Show us the problem", href: "#" }),
            /* @__PURE__ */ jsx(Button, { variant: "secondary", label: "See How We Work", href: "#" })
          ] }) })
        ] }),
        !isMobile && /* @__PURE__ */ jsx("div", { style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: isTablet ? 300 : 460 }, children: /* @__PURE__ */ jsx("img", { src: imgSvcDigital, alt: "", style: { width: "100%", height: isTablet ? 300 : 460, objectFit: "cover", display: "block" } }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { style: { borderTop: "1px solid #E8E8E8" }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 1440, margin: "0 auto", padding: isMobile ? "24px 16px" : "32px 80px", display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }, children: [
      /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$2, fontSize: 13, fontWeight: 600, letterSpacing: ".12em", color: "#ADADAD", textTransform: "uppercase" }, children: "Trusted By" }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: isMobile ? 24 : 72, flexWrap: "wrap" }, children: ["CEFALY", "CARE PREDICTOR", "WORD AND BROWN", "BIOCAIR", "TECH E STEEL"].map((name) => /* @__PURE__ */ jsx("span", { style: { fontFamily: sans$2, fontSize: 13, fontWeight: 700, color: "#888", filter: "grayscale(100%)", opacity: 0.65 }, children: name }, name)) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("div", { style: { maxWidth: 1440, margin: "0 auto", marginBottom: isMobile ? 12 : 16, padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 80px", background: "#fff" }, children: /* @__PURE__ */ jsx(Tag, { label: "THE SHIFT", variant: "dark" }) }),
    /* @__PURE__ */ jsxs("section", { style: { background: dark1$2, position: "relative", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx(CornerTL$2, {}),
      /* @__PURE__ */ jsx(CornerBR$2, {}),
      /* @__PURE__ */ jsx("div", { style: inner, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", gap: 48, alignItems: "flex-start", marginTop: 0, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxs("div", { style: { flex: 1, minWidth: isMobile ? "100%" : 320 }, children: [
          /* @__PURE__ */ jsxs("h2", { style: d2("#fff"), children: [
            "The craft should be your designers' job.",
            " ",
            /* @__PURE__ */ jsx("span", { style: { color: red$2 }, children: "The repetition shouldn't." })
          ] }),
          /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 20, marginTop: 28 }, children: [
            "Intelligence has compressed what used to take months in experience design — not by replacing your team's craft, but by accelerating the discovery, validation, and iteration cycles that consume most of the calendar. Your designers focus on the judgment, strategy, and creative decisions that shape the product. The repetitive layers move faster.",
            "Many organizations already have design teams, partial design systems, and experience work in motion. The challenge isn't starting — it's orchestrating what's already there: aligning experience across channels, closing the gap between design intent and what engineering delivers, and validating before the roadmap commits."
          ].map((p, i) => /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$2, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: "#B5B5B5", margin: 0 }, children: p }, i)) })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, flex: isMobile ? void 0 : "0 0 440px", width: isMobile ? "100%" : void 0 }, children: [
          { num: "88%", desc: "of customers say experience is as important as the product or service itself." },
          { num: "3–5×", desc: "faster feature delivery for teams operating from a unified design system." },
          { num: "70%", desc: "of product failures traced to poor user research and validation before build." },
          { num: "Zero", desc: "Handoffs without capability transfer. Your team owns the system when we leave." }
        ].map((s) => /* @__PURE__ */ jsxs("div", { style: { background: "#262626", border: "1px solid #343434", padding: isMobile ? 16 : 24, display: "flex", flexDirection: "column", gap: 12 }, children: [
          /* @__PURE__ */ jsx("div", { style: { fontFamily: serif$2, fontSize: isMobile ? 28 : 36, lineHeight: 1, fontWeight: 600, color: red$2 }, children: s.num }),
          /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$2, fontSize: 13, lineHeight: 1.6, color: "#9B9B9B", margin: 0 }, children: s.desc })
        ] }, s.num)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
      /* @__PURE__ */ jsx(Tag, { label: "SERVICE OFFERINGS" }),
      /* @__PURE__ */ jsxs("h2", { style: { ...d2(), marginTop: 16 }, children: [
        "Human-centered, seamless, and intelligent experiences —",
        " ",
        /* @__PURE__ */ jsx("span", { style: { color: red$2 }, children: "from insights to implementation." })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { marginTop: 48 }, children: /* @__PURE__ */ jsx(Accordion, { items: accordionItems$2, defaultActiveIndex: 1 }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsx("div", { style: inner, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 32 : 64, alignItems: "flex-start", flexWrap: "wrap" }, children: [
      /* @__PURE__ */ jsxs("div", { style: { flex: 1, minWidth: isMobile ? "100%" : 320 }, children: [
        /* @__PURE__ */ jsx(Tag, { label: "HOW WE WORK" }),
        /* @__PURE__ */ jsxs("h2", { style: { ...d2(), marginTop: 16 }, children: [
          "We're measured by what your business does",
          " ",
          /* @__PURE__ */ jsx("span", { style: { color: red$2 }, children: "differently after we leave." })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 20, marginTop: 28 }, children: [
          "Experience design is only worth what it moves — adoption that holds, retention that compounds, revenue that traces back to decisions made in the design phase. Everything we build is structured to deliver against those metrics and to keep delivering after the engagement ends.",
          "More than 90% of our clients extend their engagement beyond the original scope. Not because they can't move forward without us, but because the outcomes are compounding and the work is worth continuing."
        ].map((p, i) => /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$2, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: "#5C5C5C", margin: 0 }, children: p }, i)) })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { flex: 1, display: "grid", gridTemplateColumns: cols2, gap: 20, minWidth: isMobile ? "100%" : 320 }, children: howCards$2.map((card) => /* @__PURE__ */ jsxs("div", { style: { background: "#F2F2F2", padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12 }, children: [
        /* @__PURE__ */ jsx("div", { style: { color: red$2, fontSize: 24 }, children: "◈" }),
        /* @__PURE__ */ jsx("h3", { style: { fontFamily: sans$2, fontSize: 16, fontWeight: 700, color: "#1E1E1E", lineHeight: 1.4, margin: 0 }, children: card.title }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$2, fontSize: 14, lineHeight: 1.6, color: "#5C5C5C", margin: 0 }, children: card.body })
      ] }, card.title)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("div", { style: { maxWidth: 1440, margin: "0 auto", marginBottom: isMobile ? 12 : 16, padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 80px", background: "#fff" }, children: /* @__PURE__ */ jsx(Tag, { label: "PROOF", variant: "dark" }) }),
    /* @__PURE__ */ jsxs("section", { style: { background: dark1$2, position: "relative", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx(CornerTL$2, {}),
      /* @__PURE__ */ jsx(CornerBR$2, {}),
      /* @__PURE__ */ jsxs("div", { style: inner, children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: isMobile ? "flex-start" : "flex-end", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", gap: 16, marginTop: 0, marginBottom: 40 }, children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h1", { style: d1("#fff"), children: [
              "Results that speak ",
              /* @__PURE__ */ jsx("span", { style: { color: red$2 }, children: "for themselves." })
            ] }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$2, fontSize: 15, color: "#9B9B9B", marginTop: 10 }, children: "Adoption metrics tell the real story of a design engagement." })
          ] }),
          /* @__PURE__ */ jsx("a", { href: "#", style: { fontFamily: sans$2, fontSize: 14, color: "#9B9B9B", textDecoration: "underline", whiteSpace: "nowrap", flexShrink: 0 }, children: "View All" })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: cols3, gap: 20 }, children: proofCards$2.map((card, i) => /* @__PURE__ */ jsxs("article", { style: { background: "#262626", border: "1px solid #343434", display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ jsx(PlaceholderBlock, { width: "100%", height: 200, style: { background: "#2A2A2A" } }),
          /* @__PURE__ */ jsxs("div", { style: { padding: "24px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }, children: [
            /* @__PURE__ */ jsx("div", { style: { fontFamily: sans$2, fontSize: 11, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "#767676" }, children: card.tags }),
            /* @__PURE__ */ jsx("h3", { style: { fontFamily: sans$2, fontSize: 18, fontWeight: 700, color: "#fff", lineHeight: 1.4, margin: 0 }, children: card.title }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$2, fontSize: 14, lineHeight: 1.6, color: "#9B9B9B", flex: 1, margin: 0 }, children: card.excerpt }),
            /* @__PURE__ */ jsx("a", { href: "#", style: { fontFamily: sans$2, fontSize: 14, fontWeight: 700, color: red$2, textDecoration: "underline", marginTop: 8 }, children: "See How We Work →" })
          ] })
        ] }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
      /* @__PURE__ */ jsx(Tag, { label: "SOUND FAMILIAR" }),
      /* @__PURE__ */ jsxs("h1", { style: { ...d1(), marginTop: 16 }, children: [
        "These are the conversations we have most often with",
        " ",
        /* @__PURE__ */ jsx("span", { style: { color: red$2 }, children: "product and design leaders." })
      ] }),
      /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$2, fontSize: 15, color: "#5C5C5C", marginTop: 12 }, children: "These aren't hypotheticals. They're the conversations we have most often." }),
      /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: cols2, gap: 24, marginTop: 48 }, children: painCards$2.map((card, i) => /* @__PURE__ */ jsxs("div", { style: { background: "#F2F2F2", padding: "32px 28px", display: "flex", flexDirection: "column", gap: 16 }, children: [
        /* @__PURE__ */ jsx("h3", { style: { fontFamily: sans$2, fontSize: 18, fontWeight: 700, color: "#1E1E1E", lineHeight: 1.4, margin: 0 }, children: card.heading }),
        /* @__PURE__ */ jsx("div", { style: { height: 2, background: red$2, width: 40 } }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$2, fontSize: 14, lineHeight: 1.7, color: "#5C5C5C", margin: 0 }, children: card.body })
      ] }, i)) }),
      /* @__PURE__ */ jsxs("div", { style: { background: dark1$2, padding: isMobile ? "32px 20px" : "48px", marginTop: 48, display: "flex", flexDirection: "column", gap: 20 }, children: [
        /* @__PURE__ */ jsx("h3", { style: { fontFamily: serif$2, fontSize: isMobile ? 22 : 28, fontWeight: 600, color: "#fff", margin: 0 }, children: "Bring us your toughest design problem." }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$2, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: "#B5B5B5", maxWidth: 640, margin: 0 }, children: "We'll invest two days with your team — at no cost — understanding the challenge, mapping the experience landscape, and coming back within a week with a concrete direction. No 200-slide deck. No six-month proposal. A real path forward, built with the people who'll carry it." }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Button, { variant: "primary", label: "Bring us your problems →", href: "#" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      CTABanner,
      {
        size: "large",
        label: "LET'S WORK ON IT TOGETHER",
        heading: "Ready to accelerate your digital & AI journey?",
        body: "Whether you're modernizing systems, building a new product, or scaling engineering, we're ready to collaborate.",
        primaryCta: "Schedule a Strategy Session →",
        secondaryCta: "Contact Us"
      }
    ),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } })
  ] });
}
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
const accordionItems$1 = [
  {
    title: "Discovery & Incubation",
    subtitle: "Find out if the idea works before you bet the quarter on it.",
    content: {
      type: "detail",
      serviceLabel: "DISCOVERY & INCUBATION",
      heading: "Find out if the idea works before you bet the quarter on it.",
      body: [
        "Most product bets fail in discovery — not because the idea was wrong, but because the team spent too long finding out. We move from hypothesis to working prototype in weeks, using AI-accelerated methods that compress the front of the build without skipping the thinking that matters. You leave with a validated foundation to build on, or the clarity to redirect before the cost compounds.",
        "Gartner: 45% of product launches are delayed by at least one month — and 20% of those delayed launches fail to meet their internal targets."
      ]
    }
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
        "Gartner: 80% of product launches require significant changes after initial rollout due to market disruptions and evolving customer needs."
      ]
    }
  },
  {
    title: "Enterprise Integration & Product Architecture",
    subtitle: "Your systems know things your business needs. They're just not talking to each other.",
    content: {
      type: "detail",
      serviceLabel: "ENTERPRISE INTEGRATION & PRODUCT ARCHITECTURE",
      heading: "Your systems know things your business needs. They're just not talking to each other.",
      body: [
        "Most organizations aren't short on systems — they're short on connections between them. Inventory sits in one place, finance in another, supply chain somewhere else entirely. We design and build the integration layer that connects your systems of record — so data flows where it needs to and processes run the way the business actually works.",
        "71% of applications remain unintegrated or disconnected — unchanged for three consecutive years. Only 2% of IT leaders report integrating more than half of their applications."
      ]
    }
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
        "Gartner 2024: Early adopters of Gen AI report an average 15.2% cost savings and 22.6% productivity improvement. For every $1 invested, companies see an average return of $3.70."
      ]
    }
  },
  {
    title: "Application Modernization",
    subtitle: "Keep the business logic. Lose the technical debt holding it hostage.",
    content: {
      type: "detail",
      serviceLabel: "APPLICATION MODERNIZATION",
      heading: "Keep the business logic. Lose the technical debt holding it hostage.",
      body: [
        "The value in your existing application isn't the code — it's the business logic, domain knowledge, and workflows refined over years. We modernize the application layer incrementally — preserving what works, refactoring what doesn't, and introducing modern architecture patterns that let the product evolve without a big-bang rewrite.",
        "Gartner: 60–80% of IT budgets are spent maintaining legacy systems — leaving little room for innovation or the strategic work that actually moves the product forward."
      ]
    }
  },
  {
    title: "Product Support Automation",
    subtitle: "Product support burden doesn't have to scale with your product's success.",
    content: {
      type: "detail",
      serviceLabel: "PRODUCT SUPPORT AUTOMATION",
      heading: "Product support burden doesn't have to scale with your product's success.",
      body: [
        "As your product grows, so does the volume of questions, issues, and requests. Without the right support architecture, that volume lands on your engineering and product teams. We design and implement intelligent support systems that handle the predictable load automatically, escalate what genuinely needs human attention, and generate operational insight your team needs to eliminate recurring issues at the source.",
        "Gartner: Agentic AI will autonomously resolve 80% of common customer service issues without human intervention by 2029 — with a 30% reduction in operational costs."
      ]
    }
  },
  {
    title: "Continuous Delivery & Release Engineering",
    subtitle: "The best release is the one nobody notices. Getting there should feel routine.",
    content: {
      type: "detail",
      serviceLabel: "CONTINUOUS DELIVERY & RELEASE ENGINEERING",
      heading: "The best release is the one nobody notices. Getting there should feel routine.",
      body: [
        "Release pain isn't a technology problem — it's an architecture and process problem that compounds quietly until it owns the calendar. We build the CI/CD pipelines, deployment architecture, and release governance that turn shipping into a repeatable, low-drama operation. The goal is a team that can push to production with confidence and spend its energy on the next feature rather than the last incident.",
        "DORA 2024: Low-performing teams have a 64% change failure rate. Elite teams have 5%. The difference is process and architecture, not talent."
      ]
    }
  }
];
const howCards$1 = [
  { title: "Your team stays in the driver's seat.", body: "We work alongside your engineers and product managers — never around them. Decision authority stays where it belongs." },
  { title: "We build it so your team can own it.", body: "The engagement model follows your business needs, not our convenience. We build it so your team can own it — or we stay as your delivery partner." },
  { title: "We work within your governance, processes, and pace.", body: "No mandate to change how your organization runs. We adapt to what exists and improve from the inside." },
  { title: "Quality is non-negotiable.", body: "Compressed timelines don't mean corners cut. The speed comes from eliminating waste, not from skipping what matters." }
];
const proofCards$1 = [
  { tags: "COMMERCE • PRODUCT REDESIGN", title: "56% Faster Product Discovery", excerpt: "A high-volume commerce experience was redesigned so users could find what they needed faster and with less friction — validated through research before a single production change." },
  { tags: "FINTECH • RAPID PROTOTYPING", title: "Working Prototype in 24 Hours", excerpt: "A fintech concept moved from idea to functioning product in a single day — fast enough to test, validate, and spark market interest." },
  { tags: "MOBILE • LAUNCH READINESS", title: "4M+ Views in 48 Hours", excerpt: "A client's configurable mobile product launched with immediate traction, proving the value of speed, usability, and launch readiness." }
];
const painCards$1 = [
  { heading: `"We've been in discovery for months and still aren't sure what we're building."`, body: "The idea is solid. The scope keeps shifting. Discovery has become the project rather than the path to the project." },
  { heading: '"We shipped a product — but now every new feature feels like open-heart surgery."', body: "Launch was a success. But the architecture that got you there isn't the one that scales. Every sprint costs more than the last." },
  { heading: '"Our teams pull data from three different systems to answer one question."', body: "Inventory, finance, and supply chain each have their version of reality. Nobody trusts the numbers until they've reconciled them manually." },
  { heading: `"We know AI could improve our product — we just haven't found the right entry point."`, body: "The capability exists. The use cases are obvious in hindsight. But nobody has the bandwidth to scope it properly while keeping the product running." }
];
function ProductEngineering() {
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
        title: "Product Engineering — Technossus",
        description: "Ship full-stack enterprise products at startup speed. Technossus builds scalable software with modern cloud architecture and DevOps practices.",
        canonicalPath: "/services/product-engineering",
        keywords: "product engineering, software development, full-stack engineering, enterprise software",
        jsonLd: breadcrumbSchema([{ name: "Home", url: "https://newtechnossus-v2.vercel.app" }, { name: "Services", url: "https://newtechnossus-v2.vercel.app/services" }, { name: "Product Engineering", url: "https://newtechnossus-v2.vercel.app/services/product-engineering" }])
      }
    ),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 1440, margin: "0 auto", padding: isMobile ? "32px 16px 48px" : isTablet ? "40px 32px 60px" : "40px 80px 80px" }, children: [
      /* @__PURE__ */ jsx(Breadcrumb, { items: [
        { label: "Home", href: "/" },
        { label: "Service Offerings", href: "/services" },
        { label: "Product Engineering", active: true }
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 32 : 60, marginTop: 40 }, children: [
        /* @__PURE__ */ jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 32 }, children: [
          /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$1, fontWeight: 600, fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", color: "#ADADAD", margin: 0 }, children: "PRODUCT ENGINEERING" }),
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("h1", { style: d1(), children: [
            "Great products don't stall because the idea was wrong. They stall because",
            " ",
            /* @__PURE__ */ jsx("span", { style: { color: red$1 }, children: "building and scaling are two completely different problems." })
          ] }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 80, children: /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$1, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: "#5C5C5C", margin: 0, maxWidth: 560 }, children: "Most teams discover the gap between working and scaling only after they're already in it. We work with your team from first concept through platform maturity — getting to a working product faster than you'd expect, without the shortcuts that cause problems later." }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 120, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 16, flexWrap: "wrap" }, children: [
            /* @__PURE__ */ jsx(Button, { variant: "primary", label: "Show us the problem", href: "#" }),
            /* @__PURE__ */ jsx(Button, { variant: "secondary", label: "See How We Work", href: "#" })
          ] }) })
        ] }),
        !isMobile && /* @__PURE__ */ jsx("div", { style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: isTablet ? 300 : 460 }, children: /* @__PURE__ */ jsx("img", { src: imgSvcProduct, alt: "", style: { width: "100%", height: isTablet ? 300 : 460, objectFit: "cover", display: "block" } }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { style: { borderTop: "1px solid #E8E8E8" }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 1440, margin: "0 auto", padding: isMobile ? "24px 16px" : "32px 80px", display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }, children: [
      /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$1, fontSize: 13, fontWeight: 600, letterSpacing: ".12em", color: "#ADADAD", textTransform: "uppercase" }, children: "Trusted By" }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: isMobile ? 24 : 72, flexWrap: "wrap" }, children: ["CEFALY", "WORD AND BROWN", "CARE PREDICTOR", "NEC", "BIO-RAD"].map((name) => /* @__PURE__ */ jsx("span", { style: { fontFamily: sans$1, fontSize: 13, fontWeight: 700, color: "#888", filter: "grayscale(100%)", opacity: 0.65 }, children: name }, name)) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("div", { style: { maxWidth: 1440, margin: "0 auto", marginBottom: isMobile ? 12 : 16, padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 80px", background: "#fff" }, children: /* @__PURE__ */ jsx(Tag, { label: "THE SHIFT", variant: "dark" }) }),
    /* @__PURE__ */ jsxs("section", { style: { background: dark1$1, position: "relative", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx(CornerTL$1, {}),
      /* @__PURE__ */ jsx(CornerBR$1, {}),
      /* @__PURE__ */ jsx("div", { style: inner, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", gap: 48, alignItems: "flex-start", marginTop: 0, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxs("div", { style: { flex: 1, minWidth: isMobile ? "100%" : 320 }, children: [
          /* @__PURE__ */ jsxs("h2", { style: d2("#fff"), children: [
            "Your product team didn't sign up to spend six months",
            " ",
            /* @__PURE__ */ jsx("span", { style: { color: red$1 }, children: "finding out if the idea works." })
          ] }),
          /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 20, marginTop: 28 }, children: [
            "The window between idea and evidence used to be measured in quarters. Today, AI-accelerated engineering compresses that window to weeks — not by cutting corners, but by eliminating the cycles that never needed to exist.",
            "The teams we work with don't abandon their instincts or existing investments. They get to the answer faster, then build on ground they've actually tested."
          ].map((p, i) => /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$1, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: "#B5B5B5", margin: 0 }, children: p }, i)) })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, flex: isMobile ? void 0 : "0 0 440px", width: isMobile ? "100%" : void 0 }, children: [
          { num: "Weeks not quarters", desc: "From concept to working product — compressed without shortcuts." },
          { num: "70%", desc: "Of product delays are scope and discovery failures, not engineering ones — we solve for the front of the problem." },
          { num: "1→N", desc: "Scaling a product is a different discipline than building one — we bring both." },
          { num: "Built to hand off", desc: "Your team owns it when we're done, or we transition into managed services." }
        ].map((s) => /* @__PURE__ */ jsxs("div", { style: { background: "#262626", border: "1px solid #343434", padding: isMobile ? 16 : 24, display: "flex", flexDirection: "column", gap: 12 }, children: [
          /* @__PURE__ */ jsx("div", { style: { fontFamily: serif$1, fontSize: isMobile ? 28 : 36, lineHeight: 1, fontWeight: 600, color: red$1 }, children: s.num }),
          /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$1, fontSize: 13, lineHeight: 1.6, color: "#9B9B9B", margin: 0 }, children: s.desc })
        ] }, s.num)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
      /* @__PURE__ */ jsx(Tag, { label: "SERVICE OFFERINGS" }),
      /* @__PURE__ */ jsxs("h2", { style: { ...d2(), marginTop: 16 }, children: [
        "From strategy to launch to continuous evolution —",
        " ",
        /* @__PURE__ */ jsx("span", { style: { color: red$1 }, children: "we build alongside your team." })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { marginTop: 48 }, children: /* @__PURE__ */ jsx(Accordion, { items: accordionItems$1, defaultActiveIndex: 2 }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsx("div", { style: inner, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 32 : 64, alignItems: "flex-start", flexWrap: "wrap" }, children: [
      /* @__PURE__ */ jsxs("div", { style: { flex: 1, minWidth: isMobile ? "100%" : 320 }, children: [
        /* @__PURE__ */ jsx(Tag, { label: "HOW WE WORK" }),
        /* @__PURE__ */ jsxs("h2", { style: { ...d2(), marginTop: 16 }, children: [
          "We don't fly in, build something,",
          " ",
          /* @__PURE__ */ jsx("span", { style: { color: red$1 }, children: "and leave." })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 20, marginTop: 28 }, children: [
          "Technossus engineers are embedded in your delivery — not parachuted in to hand over a product and disappear. We work with your team as a natural extension of it: your processes, your governance, your cadence. Capability transfers as we build, so when the engagement ends, your team is stronger than when we started.",
          "Over 90% of our clients extend or expand their engagement within the first year."
        ].map((p, i) => /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$1, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: "#5C5C5C", margin: 0 }, children: p }, i)) })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { flex: 1, display: "grid", gridTemplateColumns: cols2, gap: 20, minWidth: isMobile ? "100%" : 320 }, children: howCards$1.map((card) => /* @__PURE__ */ jsxs("div", { style: { background: "#F2F2F2", padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12 }, children: [
        /* @__PURE__ */ jsx("div", { style: { color: red$1, fontSize: 24 }, children: "◈" }),
        /* @__PURE__ */ jsx("h3", { style: { fontFamily: sans$1, fontSize: 16, fontWeight: 700, color: "#1E1E1E", lineHeight: 1.4, margin: 0 }, children: card.title }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$1, fontSize: 14, lineHeight: 1.6, color: "#5C5C5C", margin: 0 }, children: card.body })
      ] }, card.title)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("div", { style: { maxWidth: 1440, margin: "0 auto", marginBottom: isMobile ? 12 : 16, padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 80px", background: "#fff" }, children: /* @__PURE__ */ jsx(Tag, { label: "PROOF", variant: "dark" }) }),
    /* @__PURE__ */ jsxs("section", { style: { background: dark1$1, position: "relative", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx(CornerTL$1, {}),
      /* @__PURE__ */ jsx(CornerBR$1, {}),
      /* @__PURE__ */ jsxs("div", { style: inner, children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: isMobile ? "flex-start" : "flex-end", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", gap: 16, marginTop: 0, marginBottom: 40 }, children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h1", { style: d1("#fff"), children: [
              "Success ",
              /* @__PURE__ */ jsx("span", { style: { color: red$1 }, children: "stories." })
            ] }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$1, fontSize: 15, color: "#9B9B9B", marginTop: 10 }, children: "When product engineering works, you feel it in pace, clarity, and confidence." })
          ] }),
          /* @__PURE__ */ jsx("a", { href: "#", style: { fontFamily: sans$1, fontSize: 14, color: "#9B9B9B", textDecoration: "underline", whiteSpace: "nowrap", flexShrink: 0 }, children: "View All" })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: cols3, gap: 20 }, children: proofCards$1.map((card, i) => /* @__PURE__ */ jsxs("article", { style: { background: "#262626", border: "1px solid #343434", display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ jsx(PlaceholderBlock, { width: "100%", height: 200, style: { background: "#2A2A2A" } }),
          /* @__PURE__ */ jsxs("div", { style: { padding: "24px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }, children: [
            /* @__PURE__ */ jsx("div", { style: { fontFamily: sans$1, fontSize: 11, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "#767676" }, children: card.tags }),
            /* @__PURE__ */ jsx("h3", { style: { fontFamily: sans$1, fontSize: 18, fontWeight: 700, color: "#fff", lineHeight: 1.4, margin: 0 }, children: card.title }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$1, fontSize: 14, lineHeight: 1.6, color: "#9B9B9B", flex: 1, margin: 0 }, children: card.excerpt }),
            /* @__PURE__ */ jsx("a", { href: "#", style: { fontFamily: sans$1, fontSize: 14, fontWeight: 700, color: red$1, textDecoration: "underline", marginTop: 8 }, children: "See How We Work →" })
          ] })
        ] }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
      /* @__PURE__ */ jsx(Tag, { label: "SOUND FAMILIAR" }),
      /* @__PURE__ */ jsxs("h1", { style: { ...d1(), marginTop: 16 }, children: [
        "If any of these describe where your team is right now, we",
        " ",
        /* @__PURE__ */ jsx("span", { style: { color: red$1 }, children: "should talk." })
      ] }),
      /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$1, fontSize: 15, color: "#5C5C5C", marginTop: 12 }, children: "These aren't hypotheticals. They're the conversations we have most often." }),
      /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: cols2, gap: 24, marginTop: 48 }, children: painCards$1.map((card, i) => /* @__PURE__ */ jsxs("div", { style: { background: "#F2F2F2", padding: "32px 28px", display: "flex", flexDirection: "column", gap: 16 }, children: [
        /* @__PURE__ */ jsx("h3", { style: { fontFamily: sans$1, fontSize: 18, fontWeight: 700, color: "#1E1E1E", lineHeight: 1.4, margin: 0 }, children: card.heading }),
        /* @__PURE__ */ jsx("div", { style: { height: 2, background: red$1, width: 40 } }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$1, fontSize: 14, lineHeight: 1.7, color: "#5C5C5C", margin: 0 }, children: card.body })
      ] }, i)) }),
      /* @__PURE__ */ jsxs("div", { style: { background: dark1$1, padding: isMobile ? "32px 20px" : "48px", marginTop: 48, display: "flex", flexDirection: "column", gap: 20 }, children: [
        /* @__PURE__ */ jsx("h3", { style: { fontFamily: serif$1, fontSize: isMobile ? 22 : 28, fontWeight: 600, color: "#fff", margin: 0 }, children: "Bring us your toughest Engineering problem." }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$1, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: "#B5B5B5", maxWidth: 640, margin: 0 }, children: "We start with a 2-day free consulting engagement — no proposal theater, no 200-slide deck. Just your team, ours, and the real problem on the table." }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Button, { variant: "primary", label: "Bring us your problems →", href: "#" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      CTABanner,
      {
        size: "large",
        label: "LET'S WORK ON IT TOGETHER",
        heading: "Ready to accelerate your digital & AI journey?",
        body: "Whether you're modernizing systems, building a new product, or scaling engineering, we're ready to collaborate.",
        primaryCta: "Schedule a Strategy Session →",
        secondaryCta: "Contact Us"
      }
    ),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } })
  ] });
}
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
const accordionItems = [
  {
    title: "Cloud FinOps & AI Token Optimization",
    subtitle: "Bring FinOps discipline and AI token governance together in one unified cost ownership model.",
    content: {
      type: "detail",
      serviceLabel: "CLOUD FINOPS & AI TOKEN OPTIMIZATION",
      heading: "Your cloud bill has line items nobody on your team can explain.",
      body: [
        "A resource provisioned for a project that pivoted. An environment spun up for testing that never came down. A model integration whose tokens kept flowing after the project moved on. We bring FinOps discipline and AI token governance together in a single practice — because the pattern is the same, and separating them means solving half the problem.",
        "29% of enterprise cloud spend is wasted annually — a rate held between 27–32% every year since 2019. We build the visibility and ownership model that changes that permanently."
      ]
    }
  },
  {
    title: "Multi-Cloud Resilience Engineering",
    subtitle: "Architect for portability, failover, and resilience across AWS, Azure, and GCP.",
    content: {
      type: "detail",
      serviceLabel: "MULTI-CLOUD RESILIENCE ENGINEERING",
      heading: "One vendor's outage shouldn't be your outage.",
      body: [
        "Most multi-cloud environments grew organically — a workload here, an acquisition there. The result is an estate that runs across clouds without being designed for it. We architect for portability, failover, and resilience across AWS, Azure, and GCP — so your infrastructure can absorb disruption at the provider level without passing it to your business.",
        "73% of organizations now run hybrid or multi-cloud environments. Most weren't designed for it from day one."
      ]
    }
  },
  {
    title: "Autonomous Cloud Operations & AI/MLOps",
    subtitle: "Self-healing infrastructure, intelligent observability, and AI-assisted operations at scale.",
    content: {
      type: "detail",
      serviceLabel: "AUTONOMOUS CLOUD OPERATIONS & AI/MLOPS",
      heading: "Your team didn't sign up to babysit infrastructure.",
      body: [
        "Monitoring alerts that fire at 2am. Scaling decisions made manually. MLOps pipelines that require human intervention at every stage. We implement self-healing infrastructure, intelligent observability, and AI-assisted operations so your engineers focus on architecture and business logic — not keeping the lights on.",
        "AIOps and MLOps convergence is now the primary DevOps investment priority for enterprises scaling AI workloads."
      ]
    }
  },
  {
    title: "Cloud-Hosted AI Governance & Compliance",
    subtitle: "Model lifecycle controls, audit trails, and compliance architecture built into your cloud environment.",
    content: {
      type: "detail",
      serviceLabel: "CLOUD-HOSTED AI GOVERNANCE & COMPLIANCE",
      heading: "Govern the models. Own the outcomes.",
      body: [
        "Regulatory pressure on AI is accelerating — the EU AI Act, state-level legislation, and sector-specific requirements are arriving faster than most governance frameworks were designed to absorb. We implement model lifecycle controls, audit trails, policy enforcement, and compliance architecture directly into your cloud environment.",
        "47% of large enterprises now have a dedicated AI governance team or leader — up sharply as regulatory requirements moved from horizon to reality."
      ]
    }
  },
  {
    title: "Cloud Security & Compliance for AI",
    subtitle: "Zero-trust architecture and AI-specific security patterns — defensible by design, not by documentation.",
    content: {
      type: "detail",
      serviceLabel: "CLOUD SECURITY & COMPLIANCE FOR AI",
      heading: "Be the one in the room who already knows the answer.",
      body: [
        "Security posture in AI-era cloud environments isn't just about perimeter controls. It's about zero-trust architecture, DevSecOps pipelines that enforce policy at every deployment, and AI-specific security patterns for inference endpoints and model access. Defensible by design, not by documentation.",
        "Cloud security and AI-specific compliance controls rank as the top buyer concern in enterprise cloud engagements — above cost optimization and above performance."
      ]
    }
  }
];
const howCards = [
  { title: "Your team stays in the driver's seat.", body: "We work alongside your engineers — not instead of them. Architecture decisions, tooling choices, and operational patterns are built with your team's input, not handed down." },
  { title: "Knowledge transfers as we build.", body: "Every session is a working session. Every optimization is explained. Your engineers leave each phase understanding what was built and why." },
  { title: "We work within your existing cloud governance.", body: "We assess what's already in place, strengthen it, and build on it — so your organization's processes stay intact while your capability grows." },
  { title: "The optimization holds after we leave.", body: "We build the hygiene practices, not just the outcome. FinOps discipline, cost attribution, and governance patterns are operational habits your team carries forward." }
];
const proofCards = [
  { tags: "HEALTHCARE • CLINICAL TRIALS", title: "Cloud Platform Helps Save Millions in Clinical Trials", excerpt: "A cloud-based clinical trials system enabled real-time monitoring and early risk detection. With $70M+ trial costs and 80%+ failure rates, early intervention through cloud-enabled visibility helped avoid significant losses." },
  { tags: "MARKETING • ANALYTICS & VOICE", title: "Cloud-Based Analytics and Voice-Driven Brand Insights", excerpt: "A cloud-based data visualization and voice-enabled experience was prototyped to help marketers access brand performance insights faster and more intuitively — reducing analysis time from days to minutes." },
  { tags: "HEALTHCARE • ARCHITECTURE DESIGN", title: "Proof of Concept Minimizes Project Risk", excerpt: "A cloud-based reference architecture was designed and validated to reduce risk in a multi-million-dollar healthcare digital transformation initiative — before a single production line was written." }
];
const painCards = [
  { heading: '"We budgeted for 20% cloud growth. The bill came in at 47%."', body: "AI workloads don't scale linearly, and most budgeting tools weren't built for inference cost volatility. Visibility comes before governance." },
  { heading: '"We have 400 microservices. Three people understand the full picture."', body: "Distributed architecture distributes knowledge risk too. Modernization without documentation and observability creates a different kind of fragility." },
  { heading: `"We're on three clouds. None of them talk to each other the way we need."`, body: "Multi-cloud through acquisition or organic growth rarely produces a coherent operating model. Resilience requires architecture, not just presence." },
  { heading: `"Our ML models are deployed. We have no idea what they're costing us to run."`, body: "Production AI without cost attribution is a liability that compounds with every model update. Token governance is an operational discipline, not a one-time audit." }
];
function CloudModernization() {
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
        title: "Cloud & Product Modernization — Technossus",
        description: "Lift, refactor, and run smarter. Technossus modernizes legacy infrastructure with cloud-native architecture, Kubernetes, and DevOps transformation.",
        canonicalPath: "/services/cloud-product-modernization",
        keywords: "cloud modernization, Kubernetes, DevOps, cloud-native, infrastructure modernization",
        jsonLd: breadcrumbSchema([{ name: "Home", url: "https://newtechnossus-v2.vercel.app" }, { name: "Services", url: "https://newtechnossus-v2.vercel.app/services" }, { name: "Cloud Modernization", url: "https://newtechnossus-v2.vercel.app/services/cloud-product-modernization" }])
      }
    ),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 1440, margin: "0 auto", padding: isMobile ? "32px 16px 48px" : isTablet ? "40px 32px 60px" : "40px 80px 80px" }, children: [
      /* @__PURE__ */ jsx(Breadcrumb, { items: [
        { label: "Home", href: "/" },
        { label: "Service Offerings", href: "/services" },
        { label: "Cloud & Product Modernization", active: true }
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 32 : 60, marginTop: 40 }, children: [
        /* @__PURE__ */ jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 32 }, children: [
          /* @__PURE__ */ jsx("p", { style: { fontFamily: sans, fontWeight: 600, fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", color: "#ADADAD", margin: 0 }, children: "CLOUD CONSULTING AND SUPPORT" }),
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("h1", { style: d1(), children: [
            "The cloud promised to simplify infrastructure and contain costs.",
            " ",
            /* @__PURE__ */ jsx("span", { style: { color: red }, children: "Your last invoice told a different story." })
          ] }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 80, children: /* @__PURE__ */ jsx("p", { style: { fontFamily: sans, fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: "#5C5C5C", margin: 0, maxWidth: 560 }, children: "Complexity crept in quietly — through architectural decisions that made sense at the time, containerized environments that multiplied infrastructure overhead, and AI workloads nobody fully priced. We work alongside your team to untangle what's there, govern what's coming, and build infrastructure that actually earns its cost." }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 120, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 16, flexWrap: "wrap" }, children: [
            /* @__PURE__ */ jsx(Button, { variant: "primary", label: "Show us the Bill", href: "#" }),
            /* @__PURE__ */ jsx(Button, { variant: "secondary", label: "See How We Work", href: "#" })
          ] }) })
        ] }),
        !isMobile && /* @__PURE__ */ jsx("div", { style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: isTablet ? 300 : 460 }, children: /* @__PURE__ */ jsx("img", { src: imgSvcCloud, alt: "", style: { width: "100%", height: isTablet ? 300 : 460, objectFit: "cover", display: "block" } }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { style: { borderTop: "1px solid #E8E8E8" }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 1440, margin: "0 auto", padding: isMobile ? "24px 16px" : "32px 80px", display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }, children: [
      /* @__PURE__ */ jsx("p", { style: { fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: ".12em", color: "#ADADAD", textTransform: "uppercase" }, children: "Trusted By" }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: isMobile ? 24 : 72, flexWrap: "wrap" }, children: ["CEFALY", "ADAPTHEALTH", "GLIDEWELL LABS", "FIRST AMERICAN", "WORD AND BROWN"].map((name) => /* @__PURE__ */ jsx("span", { style: { fontFamily: sans, fontSize: 13, fontWeight: 700, color: "#888", filter: "grayscale(100%)", opacity: 0.65 }, children: name }, name)) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("div", { style: { maxWidth: 1440, margin: "0 auto", marginBottom: isMobile ? 12 : 16, padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 80px", background: "#fff" }, children: /* @__PURE__ */ jsx(Tag, { label: "THE SHIFT", variant: "dark" }) }),
    /* @__PURE__ */ jsxs("section", { style: { background: dark1, position: "relative", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx(CornerTL, {}),
      /* @__PURE__ */ jsx(CornerBR, {}),
      /* @__PURE__ */ jsx("div", { style: inner, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", gap: 48, alignItems: "flex-start", marginTop: 0, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxs("div", { style: { flex: 1, minWidth: isMobile ? "100%" : 320 }, children: [
          /* @__PURE__ */ jsxs("h2", { style: d2("#fff"), children: [
            "Your engineers followed every best practice. They didn't sign up for what it costs to maintain, scale",
            " ",
            /* @__PURE__ */ jsx("span", { style: { color: red }, children: "and keep it running." })
          ] }),
          /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 20, marginTop: 28 }, children: [
            "The move from monolithic systems to microservices and containerized architectures wasn't a mistake — it was the right call, endorsed by every major platform and best-practice framework. What nobody fully modeled was the operational weight that came with it. More services meant more infrastructure to provision, monitor, patch, and govern. Complexity accumulated quietly, one well-intentioned architectural decision at a time.",
            "AI has added an entirely new layer to an environment already carrying more than it showed. Inference endpoints, vector databases, GPU compute, and token consumption don't behave like traditional workloads. We work alongside your team to bring visibility to what's running, governance to what's being added, and architecture that can carry both — without starting over."
          ].map((p, i) => /* @__PURE__ */ jsx("p", { style: { fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: "#B5B5B5", margin: 0 }, children: p }, i)) })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, flex: isMobile ? void 0 : "0 0 440px", width: isMobile ? "100%" : void 0 }, children: [
          { num: "29%", desc: "of enterprise cloud spend is wasted annually — a rate held between 27–32% every year since 2019, ticked up in 2026 as AI workloads added new cost complexity." },
          { num: "73%", desc: "of organizations run hybrid or multi-cloud — most weren't architecturally designed for it from the start." },
          { num: "84%", desc: "of enterprises report AI costs cutting gross margins — only 15% can forecast those costs within ±10%." },
          { num: "Zero", desc: "Handoffs without knowledge transfer. Your team understands what we build before we leave." }
        ].map((s) => /* @__PURE__ */ jsxs("div", { style: { background: "#262626", border: "1px solid #343434", padding: isMobile ? 16 : 24, display: "flex", flexDirection: "column", gap: 12 }, children: [
          /* @__PURE__ */ jsx("div", { style: { fontFamily: serif, fontSize: isMobile ? 28 : 36, lineHeight: 1, fontWeight: 600, color: red }, children: s.num }),
          /* @__PURE__ */ jsx("p", { style: { fontFamily: sans, fontSize: 13, lineHeight: 1.6, color: "#9B9B9B", margin: 0 }, children: s.desc })
        ] }, s.num)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
      /* @__PURE__ */ jsx(Tag, { label: "SERVICE OFFERINGS" }),
      /* @__PURE__ */ jsxs("h2", { style: { ...d2(), marginTop: 16 }, children: [
        "Cloud platforms that stay reliable, controlled, and cost-efficient —",
        " ",
        /* @__PURE__ */ jsx("span", { style: { color: red }, children: "while enabling secure AI adoption." })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { marginTop: 48 }, children: /* @__PURE__ */ jsx(Accordion, { items: accordionItems, defaultActiveIndex: 1 }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsx("div", { style: inner, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 32 : 64, alignItems: "flex-start", flexWrap: "wrap" }, children: [
      /* @__PURE__ */ jsxs("div", { style: { flex: 1, minWidth: isMobile ? "100%" : 320 }, children: [
        /* @__PURE__ */ jsx(Tag, { label: "HOW WE WORK" }),
        /* @__PURE__ */ jsxs("h2", { style: { ...d2(), marginTop: 16 }, children: [
          "We don't clean up your cloud and leave your team",
          " ",
          /* @__PURE__ */ jsx("span", { style: { color: red }, children: "no smarter than when we arrived." })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 20, marginTop: 28 }, children: [
          "The pattern is familiar: a consultant reduces the bill, optimizes the architecture, hands off runbooks — and six months later the costs are back. Not because the work was wrong. Because the capability didn't transfer. We build embedded into your team, not alongside it. Every FinOps practice, every governance layer, every automation — your engineers are in the room, learning as it happens.",
          "We've maintained a 90%+ client retention rate not because engagements are sticky, but because the outcomes are. More than half our cloud engagements extend because clients want to go deeper, not because they have to."
        ].map((p, i) => /* @__PURE__ */ jsx("p", { style: { fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: "#5C5C5C", margin: 0 }, children: p }, i)) })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { flex: 1, display: "grid", gridTemplateColumns: cols2, gap: 20, minWidth: isMobile ? "100%" : 320 }, children: howCards.map((card) => /* @__PURE__ */ jsxs("div", { style: { background: "#F2F2F2", padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12 }, children: [
        /* @__PURE__ */ jsx("div", { style: { color: red, fontSize: 24 }, children: "◈" }),
        /* @__PURE__ */ jsx("h3", { style: { fontFamily: sans, fontSize: 16, fontWeight: 700, color: "#1E1E1E", lineHeight: 1.4, margin: 0 }, children: card.title }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: "#5C5C5C", margin: 0 }, children: card.body })
      ] }, card.title)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("div", { style: { maxWidth: 1440, margin: "0 auto", marginBottom: isMobile ? 12 : 16, padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 80px", background: "#fff" }, children: /* @__PURE__ */ jsx(Tag, { label: "PROOF", variant: "dark" }) }),
    /* @__PURE__ */ jsxs("section", { style: { background: dark1, position: "relative", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx(CornerTL, {}),
      /* @__PURE__ */ jsx(CornerBR, {}),
      /* @__PURE__ */ jsxs("div", { style: inner, children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: isMobile ? "flex-start" : "flex-end", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", gap: 16, marginTop: 0, marginBottom: 40 }, children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h1", { style: d1("#fff"), children: [
              "Success ",
              /* @__PURE__ */ jsx("span", { style: { color: red }, children: "stories." })
            ] }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans, fontSize: 15, color: "#9B9B9B", marginTop: 10 }, children: "Real cloud outcomes from organizations that needed control as much as capability." })
          ] }),
          /* @__PURE__ */ jsx("a", { href: "#", style: { fontFamily: sans, fontSize: 14, color: "#9B9B9B", textDecoration: "underline", whiteSpace: "nowrap", flexShrink: 0 }, children: "View All" })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: cols3, gap: 20 }, children: proofCards.map((card, i) => /* @__PURE__ */ jsxs("article", { style: { background: "#262626", border: "1px solid #343434", display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ jsx(PlaceholderBlock, { width: "100%", height: 200, style: { background: "#2A2A2A" } }),
          /* @__PURE__ */ jsxs("div", { style: { padding: "24px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }, children: [
            /* @__PURE__ */ jsx("div", { style: { fontFamily: sans, fontSize: 11, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "#767676" }, children: card.tags }),
            /* @__PURE__ */ jsx("h3", { style: { fontFamily: sans, fontSize: 18, fontWeight: 700, color: "#fff", lineHeight: 1.4, margin: 0 }, children: card.title }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: "#9B9B9B", flex: 1, margin: 0 }, children: card.excerpt }),
            /* @__PURE__ */ jsx("a", { href: "#", style: { fontFamily: sans, fontSize: 14, fontWeight: 700, color: red, textDecoration: "underline", marginTop: 8 }, children: "See How We Work →" })
          ] })
        ] }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
      /* @__PURE__ */ jsx(Tag, { label: "SOUND FAMILIAR" }),
      /* @__PURE__ */ jsxs("h1", { style: { ...d1(), marginTop: 16 }, children: [
        "If any of these feel recent, we",
        " ",
        /* @__PURE__ */ jsx("span", { style: { color: red }, children: "should talk." })
      ] }),
      /* @__PURE__ */ jsx("p", { style: { fontFamily: sans, fontSize: 15, color: "#5C5C5C", marginTop: 12 }, children: "These aren't edge cases. They're the conversations we have most often." }),
      /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: cols2, gap: 24, marginTop: 48 }, children: painCards.map((card, i) => /* @__PURE__ */ jsxs("div", { style: { background: "#F2F2F2", padding: "32px 28px", display: "flex", flexDirection: "column", gap: 16 }, children: [
        /* @__PURE__ */ jsx("h3", { style: { fontFamily: sans, fontSize: 18, fontWeight: 700, color: "#1E1E1E", lineHeight: 1.4, margin: 0 }, children: card.heading }),
        /* @__PURE__ */ jsx("div", { style: { height: 2, background: red, width: 40 } }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: sans, fontSize: 14, lineHeight: 1.7, color: "#5C5C5C", margin: 0 }, children: card.body })
      ] }, i)) }),
      /* @__PURE__ */ jsxs("div", { style: { background: dark1, padding: isMobile ? "32px 20px" : "48px", marginTop: 48, display: "flex", flexDirection: "column", gap: 20 }, children: [
        /* @__PURE__ */ jsx("h3", { style: { fontFamily: serif, fontSize: isMobile ? 22 : 28, fontWeight: 600, color: "#fff", margin: 0 }, children: "Bring us your toughest cloud problem." }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: sans, fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: "#B5B5B5", maxWidth: 640, margin: 0 }, children: "We'll invest two days understanding your environment — your architecture, your cost profile, your team's current capabilities — and come back within a week with a concrete approach. No proposal theater. No 200-slide assessment deck. Just clarity on what's actually happening and what to do about it." }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Button, { variant: "primary", label: "Bring us your problems →", href: "#" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      CTABanner,
      {
        size: "large",
        label: "LET'S WORK ON IT TOGETHER",
        heading: "Ready to accelerate your digital & AI journey?",
        body: "Whether you're modernizing systems, building a new product, or scaling engineering, we're ready to collaborate.",
        primaryCta: "Schedule a Strategy Session →",
        secondaryCta: "Contact Us"
      }
    ),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } })
  ] });
}
export {
  Accordion as A,
  Breadcrumb as B,
  Card as C,
  DecorativeOverlay as D,
  FadeUp as F,
  ProductEngineering as P,
  QualityEngineering as Q,
  SEOHead as S,
  Tag as T,
  Button as a,
  breadcrumbSchema as b,
  CTABanner as c,
  Stats as d,
  DecorativeImage as e,
  imgSvcCloud as f,
  imgSvcData as g,
  imgSvcDigital as h,
  imgSvcAI as i,
  imgSvcProduct as j,
  imgHero as k,
  TextInputField as l,
  AIBusiness as m,
  DataIntelligence as n,
  organizationSchema as o,
  DigitalExperience as p,
  CloudModernization as q,
  useBreakpoint as u,
  websiteSchema as w
};
