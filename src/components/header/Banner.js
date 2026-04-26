import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../../assets/images/header/header.svg';
import {ArrowRightCircleFill} from 'react-bootstrap-icons'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // eslint-disable-next-line no-unused-vars
  const [index, setIndex] = useState(1);
  const toRotate = ['Web Developer', 'Front End', 'Mobile Developer'];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  // Text
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          {/* Content */}
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                <span className='tagline'>Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Essam ..`} <br/>
                  <span className='text-rotate' dataPeriod='1000' data-rotate='[ "Web Developer", "Mobile Developer", "Full Stack Developer" ]'>
                    <span className='wrap'>{text}</span>
                  </span>
                </h1>
                <p>
                  I have a good experience in Programming,
                  I'm  Full Stack Web Developer (Laravel).
                  I'm Mobile Applications Developer (React Native), & Font-End Web Developer
                </p>
                {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircleFill size={25} /></button> */}
                <a href='#connect'>Let’s Connect <ArrowRightCircleFill size={25} /></a>
              </div>}
            </TrackVisibility>
          </Col>
          {/* Image */}
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                <img src={headerImg} alt='Header'/>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  );
}

