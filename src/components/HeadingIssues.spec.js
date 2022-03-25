import { render, screen } from '@testing-library/react';

import HeadingIssues from './HeadingIssues';

describe('HeadingIssues', () => {
  it('renders the heading with the Title and State', () => {
    render(<HeadingIssues />);
    expect(screen.getByText(/Title/i)).toBeInTheDocument();
    expect(screen.getByText(/State/i)).toBeInTheDocument();
  });
});
