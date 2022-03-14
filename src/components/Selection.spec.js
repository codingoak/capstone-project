import { render, screen } from '@testing-library/react';

import Selection from './Selection';

describe('Selection', () => {
  it('renders the select box', () => {
    render(<Selection />);
    const selectText = screen.getByText('Select...');

    expect(selectText).toBeInTheDocument();
  });
});
