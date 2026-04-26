import React from 'react';
import {skillsGroup1, skillsGroup2, skillsGroup3, skillsGroup4} from '../../data/skills';
import star from '../../assets/images/star.gif';

export const SkillsBoxes = () => {
  return (
    <div className='row'>
      <div className='skills-box'>
        {/* Box 1 */}
        <section>
          <div className='languages'>Programming Languages</div>
          <div className='box'>
            
            {/* Group 1 */}
            <div className='skill-group'>
              {
                skillsGroup1.map((skill, index) => {
                  return (
                    <div>
                      <span className='my-skill'>
                        <img src={skill.image} alt='Skill' />
                        <h6>{skill.name}</h6>
                      </span>
                      <div className='level'>{skill.level}</div>
                    </div>
                  )
                })
              }
            </div>
            {/* Group 2 */}
            <div className='skill-group'>
              {
                skillsGroup2.map((skill, index) => {
                  return (
                    <div>
                      <span className='my-skill'>
                        <img src={skill.image} alt='Skill' />
                        <h6>{skill.name}</h6>
                      </span>
                      <div className='level'>{skill.level}</div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
        {/* Star */}
        <div className='stars'>
          <img src={star} alt='Star' />
          <img src={star} alt='Star' />
          <img src={star} alt='Star' />
          <img src={star} alt='Star' />
          <img src={star} alt='Star' />
          <img src={star} alt='Star' />
          <img src={star} alt='Star' />
        </div>
        {/* Box 2 */}
        <section>
          <div className='languages'>Technologies</div>
          <div className='box'>
            {/* Group 3 */}
            <div className='skill-group'>
              {
                skillsGroup3.map((skill, index) => {
                  return (
                    <div>
                      <span className='my-skill'>
                        <img src={skill.image} alt='Skill' />
                        <h6>{skill.name}</h6>
                      </span>
                      <div className='level'>{skill.level}</div>
                    </div>
                  )
                })
              }
            </div>
            {/* Group 4*/}
            <div className='skill-group'>
              {
                skillsGroup4.map((skill, index) => {
                  return (
                    <div>
                      <span className='my-skill'>
                        <img src={skill.image} alt='Skill' />
                        <h6>{skill.name}</h6>
                      </span>
                      <div className='level'>{skill.level}</div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


