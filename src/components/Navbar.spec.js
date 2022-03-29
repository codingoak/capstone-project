import {render, screen } from '@testing-library/react'
import Navbar from './Navbar'
    
describe('Navbar', () => {
  it('renders', () => {
    render( <Navbar />);
    expect(screen.getByText('Navbar')).toBeInTheDocument();
  })
});
    