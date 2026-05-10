import { Row } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard';
import { others } from '../../../data/others';

export const Others = () => {
  return (
    <Row>
      {others.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Row>
  );
};
