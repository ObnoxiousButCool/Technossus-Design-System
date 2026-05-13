import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { HelmetProvider } from "react-helmet-async";
import { useLocation, Outlet, Routes, Route } from "react-router-dom";
import { useState, useRef, useCallback, useEffect } from "react";
import { u as useBreakpoint, S as SEOHead, o as organizationSchema, w as websiteSchema, F as FadeUp, a as Button, T as Tag, d as Stats, D as DecorativeOverlay, e as DecorativeImage, C as Card, i as imgSvcAI, f as imgSvcCloud, g as imgSvcData, h as imgSvcDigital, j as imgSvcProduct, k as imgHero$1, c as CTABanner, b as breadcrumbSchema, l as TextInputField, A as Accordion, B as Breadcrumb, m as AIBusiness, n as DataIntelligence, p as DigitalExperience, P as ProductEngineering, Q as QualityEngineering, q as CloudModernization } from "./assets/pages-services-DzA64b9Y.mjs";
import { H as Healthcare, F as FinancialServices, a as HiTechSaaS } from "./assets/pages-industries-CBg9mvGp.mjs";
const imgGroupDark = "/assets/848a2b3ff5faeffd006796fa2fd67e06f439fc5a.svg";
const imgVectorDark = "/assets/efd5f1d9f9e1ddeffb9a2c0e8bdb4bf929613739.svg";
const imgVector1Dark = "/assets/6124ed745a3f456ad8224b80fd39bfef3a22bf3d.svg";
const imgGroupMobile = "/assets/695666a5f2eb0d5292832164ad938ed7569216fd.svg";
const imgVectorMobile = "/assets/d87fac3a6d6d9e25c67b5a01544bc22857c3f986.svg";
const imgVector1Mobile = "/assets/8b570c1a688d9313d655e94f4df2d62c83009b0e.svg";
const imgChevronDown = "/assets/f88d5745dbe17d6eba516dff8c1ec66ec8f95eab.svg";
const imgChevronDownRed = "/assets/872f59963a8db7797238fb9af0174f8aafeeae1e.svg";
const imgDehaze = "/assets/6e17ae7884a4c0e898213f199f1e02dde4bf9183.svg";
const imgClose = "/assets/9e2c1bf0fb472642f558f6a71e09a2760043da15.svg";
const imgChevronMobile = "/assets/c1a9ec4c00df07c37e0547669be3582f3fea68da.svg";
const imgChevronMobile2 = "/assets/2b83e41f03742bdfe0c3187ec66114fe384b11e1.svg";
const sans$b = '"General Sans", system-ui, -apple-system, sans-serif';
const red$8 = "#ED2939";
const dark$2 = "#383838";
const defaultNavItems = [
  { label: "AI Studio", href: "/ai-studio" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "AI Led Business Transformation", href: "/services/ai-business-transformation", description: "Engineering the new operating model." },
      { label: "Data Intelligence & Analytics", href: "/services/data-intelligence-analytics", description: "Turn into a decision engine." },
      { label: "Digital Experience Design", href: "/services/digital-experience-design", description: "Reimagine product, UX and brand." },
      { label: "Product Engineering", href: "/services/product-engineering", description: "Ship full-stack at startup speed." },
      { label: "Quality Engineering & Automation", href: "/services/quality-engineering", description: "Test, observe, accelerate releases." },
      { label: "Cloud & Product Modernization", href: "/services/cloud-product-modernization", description: "Lift, refactor, and run smarter." }
    ]
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "HiTech / SaaS", href: "/industries/hitech-saas" }
    ]
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Insights", href: "/insights" },
      { label: "Case Studies", href: "/case-studies" }
    ]
  },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" }
];
function MegaMenuLink({ child, onClose }) {
  const [isHovered, setIsHovered] = useState(false);
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: child.href,
      onClick: onClose,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      style: { display: "flex", flexDirection: "column", gap: 8, textDecoration: "none" },
      children: [
        /* @__PURE__ */ jsxs("span", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              style: {
                fontFamily: sans$b,
                fontWeight: 600,
                fontSize: 20,
                lineHeight: "28px",
                color: isHovered ? red$8 : dark$2,
                transition: "color 0.15s ease",
                borderBottom: "1px solid transparent",
                borderBottomColor: isHovered ? red$8 : "transparent",
                paddingBottom: 1
              },
              children: child.label
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              style: {
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? "translateX(0px)" : "translateX(-6px)",
                transition: "opacity 0.18s ease, transform 0.18s ease",
                color: red$8,
                fontSize: 18,
                lineHeight: 1,
                flexShrink: 0
              },
              children: "›"
            }
          )
        ] }),
        child.description && /* @__PURE__ */ jsx("span", { style: { fontFamily: sans$b, fontWeight: 500, fontSize: 16, lineHeight: "24px", color: isHovered ? "#ED2939" : "#949494", transition: "color 0.15s ease" }, children: child.description })
      ]
    }
  );
}
function MainHeader({
  navItems = defaultNavItems,
  ctaLabel = "Contact us",
  ctaHref = "/contact",
  className = "",
  style
}) {
  const { isMobile } = useBreakpoint();
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [dropdownMounted, setDropdownMounted] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState("Service Offerings");
  const [mobilePressed, setMobilePressed] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [ctaHovered, setCtaHovered] = useState(false);
  const headerRef = useRef(null);
  const closeTimerRef = useRef(null);
  const openTimerRef = useRef(null);
  const clearTimers = useCallback(() => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);
  const handleNavEnter = useCallback((label) => {
    clearTimers();
    openTimerRef.current = setTimeout(() => {
      setOpenDropdown(label);
    }, 120);
  }, [clearTimers]);
  const handleNavLeave = useCallback(() => {
    clearTimers();
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 180);
  }, [clearTimers]);
  const handleDropdownEnter = useCallback(() => {
    clearTimers();
  }, [clearTimers]);
  const handleDropdownLeave = useCallback(() => {
    clearTimers();
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 180);
  }, [clearTimers]);
  const isItemActive = (item) => {
    const path = location.pathname;
    if (item.children) {
      return item.children.some((c) => path.startsWith(c.href)) || path === item.href;
    }
    if (item.href === "/") return path === "/";
    return path === item.href || path.startsWith(item.href + "/");
  };
  const animTimerRef = useRef(null);
  useEffect(() => {
    if (animTimerRef.current) {
      clearTimeout(animTimerRef.current);
      animTimerRef.current = null;
    }
    if (openDropdown !== null) {
      setDropdownMounted(openDropdown);
      setDropdownVisible(openDropdown);
    } else {
      setDropdownVisible(null);
      animTimerRef.current = setTimeout(() => {
        setDropdownMounted(null);
        animTimerRef.current = null;
      }, 220);
    }
    return () => {
      if (animTimerRef.current) clearTimeout(animTimerRef.current);
    };
  }, [openDropdown]);
  useEffect(() => {
    const handler = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const DesktopLogo = () => /* @__PURE__ */ jsxs("div", { style: { height: 32, position: "relative", flexShrink: 0, width: 192.849, overflow: "hidden" }, children: [
    /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: "24.85%", right: "7.54%", bottom: "24.85%", left: "8.11%" }, children: /* @__PURE__ */ jsx("img", { alt: "Technossus", src: imgGroupDark, style: { position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" } }) }),
    /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, right: "95.74%", bottom: 0, left: 0 }, children: /* @__PURE__ */ jsx("img", { alt: "", src: imgVectorDark, style: { position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" } }) }),
    /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, right: 0, bottom: 0, left: "95.93%" }, children: /* @__PURE__ */ jsx("img", { alt: "", src: imgVector1Dark, style: { position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" } }) })
  ] });
  const MobileLogo = () => /* @__PURE__ */ jsxs("div", { style: { height: 24, position: "relative", flexShrink: 0, width: 144.637, overflow: "hidden" }, children: [
    /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: "24.85%", right: "7.54%", bottom: "24.85%", left: "8.11%" }, children: /* @__PURE__ */ jsx("img", { alt: "Technossus", src: imgGroupMobile, style: { position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" } }) }),
    /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, right: "95.74%", bottom: 0, left: 0 }, children: /* @__PURE__ */ jsx("img", { alt: "", src: imgVectorMobile, style: { position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" } }) }),
    /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, right: 0, bottom: 0, left: "95.93%" }, children: /* @__PURE__ */ jsx("img", { alt: "", src: imgVector1Mobile, style: { position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" } }) })
  ] });
  return /* @__PURE__ */ jsxs(
    "header",
    {
      ref: headerRef,
      className,
      "data-node-id": isMobile ? "85:590" : "38:842",
      style: {
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #EEEEEE",
        position: "sticky",
        top: 0,
        zIndex: 1e3,
        width: "100%",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.07)" : "none",
        transition: "box-shadow 0.3s ease",
        ...style
      },
      children: [
        !isMobile && /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              display: "flex",
              gap: 40,
              height: 80,
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 1,
              paddingLeft: 96,
              paddingRight: 96,
              width: "100%",
              boxSizing: "border-box",
              position: "relative"
            },
            children: [
              /* @__PURE__ */ jsx("a", { href: "/", style: { display: "inline-flex", flexShrink: 0, lineHeight: 0 }, children: /* @__PURE__ */ jsx(DesktopLogo, {}) }),
              /* @__PURE__ */ jsx(
                "nav",
                {
                  style: {
                    flex: "1 0 0",
                    minWidth: 0,
                    position: "relative",
                    display: "flex"
                  },
                  children: /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: 32, alignItems: "center", justifyContent: "center", width: "100%" }, children: navItems.map((item) => {
                    const isActive = isItemActive(item);
                    const isOpen = openDropdown === item.label;
                    const isHovered = hoveredNav === item.label;
                    const highlight = isActive || isOpen || isHovered;
                    if (item.children) {
                      return /* @__PURE__ */ jsx(
                        "div",
                        {
                          style: { position: "relative" },
                          onMouseEnter: () => {
                            setHoveredNav(item.label);
                            handleNavEnter(item.label);
                          },
                          onMouseLeave: () => {
                            setHoveredNav(null);
                            handleNavLeave();
                          },
                          children: /* @__PURE__ */ jsxs(
                            "button",
                            {
                              "aria-expanded": isOpen,
                              onClick: () => {
                                clearTimers();
                                setOpenDropdown(isOpen ? null : item.label);
                              },
                              style: {
                                display: "flex",
                                gap: 4,
                                alignItems: "center",
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                padding: "8px 0",
                                fontFamily: sans$b,
                                fontWeight: highlight ? 600 : 500,
                                fontSize: 14,
                                lineHeight: "20px",
                                color: highlight ? red$8 : dark$2,
                                whiteSpace: "nowrap",
                                transition: "color 0.15s ease, font-weight 0.15s ease"
                              },
                              children: [
                                item.label,
                                /* @__PURE__ */ jsx("div", { style: { width: 16, height: 16, position: "relative", flexShrink: 0 }, children: /* @__PURE__ */ jsx(
                                  "img",
                                  {
                                    alt: "",
                                    src: highlight ? imgChevronDownRed : imgChevronDown,
                                    style: {
                                      position: "absolute",
                                      inset: 0,
                                      width: "100%",
                                      height: "100%",
                                      display: "block",
                                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                                      transition: "transform 0.22s ease"
                                    }
                                  }
                                ) })
                              ]
                            }
                          )
                        },
                        item.label
                      );
                    }
                    return /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: item.href,
                        onMouseEnter: () => setHoveredNav(item.label),
                        onMouseLeave: () => setHoveredNav(null),
                        style: {
                          fontFamily: sans$b,
                          fontWeight: highlight ? 600 : 500,
                          fontSize: 14,
                          lineHeight: "20px",
                          color: highlight ? red$8 : dark$2,
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                          transition: "color 0.15s ease"
                        },
                        children: item.label
                      },
                      item.label
                    );
                  }) })
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: ctaHref,
                  onMouseEnter: () => setCtaHovered(true),
                  onMouseLeave: () => setCtaHovered(false),
                  style: {
                    backgroundColor: ctaHovered ? red$8 : "#1E1E1E",
                    color: "#FFFFFF",
                    fontFamily: sans$b,
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "20px",
                    padding: "8px 24px",
                    height: 48,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    width: 122,
                    boxSizing: "border-box",
                    transition: "background-color 0.15s ease"
                  },
                  children: ctaLabel
                }
              )
            ]
          }
        ),
        !isMobile && dropdownMounted && (() => {
          const active = navItems.find((i) => i.label === dropdownMounted);
          if (!(active == null ? void 0 : active.children)) return null;
          return /* @__PURE__ */ jsx(
            "div",
            {
              onMouseEnter: handleDropdownEnter,
              onMouseLeave: handleDropdownLeave,
              style: {
                position: "absolute",
                left: 0,
                right: 0,
                backgroundColor: "#FFFFFF",
                borderBottom: "1px solid #EEEEEE",
                boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                paddingTop: 48,
                paddingBottom: 63,
                opacity: dropdownVisible ? 1 : 0,
                transform: dropdownVisible ? "translateY(0)" : "translateY(-10px)",
                transition: "opacity 0.22s cubic-bezier(0.16,1,0.3,1), transform 0.22s cubic-bezier(0.16,1,0.3,1)"
              },
              children: /* @__PURE__ */ jsx(
                "div",
                {
                  style: {
                    maxWidth: 1248,
                    margin: "0 auto",
                    padding: "0 96px",
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: "40px 80px"
                  },
                  children: active.children.map((child) => /* @__PURE__ */ jsx(MegaMenuLink, { child, onClose: () => setOpenDropdown(null) }, child.label))
                }
              )
            }
          );
        })(),
        isMobile && !mobileOpen && /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 80,
              paddingBottom: 1,
              paddingLeft: 20,
              paddingRight: 20,
              width: "100%",
              boxSizing: "border-box"
            },
            children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 24, alignItems: "center", justifyContent: "center", width: "100%" }, children: [
              /* @__PURE__ */ jsx("div", { style: { display: "flex", flex: "1 0 0", flexDirection: "column", alignItems: "flex-start", minWidth: 0 }, children: /* @__PURE__ */ jsx("a", { href: "/", style: { display: "inline-flex", lineHeight: 0 }, children: /* @__PURE__ */ jsx(MobileLogo, {}) }) }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  "aria-label": "Open menu",
                  onClick: () => setMobileOpen(true),
                  style: { background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", flexShrink: 0 },
                  children: /* @__PURE__ */ jsx("div", { style: { width: 32, height: 32, position: "relative" }, children: /* @__PURE__ */ jsx("img", { alt: "", src: imgDehaze, style: { position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" } }) })
                }
              )
            ] })
          }
        ),
        isMobile && mobileOpen && /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              position: "fixed",
              inset: 0,
              backgroundColor: "#FFFFFF",
              zIndex: 998,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 32,
              alignItems: "center",
              paddingBottom: 25,
              paddingTop: 24,
              paddingLeft: 20,
              paddingRight: 20,
              borderBottom: "1px solid #E5E7EB",
              width: "100%",
              boxSizing: "border-box"
            },
            children: [
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 24, alignItems: "center", justifyContent: "center", flexShrink: 0, width: "100%" }, children: [
                /* @__PURE__ */ jsx("div", { style: { display: "flex", flex: "1 0 0", flexDirection: "column", alignItems: "flex-start", minWidth: 0 }, children: /* @__PURE__ */ jsx(MobileLogo, {}) }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    "aria-label": "Close menu",
                    onClick: () => setMobileOpen(false),
                    style: { background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", flexShrink: 0 },
                    children: /* @__PURE__ */ jsx("div", { style: { width: 32, height: 32, position: "relative" }, children: /* @__PURE__ */ jsx("img", { alt: "", src: imgClose, style: { position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" } }) })
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("nav", { style: { display: "flex", flexDirection: "column", alignItems: "flex-start", flexShrink: 0, width: "100%" }, children: navItems.map((item) => {
                const isExpanded = mobileExpanded === item.label;
                if (item.children) {
                  return /* @__PURE__ */ jsxs("div", { style: { width: "100%" }, children: [
                    /* @__PURE__ */ jsxs(
                      "button",
                      {
                        "aria-expanded": isExpanded,
                        onClick: () => setMobileExpanded(isExpanded ? null : item.label),
                        style: {
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          paddingTop: 24,
                          paddingBottom: 24,
                          borderBottom: "1px solid #C6C6C7",
                          background: "none",
                          border: "none",
                          borderBottomWidth: 1,
                          borderBottomStyle: "solid",
                          borderBottomColor: "#C6C6C7",
                          cursor: "pointer"
                        },
                        children: [
                          /* @__PURE__ */ jsx(
                            "span",
                            {
                              style: {
                                fontFamily: sans$b,
                                fontWeight: 600,
                                fontSize: 20,
                                lineHeight: "28px",
                                color: dark$2,
                                whiteSpace: "nowrap"
                              },
                              children: item.label === "Services" ? "Service Offerings" : item.label
                            }
                          ),
                          /* @__PURE__ */ jsx("div", { style: { width: 24, height: 24, position: "relative", flexShrink: 0 }, children: /* @__PURE__ */ jsx(
                            "img",
                            {
                              alt: "",
                              src: isExpanded ? imgChevronMobile2 : imgChevronMobile,
                              style: { position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }
                            }
                          ) })
                        ]
                      }
                    ),
                    isExpanded && item.children && /* @__PURE__ */ jsx("div", { children: item.children.map((child) => /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: child.href,
                        onClick: () => setMobileOpen(false),
                        onMouseDown: () => setMobilePressed(child.label),
                        onMouseUp: () => setMobilePressed(null),
                        onTouchStart: () => setMobilePressed(child.label),
                        onTouchEnd: () => setMobilePressed(null),
                        style: {
                          display: "flex",
                          alignItems: "center",
                          padding: "20px 16px",
                          fontFamily: sans$b,
                          fontWeight: 500,
                          fontSize: 18,
                          lineHeight: "24px",
                          color: mobilePressed === child.label ? red$8 : dark$2,
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                          backgroundColor: mobilePressed === child.label ? "#F5F5F5" : "transparent",
                          transition: "color 0.1s ease, background-color 0.1s ease"
                        },
                        children: child.label
                      },
                      child.label
                    )) })
                  ] }, item.label);
                }
                return /* @__PURE__ */ jsx(
                  "div",
                  {
                    style: { width: "100%", borderBottom: "1px solid #C6C6C7" },
                    children: /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: item.href,
                        onClick: () => setMobileOpen(false),
                        onMouseDown: () => setMobilePressed(item.label),
                        onMouseUp: () => setMobilePressed(null),
                        onTouchStart: () => setMobilePressed(item.label),
                        onTouchEnd: () => setMobilePressed(null),
                        style: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          paddingTop: 24,
                          paddingBottom: 24,
                          width: "100%",
                          backgroundColor: mobilePressed === item.label ? "#F5F5F5" : "transparent",
                          transition: "background-color 0.1s ease"
                        },
                        children: /* @__PURE__ */ jsx(
                          "span",
                          {
                            style: {
                              flex: "1 0 0",
                              fontFamily: sans$b,
                              fontWeight: 600,
                              fontSize: 20,
                              lineHeight: "28px",
                              color: mobilePressed === item.label ? red$8 : dark$2,
                              textDecoration: "none",
                              transition: "color 0.1s ease"
                            },
                            children: item.label
                          }
                        )
                      }
                    )
                  },
                  item.label
                );
              }) })
            ]
          }
        )
      ]
    }
  );
}
const imgBgGlow = "/assets/e656c8753bae72822861dd6f6ef7424990db2349.png";
const imgGroupLogo = "/assets/30f5ea3fef5714e5969e054275c3c3d5f425deac.svg";
const imgVectorL = "/assets/22da8268791bf1ad67d4263cf0b4f098e5054b2e.svg";
const imgVectorR = "/assets/e42f40009d317a9d71ff95afdb66d5607546eef7.svg";
const imgSocialIG = "/assets/6a00908eb6bd4641b0a4e8cb2350f564e48d7d2b.svg";
const imgSocialLI = "/assets/fa373e610fe616834b7105bb1d4d3616c6199f8e.svg";
const imgSocialX = "/assets/c5d3af9e9305ffc0b3b4359688a0df3337d46980.svg";
const imgSocialGH = "/assets/be84f68c6a79149d79e586b0b5b01611477cc446.svg";
const imgMail = "/assets/e8d6b5721b7832e3e8b3dfff1882e57b57f43b3b.svg";
const imgCall = "/assets/cc2161879de0de7879df9185d3f3d1dd0da8626f.svg";
const imgLocationOn = "/assets/574d773c73caadf45288b9d45439cb8fe275e1f9.svg";
const sans$a = '"General Sans", system-ui, -apple-system, sans-serif';
const gray500 = "#ADADAD";
const gray200 = "#F5F5F5";
const gray300 = "#E1E0E0";
const red$7 = "#ED2939";
const defaultGroups = [
  {
    heading: "OUR OFFERINGS",
    links: [
      { label: "AI Led Business Transformation", href: "/services/ai-business-transformation" },
      { label: "Product Engineering", href: "/services/product-engineering" },
      { label: "Data Intelligence & Analytics", href: "/services/data-intelligence-analytics" },
      { label: "Cloud & Product Modernization", href: "/services/cloud-product-modernization" },
      { label: "Digital Experience Design", href: "/services/digital-experience-design" },
      { label: "Quality Engineering & Verification", href: "/services/quality-engineering" },
      { label: "AI Studio", href: "/ai-studio" }
    ]
  },
  {
    heading: "INDUSTRIES",
    links: [
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "HiTech / SaaS", href: "/industries/hitech-saas" }
    ]
  },
  {
    heading: "COMPANY",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Insights", href: "/insights" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Contact", href: "/contact" }
    ]
  }
];
function FooterLink({ label, href }) {
  const [hovered, setHovered] = useState(false);
  return /* @__PURE__ */ jsx(
    "a",
    {
      href,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        fontFamily: sans$a,
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "20px",
        color: hovered ? red$7 : gray500,
        textDecoration: "none",
        display: "block",
        width: "100%",
        transition: "color 0.15s"
      },
      children: label
    }
  );
}
function SocialIcon({ src, alt, boxed = false }) {
  return boxed ? /* @__PURE__ */ jsx("div", { style: { border: `1px solid ${gray300}`, display: "flex", height: 32, width: 32, alignItems: "center", justifyContent: "center", overflow: "hidden", flexShrink: 0 }, children: /* @__PURE__ */ jsx("img", { alt, src, style: { width: 16, height: 16, display: "block" } }) }) : /* @__PURE__ */ jsx("div", { style: { width: 32, height: 32, position: "relative", flexShrink: 0 }, children: /* @__PURE__ */ jsx("img", { alt, src, style: { position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" } }) });
}
function MainFooter({ linkGroups = defaultGroups, className = "", style }) {
  const { isMobile, isTablet } = useBreakpoint();
  return /* @__PURE__ */ jsxs(
    "footer",
    {
      className,
      style: {
        backgroundColor: "#0B0B0B",
        display: "flex",
        flexDirection: "column",
        gap: isMobile ? 32 : 48,
        alignItems: "flex-start",
        overflow: "hidden",
        paddingBottom: isMobile ? 48 : 80,
        paddingTop: isMobile ? 40 : 52,
        paddingLeft: isMobile ? 16 : isTablet ? 32 : 96,
        paddingRight: isMobile ? 16 : isTablet ? 32 : 96,
        position: "relative",
        width: "100%",
        boxSizing: "border-box",
        ...style
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              height: 180,
              width: "100%",
              opacity: 0.46,
              pointerEvents: "none",
              overflow: "hidden"
            },
            children: /* @__PURE__ */ jsx(
              "img",
              {
                alt: "",
                src: imgBgGlow,
                style: { position: "absolute", height: "420%", left: 0, top: "-186%", width: "100%", maxWidth: "none" }
              }
            )
          }
        ),
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "flex-start", justifyContent: "space-between", width: "100%", position: "relative", gap: isMobile ? 32 : 0 }, children: [
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", justifyContent: "space-between", width: isMobile ? "100%" : 275, alignSelf: "stretch", flexShrink: 0 }, children: [
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start" }, children: [
              /* @__PURE__ */ jsxs("div", { style: { height: 32.5, position: "relative", overflow: "hidden", flexShrink: 0, width: 195.7 }, children: [
                /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: "24.85%", right: "7.54%", bottom: "24.85%", left: "8.11%" }, children: /* @__PURE__ */ jsx("img", { alt: "Technossus", src: imgGroupLogo, style: { position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" } }) }),
                /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, right: "95.74%", bottom: 0, left: 0 }, children: /* @__PURE__ */ jsx("img", { alt: "", src: imgVectorL, style: { position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" } }) }),
                /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, right: 0, bottom: 0, left: "95.93%" }, children: /* @__PURE__ */ jsx("img", { alt: "", src: imgVectorR, style: { position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" } }) })
              ] }),
              /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$a, fontWeight: 500, fontSize: 14, lineHeight: "20px", color: gray300, margin: 0, width: "100%" }, children: "Leading the charge in enterprise digital transformation, combining deep technical expertise with a relentless focus on client success." })
            ] }),
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 16, alignItems: "center", marginTop: 24 }, children: [
              /* @__PURE__ */ jsx(SocialIcon, { src: imgSocialIG, alt: "Instagram", boxed: true }),
              /* @__PURE__ */ jsx(SocialIcon, { src: imgSocialLI, alt: "LinkedIn" }),
              /* @__PURE__ */ jsx(SocialIcon, { src: imgSocialX, alt: "X", boxed: true }),
              /* @__PURE__ */ jsx(SocialIcon, { src: imgSocialGH, alt: "GitHub", boxed: true })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexWrap: isMobile ? "wrap" : "nowrap", gap: isMobile ? 32 : 48, alignItems: "flex-start", width: isMobile ? "100%" : void 0 }, children: [
            linkGroups.map((group) => /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start", flexShrink: 0 }, children: [
              /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$a, fontWeight: 600, fontSize: 14, lineHeight: "20px", color: gray200, margin: 0, whiteSpace: "nowrap" }, children: group.heading }),
              /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 12, width: group.heading === "OUR OFFERINGS" ? 216 : void 0 }, children: group.links.map((link) => /* @__PURE__ */ jsx(FooterLink, { ...link }, link.label)) })
            ] }, group.heading)),
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start", flexShrink: 0, width: isMobile ? "100%" : 273 }, children: [
              /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$a, fontWeight: 600, fontSize: 14, lineHeight: "20px", color: gray200, margin: 0 }, children: "GET IN TOUCH" }),
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 12, width: "100%" }, children: [
                /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 12, alignItems: "center" }, children: [
                  /* @__PURE__ */ jsx("img", { alt: "", src: imgMail, style: { width: 16, height: 16, flexShrink: 0, display: "block" } }),
                  /* @__PURE__ */ jsx("span", { style: { fontFamily: sans$a, fontWeight: 500, fontSize: 14, lineHeight: "20px", color: gray500 }, children: "contact@technossus.com" })
                ] }),
                /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 12, alignItems: "center" }, children: [
                  /* @__PURE__ */ jsx("img", { alt: "", src: imgCall, style: { width: 16, height: 16, flexShrink: 0, display: "block" } }),
                  /* @__PURE__ */ jsx("span", { style: { fontFamily: sans$a, fontWeight: 500, fontSize: 14, lineHeight: "20px", color: gray500 }, children: "+1 (949) 769-3500" })
                ] }),
                /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
                  /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 12, alignItems: "center" }, children: [
                    /* @__PURE__ */ jsx("img", { alt: "", src: imgLocationOn, style: { width: 16, height: 16, flexShrink: 0, display: "block" } }),
                    /* @__PURE__ */ jsx("span", { style: { fontFamily: sans$a, fontWeight: 500, fontSize: 14, lineHeight: "20px", color: gray500 }, children: "Location" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 8, paddingLeft: 28 }, children: ["USA: Irvine, CA  (Headquarters)", "UK: London", "INDIA: Pune, Ludhyana"].map((loc) => /* @__PURE__ */ jsx("span", { style: { fontFamily: sans$a, fontWeight: 500, fontSize: 14, lineHeight: "20px", color: gray500 }, children: loc }, loc)) })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", width: "100%", position: "relative", gap: isMobile ? 16 : 0 }, children: [
          /* @__PURE__ */ jsxs("span", { style: { fontFamily: sans$a, fontWeight: 500, fontSize: 14, lineHeight: "20px", color: gray500, whiteSpace: "nowrap" }, children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " Technossus. All rights reserved."
          ] }),
          /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: isMobile ? 16 : 32, alignItems: "center", flexWrap: "wrap" }, children: [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
            { label: "Cookie Policy", href: "/cookies" }
          ].map(({ label, href }) => /* @__PURE__ */ jsx(
            "a",
            {
              href,
              style: { fontFamily: sans$a, fontWeight: 500, fontSize: 14, lineHeight: "20px", color: gray500, textDecoration: "none", whiteSpace: "nowrap" },
              children: label
            },
            label
          )) })
        ] })
      ]
    }
  );
}
function Layout() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(MainHeader, {}),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(MainFooter, {})
  ] });
}
const imgQuoteRed = "/assets/0998def33f700c7cb3694e6d19602e37485c5521.svg";
const imgQuoteWhite = "/assets/6d7dc670fa855e67c9d007a12ccf9dfcf80945cf.svg";
const sans$9 = '"General Sans", system-ui, -apple-system, sans-serif';
function Testimonial({
  color = "white",
  quote,
  name,
  title,
  authorName,
  authorTitle,
  authorImage,
  className,
  style
}) {
  const { isMobile } = useBreakpoint();
  const resolvedName = authorName ?? name ?? "";
  const resolvedTitle = authorTitle ?? title ?? "";
  const isRed = color === "red";
  const bg = isRed ? "#ED2939" : "#F5F5F5";
  const quoteColor = isRed ? "#FFFFFF" : "#1B1B1B";
  const accentColor = isRed ? "#FFFFFF" : "#ED2939";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className,
      "data-node-id": isRed ? "8:401" : "8:301",
      style: {
        backgroundColor: bg,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: isMobile ? "auto" : 442,
        width: "100%",
        padding: isMobile ? 16 : 24,
        overflow: "hidden",
        position: "relative",
        boxSizing: "border-box",
        ...style
      },
      children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start", width: "100%" }, children: [
          /* @__PURE__ */ jsx("div", { style: { width: 30, height: 30, position: "relative", flexShrink: 0, overflow: "hidden" }, children: /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: "3.53%", right: 0, bottom: "3.53%", left: 0 }, children: /* @__PURE__ */ jsx(
            "img",
            {
              alt: "",
              src: isRed ? imgQuoteRed : imgQuoteWhite,
              style: { position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }
            }
          ) }) }),
          /* @__PURE__ */ jsx(
            "p",
            {
              style: {
                fontFamily: sans$9,
                fontWeight: 500,
                fontSize: isMobile ? 15 : 18,
                lineHeight: "24px",
                color: quoteColor,
                margin: 0,
                width: "100%"
              },
              children: quote
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              display: "flex",
              gap: 12,
              alignItems: isRed ? "flex-start" : "center",
              width: "100%",
              flexShrink: 0,
              marginTop: 24
            },
            children: [
              /* @__PURE__ */ jsx("div", { style: { width: 3, height: 48, borderRadius: 7, backgroundColor: accentColor, flexShrink: 0 } }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  style: {
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    overflow: "hidden",
                    backgroundColor: "#FFFFFF",
                    flexShrink: 0,
                    position: "relative"
                  },
                  children: authorImage ? /* @__PURE__ */ jsx("img", { src: authorImage, alt: resolvedName, style: { width: "100%", height: "100%", objectFit: "cover" } }) : /* @__PURE__ */ jsx("div", { style: { width: "100%", height: "100%", backgroundColor: "#D0D0D0" } })
                }
              ),
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 4, flex: 1, minWidth: 0 }, children: [
                /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$9, fontWeight: 600, fontSize: 16, lineHeight: "normal", color: isRed ? "#FFFFFF" : "#1B1B1B", margin: 0 }, children: resolvedName }),
                /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$9, fontWeight: 400, fontSize: 13, lineHeight: "20px", color: isRed ? "#FFFFFF" : "#1B1B1B", margin: 0 }, children: resolvedTitle })
              ] })
            ]
          }
        )
      ]
    }
  );
}
const imgCollaborators = "/assets/Logo-DCaKdTWe.png";
const imgAuthorJeffrey = "/assets/Jaffrey-BV1Y9uTn.png";
const imgAuthorAnita = "/assets/anita-CDAxXzKz.png";
const imgAuthorTyler = "/assets/Tyler-CxgSdrr_.png";
const sans$8 = '"General Sans", system-ui, -apple-system, sans-serif';
const serif$5 = '"Roboto Serif", Georgia, serif';
const red$6 = "#ED2939";
const dark1$4 = "#1B1B1B";
const dark2$1 = "#1E1E1E";
const imgHeroBg$4 = "/assets/cf9c112d09fc9f6437fa76b0e30e6382f36dc276.png";
const imgSearchAiStar = "/assets/1396fbe0e7d98149afea22065d702750dbf4a387.svg";
const imgSearchSend = "/assets/d884bbc847b6fe02ec374e4281caa99cdfc0977c.svg";
const imgStatsComposed = "/assets/215811fe-eab7-431c-9d72-d65f9783311c.png";
const imgCaseStudy = "/assets/11485e6d5400122979be42e072e5eb53cb43660e.png";
const imgCardPhoto = "/assets/fbbad1d37f7a4e076de4d16631dc6863c6c4444a.png";
const imgDocumentIcon = "/assets/e242e8576977e4f3d29c4be05ad738619168755a.svg";
const imgIconOutcome = "/assets/ac8dbae3d6a4ef3869c92f062ba66c3ebc0095c2.svg";
const imgIconScale = "/assets/1842a7b6c6f7844a725781346897858a8c24e609.svg";
const imgIconEnhance = "/assets/be00e1883e0f4b7bbdff5b000b66f3f1cfa30930.svg";
const CornerTL$1 = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, left: 0, width: 118, height: 10, background: red$6, pointerEvents: "none", zIndex: 2 } }),
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, left: 0, width: 10, height: 118, background: red$6, pointerEvents: "none", zIndex: 2 } })
] });
const CornerBR$1 = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, right: 0, width: 118, height: 10, background: red$6, pointerEvents: "none", zIndex: 2 } }),
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, right: 0, width: 10, height: 118, background: red$6, pointerEvents: "none", zIndex: 2 } })
] });
function Home() {
  const { isMobile, isTablet } = useBreakpoint();
  const inner = {
    maxWidth: 1440,
    margin: "0 auto",
    padding: isMobile ? "48px 16px" : isTablet ? "60px 32px" : "80px 80px"
  };
  const h1Size = isMobile ? 28 : isTablet ? 36 : 48;
  const h1Line = isMobile ? "36px" : isTablet ? "44px" : "56px";
  const shSize = isMobile ? 24 : isTablet ? 30 : 36;
  const shLine = isMobile ? "32px" : isTablet ? "38px" : "40px";
  const cols3 = isMobile ? "1fr" : isTablet ? "repeat(2,1fr)" : "repeat(3,1fr)";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Technossus — Enterprise AI, Cloud & Digital Transformation",
        description: "Technossus partners with enterprise teams to design, build, and ship AI-led solutions — from strategy to production. Explore our services, AI Studio, and case studies.",
        canonicalPath: "/",
        keywords: "enterprise AI, digital transformation, cloud modernization, AI strategy, product engineering, Technossus",
        jsonLd: [organizationSchema, websiteSchema]
      }
    ),
    /* @__PURE__ */ jsxs("section", { style: { background: dark1$4 }, children: [
      /* @__PURE__ */ jsxs("div", { style: {
        position: "relative",
        width: "100%",
        height: isMobile ? 360 : isTablet ? 420 : 463,
        overflow: "hidden"
      }, children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: imgHeroBg$4,
            alt: "",
            "aria-hidden": true,
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center"
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { style: {
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg,rgba(0,0,0,.85) 0%,rgba(0,0,0,.55) 45%,rgba(0,0,0,.2) 100%)"
        } }),
        /* @__PURE__ */ jsx("div", { style: {
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: 1440,
          height: "100%",
          padding: isMobile ? "48px 16px" : isTablet ? "60px 32px" : "110px 98px",
          zIndex: 2,
          display: "flex",
          alignItems: "flex-start",
          boxSizing: "border-box"
        }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 565, display: "flex", flexDirection: "column", gap: 43 }, children: [
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 12 }, children: [
            /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("h1", { style: {
              fontFamily: serif$5,
              fontSize: h1Size,
              lineHeight: h1Line,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: "#fff",
              margin: 0
            }, children: [
              "Hit the outcomes that matter,",
              " ",
              /* @__PURE__ */ jsx("span", { style: { color: red$6 }, children: "Every time." })
            ] }) }),
            /* @__PURE__ */ jsx(FadeUp, { delay: 80, children: /* @__PURE__ */ jsx("p", { style: {
              fontFamily: sans$8,
              fontSize: isMobile ? 14 : 18,
              fontWeight: 500,
              lineHeight: "24px",
              color: "#fff",
              margin: 0
            }, children: "We identify what works, execute with precision, and turn effort into measurable results, faster." }) })
          ] }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 120, children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Button, { variant: "primary", label: "Explore Solutions", href: "/services" }) }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { style: {
        background: "#010101",
        padding: isMobile ? "24px 16px" : isTablet ? "24px 32px" : "32px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 24
      }, children: /* @__PURE__ */ jsxs("div", { style: {
        maxWidth: 1392,
        margin: "0 auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 24
      }, children: [
        /* @__PURE__ */ jsxs("div", { style: {
          background: "#fff",
          height: 65,
          borderRadius: 9999,
          border: "1px solid #F5F5F5",
          boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 17px 0 25px",
          boxSizing: "border-box"
        }, children: [
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            /* @__PURE__ */ jsx("img", { src: imgSearchAiStar, alt: "", style: { width: 20, height: 20, flexShrink: 0 } }),
            /* @__PURE__ */ jsx("span", { style: {
              fontFamily: sans$8,
              fontSize: 16,
              fontWeight: 500,
              color: "#949494",
              lineHeight: "24px"
            }, children: "Ask about services, industries, solutions, or case studies" })
          ] }),
          /* @__PURE__ */ jsx("div", { style: {
            background: dark2$1,
            borderRadius: 22,
            padding: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0
          }, children: /* @__PURE__ */ jsx("img", { src: imgSearchSend, alt: "Send", style: { width: 24, height: 24 } }) })
        ] }),
        !isMobile && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 16 }, children: [
            /* @__PURE__ */ jsx("span", { style: { flex: 1, height: 1, background: "#383838" } }),
            /* @__PURE__ */ jsx("span", { style: {
              fontFamily: sans$8,
              fontSize: 18,
              fontWeight: 500,
              color: "#ADADAD",
              whiteSpace: "nowrap",
              lineHeight: "24px"
            }, children: "Quick picks to get you started" }),
            /* @__PURE__ */ jsx("span", { style: { flex: 1, height: 1, background: "#383838" } })
          ] }),
          /* @__PURE__ */ jsx("div", { style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap"
          }, children: ["AI Adoption Strategy", "Modernize Platforms", "Data Analytics", "Healthcare IT", "Product Engineering"].map((chip) => /* @__PURE__ */ jsx("button", { style: {
            display: "inline-flex",
            alignItems: "center",
            height: 48,
            padding: "0 20px",
            borderRadius: 37,
            background: "#383838",
            border: "none",
            fontFamily: sans$8,
            fontSize: 16,
            fontWeight: 500,
            color: "#fff",
            cursor: "pointer",
            lineHeight: "24px"
          }, children: chip }, chip)) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff", overflow: "hidden" }, children: /* @__PURE__ */ jsxs("div", { style: { ...inner, paddingBottom: 0 }, children: [
      /* @__PURE__ */ jsx(FadeUp, { duration: 500, children: /* @__PURE__ */ jsx(Tag, { label: "STATISTICS" }) }),
      /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("h2", { style: {
        fontFamily: serif$5,
        fontSize: shSize,
        lineHeight: shLine,
        fontWeight: 500,
        color: "#1E1E1E",
        marginTop: 16,
        marginBottom: 0
      }, children: [
        "Trusted by ",
        /* @__PURE__ */ jsx("span", { style: { color: red$6 }, children: "leaders." })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { style: {
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? 40 : 0,
        alignItems: "flex-start",
        marginTop: 67,
        position: "relative",
        minHeight: isMobile ? void 0 : 453
      }, children: [
        /* @__PURE__ */ jsxs("div", { style: {
          flex: isMobile ? void 0 : "0 0 524px",
          background: "#F9F9F9",
          padding: 24,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px 76px",
          width: isMobile ? "100%" : void 0,
          boxSizing: "border-box"
        }, children: [
          /* @__PURE__ */ jsx(Stats, { value: "250+", label: "CONSULTANTS" }),
          /* @__PURE__ */ jsx(Stats, { value: "150+", label: "GLOBAL CLIENTS" }),
          /* @__PURE__ */ jsx(Stats, { value: "15+", label: "YEARS EXPERIENCE" }),
          /* @__PURE__ */ jsx(Stats, { value: "98%", label: "CLIENT RETENTION" })
        ] }),
        !isMobile && /* @__PURE__ */ jsx(DecorativeOverlay, { top: -80, right: isTablet ? -32 : -80, width: 608, height: 453, children: /* @__PURE__ */ jsx(
          DecorativeImage,
          {
            src: imgStatsComposed,
            top: 0,
            left: 0,
            width: 608,
            height: 453,
            objectFit: "contain"
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: isMobile ? "24px 16px" : "10px 80px 32px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16
    }, children: [
      /* @__PURE__ */ jsx("p", { style: {
        fontFamily: sans$8,
        fontSize: 16,
        fontWeight: 500,
        color: "#949494",
        textAlign: "center",
        lineHeight: "24px",
        margin: 0
      }, children: "OUR COLLABORATORS" }),
      /* @__PURE__ */ jsx("div", { style: { width: "100%" }, children: /* @__PURE__ */ jsx(
        "img",
        {
          src: imgCollaborators,
          alt: "Our collaborators",
          style: { display: "block", maxWidth: isMobile ? "100%" : isTablet ? "100%" : 860, margin: "auto" }
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
      /* @__PURE__ */ jsx(FadeUp, { duration: 500, children: /* @__PURE__ */ jsx(Tag, { label: "FEATURED CASE STUDY" }) }),
      /* @__PURE__ */ jsx(FadeUp, { delay: 60, children: /* @__PURE__ */ jsx("div", { style: { marginTop: 32 }, children: /* @__PURE__ */ jsx(
        Card,
        {
          mode: "dark",
          type: "large",
          category: "HEALTHCARE",
          heading: "Automating Home Care Operations for Unprecedented Efficiency.",
          body: "Transformed high-volume operational workflows with RPA and Smart Rules, eliminating manual bottlenecks across order entry, billing, and insurance, while enabling seamless management of thousands of daily transactions.",
          image: imgCaseStudy,
          stats: [
            { value: "$50M+", label: "TOTAL COST SAVING" },
            { value: "20,000+", label: "ORDERS PLACED SUCCESSFULLY" }
          ],
          primaryLabel: "View All Case Study",
          secondaryLabel: "View All"
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
      /* @__PURE__ */ jsx(FadeUp, { duration: 500, children: /* @__PURE__ */ jsx(Tag, { label: "INTEGRATED CAPABILITIES" }) }),
      /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("h2", { style: {
        fontFamily: serif$5,
        fontSize: shSize,
        lineHeight: shLine,
        fontWeight: 500,
        color: "#1E1E1E",
        marginTop: 16,
        marginBottom: 0
      }, children: [
        "What we ",
        /* @__PURE__ */ jsx("span", { style: { color: red$6 }, children: "deliver." })
      ] }) }),
      /* @__PURE__ */ jsx(FadeUp, { delay: 60, children: /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: cols3, gap: 16, marginTop: 36 }, children: [
        { title: "AI Led Transformation", description: "Revolutionizing enterprise workflows through custom LLM integration and proprietary cognitive automation engines designed for scale.", image: imgSvcAI },
        { title: "Cloud & Product Modernization", description: "Lift, refactor, and run smarter — migrating monoliths to cloud-native architectures without sacrificing reliability.", image: imgSvcCloud },
        { title: "Data Intelligence & Analytics", description: "Turn raw data into decision-grade intelligence with real-time pipelines, semantic layers, and AI-powered insight delivery.", image: imgSvcData },
        { title: "Digital Experience Design", description: "Crafting human-centric interfaces for complex technical systems, balancing utility with an uncompromising editorial aesthetic.", image: imgSvcDigital },
        { title: "Product Engineering & Sustained Operations", description: "End-to-end software lifecycle management, from rapid prototyping to mission-critical maintenance and DevOps optimization.", image: imgSvcProduct },
        { title: "Quality Engineering & Verification", description: "Implementing automated testing frameworks and formal verification methods to ensure absolute reliability in high-stakes environments.", image: imgHero$1 }
      ].map((card, i) => /* @__PURE__ */ jsx(
        Card,
        {
          mode: "light",
          type: "deliver",
          image: card.image,
          title: card.title,
          description: card.description
        },
        i
      )) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
      /* @__PURE__ */ jsx(FadeUp, { duration: 500, children: /* @__PURE__ */ jsx(Tag, { label: "AI SOLUTIONS AND ACCELERATORS" }) }),
      /* @__PURE__ */ jsxs("div", { style: {
        marginTop: 16,
        position: "relative",
        overflow: "hidden",
        backgroundColor: dark2$1,
        padding: isMobile ? "48px 24px" : isTablet ? "60px 32px" : 56
      }, children: [
        /* @__PURE__ */ jsx(CornerTL$1, {}),
        /* @__PURE__ */ jsx(CornerBR$1, {}),
        /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8, marginBottom: 36 }, children: [
          /* @__PURE__ */ jsxs("h2", { style: {
            fontFamily: serif$5,
            fontSize: shSize,
            lineHeight: shLine,
            fontWeight: 500,
            color: "#fff",
            maxWidth: 731,
            margin: 0
          }, children: [
            "See AI in action, before you build at",
            " ",
            /* @__PURE__ */ jsx("span", { style: { color: red$6 }, children: "Technossus AI Studio" }),
            " - TAS"
          ] }),
          /* @__PURE__ */ jsx("p", { style: {
            fontFamily: sans$8,
            fontSize: 18,
            fontWeight: 500,
            color: "#F9FAFB",
            lineHeight: "24px",
            margin: 0
          }, children: "Explore real AI systems you can test before committing to build." })
        ] }) }),
        /* @__PURE__ */ jsx(FadeUp, { delay: 60, children: /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: cols3, gap: 20, marginBottom: 36 }, children: [
          { category: "AGENTIC OPERATIONS", title: "Coordinate multi-step AI workflows", description: "Deploy agents that reason, route, and act — handling approval chains, escalations, and data handoffs without human orchestration at every step.", ctaLabel: "Try in AI Studio" },
          { category: "FASTER PROCESSING", title: "Automate document workflows", description: "Use advanced machine learning to automatically extract and categorize data from complex documents. Streamline pipelines and eliminate manual entry to accelerate high-volume processing.", ctaLabel: "Try in AI Studio" },
          { category: "INTELLIGENT SEARCH", title: "Surface insights from your data", description: "Connect your enterprise knowledge base to conversational AI that understands context, retrieves accurately, and scales across every team without custom pipelines.", ctaLabel: "Try in AI Studio" }
        ].map((card) => /* @__PURE__ */ jsx(
          Card,
          {
            mode: "dark",
            type: "medium",
            icon: imgDocumentIcon,
            category: card.category,
            title: card.title,
            description: card.description,
            ctaLabel: card.ctaLabel
          },
          card.category
        )) }) }),
        /* @__PURE__ */ jsx(
          CTABanner,
          {
            size: "small",
            heading: "Explore these in a working environment",
            body: "Test, validate, and experience what's possible inside AI Studio.",
            primaryCta: "Explore AI Studio"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
      /* @__PURE__ */ jsx(FadeUp, { duration: 500, children: /* @__PURE__ */ jsx(Tag, { label: "INSIGHTS" }) }),
      /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("div", { style: {
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "flex-end",
        justifyContent: "space-between",
        gap: 8,
        marginTop: 16,
        marginBottom: 32
      }, children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
          /* @__PURE__ */ jsxs("h2", { style: {
            fontFamily: serif$5,
            fontSize: shSize,
            lineHeight: shLine,
            fontWeight: 500,
            color: "#1E1E1E",
            margin: 0
          }, children: [
            "Latest ",
            /* @__PURE__ */ jsx("span", { style: { color: red$6 }, children: "insights." })
          ] }),
          /* @__PURE__ */ jsx("p", { style: {
            fontFamily: sans$8,
            fontSize: 18,
            fontWeight: 500,
            color: "#5C5C5C",
            lineHeight: "24px",
            margin: 0
          }, children: "Thinking and perspectives from our domain experts." })
        ] }),
        /* @__PURE__ */ jsx("a", { href: "#", style: {
          fontFamily: sans$8,
          fontSize: 16,
          fontWeight: 600,
          color: red$6,
          textDecoration: "underline",
          whiteSpace: "nowrap",
          flexShrink: 0,
          lineHeight: "28px"
        }, children: "View All" })
      ] }) }),
      /* @__PURE__ */ jsx(FadeUp, { delay: 60, children: /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: cols3, gap: 32 }, children: [
        { tags: "FINTECH • PLATFORM MODERNIZATION", title: "Architecting a High-Frequency Trading Engine for Global Markets", excerpt: "We overhauled the legacy infrastructure of a Tier-1 financial institution, reducing latency by 40% using event-driven microservices and localized data centers." },
        { tags: "HEALTHCARE • AI AUTOMATION", title: "Automating Prior Auth with AI: 60% Faster Approvals in Clinical Workflows", excerpt: "A payer-provider integration that cut prior authorization turnaround from days to hours by embedding AI decision layers into existing clinical systems." },
        { tags: "DATA ENGINEERING • ANALYTICS", title: "Building a Real-Time Analytics Platform for Enterprise Decision Intelligence", excerpt: "How we replaced a batch-heavy data warehouse with a streaming architecture that delivers insights 14x faster across 12 business units." }
      ].map((card, i) => /* @__PURE__ */ jsx(
        Card,
        {
          mode: "light",
          type: "insights",
          image: imgCardPhoto,
          tags: card.tags,
          title: card.title,
          excerpt: card.excerpt,
          ctaLabel: "See How We Work"
        },
        i
      )) }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: { maxWidth: 1440, margin: "0 auto", marginBottom: isMobile ? 12 : 16, padding: isMobile ? "0 16px" : isTablet ? "0 32px" : "0 80px", background: "#fff" }, children: /* @__PURE__ */ jsx(FadeUp, { duration: 500, children: /* @__PURE__ */ jsx(Tag, { label: "TECHNOSSUS", variant: "dark" }) }) }),
    /* @__PURE__ */ jsxs("section", { style: { background: dark2$1, position: "relative", overflow: "hidden", maxWidth: 1280, margin: "0px auto" }, children: [
      /* @__PURE__ */ jsx(CornerTL$1, {}),
      /* @__PURE__ */ jsx(CornerBR$1, {}),
      /* @__PURE__ */ jsxs("div", { style: inner, children: [
        /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8, marginTop: 0, marginBottom: 36 }, children: [
          /* @__PURE__ */ jsxs("h2", { style: {
            fontFamily: serif$5,
            fontSize: shSize,
            lineHeight: shLine,
            fontWeight: 500,
            margin: 0
          }, children: [
            /* @__PURE__ */ jsx("span", { style: { color: "#fff" }, children: "Why " }),
            /* @__PURE__ */ jsx("span", { style: { color: red$6 }, children: "Technossus" })
          ] }),
          /* @__PURE__ */ jsx("p", { style: {
            fontFamily: sans$8,
            fontSize: 18,
            fontWeight: 500,
            color: "#fff",
            lineHeight: "24px",
            margin: 0
          }, children: "We don't just build software; we engineer competitive advantages through technological precision." })
        ] }) }),
        /* @__PURE__ */ jsx(FadeUp, { delay: 60, children: /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: cols3, gap: 24 }, children: [
          { icon: imgIconOutcome, title: "Outcome Driven", description: "Our systems are meticulously designed to scale operations and unlock new growth opportunities, ensuring measurable impact on your bottom line." },
          { icon: imgIconScale, title: "Scale AI", description: "Rapidly scale your business operations through high-performance engineering that integrates advanced AI models into your existing enterprise infrastructure." },
          { icon: imgIconScale, title: "Speed To Market", description: "Accelerate your product roadmap and launch faster with AI-powered engineering cycles that significantly reduce time-to-market while maintaining quality." },
          { icon: imgIconEnhance, title: "Enhance Experience", description: "We engineer intuitive, high-performance digital products that elevate user engagement and foster long-term brand loyalty through seamless experiences." },
          { icon: imgIconScale, title: "Integrated Approach", description: "Our methodology bridges the gap between high-level product strategy, user-centric design, and robust technical engineering for unified results." },
          { icon: imgIconScale, title: "Simplify Complexity", description: "We build architectures designed to manage massive scale and inherent technical complexity while ensuring security and adaptability for evolving needs." }
        ].map((card) => /* @__PURE__ */ jsx(
          Card,
          {
            mode: "dark",
            type: "small",
            icon: /* @__PURE__ */ jsx("img", { src: card.icon, alt: "", style: { width: "auto", height: 28 } }),
            title: card.title,
            description: card.description
          },
          card.title
        )) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
      /* @__PURE__ */ jsx(FadeUp, { duration: 500, children: /* @__PURE__ */ jsx(Tag, { label: "TESTIMONIALS" }) }),
      /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8, marginTop: 16, marginBottom: 48 }, children: [
        /* @__PURE__ */ jsxs("h2", { style: {
          fontFamily: serif$5,
          fontSize: shSize,
          lineHeight: shLine,
          fontWeight: 500,
          color: "#010101",
          margin: 0
        }, children: [
          "Hear what",
          " ",
          /* @__PURE__ */ jsx("span", { style: { color: red$6 }, children: "our clients have to say." })
        ] }),
        /* @__PURE__ */ jsx("p", { style: {
          fontFamily: sans$8,
          fontSize: 18,
          fontWeight: 500,
          color: "#5C5C5C",
          lineHeight: "24px",
          margin: 0
        }, children: "Real experiences, trusted partnerships, and measurable impact from the businesses we've helped transform." })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: cols3, gap: 24 }, children: [
        /* @__PURE__ */ jsx(
          Testimonial,
          {
            color: "white",
            quote: `"Flawless rollout of New Relic with no downtime and no change window allows CommonSpirit Health deep understanding of consumer experience. Net savings on overall costs by delivering projects with half of the requested staff — 'Ridiculously Qualified Team.'"`,
            authorName: "Jeffrey Harker",
            authorTitle: "System Manager Cloud Engineering",
            authorImage: imgAuthorJeffrey
          }
        ),
        /* @__PURE__ */ jsx(
          Testimonial,
          {
            color: "red",
            quote: `"Technossus has been a game-changer for AdaptHealth. Their dedication to quality and commitment to continuous improvement is unmatched. Their adaptability and willingness to learn make them the perfect partner. The team is knowledgeable, skilled, and go beyond to exceed expectations."`,
            authorName: "Anita Salgado",
            authorTitle: "Senior Business Systems Analyst",
            authorImage: imgAuthorAnita
          }
        ),
        /* @__PURE__ */ jsx(
          Testimonial,
          {
            color: "white",
            quote: `"We are very pleased with the quality of service the Technossus team has provided to the BTX lab. The lab sincerely appreciates the team's responsiveness and attention to detail in building new features into our LIMS and for the resolution of production issues."`,
            authorName: "Tyler Zucchiatti",
            authorTitle: "Director, Software Development – Middleware & Integration",
            authorImage: imgAuthorTyler
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      CTABanner,
      {
        size: "large",
        label: "LET'S WORK ON IT TOGETHER",
        heading: "Ready to accelerate your digital & AI journey ?",
        body: "Whether you're modernizing systems, building a new product, or scaling engineering, we're ready to collaborate.",
        primaryCta: "Schedule a Strategy Session",
        secondaryCta: "Contact Us"
      }
    ),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } })
  ] });
}
const imgPhotoDefault = "/assets/4a0fc133e1c62243f5802cc6bf49e291e4ce809e.png";
const sans$7 = '"General Sans", system-ui, -apple-system, sans-serif';
const red$5 = "#ED2939";
function Leader({
  state = "Default",
  role = "EXECUTIVE DIRECTOR, TECHNOSSUS INDIA",
  name = "Zia Rahman",
  bio = "Drives technology and delivery at scale, playing a key role in building, shaping, and scaling systems, teams, and execution capabilities from the ground up.",
  photo,
  className,
  style
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = state === "Active" || isHovered;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className,
      "data-node-id": isActive ? "2203:10811" : "2203:10812",
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      style: {
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        position: "relative",
        width: "100%",
        cursor: "pointer",
        ...style
      },
      children: [
        /* @__PURE__ */ jsx("div", { style: { aspectRatio: "3/4", position: "relative", flexShrink: 0, width: "100%", maxHeight: 336, overflow: "hidden" }, children: /* @__PURE__ */ jsx(
          "img",
          {
            alt: name,
            src: photo ?? imgPhotoDefault,
            style: {
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              pointerEvents: "none",
              filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
              transition: "filter 250ms ease"
            }
          }
        ) }),
        /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-start", padding: 24, width: "100%", boxSizing: "border-box" }, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start", width: "100%" }, children: [
          /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$7, fontWeight: 600, fontSize: 13, lineHeight: "20px", color: "#949494", margin: 0, width: "100%" }, children: role }),
          /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$7, fontWeight: 600, fontSize: 22, lineHeight: "30px", color: isActive ? red$5 : "#383838", margin: 0, width: "100%", transition: "color 0.2s ease" }, children: name }),
          /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$7, fontWeight: 500, fontSize: 15, lineHeight: "24px", color: "#5C5C5C", margin: 0, width: "100%" }, children: bio })
        ] }) })
      ]
    }
  );
}
const colors = {
  brand: {
    primary: "#ED2939",
    black: "#1E1E1E"
  },
  background: {
    dark1: "#1B1B1B"
  },
  text: {
    200: "#F5F5F5",
    300: "#E1E0E0",
    400: "#C6C6C7",
    500: "#ADADAD",
    700: "#5C5C5C",
    900: "#1E1E1E"
  }
};
const fontFamily = {
  serif: '"Roboto Serif", Georgia, serif',
  sans: '"General Sans", system-ui, -apple-system, sans-serif'
};
const imgRavnish = "/assets/Ravnish-UsF1WkFz.png";
const imgGiri = "/assets/Giri-B28SEysC.png";
const imgKumar = "/assets/Kumar-DSCDPG2s.png";
const imgSham = "/assets/Sham-BPZPx_h0.png";
const imgZia = "/assets/Zia-DoNvUAyL.png";
const imgBasudev = "/assets/Basudev-thOZFaNE.png";
const imgSambit = "/assets/Sambit-DSq8pwHD.png";
const imgDainish = "/assets/Dainish-CBEK1BqK.png";
const imgHeroBg$3 = "/assets/About%20Us-DJj6uO7p.png";
const imgArrowForward$2 = "/assets/8a747203f958377d346e5cba2f8ebb5af2b3712b.svg";
const imgMissionIcon = "/assets/61200c7f88a68751add502d264dc727a8b8164b7.svg";
const imgHistory = "/assets/530970c90fed204526d7d1dd49d291d623489c6c.png";
const sans$6 = fontFamily.sans;
const serif$4 = fontFamily.serif;
const red$4 = colors.brand.primary;
const dark1$3 = colors.background.dark1;
const pillars = [
  { title: "Empower", body: "Enabling teams with the tools and strategies to achieve autonomous high-performance." },
  { title: "Enhance", body: "Optimizing existing ecosystems through intelligent data layers and refined UX." },
  { title: "Secure", body: "Fortifying digital infrastructure with proactive, enterprise-grade security protocols." },
  { title: "Evolve", body: "Adapting architectures to meet the demands of a future-first AI landscape." }
];
const leaders = [
  { role: "FOUNDER, MANAGING PARTNER, TECHNOSSUS USA", name: "Ravnish Bhalla", bio: "Founder and enterprise technology leader guiding Technossus with a 360° client-impact approach to innovation, transformation, and long-term value creation.", photo: imgRavnish },
  { role: "MANAGING PARTNER, TECHNOSSUS USA", name: "Giri Kalluri", bio: "Co-founder and strategic growth leader driving enterprise transformation through AI-led innovation, cloud modernization, operational excellence, and global team leadership.", photo: imgGiri },
  { role: "CEO & PRESIDENT, TECHNOSSUS INDIA", name: "Kumar Gaurav", bio: "Global consulting and sales leader driving scalable delivery, strategic partnerships, enterprise transformation, and measurable business outcomes for Technossus.", photo: imgKumar },
  { role: "EXECUTIVE DIRECTOR, CLIENT SUCCESS GROUP, TECHNOSSUS USA", name: "Sham Ramakrishnan", bio: "Client success and global services leader building trusted partnerships by aligning sales, delivery, engineering, and support around predictable, high-value outcomes.", photo: imgSham },
  { role: "VICE PRESIDENT, DIGITAL EXPERIENCE DESIGN, TECHNOSSUS INDIA", name: "Zia Rahman", bio: "Design leader shaping intuitive, scalable digital experiences through UX strategy, DesignOps, and AI-led product innovation.", photo: imgZia },
  { role: "DIRECTOR SALES, TECHNOSSUS UK", name: "Basudev Pal", bio: "Brings over two decades of experience in digital transformation and market expansion, shaping AI-led growth strategies and enterprise innovation across Europe.", photo: imgBasudev },
  { role: "DIRECTOR GLOBAL COMPETENCY HEAD, TECHNOSSUS INDIA", name: "Sambit Mohanty", bio: "Leads global engineering and solution architecture, building scalable systems and driving AI-led capabilities across client environments.", photo: imgSambit },
  { role: "EXECUTIVE DIRECTOR, TECHNOSSUS INDIA", name: "Dainish Hingwe", bio: "Drives technology and delivery at scale, playing a key role in building, shaping, and scaling systems, teams, and execution capabilities from the ground up.", photo: imgDainish }
];
const testimonials$1 = [
  {
    quote: `"Flawless rollout of New Relic with no downtime and no change window allows CommonSpirit Health deep understanding of consumer experience. Net savings on overall costs by delivering projects with half of the requested staff — 'Ridiculously Qualified Team.'"`,
    name: "Jeffrey Harker",
    title: "System Manager Cloud Engineering",
    color: "white",
    image: imgAuthorJeffrey
  },
  {
    quote: '"Technossus has been a game-changer for AdaptHealth. Their dedication to quality and commitment to continuous improvement is unmatched. Their adaptability and willingness to learn make them the perfect partner. The team is knowledgeable, skilled, and go beyond to exceed expectations."',
    name: "Anita Salgado",
    title: "Senior Business Systems Analyst",
    color: "red",
    image: imgAuthorAnita
  },
  {
    quote: `"We are very pleased with the quality of service the Technossus team has provided to the BTX lab. The lab sincerely appreciates the team's responsiveness and attention to detail in building new features into our LIMS and for the resolution of production issues."`,
    name: "Tyler Zucchiatti",
    title: "Director, Software Development – Middleware & Integration",
    color: "white",
    image: imgAuthorTyler
  }
];
function AboutUs() {
  const { isMobile, isTablet } = useBreakpoint();
  const px = {
    maxWidth: 1440,
    margin: "0 auto",
    padding: isMobile ? "48px 16px" : isTablet ? "60px 32px" : "80px 96px"
  };
  const heroFontSize = isMobile ? 28 : isTablet ? 36 : 48;
  const heroLineHeight = isMobile ? "36px" : isTablet ? "44px" : "56px";
  const h2FontSize = isMobile ? 24 : isTablet ? 28 : 36;
  const h2LineHeight = isMobile ? "32px" : isTablet ? "36px" : "40px";
  const leadersGrid = isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)";
  const pillarsGrid = isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "About Technossus — Our Story, Team & Mission",
        description: "Learn about Technossus — a technology company helping enterprises adopt AI and modern engineering. Meet our leadership and understand what drives us.",
        canonicalPath: "/about",
        keywords: "about Technossus, enterprise technology company, AI consulting, leadership team",
        jsonLd: breadcrumbSchema([{ name: "Home", url: "https://newtechnossus-v2.vercel.app" }, { name: "About Us", url: "https://newtechnossus-v2.vercel.app/about" }])
      }
    ),
    /* @__PURE__ */ jsxs("section", { style: { position: "relative", width: "100%", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          alt: "",
          src: imgHeroBg$3,
          style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }
        }
      ),
      /* @__PURE__ */ jsx("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(89.97deg, rgba(1,1,1,0.91) 36.4%, rgba(1,1,1,0) 108.78%)" } }),
      /* @__PURE__ */ jsx("div", { style: { position: "relative", ...px, minHeight: isMobile ? 420 : 560, display: "flex", alignItems: "center" }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 711, display: "flex", flexDirection: "column", gap: isMobile ? 32 : 60 }, children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("p", { style: { fontFamily: serif$4, fontWeight: 500, fontSize: heroFontSize, lineHeight: heroLineHeight, letterSpacing: "-0.96px", margin: 0 }, children: [
            /* @__PURE__ */ jsx("span", { style: { color: "#FFFFFF" }, children: "Our Focus is On Your Success. " }),
            /* @__PURE__ */ jsx("span", { style: { color: red$4 }, children: "Your Success is an Extension of Our Values." })
          ] }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 80, children: /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$6, fontWeight: 500, fontSize: isMobile ? 15 : 18, lineHeight: "24px", color: "#FFFFFF", margin: 0 }, children: "At Technossus, our mission is to accelerate your vision through purposeful digital transformation engineered across four core pillars that bring strategy, technology, and execution into alignment. We aim to simplify complexity and enable businesses to adopt the right technologies with clarity and speed." }) })
        ] }),
        /* @__PURE__ */ jsx(FadeUp, { delay: 120, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 12, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ jsxs("button", { style: { display: "flex", alignItems: "center", gap: 8, height: 56, padding: "16px 24px", backgroundColor: red$4, border: "none", cursor: "pointer", fontFamily: sans$6, fontWeight: 600, fontSize: 16, lineHeight: "28px", color: "#FFFFFF" }, children: [
            "See how we work",
            /* @__PURE__ */ jsx("img", { alt: "", src: imgArrowForward$2, style: { width: 24, height: 24, display: "block" } })
          ] }),
          /* @__PURE__ */ jsx("button", { style: { display: "flex", alignItems: "center", justifyContent: "center", height: 56, padding: "16px 24px", backgroundColor: "transparent", border: `1px solid ${red$4}`, cursor: "pointer", fontFamily: sans$6, fontWeight: 600, fontSize: 16, lineHeight: "28px", color: red$4 }, children: "Contact Us" })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { style: { ...px, display: "flex", flexDirection: "column", gap: 24 }, children: [
      /* @__PURE__ */ jsx(FadeUp, { duration: 500, children: /* @__PURE__ */ jsx(Tag, { label: "OUR MISSION" }) }),
      /* @__PURE__ */ jsxs("div", { style: { position: "relative", backgroundColor: dark1$3, padding: isMobile ? "32px 20px" : isTablet ? "40px 32px" : 56, display: "flex", flexDirection: "column", gap: 36, overflow: "hidden" }, children: [
        /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, left: 0, width: 118, height: 10, background: red$4, pointerEvents: "none" } }),
        /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, left: 0, width: 10, height: 118, background: red$4, pointerEvents: "none" } }),
        /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, right: 0, width: 118, height: 10, background: red$4, pointerEvents: "none" } }),
        /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, right: 0, width: 10, height: 118, background: red$4, pointerEvents: "none" } }),
        /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8, maxWidth: 934, color: "#FFFFFF" }, children: [
          /* @__PURE__ */ jsxs("h2", { style: { fontFamily: serif$4, fontWeight: 500, fontSize: h2FontSize, lineHeight: h2LineHeight, margin: 0 }, children: [
            "Engineered to accelerate your vision through",
            " ",
            /* @__PURE__ */ jsx("span", { style: { color: red$4 }, children: "four core pillars" }),
            " ",
            "of digital transformation."
          ] }),
          /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$6, fontWeight: 500, fontSize: isMobile ? 15 : 18, lineHeight: "24px", margin: 0 }, children: "At Technossus, our mission is to accelerate your vision through purposeful digital transformation engineered across four core pillars that bring strategy, technology, and execution into alignment." })
        ] }) }),
        /* @__PURE__ */ jsx(FadeUp, { delay: 60, children: /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: pillarsGrid, gap: 24 }, children: pillars.map((p) => /* @__PURE__ */ jsxs("div", { style: { backgroundColor: dark1$3, border: "1px solid rgba(255,255,255,0.05)", padding: isMobile ? "24px 20px" : 33, display: "flex", flexDirection: "column", gap: 16 }, children: [
          /* @__PURE__ */ jsx("div", { style: { width: 28, height: 28, position: "relative", flexShrink: 0 }, children: /* @__PURE__ */ jsx("img", { alt: "", src: imgMissionIcon, style: { width: "100%", height: "100%", display: "block" } }) }),
          /* @__PURE__ */ jsx("h3", { style: { fontFamily: sans$6, fontWeight: 600, fontSize: isMobile ? 18 : 24, lineHeight: "32px", color: "#FFFFFF", margin: 0 }, children: p.title }),
          /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$6, fontWeight: 500, fontSize: isMobile ? 14 : 16, lineHeight: "24px", color: colors.text[300], margin: 0 }, children: p.body })
        ] }, p.title)) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { style: { ...px, display: "flex", flexDirection: "column", gap: 36 }, children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
        /* @__PURE__ */ jsx(FadeUp, { duration: 500, children: /* @__PURE__ */ jsx(Tag, { label: "EXECUTIVE LEADERSHIP" }) }),
        /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("h2", { style: { fontFamily: serif$4, fontWeight: 500, fontSize: h2FontSize, lineHeight: h2LineHeight, color: colors.text[900], margin: 0, maxWidth: 946 }, children: [
          /* @__PURE__ */ jsx("span", { style: { color: dark1$3 }, children: "Meet the executive leadership " }),
          /* @__PURE__ */ jsx("span", { style: { color: red$4 }, children: "driving Technossus with vision and impact." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(FadeUp, { delay: 60, children: /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 24 }, children: [leaders.slice(0, 4), leaders.slice(4)].map((row, ri) => /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: leadersGrid, gap: 16 }, children: row.map((l) => /* @__PURE__ */ jsx(Leader, { role: l.role, name: l.name, bio: l.bio, photo: l.photo }, l.name)) }, ri)) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { style: { ...px, display: "flex", flexDirection: "column", gap: 16 }, children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
        /* @__PURE__ */ jsx(FadeUp, { duration: 500, children: /* @__PURE__ */ jsx(Tag, { label: "OUR HISTORY" }) }),
        /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("h2", { style: { fontFamily: serif$4, fontWeight: 500, fontSize: h2FontSize, lineHeight: h2LineHeight, margin: 0, maxWidth: 946 }, children: [
          /* @__PURE__ */ jsx("span", { style: { color: dark1$3 }, children: "From vision to execution: " }),
          /* @__PURE__ */ jsx("span", { style: { color: red$4 }, children: "our story of continuous evolution" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(FadeUp, { delay: 40, distance: 16, children: /* @__PURE__ */ jsx(
        "img",
        {
          alt: "Technossus history timeline",
          src: imgHistory,
          style: { width: "100%", height: "auto", display: "block" }
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { style: { ...px, display: "flex", flexDirection: "column", gap: 48 }, children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
        /* @__PURE__ */ jsx(FadeUp, { duration: 500, children: /* @__PURE__ */ jsx(Tag, { label: "TESTIMONIALS" }) }),
        /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
          /* @__PURE__ */ jsxs("h2", { style: { fontFamily: serif$4, fontWeight: 500, fontSize: h2FontSize, lineHeight: h2LineHeight, margin: 0 }, children: [
            /* @__PURE__ */ jsx("span", { style: { color: "#010101" }, children: "Hear what " }),
            /* @__PURE__ */ jsx("span", { style: { color: red$4 }, children: "our clients have to say." })
          ] }),
          /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$6, fontWeight: 500, fontSize: isMobile ? 15 : 18, lineHeight: "24px", color: colors.text[700], margin: 0 }, children: "Real experiences, trusted partnerships, and measurable impact from the businesses we've helped transform." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)", gap: 24 }, children: testimonials$1.map((t, i) => /* @__PURE__ */ jsx(
        Testimonial,
        {
          color: t.color,
          quote: t.quote,
          authorName: t.name,
          authorTitle: t.title,
          authorImage: t.image
        },
        i
      )) })
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
const imgHeroBg$2 = "/assets/Contact%20Us-B850oms4.png";
const imgLocUSA = "/assets/USA-DGHK19hh.png";
const imgLocUK = "/assets/UK-LGf7LYi2.png";
const imgLocPune = "/assets/Pune-0w-iLNaJ.png";
const imgLocLudhiana = "/assets/Ludhiana-6H_6yptB.png";
const imgArrowForward$1 = "/assets/8a747203f958377d346e5cba2f8ebb5af2b3712b.svg";
const imgPhilosophyImg = "/assets/841d1956c23918ec138a2eef41ff5a34b6b981e1.png";
const sans$5 = fontFamily.sans;
const serif$3 = fontFamily.serif;
const red$3 = colors.brand.primary;
const dark$1 = colors.brand.black;
const dark1$2 = colors.background.dark1;
const locations = [
  { country: "United States", company: "Technossus Inc.", city: "Irvine, California, USA", address: "Technossus USA, 5 Park Plaza, Suite 320, Irvine, 92614", phone: "+1 (949) 555-0123", image: imgLocUSA },
  { country: "United Kingdom", company: "Technossus UK Ltd.", city: "London, United Kingdom", address: "The Hill Hub, 1a Highfield Road, Darford DA1 2JH, United Kingdom", phone: "+44 20 5555 0123", image: imgLocUK },
  { country: "India", company: "Technossus Inc.", city: "Ludhiana, Punjab, India", address: "SCO-59, Phase-2, Dugri Ludhiana, Punjab 141002", phone: "+1 (949) 555-0123", image: imgLocLudhiana },
  { country: "India", company: "Technossus Inc.", city: "Pune, Maharashtra, India", address: "6th Floor, Tower-5, 1 Kharadi, opp. EON Free Zone MIDC, Knowledge Park, 411014", phone: "+1 (949) 555-0123", image: imgLocPune }
];
function ContactUs() {
  const { isMobile, isTablet } = useBreakpoint();
  const [form, setForm] = useState({ name: "", email: "", company: "", topic: "", message: "" });
  const px = {
    maxWidth: 1440,
    margin: "0 auto",
    padding: isMobile ? "48px 16px" : isTablet ? "60px 32px" : "80px 96px"
  };
  const heroFontSize = isMobile ? 26 : isTablet ? 34 : 48;
  const heroLineHeight = isMobile ? "34px" : isTablet ? "42px" : "56px";
  const h2FontSize = isMobile ? 24 : isTablet ? 28 : 36;
  const h2LineHeight = isMobile ? "32px" : "40px";
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Contact Technossus — Get in Touch with Our Team",
        description: "Reach out to Technossus for enterprise AI, cloud, and digital transformation enquiries. Offices in the US, UK, and India.",
        canonicalPath: "/contact",
        keywords: "contact Technossus, enterprise AI consultation, get in touch, Technossus offices",
        jsonLd: breadcrumbSchema([{ name: "Home", url: "https://newtechnossus-v2.vercel.app" }, { name: "Contact", url: "https://newtechnossus-v2.vercel.app/contact" }])
      }
    ),
    /* @__PURE__ */ jsxs("section", { style: { position: "relative", width: "100%", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          alt: "",
          src: imgHeroBg$2,
          style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }
        }
      ),
      /* @__PURE__ */ jsx("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(89.97deg, rgba(1,1,1,0.91) 36.4%, rgba(1,1,1,0) 108.78%)" } }),
      /* @__PURE__ */ jsx("div", { style: { position: "relative", ...px, minHeight: isMobile ? 400 : 560, display: "flex", alignItems: "center" }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 711, display: "flex", flexDirection: "column", gap: isMobile ? 32 : 60 }, children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("p", { style: { fontFamily: serif$3, fontWeight: 500, fontSize: heroFontSize, lineHeight: heroLineHeight, letterSpacing: "-0.96px", margin: 0 }, children: [
            /* @__PURE__ */ jsx("span", { style: { color: "#FFFFFF" }, children: "Big ideas, complex problems, or questions about what we do. " }),
            /* @__PURE__ */ jsx("span", { style: { color: red$3 }, children: "We're here to listen and help." })
          ] }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 80, children: /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$5, fontWeight: 500, fontSize: isMobile ? 15 : 18, lineHeight: "24px", color: "#FFFFFF", margin: 0 }, children: "At Technossus, every conversation is a starting point for solving meaningful challenges. Whether you're exploring a new idea, need support with a complex problem, or want to understand how our technology solutions can fit your business, our team is ready to connect. Reach out to us and let's turn your challenges into opportunities together." }) })
        ] }),
        /* @__PURE__ */ jsx(FadeUp, { delay: 120, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 12, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ jsxs("button", { style: { display: "flex", alignItems: "center", gap: 8, height: 56, padding: "16px 24px", backgroundColor: red$3, border: "none", cursor: "pointer", fontFamily: sans$5, fontWeight: 600, fontSize: 16, color: "#FFFFFF" }, children: [
            "Show us the problem",
            /* @__PURE__ */ jsx("img", { alt: "", src: imgArrowForward$1, style: { width: 24, height: 24 } })
          ] }),
          /* @__PURE__ */ jsx("button", { style: { display: "flex", alignItems: "center", justifyContent: "center", height: 56, padding: "16px 24px", backgroundColor: "transparent", border: `1px solid ${red$3}`, cursor: "pointer", fontFamily: sans$5, fontWeight: 600, fontSize: 16, color: red$3 }, children: "See how we work" })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { style: { ...px, display: "flex", flexDirection: "column", gap: 36 }, children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
        /* @__PURE__ */ jsx(FadeUp, { duration: 500, children: /* @__PURE__ */ jsx(Tag, { label: "OUR PHILOSPHY" }) }),
        /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("h2", { style: { fontFamily: serif$3, fontWeight: 500, fontSize: h2FontSize, lineHeight: h2LineHeight, color: dark$1, margin: 0, maxWidth: 844 }, children: [
          "At Technossus, we believe every conversation is the",
          " ",
          /* @__PURE__ */ jsx("span", { style: { color: red$3 }, children: "beginning of a meaningful relationship." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { backgroundColor: colors.text[200], display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 24 : 61, alignItems: "center", padding: isMobile ? "32px 20px" : isTablet ? "40px 32px" : "52px 48px", overflow: "hidden" }, children: [
        /* @__PURE__ */ jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 16 }, children: [
          /* @__PURE__ */ jsx("h3", { style: { fontFamily: sans$5, fontWeight: 600, fontSize: isMobile ? 18 : 24, lineHeight: "32px", color: dark$1, margin: 0 }, children: "We approach every inquiry with curiosity, clarity, and a commitment to understanding the real challenge behind it." }),
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 10 }, children: [
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$5, fontWeight: 500, fontSize: isMobile ? 14 : 16, lineHeight: "24px", color: colors.text[700], margin: 0 }, children: "No problem is too complex, and no idea is too early, we listen first, then collaborate to shape the right path forward." }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$5, fontWeight: 500, fontSize: isMobile ? 14 : 16, lineHeight: "24px", color: colors.text[700], margin: 0 }, children: "We see partnership as the foundation of progress. That means being transparent, responsive, and focused on outcomes that create lasting value. Whether it's a question, an idea, or a challenge, we treat it as an opportunity to build something better together." })
          ] })
        ] }),
        !isMobile && /* @__PURE__ */ jsx(
          "img",
          {
            alt: "Team collaboration",
            src: imgPhilosophyImg,
            style: { width: isTablet ? 280 : 480, height: isTablet ? 280 : 479, objectFit: "cover", flexShrink: 0 }
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { style: { ...px, display: "flex", flexDirection: "column", gap: 24 }, children: [
      /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
        /* @__PURE__ */ jsx("h2", { style: { fontFamily: serif$3, fontWeight: 500, fontSize: h2FontSize, lineHeight: h2LineHeight, color: dark$1, margin: 0, maxWidth: 583 }, children: "Let's start the conversation" }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$5, fontWeight: 500, fontSize: isMobile ? 15 : 18, lineHeight: "24px", color: colors.text[700], margin: 0 }, children: "Share your details and our team will get back to you to explore how we can help." })
      ] }) }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, style: { display: "flex", flexDirection: "column", gap: 32 }, children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", gap: 32 }, children: [
          /* @__PURE__ */ jsx(
            TextInputField,
            {
              label: "Your Name",
              placeholder: "Jane Doe",
              value: form.name,
              onChange: (v) => setForm((f) => ({ ...f, name: v })),
              state: "Filled"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInputField,
            {
              label: "Email",
              placeholder: "JaneDoe@example.com",
              type: "email",
              value: form.email,
              onChange: (v) => setForm((f) => ({ ...f, email: v })),
              state: "Filled"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", gap: 32 }, children: [
          /* @__PURE__ */ jsx(
            TextInputField,
            {
              label: "Company (Optional)",
              placeholder: "Atlassian",
              value: form.company,
              onChange: (v) => setForm((f) => ({ ...f, company: v })),
              state: "Filled"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInputField,
            {
              label: "What's this about?",
              placeholder: "What's this about",
              value: form.topic,
              onChange: (v) => setForm((f) => ({ ...f, topic: v }))
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8, width: "100%" }, children: [
          /* @__PURE__ */ jsx("label", { style: { fontFamily: sans$5, fontWeight: 600, fontSize: 14, lineHeight: "20px", color: dark$1 }, children: "Your Message" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              placeholder: "Write your message",
              value: form.message,
              onChange: (e) => setForm((f) => ({ ...f, message: e.target.value })),
              rows: 6,
              style: { fontFamily: sans$5, fontWeight: 500, fontSize: 16, lineHeight: "24px", color: dark$1, backgroundColor: "#FFFFFF", border: "1px solid #ADADAD", borderRadius: 2, padding: "18px 16px", width: "100%", boxSizing: "border-box", outline: "none", resize: "vertical" }
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "submit",
            style: { display: "flex", alignItems: "center", gap: 8, height: 56, padding: "16px 24px", backgroundColor: red$3, border: "none", cursor: "pointer", fontFamily: sans$5, fontWeight: 600, fontSize: 16, color: "#FFFFFF", alignSelf: isMobile ? "stretch" : "flex-start" },
            children: [
              "Let's Talk",
              /* @__PURE__ */ jsx("img", { alt: "", src: imgArrowForward$1, style: { width: 24, height: 24 } })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx("div", { style: { ...px, display: "flex", flexDirection: "column", gap: 0 }, children: /* @__PURE__ */ jsxs("div", { style: { backgroundColor: dark1$2, padding: isMobile ? "32px 20px" : isTablet ? "40px 32px" : 56, display: "flex", flexDirection: "column", gap: 36, position: "relative", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, left: 0, width: 118, height: 10, background: red$3, pointerEvents: "none" } }),
      /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, left: 0, width: 10, height: 118, background: red$3, pointerEvents: "none" } }),
      /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, right: 0, width: 118, height: 10, background: red$3, pointerEvents: "none" } }),
      /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, right: 0, width: 10, height: 118, background: red$3, pointerEvents: "none" } }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
        /* @__PURE__ */ jsxs("h2", { style: { fontFamily: serif$3, fontWeight: 500, fontSize: h2FontSize, lineHeight: h2LineHeight, margin: 0 }, children: [
          /* @__PURE__ */ jsx("span", { style: { color: "#FFFFFF" }, children: "Wherever you are, " }),
          /* @__PURE__ */ jsx("span", { style: { color: red$3 }, children: "we're here to help you move forward." })
        ] }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$5, fontWeight: 500, fontSize: isMobile ? 15 : 18, lineHeight: "24px", color: "#FFFFFF", margin: 0, maxWidth: 813 }, children: "Technossus operates across multiple locations to stay close to our clients and partners. Our global teams are ready to collaborate, solve challenges, and support your digital transformation journey with speed and expertise. Reach out to the office nearest you and let's start the conversation." })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 20 }, children: locations.map((loc, i) => /* @__PURE__ */ jsxs("div", { style: { backgroundColor: dark1$2, display: "flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ jsx("img", { alt: loc.country, src: loc.image, style: { width: "100%", height: isMobile ? 200 : 260, objectFit: "cover", display: "block" } }),
        /* @__PURE__ */ jsxs("div", { style: { border: `1px solid ${colors.text[700]}`, borderTop: "none", padding: isMobile ? 16 : 24, display: "flex", flexDirection: "column", gap: 12 }, children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { style: { fontFamily: sans$5, fontWeight: 600, fontSize: isMobile ? 18 : 24, lineHeight: "32px", color: "#FFFFFF", margin: 0 }, children: loc.country }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$5, fontWeight: 500, fontSize: isMobile ? 13 : 14, lineHeight: "20px", color: colors.text[400], margin: 0 }, children: loc.company })
          ] }),
          /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$5, fontWeight: 500, fontSize: isMobile ? 13 : 14, lineHeight: "20px", color: colors.text[500], margin: 0 }, children: loc.city }),
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 4 }, children: [
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$5, fontWeight: 500, fontSize: isMobile ? 12 : 13, lineHeight: "18px", color: colors.text[400], margin: 0 }, children: loc.address }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$5, fontWeight: 500, fontSize: isMobile ? 12 : 13, lineHeight: "18px", color: colors.text[400], margin: 0 }, children: loc.phone })
          ] })
        ] })
      ] }, i)) })
    ] }) }) }),
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
const imgHeroBg$1 = "/assets/Careers%20page-C7PZlYkh.png";
const imgArrowForward = "/assets/8a747203f958377d346e5cba2f8ebb5af2b3712b.svg";
const imgBento1 = "/assets/a2c5aedfd47c9d61a54070b6ef0abcd89a59217a.png";
const imgBento2 = "/assets/b0f341860b2c6f76cfb4422ad266623aab2d1f6e.png";
const imgBento3 = "/assets/fba5208f46ffc48029fdd0a7b3697e305c66419c.png";
const imgHiringPerson = "/assets/841d1956c23918ec138a2eef41ff5a34b6b981e1.png";
const sans$4 = fontFamily.sans;
const serif$2 = fontFamily.serif;
const red$2 = colors.brand.primary;
const dark = colors.brand.black;
const dark1$1 = colors.background.dark1;
const accordionItems = [
  {
    title: "Continuous Quality & QA Ops Engineering",
    subtitle: "Quality that lives in the pipeline, from design to release.",
    content: {
      type: "detail",
      serviceLabel: "ENGINEERING EXCELLENCE",
      heading: "A culture built on curiosity, ownership, and continuous learning",
      body: [
        "Objective validation matters most when the team that built the system is also the one reviewing it. Independent quality assurance brings a consistent, unbiased perspective across releases, environments, and system changes — surfacing what's easy to miss when engineers are close to the code.",
        "We work with your product and engineering teams to design test strategies around how you actually build: your stack, release cadence, and the business-critical paths where a failure would hurt most."
      ]
    }
  },
  {
    title: "Work - Life Balance",
    subtitle: "Flexible schedules and remote options that respect your personal time.",
    content: {
      type: "detail",
      serviceLabel: "WORK - LIFE BALANCE",
      heading: "A culture built on trust, flexibility, and respect for your time",
      body: [
        "We believe the best work happens when people have the space to recharge. Flexible scheduling, remote work options, and generous leave policies give our team the breathing room to do their best work.",
        "From async-first workflows to flexible start times, we make sure our people can bring their whole selves to work every day."
      ]
    }
  },
  {
    title: "Global Impact",
    subtitle: "Work with cutting-edge technologies on projects that redefine industries.",
    content: {
      type: "detail",
      serviceLabel: "GLOBAL IMPACT",
      heading: "A culture built on curiosity, ownership, and continuous learning",
      body: [
        "Objective validation matters most when the team that built the system is also the one reviewing it. Independent quality assurance brings a consistent, unbiased perspective across releases, environments, and system changes surfacing what's easy to miss when engineers are close to the code.",
        "We work with your product and engineering teams to design test strategies around how you actually build: your stack, release cadence, and the business-critical paths where a failure would hurt most. Coverage gets built to hold across releases, not just pass the next one."
      ]
    }
  },
  {
    title: "Career Growth",
    subtitle: "Personalized mentorship, clear promotion paths, and training budgets.",
    content: {
      type: "detail",
      serviceLabel: "CAREER GROWTH",
      heading: "Grow faster with a team that invests in your development",
      body: [
        "At Technossus, career growth isn't a buzzword — it's built into how we operate. Every team member has access to personalized mentorship, clear promotion paths, and dedicated training budgets.",
        "We believe that when our people grow, the company grows. That's why we create real opportunities to learn, lead, and make meaningful impact."
      ]
    }
  }
];
const testimonials = [
  {
    quote: `"Flawless rollout of New Relic with no downtime and no change window allows CommonSpirit Health deep understanding of consumer experience. Net savings on overall costs by delivering projects with half of the requested staff — 'Ridiculously Qualified Team.'"`,
    name: "Jeffrey Harker",
    title: "System Manager Cloud Engineering",
    color: "white"
  },
  {
    quote: '"Technossus has been a game-changer for AdaptHealth. Their dedication to quality and commitment to continuous improvement is unmatched. Their adaptability and willingness to learn make them the perfect partner. The team is knowledgeable, skilled, and go beyond to exceed expectations."',
    name: "Anita Salgado",
    title: "Senior Business Systems Analyst",
    color: "red"
  },
  {
    quote: `"We are very pleased with the quality of service the Technossus team has provided to the BTX lab. The lab sincerely appreciates the team's responsiveness and attention to detail in building new features into our LIMS and for the resolution of production issues."`,
    name: "Tyler Zucchiatti",
    title: "Director, Software Development – Middleware & Integration",
    color: "white"
  }
];
function Careers() {
  const { isMobile, isTablet } = useBreakpoint();
  const px = {
    maxWidth: 1440,
    margin: "0 auto",
    padding: isMobile ? "48px 16px" : isTablet ? "60px 32px" : "80px 96px"
  };
  const heroFontSize = isMobile ? 28 : isTablet ? 36 : 48;
  const heroLineHeight = isMobile ? "36px" : isTablet ? "44px" : "56px";
  const h2FontSize = isMobile ? 24 : isTablet ? 28 : 36;
  const h2LineHeight = isMobile ? "32px" : "40px";
  const bentoHeight = isMobile ? 280 : isTablet ? 400 : 600;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Careers at Technossus — Shape the Future of Technology",
        description: "Join Technossus and work on enterprise AI and cloud engineering. Explore open roles and build something meaningful.",
        canonicalPath: "/careers",
        keywords: "Technossus careers, tech jobs, AI engineer jobs, enterprise software careers",
        jsonLd: breadcrumbSchema([{ name: "Home", url: "https://newtechnossus-v2.vercel.app" }, { name: "Careers", url: "https://newtechnossus-v2.vercel.app/careers" }])
      }
    ),
    /* @__PURE__ */ jsxs("section", { style: { position: "relative", width: "100%", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          alt: "",
          src: imgHeroBg$1,
          style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }
        }
      ),
      /* @__PURE__ */ jsx("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(89.97deg, rgba(1,1,1,0.91) 36.4%, rgba(1,1,1,0) 108.78%)" } }),
      /* @__PURE__ */ jsx("div", { style: { position: "relative", ...px, minHeight: isMobile ? 400 : 560, display: "flex", alignItems: "center" }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 711, display: "flex", flexDirection: "column", gap: isMobile ? 32 : 60 }, children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("p", { style: { fontFamily: serif$2, fontWeight: 500, fontSize: heroFontSize, lineHeight: heroLineHeight, letterSpacing: "-0.96px", margin: 0 }, children: [
            /* @__PURE__ */ jsx("span", { style: { color: "#FFFFFF" }, children: "Shape the " }),
            /* @__PURE__ */ jsx("span", { style: { color: red$2 }, children: "future of technology" })
          ] }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 80, children: /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$4, fontWeight: 500, fontSize: isMobile ? 15 : 18, lineHeight: "24px", color: "#FFFFFF", margin: 0 }, children: "We're more than a company, we're a hub of innovation, collaboration, and continuous learning. If you're passionate about technology and making real impact, your next chapter starts here." }) })
        ] }),
        /* @__PURE__ */ jsx(FadeUp, { delay: 120, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 12, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ jsxs("button", { style: { display: "flex", alignItems: "center", gap: 8, height: 56, padding: "16px 24px", backgroundColor: red$2, border: "none", cursor: "pointer", fontFamily: sans$4, fontWeight: 600, fontSize: 16, lineHeight: "28px", color: "#FFFFFF" }, children: [
            "Show us the problem",
            /* @__PURE__ */ jsx("img", { alt: "", src: imgArrowForward, style: { width: 24, height: 24 } })
          ] }),
          /* @__PURE__ */ jsx("button", { style: { display: "flex", alignItems: "center", justifyContent: "center", height: 56, padding: "16px 24px", backgroundColor: "transparent", border: `1px solid ${red$2}`, cursor: "pointer", fontFamily: sans$4, fontWeight: 600, fontSize: 16, lineHeight: "28px", color: red$2 }, children: "See how we work" })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { style: { backgroundColor: "#FFFFFF" }, children: /* @__PURE__ */ jsxs("div", { style: { ...px, paddingTop: isMobile ? 48 : isTablet ? 60 : 80, paddingBottom: isMobile ? 48 : isTablet ? 60 : 80, display: "flex", flexDirection: "column", gap: 24 }, children: [
      /* @__PURE__ */ jsx(FadeUp, { duration: 500, children: /* @__PURE__ */ jsx(Tag, { label: "LIFE AT TECHNOSSUS" }) }),
      isMobile ? (
        /* Mobile: stacked */
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 12 }, children: [
          /* @__PURE__ */ jsxs("div", { style: { position: "relative", overflow: "hidden", height: 280 }, children: [
            /* @__PURE__ */ jsx("img", { alt: "Team retreats", src: imgBento1, style: { width: "100%", height: "100%", objectFit: "cover", display: "block" } }),
            /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 12, right: 12, backgroundColor: red$2, padding: "4px 10px", fontFamily: sans$4, fontWeight: 600, fontSize: 12, lineHeight: "20px", color: "#FFFFFF" }, children: "Team Retreats" })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 12, height: 180 }, children: [
            /* @__PURE__ */ jsxs("div", { style: { position: "relative", overflow: "hidden", flex: 1 }, children: [
              /* @__PURE__ */ jsx("img", { alt: "Collaborative workspace", src: imgBento2, style: { width: "100%", height: "100%", objectFit: "cover", display: "block" } }),
              /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 10, right: 8, backgroundColor: red$2, padding: "3px 8px", fontFamily: sans$4, fontWeight: 600, fontSize: 11, lineHeight: "18px", color: "#FFFFFF" }, children: "Collaborative Workspace" })
            ] }),
            /* @__PURE__ */ jsxs("div", { style: { position: "relative", overflow: "hidden", flex: 1 }, children: [
              /* @__PURE__ */ jsx("img", { alt: "Knowledge transfer", src: imgBento3, style: { width: "100%", height: "100%", objectFit: "cover", display: "block" } }),
              /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 10, right: 8, backgroundColor: red$2, padding: "3px 8px", fontFamily: sans$4, fontWeight: 600, fontSize: 11, lineHeight: "18px", color: "#FFFFFF" }, children: "Knowledge Transfer" })
            ] })
          ] })
        ] })
      ) : (
        /* Tablet / Desktop: 2-col flex, matching Figma */
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 24, height: bentoHeight }, children: [
          /* @__PURE__ */ jsxs("div", { style: { flex: "1 0 0", position: "relative", overflow: "hidden" }, children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                alt: "Team retreats",
                src: imgBento1,
                style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "bottom", pointerEvents: "none" }
              }
            ),
            /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 20, right: 20, backgroundColor: red$2, padding: "5px 10px", fontFamily: sans$4, fontWeight: 600, fontSize: 14, lineHeight: "20px", color: "#FFFFFF" }, children: "Team Retreats" })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: { flex: "1 0 0", display: "flex", flexDirection: "column", gap: 24 }, children: [
            /* @__PURE__ */ jsxs("div", { style: { flex: "1 0 0", position: "relative", overflow: "hidden" }, children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  alt: "Collaborative workspace",
                  src: imgBento2,
                  style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "bottom", pointerEvents: "none" }
                }
              ),
              /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 20, right: 20, backgroundColor: red$2, padding: "5px 10px", fontFamily: sans$4, fontWeight: 600, fontSize: 14, lineHeight: "20px", color: "#FFFFFF" }, children: "Collaborative Workspace" })
            ] }),
            /* @__PURE__ */ jsxs("div", { style: { flex: "1 0 0", position: "relative", overflow: "hidden" }, children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  alt: "Knowledge transfer",
                  src: imgBento3,
                  style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "bottom", pointerEvents: "none" }
                }
              ),
              /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 20, right: 20, backgroundColor: red$2, padding: "5px 10px", fontFamily: sans$4, fontWeight: 600, fontSize: 14, lineHeight: "20px", color: "#FFFFFF" }, children: "Knowledge Transfer" })
            ] })
          ] })
        ] })
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { style: { ...px, display: "flex", flexDirection: "column", gap: 36 }, children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
        /* @__PURE__ */ jsx(FadeUp, { duration: 500, children: /* @__PURE__ */ jsx(Tag, { label: "A PLACE TO BELONG" }) }),
        /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("h2", { style: { fontFamily: serif$2, fontWeight: 500, fontSize: h2FontSize, lineHeight: h2LineHeight, margin: 0, maxWidth: 844, color: dark }, children: [
          "Release confidence, compliance readiness, and",
          " ",
          /* @__PURE__ */ jsx("span", { style: { color: red$2 }, children: "AI quality built in from the start." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(Accordion, { items: accordionItems, defaultActiveIndex: 0 })
    ] }) }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx("div", { style: { maxWidth: 1440, margin: "0 auto" }, children: /* @__PURE__ */ jsxs("div", { style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: dark1$1,
      padding: isMobile ? "40px 24px" : isTablet ? "48px 40px" : 56,
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? 32 : 36,
      alignItems: isMobile ? "flex-start" : "center"
    }, children: [
      /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, left: 0, width: 118, height: 10, background: red$2, pointerEvents: "none" } }),
      /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, left: 0, width: 10, height: 118, background: red$2, pointerEvents: "none" } }),
      /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, right: 0, width: 118, height: 10, background: red$2, pointerEvents: "none" } }),
      /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, right: 0, width: 10, height: 118, background: red$2, pointerEvents: "none" } }),
      /* @__PURE__ */ jsxs("div", { style: { position: "relative", flex: "1 0 0", display: "flex", flexDirection: "column", gap: 36, minWidth: 0 }, children: [
        /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
          /* @__PURE__ */ jsx("h2", { style: { fontFamily: serif$2, fontWeight: 500, fontSize: h2FontSize, lineHeight: h2LineHeight, color: "#FFFFFF", margin: 0 }, children: "We ARE HIRING!" }),
          /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$4, fontWeight: 500, fontSize: isMobile ? 15 : 18, lineHeight: "24px", color: colors.text[300], margin: 0 }, children: "Share your profile with Technossus and tell us where you'd like to contribute! We're always looking for enthusiastic people across engineering, design, AI, cloud, and more." })
        ] }) }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            style: { display: "flex", alignItems: "center", gap: 8, height: 56, padding: "16px 24px", backgroundColor: red$2, border: "none", cursor: "pointer", fontFamily: sans$4, fontWeight: 600, fontSize: 16, lineHeight: "28px", color: "#FFFFFF", alignSelf: "flex-start" },
            children: [
              "Talk to Our Team",
              /* @__PURE__ */ jsx("img", { alt: "", src: imgArrowForward, style: { width: 24, height: 24 } })
            ]
          }
        )
      ] }),
      !isMobile && /* @__PURE__ */ jsx(
        "img",
        {
          alt: "Join our team",
          src: imgHiringPerson,
          style: { position: "relative", width: isTablet ? 320 : 479, height: isTablet ? 320 : 479, objectFit: "cover", flexShrink: 0 }
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { style: { ...px, display: "flex", flexDirection: "column", gap: 48 }, children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
        /* @__PURE__ */ jsx(FadeUp, { duration: 500, children: /* @__PURE__ */ jsx(Tag, { label: "TESTIMONIALS" }) }),
        /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
          /* @__PURE__ */ jsxs("h2", { style: { fontFamily: serif$2, fontWeight: 500, fontSize: h2FontSize, lineHeight: h2LineHeight, margin: 0 }, children: [
            /* @__PURE__ */ jsx("span", { style: { color: "#010101" }, children: "Hear what " }),
            /* @__PURE__ */ jsx("span", { style: { color: red$2 }, children: "our clients have to say." })
          ] }),
          /* @__PURE__ */ jsx("p", { style: { fontFamily: sans$4, fontWeight: 500, fontSize: isMobile ? 15 : 18, lineHeight: "24px", color: colors.text[700], margin: 0 }, children: "Real experiences, trusted partnerships, and measurable impact from the businesses we've helped transform." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)", gap: 24 }, children: testimonials.map((t, i) => /* @__PURE__ */ jsx(
        Testimonial,
        {
          color: t.color,
          quote: t.quote,
          name: t.name,
          title: t.title
        },
        i
      )) })
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
const sans$3 = '"General Sans", system-ui, -apple-system, sans-serif';
const serif$1 = '"Roboto Serif", Georgia, serif';
const red$1 = "#ED2939";
const imgHero = "/assets/d16e5b610d1fff4d128bb7e9580d630eb3fa03e8.png";
const imgCardDefault = "/assets/fbbad1d37f7a4e076de4d16631dc6863c6c4444a.png";
const imgChevron = "/assets/83feb004fa8d4ad578fcccdd2d4ee67a5041135b.svg";
const caseStudies = [
  // Healthcare
  { tags: "HEALTHCARE • MOBILE PLATFORM", industry: "Healthcare", service: "Product Engineering", title: "Mobile Platform Increases Company Value for Healthcare Benefits Provider", excerpt: "A leading healthcare benefits provider needed a mobile strategy to extend services to brokers, employers, and end users. Technossus delivered a scalable platform with seamless data integration across insurers, brokers, and enterprise systems." },
  { tags: "HEALTHCARE • CRM INTEGRATION", industry: "Healthcare", service: "Product Engineering", title: "CRM with Complex External Integrations Launches On Time", excerpt: "A leading healthcare insurance provider needed a CRM integrating data from state and federal platforms under evolving regulatory requirements and a fixed go-live deadline. Delivered on time with real-time access to customer data." },
  { tags: "HEALTHCARE • ALM & GOVERNANCE", industry: "Healthcare", service: "Quality Engineering", title: "ALM Expertise Drives Successful Large-Scale Digital Transformation", excerpt: "A major U.S. healthcare provider needed to coordinate a complex multi-vendor digital platform transformation. Technossus established enterprise-wide ALM processes and governance frameworks, improving visibility and reducing risk." },
  { tags: "LIFE SCIENCES • LAB PLATFORM", industry: "Healthcare", service: "Product Engineering", title: "Unified Lab Platform Reduces Licensing Costs and Improves Throughput", excerpt: "Helix replaced three fragmented lab systems with one higher-performing LIMS, reducing licensing fees, eliminating manual labor through standardized integrations, and enabling greater testing throughput without adding staff." },
  { tags: "HEALTHCARE • STREAMING DATA", industry: "Healthcare", service: "Data Intelligence & Analytics", title: "Streaming Analytics Enables Real-Time Visibility Across Patient Flow", excerpt: "A healthcare organization needed live visibility into patient data as it was generated. A streaming analytics platform now feeds clinical dashboards in real time, enabling immediate action on delays, risks, and bottlenecks." },
  { tags: "HEALTHCARE • REVENUE CYCLE", industry: "Healthcare", service: "AI Led Business Transformation", title: "Revenue Cycle Automation Reduces Denials and Improves Cash Flow", excerpt: "Intelligent pre-submission validation catches errors before claims are submitted, routes exceptions automatically, and gives finance teams a real-time view from service to payment — improving collections and reducing revenue leakage." },
  // Financial Services
  { tags: "FINTECH • MORTGAGE PLATFORM", industry: "Financial Services", service: "Product Engineering", title: "Unified Mortgage Platform Enables Scalable Lending Operations", excerpt: "A leading financial services organization needed to unify multiple acquired mortgage systems into a single, seamless experience. Technossus built a unified platform connecting fragmented systems, improving data flow and simplifying workflows." },
  { tags: "INVESTMENT BANKING • DATA", industry: "Financial Services", service: "Data Intelligence & Analytics", title: "Automated Data Validation Improves Decision Confidence", excerpt: "A global investment bank depended on manual validation of financial dashboards, resulting in slow reporting cycles. An automated validation framework now continuously tests data across systems, automating 95% of validation scenarios." },
  { tags: "INSURANCE • DIGITAL EXPERIENCE", industry: "Financial Services", service: "Digital Experience Design", title: "Insurance Brokerage Achieves 30% Faster Quote Turnaround", excerpt: "A leading insurance broker lacked a fast, intuitive way to generate quotes. A mobile-first QuoteLite portal with real-time quoting capabilities reduced turnaround time by ~30% and improved broker productivity." },
  // HiTech & SaaS
  { tags: "HEALTHTECH • PRODUCT REDESIGN", industry: "HiTech / SaaS", service: "Digital Experience Design", title: "Connected Product Experience Improves Adoption — App Rating 1.4 to 3.4", excerpt: "A migraine treatment companion app was redesigned around real user conditions. Onboarding steps reduced from 13 to 7. Bluetooth reliability re-engineered. App rating improved from 1.4 to 3.4." },
  { tags: "SECURITY • COMPUTER VISION", industry: "HiTech / SaaS", service: "AI Led Business Transformation", title: "Real-Time Visual Intelligence Enables 10ms Plate Recognition", excerpt: "An edge-to-alert computer vision pipeline ingested live video from cameras, drones, and moving patrol cars — detecting vehicles, extracting license plate data via OCR, and matching against watchlist databases in near real time." },
  { tags: "GOVTECH • WORKFLOW AUTOMATION", industry: "HiTech / SaaS", service: "AI Led Business Transformation", title: "Workflow Automation Clears 100% of Operational Backlog in 24 Hours", excerpt: "A high-volume traffic offence reporting workflow was automated from email intake to PDF review, validation, API lookups, and system submission — clearing the entire historical backlog in a single 24-hour cycle with 1000% efficiency improvement." }
];
const industries = ["Healthcare", "Financial Services", "HiTech / SaaS"];
const services = ["AI Led Business Transformation", "Data Intelligence & Analytics", "Digital Experience Design", "Product Engineering", "Quality Engineering", "Cloud & Product Modernization"];
const PAGE_SIZE = 6;
function CaseStudies() {
  const { isMobile, isTablet } = useBreakpoint();
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [industryOpen, setIndustryOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const industryRef = useRef(null);
  const serviceRef = useRef(null);
  useEffect(() => {
    function handleClick(e) {
      if (industryRef.current && !industryRef.current.contains(e.target)) {
        setIndustryOpen(false);
      }
      if (serviceRef.current && !serviceRef.current.contains(e.target)) {
        setServiceOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  const filtered = caseStudies.filter((cs) => {
    if (selectedIndustry && cs.industry !== selectedIndustry) return false;
    if (selectedService && cs.service !== selectedService) return false;
    return true;
  });
  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [selectedIndustry, selectedService]);
  const inner = {
    maxWidth: 1440,
    margin: "0 auto",
    padding: isMobile ? "48px 16px" : isTablet ? "60px 32px" : "80px 80px"
  };
  const heroPadding = isMobile ? "32px 16px 48px" : isTablet ? "40px 32px 60px" : "40px 80px 80px";
  const cols3 = isMobile ? "1fr" : isTablet ? "repeat(2,1fr)" : "repeat(3,1fr)";
  const cardGap = isMobile ? 24 : 48;
  const dropdownMenuStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    background: "#fff",
    border: "1px solid #E8E8E8",
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    zIndex: 100,
    minWidth: 200,
    marginTop: 4
  };
  function optionStyle(active) {
    return {
      display: "block",
      width: "100%",
      textAlign: "left",
      padding: "12px 16px",
      fontFamily: sans$3,
      fontSize: 14,
      border: "none",
      cursor: "pointer",
      color: active ? red$1 : "#383838",
      background: active ? "#F5F5F5" : "transparent",
      fontWeight: active ? 600 : 500,
      boxSizing: "border-box"
    };
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Case Studies — Enterprise AI & Technology Results | Technossus",
        description: "Explore real-world results from Technossus engagements — AI automation, cloud modernization, and digital transformation across industries.",
        canonicalPath: "/case-studies",
        keywords: "Technossus case studies, AI results, enterprise technology outcomes, digital transformation case study",
        jsonLd: breadcrumbSchema([{ name: "Home", url: "https://newtechnossus-v2.vercel.app" }, { name: "Case Studies", url: "https://newtechnossus-v2.vercel.app/case-studies" }])
      }
    ),
    /* @__PURE__ */ jsx("section", { style: { background: "#fff" }, children: /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          maxWidth: 1440,
          margin: "0 auto",
          padding: heroPadding,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? 32 : isTablet ? 40 : 80,
          boxSizing: "border-box"
        },
        children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                flex: "1 1 0",
                display: "flex",
                flexDirection: "column",
                gap: 24,
                minWidth: 0
              },
              children: [
                /* @__PURE__ */ jsx(
                  Breadcrumb,
                  {
                    items: [
                      { label: "Home", href: "/" },
                      { label: "Case Studies", active: true }
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs(
                  "h1",
                  {
                    style: {
                      fontFamily: serif$1,
                      fontWeight: 600,
                      fontSize: isMobile ? 28 : isTablet ? 40 : 48,
                      lineHeight: isMobile ? "36px" : isTablet ? "48px" : "56px",
                      color: "#1E1E1E",
                      margin: 0
                    },
                    children: [
                      "Real outcomes, delivered with",
                      " ",
                      /* @__PURE__ */ jsx("span", { style: { color: red$1 }, children: "precision." })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsx(FadeUp, { delay: 80, children: /* @__PURE__ */ jsx(
                  "p",
                  {
                    style: {
                      fontFamily: sans$3,
                      fontWeight: 500,
                      fontSize: 18,
                      lineHeight: "24px",
                      color: "#5C5C5C",
                      margin: 0
                    },
                    children: "Explore how Technossus has helped healthcare, financial services, and technology organizations solve their most complex engineering challenges."
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }, children: [
                  /* @__PURE__ */ jsx(Button, { variant: "primary", label: "Talk to Our Team", href: "/contact" }),
                  /* @__PURE__ */ jsx(Button, { variant: "secondary", label: "Explain Our Work", href: "#case-studies" })
                ] })
              ]
            }
          ),
          !isMobile && /* @__PURE__ */ jsx("div", { style: { flexShrink: 0 }, children: /* @__PURE__ */ jsx(
            "img",
            {
              src: imgHero,
              alt: "AI digital human",
              style: {
                width: isTablet ? 360 : 540,
                height: isTablet ? 360 : 540,
                objectFit: "contain",
                display: "block"
              }
            }
          ) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("section", { id: "case-studies", style: { background: "#fff" }, children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
      /* @__PURE__ */ jsx(Tag, { label: "PROOF" }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          style: {
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 8,
            marginTop: 16,
            marginBottom: 48
          },
          children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  setSelectedIndustry(null);
                  setSelectedService(null);
                },
                style: {
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 48,
                  padding: "8px 24px",
                  background: !selectedIndustry && !selectedService ? "#1E1E1E" : "transparent",
                  color: !selectedIndustry && !selectedService ? "#fff" : "#1E1E1E",
                  border: !selectedIndustry && !selectedService ? "none" : "1px solid #1E1E1E",
                  fontFamily: sans$3,
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  boxSizing: "border-box"
                },
                children: "All Case Studies"
              }
            ),
            /* @__PURE__ */ jsxs("div", { ref: industryRef, style: { position: "relative" }, children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => {
                    setIndustryOpen((o) => !o);
                    setServiceOpen(false);
                  },
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    height: 48,
                    paddingLeft: 24,
                    paddingRight: 18,
                    background: selectedIndustry ? "#1E1E1E" : "transparent",
                    color: selectedIndustry ? "#fff" : "#1E1E1E",
                    border: "1px solid #1E1E1E",
                    fontFamily: sans$3,
                    fontWeight: selectedIndustry ? 600 : 500,
                    fontSize: 14,
                    cursor: "pointer",
                    gap: 8,
                    whiteSpace: "nowrap",
                    boxSizing: "border-box"
                  },
                  children: [
                    selectedIndustry ?? "Industry",
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: imgChevron,
                        alt: "",
                        style: {
                          width: 16,
                          height: 16,
                          transform: "rotate(90deg)",
                          display: "block",
                          flexShrink: 0,
                          filter: selectedIndustry ? "brightness(0) invert(1)" : "none"
                        }
                      }
                    )
                  ]
                }
              ),
              industryOpen && /* @__PURE__ */ jsxs("div", { style: dropdownMenuStyle, children: [
                selectedIndustry && /* @__PURE__ */ jsx(
                  "button",
                  {
                    style: optionStyle(false),
                    onClick: () => {
                      setSelectedIndustry(null);
                      setIndustryOpen(false);
                    },
                    children: "All Industries"
                  }
                ),
                industries.map((ind) => /* @__PURE__ */ jsx(
                  "button",
                  {
                    style: optionStyle(selectedIndustry === ind),
                    onClick: () => {
                      setSelectedIndustry(ind);
                      setIndustryOpen(false);
                    },
                    children: ind
                  },
                  ind
                ))
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { ref: serviceRef, style: { position: "relative" }, children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => {
                    setServiceOpen((o) => !o);
                    setIndustryOpen(false);
                  },
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    height: 48,
                    paddingLeft: 24,
                    paddingRight: 18,
                    background: selectedService ? "#1E1E1E" : "transparent",
                    color: selectedService ? "#fff" : "#1E1E1E",
                    border: "1px solid #1E1E1E",
                    fontFamily: sans$3,
                    fontWeight: selectedService ? 600 : 500,
                    fontSize: 14,
                    cursor: "pointer",
                    gap: 8,
                    whiteSpace: "nowrap",
                    boxSizing: "border-box"
                  },
                  children: [
                    selectedService ?? "Service",
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: imgChevron,
                        alt: "",
                        style: {
                          width: 16,
                          height: 16,
                          transform: "rotate(90deg)",
                          display: "block",
                          flexShrink: 0,
                          filter: selectedService ? "brightness(0) invert(1)" : "none"
                        }
                      }
                    )
                  ]
                }
              ),
              serviceOpen && /* @__PURE__ */ jsxs("div", { style: dropdownMenuStyle, children: [
                selectedService && /* @__PURE__ */ jsx(
                  "button",
                  {
                    style: optionStyle(false),
                    onClick: () => {
                      setSelectedService(null);
                      setServiceOpen(false);
                    },
                    children: "All Services"
                  }
                ),
                services.map((svc) => /* @__PURE__ */ jsx(
                  "button",
                  {
                    style: optionStyle(selectedService === svc),
                    onClick: () => {
                      setSelectedService(svc);
                      setServiceOpen(false);
                    },
                    children: svc
                  },
                  svc
                ))
              ] })
            ] })
          ]
        }
      ),
      visible.length > 0 ? /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: cols3,
            gap: cardGap
          },
          children: visible.map((cs, i) => /* @__PURE__ */ jsx(CaseStudyCard, { cs }, i))
        }
      ) : /* @__PURE__ */ jsx(
        "p",
        {
          style: {
            fontFamily: sans$3,
            fontSize: 16,
            fontWeight: 500,
            color: "#5C5C5C",
            textAlign: "center",
            padding: "48px 0"
          },
          children: "No case studies match the selected filters."
        }
      ),
      hasMore && /* @__PURE__ */ jsx("div", { style: { display: "flex", justifyContent: "center", marginTop: 48 }, children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setVisibleCount((c) => c + PAGE_SIZE),
          style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontFamily: sans$3,
            fontWeight: 600,
            fontSize: 16,
            color: red$1,
            padding: 0
          },
          children: [
            "Load More Impact Stories",
            /* @__PURE__ */ jsx(
              "img",
              {
                src: imgChevron,
                alt: "",
                style: {
                  width: 16,
                  height: 16,
                  transform: "rotate(90deg)",
                  display: "block",
                  flexShrink: 0,
                  filter: "invert(17%) sepia(97%) saturate(5234%) hue-rotate(344deg) brightness(96%) contrast(98%)"
                }
              }
            )
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx(
      CTABanner,
      {
        size: "large",
        label: "LET'S WORK ON IT TOGETHER",
        heading: "Ready to become our next success story?",
        body: "Whether you're modernizing systems, building a new product, or scaling engineering, we're ready to collaborate.",
        primaryCta: "Schedule a Strategy Session",
        secondaryCta: "Contact Us"
      }
    ),
    /* @__PURE__ */ jsx("div", { style: { height: isMobile ? 48 : 80 } })
  ] });
}
function CaseStudyCard({ cs }) {
  const sans2 = '"General Sans", system-ui, -apple-system, sans-serif';
  const red2 = "#ED2939";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        overflow: "hidden"
      },
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: imgCardDefault,
            alt: cs.title,
            style: {
              width: "100%",
              height: 260,
              objectFit: "cover",
              display: "block",
              flexShrink: 0
            }
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: 12,
              padding: "24px 24px 28px",
              flex: "1 1 auto"
            },
            children: [
              /* @__PURE__ */ jsx(
                "p",
                {
                  style: {
                    fontFamily: sans2,
                    fontWeight: 600,
                    fontSize: 14,
                    color: "#949494",
                    margin: 0,
                    lineHeight: "20px"
                  },
                  children: cs.tags
                }
              ),
              /* @__PURE__ */ jsx(
                "h3",
                {
                  style: {
                    fontFamily: sans2,
                    fontWeight: 600,
                    fontSize: 20,
                    lineHeight: "28px",
                    color: "#383838",
                    margin: 0
                  },
                  children: cs.title
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  style: {
                    fontFamily: sans2,
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: "#5C5C5C",
                    margin: 0
                  },
                  children: cs.excerpt
                }
              ),
              /* @__PURE__ */ jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ jsx(
                "button",
                {
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 56,
                    width: 180,
                    background: "transparent",
                    border: `1px solid ${red2}`,
                    color: red2,
                    fontFamily: sans2,
                    fontWeight: 600,
                    fontSize: 16,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    boxSizing: "border-box"
                  },
                  children: "View case study"
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}
const sans$2 = '"General Sans", system-ui, -apple-system, sans-serif';
function SingleChip({
  mode = "dark",
  label = "AI Adoption Strategy",
  className,
  style
}) {
  const isLight = mode === "light";
  const chipStyle = isLight ? {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderRadius: 37,
    backgroundColor: "#F5F5F5",
    borderBottom: "1px solid #C6C6C7",
    borderLeft: "1px solid #C6C6C7",
    paddingTop: 12,
    paddingBottom: 13,
    paddingLeft: 21,
    paddingRight: 20,
    ...style
  } : {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderRadius: 37,
    backgroundColor: "#383838",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    ...style
  };
  const textStyle = isLight ? {
    fontFamily: sans$2,
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "20px",
    color: "#1E1E1E",
    whiteSpace: "nowrap",
    textAlign: "center"
  } : {
    fontFamily: sans$2,
    fontWeight: 500,
    fontSize: 16,
    lineHeight: "24px",
    color: "#FFFFFF",
    whiteSpace: "nowrap",
    textAlign: "center"
  };
  return /* @__PURE__ */ jsx("div", { className, style: chipStyle, "data-node-id": isLight ? "2043:4822" : "31:1458", children: /* @__PURE__ */ jsx("div", { style: textStyle, children: label }) });
}
function Chips({ mode = "light", label, items, className = "", style }) {
  if (!items) {
    return /* @__PURE__ */ jsx(SingleChip, { mode, label, className, style });
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      className,
      style: { display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", ...style },
      children: items.map((item, i) => {
        const isDark = mode === "dark";
        const isActive = item.active;
        let bg;
        let color;
        let border;
        let fontSize;
        let lineHeight;
        let py;
        let px;
        if (isActive) {
          bg = "#ED2939";
          color = "#FFFFFF";
          border = "1px solid #ED2939";
          fontSize = isDark ? 16 : 14;
          lineHeight = isDark ? "24px" : "20px";
          py = 12;
          px = 20;
        } else if (isDark) {
          bg = "#383838";
          color = "#FFFFFF";
          border = "none";
          fontSize = 16;
          lineHeight = "24px";
          py = 12;
          px = 20;
        } else {
          bg = "#F5F5F5";
          color = "#1E1E1E";
          border = "1px solid #C6C6C7";
          fontSize = 14;
          lineHeight = "20px";
          py = 12;
          px = 20;
        }
        return /* @__PURE__ */ jsx(
          "button",
          {
            onClick: item.onClick,
            style: {
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: `${py}px ${px}px`,
              borderRadius: 37,
              backgroundColor: bg,
              color,
              border,
              fontFamily: sans$2,
              fontWeight: 500,
              fontSize,
              lineHeight,
              cursor: item.onClick ? "pointer" : "default",
              whiteSpace: "nowrap",
              transition: "background-color 0.2s, color 0.2s"
            },
            children: item.label
          },
          i
        );
      })
    }
  );
}
const imgStarIcon = "/assets/48d3f461d4f1fb6e204239f98530920c972d5b67.svg";
const imgSendIcon = "/assets/2580e4c1a8b8f63b73573a7293d6016283d423ca.svg";
const sans$1 = '"General Sans", system-ui, -apple-system, sans-serif';
function SearchBar({
  placeholder = "Ask about services, industries, solutions, or case studies",
  value: controlledValue,
  onChange,
  onSubmit,
  className,
  style
}) {
  const [internalValue, setInternalValue] = useState("");
  const value = controlledValue !== void 0 ? controlledValue : internalValue;
  const handleChange = (e) => {
    const v = e.target.value;
    setInternalValue(v);
    onChange == null ? void 0 : onChange(v);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit == null ? void 0 : onSubmit(value);
  };
  return /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className,
      "data-node-id": "31:857",
      style: {
        backgroundColor: "#FFFFFF",
        border: "1px solid #F5F5F5",
        borderRadius: 9999,
        boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 65,
        paddingLeft: 25,
        paddingRight: 17,
        paddingTop: 21,
        paddingBottom: 21,
        width: "100%",
        maxWidth: 1152,
        overflow: "hidden",
        boxSizing: "border-box",
        ...style
      },
      children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, position: "relative", flexShrink: 0 }, children: [
          /* @__PURE__ */ jsx("div", { style: { width: 20, height: 20, position: "relative", flexShrink: 0 }, children: /* @__PURE__ */ jsx(
            "img",
            {
              alt: "",
              src: imgStarIcon,
              style: { position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }
            }
          ) }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value,
              onChange: handleChange,
              placeholder,
              "aria-label": "AI search",
              style: {
                border: "none",
                outline: "none",
                background: "transparent",
                fontFamily: sans$1,
                fontWeight: 500,
                fontSize: 16,
                lineHeight: "24px",
                color: "#949494",
                width: "auto",
                minWidth: 200
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            "aria-label": "Submit search",
            style: {
              backgroundColor: "#1E1E1E",
              borderRadius: 22,
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
              padding: 8,
              flexShrink: 0
            },
            children: /* @__PURE__ */ jsx("div", { style: { width: 24, height: 24, position: "relative" }, children: /* @__PURE__ */ jsx(
              "img",
              {
                alt: "",
                src: imgSendIcon,
                style: { position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }
              }
            ) })
          }
        )
      ]
    }
  );
}
const sans = '"General Sans", system-ui, -apple-system, sans-serif';
const serif = '"Roboto Serif", Georgia, serif';
const red = "#ED2939";
const dark1 = "#050510";
const dark2 = "#1E1E1E";
const imgHeroBg = "/assets/cf9c112d09fc9f6437fa76b0e30e6382f36dc276.png";
const imgFeatPhotoBg = "/assets/8b5b322290a3502aa74e1a09d670545080a3d3a8.png";
const CornerTL = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, left: 0, width: 118, height: 10, background: red, pointerEvents: "none", zIndex: 2 } }),
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, left: 0, width: 10, height: 118, background: red, pointerEvents: "none", zIndex: 2 } })
] });
const CornerBR = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, right: 0, width: 118, height: 10, background: red, pointerEvents: "none", zIndex: 2 } }),
  /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, right: 0, width: 10, height: 118, background: red, pointerEvents: "none", zIndex: 2 } })
] });
const statsData = [
  { value: "48+", label: "POCS SHAPED AND SHIPPED" },
  { value: "12+", label: "LIVE DEMOS AVAILABLE" },
  { value: "240+", label: "STUDIO MEMBERS AND COLLABORATORS" },
  { value: "4+", label: "INDUSTRIES REPRESENTED" }
];
const whatIsItems = [
  {
    num: "01",
    title: "An Innovation Lab",
    description: "Explore working AI demos by industry. Watch use case videos and test ideas in a safe environment before committing a sprint to anything."
  },
  {
    num: "02",
    title: "Accelerators",
    description: "Pre-built, production-tested AI frameworks ready to plug into your stack. All the hard setup is done — just add your context and go."
  },
  {
    num: "03",
    title: "Collaborate",
    description: "A curated space for enterprise leaders, practitioners, and partners sharing what works, co-creating in sprints, and shaping how AI gets applied at scale."
  },
  {
    num: "04",
    title: "The Framework",
    description: "The TAS Delivery Framework is our structured AI SDLC — taking validated prototypes to production safely, with governance and adoption built in at every stage."
  }
];
const engagementFormats = [
  {
    duration: "12-24 HOURS",
    title: "Half-day or Full-Day",
    description: "Identify where AI can create the most meaningful value in your business. Walk away with a prioritized use case map and a clearer view of where to begin."
  },
  {
    duration: "1-3 DAYS",
    title: "AI Design Sprint",
    description: "Identify where AI can create the most meaningful value in your business. Walk away with a prioritized use case map and a clearer view of where to begin."
  },
  {
    duration: "1-2 WEEKS",
    title: "AI Build Sprint",
    description: "Identify where AI can create the most meaningful value in your business. Walk away with a prioritized use case map and a clearer view of where to begin."
  },
  {
    duration: "2-4 WEEKS",
    title: "PoC Development",
    description: "Build a stakeholder-ready proof of concept with defined business value, technical feasibility, and a path toward production."
  }
];
const deliverySteps = [
  {
    num: "01",
    title: "Discover & Frame",
    description: "Identify high-impact AI opportunities and validate feasibility before any build begins."
  },
  {
    num: "02",
    title: "Design & Prototype",
    description: "Rapid prototyping in the lab — co-created with your team, validated with real users."
  },
  {
    num: "03",
    title: "Build & Integrate",
    description: "Production-grade AI engineering using TAS accelerators integrated securely into your stack."
  },
  {
    num: "04",
    title: "Govern & Validate",
    description: "Responsible AI guardrails and compliance controls built in, not bolted on after deployment."
  },
  {
    num: "05",
    title: "Deploy & Adapt",
    description: "Structured rollout and user enablement — because software nobody uses isn't a success."
  },
  {
    num: "06",
    title: "Monitor & Improve",
    description: "Continuous monitoring and model drift detection — AI that gets better over time, not stale."
  }
];
const capabilities = [
  {
    icon: "💬",
    title: "Generative AI & LLMs",
    description: "Custom LLM fine-tuning and GenAI feature design built for enterprise workflows, not consumer demos."
  },
  {
    icon: "🤖",
    title: "Autonomous Agents",
    description: "Multi-agent systems that reason, plan, and execute complex workflows — from document processing to operational automation."
  },
  {
    icon: "🗄️",
    title: "RAG & Knowledge Systems",
    description: "Retrieval-augmented generation on your enterprise data — grounded answers, no hallucinations, full auditability."
  },
  {
    icon: "📊",
    title: "Predictive Analytics",
    description: "ML models that forecast demand, detect risk, and surface actionable signals — trained on your data."
  },
  {
    icon: "💻",
    title: "AI-Native Product Features",
    description: "Embedding intelligence into your SaaS or enterprise product — co-pilots, adaptive interfaces, recommendations users trust."
  },
  {
    icon: "📄",
    title: "Intelligent Document Processing",
    description: "Extract, classify, and validate information from unstructured documents at scale — contracts, claims, clinical notes."
  },
  {
    icon: "🔄",
    title: "Responsible AI & Governance",
    description: "Bias detection, explainability frameworks, and compliance controls built in from the start."
  },
  {
    icon: "✨",
    title: "AI UX & Interaction Design",
    description: "Explainable interactions, adaptive interfaces, and UX patterns that make AI feel intuitive, not intrusive."
  }
];
const quickPicks = [
  "AI Adoption Strategy",
  "Modernize Platforms",
  "Data Analytics",
  "Healthcare IT",
  "Product Engineering"
];
function AIStudio() {
  const { isMobile, isTablet } = useBreakpoint();
  const [searchQuery, setSearchQuery] = useState("");
  const px = isMobile ? 24 : isTablet ? 40 : 80;
  const inner = {
    maxWidth: 1440,
    margin: "0 auto",
    paddingLeft: px,
    paddingRight: px,
    boxSizing: "border-box"
  };
  const sectionH2 = {
    fontFamily: serif,
    fontWeight: 600,
    fontSize: isMobile ? 28 : isTablet ? 36 : 48,
    lineHeight: isMobile ? "36px" : isTablet ? "44px" : "56px",
    color: "#1E1E1E",
    margin: 0
  };
  const sectionH2Dark = {
    ...sectionH2,
    color: "#FFFFFF"
  };
  const sectionSubtitle = {
    fontFamily: sans,
    fontWeight: 500,
    fontSize: isMobile ? 15 : 16,
    lineHeight: "24px",
    color: "#5C5C5C",
    margin: 0,
    maxWidth: 900
  };
  const sectionSubtitleDark = {
    ...sectionSubtitle,
    color: "#E1E0E0"
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "AI Studio (TAS) | Enterprise AI Innovation Lab — Technossus",
        description: "The Technossus AI Studio is a structured environment where enterprise teams explore, validate, and build AI with clarity. Browse accelerators, book a sprint, and go from idea to production.",
        canonicalPath: "/ai-studio",
        keywords: "AI Studio, TAS, enterprise AI, AI accelerators, AI design sprint, LLM, RAG, Technossus, AI PoC, AI governance",
        jsonLd: breadcrumbSchema([
          { name: "Home", url: "https://newtechnossus-v2.vercel.app" },
          { name: "AI Studio", url: "https://newtechnossus-v2.vercel.app/ai-studio" }
        ])
      }
    ),
    /* @__PURE__ */ jsxs(
      "section",
      {
        "aria-label": "AI Studio hero",
        style: { backgroundColor: dark1, position: "relative", overflow: "hidden" },
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              "aria-hidden": "true",
              style: {
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${imgHeroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.18,
                pointerEvents: "none"
              }
            }
          ),
          /* @__PURE__ */ jsxs("div", { style: { ...inner, position: "relative", zIndex: 1, paddingTop: isMobile ? 64 : 96, paddingBottom: 0 }, children: [
            /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 8, alignItems: "center", marginBottom: 32 }, children: [
              /* @__PURE__ */ jsx(Tag, { label: "TAS", variant: "light" }),
              /* @__PURE__ */ jsx(Tag, { label: "AI STUDIO", variant: "light" })
            ] }) }),
            /* @__PURE__ */ jsx(FadeUp, { delay: 80, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 740 }, children: [
              /* @__PURE__ */ jsxs(
                "h1",
                {
                  style: {
                    fontFamily: serif,
                    fontWeight: 500,
                    fontSize: isMobile ? 36 : isTablet ? 40 : 48,
                    lineHeight: isMobile ? "44px" : isTablet ? "52px" : "56px",
                    letterSpacing: "-0.02em",
                    color: "#FFFFFF",
                    margin: "0 0 16px"
                  },
                  children: [
                    "Shape the",
                    " ",
                    /* @__PURE__ */ jsx("span", { style: { color: red }, children: "future of technology" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  style: {
                    fontFamily: sans,
                    fontWeight: 500,
                    fontSize: isMobile ? 16 : 18,
                    lineHeight: "24px",
                    color: "#FFFFFF",
                    margin: 0
                  },
                  children: "We're more than a company, we're a hub of innovation, collaboration, and continuous learning. If you're passionate about technology and making real impact, your next chapter starts here."
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx(FadeUp, { delay: 160, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexWrap: "wrap", gap: 12, marginTop: 60 }, children: [
              /* @__PURE__ */ jsx(Button, { variant: "primary", label: "Show us the problem" }),
              /* @__PURE__ */ jsx(Button, { variant: "secondary", label: "See How We Work" })
            ] }) }),
            /* @__PURE__ */ jsx(FadeUp, { delay: 240, children: /* @__PURE__ */ jsxs("div", { style: { marginTop: isMobile ? 48 : 64, paddingBottom: isMobile ? 40 : 56 }, children: [
              /* @__PURE__ */ jsx(
                SearchBar,
                {
                  placeholder: "Ask about AI use cases, accelerators, industries, or sprints…",
                  value: searchQuery,
                  onChange: setSearchQuery,
                  onSubmit: (v) => console.log("search:", v)
                }
              ),
              /* @__PURE__ */ jsxs("div", { style: { marginTop: 20 }, children: [
                /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }, children: [
                  /* @__PURE__ */ jsx("div", { style: { flex: 1, height: 1, backgroundColor: "rgba(255,255,255,0.12)" } }),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      style: {
                        fontFamily: sans,
                        fontWeight: 500,
                        fontSize: 13,
                        lineHeight: "20px",
                        color: "rgba(255,255,255,0.5)",
                        whiteSpace: "nowrap"
                      },
                      children: "Quick picks to get you started"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { style: { flex: 1, height: 1, backgroundColor: "rgba(255,255,255,0.12)" } })
                ] }),
                /* @__PURE__ */ jsx("div", { style: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }, children: quickPicks.map((pick) => /* @__PURE__ */ jsx(
                  Chips,
                  {
                    mode: "dark",
                    label: pick,
                    style: { cursor: "pointer" }
                  },
                  pick
                )) })
              ] })
            ] }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "section",
      {
        "aria-label": "Why TAS — stats",
        style: { backgroundColor: "#F5F5F5", paddingTop: isMobile ? 56 : 80, paddingBottom: isMobile ? 56 : 80 },
        children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsx(Tag, { label: "STATISTICS" }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 80, children: /* @__PURE__ */ jsxs("h2", { style: { ...sectionH2, marginTop: 16, marginBottom: 48, maxWidth: 860 }, children: [
            "Built for enterprise teams exploring",
            " ",
            /* @__PURE__ */ jsx("span", { style: { color: red }, children: "AI with purpose." })
          ] }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 160, children: /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : `repeat(4, 1fr)`,
                gap: isMobile ? 32 : 24,
                marginBottom: 64
              },
              children: statsData.map((s) => /* @__PURE__ */ jsx(Stats, { value: s.value, label: s.label }, s.value))
            }
          ) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 200, children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "p",
              {
                style: {
                  fontFamily: sans,
                  fontWeight: 600,
                  fontSize: 13,
                  lineHeight: "20px",
                  color: "#ADADAD",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textAlign: "center",
                  marginBottom: 24
                },
                children: "OUR COLLABORATORS"
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  backgroundColor: "#FFFFFF",
                  padding: isMobile ? "24px 16px" : "24px 40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: imgCollaborators,
                    alt: "Technossus enterprise collaborators — Microsoft, AWS, Google, and more",
                    style: { width: "100%", maxWidth: 960, height: "auto", display: "block" }
                  }
                )
              }
            )
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      "section",
      {
        "aria-label": "What is AI Studio",
        style: { backgroundColor: dark2, paddingTop: isMobile ? 56 : 96, paddingBottom: isMobile ? 56 : 96 },
        children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsx(Tag, { label: "WHAT IS AI STUDIO", variant: "light", style: { marginBottom: 16 } }) }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? 48 : 52,
                alignItems: "flex-start",
                backgroundColor: dark2,
                padding: isMobile ? "32px 0 0" : "40px 0 0",
                position: "relative",
                overflow: "hidden"
              },
              children: [
                !isMobile && /* @__PURE__ */ jsx(CornerTL, {}),
                !isMobile && /* @__PURE__ */ jsx(CornerBR, {}),
                /* @__PURE__ */ jsxs(FadeUp, { style: { flexShrink: 0, maxWidth: isMobile ? "100%" : 560 }, children: [
                  /* @__PURE__ */ jsxs("h2", { style: { ...sectionH2Dark, fontSize: isMobile ? 28 : 36, lineHeight: isMobile ? "36px" : "40px", marginBottom: 24 }, children: [
                    "A place to explore, validate, and build",
                    " ",
                    /* @__PURE__ */ jsx("span", { style: { color: red }, children: "enterprise AI with clarity." })
                  ] }),
                  /* @__PURE__ */ jsx("p", { style: { ...sectionSubtitleDark, fontSize: 16, lineHeight: "24px" }, children: "Testing has always been the part of the delivery cycle that absorbs everyone else's delays and still gets blamed when something ships broken. Engineers are moving faster than ever, and the gap between release velocity and quality confidence is widening, not closing." }),
                  /* @__PURE__ */ jsx("p", { style: { ...sectionSubtitleDark, fontSize: 16, lineHeight: "24px", marginTop: 10 }, children: "AI is changing the economics of that gap. Not by replacing QA engineers, but by giving them the kind of leverage that actually matches the pace they're being asked to work at. We work alongside your team to build that leverage, through automation that transfers, tooling your team can own, and a quality practice that compounds instead of decaying." })
                ] }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    style: {
                      display: "grid",
                      gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                      gap: 24,
                      flex: 1
                    },
                    children: whatIsItems.map((item, i) => /* @__PURE__ */ jsx(FadeUp, { delay: i * 80, children: /* @__PURE__ */ jsxs(
                      "article",
                      {
                        style: {
                          borderLeft: `1px solid #ADADAD`,
                          paddingLeft: 21,
                          paddingRight: 12,
                          paddingTop: 12,
                          paddingBottom: 12,
                          boxSizing: "border-box"
                        },
                        children: [
                          /* @__PURE__ */ jsx(
                            "span",
                            {
                              style: {
                                fontFamily: serif,
                                fontWeight: 500,
                                fontSize: 36,
                                lineHeight: "40px",
                                color: red,
                                display: "block",
                                marginBottom: 12
                              },
                              children: item.num
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            "h3",
                            {
                              style: {
                                fontFamily: sans,
                                fontWeight: 600,
                                fontSize: 20,
                                lineHeight: "28px",
                                color: "#FFFFFF",
                                margin: "0 0 12px"
                              },
                              children: item.title
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            "p",
                            {
                              style: {
                                fontFamily: sans,
                                fontWeight: 500,
                                fontSize: 14,
                                lineHeight: "20px",
                                color: "#DEDEDE",
                                margin: 0
                              },
                              children: item.description
                            }
                          )
                        ]
                      }
                    ) }, item.num))
                  }
                )
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      "section",
      {
        "aria-label": "Engagement formats",
        style: { backgroundColor: "#FFFFFF", paddingTop: isMobile ? 56 : 96, paddingBottom: isMobile ? 56 : 96 },
        children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 8, alignItems: "center", marginBottom: 16 }, children: [
            /* @__PURE__ */ jsx(Tag, { label: "1" }),
            /* @__PURE__ */ jsx(Tag, { label: "INNOVATION LABS" })
          ] }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 80, children: /* @__PURE__ */ jsxs("h2", { style: { ...sectionH2, maxWidth: 720, marginBottom: 8 }, children: [
            "Bring a business challenge. Leave with a",
            " ",
            /* @__PURE__ */ jsx("span", { style: { color: red }, children: "clearer path forward." })
          ] }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 120, children: /* @__PURE__ */ jsx("p", { style: { ...sectionSubtitle, marginBottom: isMobile ? 40 : 64 }, children: "Whether you are exploring AI for the first time or ready to validate a specific use case, AI Studio gives your team practical formats to move from discussion to direction." }) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
                gap: 24,
                marginBottom: isMobile ? 56 : 80
              },
              children: engagementFormats.map((f, i) => /* @__PURE__ */ jsx(FadeUp, { delay: i * 80, children: /* @__PURE__ */ jsxs(
                "article",
                {
                  style: {
                    backgroundColor: "#F5F5F5",
                    padding: 24,
                    boxSizing: "border-box",
                    height: "100%"
                  },
                  children: [
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        style: {
                          fontFamily: sans,
                          fontWeight: 600,
                          fontSize: 13,
                          lineHeight: "20px",
                          color: "#5C5C5C",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          display: "block",
                          marginBottom: 12
                        },
                        children: f.duration
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "h3",
                      {
                        style: {
                          fontFamily: sans,
                          fontWeight: 600,
                          fontSize: 20,
                          lineHeight: "28px",
                          color: "#1E1E1E",
                          margin: "0 0 12px"
                        },
                        children: f.title
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "p",
                      {
                        style: {
                          fontFamily: sans,
                          fontWeight: 500,
                          fontSize: 15,
                          lineHeight: "24px",
                          color: "#5C5C5C",
                          margin: 0
                        },
                        children: f.description
                      }
                    )
                  ]
                }
              ) }, f.title))
            }
          ),
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsx("h2", { style: { ...sectionH2, maxWidth: 720, marginBottom: isMobile ? 32 : 48 }, children: "AI Use Cases built for how your business operates" }) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
                gap: 24,
                marginBottom: isMobile ? 40 : 64
              },
              children: [
                { image: imgSvcAI, tags: "HEALTHCARE • AI AUTOMATION", title: "AI-Powered Prior Authorisation", excerpt: "Automated prior auth workflows that cut decision time from days to minutes, reducing admin burden across clinical operations." },
                { image: imgSvcData, tags: "FINANCIAL SERVICES • ANALYTICS", title: "Real-Time Risk & Fraud Detection", excerpt: "ML models trained on transaction patterns that surface anomalies as they happen — not hours later in a batch report." },
                { image: imgSvcCloud, tags: "HITECH & SAAS • AGENTS", title: "Autonomous Document Intelligence", excerpt: "Multi-agent pipelines that ingest, extract, classify, and route unstructured documents at enterprise scale." }
              ].map((card, i) => /* @__PURE__ */ jsx(FadeUp, { delay: i * 80, children: /* @__PURE__ */ jsx(
                Card,
                {
                  mode: "light",
                  type: "insights",
                  image: card.image,
                  tags: card.tags,
                  title: card.title,
                  excerpt: card.excerpt,
                  ctaLabel: "See How We Work"
                }
              ) }, card.title))
            }
          ),
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsx(
            CTABanner,
            {
              size: "small",
              heading: "Not sure which format is right for you?",
              body: "Tell us your challenge and we'll recommend the right starting point.",
              primaryCta: "Talk to an Expert"
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      "section",
      {
        "aria-label": "AI Solutions and Accelerators",
        style: { backgroundColor: "#0A0A0F", paddingTop: isMobile ? 56 : 96, paddingBottom: isMobile ? 56 : 96 },
        children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 8, alignItems: "center", marginBottom: 16 }, children: [
            /* @__PURE__ */ jsx(Tag, { label: "2", variant: "light" }),
            /* @__PURE__ */ jsx(Tag, { label: "ACCELERATION", variant: "light" })
          ] }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 80, children: /* @__PURE__ */ jsx("h2", { style: { ...sectionH2Dark, maxWidth: 680, marginBottom: 12 }, children: "Pre-built solutions. Just add your context." }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 120, children: /* @__PURE__ */ jsx("p", { style: { ...sectionSubtitleDark, marginBottom: isMobile ? 40 : 56 }, children: "Pre-built, production-tested AI frameworks that compress months of setup into days. Watch the demo — TAS members can Try Now in the live TAS environment." }) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
                gap: 24,
                marginBottom: isMobile ? 40 : 64
              },
              children: [
                {
                  image: imgSvcData,
                  badge: "• LIVE IN TAS",
                  techTags: ["Pinecone", "Kafka", "Snowflake", "dbt"],
                  category: "DATA & INFRASTRUCTURE",
                  title: "Intelligent Data Platform",
                  description: "Pre-built ingestion pipelines, vector schemas, and retrieval infrastructure ready from day one.",
                  ctaLabel: "Try Now"
                },
                {
                  image: imgSvcAI,
                  badge: "• LIVE IN TAS",
                  techTags: ["LangChain", "OpenAI", "Pinecone", "FastAPI"],
                  category: "GENERATIVE AI",
                  title: "Enterprise RAG Framework",
                  description: "Retrieval-augmented generation on your documents — grounded, auditable, no hallucinations.",
                  ctaLabel: "Try Now"
                },
                {
                  image: imgSvcCloud,
                  badge: "• COMING SOON",
                  techTags: ["CrewAI", "AutoGen", "Redis", "K8s"],
                  category: "AGENTIC AUTOMATION",
                  title: "Multi-Agent Orchestration",
                  description: "Drop-in agent framework that handles planning, tool use, and human-in-the-loop review out of the box.",
                  ctaLabel: "Join Waitlist"
                }
              ].map((acc, i) => /* @__PURE__ */ jsx(FadeUp, { delay: i * 80, children: /* @__PURE__ */ jsx(
                Card,
                {
                  mode: "dark",
                  type: "accelerators",
                  image: acc.image,
                  badge: acc.badge,
                  techTags: acc.techTags,
                  category: acc.category,
                  title: acc.title,
                  description: acc.description,
                  ctaLabel: acc.ctaLabel
                }
              ) }, acc.title))
            }
          ),
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsx(
            CTABanner,
            {
              size: "small",
              heading: "Looking for an accelerator built for your stack?",
              body: "Our solutions library is growing weekly. Tell us what you need and we'll flag when it's ready.",
              primaryCta: "Request an Accelerator"
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      "section",
      {
        "aria-label": "Latest insights",
        style: { backgroundColor: "#F5F5F5", paddingTop: isMobile ? 56 : 96, paddingBottom: isMobile ? 56 : 96 },
        children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 8, alignItems: "center", marginBottom: 16 }, children: [
            /* @__PURE__ */ jsx(Tag, { label: "3" }),
            /* @__PURE__ */ jsx(Tag, { label: "COLLABORATE" })
          ] }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 80, children: /* @__PURE__ */ jsxs("h2", { style: { ...sectionH2, marginBottom: 12 }, children: [
            "Latest ",
            /* @__PURE__ */ jsx("span", { style: { color: red }, children: "Insights" })
          ] }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 120, children: /* @__PURE__ */ jsx("p", { style: { ...sectionSubtitle, marginBottom: isMobile ? 40 : 56 }, children: "Articles, research, case studies, and perspectives from TAS members. Featured pieces selected by the Technossus editorial team." }) }),
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsx(
            Card,
            {
              mode: "light",
              type: "featured",
              image: imgFeatPhotoBg,
              badge: "FEATURED BY TECHNOSSUS",
              category: "HEALTHCARE • AI STRATEGY",
              title: "Why Prior Authorisation Is the Best First AI Use Case in Healthcare",
              description: "Most health systems look to clinical decision support as their AI entry point. This paper argues that prior auth — with structured rules, clear metrics, and enormous admin burden — delivers the highest ROI for most organisations.",
              authorInitials: "DR",
              authorName: "Dr. Rohan Mehta",
              authorRole: "Chief Medical Informatics Officer · TAS Member",
              ctaLabel: "READ MORE",
              style: { marginBottom: 64 }
            }
          ) }),
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsx("h2", { style: { ...sectionH2, fontSize: isMobile ? 24 : 32, lineHeight: "40px", marginBottom: isMobile ? 32 : 48 }, children: "From the Community" }) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
                gap: 24,
                marginBottom: isMobile ? 40 : 64
              },
              children: [
                { image: imgSvcDigital, tags: "FINTECH • PLATFORM MODERNIZATION", title: "Architecting a High-Frequency Trading Engine for Global Markets", excerpt: "We overhauled the legacy infrastructure of a Tier-1 financial institution, reducing latency by 40% using event-driven microservices and localised caching…" },
                { image: imgSvcProduct, tags: "HITECH & SAAS • AGENTIC AUTOMATION", title: "How We Cut Document Processing Time by 80% with Multi-Agent Pipelines", excerpt: "A deep dive into the agent architecture that replaced a 14-person manual review team — without any redundancies." },
                { image: imgSvcAI, tags: "HEALTHCARE • RESPONSIBLE AI", title: "Building Explainable AI for Clinical Decision Support at Scale", excerpt: "Clinicians trust tools they understand. Here's how we built explainability into a predictive model from day one, not as an afterthought." }
              ].map((card, i) => /* @__PURE__ */ jsx(FadeUp, { delay: i * 80, children: /* @__PURE__ */ jsx(
                Card,
                {
                  mode: "light",
                  type: "insights",
                  image: card.image,
                  tags: card.tags,
                  title: card.title,
                  excerpt: card.excerpt,
                  ctaLabel: "Read Article"
                }
              ) }, card.title))
            }
          ),
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E5E5",
                padding: isMobile ? 32 : 48,
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "flex-start" : "center",
                justifyContent: "space-between",
                gap: 24,
                position: "relative",
                overflow: "hidden"
              },
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    "aria-hidden": true,
                    style: {
                      position: "absolute",
                      bottom: -60,
                      right: -60,
                      width: 240,
                      height: 240,
                      borderRadius: 9999,
                      backgroundColor: "rgba(237,41,57,0.06)",
                      filter: "blur(40px)",
                      pointerEvents: "none"
                    }
                  }
                ),
                /* @__PURE__ */ jsxs("div", { style: { maxWidth: 680 }, children: [
                  /* @__PURE__ */ jsx(
                    "h3",
                    {
                      style: {
                        fontFamily: sans,
                        fontWeight: 600,
                        fontSize: isMobile ? 20 : 24,
                        lineHeight: "32px",
                        color: "#1E1E1E",
                        margin: "0 0 8px"
                      },
                      children: "Have something worth sharing?"
                    }
                  ),
                  /* @__PURE__ */ jsx("p", { style: { ...sectionSubtitle, margin: 0 }, children: "TAS members can submit articles, research, and case studies. Selected pieces are editorially featured and distributed to the full TAS community." })
                ] }),
                /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 12, flexWrap: "wrap", flexShrink: 0 }, children: [
                  /* @__PURE__ */ jsx(Button, { variant: "primary", label: "Submit an Article" }),
                  /* @__PURE__ */ jsx(Button, { variant: "secondary", label: "Become a TAS Member" })
                ] })
              ]
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      "section",
      {
        "aria-label": "TAS Delivery Framework",
        style: { backgroundColor: "#FFFFFF", paddingTop: isMobile ? 56 : 96, paddingBottom: isMobile ? 56 : 96 },
        children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 8, alignItems: "center", marginBottom: 16 }, children: [
            /* @__PURE__ */ jsx(Tag, { label: "4" }),
            /* @__PURE__ */ jsx(Tag, { label: "TAS DELIVERY FRAMEWORK" })
          ] }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 80, children: /* @__PURE__ */ jsxs("h2", { style: { ...sectionH2, maxWidth: 760, marginBottom: 16 }, children: [
            "From experiment to enterprise",
            " ",
            /* @__PURE__ */ jsx("span", { style: { color: red }, children: "a structured path to production AI." })
          ] }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 120, children: /* @__PURE__ */ jsx("p", { style: { ...sectionSubtitle, marginBottom: isMobile ? 40 : 64 }, children: "Most AI experiments fail not because the idea is wrong, but because there's no clear path to production. The TAS Delivery Framework is our AI SDLC: a structured lifecycle that takes validated ideas and ships them safely, with governance built in at every stage." }) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
                gap: 0,
                border: "1px solid #E5E5E5"
              },
              children: deliverySteps.map((step, i) => {
                const isLastRow = i >= 3;
                const col = i % 3;
                return /* @__PURE__ */ jsx(FadeUp, { delay: i * 60, children: /* @__PURE__ */ jsxs(
                  "article",
                  {
                    style: {
                      padding: isMobile ? "28px 20px" : "32px 28px",
                      borderRight: isMobile || isTablet ? "none" : col < 2 ? "1px solid #E5E5E5" : "none",
                      borderBottom: isLastRow ? "none" : "1px solid #E5E5E5",
                      boxSizing: "border-box"
                    },
                    children: [
                      /* @__PURE__ */ jsx(
                        "span",
                        {
                          style: {
                            fontFamily: serif,
                            fontWeight: 600,
                            fontSize: 32,
                            lineHeight: "40px",
                            color: red,
                            display: "block",
                            marginBottom: 16
                          },
                          children: step.num
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "h3",
                        {
                          style: {
                            fontFamily: sans,
                            fontWeight: 600,
                            fontSize: 20,
                            lineHeight: "28px",
                            color: "#1E1E1E",
                            margin: "0 0 10px"
                          },
                          children: step.title
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "p",
                        {
                          style: {
                            fontFamily: sans,
                            fontWeight: 500,
                            fontSize: 15,
                            lineHeight: "24px",
                            color: "#5C5C5C",
                            margin: 0
                          },
                          children: step.description
                        }
                      )
                    ]
                  }
                ) }, step.num);
              })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      "section",
      {
        "aria-label": "Enterprise AI capabilities",
        style: { backgroundColor: dark1, paddingTop: isMobile ? 56 : 96, paddingBottom: isMobile ? 56 : 96 },
        children: /* @__PURE__ */ jsxs("div", { style: inner, children: [
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsx(Tag, { label: "OUR AI CAPABILITIES", variant: "light", style: { marginBottom: 16 } }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 80, children: /* @__PURE__ */ jsxs("h2", { style: { ...sectionH2Dark, maxWidth: 700, marginBottom: 16 }, children: [
            "The full enterprise AI stack",
            " ",
            /* @__PURE__ */ jsx("span", { style: { color: red }, children: "applied with intent." })
          ] }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 120, children: /* @__PURE__ */ jsx("p", { style: { ...sectionSubtitleDark, marginBottom: isMobile ? 40 : 64 }, children: "Every capability inside TAS is grounded in real enterprise use — applied where it creates measurable value, not just because it's possible." }) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
                border: "1px solid #2A2A2A"
              },
              children: capabilities.map((cap, i) => {
                const col = i % 4;
                const row = Math.floor(i / 4);
                const totalRows = 2;
                const isLastRow = row === totalRows - 1;
                return /* @__PURE__ */ jsx(FadeUp, { delay: i * 50, children: /* @__PURE__ */ jsxs(
                  "article",
                  {
                    style: {
                      padding: isMobile ? "28px 20px" : "40px 24px",
                      borderRight: isMobile ? "none" : isTablet ? col % 2 === 0 ? "1px solid #2A2A2A" : "none" : col < 3 ? "1px solid #2A2A2A" : "none",
                      borderBottom: isLastRow ? "none" : "1px solid #2A2A2A",
                      boxSizing: "border-box",
                      backgroundColor: "#0A0A10"
                    },
                    children: [
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          style: {
                            width: 40,
                            height: 40,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: 20,
                            fontSize: 24
                          },
                          "aria-hidden": "true",
                          children: cap.icon
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "h3",
                        {
                          style: {
                            fontFamily: sans,
                            fontWeight: 600,
                            fontSize: 18,
                            lineHeight: "26px",
                            color: "#FFFFFF",
                            margin: "0 0 8px"
                          },
                          children: cap.title
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "p",
                        {
                          style: {
                            fontFamily: sans,
                            fontWeight: 500,
                            fontSize: 14,
                            lineHeight: "22px",
                            color: "#E1E0E0",
                            margin: 0
                          },
                          children: cap.description
                        }
                      )
                    ]
                  }
                ) }, cap.title);
              })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx("section", { "aria-label": "Get started with AI Studio", children: /* @__PURE__ */ jsx(
      CTABanner,
      {
        size: "large",
        label: "LET'S BUILD SOMETHING",
        heading: "Bring your toughest AI challenge. We'll help you find the path forward.",
        body: "Whether you need an accelerator, a sprint, a PoC, or just a clear second opinion — AI Studio is the place to start.",
        primaryCta: "Schedule a Strategy Session",
        secondaryCta: "Explore Accelerators",
        contactFormTopic: "AI Studio Enquiry"
      }
    ) })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Routes, { children: /* @__PURE__ */ jsxs(Route, { element: /* @__PURE__ */ jsx(Layout, {}), children: [
    /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Home, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/ai-studio", element: /* @__PURE__ */ jsx(AIStudio, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/services/ai-business-transformation", element: /* @__PURE__ */ jsx(AIBusiness, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/services/data-intelligence-analytics", element: /* @__PURE__ */ jsx(DataIntelligence, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/services/digital-experience-design", element: /* @__PURE__ */ jsx(DigitalExperience, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/services/product-engineering", element: /* @__PURE__ */ jsx(ProductEngineering, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/services/quality-engineering", element: /* @__PURE__ */ jsx(QualityEngineering, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/services/cloud-product-modernization", element: /* @__PURE__ */ jsx(CloudModernization, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/industries/healthcare", element: /* @__PURE__ */ jsx(Healthcare, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/industries/financial-services", element: /* @__PURE__ */ jsx(FinancialServices, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/industries/hitech-saas", element: /* @__PURE__ */ jsx(HiTechSaaS, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/about", element: /* @__PURE__ */ jsx(AboutUs, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsx(ContactUs, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/careers", element: /* @__PURE__ */ jsx(Careers, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/case-studies", element: /* @__PURE__ */ jsx(CaseStudies, {}) })
  ] }) });
}
function render(url) {
  const helmetContext = {};
  const html = renderToString(
    /* @__PURE__ */ jsx(HelmetProvider, { context: helmetContext, children: /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(App, {}) }) })
  );
  const { helmet } = helmetContext;
  const headTags = helmet ? [
    helmet.title.toString(),
    helmet.priority.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString()
  ].filter(Boolean).join("\n    ") : "";
  return { html, headTags };
}
export {
  render
};
