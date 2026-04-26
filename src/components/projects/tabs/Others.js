import React from 'react';
import { Row } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard';
import { others } from '../../../data/others';

export const Others = () => {

  return (
    <div>
      <Row>
        {
          others.map((project, index) => {
            return (
              <ProjectCard key={index} {...project} />
            )
          })
        }
      </Row>
    </div>
  );
}

