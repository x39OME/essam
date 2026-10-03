import { Row } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard';
import { ai } from '../../../data/ai';

export const Ai = () => {
  return (
    <Row>
      {ai.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </Row>
  );
};
