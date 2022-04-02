import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import BackArrow from './BackArrow';

describe('BackArrow', () => {
  it('renders the navlink with the title', () => {
    render(
      <MemoryRouter>
        <BackArrow to="/dashboard" />
      </MemoryRouter>
    );
    const title = screen.getByTitle('Back');

    expect(title).toBeInTheDocument();
  });
});
