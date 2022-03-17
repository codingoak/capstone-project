import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AddIssue from './AddIssue';

describe('AddIssue', () => {
  it('renders the five textfields', () => {
    render(
      <MemoryRouter>
        <AddIssue />
      </MemoryRouter>
    );
    const textFields = screen.getAllByRole('textbox');
    expect(textFields).toHaveLength(5);
  });

  it('renders the button', () => {
    render(
      <MemoryRouter>
        <AddIssue />
      </MemoryRouter>
    );
    const submitButton = screen.getByRole('button', { name: 'SUBMIT' });
    expect(submitButton).toBeInTheDocument();
  });
});
