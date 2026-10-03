import { Container, Row, Col } from 'react-bootstrap';
import { Logo } from '../ui/Logo';
import { ShapeRing, ShapeStar, ShapeDiamond, ShapePlus, ShapeDots, SC } from '../ui/FloatingShapes';
import { SocialIcons } from '../ui/SocialIcons';


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

          <Col xs={12} sm={6}>
            <div className='footer-logo'>
              <Logo id='footer' size={48} />
              <a href='#home' className='logo'>ESSAM.</a>
            </div>
          </Col>

          <Col xs={12} sm={6} className='text-center text-sm-end'>
            <SocialIcons />
            <p>© 2027 - x39OME ♡ All Rights Reserved.</p>
          </Col>

        </Row>
      </Container>
    </footer>
  );
};
