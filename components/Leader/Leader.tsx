import React from 'react';

// Asset URLs from Figma
const imgPhotoDefault = 'http://localhost:3845/assets/4a0fc133e1c62243f5802cc6bf49e291e4ce809e.png';
const imgPhotoActive  = 'http://localhost:3845/assets/f47b6d03ecad9a885a234fa94d706d5b28d344ee.png';
const imgSubtractTL   = 'http://localhost:3845/assets/a673075179a0266ec6df160cb442200db0abbd40.svg';
const imgSubtractBR   = 'http://localhost:3845/assets/327c85a8854e96b954593950f4410e8d5c52443a.svg';

// Design tokens
const sans = '"General Sans", system-ui, -apple-system, sans-serif';

export type LeaderState = 'default' | 'active';

export interface LeaderProps {
  state?: LeaderState;
  /** Role / department label */
  role?: string;
  name?: string;
  bio?: string;
  /** Optional custom photo URL (falls back to Figma placeholder) */
  photo?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Leader({
  state = 'default',
  role = 'EXECUTIVE DIRECTOR, TECHNOSSUS INDIA',
  name = 'Zia Rahman',
  bio = 'Drives technology and delivery at scale, playing a key role in building, shaping, and scaling systems, teams, and execution capabilities from the ground up.',
  photo,
  className,
  style,
}: LeaderProps) {
  const isActive = state === 'active';

  return (
    <div
      className={className}
      data-node-id={isActive ? '2203:10811' : '2203:10812'}
      style={{
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'relative',
        width: 299,
        ...style,
      }}
    >
      {/* Photo */}
      <div
        data-node-id={isActive ? '2203:10803' : '2197:10750'}
        style={{
          height: 336,
          position: 'relative',
          flexShrink: 0,
          width: '100%',
        }}
      >
        <img
          alt={name}
          src={photo ?? (isActive ? imgPhotoActive : imgPhotoDefault)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Body */}
      <div
        data-node-id={isActive ? '2203:10804' : '2197:10751'}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 24,
          flexShrink: 0,
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            alignItems: 'flex-start',
            width: '100%',
            flexShrink: 0,
          }}
        >
          {/* Role label */}
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
            {role}
          </p>

          {/* Name */}
          <p
            style={{
              fontFamily: sans,
              fontWeight: 600,
              fontSize: 24,
              lineHeight: '32px',
              color: isActive ? '#ED2939' : '#383838',
              margin: 0,
              width: '100%',
            }}
          >
            {name}
          </p>

          {/* Bio */}
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
            {bio}
          </p>
        </div>
      </div>

      {/* Active-state decorative corner SVGs */}
      {isActive && (
        <>
          {/* Top-left corner */}
          <div
            style={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              left: 0,
              top: -0.12,
              width: 62,
              height: 62,
            }}
          >
            <div style={{ transform: 'rotate(180deg) scaleY(-1)', flexShrink: 0 }}>
              <div data-node-id="2203:10809" style={{ position: 'relative', width: 62, height: 62 }}>
                <img
                  alt=""
                  src={imgSubtractTL}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
                />
              </div>
            </div>
          </div>

          {/* Bottom-right corner */}
          <div
            style={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              right: 0,
              bottom: 274,
              width: 62,
              height: 62,
            }}
          >
            <div style={{ transform: 'scaleY(-1)', flexShrink: 0 }}>
              <div data-node-id="2203:10810" style={{ position: 'relative', width: 62, height: 62 }}>
                <img
                  alt=""
                  src={imgSubtractBR}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Leader;
