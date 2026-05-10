import { useState, useEffect } from 'react';
import { ArrowUpCircleFill } from 'react-bootstrap-icons';

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      className={`scroll-top${visible ? ' scroll-top--show' : ''}`}
      onClick={handleClick}
      aria-label='Back to top'
    >
      <ArrowUpCircleFill size={28} />
    </button>
  );
};
