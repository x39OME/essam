/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import progress1 from '../../assets/images/skills/progress1.svg';
import progress2 from '../../assets/images/skills/progress2.svg';
import progress3 from '../../assets/images/skills/progress3.svg';
import { SkillsBoxes } from './SkillsBoxes';

export const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className='skills' id='skills'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-box'>
              <h2>Skills</h2>
              <p>
                My Computer Science Skills
              </p>
              <Carousel responsive={responsive} infinite={true} className='owl-carousel owl-theme skill-slider'>
                <div className='item'>
                  <img src={progress1} alt='95%' />
                  <h5>Front End Developer</h5>
                </div>
                <div className='item'>
                  <img src={progress2} alt='75%' />
                  <h5>Back End Developer</h5>
                </div>
                <div className='item'>
                  <img src={progress3} alt='90%' />
                  <h5>Mobile Development</h5>
                </div>
                <div className='item'>
                  <img src={progress1} alt='95%' />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        {/* Skills Box */}
        <SkillsBoxes />
      </div>
    </section>
  );
}


