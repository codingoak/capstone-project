import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ProfilePage from './ProfilePage';

describe('ProfilePage', () => {
  it('renders the profile header', () => {
    render(
      <MemoryRouter>
        <ProfilePage />
      </MemoryRouter>
    );
    const header = screen.getByRole('heading', { name: /Profile/i });

    expect(header).toBeInTheDocument();
  });

  it('renders the login first link', () => {
    render(
      <MemoryRouter>
        <ProfilePage />
      </MemoryRouter>
    );
    const loginFirstButton = screen.getByRole('link', { name: /Login first/i });

    expect(loginFirstButton).toBeInTheDocument();
  });

  it('renders the login first text', () => {
    render(
      <MemoryRouter>
        <ProfilePage />
      </MemoryRouter>
    );
    const loginFirstText = screen.getByText(/No profile/i);

    expect(loginFirstText).toBeInTheDocument();
  });
});
