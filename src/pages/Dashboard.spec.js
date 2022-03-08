import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
  it('renders the Dashboard LoadingState', () => {
    render(<Dashboard loading={true} />);
    expect(screen.getByAltText(/Loading/i)).toBeInTheDocument(); // Animation
  });

  it('renders the Dashboard', () => {
    const issues = [
      { id: 111, title: 'Teststring1', state: 'open' },
      { id: 112, title: 'Teststring2', state: 'open' },
    ];

    render(<Dashboard issues={issues} />);

    expect(
      screen.getByText(/Title/, /State/, /Teststring1/, /Teststring2/)
    ).toBeInTheDocument(); // IssueHeading
    // IssueList
  });

  it('renders the Dashboard ErrorState', () => {
    render(<Dashboard error={true} />);
    expect(
      screen.getByText(/Oops, something went wrong./i)
    ).toBeInTheDocument(); // Error text
  });
});
