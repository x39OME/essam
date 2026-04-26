import React from 'react';
import { Col, Container, Row, Nav, Tab} from 'react-bootstrap';
import colorSharp2 from '../../assets/images/projects/color-sharp2.png';
// import { AllProjects } from './tabs/AllProjects';
import { FrontEnd } from './tabs/FrontEnd';
import { BackEnd } from './tabs/BackEnd';
import { MobileApp } from './tabs/MobileApp';
import { Others } from './tabs/Others';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  return (
    <section id='projects' className='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? 'animate__animated animate__fadeInDown' : ''}>
                <h2>Projects</h2>
                <p>
                  If you are interested here you will find all my projects, <br/>
                  And if you have any questions or questions, I can help you, 
                  and by the way, I'm looking for a job.
                </p>
                {/* Tabs */}
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
                      <Nav.Link eventKey='others'>Others</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  {/* Tab Pane Sections */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    {/* All Projects Component */}
                    <Tab.Pane eventKey='front-end'>
                      <FrontEnd />
                    </Tab.Pane>
                    {/* Front End Component */}
                    <Tab.Pane eventKey='back-end'>
                      <BackEnd />
                    </Tab.Pane>
                    {/* Back End Component */}
                    <Tab.Pane eventKey='mobile-app'>
                      <MobileApp />
                    </Tab.Pane>
                    {/* Mobile App Component */}
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
      <img className='background-image-right' src={colorSharp2} alt='BackgroundImage'></img>
    </section>
  );
}
