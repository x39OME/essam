import { useRef, useState, useEffect } from 'react';
import { SkillsBoxes } from './SkillsBoxes';
import {
  ShapeCircle, ShapeRing, ShapeSquare, ShapeDiamond,
  ShapeTriangle, ShapeStar, ShapePlus, ShapeHex, ShapeDots, ShapeCross,
  SC,
} from '../ui/FloatingShapes';

const bars = [
  { label: 'Front-End Development',   percent: 94, color: 'var(--purpleColor)' },
  { label: 'Mobile Development',      percent: 82, color: 'var(--blueColor)'   },
  { label: 'Back-End Development',    percent: 59, color: 'var(--purpleColor)' },
  { label: 'Artificial Intelligence', percent: 86, color: 'var(--blueColor)'   },
];

const SkillBar = ({ label, percent, triggered }) => (
  <div className='skill-bar-item'>
    <div className='skill-bar-header'>
      <span className='skill-bar-label'>{label}</span>
      <span className='skill-bar-pct'>{triggered ? `${percent}%` : '0%'}</span>
    </div>
    <div className='skill-bar-track'>
      <div
        className='skill-bar-fill'
        style={{ width: triggered ? `${percent}%` : '0%' }}
      />
    </div>
  </div>
);

export const Skills = () => {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className='skills' id='skills'>

      {/* Ambient glows */}
      <div className='glow-purple' style={{ width: 420, height: 420, top: '-60px',   left: '30%', opacity: 0.3, position: 'absolute', borderRadius: '50%', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(170, 54, 124, 0.18) 0%, transparent 65%)' }} />
      <div className='glow-blue'   style={{ width: 340, height: 340, bottom: '-40px', right: '10%', opacity: 0.3, position: 'absolute', borderRadius: '50%', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(74, 47, 189, 0.18) 0%, transparent 65%)' }} />

      {/* Floating hollow shapes */}
      <ShapeCircle   size={55}  color={SC.purple}    anim='gs-float'      style={{ top: '7%',    left: '3%' }} />
      <ShapeStar     size={34}  color={SC.blue}      anim='gs-spin-rev'   style={{ top: '5%',    right: '4%' }} />
      <ShapeHex      size={52}  color={SC.purpleDim} anim='gs-float-rev'  style={{ bottom: '6%', left: '5%' }} />
      <ShapeSquare   size={22}  color={SC.purpleDim} anim='gs-drift'      style={{ top: '35%',   right: '3%' }} />
      <ShapePlus     size={28}  color={SC.purple}    anim='gs-sway'       style={{ bottom: '18%', right: '7%' }} />
      <ShapeRing     size={78}  color={SC.blueDim}   anim='gs-drift-rev'  style={{ top: '50%',   left: '1%' }} />
      <ShapeDots     color={SC.blueDim}               anim='gs-pulse'      style={{ bottom: '25%', left: '20%' }} />
      <ShapeDiamond  size={30}  color={SC.blue}      anim='gs-float-slow' style={{ top: '20%',   left: '8%' }} />
      <ShapeTriangle size={26}  color={SC.purpleDim} anim='gs-spin'       style={{ bottom: '35%', right: '5%' }} />
      <ShapeCross    size={28}  color={SC.blueDim}   anim='gs-drift'      style={{ top: '65%',   right: '12%' }} />
      <ShapeCircle   size={20}  color={SC.blueDim}   anim='gs-float-rev'  style={{ top: '80%',   left: '30%' }} />
      <ShapeStar     size={20}  color={SC.purple}    anim='gs-sway'       style={{ top: '40%',   right: '14%' }} />

      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-box' ref={ref}>
              <h2>Skills</h2>
              <p>From pixels to logic — a skill set built through real projects, constant learning, and a passion for both design and engineering.</p>
              <span className='section-title-line' />
              <div className='skill-bars'>
                {bars.map((bar, i) => (
                  <SkillBar key={i} {...bar} triggered={triggered} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <SkillsBoxes />
      </div>
    </section>
  );
};
