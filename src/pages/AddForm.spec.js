import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AddForm from './AddForm';

describe('AddForm', () => {
  it('renders the five textfields', () => {
    render(
      <MemoryRouter>
        <AddForm />
      </MemoryRouter>
    );
    const textFields = screen.getAllByRole('textbox');
    expect(textFields).toHaveLength(5);
  });

  it('renders the button', () => {
    render(
      <MemoryRouter>
        <AddForm />
      </MemoryRouter>
    );
    const submitButton = screen.getByRole('button', { name: 'SUBMIT' });
    expect(submitButton).toBeInTheDocument();
  });
});
