import React from 'react';
import profile from '../../assets/images/about/profile.jpg'
import {CodeSlash, RocketTakeoff, Award} from 'react-bootstrap-icons'
import EssamAbdullah from '../about/CV-Essam-Abdullah.pdf'

export const About = () => {
  return (
    <section className='about' id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='about-me'>
              <h2>About me</h2>
              <div className='essam'>
                <div className='my-pic'>
                  <img src={profile} alt='Essam Abdullah' />
                </div>
                <div className='info'>
                  <div className='about-boxes'>
                    <div className='about-box'>
                      <CodeSlash size={25} />
                      <p>Completed</p>
                      <span>+15 Projects</span>
                    </div>
                    <div className='about-box'>
                    <RocketTakeoff size={25} />
                      <p>Experience</p>
                      <span>4 Years</span>
                    </div>
                    <div className='about-box'>
                      <Award size={25}/>
                      <p>Certificates</p>
                      <span>+30 here</span>
                    </div>
                  </div>
                  <div className='about-description'>
                  <p> My name is Essam Abdullah, i'm from Jeddah i have a good experience in Computer Science,
                    with a Professional Diploma of Computer Science from KFU, i'm a Full Stack Web Developer and Mobile Developer,
                    i have more than +20 Projects. </p>
                </div>
                <div className='about-link'>
                  <a download={EssamAbdullah} href={EssamAbdullah}>CV Download</a>
                  <a href='https://github.com/x39OME'>Github</a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


