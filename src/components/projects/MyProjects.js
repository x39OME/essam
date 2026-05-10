import { Col, Container, Row, Nav, Tab } from 'react-bootstrap';
import colorSharp2 from '../../assets/images/projects/color-sharp2.png';
import { FrontEnd } from './tabs/FrontEnd';
import { BackEnd } from './tabs/BackEnd';
import { MobileApp } from './tabs/MobileApp';
import { Ai } from './tabs/Ai';
import { Others } from './tabs/Others';
import {
  ShapeCircle, ShapeRing, ShapeSquare, ShapeDiamond,
  ShapeTriangle, ShapeStar, ShapePlus, ShapeHex, ShapeDots, ShapeCross,
  SC,
} from '../ui/FloatingShapes';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  return (
    <section id='projects' className='projects'>

      {/* Floating hollow shapes — Projects section */}
      <ShapeCircle   size={60}  color={SC.purple}    anim='gs-float'      style={{ top: '5%',    left: '2%' }} />
      <ShapeStar     size={34}  color={SC.blue}      anim='gs-spin-rev'   style={{ top: '7%',    right: '5%' }} />
      <ShapeHex      size={54}  color={SC.blueDim}   anim='gs-float-rev'  style={{ bottom: '5%', right: '4%' }} />
      <ShapeTriangle size={30}  color={SC.purple}    anim='gs-sway'       style={{ bottom: '14%', left: '3%' }} />
      <ShapeRing     size={85}  color={SC.purpleDim} anim='gs-drift-rev'  style={{ top: '44%',   left: '1%' }} />
      <ShapePlus     size={24}  color={SC.purpleDim} anim='gs-drift'      style={{ top: '28%',   right: '3%' }} />
      <ShapeDots     color={SC.blue}                  anim='gs-pulse'      style={{ bottom: '28%', right: '10%' }} />
      {/* Extra shapes for richness */}
      <ShapeSquare   size={24}  color={SC.blueDim}   anim='gs-spin'       style={{ top: '55%',   right: '2%' }} />
      <ShapeDiamond  size={32}  color={SC.purpleDim} anim='gs-float-slow' style={{ top: '18%',   left: '8%' }} />
      <ShapeCross    size={26}  color={SC.blueDim}   anim='gs-drift-rev'  style={{ bottom: '42%', right: '6%' }} />
      <ShapeCircle   size={18}  color={SC.blue}      anim='gs-float-rev'  style={{ top: '70%',   left: '22%' }} />
      <ShapeStar     size={22}  color={SC.purpleDim} anim='gs-sway'       style={{ bottom: '55%', left: '6%' }} />

      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? 'animate__animated animate__fadeInDown' : ''}>
                <h2>Projects</h2>
                <p>
                  A curated collection of real-world projects spanning Web, Mobile & AI. <br/>
                  Each one is a story of a challenge solved with clean code and creative thinking.
                </p>
                <span className='section-title-line' />
                <Tab.Container id='projects-tabs' defaultActiveKey='front-end'>
                  <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                    <Nav.Item>
                      <Nav.Link eventKey='front-end'>Front End</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='back-end'>Back End</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='mobile-app'>Mobile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='ai'>AI</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='others'>Others</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey='front-end'>
                      <FrontEnd />
                    </Tab.Pane>
                    <Tab.Pane eventKey='back-end'>
                      <BackEnd />
                    </Tab.Pane>
                    <Tab.Pane eventKey='mobile-app'>
                      <MobileApp />
                    </Tab.Pane>
                    <Tab.Pane eventKey='ai'>
                      <Ai />
                    </Tab.Pane>
                    <Tab.Pane eventKey='others'>
                      <Others />
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2} alt='BackgroundImage' />
    </section>
  );
};
