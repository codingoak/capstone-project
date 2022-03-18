import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import FetchedIssues from './FetchedIssues';

describe('FetchedIssues', () => {
  const savedIssues = [
    { id: 111, title: 'Teststring1', state: 'open', isPinned: true },
    { id: 112, title: 'Teststring2', state: 'close', isPinned: false },
  ];

  it('renders the heading', () => {
    render(
      <MemoryRouter>
        <FetchedIssues savedIssues={savedIssues} />
      </MemoryRouter>
    );
    const heading = screen.getByText('Title');
    expect(heading).toBeInTheDocument();
  });

  it('renders issue one', () => {
    render(
      <MemoryRouter>
        <FetchedIssues savedIssues={savedIssues} />
      </MemoryRouter>
    );
    const issueOne = screen.getByText('Teststring1');
    expect(issueOne).toBeInTheDocument();
  });

  it('renders issues two', () => {
    render(
      <MemoryRouter>
        <FetchedIssues savedIssues={savedIssues} />
      </MemoryRouter>
    );
    const issueTwo = screen.getByText('close');
    expect(issueTwo).toBeInTheDocument();
  });

  it('renders the buttons', () => {
    render(
      <MemoryRouter>
        <FetchedIssues savedIssues={savedIssues} />
      </MemoryRouter>
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('calls callback from PinButton', () => {
    const callback = jest.fn();
    render(
      <MemoryRouter>
        <FetchedIssues
          savedIssues={[
            { id: 333, title: 'Teststring3', state: 'open', clicked: true },
          ]}
          togglePin={callback}
        />
      </MemoryRouter>
    );
    const PinButton = screen.getByRole('button');

    userEvent.click(PinButton);
    expect(callback).toHaveBeenCalled();
  });
});
