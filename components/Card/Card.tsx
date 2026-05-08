import React from 'react';

// Asset URLs from Figma
const imgHeroPhoto      = 'http://localhost:3845/assets/fbbad1d37f7a4e076de4d16631dc6863c6c4444a.png';
const imgPhoto2Dark     = 'http://localhost:3845/assets/11485e6d5400122979be42e072e5eb53cb43660e.png';
const imgPhoto2Light    = 'http://localhost:3845/assets/841d1956c23918ec138a2eef41ff5a34b6b981e1.png';
const imgContainerSvg   = 'http://localhost:3845/assets/f6fd2f419935273b9e66a4b9c11731de18271c48.svg';
const imgIconSvg        = 'http://localhost:3845/assets/da42ce3d86cd28e1121776ec014cdcdbe6f8208e.svg';
const imgContainerSvg1  = 'http://localhost:3845/assets/487c967a36fb2b5113f573275756c62f0ec9a2fb.svg';
const imgArrowForward   = 'http://localhost:3845/assets/5ab4759937e9a9e8b7e9cb731f7784df694959c0.svg';

// Design tokens
const sans  = '"General Sans", system-ui, -apple-system, sans-serif';
const serif = '"Roboto Serif", Georgia, serif';

// ─── Prop types ───────────────────────────────────────────────────────────────

interface StatItem {
  value: string;
  label: string;
}

interface CardDarkSmallProps {
  mode: 'dark';
  type: 'small';
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  style?: React.CSSProperties;
}

interface CardDarkMediumProps {
  mode: 'dark';
  type: 'medium';
  icon?: string;
  category?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

interface CardDarkLargeProps {
  mode: 'dark';
  type: 'large';
  category?: string;
  heading?: string;
  body?: string;
  stats?: StatItem[];
  image?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  primaryLabel?: string;
  secondaryLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

interface CardDarkInsightsProps {
  mode: 'dark';
  type: 'insights';
  image?: string;
  tags?: string;
  title?: string;
  excerpt?: string;
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

interface CardLightInsightsProps {
  mode: 'light';
  type: 'insights';
  image?: string;
  tags?: string;
  title?: string;
  excerpt?: string;
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

interface CardLightDeliverProps {
  mode: 'light';
  type: 'deliver';
  image?: string;
  title?: string;
  description?: string;
  onArrow?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

interface CardLightLargeProps {
  mode: 'light';
  type: 'large';
  heading?: string;
  body?: string[];
  image?: string;
  className?: string;
  style?: React.CSSProperties;
}

export type CardProps =
  | CardDarkSmallProps
  | CardDarkMediumProps
  | CardDarkLargeProps
  | CardDarkInsightsProps
  | CardLightInsightsProps
  | CardLightDeliverProps
  | CardLightLargeProps;

// ─── Component ────────────────────────────────────────────────────────────────

export function Card(props: CardProps) {
  // ── Dark / Small ─────────────────────────────────────────────────────────────
  if (props.mode === 'dark' && props.type === 'small') {
    return (
      <div
        className={props.className}
        data-node-id="8:605"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          alignItems: 'flex-start',
          backgroundColor: '#1E1E1E',
          border: '1px solid #5C5C5C',
          padding: 33,
          width: 1616,
          ...props.style,
        }}
      >
        {/* Icon */}
        <div style={{ height: 27.633, position: 'relative', flexShrink: 0, width: '100%' }}>
          {props.icon ? (
            <>{props.icon}</>
          ) : (
            <div style={{ position: 'absolute', top: 0, right: '98.22%', bottom: 0, left: 0 }}>
              <img alt="" src={imgIconSvg} style={{ display: 'block', width: '100%', height: '100%' }} />
            </div>
          )}
        </div>

        <h3
          style={{
            fontFamily: sans,
            fontWeight: 600,
            fontSize: 24,
            lineHeight: '32px',
            color: '#FFFFFF',
            margin: 0,
            width: '100%',
            flexShrink: 0,
          }}
        >
          {props.title ?? 'Outcome Driven'}
        </h3>

        <p
          style={{
            fontFamily: sans,
            fontWeight: 500,
            fontSize: 16,
            lineHeight: '24px',
            color: '#E1E0E0',
            margin: 0,
            width: '100%',
            flexShrink: 0,
          }}
        >
          {props.description ?? 'Our systems are meticulously designed to scale operations and unlock new growth opportunities, ensuring measurable impact on your bottom line.'}
        </p>
      </div>
    );
  }

