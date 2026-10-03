import { render, screen } from '@testing-library/react';
import { ProjectCard } from './ProjectCard';

const base = { title: 'Demo', description: ' A demo ', imgUrl: 'x.webp', technologies: ['Html • ', ' Css • ', ' • ', 'Js'] };

describe('ProjectCard', () => {
  it('cleans technology separators', () => {
    render(<ProjectCard {...base} />);
    expect(screen.getByText('Html • Css • Js')).toBeInTheDocument();
  });

  it('renders only the links that exist', () => {
    render(<ProjectCard {...base} repo='https://github.com/x/y' />);
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('rel', 'noopener noreferrer');
    expect(screen.queryByText('Live Demo')).not.toBeInTheDocument();
  });
});
