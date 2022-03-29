import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
    render(<ProfilePage userdata={userdata} />);

    const header = screen.getByText(/Profile/i);
    const location = screen.getByText(/Location:/i);
    const bio = screen.getByText(/Bio:/i);
    const repos = screen.getByText(/Repos:/i);
    const followers = screen.getByText(/Followers:/i);
    const following = screen.getByText(/Following:/i);

    expect(header).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(bio).toBeInTheDocument();
    expect(repos).toBeInTheDocument();
    expect(followers).toBeInTheDocument();
    expect(following).toBeInTheDocument();
  });

  it('renders the logout button', () => {
    render(<ProfilePage userdata={userdata} />);
    const logoutButton = screen.getByRole('button');
    expect(logoutButton).toBeInTheDocument();
  });
});