  // ── Dark / Medium ─────────────────────────────────────────────────────────────
  if (props.mode === 'dark' && props.type === 'medium') {
    return (
      <div
        className={props.className}
        data-node-id="8:603"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
          alignItems: 'flex-start',
          backgroundColor: '#1E1E1E',
          border: '1px solid #5C5C5C',
          backdropFilter: 'blur(10px)',
          padding: 33,
          width: 394.667,
          ...props.style,
        }}
      >
        {/* Icon box */}
        <div
          style={{
            backgroundColor: '#262626',
            width: 64,
            height: 64,
            position: 'relative',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              position: 'relative',
            }}
          >
            {props.icon ? (
              <img alt="" src={props.icon} style={{ width: 24, height: 30, objectFit: 'contain' }} />
            ) : (
              <div style={{ height: 30, position: 'relative', width: 24 }}>
                <img
                  alt=""
                  src={imgContainerSvg1}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Text content */}
        <div style={{ position: 'relative', flexShrink: 0, width: '100%' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              alignItems: 'flex-start',
            }}
          >
            <p
              style={{
                fontFamily: sans,
                fontWeight: 600,
                fontSize: 14,
                lineHeight: '20px',
                color: '#ED2939',
                margin: 0,
                width: '100%',
              }}
            >
              {props.category ?? 'FASTER PROCESSING'}
            </p>
            <h3
              style={{
                fontFamily: sans,
                fontWeight: 600,
                fontSize: 24,
                lineHeight: '32px',
                color: '#FFFFFF',
                margin: 0,
                width: '100%',
              }}
            >
              {props.title ?? 'Automate document workflows'}
            </h3>
            <p
              style={{
                fontFamily: sans,
                fontWeight: 500,
                fontSize: 16,
                lineHeight: '24px',
                color: '#E1E0E0',
                margin: 0,
                width: '100%',
              }}
            >
              {props.description ?? 'Use advanced machine learning to automatically extract and categorize data from complex documents.'}
            </p>
          </div>
        </div>

        {/* CTA link */}
        <div style={{ position: 'relative', flexShrink: 0, width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              onClick={props.onCta}
              style={{
                fontFamily: sans,
                fontWeight: 600,
                fontSize: 16,
                lineHeight: '28px',
                color: '#ED2939',
                textDecoration: 'underline',
                textDecorationStyle: 'solid',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                whiteSpace: 'nowrap',
              }}
            >
              {props.ctaLabel ?? 'Try in AI Studio'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Dark / Large ──────────────────────────────────────────────────────────────
  if (props.mode === 'dark' && props.type === 'large') {
    const stats = props.stats ?? [
      { value: '$50M+', label: 'TOTAL COST SAVING' },
      { value: '20,000+', label: 'ORDERS PLACED SUCCESSFULLY' },
    ];
    return (
      <div
        className={props.className}
        data-node-id="8:602"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          gap: 61,
          alignItems: 'center',
          backgroundColor: '#1E1E1E',
          overflow: 'hidden',
          padding: '52px 48px',
          width: 1162,
          ...props.style,
        }}
      >
        {/* Left: content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 0 0',
            gap: 58,
            alignItems: 'flex-start',
            minWidth: 0,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start', width: '100%', flexShrink: 0 }}>
            {/* Category pill */}
            <div
              data-node-id="8:494"
              style={{
                backgroundColor: '#ED2939',
                display: 'flex',
                alignItems: 'center',
                padding: '4px 12px',
                borderRadius: 37,
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: sans,
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: '20px',
                  color: '#FFFFFF',
                  whiteSpace: 'nowrap',
                }}
              >
                {props.category ?? 'HEALTHCARE'}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start', width: '100%', flexShrink: 0 }}>
              <h2
                style={{
                  fontFamily: serif,
                  fontWeight: 600,
                  fontSize: 32,
                  lineHeight: '36px',
                  color: '#FFFFFF',
                  margin: 0,
                  width: '100%',
                }}
              >
                {props.heading ?? 'Automating Home Care Operations for Unprecedented Efficiency.'}
              </h2>
              <p
                style={{
                  fontFamily: sans,
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: '24px',
                  color: '#E1E0E0',
                  margin: 0,
                  width: '100%',
                }}
              >
                {props.body ?? 'Transformed high-volume operational workflows with RPA and Smart Rules, eliminating manual bottlenecks.'}
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexShrink: 0, width: '100%' }}>
            {stats.map((stat, i) => (
              <React.Fragment key={i}>
                {i > 0 && (
                  <div style={{ width: 1, height: 78.721, backgroundColor: '#7C7C7C', flexShrink: 0 }} />
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start', flexShrink: 0, whiteSpace: 'nowrap' }}>
                  <span
                    style={{
                      fontFamily: serif,
                      fontWeight: 600,
                      fontSize: 32,
                      lineHeight: '36px',
                      color: '#ED2939',
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontFamily: sans,
                      fontWeight: 500,
                      fontSize: 16,
                      lineHeight: '24px',
                      color: '#E1E0E0',
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Buttons row */}
          <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexShrink: 0 }}>
            {/* Primary */}
            <button
              onClick={props.onPrimary}
              style={{
                display: 'flex',
                gap: 8,
                alignItems: 'center',
                justifyContent: 'center',
                height: 56,
                padding: '16px 24px',
                backgroundColor: '#ED2939',
                border: 'none',
                cursor: 'pointer',
                flexShrink: 0,
                width: 215,
              }}
            >
              <span
                style={{
                  fontFamily: sans,
                  fontWeight: 600,
                  fontSize: 16,
                  lineHeight: '28px',
                  color: '#FFFFFF',
                  whiteSpace: 'nowrap',
                  textAlign: 'center',
                }}
              >
                {props.primaryLabel ?? 'View All Case Study'}
              </span>
              <div style={{ width: 24, height: 24, position: 'relative', flexShrink: 0 }}>
                <img alt="" src={imgArrowForward} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
              </div>
            </button>

            {/* Secondary */}
            <button
              onClick={props.onSecondary}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 56,
                padding: '16px 24px',
                backgroundColor: 'transparent',
                border: '1px solid #ED2939',
                cursor: 'pointer',
                flexShrink: 0,
                width: 180,
              }}
            >
              <span
                style={{
                  fontFamily: sans,
                  fontWeight: 600,
                  fontSize: 16,
                  lineHeight: '28px',
                  color: '#ED2939',
                  whiteSpace: 'nowrap',
                  textAlign: 'center',
                }}
              >
                {props.secondaryLabel ?? 'View All'}
              </span>
            </button>
          </div>
        </div>

        {/* Right: image */}
        <div
          data-node-id="8:515"
          style={{ height: 478.881, position: 'relative', flexShrink: 0, width: 479.433 }}
        >
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <img
              alt=""
              src={props.image ?? imgPhoto2Dark}
              style={{ position: 'absolute', height: '100%', left: '-36.19%', top: 0, width: '177.52%', maxWidth: 'none' }}
            />
          </div>
        </div>
      </div>
    );
  }

  // ── Dark / Insights ───────────────────────────────────────────────────────────
  if (props.mode === 'dark' && props.type === 'insights') {
    return (
      <div
        className={props.className}
        data-node-id="31:1469"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          backgroundColor: '#1E1E1E',
          width: 400,
          ...props.style,
        }}
      >
        {/* Image */}
        <div style={{ height: 260, position: 'relative', flexShrink: 0, width: '100%' }}>
          <img
            alt=""
            src={props.image ?? imgHeroPhoto}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Body */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 24, flexShrink: 0, width: '100%', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', flexShrink: 0 }}>
            {/* Tags + title block */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start', width: '100%', flexShrink: 0 }}>
              <p
                style={{
                  fontFamily: sans,
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: '20px',
                  color: '#ADADAD',
                  margin: 0,
                  width: '100%',
                }}
              >
                {props.tags ?? 'FINTECH • PLATFORM MODERNIZATION'}
              </p>
              <p
                style={{
                  fontFamily: sans,
                  fontWeight: 600,
                  fontSize: 20,
                  lineHeight: '28px',
                  color: '#FFFFFF',
                  margin: 0,
                  width: '100%',
                }}
              >
                {props.title ?? 'Architecting a High-Frequency Trading Engine for Global Markets'}
              </p>
            </div>

            <p
              style={{
                fontFamily: sans,
                fontWeight: 500,
                fontSize: 16,
                lineHeight: '26px',
                color: '#E1E0E0',
                margin: 0,
                width: '100%',
              }}
            >
              {props.excerpt ?? 'We overhauled the legacy infrastructure of a Tier-1 financial institution, reducing latency by 40%…'}
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={props.onCta}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 56,
              width: 180,
              padding: '16px 24px',
              backgroundColor: 'transparent',
              border: '1px solid #ED2939',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: sans,
                fontWeight: 600,
                fontSize: 16,
                lineHeight: '28px',
                color: '#ED2939',
                whiteSpace: 'nowrap',
              }}
            >
              {props.ctaLabel ?? 'See How We Work'}
            </span>
          </button>
        </div>
      </div>
    );
  }

