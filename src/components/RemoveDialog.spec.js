import { render, screen } from '@testing-library/react';
import RemoveDialog from './RemoveDialog';

describe('RemoveDialog', () => {
  it('renders two buttons', () => {
    render(<RemoveDialog />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
});
