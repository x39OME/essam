import React from 'react';
import { Row } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard';
import { frontEnd } from '../../../data/frontEnd';

export const FrontEnd = () => {

  return (
    <div>
      <Row>
        {
          frontEnd.map((project, index) => {
            return (
              <ProjectCard key={index} {...project} />
            )
          })
        }
      </Row>
    </div>
  );
}

