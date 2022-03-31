import { render, screen } from '@testing-library/react';
import TopicOverview from './TopicOverview';

describe('TopicOverview', () => {
  const selectedProject =
    'https://api.github.com/repos/reactjs/reactjs.org/issues';

  it('renders the topic overview', () => {
    render(<TopicOverview selectedProject={selectedProject} />);

    const exclamationMark = screen.getByLabelText(/Exclamation mark/i);
    const title = screen.getByText(/open issues/i);

    expect(title).toBeInTheDocument();
    expect(exclamationMark).toBeInTheDocument();
  });
});
