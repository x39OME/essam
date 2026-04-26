import React from 'react';
import { Row } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard';
import { frontEnd } from '../../../data/frontEnd';
import { backEnd } from '../../../data/backEnd';
import { mobileApp } from '../../../data/mobileApp';

export const AllProjects = () => {
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
      <Row>
      {
        backEnd.map((project, index) => {
          return (
            <ProjectCard key={index} {...project} />
          )
        })
      }
      </Row>
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
