import { Col } from 'react-bootstrap';
import githubSvg from '../../assets/images/projects/github.svg'
import React from 'react';

export const ProjectCard = ({ title, description, imgUrl, technologies, demo, repo}) => {

  return (
    <Col size={12} xs={12} sm={6} md={4}>
      <div className='project-imgbox'>
        <img src={imgUrl} className='project-img' alt='Project' />
        <div className='project-text'>
          <h4>{title}</h4>
          <span>{description}</span>
          <div className='list'>{technologies}</div>
          <div className='link'>
            <a href={demo} target='blank'>
              <button>Live Demo</button>
            </a>
            <a href={repo} target='blank'>
              <button><img src={githubSvg} alt='Github'/> Github</button>
            </a>
          </div>
        </div>
      </div>
    </Col>
  )
}


