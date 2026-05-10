/* Hollow decorative shapes — position:absolute, pointer-events:none, transparent inside */

export const SC = {
  purple:      'rgba(170, 54, 124, 0.55)',
  purpleDim:   'rgba(170, 54, 124, 0.30)',
  blue:        'rgba(74, 47, 189, 0.55)',
  blueDim:     'rgba(74, 47, 189, 0.30)',
  white:       'rgba(255, 255, 255, 0.20)',
  whiteDim:    'rgba(255, 255, 255, 0.10)',
};

const base = {
  position: 'absolute',
  pointerEvents: 'none',
  zIndex: 0,
  display: 'block',
};

/* ─── DIV-BASED SHAPES ─────────────────────────────────────── */

export const ShapeCircle = ({ size = 60, color = SC.purple, anim = '', style = {} }) => (
  <div
    className={`g-shape${anim ? ' ' + anim : ''}`}
    style={{
      ...base,
      width: size,
      height: size,
      borderRadius: '50%',
      border: `2px solid ${color}`,
      background: 'transparent',
      ...style,
    }}
  />
);

export const ShapeRing = ({ size = 90, color = SC.blue, anim = '', style = {} }) => (
  <div
    className={`g-shape${anim ? ' ' + anim : ''}`}
    style={{
      ...base,
      width: size,
      height: size,
      borderRadius: '50%',
      border: `1px solid ${color}`,
      background: 'transparent',
      boxShadow: `0 0 0 6px ${color.replace(/[\d.]+\)$/, '0.06)')}`,
      ...style,
    }}
  />
);

export const ShapeSquare = ({ size = 50, color = SC.purple, anim = '', style = {} }) => (
  <div
    className={`g-shape${anim ? ' ' + anim : ''}`}
    style={{
      ...base,
      width: size,
      height: size,
      border: `2px solid ${color}`,
      background: 'transparent',
      ...style,
    }}
  />
);

export const ShapeDiamond = ({ size = 50, color = SC.blue, anim = '', style = {} }) => (
  <div
    className={`g-shape${anim ? ' ' + anim : ''}`}
    style={{
      ...base,
      width: size,
      height: size,
      border: `2px solid ${color}`,
      background: 'transparent',
      transform: 'rotate(45deg)',
      ...style,
    }}
  />
);

/* ─── SVG-BASED SHAPES ─────────────────────────────────────── */

export const ShapeTriangle = ({ size = 44, color = SC.purple, anim = '', style = {} }) => (
  <svg
    className={`g-shape${anim ? ' ' + anim : ''}`}
    style={{ ...base, ...style }}
    width={size}
    height={size}
    viewBox="0 0 60 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon
      points="30,3 57,51 3,51"
      stroke={color}
      strokeWidth="2.2"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const ShapeStar = ({ size = 38, color = SC.blue, anim = '', style = {} }) => (
  <svg
    className={`g-shape${anim ? ' ' + anim : ''}`}
    style={{ ...base, ...style }}
    width={size}
    height={size}
    viewBox="0 0 60 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon
      points="30,2 37,22 58,22 42,35 48,55 30,43 12,55 18,35 2,22 23,22"
      stroke={color}
      strokeWidth="2.2"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const ShapePlus = ({ size = 36, color = SC.purple, anim = '', style = {} }) => (
  <svg
    className={`g-shape${anim ? ' ' + anim : ''}`}
    style={{ ...base, ...style }}
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="20" y1="4"  x2="20" y2="36" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
    <line x1="4"  y1="20" x2="36" y2="20" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);

export const ShapeHex = ({ size = 52, color = SC.blue, anim = '', style = {} }) => (
  <svg
    className={`g-shape${anim ? ' ' + anim : ''}`}
    style={{ ...base, ...style }}
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon
      points="30,3 55,17 55,43 30,57 5,43 5,17"
      stroke={color}
      strokeWidth="2.2"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const ShapeCross = ({ size = 32, color = SC.white, anim = '', style = {} }) => (
  <svg
    className={`g-shape${anim ? ' ' + anim : ''}`}
    style={{ ...base, ...style }}
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="5"  y1="5"  x2="35" y2="35" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    <line x1="35" y1="5"  x2="5"  y2="35" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

export const ShapeDots = ({ color = SC.purple, anim = '', style = {} }) => (
  <svg
    className={`g-shape${anim ? ' ' + anim : ''}`}
    style={{ ...base, ...style }}
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {[0, 1, 2].map(row =>
      [0, 1, 2].map(col => (
        <circle
          key={`${row}-${col}`}
          cx={10 + col * 15}
          cy={10 + row * 15}
          r="2"
          fill={color}
        />
      ))
    )}
  </svg>
);
