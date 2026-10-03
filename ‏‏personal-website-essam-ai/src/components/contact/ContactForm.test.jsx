import { render, screen, fireEvent } from '@testing-library/react';
import { ContactForm } from './ContactForm';

describe('ContactForm', () => {
  it('shows validation errors for an empty submit', () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    expect(screen.getByText('Please enter your name.')).toBeInTheDocument();
    expect(screen.getByText(/valid email/i)).toBeInTheDocument();
    expect(screen.getByText(/at least 10 characters/i)).toBeInTheDocument();
  });

  it('rejects an invalid email', () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Sam' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'nope' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hello there, nice site' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    expect(screen.getByText(/valid email/i)).toBeInTheDocument();
  });
});
