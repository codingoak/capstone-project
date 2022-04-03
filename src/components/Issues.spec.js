import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Issues from './Issues';

describe('Issues', () => {
  const issues = [
    { id: 111, title: 'Teststring1', state: 'open', isPinned: true },
    { id: 112, title: 'Teststring2', state: 'close', isPinned: false },
  ];

  it('renders two issues', () => {
    render(
      <MemoryRouter>
        <Issues issues={issues} />
      </MemoryRouter>
    );
    const testIssues = screen.getAllByText(/Teststring/i);

    expect(testIssues).toHaveLength(2);
  });

  it('renders the buttons', () => {
    render(
      <MemoryRouter>
        <Issues issues={issues} />
      </MemoryRouter>
    );
    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(2);
  });

  it('renders the empty pin icon', () => {
    render(
      <MemoryRouter>
        <Issues issues={issues} />
      </MemoryRouter>
    );
    const emptyPin = screen.getByLabelText('Pin empty');

    expect(emptyPin).toBeInTheDocument();
  });
});
