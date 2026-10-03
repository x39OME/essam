import { Row } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard';
import { frontEnd } from '../../../data/frontEnd';

export const FrontEnd = () => {
  return (
    <Row>
      {frontEnd.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </Row>
  );
};
