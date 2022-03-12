import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Issues from './Issues';

describe('Issues', () => {
  it('renders the heading, two issues with buttons', () => {
    render(
      <Issues
        savedIssues={[
          { id: 111, title: 'Teststring1', state: 'open', sPinned: true },
          { id: 112, title: 'Teststring2', state: 'close', sPinned: false },
        ]}
      />
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
      <Issues
        savedIssues={[
          { id: 333, title: 'Teststring3', state: 'open', clicked: true },
        ]}
        togglePin={callback}
      />
    );
    const PinButton = screen.getByRole('button');

    userEvent.click(PinButton);
    expect(callback).toHaveBeenCalled();
  });
});
