import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import FetchedIssues from './FetchedIssues';

describe('FetchedIssues', () => {
  const comparedIssues = [
    { id: 111, title: 'Teststring1', state: 'open', isPinned: true },
    { id: 112, title: 'Teststring2', state: 'close', isPinned: false },
  ];

  it('renders the Heading', () => {
    render(
      <MemoryRouter>
        <FetchedIssues comparedIssues={comparedIssues} />
      </MemoryRouter>
    );
    const headerTitle = screen.getByText('Title');
    const headerState = screen.getByText('State');

    expect(headerTitle).toBeInTheDocument();
    expect(headerState).toBeInTheDocument();
  });
});
