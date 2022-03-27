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
    const heading = screen.getByText('Title');
    expect(heading).toBeInTheDocument();
  });

  it('renders an issue', () => {
    render(
      <MemoryRouter>
        <FetchedIssues comparedIssues={comparedIssues} />
      </MemoryRouter>
    );
    const issue = screen.getByText(/Teststring2/);
    expect(issue).toBeInTheDocument();
  });
});
