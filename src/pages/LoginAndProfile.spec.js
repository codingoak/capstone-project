import { render, screen } from '@testing-library/react';
import LoginAndProfile from './LoginAndProfile';

describe('LoginAndProfile', () => {
  it('renders', () => {
    render(<LoginAndProfile />);
    expect(screen.getByText('LoginAndProfile')).toBeInTheDocument();
  });
});
