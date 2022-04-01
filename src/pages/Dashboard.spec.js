import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Dashboard from './Dashboard';

describe('Dashboard', () => {
  global.scrollTo = jest.fn();

  it('renders the dashboard', () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /Dashboard/i });
    const placeholder = screen.getByText(/Select a repository/i);
    const emptyMessage = screen.getByText(
      'Select an option from the box above.'
    );

    expect(header).toBeInTheDocument();
    expect(placeholder).toBeInTheDocument();
    expect(emptyMessage).toBeInTheDocument();
  });

  // it('renders the loading animation', () => {
  //   render(
  //     <MemoryRouter>
  //       <Dashboard isLoading={true} />
  //     </MemoryRouter>
  //   );
  //   const loadingAnimation = screen.getByTitle('Loading...');
  //   expect(loadingAnimation).toBeInTheDocument();
  // });

  // it('renders the dashboard error message', () => {
  //   render(
  //     <MemoryRouter>
  //       <Dashboard hasError={true} />
  //     </MemoryRouter>
  //   );
  //   const errorState = screen.getByText(/Oops, something went wrong/i);
  //   expect(errorState).toBeInTheDocument();
  // });

  // it('renders the button', () => {
  //   render(
  //     <MemoryRouter>
  //       <Dashboard hasError={true} />
  //     </MemoryRouter>
  //   );
  //   const button = screen.getByRole('button');
  //   expect(button).toBeInTheDocument();
  // });
});
