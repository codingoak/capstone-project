import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Navigation from './Navigation';

describe('Navigation', () => {
  it('renders four links', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(4);
  });

  it('renders the link with the aria-label Home', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    const linkGithub = screen.getByRole('link', { name: 'GitHub issues' });

    expect(linkGithub).toBeInTheDocument();
  });

  it('renders the link with the aria-label Create Issue', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    const linkCreateIssue = screen.getByRole('link', { name: 'Create Issue' });

    expect(linkCreateIssue).toBeInTheDocument();
  });

  it('renders the link with the aria-label My Issues', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const linkMyIssues = screen.getByRole('link', { name: 'My Issues' });

    expect(linkMyIssues).toBeInTheDocument();
  });
});
