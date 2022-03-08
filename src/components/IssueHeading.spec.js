import { render, screen } from '@testing-library/react';
import IssueHeading from './IssueHeading';

describe('IssueHeading', () => {
  it('renders', () => {
    render(<IssueHeading />);
    expect(screen.getByText('Title', 'State')).toBeInTheDocument();
  });
});
