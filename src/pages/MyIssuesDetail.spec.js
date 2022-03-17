import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MyIssuesDetail from './MyIssuesDetail';

describe('MyIssuesDetail', () => {
  const myIssue = {
    id: 'WT02NQc8V5tMKCcxnw7sj',
    user: 'codingoak',
    title: 'This is an issue title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam at lectus urna duis convallis convallis. Vestibulum lectus mauris ultrices eros. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. At urna condimentum mattis pellentesque id nibh. Amet consectetur adipiscing elit duis tristique. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Rutrum tellus pellentesque eu tincidunt tortor. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Non enim praesent elementum facilisis leo vel. At augue eget arcu dictum varius duis. Egestas egestas fringilla phasellus faucibus scelerisque. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Vel turpis nunc eget lorem dolor sed viverra ipsum. Cum sociis natoque penatibus et magnis. Lacus laoreet non curabitur gravida arcu ac tortor dignissim.',
    isPinned: false,
    created_at: '2022-03-14T21:01:17Z',
    state: 'open',
    milstone: [],
    labels: 'beta, CLA signed',
  };

  it('renders the username', () => {
    render(
      <MemoryRouter>
        <MyIssuesDetail myIssue={myIssue} />
      </MemoryRouter>
    );
    const userName = screen.getByText('codingoak');
    expect(userName).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(
      <MemoryRouter>
        <MyIssuesDetail myIssue={myIssue} />
      </MemoryRouter>
    );
    const title = screen.getByText('This is an issue title');
    expect(title).toBeInTheDocument();
  });

  it('renders the state', () => {
    render(
      <MemoryRouter>
        <MyIssuesDetail myIssue={myIssue} />
      </MemoryRouter>
    );
    const state = screen.getByText('open');
    expect(state).toBeInTheDocument();
  });
});
