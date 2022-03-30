import { render, screen } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders the logo', () => {
    render(<LoginPage />);
    const logoTextOne = screen.getByRole('heading', { name: 'MY' });
    const logoTextTwo = screen.getByRole('heading', { name: 'TRACKER' });
    const logo = screen.getByRole('img');

    expect(logoTextOne).toBeInTheDocument();
    expect(logoTextTwo).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  });

  it('renders the inputfield', () => {
    render(<LoginPage />);
    const inputField = screen.getByRole('textbox');

    expect(inputField).toBeInTheDocument();
  });

  it('renders the login button', () => {
    render(<LoginPage />);
    const loginButton = screen.getByRole('button');
    expect(loginButton).toBeInTheDocument();
  });
});
