import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import FetchedIssues from './FetchedIssues';

describe('FetchedIssues', () => {
  it('renders the heading, two issues with buttons', () => {
    render(
      <MemoryRouter>
        <FetchedIssues
          savedIssues={[
            { id: 111, title: 'Teststring1', state: 'open', isPinned: true },
            { id: 112, title: 'Teststring2', state: 'close', isPinned: false },
          ]}
        />
      </MemoryRouter>
    );
    const heading = screen.getByText('Title');
    const issueOne = screen.getByText('Teststring1');
    const issueTwo = screen.getByText('close');
    const button = screen.getAllByRole('button');

    expect(heading).toBeInTheDocument();
    expect(issueOne).toBeInTheDocument();
    expect(issueTwo).toBeInTheDocument();
    expect(button).toHaveLength(2);
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
