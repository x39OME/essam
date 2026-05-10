import {
  skillsGroup1,
  skillsGroup2,
  skillsGroup3,
  skillsGroup4,
  skillsGroup5,
  skillsGroup6,
} from '../../data/skills';

const SkillGroup = ({ skills }) => (
  <div className='skill-group'>
    {skills.map((skill, index) => (
      <div key={index}>
        <span className='my-skill'>
          <img
            src={skill.image}
            alt={skill.name}
            className={[
              skill.isWhite  ? 'skill-icon-white' : '',
              skill.needsBg  ? 'skill-icon-needsbg' : '',
            ].filter(Boolean).join(' ')}
          />
          <h6>{skill.name}</h6>
        </span>
        <div className='level'>{skill.level}</div>
      </div>
    ))}
  </div>
);

export const SkillsBoxes = () => {
  return (
    <div className='row'>
      <div className='skills-box'>

        {/* Box 1 — Programming Languages */}
        <section>
          <div className='languages'>Programming Languages</div>
          <div className='box'>
            <SkillGroup skills={skillsGroup1} />
            <SkillGroup skills={skillsGroup2} />
          </div>
        </section>

        {/* Box 2 — Frameworks & Tools */}
        <section>
          <div className='languages'>Frameworks & Tools</div>
          <div className='box'>
            <SkillGroup skills={skillsGroup3} />
            <SkillGroup skills={skillsGroup4} />
          </div>
        </section>

        {/* Box 3 — Artificial Intelligence */}
        <section>
          <div className='languages'>Artificial Intelligence</div>
          <div className='box'>
            <SkillGroup skills={skillsGroup5} />
            <SkillGroup skills={skillsGroup6} />
          </div>
        </section>

      </div>
    </div>
  );
};
