import React from 'react';
import { Row } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard';
import { mobileApp } from '../../../data/mobileApp';

export const MobileApp = () => {

  return (
    <div>
      <Row>
        {
          mobileApp.map((project, index) => {
            return (
              <ProjectCard key={index} {...project} />
            )
          })
        }
      </Row>
    </div>
  );
}

