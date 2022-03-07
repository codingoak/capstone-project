import { render, screen } from '@testing-library/react';
import Heading from './Heading';

describe('Heading', () => {
  it('renders', () => {
    render(<Heading />);
    expect(screen.getByText('DASHBOARD')).toBeInTheDocument();
  });
});
