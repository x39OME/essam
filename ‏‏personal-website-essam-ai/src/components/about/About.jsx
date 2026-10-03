import profile from '../../assets/images/about/profile.webp';
import { ProfileOrbits } from './ProfileOrbits';
import { PROFILE_STATS, CERTIFICATES_URL } from '../../data/profile';
import { CodeSlash, RocketTakeoff, Award } from 'react-bootstrap-icons';
import {
  ShapeRing, ShapeDiamond,
  ShapeTriangle, ShapeStar, ShapePlus, ShapeHex, ShapeDots,
  SC,
} from '../ui/FloatingShapes';

export const About = () => {
  return (
    <section className='about' id='about'>

      {/* Ambient glows */}
      <div className='glow-blue' style={{ width: 380, height: 380, top: '10%', right: '-100px', opacity: 0.4 }} />
      <div className='glow-purple' style={{ width: 300, height: 300, bottom: '5%', left: '-80px', opacity: 0.35 }} />

      {/* Floating hollow shapes */}
      <ShapeRing     size={90}  color={SC.purpleDim} anim='gs-float-slow' style={{ top: '5%',   left: '3%' }} />
      <ShapeStar     size={28}  color={SC.blue}      anim='gs-spin'       style={{ top: '12%',  right: '6%' }} />
      <ShapeDiamond  size={36}  color={SC.purple}    anim='gs-drift'      style={{ bottom: '8%', left: '8%' }} />
      <ShapePlus     size={22}  color={SC.blueDim}   anim='gs-float-rev'  style={{ bottom: '15%', right: '5%' }} />
      <ShapeTriangle size={24}  color={SC.blueDim}   anim='gs-sway'       style={{ top: '40%',  left: '1%' }} />
      <ShapeHex      size={44}  color={SC.purpleDim} anim='gs-drift-rev'  style={{ top: '60%',  right: '2%' }} />
      <ShapeDots     color={SC.blueDim}               anim='gs-pulse'      style={{ top: '25%',  right: '15%' }} />

      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='about-me'>
              <h2>Brief About Me</h2>
              <span className='section-title-line' />
              <div className='essam'>

                {/* Profile with gradient ring */}
                <div className='my-pic'>
                  <ProfileOrbits />
                  <div className='profile-ring'>
                    <img src={profile} alt='Essam Abdullah' />
                  </div>
                </div>

                <div className='info'>
                  <div className='about-boxes'>
                    <div className='about-box'>
                      <CodeSlash size={25} />
                      <p>Completed</p>
                      <span>+{PROFILE_STATS.projects} Projects</span>
                    </div>
                    <div className='about-box'>
                      <RocketTakeoff size={25} />
                      <p>Experience</p>
                      <span>{PROFILE_STATS.years} Years</span>
                    </div>
                    <div className='about-box'>
                      <Award size={25} />
                      <p>Certificates</p>
                      <span>+{PROFILE_STATS.certificates}</span>
                    </div>
                  </div>
                  <div className='about-description'>
                    <p>
                      I'm Essam, a developer at the intersection of Interactive Design and Intelligent Systems.
                      With 4+ years of digital expertise, I deliver AI-augmented solutions rather than just interfaces.
                      From high-performance Web Frontends to seamless Cross-Platform Mobile apps,
                      my portfolio showcases {PROFILE_STATS.projects}+ projects where clean code meets smart logic.
                    </p>
                  </div>
                  <div className='about-link'>
                    <a href={CERTIFICATES_URL} target='_blank' rel='noopener noreferrer'>View Certificates</a>
                    <a href='https://github.com/x39OME' target='_blank' rel='noopener noreferrer'>Github</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
