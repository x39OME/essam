import { useEffect, useRef, useState } from 'react';

/**
 * Render-prop wrapper that tells its children whether it is in the viewport.
 * Drop-in replacement for the unmaintained `react-on-screen` package.
 */
export const TrackVisibility = ({ children, style, className, offset = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: `${offset}px` }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [offset]);

  return (
    <div ref={ref} style={style} className={className}>
      {children({ isVisible })}
    </div>
  );
};
