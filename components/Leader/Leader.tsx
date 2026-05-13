import React, { useState } from 'react';

// Asset URLs from Figma
const imgPhotoDefault = '/assets/4a0fc133e1c62243f5802cc6bf49e291e4ce809e.png';

// Design tokens
const sans = '"General Sans", system-ui, -apple-system, sans-serif';
const red  = '#ED2939';

export type LeaderState = 'Active' | 'Default';

export interface LeaderProps {
  state?: LeaderState;
  role?: string;
  name?: string;
  bio?: string;
  photo?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Leader({
  state = 'Default',
  role = 'EXECUTIVE DIRECTOR, TECHNOSSUS INDIA',
  name = 'Zia Rahman',
  bio = 'Drives technology and delivery at scale, playing a key role in building, shaping, and scaling systems, teams, and execution capabilities from the ground up.',
  photo,
  className,
  style,
}: LeaderProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = state === 'Active' || isHovered;

  return (
    <div
      className={className}
      data-node-id={isActive ? '2203:10811' : '2203:10812'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'relative',
        width: '100%',
        cursor: 'pointer',
        ...style,
      }}
    >
      {/* Photo: grayscale by default, transitions to colour on hover */}
      <div style={{ aspectRatio: '3/4', position: 'relative', flexShrink: 0, width: '100%', maxHeight: 336, overflow: 'hidden' }}>
        <img
          alt={name}
          src={photo ?? imgPhotoDefault}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none',
            filter: isActive ? 'grayscale(0%)' : 'grayscale(100%)',
            transition: 'filter 250ms ease',
          }}
        />
      </div>

      {/* Body */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 24, width: '100%', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start', width: '100%' }}>
          <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 13, lineHeight: '20px', color: '#949494', margin: 0, width: '100%' }}>
            {role}
          </p>
          <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 22, lineHeight: '30px', color: isActive ? red : '#383838', margin: 0, width: '100%', transition: 'color 0.2s ease' }}>
            {name}
          </p>
          <p style={{ fontFamily: sans, fontWeight: 500, fontSize: 15, lineHeight: '24px', color: '#5C5C5C', margin: 0, width: '100%' }}>
            {bio}
          </p>
        </div>
      </div>

    </div>
  );
}

export default Leader;
