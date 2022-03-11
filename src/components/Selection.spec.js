import { render, screen } from '@testing-library/react';
import Selection from './Selection';

describe('Selection', () => {
  it('renders the select box', () => {
    render(<Selection />);
    expect(screen.getByText('Select...')).toBeInTheDocument();
  });
});
