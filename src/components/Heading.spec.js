import { render, screen } from '@testing-library/react';
import Heading from './Heading';

describe('Heading', () => {
  it('renders the heading with the title "HeaderText"', () => {
    render(<Heading title={'HeaderText'} />);
    const heading = screen.getByText('HeaderText');
    expect(heading).toBeInTheDocument();
  });
});
