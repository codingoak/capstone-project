import {render, screen } from '@testing-library/react'
import MyIssues from './MyIssues'
    
describe('MyIssues', () => {
  it('renders', () => {
    render( <MyIssues />);
    expect(screen.getByText('MyIssues')).toBeInTheDocument();
  })
});
    