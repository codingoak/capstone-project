import { render, screen } from '@testing-library/react';
import LoadingAnimation from './LoadingAnimation';

describe('LoadingAnimation', () => {
  it('renders', () => {
    render(<LoadingAnimation />);
    expect(screen.getByAltText('Loading...')).toBeInTheDocument();
  });
});
