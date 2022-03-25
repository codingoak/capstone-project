import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BackArrow from './BackArrow';

describe('BackArrow', () => {
  it('renders the navlink with the title', () => {
    render(
      <MemoryRouter>
        <BackArrow to="/" />
      </MemoryRouter>
    );
    expect(screen.getByTitle('Back')).toBeInTheDocument();
  });
});
