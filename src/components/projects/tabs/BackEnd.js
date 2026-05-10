import { Row } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard';
import { backEnd } from '../../../data/backEnd';

export const BackEnd = () => {
  return (
    <Row>
      {backEnd.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Row>
  );
};
