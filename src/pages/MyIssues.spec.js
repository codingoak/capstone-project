import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import MyIssues from './MyIssues';

describe('MyIssues', () => {
  it('renders the main header', () => {
    render(
      <MemoryRouter>
        <MyIssues />
      </MemoryRouter>
    );
    const mainHeader = screen.getByText(/My Issues/i);

    expect(mainHeader).toBeInTheDocument();
  });

  it('renders the issues header', () => {
    render(
      <MemoryRouter>
        <MyIssues />
      </MemoryRouter>
    );
    const issuesHeaderTitle = screen.getByText('Title');
    const issuesHeaderState = screen.getByText('State');

    expect(issuesHeaderTitle).toBeInTheDocument();
    expect(issuesHeaderState).toBeInTheDocument();
  });
});
