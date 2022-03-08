import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
  it('renders the Dashboard LoadingState', () => {
    render(<Dashboard loading={true} />);
    expect(screen.getByText('DASHBOARD')).toBeInTheDocument(); // Heading
    expect(screen.getByAltText(/Loading/i)).toBeInTheDocument(); // Animation
    expect(screen.getByText(/Daniel Eicher/)).toBeInTheDocument(); // Footer
  });

  it('renders the Dashboard', () => {
    const issues = [
      { id: 111, title: 'Teststring1', state: 'open' },
      { id: 112, title: 'Teststring2', state: 'open' },
    ];

    render(<Dashboard issues={issues} />);

    expect(screen.getByText('DASHBOARD')).toBeInTheDocument(); // Heading
    expect(
      screen.getByText(/Title/, /State/, /Teststring1/, /Teststring2/)
    ).toBeInTheDocument(); // ListHeading
    // IssueList
    expect(screen.getByText(/Daniel Eicher/)).toBeInTheDocument(); // Footer
  });

  it('renders the Dashboard ErrorState', () => {
    render(<Dashboard error={true} />);
    expect(screen.getByText('DASHBOARD')).toBeInTheDocument(); // Heading
    expect(
      screen.getByText(/Oops, something went wrong./i)
    ).toBeInTheDocument(); // Error text
    expect(screen.getByText(/Daniel Eicher/)).toBeInTheDocument(); // Footer
  });
});