  // ── Light / Insights ──────────────────────────────────────────────────────────
  if (props.mode === 'light' && props.type === 'insights') {
    return (
      <div
        className={props.className}
        data-node-id="8:606"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          backgroundColor: '#FFFFFF',
          width: 400,
          ...props.style,
        }}
      >
        {/* Image */}
        <div style={{ height: 260, position: 'relative', flexShrink: 0, width: '100%' }}>
          <img
            alt=""
            src={props.image ?? imgHeroPhoto}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Body */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 24, flexShrink: 0, width: '100%', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', flexShrink: 0 }}>
            <p
              style={{
                fontFamily: sans,
                fontWeight: 600,
                fontSize: 14,
                lineHeight: '20px',
                color: '#949494',
                margin: 0,
                width: '100%',
              }}
            >
              {props.tags ?? 'FINTECH • PLATFORM MODERNIZATION'}
            </p>
            <p
              style={{
                fontFamily: sans,
                fontWeight: 600,
                fontSize: 20,
                lineHeight: '28px',
                color: '#383838',
                margin: 0,
                width: '100%',
              }}
            >
              {props.title ?? 'Architecting a High-Frequency Trading Engine for Global Markets'}
            </p>
            <p
              style={{
                fontFamily: sans,
                fontWeight: 500,
                fontSize: 16,
                lineHeight: '26px',
                color: '#5C5C5C',
                margin: 0,
                width: '100%',
              }}
            >
              {props.excerpt ?? 'We overhauled the legacy infrastructure of a Tier-1 financial institution, reducing latency by 40%…'}
            </p>
          </div>

