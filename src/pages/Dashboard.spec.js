import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Dashboard from './Dashboard';

describe('Dashboard', () => {
  it('renders the loading animation', () => {
    render(
      <MemoryRouter>
        <Dashboard selectedProject={false} isLoading={true} />
      </MemoryRouter>
    );
    const loadingAnimation = screen.getByTitle('Loading...');
    expect(loadingAnimation).toBeInTheDocument();
  });

  it('renders the dashboard', () => {
    const comparedIssues = [
      { id: 111, title: 'Teststring1', state: 'open', clicked: true },
      { id: 112, title: 'Teststring2', state: 'close', clicked: false },
      { id: 113, title: 'Teststring3', state: 'open', clicked: true },
    ];
    render(
      <MemoryRouter>
        <Dashboard comparedIssues={comparedIssues} />
      </MemoryRouter>
    );
    const cards = screen.getAllByText(/Teststring/);
    expect(cards).toHaveLength(3);
  });

  it('renders the dashboard error message', () => {
    render(
      <MemoryRouter>
        <Dashboard hasError={true} />
      </MemoryRouter>
    );
    const errorState = screen.getByText(/Oops, something went wrong/i);
    expect(errorState).toBeInTheDocument();
  });

  it('renders the button', () => {
    render(
      <MemoryRouter>
        <Dashboard hasError={true} />
      </MemoryRouter>
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('renders the empty state message', () => {
    render(
      <MemoryRouter>
        <Dashboard selectedProject={false} />
      </MemoryRouter>
    );
    const emptyMessage = screen.getByText(/Select an option/);
    expect(emptyMessage).toBeInTheDocument();
  });
});
