import { Col, Container, Row } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import {
  ShapeCircle, ShapeRing, ShapeDiamond,
  ShapeTriangle, ShapeStar, ShapePlus, ShapeHex, ShapeDots,
  SC,
} from '../ui/FloatingShapes';
import 'animate.css';

const services = [
  {
    number: '01',
    title: 'Front-End Development',
    description:
      'Building pixel-perfect, responsive web interfaces with modern frameworks. Clean code, smooth animations, and great UX.',
    tags: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'TailwindCSS', 'Sass'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 4L5 20L12 22L19 20L21 4H3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M7 8H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7.5 12H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 16H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Back-End Development',
    description:
      'Developing robust server-side applications and RESTful APIs. Secure, scalable and well-structured solutions.',
    tags: ['Laravel', 'PHP', 'Node.js', 'MySQL', 'REST API'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 21H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 17V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 7L9.5 9.5L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Mobile App Development',
    description:
      'Crafting cross-platform mobile applications with native performance. iOS & Android from a single codebase.',
    tags: ['React Native', 'Expo', 'Firebase', 'Redux', 'REST API'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 18H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 6H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'UI / UX Design',
    description:
      'Designing intuitive, visually compelling interfaces that users love. From wireframes to polished, accessible designs.',
    tags: ['Responsive', 'Dark Mode', 'Animations', 'Accessibility', 'AI'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="8" cy="16" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="13" y="13" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    number: '05',
    title: 'AI Integration',
    description:
      'Integrating artificial intelligence capabilities into web and mobile apps. Smart features powered by modern AI tools.',
    tags: ['Claude', 'ChatGPT API', 'OpenAI', 'Gemini','NLP'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C9 2 6.5 4 6.5 7C6.5 8.5 7.1 9.9 8.1 10.9C6.8 11.5 5.9 12.9 6 14.5C6.1 16.4 7.6 18 9.5 18.3V20C9.5 21.1 10.4 22 11.5 22H12.5C13.6 22 14.5 21.1 14.5 20V18.3C16.4 18 17.9 16.4 18 14.5C18.1 12.9 17.2 11.5 15.9 10.9C16.9 9.9 17.5 8.5 17.5 7C17.5 4 15 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="10" cy="8" r="1" fill="currentColor"/>
        <circle cx="14" cy="8" r="1" fill="currentColor"/>
        <path d="M10 13C10 13 10.8 14 12 14C13.2 14 14 13 14 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Deployment & DevOps',
    description:
      'Shipping projects to production smoothly. Configuring hosting, domains, CI/CD pipelines and performance optimization.',
    tags: ['GitHub Pages', 'Netlify', 'Vercel', 'Git', 'CI/CD'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export const Services = () => {
  return (
    <section className="services" id="services">

      {/* Floating hollow shapes */}
      <ShapeRing     size={100} color={SC.purpleDim} anim='gs-float-slow' style={{ top: '6%',    left: '2%' }} />
      <ShapeStar     size={34}  color={SC.blue}      anim='gs-spin'       style={{ top: '8%',    right: '5%' }} />
      <ShapeDiamond  size={32}  color={SC.purple}    anim='gs-drift'      style={{ top: '40%',   left: '1%' }} />
      <ShapeHex      size={52}  color={SC.blueDim}   anim='gs-float-rev'  style={{ bottom: '8%', right: '3%' }} />
      <ShapeTriangle size={26}  color={SC.purpleDim} anim='gs-sway'       style={{ bottom: '20%', left: '6%' }} />
      <ShapePlus     size={20}  color={SC.purpleDim} anim='gs-float'      style={{ top: '55%',   right: '8%' }} />
      <ShapeCircle   size={44}  color={SC.blueDim}   anim='gs-drift-rev'  style={{ bottom: '35%', left: '4%' }} />
      <ShapeDots     color={SC.purpleDim}              anim='gs-pulse'      style={{ top: '10%', left: '60%' }} />

      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? 'animate__animated animate__fadeInDown' : ''}>
              <h2>What I Do</h2>
              <p>Turning ideas into real-life products is my passion</p>
              <span className='section-title-line' />
            </div>
          )}
        </TrackVisibility>

        <Row className='align-items-stretch'>
          {services.map((service, index) => (
            <Col key={index} xs={12} sm={6} lg={4} className='d-flex'>
              <TrackVisibility style={{ width: '100%' }}>
                {({ isVisible }) => (
                  <div
                    className={`service-card w-100 ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="service-num">{service.number}</span>
                    <div className="service-icon">{service.icon}</div>
                    <h5>{service.title}</h5>
                    <p>{service.description}</p>
                    <div className="service-tags">
                      {service.tags.map((tag, i) => (
                        <span key={i} className="s-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
