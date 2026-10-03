import { Container, Row, Col } from 'react-bootstrap';
import { ContactForm } from './ContactForm';
import { TrackVisibility } from '../ui/TrackVisibility';
import whatsapp from '../../assets/images/social/whatsapp.svg';
import telegram from '../../assets/images/social/telegram.svg';
import email from '../../assets/images/social/email.svg';

import {
  ShapeCircle, ShapeSquare, ShapeRing,
  ShapeTriangle, ShapeStar, ShapePlus, ShapeHex, ShapeDiamond, ShapeDots, ShapeCross,
  SC,
} from '../ui/FloatingShapes';

const contactItems = [
  {
    icon: whatsapp,
    label: 'WhatsApp',
    value: '+966 505 257 849',
    href: 'https://wa.me/+966505257849',
  },
  {
    icon: telegram,
    label: 'Telegram',
    value: 'Essam',
    href: 'https://t.me/essam_402',
  },
  {
    icon: email,
    label: 'Email',
    value: 'essamabdullah@outlook.sa',
    href: 'mailto:essamabdullah@outlook.sa',
  },
];

export const ContactMe = () => {
  return (
    <section id='connect' className='contact-section'>

      {/* Ambient glows */}
      <div className='glow-purple' style={{ width: 500, height: 500, top: '-100px', left: '-100px', opacity: 0.5 }} />
      <div className='glow-blue'   style={{ width: 400, height: 400, bottom: '-80px', right: '-80px', opacity: 0.5 }} />

      {/* Floating hollow shapes — section background */}
      <ShapeRing     size={100} color={SC.purpleDim} anim='gs-float-slow' style={{ top: '5%',     left: '2%' }} />
      <ShapeStar     size={34}  color={SC.blue}      anim='gs-spin'       style={{ top: '7%',     right: '5%' }} />
      <ShapeDiamond  size={32}  color={SC.purple}    anim='gs-drift'      style={{ top: '30%',    left: '1%' }} />
      <ShapeHex      size={54}  color={SC.blueDim}   anim='gs-float-rev'  style={{ bottom: '6%',  right: '3%' }} />
      <ShapeTriangle size={28}  color={SC.purpleDim} anim='gs-sway'       style={{ bottom: '18%', left: '3%' }} />
      <ShapePlus     size={24}  color={SC.purpleDim} anim='gs-float'      style={{ top: '45%',    right: '2%' }} />
      <ShapeCircle   size={50}  color={SC.blueDim}   anim='gs-drift-rev'  style={{ top: '62%',    left: '2%' }} />
      <ShapeDots     color={SC.purpleDim}            anim='gs-pulse'      style={{ top: '14%',    left: '16%' }} />
      <ShapeSquare   size={22}  color={SC.blueDim}   anim='gs-spin-rev'   style={{ top: '75%',    right: '8%' }} />
      <ShapeCross    size={26}  color={SC.blueDim}   anim='gs-drift'      style={{ top: '25%',    right: '12%' }} />
      <ShapeStar     size={20}  color={SC.purple}    anim='gs-sway'       style={{ bottom: '4%',  left: '14%' }} />

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
                        aria-label={`${item.label}: ${item.value}`}
                      >
                        <img src={item.icon} alt='' aria-hidden='true' />
                      </a>
                      <p className='contact-label'>{item.label}</p>
                      <p>{item.value}</p>
                    </Col>
                  ))}
                </Row>

                <ContactForm />

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
                <ShapeStar     size={20}  color={SC.purple}   anim='gs-spin'       style={{ top: '30%',     right: '60px' }} />
              </div>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
