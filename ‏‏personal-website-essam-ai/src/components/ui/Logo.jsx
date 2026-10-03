/**
 * Shared brand logo mark — a gradient  < / >  developer icon.
 * Use a unique `id` prop each time you render it on the same page
 * so the SVG linearGradient IDs don't collide.
 */
export const Logo = ({ id = 'logo-default', size = 44 }) => {
  const gradId = `lg-${id}`;
  const h = Math.round(size * 0.82);

  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 44 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#AA367C" />
          <stop offset="100%" stopColor="#4A2FBD" />
        </linearGradient>
      </defs>

      {/* Left bracket  < */}
      <path
        d="M15 5 L3 18 L15 31"
        stroke={`url(#${gradId})`}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right bracket  > */}
      <path
        d="M29 5 L41 18 L29 31"
        stroke={`url(#${gradId})`}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Forward slash  / */}
      <line
        x1="26"
        y1="4"
        x2="18"
        y2="32"
        stroke={`url(#${gradId})`}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
};
