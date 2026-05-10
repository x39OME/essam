import { Row } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard';
import { mobileApp } from '../../../data/mobileApp';

export const MobileApp = () => {
  return (
    <Row>
      {mobileApp.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Row>
  );
};
