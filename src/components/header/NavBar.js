import { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Logo } from '../ui/Logo';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useTheme } from '../../hooks/useTheme';
import { ShapeRing, ShapeStar, ShapePlus, SC } from '../ui/FloatingShapes';
import navIcon1 from '../../assets/images/social/nav-icon1.svg';
import navIcon2 from '../../assets/images/social/nav-icon2.svg';
import navIcon3 from '../../assets/images/social/nav-icon3.svg';
import navIcon4 from '../../assets/images/social/nav-icon4.svg';

const SECTION_MAP = {
  home:     'home',
  about:    'about',
  skills:   'skills',
  services: 'services',
  projects: 'projects',
  connect:  'contact',
};

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled]     = useState(false);
  const { theme, toggle }           = useTheme();

  useEffect(() => {
    const OFFSET = 120;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      sections.forEach((sec) => {
        if (sec.getBoundingClientRect().top <= OFFSET) {
          current = sec.id;
        }
      });
      setActiveLink(SECTION_MAP[current] ?? current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar expand='lg' className={scrolled ? 'scrolled' : ''}>
      {/* Floating shapes */}
      <ShapeRing size={36}  color={SC.purpleDim} anim='gs-float-slow' style={{ top: '4px',  left: '45%',  pointerEvents: 'none', zIndex: 0 }} />
      <ShapeStar size={16}  color={SC.blueDim}   anim='gs-spin'       style={{ top: '8px',  left: '60%',  pointerEvents: 'none', zIndex: 0 }} />
      <ShapePlus size={14}  color={SC.purpleDim} anim='gs-pulse'      style={{ bottom: '6px', left: '75%', pointerEvents: 'none', zIndex: 0 }} />

      <Container>
        <Navbar.Brand href='#home'>
          <Logo id='nav' size={44} />
          <a href='https://x39ome.github.io/essam/' className='logo'>ESSAM.</a>
        </Navbar.Brand>

        {/* Mobile: theme toggle + hamburger grouped tightly together */}
        <div className='d-flex d-lg-none align-items-center gap-2 ms-auto'>
          <ThemeToggle theme={theme} toggle={toggle} />
          <Navbar.Toggle aria-controls='basic-navbar-nav'>
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
        </div>

        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'     className={activeLink === 'home'     ? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
            <Nav.Link href='#about'    className={activeLink === 'about'    ? 'active navbar-link' : 'navbar-link'}>About</Nav.Link>
            <Nav.Link href='#skills'   className={activeLink === 'skills'   ? 'active navbar-link' : 'navbar-link'}>Skills</Nav.Link>
            <Nav.Link href='#services' className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'}>Services</Nav.Link>
            <Nav.Link href='#projects' className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>Projects</Nav.Link>
            <Nav.Link href='#connect'  className={activeLink === 'contact'  ? 'active navbar-link' : 'navbar-link'}>Contact</Nav.Link>
          </Nav>

          <div className='navbar-text'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/essam-abdullah-6an77aab/'><img src={navIcon1} alt='Linkedin' /></a>
              <a href='https://github.com/x39OME'><img src={navIcon2} alt='Github' /></a>
              <a href='https://www.instagram.com/x39ome?igsh=aG0wZHppeG1hanB0'><img src={navIcon3} alt='Instagram' /></a>
              <a href='https://www.tiktok.com/@x39ome?_t=8pKtLPlfhs8&_r=1'><img src={navIcon4} alt='TikTok' /></a>
            </div>
            <span className='d-none d-lg-flex'>
              <ThemeToggle theme={theme} toggle={toggle} />
            </span>
            <a href='#connect' className='sww'><span>Let's Connect</span></a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
