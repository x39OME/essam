import github from '../assets/images/social/github.svg';
import codepen from '../assets/images/social/codepen.svg';
import instagram from '../assets/images/social/instagram.svg';
import tiktok from '../assets/images/social/tiktok.svg';
import telegram from '../assets/images/social/telegram.svg';

// Single source of truth for the numbers shown in About and Stats
export const PROFILE_STATS = {
  projects: 30,
  years: 4,
  certificates: 30,
  aiTools: 6,
};

export const CERTIFICATES_URL = 'https://github.com/x39OME/My-Certificates/tree/main#courses--certificates';

export const socialLinks = [
  { name: 'GitHub',    href: 'https://github.com/x39OME',                            icon: github },
  { name: 'Telegram', href: 'https://t.me/essam_402',               icon: telegram },
  { name: 'CodePen',   href: 'https://codepen.io/x39OME',                            icon: codepen },
  { name: 'Instagram', href: 'https://www.instagram.com/',                     icon: instagram },
  { name: 'TikTok',    href: 'https://www.tiktok.com/',                       icon: tiktok },
];
