import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('calls togglePin from PinButton', () => {
    const togglePin = jest.fn();
    render(
      <MemoryRouter>
        <Issues
          issues={[
            { id: 333, title: 'Teststring3', state: 'open', clicked: true },
          ]}
          togglePin={togglePin}
        />
      </MemoryRouter>
    );
    const PinButton = screen.getByRole('button');
    userEvent.click(PinButton);

    expect(togglePin).toHaveBeenCalled();
  });
});
