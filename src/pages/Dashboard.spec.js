import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Dashboard from './Dashboard';

describe('Dashboard', () => {
  global.scrollTo = jest.fn();

  it('renders the header', () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );
    const header = screen.getByRole('heading', { name: /Dashboard/i });

    expect(header).toBeInTheDocument();
  });

  it('renders the placeholder', () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );
    const placeholder = screen.getByText(/Select a repository/i);
    expect(placeholder).toBeInTheDocument();
    const emptyMessage = screen.getByText(
      'Select an option from the box above.'
    );

    expect(emptyMessage).toBeInTheDocument();
  });

  it('renders the empty message', () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );
    const emptyMessage = screen.getByText(
      'Select an option from the box above.'
    );

    expect(emptyMessage).toBeInTheDocument();
  });
});
