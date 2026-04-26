import React from 'react';
import { Row } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard';
import { backEnd } from '../../../data/backEnd'

export const BackEnd = () => {

  return (
    <div>
      <Row>
        {
          backEnd.map((project, index) => {
            return (
              <ProjectCard key={index} {...project} />
            )
          })
        }
      </Row>
    </div>
  );
}

