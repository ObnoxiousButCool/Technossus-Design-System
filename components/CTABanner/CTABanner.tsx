"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useBreakpoint } from "../../ts/breakpoints";
import { ContactFormPopUp } from "../ContactFormPopUp";
import { getContactFormTopicForRoute } from "./contactFormTopics";

// Asset URLs from Figma
const imgVector3 = "/assets/1a6054aabb553cb83405edfefb392e579bcc4d72.svg";
const imgArrowForward = "/assets/5ab4759937e9a9e8b7e9cb731f7784df694959c0.svg";
const imgImage108 = "/assets/d54db829342bc10c2665f6d43218ad53a4d590e5.png";

// Design tokens
const sans = '"General Sans", system-ui, -apple-system, sans-serif';
const serif = '"Roboto Serif", Georgia, serif';
const red = "#ED2939";

export type CTABannerSize = "large" | "small";

export interface CTABannerProps {
  size?: CTABannerSize;
  label?: string;
  heading: React.ReactNode;
  body?: string;
  primaryCta?: string;
  secondaryCta?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  secondaryHref?: string;
  /**
   * When set on size="large", clicking the primary CTA opens the
   * ContactFormPopUp modal pre-filled with this topic string.
   * If omitted the banner falls back to onPrimary.
   */
  contactFormTopic?: string;
  /** @deprecated use primaryCta + onPrimary */
  ctaLabel?: string;
  /** @deprecated */
  onCta?: () => void;
  centerOnMobile?: boolean;
  fullWidthMobileAction?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function CTABanner({
  size = "large",
  label,
  heading,
  body,
  primaryCta,
  secondaryCta,
  onPrimary,
  onSecondary,
  secondaryHref,
  contactFormTopic,
  ctaLabel,
  onCta,
  centerOnMobile = false,
  fullWidthMobileAction = false,
  className = "",
  style,
}: CTABannerProps) {
  const { isMobile, isTablet } = useBreakpoint();
  const pathname = usePathname();
  const [largePrimaryHovered, setLargePrimaryHovered] = useState(false);
  const [smallPrimaryHovered, setSmallPrimaryHovered] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const resolvedPrimary =
    primaryCta ?? ctaLabel ?? "Schedule a Strategy Session";
  const resolvedCallback = onPrimary ?? onCta;
  const shouldCenterMobile = isMobile && centerOnMobile;
  const shouldStretchSmallMobile = isMobile && fullWidthMobileAction;

  // Lock body scroll when modal is open
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

  // Large banner: always open the contact form popup.
  // Small banner: call onPrimary as usual.
  const handlePrimaryClick = () => {
    if (size === "large") {
      setFormOpen(true);
    } else {
      resolvedCallback?.();
    }
  };

  // Topic shown inside the popup — explicit prop, else falls back to the eyebrow label
  const resolvedTopic =
    contactFormTopic ??
    getContactFormTopicForRoute(pathname) ??
    label ??
    "LET'S WORK TOGETHER";

  /* ── Large variant ────────────────────────────────────────────────────────── */
  if (size === "large") {
    return (
      <div
        className={className}
        data-node-id="8:90"
        style={{
          backgroundColor: "#050510",
          display: "flex",
          justifyContent: "center",
          overflow: "visible",
          flexDirection: "column",
          alignItems: shouldCenterMobile ? "center" : "flex-start",
          padding: isMobile
            ? shouldCenterMobile ? "36px 16px" : "40px 24px"
            : isTablet
              ? "48px 40px"
              : "56px 68px",
          width: isMobile
            ? "calc(100% - 40px)"
            : isTablet
              ? "calc(100% - 80px)"
              : "calc(100% - 160px)",
          maxWidth: 1280,
          minHeight: isMobile ? "auto" : 375,
          margin: "0 auto",
          position: "relative",
          boxSizing: "border-box",
          ...style,
        }}
      >
        {/* Red frame */}
        {!isMobile && (
          <>
            <div
              style={{
                position: "absolute",
                top: -16,
                left: 0,
                right: 0,
                height: 16,
                backgroundColor: red,
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            <div
              style={{
                position: "absolute",
                top: -16,
                left: 0,
                width: 16,
                height: 112,
                backgroundColor: red,
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            <div
              style={{
                position: "absolute",
                top: -16,
                right: 0,
                width: 16,
                height: 136,
                backgroundColor: red,
                pointerEvents: "none",
                zIndex: 0,
              }}
            />
          </>
        )}

        {/* Hero image — hidden on mobile */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              height: "100%",
              right: 0,
              top: 0,
              width: isTablet ? "42%" : "47%",
              pointerEvents: "none",
              zIndex: 1,
              overflow: "hidden",
            }}
          >
            <img
              alt=""
              src={imgImage108}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "right bottom",
                display: "block",
                fontFamily: sans,
                fontWeight: 500,
                fontSize: 15.82,
                lineHeight: isMobile ? '22px' : '24px',
                color: '#F5F5F5',
                margin: 0,
              }}
            />
          </div>
        )}

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: shouldCenterMobile ? 20 : 24,
            alignItems: shouldCenterMobile ? "center" : "flex-start",
            position: "relative",
            zIndex: 2,
            width: isMobile ? "100%" : isTablet ? "58%" : "52%",
            maxWidth: 540,
            textAlign: shouldCenterMobile ? "center" : "left",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: sans,
              fontWeight: 600,
              fontSize: 14,
              lineHeight: "20px",
              color: "#FFFFFF",
              textTransform: "uppercase",
            }}
          >
            {label ?? "LET'S WORK ON IT TOGETHER"}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              alignItems: shouldCenterMobile ? "center" : "flex-start",
              width: "100%",
            }}
          >
            <h2
              style={{
                fontFamily: serif,
                fontWeight: 600,
                fontSize: isMobile ? 28 : isTablet ? 30 : 32,
                lineHeight: isMobile ? "34px" : "36px",
                color: "#FFFFFF",
                margin: 0,
                width: "100%",
              }}
            >
              {heading}
            </h2>

            {body && (
              <p
                style={{
                  fontFamily: sans,
                  fontWeight: 500,
                  fontSize: isMobile ? 15 : 16,
                  lineHeight: isMobile ? "22px" : "24px",
                  color: "#F5F5F5",
                  margin: 0,
                  width: "100%",
                }}
              >
                {body}
              </p>
            )}
          </div>

          {/* CTA buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              alignItems: shouldCenterMobile ? "stretch" : "flex-start",
              justifyContent: shouldCenterMobile ? "center" : "flex-start",
              width: shouldCenterMobile ? "100%" : undefined,
            }}
          >
            <button
              onClick={handlePrimaryClick}
              onMouseEnter={() => setLargePrimaryHovered(true)}
              onMouseLeave={() => setLargePrimaryHovered(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 48,
                width: shouldCenterMobile ? "100%" : undefined,
                minWidth: shouldCenterMobile ? 0 : 228,
                padding: "12px 22px",
                backgroundColor: largePrimaryHovered ? "#D42030" : red,
                color: "#FFFFFF",
                fontFamily: sans,
                fontWeight: 600,
                fontSize: 14,
                lineHeight: "20px",
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transform: largePrimaryHovered ? "scale(1.01)" : "scale(1)",
                // transition: 'background-color 0.2s ease, transform 0.15s ease',
              }}
            >
              {resolvedPrimary}
            </button>

            {secondaryCta && (
              secondaryHref ? (
                <a
                  href={secondaryHref}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 48,
                    width: shouldCenterMobile ? "100%" : undefined,
                    minWidth: shouldCenterMobile ? 0 : 116,
                    padding: "12px 22px",
                    backgroundColor: "transparent",
                    color: red,
                    fontFamily: sans,
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "20px",
                    border: `1px solid ${red}`,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                  }}
                >
                  {secondaryCta}
                </a>
              ) : (
                <button
                  onClick={onSecondary}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 48,
                    width: shouldCenterMobile ? "100%" : undefined,
                    minWidth: shouldCenterMobile ? 0 : 116,
                    padding: "12px 22px",
                    backgroundColor: "transparent",
                    color: red,
                    fontFamily: sans,
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "20px",
                    border: `1px solid ${red}`,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  {secondaryCta}
                </button>
              )
            )}
          </div>
        </div>

        {/* ── Contact Form Modal ── */}
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
              topic={resolvedTopic}
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
    );
  }

  /* ── Small variant ────────────────────────────────────────────────────────── */
  return (
    <div
      className={className}
      data-node-id="31:1262"
      style={{
        backgroundColor: "#171717",
        border: "1px solid rgba(255,255,255,0.1)",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
        overflow: "hidden",
        gap: isMobile ? 20 : 24,
        alignItems: shouldStretchSmallMobile ? "stretch" : isMobile ? "flex-start" : "center",
        padding: isMobile ? shouldStretchSmallMobile ? "28px 16px" : "32px 20px" : isTablet ? "40px 32px" : 49,
        width: "100%",
        position: "relative",
        boxSizing: "border-box",
        ...style,
      }}
    >
      {/* Red glow */}
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(227,27,35,0.1)",
          filter: "blur(50px)",
          bottom: -80,
          right: -80,
          borderRadius: 9999,
          width: 320,
          height: 320,
          pointerEvents: "none",
        }}
      />

      {/* Text content */}
      <div style={{ flex: shouldStretchSmallMobile ? "none" : "1 0 0", position: "relative", minWidth: 0, width: shouldStretchSmallMobile ? "100%" : undefined }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 8,
          }}
        >
          <h2
            style={{
              fontFamily: serif,
              fontWeight: 600,
              fontSize: isMobile ? 22 : isTablet ? 26 : 32,
              lineHeight: isMobile ? "30px" : "36px",
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            {heading}
          </h2>
          {body && (
            <p
              style={{
                fontFamily: sans,
                fontWeight: 500,
                fontSize: isMobile ? 14 : 18,
                lineHeight: "24px",
                color: "#F5F5F5",
                margin: 0,
              }}
            >
              {body}
            </p>
          )}
        </div>
      </div>

      {/* Primary button wrapper */}
      <div
        onMouseEnter={() => setSmallPrimaryHovered(true)}
        onMouseLeave={() => setSmallPrimaryHovered(false)}
        style={{
          backgroundColor: red,
          height: 56,
          position: "relative",
          flexShrink: 0,
          width: isMobile ? "100%" : 215,
          transform: smallPrimaryHovered ? "scale(1.01)" : "scale(1)",
          transition: "background-color 0.2s ease, transform 0.15s ease",
        }}
      >
        <button
          onClick={resolvedCallback}
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
            justifyContent: "center",
            padding: "16px 24px",
            width: "100%",
            height: "100%",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              fontFamily: sans,
              fontWeight: 600,
              fontSize: 16,
              lineHeight: "28px",
              color: "#FFFFFF",
              whiteSpace: "nowrap",
            }}
          >
            {resolvedPrimary}
          </span>
          <div
            style={{
              width: 24,
              height: 24,
              position: "relative",
              flexShrink: 0,
            }}
          >
            <img
              alt=""
              src={imgArrowForward}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                display: "block",
              }}
            />
          </div>
        </button>
      </div>
    </div>
  );
}

export default CTABanner;
