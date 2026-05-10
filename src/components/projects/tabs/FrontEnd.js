import { Row } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard';
import { frontEnd } from '../../../data/frontEnd';

export const FrontEnd = () => {
  return (
    <Row>
      {frontEnd.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Row>
  );
};
