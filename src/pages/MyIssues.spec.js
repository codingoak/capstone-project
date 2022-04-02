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

  it('renders the emptu message', () => {
    render(
      <MemoryRouter>
        <MyIssues />
      </MemoryRouter>
    );
    const emptyMessage = screen.getByText(
      /Create an issue with the create form/i
    );

    expect(emptyMessage).toBeInTheDocument();
  });
});
