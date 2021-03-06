import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import CreateIssueForm from './CreateIssueForm';

describe('CreateIssueForm', () => {
  it('renders the five textfields', () => {
    render(
      <MemoryRouter>
        <CreateIssueForm />
      </MemoryRouter>
    );
    const textFields = screen.getAllByRole('textbox');

    expect(textFields).toHaveLength(5);
  });

  it('renders the button', () => {
    render(
      <MemoryRouter>
        <CreateIssueForm />
      </MemoryRouter>
    );
    const submitButton = screen.getByRole('button', { name: 'SUBMIT' });

    expect(submitButton).toBeInTheDocument();
  });
});
