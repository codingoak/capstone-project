import { render, screen } from '@testing-library/react';
import Issues from './Issues';

describe('Issues', () => {
  it('renders', () => {
    render(
      <Issues
        issues={[
          { id: 111, title: 'Teststring1', state: 'open' },
          { id: 112, title: 'Teststring2', state: 'open' },
        ]}
      />
    );

    expect(
      screen.getByText(/Teststring1/, /Testring2/, /111/, /112/, /open/)
    ).toBeInTheDocument();
  });
});
