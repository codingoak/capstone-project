import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Selection from './Selection';

describe('Selection', () => {
  it('renders the select box', () => {
    render(<Selection />);
    const selectText = screen.getByText('Select...');

    expect(selectText).toBeInTheDocument();
  });
});
