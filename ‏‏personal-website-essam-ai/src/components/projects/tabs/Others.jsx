import { Row } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard';
import { others } from '../../../data/others';

export const Others = () => {
  return (
    <Row>
      {others.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </Row>
  );
};
