import { render, screen } from '@testing-library/react';

import HeadingIssues from './HeadingIssues';

describe('HeadingIssues', () => {
  it('renders the heading with the Title and State', () => {
    render(<HeadingIssues />);

    const headerTitle = screen.getByText('Title');
    const headerState = screen.getByText('State');

    expect(headerTitle).toBeInTheDocument();
    expect(headerState).toBeInTheDocument();
  });
});
