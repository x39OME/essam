import { socialLinks } from '../../data/profile';

export const SocialIcons = ({ exclude = [] }) => (
  <div className='social-icon'>
    {socialLinks
      .filter((s) => !exclude.includes(s.name))
      .map((s) => (
        <a key={s.name} href={s.href} target='_blank' rel='noopener noreferrer' aria-label={s.name}>
          <img src={s.icon} alt='' aria-hidden='true' />
        </a>
      ))}
  </div>
);
