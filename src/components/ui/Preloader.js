import { useState, useEffect } from 'react';
import { Logo } from './Logo';

export const Preloader = ({ onFinish }) => {
  const [hiding, setHiding] = useState(false);
  const isLight = localStorage.getItem('theme') === 'light';

  useEffect(() => {
    const t1 = setTimeout(() => setHiding(true), 1900);
    const t2 = setTimeout(() => onFinish(), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onFinish]);

  return (
    <div className={`preloader${isLight ? ' preloader--light' : ''}${hiding ? ' preloader--hide' : ''}`}>
      <div className='preloader-inner'>
        <Logo id='preloader' size={60} />
        <span className='preloader-name'>ESSAM.</span>
        <div className='preloader-bar'>
          <div className='preloader-fill' />
        </div>
      </div>
    </div>
  );
};
