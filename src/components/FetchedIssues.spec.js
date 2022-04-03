import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import FetchedIssues from './FetchedIssues';

describe('FetchedIssues', () => {
  it('renders the Heading', () => {
    render(
      <MemoryRouter>
        <FetchedIssues />
      </MemoryRouter>
    );
    const headerTitle = screen.getByText('Title');
    const headerState = screen.getByText('State');

    expect(headerTitle).toBeInTheDocument();
    expect(headerState).toBeInTheDocument();
  });
});
