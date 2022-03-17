import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import MyIssues from './MyIssues';

describe('MyIssues', () => {
  const myIssues = [
    {
      id: 'WT02NQc8V5tMKCcxnw7sj',
      user: 'codingoak',
      title: 'This is an issue title',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam at lectus urna duis convallis convallis. Vestibulum lectus mauris ultrices eros. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. At urna condimentum mattis pellentesque id nibh. Amet consectetur adipiscing elit duis tristique. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Rutrum tellus pellentesque eu tincidunt tortor. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Non enim praesent elementum facilisis leo vel. At augue eget arcu dictum varius duis. Egestas egestas fringilla phasellus faucibus scelerisque. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Vel turpis nunc eget lorem dolor sed viverra ipsum. Cum sociis natoque penatibus et magnis. Lacus laoreet non curabitur gravida arcu ac tortor dignissim.',
      isPinned: false,
      created_at: '2022-03-14T21:01:17Z',
      state: 'open',
      milstone: [],
      labels: 'ipsum, lorem',
    },
    {
      id: 'uYt2NQ7hY5tMKCcxnwfiU',
      user: 'John Doe',
      title: 'Another title',
      body: 'Some another dummy text',
      isPinned: false,
      created_at: '2021-04-21T11:11:30Z',
      state: 'open',
      milstone: [],
      labels: 'dummy, another',
    },
  ];

  it('renders the heading', () => {
    render(
      <MemoryRouter>
        <MyIssues myIssues={myIssues} />
      </MemoryRouter>
    );
    const heading = screen.getByText('Title');
    expect(heading).toBeInTheDocument();
  });

  it('renders issue one', () => {
    render(
      <MemoryRouter>
        <MyIssues myIssues={myIssues} />
      </MemoryRouter>
    );
    const issueOne = screen.getByText('This is an issue title');
    expect(issueOne).toBeInTheDocument();
  });

  it('renders issue two', () => {
    render(
      <MemoryRouter>
        <MyIssues myIssues={myIssues} />
      </MemoryRouter>
    );
    const issueTwo = screen.getByText('Another title');
    expect(issueTwo).toBeInTheDocument();
  });

  it('renders the buttons', () => {
    render(
      <MemoryRouter>
        <MyIssues myIssues={myIssues} />
      </MemoryRouter>
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('calls callback from PinButton', () => {
    const callback = jest.fn();
    render(
      <MemoryRouter>
        <MyIssues
          myIssues={[
            { id: 333, title: 'Teststring3', state: 'open', clicked: true },
          ]}
          toggleMyPin={callback}
        />
      </MemoryRouter>
    );
    const PinButton = screen.getByRole('button');
    userEvent.click(PinButton);
    expect(callback).toHaveBeenCalled();
  });
});
