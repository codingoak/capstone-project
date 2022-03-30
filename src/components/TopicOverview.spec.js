import {render, screen } from '@testing-library/react'
import TopicOverview from './TopicOverview'
    
describe('TopicOverview', () => {
  it('renders', () => {
    render( <TopicOverview />);
    expect(screen.getByText('TopicOverview')).toBeInTheDocument();
  })
});
    