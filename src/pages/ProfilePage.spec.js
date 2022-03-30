import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ProfilePage from './ProfilePage';

describe('ProfilePage', () => {
  const userdata = {
    avatar_url: 'https://api.github.com/users/codingoak',
    location: 'Valencia',
    bio: 'Lorem ipsum...',
    public_repos: 13,
    followers: 13,
    following: 22,
  };

  it('renders the page', () => {
    render(
      <MemoryRouter>
        <ProfilePage userdata={userdata} />
      </MemoryRouter>
    );

    const header = screen.getByText(/Profile/i);
    const bio = screen.getByText(/Bio:/i);
    const repos = screen.getByText(/Repos:/i);
    const followers = screen.getByText(/Followers:/i);
    const following = screen.getByText(/Following:/i);

    expect(header).toBeInTheDocument();
    expect(bio).toBeInTheDocument();
    expect(repos).toBeInTheDocument();
    expect(followers).toBeInTheDocument();
    expect(following).toBeInTheDocument();
  });

  it('renders the logout button', () => {
    render(
      <MemoryRouter>
        <ProfilePage userdata={userdata} />
      </MemoryRouter>
    );
    const logoutButton = screen.getByRole('button', { name: /Logout/i });
    expect(logoutButton).toBeInTheDocument();
  });

  it('renders the login first link', () => {
    render(
      <MemoryRouter>
        <ProfilePage userdata={false} />
      </MemoryRouter>
    );
    const loginFirstButton = screen.getByRole('link', { name: /Login first/i });
    expect(loginFirstButton).toBeInTheDocument();
  });

  it('renders the login first text', () => {
    render(
      <MemoryRouter>
        <ProfilePage userdata={false} />
      </MemoryRouter>
    );
    const loginFirstText = screen.getByText(/No profile/i);
    expect(loginFirstText).toBeInTheDocument();
  });
});
