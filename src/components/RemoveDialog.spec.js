import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RemoveDialog from './RemoveDialog';

describe('RemoveDialog', () => {
  it('renders two buttons', () => {
    render(
      <MemoryRouter>
        <RemoveDialog />
      </MemoryRouter>
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
});