          <button
            onClick={props.onCta}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 56,
              width: 180,
              padding: '16px 24px',
              backgroundColor: 'transparent',
              border: '1px solid #ED2939',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: sans,
                fontWeight: 600,
                fontSize: 16,
                lineHeight: '28px',
                color: '#ED2939',
                whiteSpace: 'nowrap',
              }}
            >
              {props.ctaLabel ?? 'See How We Work'}
            </span>
          </button>
        </div>
      </div>
    );
  }

  // ── Light / Deliver ───────────────────────────────────────────────────────────
  if (props.mode === 'light' && props.type === 'deliver') {
    return (
      <div
        className={props.className}
        data-node-id="8:604"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          backgroundColor: '#FFFFFF',
          width: 400,
          ...props.style,
        }}
      >
        {/* Image */}
        <div style={{ height: 260, position: 'relative', flexShrink: 0, width: '100%' }}>
          <img
            alt=""
            src={props.image ?? imgHeroPhoto}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Body */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            padding: 24,
            height: 256,
            flexShrink: 0,
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: '1 0 0', minHeight: 0 }}>
            <h4
              style={{
                fontFamily: sans,
                fontWeight: 600,
                fontSize: 20,
                lineHeight: '28px',
                color: '#383838',
                margin: 0,
                width: '100%',
              }}
            >
              {props.title ?? 'AI Led Transformation'}
            </h4>
            <p
              style={{
                fontFamily: sans,
                fontWeight: 500,
                fontSize: 16,
                lineHeight: '24px',
                color: '#5C5C5C',
                margin: 0,
                width: '100%',
              }}
            >
              {props.description ?? 'Revolutionizing enterprise workflows through custom LLM integration.'}
            </p>
          </div>

          {/* Arrow button */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', flexShrink: 0, width: '100%' }}>
            <button
              onClick={props.onArrow}
              aria-label="View more"
              style={{
                border: '1px solid #ED2939',
                borderRadius: 9999,
                backgroundColor: 'transparent',
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                padding: 1,
                flexShrink: 0,
              }}
            >
              <div style={{ width: 16, height: 16, position: 'relative' }}>
                <img
                  alt=""
                  src={imgContainerSvg}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Light / Large ─────────────────────────────────────────────────────────────
  if (props.mode === 'light' && props.type === 'large') {
    const bodyParagraphs = props.body ?? [
      'No problem is too complex, and no idea is too early, we listen first, then collaborate to shape the right path forward.',
      'We see partnership as the foundation of progress. That means being transparent, responsive, and focused on outcomes that create lasting value.',
    ];

    return (
      <div
        className={props.className}
        data-node-id="2203:11753"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          gap: 61,
          alignItems: 'center',
          backgroundColor: '#F5F5F5',
          overflow: 'hidden',
          padding: '52px 48px',
          width: 1162,
          ...props.style,
        }}
      >
        {/* Left: content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            alignItems: 'flex-start',
            flexShrink: 0,
            width: 525.567,
          }}
        >
          <h2
            style={{
              fontFamily: sans,
              fontWeight: 600,
              fontSize: 24,
              lineHeight: '32px',
              color: '#1E1E1E',
              margin: 0,
              width: '100%',
            }}
          >
            {props.heading ?? 'We approach every inquiry with curiosity, clarity, and a commitment to understanding the real challenge behind it.'}
          </h2>

          {bodyParagraphs.map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: sans,
                fontWeight: 500,
                fontSize: 16,
                lineHeight: '24px',
                color: '#5C5C5C',
                margin: 0,
                marginBottom: i < bodyParagraphs.length - 1 ? 10 : 0,
                width: '100%',
              }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Right: image */}
        <div
          data-node-id="2203:11750"
          style={{ height: 478.881, position: 'relative', flexShrink: 0, width: 479.433 }}
        >
          <img
            alt=""
            src={props.image ?? imgPhoto2Light}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    );
  }

  return null;
}

export default Card;
