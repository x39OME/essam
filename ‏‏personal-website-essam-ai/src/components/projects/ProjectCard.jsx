import { Col } from 'react-bootstrap';
import githubSvg from '../../assets/images/projects/github.svg';

const formatTech = (technologies = []) =>
  technologies
    .map((t) => t.replace(/•/g, '').trim())
    .filter(Boolean)
    .join(' • ');

export const ProjectCard = ({ title, description, imgUrl, technologies, demo, repo }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className='project-imgbox'>
        <img src={imgUrl} className='project-img' alt={title} loading='lazy' decoding='async' />
        <div className='project-text'>
          <h3>{title}</h3>
          <span>{description?.trim()}</span>
          <div className='list'>{formatTech(technologies)}</div>
          <div className='link'>
            {demo && (
              <a className='project-btn' href={demo} target='_blank' rel='noopener noreferrer'>
                Live Demo
              </a>
            )}
            {repo && (
              <a className='project-btn' href={repo} target='_blank' rel='noopener noreferrer'>
                <img src={githubSvg} alt='' aria-hidden='true' /> Github
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
