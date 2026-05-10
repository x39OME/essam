import { Container, Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import navIcon1 from '../../assets/images/social/nav-icon1.svg';
import navIcon6 from '../../assets/images/social/nav-icon6.svg';
import navIcon7 from '../../assets/images/social/nav-icon7.svg';

import {
  ShapeCircle, ShapeSquare, ShapeRing,
  ShapeTriangle, ShapeStar, ShapePlus, ShapeHex, ShapeDiamond,
  SC,
} from '../ui/FloatingShapes';
import 'animate.css';

const contactItems = [
  {
    icon: navIcon7,
    alt: 'Email',
    label: 'Email',
    value: 'essamabdullah@outlook.sa',
    href: 'mailto:essamabdullah@outlook.sa',
  },
  {
    icon: navIcon6,
    alt: 'WhatsApp',
    label: 'WhatsApp',
    value: '+966 505 257 849',
    href: 'https://wa.me/+966505257849',
  },
  {
    icon: navIcon1,
    alt: 'LinkedIn',
    label: 'LinkedIn',
    value: 'Essam Abdullah',
    href: 'https://www.linkedin.com/in/essam-abdullah-6an77aab/',
  },
];

export const ContactMe = () => {
  return (
    <section id='connect' className='contact-section'>

      {/* Ambient glows */}
      <div className='glow-purple' style={{ width: 500, height: 500, top: '-100px', left: '-100px', opacity: 0.5 }} />
      <div className='glow-blue'   style={{ width: 400, height: 400, bottom: '-80px', right: '-80px', opacity: 0.5 }} />

      <Container style={{ position: 'relative', zIndex: 1 }}>

        {/* Section header */}
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={`contact-section-header ${isVisible ? 'animate__animated animate__fadeInDown' : ''}`}>
              <h2>Get In Touch</h2>
              <p>
                I am always open to new opportunities, collaborations,<br />
                and interesting conversations. Let's build something great together.
              </p>
              <span className='contact-title-line' />
            </div>
          )}
        </TrackVisibility>

        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? 'animate__animated animate__fadeInUp' : ''}>
              <div className='contact-me wow slideInUp'>
                <Row className='justify-content-center'>
                  {contactItems.map((item, index) => (
                    <Col key={index} xs={12} md={6} xl={4}>
                      <a
                        href={item.href}
                        target={item.href.startsWith('mailto') ? '_self' : '_blank'}
                        rel='noopener noreferrer'
                      >
                        <img src={item.icon} alt={item.alt} />
                      </a>
                      <p className='contact-label'>{item.label}</p>
                      <p>{item.value}</p>
                    </Col>
                  ))}
                </Row>

                {/* Decorative hollow shapes inside card */}
                <ShapeCircle   size={22}  color={SC.purple}   anim='gs-float'      style={{ top: '18px',     left: '55px' }} />
                <ShapeSquare   size={14}  color={SC.blue}     anim='gs-drift'      style={{ top: '20px',     right: '55px' }} />
                <ShapeTriangle size={18}  color={SC.purple}   anim='gs-spin-rev'   style={{ bottom: '20px',  left: '55px' }} />
                <ShapeStar     size={16}  color={SC.blueDim}  anim='gs-pulse'      style={{ bottom: '20px',  right: '80px' }} />
                <ShapePlus     size={22}  color={SC.blueDim}  anim='gs-float-slow' style={{ top: '50%',      left: '30px' }} />
                <ShapeHex      size={28}  color={SC.purpleDim} anim='gs-drift-rev' style={{ top: '50%',      right: '25px' }} />
                {/* 3 new shapes */}
                <ShapeRing     size={48}  color={SC.purpleDim} anim='gs-float-slow' style={{ top: '18px',   left: '38%' }} />
                <ShapeDiamond  size={20}  color={SC.blue}     anim='gs-sway'       style={{ bottom: '22px', left: '38%' }} />
                <ShapeStar     size={20}  color={SC.purple}   anim='gs-spin'       style={{ top: '45%',     left: '50%' }} />
              </div>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
