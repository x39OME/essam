/**
 * Custom hero artwork: a code editor (Front-End), a phone (React Native) and
 * an AI orb, drawn in the site's purple/blue palette. Each piece floats on its
 * own rhythm (see .ha-* rules in App.css).
 */
export const HeroIllustration = () => (
  <svg
    className='hero-art'
    viewBox='0 0 520 480'
    xmlns='http://www.w3.org/2000/svg'
    role='img'
    aria-label='Illustration of a code editor, a mobile app and an AI orb'
  >
    <defs>
      <linearGradient id='ha-brand' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' stopColor='#AA367C' />
        <stop offset='100%' stopColor='#4A2FBD' />
      </linearGradient>
      <linearGradient id='ha-panel' x1='0%' y1='0%' x2='0%' y2='100%'>
        <stop offset='0%' stopColor='#1f1b3a' />
        <stop offset='100%' stopColor='#141226' />
      </linearGradient>
      <radialGradient id='ha-glow' cx='50%' cy='50%' r='50%'>
        <stop offset='0%' stopColor='#4A2FBD' stopOpacity='0.45' />
        <stop offset='60%' stopColor='#AA367C' stopOpacity='0.14' />
        <stop offset='100%' stopColor='#AA367C' stopOpacity='0' />
      </radialGradient>
      <radialGradient id='ha-orb' cx='35%' cy='30%' r='75%'>
        <stop offset='0%' stopColor='#ffb3de' />
        <stop offset='45%' stopColor='#AA367C' />
        <stop offset='100%' stopColor='#4A2FBD' />
      </radialGradient>
    </defs>

    {/* Ambient glow + orbit rings */}
    <circle cx='260' cy='250' r='230' fill='url(#ha-glow)' />
    <g className='ha-orbit' fill='none' strokeWidth='1.2'>
      <ellipse cx='260' cy='250' rx='238' ry='96' stroke='#AA367C' strokeOpacity='0.35' transform='rotate(-18 260 250)' strokeDasharray='4 8' />
      <ellipse cx='260' cy='250' rx='200' ry='70' stroke='#4A2FBD' strokeOpacity='0.45' transform='rotate(24 260 250)' />
    </g>

    {/* Stars */}
    <g fill='#fff'>
      <circle className='ha-twinkle' cx='60' cy='40' r='2' />
      <circle className='ha-twinkle ha-d1' cx='480' cy='200' r='1.8' />
      <circle className='ha-twinkle ha-d2' cx='36' cy='400' r='2.2' />
      <circle className='ha-twinkle ha-d3' cx='300' cy='450' r='1.6' />
      <circle className='ha-twinkle ha-d2' cx='200' cy='22' r='1.6' />
    </g>

    {/* ───────── Code editor (Front-End) ───────── */}
    <g className='ha-float ha-float-a'>
      <g>
        <rect x='10' y='98' width='338' height='252' rx='22' fill='#000' fillOpacity='0.16' />
        <rect x='18' y='110' width='322' height='246' rx='20' fill='#000' fillOpacity='0.2' />
        <rect x='14' y='84' width='330' height='252' rx='18' fill='url(#ha-panel)' />
        <rect x='14.5' y='84.5' width='329' height='251' rx='17.5' fill='none' stroke='url(#ha-brand)' strokeOpacity='0.7' />
      </g>
      {/* title bar */}
      <path d='M14 102a18 18 0 0 1 18-18h294a18 18 0 0 1 18 18v14H14z' fill='#ffffff' fillOpacity='0.05' />
      <circle cx='36' cy='101' r='5' fill='#ff5f57' />
      <circle cx='54' cy='101' r='5' fill='#febc2e' />
      <circle cx='72' cy='101' r='5' fill='#28c840' />
      <text x='250' y='105' fill='#8f8aa8' fontSize='10.5' fontFamily='Consolas, Menlo, monospace' textAnchor='middle'>portfolio.jsx</text>

      {/* line numbers */}
      <g fill='#5b5678' fontSize='12' fontFamily='Consolas, Menlo, monospace'>
        <text x='30' y='146'>1</text>
        <text x='30' y='170'>2</text>
        <text x='30' y='194'>3</text>
        <text x='30' y='218'>4</text>
        <text x='30' y='242'>5</text>
        <text x='30' y='266'>6</text>
        <text x='30' y='290'>7</text>
        <text x='30' y='314'>8</text>
      </g>

      {/* code */}
      <g fontSize='13' fontFamily='Consolas, Menlo, monospace' xmlSpace='preserve'>
        <text x='56' y='146'>
          <tspan fill='#c792ea'>const </tspan>
          <tspan fill='#82aaff'>essam</tspan>
          <tspan fill='#e6e1ff'> = {'{'}</tspan>
        </text>
        <text x='56' y='170'>
          <tspan fill='#e6e1ff'>{'  '}role: </tspan>
          <tspan fill='#c3e88d'>'Developer'</tspan>
          <tspan fill='#e6e1ff'>,</tspan>
        </text>
        <text x='56' y='194'>
          <tspan fill='#e6e1ff'>{'  '}web: </tspan>
          <tspan fill='#ff7ac6'>&lt;React /&gt;</tspan>
          <tspan fill='#e6e1ff'>,</tspan>
        </text>
        <text x='56' y='218'>
          <tspan fill='#e6e1ff'>{'  '}mobile: </tspan>
          <tspan fill='#c3e88d'>'React Native'</tspan>
          <tspan fill='#e6e1ff'>,</tspan>
        </text>
        <text x='56' y='242'>
          <tspan fill='#e6e1ff'>{'  '}ai: [</tspan>
          <tspan fill='#c3e88d'>'Claude'</tspan>
          <tspan fill='#e6e1ff'>, </tspan>
          <tspan fill='#c3e88d'>'GPT'</tspan>
          <tspan fill='#e6e1ff'>],</tspan>
        </text>
        <text x='56' y='266'>
          <tspan fill='#e6e1ff'>{'  '}</tspan>
          <tspan fill='#82aaff'>build</tspan>
          <tspan fill='#e6e1ff'>() {'{'}</tspan>
        </text>
        <text x='56' y='290'>
          <tspan fill='#e6e1ff'>{'    '}</tspan>
          <tspan fill='#c792ea'>return </tspan>
          <tspan fill='#c3e88d'>'ideas → apps'</tspan>
        </text>
        <text x='56' y='314'>
          <tspan fill='#e6e1ff'>{'  }'}</tspan>
          <tspan fill='#e6e1ff'>{'\n'}</tspan>
        </text>
        <rect className='ha-caret' x='88' y='303' width='7' height='15' fill='#AA367C' />
      </g>
    </g>

    {/* ───────── Phone (React Native) ───────── */}
    <g className='ha-float ha-float-b'>
      <g>
        <rect x='312' y='164' width='172' height='306' rx='34' fill='#000' fillOpacity='0.16' />
        <rect x='322' y='176' width='152' height='300' rx='30' fill='#000' fillOpacity='0.2' />
        <rect x='318' y='150' width='160' height='306' rx='30' fill='#100e20' />
        <rect x='318.5' y='150.5' width='159' height='305' rx='29.5' fill='none' stroke='url(#ha-brand)' strokeWidth='1.6' />
      </g>
      <rect x='328' y='160' width='140' height='286' rx='22' fill='url(#ha-panel)' />
      <rect x='376' y='167' width='44' height='9' rx='4.5' fill='#000' />

      {/* app header with React atom */}
      <rect x='338' y='188' width='120' height='64' rx='14' fill='url(#ha-brand)' />
      <g transform='translate(368 220)' fill='none' stroke='#fff' strokeWidth='1.6' strokeOpacity='0.95'>
        <ellipse rx='14' ry='5.5' />
        <ellipse rx='14' ry='5.5' transform='rotate(60)' />
        <ellipse rx='14' ry='5.5' transform='rotate(120)' />
        <circle r='2.4' fill='#fff' stroke='none' />
      </g>
      <rect x='396' y='208' width='50' height='7' rx='3.5' fill='#fff' fillOpacity='0.9' />
      <rect x='396' y='222' width='34' height='6' rx='3' fill='#fff' fillOpacity='0.55' />

      {/* list cards */}
      <rect x='338' y='264' width='120' height='40' rx='12' fill='#ffffff' fillOpacity='0.07' />
      <circle cx='358' cy='284' r='9' fill='#AA367C' fillOpacity='0.85' />
      <rect x='374' y='276' width='60' height='6' rx='3' fill='#fff' fillOpacity='0.75' />
      <rect x='374' y='287' width='40' height='5' rx='2.5' fill='#fff' fillOpacity='0.35' />

      <rect x='338' y='312' width='120' height='40' rx='12' fill='#ffffff' fillOpacity='0.07' />
      <circle cx='358' cy='332' r='9' fill='#4A2FBD' fillOpacity='0.95' />
      <rect x='374' y='324' width='52' height='6' rx='3' fill='#fff' fillOpacity='0.75' />
      <rect x='374' y='335' width='44' height='5' rx='2.5' fill='#fff' fillOpacity='0.35' />

      <rect x='338' y='360' width='120' height='40' rx='12' fill='#ffffff' fillOpacity='0.07' />
      <circle cx='358' cy='380' r='9' fill='url(#ha-brand)' />
      <rect x='374' y='372' width='64' height='6' rx='3' fill='#fff' fillOpacity='0.75' />
      <rect x='374' y='383' width='30' height='5' rx='2.5' fill='#fff' fillOpacity='0.35' />

      {/* bottom tab bar */}
      <rect x='338' y='410' width='120' height='26' rx='13' fill='#ffffff' fillOpacity='0.08' />
      <circle cx='364' cy='423' r='4' fill='#AA367C' />
      <circle cx='398' cy='423' r='4' fill='#fff' fillOpacity='0.35' />
      <circle cx='432' cy='423' r='4' fill='#fff' fillOpacity='0.35' />
    </g>

    {/* ───────── AI orb ───────── */}
    <g className='ha-float ha-float-c'>
      {/* scaled down around the orb centre */}
      <g transform='translate(436 84) scale(0.7) translate(-436 -84)'>
        <circle cx='436' cy='84' r='50' fill='#AA367C' fillOpacity='0.12' />
        <circle cx='436' cy='84' r='36' fill='url(#ha-orb)' />
        <circle cx='436' cy='84' r='36' fill='none' stroke='#fff' strokeOpacity='0.35' />
        {/* 4-point sparkle */}
        <path d='M436 62 L441 79 L458 84 L441 89 L436 106 L431 89 L414 84 L431 79 Z' fill='#fff' fillOpacity='0.95' />
        <path className='ha-twinkle' d='M470 40 L472.5 47 L480 49.5 L472.5 52 L470 59 L467.5 52 L460 49.5 L467.5 47 Z' fill='#fff' />
        <path className='ha-twinkle ha-d2' d='M396 128 L398 133 L403 135 L398 137 L396 142 L394 137 L389 135 L394 133 Z' fill='#ffb3de' />
      </g>
      {/* label kept outside the scaled group so it stays readable */}
      <rect x='417' y='113' width='38' height='17' rx='8.5' fill='url(#ha-panel)' stroke='url(#ha-brand)' strokeOpacity='0.9' />
      <text x='436' y='125' fill='#fff' fontSize='10.5' fontWeight='700' letterSpacing='1.5' textAnchor='middle' fontFamily='system-ui, sans-serif'>AI</text>
    </g>

    {/* ───────── Floating badges ───────── */}
    <g className='ha-float ha-float-d'>
      <rect x='36' y='360' width='96' height='40' rx='20' fill='url(#ha-panel)' stroke='url(#ha-brand)' strokeOpacity='0.8' />
      <text x='84' y='386' fill='#fff' fontSize='17' fontWeight='700' textAnchor='middle' fontFamily='Consolas, Menlo, monospace'>&lt;/&gt;</text>
    </g>
    <g className='ha-float ha-float-e'>
      <rect x='168' y='392' width='116' height='32' rx='16' fill='url(#ha-panel)' stroke='#4A2FBD' strokeOpacity='0.9' />
      <circle cx='188' cy='408' r='4.5' fill='#28c840' />
      <text x='200' y='412' fill='#e6e1ff' fontSize='11.5' fontWeight='600' fontFamily='system-ui, sans-serif'>Deployed</text>
    </g>
  </svg>
);
