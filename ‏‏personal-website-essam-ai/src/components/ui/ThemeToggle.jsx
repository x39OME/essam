import { SunFill, MoonStarsFill } from 'react-bootstrap-icons';

export const ThemeToggle = ({ theme, toggle }) => (
  <button
    className='theme-toggle-btn'
    onClick={toggle}
    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
  >
    <span className='theme-toggle-track'>
      <span className='theme-toggle-thumb' />
      <span className='theme-toggle-icon theme-toggle-icon--sun'>
        <SunFill size={11} />
      </span>
      <span className='theme-toggle-icon theme-toggle-icon--moon'>
        <MoonStarsFill size={11} />
      </span>
    </span>
  </button>
);
