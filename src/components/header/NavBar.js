import { useState, useEffect } from 'react';
import {Container, Navbar, Nav } from 'react-bootstrap';
import { CodeSlash } from 'react-bootstrap-icons';
import navIcon1 from '../../assets/images/social/nav-icon1.svg';
import navIcon2 from '../../assets/images/social/nav-icon2.svg';
import navIcon3 from '../../assets/images/social/nav-icon3.svg';
import navIcon4 from '../../assets/images/social/nav-icon4.svg';

export const NavBar = ()=> {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // OnScroll Navbar set Class scrolled
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }


  return (
    <Navbar expand='lg' className={scrolled ? 'scrolled': ''}>
      <Container>
        <Navbar.Brand href='#home'>
          <CodeSlash size={40}/>
          <a href={'https://x39ome.github.io/essam/'} className='logo'>ESSAM.</a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home' className={activeLink === 'home' ? 'active navbar-link':'navbar-link'} onClick={()=>{onUpdateActiveLink()}}>Home</Nav.Link>
            <Nav.Link href='#about'className={activeLink === 'about' ? 'active navbar-link':'navbar-link'}>About</Nav.Link>
            <Nav.Link href='#skills'className={activeLink === 'skills' ? 'active navbar-link':'navbar-link'}>Skills</Nav.Link>
            <Nav.Link href='#projects' className={activeLink === 'projects' ? 'active navbar-link':'navbar-link'}>Projects</Nav.Link>
            <Nav.Link href='#contact' className={activeLink === 'contact' ? 'active navbar-link':'navbar-link'}>Contact</Nav.Link>
          </Nav>
          <div className='navbar-text'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/essam-abdullah-6an77aab/'><img src={navIcon1} alt='Linkedin' /></a>
              <a href='https://github.com/x39OME'><img src={navIcon2} alt='Github' /></a>
              <a href='https://www.instagram.com/x39ome?igsh=aG0wZHppeG1hanB0'><img src={navIcon3} alt='Instagram' /></a>
              <a href='https://www.tiktok.com/@x39ome?_t=8pKtLPlfhs8&_r=1'><img src={navIcon4} alt='TikTok' /></a>
            </div>
            <button className='sww' onClick={()=> console.log('Welcome')}><span>Let’s Connect</span></button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
