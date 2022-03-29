import {render, screen } from '@testing-library/react'
import GitHubRedirectPage from './GitHubRedirectPage'
    
describe('GitHubRedirectPage', () => {
  it('renders', () => {
    render( <GitHubRedirectPage />);
    expect(screen.getByText('GitHubRedirectPage')).toBeInTheDocument();
  })
});
    