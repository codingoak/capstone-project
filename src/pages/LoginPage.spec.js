import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders the logo', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    const logoTextOne = screen.getByRole('heading', { name: 'MY' });
    const logoTextTwo = screen.getByRole('heading', { name: 'TRACKER' });
    const logo = screen.getByRole('img');

    expect(logoTextOne).toBeInTheDocument();
    expect(logoTextTwo).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  });

  it('renders the inputfield', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    const inputField = screen.getByRole('textbox');

    expect(inputField).toBeInTheDocument();
  });

  it('renders the login button', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    const loginButton = screen.getByRole('button');

    expect(loginButton).toBeInTheDocument();
  });
});
