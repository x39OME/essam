/**
 * Slowly rotating orbit rings + soft glow placed behind the profile photo.
 * Same artwork language as the hero illustration.
 */
export const ProfileOrbits = () => (
  <svg
    className='profile-orbits'
    viewBox='0 0 520 480'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    focusable='false'
  >
    <defs>
      <radialGradient id='po-glow' cx='50%' cy='50%' r='50%'>
        <stop offset='0%' stopColor='#4A2FBD' stopOpacity='0.4' />
        <stop offset='60%' stopColor='#AA367C' stopOpacity='0.12' />
        <stop offset='100%' stopColor='#AA367C' stopOpacity='0' />
      </radialGradient>
    </defs>
    <circle cx='260' cy='240' r='230' fill='url(#po-glow)' />
    <g className='ha-orbit' fill='none' strokeWidth='1.2'>
      <ellipse cx='260' cy='240' rx='238' ry='96' stroke='#AA367C' strokeOpacity='0.35' transform='rotate(-18 260 240)' strokeDasharray='4 8' />
      <ellipse cx='260' cy='240' rx='200' ry='70' stroke='#4A2FBD' strokeOpacity='0.45' transform='rotate(24 260 240)' />
    </g>
  </svg>
);
