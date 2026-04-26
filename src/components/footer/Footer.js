import { Container, Row, Col } from 'react-bootstrap';
import { ContactMe } from '../contact/ContactMe';
import { CodeSlash } from 'react-bootstrap-icons';
import navIcon1 from '../../assets/images/social/nav-icon1.svg';
import navIcon2 from '../../assets/images/social/nav-icon2.svg';
import navIcon3 from '../../assets/images/social/nav-icon3.svg';
import navIcon4 from '../../assets/images/social/nav-icon4.svg';
import navIcon5 from '../../assets/images/social/nav-icon5.svg';


export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <ContactMe />
          <Col size={12} sm={6}>
            <div className='footer-logo'>
            <CodeSlash size={40}/>
              <a href={'http://localhost:3000/'} className='logo'>ESSAM.</a>
            </div>
          </Col>
          <Col size={12} sm={6} className='text-center text-sm-end'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/essam-abdullah-6an77aab/'><img src={navIcon1} alt='Linkedin' /></a>
              <a href='https://github.com/x39OME'><img src={navIcon2} alt='Github' /></a>
              <a href='https://www.tiktok.com/@x39ome?_t=8pKtLPlfhs8&_r=1'><img src={navIcon4} alt='Codepen' /></a>
              <a href='https://www.instagram.com/x39ome?igsh=aG0wZHppeG1hanB0'><img src={navIcon3} alt='Instagram' /></a>
              <a href='https://codepen.io/x39OME'><img src={navIcon5} alt='TikTok' /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
