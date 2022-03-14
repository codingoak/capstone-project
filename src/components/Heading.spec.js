import { render, screen } from '@testing-library/react';
import Heading from './Heading';

describe('Heading', () => {
  it('renders the heading with the content "HeaderText', () => {
    render(<Heading children={'HeaderText'} />);
    const heading = screen.getByText('HeaderText');

    expect(heading).toBeInTheDocument();
  });
});
