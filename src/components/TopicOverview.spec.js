import { render, screen } from '@testing-library/react';
import TopicOverview from './TopicOverview';

describe('TopicOverview', () => {
  it('renders the topic overview', () => {
    render(<TopicOverview />);
    const exclamationMark = screen.getByLabelText(/Exclamation mark/i);
    const title = screen.getByText(/open issues/i);

    expect(title).toBeInTheDocument();
    expect(exclamationMark).toBeInTheDocument();
  });
});
