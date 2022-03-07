import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
  it('renders', () => {
    render(<Dashboard />);
    expect(screen.getByText('DASHBOARD', /Daniel Eicher/)).toBeInTheDocument();
  });
});
