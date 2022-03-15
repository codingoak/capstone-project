import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
  it('renders the loading animation', () => {
    render(<Dashboard isLoading={true} />);
    const loadingAnimation = screen.getByAltText('Loading...');

    expect(loadingAnimation).toBeInTheDocument();
  });

  it('renders the dashboard', () => {
    const savedIssues = [
      { id: 111, title: 'Teststring1', state: 'open', clicked: true },
      { id: 112, title: 'Teststring2', state: 'close', clicked: false },
      { id: 113, title: 'Teststring3', state: 'open', clicked: true },
    ];
    render(
      <MemoryRouter>
        <Dashboard savedIssues={savedIssues} />
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
});
