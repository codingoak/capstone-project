import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders', () => {
    render(<Footer />);
    expect(screen.getByText(/Daniel Eicher/)).toBeInTheDocument();
  });
});
