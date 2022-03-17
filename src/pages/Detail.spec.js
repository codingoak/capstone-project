import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Detail from './Detail';

describe('Detail', () => {
  const savedIssue = {
    number: 4458,
    id: 1168898651,
    user: {
      login: 'codingoak',
      avatar_url: 'https://source.unsplash.com/random/100×100/?person',
    },
    title: 'This is an issue title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam at lectus urna duis convallis convallis. Vestibulum lectus mauris ultrices eros. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. At urna condimentum mattis pellentesque id nibh. Amet consectetur adipiscing elit duis tristique. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Rutrum tellus pellentesque eu tincidunt tortor. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Non enim praesent elementum facilisis leo vel. At augue eget arcu dictum varius duis. Egestas egestas fringilla phasellus faucibus scelerisque. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Vel turpis nunc eget lorem dolor sed viverra ipsum. Cum sociis natoque penatibus et magnis. Lacus laoreet non curabitur gravida arcu ac tortor dignissim.',
    isPinned: false,
    created_at: '2022-03-14T21:01:17Z',
    updated_at: '2022-03-15T18:11:23Z',
    state: 'open',
    milstone: [],
    html_url: 'https://github.com/reactjs/reactjs.org/pull/4458',
    labels: [{ name: 'beta' }, { name: 'CLA signed' }],
    comments: 2,
    comments_url:
      'https://api.github.com/repos/reactjs/reactjs.org/issues/4458/comments',
  };

  it('renders the number', () => {
    render(
      <MemoryRouter>
        <Detail savedIssue={savedIssue} />
      </MemoryRouter>
    );
    const number = screen.getByText(4458);
    expect(number).toBeInTheDocument();
  });

  it('renders the username', () => {
    render(
      <MemoryRouter>
        <Detail savedIssue={savedIssue} />
      </MemoryRouter>
    );
    const userName = screen.getByText('codingoak');
    expect(userName).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(
      <MemoryRouter>
        <Detail savedIssue={savedIssue} />
      </MemoryRouter>
    );
    const title = screen.getByText('This is an issue title');
    expect(title).toBeInTheDocument();
  });

  it('renders the state', () => {
    render(
      <MemoryRouter>
        <Detail savedIssue={savedIssue} />
      </MemoryRouter>
    );
    const state = screen.getByText('open');
    expect(state).toBeInTheDocument();
  });
});
