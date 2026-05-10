import { Row } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard';
import { ai } from '../../../data/ai';

export const Ai = () => {
  return (
    <Row>
      {ai.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Row>
  );
};
