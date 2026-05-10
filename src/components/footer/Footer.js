import { Container, Row, Col } from 'react-bootstrap';
import { Logo } from '../ui/Logo';
import { ShapeRing, ShapeStar, ShapeDiamond, ShapePlus, ShapeDots, SC } from '../ui/FloatingShapes';
import navIcon1 from '../../assets/images/social/nav-icon1.svg';
import navIcon2 from '../../assets/images/social/nav-icon2.svg';
import navIcon3 from '../../assets/images/social/nav-icon3.svg';
import navIcon4 from '../../assets/images/social/nav-icon4.svg';
import navIcon5 from '../../assets/images/social/nav-icon5.svg';

export const Footer = () => {
  return (
    <footer className='footer' style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Floating shapes */}
      <ShapeRing    size={70}  color={SC.purpleDim} anim='gs-float-slow' style={{ top: '-10px',  left: '3%' }} />
      <ShapeStar    size={20}  color={SC.blue}      anim='gs-spin'       style={{ top: '10px',   left: '20%' }} />
      <ShapeDiamond size={24}  color={SC.purpleDim} anim='gs-drift'      style={{ bottom: '10px', left: '30%' }} />
      <ShapePlus    size={18}  color={SC.blueDim}   anim='gs-pulse'      style={{ top: '15px',   right: '20%' }} />
      <ShapeDots    color={SC.purpleDim}             anim='gs-float-rev'  style={{ bottom: '8px',  right: '5%' }} />

      <Container>
        <Row className='align-items-center'>

          <Col size={12} sm={6}>
            <div className='footer-logo'>
              <Logo id='footer' size={48} />
              <a href='#home' className='logo'>ESSAM.</a>
            </div>
          </Col>

          <Col size={12} sm={6} className='text-center text-sm-end'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/essam-abdullah-6an77aab/'><img src={navIcon1} alt='LinkedIn' /></a>
              <a href='https://github.com/x39OME'><img src={navIcon2} alt='Github' /></a>
              <a href='https://www.tiktok.com/@x39ome?_t=8pKtLPlfhs8&_r=1'><img src={navIcon4} alt='TikTok' /></a>
              <a href='https://www.instagram.com/x39ome?igsh=aG0wZHppeG1hanB0'><img src={navIcon3} alt='Instagram' /></a>
              <a href='https://codepen.io/x39OME'><img src={navIcon5} alt='CodePen' /></a>
            </div>
            <p>Copyright 2026. All Rights Reserved</p>
          </Col>

        </Row>
      </Container>
    </footer>
  );
};
