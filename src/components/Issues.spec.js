import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Issues from './Issues';

describe('Issues', () => {
  it('renders the heading, two issues with buttons', () => {
    render(
      <Issues
        issues={[
          { id: 111, title: 'Teststring1', state: 'open' },
          { id: 112, title: 'Teststring2', state: 'close' },
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

  it('calls callback with page name', () => {
    const callback = jest.fn();
    render(
      <Issues
        issues={[{ id: 333, title: 'Teststring3', state: 'open' }]}
        togglePin={callback}
      />
    );
    const button = screen.getByRole('button');

    userEvent.click(button);
    expect(callback).toHaveBeenCalled();
  });
});
