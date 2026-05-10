import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../../assets/images/header/header.svg';
import { ArrowRightCircleFill } from 'react-bootstrap-icons';
import {
  ShapeCircle, ShapeRing, ShapeDiamond,
  ShapeTriangle, ShapeStar, ShapePlus, ShapeHex, ShapeDots,
  SC,
} from '../ui/FloatingShapes';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum]       = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText]             = useState('');
  const [delta, setDelta]           = useState(300 - Math.random() * 100);
  const toRotate = ['Front End Developer', 'Mobile Developer', 'Artificial intelligence'];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => { tick(); }, delta);
    return () => { clearInterval(ticker); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    const i           = loopNum % toRotate.length;
    const fullText    = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prev => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className='banner' id='home'>

      {/* Ambient glow orbs */}
      <div className='glow-purple' style={{ width: 520, height: 520, top: '80px',  left: '-180px', opacity: 0.5 }} />
      <div className='glow-blue'   style={{ width: 420, height: 420, top: '200px', right: '-140px', opacity: 0.45 }} />

      {/* Floating hollow shapes */}
      <ShapeRing     size={110} color={SC.purple}   anim='gs-float-slow' style={{ top: '120px',  left: '6%' }} />
      <ShapeCircle   size={40}  color={SC.blue}     anim='gs-drift'      style={{ top: '200px',  left: '18%' }} />
      <ShapeStar     size={32}  color={SC.purple}   anim='gs-spin'       style={{ top: '18%',    right: '12%' }} />
      <ShapeHex      size={56}  color={SC.blueDim}  anim='gs-float-rev'  style={{ bottom: '15%', right: '8%' }} />
      <ShapeTriangle size={30}  color={SC.purpleDim} anim='gs-sway'      style={{ bottom: '20%', left: '10%' }} />
      <ShapeDiamond  size={28}  color={SC.purpleDim} anim='gs-drift-rev'  style={{ top: '38%',    left: '4%' }} />
      <ShapePlus     size={24}  color={SC.blueDim}  anim='gs-float'      style={{ bottom: '28%', right: '22%' }} />
      <ShapeDots     color={SC.purpleDim}            anim='gs-pulse'      style={{ top: '55%',    left: '26%' }} />

      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <span className='tagline'>Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Essam ..`} <br />
                    <span className='text-rotate'>
                      <span className='wrap'>{text}</span>
                    </span>
                  </h1>
                  <p>
                    "Professional Software Developer specializing in Front-End Web
                    and Cross-Platform Mobile Applications (React Native).
                    I combine technical expertise with a passion for
                    Computer Science and Artificial Intelligence to build innovative digital solutions."
                  </p>
                  <a href='#connect'>Let's Connect <ArrowRightCircleFill size={25} /></a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                  <img src={headerImg} alt='Header' />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
