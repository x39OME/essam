import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CodeSlash, RocketTakeoff, Award, Cpu } from 'react-bootstrap-icons';
import { ShapeRing, ShapeStar, ShapeDiamond, ShapePlus, ShapeHex, ShapeDots, SC } from '../ui/FloatingShapes';

const items = [
  { icon: <CodeSlash size={30} />,    value: 30,  suffix: '+', label: 'Projects Completed' },
  { icon: <RocketTakeoff size={30} />, value: 4,   suffix: '',  label: 'Years Experience'   },
  { icon: <Award size={30} />,        value: 30,  suffix: '+', label: 'Certificates Earned' },
  { icon: <Cpu size={30} />,          value: 6,   suffix: '+', label: 'AI Tools Mastered'   },
];

const useCounter = (target, duration, triggered) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [triggered, target, duration]);

  return count;
};

const StatItem = ({ icon, value, suffix, label, triggered }) => {
  const count = useCounter(value, 1400, triggered);
  return (
    <Col xs={6} md={3}>
      <div className='stat-item'>
        <div className='stat-icon'>{icon}</div>
        <div className='stat-value'>
          {count}{suffix}
        </div>
        <div className='stat-label'>{label}</div>
      </div>
    </Col>
  );
};

export const Stats = () => {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className='stats-section' ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Floating hollow shapes */}
      <ShapeRing    size={70}  color={SC.purpleDim} anim='gs-float-slow' style={{ top: '-20px',  left: '1%' }} />
      <ShapeStar    size={22}  color={SC.blue}      anim='gs-spin'       style={{ top: '10px',   left: '22%' }} />
      <ShapeHex     size={44}  color={SC.blueDim}   anim='gs-drift'      style={{ bottom: '-8px', left: '42%' }} />
      <ShapeDiamond size={24}  color={SC.purple}    anim='gs-float-rev'  style={{ top: '8px',    right: '25%' }} />
      <ShapePlus    size={18}  color={SC.purpleDim} anim='gs-pulse'      style={{ bottom: '4px', right: '12%' }} />
      <ShapeDots    color={SC.blueDim}               anim='gs-sway'       style={{ top: '-4px',   right: '3%' }} />

      <Container>
        <Row className='justify-content-center'>
          {items.map((item, i) => (
            <StatItem key={i} {...item} triggered={triggered} />
          ))}
        </Row>
      </Container>
    </section>
  );
};
