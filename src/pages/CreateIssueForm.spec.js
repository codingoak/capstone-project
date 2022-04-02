import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import CreateIssueForm from './CreateIssueForm';

describe('CreateIssueForm', () => {
  const username = 'codingoak';

  it('renders the five textfields', () => {
    render(
      <MemoryRouter>
        <CreateIssueForm username={username} />
      </MemoryRouter>
    );
    const textFields = screen.getAllByRole('textbox');

    expect(textFields).toHaveLength(5);
  });

  it('renders the button', () => {
    render(
      <MemoryRouter>
        <CreateIssueForm username={username} />
      </MemoryRouter>
    );
    const submitButton = screen.getByRole('button', { name: 'SUBMIT' });

    expect(submitButton).toBeInTheDocument();
  });
});
