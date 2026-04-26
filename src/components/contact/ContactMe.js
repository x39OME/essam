import { Col, Row } from 'react-bootstrap';
import navIcon6 from '../../assets/images/social/nav-icon6.svg'
import navIcon7 from '../../assets/images/social/nav-icon7.svg'
import navIcon8 from '../../assets/images/social/nav-icon8.svg'
// import star from '../../assets/images/star.gif'

export const ContactMe = () => {

  return (
      <Col lg={12}>
        <div id='connect' className='contact-me wow slideInUp'>
          <Row>
            <Col md={6} xl={4}>
              <a href='mailto:essamabdullah@outlook.sa'>
                <img src={navIcon7} alt='Email' />
              </a>
              <p>essamabdullah@outlook.sa</p>
            </Col>
            <Col md={6} xl={4}>
              <a href='http://wa.me/+966505257849'>
                <img src={navIcon6} alt='Whats App' />
              </a>
              <p>+966 505 257 849</p>
            </Col>
            <Col md={6} xl={4}>
              <a href='https://www.linkedin.com/in/essam-abdullah-6an77aab/'>
                <img src={navIcon8} alt='Linkedin' />
              </a>
              <p>Essam Abdullah</p>
            </Col>
          </Row>
          {/* <img className='space' src={star} alt="meteorite" />
          <img className='space' src={star} alt="meteorite" />
          <img className='space' src={star} alt="meteorite" />
          <img className='space' src={star} alt="meteorite" />
          <img className='space' src={star} alt="meteorite" /> */}
          <div className='shapes'>
            <div className='circle'></div>
            <div className='square'></div>
            <div className='triangle'></div>
          </div>
        </div>
      </Col>
  )
}