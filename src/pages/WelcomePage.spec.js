import {render, screen } from '@testing-library/react'
import WelcomePage from './WelcomePage'
    
describe('WelcomePage', () => {
  it('renders', () => {
    render( <WelcomePage />);
    expect(screen.getByText('WelcomePage')).toBeInTheDocument();
  })
});
    