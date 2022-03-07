import { render, screen } from '@testing-library/react';
import ListHeading from './ListHeading';

describe('ListHeading', () => {
  it('renders', () => {
    render(<ListHeading />);
    expect(screen.getByText('Title', 'State')).toBeInTheDocument();
  });
});
