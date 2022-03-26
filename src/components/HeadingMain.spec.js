import { render, screen } from '@testing-library/react';

import HeadingMain from './HeadingMain';

describe('HeadingMain', () => {
  it('renders the heading with the title "HeadingMain"', () => {
    render(<HeadingMain title={'HeadingMain'} />);
    const heading = screen.getByText('HeadingMain');
    expect(heading).toBeInTheDocument();
  });
});
